'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
    ArrowLeft, Zap, Sparkles, BookOpen, CheckCircle2,
    Trophy, Volume2, RotateCcw, Lightbulb, Check, X,
    Layers, Award, Play, ChevronRight, HelpCircle
} from 'lucide-react';

// SHORT & EASY SPOKEN CAUSATIVE SENTENCES
interface SpokenItem {
    id: number;
    verb: 'make' | 'have' | 'get' | 'let' | 'help';
    verbName: string;
    en: string;
    bn: string;
    rule: string;
}

const SHORT_SPOKEN_SENTENCES: SpokenItem[] = [
    // MAKE (জোর করা / আবেগ সৃষ্টি করা - Base Verb)
    { id: 1, verb: 'make', verbName: 'Make', en: 'He makes me laugh.', bn: 'সে আমাকে হাসায়।', rule: 'Make + Person + Base Verb' },
    { id: 2, verb: 'make', verbName: 'Make', en: 'She made me cry.', bn: 'সে আমাকে কাঁড়াল।', rule: 'Make + Person + Base Verb' },
    { id: 3, verb: 'make', verbName: 'Make', en: 'Mom made me eat.', bn: 'মা আমাকে খাওয়ালেন।', rule: 'Make + Person + Base Verb' },
    { id: 4, verb: 'make', verbName: 'Make', en: 'Don\'t make me angry.', bn: 'আমাকে রাগিও না।', rule: 'Make + Person + Adjective/Base' },
    { id: 5, verb: 'make', verbName: 'Make', en: 'He made me clean it.', bn: 'সে আমাকে দিয়ে এটা পরিষ্কার করাল।', rule: 'Make + Person + Base Verb' },
    { id: 6, verb: 'make', verbName: 'Make', en: 'The boss made us stay late.', bn: 'বস আমাদের দেরি পর্যন্ত থাকতে বললেন।', rule: 'Make + Person + Base Verb' },

    // HAVE (দায়িত্ব দেওয়া / পারিশ্রমিক দিয়ে করানো - Base Verb or Object + V3)
    { id: 7, verb: 'have', verbName: 'Have', en: 'I had him call you.', bn: 'আমি তাকে দিয়ে তোমাকে কল করালাম।', rule: 'Have + Person + Base Verb' },
    { id: 8, verb: 'have', verbName: 'Have', en: 'I will have him fix it.', bn: 'আমি তাকে দিয়ে এটা ঠিক করাব।', rule: 'Have + Person + Base Verb' },
    { id: 9, verb: 'have', verbName: 'Have', en: 'I had my hair cut.', bn: 'আমি চুল কাটিয়েছি।', rule: 'Have + Object + V3 (প্যাসিভ)' },
    { id: 10, verb: 'have', verbName: 'Have', en: 'I had my car washed.', bn: 'আমি গাড়ি ধুইয়ে নিয়েছি।', rule: 'Have + Object + V3 (প্যাসিভ)' },
    { id: 11, verb: 'have', verbName: 'Have', en: 'We had the painter paint the room.', bn: 'আমরা পেইন্টারকে দিয়ে ঘর রঙ করালাম।', rule: 'Have + Person + Base Verb' },
    { id: 12, verb: 'have', verbName: 'Have', en: 'She had her laptop repaired.', bn: 'সে ল্যাপটপ ঠিক করিয়ে নিল।', rule: 'Have + Object + V3' },

    // GET (অনুরোধ / রাজি করিয়ে করানো - Get আসলেই TO বসবে!)
    { id: 13, verb: 'get', verbName: 'Get', en: 'I got him to agree.', bn: 'আমি তাকে রাজি করালাম।', rule: 'Get + Person + TO + Base Verb' },
    { id: 14, verb: 'get', verbName: 'Get', en: 'She got him to help.', bn: 'সে তাকে দিয়ে সাহায্য করিয়ে নিল।', rule: 'Get + Person + TO + Base Verb' },
    { id: 15, verb: 'get', verbName: 'Get', en: 'I got my friend to come.', bn: 'আমি বন্ধুকে আসতে রাজি করালাম।', rule: 'Get + Person + TO + Base Verb' },
    { id: 16, verb: 'get', verbName: 'Get', en: 'Can you get him to listen?', bn: 'তুমি কি তাকে দিয়ে শোনাতে পারবে?', rule: 'Get + Person + TO + Base Verb' },
    { id: 17, verb: 'get', verbName: 'Get', en: 'I got my phone fixed.', bn: 'আমি ফোন ঠিক করিয়েছি।', rule: 'Get + Object + V3 (প্যাসিভ)' },
    { id: 18, verb: 'get', verbName: 'Get', en: 'I got my room cleaned.', bn: 'আমি ঘর পরিষ্কার করিয়ে নিলাম।', rule: 'Get + Object + V3' },

    // LET (অনুমতি দেওয়া / সুযোগ দেওয়া - Base Verb)
    { id: 19, verb: 'let', verbName: 'Let', en: 'Let me go.', bn: 'আমাকে যেতে দাও।', rule: 'Let + Person + Base Verb' },
    { id: 20, verb: 'let', verbName: 'Let', en: 'Let me see.', bn: 'আমাকে দেখতে দাও।', rule: 'Let + Person + Base Verb' },
    { id: 21, verb: 'let', verbName: 'Let', en: 'Mom lets me drive.', bn: 'মা আমাকে গাড়ি চালাতে দেন।', rule: 'Let + Person + Base Verb' },
    { id: 22, verb: 'let', verbName: 'Let', en: 'Please let me speak.', bn: 'দয়া করে আমাকে বলতে দিন।', rule: 'Let + Person + Base Verb' },
    { id: 23, verb: 'let', verbName: 'Let', en: 'Don\'t let him enter.', bn: 'তাকে ঢুকতে দিও না।', rule: 'Let + Person + Base Verb' },
    { id: 24, verb: 'let', verbName: 'Let', en: 'Let them play.', bn: 'তাদের খেলতে দাও।', rule: 'Let + Person + Base Verb' },

    // HELP (সাহায্য করা - Base Verb or to)
    { id: 25, verb: 'help', verbName: 'Help', en: 'He helped me do it.', bn: 'সে আমাকে এটা করতে সাহায্য করল।', rule: 'Help + Person + Base Verb' },
    { id: 26, verb: 'help', verbName: 'Help', en: 'Can you help me carry this?', bn: 'আমাকে এটা তুলতে সাহায্য করবে?', rule: 'Help + Person + Base Verb' },
    { id: 27, verb: 'help', verbName: 'Help', en: 'This coffee helps me stay awake.', bn: 'এই কফি আমাকে সজাগ রাখতে সাহায্য করে।', rule: 'Help + Person + Base Verb' },
    { id: 28, verb: 'help', verbName: 'Help', en: 'She helped me cook dinner.', bn: 'সে আমাকে রান্না করতে সাহায্য করল।', rule: 'Help + Person + Base Verb' }
];

