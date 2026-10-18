'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Volume2, Sparkles, CheckCircle2, XCircle, Award, BookOpen, Lock, HelpCircle, MessageSquare } from 'lucide-react';
import { useSubscription } from '../../../../components/SubscriptionGuard';

// Categories and Phrases
type Phrase = {
    id: string;
    english: string;
    ipa: string;
    bangla: string;
    context: string;
};

const PHRASE_CATEGORIES = [
    {
        id: 'greetings',
        label: 'Greetings & Small Talk',
        bangla: 'পরিচিতি ও শুভেচ্ছা',
        phrases: [
            { id: 'g1', english: 'How have you been lately?', ipa: '/haʊ hæv juː biːn ˈleɪtli/', bangla: 'আজকাল কেমন চলছে আপনার?', context: 'Asking about someone\'s well-being after some time.' },
            { id: 'g2', english: 'Long time no see! What\'s new?', ipa: '/lɒŋ taɪm nəʊ siː lɒt nuː/', bangla: 'অনেক দিন দেখা নেই! নতুন খবর কি?', context: 'Friendly greeting for a friend you haven\'t seen in a while.' },
            { id: 'g3', english: 'Could you tell me a bit about yourself?', ipa: '/kʊd juː tel miː ə bɪt əˈbaʊt jɔːˈself/', bangla: 'আপনার নিজের সম্পর্কে কিছু বলবেন কি?', context: 'Polite introduction starter in professional or casual settings.' },
            { id: 'g4', english: 'I\'m really glad we caught up today.', ipa: '/aɪm ˈrɪəli glæd wiː kɔːt ʌp təˈdeɪ/', bangla: 'আজকে দেখা হয়ে খুব ভালো লাগলো।', context: 'Closing a pleasant small talk.' },
            { id: 'g5', english: 'It was a pleasure meeting you.', ipa: '/ɪt wɒz ə ˈpleʒə ˈmiːtɪŋ juː/', bangla: 'আপনার সাথে দেখা হয়ে খুব ভালো লাগলো।', context: 'Formal way to say goodbye to someone new.' }
        ]
    },
    {
        id: 'shopping',
        label: 'Shopping & Prices',
        bangla: 'কেনাকাটা ও দরদাম',
        phrases: [
            { id: 's1', english: 'How much does this pair of shoes cost?', ipa: '/haʊ mʌtʃ dʌz ðɪs peər ɒv ʃuːz kɒst/', bangla: 'এই এক জোড়া জুতোর দাম কত?', context: 'Asking for the price of specific items.' },
            { id: 's2', english: 'Is there any discount on this item?', ipa: '/ɪz ðeər ˈeni ˈdɪskaʊnt ɒn ðɪs ˈaɪtəm/', bangla: 'এই জিনিসটির ওপর কোনো ছাড় আছে কি?', context: 'Inquiring about special offers.' },
            { id: 's3', english: 'Do you accept credit cards or mobile banking?', ipa: '/duː juː əkˈsept ˈkredɪt kɑːdz ɔː ˈməʊbaɪl ˈbæŋkɪŋ/', bangla: 'আপনারা কি ক্রেডিট কার্ড বা মোবাইল ব্যাংকিং গ্রহণ করেন?', context: 'Inquiring about payment methods.' },
            { id: 's4', english: 'Can I try this jacket on, please?', ipa: '/kæn aɪ traɪ ðɪs ˈdʒækɪt ɒn pliːz/', bangla: 'আমি কি এই জ্যাকেটটি ট্রায়াল দিতে পারি?', context: 'Asking to use the fitting room.' },
            { id: 's5', english: 'This is a bit out of my budget.', ipa: '/ðɪs ɪz ə bɪt aʊt ɒv maɪ ˈbʌdʒɪt/', bangla: 'এটা আমার বাজেটের চেয়ে একটু বেশি।', context: 'Politely declining an expensive item.' }
        ]
    },
    {
        id: 'restaurant',
        label: 'At a Restaurant',
        bangla: 'রেস্টুরেন্টে খাবার অর্ডার',
        phrases: [
            { id: 'r1', english: 'Could we have a table for four, please?', ipa: '/kʊd wiː hæv ə ˈteɪbl fɔː pliːz/', bangla: 'আমাদের চারজনের জন্য একটি টেবিল দেওয়া যাবে কি?', context: 'Requesting seating upon arrival.' },
            { id: 'r2', english: 'What would you recommend from the menu?', ipa: '/wɒt wʊd juː ˌrekəˈmend frɒm ðə ˈmenjuː/', bangla: 'মেনু থেকে আপনি কোন খাবারটি সাজেস্ট করবেন?', context: 'Asking the waiter for recommendations.' },
            { id: 'r3', english: 'I\'d like to order a grilled chicken sandwich.', ipa: '/aɪd laɪk tuː ˈɔːdər ə grɪld ˈtʃɪkɪn ˈsænwɪdʒ/', bangla: 'আমি একটি গ্রিলড চিকেন স্যান্ডউইচ অর্ডার করতে চাই।', context: 'Placing your food order.' },
            { id: 'r4', english: 'Could you bring us the bill, please?', ipa: '/kʊd juː brɪŋ ʌs ðə bɪl pliːz/', bangla: 'দয়া করে বিলটা একটু নিয়ে আসবেন?', context: 'Requesting the check.' },
            { id: 'r5', english: 'Could we get this food packed to go?', ipa: '/kʊd wiː get ðɪs fuːd pækt tuː gəʊ/', bangla: 'খাবারটুকু কি পার্সেল করে দেওয়া যাবে?', context: 'Asking to pack leftover food.' }
        ]
    },
    {
        id: 'travel',
        label: 'Travel & Directions',
        bangla: 'ভ্রমণ ও পথ জিজ্ঞেস করা',
        phrases: [
            { id: 't1', english: 'Excuse me, could you tell me how to get to the train station?', ipa: '/ɪkˈskjuːz miː kʊd juː tel miː haʊ tuː get tuː ðə treɪn ˈsteɪʃn/', bangla: 'মাফ করবেন, ট্রেন স্টেশনে কীভাবে যাবো বলতে পারেন?', context: 'Asking for directions politely.' },
            { id: 't2', english: 'Is this the correct platform for the airport train?', ipa: '/ɪz ðɪs ðə kəˈrekt ˈplætfɔːm fɔː ði ˈeəpɔːt treɪn/', bangla: 'এয়ারপোর্ট ট্রেনের জন্য এটাই কি সঠিক প্ল্যাটফর্ম?', context: 'Verifying boarding location.' },
            { id: 't3', english: 'How long does it take to reach the city center by bus?', ipa: '/haʊ lɒŋ dʌz ɪt teɪk tuː riːtʃ ðə ˈsɪti ˈsentə baɪ bʌs/', bangla: 'বাসে করে শহরের কেন্দ্রে পৌঁছাতে কত সময় লাগবে?', context: 'Inquiring about travel duration.' },
            { id: 't4', english: 'Where is the nearest currency exchange office?', ipa: '/weər ɪz ðə ˈnɪərɪst ˈkʌrənsi ɪksˈtʃeɪndʒ ˈɒfɪs/', bangla: 'সবচেয়ে কাছের টাকা পরিবর্তনের অফিসটি কোথায়?', context: 'Looking to exchange money.' },
            { id: 't5', english: 'Could you recommend a good local tour guide?', ipa: '/kʊd juː ˌrekəˈmend ə gʊd ˈləʊkl tʊə gaɪd/', bangla: 'ভালো কোনো স্থানীয় গাইড সাজেস্ট করতে পারেন কি?', context: 'Asking for tourist guides.' }
        ]
    },
    {
        id: 'interview',
        label: 'Job Interview & Career',
        bangla: 'চাকরির ইন্টারভিউ',
        phrases: [
            { id: 'i1', english: 'Could you please introduce yourself briefly?', ipa: '/kʊd juː pliːz ˌɪntrəˈdjuːs jɔːˈself ˈbriːfli/', bangla: 'সংক্ষেপে আপনার নিজের পরিচয় দিতে পারেন কি?', context: 'The most common interview opening question.' },
            { id: 'i2', english: 'I have three years of experience in project management.', ipa: '/aɪ hæv θriː jɪəz ɒv ɪkˈspɪəriəns ɪn ˈprɒdʒekt ˈmænɪdʒmənt/', bangla: 'প্রজেক্ট পরিচালনায় আমার তিন বছরের অভিজ্ঞতা রয়েছে।', context: 'Stating your work background.' },
            { id: 'i3', english: 'My greatest strength is my ability to adapt quickly.', ipa: '/maɪ ˈɡreɪtɪst streŋθ ɪz maɪ əˈbɪləti tuː əˈdæpt ˈkwɪkli/', bangla: 'আমার সবচেয়ে বড় শক্তি হলো যেকোনো পরিস্থিতিতে দ্রুত মানিয়ে নেওয়ার ক্ষমতা।', context: 'Highlighting your key strength.' },
            { id: 'i4', english: 'Where do you see yourself in the next five years?', ipa: '/weə duː juː siː jɔːˈself ɪn ðə nekst faɪv jɪəz/', bangla: 'আগামী পাঁচ বছরে আপনি নিজেকে কোথায় দেখতে চান?', context: 'Inquiring about career aspirations.' },
            { id: 'i5', english: 'Thank you for giving me this valuable opportunity.', ipa: '/θæŋk juː fɔː ˈɡɪvɪŋ miː ðɪs ˈvæljuəbl ˌɒpəˈtjuːnəti/', bangla: 'এই মূল্যবান সুযোগটি দেওয়ার জন্য আপনাকে আন্তরিক ধন্যবাদ।', context: 'Politely closing an interview.' }
        ]
    },
    {
        id: 'doctor',
        label: 'Doctor & Health',
        bangla: 'ডাক্তারের কাছে ও স্বাস্থ্যসেবা',
        phrases: [
            { id: 'd1', english: 'I have had a severe headache and fever since yesterday.', ipa: '/aɪ hæv hæd ə sɪˈvɪə ˈhedeɪk ænd ˈfiːvə sɪns ˈjestədeɪ/', bangla: 'গতকাল থেকে আমার প্রচণ্ড মাথাব্যথা ও জ্বর হচ্ছে।', context: 'Describing common symptoms to a doctor.' },
            { id: 'd2', english: 'How often should I take this medication?', ipa: '/haʊ ˈɒfn ʃʊd aɪ teɪk ðɪs ˌmedɪˈkeɪʃn/', bangla: 'এই ওষুধটি আমাকে দিনে কতবার খেতে হবে?', context: 'Asking prescription dosage instructions.' },
            { id: 'd3', english: 'Are there any potential side effects?', ipa: '/ɑː ðeər ˈeni pəˈtenʃl saɪd ɪˈfekts/', bangla: 'এর কি কোনো পার্শ্বপ্রতিক্রিয়া হতে পারে?', context: 'Inquiring about medication safety.' },
            { id: 'd4', english: 'I would like to book an appointment with Dr. Rahman.', ipa: '/aɪ wʊd laɪk tuː bʊk ən əˈpɔɪntmənt wɪð ˈdɒktə ˈræhmæn/', bangla: 'আমি ডক্টর রহমানের সাথে একটি অ্যাপয়েন্টমেন্ট বুক করতে চাই।', context: 'Scheduling a medical consultation.' },
            { id: 'd5', english: 'You should get plenty of rest and drink lots of fluids.', ipa: '/juː ʃʊd ɡet ˈplenti ɒv rest ænd drɪŋk lɒts ɒv ˈfluːɪdz/', bangla: 'আপনার প্রচুর বিশ্রাম নেওয়া এবং প্রচুর তরল পান করা উচিত।', context: 'Common recovery advice from a physician.' }
        ]
    },
    {
        id: 'telephone',
        label: 'Phone Calls & Messaging',
        bangla: 'ফোনে কথা বলা ও কল হ্যান্ডলিং',
        phrases: [
            { id: 'p1', english: 'Could I speak with Mr. Karim, please?', ipa: '/kʊd aɪ spiːk wɪð ˈmɪstə kəˈriːm pliːz/', bangla: 'আমি কি মিস্টার করিমের সাথে একটু কথা বলতে পারি?', context: 'Polite telephone opening inquiry.' },
            { id: 'p2', english: 'May I ask who is calling, please?', ipa: '/meɪ aɪ ɑːsk huː ɪz ˈkɔːlɪŋ pliːz/', bangla: 'দয়া করে বলবেন কি কে বলছেন?', context: 'Polite screening question on telephone.' },
            { id: 'p3', english: 'Could you hold the line for just a moment?', ipa: '/kʊd juː həʊld ðə laɪn fɔː dʒʌst ə ˈməʊmənt/', bangla: 'দয়া করে একটু লাইনে থাকবেন কি?', context: 'Putting a caller on brief hold.' },
            { id: 'p4', english: 'I\'m afraid he is currently in a meeting.', ipa: '/aɪm əˈfreɪd hiː ɪz ˈkʌrəntli ɪn ə ˈmiːtɪŋ/', bangla: 'দুঃখিত, তিনি এই মুহূর্তে একটি মিটিংয়ে আছেন।', context: 'Explaining person unavailability.' },
            { id: 'p5', english: 'Could you please ask him to call me back?', ipa: '/kʊd juː pliːz ɑːsk hɪm tuː kɔːl miː bæk/', bangla: 'তাকে কি আমাকে ব্যাক করতে একটু বলবেন?', context: 'Leaving a callback request.' }
        ]
    }
];

