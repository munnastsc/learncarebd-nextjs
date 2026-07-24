import { NextResponse } from 'next/server';
import { prisma } from '../../../lib/prisma';

export async function GET() {
    try {
        // 1. Sync with WordPress
        try {
            const res = await fetch('https://www.learncarebd.com/wp-json/wp/v2/posts?per_page=15', {
                next: { revalidate: 60 } // Cache for 60 seconds
            });
            if (res.ok) {
                const wpPosts = await res.json();
                for (const wpPost of wpPosts) {
                    const title = wpPost.title?.rendered || 'Untitled Post';
                    const link = wpPost.link || '';
                    const rawExcerpt = wpPost.excerpt?.rendered || '';
                    const cleanExcerpt = rawExcerpt.replace(/<[^>]*>/g, '').trim();

                    // Check if already exists in DB by link
                    const existing = await prisma.customPost.findFirst({
                        where: { link }
                    });

                    if (!existing) {
                        // Classify as BOOK or SERVICE based on title/excerpt keywords
                        const textToSearch = (title + ' ' + cleanExcerpt).toLowerCase();
                        let type = 'SERVICE';
                        if (
                            textToSearch.includes('book') || 
                            textToSearch.includes('pdf') || 
                            textToSearch.includes('বুক') || 
                            textToSearch.includes('vocabulary') ||
                            textToSearch.includes('শব্দ')
                        ) {
                            type = 'BOOK';
                        }

                        // Create CustomPost
                        await prisma.customPost.create({
                            data: {
                                title,
                                content: cleanExcerpt || 'no description available',
                                type,
                                link,
                                imageUrl: null,
                                price: type === 'BOOK' ? 120 : null
                            }
                        });
                    }
                }
            }
        } catch (syncError) {
            console.error('WordPress auto-sync failed:', syncError);
            // Don't crash, serve existing database items
        }

        // 2. Fetch all posts from DB
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
