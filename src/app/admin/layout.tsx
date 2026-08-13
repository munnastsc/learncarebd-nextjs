export const dynamic = 'force-dynamic';

import Link from 'next/link';
import LogoutButton from './LogoutButton';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-slate-950">
            <nav className="border-b border-slate-800 bg-slate-900 px-5 py-3 flex items-center justify-between">
                <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                    <span className="text-sm font-black text-white">ILTES Admin</span>
                    <Link href="/admin/orders" className="text-xs text-slate-400 hover:text-white transition">Orders & Students</Link>
                    <Link href="/admin/homepage" className="text-xs font-bold text-teal-400 hover:text-teal-300 transition">🏠 Homepage Editor</Link>
                    <Link href="/admin/content" className="text-xs text-slate-400 hover:text-white transition">Posts & Courses</Link>
                    <Link href="/admin/books" className="text-xs text-slate-400 hover:text-white transition">IELTS Books</Link>
                    <span className="text-slate-600">|</span>
                    <Link href="/admin/store/books" className="text-xs font-bold text-accent hover:text-orange-300 transition">🛒 Store Books</Link>
                    <Link href="/admin/store/orders" className="text-xs font-bold text-accent hover:text-orange-300 transition">📦 Store Orders</Link>
                </div>
                <LogoutButton />
            </nav>
            {children}
        </div>
    );
}
