import { NextResponse } from 'next/server';
import { prisma } from '../../../lib/prisma';
import { sendWhatsApp } from '../../../lib/whatsapp';
import { notifyAdminNewBookOrder } from '../../../lib/email';

export async function GET() {
    try {
        const orders = await prisma.bookOrder.findMany({
            include: { book: true },
            orderBy: { createdAt: 'desc' }
        });
        return NextResponse.json(orders);
    } catch (error) {
        console.error('Error fetching orders:', error);
        return NextResponse.json({ error: 'Failed to fetch orders' }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const data = await req.json();
        const order = await prisma.bookOrder.create({
            data: {
                bookId: data.bookId,
                customerName: data.customerName,
                phone: data.phone,
                address: data.address,
                quantity: data.quantity || 1,
                totalAmount: data.totalAmount,
            },
            include: { book: true }
        });

        const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://iltes.vercel.app';
        const bookTitle = order.book?.title || 'Book ID: ' + data.bookId;

        // 1. Send WhatsApp Notification
        await sendWhatsApp(
`📚 নতুন বই Order!

👤 ক্রেতা: ${data.customerName}
📞 ফোন: ${data.phone}
🏠 ঠিকানা: ${data.address}
📖 বই: ${bookTitle} (x${data.quantity || 1})
💰 মোট: ৳${data.totalAmount}

অর্ডার দেখুন: ${appUrl}/ai-26/store/orders`
        );

        // 2. Send Email Notification
        await notifyAdminNewBookOrder({
            customerName: data.customerName,
            phone: data.phone,
            address: data.address,
            bookTitle,
            quantity: data.quantity || 1,
            totalAmount: data.totalAmount,
        });

        return NextResponse.json(order);
    } catch (error) {
        console.error('Error creating order:', error);
        return NextResponse.json({ error: 'Failed to create order' }, { status: 500 });
    }
}
