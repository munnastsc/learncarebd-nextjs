'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import {
    ArrowLeft, ArrowUpRight, Radio, MessageSquare, Library, Pencil, PenLine,
    SpellCheck, BookOpen, Zap, Flame, Trophy, Sparkles, Award, Layers,
    CheckCircle2, Compass, CheckSquare, Target, Play, AlertTriangle, Mic
} from 'lucide-react';

export default function SpokenEnglishDashboard() {
    const [streak, setStreak] = useState(0);
    const [xp, setXp] = useState(0);
    const [completedMissions, setCompletedMissions] = useState<Record<string, boolean>>({});

    useEffect(() => {
        // Load streak from localstorage
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
            setStreak(s === 0 ? 1 : s); // give 1 day starter motivation
        } catch {
            setStreak(1);
        }

        // Load XP
        const storedXp = Number(localStorage.getItem('spoken_xp') || 120);
        setXp(storedXp);

        // Load daily missions state for today
        const todayStr = new Date().toISOString().slice(0, 10);
        const storedMissions = JSON.parse(localStorage.getItem(`daily_missions_${todayStr}`) || '{}');
        setCompletedMissions(storedMissions);
    }, []);

    const toggleMission = (id: string) => {
        const todayStr = new Date().toISOString().slice(0, 10);
        const updated = { ...completedMissions, [id]: !completedMissions[id] };
        setCompletedMissions(updated);
        localStorage.setItem(`daily_missions_${todayStr}`, JSON.stringify(updated));

        // Add 25 XP
        if (updated[id]) {
            const newXp = xp + 25;
            setXp(newXp);
            localStorage.setItem('spoken_xp', String(newXp));
        }
    };

    const dailyMissions = [
        {
            id: 'm1',
            title: 'জিহ্বার জড়তা কাটান (১টি Tongue Twister বলুন)',
            link: '/dashboard/spoken-english/pronunciation',
            icon: '👅',
            actionText: 'উচ্চারণ ল্যাবে যান',
        },
        {
            id: 'm2',
            title: '১টি জাদুকরী ফর্মুলা শিখে ৩টি বাক্য তৈরি করুন',
            link: '/dashboard/spoken-english/patterns',
            icon: '💡',
            actionText: 'প্যাটার্ন বিল্ডারে যান',
        },
        {
            id: 'm3',
            title: 'বাঙালিদের ৩টি কমন ভুল ও সঠিক রূপ শিখুন',
            link: '/dashboard/spoken-english/common-mistakes',
            icon: '⚠️',
            actionText: 'কমন ভুল শুধরান',
        },
        {
            id: 'm4',
            title: '১-মিনিট একক স্পিকিং সিমুলেটরে কথা বলুন',
            link: '/dashboard/spoken-english/solo-speech',
            icon: '🎙️',
            actionText: 'একক স্পিকিং টেস্ট',
        },
        {
            id: 'm5',
            title: 'বাস্তব জীবনের ৫টি ডায়ালগ শুনুন ও বলুন',
            link: '/dashboard/spoken-english/conversations',
            icon: '🗣️',
            actionText: 'ডায়ালগ প্র্যাকটিস',
        },
        {
            id: 'm6',
            title: 'Headway অডিও শুনে ডিকটেশন ও শ্যাডোয়িং করুন',
            link: '/dashboard/spoken-english/headway',
            icon: '🎧',
            actionText: 'লিসেনিং শুরু করুন',
        },
    ];

    const completedMissionCount = Object.values(completedMissions).filter(Boolean).length;

    const features = [
        {
            title: 'Common Mistakes & False Habits',
            desc: 'বাঙালিদের বহুল প্রচলিত ২৫+ ভুল যেমন "I am agree", "Cousin brother", "He told to me"-এর সহজ বাংলা ব্যাখ্যা ও শুদ্ধ রূপ।',
            href: '/dashboard/spoken-english/common-mistakes',
            icon: <AlertTriangle className="text-rose-600" size={26} />,
            color: 'from-rose-50 via-pink-50 to-orange-50 border-rose-200 hover:border-rose-400 shadow-sm',
            badge: '🔥 100% FREE & MUST LEARN',
            badgeColor: 'bg-rose-100 text-rose-800 border-rose-300'
        },
        {
            title: '1-Minute Solo Speech Simulator',
            desc: 'পার্টনার ছাড়াই ২০+ টপিকে ১৫ সেকেন্ড ভেবে ৬০ সেকেন্ড অনর্গল বলুন। লাইভ ভয়েস রেকর্ড ও সেলফ-অ্যাসেসমেন্ট।',
            href: '/dashboard/spoken-english/solo-speech',
            icon: <Mic className="text-teal-600" size={26} />,
            color: 'from-teal-50 via-emerald-50 to-cyan-50 border-teal-200 hover:border-teal-400 shadow-sm',
            badge: '🎙️ SOLO PRACTICE JAM',
            badgeColor: 'bg-teal-100 text-teal-800 border-teal-300'
        },
        {
            title: 'Sentence Formulas & Patterns',
            desc: 'মুখস্থ না করে মাত্র একটি ফর্মুলা দিয়ে শত শত বাক্য নিজে নিজে বানিয়ে মুখে বলার ম্যাজিক মেথড।',
            href: '/dashboard/spoken-english/patterns',
            icon: <Layers className="text-amber-500" size={26} />,
            color: 'from-amber-50 via-orange-50 to-yellow-50 border-amber-200 hover:border-amber-400 shadow-sm',
            badge: '⚡ PATTERN ENGINE',
            badgeColor: 'bg-amber-100 text-amber-800 border-amber-300'
        },
        {
            title: 'Pronunciation & Tongue Twisters',
            desc: 'জিহ্বার জড়তা কাটানোর টাং টুইস্টার ও রিয়েল-টাইম এআই স্পিচ অ্যানালাইজার দিয়ে ব্রিটিশ উচ্চারণ শিখুন।',
            href: '/dashboard/spoken-english/pronunciation',
            icon: <Sparkles className="text-cyan-600" size={24} />,
            color: 'from-cyan-50 to-blue-50 border-cyan-100 hover:border-cyan-300',
            badge: '100% FREE LIVE SPEAK',
            badgeColor: 'bg-cyan-100 text-cyan-800 border-cyan-200'
        },
        {
            title: 'Conversational Phrases & Situations',
            desc: 'ইন্টারভিউ, রেস্টুরেন্ট, ডাক্তার, শপিং ও এয়ারপোর্টের প্রয়োজনীয় বাক্য ও কুইজ এক্সারসাইজ।',
            href: '/dashboard/spoken-english/conversations',
            icon: <MessageSquare className="text-emerald-600" size={24} />,
            color: 'from-emerald-50 to-teal-50 border-emerald-100 hover:border-emerald-300',
            badge: 'PRACTICAL DIALOGUES',
            badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200'
        },
        {
            title: 'Headway Audio Dictation',
            desc: 'New Headway লেসনের ব্রিটিশ অডিওর সাথে শ্যাডোয়িং এবং লিসেনিং টু স্পিকিং প্র্যাকটিস।',
            href: '/dashboard/spoken-english/headway',
            icon: <Radio className="text-teal-600" size={24} />,
            color: 'from-teal-50 to-cyan-50 border-teal-100 hover:border-teal-300',
            badge: 'BRITISH ACCENT LAB',
            badgeColor: 'bg-teal-100 text-teal-800 border-teal-200'
        },
        {
            title: 'AI Conversation Simulator',
            desc: 'বাস্তব জীবনের বিভিন্ন বিষয়ে এআই টিউটরের সাথে ভয়েসে সরাসরি কথা বলে ফ্লুয়েন্সি বাড়ান।',
            href: '/dashboard/ai-conversation',
            icon: <MessageSquare className="text-rose-600" size={24} />,
            color: 'from-rose-50 to-orange-50 border-rose-100 hover:border-rose-300',
            badge: 'AI VOICE PARTNER',
            badgeColor: 'bg-rose-100 text-rose-800 border-rose-200'
        },
        {
            title: 'English Stories with Bengali Audio',
            desc: 'সহজ ও আকর্ষণীয় ইংরেজি গল্প পড়ুন। যেকোনো শব্দে ট্যাপ করলেই সাথে সাথে বাংলা অর্থ ও উচ্চারণ দেখুন।',
            href: '/dashboard/stories',
            icon: <Library className="text-indigo-600" size={24} />,
            color: 'from-indigo-50 to-blue-50 border-indigo-100 hover:border-indigo-300',
            badge: 'FUN READING',
            badgeColor: 'bg-indigo-100 text-indigo-800 border-indigo-200'
        },
        {
            title: 'Grammar Academy for Speaking',
            desc: 'ভুল ছাড়া কথা বলতে প্রয়োজনীয় বেসিক ব্যাকরণ ইউনিট-ভিত্তিক পাঠ ও ইন্টারেক্টিভ কুইজ।',
            href: '/dashboard/spoken-english/grammar-academy',
            icon: <Pencil className="text-violet-600" size={24} />,
            color: 'from-violet-50 to-purple-50 border-violet-100 hover:border-violet-300',
            badge: 'SPEAKING GRAMMAR',
            badgeColor: 'bg-violet-100 text-violet-800 border-violet-200'
        },
        {
            title: 'Grammar Practice Quizzes',
            desc: 'সহজ থেকে অ্যাডভান্সড লেভেলের মাল্টিপল চয়েস কুইজ দিয়ে নিজের দুর্বলতা চিহ্নিত করুন।',
            href: '/dashboard/grammar-practice',
            icon: <PenLine className="text-purple-600" size={24} />,
            color: 'from-purple-50 to-indigo-50 border-purple-100 hover:border-purple-300',
            badge: 'QUIZ ENGINE',
            badgeColor: 'bg-purple-100 text-purple-800 border-purple-200'
        },
        {
            title: 'AI Grammar Checker',
            desc: 'আপনার লেখা যেকোনো বাক্য বা প্যারাগ্রাফ চেক করুন, এআই বাংলায় ভুলগুলো বুঝিয়ে দেবে।',
            href: '/dashboard/grammar',
            icon: <SpellCheck className="text-indigo-600" size={24} />,
            color: 'from-indigo-50 to-blue-50 border-indigo-100 hover:border-indigo-300',
            badge: 'INSTANT EXPLANATION',
            badgeColor: 'bg-indigo-100 text-indigo-800 border-indigo-200'
        },
        {
            title: 'Vocabulary & High-Frequency Words',
            desc: 'দৈনন্দিন কথপোকথনে ব্যবহৃত গুরুত্বপূর্ণ ভার্ব, ফ্রেজাল ভার্ব, প্রিপজিশন ও ইডিয়মস।',
            href: '/dashboard/spoken-english/words',
            icon: <BookOpen className="text-amber-600" size={24} />,
            color: 'from-amber-50 to-yellow-50 border-amber-100 hover:border-amber-300',
            badge: 'DAILY WORDS',
            badgeColor: 'bg-amber-100 text-amber-800 border-amber-200'
        }
    ];

    return (
        <div className="min-h-screen bg-[#f8fafc] font-sans pb-24">

            {/* Universal Top Navigation Header */}
            <header className="border-b border-slate-800 bg-slate-950 px-5 py-3 text-white sticky top-0 z-40">
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
                                <p className="text-[9px] text-slate-400">Spoken Fluency Hub</p>
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
                            🎓 Cambridge IELTS Hub
                        </Link>
                        <Link 
                            href="/books" 
                            className="inline-flex items-center gap-1.5 rounded-xl bg-teal-500/10 hover:bg-teal-500/20 text-teal-300 px-3 py-1.5 text-xs font-bold transition border border-teal-500/30"
                        >
                            📚 Books
                        </Link>
                        <a 
                            href="https://wa.me/8801714740430" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hidden sm:inline-flex items-center gap-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white px-3 py-1.5 text-xs font-black transition shadow-sm"
                        >
                            💬 WhatsApp Support
                        </a>
                    </div>
                </div>
            </header>

            {/* Header Banner */}
            <div className="bg-gradient-to-br from-slate-900 via-teal-950 to-indigo-950 px-6 py-12 lg:px-12 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
                <div className="mx-auto max-w-6xl relative z-10">
                    <div className="flex flex-wrap items-start justify-between gap-6">
                        <div>
                            <Link href="/" className="inline-flex items-center gap-1.5 text-xs text-teal-300 hover:underline mb-3 font-semibold">
                                <ArrowLeft size={14} /> Back to Portal
                            </Link>
                            <span className="flex items-center gap-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-teal-300 mb-3 w-fit">
                                <Sparkles size={11} /> 100% FREE SELF-DEVELOPMENT ECOSYSTEM
                            </span>
                            <h1 className="text-3xl font-black lg:text-5xl leading-tight">
                                Spoken English &<br />
                                <span className="bg-gradient-to-r from-teal-400 via-cyan-300 to-amber-300 bg-clip-text text-transparent">Complete Fluency Hub</span>
                            </h1>
                            <p className="mt-3 text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
                                কোনো পেইড কোর্স ছাড়াও প্রতিদিন ঘরে বসে মুখের জড়তা দূর করুন, ফর্মুলা দিয়ে বাক্য তৈরি করুন এবং এআই-এর সাথে কথা বলে আত্মবিশ্বাসী স্পিকার হয়ে উঠুন।
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            <Link href="/dashboard"
                                className="inline-flex items-center gap-2 rounded-2xl bg-indigo-600 px-5 py-3 text-xs sm:text-sm font-black text-white hover:bg-indigo-500 transition shadow-lg shadow-indigo-900/30">
                                Switch to IELTS Hub <ArrowUpRight size={16} />
                            </Link>
                        </div>
                    </div>

                    {/* Stats Dashboard */}
                    <div className="mt-8 flex flex-wrap gap-4">
                        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md px-5 py-3.5 flex items-center gap-3">
                            <Flame size={22} className="text-orange-400" />
                            <div>
                                <p className="text-2xl font-black">{streak} Days</p>
                                <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Daily Streak</p>
                            </div>
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md px-5 py-3.5 flex items-center gap-3">
                            <Trophy size={22} className="text-amber-400" />
                            <div>
                                <p className="text-2xl font-black">{xp} XP</p>
                                <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Fluency Score</p>
                            </div>
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md px-5 py-3.5 flex items-center gap-3">
                            <Target size={22} className="text-teal-400" />
                            <div>
                                <p className="text-2xl font-black">{completedMissionCount} / 4</p>
                                <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Today's Missions</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Daily Fluency Missions Widget (Gamification) */}
            <div className="mx-auto max-w-6xl px-6 -mt-6 relative z-20">
                <div className="bg-white border-2 border-teal-500/30 rounded-3xl p-6 sm:p-8 shadow-xl">
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-5">
                        <div>
                            <div className="flex items-center gap-2">
                                <span className="bg-teal-100 text-teal-800 text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full">
                                    DAILY MISSION
                                </span>
                                <span className="text-xs font-bold text-slate-500">
                                    আজকের ৫ মিনিটের প্র্যাকটিস টাস্ক
                                </span>
                            </div>
                            <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                                Today's Fluency Challenge
                            </h2>
                        </div>
                        <div className="text-right">
                            <p className="text-xs font-bold text-slate-500 mb-1">
                                অগ্রগতি: {completedMissionCount} of 4 সম্পন্ন
                            </p>
                            <div className="w-36 h-2 bg-slate-100 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-gradient-to-r from-teal-500 to-emerald-500 transition-all duration-500"
                                    style={{ width: `${(completedMissionCount / 4) * 100}%` }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Missions Checklist Grid */}
                    <div className="grid sm:grid-cols-2 gap-3.5">
                        {dailyMissions.map(m => {
                            const isDone = completedMissions[m.id];
                            return (
                                <div
                                    key={m.id}
                                    className={`p-4 rounded-2xl border transition-all flex items-center justify-between gap-3 ${
                                        isDone
                                            ? 'bg-emerald-50/70 border-emerald-200'
                                            : 'bg-slate-50 hover:bg-teal-50/40 border-slate-200/80'
                                    }`}
                                >
                                    <div className="flex items-center gap-3">
                                        <button
                                            onClick={() => toggleMission(m.id)}
                                            className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition shrink-0 ${
                                                isDone
                                                    ? 'bg-emerald-600 border-emerald-600 text-white'
                                                    : 'border-slate-300 hover:border-teal-500 bg-white'
                                            }`}
                                        >
                                            {isDone && <CheckCircle2 size={16} />}
                                        </button>
                                        <div>
                                            <p className={`text-xs sm:text-sm font-bold ${isDone ? 'line-through text-slate-400' : 'text-slate-900'}`}>
                                                <span className="mr-1.5">{m.icon}</span> {m.title}
                                            </p>
                                        </div>
                                    </div>

                                    <Link
                                        href={m.link}
                                        className="text-[11px] font-black text-teal-700 bg-white border border-teal-200 hover:bg-teal-600 hover:text-white px-3 py-1.5 rounded-xl transition shrink-0 shadow-2xs"
                                    >
                                        {m.actionText} →
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* 4-Step Spoken English Mastery Roadmap */}
            <div className="mx-auto max-w-6xl px-6 pt-12">
                <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-6 sm:p-8 text-white border border-slate-800 shadow-md">
                    <div className="max-w-2xl mb-6">
                        <span className="text-[10px] font-black uppercase tracking-widest text-teal-400 bg-teal-400/10 px-2.5 py-0.5 rounded-full border border-teal-400/20">
                            LEARNING ROADMAP
                        </span>
                        <h3 className="text-xl sm:text-2xl font-black mt-2">
                            কোর্স ছাড়াই যেভাবে ইংরেজি বলা শিখবেন (৪টি বৈজ্ঞানিক ধাপ)
                        </h3>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                            <span className="text-xs font-black text-teal-400 bg-teal-400/10 px-2 py-0.5 rounded-lg">ধাপ ১</span>
                            <h4 className="font-bold text-white text-sm mt-2 mb-1">মুখের জড়তা দূর করুন</h4>
                            <p className="text-[11px] text-slate-300 leading-relaxed">
                                প্রতিদিন টাং টুইস্টার বলুন। জিহ্বা ও ঠোঁটের পেশী ইংরেজির জন্য ফ্রি হবে।
                            </p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                            <span className="text-xs font-black text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded-lg">ধাপ ২</span>
                            <h4 className="font-bold text-white text-sm mt-2 mb-1">ফর্মুলা দিয়ে বাক্য বানান</h4>
                            <p className="text-[11px] text-slate-300 leading-relaxed">
                                গ্রামার মুখস্থ না করে প্যাটার্ন ফর্মুলা দিয়ে শত শত বাক্য নিজে নিজে বানিয়ে মুখে বলুন।
                            </p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                            <span className="text-xs font-black text-cyan-400 bg-cyan-400/10 px-2 py-0.5 rounded-lg">ধাপ ৩</span>
                            <h4 className="font-bold text-white text-sm mt-2 mb-1">সিচুয়েশনাল ডায়ালগ</h4>
                            <p className="text-[11px] text-slate-300 leading-relaxed">
                                ইন্টারভিউ, ডাক্তার, রেস্টুরেন্ট ও শপিংয়ের প্র্যাকটিক্যাল ফ্রেজগুলো বারবার মুখে চর্চা করুন।
                            </p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                            <span className="text-xs font-black text-rose-400 bg-rose-400/10 px-2 py-0.5 rounded-lg">ধাপ ৪</span>
                            <h4 className="font-bold text-white text-sm mt-2 mb-1">লিসেনিং ও শ্যাডোয়িং</h4>
                            <p className="text-[11px] text-slate-300 leading-relaxed">
                                Headway ব্রিটিশ অডিও শুনুন এবং সাথে সাথে সুর ও টান হুবহু নকল করে মুখে বলুন।
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* All Features Grid */}
            <div className="mx-auto max-w-6xl px-6 pt-12">
                <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
                    <div>
                        <h2 className="text-2xl font-black text-slate-900">Spoken English Learning Tools</h2>
                        <p className="text-xs text-slate-500 mt-1">
                            আপনার প্রয়োজন অনুযায়ী টুল নির্বাচন করে আজই প্র্যাকটিস শুরু করুন (সবগুলো ফিচার উন্মুক্ত)।
                        </p>
                    </div>
                    <span className="text-xs font-bold text-teal-700 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">
                        ✨ 10টি পাওয়ারফুল টুল সক্রিয়
                    </span>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((f, i) => (
                        <Link
                            key={i}
                            href={f.href}
                            className={`group relative flex flex-col rounded-3xl border bg-gradient-to-br p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${f.color}`}
                        >
                            <div className="flex items-start justify-between">
                                <div className="rounded-2xl bg-white p-3.5 shadow-xs border border-slate-150">
                                    {f.icon}
                                </div>
                                <span className={`rounded-full border px-2.5 py-0.5 text-[9px] font-black tracking-wider ${f.badgeColor}`}>
                                    {f.badge}
                                </span>
                            </div>

                            <p className="mt-4 text-lg font-black text-slate-900 group-hover:text-teal-700 transition">
                                {f.title}
                            </p>
                            <p className="mt-2 text-xs text-slate-600 leading-relaxed flex-1">
                                {f.desc}
                            </p>

                            <div className="mt-5 flex items-center gap-1.5 text-xs font-black text-teal-700 group-hover:text-teal-600 group-hover:underline">
                                প্র্যাকটিস শুরু করুন <ArrowUpRight size={15} />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
