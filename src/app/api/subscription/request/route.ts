import { NextResponse } from 'next/server';
import { prisma } from '../../../../lib/prisma';
import { createLocalPaymentRequest, findLocalPaymentByTransaction } from '../../../../lib/localStore';
import { sendWhatsApp } from '../../../../lib/whatsapp';
import { notifyAdminNewOrder } from '../../../../lib/email';

const PLAN_LABELS: Record<string, string> = {
    spoken: 'Spoken English (৳199)',
    ielts_spoken: 'IELTS + Spoken English (৳499)',
    unlimited_chat: 'Unlimited AI Chat (৳799)',
};

type Body = {
    email?: string;
    password?: string;
    transactionId?: string;
    amount?: number;
    plan?: string;
};

export async function POST(request: Request) {
    try {
        const body = (await request.json()) as Body;
        const email = body.email?.trim().toLowerCase();
        const password = body.password?.trim();
        const transactionId = body.transactionId?.trim().toUpperCase();
        const amount = Number(body.amount || 0);
        const plan = body.plan || 'spoken';

        if (!email || !transactionId || !amount) {
            return NextResponse.json({ error: 'email, transactionId, amount required.' }, { status: 400 });
        }

        try {
            const existing = await prisma.paymentRequest.findUnique({ where: { transactionId } });
            
            // Check if user already exists
            const user = await prisma.user.findUnique({ where: { email } });
            if (user) {
                const dbPassword = user.password || '123456';
                if (password && password !== dbPassword) {
                    return NextResponse.json({ error: 'Incorrect password for this email account.' }, { status: 401 });
                }
            }

            if (existing) {
                if (existing.email === 'SMS_WEBHOOK_RECEIVED' && existing.status === 'APPROVED') {
                    // Instantly approve since the SMS webhook already received the payment!
                    await prisma.paymentRequest.update({
                        where: { transactionId },
                        data: { email, plan }
                    });

                    // Activate User Subscription
                    await prisma.user.upsert({
                        where: { email },
                        update: {
                            password: password || undefined,
                            isSubscribed: true,
                            plan,
                            subscriptionEnd: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
                        },
                        create: {
                            email,
                            password: password || '123456',
                            isSubscribed: true,
                            plan,
                            subscriptionEnd: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
                        }
                    });

                    return NextResponse.json({ success: true, status: 'APPROVED', instantActivation: true });
                }
                return NextResponse.json({ error: 'Transaction ID already submitted.' }, { status: 409 });
            }

            // Create account immediately in database (isSubscribed will be set to true by Admin or SMS webhook later)
            if (!user) {
                await prisma.user.create({
                    data: {
                        email,
                        password: password || '123456',
                        isSubscribed: false,
                        plan
                    }
                });
            }

            const row = await prisma.paymentRequest.create({
                data: { email, transactionId, amount, plan, status: 'PENDING' },
            });

            // Notify admin via WhatsApp and Email
            await sendWhatsApp(
`🔔 নতুন Order!

📧 Email: ${email}
📦 Plan: ${PLAN_LABELS[plan] || plan}
💰 Amount: ৳${amount}
🧾 TxID: ${transactionId}

Approve: ${process.env.NEXT_PUBLIC_APP_URL || 'https://iltes.vercel.app'}/ai-26/orders`
            );

            await notifyAdminNewOrder({
                email,
                plan: PLAN_LABELS[plan] || plan,
                amount,
                transactionId,
            });

            return NextResponse.json({ success: true, id: row.id, status: row.status, source: 'database' });
        } catch {
            const existing = await findLocalPaymentByTransaction(transactionId);
            if (existing) return NextResponse.json({ error: 'Transaction ID already submitted.' }, { status: 409 });

            const row = await createLocalPaymentRequest({ email, transactionId, amount });
            if (!row) return NextResponse.json({ error: 'Transaction ID already submitted.' }, { status: 409 });
            return NextResponse.json({ success: true, id: row.id, status: row.status, source: 'local' });
        }
    } catch {
        return NextResponse.json({ error: 'Could not create request.' }, { status: 500 });
    }
}
