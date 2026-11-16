'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
    ArrowLeft, Layers, Sparkles, BookOpen, CheckCircle2,
    Maximize, Minimize, ExternalLink, HelpCircle, Trophy,
    Shield, RefreshCw, ArrowUpRight, Flame, Repeat
} from 'lucide-react';

export default function PassiveVoicePage() {
    const [activeTab, setActiveTab] = useState<'lab' | 'rules'>('lab');
    const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
    const [isCompleted, setIsCompleted] = useState<boolean>(false);
    const [xp, setXp] = useState<number>(0);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        try {
            const completed = JSON.parse(localStorage.getItem('academy_labs_completed') || '[]');
            setIsCompleted(completed.includes('spoken-passive-sentences-mega-lab'));
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
                updated = completed.filter(id => id !== 'spoken-passive-sentences-mega-lab');
                delta = -30;
                setIsCompleted(false);
            } else {
                updated = [...completed, 'spoken-passive-sentences-mega-lab'];
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
                                <span className="text-[10px] font-black uppercase tracking-wider text-teal-400 bg-teal-950/80 px-2 py-0.5 rounded border border-teal-800/60">
                                    স্পোকেন ফ্লুয়েন্সি মেগা ল্যাব
                                </span>
                                <span className="text-xs text-slate-400 hidden sm:inline">LearnCare Academy</span>
                            </div>
                            <h1 className="text-sm sm:text-base font-black text-white flex items-center gap-2 mt-0.5">
                                <Repeat className="text-teal-400" size={17} /> স্পোকেন প্যাসিভ ভয়েস ও ডেইলি প্যাসিভ সেন্টেন্সেস
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
                                        ? 'bg-teal-600 text-white shadow-sm'
                                        : 'text-slate-400 hover:text-white'
                                }`}
                            >
                                <Sparkles size={13} /> ইন্টারঅ্যাক্টিভ ল্যাব
                            </button>
                            <button
                                onClick={() => setActiveTab('rules')}
                                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
                                    activeTab === 'rules'
                                        ? 'bg-teal-600 text-white shadow-sm'
                                        : 'text-slate-400 hover:text-white'
                                }`}
                            >
                                <BookOpen size={13} /> ৮ টেন্স ও Get-Passive
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
            <div className="bg-gradient-to-r from-slate-900 via-teal-950 to-slate-900 text-white border-b border-teal-900/50 py-8 px-5">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <span className="bg-teal-500/20 text-teal-300 border border-teal-400/30 px-2.5 py-0.5 rounded-full text-xs font-bold">
                                🔄 Spoken Passive Mastery
                            </span>
                            <span className="bg-white/10 text-slate-300 px-2.5 py-0.5 rounded-full text-xs font-medium">
                                Level: Intermediate to Advanced
                            </span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-black text-white">
                            দৈনন্দিন স্পোকেন ইংলিশে প্যাসিভ বাক্যের সাবলীল ব্যবহার
                        </h2>
                        <p className="text-teal-200/90 text-sm mt-2 max-w-3xl leading-relaxed">
                            বইয়ের নিয়মে শুধু 'by him' না বলে বাস্তব জীবনে কেন ও কীভাবে প্যাসিভ ব্যবহার করবেন?
                            ৮টি টেন্সের প্যাসিভ, মোডাল প্যাসিভ (`should be done`), নেটিভদের ইনফরমাল **Get-Passive** (`got caught`), ৩০+ স্পোকেন ড্রিল ও ৫০ নম্বরের লাইভ ওয়ার্কবুক।
                        </p>
                    </div>

                    <div className="flex flex-wrap sm:flex-nowrap gap-2.5">
                        <Link
                            href="/dashboard/spoken-english/lessons"
                            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/20 transition"
                        >
                            <BookOpen size={15} /> কোর্স লেসন ২৮ <ArrowUpRight size={14} />
                        </Link>
                        <a
                            href="/academy-labs/Master_Passive_Voice_Spoken_Sentences_Mega_Lab.html"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white text-xs font-black shadow-lg shadow-teal-900/40 transition"
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
                                <span className="h-2 w-2 rounded-full bg-teal-400 animate-pulse" />
                                <span>ইন্টারঅ্যাক্টিভ স্পোকেন প্যাসিভ ল্যাব ও ৫০টি শূন্যস্থান পূরণ</span>
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
                            src="/academy-labs/Master_Passive_Voice_Spoken_Sentences_Mega_Lab.html"
                            className="w-full border-none"
                            style={{ height: isFullscreen ? 'calc(100vh - 40px)' : '850px' }}
                            title="Spoken Passive Voice Mega Lab"
                        />
                    </div>
                ) : (
                    /* Grammar & Rules Cheat Sheet */
                    <div className="space-y-6">
                        {/* Get-Passive Spotlight */}
                        <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-slate-900 text-white rounded-2xl p-6 border-2 border-indigo-400/40 shadow-lg">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-xs font-black uppercase text-amber-300 bg-amber-400/20 px-2.5 py-1 rounded-lg border border-amber-400/30">
                                    ⚡ The Native "Get-Passive"
                                </span>
                                <span className="text-xs text-indigo-200">100% Conversational</span>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-black text-white">
                                Get + V3 (দৈনন্দিন ইনফরমাল প্যাসিভ)
                            </h3>
                            <p className="text-xs sm:text-sm text-indigo-200 mt-1 max-w-2xl">
                                নেটিভ স্পিকাররা কথ্য ভাষায় <code className="bg-white/10 px-1 py-0.5 rounded text-amber-300">be + V3</code>-এর বদলে প্রচুর পরিমাণে <code className="bg-white/10 px-1 py-0.5 rounded text-amber-300">get + V3</code> ব্যবহার করেন কোনো ঘটনা ঘটা বা পরিবর্তন বোঝাতে:
                            </p>
                            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                                <div className="p-3 bg-white/10 rounded-xl border border-white/15">
                                    <p className="font-bold text-amber-300">I got stuck in traffic.</p>
                                    <p className="text-slate-300 text-[11px] mt-0.5">আমি জ্যামে আটকে গিয়েছিলাম।</p>
                                </div>
                                <div className="p-3 bg-white/10 rounded-xl border border-white/15">
                                    <p className="font-bold text-amber-300">He got fired yesterday.</p>
                                    <p className="text-slate-300 text-[11px] mt-0.5">সে গতকাল চাকরি থেকে বরখাস্ত হয়েছে।</p>
                                </div>
                                <div className="p-3 bg-white/10 rounded-xl border border-white/15">
                                    <p className="font-bold text-amber-300">Don't get hurt!</p>
                                    <p className="text-slate-300 text-[11px] mt-0.5">আঘাত পেয়ো না কিন্তু!</p>
                                </div>
                                <div className="p-3 bg-white/10 rounded-xl border border-white/15">
                                    <p className="font-bold text-amber-300">The window got broken.</p>
                                    <p className="text-slate-300 text-[11px] mt-0.5">জানালাটা ভেঙে গিয়েছিল।</p>
                                </div>
                            </div>
                        </div>

                        {/* All 8 Tenses Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {/* Present Simple */}
                            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
                                <span className="text-[10px] font-black uppercase text-teal-700 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                                    Present Simple
                                </span>
                                <h4 className="text-base font-black text-slate-900 mt-2">am / is / are + V3</h4>
                                <p className="text-xs text-slate-600 mt-2 font-mono">English is spoken worldwide.</p>
                                <p className="text-xs text-slate-500 mt-1 italic">সারা বিশ্বে ইংরেজি বলা হয়।</p>
                            </div>

                            {/* Present Continuous */}
                            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
                                <span className="text-[10px] font-black uppercase text-teal-700 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                                    Present Continuous
                                </span>
                                <h4 className="text-base font-black text-slate-900 mt-2">is/are being + V3</h4>
                                <p className="text-xs text-slate-600 mt-2 font-mono">The road is being repaired.</p>
                                <p className="text-xs text-slate-500 mt-1 italic">রাস্তাটি এখন মেরামত করা হচ্ছে।</p>
                            </div>

                            {/* Present Perfect */}
                            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
                                <span className="text-[10px] font-black uppercase text-teal-700 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                                    Present Perfect
                                </span>
                                <h4 className="text-base font-black text-slate-900 mt-2">has/have been + V3</h4>
                                <p className="text-xs text-slate-600 mt-2 font-mono">The bill has been paid.</p>
                                <p className="text-xs text-slate-500 mt-1 italic">বিলটি পরিশোধ করা হয়েছে।</p>
                            </div>

                            {/* Past Simple */}
                            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
                                <span className="text-[10px] font-black uppercase text-teal-700 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                                    Past Simple
                                </span>
                                <h4 className="text-base font-black text-slate-900 mt-2">was / were + V3</h4>
                                <p className="text-xs text-slate-600 mt-2 font-mono">My phone was stolen.</p>
                                <p className="text-xs text-slate-500 mt-1 italic">আমার ফোনটি চুরি হয়ে গিয়েছিল।</p>
                            </div>

                            {/* Past Continuous */}
                            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
                                <span className="text-[10px] font-black uppercase text-teal-700 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                                    Past Continuous
                                </span>
                                <h4 className="text-base font-black text-slate-900 mt-2">was/were being + V3</h4>
                                <p className="text-xs text-slate-600 mt-2 font-mono">Dinner was being cooked.</p>
                                <p className="text-xs text-slate-500 mt-1 italic">রাতের খাবার রান্না করা হচ্ছিল।</p>
                            </div>

                            {/* Past Perfect */}
                            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
                                <span className="text-[10px] font-black uppercase text-teal-700 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                                    Past Perfect
                                </span>
                                <h4 className="text-base font-black text-slate-900 mt-2">had been + V3</h4>
                                <p className="text-xs text-slate-600 mt-2 font-mono">The flight had been delayed.</p>
                                <p className="text-xs text-slate-500 mt-1 italic">ফ্লাইটটি পেছানো হয়েছিল।</p>
                            </div>

                            {/* Future Simple */}
                            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
                                <span className="text-[10px] font-black uppercase text-teal-700 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                                    Future Simple
                                </span>
                                <h4 className="text-base font-black text-slate-900 mt-2">will be + V3</h4>
                                <p className="text-xs text-slate-600 mt-2 font-mono">You will be notified soon.</p>
                                <p className="text-xs text-slate-500 mt-1 italic">আপনাকে শীঘ্রই জানানো হবে।</p>
                            </div>

                            {/* Modals Passive */}
                            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
                                <span className="text-[10px] font-black uppercase text-teal-700 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                                    Modals Passive
                                </span>
                                <h4 className="text-base font-black text-slate-900 mt-2">Modal + be + V3</h4>
                                <p className="text-xs text-slate-600 mt-2 font-mono">It should be checked.</p>
                                <p className="text-xs text-slate-500 mt-1 italic">এটি চেক করা উচিত।</p>
                            </div>
                        </div>

                        {/* 4 Reasons to use Passive in Spoken English */}
                        <div className="rounded-2xl border-2 border-teal-200 bg-teal-50/80 p-6">
                            <h4 className="text-base font-black text-teal-950 flex items-center gap-2">
                                <HelpCircle size={18} className="text-teal-700" /> স্পোকেন ইংলিশে কখন প্যাসিভ বলবেন? (৪টি সোনালী নিয়ম)
                            </h4>
                            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                                <div className="p-3 bg-white rounded-xl border border-teal-200">
                                    <p className="font-bold text-slate-800">১. যখন কর্তা অজানা বা অপ্রয়োজনীয়</p>
                                    <p className="text-slate-600 mt-0.5">কে কাজটি করেছে তা আপনি জানেন না: <strong>"My bicycle was stolen."</strong> (চোরের নাম না জানা থাকলেও প্যাসিভ দিয়ে স্বাভাবিকভাবে বলা যায়)।</p>
                                </div>
                                <div className="p-3 bg-white rounded-xl border border-teal-200">
                                    <p className="font-bold text-slate-800">২. যখন কাজের পরিণতি বা অবজেক্ট প্রধান</p>
                                    <p className="text-slate-600 mt-0.5">কর্তা নয়, ঘটনাটাই আসল: <strong>"100 new hospitals will be built next year."</strong></p>
                                </div>
                                <div className="p-3 bg-white rounded-xl border border-teal-200">
                                    <p className="font-bold text-slate-800">৩. ভদ্রভাবে বা অভিযোগ নরম করে বলতে (Tactful Politeness)</p>
                                    <p className="text-slate-600 mt-0.5">সরাসরি কাউকে দোষারোপ না করে: "You made a mistake" না বলে বলুন <strong>"A mistake has been made."</strong></p>
                                </div>
                                <div className="p-3 bg-white rounded-xl border border-teal-200">
                                    <p className="font-bold text-slate-800">৪. সংবাদ, ঘোষণা ও অফিসিয়াল নোটিশ</p>
                                    <p className="text-slate-600 mt-0.5">এয়ারপোর্ট বা অফিসে: <strong>"Passengers are requested to proceed to Gate 4."</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}