// SESSION 2: 1-TAP QUICK QUIZ QUESTIONS (To নাকি Base Verb?)
interface QuickQuizItem {
    id: number;
    sentence: string;
    blank: string;
    options: [string, string];
    correct: string;
    explanation: string;
}

const QUICK_QUIZ: QuickQuizItem[] = [
    {
        id: 1,
        sentence: "He made me ___ (smile).",
        blank: "made me",
        options: ["smile", "to smile"],
        correct: "smile",
        explanation: "💡 ট্রিক: 'Make'-এর পর কখনো 'to' বসে না! সরাসরি Base Verb (smile) বসবে।"
    },
    {
        id: 2,
        sentence: "I got him ___ (help) me.",
        blank: "got him",
        options: ["help", "to help"],
        correct: "to help",
        explanation: "💡 ট্রিক: মনে রাখুন—'Get' আসলেই 'TO' লাগবে! (Got him to help)"
    },
    {
        id: 3,
        sentence: "Please let me ___ (go) home.",
        blank: "let me",
        options: ["go", "to go"],
        correct: "go",
        explanation: "💡 ট্রিক: 'Let'-এর পরে কোনোদিন 'to' বসে না, শুধু Base Verb (go) বসবে।"
    },
    {
        id: 4,
        sentence: "I had the mechanic ___ (repair) the bike.",
        blank: "had the mechanic",
        options: ["repair", "to repair"],
        correct: "repair",
        explanation: "💡 ট্রিক: 'Have + ব্যক্তি' থাকলে Base Verb (repair) বসে, কোনো 'to' হবে না।"
    },
    {
        id: 5,
        sentence: "She got her brother ___ (lend) some money.",
        blank: "got her brother",
        options: ["lend", "to lend"],
        correct: "to lend",
        explanation: "💡 ট্রিক: 'Get'-এর পর ব্যক্তি থাকলে অবশ্যই 'to lend' হবে।"
    },
    {
        id: 6,
        sentence: "Mom made me ___ (clean) my bedroom.",
        blank: "made me",
        options: ["clean", "to clean"],
        correct: "clean",
        explanation: "💡 ট্রিক: 'Make'-এর পর বাধ্য করা বোঝালে শুধু Base Verb (clean) বসে।"
    },
    {
        id: 7,
        sentence: "I had my hair ___ yesterday.",
        blank: "had my hair",
        options: ["cut", "to cut"],
        correct: "cut",
        explanation: "💡 ট্রিক: চুল নিজে কাটেননি, কাটিয়েছেন (প্যাসিভ)—তাই V3 (cut-cut-cut) বসবে!"
    },
    {
        id: 8,
        sentence: "Can you help me ___ (solve) this?",
        blank: "help me",
        options: ["solve", "solving"],
        correct: "solve",
        explanation: "💡 ট্রিক: 'Help'-এর পর সবসময় Base Verb (solve) বসে।"
    },
    {
        id: 9,
        sentence: "He won't let me ___ (speak).",
        blank: "let me",
        options: ["speak", "to speak"],
        correct: "speak",
        explanation: "💡 ট্রিক: 'Let me speak'—সরাসরি Base Verb বসবে।"
    },
    {
        id: 10,
        sentence: "I got my car ___ (wash) at the station.",
        blank: "got my car",
        options: ["washed", "wash"],
        correct: "washed",
        explanation: "💡 ট্রিক: গাড়ি নিজে ধুয়েছে না, ধোয়ানো হয়েছে (প্যাসিভ)—তাই V3 (washed) বসবে!"
    }
];

// SESSION 3: TAP-TO-FILL CHIPS QUESTIONS
interface ChipFillItem {
    id: number;
    bn: string;
    prefix: string;
    suffix: string;
    options: string[];
    answer: string;
    hint: string;
}

