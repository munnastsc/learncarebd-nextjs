import { NextResponse } from 'next/server';
import { prisma } from '../../../../lib/prisma';
import { cookies } from 'next/headers';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const cookieStore = await cookies();
    const sessionEmail = cookieStore.get('student_session')?.value;
    const email = (searchParams.get('email') || sessionEmail)?.trim().toLowerCase();

    if (!email) return NextResponse.json({ error: 'Email required.' }, { status: 400 });

    try {
        const user = await prisma.user.findUnique({
            where: { email },
            select: { isSubscribed: true, plan: true, subscriptionEnd: true }
        });

        const lastRequest = await prisma.paymentRequest.findFirst({
            where: { email },
            orderBy: { createdAt: 'desc' },
            select: { status: true, plan: true, amount: true },
        });

        if (!user) {
            return NextResponse.json({ found: false });
        }

        const hasExpired = user.subscriptionEnd ? new Date() > new Date(user.subscriptionEnd) : true;

        return NextResponse.json({
            found: true,
            isSubscribed: user.isSubscribed,
            plan: user.plan,
            subscriptionEnd: user.subscriptionEnd,
            hasExpired: user.isSubscribed ? hasExpired : true,
            paymentStatus: lastRequest?.status || null
        });
    } catch {
        return NextResponse.json({ error: 'Error checking subscription status.' }, { status: 500 });
    }
}
