import { NextResponse } from 'next/server';
import { prisma } from '../../../lib/prisma';

export async function GET() {
    try {
        const posts = await prisma.customPost.findMany({
            orderBy: { createdAt: 'desc' }
        });

        return NextResponse.json(posts);
    } catch (e: any) {
        return NextResponse.json({ error: e.message }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const { title, content, type, link, imageUrl, price } = await req.json();
        if (!title || !type) {
            return NextResponse.json({ error: 'Title and Type are required' }, { status: 400 });
        }
        const post = await prisma.customPost.create({
            data: {
                title,
                content: content || '',
                type,
                link: link || null,
                imageUrl: imageUrl || null,
                price: price !== undefined && price !== null ? Number(price) : null
            }
        });
        return NextResponse.json(post);
    } catch (e: any) {
        return NextResponse.json({ error: e.message }, { status: 500 });
    }
}

export async function PUT(req: Request) {
    try {
        const { id, title, content, type, link, imageUrl, price } = await req.json();
        const post = await prisma.customPost.update({
            where: { id },
            data: {
                title,
                content: content || '',
                type,
                link: link || null,
                imageUrl: imageUrl || null,
                price: price !== undefined && price !== null ? Number(price) : null
            }
        });
        return NextResponse.json(post);
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
        await prisma.customPost.delete({ where: { id } });
        return NextResponse.json({ success: true });
    } catch (e: any) {
        return NextResponse.json({ error: e.message }, { status: 500 });
    }
}
