'use client';

import { useState, useEffect, useRef, useMemo } from 'react';
import Link from 'next/link';
import {
    ArrowLeft, Volume2, Mic, CheckCircle2, RotateCcw,
    BookOpen, Layers, Lightbulb, Play, Pause, Flame, Trophy,
    Sparkles, Check, ChevronRight, HelpCircle, MessageSquare,
    UserCheck, Users, Headphones, PlayCircle, StopCircle, Search
} from 'lucide-react';
import { SITUATIONAL_CONVERSATIONS, type SituationalConversation, type DialogueTurn } from '../../../../lib/spokenConversationsData';

export default function SituationalConversationsPage() {
    // Current Active Situation
    const [selectedId, setSelectedId] = useState<string>(SITUATIONAL_CONVERSATIONS[0].id);
    const [levelFilter, setLevelFilter] = useState<'all' | 'Easy' | 'Intermediate'>('all');
    const [categoryFilter, setCategoryFilter] = useState<string>('all');
    const [searchQuery, setSearchQuery] = useState<string>('');
    
    // View mode: 'dialogue' | 'starters' | 'roleplay' | 'vocabulary'
    const [activeTab, setActiveTab] = useState<'dialogue' | 'roleplay' | 'starters' | 'vocabulary'>('dialogue');

    // Roleplay state
    const [userRole, setUserRole] = useState<'A' | 'B'>('A');
    const [roleplayTurnIndex, setRoleplayTurnIndex] = useState(0);

    // Audio Player State
    const [playingTurnId, setPlayingTurnId] = useState<string | null>(null);
    const [isAutoPlaying, setIsAutoPlaying] = useState(false);
    const autoPlayIndexRef = useRef(0);

    // Mic & Speech Recognition State
    const [isRecording, setIsRecording] = useState(false);
    const [activeTurnMicId, setActiveTurnMicId] = useState<string | null>(null);
    const [spokenTranscript, setSpokenTranscript] = useState('');
    const [turnAccuracy, setTurnAccuracy] = useState<number | null>(null);
    const recognitionRef = useRef<any>(null);

    // Gamification & Completion
    const [completedConvIds, setCompletedConvIds] = useState<string[]>([]);
    const [xp, setXp] = useState<number>(0);

    useEffect(() => {
        const storedXp = Number(localStorage.getItem('spoken_xp') || 0);
        setXp(storedXp);

        try {
            const completed = JSON.parse(localStorage.getItem('completed_situational_convs') || '[]');
            setCompletedConvIds(completed);
        } catch { /* ignore */ }
    }, []);

    // Current Active Conversation
    const currentConv = useMemo(() => {
        return SITUATIONAL_CONVERSATIONS.find(c => c.id === selectedId) || SITUATIONAL_CONVERSATIONS[0];
    }, [selectedId]);

    // Filtered Conversations List
    const filteredConversations = useMemo(() => {
        return SITUATIONAL_CONVERSATIONS.filter(c => {
            const matchesLevel = levelFilter === 'all' || c.level === levelFilter;
            const matchesCategory = categoryFilter === 'all' || c.category === categoryFilter;
            return matchesLevel && matchesCategory;
        });
    }, [levelFilter, categoryFilter]);

    // Stop audio & reset roleplay on situation change
    useEffect(() => {
        stopAutoPlay();
        setRoleplayTurnIndex(0);
        setSpokenTranscript('');
        setTurnAccuracy(null);
        setActiveTurnMicId(null);
        setIsRecording(false);
        if (typeof window !== 'undefined') window.speechSynthesis?.cancel();
    }, [selectedId]);

    // Play Audio for a single text
    const playAudio = (text: string, onEndCallback?: () => void) => {
        if (typeof window === 'undefined') return;
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-GB';
        utterance.rate = 0.95;
        utterance.onstart = () => setPlayingTurnId(text);
        utterance.onend = () => {
            setPlayingTurnId(null);
            if (onEndCallback) onEndCallback();
        };
        utterance.onerror = () => {
            setPlayingTurnId(null);
            if (onEndCallback) onEndCallback();
        };
        window.speechSynthesis.speak(utterance);
    };

    // Auto-Play Full Conversation
    const startAutoPlay = () => {
        setIsAutoPlaying(true);
        autoPlayIndexRef.current = 0;
        playNextTurnInSequence();
    };

    const stopAutoPlay = () => {
        setIsAutoPlaying(false);
        setPlayingTurnId(null);
        if (typeof window !== 'undefined') window.speechSynthesis?.cancel();
    };

    const playNextTurnInSequence = () => {
        const turns = currentConv.dialogue;
        const idx = autoPlayIndexRef.current;

        if (idx >= turns.length) {
            setIsAutoPlaying(false);
            setPlayingTurnId(null);
            return;
        }

        const currentTurn = turns[idx];
        setPlayingTurnId(currentTurn.id);

        playAudio(currentTurn.en, () => {
            autoPlayIndexRef.current++;
            setTimeout(() => {
                playNextTurnInSequence();
            }, 700);
        });
    };

    // Voice recognition for speaking
    const startMic = (turnId: string, targetText: string) => {
        const SpeechRec = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
        if (!SpeechRec) {
            alert('আপনার ব্রাউজারে ভয়েস রিকগনিশন সাপোর্ট নেই। Chrome বা Edge ব্যবহার করুন।');
            return;
        }

        window.speechSynthesis.cancel();
        const rec = new SpeechRec();
        rec.continuous = false;
        rec.interimResults = false;
        rec.lang = 'en-US';

        rec.onstart = () => {
            setIsRecording(true);
            setActiveTurnMicId(turnId);
            setSpokenTranscript('');
            setTurnAccuracy(null);
        };

        rec.onresult = (event: any) => {
            const spoken = event.results[0][0].transcript;
            setSpokenTranscript(spoken);

            const clean = (s: string) => s.toLowerCase().replace(/[^a-z0-9 ]/g, '').trim();
            const targetWords = clean(targetText).split(/\s+/);
            const spokenWords = clean(spoken).split(/\s+/);

            let matches = 0;
            targetWords.forEach(tw => {
                if (spokenWords.includes(tw)) matches++;
            });

            const accuracy = Math.round((matches / targetWords.length) * 100);
            setTurnAccuracy(accuracy);

            if (accuracy >= 70) {
                awardXp(20);
            }
        };

        rec.onerror = () => setIsRecording(false);
        rec.onend = () => setIsRecording(false);

        recognitionRef.current = rec;
        try {
            rec.start();
        } catch { /* ignore */ }
    };

    const awardXp = (amount: number) => {
        const newXp = xp + amount;
        setXp(newXp);
        localStorage.setItem('spoken_xp', String(newXp));
    };

    const markConvDone = (id: string) => {
        if (!completedConvIds.includes(id)) {
            const updated = [...completedConvIds, id];
            setCompletedConvIds(updated);
            localStorage.setItem('completed_situational_convs', JSON.stringify(updated));
            awardXp(50);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 via-teal-50/15 to-white py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto space-y-6">

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
                            <span>{completedConvIds.length} / {SITUATIONAL_CONVERSATIONS.length} কমপ্লিট</span>
                        </div>
                    </div>
                </div>

                {/* Hero Header */}
                <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 p-6 sm:p-8 text-white shadow-xl relative overflow-hidden border border-teal-500/20">
                    <div className="absolute right-0 top-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
                    <div className="relative z-10 max-w-3xl">
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-teal-400/30 bg-teal-500/20 px-3.5 py-1 text-[11px] font-black uppercase tracking-wider text-teal-300 mb-3">
                            <Sparkles size={12} /> 100% FREE · 40 REAL-LIFE SITUATIONAL CONVERSATIONS (৪০টি পরিস্থিতি · প্রতিটিতে ১০টি ডায়ালগ)
                        </span>
                        <h1 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
                            Real-Life Conversation Lab: <span className="text-teal-400">সহজ থেকে ইন্টারমিডিয়েট ৪০টি বাস্তব পরিস্থিতি</span>
                        </h1>
                        <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                            কফি শপ, হোটেল, রেস্তোরাঁ, ডাক্তারখানা, এয়ারপোর্ট, জব ইন্টারভিউ, ব্যাংক, কেনাকাটা ও বন্ধুত্ব—প্রতিটি পরিস্থিতিতে ১০টি করে ডায়ালগ, সঠিক উচ্চারণ, সম্পূরক প্রশ্ন ও নেটিভ ফ্রেজ।
                        </p>
                    </div>
                </div>

                {/* Filters Ribbon */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-3 rounded-2xl border border-slate-200 shadow-xs">
                    {/* Level Pills */}
                    <div className="flex flex-wrap items-center gap-1.5">
                        <span className="text-xs font-black text-slate-400 px-2 uppercase">লেভেল:</span>
                        {[
                            { id: 'all', label: `সব পরিস্থিতি (${SITUATIONAL_CONVERSATIONS.length}টি)` },
                            { id: 'Easy', label: `সহজ / Beginner (${SITUATIONAL_CONVERSATIONS.filter(c => c.level === 'Easy').length}টি)` },
                            { id: 'Intermediate', label: `ইন্টারমিডিয়েট (${SITUATIONAL_CONVERSATIONS.filter(c => c.level === 'Intermediate').length}টি)` }
                        ].map(f => (
                            <button
                                key={f.id}
                                onClick={() => setLevelFilter(f.id as any)}
                                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                                    levelFilter === f.id
                                        ? 'bg-teal-600 text-white font-black shadow-xs'
                                        : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                                }`}
                            >
                                {f.label}
                            </button>
                        ))}
                    </div>

                    {/* Category Filter */}
                    <div className="flex items-center gap-2">
                        <span className="text-xs font-black text-slate-400 uppercase">ক্যাটাগরি:</span>
                        <select
                            value={categoryFilter}
                            onChange={e => setCategoryFilter(e.target.value)}
                            className="text-xs font-bold bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5 text-slate-700 focus:outline-none focus:border-teal-500"
                        >
                            <option value="all">সব ক্যাটাগরি</option>
                            <option value="Daily Life">দৈনন্দিন জীবন (Daily Life)</option>
                            <option value="Social">সামাজিক আড্ডা (Social)</option>
                            <option value="Services">সার্ভিস ও সেবা (Services)</option>
                            <option value="Travel">ভ্রমণ ও এয়ারপোর্ট (Travel)</option>
                            <option value="Professional">অফিস ও ইন্টারভিউ (Professional)</option>
                            <option value="Emergency & Health">জরুরি ও চিকিৎসা (Emergency & Health)</option>
                        </select>
                    </div>
                </div>

                {/* Main Content Layout: Slim Sidebar (w-64) | Expanded Workspace (flex-1) */}
                <div className="flex flex-col lg:flex-row items-start gap-6">

                    {/* Left: Compact Situations List (Slim Width) */}
                    <div className="w-full lg:w-64 flex-shrink-0 space-y-3 sticky top-4">
                        <div className="flex items-center justify-between text-xs font-black text-slate-700 px-1">
                            <span>বাস্তব পরিস্থিতি ({filteredConversations.length} টি)</span>
                            <span className="text-[11px] text-teal-600">৪০টি সম্পন্ন করুন</span>
                        </div>

                        {/* Search Input */}
                        <div className="relative">
                            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                            <input
                                type="text"
                                placeholder="পরিস্থিতি খুঁজুন..."
                                value={searchQuery}
                                onChange={e => setSearchQuery(e.target.value)}
                                className="w-full pl-8 pr-3 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-teal-500 bg-white"
                            />
                        </div>

                        <div className="space-y-1.5 max-h-[750px] overflow-y-auto pr-1">
                            {filteredConversations.map(conv => {
                                const isSelected = conv.id === currentConv.id;
                                const isDone = completedConvIds.includes(conv.id);

                                return (
                                    <button
                                        key={conv.id}
                                        onClick={() => setSelectedId(conv.id)}
                                        className={`w-full text-left p-3 rounded-2xl border text-xs transition-all flex items-center justify-between ${
                                            isSelected
                                                ? 'bg-teal-600 border-teal-600 text-white shadow-md shadow-teal-600/20'
                                                : 'bg-white border-slate-200 text-slate-800 hover:border-teal-300 hover:bg-teal-50/20'
                                        }`}
                                    >
                                        <div className="flex items-start gap-2.5 min-w-0">
                                            <span className={`flex h-6 w-6 items-center justify-center rounded-lg text-[10px] font-black flex-shrink-0 mt-0.5 ${
                                                isSelected ? 'bg-white/20 text-white' : 'bg-teal-50 text-teal-700 border border-teal-200'
                                            }`}>
                                                {conv.number}
                                            </span>

                                            <div className="min-w-0">
                                                <div className="flex items-center gap-1.5">
                                                    <p className="font-black text-xs truncate">{conv.title}</p>
                                                </div>
                                                <p className={`text-[10px] font-medium truncate mt-0.5 ${
                                                    isSelected ? 'text-teal-100' : 'text-slate-500'
                                                }`}>
                                                    {conv.titleBn}
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

                    {/* Right: Active Situation Workspace (Expanded to 80% Width) */}
                    <div className="flex-1 min-w-0 space-y-6 w-full">

                        {/* Card Header & Player Controls */}
                        <div className="bg-white rounded-3xl p-5 sm:p-7 border border-slate-200 shadow-xs space-y-4">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
                                <div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs font-black px-2.5 py-1 rounded-full bg-teal-50 text-teal-800 border border-teal-200 uppercase tracking-wider">
                                            পরিস্থিতি #{currentConv.number} · {currentConv.category}
                                        </span>
                                        <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                                            লেভেল: {currentConv.level}
                                        </span>
                                        <span className="text-xs font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-full">
                                            ১০টি ডায়ালগ
                                        </span>
                                    </div>
                                    <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
                                        {currentConv.title}
                                    </h2>
                                    <p className="text-sm sm:text-base text-slate-600 font-bold mt-1">
                                        {currentConv.titleBn}
                                    </p>
                                    <p className="text-xs sm:text-sm text-teal-900 bg-teal-50/80 p-3 rounded-2xl mt-2.5 border border-teal-200/60 leading-relaxed">
                                        📍 <b>দৃশ্যপট:</b> {currentConv.sceneDescription}
                                    </p>
                                </div>

                                <button
                                    onClick={() => markConvDone(currentConv.id)}
                                    className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-black transition self-start ${
                                        completedConvIds.includes(currentConv.id)
                                            ? 'bg-emerald-50 border border-emerald-200 text-emerald-700'
                                            : 'bg-teal-600 text-white hover:bg-teal-700 shadow-xs'
                                    }`}
                                >
                                    <CheckCircle2 size={15} />
                                    <span>{completedConvIds.includes(currentConv.id) ? 'প্র্যাকটিস সম্পন্ন ✓' : 'সম্পন্ন মার্ক করুন (+৫০ XP)'}</span>
                                </button>
                            </div>

                            {/* Dialogue Navigation Tabs */}
                            <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                                <div className="flex flex-wrap gap-2">
                                    {[
                                        { id: 'dialogue', label: '💬 সম্পূর্ণ ডায়ালগ শুনুন ও পড়ুন (১০ লাইন)', icon: MessageSquare },
                                        { id: 'roleplay', label: '🎙️ ইন্টারেক্টিভ রোল-প্লে স্পিকিং', icon: UserCheck },
                                        { id: 'starters', label: '🚀 কথা শুরু ও শেষের কৌশল', icon: Sparkles },
                                        { id: 'vocabulary', label: '💡 নেটিভ ফ্রেজ ও ইডিয়ম', icon: Lightbulb }
                                    ].map(tab => {
                                        const Icon = tab.icon;
                                        const isActive = activeTab === tab.id;

                                        return (
                                            <button
                                                key={tab.id}
                                                onClick={() => setActiveTab(tab.id as any)}
                                                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition ${
                                                    isActive
                                                        ? 'bg-teal-600 text-white shadow-xs font-black'
                                                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                                                }`}
                                            >
                                                <Icon size={14} />
                                                <span>{tab.label}</span>
                                            </button>
                                        );
                                    })}
                                </div>

                                {/* Full Dialogue Auto-Player */}
                                {activeTab === 'dialogue' && (
                                    <button
                                        onClick={() => {
                                            if (isAutoPlaying) stopAutoPlay();
                                            else startAutoPlay();
                                        }}
                                        className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition shadow-xs ${
                                            isAutoPlaying
                                                ? 'bg-rose-600 text-white animate-pulse'
                                                : 'bg-slate-900 text-white hover:bg-slate-800'
                                        }`}
                                    >
                                        {isAutoPlaying ? <StopCircle size={15} /> : <PlayCircle size={15} />}
                                        <span>{isAutoPlaying ? 'অটো-প্লে থামান' : '🔊 একটানা পুরো ১০টি লাইন শুনুন'}</span>
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* ══════════════════════════════════════════════════════════════
                            TAB 1: COMPLETE TURN-BY-TURN DIALOGUE READER (10 LINES)
                           ══════════════════════════════════════════════════════════════ */}
                        {activeTab === 'dialogue' && (
                            <div className="space-y-4">
                                {currentConv.dialogue.map(turn => {
                                    const isSpeakerA = turn.role === 'A';
                                    const isPlayingThis = playingTurnId === turn.id;
                                    const isMicActiveThis = isRecording && activeTurnMicId === turn.id;

                                    return (
                                        <div
                                            key={turn.id}
                                            className={`p-5 sm:p-6 rounded-3xl border-2 transition-all ${
                                                isSpeakerA
                                                    ? 'bg-white border-slate-200 shadow-sm'
                                                    : 'bg-amber-50/70 border-amber-200/90 shadow-sm'
                                            } ${isPlayingThis ? 'ring-2 ring-teal-500 bg-teal-50/80' : ''}`}
                                        >
                                            <div className="flex items-center justify-between pb-3 mb-3 border-b border-black/5">
                                                <div className="flex items-center gap-2.5">
                                                    <span className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-black text-white ${
                                                        isSpeakerA ? 'bg-indigo-600' : 'bg-amber-600'
                                                    }`}>
                                                        {turn.role}
                                                    </span>
                                                    <div>
                                                        <span className="font-black text-sm text-slate-800 block">
                                                            {turn.speaker}
                                                        </span>
                                                        <span className="text-[10px] font-bold text-slate-500 uppercase">
                                                            চরিত্র {turn.role}
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="flex items-center gap-2">
                                                    <button
                                                        onClick={() => playAudio(turn.en)}
                                                        className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-teal-700 hover:bg-slate-50 transition flex items-center gap-1.5 text-xs font-bold shadow-2xs"
                                                        title="শুনুন"
                                                    >
                                                        <Volume2 size={15} />
                                                        <span>শুনুন</span>
                                                    </button>
                                                    <button
                                                        onClick={() => {
                                                            if (isMicActiveThis) {
                                                                if (recognitionRef.current) recognitionRef.current.stop();
                                                                setIsRecording(false);
                                                            } else {
                                                                startMic(turn.id, turn.en);
                                                            }
                                                        }}
                                                        className={`px-3 py-1.5 rounded-xl border text-xs font-bold transition flex items-center gap-1.5 shadow-2xs ${
                                                            isMicActiveThis
                                                                ? 'bg-rose-500 text-white animate-pulse border-rose-500'
                                                                : 'bg-white border-slate-200 text-slate-700 hover:text-teal-700 hover:bg-slate-50'
                                                        }`}
                                                        title="মুখে বলে টেস্ট করুন"
                                                    >
                                                        <Mic size={15} />
                                                        <span>{isMicActiveThis ? 'রেকর্ড হচ্ছে...' : 'মুখে বলুন'}</span>
                                                    </button>
                                                </div>
                                            </div>

                                            {/* Large Bold English Sentence */}
                                            <p className="text-xl sm:text-2xl font-black text-slate-900 leading-snug tracking-tight">
                                                "{turn.en}"
                                            </p>

                                            {/* Bengali Phonetic Pronunciation & IPA Helper */}
                                            <div className="flex flex-wrap items-center gap-2 mt-2.5">
                                                {turn.bn_pron && (
                                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-amber-100/90 border border-amber-300 text-amber-950 font-black text-xs sm:text-sm shadow-2xs">
                                                        <span>🗣️ উচ্চারণ:</span>
                                                        <span className="underline decoration-amber-400 font-extrabold">{turn.bn_pron}</span>
                                                    </span>
                                                )}
                                                <span className="text-xs sm:text-sm font-mono text-teal-800 bg-teal-50 border border-teal-200 px-2.5 py-0.5 rounded-lg">
                                                    {turn.ipa}
                                                </span>
                                            </div>

                                            {/* Bengali Translation */}
                                            <p className="text-base sm:text-lg text-slate-700 font-bold leading-relaxed mt-2.5">
                                                অনুবাদ: {turn.bn}
                                            </p>

                                            {/* Mic accuracy result */}
                                            {activeTurnMicId === turn.id && turnAccuracy !== null && (
                                                <div className="mt-3 p-3 rounded-2xl bg-white border border-slate-200 text-xs flex items-center justify-between shadow-2xs">
                                                    <span className="text-xs text-slate-700 truncate max-w-[340px] font-medium">
                                                        আপনি বলেছেন: <b className="text-slate-900">"{spokenTranscript}"</b>
                                                    </span>
                                                    <span className={`text-xs font-black px-2.5 py-1 rounded-full flex-shrink-0 ${
                                                        turnAccuracy >= 70 ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                                                    }`}>
                                                        স্কোর: {turnAccuracy}%
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        )}

                        {/* ══════════════════════════════════════════════════════════════
                            TAB 2: INTERACTIVE ROLEPLAY SIMULATOR
                           ══════════════════════════════════════════════════════════════ */}
                        {activeTab === 'roleplay' && (
                            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
                                <div className="p-5 rounded-2xl bg-gradient-to-r from-teal-900 to-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                                    <div>
                                        <span className="text-xs font-black uppercase text-teal-300 tracking-wider">রোল-প্লে সিমুলেটর</span>
                                        <h3 className="text-base sm:text-lg font-black mt-0.5">
                                            আপনি কোন চরিত্রে কথা বলতে চান বেছে নিন:
                                        </h3>
                                    </div>

                                    <div className="inline-flex rounded-xl bg-white/10 p-1 border border-white/10">
                                        <button
                                            onClick={() => {
                                                setUserRole('A');
                                                setRoleplayTurnIndex(0);
                                            }}
                                            className={`px-3.5 py-2 rounded-lg text-xs font-black transition ${
                                                userRole === 'A' ? 'bg-teal-500 text-white shadow-xs' : 'text-slate-300 hover:text-white'
                                            }`}
                                        >
                                            চরিত্র A ({currentConv.dialogue.find(d => d.role === 'A')?.speaker})
                                        </button>
                                        <button
                                            onClick={() => {
                                                setUserRole('B');
                                                setRoleplayTurnIndex(0);
                                            }}
                                            className={`px-3.5 py-2 rounded-lg text-xs font-black transition ${
                                                userRole === 'B' ? 'bg-teal-500 text-white shadow-xs' : 'text-slate-300 hover:text-white'
                                            }`}
                                        >
                                            চরিত্র B ({currentConv.dialogue.find(d => d.role === 'B')?.speaker})
                                        </button>
                                    </div>
                                </div>

                                {/* Active Roleplay Card */}
                                {(() => {
                                    const currentTurn = currentConv.dialogue[roleplayTurnIndex] || currentConv.dialogue[0];
                                    const isUserTurn = currentTurn.role === userRole;

                                    return (
                                        <div className={`p-6 sm:p-8 rounded-3xl border-2 transition-all ${
                                            isUserTurn ? 'border-teal-500 bg-teal-50/40' : 'border-slate-200 bg-slate-50'
                                        }`}>
                                            <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200">
                                                <div className="flex items-center gap-2">
                                                    <span className={`text-xs font-black px-3 py-1 rounded-full text-white ${
                                                        isUserTurn ? 'bg-teal-600' : 'bg-slate-700'
                                                    }`}>
                                                        {isUserTurn ? '🎯 আপনার বলার পালা (Your Turn)' : `🤖 অপর পক্ষের পালা (${currentTurn.speaker})`}
                                                    </span>
                                                    <span className="text-xs text-slate-500 font-bold">
                                                        ধাপ {roleplayTurnIndex + 1} / {currentConv.dialogue.length}
                                                    </span>
                                                </div>

                                                <button
                                                    onClick={() => playAudio(currentTurn.en)}
                                                    className="p-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 flex items-center gap-1.5 text-xs font-bold"
                                                >
                                                    <Volume2 size={15} />
                                                    <span>আদর্শ উচ্চারণ শুনুন</span>
                                                </button>
                                            </div>

                                            {/* Big English line */}
                                            <p className="text-2xl sm:text-3xl font-black text-slate-900 leading-snug">
                                                "{currentTurn.en}"
                                            </p>

                                            {/* Bengali phonetic pronunciation */}
                                            <div className="flex flex-wrap items-center gap-2 mt-3">
                                                {currentTurn.bn_pron && (
                                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-amber-100/90 border border-amber-300 text-amber-950 font-black text-xs sm:text-sm">
                                                        <span>🗣️ উচ্চারণ:</span>
                                                        <span className="underline decoration-amber-400 font-extrabold">{currentTurn.bn_pron}</span>
                                                    </span>
                                                )}
                                                <span className="text-xs sm:text-sm font-mono text-teal-800 bg-teal-50 border border-teal-200 px-2.5 py-0.5 rounded-lg">
                                                    {currentTurn.ipa}
                                                </span>
                                            </div>

                                            {/* Translation */}
                                            <p className="text-base sm:text-lg text-slate-700 font-bold mt-2.5">
                                                অনুবাদ: {currentTurn.bn}
                                            </p>

                                            {/* Action for User's Turn */}
                                            {isUserTurn ? (
                                                <div className="mt-6 pt-5 border-t border-teal-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                                                    <button
                                                        onClick={() => {
                                                            if (isRecording) {
                                                                if (recognitionRef.current) recognitionRef.current.stop();
                                                                setIsRecording(false);
                                                            } else {
                                                                startMic(currentTurn.id, currentTurn.en);
                                                            }
                                                        }}
                                                        className={`px-6 py-3 rounded-2xl text-xs sm:text-sm font-black flex items-center justify-center gap-2 transition ${
                                                            isRecording
                                                                ? 'bg-rose-500 text-white animate-pulse'
                                                                : 'bg-teal-600 text-white hover:bg-teal-700 shadow-md shadow-teal-600/20'
                                                        }`}
                                                    >
                                                        <Mic size={17} />
                                                        <span>{isRecording ? 'শুনছি... কথা বলুন' : 'মাইক অন করে বাক্যটি বলুন'}</span>
                                                    </button>

                                                    <button
                                                        onClick={() => {
                                                            if (roleplayTurnIndex < currentConv.dialogue.length - 1) {
                                                                setRoleplayTurnIndex(roleplayTurnIndex + 1);
                                                                setTurnAccuracy(null);
                                                                setSpokenTranscript('');
                                                            }
                                                        }}
                                                        className="px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold bg-slate-900 text-white hover:bg-slate-800 transition"
                                                    >
                                                        পরবর্তী ধাপে যান ➔
                                                    </button>
                                                </div>
                                            ) : (
                                                <div className="mt-6 pt-5 border-t border-slate-200 flex items-center justify-between">
                                                    <button
                                                        onClick={() => playAudio(currentTurn.en)}
                                                        className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-black bg-indigo-600 text-white hover:bg-indigo-700 transition flex items-center gap-1.5"
                                                    >
                                                        <Play size={14} />
                                                        <span>{currentTurn.speaker}-এর কথা শুনুন</span>
                                                    </button>

                                                    <button
                                                        onClick={() => {
                                                            if (roleplayTurnIndex < currentConv.dialogue.length - 1) {
                                                                setRoleplayTurnIndex(roleplayTurnIndex + 1);
                                                                setTurnAccuracy(null);
                                                                setSpokenTranscript('');
                                                            }
                                                        }}
                                                        className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-slate-200 text-slate-800 hover:bg-slate-300 transition"
                                                    >
                                                        পরবর্তী ধাপে যান ➔
                                                    </button>
                                                </div>
                                            )}

                                            {/* Score feedback */}
                                            {turnAccuracy !== null && (
                                                <div className="mt-4 p-3.5 rounded-2xl bg-white border border-teal-200 text-xs sm:text-sm">
                                                    <div className="flex items-center justify-between font-bold">
                                                        <span className="text-slate-700">আপনার বলা রূপ: "{spokenTranscript}"</span>
                                                        <span className={`font-black px-2.5 py-1 rounded-full ${
                                                            turnAccuracy >= 70 ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                                                        }`}>
                                                            অ্যাকুরেসি: {turnAccuracy}%
                                                        </span>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    );
                                })()}
                            </div>
                        )}

                        {/* ══════════════════════════════════════════════════════════════
                            TAB 3: CONVERSATION STARTERS & CLOSERS
                           ══════════════════════════════════════════════════════════════ */}
                        {activeTab === 'starters' && (
                            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
                                {/* Ice Breakers */}
                                <div>
                                    <h3 className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2">
                                        <Sparkles size={18} className="text-teal-600" /> কীভাবে কথা শুরু করবেন (Conversation Starters / Ice Breakers):
                                    </h3>
                                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                                        অচেনা বা নতুন পরিবেশে লজ্জা না পেয়ে সাবলীলভাবে কথা শুরু করার সেরা ৩টি বাক্য:
                                    </p>

                                    <div className="space-y-3.5 mt-4">
                                        {currentConv.starters.map((starter, idx) => (
                                            <div
                                                key={idx}
                                                className="p-5 rounded-2xl border border-teal-200 bg-teal-50/40 hover:bg-teal-50 transition"
                                            >
                                                <div className="flex items-center justify-between pb-2 border-b border-teal-100">
                                                    <span className="text-xs font-black text-teal-800 uppercase">উপায় #{idx + 1}</span>
                                                    <button
                                                        onClick={() => playAudio(starter.en)}
                                                        className="p-1.5 rounded-lg bg-white text-teal-700 hover:bg-teal-100 border border-teal-200"
                                                    >
                                                        <Volume2 size={15} />
                                                    </button>
                                                </div>
                                                <p className="text-lg sm:text-xl font-black text-slate-900 mt-2">
                                                    "{starter.en}"
                                                </p>
                                                <p className="text-sm sm:text-base text-slate-700 font-bold mt-1">
                                                    অনুবাদ: {starter.bn}
                                                </p>
                                                <p className="text-xs sm:text-sm text-teal-900 bg-teal-100/70 p-2.5 rounded-xl border border-teal-200 font-medium mt-2">
                                                    💡 <b>ব্যবহার কৌশল:</b> {starter.tip}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Follow-Ups (Keeping it alive) */}
                                <div className="pt-5 border-t border-slate-100">
                                    <h3 className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2">
                                        <RotateCcw size={18} className="text-indigo-600" /> কথা থামতে না দিয়ে এগিয়ে নেওয়ার উপায় (Follow-Ups):
                                    </h3>
                                    <div className="space-y-3 mt-4">
                                        {currentConv.followUps.map((fu, idx) => (
                                            <div
                                                key={idx}
                                                className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-3"
                                            >
                                                <div>
                                                    <p className="text-base sm:text-lg font-black text-slate-900">"{fu.en}"</p>
                                                    <p className="text-sm text-slate-600 font-bold mt-1">{fu.bn}</p>
                                                </div>
                                                <button
                                                    onClick={() => playAudio(fu.en)}
                                                    className="p-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-teal-700 flex-shrink-0"
                                                >
                                                    <Volume2 size={15} />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Closers */}
                                <div className="pt-5 border-t border-slate-100">
                                    <h3 className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2">
                                        <CheckCircle2 size={18} className="text-emerald-600" /> মার্জিতভাবে কথা শেষ করে বিদায় নেওয়ার উপায় (Conversation Closers):
                                    </h3>
                                    <div className="space-y-3 mt-4">
                                        {currentConv.closers.map((cl, idx) => (
                                            <div
                                                key={idx}
                                                className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-200 flex items-center justify-between gap-3"
                                            >
                                                <div>
                                                    <p className="text-base sm:text-lg font-black text-emerald-950">"{cl.en}"</p>
                                                    <p className="text-sm text-emerald-800 font-bold mt-1">{cl.bn}</p>
                                                </div>
                                                <button
                                                    onClick={() => playAudio(cl.en)}
                                                    className="p-2 rounded-xl bg-white border border-emerald-200 text-emerald-700 hover:bg-emerald-100 flex-shrink-0"
                                                >
                                                    <Volume2 size={15} />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* ══════════════════════════════════════════════════════════════
                            TAB 4: NATIVE PHRASES & IDIOMS
                           ══════════════════════════════════════════════════════════════ */}
                        {activeTab === 'vocabulary' && (
                            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-5">
                                <div>
                                    <h3 className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2">
                                        <Lightbulb size={18} className="text-amber-500" /> এই পরিস্থিতিতে ব্যবহৃত নেটিভ ফ্রেজ ও ইডিয়মসমূহ:
                                    </h3>
                                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                                        এই বাক্যগুলো আয়ত্ত করলে আপনার ইংরেজি বইয়ের মতো নয়, একদম নেটিভ স্পিকারের মতো স্বাভাবিক শোনাবে:
                                    </p>
                                </div>

                                <div className="grid gap-4 sm:grid-cols-2">
                                    {currentConv.nativePhrases.map((phrase, idx) => (
                                        <div
                                            key={idx}
                                            className="p-5 rounded-2xl bg-gradient-to-br from-slate-50 to-teal-50/30 border border-slate-200 shadow-xs"
                                        >
                                            <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-200">
                                                <span className="font-black text-xs text-teal-800">ফ্রেজ #{idx + 1}</span>
                                                <button
                                                    onClick={() => playAudio(phrase.phrase)}
                                                    className="p-1.5 rounded-lg bg-white border border-slate-200 text-teal-700 hover:bg-teal-100"
                                                >
                                                    <Volume2 size={15} />
                                                </button>
                                            </div>
                                            <p className="text-lg sm:text-xl font-black text-slate-900">
                                                "{phrase.phrase}"
                                            </p>
                                            <p className="text-sm sm:text-base font-bold text-teal-800 mt-1">
                                                বাংলা অর্থ: {phrase.meaning}
                                            </p>
                                            <p className="text-xs sm:text-sm text-slate-600 mt-1.5 font-medium italic">
                                                ব্যবহারের প্রেক্ষাপট: {phrase.context}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
