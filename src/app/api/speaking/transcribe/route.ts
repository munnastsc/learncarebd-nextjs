import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

export const runtime = 'nodejs';

export async function POST(request: Request) {
    try {
        const formData = await request.formData();
        const audioFile = formData.get('audio');
        const apiKey = process.env.GEMINI_API_KEY;

        if (!apiKey) {
            return NextResponse.json({ error: 'GEMINI_API_KEY is not configured.' }, { status: 500 });
        }

        if (!audioFile || !(audioFile instanceof File)) {
            return NextResponse.json({ error: 'No audio file provided.' }, { status: 400 });
        }

        const audioBytes = await audioFile.arrayBuffer();
        const base64Audio = Buffer.from(audioBytes).toString('base64');
        const mimeType = (audioFile.type || 'audio/webm') as string;

        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
        const result = await model.generateContent([
            { inlineData: { mimeType, data: base64Audio } },
            { text: 'Transcribe exactly what is spoken in this audio in English. Return only the transcription text, nothing else. If there is no speech, return an empty string.' },
        ]);
        
        const transcript = result.response.text().trim();
        return NextResponse.json({ transcript });
    } catch (e: any) {
        const msg = String(e?.message || e || '').toLowerCase();
        if (msg.includes('429') || msg.includes('quota') || msg.includes('limit')) {
            return NextResponse.json({ 
                error: 'এআই ট্রান্সক্রিপশন কোটা সাময়িকভাবে শেষ হয়ে গেছে। অনুগ্রহ করে নিচে নিজে টাইপ করুন অথবা একটু পর আবার চেষ্টা করুন।' 
            }, { status: 429 });
        }
        return NextResponse.json({ error: e.message || 'Transcription failed.' }, { status: 500 });
    }
}
