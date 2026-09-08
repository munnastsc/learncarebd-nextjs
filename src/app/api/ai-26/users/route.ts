import { NextResponse } from 'next/server';
import { prisma } from '../../../../lib/prisma';
import { cookies } from 'next/headers';

// Protect API with admin session check
async function isAdminAuthenticated() {
    const cookieStore = await cookies();
    const session = cookieStore.get('admin_session')?.value;
    return session && session === process.env.ADMIN_PASSWORD;
}

export async function GET() {
    if (!await isAdminAuthenticated()) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        const users = await prisma.user.findMany({
            orderBy: { createdAt: 'desc' },
            include: {
                progress: true,
                chatHistory: true
            }
        });
        return NextResponse.json({ success: true, items: users });
    } catch (err) {
        console.error('Failed to fetch users:', err);
        return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    if (!await isAdminAuthenticated()) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        const { email, password, plan, isSubscribed } = await request.json();
        const cleanEmail = email?.trim().toLowerCase();

        if (!cleanEmail) {
            return NextResponse.json({ error: 'Email is required' }, { status: 400 });
        }

        const existing = await prisma.user.findUnique({ where: { email: cleanEmail } });
        if (existing) {
            return NextResponse.json({ error: 'User with this email already exists' }, { status: 409 });
        }

        const user = await prisma.user.create({
            data: {
                email: cleanEmail,
                password: password || '123456',
                plan: plan || 'spoken',
                isSubscribed: !!isSubscribed,
                subscriptionEnd: isSubscribed ? new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) : null
            }
        });

        return NextResponse.json({ success: true, user });
    } catch (err) {
        console.error('Failed to create user:', err);
        return NextResponse.json({ error: 'Failed to create user' }, { status: 500 });
    }
}

export async function PATCH(request: Request) {
    if (!await isAdminAuthenticated()) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        const { id, email, password, plan, isSubscribed, subscriptionEnd } = await request.json();

        if (!id) {
            return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
        }

        const updateData: any = {};
        if (email !== undefined) updateData.email = email.trim().toLowerCase();
        if (password !== undefined) updateData.password = password;
        if (plan !== undefined) updateData.plan = plan;
        if (isSubscribed !== undefined) {
            updateData.isSubscribed = isSubscribed;
            if (isSubscribed && !subscriptionEnd) {
                updateData.subscriptionEnd = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
            } else if (!isSubscribed) {
                updateData.subscriptionEnd = null;
            }
        }
        if (subscriptionEnd !== undefined) {
            updateData.subscriptionEnd = subscriptionEnd ? new Date(subscriptionEnd) : null;
        }

        const user = await prisma.user.update({
            where: { id },
            data: updateData
        });

        return NextResponse.json({ success: true, user });
    } catch (err) {
        console.error('Failed to update user:', err);
        return NextResponse.json({ error: 'Failed to update user' }, { status: 500 });
    }
}

export async function DELETE(request: Request) {
    if (!await isAdminAuthenticated()) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');

        if (!id) {
            return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
        }

        // Clean up relations first
        await prisma.chatHistory.deleteMany({ where: { userId: id } });
        await prisma.progress.deleteMany({ where: { userId: id } });

        await prisma.user.delete({ where: { id } });

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error('Failed to delete user:', err);
        return NextResponse.json({ error: 'Failed to delete user' }, { status: 500 });
    }
}
