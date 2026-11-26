import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../lib/prisma';
import fs from 'fs/promises';
import path from 'path';

export const dynamic = 'force-dynamic';

const CORS_HEADERS = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

export async function OPTIONS() {
    return new NextResponse(null, { status: 204, headers: CORS_HEADERS });
}

// Ensure table exists in PostgreSQL
let tableInitialized = false;
async function ensureDbTable() {
    if (tableInitialized) return;
    try {
        if (prisma) {
            await prisma.$executeRawUnsafe(`
                CREATE TABLE IF NOT EXISTS "ExamSubmission" (
                    id TEXT PRIMARY KEY,
                    "studentName" TEXT NOT NULL,
                    "studentEmail" TEXT,
                    score INTEGER NOT NULL,
                    total INTEGER NOT NULL,
                    percentage INTEGER NOT NULL,
                    grade TEXT NOT NULL,
                    "timeTakenSeconds" INTEGER NOT NULL,
                    "tensesScore" INTEGER NOT NULL,
                    "modalsScore" INTEGER NOT NULL,
                    compliment TEXT,
                    weaknesses JSONB,
                    mistakes JSONB,
                    "completedAt" TIMESTAMP WITH TIME ZONE DEFAULT NOW()
                );
            `);
            tableInitialized = true;
        }
    } catch (err) {
        console.error('Failed to ensure ExamSubmission table:', err);
    }
}

// Fallback memory cache if DB is ever down
let memoryCache: any[] = [];

export async function GET(req: NextRequest) {
    try {
        await ensureDbTable();

        if (prisma) {
            try {
                const rows: any = await prisma.$queryRawUnsafe(`
                    SELECT * FROM "ExamSubmission"
                    ORDER BY "completedAt" DESC
                    LIMIT 200;
                `);

                const formatted = rows.map((r: any) => ({
                    ...r,
                    weaknesses: typeof r.weaknesses === 'string' ? JSON.parse(r.weaknesses) : (r.weaknesses || []),
                    mistakes: typeof r.mistakes === 'string' ? JSON.parse(r.mistakes) : (r.mistakes || []),
                    completedAt: r.completedAt ? new Date(r.completedAt).toISOString() : new Date().toISOString()
                }));

                return NextResponse.json(
                    { success: true, count: formatted.length, submissions: formatted },
                    { headers: CORS_HEADERS }
                );
            } catch (dbErr) {
                console.error('DB query error, falling back:', dbErr);
            }
        }

        return NextResponse.json(
            { success: true, count: memoryCache.length, submissions: memoryCache },
            { headers: CORS_HEADERS }
        );
    } catch (error: any) {
        return NextResponse.json(
            { success: false, error: error.message },
            { status: 500, headers: CORS_HEADERS }
        );
    }
}

export async function POST(req: NextRequest) {
    try {
        await ensureDbTable();
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

        const newId = 'sub_' + Date.now() + '_' + Math.random().toString(36).substr(2, 6);
        const sName = (studentName || 'Learner').trim();
        const sEmail = (studentEmail || 'student@learncarebd.com').trim();
        const nowIso = new Date().toISOString();

        const submissionObj = {
            id: newId,
            studentName: sName,
            studentEmail: sEmail,
            score: Number(score) || 0,
            total: Number(total) || 100,
            percentage: Number(percentage) || 0,
            grade: grade || 'A',
            timeTakenSeconds: Number(timeTakenSeconds) || 0,
            tensesScore: Number(tensesScore) || 0,
            modalsScore: Number(modalsScore) || 0,
            compliment: compliment || '',
            weaknesses: Array.isArray(weaknesses) ? weaknesses : [],
            mistakes: Array.isArray(mistakes) ? mistakes : [],
            completedAt: nowIso
        };

        if (prisma) {
            try {
                await prisma.$executeRawUnsafe(`
                    INSERT INTO "ExamSubmission" (
                        id, "studentName", "studentEmail", score, total, percentage,
                        grade, "timeTakenSeconds", "tensesScore", "modalsScore",
                        compliment, weaknesses, mistakes, "completedAt"
                    ) VALUES (
                        $1, $2, $3, $4, $5, $6,
                        $7, $8, $9, $10,
                        $11, $12::jsonb, $13::jsonb, $14::timestamp with time zone
                    );
                `,
                    newId,
                    sName,
                    sEmail,
                    submissionObj.score,
                    submissionObj.total,
                    submissionObj.percentage,
                    submissionObj.grade,
                    submissionObj.timeTakenSeconds,
                    submissionObj.tensesScore,
                    submissionObj.modalsScore,
                    submissionObj.compliment,
                    JSON.stringify(submissionObj.weaknesses),
                    JSON.stringify(submissionObj.mistakes),
                    nowIso
                );

                return NextResponse.json({
                    success: true,
                    submissionId: newId,
                    submission: submissionObj
                }, { headers: CORS_HEADERS });
            } catch (insertErr) {
                console.error('DB Insert error, using fallback:', insertErr);
            }
        }

        // Memory fallback
        memoryCache.unshift(submissionObj);
        if (memoryCache.length > 200) memoryCache = memoryCache.slice(0, 200);

        return NextResponse.json({
            success: true,
            submissionId: newId,
            submission: submissionObj
        }, { headers: CORS_HEADERS });

    } catch (error: any) {
        return NextResponse.json(
            { success: false, error: error.message },
            { status: 500, headers: CORS_HEADERS }
        );
    }
}

export async function DELETE(req: NextRequest) {
    try {
        await ensureDbTable();
        const { searchParams } = new URL(req.url);
        const id = searchParams.get('id');

        if (!id) {
            return NextResponse.json({ success: false, error: 'ID required' }, { status: 400, headers: CORS_HEADERS });
        }

        if (prisma) {
            try {
                await prisma.$executeRawUnsafe(`DELETE FROM "ExamSubmission" WHERE id = $1`, id);
            } catch (delErr) {
                console.error('DB Delete error:', delErr);
            }
        }

        memoryCache = memoryCache.filter(s => s.id !== id);

        return NextResponse.json({ success: true, message: 'Deleted successfully' }, { headers: CORS_HEADERS });
    } catch (error: any) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500, headers: CORS_HEADERS });
    }
}