// Interactive Exercises
type Exercise = {
    id: string;
    type: 'MCQ' | 'GAP';
    question: string;
    options?: string[];
    answer: string;
    hint: string;
    explanation: string;
};

const EXERCISES: Exercise[] = [
    {
        id: 'ex1',
        type: 'MCQ',
        question: 'যদি আপনি কারো সাথে অনেকদিন পর দেখা করেন, তবে অভিনন্দন জানাতে নিচের কোনটি বলবেন?',
        options: ['Long time no see! What\'s new?', 'It was a pleasure meeting you.', 'Excuse me, is this seat taken?', 'Could you bring us the bill?'],
        answer: 'Long time no see! What\'s new?',
        hint: 'Hint: এর অর্থ "অনেক দিন দেখা নেই! নতুন কি খবর?"',
        explanation: 'দীর্ঘদিন পর পরিচিত কারোর সাথে দেখা হলে আমরা "Long time no see!" বা "It\'s been a while!" ব্যবহার করে কথা শুরু করি।'
    },
    {
        id: 'ex2',
        type: 'GAP',
        question: 'Complete the phrase to ask for fitting a jacket: "Can I _______ this jacket on, please?"',
        answer: 'try',
        hint: 'Hint: পরিধান করে দেখার ইংরেজি শব্দ (৩ অক্ষরের)।',
        explanation: 'জামা কাপড় গায়ে দিয়ে ট্রায়াল দেওয়ার ফ্রেজটি হলো "try something on"।'
    },
    {
        id: 'ex3',
        type: 'MCQ',
        question: 'রেস্টুরেন্টে খাওয়া শেষ করার পর বিল চাওয়ার সঠিক ভদ্র উপায় কোনটি?',
        options: ['Give me the bill immediately.', 'Could you bring us the bill, please?', 'How much does this food cost?', 'Is there any discount here?'],
        answer: 'Could you bring us the bill, please?',
        hint: 'Hint: "Could you..." দিয়ে বিনম্রভাবে শুরু করা বাক্যাংশ।',
        explanation: 'রেস্টুরেন্টে ওয়েটারকে ডেকে বিল আনতে বিনম্রভাবে "Could you bring us the bill, please?" বলা হয়।'
    },
    {
        id: 'ex4',
        type: 'GAP',
        question: 'Complete the direction inquiry: "Excuse me, could you tell me _______ to get to the nearest metro station?"',
        answer: 'how',
        hint: 'Hint: কীভাবে বা কোন উপায়ে জিজ্ঞেস করতে এই শব্দটি বসে।',
        explanation: 'পথ নির্দেশনা জিজ্ঞেস করতে আমরা "how to get to [destination]" ব্যবহার করি।'
    },
    {
        id: 'ex5',
        type: 'MCQ',
        question: 'কোনো জিনিস আপনার সাধ্যের বাইরে বা দাম অনেক বেশি হলে ভদ্রভাবে কীভাবে প্রকাশ করবেন?',
        options: ['This is cheap, I don\'t want it.', 'This is a bit out of my budget.', 'I don\'t have money for this trash.', 'What would you recommend?'],
        answer: 'This is a bit out of my budget.',
        hint: 'Hint: "বাজেট" সংবলিত ভদ্র বাক্য।',
        explanation: '"This is a bit out of my budget" বাক্যটি দামি জিনিস সরাসরি নাকচ না করে ভদ্রভাবে রিজেক্ট করতে সাহায্য করে।'
    },
    {
        id: 'ex6',
        type: 'GAP',
        question: 'Complete the greeting: "How _______ you been lately?"',
        answer: 'have',
        hint: 'Hint: Present Perfect tense-এর auxiliary verb.',
        explanation: '"How have you been?" হলো কারো সাম্প্রতিক দিনকাল বা শরীর কেমন যাচ্ছে তা জানার একটি বাচ্য।'
    },
    {
        id: 'ex7',
        type: 'MCQ',
        question: 'নতুন কারো সাথে পরিচিত হওয়ার পর বিদায় নেওয়ার সময় কোনটি বলা যায়?',
        options: ['How have you been?', 'It was a pleasure meeting you.', 'I would like to order dinner.', 'Where is the nearest bank?'],
        answer: 'It was a pleasure meeting you.',
        hint: 'Hint: সাক্ষাৎটি আনন্দদায়ক ছিল তা বোঝাতে ব্যবহৃত হয়।',
        explanation: 'নতুন পরিচিত লোকের সাথে কথা বলা শেষে বিদায় নিতে "It was a pleasure meeting you" বা "Nice meeting you" বলা হয়।'
    },
    {
        id: 'ex8',
        type: 'GAP',
        question: 'Complete the shopping discount inquiry: "Is there any _______ on this item?"',
        answer: 'discount',
        hint: 'Hint: মূল্য ছাড় বা ছাড়ের ইংরেজি প্রতিশব্দ।',
        explanation: 'কেনাকাটার সময় কোনো পোশাকে বা জিনিসপত্রে মূল্য ছাড় আছে কিনা জানতে "Is there any discount?" বলা হয়।'
    }
];

