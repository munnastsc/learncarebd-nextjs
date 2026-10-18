'use client';

import { useState, useEffect, useRef, useMemo } from 'react';
import Link from 'next/link';
import {
    ArrowLeft, Volume2, Mic, CheckCircle2, RotateCcw,
    BookOpen, Layers, Lightbulb, Play, Pause, Flame, Trophy,
    Sparkles, Check, ChevronRight, HelpCircle, ArrowUpRight,
    MessageSquare, Award, Compass, RefreshCw, Zap, Share2,
    PlayCircle, StopCircle, UserCheck, FastForward, Search, CheckCircle, XCircle
} from 'lucide-react';
import { SPOKEN_LESSONS, type SpokenLesson } from '../../../../lib/spokenLessonsData';
import { LESSON_20_DIALOGUES } from '../../../../lib/spokenLessonDialoguesData';
import { LESSON_100_QA } from '../../../../lib/spokenLessonQAData';
import { LESSON_100_VARIATIONS } from '../../../../lib/spokenLessonVariationsData';
import { LESSON_100_FILL_GAPS } from '../../../../lib/spokenLessonFillGapData';

export default function SpokenLessonsPage() {
    // Current Active Lesson
    const [selectedLessonId, setSelectedLessonId] = useState<string>(SPOKEN_LESSONS[0].id);
    const [activeTab, setActiveTab] = useState<'conversation' | 'qa' | 'variations' | 'fillgap' | 'transform' | 'concept' | 'builder'>('conversation');
    
    // Filter by Phase
    const [phaseFilter, setPhaseFilter] = useState<string>('all');
    
    // Gamification & Progress
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

    // Q&A State (100 QA)
    const [qaBatch, setQaBatch] = useState<number>(1); // 1 = 1-25, 2 = 26-50, 3 = 51-75, 4 = 76-100
    const [qaCategory, setQaCategory] = useState<string>('all');
    const [qaSearch, setQaSearch] = useState<string>('');

    // Sentence Variations State (100 Variations)
    const [varBatch, setVarBatch] = useState<number>(1);
    const [varSearch, setVarSearch] = useState<string>('');

    // Fill in the Gap State (100 Fill-in-the-blanks)
    const [fgBatch, setFgBatch] = useState<number>(1);
    const [fgUserAnswers, setFgUserAnswers] = useState<Record<string, string>>({});
    const [fgScore, setFgScore] = useState<number>(0);

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

    // Current 20 Dialogues
    const currentDialogues = useMemo(() => {
        return LESSON_20_DIALOGUES[selectedLessonId] || LESSON_20_DIALOGUES['lesson-01-present-to-be'] || [];
    }, [selectedLessonId]);

    // Current 100 Q&As
    const currentQAs = useMemo(() => {
        return LESSON_100_QA[selectedLessonId] || LESSON_100_QA['lesson-01-present-to-be'] || [];
    }, [selectedLessonId]);

    // Current 100 Variations
    const currentVariations = useMemo(() => {
        return LESSON_100_VARIATIONS[selectedLessonId] || LESSON_100_VARIATIONS['lesson-01-present-to-be'] || [];
    }, [selectedLessonId]);

    // Current 100 Fill-in-the-gaps
    const currentFillGaps = useMemo(() => {
        return LESSON_100_FILL_GAPS[selectedLessonId] || LESSON_100_FILL_GAPS['lesson-01-present-to-be'] || [];
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
        setQaBatch(1);
        setQaSearch('');
        setVarBatch(1);
        setVarSearch('');
        setFgBatch(1);
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
        const convList = currentDialogues;
        if (convList.length === 0) return;
        setIsAutoPlayingConv(true);
        autoPlayIndexRef.current = 0;
        playNextConvTurn();
    };

    const playNextConvTurn = () => {
        const convList = currentDialogues;
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

            const score = Math.round((matches / targetWords.length) * 100);
            setSpeechScore(score);

            if (score >= 70) {
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

    // Award XP
    const awardXp = (amount: number) => {
        const newXp = xp + amount;
        setXp(newXp);
        localStorage.setItem('spoken_xp', String(newXp));
    };

    // Mark Lesson Complete
    const markLessonDone = (id: string) => {
        if (!completedLessons.includes(id)) {
            const updated = [...completedLessons, id];
            setCompletedLessons(updated);
            localStorage.setItem('completed_spoken_lessons', JSON.stringify(updated));
            awardXp(50);
        }
    };

    // Handle Fill-in-the-gap option click
    const handleSelectOption = (questionId: string, selectedOpt: string, correctAns: string) => {
        if (fgUserAnswers[questionId]) return; // already answered
        const updated = { ...fgUserAnswers, [questionId]: selectedOpt };
        setFgUserAnswers(updated);
        if (selectedOpt === correctAns) {
            setFgScore(prev => prev + 1);
            awardXp(2);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50/70 py-6 px-3 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto space-y-5">

                {/* Top Nav & Breadcrumbs */}
                <div className="flex items-center justify-between">
                    <Link
                        href="/dashboard/spoken-english"
                        className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-indigo-600 transition"
                    >
                        <ArrowLeft size={16} />
                        <span>স্পোকেন ইংলিশ ড্যাশবোর্ডে ফিরুন</span>
                    </Link>

                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1.5 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full text-xs font-black text-amber-700 shadow-2xs">
                            <Flame size={14} className="text-orange-500 fill-orange-500" />
                            <span>{xp} XP</span>
                        </div>
                        <div className="flex items-center gap-1.5 bg-indigo-50 border border-indigo-200 px-3 py-1 rounded-full text-xs font-black text-indigo-700 shadow-2xs">
                            <Trophy size={14} className="text-indigo-600" />
                            <span>{completedLessons.length} / {SPOKEN_LESSONS.length} কমপ্লিট</span>
                        </div>
                    </div>
                </div>

                {/* Phase Selection Ribbon */}
                <div className="flex flex-wrap items-center gap-1.5 bg-white p-2.5 rounded-2xl border border-slate-200 shadow-2xs">
                    <span className="text-xs font-black text-slate-400 px-2 uppercase tracking-wider">ধাপ:</span>
                    {[
                        { id: 'all', label: 'সকল ধাপ' },
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
                                    ? 'bg-[#5B4DFB] text-white shadow-2xs font-black'
                                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                            }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Main Content Layout: Sidebar (Matching User Image) + Expanded Workspace */}
                <div className="flex flex-col lg:flex-row items-start gap-6">

                    {/* Left: Lessons Navigator with Brand Purple Header */}
                    <div className="w-full lg:w-72 flex-shrink-0 space-y-2 sticky top-4">
                        <div className="bg-[#5B4DFB] text-white px-4 py-3 rounded-2xl font-black text-xs sm:text-sm shadow-sm flex items-center justify-between">
                            <span>Dynamic Lessons</span>
                            <span className="text-[11px] bg-white/20 px-2 py-0.5 rounded-full font-bold">{filteredLessons.length} টি</span>
                        </div>

                        <div className="space-y-1 max-h-[740px] overflow-y-auto pr-1">
                            {filteredLessons.map(l => {
                                const isSelected = l.id === currentLesson.id;
                                const isDone = completedLessons.includes(l.id);

                                return (
                                    <button
                                        key={l.id}
                                        onClick={() => setSelectedLessonId(l.id)}
                                        className={`w-full text-left p-3 rounded-2xl text-xs transition-all flex items-center justify-between ${
                                            isSelected
                                                ? 'bg-[#5B4DFB] text-white font-bold shadow-md shadow-indigo-600/20'
                                                : 'bg-white text-slate-700 hover:bg-slate-100/80 border border-slate-200/60 font-semibold'
                                        }`}
                                    >
                                        <div className="flex items-center gap-2 min-w-0">
                                            <span className="truncate">
                                                Lesson {l.lessonNumber} - {l.title}
                                            </span>
                                        </div>

                                        {isDone && (
                                            <span className={`flex h-4 w-4 items-center justify-center rounded-full ${
                                                isSelected ? 'bg-white text-indigo-700' : 'bg-emerald-100 text-emerald-600'
                                            }`}>
                                                <Check size={11} strokeWidth={3} />
                                            </span>
                                        )}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right: Workspace Card (Matching Screenshot) */}
                    <div className="flex-1 min-w-0 space-y-5 w-full">

                        {/* Top Lesson Title & Listen Button */}
                        <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/90 shadow-2xs space-y-4">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
                                <div>
                                    <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                                        Lesson {currentLesson.lessonNumber} - {currentLesson.title}
                                    </h1>
                                    <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
                                        {currentLesson.subtitle}
                                    </p>
                                </div>

                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => {
                                            if (isAutoPlayingConv) stopConvAutoPlay();
                                            else playFullConversation();
                                        }}
                                        className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-black transition shadow-sm ${
                                            isAutoPlayingConv
                                                ? 'bg-rose-600 text-white animate-pulse'
                                                : 'bg-[#5B4DFB] text-white hover:bg-indigo-600'
                                        }`}
                                    >
                                        <PlayCircle size={15} />
                                        <span>{isAutoPlayingConv ? 'অডিও থামান' : 'Listen (Full Audio)'}</span>
                                    </button>

                                    <button
                                        onClick={() => markLessonDone(currentLesson.id)}
                                        className={`p-2 rounded-xl border text-xs font-black transition ${
                                            completedLessons.includes(currentLesson.id)
                                                ? 'bg-emerald-50 border-emerald-200 text-emerald-700'
                                                : 'bg-slate-100 border-slate-200 text-slate-600 hover:bg-slate-200'
                                        }`}
                                        title={completedLessons.includes(currentLesson.id) ? 'লেসন সম্পন্ন' : 'সম্পন্ন মার্ক করুন'}
                                    >
                                        <CheckCircle2 size={16} />
                                    </button>
                                </div>
                            </div>

                            {/* Navigation Tabs (Conversations & 100 Q&As First) */}
                            <div className="flex flex-wrap gap-1.5 pt-1">
                                {[
                                    { id: 'conversation', label: '💬 ২০-লাইনের ডায়ালগ (Chat)', icon: MessageSquare },
                                    { id: 'qa', label: '❓ ১০০টি প্রশ্ন ও উত্তর (Q&A)', icon: HelpCircle },
                                    { id: 'variations', label: '🌟 ১০০টি ভিন্ন স্টাইলে বলা', icon: Lightbulb },
                                    { id: 'fillgap', label: '✏️ ১০০টি গ্রামার কুইজ (Fill-in-gap)', icon: Sparkles },
                                    { id: 'transform', label: '🔄 ৬-ধাপের রূপান্তর (+, -, ?)', icon: Layers },
                                    { id: 'concept', label: '📘 কনসেপ্ট ও রুলস', icon: BookOpen },
                                    { id: 'builder', label: '🧩 বাক্য তৈরি ড্রিল', icon: RefreshCw }
                                ].map(tab => {
                                    const Icon = tab.icon;
                                    const isActive = activeTab === tab.id;

                                    return (
                                        <button
                                            key={tab.id}
                                            onClick={() => setActiveTab(tab.id as any)}
                                            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition ${
                                                isActive
                                                    ? 'bg-[#5B4DFB] text-white shadow-2xs font-black'
                                                    : 'bg-slate-100/80 text-slate-700 hover:bg-slate-200/80'
                                            }`}
                                        >
                                            <Icon size={14} />
                                            <span>{tab.label}</span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* ══════════════════════════════════════════════════════════════
                            TAB 1: 20-LINE DIALOGUE PRACTICE (EXACT USER SCREENSHOT STYLE)
                           ══════════════════════════════════════════════════════════════ */}
                        {activeTab === 'conversation' && (
                            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs space-y-6">
                                {/* Centered Subtitle matching image */}
                                <div className="text-center pb-2 border-b border-slate-100">
                                    <h3 className="text-base sm:text-lg font-black text-slate-800 tracking-tight">
                                        Daily Practice
                                    </h3>
                                    <p className="text-xs text-slate-400 mt-0.5">
                                        সহজ ও বাস্তবমুখী ২০টি কথোপকথন লাইন (স্পিকার A ও স্পিকার B)
                                    </p>
                                </div>

                                {/* Chat Bubbles Layout matching image */}
                                <div className="space-y-6 pt-2">
                                    {currentDialogues.map((turn, tIdx) => {
                                        const isA = turn.speaker === 'A';
                                        const isPlaying = audioPlayingText === turn.en;
                                        const isMicActive = isRecording && activePracticeKey === `conv-${tIdx}`;

                                        return (
                                            <div
                                                key={tIdx}
                                                className={`flex items-start gap-3 w-full ${isA ? 'justify-start' : 'justify-end'}`}
                                            >
                                                {/* Left Avatar for Speaker A */}
                                                {isA && (
                                                    <div className="w-8 h-8 rounded-full bg-[#5B4DFB] text-white font-black text-xs flex items-center justify-center flex-shrink-0 mt-1 shadow-2xs">
                                                        A
                                                    </div>
                                                )}

                                                {/* Bubble Container */}
                                                <div className={`p-4 rounded-2xl max-w-lg w-full transition-all text-left shadow-2xs ${
                                                    isA
                                                        ? 'bg-white border border-slate-200'
                                                        : 'bg-indigo-50/70 border border-indigo-100'
                                                } ${isPlaying ? 'ring-2 ring-[#5B4DFB]' : ''}`}>
                                                    {/* Top Row: English Bold + Sound Icon */}
                                                    <div className="flex items-start justify-between gap-3">
                                                        <h4 className="font-bold text-slate-900 text-base leading-snug">
                                                            {turn.en}
                                                        </h4>
                                                        <button
                                                            onClick={() => playAudio(turn.en, 1.0, isA ? 1.0 : 1.15)}
                                                            className="text-slate-400 hover:text-indigo-600 transition p-1 flex-shrink-0"
                                                            title="শুনুন"
                                                        >
                                                            <Volume2 size={16} />
                                                        </button>
                                                    </div>

                                                    {/* Row 2: Bengali Translation */}
                                                    <p className="text-sm text-slate-700 font-medium mt-1">
                                                        {turn.bn}
                                                    </p>

                                                    {/* Row 3: Purple IPA */}
                                                    <p className="text-xs font-mono text-purple-600 mt-1">
                                                        IPA: {turn.ipa}
                                                    </p>

                                                    {/* Row 4: Orange Pronunciation */}
                                                    <p className="text-xs font-semibold text-orange-600 mt-0.5">
                                                        উচ্চারণ: {turn.bn_pron}
                                                    </p>

                                                    {/* Optional Mic Test Button */}
                                                    <div className="mt-2.5 pt-2 border-t border-black/5 flex items-center justify-between">
                                                        <button
                                                            onClick={() => {
                                                                if (isMicActive) stopRecording();
                                                                else startRecording(`conv-${tIdx}`, turn.en);
                                                            }}
                                                            className={`inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-lg transition ${
                                                                isMicActive
                                                                    ? 'bg-rose-500 text-white animate-pulse'
                                                                    : 'bg-white/80 hover:bg-slate-100 text-slate-600 border border-slate-200'
                                                            }`}
                                                        >
                                                            <Mic size={12} />
                                                            <span>{isMicActive ? 'শুনছি...' : 'মাইক টেস্ট'}</span>
                                                        </button>

                                                        {activePracticeKey === `conv-${tIdx}` && speechScore !== null && (
                                                            <span className={`text-[11px] font-black ${
                                                                speechScore >= 70 ? 'text-emerald-600' : 'text-amber-600'
                                                            }`}>
                                                                স্কোর: {speechScore}%
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>

                                                {/* Right Avatar for Speaker B */}
                                                {!isA && (
                                                    <div className="w-8 h-8 rounded-full bg-[#10B981] text-white font-black text-xs flex items-center justify-center flex-shrink-0 mt-1 shadow-2xs">
                                                        B
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        )}

                        {/* ══════════════════════════════════════════════════════════════
                            TAB 2: 100 QUESTION & ANSWERS (IN THE EXACT CHAT BUBBLE FORMAT)
                           ══════════════════════════════════════════════════════════════ */}
                        {activeTab === 'qa' && (
                            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs space-y-6">
                                {/* Header & Controls */}
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <h3 className="text-base sm:text-lg font-black text-slate-800">
                                                ১০০টি বাস্তব প্রশ্ন ও উত্তর (Q&A Drills)
                                            </h3>
                                            <span className="text-xs font-black bg-indigo-100 text-indigo-800 px-2.5 py-0.5 rounded-full">
                                                ১০০টি পেয়ার
                                            </span>
                                        </div>
                                        <p className="text-xs text-slate-500 mt-0.5">
                                            দৈনন্দিন জীবনে প্রশ্ন করা এবং স্বাভাবিকভাবে উত্তর দেওয়ার ১০০টি চ্যাট বাবল ড্রিল
                                        </p>
                                    </div>

                                    {/* Search Input */}
                                    <div className="relative w-full sm:w-64">
                                        <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                                        <input
                                            type="text"
                                            placeholder="প্রশ্ন বা উত্তর খুঁজুন..."
                                            value={qaSearch}
                                            onChange={e => setQaSearch(e.target.value)}
                                            className="w-full pl-8 pr-3 py-1.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-800 focus:outline-none focus:border-indigo-500"
                                        />
                                    </div>
                                </div>

                                {/* Batch Navigation (1-25, 26-50, 51-75, 76-100) */}
                                <div className="flex flex-wrap items-center justify-between gap-2 bg-slate-50 p-2.5 rounded-2xl border border-slate-200/80">
                                    <span className="text-xs font-bold text-slate-500">ব্যাচ নির্বাচন:</span>
                                    <div className="flex flex-wrap gap-1.5">
                                        {[
                                            { b: 1, label: '১ - ২৫ (দৈনন্দিন রুটিন)' },
                                            { b: 2, label: '২৬ - ৫০ (পড়াশোনা ও কাজ)' },
                                            { b: 3, label: '৫১ - ৭৫ (পরিবার ও সমাজ)' },
                                            { b: 4, label: '৭৬ - ১০০ (পছন্দ ও অবসর)' }
                                        ].map(item => (
                                            <button
                                                key={item.b}
                                                onClick={() => setQaBatch(item.b)}
                                                className={`px-3 py-1 rounded-xl text-xs font-bold transition ${
                                                    qaBatch === item.b
                                                        ? 'bg-[#5B4DFB] text-white font-black shadow-2xs'
                                                        : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                                                }`}
                                            >
                                                {item.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Render Q&A Pairs in Chat Bubble Style */}
                                <div className="space-y-8 pt-2">
                                    {currentQAs
                                        .filter(item => {
                                            if (qaSearch.trim()) {
                                                const q = qaSearch.toLowerCase();
                                                return item.q.en.toLowerCase().includes(q) || item.q.bn.includes(q) || item.a.en.toLowerCase().includes(q);
                                            }
                                            const start = (qaBatch - 1) * 25 + 1;
                                            const end = qaBatch * 25;
                                            return item.num >= start && item.num <= end;
                                        })
                                        .map((qaItem) => (
                                            <div key={qaItem.id} className="space-y-3 bg-slate-50/50 p-4 rounded-3xl border border-slate-200/60">
                                                <div className="text-[11px] font-black text-indigo-700 uppercase tracking-wider px-1">
                                                    প্রশ্নোত্তর #{qaItem.num} · {qaItem.category}
                                                </div>

                                                {/* Speaker A: Question (Left) */}
                                                <div className="flex items-start gap-3 w-full justify-start">
                                                    <div className="w-8 h-8 rounded-full bg-[#5B4DFB] text-white font-black text-xs flex items-center justify-center flex-shrink-0 mt-1 shadow-2xs">
                                                        A
                                                    </div>

                                                    <div className="p-4 rounded-2xl max-w-lg w-full bg-white border border-slate-200 shadow-2xs text-left">
                                                        <div className="flex items-start justify-between gap-3">
                                                            <h4 className="font-bold text-slate-900 text-base leading-snug">
                                                                {qaItem.q.en}
                                                            </h4>
                                                            <button
                                                                onClick={() => playAudio(qaItem.q.en, 1.0, 1.0)}
                                                                className="text-slate-400 hover:text-indigo-600 transition p-1 flex-shrink-0"
                                                                title="শুনুন"
                                                            >
                                                                <Volume2 size={16} />
                                                            </button>
                                                        </div>
                                                        <p className="text-sm text-slate-700 font-medium mt-1">
                                                            {qaItem.q.bn}
                                                        </p>
                                                        <p className="text-xs font-mono text-purple-600 mt-1">
                                                            IPA: {qaItem.q.ipa}
                                                        </p>
                                                        <p className="text-xs font-semibold text-orange-600 mt-0.5">
                                                            উচ্চারণ: {qaItem.q.bn_pron}
                                                        </p>
                                                    </div>
                                                </div>

                                                {/* Speaker B: Answer (Right) */}
                                                <div className="flex items-start gap-3 w-full justify-end">
                                                    <div className="p-4 rounded-2xl max-w-lg w-full bg-indigo-50/70 border border-indigo-100 shadow-2xs text-left">
                                                        <div className="flex items-start justify-between gap-3">
                                                            <h4 className="font-bold text-slate-900 text-base leading-snug">
                                                                {qaItem.a.en}
                                                            </h4>
                                                            <button
                                                                onClick={() => playAudio(qaItem.a.en, 1.0, 1.15)}
                                                                className="text-slate-400 hover:text-emerald-600 transition p-1 flex-shrink-0"
                                                                title="শুনুন"
                                                            >
                                                                <Volume2 size={16} />
                                                            </button>
                                                        </div>
                                                        <p className="text-sm text-slate-700 font-medium mt-1">
                                                            {qaItem.a.bn}
                                                        </p>
                                                        <p className="text-xs font-mono text-purple-600 mt-1">
                                                            IPA: {qaItem.a.ipa}
                                                        </p>
                                                        <p className="text-xs font-semibold text-orange-600 mt-0.5">
                                                            উচ্চারণ: {qaItem.a.bn_pron}
                                                        </p>
                                                    </div>

                                                    <div className="w-8 h-8 rounded-full bg-[#10B981] text-white font-black text-xs flex items-center justify-center flex-shrink-0 mt-1 shadow-2xs">
                                                        B
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                </div>
                            </div>
                        )}

                        {/* ══════════════════════════════════════════════════════════════
                            TAB 3: 100 SMART SENTENCE VARIATIONS (একই বাক্য বিভিন্নভাবে বলার স্টাইল)
                           ══════════════════════════════════════════════════════════════ */}
                        {activeTab === 'variations' && (
                            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs space-y-6">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
                                    <div>
                                        <h3 className="text-base sm:text-lg font-black text-slate-800">
                                            একই কথা বিভিন্নভাবে বলার ১০০টি স্মার্ট স্টাইল (Smart Variations)
                                        </h3>
                                        <p className="text-xs text-slate-500 mt-0.5">
                                            একটি সাধারণ কথাকে ৩-৪ রকম ভিন্ন টোন ও নেটিভ স্টাইলে বলার ১০০টি বাস্তব উদাহরণ
                                        </p>
                                    </div>

                                    {/* Search */}
                                    <div className="relative w-full sm:w-64">
                                        <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                                        <input
                                            type="text"
                                            placeholder="অনুসন্ধান করুন..."
                                            value={varSearch}
                                            onChange={e => setVarSearch(e.target.value)}
                                            className="w-full pl-8 pr-3 py-1.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-800 focus:outline-none focus:border-indigo-500"
                                        />
                                    </div>
                                </div>

                                {/* Batch Navigation */}
                                <div className="flex flex-wrap items-center justify-between gap-2 bg-slate-50 p-2.5 rounded-2xl border border-slate-200/80">
                                    <span className="text-xs font-bold text-slate-500">ব্যাচ:</span>
                                    <div className="flex flex-wrap gap-1.5">
                                        {[
                                            { b: 1, label: '১ - ২৫' },
                                            { b: 2, label: '২৬ - ৫০' },
                                            { b: 3, label: '৫১ - ৭৫' },
                                            { b: 4, label: '৭৬ - ১০০' }
                                        ].map(item => (
                                            <button
                                                key={item.b}
                                                onClick={() => setVarBatch(item.b)}
                                                className={`px-3.5 py-1 rounded-xl text-xs font-bold transition ${
                                                    varBatch === item.b
                                                        ? 'bg-[#5B4DFB] text-white font-black shadow-2xs'
                                                        : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                                                }`}
                                            >
                                                {item.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Variations List */}
                                <div className="space-y-5">
                                    {currentVariations
                                        .filter(item => {
                                            if (varSearch.trim()) {
                                                const q = varSearch.toLowerCase();
                                                return item.baseMeaning.toLowerCase().includes(q) || item.standard.toLowerCase().includes(q);
                                            }
                                            const start = (varBatch - 1) * 25 + 1;
                                            const end = varBatch * 25;
                                            return item.num >= start && item.num <= end;
                                        })
                                        .map(varItem => (
                                            <div key={varItem.id} className="p-5 rounded-3xl bg-slate-50/60 border border-slate-200/90 shadow-2xs space-y-3">
                                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-200/60">
                                                    <div>
                                                        <span className="text-[10px] font-black text-indigo-700 uppercase tracking-wider">
                                                            আইটেম #{varItem.num}
                                                        </span>
                                                        <h4 className="text-sm sm:text-base font-black text-slate-900 mt-0.5">
                                                            {varItem.baseMeaning}
                                                        </h4>
                                                    </div>
                                                    <span className="text-xs text-slate-500 bg-white border border-slate-200 px-3 py-1 rounded-xl self-start">
                                                        বইয়ের গতানুগতিক রূপ: <b className="text-slate-800">"{varItem.standard}"</b>
                                                    </span>
                                                </div>

                                                {/* Alternative Ways Grid */}
                                                <div className="grid gap-3 sm:grid-cols-2 pt-1">
                                                    {varItem.ways.map((w, wIdx) => (
                                                        <div key={wIdx} className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs space-y-1">
                                                            <div className="flex items-center justify-between">
                                                                <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
                                                                    {w.tone}
                                                                </span>
                                                                <button
                                                                    onClick={() => playAudio(w.text)}
                                                                    className="text-slate-400 hover:text-indigo-600 transition p-1"
                                                                >
                                                                    <Volume2 size={14} />
                                                                </button>
                                                            </div>
                                                            <p className="font-bold text-slate-900 text-sm">
                                                                "{w.text}"
                                                            </p>
                                                            <p className="text-xs text-slate-600">
                                                                {w.bn}
                                                            </p>
                                                            <p className="text-[11px] font-semibold text-orange-600">
                                                                উচ্চারণ: {w.bn_pron}
                                                            </p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                </div>
                            </div>
                        )}

                        {/* ══════════════════════════════════════════════════════════════
                            TAB 4: 100 FILL-IN-THE-GAP GRAMMAR DRILLS
                           ══════════════════════════════════════════════════════════════ */}
                        {activeTab === 'fillgap' && (
                            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs space-y-6">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <h3 className="text-base sm:text-lg font-black text-slate-800">
                                                ১০০টি গ্রামার কুইজ ও শূন্যস্থান পূরণ (Fill-in-the-gap)
                                            </h3>
                                            <span className="text-xs font-black bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full">
                                                ১০০টি ড্রিল
                                            </span>
                                        </div>
                                        <p className="text-xs text-slate-500 mt-0.5">
                                            সঠিক অপশনটি সিলেক্ট করে ব্যাকরণ নিয়ম ও সঠিক উচ্চারণ আয়ত্ত করুন
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-3.5 py-1.5 rounded-2xl text-xs font-black text-emerald-800">
                                        <span>আপনার স্কোর: {fgScore} / {Object.keys(fgUserAnswers).length}</span>
                                    </div>
                                </div>

                                {/* Batch Navigation */}
                                <div className="flex flex-wrap items-center justify-between gap-2 bg-slate-50 p-2.5 rounded-2xl border border-slate-200/80">
                                    <span className="text-xs font-bold text-slate-500">ব্যাচ:</span>
                                    <div className="flex flex-wrap gap-1.5">
                                        {[
                                            { b: 1, label: '১ - ২৫' },
                                            { b: 2, label: '২৬ - ৫০' },
                                            { b: 3, label: '৫১ - ৭৫' },
                                            { b: 4, label: '৭৬ - ১০০' }
                                        ].map(item => (
                                            <button
                                                key={item.b}
                                                onClick={() => setFgBatch(item.b)}
                                                className={`px-3.5 py-1 rounded-xl text-xs font-bold transition ${
                                                    fgBatch === item.b
                                                        ? 'bg-[#5B4DFB] text-white font-black shadow-2xs'
                                                        : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                                                }`}
                                            >
                                                {item.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Exercises List */}
                                <div className="space-y-4">
                                    {currentFillGaps
                                        .filter(item => {
                                            const start = (fgBatch - 1) * 25 + 1;
                                            const end = fgBatch * 25;
                                            return item.num >= start && item.num <= end;
                                        })
                                        .map(fgItem => {
                                            const selected = fgUserAnswers[fgItem.id];
                                            const isAnswered = Boolean(selected);
                                            const isCorrect = selected === fgItem.answer;

                                            return (
                                                <div key={fgItem.id} className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200/80 shadow-2xs space-y-3">
                                                    <div className="flex items-center justify-between">
                                                        <span className="text-xs font-black text-slate-500">
                                                            কুইজ #{fgItem.num}
                                                        </span>
                                                        {isAnswered && (
                                                            <button
                                                                onClick={() => playAudio(fgItem.completedSentence)}
                                                                className="inline-flex items-center gap-1 text-xs font-bold text-indigo-600 hover:text-indigo-800"
                                                            >
                                                                <Volume2 size={14} />
                                                                <span>শুনুন</span>
                                                            </button>
                                                        )}
                                                    </div>

                                                    <h4 className="text-base sm:text-lg font-black text-slate-900">
                                                        {fgItem.sentence}
                                                    </h4>
                                                    <p className="text-xs text-slate-600 font-medium">
                                                        বাংলা অর্থ: {fgItem.bn}
                                                    </p>

                                                    {/* Options */}
                                                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                                                        {fgItem.options.map((opt, oIdx) => {
                                                            let optStyle = "bg-white border-slate-200 text-slate-800 hover:border-indigo-400";
                                                            if (isAnswered) {
                                                                if (opt === fgItem.answer) {
                                                                    optStyle = "bg-emerald-600 text-white border-emerald-600 font-black";
                                                                } else if (opt === selected && !isCorrect) {
                                                                    optStyle = "bg-rose-600 text-white border-rose-600 font-black";
                                                                } else {
                                                                    optStyle = "bg-slate-100 text-slate-400 border-slate-200 opacity-60";
                                                                }
                                                            }

                                                            return (
                                                                <button
                                                                    key={oIdx}
                                                                    disabled={isAnswered}
                                                                    onClick={() => handleSelectOption(fgItem.id, opt, fgItem.answer)}
                                                                    className={`py-2.5 px-3 rounded-xl border text-xs font-bold transition ${optStyle}`}
                                                                >
                                                                    {opt}
                                                                </button>
                                                            );
                                                        })}
                                                    </div>

                                                    {/* Explanation feedback */}
                                                    {isAnswered && (
                                                        <div className={`p-3 rounded-xl text-xs font-semibold mt-2 ${
                                                            isCorrect ? 'bg-emerald-50 text-emerald-900 border border-emerald-200' : 'bg-rose-50 text-rose-900 border border-rose-200'
                                                        }`}>
                                                            <p className="font-bold">
                                                                {isCorrect ? '✓ দারুণ! সঠিক উত্তর হয়েছে।' : `✗ ভুল হয়েছে। সঠিক উত্তর: "${fgItem.answer}"`}
                                                            </p>
                                                            <p className="mt-1 text-[11px] opacity-90">
                                                                💡 ব্যাকরণ ব্যাখ্যা: {fgItem.explanationBn}
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
                            TAB 5: 6-WAY TRANSFORMATION FLOW
                           ══════════════════════════════════════════════════════════════ */}
                        {activeTab === 'transform' && (
                            <div className="space-y-5">
                                <div className="bg-gradient-to-r from-indigo-900 to-slate-900 text-white p-5 rounded-2xl flex items-center justify-between shadow-sm">
                                    <div>
                                        <span className="text-xs font-black uppercase text-indigo-300 tracking-wider">স্পোকেন ফ্লুয়েন্সির মূল ফর্মুলা</span>
                                        <h3 className="text-base sm:text-lg font-black mt-0.5">যেকোনো একটি ভাবকে ৬টি রূপে তাৎক্ষণিক মুখে আনার পদ্ধতি:</h3>
                                        <p className="text-sm text-indigo-100 mt-1 font-medium">বিষয়: <span className="font-bold underline">{currentLesson.transformation6Way.baseConcept}</span></p>
                                    </div>
                                    <Sparkles className="text-indigo-300" size={28} />
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
                                            badge: 'WH প্রশ্নবোধক',
                                            color: 'border-purple-200 bg-purple-50/50 text-purple-800',
                                            data: currentLesson.transformation6Way.whPositive
                                        },
                                        {
                                            key: 'whNegative',
                                            type: '৬. WH-Negative (? -)',
                                            badge: 'WH না-বাচক প্রশ্ন',
                                            color: 'border-indigo-200 bg-indigo-50/50 text-indigo-800',
                                            data: currentLesson.transformation6Way.whNegative
                                        }
                                    ].map(item => (
                                        <div
                                            key={item.key}
                                            className={`p-5 rounded-3xl border-2 transition-all bg-white shadow-2xs`}
                                        >
                                            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                                                <span className="font-black text-xs text-slate-800">{item.type}</span>
                                                <span className={`text-[10px] font-black px-2 py-0.5 rounded-full border ${item.color}`}>
                                                    {item.badge}
                                                </span>
                                            </div>

                                            <div className="mt-2.5">
                                                <p className="text-lg sm:text-xl font-black text-slate-900 leading-snug">
                                                    "{item.data.en}"
                                                </p>
                                                <p className="text-sm font-bold text-slate-700 mt-1">
                                                    অনুবাদ: {item.data.bn}
                                                </p>
                                                <p className="text-xs font-mono text-purple-600 mt-1">
                                                    IPA: {item.data.ipa}
                                                </p>
                                                <p className="text-xs font-mono text-slate-500 bg-slate-100 p-2 rounded-xl mt-2">
                                                    রুল: {item.data.formula}
                                                </p>
                                            </div>

                                            <div className="flex items-center justify-between pt-3 mt-3 border-t border-slate-100">
                                                <button
                                                    onClick={() => playAudio(item.data.en)}
                                                    className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-700 flex items-center gap-1"
                                                >
                                                    <Volume2 size={14} />
                                                    <span>শুনুন</span>
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* ══════════════════════════════════════════════════════════════
                            TAB 6: CONCEPT & RULES
                           ══════════════════════════════════════════════════════════════ */}
                        {activeTab === 'concept' && (
                            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs space-y-5">
                                <h3 className="text-base sm:text-lg font-black text-slate-900 pb-2 border-b border-slate-100">
                                    {currentLesson.title} - বিস্তারিত কনসেপ্ট ও ব্যবহারের সঠিক নিয়ম
                                </h3>

                                <div className="space-y-4">
                                    <div className="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-200">
                                        <h4 className="text-xs font-black text-indigo-900 uppercase">১. মূল ধারণা (Concept):</h4>
                                        <p className="text-xs sm:text-sm text-slate-800 mt-1 leading-relaxed">
                                            {currentLesson.concept.explanation}
                                        </p>
                                    </div>

                                    <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200">
                                        <h4 className="text-xs font-black text-emerald-900 uppercase">২. কখন ব্যবহার করবেন (When to use):</h4>
                                        <p className="text-xs sm:text-sm text-slate-800 mt-1 leading-relaxed">
                                            {currentLesson.concept.whenToUse}
                                        </p>
                                    </div>

                                    <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-200">
                                        <h4 className="text-xs font-black text-rose-900 uppercase">৩. সচরাচর যে ভুলটি হয় (Common Mistake):</h4>
                                        <p className="text-xs sm:text-sm text-rose-900 mt-1 leading-relaxed font-medium">
                                            {currentLesson.concept.commonMistake}
                                        </p>
                                    </div>

                                    <div className="p-4 rounded-2xl bg-slate-100 border border-slate-300">
                                        <h4 className="text-xs font-black text-slate-700 uppercase">৪. জাদুকরী ফর্মুলা (Formula Summary):</h4>
                                        <p className="text-sm font-mono font-bold text-slate-900 mt-1">
                                            {currentLesson.concept.formulaSummary}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* ══════════════════════════════════════════════════════════════
                            TAB 7: SENTENCE BUILDER
                           ══════════════════════════════════════════════════════════════ */}
                        {activeTab === 'builder' && (
                            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs space-y-6">
                                <div>
                                    <h3 className="text-base sm:text-lg font-black text-slate-900">
                                        ইন্টারেক্টিভ সেন্টেন্স বিল্ডার (Sentence Builder)
                                    </h3>
                                    <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                                        Subject, Verb ও Complement মিলিয়ে নিজে নিজে বাক্য তৈরি করুন এবং উচ্চারণ শুনুন
                                    </p>
                                </div>

                                <div className="p-5 rounded-2xl bg-indigo-50/60 border border-indigo-200 text-center space-y-2">
                                    <span className="text-xs font-bold text-indigo-700 uppercase">আপনার তৈরি করা বাক্য:</span>
                                    <p className="text-xl sm:text-2xl font-black text-slate-900">
                                        "{builderSubject} {builderVerb} {builderComplement}"
                                    </p>
                                    <button
                                        onClick={() => playAudio(`${builderSubject} ${builderVerb} ${builderComplement}`)}
                                        className="mt-2 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#5B4DFB] text-white text-xs font-bold shadow-2xs hover:bg-indigo-600 transition"
                                    >
                                        <Volume2 size={15} />
                                        <span>শুনুন</span>
                                    </button>
                                </div>

                                <div className="grid gap-4 sm:grid-cols-3">
                                    {/* Subjects */}
                                    <div className="space-y-2">
                                        <span className="text-xs font-black text-slate-600 uppercase">১. Subject নির্বাচন:</span>
                                        <div className="space-y-1">
                                            {(currentLesson.sentenceBuilder?.subjects || []).map((s, idx) => (
                                                <button
                                                    key={idx}
                                                    onClick={() => setBuilderSubject(s)}
                                                    className={`w-full text-left p-2.5 rounded-xl text-xs font-bold transition ${
                                                        builderSubject === s
                                                            ? 'bg-[#5B4DFB] text-white shadow-2xs'
                                                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                                                    }`}
                                                >
                                                    {s}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Verbs */}
                                    <div className="space-y-2">
                                        <span className="text-xs font-black text-slate-600 uppercase">২. Verb নির্বাচন:</span>
                                        <div className="space-y-1">
                                            {(currentLesson.sentenceBuilder?.auxOrVerbs || []).map((v, idx) => (
                                                <button
                                                    key={idx}
                                                    onClick={() => setBuilderVerb(v)}
                                                    className={`w-full text-left p-2.5 rounded-xl text-xs font-bold transition ${
                                                        builderVerb === v
                                                            ? 'bg-[#5B4DFB] text-white shadow-2xs'
                                                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                                                    }`}
                                                >
                                                    {v}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Complements */}
                                    <div className="space-y-2">
                                        <span className="text-xs font-black text-slate-600 uppercase">৩. Complement নির্বাচন:</span>
                                        <div className="space-y-1">
                                            {(currentLesson.sentenceBuilder?.complements || []).map((c, idx) => (
                                                <button
                                                    key={idx}
                                                    onClick={() => setBuilderComplement(c)}
                                                    className={`w-full text-left p-2.5 rounded-xl text-xs font-bold transition ${
                                                        builderComplement === c
                                                            ? 'bg-[#5B4DFB] text-white shadow-2xs'
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
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
