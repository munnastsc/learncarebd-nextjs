import Link from 'next/link';
import { Home, BookOpen, MessageCircle, ArrowLeft } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-slate-900 text-white flex flex-col justify-center items-center px-6 relative overflow-hidden font-sans">
            {/* Background glowing blobs */}
            <div className="absolute top-1/4 -left-20 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-md w-full text-center relative z-10">
                <span className="text-8xl sm:text-9xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-400 block mb-2 select-none">
                    404
                </span>
                <h1 className="text-2xl sm:text-3xl font-black mb-3">পেজটি খুঁজে পাওয়া যায়নি!</h1>
                <p className="text-sm text-slate-400 mb-8 leading-relaxed">
                    দুঃখিত, আপনি যে লিংকটিতে প্রবেশ করতে চেয়েছেন তা পরিবর্তিত হয়েছে বা সরানো হয়েছে। অনুগ্রহ করে নিচের বাটনগুলো ব্যবহার করে মূল পেজে ফিরে যান।
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-400 text-slate-950 font-black px-6 py-3.5 rounded-2xl text-xs transition shadow-lg shadow-teal-500/20"
                    >
                        <Home size={15} /> হোম পেজে ফিরুন
                    </Link>
                    <Link
                        href="/#courses"
                        className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-bold px-6 py-3.5 rounded-2xl text-xs transition border border-slate-700"
                    >
                        <BookOpen size={15} /> সকল কোর্স
                    </Link>
                    <a
                        href="https://wa.me/8801714740430"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 font-bold px-6 py-3.5 rounded-2xl text-xs transition border border-emerald-500/30"
                    >
                        <MessageCircle size={15} /> WhatsApp
                    </a>
                </div>
            </div>
        </div>
    );
}
