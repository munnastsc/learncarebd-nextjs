import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { readFile, writeFile } from 'fs/promises';
import path from 'path';

interface WordContext {
    situation: string;
    situation_meaning: string;
    story: string;
    story_meaning: string;
}

const CACHE_PATH = path.join(process.cwd(), 'data', 'word-context-cache.json');

// Memory cache to prevent file read/write racing
let cacheInMemory: Record<string, WordContext> | null = null;

async function loadCache() {
    if (cacheInMemory) return cacheInMemory;
    try {
        const raw = await readFile(CACHE_PATH, 'utf-8');
        cacheInMemory = JSON.parse(raw);
    } catch {
        cacheInMemory = {};
    }
    return cacheInMemory!;
}

async function saveCache(cache: Record<string, WordContext>) {
    cacheInMemory = cache;
    try {
        await writeFile(CACHE_PATH, JSON.stringify(cache, null, 2), 'utf-8');
    } catch (err) {
        console.error('Failed to save word context cache:', err);
    }
}

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const word = searchParams.get('word')?.trim();
        const pos = searchParams.get('pos')?.trim() || '';
        const meaning = searchParams.get('meaning')?.trim() || '';

        if (!word) {
            return NextResponse.json({ error: 'Word is required.' }, { status: 400 });
        }

        const cache = await loadCache();
        const cacheKey = word.toLowerCase();

        // 1. Return from cache if exists
        if (cache[cacheKey]) {
            return NextResponse.json(cache[cacheKey]);
        }

        // 2. Call Gemini to generate context
        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) {
            return NextResponse.json({
                situation: 'Used in general communication.',
                situation_meaning: 'সাধারণ কথোপকথনে ব্যবহৃত হয়।',
                story: `We need to understand how to use the word '${word}' properly.`,
                story_meaning: `আমাদের '${word}' শব্দটি সঠিকভাবে কীভাবে ব্যবহার করতে হয় তা বোঝা দরকার।`
            });
        }

        const genAI = new GoogleGenerativeAI(apiKey);
        // Using gemini-2.0-flash as primary model for speed and efficiency
        const model = genAI.getGenerativeModel({
            model: 'gemini-2.0-flash',
            generationConfig: {
                responseMimeType: 'application/json',
                temperature: 0.2
            }
        });

        const prompt = `You are a helpful language teacher. 
Generate a "situation" (explaining when/where this word is used in English) and a "short story" (1-2 simple sentences applying the word, highlighting its context) for:
Word: "${word}"
Part of Speech: "${pos}"
Meaning in Bengali: "${meaning}"

Return ONLY a JSON object with this exact structure:
{
  "situation": "A simple English sentence explaining when to use this word.",
  "situation_meaning": "Bengali translation of the situation sentence.",
  "story": "A very short 1-2 sentence story in English where the word '${word}' is naturally used. Keep it simple for English learners.",
  "story_meaning": "Bengali translation of the short story."
}`;

        const result = await model.generateContent(prompt);
        const text = result.response.text().trim();
        
        const parsed = JSON.parse(text) as WordContext;

        // 3. Save to cache
        cache[cacheKey] = parsed;
        await saveCache(cache);

        return NextResponse.json(parsed);

    } catch (err) {
        console.error('Word context generation failed:', err);
        return NextResponse.json({
            situation: 'Used in everyday conversational English.',
            situation_meaning: 'দৈনন্দিন ইংরেজি কথোপকথনে ব্যবহৃত হয়।',
            story: 'The teacher explained the usage of this word in class today.',
            story_meaning: 'শিক্ষক আজ ক্লাসে এই শব্দটির ব্যবহার ব্যাখ্যা করেছিলেন।'
        });
    }
}
