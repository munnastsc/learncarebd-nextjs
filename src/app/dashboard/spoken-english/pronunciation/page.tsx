'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowLeft, Mic, Square, Sparkles, CheckCircle2, AlertTriangle, RefreshCw, Lock } from 'lucide-react';
import { useSubscription } from '../../../../components/SubscriptionGuard';

type PracticeSentence = {
    id: string;
    text: string;
    ipa: string;
    bangla: string;
};

const PRACTICE_SENTENCES: PracticeSentence[] = [
    { id: 'p1', text: 'Hello, how can I help you today?', ipa: '/həˈləʊ haʊ kæn aɪ help juː təˈdeɪ/', bangla: 'হ্যালো, আজ আমি আপনাকে কীভাবে সাহায্য করতে পারি?' },
    { id: 'p2', text: 'I am practicing my English speaking skills.', ipa: '/aɪ æm ˈpræktɪsɪŋ maɪ ˈɪŋɡlɪʃ ˈspiːkɪŋ skɪlz/', bangla: 'আমি আমার ইংরেজি বলার দক্ষতা অনুশীলন করছি।' },
    { id: 'p3', text: 'What is the weather like in London right now?', ipa: '/wɒt ɪz ðə ˈweðə laɪk ɪn ˈlʌndən raɪt naʊ/', bangla: 'এখন লন্ডনের আবহাওয়া কেমন?' },
    { id: 'p4', text: 'Success depends on continuous learning and hard work.', ipa: '/səkˈses dɪˈpendz ɒn kənˈtɪnjuəs ˈlɜːnɪŋ ænd hɑːd wɜːk/', bangla: 'সাফল্য ক্রমাগত শেখা এবং কঠোর পরিশ্রমের ওপর নির্ভর করে।' },
    { id: 'p5', text: 'Could you please speak a little more slowly?', ipa: '/kʊd juː pliːz spiːk ə ˈlɪtl mɔː ˈsləʊli/', bangla: 'দয়া করে আরেকটু আস্তে কথা বলবেন কি?' },
    { id: 'p6', text: 'I would like to make a reservation for dinner tonight.', ipa: '/aɪ wʊd laɪk tuː meɪk ə ˌrezəˈveɪʃn fɔː ˈdɪnə təˈnaɪt/', bangla: 'আমি আজ রাতে ডিনারের জন্য একটি টেবিল বুক করতে চাই।' }
];

