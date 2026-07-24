export interface TranslationStep {
    bengali: string;
    english: string;
    explanation: string;
}

export interface FallbackExercise {
    type: 'mcq' | 'gap' | 'translation';
    question: string;
    options: string[];
    answer: number;
    correctText?: string;
    explanation: string;
}

export interface SentenceRule {
    id: number;
    title: string;
    titleBn: string;
    formula: string;
    conceptBn: string;
    steps: TranslationStep[];
    examples: {
        bengali: string;
        english: string;
    }[];
    fallbackExercises: FallbackExercise[];
}

// 10 Detailed Examples helper to keep data clean
const createExamples = (ruleId: number): { bengali: string; english: string }[] => {
    const list: Record<number, { bengali: string; english: string }[]> = {
        1: [
            { bengali: 'সাঁথি চা তৈরি করে।', english: 'Sathi makes tea.' },
            { bengali: 'আমরা ফুটবল খেলি।', english: 'We play football.' },
            { bengali: 'সে একটি উপন্যাস পড়ে।', english: 'He reads a novel.' },
            { bengali: 'তারা একটি গান গায়।', english: 'They sing a song.' },
            { bengali: 'শিক্ষক আমাদের ইংরেজি শেখান।', english: 'The teacher teaches us English.' },
            { bengali: 'মা রান্না করেন।', english: 'Mother cooks food.' },
            { bengali: 'রহিম একটি চিঠি লেখে।', english: 'Rahim writes a letter.' },
            { bengali: 'ছেলেটি একটি ছবি আঁকে।', english: 'The boy draws a picture.' },
            { bengali: 'আমরা একটি মুভি দেখি।', english: 'We watch a movie.' },
            { bengali: 'তারা একটি গাড়ি চালায়।', english: 'They drive a car.' }
        ],
        2: [
            { bengali: 'সাঁথি একটি নীল জামা পরেছে।', english: 'Sathi wears a blue dress.' },
            { bengali: 'সে একটি পুরানো বই পড়েছে।', english: 'He reads an old book.' },
            { bengali: 'তারা একটি সুন্দর বাগান তৈরি করেছে।', english: 'They made a beautiful garden.' },
            { bengali: 'এটি একটি গরম দিন।', english: 'It is a hot day.' },
            { bengali: 'আমরা একটি বড় সমস্যা সমাধান করেছি।', english: 'We solved a big problem.' },
            { bengali: 'তিনি একজন সৎ মানুষ।', english: 'He is an honest man.' },
            { bengali: 'আমি একটি সুস্বাদু আপেল খেয়েছি।', english: 'I ate a delicious apple.' },
            { bengali: 'সে একটি কঠিন পরীক্ষা দিয়েছে।', english: 'She took a difficult exam.' },
            { bengali: 'তারা একটি লম্বা নদী পার হয়েছিল।', english: 'They crossed a long river.' },
            { bengali: 'এটি একটি ঐতিহাসিক স্থান।', english: 'It is a historical place.' }
        ],
        3: [
            { bengali: 'সাঁথি প্রতিদিন সকালে হাঁটে।', english: 'Sathi walks every morning.' },
            { bengali: 'সূর্য পূর্ব দিকে উদিত হয়।', english: 'The sun rises in the east.' },
            { bengali: 'পানি ১০০ ডিগ্রিতে ফোটে।', english: 'Water boils at 100 degrees.' },
            { bengali: 'তারা নিয়মিত ফুটবল খেলে।', english: 'They play football regularly.' },
            { bengali: 'আমি প্রতিদিন ইংরেজি অনুশীলন করি।', english: 'I practice English every day.' },
            { bengali: 'তিনি একটি ব্যাংকে কাজ করেন।', english: 'He works in a bank.' },
            { bengali: 'পাখিরা আকাশে ওড়ে।', english: 'Birds fly in the sky.' },
            { bengali: 'আমরা আমাদের দেশকে ভালোবাসি।', english: 'We love our country.' },
            { bengali: 'পৃথিবী সূর্যের চারদিকে ঘোরে।', english: 'The earth moves round the sun.' },
            { bengali: 'সে ভালো ইংরেজি বলে।', english: 'She speaks English well.' }
        ],
        4: [
            { bengali: 'সাঁথি এখন পড়ছে।', english: 'Sathi is reading now.' },
            { bengali: 'বাইরে বৃষ্টি হচ্ছে।', english: 'It is raining outside.' },
            { bengali: 'তারা মাঠে ফুটবল খেলছে।', english: 'They are playing football in the field.' },
            { bengali: 'আমি এখন রাতের খাবার খাচ্ছি।', english: 'I am eating dinner now.' },
            { bengali: 'সে একটি গান শুনছে।', english: 'He is listening to a song.' },
            { bengali: 'আমরা পরীক্ষার জন্য প্রস্তুতি নিচ্ছি।', english: 'We are preparing for the exam.' },
            { bengali: 'শিক্ষক ক্লাস নিচ্ছেন।', english: 'The teacher is taking a class.' },
            { bengali: 'পাখিটি আকাশে উড়ছে।', english: 'The bird is flying in the sky.' },
            { bengali: 'তারা একটি নতুন প্রজেক্ট নিয়ে কাজ করছে।', english: 'They are working on a new project.' },
            { bengali: 'সে গাড়ি চালাচ্ছে।', english: 'He is driving a car.' }
        ],
        5: [
            { bengali: 'সাঁথি কাজটি শেষ করেছে।', english: 'Sathi has finished the work.' },
            { bengali: 'আমি ভাত খেয়েছি।', english: 'I have eaten rice.' },
            { bengali: 'তারা ঢাকা পৌঁছেছে।', english: 'They have reached Dhaka.' },
            { bengali: 'সে একটি চিঠি লিখেছে।', english: 'He has written a letter.' },
            { bengali: 'আমরা ম্যাচটি জিতেছি।', english: 'We have won the match.' },
            { bengali: 'তিনি চলে গেছেন।', english: 'He has left.' },
            { bengali: 'আমি সিনেমাটি দেখেছি।', english: 'I have seen the movie.' },
            { bengali: 'তারা একটি গাড়ি কিনেছে।', english: 'They have bought a car.' },
            { bengali: 'সে তার চাবি হারিয়েছে।', english: 'She has lost her key.' },
            { bengali: 'আমরা আমাদের লক্ষ্য অর্জন করেছি।', english: 'We have achieved our goal.' }
        ],
        6: [
            { bengali: 'সাঁথি সকাল থেকে পড়ছে।', english: 'Sathi has been reading since morning.' },
            { bengali: 'দুই ঘণ্টা ধরে বৃষ্টি হচ্ছে।', english: 'It has been raining for two hours.' },
            { bengali: 'তারা তিন বছর ধরে এখানে বাস করছে।', english: 'They have been living here for three years.' },
            { bengali: 'আমি সকাল থেকে ইংরেজি অনুশীলন করছি।', english: 'I have been practicing English since morning.' },
            { bengali: 'সে এক ঘণ্টা ধরে খেলছে।', english: 'He has been playing for an hour.' },
            { bengali: 'আমরা ২০০৫ সাল থেকে এই স্কুলে পড়ছি।', english: 'We have been studying in this school since 2005.' },
            { bengali: 'তিনি সকাল থেকে কাজ করছেন।', english: 'He has been working since morning.' },
            { bengali: 'তারা সকাল থেকে বিতর্ক করছে।', english: 'They have been debating since morning.' },
            { bengali: 'সে দীর্ঘক্ষণ ধরে অপেক্ষা করছে।', english: 'She has been waiting for a long time.' },
            { bengali: 'আমরা সকাল থেকে রান্না করছি।', english: 'We have been cooking since morning.' }
        ],
        7: [
            { bengali: 'সাঁথি গতকাল এসেছিল।', english: 'Sathi came yesterday.' },
            { bengali: 'আমি গত বছর পরীক্ষা দিয়েছিলাম।', english: 'I took the exam last year.' },
            { bengali: 'তারা গত সপ্তাহে একটি গাড়ি কিনেছিল।', english: 'They bought a car last week.' },
            { bengali: 'সে আমাকে একটি চিঠি লিখেছিল।', english: 'He wrote me a letter.' },
            { bengali: 'আমরা গত রাতে সিনেমাটি দেখেছিলাম।', english: 'We watched the movie last night.' },
            { bengali: 'তিনি পাঁচ বছর আগে পাস করেছিলেন।', english: 'He passed five years ago.' },
            { bengali: 'তারা ম্যাচটি জিতেছিল।', english: 'They won the match.' },
            { bengali: 'সে আমাকে একটি প্রশ্ন জিজ্ঞেস করেছিল।', english: 'She asked me a question.' },
            { bengali: 'আমি গতকাল তার সাথে দেখা করেছিলাম।', english: 'I met him yesterday.' },
            { bengali: 'আমরা সেখানে গিয়েছিলাম।', english: 'We went there.' }
        ],
        8: [
            { bengali: 'সাঁথি যখন পড়ছিল তখন আমি ঘুমাচ্ছিলাম।', english: 'I was sleeping while Sathi was reading.' },
            { bengali: 'তারা যখন খেলছিল তখন বৃষ্টি হচ্ছিল।', english: 'It was raining while they were playing.' },
            { bengali: 'আমি যখন রান্না করছিলাম তখন মা এসেছিলেন।', english: 'I was cooking when mother came.' },
            { bengali: 'সে যখন হাঁটছিল তখন পড়ে গিয়েছিল।', english: 'He fell down while he was walking.' },
            { bengali: 'আমরা যখন সিনেমা দেখছিলাম তখন কারেন্ট চলে গিয়েছিল।', english: 'We were watching a movie when the power went out.' },
            { bengali: 'তিনি যখন লিখছিলেন তখন তার কলম ভেঙেছিল।', english: 'He was writing when his pen broke.' },
            { bengali: 'তারা যখন ভ্রমণ করছিল তখন তাদের গাড়ি নষ্ট হয়েছিল।', english: 'They were traveling when their car broke down.' },
            { bengali: 'সে যখন গান গাইছিল তখন সবাই হাততালি দিচ্ছিল।', english: 'Everyone was clapping while she was singing.' },
            { bengali: 'আমি যখন কাজ করছিলাম তখন সে গান শুনছিল।', english: 'I was working while he was listening to music.' },
            { bengali: 'তারা যখন পড়াশোনা করছিল তখন হৈচৈ হচ্ছিল।', english: 'They were studying while there was noise.' }
        ],
        9: [
            { bengali: 'ডাক্তার আসার পূর্বে রোগী মারা গিয়েছিল।', english: 'The patient had died before the doctor came.' },
            { bengali: 'স্টেশনে পৌঁছার পূর্বে ট্রেন ছেড়ে দিয়েছিল।', english: 'The train had left before we reached the station.' },
            { bengali: 'আমি আসার আগেই সে চলে গিয়েছিল।', english: 'He had gone before I came.' },
            { bengali: 'পরীক্ষা শুরু হওয়ার পূর্বে সাঁথি পৌঁছেছিল।', english: 'Sathi had arrived before the exam started.' },
            { bengali: 'আমরা খাওয়ার পূর্বে তারা রান্না শেষ করেছিল।', english: 'They had cooked before we ate.' },
            { bengali: 'সে কাজটি করার আগেই আমি শেষ করেছিলাম।', english: 'I had finished the work before he did it.' },
            { bengali: 'বৃষ্টি শুরু হওয়ার পূর্বেই আমরা বাড়ি পৌঁছেছিলাম।', english: 'We had reached home before it started to rain.' },
            { bengali: 'সূর্য ওঠার পূর্বে সে ঘুম থেকে উঠেছিল।', english: 'He had risen from bed before the sun rose.' },
            { bengali: 'তারা সিদ্ধান্ত নেওয়ার পূর্বে আমি তাদের বলেছিলাম।', english: 'I had told them before they made the decision.' },
            { bengali: 'শিক্ষক আসার পূর্বে ছাত্ররা ক্লাসে এসেছিল।', english: 'The students had come into class before the teacher came.' }
        ],
        10: [
            { bengali: 'সে আসার পূর্বে আমি দুই ঘণ্টা ধরে পড়ছিলাম।', english: 'I had been reading for two hours before he came.' },
            { bengali: 'বৃষ্টি শুরু হওয়ার পূর্বে তারা খেলছিল।', english: 'They had been playing before it started to rain.' },
            { bengali: 'সাঁথি আসার আগে আমরা অপেক্ষা করছিলাম।', english: 'We had been waiting before Sathi arrived.' },
            { bengali: 'চাকরি পাওয়ার পূর্বে সে পাঁচ বছর ধরে এখানে কাজ করছিল।', english: 'He had been working here for five years before he got the job.' },
            { bengali: 'পরীক্ষা শেষ হওয়ার পূর্বে আমরা লিখছিলাম।', english: 'We had been writing before the exam finished.' },
            { bengali: 'সে আসার পূর্বে তারা বিতর্ক করছিল।', english: 'They had been debating before he came.' },
            { bengali: 'আমি দেখার পূর্বে সে কাঁদছিল।', english: 'She had been crying before I saw her.' },
            { bengali: 'সূর্য ওঠার পূর্বে আমরা হাঁটছিলাম।', english: 'We had been walking before the sun rose.' },
            { bengali: 'তারা আসার পূর্বে মা রান্না করছিলেন।', english: 'Mother had been cooking before they arrived.' },
            { bengali: 'বাবা ডাকার পূর্বে সে পড়ছিল।', english: 'He had been reading before father called him.' }
        ],
        11: [
            { bengali: 'সাঁথি আগামীকাল আসবে।', english: 'Sathi will come tomorrow.' },
            { bengali: 'আমি একটি চিঠি লিখব।', english: 'I will write a letter.' },
            { bengali: 'তারা আগামীকাল ম্যাচটি খেলবে।', english: 'They will play the match tomorrow.' },
            { bengali: 'সে পরীক্ষায় পাস করবে।', english: 'He will pass in the exam.' },
            { bengali: 'আমরা আগামী সপ্তাহে ঢাকা যাব।', english: 'We will go to Dhaka next week.' },
            { bengali: 'তিনি নতুন কাজটি শুরু করবেন।', english: 'He will start the new job.' },
            { bengali: 'তারা একটি গাড়ি কিনবে।', english: 'They will buy a car.' },
            { bengali: 'আমি তোমাকে সাহায্য করব।', english: 'I will help you.' },
            { bengali: 'সে আমাদের বাসায় আসবে।', english: 'She will come to our house.' },
            { bengali: 'আমরা একটি সিনেমা দেখব।', english: 'We will watch a movie.' }
        ],
        12: [
            { bengali: 'সাঁথি আগামীকাল এই সময়ে পড়তে থাকবে।', english: 'Sathi will be reading at this time tomorrow.' },
            { bengali: 'তারা বিকেলে খেলতে থাকবে।', english: 'They will be playing in the afternoon.' },
            { bengali: 'আমি তখন ঘুমাতে থাকব।', english: 'I will be sleeping then.' },
            { bengali: 'সে আমাদের জন্য অপেক্ষা করতে থাকবে।', english: 'She will be waiting for us.' },
            { bengali: 'আমরা আগামীকাল যাত্রা করতে থাকব।', english: 'We will be traveling tomorrow.' },
            { bengali: 'মা তখন রান্না করতে থাকবেন।', english: 'Mother will be cooking then.' },
            { bengali: 'শিক্ষক তখন ক্লাস নিতে থাকবেন।', english: 'The teacher will be taking class then.' },
            { bengali: 'তারা বিতর্ক করতে থাকবে।', english: 'They will be debating.' },
            { bengali: 'সে গান গাইতে থাকবে।', english: 'He will be singing a song.' },
            { bengali: 'আমরা ইংরেজি শিখতে থাকব।', english: 'We will be learning English.' }
        ],
        13: [
            { bengali: 'সাঁথি আসার পূর্বেই আমি কাজটি শেষ করে থাকব।', english: 'I will have finished the work before Sathi comes.' },
            { bengali: 'তারা পৌঁছার পূর্বেই ট্রেন ছেড়ে দিয়ে থাকবে।', english: 'The train will have left before they reach.' },
            { bengali: 'আগামীকালের মধ্যে আমরা আমাদের প্রজেক্ট শেষ করে থাকব।', english: 'We will have completed our project by tomorrow.' },
            { bengali: 'সে আসার আগে আমি ঘুমিয়ে থাকব।', english: 'I will have slept before he arrives.' },
            { bengali: 'তারা আসার পূর্বেই মা রান্না শেষ করে থাকবেন।', english: 'Mother will have cooked before they come.' },
            { bengali: 'বিকেলের মধ্যে সে এসে থাকবে।', english: 'He will have arrived by afternoon.' },
            { bengali: 'আমরা পরীক্ষার পূর্বে সিলেবাস শেষ করে থাকব।', english: 'We will have finished the syllabus before the exam.' },
            { bengali: 'সূর্য ওঠার পূর্বে সে ঘুম থেকে উঠে থাকবে।', english: 'He will have risen before the sun rises.' },
            { bengali: 'আগামী বছরের মধ্যে তারা বাড়িটি তৈরি করে থাকবে।', english: 'They will have built the house by next year.' },
            { bengali: 'শিক্ষক আসার পূর্বে ছাত্ররা শান্ত হয়ে থাকবে।', english: 'The students will have become quiet before the teacher comes.' }
        ],
        14: [
            { bengali: 'তুমি আসার আগে আমি দুই ঘণ্টা ধরে পড়তে থাকব।', english: 'I will have been reading for two hours before you come.' },
            { bengali: 'তারা পৌঁছার পূর্বে দুই ঘণ্টা ধরে খেলতে থাকবে।', english: 'They will have been playing for two hours before they reach.' },
            { bengali: 'সাঁথি আসার পূর্বে আমরা এক ঘণ্টা ধরে অপেক্ষা করতে থাকব।', english: 'We will have been waiting for an hour before Sathi arrives.' },
            { bengali: 'চাকরি পাওয়ার পূর্বে সে পাঁচ বছর ধরে কাজ করতে থাকবে।', english: 'He will have been working for five years before he gets the job.' },
            { bengali: 'পরীক্ষা শেষ হওয়ার পূর্বে আমরা লিখতে থাকব।', english: 'We will have been writing before the exam finishes.' },
            { bengali: 'সূর্য ওঠার পূর্বে আমরা হাঁটতে থাকব।', english: 'We will have been walking before the sun rises.' },
            { bengali: 'তারা আসার পূর্বে মা রান্না করতে থাকবেন।', english: 'Mother will have been cooking before they arrive.' },
            { bengali: 'বাবা ডাকার পূর্বে সে পড়তে থাকবে।', english: 'He will have been reading before father calls.' },
            { bengali: 'সন্ধ্যা হওয়ার পূর্বে তারা মাঠে কাজ করতে থাকবে।', english: 'They will have been working in the field before evening.' },
            { bengali: 'আমি যাওয়ার পূর্বে সে গান গাইতে থাকবে।', english: 'She will have been singing before I go.' }
        ],
        15: [
            { bengali: 'সাঁথি গড়গড় করে ইংরেজি বলতে পারে।', english: 'Sathi can speak English fluently.' },
            { bengali: 'আমি সাতার কাটতে পারি।', english: 'I can swim.' },
            { bengali: 'তারা সমস্যাটি সমাধান করতে পারে।', english: 'They can solve the problem.' },
            { bengali: 'সে কাজটি করতে পেরেছিল।', english: 'He could do the work.' },
            { bengali: 'আমি গতকাল আসতে পেরেছিলাম।', english: 'I could come yesterday.' },
            { bengali: 'আমরা ম্যাচটি জিততে পারি।', english: 'We can win the match.' },
            { bengali: 'তিনি গাড়িটি চালাতে পারেন।', english: 'He can drive the car.' },
            { bengali: 'তুমি কি আমাকে সাহায্য করতে পারো?', english: 'Can you help me?' },
            { bengali: 'সে তখন কথা বলতে পারত না।', english: 'He could not speak then.' },
            { bengali: 'তারা কাজটি করতে পারে।', english: 'They can do the work.' }
        ],
        16: [
            { bengali: 'আজ বৃষ্টি হতে পারে।', english: 'It may rain today.' },
            { bengali: 'সাঁথি পরীক্ষায় ভালো করতে পারে।', english: 'Sathi might do well in the exam.' },
            { bengali: 'তিনি সত্য বলতে পারেন।', english: 'He may speak the truth.' },
            { bengali: 'তারা আসতে পারে।', english: 'They might come.' },
            { bengali: 'আমি কি ভেতরে আসতে পারি?', english: 'May I come in?' },
            { bengali: 'এটি সত্য হতে পারে।', english: 'This may be true.' },
            { bengali: 'সে হয়তো আমাদের সাহায্য করবে।', english: 'He might help us.' },
            { bengali: 'তুমি কি তার সাথে দেখা করতে পারো?', english: 'You might meet him.' },
            { bengali: 'তারা হয়তো ম্যাচটি জিতবে।', english: 'They may win the match.' },
            { bengali: 'সে লাইব্রেরিতে থাকতে পারে।', english: 'She might be in the library.' }
        ],
        17: [
            { bengali: 'আমাদের মা-বাবাকে মান্য করা উচিত।', english: 'We should obey our parents.' },
            { bengali: 'সাঁথিকে অবশ্যই কঠোর পরিশ্রম করতে হবে।', english: 'Sathi must work hard.' },
            { bengali: 'তোমাকে আইন মেনে চলতে হবে।', english: 'You have to follow the rules.' },
            { bengali: 'আমাদের নিয়মিত ইংরেজি পড়া উচিত।', english: 'We should read English regularly.' },
            { bengali: 'তোমাকে অবশ্যই সেখানে যেতে হবে।', english: 'You must go there.' },
            { bengali: 'তাকে নতুন কাজটি করতে হবে।', english: 'She has to do the new job.' },
            { bengali: 'আমাদের পরিবেশ রক্ষা করা উচিত।', english: 'We should protect our environment.' },
            { bengali: 'ছাত্রদের অবশ্যই সৎ হতে হবে।', english: 'Students must be honest.' },
            { bengali: 'তাকে সাহায্য করতে হবে।', english: 'He has to help.' },
            { bengali: 'তোমার ডাক্তারের কাছে যাওয়া উচিত।', english: 'You should go to a doctor.' }
        ],
        18: [
            { bengali: 'একটি বই সাঁথি দ্বারা পঠিত হচ্ছে।', english: 'A book is being read by Sathi.' },
            { bengali: 'ফুটবল আমাদের দ্বারা খেলা হয়।', english: 'Football is played by us.' },
            { bengali: 'চিঠিটি রহিম কর্তৃক লিখিত হয়েছিল।', english: 'The letter was written by Rahim.' },
            { bengali: 'ম্যাচটি তাদের দ্বারা জেতা হয়েছে।', english: 'The match has been won by them.' },
            { bengali: 'একটি সুন্দর ছবি আঁকা হচ্ছে।', english: 'A beautiful picture is being drawn.' },
            { bengali: 'আইন মেনে চলা উচিত।', english: 'Rules should be followed.' },
            { bengali: 'কাজটি অবশ্যই সম্পন্ন করতে হবে।', english: 'The work must be completed.' },
            { bengali: 'ঘরটি পরিষ্কার করা হয়েছে।', english: 'The room has been cleaned.' },
            { bengali: 'খাবার রান্না করা হচ্ছে।', english: 'Food is being cooked.' },
            { bengali: 'সারা বিশ্বে ইংরেজি বলা হয়।', english: 'English is spoken all over the world.' }
        ],
        19: [
            { bengali: 'যে ছেলেটি এখানে এসেছিল সে আমার ভাই।', english: 'The boy who came here is my brother.' },
            { bengali: 'যে বইটি সাঁথি দিয়েছিল তা চমৎকার।', english: 'The book which Sathi gave was wonderful.' },
            { bengali: 'যে বাড়িটি আমরা কিনেছি তা অনেক বড়।', english: 'The house that we bought is very big.' },
            { bengali: 'যে শিক্ষক আমাদের ইংরেজি পড়ান তিনি দক্ষ।', english: 'The teacher who teaches us English is efficient.' },
            { bengali: 'যে কলমটি আমি হারিয়েছি তা লাল ছিল।', english: 'The pen which I lost was red.' },
            { bengali: 'যে লোকটি সত্য বলে তাকে সবাই বিশ্বাস করে।', english: 'The man who speaks the truth is trusted by all.' },
            { bengali: 'যে গানটি সে গেয়েছিল তা মিষ্টি ছিল।', english: 'The song which she sang was sweet.' },
            { bengali: 'যে মোবাইলটি আমি ব্যবহার করি তা নতুন।', english: 'The mobile that I use is new.' },
            { bengali: 'যে গাছটি আমাদের বাড়ির সামনে আছে তা আম গাছ।', english: 'The tree which is in front of our house is a mango tree.' },
            { bengali: 'যে ছাত্রটি পুরস্কার পেয়েছিল সে খুশি।', english: 'The student who got the prize is happy.' }
        ],
        20: [
            { bengali: 'যদি তুমি আসো, আমি যাব।', english: 'If you come, I will go.' },
            { bengali: 'যদি সাঁথি পড়ে, সে পাস করবে।', english: 'If Sathi studies, she will pass.' },
            { bengali: 'যদি আমি রাজা হতাম, আমি তোমাকে সাহায্য করতাম।', english: 'If I were a king, I would help you.' },
            { bengali: 'যদি তারা খেলে, তারা জিতবে।', english: 'If they play, they will win.' },
            { bengali: 'যদি পানি গরম করো, তা ফুটবে।', english: 'If you heat water, it boils.' },
            { bengali: 'যদি সে কঠোর পরিশ্রম করত, সে সফল হতো।', english: 'If he worked hard, he would succeed.' },
            { bengali: 'যদি আমি লটারি জিততাম, আমি একটি গাড়ি কিনতাম।', english: 'If I won the lottery, I would buy a car.' },
            { bengali: 'যদি তুমি বরফ গরম করো, তা গলে যায়।', english: 'If you heat ice, it melts.' },
            { bengali: 'যদি তারা ডাকত, আমরা যেতাম।', english: 'If they called, we would go.' },
            { bengali: 'যদি সাঁথি সময় পায়, সে আসবে।', english: 'If Sathi has time, she will come.' }
        ],
        21: [
            { bengali: 'দলটি ভালো খেলছে।', english: 'The team is playing well.' },
            { bengali: 'কমিটি সিদ্ধান্ত নিয়েছে।', english: 'The committee has made a decision.' },
            { bengali: 'সরকার কর বাড়াচ্ছে।', english: 'The government is increasing taxes.' },
            { bengali: 'শ্রেণীকক্ষটি নীরব।', english: 'The class is silent.' },
            { bengali: 'পরিবারটি আগামী সপ্তাহে ভ্রমণ করবে।', english: 'The family is traveling next week.' },
            { bengali: 'দর্শকরা হাততালি দিচ্ছেন।', english: 'The audience is clapping.' },
            { bengali: 'ক্লাবটি একটি সভার আয়োজন করছে।', english: 'The club is organizing a meeting.' },
            { bengali: 'স্টাফ কঠোর পরিশ্রম করছেন।', english: 'The staff is working hard.' },
            { bengali: 'পুলিশ বিষয়টি তদন্ত করছে।', english: 'The police are investigating the matter.' },
            { bengali: 'দলটি তাদের নতুন জার্সি প্রকাশ করেছে।', english: 'The team has released its new jersey.' }
        ],
        22: [
            { bengali: 'শহরটি সুন্দর। তবে এটি বেশ ব্যয়বহুল।', english: 'The city is beautiful. However, it is quite expensive.' },
            { bengali: 'সাঁথি চেষ্টা করেছিল। তবুও, সে ব্যর্থ হয়েছিল।', english: 'Sathi tried. However, she failed.' },
            { bengali: 'কোর্সটি কঠিন ছিল। তবুও, তারা এটি উপভোগ করেছিল।', english: 'The course was difficult. However, they enjoyed it.' },
            { bengali: 'সে অসুস্থ ছিল। তবুও, সে পরীক্ষা দিয়েছিল।', english: 'He was ill. However, he took the exam.' },
            { bengali: 'আমি উপন্যাস পড়তে পছন্দ করি। তবে আমার বোন সিনেমা দেখতে পছন্দ করে।', english: 'I like reading novels. However, my sister prefers watching movies.' },
            { bengali: 'সে ধনী। তবুও, সে খুব সৎ।', english: 'He is rich. However, he is very honest.' },
            { bengali: 'আজ বৃষ্টি হচ্ছে। তবুও, আমরা বাইরে যাব।', english: 'It is raining today. However, we will go out.' },
            { bengali: 'কাজটি কঠিন। তবুও, আমাদের এটি করতে হবে।', english: 'The work is hard. However, we must do it.' },
            { bengali: 'সে দ্রুত দৌড়েছিল। তবুও, সে ট্রেনটি মিস করেছিল।', english: 'He ran fast. However, he missed the train.' },
            { bengali: 'প্রকল্পটি চমৎকার। তবে এটি বাস্তবায়নে সময় লাগবে।', english: 'The project is wonderful. However, it will take time to implement.' }
        ],
        23: [
            { bengali: 'রাস্তা পার হওয়ার সময় আমি একটি দুর্ঘটনা দেখলাম।', english: 'While crossing the road, I saw an accident.' },
            { bengali: 'সাঁথি যখন পরীক্ষা দিচ্ছিল তখন তার কলমটি ভেঙে গেল।', english: 'While Sathi was taking the exam, her pen broke.' },
            { bengali: 'বাগানে হাঁটার সময় আমি একটি সুন্দর পাখি দেখেছিলাম।', english: 'While walking in the garden, I saw a beautiful bird.' },
            { bengali: 'বইটি পড়ার সময় সাঁথির ফোন বেজে উঠেছিল।', english: 'While Sathi was reading the book, her phone rang.' },
            { bengali: 'টিভি দেখার সময় সে ঘুমিয়ে পড়েছিল।', english: 'While watching TV, he fell asleep.' },
            { bengali: 'রান্না করার সময় মা হাত পুড়িয়ে ফেলেছিলেন।', english: 'While cooking, mother burnt her hand.' },
            { bengali: 'গাড়ি চালানোর সময় সে একটি ফোন কল পেয়েছিল।', english: 'While driving, he received a phone call.' },
            { bengali: 'গান শোনার সময় আমি এই ধারণাটি পেয়েছিলাম।', english: 'While listening to music, I got this idea.' },
            { bengali: 'ছবিটি আঁকার সময় সে অনেক মনোযোগ দিয়েছিল।', english: 'While drawing the picture, she was highly focused.' },
            { bengali: 'বিতর্ক করার সময় তারা অনেক যুক্তি উপস্থাপন করেছিল।', english: 'While debating, they presented many arguments.' }
        ]
    };
    return list[ruleId] || [];
};

