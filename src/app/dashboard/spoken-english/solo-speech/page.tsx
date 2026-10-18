'use client';

import { useState, useRef, useEffect, useMemo } from 'react';
import Link from 'next/link';
import {
    ArrowLeft, Mic, MicOff, Play, Pause, RotateCcw, Volume2,
    CheckCircle2, Sparkles, Trophy, Lightbulb, Clock, CheckSquare,
    Shuffle, Layers, MessageSquare, AlertCircle
} from 'lucide-react';

interface SoloTopic {
    id: number;
    title: string;
    titleBn: string;
    category: 'Daily Life' | 'Personal' | 'Opinion & Society' | 'IELTS Style';
    guidingQuestions: string[];
    powerVocabulary: { word: string; meaning: string }[];
    connectorTips: string[];
}

const SOLO_TOPICS: SoloTopic[] = [
    {
        id: 1,
        title: 'Describe Your Morning Routine',
        titleBn: 'আপনার সকালের দৈনন্দিন রুটিনের বর্ণনা দিন',
        category: 'Daily Life',
        guidingQuestions: [
            'What time do you usually wake up?',
            'What is the very first thing you do after getting out of bed?',
            'Do you prefer tea or coffee in the morning?',
            'How do you prepare mentally or physically for the day?'
        ],
        powerVocabulary: [
            { word: 'Early riser', meaning: 'ভোরবেলা ঘুম থেকে ওঠা ব্যক্তি' },
            { word: 'Freshen up', meaning: 'হাত-মুখ ধুয়ে সতেজ হওয়া' },
            { word: 'Kick-start', meaning: 'উদ্যমের সাথে শুরু করা' },
            { word: 'Productive', meaning: 'কার্যকর ও ফলপ্রসূ' }
        ],
        connectorTips: ['Usually, I wake up at...', 'Right after that...', 'On top of that...', 'All in all, my morning...']
    },
    {
        id: 2,
        title: 'Why I Want to Master English Fluency',
        titleBn: 'কেন আমি ইংরেজিতে অনর্গল কথা বলা শিখতে চাই',
        category: 'Personal',
        guidingQuestions: [
            'What motivated you to start learning English seriously?',
            'How will speaking fluent English change your career or education?',
            'What has been the biggest challenge for you so far?',
            'How do you plan to practice every single day?'
        ],
        powerVocabulary: [
            { word: 'Global language', meaning: 'বিশ্বব্যাপী যোগাযোগের ভাষা' },
            { word: 'Career prospects', meaning: 'চাকরির উজ্জ্বল সম্ভাবনা' },
            { word: 'Overcome hesitation', meaning: 'মনের দ্বিধা-দ্বন্দ্ব কাটিয়ে ওঠা' },
            { word: 'Step out of comfort zone', meaning: 'চ্যালেঞ্জ গ্রহণ করা' }
        ],
        connectorTips: ['To be honest...', 'The primary reason is...', 'Furthermore...', 'I strongly believe that...']
    },
    {
        id: 3,
        title: 'My Favourite Comfort Food and Memories',
        titleBn: 'আমার প্রিয় খাবার এবং এর সাথে জড়িয়ে থাকা স্মৃতি',
        category: 'Daily Life',
        guidingQuestions: [
            'What is your all-time favourite dish or comfort meal?',
            'Who cooks it the best (you, your mother, or a restaurant)?',
            'How does it taste and smell when fresh?',
            'Why does this particular food make you feel happy?'
        ],
        powerVocabulary: [
            { word: 'Mouth-watering', meaning: 'মুখে জল আসার মতো সুস্বাদু' },
            { word: 'Authentic flavour', meaning: 'খাঁটি স্বাদ ও গন্ধ' },
            { word: 'Home-cooked meal', meaning: 'বাসায় তৈরি স্বাস্থ্যকর খাবার' },
            { word: 'Reminds me of', meaning: 'স্মৃতি মনে করিয়ে দেয়' }
        ],
        connectorTips: ['Whenever I think of...', 'It tastes absolutely...', 'What makes it special is...', 'In short...']
    },
    {
        id: 4,
        title: 'City Life vs Village Life: Which Do You Prefer?',
        titleBn: 'শহরের জীবন বনাম গ্রামের জীবন: আপনি কোনটি পছন্দ করেন?',
        category: 'Opinion & Society',
        guidingQuestions: [
            'Where do you currently live and do you like it?',
            'What are the advantages of living in a bustling city?',
            'What makes countryside/village life peaceful and healthy?',
            'Which one would you choose to settle down in the future?'
        ],
        powerVocabulary: [
            { word: 'Fast-paced lifestyle', meaning: 'দ্রুতগতির কর্মব্যস্ত জীবন' },
            { word: 'Serene atmosphere', meaning: 'শান্ত ও নিরিবিলি পরিবেশ' },
            { word: 'Modern amenities', meaning: 'আধুনিক সুযোগ-সুবিধা' },
            { word: 'Pollution-free', meaning: 'দূষণমুক্ত ও স্বাস্থ্যকর' }
        ],
        connectorTips: ['On one hand...', 'On the other hand...', 'However, in my opinion...', 'Ultimately, I would pick...']
    },
    {
        id: 5,
        title: 'The Impact of Social Media on Young Generation',
        titleBn: 'তরুণ প্রজন্মের ওপর সোশ্যাল মিডিয়ার প্রভাব',
        category: 'Opinion & Society',
        guidingQuestions: [
            'Which social media app do you spend the most time on?',
            'What are the positive benefits of staying connected online?',
            'What are the dangers (addiction, time waste, comparison)?',
            'How can youth use social media productively?'
        ],
        powerVocabulary: [
            { word: 'Double-edged sword', meaning: 'উভয়মুখী তলোয়ার (ভালো-মন্দ দুই প্রভাব)' },
            { word: 'Digital footprint', meaning: 'অনলাইনে ডিজিটাল উপস্থিতি' },
            { word: 'Distraction', meaning: 'মনোযোগ বিঘ্নকারী বস্তু' },
            { word: 'Stay mindful', meaning: 'সচেতন ও সতর্ক থাকা' }
        ],
        connectorTips: ['Without a doubt...', 'Although it helps us...', 'The major downside is...', 'To conclude...']
    },
    {
        id: 6,
        title: 'A Person Who Has Deeply Inspired Me',
        titleBn: 'যে ব্যক্তি আমাকে জীবনে সবচেয়ে বেশি অনুপ্রাণিত করেছে',
        category: 'Personal',
        guidingQuestions: [
            'Who is this person (parent, teacher, historical figure, leader)?',
            'What specific qualities do you admire in them?',
            'How have they influenced your way of thinking or working?',
            'What is one lesson you learned from their life?'
        ],
        powerVocabulary: [
            { word: 'Role model', meaning: 'আদর্শ ব্যক্তিত্ব' },
            { word: 'Resilience', meaning: 'কঠিন পরিস্থিতিতে টিকে থাকার মানসিক শক্তি' },
            { word: 'Selfless nature', meaning: 'নিঃস্বার্থ স্বভাব' },
            { word: 'Leave an impact', meaning: 'গভীর ছাপ ফেলে যাওয়া' }
        ],
        connectorTips: ['The person I admire most is...', 'He/She taught me that...', 'Even during tough times...', 'That is why...']
    },
    {
        id: 7,
        title: 'A Memorable Journey or Trip I Took',
        titleBn: 'একটি স্মরণীয় ভ্রমণ যা আমি কখনো ভুলব না',
        category: 'IELTS Style',
        guidingQuestions: [
            'Where did you go and when did this trip happen?',
            'Who travelled with you and how did you get there?',
            'What interesting things did you see or do there?',
            'Why does this trip hold a special place in your memory?'
        ],
        powerVocabulary: [
            { word: 'Breathtaking scenery', meaning: 'চোখ জুড়ানো অপরূপ প্রাকৃতিক দৃশ্য' },
            { word: 'Unforgettable experience', meaning: 'অবিস্মরণীয় অভিজ্ঞতা' },
            { word: 'Local cuisine', meaning: 'স্থানীয় ঐতিহ্যবাহী খাবার' },
            { word: 'Cherish memories', meaning: 'স্মৃতি বুকে লালন করা' }
        ],
        connectorTips: ['A few months ago...', 'As soon as we arrived...', 'The highlight of the journey was...', 'I will always cherish...']
    },
    {
        id: 8,
        title: 'How I Spend My Ideal Weekend or Day Off',
        titleBn: 'ছুটির দিন আমি যেভাবে কাটাতে সবচেয়ে বেশি পছন্দ করি',
        category: 'Daily Life',
        guidingQuestions: [
            'How does your weekend differ from regular working days?',
            'Do you prefer staying indoors or going outside with friends?',
            'What hobbies or entertainment do you enjoy on off-days?',
            'How do you recharge your energy for the upcoming week?'
        ],
        powerVocabulary: [
            { word: 'Unwind and recharge', meaning: 'ক্লান্তি দূর করে বিশ্রাম নেওয়া' },
            { word: 'Catch up on sleep', meaning: 'ঘুমের ঘাটতি পূরণ করা' },
            { word: 'Quality time', meaning: 'প্রিয়জনদের সাথে সুন্দর সময় কাটানো' },
            { word: 'Leisure activity', meaning: 'অবসরকালীন আনন্দদায়ক কাজ' }
        ],
        connectorTips: ['For me, an ideal weekend...', 'First of all...', 'Later in the afternoon...', 'This helps me feel...']
    }
];

