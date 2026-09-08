import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200">
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <div className="h-8 w-8 bg-gradient-to-tr from-teal-500 to-emerald-400 rounded-lg flex items-center justify-center shadow-md shadow-teal-500/20">
                        <span className="text-white font-black text-sm tracking-tighter">IL</span>
                    </div>
                    <span className="text-xl font-black text-slate-900 tracking-tight">LearnCare</span>
                </Link>
                <div className="hidden md:flex gap-6 items-center">
                    <Link href="/about" className="text-sm font-semibold text-slate-600 hover:text-slate-900">About</Link>
                    <Link href="/#courses" className="text-sm font-semibold text-slate-600 hover:text-slate-900">Courses</Link>
                    <Link href="/login" className="text-sm font-bold bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-800 transition">Login</Link>
                </div>
            </div>
        </nav>
    );
}
