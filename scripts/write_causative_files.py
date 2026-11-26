# -*- coding: utf-8 -*-
import os, json
from build_comprehensive_causative import (
    SPOKEN_SENTENCES, QUICK_QUIZ, CHIP_FILL_DATA,
    SPOT_ERRORS, ACTIVE_PASSIVE_PAIRS, REAL_DIALOGUES
)

spoken_json = json.dumps(SPOKEN_SENTENCES, ensure_ascii=False, indent=2)
quiz_json = json.dumps(QUICK_QUIZ, ensure_ascii=False, indent=2)
chip_json = json.dumps(CHIP_FILL_DATA, ensure_ascii=False, indent=2)
errors_json = json.dumps(SPOT_ERRORS, ensure_ascii=False, indent=2)
pairs_json = json.dumps(ACTIVE_PASSIVE_PAIRS, ensure_ascii=False, indent=2)
dialogues_json = json.dumps(REAL_DIALOGUES, ensure_ascii=False, indent=2)

print("Preparing page.tsx...")

PAGE_TSX = """'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
    ArrowLeft, Zap, Sparkles, BookOpen, CheckCircle2,
    Trophy, Volume2, RotateCcw, Lightbulb, Check, X,
    Layers, Award, Play, ChevronRight, HelpCircle, Eye,
    MessageSquare, AlertTriangle, ArrowRightLeft, ShieldCheck, Flame
} from 'lucide-react';

interface SpokenItem {
    id: number;
    verb: string;
    verbName: string;
    en: string;
    bn: string;
    rule: string;
}

interface QuickQuizItem {
    id: number;
    q: string;
    options: string[];
    correct: string;
    exp: string;
}

interface ChipFillItem {
    id: number;
    sentence: string;
    bn: string;
    options: string[];
    correctAns: string;
    rule: string;
}

interface SpotErrorItem {
    id: number;
    wrong: string;
    correct: string;
    bn: string;
    exp: string;
}

interface PairItem {
    id: number;
    active: string;
    activeBn: string;
    passive: string;
    passiveBn: string;
    note: string;
}

interface DialogueLine {
    speaker: string;
    en: string;
    bn: string;
    causative: string;
}

interface DialogueItem {
    id: number;
    title: string;
    lines: DialogueLine[];
}

const SPOKEN_SENTENCES: SpokenItem[] = __SPOKEN_JSON__;
const QUICK_QUIZ: QuickQuizItem[] = __QUIZ_JSON__;
const CHIP_FILL_DATA: ChipFillItem[] = __CHIP_JSON__;
const SPOT_ERRORS: SpotErrorItem[] = __ERRORS_JSON__;
const ACTIVE_PASSIVE_PAIRS: PairItem[] = __PAIRS_JSON__;
const REAL_DIALOGUES: DialogueItem[] = __DIALOGUES_JSON__;

export default function CausativeVerbsPage() {
    const [activeTab, setActiveTab] = useState<'guide' | 'builder' | 'spoken' | 'quiz' | 'chips' | 'errors' | 'pairs' | 'dialogues'>('guide');

    // 1. BUILDER STATE
    const [bSubject, setBSubject] = useState('He');
    const [bVerb, setBVerb] = useState<'made' | 'had' | 'got' | 'let' | 'helped'>('made');
    const [bPerson, setBPerson] = useState('me');
    const [bAction, setBAction] = useState('laugh');

    // 2. SPOKEN FLASHCARDS STATE
    const [spokenFilter, setSpokenFilter] = useState<string>('all');
    const [revealedSpoken, setRevealedSpoken] = useState<{ [key: number]: boolean }>({});

    // 3. QUIZ STATE
    const [quizIndex, setQuizIndex] = useState(0);
    const [quizAnswered, setQuizAnswered] = useState<string | null>(null);
    const [quizScore, setQuizScore] = useState(0);
    const [quizCompleted, setQuizCompleted] = useState(false);

    // 4. CHIP FILL STATE
    const [chipAnswers, setChipAnswers] = useState<{ [key: number]: string }>({});

    // 5. DIALOGUE STATE
    const [activeDialogueId, setActiveDialogueId] = useState(1);

    // Audio TTS playback
    const playAudio = (text: string) => {
        if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'en-US';
            utterance.rate = 0.9;
            window.speechSynthesis.speak(utterance);
        }
    };

    // Calculate builder sentence & bangla
    const getBuilderResult = () => {
        let actionForm = bAction;
        let isPassive = false;

        if (['the car', 'my laptop', 'my hair'].includes(bPerson)) {
            isPassive = true;
            if (bAction.includes('wash')) actionForm = 'washed';
            else if (bAction.includes('clean')) actionForm = 'cleaned';
            else if (bAction.includes('fix') || bAction.includes('repair')) actionForm = 'repaired';
            else actionForm = 'done';
        } else {
            if (bVerb === 'got') {
                actionForm = 'to ' + bAction;
            }
        }

        const en = `${bSubject} ${bVerb} ${bPerson} ${actionForm}.`;

        let bn = '';
        const subBn = bSubject === 'I' ? 'আমি' : bSubject === 'He' ? 'সে' : bSubject === 'She' ? 'সে' : bSubject === 'Mom' ? 'মা' : bSubject === 'The boss' ? 'বস' : 'তারা';
        const perBn = bPerson === 'me' ? 'আমাকে' : bPerson === 'him' ? 'তাকে' : bPerson === 'us' ? 'আমাদের' : bPerson;

        if (isPassive) {
            bn = `${subBn} ${perBn} করিয়ে নিল/নেবে।`;
        } else {
            if (bVerb === 'made') bn = `${subBn} ${perBn} দিয়ে কাজটি করাল (বাধ্য বা আবেগ সৃষ্টি করল)।`;
            else if (bVerb === 'had') bn = `${subBn} ${perBn} দিয়ে কাজটি করাল (দায়িত্ব/পেমেন্ট দিয়ে)।`;
            else if (bVerb === 'got') bn = `${subBn} ${perBn} বুঝিয়ে রাজি করিয়ে কাজটি করাল।`;
            else if (bVerb === 'let') bn = `${subBn} ${perBn} কাজটি করতে দিল (অনুমতি দিল)।`;
            else bn = `${subBn} ${perBn} কাজটি করতে সাহায্য করল।`;
        }

        return { en, bn, isPassive };
    };

    const filteredSpoken = spokenFilter === 'all'
        ? SPOKEN_SENTENCES
        : SPOKEN_SENTENCES.filter(s => s.verb === spokenFilter);

    const handleQuizOption = (opt: string) => {
        if (quizAnswered) return;
        setQuizAnswered(opt);
        if (opt === QUICK_QUIZ[quizIndex].correct) {
            setQuizScore(prev => prev + 1);
        }
    };

    const nextQuizQuestion = () => {
        if (quizIndex < QUICK_QUIZ.length - 1) {
            setQuizIndex(prev => prev + 1);
            setQuizAnswered(null);
        } else {
            setQuizCompleted(true);
        }
    };

    const resetQuiz = () => {
        setQuizIndex(0);
        setQuizAnswered(null);
        setQuizScore(0);
        setQuizCompleted(false);
    };

    const builderRes = getBuilderResult();

    return (
        <div className="min-h-screen bg-[#f8fafc] text-slate-800 pb-28 font-sans">
            {/* Header */}
            <header className="sticky top-0 z-40 bg-slate-950 text-white border-b border-slate-800 px-4 py-3 shadow-md">
                <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                        <Link
                            href="/dashboard/spoken-english"
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 text-xs font-bold text-slate-300 hover:text-white transition"
                        >
                            <ArrowLeft size={16} />
                            <span>স্পোকেন হাব</span>
                        </Link>
                        <div>
                            <span className="text-[10px] font-black uppercase tracking-wider text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-800/60">
                                অল-ইন-ওয়ান স্পোকেন ল্যাব
                            </span>
                            <h1 className="text-sm sm:text-base font-black text-white flex items-center gap-1.5">
                                <Zap className="text-cyan-400 fill-cyan-400" size={17} /> Causative Verbs: Make, Have, Get, Let, Help
                            </h1>
                        </div>
                    </div>

                    <Link
                        href="/dashboard/spoken-english/online-test"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-black hover:opacity-95 transition shadow-sm"
                    >
                        <Award size={15} />
                        <span>১০০ নম্বরের মেগা টেস্ট</span>
                    </Link>
                </div>
            </header>

            {/* Quick Summary Formula Banner */}
            <section className="bg-gradient-to-r from-slate-950 via-slate-900 to-cyan-950 text-white border-b border-cyan-900/40 py-6 px-4">
                <div className="max-w-7xl mx-auto space-y-3">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 text-xs font-bold">
                        <Sparkles size={13} />
                        <span>জাদুকরী ট্রিক: নিজে না করে অন্যকে দিয়ে করানো</span>
                    </div>

                    <h2 className="text-xl sm:text-3xl font-black text-white">
                        Causative Verbs <span className="text-cyan-400">সহজে শিখুন ও আনলিমিটেড প্র্যাকটিস করুন</span>
                    </h2>

                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 pt-2">
                        <div className="bg-slate-900/80 border border-cyan-500/30 rounded-xl p-2.5 text-center">
                            <span className="text-sm font-black text-cyan-400">1. MAKE</span>
                            <p className="text-[11px] text-slate-300 font-bold">বাধ্য করা / হাসানো</p>
                            <span className="text-[10px] bg-cyan-950 text-cyan-300 px-2 py-0.5 rounded font-mono mt-1 inline-block">No 'to' (Base)</span>
                        </div>
                        <div className="bg-slate-900/80 border border-indigo-500/30 rounded-xl p-2.5 text-center">
                            <span className="text-sm font-black text-indigo-400">2. HAVE</span>
                            <p className="text-[11px] text-slate-300 font-bold">দায়িত্ব দেওয়া / সেবা</p>
                            <span className="text-[10px] bg-indigo-950 text-indigo-300 px-2 py-0.5 rounded font-mono mt-1 inline-block">No 'to' (Base)</span>
                        </div>
                        <div className="bg-slate-900/80 border border-amber-500/30 rounded-xl p-2.5 text-center">
                            <span className="text-sm font-black text-amber-400">3. GET</span>
                            <p className="text-[11px] text-slate-300 font-bold">রাজি করানো</p>
                            <span className="text-[10px] bg-amber-950 text-amber-300 px-2 py-0.5 rounded font-mono mt-1 inline-block font-black">অবশ্যই 'TO' হবে</span>
                        </div>
                        <div className="bg-slate-900/80 border border-emerald-500/30 rounded-xl p-2.5 text-center">
                            <span className="text-sm font-black text-emerald-400">4. LET</span>
                            <p className="text-[11px] text-slate-300 font-bold">অনুমতি দেওয়া</p>
                            <span className="text-[10px] bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded font-mono mt-1 inline-block">No 'to' (Base)</span>
                        </div>
                        <div className="bg-slate-900/80 border border-pink-500/30 rounded-xl p-2.5 text-center col-span-2 sm:col-span-1">
                            <span className="text-sm font-black text-pink-400">5. HELP</span>
                            <p className="text-[11px] text-slate-300 font-bold">সাহায্য করা</p>
                            <span className="text-[10px] bg-pink-950 text-pink-300 px-2 py-0.5 rounded font-mono mt-1 inline-block">Base / To V1</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Navigation Tabs Bar */}
            <div className="sticky top-[57px] z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm px-4">
                <div className="max-w-7xl mx-auto flex items-center gap-1.5 overflow-x-auto py-2.5 no-scrollbar">
                    <button
                        onClick={() => setActiveTab('guide')}
                        className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition ${
                            activeTab === 'guide'
                                ? 'bg-cyan-600 text-white shadow-sm'
                                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                    >
                        <BookOpen size={14} />
                        <span>১. বেসিক গাইড ও রুলস</span>
                    </button>

                    <button
                        onClick={() => setActiveTab('builder')}
                        className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition ${
                            activeTab === 'builder'
                                ? 'bg-cyan-600 text-white shadow-sm'
                                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                    >
                        <Zap size={14} />
                        <span>২. ৩-ক্লিক সেন্টেন্স মেকার</span>
                    </button>

                    <button
                        onClick={() => setActiveTab('spoken')}
                        className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition ${
                            activeTab === 'spoken'
                                ? 'bg-cyan-600 text-white shadow-sm'
                                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                    >
                        <Volume2 size={14} />
                        <span>৩. ৬০টি স্পোকেন ড্রিলস</span>
                    </button>

                    <button
                        onClick={() => setActiveTab('quiz')}
                        className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition ${
                            activeTab === 'quiz'
                                ? 'bg-cyan-600 text-white shadow-sm'
                                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                    >
                        <Flame size={14} />
                        <span>৪. ১-ট্যাপ কুইজ (২০টি)</span>
                    </button>

                    <button
                        onClick={() => setActiveTab('chips')}
                        className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition ${
                            activeTab === 'chips'
                                ? 'bg-cyan-600 text-white shadow-sm'
                                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                    >
                        <Layers size={14} />
                        <span>৫. ফিল-ইন-চিপস (২০টি)</span>
                    </button>

                    <button
                        onClick={() => setActiveTab('errors')}
                        className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition ${
                            activeTab === 'errors'
                                ? 'bg-cyan-600 text-white shadow-sm'
                                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                    >
                        <AlertTriangle size={14} />
                        <span>৬. ভুল বনাম সঠিক (১০টি)</span>
                    </button>

                    <button
                        onClick={() => setActiveTab('pairs')}
                        className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition ${
                            activeTab === 'pairs'
                                ? 'bg-cyan-600 text-white shadow-sm'
                                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                    >
                        <ArrowRightLeft size={14} />
                        <span>৭. একটিভ বনাম প্যাসিভ</span>
                    </button>

                    <button
                        onClick={() => setActiveTab('dialogues')}
                        className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition ${
                            activeTab === 'dialogues'
                                ? 'bg-cyan-600 text-white shadow-sm'
                                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                    >
                        <MessageSquare size={14} />
                        <span>৮. স্পোকেন ডায়ালগ</span>
                    </button>
                </div>
            </div>

            {/* Main Container */}
            <main className="max-w-7xl mx-auto px-4 py-6">
                {/* 1. GUIDE */}
                {activeTab === 'guide' && (
                    <div className="space-y-6">
                        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                            <span className="text-xs font-black text-cyan-600 uppercase tracking-wider bg-cyan-50 px-2.5 py-1 rounded-md">
                                ভূমিকা ও ধারণা
                            </span>
                            <h3 className="text-xl font-black text-slate-900 mt-2">Causative Verb (প্রযোজক ক্রিয়া) কী?</h3>
                            <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                                যখন কোনো ব্যক্তি নিজে কোনো কাজ না করে <strong>অন্য কাউকে দিয়ে কাজটি করায় বা ঘটায়</strong>, তখন সেই বাক্য প্রকাশের জন্য যে বিশেষ ভার্বগুলো ব্যবহার করা হয়, তাদের <strong>Causative Verbs</strong> বলা হয়।
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
                                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                                    <span className="text-xs font-bold text-slate-500 uppercase">সাধারণ বাক্য (Normal)</span>
                                    <p className="text-base font-bold text-slate-800 mt-1">I washed my car.</p>
                                    <p className="text-xs text-slate-500 mt-0.5">অর্থ: আমি নিজে আমার গাড়ি ধুয়েছি।</p>
                                </div>
                                <div className="p-4 rounded-xl bg-cyan-50 border border-cyan-200">
                                    <span className="text-xs font-bold text-cyan-700 uppercase">কজেটিভ বাক্য (Causative)</span>
                                    <p className="text-base font-bold text-cyan-950 mt-1">I had the cleaner wash my car.</p>
                                    <p className="text-xs text-cyan-800 mt-0.5">অর্থ: আমি ক্লিনারকে দিয়ে আমার গাড়ি ধুইয়ে নিয়েছি।</p>
                                </div>
                            </div>
                        </div>

                        {/* 5 Core Verbs Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {/* MAKE */}
                            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-3">
                                <div className="flex items-center justify-between">
                                    <span className="text-xs font-black bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full">1. MAKE</span>
                                    <span className="text-xs text-slate-500 font-bold">বাধ্য করা / অনুভূতি সৃষ্টি করা</span>
                                </div>
                                <p className="text-xs text-slate-600">কাউকে কোনো কাজ করতে বাধ্য করা বা কারো মাঝে আবেগ/হাসি/কান্না সৃষ্টি করা।</p>
                                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 font-mono text-xs text-cyan-900 font-bold">
                                    Subject + MAKE + Person + Base Verb (V1)
                                </div>
                                <div className="space-y-1.5 text-xs">
                                    <p className="text-slate-700">✔️ He <strong>made me laugh</strong>. (সে আমাকে হাসাল।)</p>
                                    <p className="text-slate-700">✔️ Mom <strong>makes me eat</strong> vegetables. (মা আমাকে শাকসবজি খাওয়ান।)</p>
                                    <p className="text-rose-600">❌ He made me <strong>to</strong> laugh. (ভুল! Make এর সাথে 'to' বসে না)</p>
                                </div>
                            </div>

                            {/* HAVE */}
                            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-3">
                                <div className="flex items-center justify-between">
                                    <span className="text-xs font-black bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full">2. HAVE</span>
                                    <span className="text-xs text-slate-500 font-bold">দায়িত্ব দেওয়া / সেবা নেওয়া</span>
                                </div>
                                <p className="text-xs text-slate-600">কাউকে পারিশ্রমিক দিয়ে বা স্বাভাবিক দায়িত্ব দিয়ে কোনো কাজ করানো।</p>
                                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 font-mono text-xs text-indigo-900 font-bold">
                                    Active: Subject + HAVE + Person + Base Verb (V1)<br />
                                    Passive: Subject + HAVE + Object + V3
                                </div>
                                <div className="space-y-1.5 text-xs">
                                    <p className="text-slate-700">✔️ I <strong>had the mechanic fix</strong> my car. (মেকানিককে দিয়ে ঠিক করালাম)</p>
                                    <p className="text-slate-700">✔️ I <strong>had my hair cut</strong>. (চুল কাটিয়েছি - Passive V3)</p>
                                </div>
                            </div>

                            {/* GET */}
                            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-3">
                                <div className="flex items-center justify-between">
                                    <span className="text-xs font-black bg-amber-100 text-amber-800 px-3 py-1 rounded-full">3. GET</span>
                                    <span className="text-xs text-slate-500 font-bold">অনুরোধ / রাজি করানো</span>
                                </div>
                                <p className="text-xs text-slate-600">কাউকে বুঝিয়ে বা অনুরোধ করে কাজটি করতে রাজি করানো।</p>
                                <div className="bg-amber-50 p-3 rounded-xl border border-amber-200 font-mono text-xs text-amber-950 font-black">
                                    Active: Subject + GET + Person + TO + Base Verb<br />
                                    Passive: Subject + GET + Object + V3
                                </div>
                                <div className="space-y-1.5 text-xs">
                                    <p className="text-slate-700">✔️ I <strong>got him to help</strong> me. (Get আসলেই 'to' হবে)</p>
                                    <p className="text-slate-700">✔️ I <strong>got my watch repaired</strong>. (ঘড়ি ঠিক করিয়েছি - V3)</p>
                                </div>
                            </div>

                            {/* LET */}
                            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-3">
                                <div className="flex items-center justify-between">
                                    <span className="text-xs font-black bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full">4. LET</span>
                                    <span className="text-xs text-slate-500 font-bold">অনুমতি দেওয়া</span>
                                </div>
                                <p className="text-xs text-slate-600">কাউকে কোনো কাজ করার অনুমতি বা সুযোগ প্রদান করা।</p>
                                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 font-mono text-xs text-emerald-900 font-bold">
                                    Subject + LET + Person + Base Verb (V1)
                                </div>
                                <div className="space-y-1.5 text-xs">
                                    <p className="text-slate-700">✔️ <strong>Let me go</strong>. (আমাকে যেতে দাও।)</p>
                                    <p className="text-slate-700">✔️ Mom <strong>lets me drive</strong>. (মা আমাকে গাড়ি চালাতে দেন।)</p>
                                </div>
                            </div>
                        </div>

                        {/* Advanced Causatives */}
                        <div className="bg-gradient-to-r from-slate-900 to-indigo-950 text-white rounded-2xl p-6 shadow-sm">
                            <h4 className="text-base font-black flex items-center gap-2">
                                <Sparkles size={16} className="text-cyan-400" />
                                অ্যাডভান্সড কজেটিভ ভার্বস (সবসময় 'to + V1' বসে)
                            </h4>
                            <p className="text-slate-300 text-xs mt-1">
                                Force, Cause, Allow, Enable, Require, Order, Persuade — এদের পর সর্বদাই <strong>to + Base Verb</strong> বসে:
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4 text-xs">
                                <div className="bg-white/10 p-3 rounded-xl border border-white/10">
                                    <strong className="text-cyan-300">Force:</strong> Rain forced us <strong>to stay</strong> inside.
                                </div>
                                <div className="bg-white/10 p-3 rounded-xl border border-white/10">
                                    <strong className="text-cyan-300">Cause:</strong> Storm caused trees <strong>to fall</strong>.
                                </div>
                                <div className="bg-white/10 p-3 rounded-xl border border-white/10">
                                    <strong className="text-cyan-300">Allow:</strong> Rules allow us <strong>to leave</strong>.
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* 2. BUILDER */}
                {activeTab === 'builder' && (
                    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6">
                        <div className="border-b border-slate-200 pb-4">
                            <span className="text-xs font-black text-cyan-600 uppercase tracking-wider bg-cyan-50 px-2.5 py-1 rounded-md">
                                নো টাইপিং • জাস্ট ক্লিক
                            </span>
                            <h3 className="text-xl font-black text-slate-900 mt-2">৩-ক্লিক সেন্টেন্স মেকার</h3>
                            <p className="text-slate-600 text-xs mt-1">
                                নিচে দেওয়া চিপগুলোতে ট্যাপ করে নিজের ইচ্ছেমতো বাক্য তৈরি করুন, অর্থ দেখুন এবং অডিও শুনুন:
                            </p>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-black text-slate-500 uppercase tracking-wider">১. সাবজেক্ট (Subject)</label>
                            <div className="flex flex-wrap gap-2">
                                {['I', 'We', 'You', 'He', 'She', 'Mom', 'The boss', 'They'].map(s => (
                                    <button
                                        key={s}
                                        onClick={() => setBSubject(s)}
                                        className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                                            bSubject === s
                                                ? 'bg-slate-900 text-white shadow'
                                                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                                        }`}
                                    >
                                        {s}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-black text-slate-500 uppercase tracking-wider">২. কজেটিভ ভার্ব (Causative Verb)</label>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    { v: 'made', name: 'made (বাধ্য/আবেগ)' },
                                    { v: 'had', name: 'had (দায়িত্ব/সেবা)' },
                                    { v: 'got', name: 'got (রাজি করানো - to হবে)' },
                                    { v: 'let', name: 'let (অনুমতি দেওয়া)' },
                                    { v: 'helped', name: 'helped (সাহায্য করা)' }
                                ].map(item => (
                                    <button
                                        key={item.v}
                                        onClick={() => setBVerb(item.v as any)}
                                        className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                                            bVerb === item.v
                                                ? 'bg-cyan-600 text-white shadow'
                                                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                                        }`}
                                    >
                                        {item.name}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-black text-slate-500 uppercase tracking-wider">৩. ব্যক্তি বা বস্তু (Person / Object)</label>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    { p: 'me', label: 'me (আমাকে)' },
                                    { p: 'him', label: 'him (তাকে)' },
                                    { p: 'us', label: 'us (আমাদের)' },
                                    { p: 'the car', label: 'the car (গাড়ি - বস্তু)' },
                                    { p: 'my laptop', label: 'my laptop (ল্যাপটপ - বস্তু)' },
                                    { p: 'my hair', label: 'my hair (চুল - বস্তু)' }
                                ].map(item => (
                                    <button
                                        key={item.p}
                                        onClick={() => setBPerson(item.p)}
                                        className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                                            bPerson === item.p
                                                ? 'bg-indigo-600 text-white shadow'
                                                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                                        }`}
                                    >
                                        {item.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-black text-slate-500 uppercase tracking-wider">৪. মূল কাজ (Action)</label>
                            <div className="flex flex-wrap gap-2">
                                {['laugh', 'cry', 'clean the room', 'wash the car', 'fix the phone', 'repair the laptop'].map(act => (
                                    <button
                                        key={act}
                                        onClick={() => setBAction(act)}
                                        className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                                            bAction === act
                                                ? 'bg-emerald-600 text-white shadow'
                                                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                                        }`}
                                    >
                                        {act}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="p-5 rounded-2xl bg-gradient-to-r from-slate-900 to-cyan-950 text-white space-y-3 shadow-lg">
                            <div className="flex items-center justify-between">
                                <span className="text-[11px] font-bold text-cyan-300 uppercase tracking-wider">তৈরি হওয়া বাক্য:</span>
                                <button
                                    onClick={() => playAudio(builderRes.en)}
                                    className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 text-xs font-bold transition"
                                >
                                    <Volume2 size={14} />
                                    <span>শুনুন</span>
                                </button>
                            </div>
                            <p className="text-2xl font-black text-cyan-300 font-mono tracking-wide">{builderRes.en}</p>
                            <p className="text-slate-300 text-sm font-semibold">{builderRes.bn}</p>
                            <div className="pt-2 border-t border-cyan-800/60 flex items-center gap-2 text-xs text-cyan-400">
                                <Sparkles size={14} />
                                <span>
                                    {bVerb === 'got' && !builderRes.isPassive
                                        ? "রুল: Get + Person এর পর অবশ্যই 'to' যোগ করা হয়েছে!"
                                        : builderRes.isPassive
                                        ? "রুল: অবজেক্ট (বস্তু) থাকায় V3 (প্যাসিভ ফর্ম) ব্যবহার হয়েছে!"
                                        : "রুল: স্বাভাবিকভাবে Base Verb ব্যবহৃত হয়েছে।"}
                                </span>
                            </div>
                        </div>
                    </div>
                )}

                {/* 3. SPOKEN FLASHCARDS */}
                {activeTab === 'spoken' && (
                    <div className="space-y-6">
                        <div className="flex flex-wrap items-center gap-2 bg-white p-3 rounded-2xl border border-slate-200 shadow-sm">
                            <span className="text-xs font-bold text-slate-500 mr-1">ক্যাটাগরি ফিল্টার:</span>
                            {[
                                { id: 'all', name: 'সবগুলো (৬০টি)' },
                                { id: 'make', name: 'Make (১০টি)' },
                                { id: 'have', name: 'Have (১০টি)' },
                                { id: 'get', name: 'Get (১০টি)' },
                                { id: 'let', name: 'Let (১০টি)' },
                                { id: 'help', name: 'Help (১০টি)' },
                                { id: 'advanced', name: 'Advanced (১০টি)' }
                            ].map(btn => (
                                <button
                                    key={btn.id}
                                    onClick={() => setSpokenFilter(btn.id)}
                                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                                        spokenFilter === btn.id
                                            ? 'bg-slate-900 text-white shadow'
                                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                                    }`}
                                >
                                    {btn.name}
                                </button>
                            ))}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {filteredSpoken.map(item => (
                                <div key={item.id} className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm hover:shadow transition space-y-3">
                                    <div className="flex items-center justify-between">
                                        <span className="text-[10px] font-black uppercase tracking-wider bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                                            #{item.id} • {item.verbName}
                                        </span>
                                        <button
                                            onClick={() => playAudio(item.en)}
                                            className="p-1.5 rounded-lg bg-cyan-50 text-cyan-600 hover:bg-cyan-100 transition"
                                            title="উচ্চারণ শুনুন"
                                        >
                                            <Volume2 size={16} />
                                        </button>
                                    </div>

                                    <p className="text-base font-bold text-slate-900">{item.en}</p>

                                    <div className="pt-1">
                                        {revealedSpoken[item.id] ? (
                                            <p className="text-xs font-semibold text-cyan-800 bg-cyan-50/70 p-2 rounded-lg border border-cyan-100">
                                                বাংলা: {item.bn}
                                            </p>
                                        ) : (
                                            <button
                                                onClick={() => setRevealedSpoken(prev => ({ ...prev, [item.id]: true }))}
                                                className="text-xs font-bold text-cyan-600 hover:text-cyan-700 flex items-center gap-1"
                                            >
                                                <Eye size={13} />
                                                <span>বাংলা অর্থ দেখুন</span>
                                            </button>
                                        )}
                                    </div>

                                    <div className="text-[11px] text-slate-500 font-mono bg-slate-50 px-2.5 py-1 rounded border border-slate-100">
                                        {item.rule}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* 4. QUIZ */}
                {activeTab === 'quiz' && (
                    <div className="max-w-2xl mx-auto space-y-6">
                        {!quizCompleted ? (
                            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-5">
                                <div className="flex items-center justify-between text-xs font-bold text-slate-500">
                                    <span>প্রশ্ন {quizIndex + 1} / {QUICK_QUIZ.length}</span>
                                    <span>স্কোর: {quizScore}</span>
                                </div>

                                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                                    <div
                                        className="bg-cyan-600 h-full transition-all duration-300"
                                        style={{ width: `${((quizIndex + 1) / QUICK_QUIZ.length) * 100}%` }}
                                    />
                                </div>

                                <div className="py-3">
                                    <h3 className="text-lg font-black text-slate-900 leading-snug">
                                        {QUICK_QUIZ[quizIndex].q}
                                    </h3>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {QUICK_QUIZ[quizIndex].options.map(opt => {
                                        const isSelected = quizAnswered === opt;
                                        const isCorrect = opt === QUICK_QUIZ[quizIndex].correct;

                                        let btnClass = 'bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100';
                                        if (quizAnswered) {
                                            if (isCorrect) btnClass = 'bg-emerald-50 border-emerald-500 text-emerald-800 font-black';
                                            else if (isSelected) btnClass = 'bg-rose-50 border-rose-500 text-rose-800 font-bold';
                                        }

                                        return (
                                            <button
                                                key={opt}
                                                onClick={() => handleQuizOption(opt)}
                                                disabled={Boolean(quizAnswered)}
                                                className={`p-4 rounded-xl border-2 text-center text-sm font-bold transition flex items-center justify-center gap-2 ${btnClass}`}
                                            >
                                                <span>{opt}</span>
                                                {quizAnswered && isCorrect && <Check size={16} className="text-emerald-600" />}
                                                {quizAnswered && isSelected && !isCorrect && <X size={16} className="text-rose-600" />}
                                            </button>
                                        );
                                    })}
                                </div>

                                {quizAnswered && (
                                    <div className="p-4 rounded-xl bg-cyan-50 border border-cyan-200 space-y-2">
                                        <div className="flex items-center gap-1.5 text-xs font-black text-cyan-900">
                                            <Lightbulb size={15} />
                                            <span>শর্টকাট নিয়ম ও ব্যাখ্যা:</span>
                                        </div>
                                        <p className="text-xs text-cyan-800 leading-relaxed font-semibold">
                                            {QUICK_QUIZ[quizIndex].exp}
                                        </p>
                                        <div className="pt-2 flex justify-end">
                                            <button
                                                onClick={nextQuizQuestion}
                                                className="px-4 py-2 rounded-xl bg-cyan-600 text-white text-xs font-bold hover:bg-cyan-700 transition flex items-center gap-1 shadow"
                                            >
                                                <span>{quizIndex < QUICK_QUIZ.length - 1 ? 'পরবর্তী প্রশ্ন' : 'ফলাফল দেখুন'}</span>
                                                <ChevronRight size={15} />
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center space-y-5 shadow-sm">
                                <div className="inline-flex p-4 rounded-full bg-cyan-50 text-cyan-600">
                                    <Trophy size={48} />
                                </div>
                                <h3 className="text-2xl font-black text-slate-900">কুইজ সম্পন্ন হয়েছে!</h3>
                                <p className="text-sm text-slate-600">
                                    আপনার মোট স্কোর: <strong className="text-cyan-600 text-lg">{quizScore} / {QUICK_QUIZ.length}</strong>
                                </p>
                                <button
                                    onClick={resetQuiz}
                                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition"
                                >
                                    <RotateCcw size={15} />
                                    <span>পুনরায় পরীক্ষা দিন</span>
                                </button>
                            </div>
                        )}
                    </div>
                )}

                {/* 5. CHIP FILL */}
                {activeTab === 'chips' && (
                    <div className="space-y-4">
                        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
                            <span className="text-xs font-black text-cyan-600 uppercase tracking-wider bg-cyan-50 px-2.5 py-1 rounded-md">
                                শূন্যস্থান পূরণ
                            </span>
                            <h3 className="text-xl font-black text-slate-900 mt-2">চিপে ক্লিক করে উত্তর পূরণ করুন</h3>
                            <p className="text-slate-600 text-xs mt-1">
                                কোনো টাইপিং নেই! নিচে দেওয়া ৩টি অপশন চিপের মধ্যে সঠিকটিতে ক্লিক করলেই উত্তর ফিল হয়ে যাবে।
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {CHIP_FILL_DATA.map(item => {
                                const selected = chipAnswers[item.id];
                                const isCorrect = selected === item.correctAns;

                                return (
                                    <div key={item.id} className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm space-y-3">
                                        <div className="flex items-center justify-between text-xs font-bold text-slate-500">
                                            <span>#{item.id}</span>
                                            {selected && (
                                                <span className={`px-2 py-0.5 rounded text-[11px] font-black ${
                                                    isCorrect ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                                                }`}>
                                                    {isCorrect ? 'সঠিক ✔️' : 'ভুল ❌'}
                                                </span>
                                            )}
                                        </div>

                                        <p className="text-sm font-bold text-slate-900 leading-relaxed">
                                            {item.sentence}
                                        </p>
                                        <p className="text-xs text-slate-500">বাংলা: {item.bn}</p>

                                        <div className="flex flex-wrap gap-2 pt-1">
                                            {item.options.map(opt => {
                                                const optChosen = selected === opt;
                                                return (
                                                    <button
                                                        key={opt}
                                                        onClick={() => setChipAnswers(prev => ({ ...prev, [item.id]: opt }))}
                                                        className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                                                            optChosen
                                                                ? opt === item.correctAns
                                                                    ? 'bg-emerald-600 text-white shadow'
                                                                    : 'bg-rose-600 text-white shadow'
                                                                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                                                        }`}
                                                    >
                                                        {opt}
                                                    </button>
                                                );
                                            })}
                                        </div>

                                        {selected && (
                                            <div className="text-[11px] text-cyan-900 bg-cyan-50 p-2 rounded-lg border border-cyan-100 font-semibold">
                                                নিয়ম: {item.rule}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}

                {/* 6. SPOT THE ERROR */}
                {activeTab === 'errors' && (
                    <div className="space-y-4">
                        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
                            <span className="text-xs font-black text-rose-600 uppercase tracking-wider bg-rose-50 px-2.5 py-1 rounded-md">
                                কমন ভুল ও সমাধান
                            </span>
                            <h3 className="text-xl font-black text-slate-900 mt-2">স্পট দ্য মিসটেক (১০টি প্রচলিত ভুল)</h3>
                            <p className="text-slate-600 text-xs mt-1">
                                পরীক্ষায় ও কথা বলার সময় শিক্ষার্থীরা যেসব মারাত্মক ভুল করে থাকে, সেগুলো পাশাপাশি দেওয়া হলো:
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {SPOT_ERRORS.map(item => (
                                <div key={item.id} className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm space-y-3">
                                    <div className="text-xs font-bold text-slate-400">ভুল #{item.id}</div>

                                    <div className="p-3 rounded-xl bg-rose-50 border border-rose-200">
                                        <div className="flex items-center gap-1.5 text-xs font-black text-rose-700">
                                            <X size={15} />
                                            <span>ভুল বাক্য (Wrong):</span>
                                        </div>
                                        <p className="text-sm font-bold text-rose-950 mt-1 line-through">{item.wrong}</p>
                                    </div>

                                    <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200">
                                        <div className="flex items-center gap-1.5 text-xs font-black text-emerald-700">
                                            <Check size={15} />
                                            <span>সঠিক বাক্য (Correct):</span>
                                        </div>
                                        <p className="text-sm font-bold text-emerald-950 mt-1">{item.correct}</p>
                                        <p className="text-xs text-emerald-800 mt-0.5">বাংলা: {item.bn}</p>
                                    </div>

                                    <p className="text-xs text-slate-600 font-semibold bg-slate-50 p-2 rounded-lg">
                                        💡 কারণ: {item.exp}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* 7. PAIRS */}
                {activeTab === 'pairs' && (
                    <div className="space-y-4">
                        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
                            <span className="text-xs font-black text-indigo-600 uppercase tracking-wider bg-indigo-50 px-2.5 py-1 rounded-md">
                                তুলনা ও পার্থক্য
                            </span>
                            <h3 className="text-xl font-black text-slate-900 mt-2">অ্যাক্টিভ বনাম প্যাসিভ কজেটিভ পেয়ার্স</h3>
                            <p className="text-slate-600 text-xs mt-1">
                                ব্যক্তি নিজে কাজ করলে Active (Base Verb), কিন্তু বস্তু কাজ করিয়ে নিলে Passive (V3):
                            </p>
                        </div>

                        <div className="space-y-3">
                            {ACTIVE_PASSIVE_PAIRS.map(pair => (
                                <div key={pair.id} className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                                        <span className="text-[10px] font-black uppercase text-slate-500">অ্যাক্টিভ (ব্যক্তি নিজে করছে)</span>
                                        <p className="text-sm font-bold text-slate-900">{pair.active}</p>
                                        <p className="text-xs text-slate-600">বাংলা: {pair.activeBn}</p>
                                    </div>

                                    <div className="p-3.5 rounded-xl bg-cyan-50 border border-cyan-200 space-y-1">
                                        <span className="text-[10px] font-black uppercase text-cyan-700">প্যাসিভ (কাজ করিয়ে নেওয়া হচ্ছে)</span>
                                        <p className="text-sm font-bold text-cyan-950">{pair.passive}</p>
                                        <p className="text-xs text-cyan-800">বাংলা: {pair.passiveBn}</p>
                                    </div>

                                    <div className="md:col-span-2 text-xs text-slate-500 font-semibold border-t border-slate-100 pt-2">
                                        💡 {pair.note}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* 8. DIALOGUES */}
                {activeTab === 'dialogues' && (
                    <div className="space-y-6">
                        <div className="flex flex-wrap gap-2">
                            {REAL_DIALOGUES.map(d => (
                                <button
                                    key={d.id}
                                    onClick={() => setActiveDialogueId(d.id)}
                                    className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                                        activeDialogueId === d.id
                                            ? 'bg-slate-900 text-white shadow'
                                            : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
                                    }`}
                                >
                                    {d.title}
                                </button>
                            ))}
                        </div>

                        {(() => {
                            const dia = REAL_DIALOGUES.find(d => d.id === activeDialogueId) || REAL_DIALOGUES[0];
                            return (
                                <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
                                    <h4 className="text-base font-black text-slate-900 border-b border-slate-100 pb-3">
                                        {dia.title}
                                    </h4>

                                    <div className="space-y-3">
                                        {dia.lines.map((l, idx) => (
                                            <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                                                <div className="flex items-center justify-between">
                                                    <span className="text-xs font-black text-cyan-700 uppercase">{l.speaker}</span>
                                                    <button
                                                        onClick={() => playAudio(l.en)}
                                                        className="text-slate-400 hover:text-cyan-600 transition"
                                                    >
                                                        <Volume2 size={15} />
                                                    </button>
                                                </div>
                                                <p className="text-sm font-bold text-slate-900">{l.en}</p>
                                                <p className="text-xs text-slate-600">বাংলা: {l.bn}</p>
                                                <span className="text-[10px] bg-cyan-100 text-cyan-800 px-2 py-0.5 rounded font-mono inline-block mt-1">
                                                    কজেটিভ ব্যবহার: {l.causative}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            );
                        })()}
                    </div>
                )}
            </main>
        </div>
    );
}
"""