const CHIP_FILL_DATA: ChipFillItem[] = [
    {
        id: 1,
        bn: "সে আমাকে কাঁদাল।",
        prefix: "She made me",
        suffix: ".",
        options: ["cry", "to cry", "crying"],
        answer: "cry",
        hint: "Make + Person + Base Verb"
    },
    {
        id: 2,
        bn: "আমি তাকে আসতে রাজি করালাম।",
        prefix: "I got him",
        suffix: ".",
        options: ["come", "to come", "coming"],
        answer: "to come",
        hint: "Get থাকলেই 'to' বসবে"
    },
    {
        id: 3,
        bn: "আমাকে যেতে দাও।",
        prefix: "Please let me",
        suffix: ".",
        options: ["go", "to go", "going"],
        answer: "go",
        hint: "Let এর পর সরাসরি V1"
    },
    {
        id: 4,
        bn: "আমি তাকে দিয়ে তোমাকে কল করিয়েছি।",
        prefix: "I had him",
        suffix: "you.",
        options: ["call", "to call", "called"],
        answer: "call",
        hint: "Have + ব্যক্তি + V1"
    },
    {
        id: 5,
        bn: "আমি ফোনটি ঠিক করিয়েছি।",
        prefix: "I got my phone",
        suffix: ".",
        options: ["fixed", "fix", "to fix"],
        answer: "fixed",
        hint: "বস্তু ঠিক করানো হলে V3"
    },
    {
        id: 6,
        bn: "সে আমাকে এটা করতে সাহায্য করল।",
        prefix: "He helped me",
        suffix: "it.",
        options: ["do", "doing", "did"],
        answer: "do",
        hint: "Help + Person + V1"
    }
];

