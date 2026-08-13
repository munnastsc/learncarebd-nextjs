import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, PlayCircle, Star, Phone, MessageCircle } from 'lucide-react';

export default function SpokenBookLanding() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50 pt-24 pb-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Text Content */}
                        <div className="max-w-2xl">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-800 font-bold text-sm mb-6 border border-amber-200">
                                <Star size={16} className="fill-amber-500" /> ১০০% কার্যকরী স্পোকেন ইংলিশ বুক
                            </div>
                            <h1 className="text-5xl md:text-6xl font-black text-slate-900 leading-[1.1] mb-6">
                                ইংরেজিতে সাবলীল <br/> হতে চান? <br/>
                                <span className="text-indigo-600">শিখতেই হবে ৩০০০ শব্দ!</span>
                            </h1>
                            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
                                ভোকাবুলারি মুখস্থ করে ভুলে যান? এই বইটি এবং আমাদের <span className="font-bold text-indigo-600">অক্সফোর্ড সাউন্ড সাপোর্টেড ফ্রি অ্যাপ</span> দিয়ে শিখুন আজীবন মনে রাখার মতো করে!
                            </p>
                            
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="#order" className="inline-flex items-center justify-center gap-2 bg-brand hover:bg-brand-dark text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-brand/30 hover:scale-105">
                                    অর্ডার করুন ৳ ৪০০
                                </a>
                                <Link href="/3000-words" className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-indigo-700 border-2 border-indigo-100 px-8 py-4 rounded-xl font-bold text-lg transition-all hover:border-indigo-300">
                                    <PlayCircle size={24} /> অডিও অ্যাপ
                                </Link>
                            </div>
                        </div>

                        {/* Image / Book Cover */}
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
                            <img 
                                src="/book-cover.png" 
                                alt="3000 Words Book" 
                                className="relative z-10 w-full max-w-md mx-auto drop-shadow-2xl rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">বইটির বিশেষত্ব</h2>
                        <p className="text-lg text-slate-600">কেন এই বইটি আপনার স্পোকেন ইংলিশের জন্য সেরা?</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: 'দৈনন্দিন ৩০০০ শব্দ', desc: 'যে ৩০০০ শব্দ জানলে আপনি প্রতিদিনের ৯৩% কথা ইংরেজিতে বলতে পারবেন।' },
                            { title: 'অডিও সাপোর্ট অ্যাপ', desc: 'প্রতিটি শব্দের সঠিক উচ্চারণ শুনতে পাবেন আমাদের নিজস্ব ওয়েব অ্যাপে।' },
                            { title: 'সহজ বাংলা অর্থ', desc: 'প্রতিটি শব্দের সহজ বাংলা অর্থ এবং উদাহরণ দেওয়া আছে।' }
                        ].map((feature, i) => (
                            <div key={i} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-xl transition-all">
                                <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-6">
                                    <CheckCircle2 size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                                <p className="text-slate-600">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Order Section */}
            <section id="order" className="py-20 bg-slate-900 text-white">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-black mb-6">আজই আপনার কপি সংগ্রহ করুন</h2>
                    <p className="text-lg text-slate-400 mb-10">স্টক সীমিত! দ্রুত অর্ডার করতে নিচের ফর্মটি পূরণ করুন অথবা কল করুন।</p>
                    
                    <div className="bg-white text-slate-900 p-8 rounded-2xl text-left max-w-xl mx-auto">
                        <p className="text-center font-bold text-rose-600 mb-6">অর্ডার করতে কল করুন:</p>
                        <a href="tel:01714740430" className="flex items-center justify-center gap-3 text-3xl font-black text-slate-800 bg-slate-100 py-4 rounded-xl hover:bg-slate-200 transition-colors mb-4">
                            <Phone size={28} className="text-indigo-600" /> 01714740430
                        </a>
                        <a href="https://wa.me/8801714740430" target="_blank" className="flex items-center justify-center gap-3 text-xl font-bold text-white bg-[#25D366] py-3 rounded-xl hover:bg-[#20ba59] transition-colors">
                            <MessageCircle size={24} /> WhatsApp এ মেসেজ দিন
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