export default function ConversationsPage() {
    const { isTrial } = useSubscription();
    const [activeTab, setActiveTab] = useState<'learn' | 'exercise'>('learn');
    const [selectedCategory, setSelectedCategory] = useState('greetings');
    const [speechPlaying, setSpeechPlaying] = useState<string | null>(null);

    // Exercise States
    const [exerciseAnswers, setExerciseAnswers] = useState<Record<string, string>>({});
    const [revealedExercises, setRevealedExercises] = useState<Record<string, boolean>>({});

    const currentCat = PHRASE_CATEGORIES.find(c => c.id === selectedCategory)!;
    const catIsLocked = isTrial && selectedCategory !== 'greetings';

    function playAudio(text: string, id: string) {
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'en-GB';
            utterance.rate = 0.85;
            utterance.onstart = () => setSpeechPlaying(id);
            utterance.onend = () => setSpeechPlaying(null);
            utterance.onerror = () => setSpeechPlaying(null);
            window.speechSynthesis.speak(utterance);
        } else {
            alert('Your browser does not support text-to-speech.');
        }
    }

    const filteredExercises = isTrial ? EXERCISES.slice(0, 3) : EXERCISES;
    const totalScore = Object.entries(exerciseAnswers).filter(([id, ans]) => {
        const ex = EXERCISES.find(e => e.id === id);
        return ex?.answer.toLowerCase().trim() === ans.toLowerCase().trim();
    }).length;

    return (
        <div className="min-h-screen bg-[#f8fafc] px-4 py-8">
            <div className="mx-auto max-w-4xl">
                {/* Back button */}
                <Link href="/dashboard/spoken-english" className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-700 mb-6 transition">
                    <ArrowLeft size={14} /> Back to Hub
                </Link>

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                    <div>
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-teal-500/20 bg-teal-50/60 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-teal-600 mb-2">
                            <Sparkles size={10} />
                            Daily Dialogues
                        </span>
                        <h1 className="text-3xl font-black text-slate-900 leading-tight">conversational Phrases</h1>
                        <p className="text-xs text-slate-500 mt-1">দৈনন্দিন কথোপকথনের প্রয়োজনীয় বাক্য, অডিও ও অনুশীলন কুইজ।</p>
                    </div>

                    {/* Mode Toggle */}
                    <div className="flex bg-slate-200/60 p-1 rounded-2xl w-fit">
                        <button
                            onClick={() => setActiveTab('learn')}
                            className={`px-4 py-2 text-xs font-bold rounded-xl transition ${activeTab === 'learn' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-900'}`}
                        >
                            📖 Learn Phrases
                        </button>
                        <button
                            onClick={() => setActiveTab('exercise')}
                            className={`px-4 py-2 text-xs font-bold rounded-xl transition ${activeTab === 'exercise' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-900'}`}
                        >
                            ✍️ Practice Exercises
                        </button>
                    </div>
                </div>

                {/* LEARN PHRASES TAB */}
                {activeTab === 'learn' && (
                    <div className="grid gap-6 md:grid-cols-4">
                        {/* Categories Sidebar */}
                        <div className="md:col-span-1 space-y-2">
                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 px-1">Categories</p>
                            {PHRASE_CATEGORIES.map(cat => {
                                const isCatLocked = isTrial && cat.id !== 'greetings';
                                return (
                                    <button
                                        key={cat.id}
                                        onClick={() => setSelectedCategory(cat.id)}
                                        className={`w-full text-left p-3 rounded-2xl border text-xs font-black transition flex items-center justify-between ${
                                            selectedCategory === cat.id
                                                ? 'bg-teal-600 border-teal-600 text-white shadow-md shadow-teal-100'
                                                : 'bg-white border-slate-200 text-slate-700 hover:border-teal-400 hover:bg-teal-50/20'
                                        }`}
                                    >
                                        <div className="truncate">
                                            <p>{cat.label}</p>
                                            <p className={`text-[10px] font-medium truncate mt-0.5 ${selectedCategory === cat.id ? 'text-teal-100' : 'text-slate-400'}`}>
                                                {cat.bangla}
                                            </p>
                                        </div>
                                        {isCatLocked && <Lock size={12} className={selectedCategory === cat.id ? 'text-teal-200' : 'text-slate-400'} />}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Phrases Content */}
                        <div className="md:col-span-3">
                            {catIsLocked ? (
                                <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center max-w-md mx-auto shadow-sm space-y-4">
                                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-amber-500 border border-amber-100">
                                        <Lock size={22} />
                                    </div>
                                    <div>
                                        <h3 className="text-base font-black text-slate-900">🔒 {currentCat.label} লকড!</h3>
                                        <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                                            আপনি বর্তমানে ফ্রি ট্রায়াল মোডে আছেন। Greetings ব্যতীত অন্যান্য ক্যাটাগরির সমস্ত ফ্রেজ এবং উচ্চারণ অডিও আনলক করতে দয়া করে সাবস্ক্রিপশন নিন।
                                        </p>
                                    </div>
                                    <Link href="/dashboard/payment?required=spoken" className="inline-flex items-center gap-1.5 rounded-2xl bg-teal-600 px-6 py-3 text-xs font-black text-white hover:bg-teal-500 transition shadow-lg shadow-teal-100">
                                        আনলক করুন ↗
                                    </Link>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    <div className="bg-white border border-slate-200 rounded-3xl p-5 shadow-sm flex items-center justify-between">
                                        <div>
                                            <h2 className="text-base font-black text-slate-950">{currentCat.label}</h2>
                                            <p className="text-xs text-slate-500 mt-0.5">{currentCat.bangla}</p>
                                        </div>
                                        <BookOpen size={20} className="text-teal-500" />
                                    </div>

                                    {currentCat.phrases.map(phrase => (
                                        <div key={phrase.id} className="bg-white border border-slate-200 rounded-3xl p-5 shadow-sm hover:border-teal-200 transition duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                            <div className="space-y-1">
                                                <div className="flex items-center gap-2">
                                                    <p className="text-base font-extrabold text-slate-900 leading-tight">{phrase.english}</p>
                                                    <span className="text-[10px] font-mono text-indigo-500 bg-indigo-50 px-2 py-0.5 rounded-lg">
                                                        {phrase.ipa}
                                                    </span>
                                                </div>
                                                <p className="text-sm font-bold text-teal-700">{phrase.bangla}</p>
                                                <p className="text-xs text-slate-400 font-semibold italic">💡 Use Case: {phrase.context}</p>
                                            </div>

                                            <button
                                                onClick={() => playAudio(phrase.english, phrase.id)}
                                                disabled={speechPlaying !== null}
                                                className={`flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center transition border ${
                                                    speechPlaying === phrase.id
                                                        ? 'bg-teal-100 border-teal-200 text-teal-600 animate-pulse'
                                                        : 'bg-slate-50 border-slate-200 text-slate-650 hover:bg-teal-50 hover:text-teal-600 hover:border-teal-300'
                                                }`}
                                            >
                                                <Volume2 size={16} />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* PRACTICE EXERCISES TAB */}
                {activeTab === 'exercise' && (
                    <div className="space-y-6">
                        {/* Score Banner */}
                        {Object.keys(exerciseAnswers).length > 0 && (
                            <div className="bg-indigo-50 border border-indigo-200 rounded-3xl px-6 py-4 flex items-center justify-between shadow-sm">
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-wider text-indigo-500">Your Performance</p>
                                    <p className="text-base font-black text-slate-900">Score: {totalScore} / {Object.keys(exerciseAnswers).length} Correct</p>
                                </div>
                                <button
                                    onClick={() => { setExerciseAnswers({}); setRevealedExercises({}); }}
                                    className="rounded-xl border border-rose-200 bg-rose-50 text-xs font-black text-rose-600 px-4 py-2 hover:bg-rose-100 transition"
                                >
                                    Reset Quiz
                                </button>
                            </div>
                        )}

                        {/* Exercises List */}
                        <div className="space-y-5">
                            {filteredExercises.map((ex, idx) => {
                                const userAns = exerciseAnswers[ex.id] || '';
                                const isRev = revealedExercises[ex.id];
                                const isCorrect = userAns.toLowerCase().trim() === ex.answer.toLowerCase().trim();

                                return (
                                    <div key={ex.id} className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:border-indigo-100 transition duration-200">
                                        <div className="flex items-center justify-between mb-3">
                                            <div className="flex items-center gap-2">
                                                <span className="text-xs font-black text-slate-400">Exercise {idx + 1}</span>
                                                <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${
                                                    ex.type === 'MCQ' ? 'bg-amber-100 text-amber-700' : 'bg-sky-100 text-sky-700'
                                                }`}>
                                                    {ex.type}
                                                </span>
                                            </div>
                                            {isRev && (isCorrect ? <CheckCircle2 size={20} className="text-emerald-500" /> : <XCircle size={20} className="text-rose-500" />)}
                                        </div>

                                        <p className="text-base font-bold text-slate-950 mb-4">{ex.question}</p>

                                        {/* MCQ Rendering */}
                                        {ex.type === 'MCQ' && ex.options && (
                                            <div className="grid gap-2 sm:grid-cols-2">
                                                {ex.options.map(opt => {
                                                    let cls = 'rounded-xl border px-4 py-3 text-xs font-semibold text-left transition ';
                                                    if (!isRev) {
                                                        cls += userAns === opt
                                                            ? 'border-indigo-500 bg-indigo-50/60 text-indigo-700 font-extrabold'
                                                            : 'border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/30 text-slate-700 cursor-pointer';
                                                    } else if (opt === ex.answer) {
                                                        cls += 'border-emerald-500 bg-emerald-50 text-emerald-800 font-extrabold';
                                                    } else if (opt === userAns) {
                                                        cls += 'border-rose-400 bg-rose-50 text-rose-700 font-extrabold';
                                                    } else {
                                                        cls += 'border-slate-100 text-slate-400';
                                                    }
                                                    return (
                                                        <button key={opt} onClick={() => { if (!isRev) setExerciseAnswers(a => ({ ...a, [ex.id]: opt })); }} className={cls}>
                                                            {opt}
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                        )}

                                        {/* GAP Rendering */}
                                        {ex.type === 'GAP' && (
                                            <div className="flex gap-2 items-center max-w-sm">
                                                <input
                                                    type="text"
                                                    value={userAns}
                                                    disabled={isRev}
                                                    placeholder="Type missing word..."
                                                    onChange={(e) => setExerciseAnswers(a => ({ ...a, [ex.id]: e.target.value }))}
                                                    className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:border-indigo-500 focus:outline-none disabled:bg-slate-100"
                                                />
                                            </div>
                                        )}

                                        {/* Check button */}
                                        {userAns && !isRev && (
                                            <button
                                                onClick={() => setRevealedExercises(r => ({ ...r, [ex.id]: true }))}
                                                className="mt-4 w-full sm:w-auto rounded-xl bg-indigo-600 px-5 py-2 text-xs font-bold text-white hover:bg-indigo-500 transition shadow"
                                            >
                                                Verify Answer
                                            </button>
                                        )}

                                        {/* Feedback & Explanation */}
                                        {isRev && (
                                            <div className={`mt-4 rounded-xl p-3.5 ${isCorrect ? 'bg-emerald-50/60 border border-emerald-100' : 'bg-rose-50/60 border border-rose-100'}`}>
                                                <p className="text-xs font-black mb-1 flex items-center gap-1">
                                                    {isCorrect ? '✓ Correct Answer!' : '✗ Incorrect Answer!'}
                                                </p>
                                                <p className="text-xs text-slate-700">{ex.explanation}</p>
                                                <p className="text-xs text-indigo-700 font-semibold mt-1">💡 {ex.hint}</p>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}

                            {/* Exercises Trial Lock */}
                            {isTrial && EXERCISES.length > 3 && (
                                <div className="rounded-3xl border border-slate-200 bg-white p-6 text-center space-y-4 shadow-sm max-w-md mx-auto">
                                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-amber-500 border border-amber-100">
                                        <Lock size={20} />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-black text-slate-900">🔒 {EXERCISES.length - 3}টি অনুশীলন কুইজ লকড!</h3>
                                        <p className="text-xs text-slate-500 mt-1">
                                            আপনি বর্তমানে ফ্রি ট্রায়াল মোডে আছেন। সবকটি কুইজ, শূন্যস্থান পূরণ ও বিস্তারিত ব্যাখ্যা আনলক করতে দয়া করে সাবস্ক্রিপশন নিন।
                                        </p>
                                    </div>
                                    <Link href="/dashboard/payment?required=spoken" className="inline-flex items-center gap-1.5 rounded-2xl bg-indigo-600 px-5 py-2.5 text-xs font-bold text-white hover:bg-indigo-500 transition shadow">
                                        আনলক করুন ↗
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
