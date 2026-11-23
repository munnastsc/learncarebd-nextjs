import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export const dynamic = 'force-dynamic';

const DATA_FILE = path.join(process.cwd(), 'data', 'exam-submissions.json');

async function ensureDataFile() {
    try {
        const dir = path.dirname(DATA_FILE);
        await fs.mkdir(dir, { recursive: true });
        try {
            await fs.access(DATA_FILE);
        } catch {
            await fs.writeFile(DATA_FILE, JSON.stringify([], null, 2), 'utf-8');
        }
    } catch (err) {
        console.error('Error ensuring exam submissions file:', err);
    }
}

export async function GET(req: NextRequest) {
    try {
        await ensureDataFile();
        const content = await fs.readFile(DATA_FILE, 'utf-8');
        const submissions = JSON.parse(content || '[]');
        return NextResponse.json({ success: true, count: submissions.length, submissions });
    } catch (error: any) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    try {
        await ensureDataFile();
        const body = await req.json();
        const {
            studentName = 'Anonymous Student',
            studentEmail = 'student@learncarebd.com',
            score = 0,
            total = 100,
            percentage = 0,
            grade = 'A',
            timeTakenSeconds = 0,
            tensesScore = 0,
            modalsScore = 0,
            compliment = '',
            weaknesses = [],
            mistakes = [],
        } = body;

        const newSubmission = {
            id: 'sub_' + Date.now() + '_' + Math.random().toString(36).substr(2, 6),
            studentName: studentName.trim() || 'Learner',
            studentEmail: studentEmail.trim() || 'student@learncarebd.com',
            score,
            total,
            percentage,
            grade,
            timeTakenSeconds,
            tensesScore,
            modalsScore,
            compliment,
            weaknesses,
            mistakes,
            completedAt: new Date().toISOString(),
        };

        const content = await fs.readFile(DATA_FILE, 'utf-8');
        const submissions = JSON.parse(content || '[]');
        submissions.unshift(newSubmission); // newest first

        // Keep last 500 submissions to prevent unbounded growth
        const trimmed = submissions.slice(0, 500);
        await fs.writeFile(DATA_FILE, JSON.stringify(trimmed, null, 2), 'utf-8');

        return NextResponse.json({
            success: true,
            submissionId: newSubmission.id,
            submission: newSubmission
        });
    } catch (error: any) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}

export async function DELETE(req: NextRequest) {
    try {
        await ensureDataFile();
        const { searchParams } = new URL(req.url);
        const id = searchParams.get('id');

        if (!id) {
            return NextResponse.json({ success: false, error: 'ID required' }, { status: 400 });
        }

        const content = await fs.readFile(DATA_FILE, 'utf-8');
        let submissions = JSON.parse(content || '[]');
        submissions = submissions.filter((s: any) => s.id !== id);
        await fs.writeFile(DATA_FILE, JSON.stringify(submissions, null, 2), 'utf-8');

        return NextResponse.json({ success: true, message: 'Deleted successfully' });
    } catch (error: any) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
