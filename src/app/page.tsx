import { prisma } from "../lib/prisma";
import { getHomepageSettings } from "../lib/homepageSettings";
import { getDynamicPageContent } from "../lib/dynamicPages";
import Link from 'next/link';
import Footer from '../components/Footer';

export const revalidate = 60; // Revalidate every 60 seconds (ISR) for fast Vercel edge caching

import Image from 'next/image';

export default async function HomePage() {
  const settings = await getHomepageSettings();
  const faqData = await getDynamicPageContent('FAQ_SETTINGS');
  const faqs = faqData?.faqs || [];
  const menuLinks = await prisma.menuLink.findMany({ orderBy: { order: 'asc' } });

  const noticeText =
    settings.noticeText ||
    "📢 নোটিশ: LearnCare Academy-র স্পোকেন ও IELTS কোর্সে স্পেশাল ছাড় পেতে আজই ফ্রি টেস্ট দিন!";

  return (
    <>
      <div className="min-h-screen bg-[#f1f5f9] text-slate-900 font-sans selection:bg-indigo-600 selection:text-white">
        <div className="bg-[#020617] text-slate-300 text-[11px] px-4 py-2 border-b border-slate-800/80 sticky top-0 z-50">
          <div className="mx-auto max-w-7xl flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 overflow-hidden w-full md:w-auto">
              <span className="bg-rose-600/20 text-rose-400 font-bold px-2 py-0.5 rounded-full uppercase tracking-wider flex-shrink-0 flex items-center gap-1 border border-rose-500/30">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-zap animate-pulse"
                  aria-hidden="true"
                >
                  <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                </svg>
                Flash News
              </span>
              <div className="overflow-hidden whitespace-nowrap mask-image-fade">
                <p className="animate-marquee inline-block font-medium tracking-wide">
                  {noticeText}
                </p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-4 flex-shrink-0 font-medium">
              <a
                href={`tel:${settings.contact?.hotlinePhone || "01714740430"}`}
                className="hover:text-white transition flex items-center gap-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="11"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-phone text-slate-400"
                  aria-hidden="true"
                >
                  <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
                </svg>
                Call: {/* */}
                {settings.contact?.hotlinePhone || "01714740430"}
              </a>
              <span className="text-slate-700">|</span>
              <a
                href={`https://wa.me/88${settings.contact?.whatsappNumber || "01714740430"}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-400 transition flex items-center gap-1 text-emerald-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="11"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-message-square"
                  aria-hidden="true"
                >
                  <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                </svg>
                WhatsApp: {/* */}
                {settings.contact?.hotlinePhone || "01714740430"}
              </a>
            </div>
          </div>
        </div>
        <header className="bg-[#0f172a]/95 backdrop-blur-xl border-b border-slate-800/60 sticky top-[34px] z-40 shadow-xl shadow-slate-900/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-6">
            <a
              className="flex items-center group flex-shrink-0 transition hover:opacity-90"
              href="/"
            >
              <Image
                src="https://learncarebd.com/wp-content/uploads/2025/12/Learncare-academy-1-scaled.png"
                alt="LearnCare Academy"
                width={200}
                height={48}
                className="h-10 sm:h-12 w-auto object-contain bg-white rounded-md p-1"
              />
            </a>
            <nav className="hidden lg:flex items-center gap-8 text-[13px] font-bold text-slate-300">
              {menuLinks.map((link) => (
                <a key={link.id} href={link.url} className="hover:text-emerald-400 transition flex items-center gap-1.5">
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
              <a
                href="https://learncarebd.com/6409-2/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group overflow-hidden rounded-xl bg-gradient-to-r from-rose-500 to-indigo-600 px-4 py-2 text-xs font-black text-white transition-all hover:scale-105 shadow-lg shadow-rose-500/25 hidden sm:flex"
              >
                <span className="relative z-10 flex items-center gap-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-sparkles animate-pulse"
                    aria-hidden="true"
                  >
                    <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                    <path d="M20 2v4"></path>
                    <path d="M22 4h-4"></path>
                    <circle cx="4" cy="20" r="2"></circle>
                  </svg>
                  Free Level Test
                </span>
                <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
              </a>
              <a
                className="rounded-xl border border-slate-700 bg-slate-800/80 px-4 py-2 text-xs font-bold text-slate-300 hover:text-white hover:bg-slate-700 transition"
                href="/login"
              >
                Login
              </a>
              <a
                className="hidden md:inline-flex rounded-xl bg-teal-600/20 border border-teal-500/30 text-teal-400 hover:bg-teal-600 hover:text-white px-4 py-2 text-xs font-bold transition"
                href="/ai-26/login"
              >
                Admin
              </a>
            </div>
          </div>
        </header>
        <section className="relative overflow-hidden bg-[#090e1a] pt-16 pb-24 border-b border-slate-800">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-600/20 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-700/50 bg-slate-800/50 px-4 py-1.5 text-xs font-bold text-slate-300 mb-6 backdrop-blur-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-crown text-amber-400"
                  aria-hidden="true"
                >
                  <path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path>
                  <path d="M5 21h14"></path>
                </svg>
                <span>{settings.hero?.badge || "দেশের সেরা AI Spoken & IELTS লার্নিং প্ল্যাটফর্ম"}</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black tracking-tight text-white leading-[1.25]">
                {settings.hero?.title || "সহজ পদ্ধতিতে স্পোকেন ইংলিশ ও"} <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                  {settings.hero?.highlightText || "IELTS Band 7.5+ প্রস্তুতি"}
                </span>
              </h1>
              <p className="mt-6 text-sm sm:text-base text-slate-400 font-medium leading-relaxed max-w-2xl mx-auto">
                {settings.hero?.subtitle || "সঠিক ব্রিটিশ উচ্চারণ (IPA), New Headway ডিকটেশন, Cambridge 9-20 রিয়েল অডিও টেস্ট এবং AI স্পিকিং-রাইটিং মূল্যায়নে সাবলীল ইংরেজি শিখুন ঘরে বসেই।"}
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 lg:gap-10 max-w-5xl mx-auto">
              <a
                className="group relative rounded-3xl border border-emerald-500/30 bg-slate-900/60 p-1 overflow-hidden backdrop-blur-md hover:border-emerald-400/60 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-900/20 block"
                href="/dashboard/spoken-english"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent pointer-events-none"></div>
                <div className="bg-[#0b1320] rounded-[22px] h-full p-6 sm:p-8 flex flex-col relative z-10">
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white mb-6 shadow-lg shadow-emerald-900/50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-mic"
                      aria-hidden="true"
                    >
                      <path d="M12 19v3"></path>
                      <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                      <rect x="9" y="2" width="6" height="13" rx="3"></rect>
                    </svg>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">
                    Spoken English Hub
                  </h2>
                  <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                    সঠিক ব্রিটিশ উচ্চারণ, ফ্লুয়েন্সি এবং লাইভ প্র্যাকটিস ল্যাব।
                    প্রথমে ফ্রি টুলস ব্যবহার করুন, তারপর প্রিমিয়াম বুটক্যাম্পে
                    আপগ্রেড করুন।
                  </p>
                  <ul className="space-y-2.5 mb-8 flex-1 text-[13px] text-slate-300 font-medium">
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-circle-check text-emerald-400 flex-shrink-0"
                        aria-hidden="true"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>{" "}
                      24/7 AI Tutor
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-circle-check text-emerald-400 flex-shrink-0"
                        aria-hidden="true"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>{" "}
                      Headway Dictation
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-circle-check text-emerald-400 flex-shrink-0"
                        aria-hidden="true"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>{" "}
                      Pronunciation Lab
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-circle-check text-emerald-400 flex-shrink-0"
                        aria-hidden="true"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>{" "}
                      Conversational Phrases
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-circle-check text-emerald-400 flex-shrink-0"
                        aria-hidden="true"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>{" "}
                      AI Conversation
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-circle-check text-emerald-400 flex-shrink-0"
                        aria-hidden="true"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>{" "}
                      English Stories
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-circle-check text-emerald-400 flex-shrink-0"
                        aria-hidden="true"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>{" "}
                      Grammar Academy
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-circle-check text-emerald-400 flex-shrink-0"
                        aria-hidden="true"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>{" "}
                      Grammar Practice
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-circle-check text-emerald-400 flex-shrink-0"
                        aria-hidden="true"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>{" "}
                      Grammar Checker
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-circle-check text-emerald-400 flex-shrink-0"
                        aria-hidden="true"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>{" "}
                      Vocabulary &amp; Words
                    </li>
                  </ul>
                  <div className="flex flex-col gap-2 w-full mt-auto">
                    <div className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 group-hover:bg-emerald-400 text-slate-950 py-3.5 text-[13px] font-black transition-all shadow-lg shadow-emerald-500/20">
                      Start for Free (ফ্রি শুরু করুন){" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-arrow-right"
                        aria-hidden="true"
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </div>
                    <p className="text-[10px] text-center text-emerald-200/60 font-medium">
                      Start with 100% free tools. Upgrade to Premium anytime.
                    </p>
                  </div>
                </div>
              </a>
              <a
                className="group relative rounded-3xl border border-indigo-500/30 bg-slate-900/60 p-1 overflow-hidden backdrop-blur-md hover:border-indigo-400/60 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-900/20 block"
                href="/dashboard"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent pointer-events-none"></div>
                <div className="bg-[#0b1320] rounded-[22px] h-full p-6 sm:p-8 flex flex-col relative z-10">
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white mb-6 shadow-lg shadow-indigo-900/50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-graduation-cap"
                      aria-hidden="true"
                    >
                      <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path>
                      <path d="M22 10v6"></path>
                      <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
                    </svg>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">
                    IELTS Band 7.5+
                  </h2>
                  <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                    কেমব্রিজ রিয়েল টেস্ট, এআই মূল্যায়ন। প্রথমে ফ্রি মক টেস্ট
                    দিন, তারপর এক্সপার্ট মেন্টরশিপে আপগ্রেড করুন।
                  </p>
                  <ul className="space-y-2.5 mb-8 flex-1 text-[13px] text-slate-300 font-medium">
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-circle-check text-indigo-400 flex-shrink-0"
                        aria-hidden="true"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>{" "}
                      24/7 AI Tutor
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-circle-check text-indigo-400 flex-shrink-0"
                        aria-hidden="true"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>{" "}
                      Cambridge Books 9-20
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-circle-check text-indigo-400 flex-shrink-0"
                        aria-hidden="true"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>{" "}
                      Cambridge 9-20 Full Mock Tests
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-circle-check text-indigo-400 flex-shrink-0"
                        aria-hidden="true"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>{" "}
                      AI Writing Evaluation System
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-circle-check text-indigo-400 flex-shrink-0"
                        aria-hidden="true"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>{" "}
                      Real-time Speaking Simulator
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-circle-check text-indigo-400 flex-shrink-0"
                        aria-hidden="true"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>{" "}
                      Band Score Prediction
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-circle-check text-indigo-400 flex-shrink-0"
                        aria-hidden="true"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>{" "}
                      Grammar Checker
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-circle-check text-indigo-400 flex-shrink-0"
                        aria-hidden="true"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>{" "}
                      Vocabulary &amp; Words
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-circle-check text-indigo-400 flex-shrink-0"
                        aria-hidden="true"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>{" "}
                      English Stories
                    </li>
                  </ul>
                  <div className="flex flex-col gap-2 w-full mt-auto">
                    <div className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-500 group-hover:bg-indigo-400 text-white py-3.5 text-[13px] font-black transition-all shadow-lg shadow-indigo-500/20">
                      Start for Free (ফ্রি শুরু করুন){" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-arrow-right"
                        aria-hidden="true"
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </div>
                    <p className="text-[10px] text-center text-indigo-200/60 font-medium">
                      Start with 100% free tools. Upgrade to Premium anytime.
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>
        <section id="premium-courses" className="py-24 bg-[#f8fafc] border-b border-slate-200 relative overflow-hidden">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col items-center text-center mb-16">
              <span className="bg-amber-100 text-amber-700 border border-amber-200 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest flex items-center gap-2 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-crown" aria-hidden="true"><path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path><path d="M5 21h14"></path></svg> 
                {settings.coursesSection?.badge || 'PREMIUM COURSES'}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
                {settings.coursesSection?.title || 'আমাদের জনপ্রিয় কোর্সসমূহ'}
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto font-medium">
                {settings.coursesSection?.subtitle || 'আপনার লক্ষ্য অনুযায়ী সঠিক কোর্সটি নির্বাচন করুন'}
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {(settings.coursesSection?.items || []).map((course, idx) => (
                <div key={course.id || idx} className="bg-white border border-slate-200 hover:border-emerald-300 rounded-[32px] p-2 transition-all duration-500 group shadow-lg hover:shadow-emerald-900/10 flex flex-col h-full">
                  <div className="bg-white rounded-[24px] h-full flex flex-col overflow-hidden relative">
                    {idx === 0 && (
                        <div className="absolute top-0 right-0 bg-emerald-600 text-white text-[10px] font-black px-4 py-1.5 rounded-bl-xl uppercase z-20 shadow-md">Best Value</div>
                    )}
                    <div className="h-56 w-full relative overflow-hidden bg-slate-50 shrink-0">
                      <img src={course.image || '/images/bootcamp.png'} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="p-8 flex flex-col flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="bg-emerald-50 text-emerald-700 text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded border border-emerald-200">
                          Premium
                        </span>
                      </div>
                      <h3 className="text-2xl font-black text-slate-900 mb-3 leading-snug">
                        {course.title}
                      </h3>
                      <p className="text-sm text-slate-600 mb-8 flex-1 leading-relaxed">
                        {course.subtitle}
                      </p>
                      <div className="flex items-end justify-between mb-6 shrink-0">
                        <div>
                          <p className="text-xs text-slate-500 mb-1">Course Fee</p>
                          <div className="flex items-center gap-2">
                            {course.originalPrice && (
                                <span className="line-through text-sm text-slate-400">৳{course.originalPrice}</span>
                            )}
                            <span className="text-3xl font-black text-emerald-600">৳{course.price}</span>
                          </div>
                        </div>
                      </div>
                      <a className="w-full shrink-0 inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-2xl text-sm font-black transition-all shadow-md hover:shadow-lg mt-auto" href={course.url}>
                        Explore Course <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section
          id="spoken-portal"
          className="py-20 bg-white border-b border-slate-200 relative overflow-hidden"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center mb-16">
              <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest flex items-center gap-2 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-radio animate-pulse"
                  aria-hidden="true"
                >
                  <path d="M16.247 7.761a6 6 0 0 1 0 8.478"></path>
                  <path d="M19.075 4.933a10 10 0 0 1 0 14.134"></path>
                  <path d="M4.925 19.067a10 10 0 0 1 0-14.134"></path>
                  <path d="M7.753 16.239a6 6 0 0 1 0-8.478"></path>
                  <circle cx="12" cy="12" r="2"></circle>
                </svg>{" "}
                Free Tools
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
                স্পোকেন ইংলিশের ১০০% ফ্রি ল্যাব ও টুলস
              </h2>
              <p className="mt-4 text-sm text-slate-600 max-w-2xl mx-auto">
                ফ্লুয়েন্সি এবং উচ্চারণ ঠিক করার জন্য আমাদের এআই ভিত্তিক টুলস।
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-10">
              <div className="bg-[#f8fafc] border border-slate-200 rounded-3xl p-6 hover:shadow-xl transition-all group flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="h-12 w-12 rounded-2xl bg-fuchsia-100 text-fuchsia-600 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-bot"
                      aria-hidden="true"
                    >
                      <path d="M12 8V4H8"></path>
                      <rect width="16" height="12" x="4" y="8" rx="2"></rect>
                      <path d="M2 14h2"></path>
                      <path d="M20 14h2"></path>
                      <path d="M15 13v2"></path>
                      <path d="M9 13v2"></path>
                    </svg>
                  </div>
                  <span className="bg-fuchsia-100 text-fuchsia-800 text-[10px] font-black px-2.5 py-1 rounded-lg uppercase">
                    24/7 Support
                  </span>
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-2">
                  24/7 AI Tutor
                </h3>
                <p className="text-xs text-slate-600 mb-6 flex-1 leading-relaxed">
                  Get instant help with grammar, translations, speaking tips, or
                  any English problem anytime from our smart AI tutor.
                </p>
                <a
                  className="inline-flex items-center justify-center gap-2 bg-white border border-slate-200 hover:border-fuchsia-300 hover:text-fuchsia-700 w-full py-2.5 rounded-xl text-xs font-bold transition"
                  href="/dashboard/spoken-english"
                >
                  Ask Tutor{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-arrow-right"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              <div className="bg-[#f8fafc] border border-slate-200 rounded-3xl p-6 hover:shadow-xl transition-all group flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-emerald-600 text-white text-[10px] font-black px-3 py-1 rounded-bl-lg shadow-sm z-10">
                  Premium Lock
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div className="h-12 w-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-headphones"
                      aria-hidden="true"
                    >
                      <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path>
                    </svg>
                  </div>
                  <span className="bg-emerald-100 text-emerald-800 text-[10px] font-black px-2.5 py-1 rounded-lg uppercase">
                    4 Units Free
                  </span>
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-2">
                  Headway Dictation
                </h3>
                <p className="text-xs text-slate-600 mb-6 flex-1 leading-relaxed">
                  New Headway Beginner lessons. প্রথম ৪টি ইউনিট সম্পূর্ণ ফ্রি,
                  বাকিগুলো আনলক করতে স্পোকেন সাবস্ক্রিপশন প্রয়োজন।
                </p>
                <a
                  className="inline-flex items-center justify-center gap-2 bg-white border border-slate-200 hover:border-emerald-300 hover:text-emerald-700 w-full py-2.5 rounded-xl text-xs font-bold transition"
                  href="/dashboard/spoken-english"
                >
                  Start Practice{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-arrow-right"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              <div className="bg-[#f8fafc] border border-slate-200 rounded-3xl p-6 hover:shadow-xl transition-all group flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="h-12 w-12 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-sparkles"
                      aria-hidden="true"
                    >
                      <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                      <path d="M20 2v4"></path>
                      <path d="M22 4h-4"></path>
                      <circle cx="4" cy="20" r="2"></circle>
                    </svg>
                  </div>
                  <span className="bg-sky-100 text-sky-800 text-[10px] font-black px-2.5 py-1 rounded-lg uppercase">
                    100% Free
                  </span>
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-2">
                  Pronunciation Lab
                </h3>
                <p className="text-xs text-slate-600 mb-6 flex-1 leading-relaxed">
                  Evaluate and improve your spoken English pronunciation with
                  real-time speech analysis.
                </p>
                <a
                  className="inline-flex items-center justify-center gap-2 bg-white border border-slate-200 hover:border-sky-300 hover:text-sky-700 w-full py-2.5 rounded-xl text-xs font-bold transition"
                  href="/dashboard/spoken-english"
                >
                  Start Practice{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-arrow-right"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              <div className="bg-[#f8fafc] border border-slate-200 rounded-3xl p-6 hover:shadow-xl transition-all group flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="h-12 w-12 rounded-2xl bg-teal-100 text-teal-600 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-message-square"
                      aria-hidden="true"
                    >
                      <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                    </svg>
                  </div>
                  <span className="bg-teal-100 text-teal-800 text-[10px] font-black px-2.5 py-1 rounded-lg uppercase">
                    100% Free
                  </span>
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-2">
                  Conversational Phrases
                </h3>
                <p className="text-xs text-slate-600 mb-6 flex-1 leading-relaxed">
                  Learn high-frequency daily phrases with interactive playbacks,
                  MCQ quizzes, and fill-in-the-gap exercises.
                </p>
                <a
                  className="inline-flex items-center justify-center gap-2 bg-white border border-slate-200 hover:border-teal-300 hover:text-teal-700 w-full py-2.5 rounded-xl text-xs font-bold transition"
                  href="/dashboard/spoken-english"
                >
                  Start Practice{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-arrow-right"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              <div className="bg-[#f8fafc] border border-slate-200 rounded-3xl p-6 hover:shadow-xl transition-all group flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="h-12 w-12 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-bot"
                      aria-hidden="true"
                    >
                      <path d="M12 8V4H8"></path>
                      <rect width="16" height="12" x="4" y="8" rx="2"></rect>
                      <path d="M2 14h2"></path>
                      <path d="M20 14h2"></path>
                      <path d="M15 13v2"></path>
                      <path d="M9 13v2"></path>
                    </svg>
                  </div>
                  <span className="bg-rose-100 text-rose-800 text-[10px] font-black px-2.5 py-1 rounded-lg uppercase">
                    100% Free
                  </span>
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-2">
                  AI Conversation
                </h3>
                <p className="text-xs text-slate-600 mb-6 flex-1 leading-relaxed">
                  Practice speaking English in real-life contexts with
                  interactive AI audio.
                </p>
                <a
                  className="inline-flex items-center justify-center gap-2 bg-white border border-slate-200 hover:border-rose-300 hover:text-rose-700 w-full py-2.5 rounded-xl text-xs font-bold transition"
                  href="/dashboard/spoken-english"
                >
                  Start Practice{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-arrow-right"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              <div className="bg-[#f8fafc] border border-slate-200 rounded-3xl p-6 hover:shadow-xl transition-all group flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="h-12 w-12 rounded-2xl bg-green-100 text-green-600 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-book-open"
                      aria-hidden="true"
                    >
                      <path d="M12 7v14"></path>
                      <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                    </svg>
                  </div>
                  <span className="bg-green-100 text-green-800 text-[10px] font-black px-2.5 py-1 rounded-lg uppercase">
                    100% Free
                  </span>
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-2">
                  English Stories
                </h3>
                <p className="text-xs text-slate-600 mb-6 flex-1 leading-relaxed">
                  Read engaging short stories. Click any word to see its Bengali
                  meaning instantly.
                </p>
                <a
                  className="inline-flex items-center justify-center gap-2 bg-white border border-slate-200 hover:border-green-300 hover:text-green-700 w-full py-2.5 rounded-xl text-xs font-bold transition"
                  href="/dashboard/spoken-english"
                >
                  Start Practice{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-arrow-right"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              <div className="bg-[#f8fafc] border border-slate-200 rounded-3xl p-6 hover:shadow-xl transition-all group flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="h-12 w-12 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-graduation-cap"
                      aria-hidden="true"
                    >
                      <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path>
                      <path d="M22 10v6"></path>
                      <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
                    </svg>
                  </div>
                  <span className="bg-purple-100 text-purple-800 text-[10px] font-black px-2.5 py-1 rounded-lg uppercase">
                    100% Free
                  </span>
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-2">
                  Grammar Academy
                </h3>
                <p className="text-xs text-slate-600 mb-6 flex-1 leading-relaxed">
                  Learn grammar from absolute scratch with unit-based lessons
                  and interactive practice quizzes.
                </p>
                <a
                  className="inline-flex items-center justify-center gap-2 bg-white border border-slate-200 hover:border-purple-300 hover:text-purple-700 w-full py-2.5 rounded-xl text-xs font-bold transition"
                  href="/dashboard/spoken-english"
                >
                  Start Practice{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-arrow-right"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              <div className="bg-[#f8fafc] border border-slate-200 rounded-3xl p-6 hover:shadow-xl transition-all group flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="h-12 w-12 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-circle-check"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                  </div>
                  <span className="bg-indigo-100 text-indigo-800 text-[10px] font-black px-2.5 py-1 rounded-lg uppercase">
                    100% Free
                  </span>
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-2">
                  Grammar Practice
                </h3>
                <p className="text-xs text-slate-600 mb-6 flex-1 leading-relaxed">
                  Interactive grammar quizzes with Easy, Medium, and Hard
                  difficulty levels.
                </p>
                <a
                  className="inline-flex items-center justify-center gap-2 bg-white border border-slate-200 hover:border-indigo-300 hover:text-indigo-700 w-full py-2.5 rounded-xl text-xs font-bold transition"
                  href="/dashboard/spoken-english"
                >
                  Start Practice{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-arrow-right"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              <div className="bg-[#f8fafc] border border-slate-200 rounded-3xl p-6 hover:shadow-xl transition-all group flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="h-12 w-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-shield-check"
                      aria-hidden="true"
                    >
                      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                  </div>
                  <span className="bg-blue-100 text-blue-800 text-[10px] font-black px-2.5 py-1 rounded-lg uppercase">
                    100% Free
                  </span>
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-2">
                  Grammar Checker
                </h3>
                <p className="text-xs text-slate-600 mb-6 flex-1 leading-relaxed">
                  Check your writing structure and let AI explain the rules in
                  Bengali.
                </p>
                <a
                  className="inline-flex items-center justify-center gap-2 bg-white border border-slate-200 hover:border-blue-300 hover:text-blue-700 w-full py-2.5 rounded-xl text-xs font-bold transition"
                  href="/dashboard/spoken-english"
                >
                  Start Practice{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-arrow-right"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              <div className="bg-[#f8fafc] border border-slate-200 rounded-3xl p-6 hover:shadow-xl transition-all group flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="h-12 w-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-layers"
                      aria-hidden="true"
                    >
                      <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path>
                      <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path>
                      <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>
                    </svg>
                  </div>
                  <span className="bg-amber-100 text-amber-800 text-[10px] font-black px-2.5 py-1 rounded-lg uppercase">
                    100% Free
                  </span>
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-2">
                  Vocabulary &amp; Words
                </h3>
                <p className="text-xs text-slate-600 mb-6 flex-1 leading-relaxed">
                  Learn &amp; practice phrasal verbs, important verbs, nouns,
                  adjectives, adverbs, prepositions, conjunctions, and
                  interjections.
                </p>
                <a
                  className="inline-flex items-center justify-center gap-2 bg-white border border-slate-200 hover:border-amber-300 hover:text-amber-700 w-full py-2.5 rounded-xl text-xs font-bold transition"
                  href="/dashboard/spoken-english"
                >
                  Start Practice{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-arrow-right"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="max-w-2xl mx-auto bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-6">
              <div className="h-16 w-16 bg-slate-900 text-emerald-400 rounded-2xl flex items-center justify-center flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-book-marked"
                  aria-hidden="true"
                >
                  <path d="M10 2v8l3-3 3 3V2"></path>
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"></path>
                </svg>
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="font-bold text-slate-900 mb-1">
                  Oxford 3000™ Vocabulary Mastery
                </h3>
                <p className="text-xs text-slate-600">
                  আন্তর্জাতিক ব্রিটিশ ফনেটিক্স (IPA) সহ বহুল ব্যবহৃত ৩০০০ শব্দ
                  আয়ত্ত করার কোর্স।
                </p>
              </div>
              <div className="flex-shrink-0 text-center sm:text-right">
                <p className="text-lg font-black text-emerald-600 mb-2">
                  ৳149 BDT
                </p>
                <a
                  className="inline-flex bg-slate-900 hover:bg-slate-800 text-white px-5 py-2 rounded-xl text-xs font-bold transition"
                  href="/courses/oxford-3000-vocabulary-mastery"
                >
                  কোর্সে এনরোল করুন
                </a>
              </div>
            </div>
          </div>
        </section>
        <section
          id="ielts-portal"
          className="py-20 bg-[#f8fafc] border-b border-slate-200 relative overflow-hidden"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center mb-16">
              <span className="bg-indigo-100 text-indigo-700 border border-indigo-200 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest flex items-center gap-2 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-graduation-cap"
                  aria-hidden="true"
                >
                  <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path>
                  <path d="M22 10v6"></path>
                  <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
                </svg>{" "}
                Free Tools
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
                IELTS প্রস্তুতির ১০০% ফ্রি টুলস ও ল্যাব
              </h2>
              <p className="mt-4 text-sm text-slate-600 max-w-2xl mx-auto">
                রিয়েল অডিও ট্র্যাক দিয়ে অনলাইনে লিসেনিং ও রাইটিং প্র্যাকটিস
                করুন।
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-10">
              <div className="bg-[#f8fafc] border border-slate-200 rounded-3xl p-6 hover:shadow-xl transition-all group flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-fuchsia-600 text-white text-[10px] font-black px-3 py-1 rounded-bl-lg shadow-sm z-10">
                  Premium Lock
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div className="h-12 w-12 rounded-2xl bg-fuchsia-100 text-fuchsia-600 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-bot"
                      aria-hidden="true"
                    >
                      <path d="M12 8V4H8"></path>
                      <rect width="16" height="12" x="4" y="8" rx="2"></rect>
                      <path d="M2 14h2"></path>
                      <path d="M20 14h2"></path>
                      <path d="M15 13v2"></path>
                      <path d="M9 13v2"></path>
                    </svg>
                  </div>
                  <span className="bg-fuchsia-100 text-fuchsia-800 text-[10px] font-black px-2.5 py-1 rounded-lg uppercase">
                    3 Free Chats
                  </span>
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-2">
                  IELTS 24/7 AI Tutor
                </h3>
                <p className="text-xs text-slate-600 mb-6 flex-1 leading-relaxed">
                  কেমব্রিজ বইয়ের যেকোনো প্রশ্নের উত্তর বাংলায় বুঝিয়ে দেবে AI
                  Tutor! নতুন অ্যাকাউন্টে ৩টি চ্যাট ফ্রি, আনলিমিটেডের জন্য
                  আপগ্রেড করুন।
                </p>
                <a
                  className="inline-flex items-center justify-center gap-2 bg-white border border-slate-200 hover:border-fuchsia-300 hover:text-fuchsia-700 w-full py-2.5 rounded-xl text-xs font-bold transition"
                  href="/dashboard"
                >
                  Ask Tutor{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-arrow-right"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              <div className="bg-[#f8fafc] border border-slate-200 rounded-3xl p-6 hover:shadow-xl transition-all group flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="h-12 w-12 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-volume2 lucide-volume-2"
                      aria-hidden="true"
                    >
                      <path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"></path>
                      <path d="M16 9a5 5 0 0 1 0 6"></path>
                      <path d="M19.364 18.364a9 9 0 0 0 0-12.728"></path>
                    </svg>
                  </div>
                  <span className="bg-indigo-100 text-indigo-800 text-[10px] font-black px-2.5 py-1 rounded-lg uppercase">
                    Free Tool
                  </span>
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-2">
                  Cambridge 9-20 Mock Tests
                </h3>
                <p className="text-xs text-slate-600 mb-6 flex-1 leading-relaxed">
                  আনলিমিটেড মক টেস্ট দিন এবং অটো-স্কোর পান সম্পূর্ণ ফ্রিতে।
                  (বিস্তারিত AI Evaluation শুধু প্রিমিয়াম মেম্বারদের জন্য)
                </p>
                <a
                  className="inline-flex items-center justify-center gap-2 bg-white border border-slate-200 hover:border-indigo-300 hover:text-indigo-700 w-full py-2.5 rounded-xl text-xs font-bold transition"
                  href="/dashboard"
                >
                  মক টেস্ট শুরু করুন{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-arrow-right"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              <div className="bg-[#f8fafc] border border-slate-200 rounded-3xl p-6 hover:shadow-xl transition-all group flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="h-12 w-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-file-text"
                      aria-hidden="true"
                    >
                      <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                      <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                      <path d="M10 9H8"></path>
                      <path d="M16 13H8"></path>
                      <path d="M16 17H8"></path>
                    </svg>
                  </div>
                  <span className="bg-blue-100 text-blue-800 text-[10px] font-black px-2.5 py-1 rounded-lg uppercase">
                    AI Driven
                  </span>
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-2">
                  AI Writing Evaluation
                </h3>
                <p className="text-xs text-slate-600 mb-6 flex-1 leading-relaxed">
                  আপনার রাইটিং টাস্ক সাবমিট করুন এবং এআই এর মাধ্যমে সাথে সাথেই
                  ব্যান্ড স্কোর ও ভুলগুলো জেনে নিন।
                </p>
                <a
                  className="inline-flex items-center justify-center gap-2 bg-white border border-slate-200 hover:border-blue-300 hover:text-blue-700 w-full py-2.5 rounded-xl text-xs font-bold transition"
                  href="/dashboard"
                >
                  রাইটিং চেক করুন{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-arrow-right"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              <div className="bg-[#f8fafc] border border-slate-200 rounded-3xl p-6 hover:shadow-xl transition-all group flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="h-12 w-12 rounded-2xl bg-teal-100 text-teal-600 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-shield-check"
                      aria-hidden="true"
                    >
                      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                  </div>
                  <span className="bg-teal-100 text-teal-800 text-[10px] font-black px-2.5 py-1 rounded-lg uppercase">
                    Tool
                  </span>
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-2">
                  Grammar Checker
                </h3>
                <p className="text-xs text-slate-600 mb-6 flex-1 leading-relaxed">
                  Check your IELTS writing and speaking structure, and let AI
                  explain the rules.
                </p>
                <a
                  className="inline-flex items-center justify-center gap-2 bg-white border border-slate-200 hover:border-teal-300 hover:text-teal-700 w-full py-2.5 rounded-xl text-xs font-bold transition"
                  href="/dashboard"
                >
                  Check Grammar{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-arrow-right"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              <div className="bg-[#f8fafc] border border-slate-200 rounded-3xl p-6 hover:shadow-xl transition-all group flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="h-12 w-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-layers"
                      aria-hidden="true"
                    >
                      <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path>
                      <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path>
                      <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>
                    </svg>
                  </div>
                  <span className="bg-amber-100 text-amber-800 text-[10px] font-black px-2.5 py-1 rounded-lg uppercase">
                    Vocab
                  </span>
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-2">
                  Vocabulary &amp; Words
                </h3>
                <p className="text-xs text-slate-600 mb-6 flex-1 leading-relaxed">
                  Learn &amp; practice advanced IELTS vocabulary (Band 7-9) with
                  synonyms and usage.
                </p>
                <a
                  className="inline-flex items-center justify-center gap-2 bg-white border border-slate-200 hover:border-amber-300 hover:text-amber-700 w-full py-2.5 rounded-xl text-xs font-bold transition"
                  href="/dashboard"
                >
                  Start Practice{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-arrow-right"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              <div className="bg-[#f8fafc] border border-slate-200 rounded-3xl p-6 hover:shadow-xl transition-all group flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="h-12 w-12 rounded-2xl bg-green-100 text-green-600 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-book-open"
                      aria-hidden="true"
                    >
                      <path d="M12 7v14"></path>
                      <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                    </svg>
                  </div>
                  <span className="bg-green-100 text-green-800 text-[10px] font-black px-2.5 py-1 rounded-lg uppercase">
                    Reading
                  </span>
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-2">
                  English Stories
                </h3>
                <p className="text-xs text-slate-600 mb-6 flex-1 leading-relaxed">
                  Improve your reading comprehension with short stories. Click
                  any word to see its meaning instantly.
                </p>
                <a
                  className="inline-flex items-center justify-center gap-2 bg-white border border-slate-200 hover:border-green-300 hover:text-green-700 w-full py-2.5 rounded-xl text-xs font-bold transition"
                  href="/dashboard"
                >
                  Start Practice{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-arrow-right"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
        
        {faqs.length > 0 && (
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">Frequently Asked Questions</h2>
                        <p className="text-slate-500">Find answers to common questions about our platform and courses.</p>
                    </div>
                    <div className="space-y-4">
                        {faqs.map((faq: any, i: number) => (
                            <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                                <h4 className="text-lg font-bold text-slate-900 mb-2">{faq.q}</h4>
                                <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        )}
    <Footer />
      </div>
      {/*$*/}
      {/*/$*/}
      <div
        className="pointer-events-none fixed bottom-0 right-0 sm:bottom-4 sm:right-4 z-50 h-fit w-fit"
        style={{ transform: "translate(0px, 0px)" }}
      >
        <button className="pointer-events-auto inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-indigo-200 transition hover:shadow-indigo-300 hover:scale-105 select-none cursor-grab">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-message-square"
            aria-hidden="true"
          >
            <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
          </svg>
          AI Tutor
        </button>
      </div>
      <a
        href={`https://wa.me/88${settings.contact?.whatsappNumber || "01714740430"}`}
        target="_blank"
        rel="noopener noreferrer"
        title="Chat with us on WhatsApp"
        className="fixed bottom-6 left-6 z-50 flex items-center gap-2.5 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-2xl hover:scale-105 hover:bg-[#20ba59] transition-all duration-300 group border-2 border-white/20"
      >
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-message-circle fill-white text-[#25D366]"
            aria-hidden="true"
          >
            <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path>
          </svg>
          <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-100"></span>
          </span>
        </div>
        <div className="hidden sm:block text-left pr-1">
          <p className="text-[10px] font-medium leading-none text-emerald-100">
            যেকোনো তথ্যে WhatsApp করুন
          </p>
          <p className="text-xs font-black leading-tight tracking-wide">
            {settings.contact?.hotlinePhone || "01714740430"}
          </p>
        </div>
      </a>
    </>
  );
}
