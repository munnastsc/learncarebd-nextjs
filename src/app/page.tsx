'use client';

import Link from 'next/link';
import { ArrowRight, Radio, GraduationCap, Bot, Sparkles, MessageSquare, BookOpen, ChevronRight } from 'lucide-react';

export default function HomePage() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between overflow-hidden relative selection:bg-teal-500 selection:text-slate-900">
            {/* Background glowing decorations */}
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-500/10 blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-teal-500/10 blur-[120px] pointer-events-none" />

            {/* Navigation Header */}
            <header className="border-b border-slate-800/60 bg-slate-900/40 backdrop-blur-md px-6 py-4 relative z-10">
                <div className="mx-auto max-w-6xl flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-500 text-slate-950 font-black text-sm">L</span>
                        <div>
                            <p className="text-xs font-black uppercase tracking-[0.15em] text-teal-400">LearnCareBD AI</p>
                            <p className="text-[10px] text-slate-400">English Learning Platform</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <Link href="/admin/books" className="rounded-xl border border-slate-700 bg-slate-800/40 px-4 py-2 text-xs font-bold text-slate-300 hover:bg-slate-800 transition">
                            Admin Portal
                        </Link>
                    </div>
                </div>
            </header>

            {/* Hero & Portal Selection */}
            <main className="mx-auto max-w-6xl px-6 py-12 lg:py-20 flex-1 flex flex-col justify-center relative z-10 w-full">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-teal-300 mb-4">
                        <Sparkles size={10} />
                        WELCOME TO LEARNCAREBD AI
                    </span>
                    <h2 className="text-4xl font-black tracking-tight sm:text-6xl text-white">
                        Choose Your<br />
                        <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">Learning Path</span>
                    </h2>
                    <p className="mt-4 text-sm text-slate-400 leading-relaxed">
                        Start your journey today. Select our Spoken English module to build fluency and everyday communication, or dive into IELTS Preparation for official Cambridge structured mock tests and AI evaluations.
                    </p>
                </div>

                {/* Module Cards */}
                <div className="grid gap-8 lg:grid-cols-2">
                    
                    {/* Spoken English Card */}
                    <div className="group relative rounded-3xl border border-teal-500/20 bg-slate-900/60 p-8 shadow-2xl hover:border-teal-500/40 transition-all duration-300 hover:shadow-teal-950/20 overflow-hidden flex flex-col justify-between min-h-[380px]">
                        {/* Glowing hover accent */}
                        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        
                        <div>
                            <div className="flex items-center justify-between">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-500/10 border border-teal-500/20">
                                    <Radio className="text-teal-400" size={24} />
                                </div>
                                <span className="rounded-full bg-teal-500/10 border border-teal-500/30 px-3 py-1 text-[10px] font-black tracking-wider text-teal-300 uppercase">
                                    Fluency & Grammar
                                </span>
                            </div>

                            <h3 className="mt-6 text-2xl font-black text-white group-hover:text-teal-400 transition">
                                Spoken English Module
                            </h3>
                            <p className="mt-3 text-xs text-slate-400 leading-relaxed">
                                Perfect for beginners and intermediate learners who want to build day-to-day English speaking, listening, and reading confidence.
                            </p>

                            <ul className="mt-6 space-y-2">
                                {[
                                    'Headway Dictation & Shadowing Practice',
                                    'Interactive AI Speech Conversation Topics',
                                    'English Stories with click-to-translate Bengali meaning',
                                    'Core English Grammar quizzes & checker',
                                    'Vocabulary Builder with IPA pronunciations'
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-2 text-[11px] text-slate-400">
                                        <ChevronRight size={12} className="text-teal-500" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-8">
                            <Link href="/dashboard/spoken-english" className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-teal-500 py-4 text-xs font-black text-slate-950 hover:bg-teal-400 transition-all duration-200 shadow-lg shadow-teal-500/10">
                                Start Learning <ArrowRight size={14} />
                            </Link>
                        </div>
                    </div>

                    {/* IELTS Preparation Card */}
                    <div className="group relative rounded-3xl border border-indigo-500/20 bg-slate-900/60 p-8 shadow-2xl hover:border-indigo-500/40 transition-all duration-300 hover:shadow-indigo-950/20 overflow-hidden flex flex-col justify-between min-h-[380px]">
                        {/* Glowing hover accent */}
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                        <div>
                            <div className="flex items-center justify-between">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/10 border border-indigo-500/20">
                                    <GraduationCap className="text-indigo-400" size={24} />
                                </div>
                                <span className="rounded-full bg-indigo-500/10 border border-indigo-500/30 px-3 py-1 text-[10px] font-black tracking-wider text-indigo-300 uppercase">
                                    IELTS Academic
                                </span>
                            </div>

                            <h3 className="mt-6 text-2xl font-black text-white group-hover:text-indigo-400 transition">
                                IELTS Preparation Module
                            </h3>
                            <p className="mt-3 text-xs text-slate-400 leading-relaxed">
                                Structured for students targeting a high Band Score (7.0+). Includes official Cambridge prep content and advanced AI evaluators.
                            </p>

                            <ul className="mt-6 space-y-2">
                                {[
                                    'Official Cambridge Books 9–20 Prep Tests',
                                    '10 Full Listening & Reading Mock Tests',
                                    'AI Writing Evaluator (Task 1 & 2 Band Scoring)',
                                    'AI Speaking Lab (Part 1-3 Voice Evaluator)',
                                    'Band Predictor and progress analytics tracker'
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-2 text-[11px] text-slate-400">
                                        <ChevronRight size={12} className="text-indigo-500" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-8">
                            <Link href="/dashboard" className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-indigo-600 py-4 text-xs font-black text-white hover:bg-indigo-500 transition-all duration-200 shadow-lg shadow-indigo-500/10">
                                Start Preparing <ArrowRight size={14} />
                            </Link>
                        </div>
                    </div>

                </div>
            </main>

            {/* Footer */}
            <footer className="border-t border-slate-900/60 bg-slate-950 px-6 py-6 text-center text-xs text-slate-600 relative z-10">
                <p>© {new Date().getFullYear()} LearnCareBD AI. All rights reserved. Empowered by Gemini AI.</p>
            </footer>
        </div>
    );
}
