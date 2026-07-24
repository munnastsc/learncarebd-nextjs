import { NextResponse } from 'next/server';
import { prisma } from '../../../lib/prisma';

export async function GET() {
    try {
        // By default, if no menu links exist, seed the initial ones
        let links = await prisma.menuLink.findMany({
            orderBy: { order: 'asc' }
        });

        if (links.length === 0) {
            // Seed default links
            await prisma.menuLink.createMany({
                data: [
                    { label: 'Our Services', url: '#services', order: 0 },
                    { label: 'Our Books', url: '#books', order: 1 }
                ]
            });
            links = await prisma.menuLink.findMany({
                orderBy: { order: 'asc' }
            });
        }

        return NextResponse.json(links);
    } catch (e: any) {
        return NextResponse.json({ error: e.message }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const { label, url, order } = await req.json();
        if (!label || !url) {
            return NextResponse.json({ error: 'Label and URL are required' }, { status: 400 });
        }
        const link = await prisma.menuLink.create({
            data: { label, url, order: Number(order) || 0 }
        });
        return NextResponse.json(link);
    } catch (e: any) {
        return NextResponse.json({ error: e.message }, { status: 500 });
    }
}

export async function PUT(req: Request) {
    try {
        const { id, label, url, order } = await req.json();
        const link = await prisma.menuLink.update({
            where: { id },
            data: { label, url, order: Number(order) || 0 }
        });
        return NextResponse.json(link);
    } catch (e: any) {
        return NextResponse.json({ error: e.message }, { status: 500 });
    }
}

export async function DELETE(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const id = searchParams.get('id');
        if (!id) {
            return NextResponse.json({ error: 'ID is required' }, { status: 400 });
        }
        await prisma.menuLink.delete({ where: { id } });
        return NextResponse.json({ success: true });
    } catch (e: any) {
        return NextResponse.json({ error: e.message }, { status: 500 });
    }
}
