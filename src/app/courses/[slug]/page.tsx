'use client';

import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { 
    ChevronLeft, Check, Sparkles, MessageSquare, Video, Calendar, 
    Clock, Gift, BookOpen, GraduationCap, Phone, Star, ShieldCheck, 
    Award, Layers, ArrowUpRight, ArrowLeft
} from 'lucide-react';
import { CourseItem, DEFAULT_HOMEPAGE_SETTINGS } from '../../../lib/homepageTypes';

export default function CourseDetailsPage() {
    const params = useParams();
    const router = useRouter();
    const slug = params?.slug as string;

    const [courseData, setCourseData] = useState<CourseItem | null>(null);
    const [dynamicPost, setDynamicPost] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadCourse = async () => {
            try {
                // 1. Fetch from Homepage Settings Courses
                const settingsRes = await fetch('/api/homepage-settings');
                if (settingsRes.ok) {
                    const settings = await settingsRes.json();
                    const items: CourseItem[] = settings?.coursesSection?.items || DEFAULT_HOMEPAGE_SETTINGS.coursesSection.items;
                    const found = items.find(c => 
                        c.id === slug || 
                        c.url === `/courses/${slug}` ||
                        c.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '') === slug
                    );
                    if (found) {
                        setCourseData(found);
                        setLoading(false);
                        return;
                    }
                }

                // 2. Fetch from custom posts
                const postsRes = await fetch('/api/custom-posts');
                if (postsRes.ok) {
                    const posts = await postsRes.json();
                    const found = posts.find((p: any) => 
                        p.id === slug || 
                        p.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '') === slug
                    );
                    if (found) {
                        setDynamicPost(found);
                    }
                }
            } catch (e) {
                console.error('Failed to load course details:', e);
            } finally {
                setLoading(false);
            }
        };

        loadCourse();
    }, [slug]);

    if (loading) {
        return (
            <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center">
                <span className="w-8 h-8 rounded-full border-2 border-slate-300 border-t-teal-600 animate-spin" />
            </div>
        );
    }

    // A. If Course has custom HTML content entered from Admin
    if (courseData && courseData.htmlContent && courseData.htmlContent.trim() !== '') {
        return (
            <div className="min-h-screen bg-[#f8fafc] text-slate-900 flex flex-col justify-between">
                {/* Header */}
                <header className="border-b border-slate-200 bg-white/95 backdrop-blur-md px-6 py-3.5 sticky top-0 z-40 shadow-xs">
                    <div className="max-w-6xl mx-auto flex items-center justify-between">
                        <Link href="/" className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-teal-600 transition bg-slate-100 hover:bg-slate-200 px-3.5 py-1.5 rounded-xl">
                            <ArrowLeft size={14} /> 🏠 হোম পেজ (Back to Home)
                        </Link>
                        <div className="flex items-center gap-3">
                            <span className="font-bold text-xs text-slate-800 hidden sm:inline">{courseData.title}</span>
                            <a 
                                href="https://wa.me/8801714740430"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-1.5 text-xs font-black transition shadow-xs"
                            >
                                <Phone size={12} /> এখনই ভর্তি হোন (WhatsApp)
                            </a>
                        </div>
                    </div>
                </header>

                {/* Render Custom HTML */}
                <main className="max-w-5xl mx-auto px-6 py-10 w-full">
                    <div 
                        className="custom-html-wrapper"
                        dangerouslySetInnerHTML={{ __html: courseData.htmlContent }}
                    />
                </main>

                <footer className="border-t border-slate-200 bg-white py-6 text-center text-xs text-slate-500">
                    © 2026 Learncare Academy. All rights reserved.
                </footer>
            </div>
        );
    }

    // B. Pre-configured Rich Layout: One-on-One English Mentorship
    if (slug === 'one-on-one-english-mentorship') {
        return (
            <div className="min-h-screen bg-[#f8fafc] text-slate-900 pb-20 relative overflow-hidden">
                {/* Header */}
                <div className="bg-white border-b border-slate-200 px-6 py-3 sticky top-0 z-30 shadow-xs">
                    <div className="max-w-4xl mx-auto flex items-center justify-between">
                        <Link href="/" className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-teal-600 transition bg-slate-100 px-3 py-1.5 rounded-xl">
                            <ChevronLeft size={14} /> Back to Home
                        </Link>
                        <a href="https://wa.me/8801714740430" target="_blank" rel="noopener noreferrer" className="bg-teal-600 text-white px-3.5 py-1.5 rounded-xl text-xs font-bold hover:bg-teal-500 transition">
                            WhatsApp: 01714740430
                        </a>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto px-6 pt-8 relative z-10">
                    <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 mb-8 shadow-sm">
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-teal-200 bg-teal-50 px-3.5 py-1 text-[10px] font-black uppercase tracking-widest text-teal-800 mb-6">
                            <Sparkles size={11} className="text-teal-600" />
                            Limited Slots Available (১-অন-১ মেন্টরশিপ)
                        </span>

                        <h1 className="text-2xl md:text-4xl font-black text-slate-950 tracking-tight leading-tight mb-4">
                            Transform Your Career with<br />
                            <span className="bg-gradient-to-r from-teal-600 via-cyan-600 to-indigo-600 bg-clip-text text-transparent">Real English Mastery</span>
                        </h1>

                        <p className="text-sm md:text-base text-slate-600 max-w-2xl leading-relaxed mb-8">
                            এটি কোনো সাধারণ কোর্স নয়। এটি আপনার গন্তব্যে পৌঁছানোর একটি সম্পূর্ণ যাত্রা — আপনার পাশে থেকে, প্রতিটি পদক্ষেপে। ব্যক্তিগত গাইডেন্স ও ওয়ান-অন-ওয়ান সেশনের মাধ্যমে আপনার জড়তা দূর করার নিশ্চয়তা।
                        </p>

                        <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-slate-100">
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-wider text-slate-400">Course Fee</p>
                                <p className="text-3xl font-black text-emerald-600">৳{courseData?.price || '30,000'} BDT</p>
                            </div>
                            <div className="h-8 w-px bg-slate-200 hidden sm:block" />
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-wider text-slate-400">Duration</p>
                                <p className="text-sm font-bold text-slate-800 mt-1">৪ মাস (পার্সোনাল গাইডেন্স)</p>
                            </div>
                            <div className="h-8 w-px bg-slate-200 hidden sm:block" />
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-wider text-slate-400">Class Platform</p>
                                <p className="text-sm font-bold text-slate-800 mt-1">Zoom / Google Meet (Live)</p>
                            </div>
                        </div>

                        <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            <a 
                                href="https://wa.me/8801714740430?text=I%20want%20to%20enroll%20in%20One-on-One%20English%20Mentorship" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-teal-600 px-8 py-3.5 text-xs font-black text-white hover:bg-teal-500 transition shadow-md shadow-teal-600/20"
                            >
                                <Phone size={14} /> এখনই বুক করুন (WhatsApp)
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // C. Pre-configured Rich Layout: 90-Day Bootcamp
    if (slug === 'mastering-spoken-english-pronunciation-challenge-90-day-bootcamp') {
        return (
            <div className="min-h-screen bg-[#f8fafc] text-slate-900 pb-20">
                <div className="bg-white border-b border-slate-200 px-6 py-3 sticky top-0 z-30 shadow-xs">
                    <div className="max-w-4xl mx-auto flex items-center justify-between">
                        <Link href="/" className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-teal-600 transition bg-slate-100 px-3 py-1.5 rounded-xl">
                            <ChevronLeft size={14} /> Back to Home
                        </Link>
                        <a href="https://wa.me/8801714740430" target="_blank" rel="noopener noreferrer" className="bg-teal-600 text-white px-3.5 py-1.5 rounded-xl text-xs font-bold hover:bg-teal-500 transition">
                            WhatsApp: 01714740430
                        </a>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto px-6 pt-8">
                    <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 mb-8 shadow-sm">
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-teal-200 bg-teal-50 px-3.5 py-1 text-[10px] font-black uppercase tracking-widest text-teal-800 mb-6">
                            <Sparkles size={11} className="text-teal-600" />
                            ৯০ দিনের চ্যালেঞ্জ
                        </span>

                        <h1 className="text-2xl md:text-4xl font-black text-slate-950 tracking-tight leading-tight mb-4">
                            Mastering Spoken English & Pronunciation Challenge
                        </h1>

                        <p className="text-sm md:text-base text-slate-600 max-w-2xl leading-relaxed mb-8">
                            সঠিক ব্রিটিশ উচ্চারণ এবং স্মার্ট স্পোকেন ইংলিশ শিখুন ঘরে বসেই। ৯০ দিনের ইন্টেনসিভ বুটক্যাম্প।
                        </p>

                        <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-slate-100">
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-wider text-slate-400">Course Fee</p>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-3xl font-black text-emerald-600">৳{courseData?.price || '5,000'} BDT</span>
                                    {courseData?.originalPrice && (
                                        <span className="text-sm line-through text-slate-400">৳{courseData.originalPrice}</span>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            <a 
                                href="https://wa.me/8801714740430?text=I%20want%20to%20enroll%20in%2090-Day%20Bootcamp" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-teal-600 px-8 py-3.5 text-xs font-black text-white hover:bg-teal-500 transition shadow-md shadow-teal-600/20"
                            >
                                <Phone size={14} /> এখনই ভর্তি হোন (WhatsApp)
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // D. Generic Dynamic Course Render
    const course = courseData || dynamicPost;
    if (course) {
        return (
            <div className="min-h-screen bg-[#f8fafc] text-slate-900 pb-20">
                <div className="bg-white border-b border-slate-200 px-6 py-3 sticky top-0 z-30 shadow-xs">
                    <div className="max-w-4xl mx-auto flex items-center justify-between">
                        <Link href="/" className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-teal-600 transition bg-slate-100 px-3 py-1.5 rounded-xl">
                            <ChevronLeft size={14} /> Back to Home
                        </Link>
                        <a href="https://wa.me/8801714740430" target="_blank" rel="noopener noreferrer" className="bg-teal-600 text-white px-3.5 py-1.5 rounded-xl text-xs font-bold hover:bg-teal-500 transition">
                            WhatsApp: 01714740430
                        </a>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto px-6 pt-8">
                    <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 mb-8 shadow-sm">
                        {course.image && (
                            <img src={course.image} alt={course.title} className="w-full h-64 object-cover rounded-2xl mb-6 border border-slate-100" />
                        )}
                        <h1 className="text-2xl md:text-3xl font-black text-slate-950 mb-4">{course.title}</h1>
                        <p className="text-sm text-slate-600 mb-6">{course.subtitle || course.content}</p>

                        {course.price && (
                            <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 inline-block">
                                <p className="text-[10px] font-black uppercase text-emerald-800">Course Fee</p>
                                <p className="text-2xl font-black text-emerald-700">৳{course.price} BDT</p>
                            </div>
                        )}

                        <div className="pt-6 border-t border-slate-100">
                            <a 
                                href="https://wa.me/8801714740430"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-500 text-white px-6 py-3 rounded-2xl text-xs font-black transition"
                            >
                                <Phone size={14} /> এখনই ভর্তি হোন (WhatsApp)
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#f8fafc] text-slate-900 flex flex-col justify-center items-center px-4">
            <h1 className="text-xl font-bold mb-2">Course not found</h1>
            <p className="text-xs text-slate-500 mb-6">এই কোর্সটি খুঁজে পাওয়া যায়নি।</p>
            <Link href="/" className="rounded-xl bg-teal-600 px-5 py-2.5 text-xs font-bold text-white hover:bg-teal-500 transition">
                Return to Home
            </Link>
        </div>
    );
}
