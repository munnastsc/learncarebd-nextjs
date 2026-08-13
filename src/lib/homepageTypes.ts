export interface CourseItem {
    id: string;
    title: string;
    subtitle: string;
    image: string;
    price: string;
    originalPrice?: string | null;
    instructor: string;
    rating: number;
    url: string;
    isInternal?: boolean;
    htmlContent?: string;
}

export interface HomepageSettings {
    noticeText: string;
    hero: {
        badge: string;
        title: string;
        highlightText: string;
        subtitle: string;
        cta1Text: string;
        cta1Link: string;
        cta2Text: string;
        cta2Link: string;
    };
    spokenHub: {
        badge: string;
        title: string;
        description: string;
        features: string[];
        buttonText: string;
        buttonLink: string;
    };
    ieltsHub: {
        badge: string;
        title: string;
        description: string;
        features: string[];
        buttonText: string;
        buttonLink: string;
    };
    coursesSection: {
        badge: string;
        title: string;
        subtitle: string;
        items: CourseItem[];
    };
    whyChooseUs: {
        title: string;
        subtitle: string;
        cards: Array<{
            title: string;
            description: string;
            badge: string;
        }>;
    };
    stats: {
        stat1Value: string;
        stat1Label: string;
        stat2Value: string;
        stat2Label: string;
        stat3Value: string;
        stat3Label: string;
        stat4Value: string;
        stat4Label: string;
    };
    contact: {
        whatsappNumber: string;
        hotlinePhone: string;
        emailAddress: string;
        facebookUrl: string;
        youtubeUrl: string;
        tiktokUrl: string;
        instagramUrl: string;
        footerAbout: string;
        footerCopyright: string;
    };
}

