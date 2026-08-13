import { NextResponse } from 'next/server';
import { prisma } from '../../../lib/prisma'; // Assuming this is the standard prisma instance location

export async function GET() {
    try {
        const books = await prisma.book.findMany({
            orderBy: { createdAt: 'desc' }
        });
        return NextResponse.json(books);
    } catch (error) {
        console.error('Error fetching books:', error);
        return NextResponse.json({ error: 'Failed to fetch books' }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const data = await req.json();
        const book = await prisma.book.create({
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
                isAvailable: data.isAvailable !== undefined ? data.isAvailable : true,
            }
        });
        return NextResponse.json(book);
    } catch (error) {
        console.error('Error creating book:', error);
        return NextResponse.json({ error: 'Failed to create book' }, { status: 500 });
    }
}
