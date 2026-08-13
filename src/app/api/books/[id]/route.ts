import { NextResponse } from 'next/server';
import { prisma } from '../../../../lib/prisma';

export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        const book = await prisma.book.findUnique({
            where: { slug: (await params).id }, // Use slug for lookup
        });
        if (!book) {
            // fallback to ID
            const bookById = await prisma.book.findUnique({ where: { id: (await params).id } });
            if (!bookById) return NextResponse.json({ error: 'Book not found' }, { status: 404 });
            return NextResponse.json(bookById);
        }
        return NextResponse.json(book);
    } catch (error) {
        console.error('Error fetching book:', error);
        return NextResponse.json({ error: 'Failed to fetch book' }, { status: 500 });
    }
}

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        const data = await req.json();
        const book = await prisma.book.update({
            where: { id: (await params).id },
            data: {
                title: data.title,
                slug: data.slug,
                description: data.description,
                imageUrl: data.imageUrl,
                price: parseFloat(data.price),
                originalPrice: data.originalPrice ? parseFloat(data.originalPrice) : null,
                features: data.features || [],
                videoUrl: data.videoUrl || null,
                landingPageConfig: data.landingPageConfig || null,
                isAvailable: data.isAvailable,
            }
        });
        return NextResponse.json(book);
    } catch (error) {
        console.error('Error updating book:', error);
        return NextResponse.json({ error: 'Failed to update book' }, { status: 500 });
    }
}

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        await prisma.book.delete({
            where: { id: (await params).id }
        });
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error deleting book:', error);
        return NextResponse.json({ error: 'Failed to delete book' }, { status: 500 });
    }
}
