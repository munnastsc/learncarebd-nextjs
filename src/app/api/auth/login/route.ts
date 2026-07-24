import { NextResponse } from 'next/server';
import { prisma } from '../../../../lib/prisma';

export async function POST(request: Request) {
    try {
        const { email, password, isSignUp } = await request.json();
        const cleanEmail = email?.trim().toLowerCase();

        if (!cleanEmail || !password) {
            return NextResponse.json({ error: 'Email and password are required.' }, { status: 400 });
        }

        if (isSignUp) {
            // Check if user already exists
            const existing = await prisma.user.findUnique({ where: { email: cleanEmail } });
            if (existing) {
                return NextResponse.json({ error: 'Account with this email already exists.' }, { status: 409 });
            }

            // Create new student user
            const user = await prisma.user.create({
                data: {
                    email: cleanEmail,
                    password,
                    isSubscribed: false,
                }
            });

            const res = NextResponse.json({ ok: true, user });
            res.cookies.set('student_session', cleanEmail, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'lax',
                maxAge: 60 * 60 * 24 * 30, // 30 days
                path: '/',
            });
            return res;
        } else {
            // Find existing user
            const user = await prisma.user.findUnique({ where: { email: cleanEmail } });
            if (!user) {
                return NextResponse.json({ error: 'No account found with this email. Please register first.' }, { status: 404 });
            }

            // Match password
            const dbPassword = user.password || '123456';
            if (password !== dbPassword) {
                return NextResponse.json({ error: 'Incorrect password.' }, { status: 401 });
            }

            const res = NextResponse.json({ ok: true, user });
            res.cookies.set('student_session', cleanEmail, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'lax',
                maxAge: 60 * 60 * 24 * 30, // 30 days
                path: '/',
            });
            return res;
        }
    } catch (err) {
        console.error('Auth error:', err);
        return NextResponse.json({ error: 'Authentication failed.' }, { status: 500 });
    }
}

export async function DELETE() {
    const res = NextResponse.json({ ok: true });
    res.cookies.delete('student_session');
    return res;
}
