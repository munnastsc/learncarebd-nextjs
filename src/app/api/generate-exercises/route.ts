import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

interface GeneratedExercise {
    type: 'mcq' | 'gap' | 'translation';
    question: string;
    options: string[];
    answer: number; // Index of correct option (or correct order/index)
    correctText?: string; // For translation, the full correct English sentence
    explanation: string;
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { ruleTitle, ruleConcept, ruleFormula, count = 5 } = body;

        if (!ruleTitle) {
            return NextResponse.json({ error: 'ruleTitle is required.' }, { status: 400 });
        }

        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) {
            return NextResponse.json({ error: 'Gemini API key is not configured.' }, { status: 500 });
        }

        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({
            model: 'gemini-2.0-flash',
            generationConfig: {
                responseMimeType: 'application/json',
                temperature: 0.3
            }
        });

        const prompt = `You are a professional English language coach designing exercises based on the famous book 'English Grammar in Use' by Raymond Murphy.
Generate exactly ${count} highly engaging grammar practice exercises for English learners studying this rule:
Rule Name: "${ruleTitle}"
Concept/Meaning: "${ruleConcept}"
Formula: "${ruleFormula}"

Create a mixture of these three types of exercises:
1. "mcq" (Standard Multiple Choice Question)
2. "gap" (Fill in the gaps, e.g., "Sathi ___ to school daily." with blank option)
3. "translation" (Bengali sentence is given in "question", and the student must translate it to English. Provide the full correct English translation in "correctText" and list the individual words of the translation as separate strings in "options" so we can scramble them).

Return ONLY a JSON array of objects with this exact structure:
[
  {
    "type": "mcq",
    "question": "MCQ Question text here...",
    "options": ["Option A", "Option B", "Option C", "Option D"],
    "answer": 1, // 0-based index of correct option
    "explanation": "Detailed explanation in Bengali showing why it is correct."
  },
  {
    "type": "gap",
    "question": "Sathi ___ (have/has) written an essay.",
    "options": ["have", "has", "is having", "having"],
    "answer": 1, // 0-based index of correct option
    "explanation": "Detailed explanation in Bengali..."
  },
  {
    "type": "translation",
    "question": "সাঁথি প্রতিদিন সকালে চা পান করে।",
    "correctText": "Sathi drinks tea every morning",
    "options": ["Sathi", "drinks", "tea", "every", "morning", "coffee", "night"], // Include all correct words + 2-3 distractor words
    "answer": 0, // placeholder
    "explanation": "Detailed step-by-step translation explanation in Bengali..."
  }
]

Make sure all questions are natural, helpful for IELTS prep, and have grammatically accurate correct answers and very clear Bengali explanations.`;

        const result = await model.generateContent(prompt);
        const text = result.response.text().trim();
        const parsed = JSON.parse(text) as GeneratedExercise[];

        return NextResponse.json(parsed);

    } catch (err) {
        console.error('Failed to generate exercises:', err);
        return NextResponse.json({ error: 'Failed to generate exercises' }, { status: 500 });
    }
}