export default function CausativeVerbsPage() {
    // ACTIVE SESSION TAB
    const [activeSession, setActiveSession] = useState<'easy-builder' | 'quick-quiz' | 'chip-fill' | 'spoken-cards' | 'rules'>('easy-builder');

    // 1. BUILDER STATE
    const [bSubject, setBSubject] = useState('He');
    const [bVerb, setBVerb] = useState<'made' | 'had' | 'got' | 'let' | 'helped'>('made');
    const [bPerson, setBPerson] = useState('me');
    const [bAction, setBAction] = useState('laugh');

    // 2. QUICK QUIZ STATE
    const [quizIndex, setQuizIndex] = useState(0);
    const [quizAnswered, setQuizAnswered] = useState<string | null>(null);
    const [quizScore, setQuizScore] = useState(0);
    const [quizCompleted, setQuizCompleted] = useState(false);

    // 3. CHIP FILL STATE
    const [chipAnswers, setChipAnswers] = useState<{ [key: number]: string }>({});
    const [chipFeedbacks, setChipFeedbacks] = useState<{ [key: number]: boolean }>({});

    // 4. SPOKEN CARDS FILTER
    const [selectedVerbFilter, setSelectedVerbFilter] = useState<string>('all');
    const [revealedCards, setRevealedCards] = useState<{ [key: number]: boolean }>({});

    // TTS Audio speech
    const playAudio = (text: string) => {
        if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'en-US';
            utterance.rate = 0.9;
            window.speechSynthesis.speak(utterance);
        }
    };

    // Calculate sentence in builder
    const getBuilderSentence = () => {
        let actionForm = bAction;
        if (bVerb === 'got') {
            actionForm = 'to ' + bAction;
        }
        return `${bSubject} ${bVerb} ${bPerson} ${actionForm}.`;
    };

    const getBuilderBangla = () => {
        const subBn = bSubject === 'I' ? 'আমি' : bSubject === 'He' ? 'সে' : bSubject === 'She' ? 'সে' : 'মা';
        const perBn = bPerson === 'me' ? 'আমাকে' : bPerson === 'him' ? 'তাকে' : 'আমাদের';
        
        if (bVerb === 'made') {
            if (bAction === 'laugh') return `${subBn} ${perBn} হাসাল।`;
            if (bAction === 'cry') return `${subBn} ${perBn} কাঁড়াল।`;
            if (bAction === 'eat') return `${subBn} ${perBn} খাওয়াল।`;
            if (bAction === 'clean') return `${subBn} ${perBn} দিয়ে পরিষ্কার করাল।`;
            return `${subBn} ${perBn} দিয়ে কাজ করাল।`;
        }
        if (bVerb === 'got') {
            return `${subBn} ${perBn} বুঝিয়ে রাজি করিয়ে কাজটি করাল।`;
        }
        if (bVerb === 'had') {
            return `${subBn} ${perBn} দিয়ে কাজটি করিয়ে নিল।`;
        }
        if (bVerb === 'let') {
            return `${subBn} ${perBn} কাজটি করতে দিল (অনুমতি দিল)।`;
        }
        if (bVerb === 'helped') {
            return `${subBn} ${perBn} কাজটি করতে সাহায্য করল।`;
        }
        return `${subBn} ${perBn} দিয়ে কাজটি করাল।`;
    };

    // Quick Quiz handlers
    const handleQuizOption = (opt: string) => {
        if (quizAnswered) return;
        setQuizAnswered(opt);
        const currentQ = QUICK_QUIZ[quizIndex];
        const isRight = opt === currentQ.correct;
        if (isRight) setQuizScore(prev => prev + 1);
    };

    const nextQuizQuestion = () => {
        if (quizIndex < QUICK_QUIZ.length - 1) {
            setQuizIndex(prev => prev + 1);
            setQuizAnswered(null);
        } else {
            setQuizCompleted(true);
        }
    };

    const resetQuickQuiz = () => {
        setQuizIndex(0);
        setQuizAnswered(null);
        setQuizScore(0);
        setQuizCompleted(false);
    };

    // Chip Fill handlers
    const handleChipSelect = (qid: number, option: string, correctAns: string) => {
        setChipAnswers(prev => ({ ...prev, [qid]: option }));
        setChipFeedbacks(prev => ({ ...prev, [qid]: option === correctAns }));
    };

    // Filter spoken cards
    const filteredSpoken = selectedVerbFilter === 'all'
        ? SHORT_SPOKEN_SENTENCES
        : SHORT_SPOKEN_SENTENCES.filter(s => s.verb === selectedVerbFilter);

    return (
        <div className="min-h-screen bg-[#f8fafc] font-sans pb-28 text-slate-800">
            {/* Top Navigation */}
            <header className="border-b border-slate-800 bg-slate-950 px-5 py-3.5 text-white sticky top-0 z-40">
                <div className="mx-auto max-w-7xl flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <Link
                            href="/dashboard/spoken-english"
                            className="p-1.5 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-300 hover:text-white transition flex items-center gap-1.5 text-xs font-bold"
                        >
                            <ArrowLeft size={16} />
                            <span>স্পোকেন হাব</span>
                        </Link>
                        <div className="h-5 w-px bg-slate-800 hidden sm:block" />
                        <div>
                            <span className="text-[10px] font-black uppercase tracking-wider text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800/60">
                                সহজ স্পোকেন প্র্যাকটিস
                            </span>
                            <h1 className="text-sm sm:text-base font-black text-white flex items-center gap-1.5 mt-0.5">
                                <Zap className="text-cyan-400 fill-cyan-400" size={17} /> কজেটিভ ভার্বস (Causative Verbs): Make, Have, Get, Let, Help
                            </h1>
                        </div>
                    </div>

                    <Link
                        href="/dashboard/spoken-english/online-test"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-black hover:opacity-95 transition shadow-sm"
                    >
                        <Award size={14} />
                        <span>১০০ নম্বরের মেগা টেস্ট</span>
                    </Link>
                </div>
            </header>

            {/* Hero Banner: Super Easy Rule Visualizer */}
            <section className="bg-gradient-to-r from-slate-900 via-cyan-950 to-slate-900 text-white border-b border-cyan-900/40 py-8 px-5">
                <div className="max-w-7xl mx-auto space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 text-xs font-bold">
                        <Sparkles size={13} />
                        <span>১-মিনিট সহজ ট্রিক: নিজে না করে অন্যকে দিয়ে কাজ করানো</span>
                    </div>

                    <div className="max-w-3xl">
                        <h2 className="text-2xl sm:text-4xl font-black text-white leading-tight">
                            ছোট ছোট সহজ বাক্যে <span className="text-cyan-400">Causative Verbs</span> আয়ত্ত করুন
                        </h2>
                        <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed">
                            কোনো কঠিন নিয়ম বা বড় বাক্য নয়! ছোট ছোট নিত্যদিনের স্পোকেন বাক্য দিয়ে ৫টি জাদুকরী ভার্ব শিখুন।
                        </p>
                    </div>

                    {/* Quick 5 Verbs Formula Cards */}
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 pt-2">
                        <div className="bg-white/5 border border-cyan-500/30 rounded-2xl p-3 text-center">
                            <span className="text-base font-black text-cyan-400">1. MAKE</span>
                            <p className="text-[11px] text-slate-300 font-bold mt-1">বাধ্য করা / হাসানো</p>
                            <span className="text-[10px] bg-cyan-500/20 text-cyan-200 px-2 py-0.5 rounded font-mono mt-1 inline-block">No 'to' (Base)</span>
                        </div>
                        <div className="bg-white/5 border border-indigo-500/30 rounded-2xl p-3 text-center">
                            <span className="text-base font-black text-indigo-400">2. HAVE</span>
                            <p className="text-[11px] text-slate-300 font-bold mt-1">দায়িত্ব দেওয়া</p>
                            <span className="text-[10px] bg-indigo-500/20 text-indigo-200 px-2 py-0.5 rounded font-mono mt-1 inline-block">No 'to' (Base)</span>
                        </div>
                        <div className="bg-white/5 border border-amber-500/30 rounded-2xl p-3 text-center">
                            <span className="text-base font-black text-amber-400">3. GET</span>
                            <p className="text-[11px] text-slate-300 font-bold mt-1">রাজি করানো</p>
                            <span className="text-[10px] bg-amber-500/20 text-amber-200 px-2 py-0.5 rounded font-mono mt-1 inline-block font-black">অবশ্যই 'TO' হবে!</span>
                        </div>
                        <div className="bg-white/5 border border-emerald-500/30 rounded-2xl p-3 text-center">
                            <span className="text-base font-black text-emerald-400">4. LET</span>
                            <p className="text-[11px] text-slate-300 font-bold mt-1">অনুমতি দেওয়া</p>
                            <span className="text-[10px] bg-emerald-500/20 text-emerald-200 px-2 py-0.5 rounded font-mono mt-1 inline-block">No 'to' (Base)</span>
                        </div>
                        <div className="bg-white/5 border border-rose-500/30 rounded-2xl p-3 text-center col-span-2 sm:col-span-1">
                            <span className="text-base font-black text-rose-400">5. HELP</span>
                            <p className="text-[11px] text-slate-300 font-bold mt-1">সাহায্য করা</p>
                            <span className="text-[10px] bg-rose-500/20 text-rose-200 px-2 py-0.5 rounded font-mono mt-1 inline-block">Base Verb</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Interactive Session Mode Tabs */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 space-y-6">
                <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                    <button
                        onClick={() => setActiveSession('easy-builder')}
                        className={`flex-1 min-w-[140px] py-2.5 px-3 rounded-xl text-xs font-black transition flex items-center justify-center gap-1.5 ${
                            activeSession === 'easy-builder'
                                ? 'bg-cyan-600 text-white shadow-sm'
                                : 'text-slate-600 hover:bg-slate-100'
                        }`}
                    >
                        <Zap size={14} />
                        <span>১. ৩-ক্লিক সেন্টেন্স মেকার</span>
                    </button>

                    <button
                        onClick={() => setActiveSession('quick-quiz')}
                        className={`flex-1 min-w-[140px] py-2.5 px-3 rounded-xl text-xs font-black transition flex items-center justify-center gap-1.5 ${
                            activeSession === 'quick-quiz'
                                ? 'bg-cyan-600 text-white shadow-sm'
                                : 'text-slate-600 hover:bg-slate-100'
                        }`}
                    >
                        <CheckCircle2 size={14} />
                        <span>২. 'To' নাকি 'Base'? (কুইক কুইজ)</span>
                    </button>

                    <button
                        onClick={() => setActiveSession('chip-fill')}
                        className={`flex-1 min-w-[140px] py-2.5 px-3 rounded-xl text-xs font-black transition flex items-center justify-center gap-1.5 ${
                            activeSession === 'chip-fill'
                                ? 'bg-cyan-600 text-white shadow-sm'
                                : 'text-slate-600 hover:bg-slate-100'
                        }`}
                    >
                        <Layers size={14} />
                        <span>৩. ফিল-ইন-চিপস (নো টাইপিং)</span>
                    </button>

                    <button
                        onClick={() => setActiveSession('spoken-cards')}
                        className={`flex-1 min-w-[140px] py-2.5 px-3 rounded-xl text-xs font-black transition flex items-center justify-center gap-1.5 ${
                            activeSession === 'spoken-cards'
                                ? 'bg-cyan-600 text-white shadow-sm'
                                : 'text-slate-600 hover:bg-slate-100'
                        }`}
                    >
                        <Volume2 size={14} />
                        <span>৪. ২৮টি শর্ট স্পোকেন ড্রিল</span>
                    </button>

                    <button
                        onClick={() => setActiveSession('rules')}
                        className={`flex-1 min-w-[120px] py-2.5 px-3 rounded-xl text-xs font-black transition flex items-center justify-center gap-1.5 ${
                            activeSession === 'rules'
                                ? 'bg-cyan-600 text-white shadow-sm'
                                : 'text-slate-600 hover:bg-slate-100'
                        }`}
                    >
                        <Lightbulb size={14} />
                        <span>৫. ম্যাজিক ফর্মুলা</span>
                    </button>
                </div>

                {/* ============================================================ */}
                {/* SESSION 1: INTERACTIVE 3-CLICK SENTENCE BUILDER */}
                {/* ============================================================ */}
                {activeSession === 'easy-builder' && (
                    <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
                        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
                            <div>
                                <span className="text-xs font-black text-cyan-600 uppercase tracking-wider">ইন্টারেক্টিভ সেন্টেন্স বিল্ডার</span>
                                <h3 className="text-lg sm:text-xl font-black text-slate-900 mt-0.5">
                                    🎛️ অপশন নির্বাচন করুন — সাথে সাথে বাক্য ও বাংলা অর্থ তৈরি হবে!
                                </h3>
                            </div>
                            <span className="text-xs font-bold text-slate-500 bg-cyan-50 text-cyan-700 px-3 py-1 rounded-full border border-cyan-200">
                                নো টাইপিং • ১০০% ক্লিক প্র্যাকটিস
                            </span>
                        </div>

                        {/* LIVE OUTPUT DISPLAY CARD */}
                        <div className="p-6 rounded-3xl bg-gradient-to-r from-slate-900 to-indigo-950 text-white shadow-lg space-y-3">
                            <div className="flex items-center justify-between text-xs text-slate-400">
                                <span className="font-mono text-cyan-400 font-bold uppercase">তৈরি হওয়া বাক্য:</span>
                                <button
                                    onClick={() => playAudio(getBuilderSentence())}
                                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black text-xs transition shadow-sm"
                                >
                                    <Volume2 size={14} />
                                    <span>উচ্চারণ শুনুন</span>
                                </button>
                            </div>

                            <p className="text-2xl sm:text-3xl font-black text-white tracking-wide">
                                {getBuilderSentence()}
                            </p>

                            <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
                                <p className="text-sm sm:text-base text-cyan-200 font-medium">
                                    বাংলা অর্থ: <strong className="text-white">{getBuilderBangla()}</strong>
                                </p>
                                {bVerb === 'got' && (
                                    <span className="text-[11px] bg-amber-500/20 text-amber-300 border border-amber-500/30 px-2.5 py-0.5 rounded-full font-bold">
                                        💡 লক্ষ্য করুন: 'got' থাকায় 'to' যুক্ত হয়েছে!
                                    </span>
                                )}
                            </div>
                        </div>

                        {/* BUILDER CHIPS CONTROLLER */}
                        <div className="space-y-4">
                            {/* Step 1: Subject */}
                            <div>
                                <label className="text-xs font-black uppercase text-slate-500 tracking-wider block mb-2">
                                    ১. কর্তা (Subject) নির্বাচন করুন:
                                </label>
                                <div className="flex flex-wrap gap-2">
                                    {['I', 'He', 'She', 'Mom'].map((sub) => (
                                        <button
                                            key={sub}
                                            onClick={() => setBSubject(sub)}
                                            className={`px-4 py-2 rounded-xl text-xs font-black transition border ${
                                                bSubject === sub
                                                    ? 'bg-cyan-600 text-white border-cyan-600 shadow-sm'
                                                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                                            }`}
                                        >
                                            {sub}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Step 2: Causative Verb */}
                            <div>
                                <label className="text-xs font-black uppercase text-slate-500 tracking-wider block mb-2">
                                    ২. কজেটিভ ভার্ব (Causative Verb) বেছে নিন:
                                </label>
                                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                                    {[
                                        { key: 'made', label: 'made', meaning: 'হাসাল/কাঁদাল/বাধ্য করল' },
                                        { key: 'had', label: 'had', meaning: 'করিয়ে নিল (দায়িত্ব)' },
                                        { key: 'got', label: 'got (to)', meaning: 'রাজি করিয়ে করাল' },
                                        { key: 'let', label: 'let', meaning: 'অনুমতি দিল' },
                                        { key: 'helped', label: 'helped', meaning: 'সাহায্য করল' }
                                    ].map((v) => (
                                        <button
                                            key={v.key}
                                            onClick={() => setBVerb(v.key as any)}
                                            className={`p-3 rounded-2xl text-left border transition ${
                                                bVerb === v.key
                                                    ? 'bg-cyan-50 border-cyan-500 text-cyan-900 shadow-xs ring-2 ring-cyan-500/20'
                                                    : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                                            }`}
                                        >
                                            <span className="block text-sm font-black">{v.label}</span>
                                            <span className="block text-[10px] text-slate-500 font-medium mt-0.5">{v.meaning}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Step 3: Person */}
                            <div>
                                <label className="text-xs font-black uppercase text-slate-500 tracking-wider block mb-2">
                                    ৩. কাকে দিয়ে করাবেন (Person):
                                </label>
                                <div className="flex flex-wrap gap-2">
                                    {['me', 'him', 'us'].map((p) => (
                                        <button
                                            key={p}
                                            onClick={() => setBPerson(p)}
                                            className={`px-4 py-2 rounded-xl text-xs font-black transition border ${
                                                bPerson === p
                                                    ? 'bg-cyan-600 text-white border-cyan-600 shadow-sm'
                                                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                                            }`}
                                        >
                                            {p}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Step 4: Action Verb */}
                            <div>
                                <label className="text-xs font-black uppercase text-slate-500 tracking-wider block mb-2">
                                    ৪. মূল কাজ (Action Verb):
                                </label>
                                <div className="flex flex-wrap gap-2">
                                    {[
                                        { key: 'laugh', label: 'laugh (হাসা)' },
                                        { key: 'cry', label: 'cry (কাঁদা)' },
                                        { key: 'eat', label: 'eat (খাওয়া)' },
                                        { key: 'clean', label: 'clean (পরিষ্কার করা)' },
                                        { key: 'understand', label: 'understand (বোঝা)' }
                                    ].map((act) => (
                                        <button
                                            key={act.key}
                                            onClick={() => setBAction(act.key)}
                                            className={`px-4 py-2 rounded-xl text-xs font-black transition border ${
                                                bAction === act.key
                                                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
                                                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                                            }`}
                                        >
                                            {act.label}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* ============================================================ */}
                {/* SESSION 2: 1-TAP QUICK QUIZ ('TO' নাকি 'BASE VERB'?) */}
                {/* ============================================================ */}
                {activeSession === 'quick-quiz' && (
                    <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
                        {!quizCompleted ? (
                            <>
                                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                                    <div>
                                        <span className="text-xs font-black text-cyan-600 uppercase">প্রশ্ন {quizIndex + 1} / {QUICK_QUIZ.length}</span>
                                        <h3 className="text-base sm:text-lg font-black text-slate-900 mt-0.5">
                                            সরাসরি বাটনে ক্লিক করে সঠিক উত্তর বেছে নিন:
                                        </h3>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-xs font-bold text-slate-500">স্কোর:</span>
                                        <span className="ml-1 text-sm font-black text-cyan-600">{quizScore}</span>
                                    </div>
                                </div>

                                {/* Question Card */}
                                <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 text-center space-y-6">
                                    <p className="text-xl sm:text-2xl font-black text-slate-900">
                                        {QUICK_QUIZ[quizIndex].sentence}
                                    </p>

                                    {/* 2 Big Action Buttons */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto">
                                        {QUICK_QUIZ[quizIndex].options.map((opt) => {
                                            const isSelected = quizAnswered === opt;
                                            const isCorrect = opt === QUICK_QUIZ[quizIndex].correct;

                                            let btnStyle = 'bg-white border-slate-200 hover:border-cyan-400 hover:bg-cyan-50/50 text-slate-800';
                                            if (quizAnswered) {
                                                if (isCorrect) {
                                                    btnStyle = 'bg-emerald-50 border-emerald-500 text-emerald-800 ring-2 ring-emerald-500/20';
                                                } else if (isSelected) {
                                                    btnStyle = 'bg-rose-50 border-rose-500 text-rose-800 ring-2 ring-rose-500/20';
                                                }
                                            }

                                            return (
                                                <button
                                                    key={opt}
                                                    onClick={() => handleQuizOption(opt)}
                                                    disabled={!!quizAnswered}
                                                    className={`p-4 rounded-2xl text-base font-black border-2 transition shadow-xs flex items-center justify-center gap-2 ${btnStyle}`}
                                                >
                                                    {opt}
                                                    {quizAnswered && isCorrect && <Check size={18} className="text-emerald-600" />}
                                                    {quizAnswered && isSelected && !isCorrect && <X size={18} className="text-rose-600" />}
                                                </button>
                                            );
                                        })}
                                    </div>

                                    {/* Explanation on answer */}
                                    {quizAnswered && (
                                        <div className="p-4 rounded-2xl bg-cyan-50 border border-cyan-200 text-cyan-900 text-xs sm:text-sm font-medium animate-fadeIn">
                                            {QUICK_QUIZ[quizIndex].explanation}
                                        </div>
                                    )}

                                    {/* Next Question Button */}
                                    {quizAnswered && (
                                        <button
                                            onClick={nextQuizQuestion}
                                            className="px-6 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-black text-xs sm:text-sm transition shadow-sm inline-flex items-center gap-1.5"
                                        >
                                            <span>{quizIndex < QUICK_QUIZ.length - 1 ? 'পরবর্তী প্রশ্ন' : 'ফলাফল দেখুন'}</span>
                                            <ChevronRight size={16} />
                                        </button>
                                    )}
                                </div>
                            </>
                        ) : (
                            <div className="text-center p-8 space-y-4">
                                <Trophy size={48} className="text-amber-500 mx-auto" />
                                <h3 className="text-2xl font-black text-slate-900">অভিনন্দন! কুইজ সমাপ্ত!</h3>
                                <p className="text-slate-600 text-sm">
                                    আপনার স্কোর: <strong className="text-cyan-600 text-lg">{quizScore} / {QUICK_QUIZ.length}</strong>
                                </p>
                                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                                    {quizScore >= 8 ? 'চমৎকার! কজেটিভ ভার্বসের ব্যবহারে আপনি দারুণ পারদর্শী হয়েছেন।' : 'আরও কিছুক্ষণ প্র্যাকটিস করলে নিয়মগুলো আরও সহজ লাগবে!'}
                                </p>
                                <button
                                    onClick={resetQuickQuiz}
                                    className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-black text-xs transition"
                                >
                                    <RotateCcw size={14} />
                                    <span>পুনরায় কুইজ শুরু করুন</span>
                                </button>
                            </div>
                        )}
                    </div>
                )}

                {/* ============================================================ */}
                {/* SESSION 3: TAP-TO-FILL CHIPS (NO TYPING) */}
                {/* ============================================================ */}
                {activeSession === 'chip-fill' && (
                    <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
                        <div className="border-b border-slate-100 pb-4">
                            <span className="text-xs font-black text-cyan-600 uppercase">শূন্যস্থান পূরণ (ক্লিক চিপস)</span>
                            <h3 className="text-lg font-black text-slate-900 mt-0.5">
                                🧩 কিবোর্ডে টাইপ করতে হবে না — নিচের সঠিক চিপটিতে ক্লিক করলেই বসে যাবে!
                            </h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {CHIP_FILL_DATA.map((item) => {
                                const selected = chipAnswers[item.id];
                                const isCorrect = chipFeedbacks[item.id];

                                return (
                                    <div
                                        key={item.id}
                                        className="p-5 rounded-2xl border border-slate-200 bg-slate-50 space-y-3"
                                    >
                                        <div className="flex items-center justify-between text-xs text-slate-500">
                                            <span className="font-bold text-cyan-700">বাংলা: {item.bn}</span>
                                            <span className="font-mono text-[10px] bg-white px-2 py-0.5 rounded border border-slate-200">{item.hint}</span>
                                        </div>

                                        <p className="text-base sm:text-lg font-black text-slate-900">
                                            {item.prefix}{' '}
                                            <span className={`inline-block px-2.5 py-0.5 rounded-lg border font-mono font-black ${
                                                selected
                                                    ? isCorrect
                                                        ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                                                        : 'bg-rose-100 text-rose-800 border-rose-300'
                                                    : 'bg-white text-slate-400 border-slate-300'
                                            }`}>
                                                {selected || '___'}
                                            </span>{' '}
                                            {item.suffix}
                                        </p>

                                        {/* Clickable Word Chips */}
                                        <div className="flex flex-wrap gap-2 pt-1">
                                            {item.options.map((opt) => (
                                                <button
                                                    key={opt}
                                                    onClick={() => handleChipSelect(item.id, opt, item.answer)}
                                                    className={`px-3 py-1.5 rounded-xl text-xs font-black border transition ${
                                                        selected === opt
                                                            ? isCorrect
                                                                ? 'bg-emerald-600 text-white border-emerald-600'
                                                                : 'bg-rose-600 text-white border-rose-600'
                                                            : 'bg-white hover:bg-slate-100 text-slate-700 border-slate-300'
                                                    }`}
                                                >
                                                    {opt}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}

                {/* ============================================================ */}
                {/* SESSION 4: 28 SHORT SPOKEN CARDS WITH AUDIO & FLIP */}
                {/* ============================================================ */}
                {activeSession === 'spoken-cards' && (
                    <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
                        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
                            <div>
                                <span className="text-xs font-black text-cyan-600 uppercase">দৈনন্দিন স্পোকেন ড্রিল</span>
                                <h3 className="text-lg font-black text-slate-900 mt-0.5">
                                    🗣️ ছোট ছোট নিত্যপ্রয়োজনীয় বাক্য — স্পিকারে চাপুন এবং শুনুন
                                </h3>
                            </div>

                            {/* Verb Filter Pills */}
                            <div className="flex flex-wrap gap-1.5">
                                {['all', 'make', 'have', 'get', 'let', 'help'].map((v) => (
                                    <button
                                        key={v}
                                        onClick={() => setSelectedVerbFilter(v)}
                                        className={`px-3 py-1 rounded-xl text-xs font-black uppercase transition ${
                                            selectedVerbFilter === v
                                                ? 'bg-cyan-600 text-white'
                                                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                                        }`}
                                    >
                                        {v}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                            {filteredSpoken.map((s) => {
                                const isRevealed = revealedCards[s.id];

                                return (
                                    <div
                                        key={s.id}
                                        onClick={() => setRevealedCards(prev => ({ ...prev, [s.id]: !prev[s.id] }))}
                                        className="p-4 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-cyan-300 hover:shadow-xs transition cursor-pointer space-y-2 group"
                                    >
                                        <div className="flex items-center justify-between">
                                            <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-cyan-100 text-cyan-800">
                                                {s.verbName}
                                            </span>
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    playAudio(s.en);
                                                }}
                                                className="p-1 rounded-lg bg-white border border-slate-200 hover:bg-cyan-50 text-slate-600 hover:text-cyan-600 transition"
                                                title="উচ্চারণ শুনুন"
                                            >
                                                <Volume2 size={14} />
                                            </button>
                                        </div>

                                        <p className="text-base font-black text-slate-900 group-hover:text-cyan-600 transition">
                                            {s.en}
                                        </p>

                                        <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between text-xs">
                                            <span className={`font-medium ${isRevealed ? 'text-slate-800' : 'text-slate-400 italic'}`}>
                                                {isRevealed ? s.bn : '👉 ক্লিক করে বাংলা অর্থ দেখুন'}
                                            </span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}

                {/* ============================================================ */}
                {/* SESSION 5: MAGIC FORMULAS & TRICKS CHEAT-SHEET */}
                {/* ============================================================ */}
                {activeSession === 'rules' && (
                    <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
                        <div className="border-b border-slate-100 pb-4">
                            <span className="text-xs font-black text-cyan-600 uppercase">ম্যাজিক ফর্মুলা ও শর্ট ট্রিক</span>
                            <h3 className="text-lg font-black text-slate-900 mt-0.5">
                                💡 Causative Verbs সহজে মনে রাখার ৫টি গোপন শর্টকাট
                            </h3>
                        </div>

                        <div className="space-y-4">
                            {/* Make */}
                            <div className="p-5 rounded-2xl bg-cyan-50 border border-cyan-200 space-y-1.5">
                                <h4 className="text-base font-black text-cyan-900">১. MAKE — বাধ্য করা বা আবেগ সৃষ্টি করা</h4>
                                <p className="text-xs font-mono font-bold text-cyan-800">গঠন: Subject + make/made + ব্যক্তি + V1 (Base Verb)</p>
                                <p className="text-xs text-slate-700">
                                    • He made me laugh. (সে আমাকে হাসাল—কখনো 'to laugh' হবে না)<br/>
                                    • She made me clean the room. (সে আমাকে দিয়ে ঘর পরিষ্কার করাল)
                                </p>
                            </div>

                            {/* Have */}
                            <div className="p-5 rounded-2xl bg-indigo-50 border border-indigo-200 space-y-1.5">
                                <h4 className="text-base font-black text-indigo-900">২. HAVE — দায়িত্ব দেওয়া / করিয়ে নেওয়া</h4>
                                <p className="text-xs font-mono font-bold text-indigo-800">অ্যাক্টিভ: Subject + have/had + ব্যক্তি + V1 | প্যাসিভ: have + বস্তু + V3</p>
                                <p className="text-xs text-slate-700">
                                    • I had him call you. (আমি তাকে দিয়ে তোমাকে কল করালাম)<br/>
                                    • I had my hair cut. (আমি চুল কাটিয়েছি—এখানে hair বস্তু, তাই V3)
                                </p>
                            </div>

                            {/* Get */}
                            <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 space-y-1.5">
                                <h4 className="text-base font-black text-amber-900">৩. GET — বুঝিয়ে বা অনুরোধ করে রাজি করানো</h4>
                                <p className="text-xs font-mono font-bold text-amber-800">সোনালী ট্রিক: Get আসলেই 'TO' বসবে! (Get + ব্যক্তি + TO + V1)</p>
                                <p className="text-xs text-slate-700">
                                    • I got him to help me. (আমি তাকে রাজি করালাম সাহায্য করতে)<br/>
                                    • I got my car repaired. (প্যাসিভ: গাড়ি বস্তু, তাই V3 repaired)
                                </p>
                            </div>

                            {/* Let */}
                            <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-1.5">
                                <h4 className="text-base font-black text-emerald-900">৪. LET — অনুমতি দেওয়া বা সুযোগ দেওয়া</h4>
                                <p className="text-xs font-mono font-bold text-emerald-800">গঠন: Subject + let + ব্যক্তি + V1 (কখনো 'to' বসবে না)</p>
                                <p className="text-xs text-slate-700">
                                    • Let me go. (আমাকে যেতে দাও)<br/>
                                    • Mom lets me drive. (মা আমাকে গাড়ি চালাতে দেন)
                                </p>
                            </div>

                            {/* Help */}
                            <div className="p-5 rounded-2xl bg-rose-50 border border-rose-200 space-y-1.5">
                                <h4 className="text-base font-black text-rose-900">৫. HELP — সাহায্য করা</h4>
                                <p className="text-xs font-mono font-bold text-rose-800">গঠন: Subject + help + ব্যক্তি + V1 (or to + V1)</p>
                                <p className="text-xs text-slate-700">
                                    • He helped me carry the bag. (সে আমাকে ব্যাগ তুলতে সাহায্য করল)
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}
