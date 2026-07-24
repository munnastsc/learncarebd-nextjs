import { NextResponse } from 'next/server';
import { prisma } from '../../../../lib/prisma';
import { listLocalPaymentRequests, updateLocalPaymentStatus } from '../../../../lib/localStore';

type PatchBody = {
    id?: string;
    status?: 'PENDING' | 'APPROVED' | 'REJECTED';
};

export async function GET() {
    try {
        const items = await prisma.paymentRequest.findMany({
            orderBy: { createdAt: 'desc' },
        });
        return NextResponse.json({ items, source: 'database' });
    } catch {
        const items = await listLocalPaymentRequests();
        return NextResponse.json({ items, source: 'local' });
    }
}

export async function PATCH(request: Request) {
    try {
        const body = (await request.json()) as PatchBody;
        if (!body.id || !body.status) {
            return NextResponse.json({ error: 'id and status are required.' }, { status: 400 });
        }

        try {
            // Find the request details first
            const req = await prisma.paymentRequest.findUnique({
                where: { id: body.id }
            });

            if (!req) {
                return NextResponse.json({ error: 'Request not found.' }, { status: 404 });
            }

            const updated = await prisma.paymentRequest.update({
                where: { id: body.id },
                data: { status: body.status },
            });

            // If approved, update/create the user's subscription
            if (body.status === 'APPROVED') {
                const plan = req.plan || 'spoken';
                await prisma.user.upsert({
                    where: { email: req.email },
                    update: {
                        isSubscribed: true,
                        plan,
                        subscriptionEnd: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) // 1 month
                    },
                    create: {
                        email: req.email,
                        password: '123456',
                        isSubscribed: true,
                        plan,
                        subscriptionEnd: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
                    }
                });
            } else if (body.status === 'REJECTED' || body.status === 'PENDING') {
                // If rejected, remove subscription access
                const userExists = await prisma.user.findUnique({ where: { email: req.email } });
                if (userExists) {
                    await prisma.user.update({
                        where: { email: req.email },
                        data: {
                            isSubscribed: false,
                            subscriptionEnd: null
                        }
                    });
                }
            }

            return NextResponse.json({ success: true, item: updated, source: 'database' });
        } catch {
            const updated = await updateLocalPaymentStatus(body.id, body.status);
            if (!updated) return NextResponse.json({ error: 'Request not found.' }, { status: 404 });
            return NextResponse.json({ success: true, item: updated, source: 'local' });
        }
    } catch {
        return NextResponse.json({ error: 'Update failed.' }, { status: 500 });
    }
}
