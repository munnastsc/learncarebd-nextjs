'use client';

import { useState, useEffect, useRef, useMemo } from 'react';
import Link from 'next/link';
import {
    ArrowLeft, Volume2, Mic, CheckCircle2, RotateCcw,
    BookOpen, Layers, Lightbulb, Play, Pause, Flame, Trophy,
    Sparkles, Check, ChevronRight, HelpCircle, ArrowUpRight,
    MessageSquare, Award, Compass, RefreshCw, Zap, Share2
} from 'lucide-react';
import { SPOKEN_LESSONS, type SpokenLesson } from '../../../../lib/spokenLessonsData';

export default function SpokenLessonsPage() {
    // Current Active Lesson
    const [selectedLessonId, setSelectedLessonId] = useState<string>(SPOKEN_LESSONS[0].id);
    const [activeTab, setActiveTab] = useState<'concept' | 'transform' | 'sentences' | 'qa' | 'builder'>('transform');
    
    // Filter by Phase
    const [phaseFilter, setPhaseFilter] = useState<string>('all');
    
    // Gamification & Progress (localStorage)
    const [completedLessons, setCompletedLessons] = useState<string[]>([]);
    const [xp, setXp] = useState<number>(0);
    
    // Audio Player State
    const [audioPlayingText, setAudioPlayingText] = useState<string | null>(null);

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

    // Reset Builder & Mic on Lesson Change
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
        if (typeof window !== 'undefined') window.speechSynthesis?.cancel();
    }, [selectedLessonId]);

    // Audio Playback
    const playAudio = (text: string, rate = 1.0) => {
        if (typeof window === 'undefined') return;
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-GB';
        utterance.rate = rate;
        utterance.onstart = () => setAudioPlayingText(text);
        utterance.onend = () => setAudioPlayingText(null);
        utterance.onerror = () => setAudioPlayingText(null);
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
        if (recognitionRef.current) {
            recognitionRef.current.stop();
        }
        setIsRecording(false);
    };

    const awardXp = (amount: number) => {
        const newXp = xp + amount;
        setXp(newXp);
        localStorage.setItem('spoken_xp', String(newXp));
    };

    const markLessonComplete = (id: string) => {
        if (!completedLessons.includes(id)) {
            const updated = [...completedLessons, id];
            setCompletedLessons(updated);
            localStorage.setItem('completed_spoken_lessons', JSON.stringify(updated));
            awardXp(50);
        }
    };

    const builtSentence = `${builderSubject} ${builderVerb} ${builderComplement}`.trim();

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 via-teal-50/15 to-white py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto space-y-6">

                {/* Top Nav Breadcrumbs & XP */}
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
                            <span>{xp} XP অর্জিত</span>
                        </div>
                        <div className="flex items-center gap-1.5 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full text-xs font-black text-teal-700 shadow-xs">
                            <Trophy size={14} className="text-teal-600" />
                            <span>{completedLessons.length} / {SPOKEN_LESSONS.length} সম্পন্ন</span>
                        </div>
                    </div>
                </div>

                {/* Hero Header Banner */}
                <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 p-6 sm:p-8 text-white shadow-xl relative overflow-hidden border border-teal-500/20">
                    <div className="absolute right-0 top-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
                    <div className="relative z-10 max-w-3xl">
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-teal-400/30 bg-teal-500/20 px-3.5 py-1 text-[11px] font-black uppercase tracking-wider text-teal-300 mb-3">
                            <Sparkles size={12} /> 100% FREE · BEGINNING TO ADVANCED SPOKEN ACADEMY
                        </span>
                        <h1 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
                            Spoken English Step-by-Step: <span className="text-teal-400">am/is/are থেকে অনর্গল ফ্লুয়েন্সি</span>
                        </h1>
                        <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                            প্রতিটি স্ট্রাকচারের গভীর কনসেপ্ট, ৬-ধাপের বাক্য ট্রান্সফরমেশন (+, -, ?, ?-, WH+, WH-), বাস্তব জীবনের ব্যবহারিক কথা, নেটিভদের মতো এক কথা বিভিন্নভাবে বলা এবং প্রশ্নোত্তরের সাবলীল প্র্যাকটিস।
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

                {/* Main Grid: Left Lesson Sidebar (Col 4) | Right Interactive Workspace (Col 8) */}
                <div className="grid gap-6 lg:grid-cols-12">

                    {/* Left: Lessons Navigator */}
                    <div className="lg:col-span-4 space-y-3">
                        <div className="flex items-center justify-between text-xs font-black text-slate-700 px-1">
                            <span>লেসন সিলেবাস ({filteredLessons.length} টি)</span>
                            <span className="text-[11px] text-teal-600">ক্লিক করে প্র্যাকটিস করুন</span>
                        </div>

                        <div className="space-y-2 max-h-[720px] overflow-y-auto pr-1">
                            {filteredLessons.map(l => {
                                const isSelected = l.id === currentLesson.id;
                                const isDone = completedLessons.includes(l.id);

                                return (
                                    <button
                                        key={l.id}
                                        onClick={() => setSelectedLessonId(l.id)}
                                        className={`w-full text-left p-3.5 rounded-2xl border text-xs transition-all flex items-center justify-between ${
                                            isSelected
                                                ? 'bg-teal-600 border-teal-600 text-white shadow-md shadow-teal-600/20'
                                                : 'bg-white border-slate-200 text-slate-800 hover:border-teal-300 hover:bg-teal-50/20'
                                        }`}
                                    >
                                        <div className="flex items-start gap-3 min-w-0">
                                            <span className={`flex h-6 w-6 items-center justify-center rounded-lg text-[10px] font-black flex-shrink-0 mt-0.5 ${
                                                isSelected ? 'bg-white/20 text-white' : 'bg-teal-50 text-teal-700 border border-teal-200'
                                            }`}>
                                                {l.lessonNumber}
                                            </span>

                                            <div className="min-w-0">
                                                <div className="flex items-center gap-1.5">
                                                    <p className="font-black text-sm truncate">{l.title}</p>
                                                    <span className={`text-[9px] font-black px-1.5 py-0.5 rounded ${
                                                        isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                                                    }`}>
                                                        {l.level}
                                                    </span>
                                                </div>
                                                <p className={`text-[11px] font-medium truncate mt-0.5 ${
                                                    isSelected ? 'text-teal-100' : 'text-slate-500'
                                                }`}>
                                                    {l.subtitle}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex-shrink-0 ml-2">
                                            {isDone ? (
                                                <span className={`flex h-5 w-5 items-center justify-center rounded-full ${
                                                    isSelected ? 'bg-white text-teal-700' : 'bg-emerald-100 text-emerald-600'
                                                }`}>
                                                    <Check size={12} strokeWidth={3} />
                                                </span>
                                            ) : (
                                                <ChevronRight size={15} className={isSelected ? 'text-teal-200' : 'text-slate-300'} />
                                            )}
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right: Interactive Lesson Workspace */}
                    <div className="lg:col-span-8 space-y-6">

                        {/* Lesson Card Header */}
                        <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200 shadow-xs">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
                                <div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-teal-50 text-teal-700 border border-teal-200 uppercase tracking-wider">
                                            {currentLesson.phaseLabel} · লেসন {currentLesson.lessonNumber}
                                        </span>
                                        <span className="text-[10px] font-bold text-slate-400">লেভেল: {currentLesson.level}</span>
                                    </div>
                                    <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                                        {currentLesson.title}
                                    </h2>
                                    <p className="text-xs text-slate-500 font-medium mt-0.5">
                                        {currentLesson.subtitle}
                                    </p>
                                </div>

                                <button
                                    onClick={() => markLessonComplete(currentLesson.id)}
                                    className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-black transition self-start ${
                                        completedLessons.includes(currentLesson.id)
                                            ? 'bg-emerald-50 border border-emerald-200 text-emerald-700'
                                            : 'bg-teal-600 text-white hover:bg-teal-700 shadow-xs'
                                    }`}
                                >
                                    <CheckCircle2 size={14} />
                                    <span>{completedLessons.includes(currentLesson.id) ? 'লেসন সম্পন্ন হয়েছে' : 'সম্পন্ন মার্ক করুন (+৫০ XP)'}</span>
                                </button>
                            </div>

                            {/* 5 Lesson Modes Tabs */}
                            <div className="flex flex-wrap gap-2 pt-4">
                                {[
                                    { id: 'transform', label: '🔄 ৬-ধাপের রূপান্তর (+, -, ?, WH)', icon: Layers },
                                    { id: 'concept', label: '📘 কনসেপ্ট ও রুলস', icon: BookOpen },
                                    { id: 'sentences', label: '💡 রিয়েল-লাইফ বাক্য ও নেটিভ স্টাইল', icon: Lightbulb },
                                    { id: 'qa', label: '❓ প্রশ্ন ও বহুবিধ উত্তর', icon: MessageSquare },
                                    { id: 'builder', label: '🧩 বাক্য তৈরি ড্রিল', icon: Sparkles }
                                ].map(tab => {
                                    const Icon = tab.icon;
                                    const isActive = activeTab === tab.id;

                                    return (
                                        <button
                                            key={tab.id}
                                            onClick={() => setActiveTab(tab.id as any)}
                                            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition ${
                                                isActive
                                                    ? 'bg-teal-600 text-white shadow-xs font-black'
                                                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                                            }`}
                                        >
                                            <Icon size={13} />
                                            <span>{tab.label}</span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* ══════════════════════════════════════════════════════════════
                            TAB 1: 6-WAY TRANSFORMATION FLOW (THE CORE FLUENCY ENGINE)
                           ══════════════════════════════════════════════════════════════ */}
                        {activeTab === 'transform' && (
                            <div className="space-y-4">
                                <div className="bg-teal-900 text-white p-4 rounded-2xl flex items-center justify-between">
                                    <div>
                                        <span className="text-[10px] font-black uppercase text-teal-300 tracking-wider">স্পোকেন ফ্লুয়েন্সির মূল রহস্য</span>
                                        <h3 className="text-sm sm:text-base font-black">যেকোনো একটি ভাবকে ৬টি রূপে তাৎক্ষণিক মুখে আনার কৌশল:</h3>
                                        <p className="text-xs text-teal-100 mt-0.5">বিষয়: {currentLesson.transformation6Way.baseConcept}</p>
                                    </div>
                                    <Sparkles className="text-teal-300" size={24} />
                                </div>

                                <div className="grid gap-3 sm:grid-cols-2">
                                    {[
                                        {
                                            key: 'positive',
                                            type: '১. Positive (+)',
                                            badge: 'হাঁ-বোধক',
                                            color: 'border-emerald-200 bg-emerald-50/40 text-emerald-800',
                                            data: currentLesson.transformation6Way.positive
                                        },
                                        {
                                            key: 'negative',
                                            type: '২. Negative (-)',
                                            badge: 'না-বোধক',
                                            color: 'border-rose-200 bg-rose-50/40 text-rose-800',
                                            data: currentLesson.transformation6Way.negative
                                        },
                                        {
                                            key: 'interrogative',
                                            type: '৩. Interrogative (?)',
                                            badge: 'প্রশ্নবোধক',
                                            color: 'border-blue-200 bg-blue-50/40 text-blue-800',
                                            data: currentLesson.transformation6Way.interrogative
                                        },
                                        {
                                            key: 'interroNegative',
                                            type: '৪. Interro-Negative (? -)',
                                            badge: 'প্রশ্নবোধক না-বাচক',
                                            color: 'border-amber-200 bg-amber-50/40 text-amber-800',
                                            data: currentLesson.transformation6Way.interroNegative
                                        },
                                        {
                                            key: 'whPositive',
                                            type: '৫. WH-Question (+)',
                                            badge: 'তথ্যমূলক প্রশ্ন',
                                            color: 'border-indigo-200 bg-indigo-50/40 text-indigo-800',
                                            data: currentLesson.transformation6Way.whPositive
                                        },
                                        {
                                            key: 'whNegative',
                                            type: '৬. WH-Negative Question (? -)',
                                            badge: 'তথ্যমূলক না-বাচক',
                                            color: 'border-purple-200 bg-purple-50/40 text-purple-800',
                                            data: currentLesson.transformation6Way.whNegative
                                        }
                                    ].map(item => {
                                        const isSpeakingThis = audioPlayingText === item.data.en;
                                        const isRecordingThis = isRecording && activePracticeKey === item.key;
                                        const hasScoreThis = activePracticeKey === item.key && speechScore !== null;

                                        return (
                                            <div
                                                key={item.key}
                                                className={`p-4 rounded-2xl border transition-all ${item.color} shadow-xs hover:shadow-md`}
                                            >
                                                <div className="flex items-center justify-between pb-2 mb-2 border-b border-black/5">
                                                    <span className="font-black text-xs">{item.type}</span>
                                                    <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-white/80 border border-black/10">
                                                        {item.badge}
                                                    </span>
                                                </div>

                                                <p className="text-[11px] font-mono font-bold text-slate-500 mb-1">
                                                    📐 {item.data.formula}
                                                </p>

                                                <p className="text-sm sm:text-base font-black text-slate-900 leading-snug">
                                                    "{item.data.en}"
                                                </p>
                                                <p className="text-xs font-mono text-teal-700 mt-0.5">
                                                    {item.data.ipa}
                                                </p>
                                                <p className="text-xs font-semibold text-slate-700 mt-1">
                                                    অনুবাদ: {item.data.bn}
                                                </p>

                                                {/* Audio & Mic Actions */}
                                                <div className="flex items-center justify-between mt-3 pt-2 border-t border-black/5">
                                                    <div className="flex items-center gap-1.5">
                                                        <button
                                                            onClick={() => playAudio(item.data.en, 1.0)}
                                                            className={`p-2 rounded-xl text-xs font-bold transition flex items-center gap-1 ${
                                                                isSpeakingThis ? 'bg-teal-600 text-white' : 'bg-white text-slate-700 hover:bg-slate-100 border'
                                                            }`}
                                                            title="শুনুন"
                                                        >
                                                            <Volume2 size={13} />
                                                            <span>শুনুন</span>
                                                        </button>
                                                        <button
                                                            onClick={() => playAudio(item.data.en, 0.7)}
                                                            className="px-2 py-1.5 rounded-xl text-[10px] font-bold bg-white text-slate-600 hover:bg-slate-100 border"
                                                            title="ধীরে শুনুন"
                                                        >
                                                            ০.৭x স্লো
                                                        </button>
                                                    </div>

                                                    <button
                                                        onClick={() => {
                                                            if (isRecordingThis) stopRecording();
                                                            else startRecording(item.key, item.data.en);
                                                        }}
                                                        className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition ${
                                                            isRecordingThis
                                                                ? 'bg-red-500 text-white animate-pulse'
                                                                : 'bg-teal-600 text-white hover:bg-teal-700 shadow-xs'
                                                        }`}
                                                    >
                                                        <Mic size={13} />
                                                        <span>{isRecordingThis ? 'রেকর্ড হচ্ছে...' : 'মুখে বলুন'}</span>
                                                    </button>
                                                </div>

                                                {/* Speech Score Result */}
                                                {hasScoreThis && (
                                                    <div className="mt-2.5 p-2 rounded-xl bg-white border border-slate-200 text-xs">
                                                        <div className="flex items-center justify-between font-bold">
                                                            <span className="text-[11px] text-slate-500">আপনার কথা:</span>
                                                            <span className={`text-[11px] font-black ${
                                                                speechScore >= 75 ? 'text-emerald-600' : 'text-amber-600'
                                                            }`}>
                                                                স্কোর: {speechScore}%
                                                            </span>
                                                        </div>
                                                        <p className="text-xs text-slate-800 italic mt-0.5 font-medium">
                                                            "{userTranscript || '(কিছু শোনা যায়নি)'}"
                                                        </p>
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        )}

                        {/* ══════════════════════════════════════════════════════════════
                            TAB 2: CONCEPT & GRAMMAR RULES BREAKDOWN
                           ══════════════════════════════════════════════════════════════ */}
                        {activeTab === 'concept' && (
                            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-5">
                                <div>
                                    <h3 className="text-sm font-black text-teal-800 uppercase tracking-wider flex items-center gap-2">
                                        <BookOpen size={16} /> কনসেপ্ট ও ব্যাকরণ নিয়ম
                                    </h3>
                                    <p className="text-sm text-slate-700 leading-relaxed mt-2 bg-slate-50 p-4 rounded-2xl border border-slate-200">
                                        {currentLesson.concept.explanation}
                                    </p>
                                </div>

                                <div className="grid gap-4 sm:grid-cols-2">
                                    <div className="p-4 rounded-2xl bg-teal-50 border border-teal-200">
                                        <h4 className="text-xs font-black text-teal-900 flex items-center gap-1.5 mb-1.5">
                                            <CheckCircle2 size={14} className="text-teal-600" /> কখন ব্যবহার করবেন?
                                        </h4>
                                        <p className="text-xs text-teal-800 leading-relaxed font-medium">
                                            {currentLesson.concept.whenToUse}
                                        </p>
                                    </div>

                                    <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200">
                                        <h4 className="text-xs font-black text-amber-900 flex items-center gap-1.5 mb-1.5">
                                            <HelpCircle size={14} className="text-amber-600" /> সাধারণ ভুল যা এড়িয়ে চলবেন:
                                        </h4>
                                        <p className="text-xs text-amber-800 leading-relaxed font-medium">
                                            {currentLesson.concept.commonMistake}
                                        </p>
                                    </div>
                                </div>

                                <div className="p-4 rounded-2xl bg-slate-900 text-white">
                                    <span className="text-[10px] font-mono font-bold text-teal-300 uppercase tracking-wider">রুলসের সারাংশ:</span>
                                    <p className="text-sm font-mono font-black text-white mt-1">
                                        {currentLesson.concept.formulaSummary}
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* ══════════════════════════════════════════════════════════════
                            TAB 3: REAL-LIFE SENTENCES & NATIVE VARIATIONS
                           ══════════════════════════════════════════════════════════════ */}
                        {activeTab === 'sentences' && (
                            <div className="space-y-6">
                                {/* Native Speaker Phrasing Hack */}
                                <div className="bg-gradient-to-br from-indigo-900 to-purple-950 text-white p-5 rounded-3xl border border-indigo-500/20 shadow-md">
                                    <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase text-indigo-300 tracking-wider">
                                        <Sparkles size={11} /> নেটিভ স্পিকার স্টাইল: একই কথা বিভিন্নভাবে বলা
                                    </span>
                                    <h3 className="text-base font-black mt-1">
                                        পরিস্থিতি: {currentLesson.nativeVariations.situation}
                                    </h3>
                                    <div className="grid gap-2 sm:grid-cols-2 mt-3 pt-3 border-t border-white/10 text-xs">
                                        <div>
                                            <p className="text-[11px] text-slate-400">সাধারণ বইয়ের ভাষা:</p>
                                            <p className="font-bold text-white mt-0.5">"{currentLesson.nativeVariations.standard}"</p>
                                        </div>
                                        <div>
                                            <p className="text-[11px] text-indigo-300">নেটিভ স্পিকারদের স্টাইল:</p>
                                            <p className="font-bold text-emerald-300 mt-0.5">"{currentLesson.nativeVariations.nativeStyle}"</p>
                                        </div>
                                    </div>

                                    <div className="mt-4 pt-3 border-t border-white/10 space-y-2">
                                        <p className="text-[11px] font-bold text-slate-300">১টি কথা ৪–৫ ভাবে বলার কৌশল:</p>
                                        <div className="grid gap-2 sm:grid-cols-2">
                                            {currentLesson.nativeVariations.waysToSay.map((w, idx) => (
                                                <div key={idx} className="bg-white/10 p-2.5 rounded-xl border border-white/5">
                                                    <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-indigo-500/30 text-indigo-200">
                                                        {w.tone}
                                                    </span>
                                                    <p className="font-black text-xs text-white mt-1">"{w.phrasing}"</p>
                                                    <p className="text-[11px] text-slate-300 mt-0.5">{w.bn}</p>
                                                </div>
                                            ))}
                                        </div>
                                        <p className="text-xs text-amber-300 font-medium pt-1">
                                            {currentLesson.nativeVariations.tip}
                                        </p>
                                    </div>
                                </div>

                                {/* Real-Life Sentences List */}
                                <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200 shadow-xs space-y-3">
                                    <h3 className="text-sm font-black text-slate-900 flex items-center gap-2">
                                        <Lightbulb size={16} className="text-amber-500" /> বাস্তব জীবনের বহুল ব্যবহৃত বাক্যসমূহ:
                                    </h3>

                                    <div className="space-y-2.5">
                                        {currentLesson.realLifeSentences.map((s, idx) => (
                                            <div
                                                key={idx}
                                                className="p-3.5 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-teal-300 transition flex items-center justify-between gap-3"
                                            >
                                                <div>
                                                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-200 text-slate-700">
                                                        {s.context}
                                                    </span>
                                                    <p className="text-sm font-black text-slate-900 mt-1">
                                                        {s.en}
                                                    </p>
                                                    <p className="text-xs font-mono text-teal-700">
                                                        {s.ipa}
                                                    </p>
                                                    <p className="text-xs text-slate-600 mt-0.5">
                                                        অর্থ: {s.bn}
                                                    </p>
                                                </div>

                                                <button
                                                    onClick={() => playAudio(s.en)}
                                                    className="p-2.5 rounded-xl bg-white text-slate-700 border hover:bg-teal-50 hover:text-teal-700 transition flex-shrink-0"
                                                    title="উচ্চারণ শুনুন"
                                                >
                                                    <Volume2 size={16} />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* ══════════════════════════════════════════════════════════════
                            TAB 4: QUESTION & ANSWER SIMULATOR (Q&A DRILLS)
                           ══════════════════════════════════════════════════════════════ */}
                        {activeTab === 'qa' && (
                            <div className="space-y-4">
                                <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-4">
                                    <div className="p-4 rounded-2xl bg-teal-50 border border-teal-200">
                                        <div className="flex items-center justify-between">
                                            <span className="text-[10px] font-black uppercase text-teal-700 tracking-wider">লক্ষ্য প্রশ্ন (Target Question):</span>
                                            <button
                                                onClick={() => playAudio(currentLesson.qaDrill.targetQuestion.en)}
                                                className="p-1.5 rounded-lg bg-white text-teal-700 border border-teal-200 hover:bg-teal-100"
                                            >
                                                <Volume2 size={14} />
                                            </button>
                                        </div>
                                        <h3 className="text-base sm:text-lg font-black text-slate-900 mt-1">
                                            "{currentLesson.qaDrill.targetQuestion.en}"
                                        </h3>
                                        <p className="text-xs font-mono text-teal-700">
                                            {currentLesson.qaDrill.targetQuestion.ipa}
                                        </p>
                                        <p className="text-xs text-slate-600 mt-0.5">
                                            বাংলা অর্থ: {currentLesson.qaDrill.targetQuestion.bn}
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="text-xs font-black text-slate-400 uppercase tracking-wider mb-2">
                                            এই প্রশ্নের ৪টি ভিন্ন চমৎকার উত্তর দেওয়ার উপায়:
                                        </h4>
                                        <div className="space-y-3">
                                            {currentLesson.qaDrill.possibleAnswers.map((ans, idx) => (
                                                <div
                                                    key={idx}
                                                    className="p-4 rounded-2xl border border-slate-200 bg-white hover:border-teal-300 transition shadow-xs"
                                                >
                                                    <div className="flex items-center justify-between pb-1 mb-1 border-b border-slate-100">
                                                        <span className="text-[11px] font-black text-teal-700">
                                                            স্টাইল {idx + 1}: {ans.style}
                                                        </span>
                                                        <button
                                                            onClick={() => playAudio(ans.en)}
                                                            className="p-1.5 rounded-lg bg-slate-50 text-slate-600 hover:bg-teal-50 hover:text-teal-700"
                                                        >
                                                            <Volume2 size={13} />
                                                        </button>
                                                    </div>
                                                    <p className="text-sm font-black text-slate-900">
                                                        "{ans.en}"
                                                    </p>
                                                    <p className="text-xs font-mono text-teal-700">
                                                        {ans.ipa}
                                                    </p>
                                                    <p className="text-xs text-slate-600 mt-0.5">
                                                        অর্থ: {ans.bn}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* ══════════════════════════════════════════════════════════════
                            TAB 5: INTERACTIVE SENTENCE BUILDER DRILL
                           ══════════════════════════════════════════════════════════════ */}
                        {activeTab === 'builder' && (
                            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-6">
                                <div>
                                    <h3 className="text-sm font-black text-slate-900 flex items-center gap-2">
                                        <Sparkles size={16} className="text-teal-600" /> নিজে নিজে বাক্য তৈরি করুন (Sentence Builder):
                                    </h3>
                                    <p className="text-xs text-slate-500 mt-0.5">
                                        নিচের শব্দগুলোতে ক্লিক করে মিলিয়ে মিলিয়ে সঠিক ইংরেজি বাক্য তৈরি করুন এবং অডিও শুনুন:
                                    </p>
                                </div>

                                {/* Current Constructed Sentence Preview */}
                                <div className="p-5 rounded-2xl bg-gradient-to-r from-teal-900 to-slate-900 text-white flex items-center justify-between gap-4 shadow-md">
                                    <div>
                                        <span className="text-[10px] font-mono text-teal-300 uppercase tracking-wider">তৈরিকৃত বাক্য:</span>
                                        <p className="text-base sm:text-xl font-black text-white mt-1">
                                            "{builtSentence}."
                                        </p>
                                    </div>

                                    <button
                                        onClick={() => playAudio(builtSentence)}
                                        className="p-3 rounded-2xl bg-teal-500 text-white hover:bg-teal-400 transition flex-shrink-0 shadow-xs"
                                        title="উচ্চারণ শুনুন"
                                    >
                                        <Volume2 size={20} />
                                    </button>
                                </div>

                                {/* Part 1: Subject Selector */}
                                <div className="space-y-2">
                                    <span className="text-xs font-black text-slate-600">১. Subject বা বাক্য শুরু:</span>
                                    <div className="flex flex-wrap gap-2">
                                        {currentLesson.sentenceBuilder.subjects.map(s => (
                                            <button
                                                key={s}
                                                onClick={() => setBuilderSubject(s)}
                                                className={`px-3 py-2 rounded-xl text-xs font-bold transition ${
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

                                {/* Part 2: Verb / Auxiliary */}
                                <div className="space-y-2">
                                    <span className="text-xs font-black text-slate-600">২. Verb / সাহায্যকারী অংশ:</span>
                                    <div className="flex flex-wrap gap-2">
                                        {currentLesson.sentenceBuilder.auxOrVerbs.map(v => (
                                            <button
                                                key={v}
                                                onClick={() => setBuilderVerb(v)}
                                                className={`px-3 py-2 rounded-xl text-xs font-bold transition ${
                                                    builderVerb === v
                                                        ? 'bg-teal-600 text-white font-black shadow-xs'
                                                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                                                }`}
                                            >
                                                {v}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Part 3: Complement / Extension */}
                                <div className="space-y-2">
                                    <span className="text-xs font-black text-slate-600">৩. Complement বা সমাপ্তি:</span>
                                    <div className="flex flex-wrap gap-2">
                                        {currentLesson.sentenceBuilder.complements.map(c => (
                                            <button
                                                key={c}
                                                onClick={() => setBuilderComplement(c)}
                                                className={`px-3 py-2 rounded-xl text-xs font-bold transition ${
                                                    builderComplement === c
                                                        ? 'bg-teal-600 text-white font-black shadow-xs'
                                                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                                                }`}
                                            >
                                                {c}
                                            </button>
                                        ))}
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
