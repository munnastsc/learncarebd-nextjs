'use client';

import { useState, useEffect, useRef, useMemo } from 'react';
import Link from 'next/link';
import {
    ArrowLeft, Volume2, Mic, CheckCircle2, RotateCcw,
    BookOpen, Layers, Lightbulb, Play, Pause, Flame, Trophy,
    Sparkles, Check, ChevronRight, HelpCircle, ArrowUpRight,
    MessageSquare, Award, Compass, RefreshCw, Zap, Share2,
    PlayCircle, StopCircle, UserCheck, FastForward
} from 'lucide-react';
import { SPOKEN_LESSONS, type SpokenLesson, type LessonConversationTurn } from '../../../../lib/spokenLessonsData';

export default function SpokenLessonsPage() {
    // Current Active Lesson
    const [selectedLessonId, setSelectedLessonId] = useState<string>(SPOKEN_LESSONS[0].id);
    const [activeTab, setActiveTab] = useState<'transform' | 'conversation' | 'concept' | 'sentences' | 'qa' | 'builder'>('transform');
    
    // Filter by Phase
    const [phaseFilter, setPhaseFilter] = useState<string>('all');
    
    // Gamification & Progress (localStorage)
    const [completedLessons, setCompletedLessons] = useState<string[]>([]);
    const [xp, setXp] = useState<number>(0);
    
    // Audio Player State
    const [audioPlayingText, setAudioPlayingText] = useState<string | null>(null);
    const [isAutoPlayingConv, setIsAutoPlayingConv] = useState(false);
    const autoPlayIndexRef = useRef(0);

    // Mic & Speech Recognition State
    const [isRecording, setIsRecording] = useState(false);
    const [activePracticeKey, setActivePracticeKey] = useState<string | null>(null);
    const [userTranscript, setUserTranscript] = useState<string>('');
    const [speechScore, setSpeechScore] = useState<number | null>(null);
    const recognitionRef = useRef<any>(null);

    // Sentence Builder Interactive State
    const [builderSubject, setBuilderSubject] = useState<string>('');
    const [builderVerb, setBuilderVerb] = useState<string>('');
    const [builderComplement, setBuilderComplement] = useState<string>('');

    // Load XP & Completed Lessons
    useEffect(() => {
        const storedXp = Number(localStorage.getItem('spoken_xp') || 0);
        setXp(storedXp);

        try {
            const completed = JSON.parse(localStorage.getItem('completed_spoken_lessons') || '[]');
            setCompletedLessons(completed);
        } catch { /* ignore */ }
    }, []);

    // Current Lesson Object
    const currentLesson = useMemo(() => {
        return SPOKEN_LESSONS.find(l => l.id === selectedLessonId) || SPOKEN_LESSONS[0];
    }, [selectedLessonId]);

    // Filtered Lessons
    const filteredLessons = useMemo(() => {
        if (phaseFilter === 'all') return SPOKEN_LESSONS;
        return SPOKEN_LESSONS.filter(l => l.phase === phaseFilter);
    }, [phaseFilter]);

    // Reset on Lesson Change
    useEffect(() => {
        if (currentLesson.sentenceBuilder) {
            setBuilderSubject(currentLesson.sentenceBuilder.subjects[0] || '');
            setBuilderVerb(currentLesson.sentenceBuilder.auxOrVerbs[0] || '');
            setBuilderComplement(currentLesson.sentenceBuilder.complements[0] || '');
        }
        setUserTranscript('');
        setSpeechScore(null);
        setActivePracticeKey(null);
        setIsRecording(false);
        stopConvAutoPlay();
    }, [selectedLessonId]);

    // Audio Playback
    const playAudio = (text: string, rate = 1.0, pitch = 1.0) => {
        if (typeof window === 'undefined') return;
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-GB';
        utterance.rate = rate;
        utterance.pitch = pitch;
        utterance.onstart = () => setAudioPlayingText(text);
        utterance.onend = () => setAudioPlayingText(null);
        utterance.onerror = () => setAudioPlayingText(null);
        window.speechSynthesis.speak(utterance);
    };

    // Full Conversation Auto-Play
    const stopConvAutoPlay = () => {
        setIsAutoPlayingConv(false);
        if (typeof window !== 'undefined') window.speechSynthesis?.cancel();
        setAudioPlayingText(null);
    };

    const playFullConversation = () => {
        const convList = currentLesson.conversation || [];
        if (convList.length === 0) return;
        setIsAutoPlayingConv(true);
        autoPlayIndexRef.current = 0;
        playNextConvTurn();
    };

    const playNextConvTurn = () => {
        const convList = currentLesson.conversation || [];
        if (autoPlayIndexRef.current >= convList.length) {
            setIsAutoPlayingConv(false);
            setAudioPlayingText(null);
            return;
        }

        const turn = convList[autoPlayIndexRef.current];
        if (typeof window === 'undefined') return;

        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(turn.en);
        utterance.lang = 'en-GB';
        utterance.rate = 0.95;
        utterance.pitch = turn.speaker === 'A' ? 1.0 : 1.15;
        setAudioPlayingText(turn.en);

        utterance.onend = () => {
            autoPlayIndexRef.current++;
            setTimeout(() => {
                playNextConvTurn();
            }, 600);
        };
        utterance.onerror = () => {
            setIsAutoPlayingConv(false);
            setAudioPlayingText(null);
        };

        window.speechSynthesis.speak(utterance);
    };

    // Speech Recognition
    const startRecording = (key: string, targetText: string) => {
        const SpeechRec = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
        if (!SpeechRec) {
            alert('আপনার ব্রাউজারে ভয়েস রিকগনিশন সাপোর্ট নেই। Chrome বা Edge ব্রাউজার ব্যবহার করুন।');
            return;
        }

        window.speechSynthesis.cancel();
        const rec = new SpeechRec();
        rec.continuous = false;
        rec.interimResults = false;
        rec.lang = 'en-US';

        rec.onstart = () => {
            setIsRecording(true);
            setActivePracticeKey(key);
            setUserTranscript('');
            setSpeechScore(null);
        };

        rec.onresult = (event: any) => {
            const spoken = event.results[0][0].transcript;
            setUserTranscript(spoken);

            const clean = (s: string) => s.toLowerCase().replace(/[^a-z0-9 ]/g, '').trim();
            const targetWords = clean(targetText).split(/\s+/);
            const spokenWords = clean(spoken).split(/\s+/);

            let matches = 0;
            targetWords.forEach(tw => {
                if (spokenWords.includes(tw)) matches++;
            });

            const accuracy = Math.round((matches / targetWords.length) * 100);
            setSpeechScore(accuracy);

            if (accuracy >= 75) {
                awardXp(15);
            }
        };

        rec.onerror = () => setIsRecording(false);
        rec.onend = () => setIsRecording(false);

        recognitionRef.current = rec;
        try {
            rec.start();
        } catch { /* ignore */ }
    };

    const stopRecording = () => {
        if (recognitionRef.current) recognitionRef.current.stop();
        setIsRecording(false);
    };

    const awardXp = (amount: number) => {
        const newXp = xp + amount;
        setXp(newXp);
        localStorage.setItem('spoken_xp', String(newXp));
    };

    const markLessonComplete = (lessonId: string) => {
        if (!completedLessons.includes(lessonId)) {
            const updated = [...completedLessons, lessonId];
            setCompletedLessons(updated);
            localStorage.setItem('completed_spoken_lessons', JSON.stringify(updated));
            awardXp(50);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 pb-16">
            <div className="mx-auto max-w-7xl px-3 sm:px-6 pt-6 space-y-6">

                {/* Top Navigation & Status */}
                <div className="flex items-center justify-between">
                    <Link
                        href="/dashboard/spoken-english"
                        className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-teal-600 transition"
                    >
                        <ArrowLeft size={16} />
                        <span>স্পোকেন ইংলিশ ড্যাশবোর্ডে ফিরুন</span>
                    </Link>

                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1.5 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full text-xs font-black text-amber-700 shadow-xs">
                            <Flame size={14} className="text-orange-500 fill-orange-500" />
                            <span>{xp} XP</span>
                        </div>
                        <div className="flex items-center gap-1.5 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full text-xs font-black text-teal-700 shadow-xs">
                            <Trophy size={14} className="text-teal-600" />
                            <span>{completedLessons.length} / {SPOKEN_LESSONS.length} কমপ্লিট</span>
                        </div>
                    </div>
                </div>

                {/* Hero Header */}
                <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-6 sm:p-8 text-white shadow-xl relative overflow-hidden border border-indigo-500/20">
                    <div className="absolute right-0 top-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
                    <div className="relative z-10 max-w-4xl">
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-indigo-400/30 bg-indigo-500/20 px-3.5 py-1 text-[11px] font-black uppercase tracking-wider text-indigo-300 mb-3">
                            <Sparkles size={12} /> 100% FREE · COMPLETE STEP-BY-STEP SPOKEN SYSTEM
                        </span>
                        <h1 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
                            Spoken English Master Course: <span className="text-teal-300">am/is/are থেকে অনর্গল ফ্লুয়েন্সি</span>
                        </h1>
                        <p className="text-sm sm:text-base text-slate-300 mt-2 leading-relaxed">
                            প্রতিটি লেসনে বাংলা কনসেপ্ট, ৬-ধাপের বাক্য রূপান্তর (+, -, ?, ?-, WH+, WH-), স্পিকার A ও B ডায়ালগ প্র্যাকটিস, নেটিভ অল্টারনেটিভস এবং ইন্টারেক্টিভ সেন্টেন্স বিল্ডার।
                        </p>
                    </div>
                </div>

                {/* Phase Selection Ribbon */}
                <div className="flex flex-wrap items-center gap-2 bg-white p-3 rounded-2xl border border-slate-200 shadow-xs">
                    <span className="text-xs font-black text-slate-400 px-2 uppercase tracking-wider">ধাপ নির্বাচন:</span>
                    {[
                        { id: 'all', label: 'সব ধাপ (সকল লেসন)' },
                        { id: 'to-be', label: '১. To-Be (am/is/are, was/were)' },
                        { id: 'have-has', label: '২. মালিকানা (have/has, there is/are)' },
                        { id: 'tenses', label: '৩. ডেইলি টেন্স (Present, Past, Future)' },
                        { id: 'modals', label: '৪. মোডাল ভার্ব (can/could, should, would)' },
                        { id: 'power-structures', label: '৫. পাওয়ার স্ট্রাকচার (used to, feel like, it takes)' }
                    ].map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setPhaseFilter(tab.id)}
                            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                                phaseFilter === tab.id
                                    ? 'bg-teal-600 text-white shadow-xs font-black'
                                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                            }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Main Content Layout: Slim Sidebar (w-64) + Full Width Workspace */}
                <div className="flex flex-col lg:flex-row items-start gap-6">

                    {/* Left: Lessons Navigator (Slim & Compact) */}
                    <div className="w-full lg:w-64 flex-shrink-0 space-y-3 sticky top-4">
                        <div className="flex items-center justify-between text-xs font-black text-slate-700 px-1">
                            <span>লেসন সিলেবাস ({filteredLessons.length} টি)</span>
                            <span className="text-[11px] text-teal-600 font-bold">সিলেক্ট করুন</span>
                        </div>

                        <div className="space-y-1.5 max-h-[720px] overflow-y-auto pr-1">
                            {filteredLessons.map(l => {
                                const isSelected = l.id === currentLesson.id;
                                const isDone = completedLessons.includes(l.id);

                                return (
                                    <button
                                        key={l.id}
                                        onClick={() => setSelectedLessonId(l.id)}
                                        className={`w-full text-left p-3 rounded-2xl border text-xs transition-all flex items-center justify-between ${
                                            isSelected
                                                ? 'bg-teal-600 border-teal-600 text-white shadow-md shadow-teal-600/20'
                                                : 'bg-white border-slate-200 text-slate-800 hover:border-teal-300 hover:bg-teal-50/20'
                                        }`}
                                    >
                                        <div className="flex items-start gap-2.5 min-w-0">
                                            <span className={`flex h-5 w-5 items-center justify-center rounded-md text-[10px] font-black flex-shrink-0 mt-0.5 ${
                                                isSelected ? 'bg-white/20 text-white' : 'bg-teal-50 text-teal-700 border border-teal-200'
                                            }`}>
                                                {l.lessonNumber}
                                            </span>

                                            <div className="min-w-0">
                                                <p className="font-bold text-xs truncate leading-snug">{l.title}</p>
                                                <p className={`text-[10px] truncate ${isSelected ? 'text-teal-100' : 'text-slate-500'}`}>
                                                    {l.phaseLabel}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex-shrink-0 ml-1.5">
                                            {isDone ? (
                                                <span className={`flex h-4 w-4 items-center justify-center rounded-full ${
                                                    isSelected ? 'bg-white text-teal-700' : 'bg-emerald-100 text-emerald-600'
                                                }`}>
                                                    <Check size={10} strokeWidth={3} />
                                                </span>
                                            ) : (
                                                <ChevronRight size={13} className={isSelected ? 'text-teal-200' : 'text-slate-300'} />
                                            )}
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right: Interactive Lesson Workspace (Full Remaining Space) */}
                    <div className="flex-1 min-w-0 space-y-6 w-full">

                        {/* Lesson Card Header */}
                        <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-100">
                                <div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-[11px] font-black px-2.5 py-0.5 rounded-full bg-teal-50 text-teal-700 border border-teal-200 uppercase tracking-wider">
                                            {currentLesson.phaseLabel} · লেসন {currentLesson.lessonNumber}
                                        </span>
                                        <span className="text-xs font-bold text-slate-400">লেভেল: {currentLesson.level}</span>
                                    </div>
                                    <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1.5 tracking-tight">
                                        {currentLesson.title}
                                    </h2>
                                    <p className="text-sm sm:text-base text-slate-600 font-medium mt-1">
                                        {currentLesson.subtitle}
                                    </p>
                                </div>

                                <button
                                    onClick={() => markLessonComplete(currentLesson.id)}
                                    className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-black transition self-start ${
                                        completedLessons.includes(currentLesson.id)
                                            ? 'bg-emerald-50 border border-emerald-200 text-emerald-700'
                                             : 'bg-teal-600 text-white hover:bg-teal-700 shadow-sm'
                                    }`}
                                >
                                    <CheckCircle2 size={16} />
                                    <span>{completedLessons.includes(currentLesson.id) ? 'লেসন সম্পন্ন হয়েছে' : 'সম্পন্ন মার্ক করুন (+৫০ XP)'}</span>
                                </button>
                            </div>

                            {/* 6 Lesson Modes Tabs */}
                            <div className="flex flex-wrap gap-2 pt-4">
                                {[
                                    { id: 'transform', label: '🔄 ৬-ধাপের রূপান্তর (+, -, ?, WH)', icon: Layers },
                                    { id: 'conversation', label: '💬 ডায়ালগ প্র্যাকটিস (A & B Dialogue)', icon: MessageSquare },
                                    { id: 'concept', label: '📘 কনসেপ্ট ও রুলস', icon: BookOpen },
                                    { id: 'sentences', label: '💡 রিয়েল-লাইফ বাক্য ও নেটিভ স্টাইল', icon: Lightbulb },
                                    { id: 'qa', label: '❓ প্রশ্ন ও বহুবিধ উত্তর', icon: HelpCircle },
                                    { id: 'builder', label: '🧩 বাক্য তৈরি ড্রিল', icon: Sparkles }
                                ].map(tab => {
                                    const Icon = tab.icon;
                                    const isActive = activeTab === tab.id;

                                    return (
                                        <button
                                            key={tab.id}
                                            onClick={() => setActiveTab(tab.id as any)}
                                            className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition ${
                                                isActive
                                                    ? 'bg-teal-600 text-white shadow-xs font-black'
                                                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                                            }`}
                                        >
                                            <Icon size={15} />
                                            <span>{tab.label}</span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* ══════════════════════════════════════════════════════════════
                            TAB 1: 6-WAY TRANSFORMATION FLOW
                           ══════════════════════════════════════════════════════════════ */}
                        {activeTab === 'transform' && (
                            <div className="space-y-5">
                                <div className="bg-gradient-to-r from-teal-900 to-slate-900 text-white p-5 rounded-2xl flex items-center justify-between shadow-sm">
                                    <div>
                                        <span className="text-xs font-black uppercase text-teal-300 tracking-wider">স্পোকেন ফ্লুয়েন্সির মূল ফর্মুলা</span>
                                        <h3 className="text-base sm:text-lg font-black mt-0.5">যেকোনো একটি ভাবকে ৬টি রূপে তাৎক্ষণিক মুখে আনার পদ্ধতি:</h3>
                                        <p className="text-sm text-teal-100 mt-1 font-medium">বিষয়: <span className="font-bold underline">{currentLesson.transformation6Way.baseConcept}</span></p>
                                    </div>
                                    <Sparkles className="text-teal-300" size={28} />
                                </div>

                                <div className="grid gap-4 sm:grid-cols-2">
                                    {[
                                        {
                                            key: 'positive',
                                            type: '১. Positive (+)',
                                            badge: 'হাঁ-বোধক',
                                            color: 'border-emerald-200 bg-emerald-50/50 text-emerald-800',
                                            data: currentLesson.transformation6Way.positive
                                        },
                                        {
                                            key: 'negative',
                                            type: '২. Negative (-)',
                                            badge: 'না-বোধক',
                                            color: 'border-rose-200 bg-rose-50/50 text-rose-800',
                                            data: currentLesson.transformation6Way.negative
                                        },
                                        {
                                            key: 'interrogative',
                                            type: '৩. Interrogative (?)',
                                            badge: 'প্রশ্নবোধক',
                                            color: 'border-blue-200 bg-blue-50/50 text-blue-800',
                                            data: currentLesson.transformation6Way.interrogative
                                        },
                                        {
                                            key: 'interroNegative',
                                            type: '৪. Interro-Negative (? -)',
                                            badge: 'প্রশ্নবোধক না-বাচক',
                                            color: 'border-amber-200 bg-amber-50/50 text-amber-800',
                                            data: currentLesson.transformation6Way.interroNegative
                                        },
                                        {
                                            key: 'whPositive',
                                            type: '৫. WH-Question (+)',
                                            badge: 'তথ্যমূলক প্রশ্ন',
                                            color: 'border-indigo-200 bg-indigo-50/50 text-indigo-800',
                                            data: currentLesson.transformation6Way.whPositive
                                        },
                                        {
                                            key: 'whNegative',
                                            type: '৬. WH-Negative Question (? -)',
                                            badge: 'তথ্যমূলক না-বাচক',
                                            color: 'border-purple-200 bg-purple-50/50 text-purple-800',
                                            data: currentLesson.transformation6Way.whNegative
                                        }
                                    ].map(item => {
                                        const isSpeakingThis = audioPlayingText === item.data.en;
                                        const isRecordingThis = isRecording && activePracticeKey === item.key;
                                        const hasScoreThis = activePracticeKey === item.key && speechScore !== null;

                                        return (
                                            <div
                                                key={item.key}
                                                className={`p-5 rounded-3xl border-2 transition-all ${item.color} shadow-sm hover:shadow-md`}
                                            >
                                                <div className="flex items-center justify-between pb-3 mb-2.5 border-b border-black/10">
                                                    <span className="font-black text-sm">{item.type}</span>
                                                    <span className="text-xs font-black px-2.5 py-0.5 rounded-full bg-white/90 border border-black/10">
                                                        {item.badge}
                                                    </span>
                                                </div>

                                                <p className="text-xs sm:text-sm font-mono font-bold text-slate-600 mb-2">
                                                    📐 {item.data.formula}
                                                </p>

                                                {/* Large Crisp English Sentence */}
                                                <p className="text-xl sm:text-2xl font-black text-slate-900 leading-snug tracking-tight">
                                                    "{item.data.en}"
                                                </p>
                                                <p className="text-xs sm:text-sm font-mono text-purple-700 bg-purple-50/80 px-2 py-0.5 rounded border border-purple-200/50 inline-block mt-1.5">
                                                    IPA: {item.data.ipa}
                                                </p>
                                                <p className="text-base sm:text-lg font-bold text-slate-800 mt-2">
                                                    অনুবাদ: {item.data.bn}
                                                </p>

                                                {/* Audio & Mic Actions */}
                                                <div className="mt-4 pt-3 border-t border-black/10 flex flex-wrap items-center justify-between gap-2">
                                                    <div className="flex items-center gap-2">
                                                        <button
                                                            onClick={() => playAudio(item.data.en, 1.0)}
                                                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-300 text-xs font-bold text-slate-700 hover:text-teal-700 hover:border-teal-400 transition shadow-2xs"
                                                            title="স্বাভাবিক গতিতে শুনুন"
                                                        >
                                                            <Volume2 size={15} />
                                                            <span>শুনুন</span>
                                                        </button>
                                                        <button
                                                            onClick={() => playAudio(item.data.en, 0.7)}
                                                            className="px-2.5 py-1.5 rounded-xl bg-white border border-slate-300 text-[11px] font-bold text-slate-600 hover:text-teal-700 hover:border-teal-400 transition"
                                                            title="ধীরে ধীরে শুনুন (Slow 0.7x)"
                                                        >
                                                            🐢 স্লো
                                                        </button>
                                                    </div>

                                                    <button
                                                        onClick={() => {
                                                            if (isRecordingThis) {
                                                                stopRecording();
                                                            } else {
                                                                startRecording(item.key, item.data.en);
                                                            }
                                                        }}
                                                        className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition shadow-2xs ${
                                                            isRecordingThis
                                                                ? 'bg-rose-500 text-white animate-pulse'
                                                                : 'bg-teal-600 text-white hover:bg-teal-700'
                                                        }`}
                                                    >
                                                        <Mic size={14} />
                                                        <span>{isRecordingThis ? 'বলুন...' : 'মাইকে বলুন'}</span>
                                                    </button>
                                                </div>

                                                {/* Accuracy Score Feedback */}
                                                {hasScoreThis && (
                                                    <div className="mt-3 p-2.5 rounded-xl bg-white border border-slate-200 text-xs flex items-center justify-between">
                                                        <span className="text-slate-600 truncate max-w-[240px]">
                                                            আপনি বলেছেন: "{userTranscript}"
                                                        </span>
                                                        <span className={`font-black text-sm flex-shrink-0 ${
                                                            speechScore >= 75 ? 'text-emerald-600' : 'text-amber-600'
                                                        }`}>
                                                            স্কোর: {speechScore}%
                                                        </span>
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        )}

                        {/* ══════════════════════════════════════════════════════════════
                            TAB 2: DIALOGUE PRACTICE (CONVERSATION A & B)
                           ══════════════════════════════════════════════════════════════ */}
                        {activeTab === 'conversation' && (
                            <div className="space-y-6">
                                {/* Header with Full Audio Controls */}
                                <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                    <div>
                                        <h3 className="text-lg sm:text-xl font-black text-slate-900">
                                            Conversation Practice (ডায়ালগ ড্রিল)
                                        </h3>
                                        <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                                            Speaker A প্রশ্ন করবেন এবং Speaker B উত্তর দেবেন। প্রতিটি বাক্যের উচ্চারণ ও অর্থ মনোযোগ দিয়ে পড়ুন।
                                        </p>
                                    </div>

                                    <button
                                        onClick={() => {
                                            if (isAutoPlayingConv) stopConvAutoPlay();
                                            else playFullConversation();
                                        }}
                                        className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-black transition shadow-sm ${
                                            isAutoPlayingConv
                                                ? 'bg-rose-600 text-white animate-pulse'
                                                : 'bg-indigo-600 text-white hover:bg-indigo-500'
                                        }`}
                                    >
                                        {isAutoPlayingConv ? <StopCircle size={16} /> : <PlayCircle size={16} />}
                                        <span>{isAutoPlayingConv ? 'অডিও থামান' : 'সম্পূর্ণ কথোপকথন শুনুন (Full Audio)'}</span>
                                    </button>
                                </div>

                                {/* Dialogues Render */}
                                <div className="space-y-4">
                                    {(currentLesson.conversation || []).map((turn, tIdx) => {
                                        const isSpeakerA = turn.speaker === 'A';
                                        const isReal = turn.type === 'real';
                                        const isPlaying = audioPlayingText === turn.en;
                                        const isMicActive = isRecording && activePracticeKey === `conv-${tIdx}`;

                                        // Styling similar to local HTML file:
                                        // Speaker A: white card on left
                                        // Speaker B: soft indigo/emerald on right
                                        // Real conversation: amber / orange card
                                        let cardStyle = isSpeakerA
                                            ? 'bg-white border-slate-200'
                                            : 'bg-indigo-50/60 border-indigo-200 ml-auto';
                                        if (isReal) {
                                            cardStyle = isSpeakerA
                                                ? 'bg-amber-50/90 border-amber-300'
                                                : 'bg-orange-50 border-orange-200 ml-auto';
                                        }

                                        const avatarBg = isReal
                                            ? (isSpeakerA ? 'bg-amber-600' : 'bg-orange-600')
                                            : (isSpeakerA ? 'bg-indigo-600' : 'bg-emerald-600');

                                        return (
                                            <div
                                                key={tIdx}
                                                className={`flex items-start gap-3 max-w-3xl ${isSpeakerA ? '' : 'justify-end'}`}
                                            >
                                                {isSpeakerA && (
                                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-white text-sm flex-shrink-0 shadow-xs ${avatarBg}`}>
                                                        {turn.speaker}
                                                    </div>
                                                )}

                                                <div className={`p-5 rounded-3xl border-2 shadow-xs transition-all w-full max-w-2xl ${cardStyle} ${
                                                    isPlaying ? 'ring-2 ring-indigo-500' : ''
                                                }`}>
                                                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-black/5">
                                                        <div className="flex items-center gap-2">
                                                            <span className="font-black text-xs text-slate-800">
                                                                Speaker {turn.speaker} {isReal && <span className="text-[10px] text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full font-bold">Real Life 🌟</span>}
                                                            </span>
                                                        </div>

                                                        <div className="flex items-center gap-1.5">
                                                            <button
                                                                onClick={() => playAudio(turn.en, 1.0, isSpeakerA ? 1.0 : 1.15)}
                                                                className="p-1.5 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-indigo-600 hover:bg-slate-50 transition"
                                                                title="শুনুন"
                                                            >
                                                                <Volume2 size={16} />
                                                            </button>
                                                            <button
                                                                onClick={() => {
                                                                    if (isMicActive) {
                                                                        stopRecording();
                                                                    } else {
                                                                        startRecording(`conv-${tIdx}`, turn.en);
                                                                    }
                                                                }}
                                                                className={`p-1.5 rounded-xl border text-xs transition ${
                                                                    isMicActive
                                                                        ? 'bg-rose-500 text-white animate-pulse border-rose-500'
                                                                        : 'bg-white border-slate-200 text-slate-600 hover:text-teal-700 hover:bg-slate-50'
                                                                }`}
                                                                title="মাইকে বলে টেস্ট করুন"
                                                            >
                                                                <Mic size={16} />
                                                            </button>
                                                        </div>
                                                    </div>

                                                    {/* Large Clear English Sentence */}
                                                    <p className="text-xl sm:text-2xl font-black text-slate-900 leading-snug tracking-tight">
                                                        {turn.en}
                                                    </p>

                                                    {/* Bengali Translation */}
                                                    <p className="text-base sm:text-lg font-bold text-slate-800 mt-2">
                                                        {turn.bn}
                                                    </p>

                                                    {/* Bengali Phonetic Pronunciation Helper */}
                                                    {turn.bn_pron && (
                                                        <div className="text-sm sm:text-base font-semibold text-amber-800 mt-1.5 flex items-center gap-1.5">
                                                            <span>🗣️ উচ্চারণ:</span>
                                                            <span className="font-bold underline decoration-amber-300">{turn.bn_pron}</span>
                                                        </div>
                                                    )}

                                                    {/* IPA */}
                                                    <p className="text-xs sm:text-sm font-mono text-purple-700 bg-purple-50/70 px-2 py-0.5 rounded border border-purple-200/50 inline-block mt-2">
                                                        IPA: {turn.ipa}
                                                    </p>

                                                    {/* Mic feedback */}
                                                    {activePracticeKey === `conv-${tIdx}` && speechScore !== null && (
                                                        <div className="mt-3 p-2 rounded-xl bg-white border border-slate-200 text-xs flex items-center justify-between">
                                                            <span className="text-slate-600 truncate max-w-[260px]">
                                                                আপনি বলেছেন: "{userTranscript}"
                                                            </span>
                                                            <span className={`font-black text-sm flex-shrink-0 ${
                                                                speechScore >= 70 ? 'text-emerald-600' : 'text-amber-600'
                                                            }`}>
                                                                স্কোর: {speechScore}%
                                                            </span>
                                                        </div>
                                                    )}
                                                </div>

                                                {!isSpeakerA && (
                                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-white text-sm flex-shrink-0 shadow-xs ${avatarBg}`}>
                                                        {turn.speaker}
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        )}

                        {/* ══════════════════════════════════════════════════════════════
                            TAB 3: CONCEPT & RULES EXPLANATION
                           ══════════════════════════════════════════════════════════════ */}
                        {activeTab === 'concept' && (
                            <div className="space-y-6">
                                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-2xl shadow-xs">
                                    <h3 className="font-bold text-yellow-900 text-lg sm:text-xl mb-2 flex items-center gap-2">
                                        <BookOpen className="text-yellow-700" size={22} />
                                        আজকের গ্রামার ও ব্যবহারিক নিয়ম (Grammar Focus)
                                    </h3>
                                    <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-medium">
                                        {currentLesson.concept.explanation}
                                    </p>
                                </div>

                                <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-2xl shadow-xs">
                                    <h4 className="font-bold text-emerald-900 text-base sm:text-lg mb-2">
                                        🎯 কখন এবং কেন এটি ব্যবহার করবেন?
                                    </h4>
                                    <p className="text-sm sm:text-base text-slate-800 leading-relaxed">
                                        {currentLesson.concept.whenToUse}
                                    </p>
                                </div>

                                <div className="bg-rose-50 border-l-4 border-rose-500 p-6 rounded-2xl shadow-xs">
                                    <h4 className="font-bold text-rose-900 text-base sm:text-lg mb-2">
                                        ⚠️ বাঙালি শিক্ষার্থীদের সাধারণ ভুল ও ফাঁদ:
                                    </h4>
                                    <p className="text-sm sm:text-base text-slate-800 leading-relaxed">
                                        {currentLesson.concept.commonMistake}
                                    </p>
                                </div>

                                <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-2xl shadow-xs">
                                    <h4 className="font-bold text-indigo-900 text-base sm:text-lg mb-2">
                                        📐 মূল সূত্র সংক্ষেপ (Summary Formula):
                                    </h4>
                                    <p className="text-base sm:text-lg font-mono font-bold text-indigo-950">
                                        {currentLesson.concept.formulaSummary}
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* ══════════════════════════════════════════════════════════════
                            TAB 4: REAL-LIFE SENTENCES & NATIVE VARIATIONS
                           ══════════════════════════════════════════════════════════════ */}
                        {activeTab === 'sentences' && (
                            <div className="space-y-6">
                                {/* Native Variations Box */}
                                <div className="bg-white p-6 sm:p-7 rounded-3xl border-2 border-emerald-200 shadow-sm">
                                    <div className="flex items-center gap-2 text-emerald-800 font-bold text-lg mb-3">
                                        <Lightbulb className="text-emerald-600" size={24} />
                                        <span>একটি কথা ভিন্ন ভাবে বলা (How Native Speakers Say It)</span>
                                    </div>
                                    <p className="text-xs sm:text-sm text-slate-500 font-medium mb-4">
                                        পরিস্থিতি: <span className="font-bold text-slate-800">{currentLesson.nativeVariations.situation}</span>
                                    </p>

                                    <div className="grid gap-3 sm:grid-cols-3 mb-5">
                                        {currentLesson.nativeVariations.waysToSay.map((w, wIdx) => (
                                            <div key={wIdx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                                                <span className="text-[10px] font-bold uppercase tracking-wider text-teal-700 bg-teal-100/60 px-2 py-0.5 rounded">
                                                    {w.tone}
                                                </span>
                                                <p className="text-base sm:text-lg font-black text-slate-900 mt-2">
                                                    "{w.phrasing}"
                                                </p>
                                                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                                                    {w.bn}
                                                </p>
                                            </div>
                                        ))}
                                    </div>

                                    <p className="text-xs text-slate-500 bg-emerald-50 p-3 rounded-xl border border-emerald-100">
                                        {currentLesson.nativeVariations.tip}
                                    </p>
                                </div>

                                {/* Additional Real Life Sentences */}
                                <div className="space-y-3">
                                    <h4 className="font-black text-lg text-slate-900">
                                        দৈনন্দিন বাস্তব জীবনের আরও কিছু বাক্য:
                                    </h4>

                                    {currentLesson.realLifeSentences.map((s, sIdx) => (
                                        <div key={sIdx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                                            <div>
                                                <span className="text-[10px] font-black uppercase text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">
                                                    {s.context}
                                                </span>
                                                <p className="text-lg sm:text-xl font-black text-slate-900 mt-1">
                                                    "{s.en}"
                                                </p>
                                                <p className="text-sm sm:text-base text-slate-700 font-medium">
                                                    অনুবাদ: {s.bn}
                                                </p>
                                            </div>

                                            <button
                                                onClick={() => playAudio(s.en)}
                                                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 text-slate-700 hover:bg-teal-600 hover:text-white transition text-xs font-bold self-start"
                                            >
                                                <Volume2 size={16} />
                                                <span>শুনুন</span>
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* ══════════════════════════════════════════════════════════════
                            TAB 5: QA DRILL (4 STYLES OF ANSWERING)
                           ══════════════════════════════════════════════════════════════ */}
                        {activeTab === 'qa' && (
                            <div className="space-y-6">
                                {/* Target Question Box */}
                                <div className="bg-slate-900 text-white p-6 rounded-3xl shadow-sm border border-slate-800">
                                    <span className="text-xs font-black uppercase text-teal-400 tracking-wider">
                                        🎯 মূল প্রশ্ন (Target Question):
                                    </span>
                                    <h3 className="text-2xl sm:text-3xl font-black mt-2 leading-tight">
                                        "{currentLesson.qaDrill.targetQuestion.en}"
                                    </h3>
                                    <p className="text-base sm:text-lg text-teal-200 font-medium mt-1">
                                        বাংলা অর্থ: {currentLesson.qaDrill.targetQuestion.bn}
                                    </p>
                                    <div className="mt-4 flex items-center gap-2">
                                        <button
                                            onClick={() => playAudio(currentLesson.qaDrill.targetQuestion.en)}
                                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-teal-600 hover:bg-teal-500 text-white text-xs font-bold transition shadow-xs"
                                        >
                                            <Volume2 size={16} />
                                            <span>প্রশ্ন শুনুন</span>
                                        </button>
                                    </div>
                                </div>

                                {/* 4 Answer Styles */}
                                <div className="space-y-4">
                                    <h4 className="font-black text-lg text-slate-900">
                                        একই প্রশ্নের ৪ ধরনের বাস্তবসম্মত উত্তর দেওয়ার কৌশল:
                                    </h4>

                                    <div className="grid gap-4 sm:grid-cols-2">
                                        {currentLesson.qaDrill.possibleAnswers.map((ans, aIdx) => (
                                            <div key={aIdx} className="bg-white p-5 rounded-3xl border-2 border-slate-200 shadow-xs hover:border-indigo-300 transition">
                                                <span className="text-[11px] font-black uppercase tracking-wider text-indigo-700 bg-indigo-50 px-2.5 py-0.5 rounded-full border border-indigo-100">
                                                    {ans.style}
                                                </span>
                                                <p className="text-lg sm:text-xl font-black text-slate-900 mt-2.5 leading-snug">
                                                    "{ans.en}"
                                                </p>
                                                <p className="text-sm sm:text-base text-slate-700 font-medium mt-1.5">
                                                    অনুবাদ: {ans.bn}
                                                </p>
                                                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                                                    <button
                                                        onClick={() => playAudio(ans.en)}
                                                        className="flex items-center gap-1.5 text-xs font-bold text-teal-700 hover:underline"
                                                    >
                                                        <Volume2 size={14} />
                                                        <span>উচ্চারণ শুনুন</span>
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* ══════════════════════════════════════════════════════════════
                            TAB 6: SENTENCE BUILDER DRIL
                           ══════════════════════════════════════════════════════════════ */}
                        {activeTab === 'builder' && (
                            <div className="space-y-6">
                                <div className="bg-white p-6 sm:p-7 rounded-3xl border-2 border-teal-200 shadow-sm space-y-5">
                                    <div>
                                        <h3 className="text-lg sm:text-xl font-black text-slate-900">
                                            ইন্টারেক্টিভ সেন্টেন্স বিল্ডার (Sentence Puzzle)
                                        </h3>
                                        <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                                            নিচের অংশগুলোতে ক্লিক করে ইচ্ছামতো নিজের বাক্য তৈরি করুন এবং সাথে সাথে অডিও শুনুন:
                                        </p>
                                    </div>

                                    {/* Generated Sentence Screen */}
                                    <div className="bg-slate-900 text-white p-5 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                        <div>
                                            <span className="text-[10px] font-mono text-teal-400 uppercase tracking-widest">
                                                আপনার তৈরি করা বাক্য:
                                            </span>
                                            <p className="text-xl sm:text-2xl font-black text-white mt-1">
                                                "{builderSubject} {builderVerb} {builderComplement}"
                                            </p>
                                        </div>

                                        <button
                                            onClick={() => playAudio(`${builderSubject} ${builderVerb} ${builderComplement}`)}
                                            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-black text-xs transition shrink-0"
                                        >
                                            <Volume2 size={16} />
                                            <span>শুনুন ও বলুন</span>
                                        </button>
                                    </div>

                                    {/* Chips Selectors */}
                                    <div className="space-y-4 pt-2">
                                        <div>
                                            <label className="text-xs font-black text-slate-700 block mb-1.5">
                                                ১. Subject / কর্তা নির্বাচন করুন:
                                            </label>
                                            <div className="flex flex-wrap gap-2">
                                                {currentLesson.sentenceBuilder.subjects.map(s => (
                                                    <button
                                                        key={s}
                                                        onClick={() => setBuilderSubject(s)}
                                                        className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                                                            builderSubject === s
                                                                ? 'bg-teal-600 text-white font-black shadow-xs'
                                                                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                                                        }`}
                                                    >
                                                        {s}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        <div>
                                            <label className="text-xs font-black text-slate-700 block mb-1.5">
                                                ২. Verb / Auxiliary নির্বাচন করুন:
                                            </label>
                                            <div className="flex flex-wrap gap-2">
                                                {currentLesson.sentenceBuilder.auxOrVerbs.map(v => (
                                                    <button
                                                        key={v}
                                                        onClick={() => setBuilderVerb(v)}
                                                        className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                                                            builderVerb === v
                                                                ? 'bg-indigo-600 text-white font-black shadow-xs'
                                                                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                                                        }`}
                                                    >
                                                        {v}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        <div>
                                            <label className="text-xs font-black text-slate-700 block mb-1.5">
                                                ৩. Complement / বাক্য সমাপ্তি:
                                            </label>
                                            <div className="flex flex-wrap gap-2">
                                                {currentLesson.sentenceBuilder.complements.map(c => (
                                                    <button
                                                        key={c}
                                                        onClick={() => setBuilderComplement(c)}
                                                        className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                                                            builderComplement === c
                                                                ? 'bg-purple-600 text-white font-black shadow-xs'
                                                                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                                                        }`}
                                                    >
                                                        {c}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
