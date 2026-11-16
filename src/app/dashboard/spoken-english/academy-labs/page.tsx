'use client';

import { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import {
    ArrowLeft, Search, Layers, Zap, MessageSquare, Clock, ShieldCheck,
    CheckCircle2, Compass, BookOpen, Radio, Target, ExternalLink, Download,
    Flame, Trophy, Sparkles, Filter, Check, Play, BookCheck, Shield, ChevronRight
} from 'lucide-react';
import {
    ACADEMY_LABS_DATA,
    ACADEMY_LAB_CATEGORIES,
    type AcademyLabItem
} from '../../../../lib/academyLabsData';

export default function AcademyLabsPortalPage() {
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [selectedLevel, setSelectedLevel] = useState<string>('all');
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [completedLabs, setCompletedLabs] = useState<string[]>([]);
    const [xp, setXp] = useState<number>(0);

    useEffect(() => {
        try {
            const stored = JSON.parse(localStorage.getItem('academy_labs_completed') || '[]');
            setCompletedLabs(stored);
            const userXp = Number(localStorage.getItem('spoken_xp') || 120);
            setXp(userXp);
        } catch {
            // ignore
        }
    }, []);

    const toggleComplete = (id: string, e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        let updated: string[];
        let xpDelta = 0;
        if (completedLabs.includes(id)) {
            updated = completedLabs.filter(x => x !== id);
            xpDelta = -30;
        } else {
            updated = [...completedLabs, id];
            xpDelta = 30;
        }
        setCompletedLabs(updated);
        localStorage.setItem('academy_labs_completed', JSON.stringify(updated));

        const newXp = Math.max(0, xp + xpDelta);
        setXp(newXp);
        localStorage.setItem('spoken_xp', String(newXp));
    };

    const filteredLabs = useMemo(() => {
        return ACADEMY_LABS_DATA.filter(item => {
            const matchesCat = selectedCategory === 'all' || item.category === selectedCategory;
            const matchesLevel = selectedLevel === 'all' || item.level === selectedLevel;
            const q = searchQuery.toLowerCase().trim();
            const matchesSearch = !q ||
                item.title.toLowerCase().includes(q) ||
                item.titleBn.toLowerCase().includes(q) ||
                item.description.toLowerCase().includes(q) ||
                item.descriptionBn.toLowerCase().includes(q) ||
                item.badge.toLowerCase().includes(q);
            return matchesCat && matchesLevel && matchesSearch;
        });
    }, [selectedCategory, selectedLevel, searchQuery]);

    const megaFeatured = useMemo(() => {
        return ACADEMY_LABS_DATA.filter(item => item.featured).slice(0, 6);
    }, []);

    return (
        <div className="min-h-screen bg-[#f8fafc] font-sans pb-28 text-slate-800">
            {/* Top Navigation Bar */}
            <header className="border-b border-slate-800 bg-slate-950 px-5 py-3.5 text-white sticky top-0 z-40">
                <div className="mx-auto max-w-7xl flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <Link
                            href="/dashboard/spoken-english"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700/80 text-xs font-bold text-slate-300 hover:text-white hover:border-slate-500 transition"
                        >
                            <ArrowLeft size={14} />
                            <span>স্পোকেন ইংলিশ হাব</span>
                        </Link>
                        <div className="h-5 w-px bg-slate-800 hidden sm:block" />
                        <div>
                            <p className="text-xs font-black uppercase tracking-wider text-teal-400">LearnCare Academy</p>
                            <h1 className="text-sm sm:text-base font-black text-white">
                                Interactive Master Labs & Lecture Sheets (৪৫টি স্পেশাল মডিউল)
                            </h1>
                        </div>
                    </div>

                    {/* XP & Progress Badge */}
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-black">
                            <Flame size={15} className="text-amber-400 fill-amber-400" />
                            <span>{xp} XP</span>
                        </div>
                        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-black">
                            <Trophy size={14} className="text-teal-400" />
                            <span>{completedLabs.length} / {ACADEMY_LABS_DATA.length} সম্পন্ন</span>
                        </div>
                    </div>
                </div>
            </header>

            {/* Hero Banner */}
            <section className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white px-5 py-10 border-b border-slate-800">
                <div className="max-w-7xl mx-auto space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-400/10 border border-teal-400/30 text-teal-300 text-xs font-black tracking-wide uppercase">
                        <Sparkles size={13} />
                        <span>Interactive Spoken English Super Portal</span>
                    </div>

                    <div className="max-w-3xl space-y-2">
                        <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-snug">
                            লার্ন কেয়ার একাডেমি স্পোকেন ইংলিশ মাস্টার ল্যাবস
                        </h2>
                        <p className="text-slate-300 text-sm sm:text-base font-medium leading-relaxed">
                            ১০০ ও ২০০ রিয়েল-লাইফ কথোপকথন, ৩০০ স্পোকেন বাক্য ও ৩টি করে বিকল্প, কজেটিভ ভার্বস মাস্টার ল্যাব, স্পোকেন প্যাসিভ ভয়েস মেগা ল্যাব, ১২টি টেন্স প্র্যাকটিস শিট,
                            ৫০০ ভার্ব কনজুগেশন ইঞ্জিন এবং ২২টি মোডাল ভার্ব মাস্টার এনসাইক্লোপিডিয়া — সব এখন একটি সুবিন্যস্ত পোর্টালে!
                        </p>
                    </div>

                    {/* Quick Stats Pills */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                        <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs">
                            <p className="text-2xl font-black text-teal-400">৪৭টি</p>
                            <p className="text-xs text-slate-300 font-medium">ইন্টারেক্টিভ ল্যাব ও শিট</p>
                        </div>
                        <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs">
                            <p className="text-2xl font-black text-indigo-400">৩০০+</p>
                            <p className="text-xs text-slate-300 font-medium">রিয়েল-লাইফ কনভারসেশন</p>
                        </div>
                        <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs">
                            <p className="text-2xl font-black text-amber-400">৫০০</p>
                            <p className="text-xs text-slate-300 font-medium">ভার্বস কনজুগেশন ইঞ্জিন</p>
                        </div>
                        <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs">
                            <p className="text-2xl font-black text-rose-400">২২টি</p>
                            <p className="text-xs text-slate-300 font-medium">মোডাল ভার্বস এনসাইক্লোপিডিয়া</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content Area */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 space-y-8">

                {/* 4 Flagship Mega Labs Spotlight */}
                <section className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <span className="text-xs font-black uppercase text-indigo-600 tracking-wider">স্পটলাইট ল্যাবস</span>
                            <h3 className="text-lg sm:text-xl font-black text-slate-900">
                                🌟 ফ্ল্যাগশিপ মেগা ল্যাবস ও মাস্টারক্লাস
                            </h3>
                        </div>
                        <span className="text-xs font-bold text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-200">
                            টপ রেকমেন্ডেড
                        </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {megaFeatured.map((item) => {
                            const isDone = completedLabs.includes(item.id);
                            return (
                                <div
                                    key={item.id}
                                    className="p-5 sm:p-6 rounded-3xl bg-white border border-slate-200 shadow-xs hover:shadow-md transition hover:border-indigo-300 flex flex-col justify-between space-y-4 group"
                                >
                                    <div className="space-y-2.5">
                                        <div className="flex items-start justify-between gap-3">
                                            <span className="text-[11px] font-black px-2.5 py-0.5 rounded-lg bg-indigo-50 text-indigo-700 border border-indigo-200">
                                                {item.badge}
                                            </span>
                                            <button
                                                onClick={(e) => toggleComplete(item.id, e)}
                                                className={`p-1.5 rounded-xl border transition ${
                                                    isDone
                                                        ? 'bg-teal-50 border-teal-300 text-teal-600'
                                                        : 'bg-slate-50 border-slate-200 text-slate-400 hover:text-teal-600'
                                                }`}
                                                title={isDone ? 'সম্পন্ন হয়েছে' : 'সম্পন্ন মার্ক করুন'}
                                            >
                                                <CheckCircle2 size={18} className={isDone ? 'fill-teal-600 text-white' : ''} />
                                            </button>
                                        </div>

                                        <h4 className="text-base sm:text-lg font-black text-slate-900 group-hover:text-indigo-600 transition">
                                            {item.titleBn}
                                        </h4>
                                        <p className="text-xs text-slate-500 font-mono">
                                            {item.title}
                                        </p>
                                        <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                                            {item.descriptionBn}
                                        </p>
                                    </div>

                                    <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
                                        <div className="flex items-center gap-3 text-xs text-slate-500 font-bold">
                                            <span>📊 {item.totalItems}</span>
                                            <span>⏱️ {item.estimatedTime}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Link
                                                href={`/dashboard/spoken-english/academy-labs/view?file=${encodeURIComponent(item.filename)}`}
                                                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#5B4DFB] text-white text-xs font-black hover:bg-indigo-600 transition shadow-2xs"
                                            >
                                                <Play size={13} className="fill-white" />
                                                <span>ল্যাব শুরু করুন</span>
                                            </Link>
                                            <a
                                                href={`/academy-labs/${encodeURIComponent(item.filename)}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-1.5 rounded-xl bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200 transition"
                                                title="নতুন ট্যাবে খুলুন"
                                            >
                                                <ExternalLink size={15} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* Search & Filter Toolbar */}
                <section className="bg-white p-4 sm:p-5 rounded-3xl border border-slate-200 shadow-xs space-y-4">
                    {/* Search Input */}
                    <div className="relative">
                        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input
                            type="text"
                            placeholder="টেন্স, মোডাল, কনভারসেশন বা টপিকের নাম দিয়ে খুঁজুন (Search by title, topic, verb, rule)..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-slate-50 border border-slate-200 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition"
                        />
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery('')}
                                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-700"
                            >
                                ক্লিয়ার
                            </button>
                        )}
                    </div>

                    {/* Category Tabs */}
                    <div className="flex flex-wrap gap-2 pt-1 border-t border-slate-100">
                        {ACADEMY_LAB_CATEGORIES.map((cat) => {
                            const isActive = selectedCategory === cat.id;
                            return (
                                <button
                                    key={cat.id}
                                    onClick={() => setSelectedCategory(cat.id)}
                                    className={`px-3.5 py-1.5 rounded-xl text-xs font-black transition ${
                                        isActive
                                            ? 'bg-[#5B4DFB] text-white shadow-2xs'
                                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                                    }`}
                                >
                                    {cat.label}
                                </button>
                            );
                        })}
                    </div>

                    {/* Level Pills */}
                    <div className="flex flex-wrap items-center gap-2 pt-1 text-xs font-bold text-slate-500">
                        <span>লেভেল নির্বাচন:</span>
                        {['all', 'Beginner', 'Intermediate', 'Advanced'].map((lvl) => (
                            <button
                                key={lvl}
                                onClick={() => setSelectedLevel(lvl)}
                                className={`px-2.5 py-1 rounded-lg transition ${
                                    selectedLevel === lvl
                                        ? 'bg-slate-900 text-white'
                                        : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                                }`}
                            >
                                {lvl === 'all' ? 'সকল লেভেল' : lvl}
                            </button>
                        ))}
                        <span className="ml-auto text-slate-400 text-xs">
                            পাওয়া গেছে: <b className="text-slate-800">{filteredLabs.length}</b>টি মডিউল
                        </span>
                    </div>
                </section>

                {/* Modules Grid */}
                <section className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {filteredLabs.map((item) => {
                            const isDone = completedLabs.includes(item.id);

                            return (
                                <div
                                    key={item.id}
                                    className={`p-5 rounded-3xl bg-white border transition flex flex-col justify-between space-y-4 hover:shadow-md ${
                                        isDone
                                            ? 'border-teal-300 bg-teal-50/20'
                                            : 'border-slate-200 hover:border-indigo-300'
                                    }`}
                                >
                                    <div className="space-y-2">
                                        <div className="flex items-start justify-between gap-2">
                                            <span className={`text-[10px] font-black px-2.5 py-0.5 rounded-lg border ${
                                                item.category === 'mega-labs'
                                                    ? 'bg-rose-50 text-rose-700 border-rose-200'
                                                    : item.category === 'tenses'
                                                    ? 'bg-indigo-50 text-indigo-700 border-indigo-200'
                                                    : item.category === 'modals'
                                                    ? 'bg-amber-50 text-amber-700 border-amber-200'
                                                    : 'bg-teal-50 text-teal-700 border-teal-200'
                                            }`}>
                                                {item.badge}
                                            </span>

                                            <button
                                                onClick={(e) => toggleComplete(item.id, e)}
                                                className={`p-1 rounded-lg transition ${
                                                    isDone
                                                        ? 'text-teal-600'
                                                        : 'text-slate-300 hover:text-teal-600'
                                                }`}
                                                title={isDone ? 'সম্পন্ন' : 'সম্পন্ন মার্ক করুন'}
                                            >
                                                <CheckCircle2 size={17} className={isDone ? 'fill-teal-600 text-white' : ''} />
                                            </button>
                                        </div>

                                        <h4 className="text-base font-black text-slate-900 leading-snug">
                                            {item.titleBn}
                                        </h4>
                                        <p className="text-[11px] text-slate-500 font-mono line-clamp-1">
                                            {item.title}
                                        </p>
                                        <p className="text-xs text-slate-600 font-medium leading-relaxed line-clamp-2">
                                            {item.descriptionBn}
                                        </p>
                                    </div>

                                    <div className="space-y-3 pt-2 border-t border-slate-100">
                                        <div className="flex items-center justify-between text-[11px] text-slate-500 font-bold">
                                            <span>📊 {item.totalItems}</span>
                                            <span>⏱️ {item.estimatedTime}</span>
                                        </div>

                                        <div className="flex items-center gap-1.5">
                                            <Link
                                                href={`/dashboard/spoken-english/academy-labs/view?file=${encodeURIComponent(item.filename)}`}
                                                className="flex-1 text-center py-2 px-3 rounded-xl bg-slate-900 hover:bg-[#5B4DFB] text-white text-xs font-black transition flex items-center justify-center gap-1.5 shadow-2xs"
                                            >
                                                <Play size={12} className="fill-white" />
                                                <span>ল্যাব খুলুন</span>
                                            </Link>
                                            <a
                                                href={`/academy-labs/${encodeURIComponent(item.filename)}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2 rounded-xl bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200 transition"
                                                title="নতুন ফুল পেজ ট্যাবে খুলুন"
                                            >
                                                <ExternalLink size={14} />
                                            </a>
                                            {item.pdfUrl && (
                                                <a
                                                    href={item.pdfUrl}
                                                    download
                                                    className="p-2 rounded-xl bg-amber-50 text-amber-700 hover:bg-amber-100 border border-amber-200 transition"
                                                    title="পিডিএফ লেকচার শিট ডাউনলোড করুন"
                                                >
                                                    <Download size={14} />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {filteredLabs.length === 0 && (
                        <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 space-y-3">
                            <p className="text-3xl">🔍</p>
                            <h4 className="text-base font-black text-slate-800">কোনো মডিউল পাওয়া যায়নি</h4>
                            <p className="text-xs text-slate-500">অনুগ্রহ করে ভিন্ন কোনো শব্দ বা ক্যাটাগরি দিয়ে চেষ্টা করুন।</p>
                            <button
                                onClick={() => { setSearchQuery(''); setSelectedCategory('all'); setSelectedLevel('all'); }}
                                className="px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold"
                            >
                                ফিল্টার রিসেট করুন
                            </button>
                        </div>
                    )}
                </section>
            </main>
        </div>
    );
}