final_page_tsx = (
    PAGE_TSX
    .replace('__SPOKEN_JSON__', spoken_json)
    .replace('__QUIZ_JSON__', quiz_json)
    .replace('__CHIP_JSON__', chip_json)
    .replace('__ERRORS_JSON__', errors_json)
    .replace('__PAIRS_JSON__', pairs_json)
    .replace('__DIALOGUES_JSON__', dialogues_json)
)

next_page_path = r'E:\antigravity\ILTES\src\app\dashboard\spoken-english\causative-verbs\page.tsx'
with open(next_page_path, 'w', encoding='utf-8') as f:
    f.write(final_page_tsx)
print(f"Successfully wrote {next_page_path} ({len(final_page_tsx)} bytes)")


# ==============================================================================
# HTML LAB TEMPLATE
# ==============================================================================

HTML_TEMPLATE = """<!DOCTYPE html>
<html lang="bn">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>LearnCare Academy - Causative Verbs (পূর্ণাঙ্গ মাস্টার ল্যাব ও স্পোকেন ড্রিলস)</title>
<link href="https://fonts.maateen.me/kalpurush/font.css" rel="stylesheet">
<style>
:root {
    --primary: #0891b2;
    --primary-dark: #0e7490;
    --primary-light: #ecfeff;
    --accent: #f59e0b;
    --text-main: #0f172a;
    --text-muted: #64748b;
    --bg-body: #f8fafc;
    --card-bg: #ffffff;
    --border: #e2e8f0;
    --success: #10b981;
    --error: #ef4444;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Kalpurush', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
    background-color: var(--bg-body);
    color: var(--text-main);
    line-height: 1.7;
    padding: 20px 15px 80px;
}

.container {
    max-width: 1100px;
    margin: 0 auto;
}

header {
    text-align: center;
    background: linear-gradient(135deg, #0f172a 0%, #164e63 50%, #0f172a 100%);
    color: white;
    padding: 35px 20px;
    border-radius: 24px;
    margin-bottom: 25px;
    box-shadow: 0 10px 25px rgba(15, 23, 42, 0.15);
    border-bottom: 5px solid var(--primary);
}

.badge-pill {
    display: inline-block;
    background: rgba(6, 182, 212, 0.2);
    color: #67e8f9;
    padding: 5px 16px;
    border-radius: 30px;
    font-size: 0.85rem;
    font-weight: bold;
    margin-bottom: 12px;
    border: 1px solid rgba(6, 182, 212, 0.4);
}

header h1 {
    font-size: 2rem;
    font-weight: 900;
    margin-bottom: 8px;
    letter-spacing: -0.5px;
}

header p {
    font-size: 1rem;
    color: #cbd5e1;
    max-width: 700px;
    margin: 0 auto;
}

.formula-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 12px;
    margin-bottom: 25px;
}

.formula-card {
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 14px;
    text-align: center;
    box-shadow: 0 2px 8px rgba(0,0,0,0.03);
}

.formula-card strong {
    display: block;
    font-size: 1.1rem;
    color: var(--primary-dark);
    margin-bottom: 3px;
}

.formula-card span {
    font-size: 0.8rem;
    color: var(--text-muted);
    display: block;
}

.formula-card .badge {
    display: inline-block;
    padding: 2px 10px;
    border-radius: 12px;
    font-size: 0.75rem;
    font-weight: bold;
    margin-top: 6px;
    font-family: monospace;
}

.nav-tabs {
    display: flex;
    gap: 8px;
    overflow-x: auto;
    padding-bottom: 12px;
    margin-bottom: 20px;
    border-bottom: 1px solid var(--border);
}

.nav-tab {
    background: white;
    border: 1px solid var(--border);
    padding: 8px 16px;
    border-radius: 30px;
    font-size: 0.85rem;
    font-weight: bold;
    color: var(--text-muted);
    cursor: pointer;
    white-space: nowrap;
    transition: all 0.2s ease;
}

.nav-tab:hover {
    background: var(--primary-light);
    color: var(--primary-dark);
}

.nav-tab.active {
    background: var(--primary);
    color: white;
    border-color: var(--primary);
    box-shadow: 0 4px 12px rgba(8, 145, 178, 0.25);
}

.session-panel {
    display: none;
    background: white;
    border: 1px solid var(--border);
    border-radius: 20px;
    padding: 25px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.04);
    margin-bottom: 30px;
}

.session-panel.active {
    display: block;
}

.session-header {
    border-bottom: 2px solid var(--border);
    padding-bottom: 14px;
    margin-bottom: 20px;
}

.session-tag {
    display: inline-block;
    background: #e0f2fe;
    color: #0369a1;
    font-size: 0.75rem;
    font-weight: 800;
    padding: 3px 10px;
    border-radius: 6px;
    text-transform: uppercase;
    margin-bottom: 6px;
}

.session-header h3 {
    font-size: 1.35rem;
    color: var(--text-main);
    font-weight: 900;
}

.chip-row {
    margin-bottom: 16px;
}

.chip-row label {
    display: block;
    font-size: 0.8rem;
    font-weight: 800;
    color: var(--text-muted);
    text-transform: uppercase;
    margin-bottom: 8px;
}

.chip-container {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}

.chip-btn {
    background: #f1f5f9;
    border: 1px solid #cbd5e1;
    padding: 6px 14px;
    border-radius: 12px;
    font-size: 0.82rem;
    font-weight: 700;
    color: #334155;
    cursor: pointer;
    transition: all 0.2s;
}

.chip-btn:hover {
    background: #e2e8f0;
}

.chip-btn.selected {
    background: var(--primary);
    color: white;
    border-color: var(--primary);
    box-shadow: 0 2px 8px rgba(8, 145, 178, 0.3);
}

.builder-output {
    background: linear-gradient(135deg, #0f172a 0%, #164e63 100%);
    color: white;
    border-radius: 18px;
    padding: 22px;
    margin-top: 20px;
    box-shadow: 0 8px 20px rgba(15, 23, 42, 0.15);
}

.builder-output .out-en {
    font-size: 1.5rem;
    font-weight: 900;
    color: #67e8f9;
    font-family: monospace;
    margin-bottom: 6px;
}

.builder-output .out-bn {
    font-size: 1rem;
    color: #e2e8f0;
    margin-bottom: 10px;
}

.speaker-btn {
    background: rgba(255, 255, 255, 0.15);
    border: none;
    color: white;
    padding: 6px 14px;
    border-radius: 20px;
    font-size: 0.8rem;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 5px;
    font-weight: bold;
    transition: 0.2s;
}

.speaker-btn:hover {
    background: rgba(255, 255, 255, 0.25);
}

.cards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
    gap: 15px;
}

.drill-card {
    background: #ffffff;
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 16px;
    box-shadow: 0 2px 6px rgba(0,0,0,0.03);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.drill-card .card-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
}

.drill-card .card-en {
    font-size: 1.05rem;
    font-weight: 800;
    color: var(--text-main);
    margin-bottom: 8px;
}

.drill-card .card-bn {
    font-size: 0.85rem;
    color: #0369a1;
    background: #f0f9ff;
    padding: 6px 10px;
    border-radius: 8px;
    margin-bottom: 8px;
    display: none;
}

.drill-card .card-rule {
    font-size: 0.72rem;
    color: var(--text-muted);
    font-family: monospace;
    background: #f8fafc;
    padding: 4px 8px;
    border-radius: 6px;
    border: 1px solid #f1f5f9;
}

.quiz-box {
    max-width: 650px;
    margin: 0 auto;
}

.progress-bar-bg {
    background: #e2e8f0;
    height: 8px;
    border-radius: 10px;
    overflow: hidden;
    margin-bottom: 20px;
}

.progress-bar-fill {
    background: var(--primary);
    height: 100%;
    width: 0%;
    transition: width 0.3s ease;
}

.quiz-q {
    font-size: 1.25rem;
    font-weight: 800;
    margin-bottom: 18px;
}

.quiz-options {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    margin-bottom: 18px;
}

.quiz-btn {
    padding: 14px;
    font-size: 1rem;
    font-weight: 800;
    border: 2px solid var(--border);
    background: white;
    border-radius: 14px;
    cursor: pointer;
    transition: all 0.2s;
}

.quiz-btn:hover {
    border-color: var(--primary);
    background: var(--primary-light);
}

.quiz-btn.correct {
    background: #ecfdf5;
    border-color: var(--success);
    color: #065f46;
}

.quiz-btn.wrong {
    background: #fef2f2;
    border-color: var(--error);
    color: #991b1b;
}

.quiz-exp {
    display: none;
    background: #ecfeff;
    border: 1px solid #a5f3fc;
    color: #0e7490;
    padding: 14px;
    border-radius: 12px;
    font-size: 0.85rem;
    font-weight: 700;
    margin-top: 15px;
}

.error-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 15px;
}

.error-card {
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 16px;
    background: white;
}

.box-wrong {
    background: #fff1f2;
    border: 1px solid #fecdd3;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 8px;
}

.box-wrong p {
    color: #9f1239;
    font-weight: 800;
    text-decoration: line-through;
    font-size: 0.95rem;
}

.box-correct {
    background: #f0fdf4;
    border: 1px solid #bbf7d0;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 8px;
}

.box-correct p {
    color: #166534;
    font-weight: 800;
    font-size: 0.95rem;
}

.dialogue-card {
    background: #f8fafc;
    border: 1px solid var(--border);
    border-radius: 14px;
    padding: 14px;
    margin-bottom: 12px;
}

.dialogue-speaker {
    font-weight: 900;
    color: var(--primary-dark);
    font-size: 0.85rem;
    text-transform: uppercase;
}
</style>
</head>
<body>

<div class="container">
    <header>
        <span class="badge-pill">LearnCare Academy • Spoken English Master Lab</span>
        <h1>Causative Verbs (পূর্ণাঙ্গ ল্যাব ও প্র্যাকটিস)</h1>
        <p>Make, Have, Get, Let, Help ও অন্যান্য কজেটিভ ভার্বস কোনো কঠিন নিয়ম ছাড়া ছোট ছোট সহজ বাক্যে শিখুন</p>
    </header>

    <div class="formula-grid">
        <div class="formula-card">
            <strong>1. MAKE</strong>
            <span>বাধ্য করা / হাসানো</span>
            <span class="badge" style="background:#cffafe;color:#0e7490;">No 'to' (Base)</span>
        </div>
        <div class="formula-card">
            <strong>2. HAVE</strong>
            <span>দায়িত্ব দেওয়া / সেবা</span>
            <span class="badge" style="background:#e0e7ff;color:#3730a3;">No 'to' (Base)</span>
        </div>
        <div class="formula-card">
            <strong>3. GET</strong>
            <span>রাজি করানো</span>
            <span class="badge" style="background:#fef3c7;color:#92400e;">অবশ্যই 'TO' হবে</span>
        </div>
        <div class="formula-card">
            <strong>4. LET</strong>
            <span>অনুমতি দেওয়া</span>
            <span class="badge" style="background:#d1fae5;color:#065f46;">No 'to' (Base)</span>
        </div>
        <div class="formula-card">
            <strong>5. HELP</strong>
            <span>সাহায্য করা</span>
            <span class="badge" style="background:#fce7f3;color:#9d174d;">Base / To V1</span>
        </div>
    </div>

    <div class="nav-tabs">
        <button class="nav-tab active" onclick="switchTab('guide', this)">১. বেসিক গাইড ও রুলস</button>
        <button class="nav-tab" onclick="switchTab('builder', this)">২. ৩-ক্লিক সেন্টেন্স মেকার</button>
        <button class="nav-tab" onclick="switchTab('spoken', this)">৩. ৬০টি স্পোকেন ড্রিলস</button>
        <button class="nav-tab" onclick="switchTab('quiz', this)">৪. ১-ট্যাপ কুইজ (২০টি)</button>
        <button class="nav-tab" onclick="switchTab('chips', this)">৫. ফিল-ইন-চিপস (২০টি)</button>
        <button class="nav-tab" onclick="switchTab('errors', this)">৬. ভুল বনাম সঠিক (১০টি)</button>
        <button class="nav-tab" onclick="switchTab('pairs', this)">৭. একটিভ বনাম প্যাসিভ</button>
        <button class="nav-tab" onclick="switchTab('dialogues', this)">৮. স্পোকেন ডায়ালগ</button>
    </div>

    <!-- 1. GUIDE -->
    <div id="panel-guide" class="session-panel active">
        <div class="session-header">
            <span class="session-tag">বেসিক ধারণা</span>
            <h3>Causative Verbs কী ও কেন ব্যবহার হয়?</h3>
        </div>
        <p style="margin-bottom:15px; color:#475569;">
            যখন কোনো ব্যক্তি নিজে কাজটি না করে <strong>অন্য কাউকে দিয়ে কাজটি করায় বা ঘটায়</strong>, তখন ইংরেজি ব্যাকরণে Causative Verbs (প্রযোজক ক্রিয়া) ব্যবহৃত হয়।
        </p>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:20px;">
            <div style="background:#f8fafc; border:1px solid #e2e8f0; padding:12px; border-radius:12px;">
                <span style="font-size:0.75rem; font-weight:bold; color:#64748b;">সাধারণ বাক্য</span>
                <p style="font-weight:bold; margin-top:4px;">I repaired my car. (আমি নিজে গাড়ি ঠিক করেছি)</p>
            </div>
            <div style="background:#ecfeff; border:1px solid #a5f3fc; padding:12px; border-radius:12px;">
                <span style="font-size:0.75rem; font-weight:bold; color:#0e7490;">কজেটিভ বাক্য</span>
                <p style="font-weight:bold; margin-top:4px; color:#0891b2;">I had the mechanic repair my car. (মেকানিককে দিয়ে করালাম)</p>
            </div>
        </div>
        <h4 style="font-size:1.1rem; margin-bottom:10px;">ম্যাজিক ফর্মুলা টেবিল:</h4>
        <table style="width:100%; border-collapse:collapse; font-size:0.85rem; text-align:left;">
            <thead>
                <tr style="background:#f1f5f9;">
                    <th style="padding:10px; border:1px solid #cbd5e1;">ভার্ব</th>
                    <th style="padding:10px; border:1px solid #cbd5e1;">ব্যবহার</th>
                    <th style="padding:10px; border:1px solid #cbd5e1;">ফর্মুলা</th>
                    <th style="padding:10px; border:1px solid #cbd5e1;">উদাহরণ</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="padding:8px; border:1px solid #e2e8f0; font-weight:bold; color:#0891b2;">MAKE</td>
                    <td style="padding:8px; border:1px solid #e2e8f0;">বাধ্য করা / হাসানো</td>
                    <td style="padding:8px; border:1px solid #e2e8f0; font-family:monospace;">Make + Person + Base Verb</td>
                    <td style="padding:8px; border:1px solid #e2e8f0;">He made me laugh.</td>
                </tr>
                <tr>
                    <td style="padding:8px; border:1px solid #e2e8f0; font-weight:bold; color:#4f46e5;">HAVE</td>
                    <td style="padding:8px; border:1px solid #e2e8f0;">দায়িত্ব দেওয়া / সেবা নেওয়া</td>
                    <td style="padding:8px; border:1px solid #e2e8f0; font-family:monospace;">Have + Person + Base Verb</td>
                    <td style="padding:8px; border:1px solid #e2e8f0;">I had him call you.</td>
                </tr>
                <tr>
                    <td style="padding:8px; border:1px solid #e2e8f0; font-weight:bold; color:#d97706;">GET</td>
                    <td style="padding:8px; border:1px solid #e2e8f0;">বুঝিয়ে রাজি করানো</td>
                    <td style="padding:8px; border:1px solid #e2e8f0; font-family:monospace; font-weight:bold; color:#b45309;">Get + Person + TO + Base Verb</td>
                    <td style="padding:8px; border:1px solid #e2e8f0;">I got him to help me.</td>
                </tr>
                <tr>
                    <td style="padding:8px; border:1px solid #e2e8f0; font-weight:bold; color:#059669;">LET</td>
                    <td style="padding:8px; border:1px solid #e2e8f0;">অনুমতি দেওয়া</td>
                    <td style="padding:8px; border:1px solid #e2e8f0; font-family:monospace;">Let + Person + Base Verb</td>
                    <td style="padding:8px; border:1px solid #e2e8f0;">Let him speak.</td>
                </tr>
                <tr>
                    <td style="padding:8px; border:1px solid #e2e8f0; font-weight:bold; color:#db2777;">HELP</td>
                    <td style="padding:8px; border:1px solid #e2e8f0;">সাহায্য করা</td>
                    <td style="padding:8px; border:1px solid #e2e8f0; font-family:monospace;">Help + Person + (to) Base Verb</td>
                    <td style="padding:8px; border:1px solid #e2e8f0;">He helped me carry it.</td>
                </tr>
            </tbody>
        </table>
    </div>

    <!-- 2. BUILDER -->
    <div id="panel-builder" class="session-panel">
        <div class="session-header">
            <span class="session-tag">নো টাইপিং • জাস্ট ক্লিক</span>
            <h3>৩-ক্লিক সেন্টেন্স মেকার</h3>
        </div>
        <p style="font-size:0.85rem; color:#64748b; margin-bottom:15px;">চিপগুলোতে ট্যাপ করে নিজের ইচ্ছেমতো বাক্য তৈরি করুন ও অডিও শুনুন:</p>

        <div class="chip-row">
            <label>১. সাবজেক্ট (Subject):</label>
            <div class="chip-container" id="b-sub-chips">
                <button class="chip-btn selected" onclick="setBuilderSub('I', this)">I</button>
                <button class="chip-btn" onclick="setBuilderSub('He', this)">He</button>
                <button class="chip-btn" onclick="setBuilderSub('She', this)">She</button>
                <button class="chip-btn" onclick="setBuilderSub('Mom', this)">Mom</button>
                <button class="chip-btn" onclick="setBuilderSub('The boss', this)">The boss</button>
                <button class="chip-btn" onclick="setBuilderSub('We', this)">We</button>
                <button class="chip-btn" onclick="setBuilderSub('They', this)">They</button>
            </div>
        </div>

        <div class="chip-row">
            <label>২. কজেটিভ ভার্ব (Causative Verb):</label>
            <div class="chip-container" id="b-verb-chips">
                <button class="chip-btn selected" onclick="setBuilderVerb('made', this)">made (বাধ্য/হাসানো)</button>
                <button class="chip-btn" onclick="setBuilderVerb('had', this)">had (দায়িত্ব/সেবা)</button>
                <button class="chip-btn" onclick="setBuilderVerb('got', this)">got (রাজি করানো - to হবে)</button>
                <button class="chip-btn" onclick="setBuilderVerb('let', this)">let (অনুমতি দেওয়া)</button>
                <button class="chip-btn" onclick="setBuilderVerb('helped', this)">helped (সাহায্য করা)</button>
            </div>
        </div>

        <div class="chip-row">
            <label>৩. ব্যক্তি বা বস্তু (Person / Object):</label>
            <div class="chip-container" id="b-per-chips">
                <button class="chip-btn selected" onclick="setBuilderPer('me', this)">me (আমাকে)</button>
                <button class="chip-btn" onclick="setBuilderPer('him', this)">him (তাকে)</button>
                <button class="chip-btn" onclick="setBuilderPer('us', this)">us (আমাদের)</button>
                <button class="chip-btn" onclick="setBuilderPer('the car', this)">the car (গাড়ি)</button>
                <button class="chip-btn" onclick="setBuilderPer('my laptop', this)">my laptop (ল্যাপটপ)</button>
                <button class="chip-btn" onclick="setBuilderPer('my hair', this)">my hair (চুল)</button>
            </div>
        </div>

        <div class="chip-row">
            <label>৪. মূল কাজ (Action):</label>
            <div class="chip-container" id="b-act-chips">
                <button class="chip-btn selected" onclick="setBuilderAct('laugh', this)">laugh (হাসা)</button>
                <button class="chip-btn" onclick="setBuilderAct('cry', this)">cry (কাঁদা)</button>
                <button class="chip-btn" onclick="setBuilderAct('clean the room', this)">clean the room (পরিষ্কার)</button>
                <button class="chip-btn" onclick="setBuilderAct('wash the car', this)">wash the car (ধোয়া)</button>
                <button class="chip-btn" onclick="setBuilderAct('fix the phone', this)">fix the phone (ঠিক করা)</button>
            </div>
        </div>

        <div class="builder-output">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                <span style="font-size:0.75rem; text-transform:uppercase; color:#67e8f9; font-weight:bold;">তৈরি হওয়া বাক্য:</span>
                <button class="speaker-btn" onclick="speakText(currentBuilderEn)">🔊 শুনুন</button>
            </div>
            <div class="out-en" id="builder-en">I made me laugh.</div>
            <div class="out-bn" id="builder-bn">আমি আমাকে হাসালাম।</div>
            <div id="builder-rule" style="font-size:0.75rem; color:#a5f3fc;">রুল: Make + Person + Base Verb</div>
        </div>
    </div>

    <!-- 3. SPOKEN FLASHCARDS -->
    <div id="panel-spoken" class="session-panel">
        <div class="session-header">
            <span class="session-tag">স্পোকেন ড্রিলস</span>
            <h3>৬০টি নিত্যদিনের স্পোকেন সেন্টেন্সেস</h3>
        </div>
        <div style="display:flex; flex-wrap:wrap; gap:8px; margin-bottom:20px;">
            <button class="chip-btn selected" onclick="filterSpoken('all', this)">সবগুলো (৬০)</button>
            <button class="chip-btn" onclick="filterSpoken('make', this)">Make (১০)</button>
            <button class="chip-btn" onclick="filterSpoken('have', this)">Have (১০)</button>
            <button class="chip-btn" onclick="filterSpoken('get', this)">Get (১০)</button>
            <button class="chip-btn" onclick="filterSpoken('let', this)">Let (১০)</button>
            <button class="chip-btn" onclick="filterSpoken('help', this)">Help (১০)</button>
            <button class="chip-btn" onclick="filterSpoken('advanced', this)">Advanced (১০)</button>
        </div>
        <div class="cards-grid" id="spoken-cards-container"></div>
    </div>

    <!-- 4. QUIZ -->
    <div id="panel-quiz" class="session-panel">
        <div class="session-header">
            <span class="session-tag">স্পিড টেস্ট</span>
            <h3>১-ট্যাপ কুইজ (২০টি প্রশ্ন)</h3>
        </div>
        <div class="quiz-box">
            <div class="progress-bar-bg">
                <div class="progress-bar-fill" id="quiz-progress"></div>
            </div>
            <div style="display:flex; justify-content:space-between; font-size:0.85rem; font-weight:bold; color:#64748b; margin-bottom:12px;">
                <span id="quiz-counter">প্রশ্ন ১ / ২০</span>
                <span id="quiz-score-badge">স্কোর: ০</span>
            </div>
            <div class="quiz-q" id="quiz-question">Mom made me _____ my room.</div>
            <div class="quiz-options" id="quiz-options-box"></div>
            <div class="quiz-exp" id="quiz-exp-box"></div>
            <div style="text-align:right; margin-top:15px; display:none;" id="quiz-next-container">
                <button class="chip-btn selected" onclick="nextQuiz()">পরবর্তী প্রশ্ন ➔</button>
            </div>
            <div id="quiz-result-box" style="display:none; text-align:center; padding:30px;">
                <h2 style="color:var(--primary); font-size:1.8rem; margin-bottom:10px;">কুইজ সম্পন্ন হয়েছে!</h2>
                <p style="font-size:1.1rem; margin-bottom:20px;" id="quiz-final-score"></p>
                <button class="chip-btn selected" onclick="restartQuiz()">পুনরায় পরীক্ষা দিন ↺</button>
            </div>
        </div>
    </div>

    <!-- 5. CHIPS FILL -->
    <div id="panel-chips" class="session-panel">
        <div class="session-header">
            <span class="session-tag">শূন্যস্থান পূরণ</span>
            <h3>চিপে ট্যাপ করে উত্তর পূরণ করুন (২০টি বাক্য)</h3>
        </div>
        <div class="cards-grid" id="chip-fill-container"></div>
    </div>

    <!-- 6. SPOT ERRORS -->
    <div id="panel-errors" class="session-panel">
        <div class="session-header">
            <span class="session-tag">ভুল সমাধান</span>
            <h3>স্পট দ্য মিসটেক (১০টি প্রচলিত ভুল)</h3>
        </div>
        <div class="error-grid" id="errors-container"></div>
    </div>

    <!-- 7. PAIRS -->
    <div id="panel-pairs" class="session-panel">
        <div class="session-header">
            <span class="session-tag">তুলনামূলক পার্থক্য</span>
            <h3>অ্যাক্টিভ বনাম প্যাসিভ কজেটিভ পেয়ার্স</h3>
        </div>
        <div id="pairs-container"></div>
    </div>

    <!-- 8. DIALOGUES -->
    <div id="panel-dialogues" class="session-panel">
        <div class="session-header">
            <span class="session-tag">রিয়েল-লাইফ স্পোকেন</span>
            <h3>বাস্তব জীবনের কথোপকথন</h3>
        </div>
        <div id="dialogues-container"></div>
    </div>
</div>

<script>
const SPOKEN_DATA = __SPOKEN_JSON__;
const QUIZ_DATA = __QUIZ_JSON__;
const CHIP_DATA = __CHIP_JSON__;
const ERROR_DATA = __ERRORS_JSON__;
const PAIR_DATA = __PAIRS_JSON__;
const DIALOGUE_DATA = __DIALOGUES_JSON__;

function speakText(text) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const u = new SpeechSynthesisUtterance(text);
        u.lang = 'en-US';
        u.rate = 0.9;
        window.speechSynthesis.speak(u);
    }
}

function switchTab(tabId, btn) {
    document.querySelectorAll('.session-panel').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-tab').forEach(b => b.classList.remove('active'));
    const target = document.getElementById('panel-' + tabId);
    if (target) target.classList.add('active');
    if (btn) btn.classList.add('active');
}

// BUILDER
let bSub = 'I';
let bVerb = 'made';
let bPer = 'me';
let bAct = 'laugh';
let currentBuilderEn = 'I made me laugh.';

function updateBuilder() {
    let actForm = bAct;
    let isPassive = ['the car', 'my laptop', 'my hair'].includes(bPer);
    if (isPassive) {
        if (bAct.includes('wash')) actForm = 'washed';
        else if (bAct.includes('clean')) actForm = 'cleaned';
        else if (bAct.includes('fix') || bAct.includes('repair')) actForm = 'repaired';
        else actForm = 'done';
    } else {
        if (bVerb === 'got') actForm = 'to ' + bAct;
    }
    currentBuilderEn = bSub + ' ' + bVerb + ' ' + bPer + ' ' + actForm + '.';
    document.getElementById('builder-en').innerText = currentBuilderEn;
    
    let subBn = bSub === 'I' ? 'আমি' : bSub === 'He' ? 'সে' : bSub === 'She' ? 'সে' : bSub === 'Mom' ? 'মা' : bSub === 'The boss' ? 'বস' : 'তারা';
    let perBn = bPer === 'me' ? 'আমাকে' : bPer === 'him' ? 'তাকে' : bPer === 'us' ? 'আমাদের' : bPer;
    let bn = isPassive ? subBn + ' ' + perBn + ' করিয়ে নিল/নেবে।' : subBn + ' ' + perBn + ' দিয়ে কাজটি করাল।';
    document.getElementById('builder-bn').innerText = bn;
    document.getElementById('builder-rule').innerText = isPassive ? 'রুল: অবজেক্ট (বস্তু) থাকায় V3 ব্যবহার হয়েছে!' : (bVerb === 'got' ? 'রুল: Get + Person এর পর অবশ্যই \\'to\\' যোগ করা হয়েছে!' : 'রুল: Base Verb ব্যবহৃত হয়েছে।');
}

function setBuilderSub(val, btn) {
    bSub = val;
    highlightChip(btn, 'b-sub-chips');
    updateBuilder();
}
function setBuilderVerb(val, btn) {
    bVerb = val;
    highlightChip(btn, 'b-verb-chips');
    updateBuilder();
}
function setBuilderPer(val, btn) {
    bPer = val;
    highlightChip(btn, 'b-per-chips');
    updateBuilder();
}
function setBuilderAct(val, btn) {
    bAct = val;
    highlightChip(btn, 'b-act-chips');
    updateBuilder();
}
function highlightChip(btn, containerId) {
    document.querySelectorAll('#' + containerId + ' .chip-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
}

// SPOKEN CARDS
function renderSpokenCards(filter) {
    const container = document.getElementById('spoken-cards-container');
    container.innerHTML = '';
    const filtered = filter === 'all' ? SPOKEN_DATA : SPOKEN_DATA.filter(s => s.verb === filter);
    filtered.forEach(item => {
        const card = document.createElement('div');
        card.className = 'drill-card';
        card.innerHTML = `
            <div>
                <div class="card-top">
                    <span style="font-size:0.75rem; font-weight:bold; color:#0e7490; background:#cffafe; padding:2px 8px; border-radius:6px;">#${item.id} • ${item.verbName}</span>
                    <button class="speaker-btn" style="color:#0891b2; background:#e0f2fe;" onclick="speakText('${item.en.replace(/'/g, "\\\\'")}');">🔊 শুনুন</button>
                </div>
                <div class="card-en">${item.en}</div>
                <button class="chip-btn" style="padding:4px 10px; font-size:0.75rem; margin-bottom:8px;" onclick="this.nextElementSibling.style.display = 'block'; this.style.display = 'none';">বাংলা অর্থ দেখুন</button>
                <div class="card-bn">${item.bn}</div>
            </div>
            <div class="card-rule">${item.rule}</div>
        `;
        container.appendChild(card);
    });
}

function filterSpoken(verb, btn) {
    document.querySelectorAll('#panel-spoken .chip-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    renderSpokenCards(verb);
}

// QUIZ
let qIdx = 0;
let qScore = 0;
let qAnswered = false;

function loadQuizQuestion() {
    qAnswered = false;
    document.getElementById('quiz-next-container').style.display = 'none';
    document.getElementById('quiz-exp-box').style.display = 'none';
    if (qIdx >= QUIZ_DATA.length) {
        document.getElementById('quiz-question').style.display = 'none';
        document.getElementById('quiz-options-box').style.display = 'none';
        document.getElementById('quiz-result-box').style.display = 'block';
        document.getElementById('quiz-final-score').innerText = 'আপনার মোট স্কোর: ' + qScore + ' / ' + QUIZ_DATA.length;
        return;
    }
    const cur = QUIZ_DATA[qIdx];
    document.getElementById('quiz-counter').innerText = 'প্রশ্ন ' + (qIdx + 1) + ' / ' + QUIZ_DATA.length;
    document.getElementById('quiz-score-badge').innerText = 'স্কোর: ' + qScore;
    document.getElementById('quiz-progress').style.width = ((qIdx + 1) / QUIZ_DATA.length * 100) + '%';
    document.getElementById('quiz-question').innerText = cur.q;
    
    const optBox = document.getElementById('quiz-options-box');
    optBox.innerHTML = '';
    cur.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'quiz-btn';
        btn.innerText = opt;
        btn.onclick = () => handleQuizSelect(opt, btn);
        optBox.appendChild(btn);
    });
}

function handleQuizSelect(opt, btn) {
    if (qAnswered) return;
    qAnswered = true;
    const cur = QUIZ_DATA[qIdx];
    const isRight = opt === cur.correct;
    if (isRight) {
        qScore++;
        btn.classList.add('correct');
        btn.innerText = opt + ' ✔️';
    } else {
        btn.classList.add('wrong');
        btn.innerText = opt + ' ❌';
        document.querySelectorAll('.quiz-btn').forEach(b => {
            if (b.innerText === cur.correct) b.classList.add('correct');
        });
    }
    const expBox = document.getElementById('quiz-exp-box');
    expBox.innerHTML = '💡 <strong>ব্যাখ্যা:</strong> ' + cur.exp;
    expBox.style.display = 'block';
    document.getElementById('quiz-next-container').style.display = 'block';
}

function nextQuiz() {
    qIdx++;
    loadQuizQuestion();
}

function restartQuiz() {
    qIdx = 0;
    qScore = 0;
    document.getElementById('quiz-question').style.display = 'block';
    document.getElementById('quiz-options-box').style.display = 'grid';
    document.getElementById('quiz-result-box').style.display = 'none';
    loadQuizQuestion();
}

// CHIP FILL
function renderChipFills() {
    const container = document.getElementById('chip-fill-container');
    container.innerHTML = '';
    CHIP_DATA.forEach(item => {
        const div = document.createElement('div');
        div.className = 'drill-card';
        div.innerHTML = `
            <div>
                <span style="font-size:0.75rem; font-weight:bold; color:#64748b;">#${item.id}</span>
                <div class="card-en" style="margin-top:6px;" id="chip-q-${item.id}">${item.sentence}</div>
                <div style="font-size:0.8rem; color:#64748b; margin-bottom:10px;">বাংলা: ${item.bn}</div>
                <div style="display:flex; flex-wrap:wrap; gap:8px;" id="chip-opts-${item.id}">
                    ${item.options.map(o => `<button class="chip-btn" onclick="selectChipAnswer(${item.id}, '${o}', this)">${o}</button>`).join('')}
                </div>
            </div>
            <div id="chip-rule-${item.id}" style="font-size:0.75rem; color:#0e7490; background:#ecfeff; padding:6px; border-radius:6px; margin-top:10px; display:none;">
                নিয়ম: ${item.rule}
            </div>
        `;
        container.appendChild(div);
    });
}

function selectChipAnswer(id, opt, btn) {
    const item = CHIP_DATA.find(x => x.id === id);
    const isRight = opt === item.correctAns;
    document.querySelectorAll('#chip-opts-' + id + ' .chip-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    btn.style.background = isRight ? '#10b981' : '#ef4444';
    btn.style.color = '#fff';
    
    document.getElementById('chip-rule-' + id).style.display = 'block';
}

// ERROR SPOTS
function renderErrorSpots() {
    const container = document.getElementById('errors-container');
    container.innerHTML = '';
    ERROR_DATA.forEach(item => {
        const div = document.createElement('div');
        div.className = 'error-card';
        div.innerHTML = `
            <span style="font-size:0.75rem; font-weight:bold; color:#64748b;">ভুল #${item.id}</span>
            <div class="box-wrong">
                <p>❌ ${item.wrong}</p>
            </div>
            <div class="box-correct">
                <p>✔️ ${item.correct}</p>
                <span style="font-size:0.8rem; color:#15803d;">বাংলা: ${item.bn}</span>
            </div>
            <div style="font-size:0.8rem; color:#475569; background:#f8fafc; padding:8px; border-radius:8px;">
                💡 <strong>কারণ:</strong> ${item.exp}
            </div>
        `;
        container.appendChild(div);
    });
}

// PAIRS
function renderPairs() {
    const container = document.getElementById('pairs-container');
    container.innerHTML = '';
    PAIR_DATA.forEach(p => {
        const div = document.createElement('div');
        div.style.background = 'white';
        div.style.border = '1px solid #e2e8f0';
        div.style.borderRadius = '16px';
        div.style.padding = '16px';
        div.style.marginBottom = '12px';
        div.innerHTML = `
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:8px;">
                <div style="background:#f8fafc; padding:12px; border-radius:10px; border:1px solid #e2e8f0;">
                    <span style="font-size:0.7rem; font-weight:bold; color:#64748b; text-transform:uppercase;">অ্যাক্টিভ (ব্যক্তি নিজে করছে)</span>
                    <p style="font-weight:bold; margin-top:4px;">${p.active}</p>
                    <span style="font-size:0.8rem; color:#64748b;">${p.activeBn}</span>
                </div>
                <div style="background:#ecfeff; padding:12px; border-radius:10px; border:1px solid #a5f3fc;">
                    <span style="font-size:0.7rem; font-weight:bold; color:#0e7490; text-transform:uppercase;">প্যাসিভ (কাজ করিয়ে নেওয়া হচ্ছে)</span>
                    <p style="font-weight:bold; margin-top:4px; color:#0891b2;">${p.passive}</p>
                    <span style="font-size:0.8rem; color:#0e7490;">${p.passiveBn}</span>
                </div>
            </div>
            <div style="font-size:0.78rem; color:#64748b;">💡 ${p.note}</div>
        `;
        container.appendChild(div);
    });
}

// DIALOGUES
function renderDialogues() {
    const container = document.getElementById('dialogues-container');
    container.innerHTML = '';
    DIALOGUE_DATA.forEach(d => {
        const div = document.createElement('div');
        div.style.background = 'white';
        div.style.border = '1px solid #e2e8f0';
        div.style.borderRadius = '16px';
        div.style.padding = '20px';
        div.style.marginBottom = '18px';
        div.innerHTML = `
            <h4 style="font-size:1.1rem; color:var(--text-main); margin-bottom:14px; border-bottom:1px solid #f1f5f9; padding-bottom:8px;">${d.title}</h4>
            ${d.lines.map(l => `
                <div class="dialogue-card">
                    <div style="display:flex; justify-content:space-between; align-items:center;">
                        <span class="dialogue-speaker">${l.speaker}</span>
                        <button class="speaker-btn" style="color:#0891b2; background:#e0f2fe; padding:2px 8px; font-size:0.7rem;" onclick="speakText('${l.en.replace(/'/g, "\\\\'")}');">🔊</button>
                    </div>
                    <div style="font-weight:bold; margin-top:4px;">${l.en}</div>
                    <div style="font-size:0.8rem; color:#64748b;">বাংলা: ${l.bn}</div>
                    <span style="display:inline-block; font-size:0.7rem; background:#cffafe; color:#0e7490; padding:2px 6px; border-radius:4px; font-family:monospace; margin-top:4px;">কজেটিভ: ${l.causative}</span>
                </div>
            `).join('')}
        `;
        container.appendChild(div);
    });
}

// Init
window.onload = function() {
    updateBuilder();
    renderSpokenCards('all');
    loadQuizQuestion();
    renderChipFills();
    renderErrorSpots();
    renderPairs();
    renderDialogues();
};
</script>

</body>
</html>
"""