export default function SoloSpeechPage() {
    const [selectedTopic, setSelectedTopic] = useState<SoloTopic>(SOLO_TOPICS[0]);
    const [stage, setStage] = useState<'prep' | 'speaking' | 'review'>('prep');

    // Timers
    const [prepTimeLeft, setPrepTimeLeft] = useState(15);
    const [speechTimeLeft, setSpeechTimeLeft] = useState(60);
    const [isTimerRunning, setIsTimerRunning] = useState(false);

    // Recording & speech recognition
    const [isRecording, setIsRecording] = useState(false);
    const [transcript, setTranscript] = useState('');
    const [recordedAudioUrl, setRecordedAudioUrl] = useState<string | null>(null);

    // Audio player
    const [isPlayingRecorded, setIsPlayingRecorded] = useState(false);

    // Self-assessment checklist
    const [checklist, setChecklist] = useState<Record<number, boolean>>({
        1: false,
        2: false,
        3: false,
        4: false,
        5: false
    });

    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const audioChunksRef = useRef<Blob[]>([]);
    const recognitionRef = useRef<any>(null);
    const recordedAudioElementRef = useRef<HTMLAudioElement | null>(null);
    const timerIntervalRef = useRef<NodeJS.Timeout | null>(null);

    // Pick random topic
    const pickRandomTopic = () => {
        const pool = SOLO_TOPICS.filter(t => t.id !== selectedTopic.id);
        const random = pool[Math.floor(Math.random() * pool.length)];
        handleSelectTopic(random);
    };

    const handleSelectTopic = (topic: SoloTopic) => {
        resetEverything();
        setSelectedTopic(topic);
    };

    const resetEverything = () => {
        if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
        if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
            mediaRecorderRef.current.stop();
        }
        if (recognitionRef.current) {
            try { recognitionRef.current.stop(); } catch { /* ignore */ }
        }
        if (recordedAudioUrl) {
            URL.revokeObjectURL(recordedAudioUrl);
            setRecordedAudioUrl(null);
        }

        setStage('prep');
        setPrepTimeLeft(15);
        setSpeechTimeLeft(60);
        setIsTimerRunning(false);
        setIsRecording(false);
        setTranscript('');
        setIsPlayingRecorded(false);
        setChecklist({ 1: false, 2: false, 3: false, 4: false, 5: false });
    };

    // Prep countdown
    const startPrepTimer = () => {
        setIsTimerRunning(true);
        setPrepTimeLeft(15);

        timerIntervalRef.current = setInterval(() => {
            setPrepTimeLeft(prev => {
                if (prev <= 1) {
                    clearInterval(timerIntervalRef.current!);
                    startSpeakingStage();
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
    };

    // Start speaking stage
    const startSpeakingStage = () => {
        if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
        setStage('speaking');
        setSpeechTimeLeft(60);
        setIsTimerRunning(true);

        startRecordingSession();

        // 60-second speech countdown
        timerIntervalRef.current = setInterval(() => {
            setSpeechTimeLeft(prev => {
                if (prev <= 1) {
                    clearInterval(timerIntervalRef.current!);
                    finishSpeech();
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
    };

    // Audio & Web Speech API recorder
    const startRecordingSession = async () => {
        setTranscript('');
        audioChunksRef.current = [];

        // 1. Microphone Audio Recording
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            const mediaRecorder = new MediaRecorder(stream);
            mediaRecorderRef.current = mediaRecorder;

            mediaRecorder.ondataavailable = e => {
                if (e.data.size > 0) audioChunksRef.current.push(e.data);
            };

            mediaRecorder.onstop = () => {
                const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
                const audioUrl = URL.createObjectURL(audioBlob);
                setRecordedAudioUrl(audioUrl);
                stream.getTracks().forEach(track => track.stop());
            };

            mediaRecorder.start();
            setIsRecording(true);
        } catch (err) {
            console.warn('Microphone error:', err);
        }

        // 2. Web Speech Recognition for live transcript
        const SpeechRec = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
        if (SpeechRec) {
            const recognition = new SpeechRec();
            recognition.continuous = true;
            recognition.interimResults = true;
            recognition.lang = 'en-US';

            recognition.onresult = (e: any) => {
                let current = '';
                for (let i = 0; i < e.results.length; i++) {
                    current += e.results[i][0].transcript + ' ';
                }
                setTranscript(current.trim());
            };

            recognition.onerror = () => {};
            try {
                recognition.start();
                recognitionRef.current = recognition;
            } catch { /* ignore */ }
        }
    };

    const finishSpeech = () => {
        if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
        setIsTimerRunning(false);

        if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
            mediaRecorderRef.current.stop();
        }
        if (recognitionRef.current) {
            try { recognitionRef.current.stop(); } catch { /* ignore */ }
        }
        setIsRecording(false);
        setStage('review');

        // Add 50 XP
        const currentXp = Number(localStorage.getItem('spoken_xp') || 120);
        localStorage.setItem('spoken_xp', String(currentXp + 50));
    };

    const toggleChecklistItem = (id: number) => {
        setChecklist(prev => ({ ...prev, [id]: !prev[id] }));
    };

    const togglePlayRecordedAudio = () => {
        if (!recordedAudioUrl) return;

        if (!recordedAudioElementRef.current) {
            recordedAudioElementRef.current = new Audio(recordedAudioUrl);
            recordedAudioElementRef.current.onended = () => setIsPlayingRecorded(false);
        }

        if (isPlayingRecorded) {
            recordedAudioElementRef.current.pause();
            setIsPlayingRecorded(false);
        } else {
            recordedAudioElementRef.current.src = recordedAudioUrl;
            recordedAudioElementRef.current.play().catch(() => {});
            setIsPlayingRecorded(true);
        }
    };

    // Word count calculation
    const wordCount = useMemo(() => {
        if (!transcript.trim()) return 0;
        return transcript.trim().split(/\s+/).length;
    }, [transcript]);

    const estimatedWpm = Math.round((wordCount / (60 - speechTimeLeft || 1)) * 60);

    return (
        <div className="min-h-screen bg-[#f8fafc] text-slate-800 pb-24">
            {/* Header */}
            <div className="bg-gradient-to-br from-indigo-950 via-slate-900 to-teal-950 px-5 py-8 text-white shadow-md">
                <div className="mx-auto max-w-5xl">
                    <Link
                        href="/dashboard/spoken-english"
                        className="inline-flex items-center gap-1.5 text-xs text-indigo-300 hover:text-white transition font-bold mb-4"
                    >
                        <ArrowLeft size={15} /> Back to Spoken Hub
                    </Link>

                    <div className="flex flex-wrap items-center justify-between gap-4">
                        <div>
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-teal-300 mb-2">
                                <Sparkles size={12} />
                                100% FREE SOLO PRACTICE SIMULATOR
                            </span>
                            <h1 className="text-2xl lg:text-4xl font-black tracking-tight">
                                ১-মিনিট একক স্পিকিং সিমুলেটর (Solo Impromptu Jam)
                            </h1>
                            <p className="mt-2 text-xs lg:text-sm text-slate-300 max-w-2xl leading-relaxed">
                                কথা বলার পার্টনার নেই? সমস্যা নেই! একটি বিষয় বেছে নিন, ১৫ সেকেন্ড ভাবুন, ৬০ সেকেন্ড অনর্গল বলুন এবং নিজের রেকর্ড করা ভয়েস শুনে মূল্যায়ন করুন।
                            </p>
                        </div>

                        <button
                            onClick={pickRandomTopic}
                            className="inline-flex items-center gap-2 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/15 px-4 py-2.5 text-xs font-bold text-white transition backdrop-blur-sm"
                        >
                            <Shuffle size={14} /> র‍্যান্ডম টপিক বেছে নিন
                        </button>
                    </div>
                </div>
            </div>

            <div className="mx-auto max-w-5xl px-5 py-8 space-y-6">

                {/* Topic Selector Ribbon */}
                <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
                    <p className="text-[11px] font-black uppercase tracking-wider text-slate-400 mb-3 px-1">
                        প্র্যাকটিস করার টপিক নির্বাচন করুন:
                    </p>
                    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
                        {SOLO_TOPICS.map(topic => {
                            const isSelected = selectedTopic.id === topic.id;
                            return (
                                <button
                                    key={topic.id}
                                    onClick={() => handleSelectTopic(topic)}
                                    className={`flex-shrink-0 rounded-2xl px-4 py-2.5 text-left border transition text-xs font-bold ${
                                        isSelected
                                            ? 'bg-indigo-600 border-indigo-600 text-white shadow-sm'
                                            : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-indigo-300'
                                    }`}
                                >
                                    <p className="truncate max-w-[200px]">{topic.title}</p>
                                    <p className={`text-[10px] mt-0.5 truncate max-w-[200px] ${isSelected ? 'text-indigo-200' : 'text-slate-400'}`}>
                                        {topic.titleBn}
                                    </p>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Active Challenge Screen */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                    {/* Left 2 Cols: Main Topic & Timer */}
                    <div className="lg:col-span-2 space-y-5">
                        <div className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-[10px] font-black uppercase tracking-wider text-indigo-700 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full">
                                    Topic #{selectedTopic.id} · {selectedTopic.category}
                                </span>

                                <span className="text-xs font-bold text-slate-400 flex items-center gap-1">
                                    <Clock size={13} /> Target: 60 Seconds
                                </span>
                            </div>

                            <h2 className="text-2xl font-black text-slate-900 leading-tight">
                                {selectedTopic.title}
                            </h2>
                            <p className="text-xs font-bold text-slate-500 mt-1">
                                {selectedTopic.titleBn}
                            </p>

                            {/* Guiding Questions Card */}
                            <div className="mt-5 rounded-2xl bg-indigo-50/60 border border-indigo-100 p-4">
                                <p className="text-xs font-black text-indigo-900 uppercase tracking-wide mb-2 flex items-center gap-1.5">
                                    <Lightbulb size={13} className="text-indigo-600" />
                                    যা যা নিয়ে কথা বলতে পারেন (Idea Prompts):
                                </p>
                                <ul className="space-y-1.5 text-xs text-slate-700">
                                    {selectedTopic.guidingQuestions.map((q, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <span className="flex-shrink-0 h-4 w-4 rounded-full bg-indigo-200 text-indigo-800 text-[10px] font-black flex items-center justify-center mt-0.5">
                                                {i + 1}
                                            </span>
                                            <span>{q}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Speaking Stages & Controls */}
                            <div className="mt-6 border-t border-slate-100 pt-6">

                                {stage === 'prep' && (
                                    <div className="text-center py-4 space-y-4">
                                        <div className="flex flex-col items-center justify-center">
                                            <div className="h-20 w-20 rounded-full border-4 border-indigo-500 flex items-center justify-center mb-2">
                                                <span className="text-2xl font-black text-indigo-600">{prepTimeLeft}s</span>
                                            </div>
                                            <p className="text-xs text-slate-500 font-bold">
                                                {isTimerRunning ? 'মস্তিষ্কে আইডিয়া সাজিয়ে নিন...' : '১৫ সেকেন্ডের চিন্তার প্রস্তুতি'}
                                            </p>
                                        </div>

                                        <div className="flex gap-2 justify-center">
                                            {!isTimerRunning ? (
                                                <button
                                                    onClick={startPrepTimer}
                                                    className="inline-flex items-center gap-2 rounded-2xl bg-indigo-600 px-6 py-3 text-xs font-black text-white hover:bg-indigo-500 transition shadow-md"
                                                >
                                                    <Play size={14} fill="white" /> প্রস্তুতি শুরু করুন (15s)
                                                </button>
                                            ) : (
                                                <button
                                                    onClick={startSpeakingStage}
                                                    className="inline-flex items-center gap-2 rounded-2xl bg-teal-600 px-6 py-3 text-xs font-black text-white hover:bg-teal-500 transition shadow-md"
                                                >
                                                    সরাসরি বলা শুরু করুন ➔
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                )}

                                {stage === 'speaking' && (
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <span className="flex h-3 w-3 rounded-full bg-rose-500 animate-ping" />
                                                <span className="text-xs font-black text-rose-600 uppercase tracking-wider">
                                                    RECORDING LIVE (কথা বলুন)
                                                </span>
                                            </div>
                                            <span className="text-2xl font-black text-slate-900 tabular-nums">
                                                00:{String(speechTimeLeft).padStart(2, '0')}
                                            </span>
                                        </div>

                                        {/* Progress Bar */}
                                        <div className="h-2.5 w-full rounded-full bg-slate-100 overflow-hidden">
                                            <div
                                                className="h-full bg-gradient-to-r from-teal-500 to-indigo-600 transition-all duration-1000"
                                                style={{ width: `${((60 - speechTimeLeft) / 60) * 100}%` }}
                                            />
                                        </div>

                                        {/* Real-time transcript box */}
                                        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 min-h-[100px] text-xs leading-relaxed text-slate-700">
                                            <p className="text-[10px] font-black uppercase tracking-wider text-slate-400 mb-1">
                                                লাইভ ট্রান্সক্রিপ্ট (আপনার কথা):
                                            </p>
                                            {transcript ? (
                                                <p className="font-semibold">{transcript}</p>
                                            ) : (
                                                <p className="text-slate-400 italic">মাইক্রোফোনে স্পষ্ট ও স্বাভাবিক গতিতে কথা বলুন...</p>
                                            )}
                                        </div>

                                        <button
                                            onClick={finishSpeech}
                                            className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-rose-600 py-3 text-xs font-black text-white hover:bg-rose-500 transition shadow-md"
                                        >
                                            <MicOff size={15} /> কথা বলা শেষ করেছি (Finish Now)
                                        </button>
                                    </div>
                                )}

                                {stage === 'review' && (
                                    <div className="space-y-5">
                                        <div className="flex items-center justify-between rounded-2xl bg-emerald-50 border border-emerald-200 p-4">
                                            <div className="flex items-center gap-3">
                                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                                                    <Trophy size={20} />
                                                </div>
                                                <div>
                                                    <h4 className="text-sm font-black text-emerald-900">দারুণ প্রচেষ্টা! +৫০ XP অর্জিত</h4>
                                                    <p className="text-[11px] text-emerald-700">আপনি সফলভাবে একক স্পিকিং সেশন সম্পন্ন করেছেন।</p>
                                                </div>
                                            </div>

                                            <div className="text-right">
                                                <p className="text-[10px] font-bold text-slate-400">শব্দ সংখ্যা</p>
                                                <p className="text-base font-black text-slate-900">{wordCount} words</p>
                                            </div>
                                        </div>

                                        {/* Audio Playback of User's Voice */}
                                        {recordedAudioUrl && (
                                            <div className="rounded-2xl border border-indigo-200 bg-indigo-50/60 p-4 flex items-center justify-between">
                                                <div className="flex items-center gap-2.5">
                                                    <Volume2 size={18} className="text-indigo-600" />
                                                    <div>
                                                        <p className="text-xs font-black text-slate-900">নিজের কণ্ঠ শুনুন</p>
                                                        <p className="text-[10px] text-slate-500">আপনার উচ্চারণ ও বিরতি কেমন হয়েছে খেয়াল করুন।</p>
                                                    </div>
                                                </div>

                                                <button
                                                    onClick={togglePlayRecordedAudio}
                                                    className="inline-flex items-center gap-1.5 rounded-xl bg-indigo-600 px-4 py-2 text-xs font-bold text-white hover:bg-indigo-500 transition shadow"
                                                >
                                                    {isPlayingRecorded ? <Pause size={13} /> : <Play size={13} />}
                                                    {isPlayingRecorded ? 'থামুন' : 'শুনুন'}
                                                </button>
                                            </div>
                                        )}

                                        {/* Transcript display */}
                                        {transcript && (
                                            <div className="rounded-2xl border border-slate-200 bg-white p-4 text-xs leading-relaxed">
                                                <p className="text-[10px] font-black uppercase text-slate-400 tracking-wider mb-1">যা বলেছেন:</p>
                                                <p className="font-semibold text-slate-800">"{transcript}"</p>
                                            </div>
                                        )}

                                        {/* Self-Assessment Checklist */}
                                        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                                            <p className="text-xs font-black text-slate-900 uppercase tracking-wide mb-3">
                                                📋 সেলফ-ইভালুয়েশন চেকলিস্ট (সততার সাথে টিক দিন):
                                            </p>
                                            <div className="space-y-2 text-xs">
                                                {[
                                                    { id: 1, label: 'কথা বলার সময় ৫ সেকেন্ডের বেশি দীর্ঘ নীরবতা ছিল না' },
                                                    { id: 2, label: 'অন্তত ২টি কানেক্টিং ওয়ার্ড (However, Besides, So) ব্যবহার করেছি' },
                                                    { id: 3, label: 'ভয়েসের জোর ও স্পষ্টতা স্বাভাবিক ছিল' },
                                                    { id: 4, label: 'কমপক্ষে ৪-৫টি সম্পূর্ণ বাক্য বলতে পেরেছি' },
                                                    { id: 5, label: 'ভুল হলে তোতলা না করে স্বাভাবিকভাবে এগিয়ে গেছি' }
                                                ].map(item => (
                                                    <button
                                                        key={item.id}
                                                        onClick={() => toggleChecklistItem(item.id)}
                                                        className={`w-full flex items-center gap-2.5 p-2 rounded-xl text-left border transition ${
                                                            checklist[item.id]
                                                                ? 'bg-emerald-50 border-emerald-300 text-emerald-900 font-bold'
                                                                : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                                                        }`}
                                                    >
                                                        <CheckSquare size={15} className={checklist[item.id] ? 'text-emerald-600' : 'text-slate-300'} />
                                                        <span>{item.label}</span>
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Repeat or Next */}
                                        <div className="flex gap-2 justify-center pt-2">
                                            <button
                                                onClick={resetEverything}
                                                className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-100 px-5 py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-200 transition"
                                            >
                                                <RotateCcw size={13} /> এই টপিকটি আবার বলুন
                                            </button>
                                            <button
                                                onClick={pickRandomTopic}
                                                className="rounded-xl bg-indigo-600 px-5 py-2.5 text-xs font-bold text-white hover:bg-indigo-500 transition shadow"
                                            >
                                                নতুন টপিক প্র্যাকটিস করুন ➔
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Right 1 Col: Power Vocabulary & Connecting Words */}
                    <div className="space-y-5">
                        {/* Power Vocab */}
                        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                            <span className="text-[10px] font-black uppercase tracking-wider text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded">
                                টপিকে ব্যবহারের ভোকাবুলারি
                            </span>
                            <h3 className="text-sm font-black text-slate-900 mt-2 mb-3">
                                Power Words
                            </h3>

                            <div className="space-y-2.5">
                                {selectedTopic.powerVocabulary.map((v, i) => (
                                    <div key={i} className="rounded-xl bg-slate-50 border border-slate-100 p-2.5 text-xs">
                                        <p className="font-black text-indigo-700">{v.word}</p>
                                        <p className="text-[11px] text-slate-600 mt-0.5">{v.meaning}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Connector Tips */}
                        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                            <span className="text-[10px] font-black uppercase tracking-wider text-teal-700 bg-teal-50 border border-teal-200 px-2 py-0.5 rounded">
                                বাক্য জোড়া লাগানোর শব্দ
                            </span>
                            <h3 className="text-sm font-black text-slate-900 mt-2 mb-3">
                                Connecting Phrases
                            </h3>

                            <div className="space-y-1.5">
                                {selectedTopic.connectorTips.map((tip, i) => (
                                    <div key={i} className="rounded-xl bg-teal-50/60 border border-teal-100 px-3 py-2 text-xs font-bold text-teal-900">
                                        • "{tip}"
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Scientific Advice */}
                        <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-indigo-50 to-purple-50 p-5 shadow-sm text-xs leading-relaxed text-slate-700 space-y-2">
                            <p className="font-black text-indigo-950 flex items-center gap-1.5">
                                <Sparkles size={14} className="text-indigo-600" /> একা একা ইংরেজি শেখার বৈজ্ঞানিক সূত্র
                            </p>
                            <p>
                                ১. আয়নার সামনে দাঁড়িয়ে বা রুমের ভেতর হেঁটে হেঁটে বলুন।
                            </p>
                            <p>
                                ২. ভুল হলেও থামবেন না, ইংরেজিতেই নিজের ভুল শুধরে কথা চালিয়ে যান।
                            </p>
                            <p>
                                ৩. প্রতিদিন মাত্র ২টি টপিক এভাবে রেকর্ড করুন — মাত্র ২১ দিনে জিভের জড়তা ১০০% দূর হয়ে যাবে!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
