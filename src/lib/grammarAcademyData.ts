export interface QuizQuestion {
    question: string;
    options: string[];
    answer: number; // Index of correct option
    explanation: string; // Explanation in Bengali
}

export interface MicChallenge {
    prompt: string;
    promptBn: string;
    targetKeywords: string[];
    sampleAnswer: string;
    explanation: string;
}

export interface Chapter {
    id: number;
    title: string;
    titleBn: string;
    desc: string;
    lessonContent: string; // Markdown/HTML content
    ieltsTip: string; // Specific tip for IELTS
    quiz: QuizQuestion[];
    micChallenge: MicChallenge;
}

export interface Unit {
    id: number;
    title: string;
    titleBn: string;
    desc: string;
    chapters: Chapter[];
}

export const GRAMMAR_UNITS: Unit[] = [
    {
        id: 1,
        title: 'Unit 1: The Building Blocks',
        titleBn: 'মৌলিক বিষয়াবলী (আইইএলটিএস ভিত্তি)',
        desc: 'ইংরেজি ব্যাকরণের প্রাথমিক ও গুরুত্বপূর্ণ অংশ যা দিয়ে বাক্য তৈরি শুরু হয়।',
        chapters: [
            {
                id: 1,
                title: 'Parts of Speech',
                titleBn: 'শব্দের শ্রেণীবিভাগ ও ব্যবহার',
                desc: 'বাক্যে প্রতিটি শব্দের কাজ এবং কীভাবে তারা একে অপরের সাথে সম্পর্কিত।',
                ieltsTip: 'IELTS Writing এ একই शब्दকে বিভিন্ন form-এ ব্যবহার করা (যেমন, analyse থেকে analysis, analytical) lexical resource (ভোকাবুলারি)-এ বেশি মার্কস পেতে সাহায্য করে।',
                lessonContent: `### Parts of Speech (শব্দের শ্রেণীবিভাগ)
ইংরেজি ভাষায় প্রতিটি শব্দ বাক্যে তার কাজ অনুযায়ী ৮টি ভাগে বিভক্ত। এদের **Parts of Speech** বলা হয়।

#### ১. Noun (বিশেষ্য)
কোনো ব্যক্তি, বস্তু, স্থান, গুণ বা ধারণার নামকে Noun বলে।
*   **উদাহরণ:** Dhaka, Book, Happiness, Sathi.
*   *বাক্যে ব্যবহার:* **Dhaka** is the capital of Bangladesh.

#### ২. Pronoun (সর্বনাম)
Noun এর পরিবর্তে যে শব্দ বসে তাকে Pronoun বলে।
*   **উদাহরণ:** He, She, They, It, We.
*   *বাক্যে ব্যবহার:* Sathi is a good student. **She** studies regularly.

#### ৩. Verb (ক্রিয়া)
যা দ্বারা কোনো কিছু করা, হওয়া বা থাকা বোঝায় তাকে Verb বলে। এটি বাক্যের হৃৎপিণ্ড।
*   **উদাহরণ:** Run, Is, Write, Have.
*   *বাক্যে ব্যবহার:* Sathi **writes** an essay.

#### ৪. Adjective (বিশেষণ)
যা Noun বা Pronoun এর দোষ, গুণ, অবস্থা বা সংখ্যা প্রকাশ করে।
*   **উদাহরণ:** Good, Beautiful, Efficient, Three.
*   *বাক্যে ব্যবহার:* Sathi is an **intelligent** girl.

#### ৫. Adverb (ক্রিয়া বিশেষণ)
যা Verb, Adjective বা অন্য কোনো Adverb-কে বিশেষায়িত করে (কীভাবে, কখন, কোথায় কাজটি হচ্ছে তা বোঝায়)।
*   **উদাহরণ:** Quickly, Very, Yesterday, Well.
*   *বাক্যে ব্যবহার:* Sathi runs **quickly**.

#### ৬. Preposition (পدان্বয়ী অব্যয়)
যা Noun বা Pronoun এর পূর্বে বসে বাক্যের অন্য শব্দের সাথে সম্পর্ক তৈরি করে।
*   **উদাহরণ:** In, On, At, Under, With.
*   *বাক্যে ব্যবহার:* The book is **on** the table.

#### ৭. Conjunction (সংযোজক অব্যয়)
যা একাধিক শব্দ বা বাক্যকে যুক্ত করে।
*   **উদাহরণ:** And, But, Because, Although.
*   *বাক্যে ব্যবহার:* Sathi reads **and** writes.

#### ৮. Interjection (আবেগসূচক অব্যয়)
যা মনের আকস্মিক আবেগ বা অনুভূতি প্রকাশ করে।
*   **উদাহরণ:** Alas!, Hurrah!, Oh!.
*   *বাক্যে ব্যবহার:* **Hurrah!** We won the game.`,
                quiz: [
                    {
                        question: 'Sathi completed the IELTS mock test successfully. Here "successfully" is a/an:',
                        options: ['Adjective', 'Noun', 'Adverb', 'Verb'],
                        answer: 2,
                        explanation: '"successfully" শব্দটি "completed" (verb) টিকে বিশেষায়িত করছে (কীভাবে সম্পন্ন করেছে)। তাই এটি একটি Adverb।'
                    },
                    {
                        question: 'Identify the adjective in: "The academic writing task is challenging but interesting."',
                        options: ['academic, challenging, interesting', 'writing, challenging', 'academic, but', 'task, interesting'],
                        answer: 0,
                        explanation: '"academic", "challenging" এবং "interesting" শব্দগুলো যথাক্রমে writing task এবং task এর গুণাবলী বা অবস্থা প্রকাশ করছে। তাই এগুলো Adjectives।'
                    },
                    {
                        question: 'Choose the correct preposition: "I was surprised ___ her excellent band score."',
                        options: ['at', 'in', 'on', 'with'],
                        answer: 0,
                        explanation: 'Surprised এর সাথে সাধারণত "at" বসে (Surprised at something)।'
                    },
                    {
                        question: 'In the sentence "Although she studied hard, Sathi was nervous", "Although" is a:',
                        options: ['Preposition', 'Pronoun', 'Conjunction', 'Interjection'],
                        answer: 2,
                        explanation: '"Although" দুটি ক্লজ বা বাক্যকে যুক্ত করছে, তাই এটি একটি Subordinating Conjunction।'
                    },
                    {
                        question: 'Which word in "The Sathi AI provides incredibly fast feedback" is an Adverb?',
                        options: ['Sathi', 'incredibly', 'fast', 'feedback'],
                        answer: 1,
                        explanation: '"incredibly" শব্দটি "fast" (adjective) কে মডিফাই করছে। তাই এটি একটি Adverb।'
                    }
                ],
                micChallenge: {
                    prompt: "Read this sentence focusing on the adverb: 'Sathi completed the IELTS mock test successfully.'",
                    promptBn: "ক্রিয়াবিশেষণ (successfully) এর ওপর জোর দিয়ে এই বাক্যটি উচ্চারণ করো।",
                    targetKeywords: ["successfully", "completed", "mock"],
                    sampleAnswer: "Sathi completed the IELTS mock test successfully.",
                    explanation: "আপনি successfully শব্দটি সঠিকভাবে উচ্চারণ করেছেন, যা বাক্যটিতে Adverb হিসেবে কাজ করছে।"
                }
            },
            {
                id: 2,
                title: 'Subject, Verb & Object/Complement',
                titleBn: 'বাক্যের প্রধান উপাদানসমূহ',
                desc: 'একটি সঠিক ইংরেজি বাক্য গঠনের মূল কাঠামো জানা।',
                ieltsTip: 'IELTS Writing এ সাবজেক্ট এবং অবজেক্ট চিহ্নিত করতে পারলে বড় বড় Complex বাক্য তৈরি করা অনেক সহজ হয়ে যায়।',
                lessonContent: `### Subject, Verb, Object & Complement (বাক্যের প্রধান অংশ)
একটি পূর্ণাঙ্গ বাক্যের মূল অংশগুলো নিচে আলোচনা করা হলো:

#### ১. Subject (কর্তা)
বাক্যে যে কাজটি করে বা যার সম্পর্কে কিছু বলা হয়, তাকে Subject বলে।
*   *উদাহরণ:* **Sathi** is reading a book. (এখানে Sathi হলো Subject)

#### ২. Verb (ক্রিয়া)
বাক্যের প্রধান কর্ম বা অবস্থা নির্দেশক অংশ।
*   *উদাহরণ:* Sathi **is reading** a book. (এখানে is reading হলো Verb)

#### ৩. Object (কর্ম)
কর্তা (Subject) যা সম্পন্ন করে বা যার ওপর কাজ করে, তাকে Object বলে।
*   *উদাহরণ:* Sathi is reading **a book**. (এখানে a book হলো Object)

#### ৪. Complement (পরিপূরক)
যখন কোনো অংশ Subject বা Object এর পরিচয় সম্পূর্ণ করে কিন্তু সেটি সরাসরি কর্ম বা Object নয়, তাকে Complement বলে। সাধারণত linking verb (am, is, are, was, were, become, feel) এর পর বসে।
*   *উদাহরণ:* Sathi is **an IELTS aspirant**. (এখানে "an IELTS aspirant" Sathi-রই আরেকটি পরিচয় বা পরিপূরক)।`,
                quiz: [
                    {
                        question: 'Identify the Subject in: "Attaining a high band score requires consistent practice."',
                        options: ['consistent practice', 'Attaining a high band score', 'requires', 'band score'],
                        answer: 1,
                        explanation: 'এই বাক্যে "Attaining a high band score" (একটি উচ্চ ব্যান্ড স্কোর অর্জন করা) হলো পুরো বাক্যের কর্তা (Subject)।'
                    },
                    {
                        question: 'In the sentence "The IELTS teacher became furious", the word "furious" is a:',
                        options: ['Object', 'Subject', 'Subject Complement', 'Adverb'],
                        answer: 2,
                        explanation: 'এখানে "became" একটি linking verb এবং "furious" শব্দটি Subject (The IELTS teacher) এর অবস্থা প্রকাশ করছে। তাই এটি Subject Complement।'
                    },
                    {
                        question: 'Identify the Object in: "The candidate practiced speaking for three hours."',
                        options: ['The candidate', 'practiced', 'speaking', 'three hours'],
                        answer: 2,
                        explanation: 'এখানে "speaking" হলো object, কারণ candidate যা অনুশীলন করছিল তা হলো speaking।'
                    },
                    {
                        question: 'In the sentence "Learning grammar is fun", "fun" functions as:',
                        options: ['Subject', 'Verb', 'Subject Complement', 'Object'],
                        answer: 2,
                        explanation: 'এখানে "is" একটি linking verb এবং "fun" শব্দটি learning grammar এর পরিচয় বা গুণ পূর্ণ করছে, তাই এটি Complement।'
                    },
                    {
                        question: 'Find the Verb in: "Consistent practice has greatly improved Sathi\'s English skills."',
                        options: ['Consistent', 'greatly', 'has improved', 'English skills'],
                        answer: 2,
                        explanation: 'এখানে "has improved" হলো verb phrase যা বাক্যের কাজ সম্পন্ন করা বোঝাচ্ছে।'
                    }
                ],
                micChallenge: {
                    prompt: "Say the subject in this sentence aloud: 'Attaining a high band score requires consistent practice.'",
                    promptBn: "এই বাক্যের সাবজেক্ট অংশটি ('Attaining a high band score') মুখে উচ্চারণ করো।",
                    targetKeywords: ["attaining", "high", "band", "score"],
                    sampleAnswer: "Attaining a high band score",
                    explanation: "আপনি বাক্যের সাবজেক্ট অংশটি সঠিকভাবে সনাক্ত ও উচ্চারণ করেছেন।"
                }
            }
        ]
    },
    {
        id: 2,
        title: 'Unit 2: Tenses & Time',
        titleBn: 'টেন্স ও কাল (Speaking ও Writing এর ভিত্তি)',
        desc: 'টেন্সের সঠিক ব্যবহার ছাড়া IELTS Speaking বা Writing এ ৬-এর বেশি ব্যান্ড পাওয়া অসম্ভব।',
        chapters: [
            {
                id: 3,
                title: 'Present Tenses',
                titleBn: 'বর্তমান কাল ও এর ৪টি রূপ',
                desc: 'বর্তমান সময়ের কাজ ও বাস্তব সত্য প্রকাশে Present Tenses এর ব্যবহার।',
                ieltsTip: 'IELTS Speaking Part 1 এ নিজের শখ, পড়াশোনা ও কাজ নিয়ে কথা বলার সময় Present Simple ও Present Perfect এর নিখুঁত ব্যবহার জরুরি।',
                lessonContent: `### Present Tenses (বর্তমান কাল)
Present Tense প্রধানত ৪ প্রকার:

#### ১. Present Simple (সাধারণ বর্তমান)
চিরন্তন সত্য, অভ্যাসগত কাজ বা সাধারণ সত্য প্রকাশে ব্যবহৃত হয়।
*   **গঠন:** Subject + Base form of verb (V1) [Subject ৩য় পুরুষ ও একবচন হলে verb-এর শেষে s/es বসে] + Object.
*   *উদাহরণ:* Sathi **studies** English daily.

#### ২. Present Continuous (ঘটমান বর্তমান)
বর্তমানে কোনো কাজ চলছে বোঝাতে ব্যবহৃত হয়।
*   **গঠন:** Subject + am/is/are + (Verb + ing) + Object.
*   *উদাহরণ:* Sathi **is preparing** for IELTS.

#### ৩. Present Perfect (পুরাঘটিত বর্তমান)
কোনো কাজ এইমাত্র শেষ হয়েছে কিন্তু তার ফল এখনও বিদ্যমান আছে।
*   **গঠন:** Subject + have/has + Past Participle of verb (V3) + Object.
*   *উদাহরণ:* Sathi **has completed** Cambridge Book 18.

#### ৪. Present Perfect Continuous (পুরাঘটিত ঘটমান বর্তমান)
অতীতে শুরু হওয়া কোনো কাজ এখনো চলছে বোঝাতে ব্যবহৃত হয়।
*   **গঠন:** Subject + have/has + been + (Verb + ing) + since/for + time.
*   *উদাহরণ:* Sathi **has been practicing** speaking **for** two hours.`,
                quiz: [
                    {
                        question: 'I ___ for the IELTS exam since last January.',
                        options: ['am preparing', 'have prepared', 'have been preparing', 'prepare'],
                        answer: 2,
                        explanation: 'যেহেতু কাজটি অতীতে শুরু হয়ে এখনো চলছে (since last January আছে), তাই এটি Present Perfect Continuous হবে।'
                    },
                    {
                        question: 'Sathi ___ her essay already.',
                        options: ['has submitted', 'is submitting', 'submitted', 'submits'],
                        answer: 0,
                        explanation: '"already" শব্দটি থাকলে সাধারণত Present Perfect Tense (has/have + V3) ব্যবহৃত হয়।'
                    },
                    {
                        question: 'Water ___ at 100 degrees Celsius.',
                        options: ['is boiling', 'boils', 'boil', 'has boiled'],
                        answer: 1,
                        explanation: 'যেহেতু এটি একটি বৈজ্ঞানিক সত্য, তাই চিরন্তন সত্য হিসেবে Present Simple (boils) বসবে।'
                    },
                    {
                        question: 'Sathi and her friend ___ currently practicing speaking.',
                        options: ['is', 'are', 'has been', 'was'],
                        answer: 1,
                        explanation: '"currently" বর্তমানে চলমান কাজ নির্দেশ করে এবং Subject বহুবচন হওয়ায় "are" বসবে।'
                    },
                    {
                        question: 'She ___ the newspaper every morning to improve her English reading.',
                        options: ['reads', 'read', 'is reading', 'has read'],
                        answer: 0,
                        explanation: 'প্রতি সকালের অভ্যাসগত কাজ বোঝাতে Present Simple (reads) বসবে।'
                    }
                ],
                micChallenge: {
                    prompt: "Say a Present Perfect sentence: 'Sathi has completed Cambridge Book 18.'",
                    promptBn: "এই Present Perfect বাক্যটি উচ্চারণ করো।",
                    targetKeywords: ["has", "completed", "book"],
                    sampleAnswer: "Sathi has completed Cambridge Book 18.",
                    explanation: "আপনি Present Perfect টেন্সের সঠিক গঠন (has + V3) উচ্চারণ করেছেন।"
                }
            },
            {
                id: 4,
                title: 'Past Tenses',
                titleBn: 'অতীত কাল ও এর ব্যবহার',
                desc: 'অতীতের ঘটনা, অভিজ্ঞতা ও ইতিহাস বর্ণনায় Past Tenses এর ভূমিকা।',
                ieltsTip: 'IELTS Speaking Part 2 (Cue Card) এ প্রায় ৮০% প্রশ্ন থাকে অতীতের কোনো অভিজ্ঞতা বর্ণনা নিয়ে। তাই Past Simple ও Past Continuous টেন্স জানা খুবই গুরুত্বপূর্ণ।',
                lessonContent: `### Past Tenses (অতীত কাল)
Past Tense-এর প্রকারভেদ ও গঠন:

#### ১. Past Simple (সাধারণ অতীত)
অতীতে কোনো কাজ শেষ হয়েছিল বোঝাতে।
*   **গঠন:** Subject + Past form of verb (V2) + Object.
*   *উদাহরণ:* Sathi **got** band 7.5 last year.

#### ২. Past Continuous (ঘটমান অতীত)
অতীতে কোনো কাজ চলছিল বোঝাতে।
*   **গঠন:** Subject + was/were + (Verb + ing) + Object.
*   *উদাহরণ:* When Sathi arrived, Sathi's teacher **was teaching** grammar.

#### ৩. Past Perfect (পুরাঘটিত অতীত)
অতীতে দুটি কাজের মধ্যে যে কাজটি আগে হয়েছিল সেটির জন্য Past Perfect বসে এবং পরের কাজটির জন্য Past Simple বসে।
*   **গঠন:** Subject + had + Past Participle of verb (V3) + Object.
*   *উদাহরণ:* The class **had started** before Sathi entered the room.

#### ৪. Past Perfect Continuous (পুরাঘটিত ঘটমান অতীত)
অতীতে দীর্ঘসময় ধরে কোনো কাজ চলছিল বোঝাতে।
*   **গঠন:** Subject + had + been + (Verb + ing) + Object.
*   *উদাহরণ:* Sathi **had been writing** for an hour before the timer went off.`,
                quiz: [
                    {
                        question: 'By the time the exam finished, Sathi ___ all forty questions.',
                        options: ['answered', 'had answered', 'was answering', 'has answered'],
                        answer: 1,
                        explanation: 'পরীক্ষা শেষ হওয়ার পূর্বে Sathi সব প্রশ্নের উত্তর দিয়েছিল। অতীতের দুটি কাজের মধ্যে আগের কাজটির জন্য Past Perfect (had answered) ব্যবহৃত হয়।'
                    },
                    {
                        question: 'While Sathi ___ the reading passage, she found a difficult vocabulary word.',
                        options: ['read', 'was reading', 'had read', 'has been reading'],
                        answer: 1,
                        explanation: 'অতীতকালে একটি কাজ চলাকালীন আরেকটি ঘটনা ঘটলে চলমান কাজটির জন্য Past Continuous (was reading) বসে।'
                    },
                    {
                        question: 'Sathi ___ to school yesterday because of the heavy rain.',
                        options: ['did not go', 'had not gone', 'was not going', 'does not go'],
                        answer: 0,
                        explanation: 'গতকালকের নির্দিষ্ট কাজ শেষ হয়েছিল বোঝাতে Past Simple (did not go) বসে।'
                    },
                    {
                        question: 'They ___ in the library when the alarm rang.',
                        options: ['were studying', 'studied', 'had studied', 'are studying'],
                        answer: 0,
                        explanation: 'অতীতকালে একটি ঘটনা ঘটার সময় অন্য কাজ চলছিল বোঝাতে Past Continuous (were studying) বসবে।'
                    },
                    {
                        question: 'Sathi ___ English for five years before she moved to London.',
                        options: ['learned', 'has learned', 'had been learning', 'was learning'],
                        answer: 2,
                        explanation: 'অতীতের কোনো কাজের পূর্বে দীর্ঘ সময় ধরে চলা কাজ বোঝাতে Past Perfect Continuous (had been learning) বসে।'
                    }
                ],
                micChallenge: {
                    prompt: "Say a Past Continuous sentence: 'While Sathi was reading, she found a difficult word.'",
                    promptBn: "এই Past Continuous বাক্যটি উচ্চারণ করো।",
                    targetKeywords: ["was", "reading", "found"],
                    sampleAnswer: "While Sathi was reading, she found a difficult word.",
                    explanation: "আপনি Past Continuous টেন্সের গঠন (was + Ving) সঠিকভাবে উচ্চারণ করেছেন।"
                }
            }
        ]
    },
    {
        id: 3,
        title: 'Unit 3: Sentence Types & Structures',
        titleBn: 'বাক্যের গঠন ও প্রকারভেদ (Band 7+ স্কোরের চাবিকাঠি)',
        desc: 'আইইএলটিএস রাইটিং ও স্পিকিং এ বিভিন্ন ধরণের বাক্যের নিখুঁত মিশ্রণ অত্যন্ত জরুরি।',
        chapters: [
            {
                id: 5,
                title: 'Simple, Compound & Complex',
                titleBn: 'সরল, যৌগিক ও জটিল বাক্য',
                desc: 'লিংকিং ওয়ার্ডস ও ক্লজ ব্যবহার করে বৈচিত্র্যময় বাক্য তৈরি করা।',
                ieltsTip: 'IELTS Writing-এ শুধু simple বাক্য ব্যবহার করলে স্কোর ৫.৫ এর নিচে থাকবে। ৭+ স্কোর পেতে অবশ্যই Compound ও Complex বাক্য সাবলীলভাবে ব্যবহার করতে হবে।',
                lessonContent: `### Simple, Compound & Complex Sentences (বাক্যের প্রকারভেদ)

#### ১. Simple Sentence (সরল বাক্য)
যে বাক্যে একটি মাত্র Subject এবং একটি মাত্র finite verb (সমাপিকা ক্রিয়া) থাকে।
*   *উদাহরণ:* Sathi is preparing for the IELTS exam.

#### ২. Compound Sentence (যৌগিক বাক্য)
 his দুই বা ততোধিক স্বাধীন বাক্য (Independent Clauses) যখন কো-অর্ডিনেটিং কনজাংশন (FANBOYS: For, And, Nor, But, Or, Yet, So) দিয়ে যুক্ত হয়।
*   *উদাহরণ:* Sathi practiced reading, **and** she improved her speed.

#### ৩. Complex Sentence (জটিল বাক্য)
একটি প্রধান স্বাধীন বাক্য (Independent Clause) এবং অন্তত একটি নির্ভরশীল বাক্য (Dependent Clause) যখন সাব-অর্ডিনেটিং কনজাংশন (Although, Because, Since, If, When, While) দ্বারা যুক্ত হয়।
*   *উদাহরণ:* **Although** the listening test was fast, Sathi managed to answer all questions.
*   *আরেকটি উদাহরণ:* Sathi got a high score **because** she studied consistently.`,
                quiz: [
                    {
                        question: 'Which of the following is a COMPLEX sentence?',
                        options: [
                            'Sathi studied hard, but she was nervous.',
                            'Although she studied hard, Sathi was nervous.',
                            'Sathi studied hard and passed the exam.',
                            'Sathi studied hard.'
                        ],
                        answer: 1,
                        explanation: '"Although" একটি sub-ordinating conjunction, যা দ্বারা শুরু হওয়া ক্লজটি নির্ভরশীল ক্লজ। তাই এটি একটি Complex sentence।'
                    },
                    {
                        question: 'Complete the compound sentence: "The writing task was long, ___ Sathi finished it on time."',
                        options: ['so', 'yet', 'because', 'although'],
                        answer: 1,
                        explanation: 'যৌগিক বাক্যে বৈপরীত্য প্রকাশে "yet" (তবুও) বা "but" ব্যবহৃত হয়।'
                    },
                    {
                        question: 'Identify the sentence type: "Sathi practiced speaking daily, so her fluency improved."',
                        options: ['Simple', 'Compound', 'Complex', 'Mixed'],
                        answer: 1,
                        explanation: '"so" একটি coordinating conjunction যা দুটি স্বাধীন ক্লজকে যুক্ত করছে। তাই এটি একটি Compound Sentence।'
                    },
                    {
                        question: 'Which of the following sentences is a Simple sentence?',
                        options: [
                            'Because she practiced hard, she got a band 8.',
                            'Consistent practice led to her high score.',
                            'She practiced hard, and she got a band 8.',
                            'If she practices, she will get a band 8.'
                        ],
                        answer: 1,
                        explanation: 'এই বাক্যে একটি মাত্র subject (Consistent practice) এবং একটি finite verb (led) আছে। তাই এটি Simple Sentence।'
                    },
                    {
                        question: 'Complete the complex sentence: "___ the speaking test was difficult, Sathi remained confident."',
                        options: ['However', 'In addition', 'Although', 'Despite of'],
                        answer: 2,
                        explanation: 'Complex sentence-এ বৈপরীত্যমূলক নির্ভরশীল ক্লজ তৈরিতে "Although" ব্যবহৃত হয়।'
                    }
                ],
                micChallenge: {
                    prompt: "Say a complex sentence using Although: 'Although she was tired, she studied hard.'",
                    promptBn: "Although যুক্ত এই Complex বাক্যটি উচ্চারণ করো।",
                    targetKeywords: ["although", "tired", "studied"],
                    sampleAnswer: "Although she was tired, she studied hard.",
                    explanation: "আপনি Although যুক্ত Complex বাক্যটি সঠিকভাবে উচ্চারণ করেছেন।"
                }
            },
            {
                id: 6,
                title: 'Active vs. Passive Voice',
                titleBn: 'কর্তৃবাচ্য ও কর্মবাচ্য (Academic Writing এর ভিত্তি)',
                desc: 'কখন কাজ কে করেছে তার চেয়ে কাজটি বেশি গুরুত্বপূর্ণ হয়ে ওঠে।',
                ieltsTip: 'IELTS Writing Task 1 Academic (বিশেষ করে Process Diagram) এ প্যাসিভ ভয়েস ছাড়া লেখা প্রায় অসম্ভব।',
                lessonContent: `### Active vs. Passive Voice (বাচ্য পরিবর্তন)

#### Active Voice (কর্তৃবাচ্য)
যখন কর্তা (Subject) নিজেই কাজটি সম্পন্ন করে।
*   *উদাহরণ:* Sathi completed the essay.

#### Passive Voice (कर्मবাচ্য)
যখন কর্তার চেয়ে কাজটি বা কর্মটি বেশি গুরুত্ব পায়।
*   **গঠন:** Object becomes Subject + be-verb (টেন্স অনুযায়ী) + Past Participle of verb (V3) + [by + Subject].
*   *উদাহরণ:* The essay **was completed** by Sathi.

#### IELTS-এ Passive Voice এর ব্যবহার:
১. যখন কাজটি কে করেছে তা অপ্রয়োজনীয় বা অজানা।
   * *যেমন:* English **is spoken** worldwide.
২. Academic Writing এ নৈর্ব্যক্তিক বা ফর্মাল ভাব প্রকাশ করতে।
   * *যেমন:* It **is believed** that technology improves education. (মানুষ বিশ্বাস করে না বলে বলা ভালো "এটি বিশ্বাস করা হয়...")`,
                quiz: [
                    {
                        question: 'Convert to Passive: "The government should implement strict rules."',
                        options: [
                            'Strict rules implemented by the government.',
                            'Strict rules should be implemented by the government.',
                            'Strict rules should implement by the government.',
                            'Strict rules is implemented by the government.'
                        ],
                        answer: 1,
                        explanation: 'Modals (should, can, must) যুক্ত বাক্যের passive এর নিয়ম: modal + be + V3। তাই সঠিক উত্তর "should be implemented"।'
                    },
                    {
                        question: 'Choose the correct form: "Many new technologies ___ in recent years to reduce pollution."',
                        options: ['have developed', 'have been developed', 'are developing', 'developed'],
                        answer: 1,
                        explanation: 'যেহেতু প্রযুক্তি নিজে নিজে ডেভেলপ হতে পারে না, এটি অন্য কারো দ্বারা ডেভেলপড হয়েছে (passive)। আর "in recent years" এর জন্য Present Perfect Passive (have been developed) বসবে।'
                    },
                    {
                        question: 'Identify the passive sentence:',
                        options: [
                            'Sathi gave a presentation yesterday.',
                            'A presentation was given by Sathi yesterday.',
                            'Sathi was giving a presentation yesterday.',
                            'Sathi has given a presentation yesterday.'
                        ],
                        answer: 1,
                        explanation: '"was given" (be-verb + V3) যুক্ত বাক্যটি passive voice নির্দেশ করে।'
                    },
                    {
                        question: 'In academic writing, we prefer "It is believed that..." instead of "People believe that..." because it is:',
                        options: ['Simpler', 'More informal', 'More formal and objective', 'Easier to read'],
                        answer: 2,
                        explanation: 'নৈর্ব্যক্তিক ও ফর্মাল (objective) ভাব ফুটিয়ে তুলতে Academic Writing এ প্যাসিভ কাঠামো ব্যবহার করা হয়।'
                    },
                    {
                        question: 'Change to Passive: "Sathi is writing the report."',
                        options: [
                            'The report was written by Sathi.',
                            'The report is being written by Sathi.',
                            'The report is written by Sathi.',
                            'The report has been written by Sathi.'
                        ],
                        answer: 1,
                        explanation: 'Present Continuous passive এর নিয়ম: is/are + being + V3। তাই সঠিক উত্তর "is being written"।'
                    }
                ],
                micChallenge: {
                    prompt: "Convert 'Sathi completed the essay' to passive voice and say it.",
                    promptBn: "এই বাক্যটির প্যাসিভ রূপ মুখে বলো: 'The essay was completed by Sathi.'",
                    targetKeywords: ["essay", "was", "completed"],
                    sampleAnswer: "The essay was completed by Sathi.",
                    explanation: "আপনি প্যাসিভ ভয়েসের সঠিক রূপ (was + V3) ব্যবহার করেছেন।"
                }
            },
            {
                id: 7,
                title: 'Conditional Sentences',
                titleBn: 'শর্তযুক্ত বাক্য (If Clauses)',
                desc: 'কাল্পনিক বা শর্তসাপেক্ষ ঘটনা প্রকাশের ৪টি গুরুত্বপূর্ণ নিয়ম।',
                ieltsTip: 'IELTS Speaking Part 3 এবং Writing Task 2 এ কোনো বিষয়ের সম্ভাব্য ফলাফল বা কাল্পনিক সমাধান দিতে Conditionals ব্যবহার করলে গ্রামার স্কোরে সরাসরি ৭+ পাওয়া যায়।',
                lessonContent: `### Conditional Sentences (শর্তযুক্ত বাক্য)
Conditionals সাধারণত ৪ প্রকার:

#### ১. Zero Conditional (সাধারণ সত্য বা বৈজ্ঞানিক সত্য)
*   **গঠন:** If + Present Simple, Present Simple.
*   *উদাহরণ:* If you **heat** ice, it **melts**.

#### ২. First Conditional (ভবিষ্যতের বাস্তব সম্ভাবনা)
*   **গঠন:** If + Present Simple, Will/Can + Base Verb (V1).
*   *উদাহরণ:* If Sathi **practices** daily, she **will score** band 8.

#### ৩. Second Conditional (বর্তমান বা ভবিষ্যতের কাল্পনিক/অবাস্তব ঘটনা)
*   **গঠন:** If + Past Simple, Would/Could + Base Verb (V1).
*   *উদাহরণ:* If Sathi **had** enough money, she **would study** at Oxford. (কিন্তু বর্তমানে তার Oxford-এ পড়ার মতো টাকা নেই - অবাস্তব)

#### ৪. Third Conditional (অতীতের কাল্পনিক বা অনুশোচনামূলক ঘটনা যা আর পরিবর্তন সম্ভব নয়)
*   **গঠন:** If + Past Perfect, Would have + Past Participle (V3).
*   *উদাহরণ:* If Sathi **had studied** harder, she **would have passed** the test. (কিন্তু অতীতে সে পড়েনি এবং পাসও করেনি)`,
                quiz: [
                    {
                        question: 'If the government ___ the taxes, the economy would improve.',
                        options: ['reduce', 'reduces', 'reduced', 'had reduced'],
                        answer: 2,
                        explanation: 'যেহেতু মূল ক্লজে "would + V1" (would improve) আছে, এটি Second Conditional। তাই if ক্লজে Past Simple (reduced) বসবে।'
                    },
                    {
                        question: 'If you had prepared well, you ___ the IELTS exam last week.',
                        options: ['will pass', 'would pass', 'would have passed', 'passed'],
                        answer: 2,
                        explanation: 'যেহেতু if ক্লজে "had prepared" (Past Perfect) আছে, এটি Third Conditional। তাই মূল ক্লজে "would have + V3" (would have passed) বসবে।'
                    },
                    {
                        question: 'If you mix yellow and blue, you ___ green.',
                        options: ['get', 'will get', 'would get', 'got'],
                        answer: 0,
                        explanation: 'যেহেতু এটি একটি সাধারণ সত্য (Zero Conditional), তাই উভয় ক্লজেই Present Simple (get) ব্যবহৃত হবে।'
                    },
                    {
                        question: 'If Sathi passes the mock exam, she ___ for the real test.',
                        options: ['register', 'will register', 'would register', 'would have registered'],
                        answer: 1,
                        explanation: 'এটি First Conditional (বাস্তব সম্ভাবনা), তাই মূল ক্লজে "will + V1" (will register) বসবে।'
                    },
                    {
                        question: 'What is the correct form: "If Sathi had seen the grammar rule, she ___ that mistake."',
                        options: ['will not make', 'would not make', 'would not have made', 'did not make'],
                        answer: 2,
                        explanation: 'যেহেতু "had seen" (Past Perfect) আছে, এটি Third Conditional। তাই মূল ক্লজে "would not have + V3" (would not have made) বসবে।'
                    }
                ],
                micChallenge: {
                    prompt: "Say this first conditional sentence: 'If Sathi practices daily, she will score band 8.'",
                    promptBn: "If যুক্ত এই First Conditional বাক্যটি উচ্চারণ করো।",
                    targetKeywords: ["practices", "will", "score"],
                    sampleAnswer: "If Sathi practices daily, she will score band 8.",
                    explanation: "First Conditional (if + present, will + V1) বাক্যটি সঠিক হয়েছে।"
                }
            }
        ]
    },
    {
        id: 4,
        title: 'Unit 4: Advanced IELTS Essentials',
        titleBn: 'আইইএলটিএস-এর জন্য বিশেষ ব্যাকরণ',
        desc: 'ছোটখাটো ভুল এড়ানো এবং বাক্যে বৈচিত্র্য এনে ব্যান্ড স্কোর সর্বোচ্চ করা।',
        chapters: [
            {
                id: 8,
                title: 'Subject-Verb Agreement',
                titleBn: 'কর্তা ও ক্রিয়ার নিখুঁত সামঞ্জস্য',
                desc: 'একবচন ও বহুবচন কর্তার সাথে সঠিক ক্রিয়া নির্বাচন করা।',
                ieltsTip: 'রাইটিং-এ সবচেয়ে বেশি গ্রামার নম্বর কাটা যায় Subject-Verb Agreement এর ভুলের জন্য। বিশেষ করে collective nouns ও complex subjects এর ক্ষেত্রে সতর্ক থাকুন।',
                lessonContent: `### Subject-Verb Agreement (কর্তা ও ক্রিয়ার মিল)
বাক্যের Subject এর সংখ্যা (Number) এবং পুরুষ (Person) অনুযায়ী Verb ব্যবহৃত হওয়াকে Subject-Verb Agreement বলে।

#### প্রধান নিয়মাবলী:
১. Subject Singular হলে Verb Singular হবে, Subject Plural হলে Verb Plural হবে।
   * *উদাহরণ:* Sathi **studies** English. (Sathi = 3rd person singular, তাই studies)
   * *উদাহরণ:* They **study** English. (They = plural, তাই study)

২. দুটি singular subject যখন 'and' দিয়ে যুক্ত হয়, তখন verb plural হয়।
   * *উদাহরণ:* Sathi and her friend **are** attending the class.

৩. কিন্তু দুটি বিষয় মিলে যদি একটি ধারণা প্রকাশ করে, তবে verb singular হয়।
   * *উদাহরণ:* Bread and butter **is** my favourite breakfast.

৪. 'Each', 'Every', 'Everyone', 'Someone' থাকলে verb সর্বদা singular হয়।
   * *উদাহরণ:* Every student **has** a dictionary.

৫. 'Neither... nor' বা 'Either... or' থাকলে verb শেষ subject অনুযায়ী নির্ধারিত হয়।
   * *উদাহরণ:* Neither Sathi nor her friends **are** present. (বন্ধুরা overwrites the verb, plural, তাই are)`,
                quiz: [
                    {
                        question: 'The list of candidates ___ been updated on the notice board.',
                        options: ['have', 'has', 'are', 'is'],
                        answer: 1,
                        explanation: 'এখানে আসল Subject হলো "The list" (singular), "candidates" নয়। তাই singular verb "has" বসবে।'
                    },
                    {
                        question: 'Either Sathi or her classmates ___ going to present the project today.',
                        options: ['is', 'are', 'was', 'am'],
                        answer: 1,
                        explanation: '"Either... or" যুক্ত বাক্যে verb এর নিকটবর্তী subject (her classmates - plural) অনুযায়ী verb বসে। তাই সঠিক উত্তর "are"।'
                    },
                    {
                        question: 'Each of the participants ___ given a practice book yesterday.',
                        options: ['was', 'were', 'is', 'has'],
                        answer: 0,
                        explanation: '"Each of..." থাকলে verb সর্বদা singular হয়। যেহেতু "yesterday" উল্লেখ আছে, তাই Past Singular "was" বসবে।'
                    },
                    {
                        question: 'The performance of these new speaking students ___ outstanding.',
                        options: ['are', 'is', 'were', 'have been'],
                        answer: 1,
                        explanation: 'এখানে মূল Subject হলো "The performance" (singular), "students" নয়। তাই singular verb "is" বসবে।'
                    },
                    {
                        question: 'Neither Sathi nor her tutor ___ present at the session.',
                        options: ['were', 'are', 'was', 'have been'],
                        answer: 2,
                        explanation: 'নিকটবর্তী subject (her tutor - singular) হওয়ায় singular verb "was" বসবে।'
                    }
                ],
                micChallenge: {
                    prompt: "Say this sentence ensuring correct agreement: 'Every student has a dictionary.'",
                    promptBn: "Subject-Verb Agreement ঠিক রেখে এই বাক্যটি উচ্চারণ করো।",
                    targetKeywords: ["every", "student", "has"],
                    sampleAnswer: "Every student has a dictionary.",
                    explanation: "Every student (singular) এর সাথে has (singular) সঠিকভাবে উচ্চারণ করেছেন।"
                }
            },
            {
                id: 9,
                title: 'Relative Clauses',
                titleBn: 'রিলেティブ ক্লজ (Who, Which, That এর ব্যবহার)',
                desc: 'দুটি বাক্যকে যুক্ত করে এক লাইনে বিস্তারিত তথ্য প্রদান করার কৌশল।',
                ieltsTip: 'রিলেティブ ক্লজের ব্যবহার আপনার বাক্যকে তাৎক্ষণিকভাবে Complex বাক্যে রূপান্তর করে, যা IELTS-এ ভালো ব্যান্ডের অন্যতম মানদণ্ড।',
                lessonContent: `### Relative Clauses (সম্পর্কযুক্ত বাক্য)
রিলেティブ প্রোনাউন (Who, Whom, Which, That, Whose) ব্যবহার করে যখন কোনো Noun সম্পর্কে বাড়তি তথ্য দেওয়া হয়, তাকে Relative Clause বলে।

#### ১. Who (ব্যক্তির ক্ষেত্রে)
*   *উদাহরণ:* Sathi is a student **who** scored band 8 in IELTS.

#### ২. Which / That (বস্তু বা ধারণার ক্ষেত্রে)
*   *উদাহরণ:* I bought a book **which** is very helpful for reading practice.

#### ৩. Where (স্থানের ক্ষেত্রে)
*   *উদাহরণ:* This is the coaching centre **where** I studied English.

#### Defining vs. Non-Defining Clauses:
- **Defining Clause (প্রয়োজনীয় তথ্য):** কোনো কমা ছাড়া বসে।
  * *যেমন:* People **who study hard** usually succeed.
- **Non-Defining Clause (অতিরিক্ত তথ্য):** কমা দিয়ে আলাদা করা হয়।
  * *যেমন:* Sathi, **who studies hard**, succeeded in the exam.`,
                quiz: [
                    {
                        question: 'The book ___ Sathi recommended is now out of print.',
                        options: ['who', 'which', 'where', 'whom'],
                        answer: 1,
                        explanation: 'যেহেতু "book" একটি বস্তু, তাই রিলেティブ প্রোনাউন হিসেবে "which" বা "that" বসবে।'
                    },
                    {
                        question: 'The candidate ___ speaking test was yesterday got a band 8.',
                        options: ['who', 'which', 'whose', 'whom'],
                        answer: 2,
                        explanation: 'মালিকানা বা সম্পর্ক বোঝাতে (যার স্পিকিং টেস্ট) "whose" ব্যবহৃত হয়।'
                    },
                    {
                        question: 'This is the town ___ Sathi grew up and learned English.',
                        options: ['which', 'that', 'where', 'who'],
                        answer: 2,
                        explanation: 'যেহেতু "town" একটি স্থান নির্দেশ করছে এবং সেখানে কাজটি ঘটেছিল, তাই "where" বসবে।'
                    },
                    {
                        question: 'Do you know the teacher ___ is conducting the IELTS speaking evaluation?',
                        options: ['who', 'which', 'whose', 'whom'],
                        answer: 0,
                        explanation: 'ব্যক্তিবাচক subject-কে নির্দেশ করতে "who" ব্যবহৃত হয়।'
                    },
                    {
                        question: 'The essays ___ were written by Sathi scored a band 7.5.',
                        options: ['who', 'whose', 'that', 'whom'],
                        answer: 2,
                        explanation: 'বহুবচন বস্তুবাচক nouns (essays) এর পর defining clause এ "that" বা "which" বসে।'
                    }
                ],
                micChallenge: {
                    prompt: "Say this sentence with a relative clause: 'This is the book which is very helpful.'",
                    promptBn: "Relative Clause (which) যুক্ত এই বাক্যটি উচ্চারণ করো।",
                    targetKeywords: ["book", "which", "helpful"],
                    sampleAnswer: "This is the book which is very helpful.",
                    explanation: "Relative clause (which) যুক্ত বাক্যটি সঠিক হয়েছে।"
                }
            },
            {
                id: 10,
                title: 'Modal & Semi-Modal Verbs',
                titleBn: 'মডাল ভার্ব ও এর নিখুঁত ব্যবহার',
                desc: 'সম্ভাবনা, বাধ্যবাধকতা, ক্ষমতা ও ভদ্রতা প্রকাশে মডাল ভার্বের ব্যবহার।',
                ieltsTip: 'IELTS Writing Task 2 এ "Hedging" (অতিরিক্ত নিশ্চয়তা না দিয়ে সম্ভাবনা প্রকাশ করা, যেমন: "This could lead to..." এর জায়গায় "This will lead to" না বলা) অত্যন্ত গুরুত্বপূর্ণ। মডাল ভার্ব যেমন: could, might, would এর জন্য অপরিহার্য।',
                lessonContent: `### Modal & Semi-Modal Verbs (মডাল ও সেমি-মডাল)
Modal Verbs হলো বিশেষ ধরনের auxiliary (সাহায্যকারী) verb যা মূল verb এর অর্থকে বিশেষ মাত্রা দেয়।

#### প্রধান Modal Verbs ও এদের ব্যবহার:
১. **Ability (সক্ষমতা):** Can, Could (অতীত সক্ষমতা)
   * *উদাহরণ:* Sathi **can** write complex sentences.
   * *উদাহরণ:* Sathi **could** not speak English fluently in school.

২. **Possibility (সম্ভাবনা):** May, Might, Could
   * *উদাহরণ:* This implementation **might** reduce the processing delay.

৩. **Obligation / Advice (বাধ্যবাধকতা বা উপদেশ):** Must, Should, Ought to
   * *উদাহরণ:* IELTS aspirants **should** practice daily.
   * *উদাহরণ:* Sathi **must** follow the word limits.

৪. **Polite Request / Offer (ভদ্রভাবে অনুরোধ):** Would, Could, May
   * *উদাহরণ:* **Would** you please explain this reading rule?

#### সেমি-মডাল (Semi-Modals):
- **Have to / Need to / Used to** (এদের শেষে to থাকে এবং মডাল হিসেবে কাজ করে)।
  * *উদাহরণ:* Sathi **used to** practice speaking in front of the mirror.`,
                quiz: [
                    {
                        question: 'Using public transport ___ reduce city traffic congestion significantly.',
                        options: ['should', 'could', 'must to', 'ought'],
                        answer: 1,
                        explanation: 'এখানে "could" (হ্রাস করতে পারে - সম্ভাবনা প্রকাশে) সবচেয়ে উপযুক্ত ও নমনীয় (hedging) অপশন।'
                    },
                    {
                        question: 'Students ___ submit their papers before the deadline, or they will lose marks.',
                        options: ['might', 'ought', 'must', 'could'],
                        answer: 2,
                        explanation: 'যেহেতু ডেডলাইনের আগে জমা না দিলে মার্কস কাটা যাবে (বাধ্যবাধকতা), তাই তীব্র বাধ্যবাধকতায় "must" বসে।'
                    },
                    {
                        question: 'Sathi ___ speak English fluently now after months of hard practice.',
                        options: ['could', 'should', 'can', 'might'],
                        answer: 2,
                        explanation: 'বর্তমানে কোনো কাজ করার সক্ষমতা বোঝাতে "can" বসে।'
                    },
                    {
                        question: '___ you please pass me the Cambridge Reading book?',
                        options: ['May', 'Would', 'Should', 'Must'],
                        answer: 1,
                        explanation: 'ভদ্রভাবে কাউকে কোনো অনুরোধ করতে "Would" বা "Could" ব্যবহৃত হয়।'
                    },
                    {
                        question: 'I ___ to study English for at least two hours every day.',
                        options: ['must', 'need', 'should', 'could'],
                        answer: 1,
                        explanation: '"need" এর সাথে "to" বসে (need to study), কিন্তু must বা should এর সাথে সরাসরি verb বসে।'
                    }
                ],
                micChallenge: {
                    prompt: "Say this sentence expressing possibility: 'This could lead to traffic congestion.'",
                    promptBn: "Could (সম্ভাবনা) মডাল ভার্ব ব্যবহার করে এই বাক্যটি বলো।",
                    targetKeywords: ["could", "lead", "traffic"],
                    sampleAnswer: "This could lead to traffic congestion.",
                    explanation: "সম্ভাবনা বা hedging এর ক্ষেত্রে could মডাল ভার্ব সঠিকভাবে ব্যবহৃত হয়েছে।"
                }
            },
            {
                id: 11,
                title: 'Sentence Connectors',
                titleBn: 'লিংকিং ওয়ার্ডস ও ট্রানজিশন',
                desc: 'একাধিক বাক্য ও ধারণাকে যুক্তিযুক্তভাবে সংযুক্ত করার কৌশল।',
                ieltsTip: 'কানেক্টরের সঠিক ব্যবহার আপনার Coherence and Cohesion এর ব্যান্ড স্কোর সরাসরি বাড়িয়ে দেবে। একই কানেক্টর (যেমন: but, because) বারবার ব্যবহার না করে variations আনুন।',
                lessonContent: `### Sentence Connectors (লিংকিং ওয়ার্ডস)
বাক্যের প্রবাহ ও যুক্তি সুন্দরভাবে ধরে রাখতে Sentence Connectors ব্যবহৃত হয়।

#### প্রকারভেদ ও উদাহরণ:
১. **Addition (অতিরিক্ত তথ্য যোগ করতে):** Furthermore, Moreover, In addition, Besides
   * *উদাহরণ:* Reading improves vocabulary. **Furthermore**, it enhances writing skills.

২. **Contrast (বৈপরীত্য প্রকাশ করতে):** However, On the other hand, Conversely, Although
   * *উদাহরণ:* Sathi studied hard. **However**, the test was unexpectedly difficult.

৩. **Cause & Effect (কারণ ও ফলাফল):** Therefore, Consequently, As a result, Thus
   * *উদাহরণ:* Sathi practiced writing regularly. **Consequently**, she scored a band 7.5.

৪. **Example (উদাহরণ দেখাতে):** For instance, For example, Namely
   * *উদাহরণ:* There are many academic options, **for instance**, business management or sciences.`,
                quiz: [
                    {
                        question: 'Online classes are convenient. ___, they can sometimes lack student interaction.',
                        options: ['Therefore', 'Furthermore', 'However', 'Moving on'],
                        answer: 2,
                        explanation: 'প্রথম বাক্য ইতিবাচক কিন্তু দ্বিতীয় বাক্যটি নেতিবাচক (বৈপরীত্য)। বৈপরীত্য প্রকাশে "However" ব্যবহৃত হয়।'
                    },
                    {
                        question: 'The student scored low in grammar. ___, the final band score dropped.',
                        options: ['As a result', 'On the other hand', 'For instance', 'Although'],
                        answer: 0,
                        explanation: 'ব্যাকরণে কম পাওয়ার ফলাফলে ব্যান্ড কমে গেছে। ফলাফল বা কারণ ও কার্য প্রকাশে "As a result" বসে।'
                    },
                    {
                        question: 'Sathi wanted to study abroad. ___, she prepared herself for the IELTS exam.',
                        options: ['Therefore', 'However', 'Conversely', 'For example'],
                        answer: 0,
                        explanation: 'বিদেশে পড়াশোনা করার উদ্দেশ্যে বা কারণে সে আইইএলটিএস প্রস্তুতি নিয়েছে। কারণ-ফলাফলে "Therefore" বসে।'
                    },
                    {
                        question: 'Exercise keeps us healthy. ___, it boosts our mental energy.',
                        options: ['On the other hand', 'Moreover', 'As a result', 'Although'],
                        answer: 1,
                        explanation: 'প্রথম তথ্যের সাথে আরেকটি ইতিবাচক তথ্য যুক্ত করতে "Moreover" (অধিকন্তু) বসে।'
                    },
                    {
                        question: '___ the instructions were complicated, Sathi completed the task correctly.',
                        options: ['Although', 'However', 'Therefore', 'Furthermore'],
                        answer: 0,
                        explanation: 'জটিলতা সত্ত্বেও সঠিক কাজ সম্পন্ন করায় বৈপরীত্যবাচক সাব-অর্ডিনেটিং কনজাংশন "Although" বসবে।'
                    }
                ],
                micChallenge: {
                    prompt: "Say this sentence with a contrast connector: 'However, it can sometimes lack interaction.'",
                    promptBn: "However কানেক্টর ব্যবহার করে এই বাক্যটি বলো।",
                    targetKeywords: ["however", "lack", "interaction"],
                    sampleAnswer: "However, it can sometimes lack interaction.",
                    explanation: "বৈপরীত্য প্রকাশে However কানেক্টরটি সঠিকভাবে উচ্চারণ করেছেন।"
                }
            },
            {
                id: 12,
                title: 'Common IELTS Grammar Mistakes',
                titleBn: 'আইইএলটিএস-এ প্রচলিত ব্যাকরণগত ভুলসমূহ',
                desc: 'সবচেয়ে সাধারণ ভুলগুলো চিহ্নিত করা ও তা সংশোধন করা।',
                ieltsTip: 'পরীক্ষায় ছোটখাটো ভুলের কারণে গ্রামাটিক্যাল অ্যাকুরেসি (GRA) স্কোর অনেক কমে যায়। এই ভুলগুলো শুধরে নেওয়া হলো ব্যান্ড ৭+ পাওয়ার সবচেয়ে দ্রুততম উপায়।',
                lessonContent: `### Common IELTS Grammar Mistakes (প্রচলিত ভুলসমূহ)

#### ১. Article Errors (এ, অ্যান, দ্য-এর ভুল ব্যবহার)
- **ভুল:** Sathi wants to go to *the* UK. (সঠিক: The UK, The USA এর আগে regular-এর মতোই the বসে কিন্তু সাধারণ দেশ বা শহরের আগে বসে না)।
- **ভুল:** Technology plays *important* role.
- **সঠিক:** Technology plays **an** important role. (একবচন noun-এর পূর্বে অবশ্যই article প্রয়োজন)।

#### ২. Dangling Modifiers (কর্তাহীন বিশেষণ)
- **ভুল:** While taking the test, Sathi's pen broke. (পেন নিজেই টেস্ট দিচ্ছিল না!)
- **সঠিক:** While Sathi was taking the test, her pen broke.

#### ৩. Run-on Sentences (কমা স্প্লাইস)
- **ভুল:** Sathi got a high score, she was happy. (দুটি স্বাধীন ক্লজকে শুধু কমা দিয়ে যুক্ত করা যায় না)।
- **সঠিক:** Sathi got a high score, **so** she was happy. OR Sathi got a high score; she was happy.

#### ৪. Preposition Mismatches
- **ভুল:** It depends *on* Sathi. (সঠিক: depend **on**)।
- **ভুল:** Discuss *about* the topic.
- **সঠিক:** Discuss the topic. (Discuss এর সাথে "about" বসে না)।`,
                quiz: [
                    {
                        question: 'Identify the sentence with CORRECT grammar:',
                        options: [
                            'Although he was tired, but he finished the writing test.',
                            'Although he was tired, he finished the writing test.',
                            'Although he was tired he but finished the writing test.',
                            'Although he was tired, yet he finished the writing test.'
                        ],
                        answer: 1,
                        explanation: '"Although" এবং "but" একই বাক্যে একসাথে ব্যবহৃত হতে পারে না। "Although he was tired," এর পর সরাসরি main clause-টি বসাতে হবে।'
                    },
                    {
                        question: 'Which of the following is grammatically correct?',
                        options: [
                            'We need to discuss about the environmental pollution.',
                            'We need to discuss the environmental pollution.',
                            'We need to discuss on the environmental pollution.',
                            'We need to discuss for the environmental pollution.'
                        ],
                        answer: 1,
                        explanation: '"discuss" একটি transitive verb, তাই এর পর সরাসরি object বসে, কোনো "about" বা "on" preposition বসে না।'
                    },
                    {
                        question: 'Find the grammatically correct sentence:',
                        options: [
                            'I will go to USA next year.',
                            'I will go to the USA next year.',
                            'I will go to a USA next year.',
                            'I will go USA next year.'
                        ],
                        answer: 1,
                        explanation: 'USA, UK, UAE ইত্যাদি দেশগুলোর আগে অবশ্যই article "the" ব্যবহার করতে হয়।'
                    },
                    {
                        question: 'Which sentence has no run-on error?',
                        options: [
                            'Sathi wrote a letter, she posted it.',
                            'Sathi wrote a letter and she posted it.',
                            'Sathi wrote a letter and posted it.',
                            'Sathi wrote a letter, posted it.'
                        ],
                        answer: 2,
                        explanation: 'দুটি verb (wrote, posted) যখন coordinating conjunction "and" দ্বারা যুক্ত হয় কোনো subject পুনরাবৃত্তি ছাড়া, সেটি সঠিক।'
                    },
                    {
                        question: 'His success depends ___ hard work.',
                        options: ['on', 'of', 'in', 'at'],
                        answer: 0,
                        explanation: '"depend" এর সাথে উপযুক্ত preposition হলো "on" (depend on)।'
                    }
                ],
                micChallenge: {
                    prompt: "Say this grammatically correct sentence: 'Technology plays an important role.'",
                    promptBn: "নিখুঁত গ্রামারসহ এই গুরুত্বপূর্ণ বাক্যটি বলো।",
                    targetKeywords: ["technology", "plays", "important", "role"],
                    sampleAnswer: "Technology plays an important role.",
                    explanation: "Technology (singular) এর পর plays এবং important এর আগে article 'an' সঠিকভাবে বসেছে।"
                }
            }
        ]
    }
];