final_html = (
    HTML_TEMPLATE
    .replace('__SPOKEN_JSON__', json.dumps(SPOKEN_SENTENCES, ensure_ascii=False))
    .replace('__QUIZ_JSON__', json.dumps(QUICK_QUIZ, ensure_ascii=False))
    .replace('__CHIP_JSON__', json.dumps(CHIP_FILL_DATA, ensure_ascii=False))
    .replace('__ERRORS_JSON__', json.dumps(SPOT_ERRORS, ensure_ascii=False))
    .replace('__PAIRS_JSON__', json.dumps(ACTIVE_PASSIVE_PAIRS, ensure_ascii=False))
    .replace('__DIALOGUES_JSON__', json.dumps(REAL_DIALOGUES, ensure_ascii=False))
)

public_lab = r'E:\antigravity\ILTES\public\academy-labs\Causative_Verbs_Master_Interactive_Practice_Lab.html'
with open(public_lab, 'w', encoding='utf-8') as f:
    f.write(final_html)
print(f"Successfully wrote {public_lab} ({len(final_html)} bytes)")

offline_lab = r'F:\LearnCare Academy\html code\Causative_Verbs_Master_Interactive_Practice_Lab.html'
with open(offline_lab, 'w', encoding='utf-8') as f:
    f.write(final_html)
print(f"Successfully wrote {offline_lab} ({len(final_html)} bytes)")