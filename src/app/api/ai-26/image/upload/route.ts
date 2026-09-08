import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';

export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData();
        const file = formData.get('file') as File | null;

        if (!file) {
            return NextResponse.json({ error: 'file is required' }, { status: 400 });
        }

        if (!file.type.startsWith('image/')) {
            return NextResponse.json({ error: 'Must be an image file' }, { status: 400 });
        }

        // Sanitize filename
        const ext = path.extname(file.name) || '.png';
        const baseName = path.basename(file.name, ext).replace(/[^a-zA-Z0-9_-]/g, '');
        const fileName = `${Date.now()}-${baseName}${ext}`;
        
        const imagesDir = path.join(process.cwd(), 'public', 'images');
        await mkdir(imagesDir, { recursive: true });

        const buffer = Buffer.from(await file.arrayBuffer());
        await writeFile(path.join(imagesDir, fileName), buffer);

        return NextResponse.json({ ok: true, imageUrl: `/images/${fileName}` });
    } catch (e: any) {
        return NextResponse.json({ error: e.message || 'Upload failed' }, { status: 500 });
    }
}
