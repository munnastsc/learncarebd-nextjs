'use client';

import { useState, useEffect, useRef, useMemo } from 'react';
import Link from 'next/link';
import {
    ArrowLeft, Volume2, Mic, CheckCircle2, RotateCcw,
    BookOpen, Layers, Lightbulb, Play, Pause, Flame, Trophy,
    Sparkles, Check, ChevronRight, HelpCircle, MessageSquare,
    UserCheck, Users, Headphones, PlayCircle, StopCircle, Search,
    MapPin, Compass, ShieldCheck, BookmarkCheck, Info, ChevronDown,
    ChevronUp, Sparkle
} from 'lucide-react';
import {
    SITUATIONAL_CONVERSATIONS,
    type SituationalConversation,
    type DialogueTurn,
    type SituationBriefing
} from '../../../../lib/spokenConversationsData';

export default function SituationalConversationsPage() {
    // Current Active Situation
    const [selectedId, setSelectedId] = useState<string>(SITUATIONAL_CONVERSATIONS[0].id);
    const [levelFilter, setLevelFilter] = useState<'all' | 'Easy' | 'Intermediate'>('all');
    const [categoryFilter, setCategoryFilter] = useState<string>('all');
    const [searchQuery, setSearchQuery] = useState<string>('');
    
    // View mode: 'dialogue' | 'chaining' | 'roleplay' | 'starters' | 'vocabulary'
    const [activeTab, setActiveTab] = useState<'dialogue' | 'chaining' | 'roleplay' | 'starters' | 'vocabulary'>('dialogue');
    const [selectedAltPerTurn, setSelectedAltPerTurn] = useState<Record<string, number>>({});

    // Collapsible Briefing Card State
    const [isBriefingExpanded, setIsBriefingExpanded] = useState<boolean>(true);

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
            const matchesSearch = !searchQuery || 
                c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                c.titleBn.includes(searchQuery) ||
                (c.briefing?.setting && c.briefing.setting.toLowerCase().includes(searchQuery.toLowerCase()));
            return matchesLevel && matchesCategory && matchesSearch;
        });
    }, [levelFilter, categoryFilter, searchQuery]);

    // Stop audio & reset roleplay on situation change
    useEffect(() => {
        stopAutoPlay();
        setRoleplayTurnIndex(0);
        setSpokenTranscript('');
        setTurnAccuracy(null);
        setActiveTurnMicId(null);
        setIsRecording(false);
        setSelectedAltPerTurn({});
        if (typeof window !== 'undefined') window.speechSynthesis?.cancel();
    }, [selectedId]);

    // Play Audio with natural pitch variations for Speaker A and B
    const playAudio = (text: string, pitch = 1.0, rate = 0.95, onEndCallback?: () => void) => {
        if (typeof window === 'undefined') return;
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-GB';
        utterance.rate = rate;
        utterance.pitch = pitch;
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

        const pitch = currentTurn.role === 'A' ? 1.0 : 1.15;
        playAudio(currentTurn.en, pitch, 0.95, () => {
            autoPlayIndexRef.current++;
            setTimeout(() => {
                playNextTurnInSequence();
            }, 600);
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

    const briefing = currentConv.briefing;

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
                            <Sparkles size={12} /> 100% FREE · 40 REAL-LIFE SITUATIONAL CONVERSATIONS
                        </span>
                        <h1 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
                            Real-Life Conversation Lab: <span className="text-teal-400">৪০টি বাস্তব পরিস্থিতি ও লাইভ ডায়ালগ</span>
                        </h1>
                        <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                            কফি শপ, হোটেল, রেস্তোরাঁ, ডাক্তারখানা, এয়ারপোর্ট, জব ইন্টারভিউ, ব্যাংক, কেনাকাটা ও বন্ধুত্ব—প্রতিটি পরিস্থিতির দৃশ্যপট ব্যাখ্যা, চরিত্র ভূমিকা, চ্যাট বাবল ডায়ালগ, উচ্চারণ ও নেটিভ ফ্রেজ।
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
                            <option value="Shopping">কেনাকাটা (Shopping)</option>
                        </select>
                    </div>
                </div>

                {/* Main Content Layout: Sidebar (w-72) | Expanded Workspace (flex-1) */}
                <div className="flex flex-col lg:flex-row items-start gap-6">

                    {/* Left: Situations List with Visual Thumbnails */}
                    <div className="w-full lg:w-72 flex-shrink-0 space-y-3 sticky top-4">
                        <div className="flex items-center justify-between text-xs font-black text-slate-700 px-1">
                            <span>বাস্তব পরিস্থিতি ({filteredConversations.length} টি)</span>
                            <span className="text-[11px] text-teal-600 font-bold">৪০টি পরিস্থিতি</span>
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

                        <div className="space-y-2 max-h-[750px] overflow-y-auto pr-1">
                            {filteredConversations.map(conv => {
                                const isSelected = conv.id === currentConv.id;
                                const isDone = completedConvIds.includes(conv.id);

                                return (
                                    <button
                                        key={conv.id}
                                        onClick={() => setSelectedId(conv.id)}
                                        className={`w-full text-left p-2.5 rounded-2xl border text-xs transition-all flex items-center justify-between gap-2.5 ${
                                            isSelected
                                                ? 'bg-teal-600 border-teal-600 text-white shadow-md shadow-teal-600/20'
                                                : 'bg-white border-slate-200 text-slate-800 hover:border-teal-300 hover:bg-teal-50/20'
                                        }`}
                                    >
                                        <div className="flex items-center gap-2.5 min-w-0">
                                            {/* Thumbnail Image */}
                                            {conv.imageUrl ? (
                                                <div className="w-11 h-11 rounded-xl overflow-hidden flex-shrink-0 border border-black/10 relative">
                                                    <img
                                                        src={conv.imageUrl}
                                                        alt={conv.title}
                                                        loading="lazy"
                                                        decoding="async"
                                                        className="w-full h-full object-cover"
                                                    />
                                                    <span className={`absolute bottom-0 right-0 text-[9px] font-black px-1 rounded-tl ${
                                                        isSelected ? 'bg-white text-teal-800' : 'bg-black/70 text-white'
                                                    }`}>
                                                        #{conv.number}
                                                    </span>
                                                </div>
                                            ) : (
                                                <span className={`flex h-9 w-9 items-center justify-center rounded-xl text-xs font-black flex-shrink-0 ${
                                                    isSelected ? 'bg-white/20 text-white' : 'bg-teal-50 text-teal-700 border border-teal-200'
                                                }`}>
                                                    {conv.number}
                                                </span>
                                            )}

                                            <div className="min-w-0">
                                                <p className="font-black text-xs truncate leading-snug">{conv.title}</p>
                                                <p className={`text-[10px] font-medium truncate mt-0.5 ${
                                                    isSelected ? 'text-teal-100' : 'text-slate-500'
                                                }`}>
                                                    {conv.titleBn}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex-shrink-0">
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

                    {/* Right: Active Situation Workspace */}
                    <div className="flex-1 min-w-0 space-y-6 w-full">

                        {/* ══════════════════════════════════════════════════════════════
                            SITUATION BANNER & SCENE SHOWCASE
                           ══════════════════════════════════════════════════════════════ */}
                        <div className="bg-white rounded-3xl border border-slate-200 shadow-xs overflow-hidden">
                            {/* Scene Banner Image */}
                            <div className="relative h-48 sm:h-64 w-full bg-slate-900 overflow-hidden">
                                {currentConv.imageUrl && (
                                    <img
                                        src={currentConv.imageUrl}
                                        alt={currentConv.title}
                                        loading="lazy"
                                        decoding="async"
                                        className="w-full h-full object-cover opacity-85 hover:scale-105 transition-transform duration-700"
                                    />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
                                
                                <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
                                    <div className="flex flex-wrap items-center gap-2">
                                        <span className="text-[11px] font-black px-3 py-1 rounded-full bg-white/90 text-slate-900 shadow-sm backdrop-blur-md uppercase tracking-wider">
                                            পরিস্থিতি #{currentConv.number} · {currentConv.category}
                                        </span>
                                        <span className="text-[11px] font-bold text-white bg-black/40 border border-white/20 backdrop-blur-md px-3 py-1 rounded-full">
                                            লেভেল: {currentConv.level}
                                        </span>
                                    </div>

                                    <button
                                        onClick={() => markConvDone(currentConv.id)}
                                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-black transition backdrop-blur-md ${
                                            completedConvIds.includes(currentConv.id)
                                                ? 'bg-emerald-500 text-white'
                                                : 'bg-white/90 text-slate-800 hover:bg-white shadow-xs'
                                        }`}
                                    >
                                        <CheckCircle2 size={14} />
                                        <span>{completedConvIds.includes(currentConv.id) ? 'কমপ্লিট ✓' : 'সম্পন্ন মার্ক করুন (+৫০ XP)'}</span>
                                    </button>
                                </div>

                                <div className="absolute bottom-4 left-4 right-4">
                                    <h2 className="text-xl sm:text-3xl font-black text-white tracking-tight drop-shadow-md">
                                        {currentConv.title}
                                    </h2>
                                    <p className="text-xs sm:text-base text-teal-300 font-bold mt-0.5 drop-shadow-sm">
                                        {currentConv.titleBn}
                                    </p>
                                    {briefing?.setting && (
                                        <div className="inline-flex items-center gap-1.5 text-xs text-slate-200 mt-2 bg-black/50 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10">
                                            <MapPin size={13} className="text-teal-400 flex-shrink-0" />
                                            <span className="truncate"><b>স্থান ও পরিবেশ:</b> {briefing.setting}</span>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* ══════════════════════════════════════════════════════════════
                                SITUATION BRIEFING & GUIDE (পরিস্থিতি বুঝিয়ে দাও)
                               ══════════════════════════════════════════════════════════════ */}
                            {briefing && (
                                <div className="p-5 sm:p-7 border-t border-slate-100 bg-gradient-to-b from-slate-50/70 to-white">
                                    <div className="flex items-center justify-between pb-3 border-b border-slate-200/80 mb-4">
                                        <div className="flex items-center gap-2">
                                            <div className="w-8 h-8 rounded-xl bg-teal-500/10 text-teal-700 flex items-center justify-center">
                                                <Compass size={18} />
                                            </div>
                                            <div>
                                                <h3 className="text-sm sm:text-base font-black text-slate-900">
                                                    পরিস্থিতি ব্রিফিং ও কালচারাল গাইড (Situation Briefing)
                                                </h3>
                                                <p className="text-[11px] text-slate-500">
                                                    কথা শুরু করার আগে এই দৃশ্যপটের নিয়ম, চরিত্র ও উদ্দেশ্য জেনে নিন
                                                </p>
                                            </div>
                                        </div>

                                        <button
                                            onClick={() => setIsBriefingExpanded(!isBriefingExpanded)}
                                            className="text-xs font-bold text-slate-500 hover:text-slate-800 flex items-center gap-1 bg-white border border-slate-200 px-2.5 py-1 rounded-lg shadow-2xs"
                                        >
                                            <span>{isBriefingExpanded ? 'সংক্ষেপ করুন' : 'বিস্তারিত দেখুন'}</span>
                                            {isBriefingExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                                        </button>
                                    </div>

                                    {isBriefingExpanded && (
                                        <div className="space-y-5 animate-in fade-in duration-300">
                                            {/* Character Breakdown: Role A vs Role B */}
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                {/* Role A Card */}
                                                <div className="p-4 rounded-2xl bg-white border border-purple-200 shadow-2xs relative overflow-hidden">
                                                    <div className="absolute top-0 left-0 w-1.5 h-full bg-[#5B4DFB]" />
                                                    <div className="flex items-center gap-2.5 mb-2">
                                                        <div className="w-8 h-8 rounded-full bg-[#5B4DFB] text-white font-black text-xs flex items-center justify-center flex-shrink-0 shadow-2xs">
                                                            A
                                                        </div>
                                                        <div>
                                                            <div className="flex items-center gap-1.5">
                                                                <span className="text-xs font-black text-slate-900">{briefing.roleA.name}</span>
                                                                <span className="text-[10px] font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded-full border border-purple-200">
                                                                    {briefing.roleA.titleBn}
                                                                </span>
                                                            </div>
                                                            <span className="text-[10px] text-slate-400 font-bold uppercase">চরিত্র A · স্পিকার</span>
                                                        </div>
                                                    </div>
                                                    <p className="text-xs text-slate-600 leading-relaxed font-medium">
                                                        <b>ভূমিকা ও লক্ষ্য:</b> {briefing.roleA.descBn}
                                                    </p>
                                                </div>

                                                {/* Role B Card */}
                                                <div className="p-4 rounded-2xl bg-white border border-emerald-200 shadow-2xs relative overflow-hidden">
                                                    <div className="absolute top-0 left-0 w-1.5 h-full bg-[#10B981]" />
                                                    <div className="flex items-center gap-2.5 mb-2">
                                                        <div className="w-8 h-8 rounded-full bg-[#10B981] text-white font-black text-xs flex items-center justify-center flex-shrink-0 shadow-2xs">
                                                            B
                                                        </div>
                                                        <div>
                                                            <div className="flex items-center gap-1.5">
                                                                <span className="text-xs font-black text-slate-900">{briefing.roleB.name}</span>
                                                                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                                                                    {briefing.roleB.titleBn}
                                                                </span>
                                                            </div>
                                                            <span className="text-[10px] text-slate-400 font-bold uppercase">চরিত্র B · রেসপন্ডার</span>
                                                        </div>
                                                    </div>
                                                    <p className="text-xs text-slate-600 leading-relaxed font-medium">
                                                        <b>ভূমিকা ও লক্ষ্য:</b> {briefing.roleB.descBn}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Situation Context & Overview */}
                                            <div className="p-4 rounded-2xl bg-teal-50/70 border border-teal-200/80">
                                                <h4 className="text-xs font-black text-teal-900 uppercase tracking-wider flex items-center gap-1.5 mb-1.5">
                                                    <Info size={14} className="text-teal-700" />
                                                    পরিস্থিতি ও কী ঘটবে (Context & Scenario):
                                                </h4>
                                                <p className="text-xs sm:text-sm text-teal-950 leading-relaxed font-medium">
                                                    {briefing.overviewBn}
                                                </p>
                                            </div>

                                            {/* 3 Politeness & Cultural Tips */}
                                            {briefing.politenessTips && briefing.politenessTips.length > 0 && (
                                                <div>
                                                    <h4 className="text-xs font-black text-slate-800 uppercase tracking-wider flex items-center gap-1.5 mb-2.5">
                                                        <ShieldCheck size={14} className="text-amber-500" />
                                                        শিষ্টাচার ও কালচারাল রুলস (Politeness Rules):
                                                    </h4>
                                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                                                        {briefing.politenessTips.map((tip, idx) => (
                                                            <div key={idx} className="p-3 rounded-xl bg-amber-50/80 border border-amber-200 text-xs text-amber-950 font-medium leading-relaxed flex items-start gap-2">
                                                                <span className="flex h-5 w-5 rounded-full bg-amber-200 text-amber-900 font-black text-[10px] items-center justify-center flex-shrink-0 mt-0.5">
                                                                    {idx + 1}
                                                                </span>
                                                                <span>{tip}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}

                                            {/* Key Vocabulary Pills */}
                                            {briefing.keyVocabulary && briefing.keyVocabulary.length > 0 && (
                                                <div>
                                                    <h4 className="text-xs font-black text-slate-800 uppercase tracking-wider flex items-center gap-1.5 mb-2">
                                                        <BookmarkCheck size={14} className="text-indigo-600" />
                                                        প্রয়োজনীয় ভোকাবুলারি ও উচ্চারণ (Key Vocabulary):
                                                    </h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {briefing.keyVocabulary.map((kv, idx) => (
                                                            <div
                                                                key={idx}
                                                                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs shadow-2xs hover:border-teal-300 transition"
                                                            >
                                                                <button
                                                                    onClick={() => playAudio(kv.word)}
                                                                    className="text-slate-400 hover:text-indigo-600 transition"
                                                                    title="উচ্চারণ শুনুন"
                                                                >
                                                                    <Volume2 size={13} />
                                                                </button>
                                                                <span className="font-black text-slate-900">{kv.word}</span>
                                                                <span className="text-[11px] text-orange-600 font-semibold">{kv.pron}</span>
                                                                <span className="text-[11px] text-slate-500 font-medium">({kv.meaning})</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            )}

                            {/* Navigation Tabs Ribbon & Audio Player */}
                            <div className="p-4 sm:p-5 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 bg-white">
                                <div className="flex flex-wrap gap-1.5">
                                    {[
                                        { id: 'dialogue', label: '💬 চ্যাট ডায়ালগ (Chat)', icon: MessageSquare },
                                        { id: 'chaining', label: '🔗 কথা এগিয়ে নেওয়ার সিক্রেট (Chaining)', icon: Compass },
                                        { id: 'roleplay', label: '🎙️ রোল-প্লে স্পিকিং', icon: UserCheck },
                                        { id: 'starters', label: '🚀 কথা শুরু ও সমাপ্তি', icon: Sparkles },
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
                                                        ? 'bg-[#5B4DFB] text-white shadow-xs font-black'
                                                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                                                }`}
                                            >
                                                <Icon size={14} />
                                                <span>{tab.label}</span>
                                            </button>
                                        );
                                    })}
                                </div>

                                {/* Full Dialogue Auto-Player (Purple Theme matching Lessons) */}
                                {activeTab === 'dialogue' && (
                                    <button
                                        onClick={() => {
                                            if (isAutoPlaying) stopAutoPlay();
                                            else startAutoPlay();
                                        }}
                                        className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition shadow-sm ${
                                            isAutoPlaying
                                                ? 'bg-rose-600 text-white animate-pulse'
                                                : 'bg-[#5B4DFB] text-white hover:bg-indigo-600'
                                        }`}
                                    >
                                        {isAutoPlaying ? <StopCircle size={15} /> : <PlayCircle size={15} />}
                                        <span>{isAutoPlaying ? 'অটো-প্লে থামান' : 'Listen (Full Audio)'}</span>
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* ══════════════════════════════════════════════════════════════
                            TAB 1: COMPLETE CHAT BUBBLE DIALOGUE (EXACT LESSONS UI)
                           ══════════════════════════════════════════════════════════════ */}
                        {activeTab === 'dialogue' && (
                            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs space-y-6">
                                {/* Centered Subtitle */}
                                <div className="text-center pb-3 border-b border-slate-100">
                                    <h3 className="text-base sm:text-lg font-black text-slate-800 tracking-tight">
                                        Situation Dialogue Practice ({currentConv.dialogue.length}টি বাস্তবসম্মত ডায়ালগ)
                                    </h3>
                                    <p className="text-xs text-slate-500 mt-0.5">
                                        স্পিকার A ({briefing?.roleA.name || 'Speaker A'}) ও স্পিকার B ({briefing?.roleB.name || 'Speaker B'}) এর ধারাবাহিক কথোপকথন
                                    </p>
                                </div>

                                {/* Chat Bubbles Layout */}
                                <div className="space-y-6 pt-2">
                                    {currentConv.dialogue.map((turn, tIdx) => {
                                        const isA = turn.role === 'A';
                                        const isPlaying = playingTurnId === turn.id;
                                        const isMicActive = isRecording && activeTurnMicId === turn.id;
                                        const roleTitle = turn.roleTitle || (isA ? briefing?.roleA.titleBn : briefing?.roleB.titleBn) || turn.speaker;

                                        // Alternative expression handling (Dropdown state)
                                        const selectedAltIndex = selectedAltPerTurn[turn.id] ?? 0;
                                        const hasAltSelected = selectedAltIndex > 0 && turn.alternatives && turn.alternatives[selectedAltIndex - 1];
                                        const activeAlt = hasAltSelected ? turn.alternatives![selectedAltIndex - 1] : null;

                                        const displayEn = activeAlt ? activeAlt.en : turn.en;
                                        const displayBn = activeAlt ? activeAlt.bn : turn.bn;
                                        const displayPron = activeAlt ? activeAlt.bn_pron : turn.bn_pron;

                                        return (
                                            <div
                                                key={turn.id || tIdx}
                                                className={`flex items-start gap-3 w-full ${isA ? 'justify-start' : 'justify-end'}`}
                                            >
                                                {/* Left Avatar for Speaker A (Purple #5B4DFB) */}
                                                {isA && (
                                                    <div className="w-9 h-9 rounded-full bg-[#5B4DFB] text-white font-black text-xs flex items-center justify-center flex-shrink-0 mt-1 shadow-2xs">
                                                        A
                                                    </div>
                                                )}

                                                {/* Bubble Container */}
                                                <div className={`p-4 sm:p-5 rounded-2xl max-w-xl w-full transition-all text-left shadow-2xs ${
                                                    isA
                                                        ? 'bg-white border border-slate-200'
                                                        : 'bg-indigo-50/70 border border-indigo-100/90'
                                                } ${isPlaying ? 'ring-2 ring-[#5B4DFB]' : ''}`}>

                                                    {/* Top Header: Role Title Badge + Style Indicator + Audio Button */}
                                                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-black/5">
                                                        <div className="flex items-center gap-2 flex-wrap">
                                                            <span className={`text-[10px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider ${
                                                                isA
                                                                    ? 'bg-purple-100/80 text-purple-800 border border-purple-200'
                                                                    : 'bg-emerald-100/80 text-emerald-800 border border-emerald-200'
                                                            }`}>
                                                                {roleTitle}
                                                            </span>
                                                            <span className="text-[10px] text-slate-400 font-bold">
                                                                #{tIdx + 1}
                                                            </span>
                                                            {activeAlt && (
                                                                <span className="text-[10px] font-black px-2 py-0.5 rounded-md bg-indigo-100 text-indigo-800 border border-indigo-200">
                                                                    🔄 {activeAlt.style.split(' ')[0]}
                                                                </span>
                                                            )}
                                                        </div>

                                                        <button
                                                            onClick={() => playAudio(displayEn, isA ? 1.0 : 1.15, 0.95)}
                                                            className="text-slate-400 hover:text-indigo-600 transition p-1 rounded-lg hover:bg-slate-100 flex-shrink-0"
                                                            title="উচ্চারণ শুনুন"
                                                        >
                                                            <Volume2 size={16} />
                                                        </button>
                                                    </div>

                                                    {/* English Bold Text */}
                                                    <h4 className="font-bold text-slate-900 text-base sm:text-lg leading-snug">
                                                        "{displayEn}"
                                                    </h4>

                                                    {/* Row 2: Bengali Translation */}
                                                    <p className="text-sm text-slate-700 font-medium mt-1.5 leading-relaxed">
                                                        {displayBn}
                                                    </p>

                                                    {/* Row 3: Purple IPA (shown for original) */}
                                                    {!activeAlt && turn.ipa && (
                                                        <p className="text-xs font-mono text-purple-600 mt-1.5">
                                                            IPA: {turn.ipa}
                                                        </p>
                                                    )}

                                                    {/* Row 4: Orange Pronunciation */}
                                                    <p className="text-xs font-semibold text-orange-600 mt-0.5">
                                                        🗣️ উচ্চারণ: {displayPron}
                                                    </p>

                                                    {/* Dropdown Selector for saying the same thing in different styles */}
                                                    {turn.alternatives && turn.alternatives.length > 0 && (
                                                        <div className="mt-3 pt-2.5 border-t border-dashed border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 bg-slate-50/70 p-2 rounded-xl">
                                                            <label className="text-[11px] font-bold text-slate-600 flex items-center gap-1.5 flex-shrink-0">
                                                                <span className="text-indigo-600">🔄</span>
                                                                <span>একই কথা অন্যভাবে বলুন:</span>
                                                            </label>
                                                            <select
                                                                value={selectedAltIndex}
                                                                onChange={(e) => {
                                                                    const val = Number(e.target.value);
                                                                    setSelectedAltPerTurn(prev => ({ ...prev, [turn.id]: val }));
                                                                }}
                                                                className="text-xs font-bold bg-white border border-slate-300 rounded-lg px-2.5 py-1 text-slate-800 focus:outline-none focus:ring-1 focus:ring-[#5B4DFB] cursor-pointer shadow-2xs hover:border-slate-400 transition"
                                                            >
                                                                <option value={0}>✨ মূল বাক্য (Original Dialogue)</option>
                                                                {turn.alternatives.map((alt, aIdx) => (
                                                                    <option key={aIdx} value={aIdx + 1}>
                                                                        {alt.style}
                                                                    </option>
                                                                ))}
                                                            </select>
                                                        </div>
                                                    )}

                                                    {/* Conversation Chaining Insight Pill */}
                                                    {turn.continuationTip && (
                                                        <div className="mt-2 text-[11px] text-indigo-950 bg-indigo-50/90 border border-indigo-200/80 px-2.5 py-1.5 rounded-xl flex items-start gap-1.5 font-medium leading-relaxed">
                                                            <span className="flex-1">{turn.continuationTip}</span>
                                                        </div>
                                                    )}

                                                    {/* Mic Practice Bar */}
                                                    <div className="mt-3 pt-2.5 border-t border-black/5 flex items-center justify-between">
                                                        <button
                                                            onClick={() => {
                                                                if (isMicActive) {
                                                                    if (recognitionRef.current) recognitionRef.current.stop();
                                                                    setIsRecording(false);
                                                                } else {
                                                                    startMic(turn.id, displayEn);
                                                                }
                                                            }}
                                                            className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-lg transition ${
                                                                isMicActive
                                                                    ? 'bg-rose-500 text-white animate-pulse'
                                                                    : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 shadow-2xs'
                                                            }`}
                                                        >
                                                            <Mic size={13} />
                                                            <span>{isMicActive ? 'শুনছি... বলুন' : 'মাইক টেস্ট'}</span>
                                                        </button>

                                                        {activeTurnMicId === turn.id && turnAccuracy !== null && (
                                                            <span className={`text-xs font-black px-2.5 py-0.5 rounded-full ${
                                                                turnAccuracy >= 70 ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                                                            }`}>
                                                                স্কোর: {turnAccuracy}%
                                                            </span>
                                                        )}
                                                    </div>

                                                    {/* Mic Result Display */}
                                                    {activeTurnMicId === turn.id && spokenTranscript && (
                                                        <p className="text-xs text-slate-600 mt-2 bg-slate-50 p-2 rounded-lg border border-slate-200">
                                                            আপনি বলেছেন: <b className="text-slate-900">"{spokenTranscript}"</b>
                                                        </p>
                                                    )}
                                                </div>

                                                {/* Right Avatar for Speaker B (Emerald Green #10B981) */}
                                                {!isA && (
                                                    <div className="w-9 h-9 rounded-full bg-[#10B981] text-white font-black text-xs flex items-center justify-center flex-shrink-0 mt-1 shadow-2xs">
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
                            TAB: CONVERSATION CHAINING SECRETS (কথার পিঠে কথা বাড়ানো)
                           ══════════════════════════════════════════════════════════════ */}
                        {activeTab === 'chaining' && (
                            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs space-y-6">
                                <div className="p-6 rounded-3xl bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-950 text-white space-y-3">
                                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-black uppercase tracking-wider border border-indigo-400/30">
                                        <Compass size={14} />
                                        <span>Master Conversation Chaining</span>
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-black">
                                        কথার পিঠে কথা বাড়ানোর ৪টি সোনালী নিয়ম (The Chaining Secrets)
                                    </h3>
                                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                                        অনেক শিক্ষার্থী ১-২ লাইন বলেই আটকে যান এবং নীরবতা চলে আসে। নেটিভ স্পিকাররা যেভাবে একটি সাধারণ কথা দিয়েও ৩০ মিনিট পর্যন্ত আড্ডা এগিয়ে নেন, তার গোপন ৪টি ফর্মুলা নিচে দেওয়া হলো:
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                                    {/* Rule 1: The Answer + Hook */}
                                    <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200/90 space-y-2.5">
                                        <div className="flex items-center gap-2">
                                            <span className="flex h-6 w-6 rounded-full bg-amber-500 text-white font-black text-xs items-center justify-center flex-shrink-0">
                                                ১
                                            </span>
                                            <h4 className="font-black text-slate-900 text-sm sm:text-base">
                                                The Answer + Hook (উত্তর + নতুন প্রশ্ন)
                                            </h4>
                                        </div>
                                        <p className="text-xs text-slate-700 leading-relaxed font-medium">
                                            কখনো শুধু 'Yes', 'No' বা ১ শব্দে থামবেন না। উত্তরের সাথে সাথে পেছনের কারণ ও অপরপক্ষকে একটি পাল্টা প্রশ্ন ছুঁড়ে দিন।
                                        </p>
                                        <div className="p-3 rounded-xl bg-white border border-amber-200 text-xs space-y-1">
                                            <p className="text-rose-600 font-bold">❌ ভুল পদ্ধতি (Dead End): "Do you like tea?" ➔ "Yes, I do." (কথা শেষ!)</p>
                                            <p className="text-emerald-700 font-bold">✅ নেটিভ পদ্ধতি: "Yes, absolutely! I drink Earl Grey every morning. How do you usually take yours?"</p>
                                        </div>
                                    </div>

                                    {/* Rule 2: Echo & Empathize */}
                                    <div className="p-5 rounded-2xl bg-indigo-50/70 border border-indigo-200/90 space-y-2.5">
                                        <div className="flex items-center gap-2">
                                            <span className="flex h-6 w-6 rounded-full bg-indigo-600 text-white font-black text-xs items-center justify-center flex-shrink-0">
                                                ২
                                            </span>
                                            <h4 className="font-black text-slate-900 text-sm sm:text-base">
                                                Echo & Empathize (প্রতিধ্বনি ও অনুভূতি স্বীকার)
                                            </h4>
                                        </div>
                                        <p className="text-xs text-slate-700 leading-relaxed font-medium">
                                            অপরপক্ষ যা বলেছেন তার মূল একটি শব্দ বা অনুভূতি পুনরাবৃত্তি করে সহানুভূতি দেখান। এতে অপরপক্ষ দ্বিগুণ উৎসাহে কথা বলতে শুরু করবে।
                                        </p>
                                        <div className="p-3 rounded-xl bg-white border border-indigo-200 text-xs space-y-1">
                                            <p className="text-rose-600 font-bold">❌ ভুল পদ্ধতি: "My flight got canceled." ➔ "Oh, okay."</p>
                                            <p className="text-emerald-700 font-bold">✅ নেটিভ পদ্ধতি: "Canceled? Oh no, that's such a nightmare! Were you able to rebook with customer service?"</p>
                                        </div>
                                    </div>

                                    {/* Rule 3: Bridge & Pivot */}
                                    <div className="p-5 rounded-2xl bg-teal-50/70 border border-teal-200/90 space-y-2.5">
                                        <div className="flex items-center gap-2">
                                            <span className="flex h-6 w-6 rounded-full bg-teal-600 text-white font-black text-xs items-center justify-center flex-shrink-0">
                                                ৩
                                            </span>
                                            <h4 className="font-black text-slate-900 text-sm sm:text-base">
                                                Bridge & Pivot (সেতু তৈরি ও মোড় ঘোরানো)
                                            </h4>
                                        </div>
                                        <p className="text-xs text-slate-700 leading-relaxed font-medium">
                                            একটি বিষয় শেষ হয়ে এলে অপ্রস্তুত না হয়ে 'Speaking of which...', 'That reminds me...', 'By the way...' বলে প্রাসঙ্গিক নতুন বিষয়ে চলে যান।
                                        </p>
                                        <div className="p-3 rounded-xl bg-white border border-teal-200 text-xs space-y-1">
                                            <p className="text-slate-800 font-semibold">🔗 সেতু ফ্রেজ: "Speaking of weekend plans, have you checked the new gallery downtown?"</p>
                                            <p className="text-teal-800 font-bold">সুবিধা: কোনো ধরনের অস্বস্তিকর নীরবতা ছাড়াই আলোচনা সম্পূর্ণ নতুন দিকে মোড় নেয়।</p>
                                        </div>
                                    </div>

                                    {/* Rule 4: Open-Door Closer */}
                                    <div className="p-5 rounded-2xl bg-purple-50/70 border border-purple-200/90 space-y-2.5">
                                        <div className="flex items-center gap-2">
                                            <span className="flex h-6 w-6 rounded-full bg-purple-600 text-white font-black text-xs items-center justify-center flex-shrink-0">
                                                ৪
                                            </span>
                                            <h4 className="font-black text-slate-900 text-sm sm:text-base">
                                                Open-Door Closer (খোলা দরজায় সমাপ্তি)
                                            </h4>
                                        </div>
                                        <p className="text-xs text-slate-700 leading-relaxed font-medium">
                                            বিদায় নেওয়ার সময় 'Bye' বলেই শেষ করবেন না। ভবিষ্যতে পুনরায় কথা হওয়ার বা খোঁজ নেওয়ার দরজা সবসময় খোলা রেখে ইতিবাচক সমাপ্তি টানুন।
                                        </p>
                                        <div className="p-3 rounded-xl bg-white border border-purple-200 text-xs space-y-1">
                                            <p className="text-rose-600 font-bold">❌ শীতল বিদায়: "Okay, bye."</p>
                                            <p className="text-purple-900 font-bold">✅ উষ্ণ বিদায়: "It was so wonderful chatting with you! Let's definitely catch up again next week. Take care!"</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Current Situation Chaining Walkthrough */}
                                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                                    <h4 className="font-black text-slate-900 text-sm flex items-center gap-2">
                                        <Sparkles size={16} className="text-[#5B4DFB]" />
                                        চলতি পরিস্থিতি ({currentConv.title}): কীভাবে কথাগুলো একের পর এক এগিয়েছে?
                                    </h4>
                                    <div className="space-y-2">
                                        {currentConv.dialogue.map((turn, idx) => (
                                            <div key={idx} className="p-3 rounded-xl bg-white border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                                                <div className="flex items-center gap-2">
                                                    <span className={`px-2 py-0.5 rounded-md font-black text-[10px] ${
                                                        turn.role === 'A' ? 'bg-purple-100 text-purple-800' : 'bg-emerald-100 text-emerald-800'
                                                    }`}>
                                                        #{idx + 1} {turn.roleTitle || turn.speaker}
                                                    </span>
                                                    <span className="font-bold text-slate-900 line-clamp-1">"{turn.en}"</span>
                                                </div>
                                                <span className="text-[11px] text-indigo-700 font-medium bg-indigo-50 px-2 py-0.5 rounded-lg flex-shrink-0">
                                                    {turn.continuationTip}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
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
                                                userRole === 'A' ? 'bg-[#5B4DFB] text-white shadow-xs' : 'text-slate-300 hover:text-white'
                                            }`}
                                        >
                                            চরিত্র A ({briefing?.roleA.name || 'Speaker A'})
                                        </button>
                                        <button
                                            onClick={() => {
                                                setUserRole('B');
                                                setRoleplayTurnIndex(0);
                                            }}
                                            className={`px-3.5 py-2 rounded-lg text-xs font-black transition ${
                                                userRole === 'B' ? 'bg-[#10B981] text-white shadow-xs' : 'text-slate-300 hover:text-white'
                                            }`}
                                        >
                                            চরিত্র B ({briefing?.roleB.name || 'Speaker B'})
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
                                                        {isUserTurn ? '🎯 আপনার বলার পালা (Your Turn)' : `🤖 অপর পক্ষের পালা (${currentTurn.roleTitle || currentTurn.speaker})`}
                                                    </span>
                                                    <span className="text-xs text-slate-500 font-bold">
                                                        ধাপ {roleplayTurnIndex + 1} / {currentConv.dialogue.length}
                                                    </span>
                                                </div>

                                                <button
                                                    onClick={() => playAudio(currentTurn.en, currentTurn.role === 'A' ? 1.0 : 1.15)}
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
                                                <span className="text-xs sm:text-sm font-mono text-purple-700 bg-purple-50 border border-purple-200 px-2.5 py-0.5 rounded-lg">
                                                    IPA: {currentTurn.ipa}
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
                                                        onClick={() => playAudio(currentTurn.en, currentTurn.role === 'A' ? 1.0 : 1.15)}
                                                        className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-black bg-[#5B4DFB] text-white hover:bg-indigo-600 transition flex items-center gap-1.5"
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

                                {/* Follow-Ups */}
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
