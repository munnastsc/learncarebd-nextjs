'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
    ArrowLeft, Zap, Sparkles, BookOpen, CheckCircle2,
    Maximize, Minimize, ExternalLink, HelpCircle, Trophy,
    Shield, RefreshCw, ArrowUpRight, Flame, Layers
} from 'lucide-react';

export default function CausativeVerbsPage() {
    const [activeTab, setActiveTab] = useState<'lab' | 'rules'>('lab');
    const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
    const [isCompleted, setIsCompleted] = useState<boolean>(false);
    const [xp, setXp] = useState<number>(0);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        try {
            const completed = JSON.parse(localStorage.getItem('academy_labs_completed') || '[]');
            setIsCompleted(completed.includes('causative-verbs-mega-lab'));
            const userXp = Number(localStorage.getItem('spoken_xp') || 120);
            setXp(userXp);
        } catch {
            // ignore
        }
    }, []);

    const toggleComplete = () => {
        try {
            const completed: string[] = JSON.parse(localStorage.getItem('academy_labs_completed') || '[]');
            let updated: string[];
            let delta = 0;
            if (isCompleted) {
                updated = completed.filter(id => id !== 'causative-verbs-mega-lab');
                delta = -30;
                setIsCompleted(false);
            } else {
                updated = [...completed, 'causative-verbs-mega-lab'];
                delta = 30;
                setIsCompleted(true);
            }
            localStorage.setItem('academy_labs_completed', JSON.stringify(updated));
            const newXp = Math.max(0, xp + delta);
            setXp(newXp);
            localStorage.setItem('spoken_xp', String(newXp));
        } catch {
            // ignore
        }
    };

    const toggleFullscreen = () => {
        if (!containerRef.current) return;
        if (!document.fullscreenElement) {
            containerRef.current.requestFullscreen().catch(() => {});
            setIsFullscreen(true);
        } else {
            document.exitFullscreen().catch(() => {});
            setIsFullscreen(false);
        }
    };

    useEffect(() => {
        const handleFsChange = () => {
            setIsFullscreen(!!document.fullscreenElement);
        };
        document.addEventListener('fullscreenchange', handleFsChange);
        return () => document.removeEventListener('fullscreenchange', handleFsChange);
    }, []);

    return (
        <div className="min-h-screen bg-[#f8fafc] font-sans pb-28 text-slate-800">
            {/* Top Navigation */}
            <header className="border-b border-slate-800 bg-slate-950 px-5 py-3.5 text-white sticky top-0 z-40">
                <div className="mx-auto max-w-7xl flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <Link
                            href="/dashboard/spoken-english"
                            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition"
                        >
                            <ArrowLeft size={18} />
                        </Link>
                        <div>
                            <div className="flex items-center gap-2">
                                <span className="text-[10px] font-black uppercase tracking-wider text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-800/60">
                                    স্পোকেন পাওয়ার স্ট্রাকচার
                                </span>
                                <span className="text-xs text-slate-400 hidden sm:inline">LearnCare Academy</span>
                            </div>
                            <h1 className="text-sm sm:text-base font-black text-white flex items-center gap-2 mt-0.5">
                                <Zap className="text-cyan-400" size={17} /> কজেটিভ ভার্বস মাস্টার ল্যাব (Make, Have, Get, Let, Help)
                            </h1>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        {/* Tab Switcher */}
                        <div className="flex rounded-xl bg-slate-900 border border-slate-800 p-0.5">
                            <button
                                onClick={() => setActiveTab('lab')}
                                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
                                    activeTab === 'lab'
                                        ? 'bg-cyan-600 text-white shadow-sm'
                                        : 'text-slate-400 hover:text-white'
                                }`}
                            >
                                <Sparkles size={13} /> ইন্টারঅ্যাক্টিভ ল্যাব
                            </button>
                            <button
                                onClick={() => setActiveTab('rules')}
                                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
                                    activeTab === 'rules'
                                        ? 'bg-cyan-600 text-white shadow-sm'
                                        : 'text-slate-400 hover:text-white'
                                }`}
                            >
                                <BookOpen size={13} /> রুলস ও চিটশিট
                            </button>
                        </div>

                        {/* Completion Button */}
                        <button
                            onClick={toggleComplete}
                            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-black transition border ${
                                isCompleted
                                    ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                                    : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700'
                            }`}
                        >
                            <CheckCircle2 size={15} className={isCompleted ? 'fill-emerald-400 text-slate-950' : ''} />
                            <span className="hidden sm:inline">{isCompleted ? 'সম্পন্ন (+৩০ XP)' : 'মার্ক করুন'}</span>
                        </button>
                    </div>
                </div>
            </header>

            {/* Banner Overview */}
            <div className="bg-gradient-to-r from-slate-900 via-cyan-950 to-slate-900 text-white border-b border-cyan-900/50 py-8 px-5">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <span className="bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 px-2.5 py-0.5 rounded-full text-xs font-bold">
                                ⚡ Causative Mastery Engine
                            </span>
                            <span className="bg-white/10 text-slate-300 px-2.5 py-0.5 rounded-full text-xs font-medium">
                                Level: Intermediate to Advanced
                            </span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-black text-white">
                            নিজে না করে অন্যকে দিয়ে কাজ করানোর সম্পূর্ণ কৌশল
                        </h2>
                        <p className="text-cyan-200/90 text-sm mt-2 max-w-3xl leading-relaxed">
                            ইংরেজি ভাষায় <strong>Make, Have, Get, Let এবং Help</strong>-এর সঠিক প্রয়োগ জানা স্পোকেন ফ্লুয়েন্সির অন্যতম বড় হাতিয়ার।
                            Active Causative ও Passive Causative-এর বাস্তব ব্যবহার, ৩০+ ক্লিক-টু-রিভিল ড্রিল ও ৫০ নম্বরের লাইভ ওয়ার্কবুক।
                        </p>
                    </div>

                    <div className="flex flex-wrap sm:flex-nowrap gap-2.5">
                        <Link
                            href="/dashboard/spoken-english/lessons"
                            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/20 transition"
                        >
                            <BookOpen size={15} /> কোর্স লেসন ২৭ <ArrowUpRight size={14} />
                        </Link>
                        <a
                            href="/academy-labs/Causative_Verbs_Master_Interactive_Practice_Lab.html"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-black shadow-lg shadow-cyan-900/40 transition"
                        >
                            <ExternalLink size={15} /> ফুলট্যাব ভিউ
                        </a>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 pt-6">
                {activeTab === 'lab' ? (
                    <div ref={containerRef} className="relative rounded-2xl overflow-hidden border border-slate-300 shadow-xl bg-white">
                        {/* Lab Toolbar */}
                        <div className="bg-slate-900 text-white px-4 py-2 flex items-center justify-between border-b border-slate-800 text-xs">
                            <div className="flex items-center gap-2 text-slate-300">
                                <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                                <span>ইন্টারঅ্যাক্টিভ প্র্যাকটিস ল্যাব ও ৫০টি শূন্যস্থান পূরণ</span>
                            </div>
                            <button
                                onClick={toggleFullscreen}
                                className="flex items-center gap-1.5 text-slate-300 hover:text-white px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 transition"
                            >
                                {isFullscreen ? <Minimize size={14} /> : <Maximize size={14} />}
                                <span>{isFullscreen ? 'প্রস্থান' : 'ফুলস্ক্রিন'}</span>
                            </button>
                        </div>

                        {/* Lab Iframe */}
                        <iframe
                            src="/academy-labs/Causative_Verbs_Master_Interactive_Practice_Lab.html"
                            className="w-full border-none"
                            style={{ height: isFullscreen ? 'calc(100vh - 40px)' : '850px' }}
                            title="Causative Verbs Master Lab"
                        />
                    </div>
                ) : (
                    /* Grammar & Rules Cheat Sheet */
                    <div className="space-y-6">
                        {/* Core 5 Verbs Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                            {/* Make */}
                            <div className="bg-white rounded-2xl p-6 border-2 border-rose-200 shadow-sm hover:shadow-md transition">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-xs font-black uppercase text-rose-600 bg-rose-50 px-2.5 py-1 rounded-lg border border-rose-200">
                                        Force / Compulsion
                                    </span>
                                    <span className="text-xl">⚠️</span>
                                </div>
                                <h3 className="text-xl font-black text-slate-900">MAKE + Person + V1</h3>
                                <p className="text-xs text-slate-600 mt-1">কাউকে কোনো কাজ করতে বাধ্য করা বা চাপ দেওয়া।</p>
                                <div className="mt-4 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono space-y-1">
                                    <p className="text-slate-800 font-bold">✔️ He made me cry.</p>
                                    <p className="text-rose-600 line-through">❌ He made me to cry.</p>
                                    <p className="text-slate-500 italic mt-1 font-sans">বাংলা: সে আমাকে কাঁদিয়েছিল।</p>
                                </div>
                            </div>

                            {/* Have */}
                            <div className="bg-white rounded-2xl p-6 border-2 border-indigo-200 shadow-sm hover:shadow-md transition">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-xs font-black uppercase text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-lg border border-indigo-200">
                                        Professional Assignment
                                    </span>
                                    <span className="text-xl">💼</span>
                                </div>
                                <h3 className="text-xl font-black text-slate-900">HAVE + Person + V1</h3>
                                <p className="text-xs text-slate-600 mt-1">পেশাদার কাউকে দায়িত্ব দেওয়া বা কাজ করানো।</p>
                                <div className="mt-4 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono space-y-1">
                                    <p className="text-slate-800 font-bold">✔️ I will have the mechanic fix it.</p>
                                    <p className="text-indigo-600 line-through">❌ I will have the mechanic to fix it.</p>
                                    <p className="text-slate-500 italic mt-1 font-sans">বাংলা: আমি মেকানিককে দিয়ে এটি ঠিক করাব।</p>
                                </div>
                            </div>

                            {/* Get */}
                            <div className="bg-white rounded-2xl p-6 border-2 border-emerald-200 shadow-sm hover:shadow-md transition">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-xs font-black uppercase text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                                        Persuade / Convince
                                    </span>
                                    <span className="text-xl">🤝</span>
                                </div>
                                <h3 className="text-xl font-black text-slate-900">GET + Person + TO + V1</h3>
                                <p className="text-xs text-slate-600 mt-1">কাউকে বুঝিয়ে বা অনুরোধ করে রাজি করিয়ে করানো।</p>
                                <div className="mt-4 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono space-y-1">
                                    <p className="text-slate-800 font-bold">✔️ I got him to sign the contract.</p>
                                    <p className="text-emerald-600 line-through">❌ I got him sign the contract.</p>
                                    <p className="text-slate-500 italic mt-1 font-sans">বাংলা: আমি তাকে বুঝিয়ে চুক্তিতে সই করালাম।</p>
                                </div>
                            </div>

                            {/* Let */}
                            <div className="bg-white rounded-2xl p-6 border-2 border-teal-200 shadow-sm hover:shadow-md transition">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-xs font-black uppercase text-teal-600 bg-teal-50 px-2.5 py-1 rounded-lg border border-teal-200">
                                        Allow / Permission
                                    </span>
                                    <span className="text-xl">🔓</span>
                                </div>
                                <h3 className="text-xl font-black text-slate-900">LET + Person + V1</h3>
                                <p className="text-xs text-slate-600 mt-1">কাউকে কোনো কাজ করার অনুমতি বা সুযোগ দেওয়া।</p>
                                <div className="mt-4 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono space-y-1">
                                    <p className="text-slate-800 font-bold">✔️ My boss let me leave early.</p>
                                    <p className="text-teal-600 line-through">❌ My boss let me to leave early.</p>
                                    <p className="text-slate-500 italic mt-1 font-sans">বাংলা: বস আমাকে তাড়াতাড়ি যেতে দিলেন।</p>
                                </div>
                            </div>

                            {/* Help */}
                            <div className="bg-white rounded-2xl p-6 border-2 border-amber-200 shadow-sm hover:shadow-md transition">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-xs font-black uppercase text-amber-600 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200">
                                        Assist / Support
                                    </span>
                                    <span className="text-xl">🤝</span>
                                </div>
                                <h3 className="text-xl font-black text-slate-900">HELP + Person + (to) V1</h3>
                                <p className="text-xs text-slate-600 mt-1">কাজে সাহায্য করা (to দেওয়া ঐচ্ছিক, উভয়েই সঠিক)।</p>
                                <div className="mt-4 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono space-y-1">
                                    <p className="text-slate-800 font-bold">✔️ He helped me carry the bags.</p>
                                    <p className="text-slate-800 font-bold">✔️ He helped me to carry the bags.</p>
                                    <p className="text-slate-500 italic mt-1 font-sans">বাংলা: সে আমাকে ব্যাগ বহন করতে সাহায্য করল।</p>
                                </div>
                            </div>

                            {/* Passive Causative */}
                            <div className="bg-gradient-to-br from-indigo-900 to-purple-950 text-white rounded-2xl p-6 shadow-md border-2 border-indigo-400/40">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-xs font-black uppercase text-amber-300 bg-amber-400/10 px-2.5 py-1 rounded-lg border border-amber-400/30">
                                        Most Used in Spoken
                                    </span>
                                    <span className="text-xl">🌟</span>
                                </div>
                                <h3 className="text-xl font-black text-white">Passive Causative</h3>
                                <p className="text-xs text-indigo-200 mt-1">Subject + have/get + Object + V3</p>
                                <div className="mt-4 p-3 rounded-xl bg-white/10 border border-white/20 text-xs font-mono space-y-1">
                                    <p className="text-emerald-300 font-bold">✔️ I had my hair cut.</p>
                                    <p className="text-emerald-300 font-bold">✔️ She got her car washed.</p>
                                    <p className="text-slate-300 italic mt-1 font-sans">কাকে দিয়ে করানো হয়েছে তা নয়, বস্তুটির কাজ সম্পন্ন হয়েছে।</p>
                                </div>
                            </div>
                        </div>

                        {/* Common Mistakes Banner */}
                        <div className="rounded-2xl border-2 border-amber-300 bg-amber-50/80 p-6">
                            <h4 className="text-base font-black text-amber-900 flex items-center gap-2">
                                <HelpCircle size={18} className="text-amber-600" /> বাঙালিদের কজেটিভ ভার্বের ৫টি মারাত্মক ভুল
                            </h4>
                            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                                <div className="p-3 bg-white rounded-xl border border-amber-200">
                                    <p className="font-bold text-slate-800">১. "I cut my hair" বনাম "I had my hair cut"</p>
                                    <p className="text-slate-600 mt-0.5">নিজে কাঁচি দিয়ে কাটলে "I cut my hair", সেলুনে গিয়ে কাটালে অবশ্যই বলতে হবে <strong>"I had my hair cut"</strong>।</p>
                                </div>
                                <div className="p-3 bg-white rounded-xl border border-amber-200">
                                    <p className="font-bold text-slate-800">২. Make-এর পরে "to" যোগ করার ভুল</p>
                                    <p className="text-slate-600 mt-0.5">"He made me to do it" ভুল! শুদ্ধ হবে: <strong>"He made me do it"</strong>।</p>
                                </div>
                                <div className="p-3 bg-white rounded-xl border border-amber-200">
                                    <p className="font-bold text-slate-800">৩. Get-এর পর "to" বাদ দেওয়ার ভুল</p>
                                    <p className="text-slate-600 mt-0.5">Active-এ Get-এর পর অবশ্যই "to" দিতে হবে: <strong>"I got him to agree"</strong> (not agree)।</p>
                                </div>
                                <div className="p-3 bg-white rounded-xl border border-amber-200">
                                    <p className="font-bold text-slate-800">৪. Let-এর সাথে "allow"-এর মতো "to" মেশানো</p>
                                    <p className="text-slate-600 mt-0.5">Allow বললে to বসে (She allowed me to go), কিন্তু Let বললে to বসে না: <strong>"She let me go"</strong>।</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}