export default function PronunciationPage() {
    const { isTrial } = useSubscription();
    const [selectedIdx, setSelectedIdx] = useState(0);
    const [isRecording, setIsRecording] = useState(false);
    const [transcript, setTranscript] = useState('');
    const [recognitionSupported, setRecognitionSupported] = useState(true);
    const [score, setScore] = useState<number | null>(null);
    const [wordDiffs, setWordDiffs] = useState<{ word: string; correct: boolean }[]>([]);

    const recognitionRef = useRef<any>(null);

    const targetSentence = PRACTICE_SENTENCES[selectedIdx];
    const isLocked = isTrial && selectedIdx >= 3;

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
            if (!SpeechRecognition) {
                setRecognitionSupported(false);
            } else {
                const rec = new SpeechRecognition();
                rec.continuous = false;
                rec.interimResults = false;
                rec.lang = 'en-US';

                rec.onstart = () => {
                    setIsRecording(true);
                    setTranscript('');
                    setScore(null);
                    setWordDiffs([]);
                };

                rec.onresult = (event: any) => {
                    const resultText = event.results[0][0].transcript;
                    setTranscript(resultText);
                    evaluatePronunciation(resultText);
                };

                rec.onerror = (event: any) => {
                    console.error('Speech recognition error:', event.error);
                    setIsRecording(false);
                };

                rec.onend = () => {
                    setIsRecording(false);
                };

                recognitionRef.current = rec;
            }
        }
    }, [selectedIdx]);

    function evaluatePronunciation(spoken: string) {
        const cleanText = (str: string) => str.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g, '').trim();
        
        const targetWords = cleanText(targetSentence.text).split(/\s+/);
        const spokenWords = cleanText(spoken).split(/\s+/);

        let matches = 0;
        const diffs = targetWords.map(targetWord => {
            const indexInSpoken = spokenWords.indexOf(targetWord);
            if (indexInSpoken !== -1) {
                matches++;
                // Remove to prevent duplicate matches on same spoken word
                spokenWords.splice(indexInSpoken, 1);
                return { word: targetWord, correct: true };
            }
            return { word: targetWord, correct: false };
        });

        setWordDiffs(diffs);
        const accuracy = Math.round((matches / targetWords.length) * 100);
        setScore(accuracy);
    }

    function toggleRecording() {
        if (!recognitionRef.current) return;
        if (isRecording) {
            recognitionRef.current.stop();
        } else {
            try {
                recognitionRef.current.start();
            } catch (err) {
                console.error('Failed to start recognition:', err);
            }
        }
    }

    return (
        <div className="min-h-screen bg-[#f8fafc] px-4 py-8">
            <div className="mx-auto max-w-3xl">
                {/* Back Link */}
                <Link href="/dashboard/spoken-english" className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-700 mb-6 transition">
                    <ArrowLeft size={14} /> Back to Hub
                </Link>

                {/* Header */}
                <div className="mb-8">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-teal-500/20 bg-teal-50/60 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-teal-600 mb-2">
                        <Sparkles size={10} />
                        Pronunciation checker
                    </span>
                    <h1 className="text-3xl font-black text-slate-900 leading-tight">Smart Pronunciation Lab</h1>
                    <p className="text-xs text-slate-500 mt-1">সঠিক উচ্চারণে বাক্যটি মুখে বলুন এবং এআই দিয়ে নিজের স্পিকিং স্কোর যাচাই করুন।</p>
                </div>

                {!recognitionSupported && (
                    <div className="mb-6 rounded-2xl bg-amber-50 border border-amber-200 p-4 flex items-start gap-3">
                        <AlertTriangle className="text-amber-600 flex-shrink-0 mt-0.5" size={18} />
                        <div>
                            <p className="text-xs font-black text-amber-800">Browser Compatibility Issue</p>
                            <p className="text-[11px] text-amber-700 mt-0.5 leading-relaxed">
                                ভয়েস রিকগনিশন আপনার ব্রাউজারে সাপোর্ট করছে না। সব ফিচার সঠিকভাবে ব্যবহারের জন্য দয়া করে **Google Chrome** বা **Microsoft Edge** ব্রাউজার ব্যবহার করুন।
                            </p>
                        </div>
                    </div>
                )}

                <div className="grid gap-6 md:grid-cols-3">
                    {/* Sentences List */}
                    <div className="md:col-span-1 space-y-2">
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 px-1">Choose Sentence</p>
                        {PRACTICE_SENTENCES.map((s, idx) => {
                            const isLockedSentence = isTrial && idx >= 3;
                            return (
                                <button
                                    key={s.id}
                                    onClick={() => {
                                        setSelectedIdx(idx);
                                        setScore(null);
                                        setTranscript('');
                                        setWordDiffs([]);
                                    }}
                                    className={`w-full text-left p-3.5 rounded-2xl border text-xs font-black transition flex items-center justify-between ${
                                        selectedIdx === idx
                                            ? 'bg-teal-600 border-teal-600 text-white shadow-md shadow-teal-100'
                                            : 'bg-white border-slate-200 text-slate-700 hover:border-teal-400 hover:bg-teal-50/20'
                                    }`}
                                >
                                    <div className="truncate pr-2">
                                        <p className="truncate">{s.text}</p>
                                        <p className={`text-[10px] font-medium truncate mt-0.5 ${selectedIdx === idx ? 'text-teal-100' : 'text-slate-400'}`}>
                                            {s.bangla}
                                        </p>
                                    </div>
                                    {isLockedSentence && <Lock size={11} className={selectedIdx === idx ? 'text-teal-200' : 'text-slate-400'} />}
                                </button>
                            );
                        })}
                    </div>

                    {/* Practice Area */}
                    <div className="md:col-span-2 space-y-4">
                        {isLocked ? (
                            <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm space-y-4">
                                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-amber-500 border border-amber-100">
                                    <Lock size={22} />
                                </div>
                                <div>
                                    <h3 className="text-base font-black text-slate-900">🔒 বাক্য {selectedIdx + 1} লকড!</h3>
                                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                                        আপনি বর্তমানে ফ্রি ট্রায়াল মোডে আছেন। অ্যাডভান্সড বাক্যগুলোর উচ্চারণ প্র্যাকটিস এবং লাইভ স্কোরিং আনলক করতে দয়া করে সাবস্ক্রিপশন নিন।
                                    </p>
                                </div>
                                <Link href="/dashboard/payment?required=spoken" className="inline-flex items-center gap-1.5 rounded-2xl bg-teal-600 px-6 py-3 text-xs font-black text-white hover:bg-teal-500 transition shadow-lg shadow-teal-100">
                                    আনলক করুন ↗
                                </Link>
                            </div>
                        ) : (
                            <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-6">
                                {/* Target Sentence Detail */}
                                <div className="space-y-2">
                                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Target Sentence</p>
                                    <h2 className="text-xl font-extrabold text-slate-900 leading-snug">{targetSentence.text}</h2>
                                    <div className="flex flex-wrap gap-2 items-center">
                                        <span className="text-[11px] font-mono text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-lg border border-indigo-100">
                                            {targetSentence.ipa}
                                        </span>
                                        <span className="text-xs font-bold text-slate-500">
                                            ({targetSentence.bangla})
                                        </span>
                                    </div>
                                </div>

                                {/* Recording Controls */}
                                <div className="pt-6 border-t border-slate-100 flex flex-col items-center justify-center space-y-4">
                                    <button
                                        onClick={toggleRecording}
                                        disabled={!recognitionSupported}
                                        className={`h-16 w-16 rounded-full flex items-center justify-center shadow-lg transition-transform duration-200 active:scale-95 disabled:opacity-50 ${
                                            isRecording
                                                ? 'bg-rose-500 hover:bg-rose-600 text-white animate-pulse'
                                                : 'bg-teal-600 hover:bg-teal-500 text-white'
                                        }`}
                                    >
                                        {isRecording ? <Square size={22} /> : <Mic size={24} />}
                                    </button>
                                    <p className="text-xs font-bold text-slate-650">
                                        {isRecording ? 'Listening... Speak now!' : 'Click to start recording'}
                                    </p>
                                </div>

                                {/* Evaluation Results */}
                                {score !== null && (
                                    <div className="pt-6 border-t border-slate-100 space-y-4">
                                        {/* Score Indicator */}
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Your Pronunciation Score</p>
                                                <p className={`text-3xl font-black ${
                                                    score >= 80 ? 'text-emerald-600' : score >= 50 ? 'text-amber-500' : 'text-rose-500'
                                                }`}>{score}% Accuracy</p>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                {score >= 80 ? (
                                                    <span className="inline-flex items-center gap-1 text-xs font-black text-emerald-600 bg-emerald-50 px-3 py-1 rounded-xl">
                                                        <CheckCircle2 size={14} /> Excellent
                                                    </span>
                                                ) : (
                                                    <span className="inline-flex items-center gap-1 text-xs font-black text-amber-600 bg-amber-50 px-3 py-1 rounded-xl">
                                                        Keep Practicing
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        {/* Highlighted Differences */}
                                        <div className="p-4 bg-slate-50 rounded-2xl border border-slate-150 space-y-2">
                                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Word Analysis</p>
                                            <div className="flex flex-wrap gap-1.5 text-base font-bold">
                                                {wordDiffs.map((wd, i) => (
                                                    <span
                                                        key={i}
                                                        className={`px-1.5 py-0.5 rounded ${
                                                            wd.correct
                                                                ? 'text-emerald-700 bg-emerald-50 border border-emerald-200'
                                                                : 'text-rose-700 bg-rose-50 border border-rose-200'
                                                        }`}
                                                    >
                                                        {wd.word}
                                                    </span>
                                                ))}
                                            </div>
                                            <p className="text-[10px] text-slate-400 mt-2">
                                                * Green words were correctly pronounced. Red words were missing or mispronounced.
                                            </p>
                                        </div>

                                        {/* Spoken Transcript */}
                                        <div className="space-y-1">
                                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Spoken Transcript</p>
                                            <p className="text-xs text-slate-600 bg-slate-50 border border-slate-150 p-3 rounded-xl italic font-medium">
                                                "{transcript}"
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
