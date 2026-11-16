'use client';

import { useState, useEffect, useRef, useMemo, Suspense } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import {
    ArrowLeft, ExternalLink, Download, CheckCircle2, Maximize, Minimize,
    ChevronDown, Flame, Trophy, Share2, Sparkles, BookOpen, Layers
} from 'lucide-react';
import {
    ACADEMY_LABS_DATA,
    type AcademyLabItem
} from '../../../../../lib/academyLabsData';

function LabViewerContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const fileParam = searchParams.get('file') || 'Real_Life_Everyday_Conversations_100_Master.html';

    const [currentFilename, setCurrentFilename] = useState<string>(fileParam);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
    const [completedLabs, setCompletedLabs] = useState<string[]>([]);
    const [xp, setXp] = useState<number>(0);

    const containerRef = useRef<HTMLDivElement>(null);
    const iframeRef = useRef<HTMLIFrameElement>(null);

    useEffect(() => {
        if (fileParam) {
            setCurrentFilename(fileParam);
            setIsLoading(true);
        }
    }, [fileParam]);

    useEffect(() => {
        try {
            const stored = JSON.parse(localStorage.getItem('academy_labs_completed') || '[]');
            setCompletedLabs(stored);
            const userXp = Number(localStorage.getItem('spoken_xp') || 120);
            setXp(userXp);
        } catch {
            // ignore
        }
    }, []);

    const activeItem = useMemo(() => {
        return ACADEMY_LABS_DATA.find(x => x.filename === currentFilename) || ACADEMY_LABS_DATA[0];
    }, [currentFilename]);

    const isDone = activeItem ? completedLabs.includes(activeItem.id) : false;

    const toggleComplete = () => {
        if (!activeItem) return;
        let updated: string[];
        let delta = 0;
        if (isDone) {
            updated = completedLabs.filter(x => x !== activeItem.id);
            delta = -30;
        } else {
            updated = [...completedLabs, activeItem.id];
            delta = 30;
        }
        setCompletedLabs(updated);
        localStorage.setItem('academy_labs_completed', JSON.stringify(updated));

        const newXp = Math.max(0, xp + delta);
        setXp(newXp);
        localStorage.setItem('spoken_xp', String(newXp));
    };

    const toggleFullscreen = () => {
        if (!containerRef.current) return;
        if (!document.fullscreenElement) {
            containerRef.current.requestFullscreen().catch(() => {});
            setIsFullscreen(true);
        } else {
            document.exitFullscreen().catch(() => {});
            setIsFullscreen(false);
        }
    };

    useEffect(() => {
        const handleFsChange = () => {
            setIsFullscreen(!!document.fullscreenElement);
        };
        document.addEventListener('fullscreenchange', handleFsChange);
        return () => document.removeEventListener('fullscreenchange', handleFsChange);
    }, []);

    const handleSwitchLab = (fname: string) => {
        setCurrentFilename(fname);
        setIsLoading(true);
        router.push(`/dashboard/spoken-english/academy-labs/view?file=${encodeURIComponent(fname)}`);
    };

    return (
        <div ref={containerRef} className="flex flex-col h-screen w-full bg-slate-950 font-sans overflow-hidden">
            {/* Top Interactive Controls Ribbon */}
            <header className="h-16 flex-shrink-0 bg-slate-900 border-b border-slate-800 px-4 sm:px-6 flex items-center justify-between gap-3 text-white z-30">
                {/* Left: Back & Title */}
                <div className="flex items-center gap-3 min-w-0">
                    <Link
                        href="/dashboard/spoken-english/academy-labs"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 border border-slate-700 text-xs font-bold text-slate-300 hover:text-white hover:border-slate-500 transition flex-shrink-0"
                    >
                        <ArrowLeft size={14} />
                        <span className="hidden sm:inline">সকল ল্যাব</span>
                    </Link>

                    <div className="min-w-0">
                        <div className="flex items-center gap-2">
                            <span className="text-[10px] font-black px-2 py-0.5 rounded-md bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 flex-shrink-0">
                                {activeItem?.badge || 'মাস্টার ল্যাব'}
                            </span>
                            <h1 className="text-xs sm:text-sm font-black text-white truncate">
                                {activeItem?.titleBn || activeItem?.title}
                            </h1>
                        </div>
                        <p className="text-[10px] text-slate-400 truncate hidden md:block">
                            {activeItem?.title}
                        </p>
                    </div>
                </div>

                {/* Right: Actions */}
                <div className="flex items-center gap-2 flex-shrink-0">
                    {/* Quick Module Switcher Dropdown */}
                    <div className="relative hidden lg:block">
                        <select
                            value={currentFilename}
                            onChange={(e) => handleSwitchLab(e.target.value)}
                            className="text-xs font-bold bg-slate-800 border border-slate-700 rounded-xl px-3 py-1.5 text-slate-200 focus:outline-none focus:ring-1 focus:ring-indigo-500 cursor-pointer max-w-xs truncate"
                        >
                            {ACADEMY_LABS_DATA.map((item) => (
                                <option key={item.id} value={item.filename}>
                                    {item.categoryBn}: {item.titleBn}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Completion Tracker Button */}
                    <button
                        onClick={toggleComplete}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-black transition border ${
                            isDone
                                ? 'bg-teal-500/20 text-teal-300 border-teal-500/40'
                                : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700'
                        }`}
                        title={isDone ? 'সম্পন্ন হয়েছে' : 'সম্পন্ন মার্ক করুন'}
                    >
                        <CheckCircle2 size={15} className={isDone ? 'fill-teal-400 text-slate-900' : ''} />
                        <span className="hidden sm:inline">{isDone ? 'সম্পন্ন (+৩০ XP)' : 'মার্ক করুন'}</span>
                    </button>

                    {/* Download PDF if available */}
                    {activeItem?.pdfUrl && (
                        <a
                            href={activeItem.pdfUrl}
                            download
                            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/10 text-amber-300 border border-amber-500/30 text-xs font-bold hover:bg-amber-500/20 transition"
                            title="লেকচার শিট পিডিএফ ডাউনলোড করুন"
                        >
                            <Download size={14} />
                            <span className="hidden md:inline">পিডিএফ</span>
                        </a>
                    )}

                    {/* Open in Standalone Tab */}
                    <a
                        href={`/academy-labs/${encodeURIComponent(currentFilename)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition"
                        title="নতুন ফুল স্ক্রিন ট্যাবে খুলুন"
                    >
                        <ExternalLink size={15} />
                    </a>

                    {/* Fullscreen Button */}
                    <button
                        onClick={toggleFullscreen}
                        className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition"
                        title={isFullscreen ? 'ফুলস্ক্রিন থেকে বের হন' : 'ফুলস্ক্রিন করুন'}
                    >
                        {isFullscreen ? <Minimize size={15} /> : <Maximize size={15} />}
                    </button>
                </div>
            </header>

            {/* iFrame Content Container */}
            <div className="relative flex-1 w-full h-full bg-white overflow-hidden">
                {isLoading && (
                    <div className="absolute inset-0 bg-slate-900 flex flex-col items-center justify-center gap-3 text-white z-20">
                        <div className="w-9 h-9 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin" />
                        <p className="text-xs font-bold text-slate-300 animate-pulse">
                            ইন্টারেক্টিভ ল্যাব লোড হচ্ছে...
                        </p>
                    </div>
                )}

                <iframe
                    ref={iframeRef}
                    src={`/academy-labs/${encodeURIComponent(currentFilename)}`}
                    title={activeItem?.title || 'LearnCare Academy Lab'}
                    onLoad={() => setIsLoading(false)}
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; speech-recognition; microphone"
                />
            </div>
        </div>
    );
}

export default function AcademyLabViewPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white">
                <div className="w-8 h-8 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin" />
            </div>
        }>
            <LabViewerContent />
        </Suspense>
    );
}

