import { NextResponse } from 'next/server';
import { prisma } from '../../../lib/prisma';

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
            }
        });
        return NextResponse.json(order);
    } catch (error) {
        console.error('Error creating order:', error);
        return NextResponse.json({ error: 'Failed to create order' }, { status: 500 });
    }
}