// Procedural exercise generator to yield EXACTLY 50 exercises per rule
export const generate50Exercises = (ruleId: number, ruleTitle: string): FallbackExercise[] => {
    const exercises: FallbackExercise[] = [];
    const subjects = ['Sathi', 'Rahim', 'They', 'We', 'He', 'She', 'The student', 'The teacher', 'My friend'];
    const verbs = ['study', 'practice', 'write', 'complete', 'read', 'speak', 'learn', 'prepare', 'help'];
    
    // Determine the tense/modal conjugation rule for variables
    const getVerbForm = (subj: string, base: string, type: string) => {
        const isSingular = ['Sathi', 'Rahim', 'He', 'She', 'The student', 'The teacher'].includes(subj);
        switch (type) {
            case 'present_simple':
                if (isSingular) {
                    if (base === 'study') return 'studies';
                    if (base === 'practice') return 'practices';
                    if (base === 'write') return 'writes';
                    if (base === 'complete') return 'completes';
                    if (base === 'read') return 'reads';
                    if (base === 'speak') return 'speaks';
                    if (base === 'learn') return 'learns';
                    if (base === 'prepare') return 'prepares';
                    return base + 's';
                }
                return base;
            case 'present_continuous':
                const verbIng = base.endsWith('e') ? base.slice(0, -1) + 'ing' : base + 'ing';
                const helper = subj === 'I' ? 'am' : isSingular ? 'is' : 'are';
                return `${helper} ${verbIng}`;
            case 'present_perfect':
                const v3 = base.endsWith('e') ? base + 'd' : base === 'write' ? 'written' : base === 'speak' ? 'spoken' : base === 'read' ? 'read' : base + 'ed';
                const hasHave = isSingular ? 'has' : 'have';
                return `${hasHave} ${v3}`;
            case 'past_simple':
                if (base === 'write') return 'wrote';
                if (base === 'speak') return 'spoke';
                if (base === 'read') return 'read';
                if (base === 'study') return 'studied';
                if (base === 'come') return 'came';
                if (base === 'go') return 'went';
                return base.endsWith('e') ? base + 'd' : base + 'ed';
            default:
                return base;
        }
    };

    // Let's generate 50 exercises based on the rule ID
    for (let i = 1; i <= 50; i++) {
        const subj = subjects[i % subjects.length];
        const verb = verbs[(i + 2) % verbs.length];
        
        if (i % 3 === 1) {
            // MCQ Question
            let q = "";
            let opts: string[] = [];
            let ans = 0;
            let expl = "";

            if (ruleId === 1) {
                q = `Identify the correct Subject-Verb-Object (SVO) order for: "${subj} / a book / reads".`;
                opts = [`Reads a book ${subj}.`, `${subj} reads a book.`, `A book reads ${subj}.`, `${subj} a book reads.`];
                ans = 1;
                expl = `ইংরেজি বাক্যের স্বাভাবিক গঠন হলো Subject (${subj}) + Verb (reads) + Object (a book)।`;
            } else if (ruleId === 3) {
                const corr = getVerbForm(subj, verb, 'present_simple');
                const wrong1 = verb + 'ing';
                const wrong2 = 'is ' + verb;
                q = `Choose the correct Present Simple form: "${subj} ___ English daily."`;
                opts = [wrong1, corr, wrong2, verb + 'ed'];
                ans = 1;
                expl = `অভ্যাসগত কাজ বোঝাতে Present Simple বসে। কর্তা ৩য় পুরুষ একবচন হলে verb-এর সাথে s/es বসে।`;
            } else if (ruleId === 4) {
                const corr = getVerbForm(subj, verb, 'present_continuous');
                q = `Choose the correct Present Continuous form: "${subj} ___ English right now."`;
                opts = [verb, getVerbForm(subj, verb, 'present_simple'), corr, verb + 'ed'];
                ans = 2;
                expl = `বর্তমানে কোনো কাজ চলছে বোঝাতে Present Continuous Tense (am/is/are + verb+ing) ব্যবহৃত হয়।`;
            } else if (ruleId === 5) {
                const corr = getVerbForm(subj, verb, 'present_perfect');
                q = `Choose the correct Present Perfect form: "${subj} ___ the IELTS assignment just now."`;
                opts = [corr, verb, verb + 'ing', 'was ' + verb];
                ans = 0;
                expl = `কোনো কাজ এইমাত্র শেষ হয়েছে বোঝাতে Present Perfect Tense (have/has + V3) বসে।`;
            } else {
                // Default MCQ
                q = `Which of the following sentences correctly applies Rule ${ruleId}?`;
                opts = [`The student works hard.`, `Working hard the student.`, `The student is work hard.`, `Hard work is student.`];
                ans = 0;
                expl = `বাক্য গঠনে প্রথমে কর্তা, তারপর ক্রিয়া এবং শেষে অন্যান্য অংশ বসে।`;
            }

            exercises.push({
                type: 'mcq',
                question: q,
                options: opts,
                answer: ans,
                explanation: expl
            });

        } else if (i % 3 === 2) {
            // Gap Question
            let q = "";
            let opts: string[] = [];
            let ans = 0;
            let expl = "";

            if (ruleId === 1) {
                q = `${subj} ___ (cook) food in the kitchen.`;
                opts = ['cook', 'cooks', 'cooking', 'cooked'];
                ans = ['Sathi', 'Rahim', 'He', 'She', 'The student', 'The teacher', 'My friend'].includes(subj) ? 1 : 0;
                expl = `কর্তার সংখ্যা ও পার্সন অনুসারে সঠিক ক্রিয়ার রূপ বসাতে হবে।`;
            } else if (ruleId === 15) {
                q = `She ___ (can/could) speak English very well when she was a child.`;
                opts = ['can', 'could', 'should', 'must'];
                ans = 1;
                expl = `অতীতের সামর্থ্য প্রকাশ করতে 'could' ব্যবহৃত হয়।`;
            } else if (ruleId === 17) {
                q = `We ___ follow the traffic laws to stay safe.`;
                opts = ['might', 'could', 'must', 'may'];
                ans = 2;
                expl = `বাধ্যবাধকতা প্রকাশ করতে 'must' ব্যবহার করতে হয়।`;
            } else {
                const vform = getVerbForm(subj, verb, 'present_simple');
                q = `${subj} ___ English every day.`;
                opts = [verb, vform, verb + 'ing', 'is ' + verb];
                ans = 1;
                expl = `দৈনন্দিন অভ্যাসের ক্ষেত্রে Present Simple Tense বসে।`;
            }

            exercises.push({
                type: 'gap',
                question: q,
                options: opts,
                answer: ans,
                explanation: expl
            });

        } else {
            // Translation Question (Duolingo Style)
            let bn = "";
            let eng = "";
            let words: string[] = [];

            if (ruleId === 1) {
                bn = `${subj === 'Sathi' ? 'সাঁথি' : 'সে'} ইংরেজি পড়ে।`;
                eng = `${subj === 'Sathi' ? 'Sathi' : 'He'} reads English`;
                words = [subj === 'Sathi' ? 'Sathi' : 'He', 'reads', 'English', 'book', 'write'];
            } else if (ruleId === 3) {
                bn = `${subj === 'Sathi' ? 'সাঁথি' : 'সে'} প্রতিদিন অনুশীলন করে।`;
                eng = `${subj === 'Sathi' ? 'Sathi' : 'He'} practices every day`;
                words = [subj === 'Sathi' ? 'Sathi' : 'He', 'practices', 'every', 'day', 'night', 'sleep'];
            } else if (ruleId === 15) {
                bn = `আমি সাঁতার কাটতে পারি।`;
                eng = `I can swim`;
                words = [`I`, `can`, `swim`, `cannot`, `run`];
            } else {
                bn = `আমরা ইংরেজি শিখি।`;
                eng = `We learn English`;
                words = [`We`, `learn`, `English`, `plays`, `football`];
            }

            exercises.push({
                type: 'translation',
                question: bn,
                correctText: eng,
                options: [...new Set(words)], // Unique words
                answer: 0,
                explanation: `বাংলা বাক্য "${bn}" এর সঠিক ইংরেজি অনুবাদ হলো "${eng}"।`
            });
        }
    }
    return exercises;
};

