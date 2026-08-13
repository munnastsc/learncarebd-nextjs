'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Sparkles, Star, ArrowUpRight, BookOpen, Layers } from 'lucide-react';

export default function CoursesPage() {
    const [customCourses, setCustomCourses] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const res = await fetch('/api/custom-posts');
                if (res.ok) {
                    const posts = await res.json();
                    setCustomCourses(posts.filter((p: any) => p.type === 'COURSE' || p.type === 'SERVICE'));
                }
            } catch (e) {
                console.error('Failed to load courses:', e);
            } finally {
                setLoading(false);
            }
        };
        fetchCourses();
    }, []);

    const staticCourses = [
        {
            id: 'mentorship',
            title: 'One-on-One English Mentorship',
            subtitle: 'ব্যক্তিগত কেয়ার ও ডেডিকেটেড মেন্টরশিপের মাধ্যমে স্পিকিং, রিডিং ও রাইটিং দক্ষতা বাড়ানোর স্পেশাল প্রোগ্রাম।',
            image: 'https://learncarebd.com/wp-content/uploads/2026/02/3-768x432.png',
            price: '40,000',
            originalPrice: null,
            instructor: 'admin',
            rating: 5,
            url: '/courses/one-on-one-english-mentorship'
        },
        {
            id: 'bootcamp',
            title: 'Premium Spoken English & Pronunciation Challenge (90-Day Bootcamp)',
            subtitle: '৯০ দিনের চ্যালেঞ্জে সঠিক ব্রিটিশ উচ্চারণ এবং স্মার্ট স্পোকেন ইংলিশ মাস্টার করার স্পেশাল বুটক্যাম্প কোর্স।',
            image: 'https://learncarebd.com/wp-content/uploads/2026/02/2-768x432.png',
            price: '10,000',
            originalPrice: '12,000',
            instructor: 'admin',
            rating: 5,
            url: '/courses/mastering-spoken-english-pronunciation-challenge-90-day-bootcamp'
        },
        {
            id: 'oxford3000-mastery',
            title: 'Oxford 3000™ Vocabulary Mastery: IPA & Live Strategy Sessions',
            subtitle: 'আন্তর্জাতিক ব্রিটিশ ফনেটিক্স (IPA) ও বাস্তব ব্যবহারের মাধ্যমে বহুল ব্যবহৃত ৩০০০ শব্দ আয়ত্ত করার কোর্স।',
            image: 'https://learncarebd.com/wp-content/uploads/2026/01/Untitled-1280-x-720-px-768x432.png',
            price: '149',
            originalPrice: '2,500',
            instructor: 'admin',
            rating: 5,
            url: '/courses/oxford-3000-vocabulary-mastery'
        }
    ];

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between">
            {/* Top Navigation */}
            <header className="border-b border-slate-800/80 bg-slate-900/60 backdrop-blur-md px-6 py-4 sticky top-0 z-30">
                <div className="mx-auto max-w-6xl flex flex-wrap items-center justify-between gap-4">
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="bg-white px-2 py-1 rounded-lg shadow-sm border border-white/20 flex items-center justify-center group-hover:scale-105 transition">
                            <img 
                                src="https://learncarebd.com/wp-content/uploads/2025/12/Learncare-academy-1-scaled.png" 
                                alt="LearnCareBD Logo" 
                                className="h-8 w-auto object-contain"
                            />
                        </div>
                        <div>
                            <p className="text-xs font-black uppercase tracking-wider text-teal-400">Learncare Academy</p>
                            <p className="text-[10px] text-slate-400 font-medium">be unstoppable</p>
                        </div>
                    </Link>

                    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                        <Link 
                            href="/" 
                            className="inline-flex items-center gap-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 px-3.5 py-1.5 text-xs font-bold transition border border-slate-700"
                        >
                            🏠 হোম পেজ (Home)
                        </Link>
                        <Link 
                            href="/dashboard/spoken-english" 
                            className="inline-flex items-center gap-1.5 rounded-xl bg-teal-500/10 hover:bg-teal-500/20 text-teal-300 px-3 py-1.5 text-xs font-bold transition border border-teal-500/30"
                        >
                            🗣️ Spoken English
                        </Link>
                        <Link 
                            href="/dashboard" 
                            className="inline-flex items-center gap-1.5 rounded-xl bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300 px-3 py-1.5 text-xs font-bold transition border border-indigo-500/30"
                        >
                            🎓 IELTS Academic
                        </Link>
                        <a 
                            href="https://wa.me/8801714740430" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hidden sm:inline-flex items-center gap-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white px-3 py-1.5 text-xs font-black transition shadow-sm"
                        >
                            💬 WA: 01714740430
                        </a>
                    </div>
                </div>
            </header>

            <div className="mx-auto max-w-6xl px-6 py-12 flex-1 w-full">
                <div className="mb-12 text-center max-w-2xl mx-auto">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-teal-300 mb-3">
                        <Layers size={10} />
                        ALL COURSES
                    </span>
                    <h1 className="text-3xl sm:text-4xl font-black text-white">আমাদের সকল কোর্সসমূহ</h1>
                    <p className="text-xs text-slate-400 mt-2">আপনার সুবিধা ও লক্ষ্য অনুযায়ী সেরা কোর্সটি বেছে নিয়ে যাত্রা শুরু করুন।</p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {staticCourses.map((course) => (
                        <div key={course.id} className="group rounded-3xl border border-slate-800 bg-slate-900/60 overflow-hidden flex flex-col justify-between hover:border-slate-700 transition duration-300 shadow-lg">
                            <div>
                                <div className="relative h-48 w-full overflow-hidden bg-slate-950">
                                    <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-1 mb-2">
                                        {[...Array(course.rating)].map((_, i) => (
                                            <Star key={i} size={12} className="text-amber-400 fill-amber-400" />
                                        ))}
                                        <span className="text-[10px] text-slate-500 ml-1">5.0 (Review)</span>
                                    </div>
                                    <h3 className="font-bold text-white text-base leading-snug group-hover:text-teal-400 transition">
                                        {course.title}
                                    </h3>
                                    <p className="mt-2 text-xs text-slate-400 leading-relaxed line-clamp-2">
                                        {course.subtitle}
                                    </p>
                                    <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-500">
                                        <span>By <strong className="text-slate-300">{course.instructor}</strong></span>
                                        <div className="text-right">
                                            {course.originalPrice && (
                                                <span className="line-through text-[11px] text-slate-600 mr-1.5">৳{course.originalPrice}</span>
                                            )}
                                            <span className="font-black text-sm text-teal-400">৳{course.price} BDT</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6 pt-0">
                                <Link 
                                    href={course.url}
                                    className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl bg-teal-500 py-2.5 text-xs font-black text-slate-950 hover:bg-teal-400 transition"
                                >
                                    বিস্তারিত ও ভর্তি হন <ArrowUpRight size={13} />
                                </Link>
                            </div>
                        </div>
                    ))}

                    {/* Dynamic courses added by Admin */}
                    {customCourses.map((c) => (
                        <div key={c.id} className="group rounded-3xl border border-slate-800 bg-slate-900/60 overflow-hidden flex flex-col justify-between hover:border-slate-700 transition duration-300 shadow-lg">
                            <div>
                                {c.imageUrl ? (
                                    <div className="h-48 w-full overflow-hidden bg-slate-950">
                                        <img src={c.imageUrl} alt={c.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
                                    </div>
                                ) : (
                                    <div className="h-48 w-full bg-slate-900 flex items-center justify-center">
                                        <Sparkles className="text-teal-500" size={32} />
                                    </div>
                                )}
                                <div className="p-6">
                                    <h3 className="font-bold text-white text-base leading-snug group-hover:text-teal-400 transition">
                                        {c.title}
                                    </h3>
                                    <div 
                                        className="mt-2 text-xs text-slate-400 leading-relaxed line-clamp-2 prose prose-invert"
                                        dangerouslySetInnerHTML={{ __html: c.content }}
                                    />
                                    {c.price && (
                                        <p className="mt-3 font-black text-sm text-teal-400">৳{c.price} BDT</p>
                                    )}
                                </div>
                            </div>
                            <div className="p-6 pt-0">
                                <Link 
                                    href={`/courses/${c.id}`}
                                    className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl bg-teal-500 py-2.5 text-xs font-black text-slate-950 hover:bg-teal-400 transition"
                                >
                                    বিস্তারিত ও ভর্তি হন <ArrowUpRight size={13} />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
