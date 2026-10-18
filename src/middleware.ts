import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    if (pathname.startsWith('/ai-26') || pathname.startsWith('/api/ai-26')) {
        if (pathname === '/ai-26/login' || pathname === '/api/ai-26/login') return NextResponse.next();

        const session = request.cookies.get('admin_session')?.value;
        if (!session || session !== process.env.ADMIN_PASSWORD) {
            if (pathname.startsWith('/api/')) {
                return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
            }
            const url = request.nextUrl.clone();
            url.pathname = '/ai-26/login';
            url.searchParams.set('from', pathname);
            return NextResponse.redirect(url);
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/ai-26/:path*', '/api/ai-26/:path*'],
};
