'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { CheckCircle2, Lock, Mic, BookOpen, Bot, Radio, MessageSquare, ChevronLeft, Infinity } from 'lucide-react';
import { Suspense } from 'react';

const PLANS = {
    spoken: {
        id: 'spoken',
        name: 'Spoken English',
        price: 199,
        original: 399,
        color: 'from-emerald-600 to-teal-600',
        borderColor: 'border-emerald-200',
        bgColor: 'bg-emerald-50',
        badgeColor: 'bg-emerald-100 text-emerald-700',
        badge: null,
        features: [
            { icon: Radio, text: 'Headway 4B — সব ১৪ Unit unlock (1-3 free)' },
            { icon: Radio, text: 'Listen → Dictation → Shadowing practice' },
            { icon: MessageSquare, text: 'AI Conversation Practice (১৫ IELTS topic)' },
            { icon: Mic, text: 'Voice input + AI feedback in Bangla' },
        ],
        notIncluded: ['AI Tutor (IELTS)', 'Unlimited AI Chat'],
    },
    ielts_spoken: {
        id: 'ielts_spoken',
        name: 'IELTS + Spoken English',
        price: 499,
        original: 999,
        color: 'from-blue-600 to-indigo-600',
        borderColor: 'border-blue-200',
        bgColor: 'bg-blue-50',
        badgeColor: 'bg-blue-100 text-blue-700',
        badge: 'সেরা Value',
        features: [
            { icon: Bot, text: 'AI Tutor — image upload, voice in/out' },
            { icon: MessageSquare, text: 'AI Conversation Practice (১৫ IELTS topic)' },
            { icon: Radio, text: 'Headway 4B — সব ১৪ Unit unlock' },
            { icon: BookOpen, text: 'Cambridge Reading/Listening — সব Books' },
        ],
        notIncluded: ['Unlimited AI Chat (দিনে ২০টি limit)'],
    },
    unlimited_chat: {
        id: 'unlimited_chat',
        name: 'Unlimited AI Chat',
        price: 799,
        original: 1499,
        color: 'from-violet-600 to-purple-600',
        borderColor: 'border-violet-300',
        bgColor: 'bg-violet-50',
        badgeColor: 'bg-violet-100 text-violet-700',
        badge: '∞ Unlimited',
        features: [
            { icon: Infinity, text: 'AI Tutor — Unlimited দৈনিক প্রশ্ন (কোনো limit নেই)' },
            { icon: Bot, text: 'Image upload, voice in/out সহ সব AI feature' },
            { icon: MessageSquare, text: 'AI Conversation Practice (১৫ IELTS topic)' },
            { icon: Radio, text: 'Headway 4B — সব ১৪ Unit unlock' },
        ],
        notIncluded: [],
    },
};

type PlanId = keyof typeof PLANS;

