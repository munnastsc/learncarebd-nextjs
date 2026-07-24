'use client';

import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { ChevronLeft, Check, Sparkles, MessageSquare, Video, Calendar, Clock, Gift, BookOpen, GraduationCap, Phone } from 'lucide-react';

export default function CourseDetailsPage() {
    const params = useParams();
    const router = useRouter();
    const slug = params?.slug as string;

    if (slug === 'one-on-one-english-mentorship') {
        return (
            <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-teal-500 selection:text-slate-900 pb-20 relative overflow-hidden">
                {/* Glowing decorations */}
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-500/10 blur-[120px] pointer-events-none" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-teal-500/10 blur-[120px] pointer-events-none" />

                <div className="max-w-4xl mx-auto px-6 pt-8 relative z-10">
                    {/* Back Button */}
                    <button 
                        onClick={() => router.push('/')}
                        className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white transition mb-8 bg-slate-900/60 border border-slate-800 rounded-xl px-4 py-2"
                    >
                        <ChevronLeft size={14} /> Back to Home
                    </button>

                    {/* Hero Section */}
                    <div className="bg-gradient-to-br from-indigo-950/40 via-slate-900/60 to-slate-900/40 border border-slate-800 rounded-3xl p-8 md:p-12 mb-8 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
                        
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-teal-300 mb-6">
                            <Sparkles size={10} />
                            Limited Slots Available (১-অন-১ মেন্টরশিপ)
                        </span>

                        <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4">
                            Transform Your Career with<br />
                            <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">Real English Mastery</span>
                        </h1>

                        <p className="text-sm md:text-base text-slate-300 max-w-2xl leading-relaxed mb-8">
                            এটি কোনো সাধারণ কোর্স নয়। এটি আপনার গন্তব্যে পৌঁছানোর একটি সম্পূর্ণ যাত্রা — আপনার পাশে থেকে, প্রতিটি পদক্ষেপে। ব্যক্তিগত গাইডেন্স ও ওয়ান-অন-ওয়ান সেশনের মাধ্যমে আপনার জড়তা দূর করার নিশ্চয়তা।
                        </p>

                        <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-slate-800/80">
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-wider text-slate-400">Course Fee</p>
                                <p className="text-3xl font-black text-teal-400">৳৩০,০০০ BDT</p>
                            </div>
                            <div className="h-8 w-px bg-slate-800 hidden sm:block" />
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-wider text-slate-400">Duration</p>
                                <p className="text-sm font-bold text-white mt-1">৪ মাস (পার্সোনাল গাইডেন্স)</p>
                            </div>
                            <div className="h-8 w-px bg-slate-800 hidden sm:block" />
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-wider text-slate-400">Class Platform</p>
                                <p className="text-sm font-bold text-white mt-1">Zoom / Google Meet (Live)</p>
                            </div>
                        </div>

                        <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            <a 
                                href="https://wa.me/8801714740430" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 rounded-2xl bg-teal-500 hover:bg-teal-400 px-8 py-4 text-xs font-black text-slate-950 transition duration-200 shadow-lg shadow-teal-500/10"
                            >
                                <Phone size={14} /> এখনই ভর্তি হোন (WhatsApp)
                            </a>
                            <a 
                                href="https://m.me/learncarebd" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 rounded-2xl border border-slate-800 bg-slate-900/60 hover:bg-slate-900 px-8 py-4 text-xs font-black text-slate-300 hover:text-white transition duration-200"
                            >
                                <MessageSquare size={14} /> মেসেজ করুন (Facebook)
                            </a>
                        </div>
                    </div>

                    {/* Core Problems Section */}
                    <div className="bg-rose-950/10 border border-rose-500/10 rounded-3xl p-6 md:p-8 mb-8">
                        <h2 className="text-lg md:text-xl font-black text-rose-400 mb-3">
                            অনেক কোর্স করেছেন, তবু কি ইংরেজিতে আটকে যান?
                        </h2>
                        <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                            বেশিরভাগ মানুষ ৫-১০টি কোর্স কিনে ফেলেন — রেকর্ডেড ভিডিও, বড় গ্রুপ ক্লাস — কিন্তু বাস্তবে মুখ খুলতে গেলেই কনফিডেন্স হারিয়ে যায়। কারণটা সিম্পল: কেউ আপনার নির্দিষ্ট সমস্যাটা ধরিয়ে দেয়নি। আমরা ওয়ান-অন-ওয়ান মেন্টরশিপের মাধ্যমে সেটাই করে থাকি।
                        </p>
                    </div>

                    {/* Grid Promises */}
                    <div className="grid gap-4 sm:grid-cols-2 mb-12">
                        {[
                            { title: 'আমি শুধু শেখাই না', desc: 'দায়িত্বও নিই আপনার রেজাল্টের।' },
                            { title: 'রেজাল্টে সন্তুষ্ট না হলে', desc: 'আমরা সফল নই — এটাই আমাদের কাজের স্ট্যান্ডার্ড।' },
                            { title: 'গন্তব্য ঠিক করুন', desc: 'সেখানে পৌঁছানোর পার্সোনাল গাইডলাইন ও রাস্তা আমরা বানাব।' },
                            { title: 'Real Problem Solving', desc: 'কোনো প্রথাগত টেক্সটবুক নয়, বরং আপনার বাস্তব জীবনের সমস্যার সমাধান।' }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-5">
                                <h3 className="font-bold text-white text-xs md:text-sm mb-1.5 flex items-center gap-2">
                                    <Check className="text-teal-400" size={16} />
                                    {item.title}
                                </h3>
                                <p className="text-[11px] text-slate-400 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* What you will get */}
                    <div className="mb-12">
                        <h2 className="text-xl md:text-2xl font-black text-white mb-6">এই মেন্টরশিপে কী পাবেন</h2>
                        <div className="grid gap-4 sm:grid-cols-2">
                            {[
                                { title: 'Customized Journey', desc: 'আপনার বর্তমান ইংরেজি লেভেল ও লক্ষ্য অনুযায়ী সম্পূর্ণ কাস্টমাইজড ক্লাস প্ল্যান।' },
                                { title: 'Flexible Schedule', desc: 'আপনার সুবিধাজনক ও ব্যস্ত সময়সূচি মাথায় রেখে সেশন নির্ধারিত হবে।' },
                                { title: 'Corporate Standard', desc: 'অফিস প্রেজেন্টেশন, মিটিং, ইন্টারভিউ বা পাবলিক স্পিকিং-এর বিশেষ প্রস্তুতি।' },
                                { title: 'Overseas & Expat Special', desc: 'বিদেশে যাওয়ার প্রস্তুতি বা প্রবাসে কমিউনিকেশন সমস্যার পার্সোনাল ওয়ান-অন-ওয়ান গাইডলাইন।' },
                                { title: 'Direct Mentor Access', desc: '৪ মাস জুড়ে যেকোনো সমস্যা ও স্পিকিং প্র্যাকটিসে সরাসরি মেন্টরের সাথে যোগাযোগের সুযোগ।' },
                                { title: 'Results Guaranteed', desc: 'বাংলাদেশে এমন ১-অন-১ কোর্স আর নেই — আমরা শেষ না হওয়া পর্যন্ত ছাড়ি না।' }
                            ].map((item, idx) => (
                                <div key={idx} className="border border-slate-800 bg-slate-900/20 rounded-2xl p-5 hover:border-slate-700 transition">
                                    <h3 className="font-bold text-teal-400 text-xs md:text-sm mb-1">{item.title}</h3>
                                    <p className="text-[11px] text-slate-400 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Testimonials */}
                    <div className="mb-12">
                        <h2 className="text-xl md:text-2xl font-black text-white mb-6">সফল প্রবাসীদের অভিজ্ঞতা</h2>
                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
                                <blockquote className="text-xs md:text-sm text-slate-300 italic mb-4 leading-relaxed">
                                    "ভিসা ইন্টারভিউ আর বিদেশে কথা বলা নিয়ে খুব টেনশনে ছিলাম। এখন দুবাইতে পূর্ণ আত্মবিশ্বাসে কাজ করছি।"
                                </blockquote>
                                <cite className="text-[11px] font-bold text-teal-400 not-italic">— আরিফুল ইসলাম, প্রবাসী, দুবাই</cite>
                            </div>
                            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
                                <blockquote className="text-xs md:text-sm text-slate-300 italic mb-4 leading-relaxed">
                                    "অফিসের চাপে কোর্স করার সময় পেতাম না। কাস্টমাইজড মেন্টরশিপে আমার গ্যাপগুলো পূরণ হয়েছে।"
                                </blockquote>
                                <cite className="text-[11px] font-bold text-teal-400 not-italic">— সায়মা আক্তার, HR Professional</cite>
                            </div>
                        </div>
                    </div>

                    {/* FAQ */}
                    <div>
                        <h2 className="text-xl md:text-2xl font-black text-white mb-6">সাধারণ প্রশ্ন ও উত্তর (FAQ)</h2>
                        <div className="space-y-4">
                            {[
                                { q: 'আমার বেসিক খুব দুর্বল, আমি কি শিখতে পারব?', a: 'অবশ্যই। আপনি যদি বাংলায় সাবলীলভাবে কথা বলতে পারেন, আপনার যেকোনো ভাষা শেখার ক্ষমতা আছে। শুধু দরকার সঠিক গাইডলাইন — সেটাই আমরা দিই।' },
                                { q: 'আমি প্রবাসী, আমার সময়ের সাথে মিলবে তো?', a: 'হ্যাঁ। আপনার দেশের টাইম জোন অনুযায়ী সেশন সেট করা হবে যাতে আপনার কাজের কোনো ক্ষতি না হয়।' },
                                { q: 'অনেক কোর্স করেছি কিন্তু উপকার পাইনি — এটা কি আলাদা?', a: 'হ্যাঁ, কারণ এটি কোনো রেকর্ডেড ভিডিও বা বড় ক্লাস নয়। এটি সম্পূর্ণ আপনার নির্দিষ্ট সমস্যার সমাধান — সরাসরি, পার্সোনালি।' }
                            ].map((item, idx) => (
                                <div key={idx} className="border-b border-slate-850 pb-4">
                                    <strong className="text-xs md:text-sm text-white block mb-1.5">{item.q}</strong>
                                    <p className="text-[11px] text-slate-400 leading-relaxed">{item.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        );
    }

    if (slug === 'mastering-spoken-english-pronunciation-challenge-90-day-bootcamp') {
        return (
            <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-teal-500 selection:text-slate-900 pb-20 relative overflow-hidden">
                {/* Glowing decorations */}
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-500/10 blur-[120px] pointer-events-none" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-teal-500/10 blur-[120px] pointer-events-none" />

                <div className="max-w-4xl mx-auto px-6 pt-8 relative z-10">
                    {/* Back Button */}
                    <button 
                        onClick={() => router.push('/')}
                        className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white transition mb-8 bg-slate-900/60 border border-slate-800 rounded-xl px-4 py-2"
                    >
                        <ChevronLeft size={14} /> Back to Home
                    </button>

                    {/* Hero Section */}
                    <div className="bg-gradient-to-br from-indigo-950/40 via-slate-900/60 to-slate-900/40 border border-slate-800 rounded-3xl p-8 md:p-12 mb-8 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
                        
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-teal-300 mb-6">
                            <Sparkles size={10} />
                            Premium Online 90-Day Bootcamp
                        </span>

                        <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4">
                            Premium Spoken English &<br />
                            <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">Pronunciation Challenge</span>
                        </h1>

                        <p className="text-sm md:text-base text-slate-300 max-w-2xl leading-relaxed mb-8">
                            জড়তা কাটিয়ে আত্মবিশ্বাসের সাথে ইংরেজিতে কথা বলুন! শুদ্ধ ব্রিটিশ ও আমেরিকান উচ্চারণ এবং রিয়েল-লাইফ ইংরেজি স্পিকিং আয়ত্ত করার সেরা চ্যালেঞ্জিং কোর্স।
                        </p>

                        <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-slate-800/80">
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-wider text-slate-400">Duration</p>
                                <p className="text-sm font-bold text-white mt-1">৩ মাস (৩৬ টি লাইভ সেশন)</p>
                            </div>
                            <div className="h-8 w-px bg-slate-800 hidden sm:block" />
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-wider text-slate-400">Classes</p>
                                <p className="text-sm font-bold text-white mt-1">সাপ্তাহিক ৩ দিন (১.৫ ঘণ্টা সেশন)</p>
                            </div>
                            <div className="h-8 w-px bg-slate-800 hidden sm:block" />
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-wider text-slate-400">Platform</p>
                                <p className="text-sm font-bold text-white mt-1">Zoom App (Live Class)</p>
                            </div>
                        </div>

                        <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            <a 
                                href="https://wa.me/8801714740430" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 rounded-2xl bg-teal-500 hover:bg-teal-400 px-8 py-4 text-xs font-black text-slate-950 transition duration-200 shadow-lg shadow-teal-500/10"
                            >
                                <Phone size={14} /> WhatsApp-এ ভর্তি হোন
                            </a>
                            <a 
                                href="https://m.me/learncarebd" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 rounded-2xl border border-slate-800 bg-slate-900/60 hover:bg-slate-900 px-8 py-4 text-xs font-black text-slate-300 hover:text-white transition duration-200"
                            >
                                <MessageSquare size={14} /> ফেসবুক মেসেঞ্জার
                            </a>
                        </div>
                    </div>

                    {/* Batch Details */}
                    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 mb-8">
                        <h2 className="text-sm font-black uppercase tracking-wider text-slate-400 mb-4">নতুন ব্যাচের সময়সূচী (Batch 10)</h2>
                        <div className="grid gap-4 sm:grid-cols-3">
                            <div className="bg-slate-950 border border-slate-850 rounded-xl p-4">
                                <p className="text-[10px] text-slate-400">Weekly Days</p>
                                <p className="text-xs font-bold text-white mt-1">Sunday, Tuesday, Thursday</p>
                            </div>
                            <div className="bg-slate-950 border border-slate-850 rounded-xl p-4">
                                <p className="text-[10px] text-slate-400">Time</p>
                                <p className="text-xs font-bold text-white mt-1">08:30PM – 10:00PM</p>
                            </div>
                            <div className="bg-slate-950 border border-slate-850 rounded-xl p-4">
                                <p className="text-[10px] text-slate-400">Class Starts</p>
                                <p className="text-xs font-bold text-teal-400 mt-1">02 April, 2026</p>
                            </div>
                        </div>
                    </div>

                    {/* What you will learn */}
                    <div className="mb-12">
                        <h2 className="text-xl md:text-2xl font-black text-white mb-6">এই কোর্স থেকে যা শিখবেন:</h2>
                        <div className="grid gap-4 sm:grid-cols-2">
                            {[
                                { title: 'Spoken English', desc: 'একদম বেসিক থেকে অ্যাডভান্স লেভেল পর্যন্ত কথা বলার সাবলীল কৌশল।' },
                                { title: 'Phonetics & Pronunciation', desc: 'UK & US ৪৪টি ইংলিশ সাউন্ডের সঠিক ব্যবহার ও উচ্চারণ।' },
                                { title: 'Vocabulary Builder', desc: 'Oxford 3000+ প্রয়োজনীয় শব্দ, ফ্রেজ এবং নেটিভ স্পিকারদের ইডিয়মস।' },
                                { title: 'Fluency Building', desc: 'টাং টুইস্টার এবং নিয়মিত ওরাল প্র্যাকটিসের মাধ্যমে ফ্লুয়েন্সি ও জড়তা দূরীকরণ।' },
                                { title: 'Listening Skills', desc: 'নেটিভ স্পিকারদের স্বাভাবিক কথা সহজে বোঝার বৈজ্ঞানিক টেকনিক।' },
                                { title: 'Real-Life Communication', desc: 'স্মার্ট প্রেজেন্টেশন, গ্রুপ ডিসকাশন, ইন্টারভিউ টিপস এবং পাবলিক স্পিকিং।' }
                            ].map((item, idx) => (
                                <div key={idx} className="border border-slate-800 bg-slate-900/20 rounded-2xl p-5 hover:border-slate-700 transition">
                                    <h3 className="font-bold text-teal-400 text-xs md:text-sm mb-1">{item.title}</h3>
                                    <p className="text-[11px] text-slate-400 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Connected Speech Syllabus */}
                    <div className="mb-12">
                        <h2 className="text-xl md:text-2xl font-black text-white mb-6">বিশেষ যা থাকছে আমাদের সিলেবাসে:</h2>
                        <div className="grid gap-4 sm:grid-cols-3">
                            {[
                                { title: 'Grammar for Speaking', desc: 'কথা বলতে যতটুকু গ্রামার লাগে (Tense, Modals, Passive, conditionals)।' },
                                { title: 'English Contractions', desc: 'নেটিভদের মত দ্রুত গতিতে কথা বলার সংক্ষিপ্ত রূপ ও ফর্ম।' },
                                { title: 'Connected Speech', desc: 'Linking sounds, Elision এবং সঠিক Word Stress এর নিয়ম।' },
                                { title: 'Situational English', desc: 'অফিস, শপিং মল বা প্রাত্যহিক জীবনে ব্যবহৃত ১০০০+ ডেইলি বাক্য।' },
                                { title: 'Oxford Conversation', desc: 'Oxford & Cambridge University press-এর স্ট্যান্ডার্ড কনভারসেশন প্র্যাকটিস।' },
                                { title: 'Presentation Skills', desc: 'যেকোনো মঞ্চে নিজেকে চমৎকার ও স্মার্টলি উপস্থাপন করার গাইড।' }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-slate-900/30 border border-slate-850 rounded-2xl p-4">
                                    <h3 className="font-bold text-white text-xs mb-1.5">{item.title}</h3>
                                    <p className="text-[10px] text-slate-400 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Free Gifts */}
                    <div className="bg-teal-950/15 border border-teal-500/10 rounded-3xl p-6 md:p-8 mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div>
                            <h2 className="text-lg md:text-xl font-black text-teal-400 flex items-center gap-2 mb-2">
                                <Gift size={20} /> Free Welcome Gift Set!
                            </h2>
                            <p className="text-xs text-slate-300 leading-relaxed max-w-xl">
                                কোর্সে জয়েন করলেই আপনি সম্পূর্ণ ফ্রিতে পাবেন: Oxford 3000 Words Master Kit, Oxford University pressed audio set এবং অতিরিক্ত ইংরেজি স্টোরিবুকস।
                            </p>
                        </div>
                        <span className="self-start md:self-center bg-teal-500/10 text-teal-400 border border-teal-500/20 text-xs font-black uppercase tracking-widest px-4 py-2 rounded-xl">
                            Included Free
                        </span>
                    </div>

                    {/* FAQ */}
                    <div>
                        <h2 className="text-xl md:text-2xl font-black text-white mb-6">সাধারণ প্রশ্ন ও উত্তর (FAQ)</h2>
                        <div className="space-y-4">
                            {[
                                { q: 'আমি ইংরেজিতে একদম কাঁচা, আমি কি পারব?', a: 'অবশ্যই! আমাদের কোর্সটি একদম জিরো লেভেল থেকে শুরু করা হয়। নিয়মিত প্র্যাকটিস এবং আমাদের গাইডলাইন অনুসরণ করলে আপনি অবশ্যই সাবলীল বক্তা হতে পারবেন।' },
                                { q: 'কোর্স শেষে কি সার্টিফিকেট দেওয়া হবে?', a: 'হ্যাঁ, নিয়মিত ক্লাসে উপস্থিতি এবং চূড়ান্ত প্রজেক্ট বা পরীক্ষার অংশগ্রহণের ভিত্তিতে একটি কোর্স কমপ্লিশন সার্টিফিকেট প্রদান করা হবে।' },
                                { q: 'ক্লাস মিস করলে কি হবে?', a: 'প্রতিটি সেশনের পর প্রয়োজনীয় লেকচার শিট ও স্টাডি ম্যাটেরিয়াল দেওয়া হয় যা আপনার গ্যাপ পূরণ করতে সাহায্য করবে।' }
                            ].map((item, idx) => (
                                <div key={idx} className="border-b border-slate-850 pb-4">
                                    <strong className="text-xs md:text-sm text-white block mb-1.5">{item.q}</strong>
                                    <p className="text-[11px] text-slate-400 leading-relaxed">{item.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        );
    }

    // Default Fallback
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-center items-center">
            <h1 className="text-xl font-bold mb-4">Course not found</h1>
            <Link href="/" className="text-teal-400 hover:underline text-sm">Return Home</Link>
        </div>
    );
}
