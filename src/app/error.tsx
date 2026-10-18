'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { RefreshCw, Home } from 'lucide-react';

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error('Unhandled runtime error:', error);
    }, [error]);

    return (
        <div className="min-h-screen bg-slate-900 text-white flex flex-col justify-center items-center px-6 text-center font-sans">
            <div className="max-w-md w-full bg-slate-800/80 border border-slate-700/80 rounded-3xl p-8 shadow-2xl backdrop-blur-md">
                <div className="w-14 h-14 bg-rose-500/10 text-rose-400 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-rose-500/20">
                    <span className="text-2xl">⚠️</span>
                </div>
                <h2 className="text-2xl font-black mb-2">কিছু একটা সমস্যা হয়েছে!</h2>
                <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                    পৃষ্ঠাটি লোড করার সময় একটি প্রযুক্তিগত ত্রুটি ঘটেছে। দয়া করে পেজটি আবার রিলোড করুন।
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <button
                        onClick={() => reset()}
                        className="inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-6 py-3 rounded-xl text-xs transition"
                    >
                        <RefreshCw size={14} /> আবার চেষ্টা করুন
                    </button>
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center gap-2 bg-slate-700 hover:bg-slate-600 text-white font-bold px-6 py-3 rounded-xl text-xs transition"
                    >
                        <Home size={14} /> হোম পেজ
                    </Link>
                </div>
            </div>
        </div>
    );
}
