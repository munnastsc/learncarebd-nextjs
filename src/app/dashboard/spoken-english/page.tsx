'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import {
    ArrowLeft, ArrowUpRight, Radio, MessageSquare, Library, Pencil, PenLine,
    SpellCheck, BookOpen, Zap, Flame, Trophy, Sparkles, Award
} from 'lucide-react';

export default function SpokenEnglishDashboard() {
    const [streak, setStreak] = useState(0);
    const [completedCount, setCompletedCount] = useState(0);

    useEffect(() => {
        // Load streak and progress from localstorage (matching headway stats)
        try {
            const today = new Date().toISOString().slice(0, 10);
            const days: string[] = JSON.parse(localStorage.getItem('spoken_streak_days') || '[]');
            let s = 0;
            const d = new Date(today);
            while (true) {
                const key = d.toISOString().slice(0, 10);
                if (!days.includes(key)) break;
                s++;
                d.setDate(d.getDate() - 1);
            }
            setStreak(s);
        } catch { /* ignore */ }

        try {
            const p = JSON.parse(localStorage.getItem('spoken_progress') || '{}');
            const completed = Object.values(p).filter((track: any) => (track?.played || 0) > 0).length;
            setCompletedCount(completed);
        } catch { /* ignore */ }
    }, []);

    const features = [
        {
            title: 'Headway Dictation',
            desc: 'New Headway Beginner lessons with listening, dictation, and shadowing modes.',
            href: '/dashboard/spoken-english/headway',
            icon: <Radio className="text-teal-600" size={24} />,
            color: 'from-teal-50 to-cyan-50 border-teal-100 hover:border-teal-300',
            badge: 'RECOMMENDED'
        },
        {
            title: 'Pronunciation Lab',
            desc: 'Evaluate and improve your spoken English pronunciation with real-time speech analysis.',
            href: '/dashboard/spoken-english/pronunciation',
            icon: <Sparkles className="text-cyan-600" size={24} />,
            color: 'from-cyan-50 to-blue-50 border-cyan-100 hover:border-cyan-300',
            badge: 'LIVE SPEAK'
        },
        {
            title: 'Conversational Phrases',
            desc: 'Learn high-frequency daily phrases with interactive playbacks, MCQ quizzes, and fill-in-the-gap exercises.',
            href: '/dashboard/spoken-english/conversations',
            icon: <MessageSquare className="text-emerald-600" size={24} />,
            color: 'from-emerald-50 to-teal-50 border-emerald-100 hover:border-emerald-300',
            badge: 'QUIZ & MCQS'
        },
        {
            title: 'AI Conversation',
            desc: 'Practice speaking English in real-life contexts with interactive AI audio.',
            href: '/dashboard/ai-conversation',
            icon: <MessageSquare className="text-rose-600" size={24} />,
            color: 'from-rose-50 to-orange-50 border-rose-100 hover:border-rose-300',
            badge: 'POPULAR'
        },
        {
            title: 'English Stories',
            desc: 'Read engaging short stories. Click any word to see its Bengali meaning instantly.',
            href: '/dashboard/stories',
            icon: <Library className="text-emerald-600" size={24} />,
            color: 'from-emerald-50 to-teal-50 border-emerald-100 hover:border-emerald-300',
            badge: 'FUN READ'
        },
        {
            title: 'Grammar Academy',
            desc: 'Learn grammar from absolute scratch with unit-based lessons and interactive practice quizzes.',
            href: '/dashboard/spoken-english/grammar-academy',
            icon: <Pencil className="text-violet-600" size={24} />,
            color: 'from-violet-50 to-purple-50 border-violet-100 hover:border-violet-300',
            badge: 'UNIT BASED'
        },
        {
            title: 'Grammar Practice',
            desc: 'Interactive grammar quizzes with Easy, Medium, and Hard difficulty levels.',
            href: '/dashboard/grammar-practice',
            icon: <PenLine className="text-purple-600" size={24} />,
            color: 'from-purple-50 to-indigo-50 border-purple-100 hover:border-purple-300',
            badge: 'PRACTICE'
        },
        {
            title: 'Grammar Checker',
            desc: 'Check your writing structure and let AI explain the rules in Bengali.',
            href: '/dashboard/grammar',
            icon: <SpellCheck className="text-indigo-600" size={24} />,
            color: 'from-indigo-50 to-blue-50 border-indigo-100 hover:border-indigo-300',
            badge: 'AI DRIVEN'
        },
        {
            title: 'Vocabulary & Words',
            desc: 'Learn & practice phrasal verbs, important verbs, nouns, adjectives, adverbs, prepositions, conjunctions, and interjections.',
            href: '/dashboard/spoken-english/words',
            icon: <BookOpen className="text-amber-600" size={24} />,
            color: 'from-amber-50 to-yellow-50 border-amber-100 hover:border-amber-300',
            badge: 'VOCAB'
        }
    ];

    return (
        <div className="min-h-screen bg-[#f8fafc]">

            {/* Universal Top Navigation Header */}
            <header className="border-b border-slate-800 bg-slate-950 px-5 py-3 text-white">
                <div className="mx-auto max-w-6xl flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <Link href="/" className="flex items-center gap-2.5 group">
                            <div className="bg-white px-2 py-1 rounded-lg shadow-sm border border-white/20 flex items-center justify-center group-hover:scale-105 transition">
                                <img 
                                    src="https://learncarebd.com/wp-content/uploads/2025/12/Learncare-academy-1-scaled.png" 
                                    alt="LearnCareBD" 
                                    className="h-7 w-auto object-contain"
                                />
                            </div>
                            <div>
                                <p className="text-xs font-black uppercase tracking-wider text-teal-400">Learncare Academy</p>
                                <p className="text-[9px] text-slate-400">be unstoppable</p>
                            </div>
                        </Link>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                        <Link 
                            href="/" 
                            className="inline-flex items-center gap-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 px-3.5 py-1.5 text-xs font-bold transition border border-slate-700"
                        >
                            🏠 হোম পেজ (Home)
                        </Link>
                        <Link 
                            href="/dashboard" 
                            className="inline-flex items-center gap-1.5 rounded-xl bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300 px-3 py-1.5 text-xs font-bold transition border border-indigo-500/30"
                        >
                            🎓 IELTS Academic
                        </Link>
                        <Link 
                            href="/courses" 
                            className="inline-flex items-center gap-1.5 rounded-xl bg-teal-500/10 hover:bg-teal-500/20 text-teal-300 px-3 py-1.5 text-xs font-bold transition border border-teal-500/30"
                        >
                            📚 Courses
                        </Link>
                        <a 
                            href="https://wa.me/8801714740430" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hidden sm:inline-flex items-center gap-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white px-3 py-1.5 text-xs font-black transition shadow-sm"
                        >
                            💬 WA: 01714740430
                        </a>
                    </div>
                </div>
            </header>

            {/* Header Banner */}
            <div className="bg-gradient-to-br from-slate-900 via-teal-950 to-indigo-950 px-6 py-12 lg:px-12 text-white">
                <div className="mx-auto max-w-6xl">
                    <div className="flex flex-wrap items-start justify-between gap-6">
                        <div>
                            <Link href="/" className="inline-flex items-center gap-1.5 text-xs text-teal-300 hover:underline mb-4 font-semibold">
                                <ArrowLeft size={14} /> Back to Portal
                            </Link>
                            <span className="flex items-center gap-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-teal-300 mb-3 w-fit">
                                <Sparkles size={10} />
                                SPOKEN ENGLISH MODULE
                            </span>
                            <h1 className="text-3xl font-black lg:text-5xl leading-tight">
                                Spoken English &<br />
                                <span className="bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">Fluency Hub</span>
                            </h1>
                            <p className="mt-3 text-sm text-slate-300 max-w-xl leading-relaxed">
                                Practice listening, pronunciation, everyday conversations, stories, and grammar with instant AI feedback.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            <Link href="/dashboard"
                                className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-black text-white hover:bg-indigo-500 transition shadow-lg shadow-indigo-900/30">
                                Switch to IELTS Module <ArrowUpRight size={16} />
                            </Link>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="mt-8 flex flex-wrap gap-4">
                        <div className="rounded-xl border border-white/5 bg-white/5 backdrop-blur-sm px-5 py-3 flex items-center gap-3">
                            <Flame size={20} className="text-orange-400" />
                            <div>
                                <p className="text-2xl font-black">{streak}</p>
                                <p className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold">Day Streak</p>
                            </div>
                        </div>
                        <div className="rounded-xl border border-white/5 bg-white/5 backdrop-blur-sm px-5 py-3 flex items-center gap-3">
                            <Trophy size={20} className="text-teal-400" />
                            <div>
                                <p className="text-2xl font-black">{completedCount}</p>
                                <p className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold">Lessons Practiced</p>
                            </div>
                        </div>
                        <div className="rounded-xl border border-white/5 bg-white/5 backdrop-blur-sm px-5 py-3 flex items-center gap-3">
                            <Award size={20} className="text-amber-400" />
                            <div>
                                <p className="text-2xl font-black">Active</p>
                                <p className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold">Learning Plan</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Grid */}
            <div className="mx-auto max-w-6xl px-6 py-10">
                <div className="mb-6">
                    <h2 className="text-xl font-black text-slate-900">Your Learning Tools</h2>
                    <p className="text-xs text-slate-500 mt-1">Select a practice method below to start building your English fluency.</p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((f, i) => (
                        <Link
                            key={i}
                            href={f.href}
                            className={`group relative flex flex-col rounded-2xl border bg-gradient-to-br p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${f.color}`}
                        >
                            <div className="flex items-start justify-between">
                                <div className="rounded-xl bg-white p-3 shadow-sm border border-slate-100">
                                    {f.icon}
                                </div>
                                <span className="rounded-full bg-white/80 border border-slate-100 px-2 py-0.5 text-[9px] font-black tracking-wider text-slate-500">
                                    {f.badge}
                                </span>
                            </div>

                            <p className="mt-4 text-lg font-black text-slate-900 group-hover:text-teal-700 transition">
                                {f.title}
                            </p>
                            <p className="mt-2 text-xs text-slate-500 leading-relaxed flex-1">
                                {f.desc}
                            </p>

                            <div className="mt-4 flex items-center gap-1.5 text-xs font-bold text-teal-700 group-hover:underline">
                                Start Practice <ArrowUpRight size={14} />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