export const DEFAULT_HOMEPAGE_SETTINGS: HomepageSettings = {
    noticeText: '📢 নোটিশ: LearnCare Academy-র নতুন স্পেশাল ব্যাচে ভর্তি চলছে! Spoken English, Pronunciation Challenge & IELTS কোর্সে সীমিত সময়ের জন্য বিশেষ ছাড় পেতে আজই রেজিস্টার করুন। ওয়ান-টু-ওয়ান মেন্টরশিপের নতুন স্লট উন্মুক্ত!',
    hero: {
        badge: '🇧🇩 দেশের সেরা AI Spoken & IELTS লার্নিং প্ল্যাটফর্ম',
        title: 'সহজ পদ্ধতিতে স্পোকেন ইংলিশ ও',
        highlightText: 'IELTS Band 7.5+ প্রস্তুতি',
        subtitle: 'সঠিক ব্রিটিশ উচ্চারণ (IPA), New Headway ডিকটেশন, Cambridge 9-20 রিয়েল অডিও টেস্ট এবং AI স্পিকিং-রাইটিং মূল্যায়নে সাবলীল ইংরেজি শিখুন ঘরে বসেই।',
        cta1Text: 'কোর্সসমূহ দেখুন',
        cta1Link: '#courses',
        cta2Text: 'স্পোকেন প্র্যাকটিস শুরু করুন',
        cta2Link: '/dashboard/spoken-english',
    },
    spokenHub: {
        badge: 'AI SPOKEN ENGLISH HUB',
        title: 'Spoken English & Fluency Hub',
        description: 'New Headway ডিকটেশন, ব্রিটিশ প্রোনাউন্সিয়েশন ল্যাব এবং রিয়েল-লাইফ কথোপকথন প্র্যাকটিসের মাধ্যমে আত্মবিশ্বাসের সাথে সাবলীল ইংরেজি বলা শিখুন।',
        features: [
            'New Headway Dictation & Shadowing Mode',
            'Smart Pronunciation Lab with Live Speech Evaluation',
            'Daily Conversational Dialogues, Audio & Quizzes',
            'Grammar Academy & 100+ Free Practice Exercises'
        ],
        buttonText: 'Start Spoken English Hub',
        buttonLink: '/dashboard/spoken-english'
    },
    ieltsHub: {
        badge: 'CAMBRIDGE IELTS ACADEMIC',
        title: 'Cambridge IELTS Preparation Hub',
        description: 'Cambridge Books 9-20 এর প্রতিটি টেস্টের প্যাসেজ ও রিয়েল অডিওর সাথে সম্পূর্ণ প্রস্তুতি নিন। ব্যান্ড স্কোর প্রেডিকশন এবং রাইটিং-স্পিকিং এআই মূল্যায়ন।',
        features: [
            'Cambridge 9-20 Reading (Passages & Answers)',
            'Real MP3 Audio সহ Listening Practice Tests',
            'AI Writing Evaluator (Task 1 & Task 2 Band Scoring)',
            'AI Speaking Exam Simulation & Band Predictor'
        ],
        buttonText: 'Start IELTS Preparation',
        buttonLink: '/dashboard'
    },
    coursesSection: {
        badge: 'PREMIUM COURSES',
        title: 'আমাদের জনপ্রিয় কোর্সসমূহ',
        subtitle: 'আপনার লক্ষ্য অনুযায়ী সঠিক কোর্সটি নির্বাচন করুন',
        items: [
            {
                id: 'mentorship',
                title: 'One-on-One English Mentorship',
                subtitle: 'ব্যক্তিগত কেয়ার ও ডেডিকেটেড মেন্টরশিপের মাধ্যমে স্পিকিং, রিডিং ও রাইটিং দক্ষতা বাড়ানোর স্পেশাল প্রোগ্রাম।',
                image: '/images/ielts.png',
                price: '30,000',
                originalPrice: null,
                instructor: 'admin',
                rating: 5,
                url: '/courses/one-on-one-english-mentorship',
                isInternal: true,
                htmlContent: ''
            },
            {
                id: 'bootcamp',
                title: 'Premium Spoken English & Pronunciation Challenge (90-Day Bootcamp)',
                subtitle: '৯০ দিনের চ্যালেঞ্জে সঠিক ব্রিটিশ উচ্চারণ এবং স্মার্ট স্পোকেন ইংলিশ মাস্টার করার স্পেশাল বুটক্যাম্প কোর্স।',
                image: '/images/bootcamp.png',
                price: '5,000',
                originalPrice: '6,000',
                instructor: 'admin',
                rating: 5,
                url: '/courses/mastering-spoken-english-pronunciation-challenge-90-day-bootcamp',
                isInternal: true,
                htmlContent: ''
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
                url: '/courses/oxford-3000-vocabulary-mastery',
                isInternal: true,
                htmlContent: ''
            }
        ]
    },
    whyChooseUs: {
        title: 'কেন আমাদের ইংরেজি কোর্সে যোগ দেবেন?',
        subtitle: 'প্রচলিত মুখস্থ পদ্ধতি নয়, আধুনিক ও বাস্তবসম্মত উপায়ে ইংরেজি শিখুন',
        cards: [
            {
                title: 'টাইম সেভিং ডিজাইন',
                description: 'অহেতুক গ্রামার বা অপ্রয়োজনীয় টপিক পড়ে সময় নষ্ট করার দিন শেষ। প্রতিটি কোর্স সাজানো হয়েছে শিক্ষার্থীর বাস্তব প্রয়োজন এবং বর্তমান লেভেল অনুযায়ী।',
                badge: 'FAST'
            },
            {
                title: 'জিরো থেকে কনফিডেন্স',
                description: 'আপনি ইংরেজিতে একদম কাঁচা? কোনো সমস্যা নেই! আমাদের শেখানোর প্রসেসে একদম বেসিক লেভেলের শিক্ষার্থীও ধাপে ধাপে আত্মবিশ্বাস খুঁজে পায়।',
                badge: 'BASIC'
            },
            {
                title: 'ব্যক্তিগত কেয়ার ও মেন্টরশিপ',
                description: 'ভিড়ের মাঝে কেউ হারিয়ে যাবে না—প্রতিটি শিক্ষার্থীর সমস্যাগুলো আমরা আলাদাভাবে বিশ্লেষণ করি এবং পার্সোনালি সমাধান করি।',
                badge: 'CARE'
            },
            {
                title: 'সহজ ও আনন্দদায়ক লার্নিং',
                description: 'শেখা যখন আনন্দের হয়, তখন মস্তিষ্ক দ্রুত ক্যাচ করে। ইংরেজিকে আমরা কঠিন বোঝা নয়, বরং সহজ ও মজার মাধ্যম হিসেবে উপস্থাপন করি।',
                badge: 'FUN'
            }
        ]
    },
    stats: {
        stat1Value: '10,000+',
        stat1Label: 'সফল শিক্ষার্থী',
        stat2Value: '98%',
        stat2Label: 'সফলতার হার',
        stat3Value: '4.9 / 5.0',
        stat3Label: 'শিক্ষার্থী রেটিং',
        stat4Value: '24/7',
        stat4Label: 'এআই লার্নিং সাপোর্ট'
    },
    contact: {
        whatsappNumber: '01714740430',
        hotlinePhone: '01714740430',
        emailAddress: 'learncareofficial@gmail.com',
        facebookUrl: 'https://www.facebook.com/learncarebd',
        youtubeUrl: 'https://youtube.com/@learncarebd',
        tiktokUrl: 'https://www.tiktok.com/@learncareacademy',
        instagramUrl: 'https://www.instagram.com/learncarebd',
        footerAbout: 'ইংরেজি শেখা ও ক্যারিয়ার গড়ার লক্ষ্যে তৈরি নির্ভরযোগ্য এআই একাডেমি ও লার্নিং প্ল্যাটফর্ম।',
        footerCopyright: '© 2026 Learncare Academy | Powered by Learncare Academy & Gemini AI'
    }
};
