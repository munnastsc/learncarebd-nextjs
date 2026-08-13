'use client';

import Link from 'next/link';
import { useState } from 'react';
import { BookOpen, ChevronLeft, Play, Lock, Sparkles, X, CreditCard } from 'lucide-react';
import { getAvailableReadingTests, READING_BOOKS } from '../../../lib/readingData';
import { useSubscription } from '../../../components/SubscriptionGuard';
import { useRouter } from 'next/navigation';

export default function ReadingPage() {
    const router = useRouter();
    const { isTrial } = useSubscription();
    const [showLockModal, setShowLockModal] = useState(false);
    const tests = getAvailableReadingTests();

    const byBook: Record<number, number[]> = {};
    for (const { book, test } of tests) {
        if (!byBook[book]) byBook[book] = [];
        byBook[book].push(test);
    }

    const handleLockedClick = (e: React.MouseEvent) => {
        e.preventDefault();
        setShowLockModal(true);
    };

    return (
        <div className="min-h-screen bg-[#f5f6fa] relative">
            {/* Header */}
            <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 px-5 py-10 lg:px-10">
                <div className="mx-auto max-w-4xl">
                    <Link href="/dashboard" className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm mb-6 transition">
                        <ChevronLeft size={15} /> Dashboard
                    </Link>
                    <div className="flex items-center gap-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/20 border border-emerald-500/30">
                            <BookOpen size={26} className="text-emerald-400" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-black text-white flex items-center gap-2">
                                Reading Practice
                                {isTrial && (
                                    <span className="text-[10px] font-black uppercase tracking-wider bg-amber-500/20 border border-amber-400/30 px-2 py-0.5 rounded text-amber-300">
                                        Trial Mode
                                    </span>
                                )}
                            </h1>
                            <p className="text-slate-400 text-sm mt-1">Cambridge IELTS · Real Passages · 40 Questions per test</p>
                        </div>
                    </div>
                    <div className="mt-6 grid grid-cols-3 gap-3 max-w-sm">
                        {[
                            { label: 'Available', value: String(Object.keys(byBook).length), sub: 'Books' },
                            { label: 'Tests', value: String(tests.length), sub: 'Total' },
                            { label: 'Questions', value: String(tests.length * 40), sub: 'Total' },
                        ].map(s => (
                            <div key={s.label} className="rounded-xl border border-white/5 bg-white/5 px-3 py-2 text-center">
                                <p className="text-lg font-black text-white">{s.value}</p>
                                <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">{s.sub}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* List */}
            <div className="mx-auto max-w-4xl px-5 py-8 space-y-4">
                {READING_BOOKS.map(book => {
                    const available = byBook[book];
                    if (!available) {
                        return (
                            <div key={book} className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden opacity-50">
                                <div className="flex items-center justify-between px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100">
                                            <Lock size={16} className="text-slate-400" />
                                        </div>
                                        <div>
                                            <p className="font-black text-slate-700">Cambridge IELTS {book}</p>
                                            <p className="text-xs text-slate-400">Passages coming soon</p>
                                        </div>
                                    </div>
                                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-500">Soon</span>
                                </div>
                            </div>
                        );
                    }

                    // In Trial Mode, Books 9 through 15 are free, Books 16-20 require subscription
                    const isBookLocked = isTrial && book > 15;

                    return (
                        <div key={book} className={`rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden ${isBookLocked ? 'border-amber-250 bg-amber-50/5' : ''}`}>
                            <div className={`flex items-center justify-between px-6 py-4 border-b border-slate-100 ${isBookLocked ? 'bg-gradient-to-r from-amber-50/40 to-slate-50/50' : 'bg-gradient-to-r from-emerald-50 to-teal-50'}`}>
                                <div className="flex items-center gap-3">
                                    <div className={`flex h-9 w-9 items-center justify-center rounded-xl ${isBookLocked ? 'bg-amber-100 text-amber-700' : 'bg-emerald-100 text-emerald-700'}`}>
                                        {isBookLocked ? <Lock size={18} /> : <BookOpen size={18} />}
                                    </div>
                                    <div>
                                        <p className="font-black text-slate-900">
                                            Cambridge IELTS {book}
                                            {isBookLocked && (
                                                <span className="ml-2 text-[9px] font-black uppercase bg-amber-500/20 text-amber-700 border border-amber-300/30 px-1.5 py-0.5 rounded">
                                                    Premium
                                                </span>
                                            )}
                                        </p>
                                        <p className="text-xs text-slate-500">{available.length} tests · 3 passages each · 40 questions</p>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5">
                                {[1, 2, 3, 4].map(test => {
                                    const ready = available.includes(test);
                                    if (!ready) {
                                        return (
                                            <div key={test} className="flex flex-col items-center gap-2 rounded-xl border border-slate-100 bg-slate-50 p-5 opacity-40">
                                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white border border-slate-200">
                                                    <Lock size={16} className="text-slate-400" />
                                                </div>
                                                <p className="text-sm font-black text-slate-500">Test {test}</p>
                                                <p className="text-[11px] text-slate-400">Coming soon</p>
                                            </div>
                                        );
                                    }

                                    return isBookLocked ? (
                                        <button
                                            key={test}
                                            onClick={handleLockedClick}
                                            className="group flex flex-col items-center gap-2 rounded-xl border border-amber-100 bg-amber-50/20 p-5 hover:bg-amber-50 hover:border-amber-400 hover:shadow-lg transition-all duration-200"
                                        >
                                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white border border-amber-200 transition shadow-sm text-amber-600">
                                                <Lock size={18} />
                                            </div>
                                            <p className="text-sm font-black text-slate-700">Test {test}</p>
                                            <span className="text-[9px] font-black uppercase text-amber-600">Locked</span>
                                        </button>
                                    ) : (
                                        <Link
                                            key={test}
                                            href={`/dashboard/reading/${book}/${test}`}
                                            className="group flex flex-col items-center gap-2 rounded-xl border border-emerald-100 bg-emerald-50 p-5 hover:bg-emerald-600 hover:border-emerald-600 hover:shadow-lg hover:shadow-emerald-200 transition-all duration-200"
                                        >
                                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white group-hover:bg-emerald-500 border border-emerald-200 group-hover:border-transparent transition shadow-sm">
                                                <Play size={18} className="text-emerald-600 group-hover:text-white transition ml-0.5" />
                                            </div>
                                            <p className="text-sm font-black text-slate-900 group-hover:text-white transition">Test {test}</p>
                                            <p className="text-[11px] text-slate-500 group-hover:text-emerald-200 transition">40 questions</p>
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Premium Lock Modal */}
            {showLockModal && (
                <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 z-50 animate-fade-in">
                    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 max-w-md w-full shadow-2xl text-center relative">
                        <button 
                            onClick={() => setShowLockModal(false)}
                            className="absolute top-4 right-4 text-slate-400 hover:text-white transition"
                        >
                            <X size={18} />
                        </button>
                        
                        <div className="flex justify-center mb-6">
                            <div className="relative">
                                <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-amber-600 to-indigo-500 blur opacity-45 animate-pulse" />
                                <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-slate-950 border border-slate-850 text-amber-400">
                                    <Lock size={28} />
                                </div>
                            </div>
                        </div>

                        <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-amber-300 mb-4 animate-bounce">
                            <Sparkles size={10} />
                            Premium Material Locked
                        </span>

                        <h2 className="text-xl font-black text-white mb-3">
                            এই টেস্টটি প্রিমিয়াম মেম্বারদের জন্য!
                        </h2>

                        <p className="text-xs text-slate-400 leading-relaxed mb-8">
                            আপনি বর্তমানে ফ্রী ট্রায়াল মোডে আছেন। ট্রায়াল ইউজাররা শুধুমাত্র **Cambridge IELTS Book 9** এর টেস্টগুলো সম্পূর্ণ ফ্রিতে নিয়ে প্র্যাকটিস করতে পারবেন। সমস্ত ক্যামব্রিজ বুক (৯-২০), ফুল লেংথ মক টেস্ট এবং এআই মূল্যায়ন আনলক করতে দয়া করে সাবস্ক্রিপশন প্ল্যানটি অ্যাক্টিভেট করুন।
                        </p>

                        <div className="grid gap-3 sm:grid-cols-2">
                            <button
                                onClick={() => {
                                    setShowLockModal(false);
                                    router.push('/dashboard/payment');
                                }}
                                className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-5 py-3 text-xs font-bold text-slate-950 hover:brightness-110 transition shadow-lg shadow-amber-500/20"
                            >
                                <CreditCard size={14} /> সাবস্ক্রিপশন নিন ↗
                            </button>

                            <button
                                onClick={() => setShowLockModal(false)}
                                className="flex items-center justify-center gap-2 rounded-xl border border-slate-800 bg-slate-950/60 px-5 py-3 text-xs font-bold text-slate-400 hover:text-white hover:bg-slate-900 transition"
                            >
                                বন্ধ করুন
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
