import { NextResponse } from 'next/server';
import { getDynamicPageContent, PageType, saveDynamicPageContent } from '../../../../lib/dynamicPages';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type') as PageType;

    if (!type) return NextResponse.json({ error: 'Missing type' }, { status: 400 });

    const content = await getDynamicPageContent(type);
    return NextResponse.json(content || {});
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { type, content } = body;

        if (!type || !content) {
            return NextResponse.json({ error: 'Missing type or content' }, { status: 400 });
        }

        const saved = await saveDynamicPageContent(type as PageType, content);
        return NextResponse.json(saved);
    } catch (error) {
        console.error('Error saving dynamic page:', error);
        return NextResponse.json({ error: 'Failed to save content' }, { status: 500 });
    }
}