function PaymentContent() {
    const searchParams = useSearchParams();
    const required = searchParams.get('required');

    const getInitialPlan = (): PlanId => {
        if (required === 'unlimited_chat') return 'unlimited_chat';
        if (required === 'ielts_spoken') return 'ielts_spoken';
        return 'spoken';
    };

    const [selectedPlan, setSelectedPlan] = useState<PlanId>(getInitialPlan());
    const [form, setForm] = useState({ email: '', password: '', transactionId: '' });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState<'success' | 'error'>('error');

    const plan = PLANS[selectedPlan];

    const submitPayment = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');
        try {
            const res = await fetch('/api/subscription/request', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: form.email,
                    password: form.password,
                    transactionId: form.transactionId,
                    amount: plan.price,
                    plan: selectedPlan,
                }),
            });
            const data = await res.json();
            if (!res.ok) {
                setMessageType('error');
                setMessage(data.error || 'Submit failed।');
                return;
            }
            setMessageType('success');
            if (data.instantActivation) {
                setMessage('⚡ পেমেন্ট ভেরিফাই হয়েছে! আপনার প্রিমিয়াম অ্যাকাউন্ট ইনস্ট্যান্ট অ্যাক্টিভেট হয়েছে। লগইন করে প্রিপারেশন শুরু করুন!');
            } else {
                setMessage('Payment request সাবমিট হয়েছে। এডমিন ভেরিফাই করে ১-২ ঘণ্টার মধ্যে অ্যাক্টিভেট করে দেবে।');
            }
        } catch {
            setMessageType('error');
            setMessage('Network সমস্যা। আবার try করো।');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#f5f6fa]">
            <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 px-5 py-10">
                <div className="mx-auto max-w-4xl">
                    <Link href="/dashboard" className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm mb-6 transition">
                        <ChevronLeft size={15} /> Dashboard
                    </Link>
                    <p className="text-xs font-semibold uppercase tracking-widest text-indigo-300">Subscription</p>
                    <h1 className="mt-2 text-3xl font-black text-white">Plan বেছে নাও</h1>
                    <p className="mt-2 text-sm text-slate-400">bKash এ payment করো, admin approve করবে।</p>
                </div>
            </div>

            <div className="mx-auto max-w-4xl px-5 py-8">
                {required && (
                    <div className="mb-6 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
                        🔒 এই feature টি access করতে subscription দরকার।
                    </div>
                )}

                {/* Plan cards */}
                <div className="grid gap-4 md:grid-cols-3">
                    {(Object.values(PLANS) as typeof PLANS[PlanId][]).map((p) => (
                        <button
                            key={p.id}
                            onClick={() => setSelectedPlan(p.id as PlanId)}
                            className={`text-left rounded-2xl border-2 p-5 transition ${selectedPlan === p.id
                                    ? `${p.borderColor} ${p.bgColor} ring-2 ring-offset-1 ${p.borderColor}`
                                    : 'border-slate-200 bg-white hover:border-slate-300'
                                }`}
                        >
                            <div className="flex items-start justify-between">
                                <div>
                                    {p.badge && (
                                        <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-bold mb-2 ${p.badgeColor}`}>
                                            {p.badge}
                                        </span>
                                    )}
                                    <p className="font-bold text-slate-900 text-lg">{p.name}</p>
                                    <div className="mt-1 flex items-baseline gap-2">
                                        <span className="text-3xl font-black text-slate-900">৳{p.price}</span>
                                        <span className="text-slate-400 text-sm">/মাস</span>
                                        <span className="text-slate-400 text-xs line-through">৳{p.original}</span>
                                    </div>
                                </div>
                                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mt-1 ${selectedPlan === p.id ? 'border-blue-600 bg-blue-600' : 'border-slate-300'
                                    }`}>
                                    {selectedPlan === p.id && <div className="w-2 h-2 rounded-full bg-white" />}
                                </div>
                            </div>

                            <ul className="mt-4 space-y-2">
                                {p.features.map((f, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                                        <CheckCircle2 size={15} className="text-emerald-500 mt-0.5 shrink-0" />
                                        {f.text}
                                    </li>
                                ))}
                                {p.notIncluded.map((f, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
                                        <Lock size={13} className="mt-0.5 shrink-0" />
                                        {f}
                                    </li>
                                ))}
                            </ul>
                        </button>
                    ))}
                </div>

                {/* Payment steps */}
                <div className="mt-8 grid gap-4 lg:grid-cols-2">
                    {/* Step 1: bKash Merchant Payment */}
                    <div className="rounded-2xl border border-slate-200 bg-white p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="w-7 h-7 rounded-full bg-pink-100 text-pink-700 text-xs font-black flex items-center justify-center">১</span>
                            <h3 className="font-bold text-slate-900">bKash এ Payment করো</h3>
                        </div>
                        <div className="rounded-xl bg-pink-50 border border-pink-100 p-4 text-center">
                            <p className="text-xs text-pink-600 font-semibold uppercase tracking-wide">bKash Merchant Number</p>
                            <p className="text-2xl font-black text-pink-700 mt-1">01965056156</p>
                            <p className="text-xs text-pink-500 mt-1">(App-এ "Payment" অথবা *247# ডায়াল করে "Make Payment" করুন)</p>
                        </div>
                        
                        <div className="mt-4 space-y-2 text-xs text-slate-600 bg-slate-50 p-4 rounded-xl border border-slate-100">
                            <p className="font-bold text-slate-800 uppercase tracking-wide text-[9px] mb-1">পেমেন্ট করার নিয়মাবলী (Payment Rules):</p>
                            <p>১. বিকাশ অ্যাপের <b>"Payment" (পেমেন্ট)</b> অপশনে যান অথবা <b>*247#</b> ডায়াল করে <b>Make Payment</b> সিলেক্ট করুন।</p>
                            <p>২. মার্চেন্ট নম্বর দিন: <b>01965056156</b></p>
                            <p>৩. টাকার পরিমাণ দিন: <b>৳{plan.price}</b></p>
                            <p>৪. পেমেন্ট সম্পন্ন হলে বিকাশ থেকে প্রাপ্ত <b>Transaction ID</b> সংগ্রহ করুন।</p>
                            <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-[11px]">
                                <span className="text-slate-500">নগদ / রকেট বা সহায়তার জন্য:</span>
                                <a href="https://wa.me/8801714740430?text=I%20need%20help%20with%20payment" target="_blank" rel="noopener noreferrer" className="font-bold text-emerald-600 hover:underline flex items-center gap-1">
                                    💬 WhatsApp: 01714740430
                                </a>
                            </div>
                        </div>

                        <div className="mt-4 rounded-xl bg-indigo-50/30 border border-indigo-100 p-4">
                            <div className="flex justify-between text-sm">
                                <span className="text-slate-500">Selected Plan</span>
                                <span className="font-semibold text-slate-900">{plan.name}</span>
                            </div>
                            <div className="flex justify-between text-sm mt-2">
                                <span className="text-slate-500">Payable Amount</span>
                                <span className="font-bold text-indigo-700">৳{plan.price}</span>
                            </div>
                        </div>
                        
                        <div className="mt-3 bg-emerald-50 text-emerald-800 border border-emerald-250 p-3.5 rounded-xl text-xs flex gap-2">
                            <span className="text-base leading-none">⚡</span>
                            <p className="font-semibold">
                                <b>Instant Activation</b>: SMS-ভিত্তিক অটো পেমেন্ট ভেরিফিকেশন সিস্টেম চালু আছে। Transaction ID সাবমিট করার সাথে সাথে আপনার অ্যাকাউন্ট অ্যাক্টিভেট হয়ে যাবে!
                            </p>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="space-y-4">
                        <form onSubmit={submitPayment} className="rounded-2xl border border-slate-200 bg-white p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="w-7 h-7 rounded-full bg-blue-100 text-blue-700 text-xs font-black flex items-center justify-center">২</span>
                                <h3 className="font-bold text-slate-900">Request Submit করো</h3>
                            </div>
                            <div className="space-y-3">
                                <input
                                    className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-blue-500"
                                    placeholder="তোমার Email"
                                    type="email"
                                    value={form.email}
                                    onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                                    required
                                />
                                <input
                                    className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-blue-500"
                                    placeholder="অ্যাকাউন্টের পাসওয়ার্ড (Password)"
                                    type="password"
                                    value={form.password}
                                    onChange={(e) => setForm((p) => ({ ...p, password: e.target.value }))}
                                    required
                                />
                                <input
                                    className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-blue-500"
                                    placeholder="bKash Transaction ID"
                                    value={form.transactionId}
                                    onChange={(e) => setForm((p) => ({ ...p, transactionId: e.target.value }))}
                                    required
                                />
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-bold text-white hover:bg-blue-500 disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed"
                                >
                                    {loading ? 'Submitting...' : 'Submit Request'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {message && (
                    <div className={`mt-4 rounded-xl px-4 py-3 text-sm font-medium ${messageType === 'success'
                            ? 'bg-emerald-50 border border-emerald-200 text-emerald-800'
                            : 'bg-red-50 border border-red-200 text-red-800'
                        }`}>
                        {message}
                        {messageType === 'success' && (
                            <Link href="/dashboard" className="ml-2 underline font-bold">Dashboard →</Link>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default function PaymentPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-[#f5f6fa] flex items-center justify-center text-slate-500">Loading...</div>}>
            <PaymentContent />
        </Suspense>
    );
}