export const SENTENCE_MAKING_RULES: Record<number, SentenceRule[]> = {
    1: [
        {
            id: 1,
            title: 'Base Sentence Building (S + V + O)',
            titleBn: 'মৌলিক বাক্য গঠন (কর্তা + ক্রিয়া + কর্ম)',
            formula: 'Subject + Verb + Object',
            conceptBn: 'বাংলা বাক্যের শেষে সাধারণত ক্রিয়া (Verb) থাকে, কিন্তু ইংরেজিতে সাবজেক্টের (Subject) পরেই ভার্ব বসাতে হয়। এটিই ইংরেজি বাক্য গঠনের মূল ভিত্তি।',
            steps: [
                { bengali: 'সাঁথি পড়ে।', english: 'Sathi studies.', explanation: 'এখানে Sathi (Subject) এবং studies (Verb)।' },
                { bengali: 'সাঁথি ইংরেজি পড়ে।', english: 'Sathi studies English.', explanation: 'এখানে English (Object) যুক্ত হয়েছে যা Verb-এর পরে বসেছে।' }
            ],
            examples: createExamples(1),
            fallbackExercises: generate50Exercises(1, 'Base Sentence Building (S + V + O)')
        },
        {
            id: 2,
            title: 'Noun Modifiers in Sentences',
            titleBn: 'নাউনের পূর্বে এডজেক্টিভ বসানো',
            formula: 'Subject + Verb + [Adjective + Noun]',
            conceptBn: 'নাউন বা কর্তার অতিরিক্ত গুণ প্রকাশ করতে তার ঠিক পূর্বে এডজেক্টিভ বসাতে হয়।',
            steps: [
                { bengali: 'সাঁথি একটি বই পড়ে।', english: 'Sathi reads a book.', explanation: 'এখানে book হলো Noun।' },
                { bengali: 'সাঁথি একটি চমৎকার বই পড়ে।', english: 'Sathi reads a wonderful book.', explanation: 'বইটির গুণ প্রকাশ করতে book এর পূর্বে "wonderful" (Adjective) যোগ করা হয়েছে।' }
            ],
            examples: createExamples(2),
            fallbackExercises: generate50Exercises(2, 'Noun Modifiers in Sentences')
        }
    ],
    2: [
        {
            id: 3,
            title: 'The Sentence Expansion Formula (MPTW)',
            titleBn: 'বাক্য বড় করার মহা-সূত্র (MPTW নিয়ম)',
            formula: 'Subject + Verb + Object + Manner (কিভাবে) + Place (কোথায়) + Time (কখন) + Why (কেন)',
            conceptBn: 'ছোট বাক্যকে কীভাবে ধাপে ধাপে অনেক বড় করবেন তার সবচেয়ে সহজ নিয়ম হলো MPTW সূত্র। প্রথমে মূল বাক্য (S+V+O) লিখুন, তারপর যথাক্রমে Manner, Place, Time ও Why এর উত্তর যোগ করুন।',
            steps: [
                { bengali: 'সাঁথি ইংরেজি অনুশীলন করে।', english: 'Sathi practices English.', explanation: 'ধাপ ১: মূল বাক্য (Subject + Verb + Object)' },
                { bengali: 'সাঁথি মনোযোগ দিয়ে ইংরেজি অনুশীলন করে।', english: 'Sathi practices English attentively.', explanation: 'ধাপ ২: Manner (কিভাবে?) -> attentively' },
                { bengali: 'সাঁথি মনোযোগ দিয়ে তার রুমে ইংরেজি অনুশীলন করে।', english: 'Sathi practices English attentively in her room.', explanation: 'ধাপ ৩: Place (কোথায়?) -> in her room' },
                { bengali: 'সাঁথি প্রতিদিন সকালে মনোযোগ দিয়ে তার রুমে ইংরেজি অনুশীলন করে।', english: 'Sathi practices English attentively in her room every morning.', explanation: 'ধাপ ৪: Time (কখন?) -> every morning' },
                { bengali: 'আইইএলটিএস-এ ভালো করতে সাঁথি প্রতিদিন সকালে মনোযোগ দিয়ে তার রুমে ইংরেজি অনুশীলন করে।', english: 'Sathi practices English attentively in her room every morning to do well in IELTS.', explanation: 'ধাপ ৫: Why (কেন?) -> to do well in IELTS (উদ্দেশ্য)' }
            ],
            examples: [
                { bengali: 'তারা বিকেলে মাঠে আনন্দের সাথে ফুটবল খেলে শরীর সুস্থ রাখতে।', english: 'They play football joyfully in the field in the afternoon to keep their bodies fit.' }
            ],
            fallbackExercises: generate50Exercises(3, 'Sentence Expansion Formula (MPTW)')
        }
    ],
    3: [
        {
            id: 3,
            title: 'Habitual Present (Present Simple)',
            titleBn: 'অভ্যাসগত বাক্য গঠন (Present Simple)',
            formula: 'Subject + Verb (s/es for 3rd person singular) + Object',
            conceptBn: 'প্রতিদিনের অভ্যাস বা চিরন্তন সত্য প্রকাশে এই স্ট্রাকচার ব্যবহৃত হয়। সাবজেক্ট ৩য় ব্যক্তি একবচন (He, She, It, Sathi) হলে Verb এর সাথে s বা es যোগ করতে ভুলবেন না।',
            steps: [
                { bengali: 'সে চা পান করে।', english: 'He drinks tea.', explanation: 'He ৩য় পুরুষ একবচন হওয়ায় drink এর সাথে s যোগ হয়ে drinks হয়েছে।' },
                { bengali: 'সে প্রতিদিন সকালে চা পান করে।', english: 'He drinks tea every morning.', explanation: 'সময় নির্দেশ করতে every morning শেষে যুক্ত হয়েছে।' }
            ],
            examples: createExamples(3),
            fallbackExercises: generate50Exercises(3, 'Present Simple')
        },
        {
            id: 4,
            title: 'Ongoing Action (Present Continuous)',
            titleBn: 'বর্তমানে চলমান কাজ (Present Continuous)',
            formula: 'Subject + am/is/are + Verb+ing + Object',
            conceptBn: 'বর্তমানে কোনো কাজ চলছে বা ঘটছে বোঝাতে এই স্ট্রাকচার বসে।',
            steps: [
                { bengali: 'সাঁথি পড়ছে।', english: 'Sathi is reading.', explanation: 'Sathi (Subject) + is (helper) + reading (verb+ing)।' },
                { bengali: 'সাঁথি এখন ইংরেজি পড়ছে।', english: 'Sathi is reading English now.', explanation: 'চলমান কাজের সাথে অতিরিক্ত তথ্য যুক্ত করা হয়েছে।' }
            ],
            examples: createExamples(4),
            fallbackExercises: generate50Exercises(4, 'Present Continuous')
        },
        {
            id: 5,
            title: 'Just Completed Action (Present Perfect)',
            titleBn: 'পুরাঘটিত বর্তমান কাল (Present Perfect)',
            formula: 'Subject + have/has + Verb (V3) + Object',
            conceptBn: 'এইমাত্র কোনো কাজ শেষ হয়েছে যার ফলাফল এখনও বিদ্যমান।',
            steps: [
                { bengali: 'আমি শেষ করেছি।', english: 'I have finished.', explanation: 'I এর সাথে have এবং finish এর V3।' },
                { bengali: 'আমি আমার বাড়ির কাজ শেষ করেছি।', english: 'I have finished my homework.', explanation: 'Object যুক্ত বাক্য।' }
            ],
            examples: createExamples(5),
            fallbackExercises: generate50Exercises(5, 'Present Perfect')
        },
        {
            id: 6,
            title: 'Action Over Time (Present Perfect Continuous)',
            titleBn: 'দীর্ঘদিন ধরে চলা কাজ (Present Perfect Continuous)',
            formula: 'Subject + have/has + been + Verb+ing + since/for + Time',
            conceptBn: 'অতীতের কোনো সময়ে কাজ শুরু হয়ে এখনও চলছে বোঝালে since (থেকে) বা for (ধরে) বসে।',
            steps: [
                { bengali: 'বৃষ্টি হচ্ছে।', english: 'It has been raining.', explanation: 'অতীত থেকে বৃষ্টি হচ্ছে।' },
                { bengali: 'দুই ঘণ্টা ধরে বৃষ্টি হচ্ছে।', english: 'It has been raining for two hours.', explanation: 'নির্দিষ্ট সময়ের জন্য "for two hours" বসেছে।' }
            ],
            examples: createExamples(6),
            fallbackExercises: generate50Exercises(6, 'Present Perfect Continuous')
        }
    ],
    4: [
        {
            id: 7,
            title: 'Past Action Builder (Past Simple)',
            titleBn: 'অতীতের নির্দিষ্ট কাজ প্রকাশ (Past Simple)',
            formula: 'Subject + Verb (V2) + Object + Past Time Indicator',
            conceptBn: 'অতীতে নির্দিষ্ট সময়ে কোনো কাজ ঘটেছিল তা বোঝাতে এই স্ট্রাকচার বসে।',
            steps: [
                { bengali: 'আমি সাঁথিকে দেখেছিলাম।', english: 'I saw Sathi.', explanation: 'saw হলো see এর V2 রূপ।' },
                { bengali: 'আমি গতকাল সাঁথিকে দেখেছিলাম।', english: 'I saw Sathi yesterday.', explanation: 'yesterday অতীত সময় নির্দেশ করে।' }
            ],
            examples: createExamples(7),
            fallbackExercises: generate50Exercises(7, 'Past Simple')
        },
        {
            id: 8,
            title: 'Past Interrupted Actions (Past Continuous)',
            titleBn: 'অতীতের চলমান কাজ (Past Continuous)',
            formula: 'Subject + was/were + Verb+ing + Object',
            conceptBn: 'অতীতকালে কোনো কাজ কিছু সময় ধরে চলছিল বা ঘটছিল বোঝাতে এটি বসে।',
            steps: [
                { bengali: 'আমি পড়ছিলাম।', english: 'I was reading.', explanation: 'I (Subject) + was + reading (verb+ing)।' }
            ],
            examples: createExamples(8),
            fallbackExercises: generate50Exercises(8, 'Past Continuous')
        },
        {
            id: 9,
            title: 'Past Completed (Past Perfect)',
            titleBn: 'পুরাঘটিত অতীত কাল (Past Perfect)',
            formula: 'Subject + had + Verb (V3) + before/after + Past Simple',
            conceptBn: 'অতীতের দুটি কাজের মধ্যে যেটি আগে ঘটেছিল তার সাথে Past Perfect এবং পরেরটির সাথে Past Simple বসে।',
            steps: [
                { bengali: 'ট্রেন চলে গিয়েছিল।', english: 'The train had left.', explanation: 'আগের সম্পন্ন কাজ।' },
                { bengali: 'আমরা পৌঁছার পূর্বেই ট্রেন চলে গিয়েছিল।', english: 'The train had left before we reached.', explanation: 'দুটো ঘটনার সংযোগ।' }
            ],
            examples: createExamples(9),
            fallbackExercises: generate50Exercises(9, 'Past Perfect')
        },
        {
            id: 10,
            title: 'Past Perfect Continuous Tense',
            titleBn: 'পুরাঘটিত চলমান অতীত (Past Perfect Continuous)',
            formula: 'Subject + had + been + Verb+ing + for/since + Time',
            conceptBn: 'অতীতের একটি কাজের পূর্বে আরেকটি কাজ কিছু সময় ধরে চলছিল বোঝাতে বসে।',
            steps: [
                { bengali: 'সে আসছিল।', english: 'He had been coming.', explanation: 'অতীতের পূর্ববর্তী কাজ।' }
            ],
            examples: createExamples(10),
            fallbackExercises: generate50Exercises(10, 'Past Perfect Continuous')
        }
    ],
    5: [
        {
            id: 11,
            title: 'Future Simple Tense',
            titleBn: 'ভবিষ্যতের সাধারণ কাজ (Future Simple)',
            formula: 'Subject + will + Verb (Base) + Object',
            conceptBn: 'ভবিষ্যতে কোনো কাজ ঘটবে তা বোঝাতে will + V1 বসে।',
            steps: [
                { bengali: 'আমি যাব।', english: 'I will go.', explanation: 'will এর পর V1 (go) বসেছে।' }
            ],
            examples: createExamples(11),
            fallbackExercises: generate50Exercises(11, 'Future Simple')
        },
        {
            id: 12,
            title: 'Future Continuous Tense',
            titleBn: 'ভবিষ্যতে চলমান কাজ (Future Continuous)',
            formula: 'Subject + will + be + Verb+ing + Object',
            conceptBn: 'ভবিষ্যতে কোনো কাজ কিছু সময় ধরে চলতে থাকবে বোঝাতে এটি বসে।',
            steps: [
                { bengali: 'আমি পড়তে থাকব।', english: 'I will be reading.', explanation: 'will be + verb+ing।' }
            ],
            examples: createExamples(12),
            fallbackExercises: generate50Exercises(12, 'Future Continuous')
        },
        {
            id: 13,
            title: 'Future Perfect Tense',
            titleBn: 'পুরাঘটিত ভবিষ্যৎ কাল (Future Perfect)',
            formula: 'Subject + will + have + Verb (V3) + Object',
            conceptBn: 'ভবিষ্যতের কোনো নির্দিষ্ট সময়ের মধ্যে কাজ শেষ হয়ে থাকবে বোঝাতে বসে।',
            steps: [
                { bengali: 'আমি কাজটি সম্পন্ন করে থাকব।', english: 'I will have completed the work.', explanation: 'will have + V3।' }
            ],
            examples: createExamples(13),
            fallbackExercises: generate50Exercises(13, 'Future Perfect')
        },
        {
            id: 14,
            title: 'Future Perfect Continuous Tense',
            titleBn: 'ভবিষ্যতে চলমান দীর্ঘ কাজ (Future Perfect Continuous)',
            formula: 'Subject + will + have + been + Verb+ing + Object',
            conceptBn: 'ভবিষ্যতের কোনো কাজের পূর্বে আরেকটি কাজ চলতে থাকবে বোঝাতে বসে।',
            steps: [
                { bengali: 'আমি দুই ঘণ্টা ধরে পড়তে থাকব।', english: 'I will have been reading for two hours.', explanation: 'will have been + verb+ing।' }
            ],
            examples: createExamples(14),
            fallbackExercises: generate50Exercises(14, 'Future Perfect Continuous')
        }
    ],
    10: [
        {
            id: 15,
            title: 'Ability & Permission (Can / Could)',
            titleBn: 'সামর্থ্য ও অনুমতি প্রকাশ (Can / Could)',
            formula: 'Subject + can/could + Verb (Base) + Object',
            conceptBn: 'বর্তমান সামর্থ্যের জন্য Can এবং অতীতের সামর্থ্যের জন্য Could বসে।',
            steps: [
                { bengali: 'আমি ইংরেজি বলতে পারি।', english: 'I can speak English.', explanation: 'বর্তমান সামর্থ্য।' },
                { bengali: 'আমি শৈশবে ইংরেজি বলতে পারতাম।', english: 'I could speak English in my childhood.', explanation: 'অতীতের সামর্থ্য।' }
            ],
            examples: createExamples(15),
            fallbackExercises: generate50Exercises(15, 'Ability & Permission (Can / Could)')
        },
        {
            id: 16,
            title: 'Possibility & Hedging (May / Might)',
            titleBn: 'সম্ভাবনা ও নম্র অনুরোধ (May / Might)',
            formula: 'Subject + may/might + Verb (Base) + Object',
            conceptBn: 'সম্ভাবনা কম হলে might এবং বেশি হলে may বসে।',
            steps: [
                { bengali: 'আজ বৃষ্টি হতে পারে।', english: 'It may rain today.', explanation: 'সম্ভাবনা বোঝাতে may।' }
            ],
            examples: createExamples(16),
            fallbackExercises: generate50Exercises(16, 'Possibility & Hedging (May / Might)')
        },
        {
            id: 17,
            title: 'Advice & Obligation (Should / Must / Have to)',
            titleBn: 'উপদেশ ও বাধ্যবাধকতা (Should / Must / Have to)',
            formula: 'Subject + should/must/have to + Verb (Base) + Object',
            conceptBn: 'উপদেশের জন্য should, তীব্র বাধ্যবাধকতার জন্য must এবং বাহ্যিক নিয়মের জন্য have to বসে।',
            steps: [
                { bengali: 'তোমার পড়াশোনা করা উচিত।', english: 'You should study.', explanation: 'সাধারণ উপদেশ।' },
                { bengali: 'তোমাকে অবশ্যই আইইএলটিএস পাস করতে হবে।', english: 'You must pass IELTS.', explanation: 'বাধ্যবাধকতা।' }
            ],
            examples: createExamples(17),
            fallbackExercises: generate50Exercises(17, 'Advice & Obligation (Should / Must / Have to)')
        }
    ],
    6: [
        {
            id: 18,
            title: 'Active to Passive Voice Transformation',
            titleBn: 'প্যাসিভ ভয়েস গঠন প্রণালী',
            formula: 'Object (Subjective form) + Auxiliary Verb + Verb (V3) + [by + Subject]',
            conceptBn: 'যখন বাক্যের কাজটির কর্তার চেয়ে কাজটি বেশি গুরুত্বপূর্ণ হয়, তখন প্যাসিভ ভয়েস বসে।',
            steps: [
                { bengali: 'সাঁথি একটি চিঠি লেখে।', english: 'Sathi writes a letter.', explanation: 'Active sentence।' },
                { bengali: 'সাঁথি দ্বারা একটি চিঠি লিখিত হয়।', english: 'A letter is written by Sathi.', explanation: 'Passive: Object "letter" সাবজেক্ট হয়েছে এবং is+V3 বসেছে।' }
            ],
            examples: createExamples(18),
            fallbackExercises: generate50Exercises(18, 'Active to Passive Voice')
        }
    ],
    9: [
        {
            id: 19,
            title: 'Relative Clause Sentence Expansion',
            titleBn: 'রিলেটিভ ক্লজ দিয়ে বাক্য বড় করার কৌশল',
            formula: 'Subject + [who/which + extra info] + Verb + Object',
            conceptBn: 'সাবজেক্টের ঠিক পাশেই who/which দিয়ে অতিরিক্ত তথ্য বসিয়ে বাক্যকে অনেক বড় ও আকর্ষণীয় করে তোলা যায়।',
            steps: [
                { bengali: 'সাঁথি আইইএলটিএস দিচ্ছে।', english: 'Sathi is taking IELTS.', explanation: 'ধাপ ১: সরল বাক্য।' },
                { bengali: 'সাঁথি, যে নিয়মিত পড়ে, সে আইইএলটিএস দিচ্ছে।', english: 'Sathi, who studies regularly, is taking IELTS.', explanation: 'ধাপ ২: সাবজেক্ট Sathi এর পর কমা দিয়ে "who studies regularly" রিলেティブ ক্লজ ঢুকিয়ে বাক্য বড় করা হয়েছে।' }
            ],
            examples: createExamples(19),
            fallbackExercises: generate50Exercises(19, 'Relative Clauses')
        }
    ],
    7: [
        {
            id: 20,
            title: 'Conditionals (Zero, 1st, 2nd Conditionals)',
            titleBn: 'শর্তসাপেক্ষ বাক্য গঠন (If Clauses)',
            formula: 'If + Present Simple, Future Simple (will + V1) / Would + V1',
            conceptBn: 'শর্তসাপেক্ষ কোনো কাজের সম্ভাবনা বা কল্পনা প্রকাশ করতে Conditional ব্যবহার করা হয়।',
            steps: [
                { bengali: 'যদি তুমি আসো, আমি যাব।', english: 'If you come, I will go.', explanation: 'First Conditional: Present + Future।' }
            ],
            examples: createExamples(20),
            fallbackExercises: generate50Exercises(20, 'Conditionals (Zero, 1st, 2nd Conditionals)')
        }
    ],
    8: [
        {
            id: 21,
            title: 'Collective Noun Agreement',
            titleBn: 'সমষ্টিবাচক কর্তার সাথে ক্রিয়ার মিল',
            formula: 'Collective Noun + Singular Verb + Extension',
            conceptBn: 'দল, শ্রেণি বা সমষ্টিবাচক কর্তাকে (যেমন: Committee, Team, Government) সাধারণত একবচন (singular) ধরা হয় এবং এর পর singular verb বসে।',
            steps: [
                { bengali: 'দলটি ভালো খেলছে।', english: 'The team is playing well.', explanation: 'Team সমষ্টিবাচক হলেও singular হিসেবে গণ্য হয়ে "is" বসেছে।' }
            ],
            examples: createExamples(21),
            fallbackExercises: generate50Exercises(21, 'Collective Noun Agreement')
        }
    ],
    11: [
        {
            id: 22,
            title: 'Connecting Contrast Ideas (However)',
            titleBn: 'বৈপরীত্যমূলক বাক্য সংযোগ (However)',
            formula: 'Sentence 1. However, Sentence 2',
            conceptBn: 'দুটি পরস্পরবিরোধী বাক্যকে যুক্ত করতে "However" ব্যবহৃত হয়। এটি বাক্যের শুরুতে বসে এর পর একটি কমা দিতে হয়।',
            steps: [
                { bengali: 'সাঁথি চেষ্টা করেছিল। তবুও, সে ব্যর্থ হয়েছিল।', english: 'Sathi tried. However, she failed.', explanation: 'However এর ব্যবহার বাক্যটিকে অনেক বেশি স্ট্যান্ডার্ড ও রিটেন ফ্রেন্ডলি করে তোলে।' }
            ],
            examples: createExamples(22),
            fallbackExercises: generate50Exercises(22, 'Connecting Contrast Ideas (However)')
        }
    ],
    12: [
        {
            id: 23,
            title: 'Dangling Modifier Correction',
            titleBn: 'ভুল মডিফায়ার সংশোধন করা',
            formula: 'While + Subject + was + Ving, Main Clause',
            conceptBn: 'বাক্যের শুরুতে "While + verb+ing" থাকলে মূল ক্লজের সাবজেক্টকেই সেই কাজটির কর্তা হতে হবে। তা না হলে বাক্য ভুল (Dangling Modifier) হয়ে যায়।',
            steps: [
                { bengali: 'সাঁথি যখন পরীক্ষা দিচ্ছিল তখন তার কলমটি ভেঙে গেল।', english: 'While Sathi was taking the exam, her pen broke.', explanation: 'Subject "Sathi" কে স্পষ্টভাবে বসিয়ে বাক্যটির অর্থ পরিষ্কার করা হয়েছে।' }
            ],
            examples: createExamples(23),
            fallbackExercises: generate50Exercises(23, 'Dangling Modifier Correction')
        }
    ]
};
