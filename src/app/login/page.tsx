'use client';

import { useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { GraduationCap, Mail, Lock, Eye, EyeOff, Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';

function LoginForm() {
    const router = useRouter();
    const params = useSearchParams();
    const [isSignUp, setIsSignUp] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false);

    const redirectPath = params.get('from') || '/dashboard';

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setError('');
        setSuccess('');
        setLoading(true);

        try {
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password, isSignUp }),
            });
            const data = await res.json();

            if (res.ok) {
                if (isSignUp) {
                    setSuccess('Account created successfully! Redirecting...');
                    setTimeout(() => {
                        router.push(redirectPath);
                    }, 1500);
                } else {
                    router.push(redirectPath);
                }
            } else {
                setError(data.error || 'Authentication failed. Please try again.');
            }
        } catch {
            setError('Something went wrong. Please check your connection.');
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 flex items-center justify-center px-4 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />

            <div className="w-full max-w-md relative z-10">
                {/* Branding */}
                <div className="flex flex-col items-center mb-8">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-tr from-indigo-600 to-violet-500 shadow-lg shadow-indigo-500/30 mb-3 hover:scale-105 transition-transform">
                        <GraduationCap size={32} className="text-white" />
                    </div>
                    <h1 className="text-3xl font-black text-white tracking-tight flex items-center gap-1.5">
                        LearnCareBD AI <Sparkles size={18} className="text-yellow-400 fill-yellow-400" />
                    </h1>
                    <p className="text-xs text-slate-400 font-semibold tracking-widest uppercase mt-1">IELTS & Spoken English Platform</p>
                </div>

                {/* Login/Signup Card */}
                <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 rounded-3xl p-8 shadow-2xl">
                    <h2 className="text-xl font-bold text-white mb-6">
                        {isSignUp ? 'নতুন অ্যাকাউন্ট তৈরি করুন' : 'অ্যাকাউন্টে লগইন করুন'}
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Email Input */}
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email Address</label>
                            <div className="relative">
                                <Mail size={16} className="absolute left-3.5 top-3.5 text-slate-500" />
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    className="w-full rounded-xl bg-slate-950/80 border border-slate-800/80 text-white pl-11 pr-4 py-3.5 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                                    required
                                />
                            </div>
                        </div>

                        {/* Password Input */}
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Password</label>
                            <div className="relative">
                                <Lock size={16} className="absolute left-3.5 top-3.5 text-slate-500" />
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="Enter password"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    className="w-full rounded-xl bg-slate-950/80 border border-slate-800/80 text-white pl-11 pr-11 py-3.5 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-3.5 text-slate-500 hover:text-white"
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>

                        {error && (
                            <div className="bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-semibold rounded-xl p-3.5">
                                ⚠️ {error}
                            </div>
                        )}

                        {success && (
                            <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold rounded-xl p-3.5">
                                ✅ {success}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={loading || !email || !password}
                            className="w-full rounded-xl bg-indigo-600 hover:bg-indigo-500 py-3.5 text-sm font-black text-white disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-indigo-600/25 flex items-center justify-center gap-1.5 mt-2 transition-all"
                        >
                            {loading ? 'অপেক্ষা করুন...' : isSignUp ? 'নিবন্ধন করুন (Sign Up)' : 'লগইন করুন (Login)'}
                            {!loading && <ArrowRight size={16} />}
                        </button>
                    </form>

                    {/* Quick helper note for paid users */}
                    {!isSignUp && (
                        <div className="mt-5 p-3.5 bg-indigo-950/40 border border-indigo-900/30 rounded-2xl text-[11px] text-indigo-300 leading-relaxed">
                            💡 <b>বিকাশে পেমেন্ট করেছেন কিন্তু অ্যাকাউন্ট নেই?</b>
                            <br />
                            নিবন্ধন (Sign Up) অপশনে গিয়ে পেমেন্ট ফর্মের ইমেইলটি ব্যবহার করে অ্যাকাউন্ট তৈরি করুন। পেমেন্ট করা ট্রানজেকশন আইডির জন্য অ্যাকাউন্ট স্বয়ংক্রিয়ভাবে অ্যাক্টিভেট হয়ে যাবে!
                            <br />
                            *(অটো-তৈরি অ্যাকাউন্টের ক্ষেত্রে ডিফল্ট পাসওয়ার্ড: <b>123456</b>)*
                        </div>
                    )}

                    {/* Toggle button */}
                    <div className="mt-6 text-center border-t border-slate-800/80 pt-5">
                        <button
                            onClick={() => {
                                setIsSignUp(!isSignUp);
                                setError('');
                                setSuccess('');
                            }}
                            className="text-xs font-bold text-indigo-400 hover:text-indigo-300 transition-colors"
                        >
                            {isSignUp ? 'আগে থেকেই অ্যাকাউন্ট আছে? লগইন করুন' : 'নতুন অ্যাকাউন্ট তৈরি করতে চান? এখানে চাপুন'}
                        </button>
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <Link href="/" className="text-xs text-slate-500 hover:text-slate-400 font-semibold transition-colors">
                        ← Back to Homepage
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default function LoginPage() {
    return (
        <Suspense>
            <LoginForm />
        </Suspense>
    );
}
