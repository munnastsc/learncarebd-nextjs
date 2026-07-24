export type Vocab = { word: string; bangla: string; partOfSpeech: string; example?: string };
export type Question = { q: string; options: string[]; answer: string };
export type GrammarTeach = {
    structure: string;
    formula: string;
    explanation: string;
    examples: { eng: string; bng: string }[];
};
export type Sentence = { eng: string; bng: string };
export type Summary = {
    takeaways: string[];
    realLifeUsage: { context: string; example: string }[];
};
export type Story = {
    id: string; title: string; subtitle: string;
    level: 'Beginner' | 'Intermediate' | 'Advanced'; levelColor: string; topic: string;
    learningObjectives: string[]; grammarFocus: string[];
    grammarTeach: GrammarTeach;
    sentences: Sentence[];
    vocabulary: Vocab[];
    questions: Question[];
    summary: Summary;
};

export const STORIES: Story[] = [
    {
        "id": "s1",
        "title": "A Morning Walk",
        "subtitle": "একটি সকালের হাঁটা",
        "level": "Beginner",
        "levelColor": "emerald",
        "topic": "Daily Life",
        "learningObjectives": [
            "Present Simple দিয়ে daily routine বর্ণনা",
            "Adverbs of frequency: usually, always",
            "Descriptive adjectives: fresh, quiet"
        ],
        "grammarFocus": [
            "Present Simple",
            "Adverbs of Frequency",
            "Adjectives"
        ],
        "grammarTeach": {
            "structure": "Present Simple Tense",
            "formula": "Subject + Verb(s/es) + Object",
            "explanation": "দৈনন্দিন অভ্যাস বা চিরন্তন সত্য বোঝাতে এই গঠন ব্যবহার করা হয়। Subject যদি He/She/It বা একবচন হয়, তবে verb-এর সাথে s/es যুক্ত হয়।",
            "examples": [
                {
                    "eng": "He walks to the park.",
                    "bng": "সে পার্কে হেঁটে যায়।"
                },
                {
                    "eng": "She drinks a glass of water.",
                    "bng": "সে এক গ্লাস পানি পান করে।"
                }
            ]
        },
        "sentences": [
            {
                "eng": "Every morning, Ahmed wakes up at six o'clock.",
                "bng": "প্রতিদিন সকালে আহমেদ ছয়টায় ঘুম থেকে ওঠে।"
            },
            {
                "eng": "He puts on his shoes and walks to the nearby park.",
                "bng": "সে তার জুতো পরে এবং কাছাকাছি পার্কে হেঁটে যায়।"
            },
            {
                "eng": "The air is fresh and the streets are quiet at that time.",
                "bng": "সে সময় বাতাস সতেজ থাকে এবং রাস্তাগুলো শান্ত থাকে।"
            },
            {
                "eng": "He usually walks for thirty minutes.",
                "bng": "সে সাধারণত ত্রিশ মিনিট ধরে হাঁটে।"
            },
            {
                "eng": "Ahmed finds this walk very peaceful.",
                "bng": "আহমেদ এই হাঁটাটিকে অত্যন্ত শান্তিপূর্ণ মনে করে।"
            }
        ],
        "vocabulary": [
            {
                "word": "nearby",
                "bangla": "কাছাকাছি",
                "partOfSpeech": "adjective"
            },
            {
                "word": "fresh",
                "bangla": "সতেজ",
                "partOfSpeech": "adjective"
            },
            {
                "word": "quiet",
                "bangla": "শান্ত",
                "partOfSpeech": "adjective"
            },
            {
                "word": "usually",
                "bangla": "সাধারণত",
                "partOfSpeech": "adverb"
            },
            {
                "word": "peaceful",
                "bangla": "শান্তিপূর্ণ",
                "partOfSpeech": "adjective"
            }
        ],
        "questions": [
            {
                "q": "What time does Ahmed wake up?",
                "options": [
                    "5 o'clock",
                    "6 o'clock",
                    "7 o'clock",
                    "8 o'clock"
                ],
                "answer": "6 o'clock"
            },
            {
                "q": "Where does Ahmed walk?",
                "options": [
                    "To the market",
                    "To the nearby park",
                    "To the school",
                    "To his office"
                ],
                "answer": "To the nearby park"
            },
            {
                "q": "How long does he walk?",
                "options": [
                    "10 minutes",
                    "20 minutes",
                    "30 minutes",
                    "1 hour"
                ],
                "answer": "30 minutes"
            },
            {
                "q": "What is the air like in the morning?",
                "options": [
                    "Hot",
                    "Dirty",
                    "Fresh",
                    "Cold"
                ],
                "answer": "Fresh"
            }
        ],
        "summary": {
            "takeaways": [
                "দৈনন্দিন অভ্যাস বর্ণনা করতে Present Simple tense ব্যবহৃত হয়।",
                "হাঁটাহাঁটির মতো স্বাস্থ্যকর অভ্যাস ইংরেজিতে বর্ণনা করার দক্ষতা।"
            ],
            "realLifeUsage": [
                {
                    "context": "কারো সাথে কথা বলার সময় আপনার সকালের রুটিন শেয়ার করতে:",
                    "example": "I wake up early and go for a morning walk. It keeps me fresh."
                }
            ]
        }
    },
    {
        "id": "s2",
        "title": "The Library Visit",
        "subtitle": "লাইব্রেরিতে একদিন",
        "level": "Beginner",
        "levelColor": "emerald",
        "topic": "Education",
        "learningObjectives": [
            "Past Simple দিয়ে অতীতের ঘটনা বর্ণনা",
            "Library vocabulary",
            "Prepositions of place"
        ],
        "grammarFocus": [
            "Past Simple",
            "Library Vocabulary",
            "Prepositions"
        ],
        "grammarTeach": {
            "structure": "Past Simple Tense",
            "formula": "Subject + Verb(Past Form/V2) + Object",
            "explanation": "অতীতের কোনো নির্দিষ্ট কাজ যা শেষ হয়ে গেছে তা প্রকাশ করতে Past Simple ব্যবহার করা হয়।",
            "examples": [
                {
                    "eng": "She visited the library.",
                    "bng": "সে লাইব্রেরি পরিদর্শন করেছিল।"
                },
                {
                    "eng": "He read for two hours.",
                    "bng": "সে দুই ঘণ্টা পড়েছিল।"
                }
            ]
        },
        "sentences": [
            {
                "eng": "Last Saturday, Nadia visited the public library.",
                "bng": "গত শনিবার নাদিয়া পাবলিক লাইব্রেরিতে গিয়েছিল।"
            },
            {
                "eng": "She searched for books on English grammar.",
                "bng": "সে ইংরেজি গ্রামারের ওপর বই খুঁজছিল।"
            },
            {
                "eng": "She sat at a quiet table near the window.",
                "bng": "সে জানালার পাশে একটি শান্ত টেবিলে বসেছিল।"
            },
            {
                "eng": "She read a book for two hours without any noise.",
                "bng": "সে কোনো শব্দ ছাড়াই দুই ঘণ্টা একটি বই পড়েছিল।"
            },
            {
                "eng": "Finally, she borrowed two books and went home.",
                "bng": "অবশেষে সে দুটি বই ধার নিল এবং বাড়ি চলে গেল।"
            }
        ],
        "vocabulary": [
            {
                "word": "library",
                "bangla": "গ্রন্থাগার / লাইব্রেরি",
                "partOfSpeech": "noun"
            },
            {
                "word": "searched",
                "bangla": "খুঁজেছিল",
                "partOfSpeech": "verb"
            },
            {
                "word": "quiet",
                "bangla": "শান্ত / নীরব",
                "partOfSpeech": "adjective"
            },
            {
                "word": "borrowed",
                "bangla": "ধার নিয়েছিল",
                "partOfSpeech": "verb"
            },
            {
                "word": "window",
                "bangla": "জানালা",
                "partOfSpeech": "noun"
            }
        ],
        "questions": [
            {
                "q": "When did Nadia visit the library?",
                "options": [
                    "Last Friday",
                    "Last Saturday",
                    "Yesterday",
                    "Today"
                ],
                "answer": "Last Saturday"
            },
            {
                "q": "What books did she search for?",
                "options": [
                    "History books",
                    "English grammar books",
                    "Story books",
                    "Science books"
                ],
                "answer": "English grammar books"
            },
            {
                "q": "Where did she sit?",
                "options": [
                    "Near the door",
                    "Near the window",
                    "In the corner",
                    "Outside"
                ],
                "answer": "Near the window"
            },
            {
                "q": "How many books did she borrow?",
                "options": [
                    "One",
                    "Two",
                    "Three",
                    "Four"
                ],
                "answer": "Two"
            }
        ],
        "summary": {
            "takeaways": [
                "অতীতের ঘটনা বর্ণনা করতে Past Simple tense ব্যবহার করার নিয়ম।",
                "লাইব্রেরি সংক্রান্ত শব্দভাণ্ডার ও বাক্য গঠন।"
            ],
            "realLifeUsage": [
                {
                    "context": "আপনি অতীতে লাইব্রেরি বা কোথাও গিয়েছিলেন তা বলতে:",
                    "example": "Yesterday, I visited the library and borrowed a grammar book."
                }
            ]
        }
    },
    {
        "id": "s3",
        "title": "Shopping at the Market",
        "subtitle": "বাজারে কেনাকাটা",
        "level": "Beginner",
        "levelColor": "emerald",
        "topic": "Daily Life",
        "learningObjectives": [
            "Countable and uncountable nouns",
            "Shopping words"
        ],
        "grammarFocus": [
            "Countable Nouns",
            "Shopping Vocab"
        ],
        "grammarTeach": {
            "structure": "Present Simple or Past Simple",
            "formula": "Subject + Verb(V1/V2) + Object",
            "explanation": "এই গল্পে সাধারণ বর্তমান বা অতীতের রূপ ব্যবহার করে ইংরেজি বাক্য গঠন শেখানো হয়েছে।",
            "examples": [
                {
                    "eng": "We love this place.",
                    "bng": "আমরা এই জায়গাটি ভালোবাসি।"
                },
                {
                    "eng": "She spoke to me.",
                    "bng": "সে আমার সাথে কথা বলেছিল।"
                }
            ]
        },
        "sentences": [
            {
                "eng": "Today, Rahim wants to read about shopping at the market.",
                "bng": "আজ রহিম বাজারে কেনাকাটা সম্পর্কে পড়তে চায়।"
            },
            {
                "eng": "He sits down with a clean mind.",
                "bng": "সে একটি পরিষ্কার মন নিয়ে বসে পড়ে।"
            },
            {
                "eng": "He finds the topic very interesting and useful.",
                "bng": "সে বিষয়টিকে খুবই আকর্ষণীয় এবং দরকারী মনে করে।"
            },
            {
                "eng": "English stories help him learn grammar rules easily.",
                "bng": "ইংরেজি গল্প তাকে সহজেই গ্রামার নিয়ম শিখতে সাহায্য করে।"
            },
            {
                "eng": "He plans to practice speaking every day.",
                "bng": "সে প্রতিদিন ইংরেজিতে কথা বলার অনুশীলন করার পরিকল্পনা করে।"
            }
        ],
        "vocabulary": [
            {
                "word": "wants",
                "bangla": "চায়",
                "partOfSpeech": "verb"
            },
            {
                "word": "clean",
                "bangla": "পরিষ্কার",
                "partOfSpeech": "adjective"
            },
            {
                "word": "interesting",
                "bangla": "আকর্ষণীয়",
                "partOfSpeech": "adjective"
            },
            {
                "word": "easily",
                "bangla": "সহজেই",
                "partOfSpeech": "adverb"
            },
            {
                "word": "practice",
                "bangla": "অনুশীলন",
                "partOfSpeech": "verb"
            }
        ],
        "questions": [
            {
                "q": "What does Rahim want to read about?",
                "options": [
                    "Shopping at the Market",
                    "A movie",
                    "A song",
                    "A letter"
                ],
                "answer": "Shopping at the Market"
            },
            {
                "q": "How does he sit down?",
                "options": [
                    "With a heavy heart",
                    "With a clean mind",
                    "Angry",
                    "Tired"
                ],
                "answer": "With a clean mind"
            },
            {
                "q": "What does he think of the topic?",
                "options": [
                    "Boring",
                    "Too long",
                    "Interesting and useful",
                    "Difficult"
                ],
                "answer": "Interesting and useful"
            },
            {
                "q": "What helps him learn grammar rules easily?",
                "options": [
                    "English stories",
                    "Games",
                    "TV shows",
                    "Radio"
                ],
                "answer": "English stories"
            }
        ],
        "summary": {
            "takeaways": [
                "সহজ ইংরেজি বাক্য গঠন করার দক্ষতা অর্জন।",
                "নতুন শব্দ ও প্রোনাউন্সিয়েশন প্র্যাকটিস করার সুবিধা।"
            ],
            "realLifeUsage": [
                {
                    "context": "দৈনন্দিন অভ্যাস প্রকাশ করতে:",
                    "example": "I read a story about shopping at the market to improve my English."
                }
            ]
        }
    },
    {
        "id": "s4",
        "title": "Cooking Dinner",
        "subtitle": "রাতের রান্না",
        "level": "Beginner",
        "levelColor": "emerald",
        "topic": "Daily Life",
        "learningObjectives": [
            "Present continuous for ongoing actions",
            "Imperatives"
        ],
        "grammarFocus": [
            "Present Continuous",
            "Imperatives"
        ],
        "grammarTeach": {
            "structure": "Present Simple or Past Simple",
            "formula": "Subject + Verb(V1/V2) + Object",
            "explanation": "এই গল্পে সাধারণ বর্তমান বা অতীতের রূপ ব্যবহার করে ইংরেজি বাক্য গঠন শেখানো হয়েছে।",
            "examples": [
                {
                    "eng": "We love this place.",
                    "bng": "আমরা এই জায়গাটি ভালোবাসি।"
                },
                {
                    "eng": "She spoke to me.",
                    "bng": "সে আমার সাথে কথা বলেছিল।"
                }
            ]
        },
        "sentences": [
            {
                "eng": "Today, Rahim wants to read about cooking dinner.",
                "bng": "আজ রহিম রাতের রান্না সম্পর্কে পড়তে চায়।"
            },
            {
                "eng": "He sits down with a clean mind.",
                "bng": "সে একটি পরিষ্কার মন নিয়ে বসে পড়ে।"
            },
            {
                "eng": "He finds the topic very interesting and useful.",
                "bng": "সে বিষয়টিকে খুবই আকর্ষণীয় এবং দরকারী মনে করে।"
            },
            {
                "eng": "English stories help him learn grammar rules easily.",
                "bng": "ইংরেজি গল্প তাকে সহজেই গ্রামার নিয়ম শিখতে সাহায্য করে।"
            },
            {
                "eng": "He plans to practice speaking every day.",
                "bng": "সে প্রতিদিন ইংরেজিতে কথা বলার অনুশীলন করার পরিকল্পনা করে।"
            }
        ],
        "vocabulary": [
            {
                "word": "wants",
                "bangla": "চায়",
                "partOfSpeech": "verb"
            },
            {
                "word": "clean",
                "bangla": "পরিষ্কার",
                "partOfSpeech": "adjective"
            },
            {
                "word": "interesting",
                "bangla": "আকর্ষণীয়",
                "partOfSpeech": "adjective"
            },
            {
                "word": "easily",
                "bangla": "সহজেই",
                "partOfSpeech": "adverb"
            },
            {
                "word": "practice",
                "bangla": "অনুশীলন",
                "partOfSpeech": "verb"
            }
        ],
        "questions": [
            {
                "q": "What does Rahim want to read about?",
                "options": [
                    "Cooking Dinner",
                    "A movie",
                    "A song",
                    "A letter"
                ],
                "answer": "Cooking Dinner"
            },
            {
                "q": "How does he sit down?",
                "options": [
                    "With a heavy heart",
                    "With a clean mind",
                    "Angry",
                    "Tired"
                ],
                "answer": "With a clean mind"
            },
            {
                "q": "What does he think of the topic?",
                "options": [
                    "Boring",
                    "Too long",
                    "Interesting and useful",
                    "Difficult"
                ],
                "answer": "Interesting and useful"
            },
            {
                "q": "What helps him learn grammar rules easily?",
                "options": [
                    "English stories",
                    "Games",
                    "TV shows",
                    "Radio"
                ],
                "answer": "English stories"
            }
        ],
        "summary": {
            "takeaways": [
                "সহজ ইংরেজি বাক্য গঠন করার দক্ষতা অর্জন।",
                "নতুন শব্দ ও প্রোনাউন্সিয়েশন প্র্যাকটিস করার সুবিধা।"
            ],
            "realLifeUsage": [
                {
                    "context": "দৈনন্দিন অভ্যাস প্রকাশ করতে:",
                    "example": "I read a story about cooking dinner to improve my English."
                }
            ]
        }
    },
    {
        "id": "s5",
        "title": "A Day at the Zoo",
        "subtitle": "চিড়িয়াখানায় একদিন",
        "level": "Beginner",
        "levelColor": "emerald",
        "topic": "Leisure",
        "learningObjectives": [
            "Past Simple for sequential events",
            "Animal vocabulary"
        ],
        "grammarFocus": [
            "Past Simple",
            "Animal Vocab"
        ],
        "grammarTeach": {
            "structure": "Present Simple or Past Simple",
            "formula": "Subject + Verb(V1/V2) + Object",
            "explanation": "এই গল্পে সাধারণ বর্তমান বা অতীতের রূপ ব্যবহার করে ইংরেজি বাক্য গঠন শেখানো হয়েছে।",
            "examples": [
                {
                    "eng": "We love this place.",
                    "bng": "আমরা এই জায়গাটি ভালোবাসি।"
                },
                {
                    "eng": "She spoke to me.",
                    "bng": "সে আমার সাথে কথা বলেছিল।"
                }
            ]
        },
        "sentences": [
            {
                "eng": "Today, Rahim wants to read about a day at the zoo.",
                "bng": "আজ রহিম চিড়িয়াখানায় একদিন সম্পর্কে পড়তে চায়।"
            },
            {
                "eng": "He sits down with a clean mind.",
                "bng": "সে একটি পরিষ্কার মন নিয়ে বসে পড়ে।"
            },
            {
                "eng": "He finds the topic very interesting and useful.",
                "bng": "সে বিষয়টিকে খুবই আকর্ষণীয় এবং দরকারী মনে করে।"
            },
            {
                "eng": "English stories help him learn grammar rules easily.",
                "bng": "ইংরেজি গল্প তাকে সহজেই গ্রামার নিয়ম শিখতে সাহায্য করে।"
            },
            {
                "eng": "He plans to practice speaking every day.",
                "bng": "সে প্রতিদিন ইংরেজিতে কথা বলার অনুশীলন করার পরিকল্পনা করে।"
            }
        ],
        "vocabulary": [
            {
                "word": "wants",
                "bangla": "চায়",
                "partOfSpeech": "verb"
            },
            {
                "word": "clean",
                "bangla": "পরিষ্কার",
                "partOfSpeech": "adjective"
            },
            {
                "word": "interesting",
                "bangla": "আকর্ষণীয়",
                "partOfSpeech": "adjective"
            },
            {
                "word": "easily",
                "bangla": "সহজেই",
                "partOfSpeech": "adverb"
            },
            {
                "word": "practice",
                "bangla": "অনুশীলন",
                "partOfSpeech": "verb"
            }
        ],
        "questions": [
            {
                "q": "What does Rahim want to read about?",
                "options": [
                    "A Day at the Zoo",
                    "A movie",
                    "A song",
                    "A letter"
                ],
                "answer": "A Day at the Zoo"
            },
            {
                "q": "How does he sit down?",
                "options": [
                    "With a heavy heart",
                    "With a clean mind",
                    "Angry",
                    "Tired"
                ],
                "answer": "With a clean mind"
            },
            {
                "q": "What does he think of the topic?",
                "options": [
                    "Boring",
                    "Too long",
                    "Interesting and useful",
                    "Difficult"
                ],
                "answer": "Interesting and useful"
            },
            {
                "q": "What helps him learn grammar rules easily?",
                "options": [
                    "English stories",
                    "Games",
                    "TV shows",
                    "Radio"
                ],
                "answer": "English stories"
            }
        ],
        "summary": {
            "takeaways": [
                "সহজ ইংরেজি বাক্য গঠন করার দক্ষতা অর্জন।",
                "নতুন শব্দ ও প্রোনাউন্সিয়েশন প্র্যাকটিস করার সুবিধা।"
            ],
            "realLifeUsage": [
                {
                    "context": "দৈনন্দিন অভ্যাস প্রকাশ করতে:",
                    "example": "I read a story about a day at the zoo to improve my English."
                }
            ]
        }
    },
    {
        "id": "s6",
        "title": "The Computer Class",
        "subtitle": "কম্পিউটার ক্লাস",
        "level": "Beginner",
        "levelColor": "emerald",
        "topic": "Education",
        "learningObjectives": [
            "Modal verbs: can, could",
            "Technology vocabulary"
        ],
        "grammarFocus": [
            "Modal Verbs",
            "Tech Vocab"
        ],
        "grammarTeach": {
            "structure": "Present Simple or Past Simple",
            "formula": "Subject + Verb(V1/V2) + Object",
            "explanation": "এই গল্পে সাধারণ বর্তমান বা অতীতের রূপ ব্যবহার করে ইংরেজি বাক্য গঠন শেখানো হয়েছে।",
            "examples": [
                {
                    "eng": "We love this place.",
                    "bng": "আমরা এই জায়গাটি ভালোবাসি।"
                },
                {
                    "eng": "She spoke to me.",
                    "bng": "সে আমার সাথে কথা বলেছিল।"
                }
            ]
        },
        "sentences": [
            {
                "eng": "Today, Rahim wants to read about the computer class.",
                "bng": "আজ রহিম কম্পিউটার ক্লাস সম্পর্কে পড়তে চায়।"
            },
            {
                "eng": "He sits down with a clean mind.",
                "bng": "সে একটি পরিষ্কার মন নিয়ে বসে পড়ে।"
            },
            {
                "eng": "He finds the topic very interesting and useful.",
                "bng": "সে বিষয়টিকে খুবই আকর্ষণীয় এবং দরকারী মনে করে।"
            },
            {
                "eng": "English stories help him learn grammar rules easily.",
                "bng": "ইংরেজি গল্প তাকে সহজেই গ্রামার নিয়ম শিখতে সাহায্য করে।"
            },
            {
                "eng": "He plans to practice speaking every day.",
                "bng": "সে প্রতিদিন ইংরেজিতে কথা বলার অনুশীলন করার পরিকল্পনা করে।"
            }
        ],
        "vocabulary": [
            {
                "word": "wants",
                "bangla": "চায়",
                "partOfSpeech": "verb"
            },
            {
                "word": "clean",
                "bangla": "পরিষ্কার",
                "partOfSpeech": "adjective"
            },
            {
                "word": "interesting",
                "bangla": "আকর্ষণীয়",
                "partOfSpeech": "adjective"
            },
            {
                "word": "easily",
                "bangla": "সহজেই",
                "partOfSpeech": "adverb"
            },
            {
                "word": "practice",
                "bangla": "অনুশীলন",
                "partOfSpeech": "verb"
            }
        ],
        "questions": [
            {
                "q": "What does Rahim want to read about?",
                "options": [
                    "The Computer Class",
                    "A movie",
                    "A song",
                    "A letter"
                ],
                "answer": "The Computer Class"
            },
            {
                "q": "How does he sit down?",
                "options": [
                    "With a heavy heart",
                    "With a clean mind",
                    "Angry",
                    "Tired"
                ],
                "answer": "With a clean mind"
            },
            {
                "q": "What does he think of the topic?",
                "options": [
                    "Boring",
                    "Too long",
                    "Interesting and useful",
                    "Difficult"
                ],
                "answer": "Interesting and useful"
            },
            {
                "q": "What helps him learn grammar rules easily?",
                "options": [
                    "English stories",
                    "Games",
                    "TV shows",
                    "Radio"
                ],
                "answer": "English stories"
            }
        ],
        "summary": {
            "takeaways": [
                "সহজ ইংরেজি বাক্য গঠন করার দক্ষতা অর্জন।",
                "নতুন শব্দ ও প্রোনাউন্সিয়েশন প্র্যাকটিস করার সুবিধা।"
            ],
            "realLifeUsage": [
                {
                    "context": "দৈনন্দিন অভ্যাস প্রকাশ করতে:",
                    "example": "I read a story about the computer class to improve my English."
                }
            ]
        }
    },
    {
        "id": "s7",
        "title": "Visiting the Doctor",
        "subtitle": "ডাক্তারের কাছে যাওয়া",
        "level": "Beginner",
        "levelColor": "emerald",
        "topic": "Health",
        "learningObjectives": [
            "Giving advice: should",
            "Health vocabulary"
        ],
        "grammarFocus": [
            "Modal Should",
            "Health Vocab"
        ],
        "grammarTeach": {
            "structure": "Present Simple or Past Simple",
            "formula": "Subject + Verb(V1/V2) + Object",
            "explanation": "এই গল্পে সাধারণ বর্তমান বা অতীতের রূপ ব্যবহার করে ইংরেজি বাক্য গঠন শেখানো হয়েছে।",
            "examples": [
                {
                    "eng": "We love this place.",
                    "bng": "আমরা এই জায়গাটি ভালোবাসি।"
                },
                {
                    "eng": "She spoke to me.",
                    "bng": "সে আমার সাথে কথা বলেছিল।"
                }
            ]
        },
        "sentences": [
            {
                "eng": "Today, Rahim wants to read about visiting the doctor.",
                "bng": "আজ রহিম ডাক্তারের কাছে যাওয়া সম্পর্কে পড়তে চায়।"
            },
            {
                "eng": "He sits down with a clean mind.",
                "bng": "সে একটি পরিষ্কার মন নিয়ে বসে পড়ে।"
            },
            {
                "eng": "He finds the topic very interesting and useful.",
                "bng": "সে বিষয়টিকে খুবই আকর্ষণীয় এবং দরকারী মনে করে।"
            },
            {
                "eng": "English stories help him learn grammar rules easily.",
                "bng": "ইংরেজি গল্প তাকে সহজেই গ্রামার নিয়ম শিখতে সাহায্য করে।"
            },
            {
                "eng": "He plans to practice speaking every day.",
                "bng": "সে প্রতিদিন ইংরেজিতে কথা বলার অনুশীলন করার পরিকল্পনা করে।"
            }
        ],
        "vocabulary": [
            {
                "word": "wants",
                "bangla": "চায়",
                "partOfSpeech": "verb"
            },
            {
                "word": "clean",
                "bangla": "পরিষ্কার",
                "partOfSpeech": "adjective"
            },
            {
                "word": "interesting",
                "bangla": "আকর্ষণীয়",
                "partOfSpeech": "adjective"
            },
            {
                "word": "easily",
                "bangla": "সহজেই",
                "partOfSpeech": "adverb"
            },
            {
                "word": "practice",
                "bangla": "অনুশীলন",
                "partOfSpeech": "verb"
            }
        ],
        "questions": [
            {
                "q": "What does Rahim want to read about?",
                "options": [
                    "Visiting the Doctor",
                    "A movie",
                    "A song",
                    "A letter"
                ],
                "answer": "Visiting the Doctor"
            },
            {
                "q": "How does he sit down?",
                "options": [
                    "With a heavy heart",
                    "With a clean mind",
                    "Angry",
                    "Tired"
                ],
                "answer": "With a clean mind"
            },
            {
                "q": "What does he think of the topic?",
                "options": [
                    "Boring",
                    "Too long",
                    "Interesting and useful",
                    "Difficult"
                ],
                "answer": "Interesting and useful"
            },
            {
                "q": "What helps him learn grammar rules easily?",
                "options": [
                    "English stories",
                    "Games",
                    "TV shows",
                    "Radio"
                ],
                "answer": "English stories"
            }
        ],
        "summary": {
            "takeaways": [
                "সহজ ইংরেজি বাক্য গঠন করার দক্ষতা অর্জন।",
                "নতুন শব্দ ও প্রোনাউন্সিয়েশন প্র্যাকটিস করার সুবিধা।"
            ],
            "realLifeUsage": [
                {
                    "context": "দৈনন্দিন অভ্যাস প্রকাশ করতে:",
                    "example": "I read a story about visiting the doctor to improve my English."
                }
            ]
        }
    },
    {
        "id": "s8",
        "title": "My New Bicycle",
        "subtitle": "আমার নতুন সাইকেল",
        "level": "Beginner",
        "levelColor": "emerald",
        "topic": "Daily Life",
        "learningObjectives": [
            "Possessives: my, his, her",
            "Transportation vocabulary"
        ],
        "grammarFocus": [
            "Possessives",
            "Transport Vocab"
        ],
        "grammarTeach": {
            "structure": "Present Simple or Past Simple",
            "formula": "Subject + Verb(V1/V2) + Object",
            "explanation": "এই গল্পে সাধারণ বর্তমান বা অতীতের রূপ ব্যবহার করে ইংরেজি বাক্য গঠন শেখানো হয়েছে।",
            "examples": [
                {
                    "eng": "We love this place.",
                    "bng": "আমরা এই জায়গাটি ভালোবাসি।"
                },
                {
                    "eng": "She spoke to me.",
                    "bng": "সে আমার সাথে কথা বলেছিল।"
                }
            ]
        },
        "sentences": [
            {
                "eng": "Today, Rahim wants to read about my new bicycle.",
                "bng": "আজ রহিম আমার নতুন সাইকেল সম্পর্কে পড়তে চায়।"
            },
            {
                "eng": "He sits down with a clean mind.",
                "bng": "সে একটি পরিষ্কার মন নিয়ে বসে পড়ে।"
            },
            {
                "eng": "He finds the topic very interesting and useful.",
                "bng": "সে বিষয়টিকে খুবই আকর্ষণীয় এবং দরকারী মনে করে।"
            },
            {
                "eng": "English stories help him learn grammar rules easily.",
                "bng": "ইংরেজি গল্প তাকে সহজেই গ্রামার নিয়ম শিখতে সাহায্য করে।"
            },
            {
                "eng": "He plans to practice speaking every day.",
                "bng": "সে প্রতিদিন ইংরেজিতে কথা বলার অনুশীলন করার পরিকল্পনা করে।"
            }
        ],
        "vocabulary": [
            {
                "word": "wants",
                "bangla": "চায়",
                "partOfSpeech": "verb"
            },
            {
                "word": "clean",
                "bangla": "পরিষ্কার",
                "partOfSpeech": "adjective"
            },
            {
                "word": "interesting",
                "bangla": "আকর্ষণীয়",
                "partOfSpeech": "adjective"
            },
            {
                "word": "easily",
                "bangla": "সহজেই",
                "partOfSpeech": "adverb"
            },
            {
                "word": "practice",
                "bangla": "অনুশীলন",
                "partOfSpeech": "verb"
            }
        ],
        "questions": [
            {
                "q": "What does Rahim want to read about?",
                "options": [
                    "My New Bicycle",
                    "A movie",
                    "A song",
                    "A letter"
                ],
                "answer": "My New Bicycle"
            },
            {
                "q": "How does he sit down?",
                "options": [
                    "With a heavy heart",
                    "With a clean mind",
                    "Angry",
                    "Tired"
                ],
                "answer": "With a clean mind"
            },
            {
                "q": "What does he think of the topic?",
                "options": [
                    "Boring",
                    "Too long",
                    "Interesting and useful",
                    "Difficult"
                ],
                "answer": "Interesting and useful"
            },
            {
                "q": "What helps him learn grammar rules easily?",
                "options": [
                    "English stories",
                    "Games",
                    "TV shows",
                    "Radio"
                ],
                "answer": "English stories"
            }
        ],
        "summary": {
            "takeaways": [
                "সহজ ইংরেজি বাক্য গঠন করার দক্ষতা অর্জন।",
                "নতুন শব্দ ও প্রোনাউন্সিয়েশন প্র্যাকটিস করার সুবিধা।"
            ],
            "realLifeUsage": [
                {
                    "context": "দৈনন্দিন অভ্যাস প্রকাশ করতে:",
                    "example": "I read a story about my new bicycle to improve my English."
                }
            ]
        }
    },
    {
        "id": "s9",
        "title": "Planting a Tree",
        "subtitle": "গাছ লাগানো",
        "level": "Beginner",
        "levelColor": "emerald",
        "topic": "Environment",
        "learningObjectives": [
            "Imperative forms for steps",
            "Nature vocabulary"
        ],
        "grammarFocus": [
            "Imperatives",
            "Nature Vocab"
        ],
        "grammarTeach": {
            "structure": "Present Simple or Past Simple",
            "formula": "Subject + Verb(V1/V2) + Object",
            "explanation": "এই গল্পে সাধারণ বর্তমান বা অতীতের রূপ ব্যবহার করে ইংরেজি বাক্য গঠন শেখানো হয়েছে।",
            "examples": [
                {
                    "eng": "We love this place.",
                    "bng": "আমরা এই জায়গাটি ভালোবাসি।"
                },
                {
                    "eng": "She spoke to me.",
                    "bng": "সে আমার সাথে কথা বলেছিল।"
                }
            ]
        },
        "sentences": [
            {
                "eng": "Today, Rahim wants to read about planting a tree.",
                "bng": "আজ রহিম গাছ লাগানো সম্পর্কে পড়তে চায়।"
            },
            {
                "eng": "He sits down with a clean mind.",
                "bng": "সে একটি পরিষ্কার মন নিয়ে বসে পড়ে।"
            },
            {
                "eng": "He finds the topic very interesting and useful.",
                "bng": "সে বিষয়টিকে খুবই আকর্ষণীয় এবং দরকারী মনে করে।"
            },
            {
                "eng": "English stories help him learn grammar rules easily.",
                "bng": "ইংরেজি গল্প তাকে সহজেই গ্রামার নিয়ম শিখতে সাহায্য করে।"
            },
            {
                "eng": "He plans to practice speaking every day.",
                "bng": "সে প্রতিদিন ইংরেজিতে কথা বলার অনুশীলন করার পরিকল্পনা করে।"
            }
        ],
        "vocabulary": [
            {
                "word": "wants",
                "bangla": "চায়",
                "partOfSpeech": "verb"
            },
            {
                "word": "clean",
                "bangla": "পরিষ্কার",
                "partOfSpeech": "adjective"
            },
            {
                "word": "interesting",
                "bangla": "আকর্ষণীয়",
                "partOfSpeech": "adjective"
            },
            {
                "word": "easily",
                "bangla": "সহজেই",
                "partOfSpeech": "adverb"
            },
            {
                "word": "practice",
                "bangla": "অনুশীলন",
                "partOfSpeech": "verb"
            }
        ],
        "questions": [
            {
                "q": "What does Rahim want to read about?",
                "options": [
                    "Planting a Tree",
                    "A movie",
                    "A song",
                    "A letter"
                ],
                "answer": "Planting a Tree"
            },
            {
                "q": "How does he sit down?",
                "options": [
                    "With a heavy heart",
                    "With a clean mind",
                    "Angry",
                    "Tired"
                ],
                "answer": "With a clean mind"
            },
            {
                "q": "What does he think of the topic?",
                "options": [
                    "Boring",
                    "Too long",
                    "Interesting and useful",
                    "Difficult"
                ],
                "answer": "Interesting and useful"
            },
            {
                "q": "What helps him learn grammar rules easily?",
                "options": [
                    "English stories",
                    "Games",
                    "TV shows",
                    "Radio"
                ],
                "answer": "English stories"
            }
        ],
        "summary": {
            "takeaways": [
                "সহজ ইংরেজি বাক্য গঠন করার দক্ষতা অর্জন।",
                "নতুন শব্দ ও প্রোনাউন্সিয়েশন প্র্যাকটিস করার সুবিধা।"
            ],
            "realLifeUsage": [
                {
                    "context": "দৈনন্দিন অভ্যাস প্রকাশ করতে:",
                    "example": "I read a story about planting a tree to improve my English."
                }
            ]
        }
    },
    {
        "id": "s10",
        "title": "The Football Match",
        "subtitle": "ফুটবল ম্যাচ",
        "level": "Beginner",
        "levelColor": "emerald",
        "topic": "Sports",
        "learningObjectives": [
            "Tense consistency in narratives",
            "Sports vocabulary"
        ],
        "grammarFocus": [
            "Tense Consistency",
            "Sports Vocab"
        ],
        "grammarTeach": {
            "structure": "Present Simple or Past Simple",
            "formula": "Subject + Verb(V1/V2) + Object",
            "explanation": "এই গল্পে সাধারণ বর্তমান বা অতীতের রূপ ব্যবহার করে ইংরেজি বাক্য গঠন শেখানো হয়েছে।",
            "examples": [
                {
                    "eng": "We love this place.",
                    "bng": "আমরা এই জায়গাটি ভালোবাসি।"
                },
                {
                    "eng": "She spoke to me.",
                    "bng": "সে আমার সাথে কথা বলেছিল।"
                }
            ]
        },
        "sentences": [
            {
                "eng": "Today, Rahim wants to read about the football match.",
                "bng": "আজ রহিম ফুটবল ম্যাচ সম্পর্কে পড়তে চায়।"
            },
            {
                "eng": "He sits down with a clean mind.",
                "bng": "সে একটি পরিষ্কার মন নিয়ে বসে পড়ে।"
            },
            {
                "eng": "He finds the topic very interesting and useful.",
                "bng": "সে বিষয়টিকে খুবই আকর্ষণীয় এবং দরকারী মনে করে।"
            },
            {
                "eng": "English stories help him learn grammar rules easily.",
                "bng": "ইংরেজি গল্প তাকে সহজেই গ্রামার নিয়ম শিখতে সাহায্য করে।"
            },
            {
                "eng": "He plans to practice speaking every day.",
                "bng": "সে প্রতিদিন ইংরেজিতে কথা বলার অনুশীলন করার পরিকল্পনা করে।"
            }
        ],
        "vocabulary": [
            {
                "word": "wants",
                "bangla": "চায়",
                "partOfSpeech": "verb"
            },
            {
                "word": "clean",
                "bangla": "পরিষ্কার",
                "partOfSpeech": "adjective"
            },
            {
                "word": "interesting",
                "bangla": "আকর্ষণীয়",
                "partOfSpeech": "adjective"
            },
            {
                "word": "easily",
                "bangla": "সহজেই",
                "partOfSpeech": "adverb"
            },
            {
                "word": "practice",
                "bangla": "অনুশীলন",
                "partOfSpeech": "verb"
            }
        ],
        "questions": [
            {
                "q": "What does Rahim want to read about?",
                "options": [
                    "The Football Match",
                    "A movie",
                    "A song",
                    "A letter"
                ],
                "answer": "The Football Match"
            },
            {
                "q": "How does he sit down?",
                "options": [
                    "With a heavy heart",
                    "With a clean mind",
                    "Angry",
                    "Tired"
                ],
                "answer": "With a clean mind"
            },
            {
                "q": "What does he think of the topic?",
                "options": [
                    "Boring",
                    "Too long",
                    "Interesting and useful",
                    "Difficult"
                ],
                "answer": "Interesting and useful"
            },
            {
                "q": "What helps him learn grammar rules easily?",
                "options": [
                    "English stories",
                    "Games",
                    "TV shows",
                    "Radio"
                ],
                "answer": "English stories"
            }
        ],
        "summary": {
            "takeaways": [
                "সহজ ইংরেজি বাক্য গঠন করার দক্ষতা অর্জন।",
                "নতুন শব্দ ও প্রোনাউন্সিয়েশন প্র্যাকটিস করার সুবিধা।"
            ],
            "realLifeUsage": [
                {
                    "context": "দৈনন্দিন অভ্যাস প্রকাশ করতে:",
                    "example": "I read a story about the football match to improve my English."
                }
            ]
        }
    },
    {
        "id": "s11",
        "title": "Making a Cup of Tea",
        "subtitle": "এক কাপ চা বানানো",
        "level": "Beginner",
        "levelColor": "emerald",
        "topic": "Daily Life",
        "learningObjectives": [
            "Sequence connectors: first, then",
            "Kitchen vocabulary"
        ],
        "grammarFocus": [
            "Sequence Connectors",
            "Kitchen Vocab"
        ],
        "grammarTeach": {
            "structure": "Present Simple or Past Simple",
            "formula": "Subject + Verb(V1/V2) + Object",
            "explanation": "এই গল্পে সাধারণ বর্তমান বা অতীতের রূপ ব্যবহার করে ইংরেজি বাক্য গঠন শেখানো হয়েছে।",
            "examples": [
                {
                    "eng": "We love this place.",
                    "bng": "আমরা এই জায়গাটি ভালোবাসি।"
                },
                {
                    "eng": "She spoke to me.",
                    "bng": "সে আমার সাথে কথা বলেছিল।"
                }
            ]
        },
        "sentences": [
            {
                "eng": "Today, Rahim wants to read about making a cup of tea.",
                "bng": "আজ রহিম এক কাপ চা বানানো সম্পর্কে পড়তে চায়।"
            },
            {
                "eng": "He sits down with a clean mind.",
                "bng": "সে একটি পরিষ্কার মন নিয়ে বসে পড়ে।"
            },
            {
                "eng": "He finds the topic very interesting and useful.",
                "bng": "সে বিষয়টিকে খুবই আকর্ষণীয় এবং দরকারী মনে করে।"
            },
            {
                "eng": "English stories help him learn grammar rules easily.",
                "bng": "ইংরেজি গল্প তাকে সহজেই গ্রামার নিয়ম শিখতে সাহায্য করে।"
            },
            {
                "eng": "He plans to practice speaking every day.",
                "bng": "সে প্রতিদিন ইংরেজিতে কথা বলার অনুশীলন করার পরিকল্পনা করে।"
            }
        ],
        "vocabulary": [
            {
                "word": "wants",
                "bangla": "চায়",
                "partOfSpeech": "verb"
            },
            {
                "word": "clean",
                "bangla": "পরিষ্কার",
                "partOfSpeech": "adjective"
            },
            {
                "word": "interesting",
                "bangla": "আকর্ষণীয়",
                "partOfSpeech": "adjective"
            },
            {
                "word": "easily",
                "bangla": "সহজেই",
                "partOfSpeech": "adverb"
            },
            {
                "word": "practice",
                "bangla": "অনুশীলন",
                "partOfSpeech": "verb"
            }
        ],
        "questions": [
            {
                "q": "What does Rahim want to read about?",
                "options": [
                    "Making a Cup of Tea",
                    "A movie",
                    "A song",
                    "A letter"
                ],
                "answer": "Making a Cup of Tea"
            },
            {
                "q": "How does he sit down?",
                "options": [
                    "With a heavy heart",
                    "With a clean mind",
                    "Angry",
                    "Tired"
                ],
                "answer": "With a clean mind"
            },
            {
                "q": "What does he think of the topic?",
                "options": [
                    "Boring",
                    "Too long",
                    "Interesting and useful",
                    "Difficult"
                ],
                "answer": "Interesting and useful"
            },
            {
                "q": "What helps him learn grammar rules easily?",
                "options": [
                    "English stories",
                    "Games",
                    "TV shows",
                    "Radio"
                ],
                "answer": "English stories"
            }
        ],
        "summary": {
            "takeaways": [
                "সহজ ইংরেজি বাক্য গঠন করার দক্ষতা অর্জন।",
                "নতুন শব্দ ও প্রোনাউন্সিয়েশন প্র্যাকটিস করার সুবিধা।"
            ],
            "realLifeUsage": [
                {
                    "context": "দৈনন্দিন অভ্যাস প্রকাশ করতে:",
                    "example": "I read a story about making a cup of tea to improve my English."
                }
            ]
        }
    },
    {
        "id": "s12",
        "title": "A Trip to the Beach",
        "subtitle": "সমুদ্রে ভ্রমণ",
        "level": "Beginner",
        "levelColor": "emerald",
        "topic": "Travel",
        "learningObjectives": [
            "Descriptive adjectives",
            "Travel vocabulary"
        ],
        "grammarFocus": [
            "Descriptive Adjectives",
            "Travel Vocab"
        ],
        "grammarTeach": {
            "structure": "Present Simple or Past Simple",
            "formula": "Subject + Verb(V1/V2) + Object",
            "explanation": "এই গল্পে সাধারণ বর্তমান বা অতীতের রূপ ব্যবহার করে ইংরেজি বাক্য গঠন শেখানো হয়েছে।",
            "examples": [
                {
                    "eng": "We love this place.",
                    "bng": "আমরা এই জায়গাটি ভালোবাসি।"
                },
                {
                    "eng": "She spoke to me.",
                    "bng": "সে আমার সাথে কথা বলেছিল।"
                }
            ]
        },
        "sentences": [
            {
                "eng": "Today, Rahim wants to read about a trip to the beach.",
                "bng": "আজ রহিম সমুদ্রে ভ্রমণ সম্পর্কে পড়তে চায়।"
            },
            {
                "eng": "He sits down with a clean mind.",
                "bng": "সে একটি পরিষ্কার মন নিয়ে বসে পড়ে।"
            },
            {
                "eng": "He finds the topic very interesting and useful.",
                "bng": "সে বিষয়টিকে খুবই আকর্ষণীয় এবং দরকারী মনে করে।"
            },
            {
                "eng": "English stories help him learn grammar rules easily.",
                "bng": "ইংরেজি গল্প তাকে সহজেই গ্রামার নিয়ম শিখতে সাহায্য করে।"
            },
            {
                "eng": "He plans to practice speaking every day.",
                "bng": "সে প্রতিদিন ইংরেজিতে কথা বলার অনুশীলন করার পরিকল্পনা করে।"
            }
        ],
        "vocabulary": [
            {
                "word": "wants",
                "bangla": "চায়",
                "partOfSpeech": "verb"
            },
            {
                "word": "clean",
                "bangla": "পরিষ্কার",
                "partOfSpeech": "adjective"
            },
            {
                "word": "interesting",
                "bangla": "আকর্ষণীয়",
                "partOfSpeech": "adjective"
            },
            {
                "word": "easily",
                "bangla": "সহজেই",
                "partOfSpeech": "adverb"
            },
            {
                "word": "practice",
                "bangla": "অনুশীলন",
                "partOfSpeech": "verb"
            }
        ],
        "questions": [
            {
                "q": "What does Rahim want to read about?",
                "options": [
                    "A Trip to the Beach",
                    "A movie",
                    "A song",
                    "A letter"
                ],
                "answer": "A Trip to the Beach"
            },
            {
                "q": "How does he sit down?",
                "options": [
                    "With a heavy heart",
                    "With a clean mind",
                    "Angry",
                    "Tired"
                ],
                "answer": "With a clean mind"
            },
            {
                "q": "What does he think of the topic?",
                "options": [
                    "Boring",
                    "Too long",
                    "Interesting and useful",
                    "Difficult"
                ],
                "answer": "Interesting and useful"
            },
            {
                "q": "What helps him learn grammar rules easily?",
                "options": [
                    "English stories",
                    "Games",
                    "TV shows",
                    "Radio"
                ],
                "answer": "English stories"
            }
        ],
        "summary": {
            "takeaways": [
                "সহজ ইংরেজি বাক্য গঠন করার দক্ষতা অর্জন।",
                "নতুন শব্দ ও প্রোনাউন্সিয়েশন প্র্যাকটিস করার সুবিধা।"
            ],
            "realLifeUsage": [
                {
                    "context": "দৈনন্দিন অভ্যাস প্রকাশ করতে:",
                    "example": "I read a story about a trip to the beach to improve my English."
                }
            ]
        }
    },
    {
        "id": "s13",
        "title": "My School Friends",
        "subtitle": "আমার স্কুলের বন্ধুরা",
        "level": "Beginner",
        "levelColor": "emerald",
        "topic": "Society",
        "learningObjectives": [
            "Present simple plural agreement",
            "Friendship vocabulary"
        ],
        "grammarFocus": [
            "Subject-Verb Agreement",
            "Friendship Vocab"
        ],
        "grammarTeach": {
            "structure": "Present Simple or Past Simple",
            "formula": "Subject + Verb(V1/V2) + Object",
            "explanation": "এই গল্পে সাধারণ বর্তমান বা অতীতের রূপ ব্যবহার করে ইংরেজি বাক্য গঠন শেখানো হয়েছে।",
            "examples": [
                {
                    "eng": "We love this place.",
                    "bng": "আমরা এই জায়গাটি ভালোবাসি।"
                },
                {
                    "eng": "She spoke to me.",
                    "bng": "সে আমার সাথে কথা বলেছিল।"
                }
            ]
        },
        "sentences": [
            {
                "eng": "Today, Rahim wants to read about my school friends.",
                "bng": "আজ রহিম আমার স্কুলের বন্ধুরা সম্পর্কে পড়তে চায়।"
            },
            {
                "eng": "He sits down with a clean mind.",
                "bng": "সে একটি পরিষ্কার মন নিয়ে বসে পড়ে।"
            },
            {
                "eng": "He finds the topic very interesting and useful.",
                "bng": "সে বিষয়টিকে খুবই আকর্ষণীয় এবং দরকারী মনে করে।"
            },
            {
                "eng": "English stories help him learn grammar rules easily.",
                "bng": "ইংরেজি গল্প তাকে সহজেই গ্রামার নিয়ম শিখতে সাহায্য করে।"
            },
            {
                "eng": "He plans to practice speaking every day.",
                "bng": "সে প্রতিদিন ইংরেজিতে কথা বলার অনুশীলন করার পরিকল্পনা করে।"
            }
        ],
        "vocabulary": [
            {
                "word": "wants",
                "bangla": "চায়",
                "partOfSpeech": "verb"
            },
            {
                "word": "clean",
                "bangla": "পরিষ্কার",
                "partOfSpeech": "adjective"
            },
            {
                "word": "interesting",
                "bangla": "আকর্ষণীয়",
                "partOfSpeech": "adjective"
            },
            {
                "word": "easily",
                "bangla": "সহজেই",
                "partOfSpeech": "adverb"
            },
            {
                "word": "practice",
                "bangla": "অনুশীলন",
                "partOfSpeech": "verb"
            }
        ],
        "questions": [
            {
                "q": "What does Rahim want to read about?",
                "options": [
                    "My School Friends",
                    "A movie",
                    "A song",
                    "A letter"
                ],
                "answer": "My School Friends"
            },
            {
                "q": "How does he sit down?",
                "options": [
                    "With a heavy heart",
                    "With a clean mind",
                    "Angry",
                    "Tired"
                ],
                "answer": "With a clean mind"
            },
            {
                "q": "What does he think of the topic?",
                "options": [
                    "Boring",
                    "Too long",
                    "Interesting and useful",
                    "Difficult"
                ],
                "answer": "Interesting and useful"
            },
            {
                "q": "What helps him learn grammar rules easily?",
                "options": [
                    "English stories",
                    "Games",
                    "TV shows",
                    "Radio"
                ],
                "answer": "English stories"
            }
        ],
        "summary": {
            "takeaways": [
                "সহজ ইংরেজি বাক্য গঠন করার দক্ষতা অর্জন।",
                "নতুন শব্দ ও প্রোনাউন্সিয়েশন প্র্যাকটিস করার সুবিধা।"
            ],
            "realLifeUsage": [
                {
                    "context": "দৈনন্দিন অভ্যাস প্রকাশ করতে:",
                    "example": "I read a story about my school friends to improve my English."
                }
            ]
        }
    },
    {
        "id": "s14",
        "title": "Writing a Letter",
        "subtitle": "একটি চিঠি লেখা",
        "level": "Beginner",
        "levelColor": "emerald",
        "topic": "Communication",
        "learningObjectives": [
            "Present Perfect simple introduction",
            "Writing vocabulary"
        ],
        "grammarFocus": [
            "Present Perfect",
            "Writing Vocab"
        ],
        "grammarTeach": {
            "structure": "Present Simple or Past Simple",
            "formula": "Subject + Verb(V1/V2) + Object",
            "explanation": "এই গল্পে সাধারণ বর্তমান বা অতীতের রূপ ব্যবহার করে ইংরেজি বাক্য গঠন শেখানো হয়েছে।",
            "examples": [
                {
                    "eng": "We love this place.",
                    "bng": "আমরা এই জায়গাটি ভালোবাসি।"
                },
                {
                    "eng": "She spoke to me.",
                    "bng": "সে আমার সাথে কথা বলেছিল।"
                }
            ]
        },
        "sentences": [
            {
                "eng": "Today, Rahim wants to read about writing a letter.",
                "bng": "আজ রহিম একটি চিঠি লেখা সম্পর্কে পড়তে চায়।"
            },
            {
                "eng": "He sits down with a clean mind.",
                "bng": "সে একটি পরিষ্কার মন নিয়ে বসে পড়ে।"
            },
            {
                "eng": "He finds the topic very interesting and useful.",
                "bng": "সে বিষয়টিকে খুবই আকর্ষণীয় এবং দরকারী মনে করে।"
            },
            {
                "eng": "English stories help him learn grammar rules easily.",
                "bng": "ইংরেজি গল্প তাকে সহজেই গ্রামার নিয়ম শিখতে সাহায্য করে।"
            },
            {
                "eng": "He plans to practice speaking every day.",
                "bng": "সে প্রতিদিন ইংরেজিতে কথা বলার অনুশীলন করার পরিকল্পনা করে।"
            }
        ],
        "vocabulary": [
            {
                "word": "wants",
                "bangla": "চায়",
                "partOfSpeech": "verb"
            },
            {
                "word": "clean",
                "bangla": "পরিষ্কার",
                "partOfSpeech": "adjective"
            },
            {
                "word": "interesting",
                "bangla": "আকর্ষণীয়",
                "partOfSpeech": "adjective"
            },
            {
                "word": "easily",
                "bangla": "সহজেই",
                "partOfSpeech": "adverb"
            },
            {
                "word": "practice",
                "bangla": "অনুশীলন",
                "partOfSpeech": "verb"
            }
        ],
        "questions": [
            {
                "q": "What does Rahim want to read about?",
                "options": [
                    "Writing a Letter",
                    "A movie",
                    "A song",
                    "A letter"
                ],
                "answer": "Writing a Letter"
            },
            {
                "q": "How does he sit down?",
                "options": [
                    "With a heavy heart",
                    "With a clean mind",
                    "Angry",
                    "Tired"
                ],
                "answer": "With a clean mind"
            },
            {
                "q": "What does he think of the topic?",
                "options": [
                    "Boring",
                    "Too long",
                    "Interesting and useful",
                    "Difficult"
                ],
                "answer": "Interesting and useful"
            },
            {
                "q": "What helps him learn grammar rules easily?",
                "options": [
                    "English stories",
                    "Games",
                    "TV shows",
                    "Radio"
                ],
                "answer": "English stories"
            }
        ],
        "summary": {
            "takeaways": [
                "সহজ ইংরেজি বাক্য গঠন করার দক্ষতা অর্জন।",
                "নতুন শব্দ ও প্রোনাউন্সিয়েশন প্র্যাকটিস করার সুবিধা।"
            ],
            "realLifeUsage": [
                {
                    "context": "দৈনন্দিন অভ্যাস প্রকাশ করতে:",
                    "example": "I read a story about writing a letter to improve my English."
                }
            ]
        }
    },
    {
        "id": "s15",
        "title": "The Rainy Day",
        "subtitle": "বৃষ্টির দিন",
        "level": "Beginner",
        "levelColor": "emerald",
        "topic": "Nature",
        "learningObjectives": [
            "Using adjectives for weather",
            "Nature vocabulary"
        ],
        "grammarFocus": [
            "Weather Adjectives",
            "Nature Vocab"
        ],
        "grammarTeach": {
            "structure": "Present Simple or Past Simple",
            "formula": "Subject + Verb(V1/V2) + Object",
            "explanation": "এই গল্পে সাধারণ বর্তমান বা অতীতের রূপ ব্যবহার করে ইংরেজি বাক্য গঠন শেখানো হয়েছে।",
            "examples": [
                {
                    "eng": "We love this place.",
                    "bng": "আমরা এই জায়গাটি ভালোবাসি।"
                },
                {
                    "eng": "She spoke to me.",
                    "bng": "সে আমার সাথে কথা বলেছিল।"
                }
            ]
        },
        "sentences": [
            {
                "eng": "Today, Rahim wants to read about the rainy day.",
                "bng": "আজ রহিম বৃষ্টির দিন সম্পর্কে পড়তে চায়।"
            },
            {
                "eng": "He sits down with a clean mind.",
                "bng": "সে একটি পরিষ্কার মন নিয়ে বসে পড়ে।"
            },
            {
                "eng": "He finds the topic very interesting and useful.",
                "bng": "সে বিষয়টিকে খুবই আকর্ষণীয় এবং দরকারী মনে করে।"
            },
            {
                "eng": "English stories help him learn grammar rules easily.",
                "bng": "ইংরেজি গল্প তাকে সহজেই গ্রামার নিয়ম শিখতে সাহায্য করে।"
            },
            {
                "eng": "He plans to practice speaking every day.",
                "bng": "সে প্রতিদিন ইংরেজিতে কথা বলার অনুশীলন করার পরিকল্পনা করে।"
            }
        ],
        "vocabulary": [
            {
                "word": "wants",
                "bangla": "চায়",
                "partOfSpeech": "verb"
            },
            {
                "word": "clean",
                "bangla": "পরিষ্কার",
                "partOfSpeech": "adjective"
            },
            {
                "word": "interesting",
                "bangla": "আকর্ষণীয়",
                "partOfSpeech": "adjective"
            },
            {
                "word": "easily",
                "bangla": "সহজেই",
                "partOfSpeech": "adverb"
            },
            {
                "word": "practice",
                "bangla": "অনুশীলন",
                "partOfSpeech": "verb"
            }
        ],
        "questions": [
            {
                "q": "What does Rahim want to read about?",
                "options": [
                    "The Rainy Day",
                    "A movie",
                    "A song",
                    "A letter"
                ],
                "answer": "The Rainy Day"
            },
            {
                "q": "How does he sit down?",
                "options": [
                    "With a heavy heart",
                    "With a clean mind",
                    "Angry",
                    "Tired"
                ],
                "answer": "With a clean mind"
            },
            {
                "q": "What does he think of the topic?",
                "options": [
                    "Boring",
                    "Too long",
                    "Interesting and useful",
                    "Difficult"
                ],
                "answer": "Interesting and useful"
            },
            {
                "q": "What helps him learn grammar rules easily?",
                "options": [
                    "English stories",
                    "Games",
                    "TV shows",
                    "Radio"
                ],
                "answer": "English stories"
            }
        ],
        "summary": {
            "takeaways": [
                "সহজ ইংরেজি বাক্য গঠন করার দক্ষতা অর্জন।",
                "নতুন শব্দ ও প্রোনাউন্সিয়েশন প্র্যাকটিস করার সুবিধা।"
            ],
            "realLifeUsage": [
                {
                    "context": "দৈনন্দিন অভ্যাস প্রকাশ করতে:",
                    "example": "I read a story about the rainy day to improve my English."
                }
            ]
        }
    },
    {
        "id": "s16",
        "title": "Feeding the Cat",
        "subtitle": "বিড়ালকে খাওয়ানো",
        "level": "Beginner",
        "levelColor": "emerald",
        "topic": "Daily Life",
        "learningObjectives": [
            "Object pronouns: him, her, it",
            "Pet vocabulary"
        ],
        "grammarFocus": [
            "Object Pronouns",
            "Pet Vocab"
        ],
        "grammarTeach": {
            "structure": "Present Simple or Past Simple",
            "formula": "Subject + Verb(V1/V2) + Object",
            "explanation": "এই গল্পে সাধারণ বর্তমান বা অতীতের রূপ ব্যবহার করে ইংরেজি বাক্য গঠন শেখানো হয়েছে।",
            "examples": [
                {
                    "eng": "We love this place.",
                    "bng": "আমরা এই জায়গাটি ভালোবাসি।"
                },
                {
                    "eng": "She spoke to me.",
                    "bng": "সে আমার সাথে কথা বলেছিল।"
                }
            ]
        },
        "sentences": [
            {
                "eng": "Today, Rahim wants to read about feeding the cat.",
                "bng": "আজ রহিম বিড়ালকে খাওয়ানো সম্পর্কে পড়তে চায়।"
            },
            {
                "eng": "He sits down with a clean mind.",
                "bng": "সে একটি পরিষ্কার মন নিয়ে বসে পড়ে।"
            },
            {
                "eng": "He finds the topic very interesting and useful.",
                "bng": "সে বিষয়টিকে খুবই আকর্ষণীয় এবং দরকারী মনে করে।"
            },
            {
                "eng": "English stories help him learn grammar rules easily.",
                "bng": "ইংরেজি গল্প তাকে সহজেই গ্রামার নিয়ম শিখতে সাহায্য করে।"
            },
            {
                "eng": "He plans to practice speaking every day.",
                "bng": "সে প্রতিদিন ইংরেজিতে কথা বলার অনুশীলন করার পরিকল্পনা করে।"
            }
        ],
        "vocabulary": [
            {
                "word": "wants",
                "bangla": "চায়",
                "partOfSpeech": "verb"
            },
            {
                "word": "clean",
                "bangla": "পরিষ্কার",
                "partOfSpeech": "adjective"
            },
            {
                "word": "interesting",
                "bangla": "আকর্ষণীয়",
                "partOfSpeech": "adjective"
            },
            {
                "word": "easily",
                "bangla": "সহজেই",
                "partOfSpeech": "adverb"
            },
            {
                "word": "practice",
                "bangla": "অনুশীলন",
                "partOfSpeech": "verb"
            }
        ],
        "questions": [
            {
                "q": "What does Rahim want to read about?",
                "options": [
                    "Feeding the Cat",
                    "A movie",
                    "A song",
                    "A letter"
                ],
                "answer": "Feeding the Cat"
            },
            {
                "q": "How does he sit down?",
                "options": [
                    "With a heavy heart",
                    "With a clean mind",
                    "Angry",
                    "Tired"
                ],
                "answer": "With a clean mind"
            },
            {
                "q": "What does he think of the topic?",
                "options": [
                    "Boring",
                    "Too long",
                    "Interesting and useful",
                    "Difficult"
                ],
                "answer": "Interesting and useful"
            },
            {
                "q": "What helps him learn grammar rules easily?",
                "options": [
                    "English stories",
                    "Games",
                    "TV shows",
                    "Radio"
                ],
                "answer": "English stories"
            }
        ],
        "summary": {
            "takeaways": [
                "সহজ ইংরেজি বাক্য গঠন করার দক্ষতা অর্জন।",
                "নতুন শব্দ ও প্রোনাউন্সিয়েশন প্র্যাকটিস করার সুবিধা।"
            ],
            "realLifeUsage": [
                {
                    "context": "দৈনন্দিন অভ্যাস প্রকাশ করতে:",
                    "example": "I read a story about feeding the cat to improve my English."
                }
            ]
        }
    },
    {
        "id": "s17",
        "title": "Saving Money",
        "subtitle": "টাকা জমানো",
        "level": "Beginner",
        "levelColor": "emerald",
        "topic": "Finance",
        "learningObjectives": [
            "Present simple habit verbs",
            "Finance vocabulary"
        ],
        "grammarFocus": [
            "Present Simple",
            "Finance Vocab"
        ],
        "grammarTeach": {
            "structure": "Present Simple or Past Simple",
            "formula": "Subject + Verb(V1/V2) + Object",
            "explanation": "এই গল্পে সাধারণ বর্তমান বা অতীতের রূপ ব্যবহার করে ইংরেজি বাক্য গঠন শেখানো হয়েছে।",
            "examples": [
                {
                    "eng": "We love this place.",
                    "bng": "আমরা এই জায়গাটি ভালোবাসি।"
                },
                {
                    "eng": "She spoke to me.",
                    "bng": "সে আমার সাথে কথা বলেছিল।"
                }
            ]
        },
        "sentences": [
            {
                "eng": "Today, Rahim wants to read about saving money.",
                "bng": "আজ রহিম টাকা জমানো সম্পর্কে পড়তে চায়।"
            },
            {
                "eng": "He sits down with a clean mind.",
                "bng": "সে একটি পরিষ্কার মন নিয়ে বসে পড়ে।"
            },
            {
                "eng": "He finds the topic very interesting and useful.",
                "bng": "সে বিষয়টিকে খুবই আকর্ষণীয় এবং দরকারী মনে করে।"
            },
            {
                "eng": "English stories help him learn grammar rules easily.",
                "bng": "ইংরেজি গল্প তাকে সহজেই গ্রামার নিয়ম শিখতে সাহায্য করে।"
            },
            {
                "eng": "He plans to practice speaking every day.",
                "bng": "সে প্রতিদিন ইংরেজিতে কথা বলার অনুশীলন করার পরিকল্পনা করে।"
            }
        ],
        "vocabulary": [
            {
                "word": "wants",
                "bangla": "চায়",
                "partOfSpeech": "verb"
            },
            {
                "word": "clean",
                "bangla": "পরিষ্কার",
                "partOfSpeech": "adjective"
            },
            {
                "word": "interesting",
                "bangla": "আকর্ষণীয়",
                "partOfSpeech": "adjective"
            },
            {
                "word": "easily",
                "bangla": "সহজেই",
                "partOfSpeech": "adverb"
            },
            {
                "word": "practice",
                "bangla": "অনুশীলন",
                "partOfSpeech": "verb"
            }
        ],
        "questions": [
            {
                "q": "What does Rahim want to read about?",
                "options": [
                    "Saving Money",
                    "A movie",
                    "A song",
                    "A letter"
                ],
                "answer": "Saving Money"
            },
            {
                "q": "How does he sit down?",
                "options": [
                    "With a heavy heart",
                    "With a clean mind",
                    "Angry",
                    "Tired"
                ],
                "answer": "With a clean mind"
            },
            {
                "q": "What does he think of the topic?",
                "options": [
                    "Boring",
                    "Too long",
                    "Interesting and useful",
                    "Difficult"
                ],
                "answer": "Interesting and useful"
            },
            {
                "q": "What helps him learn grammar rules easily?",
                "options": [
                    "English stories",
                    "Games",
                    "TV shows",
                    "Radio"
                ],
                "answer": "English stories"
            }
        ],
        "summary": {
            "takeaways": [
                "সহজ ইংরেজি বাক্য গঠন করার দক্ষতা অর্জন।",
                "নতুন শব্দ ও প্রোনাউন্সিয়েশন প্র্যাকটিস করার সুবিধা।"
            ],
            "realLifeUsage": [
                {
                    "context": "দৈনন্দিন অভ্যাস প্রকাশ করতে:",
                    "example": "I read a story about saving money to improve my English."
                }
            ]
        }
    },
    {
        "id": "s18",
        "title": "A Visit to the Museum",
        "subtitle": "জাদুঘর পরিদর্শন",
        "level": "Beginner",
        "levelColor": "emerald",
        "topic": "History",
        "learningObjectives": [
            "Past simple irregular verbs",
            "History vocabulary"
        ],
        "grammarFocus": [
            "Past Simple",
            "History Vocab"
        ],
        "grammarTeach": {
            "structure": "Present Simple or Past Simple",
            "formula": "Subject + Verb(V1/V2) + Object",
            "explanation": "এই গল্পে সাধারণ বর্তমান বা অতীতের রূপ ব্যবহার করে ইংরেজি বাক্য গঠন শেখানো হয়েছে।",
            "examples": [
                {
                    "eng": "We love this place.",
                    "bng": "আমরা এই জায়গাটি ভালোবাসি।"
                },
                {
                    "eng": "She spoke to me.",
                    "bng": "সে আমার সাথে কথা বলেছিল।"
                }
            ]
        },
        "sentences": [
            {
                "eng": "Today, Rahim wants to read about a visit to the museum.",
                "bng": "আজ রহিম জাদুঘর পরিদর্শন সম্পর্কে পড়তে চায়।"
            },
            {
                "eng": "He sits down with a clean mind.",
                "bng": "সে একটি পরিষ্কার মন নিয়ে বসে পড়ে।"
            },
            {
                "eng": "He finds the topic very interesting and useful.",
                "bng": "সে বিষয়টিকে খুবই আকর্ষণীয় এবং দরকারী মনে করে।"
            },
            {
                "eng": "English stories help him learn grammar rules easily.",
                "bng": "ইংরেজি গল্প তাকে সহজেই গ্রামার নিয়ম শিখতে সাহায্য করে।"
            },
            {
                "eng": "He plans to practice speaking every day.",
                "bng": "সে প্রতিদিন ইংরেজিতে কথা বলার অনুশীলন করার পরিকল্পনা করে।"
            }
        ],
        "vocabulary": [
            {
                "word": "wants",
                "bangla": "চায়",
                "partOfSpeech": "verb"
            },
            {
                "word": "clean",
                "bangla": "পরিষ্কার",
                "partOfSpeech": "adjective"
            },
            {
                "word": "interesting",
                "bangla": "আকর্ষণীয়",
                "partOfSpeech": "adjective"
            },
            {
                "word": "easily",
                "bangla": "সহজেই",
                "partOfSpeech": "adverb"
            },
            {
                "word": "practice",
                "bangla": "অনুশীলন",
                "partOfSpeech": "verb"
            }
        ],
        "questions": [
            {
                "q": "What does Rahim want to read about?",
                "options": [
                    "A Visit to the Museum",
                    "A movie",
                    "A song",
                    "A letter"
                ],
                "answer": "A Visit to the Museum"
            },
            {
                "q": "How does he sit down?",
                "options": [
                    "With a heavy heart",
                    "With a clean mind",
                    "Angry",
                    "Tired"
                ],
                "answer": "With a clean mind"
            },
            {
                "q": "What does he think of the topic?",
                "options": [
                    "Boring",
                    "Too long",
                    "Interesting and useful",
                    "Difficult"
                ],
                "answer": "Interesting and useful"
            },
            {
                "q": "What helps him learn grammar rules easily?",
                "options": [
                    "English stories",
                    "Games",
                    "TV shows",
                    "Radio"
                ],
                "answer": "English stories"
            }
        ],
        "summary": {
            "takeaways": [
                "সহজ ইংরেজি বাক্য গঠন করার দক্ষতা অর্জন।",
                "নতুন শব্দ ও প্রোনাউন্সিয়েশন প্র্যাকটিস করার সুবিধা।"
            ],
            "realLifeUsage": [
                {
                    "context": "দৈনন্দিন অভ্যাস প্রকাশ করতে:",
                    "example": "I read a story about a visit to the museum to improve my English."
                }
            ]
        }
    },
    {
        "id": "s19",
        "title": "The Drawing Lesson",
        "subtitle": "অঙ্কন ক্লাস",
        "level": "Beginner",
        "levelColor": "emerald",
        "topic": "Education",
        "learningObjectives": [
            "Prepositions of movement",
            "Art vocabulary"
        ],
        "grammarFocus": [
            "Prepositions",
            "Art Vocab"
        ],
        "grammarTeach": {
            "structure": "Present Simple or Past Simple",
            "formula": "Subject + Verb(V1/V2) + Object",
            "explanation": "এই গল্পে সাধারণ বর্তমান বা অতীতের রূপ ব্যবহার করে ইংরেজি বাক্য গঠন শেখানো হয়েছে।",
            "examples": [
                {
                    "eng": "We love this place.",
                    "bng": "আমরা এই জায়গাটি ভালোবাসি।"
                },
                {
                    "eng": "She spoke to me.",
                    "bng": "সে আমার সাথে কথা বলেছিল।"
                }
            ]
        },
        "sentences": [
            {
                "eng": "Today, Rahim wants to read about the drawing lesson.",
                "bng": "আজ রহিম অঙ্কন ক্লাস সম্পর্কে পড়তে চায়।"
            },
            {
                "eng": "He sits down with a clean mind.",
                "bng": "সে একটি পরিষ্কার মন নিয়ে বসে পড়ে।"
            },
            {
                "eng": "He finds the topic very interesting and useful.",
                "bng": "সে বিষয়টিকে খুবই আকর্ষণীয় এবং দরকারী মনে করে।"
            },
            {
                "eng": "English stories help him learn grammar rules easily.",
                "bng": "ইংরেজি গল্প তাকে সহজেই গ্রামার নিয়ম শিখতে সাহায্য করে।"
            },
            {
                "eng": "He plans to practice speaking every day.",
                "bng": "সে প্রতিদিন ইংরেজিতে কথা বলার অনুশীলন করার পরিকল্পনা করে।"
            }
        ],
        "vocabulary": [
            {
                "word": "wants",
                "bangla": "চায়",
                "partOfSpeech": "verb"
            },
            {
                "word": "clean",
                "bangla": "পরিষ্কার",
                "partOfSpeech": "adjective"
            },
            {
                "word": "interesting",
                "bangla": "আকর্ষণীয়",
                "partOfSpeech": "adjective"
            },
            {
                "word": "easily",
                "bangla": "সহজেই",
                "partOfSpeech": "adverb"
            },
            {
                "word": "practice",
                "bangla": "অনুশীলন",
                "partOfSpeech": "verb"
            }
        ],
        "questions": [
            {
                "q": "What does Rahim want to read about?",
                "options": [
                    "The Drawing Lesson",
                    "A movie",
                    "A song",
                    "A letter"
                ],
                "answer": "The Drawing Lesson"
            },
            {
                "q": "How does he sit down?",
                "options": [
                    "With a heavy heart",
                    "With a clean mind",
                    "Angry",
                    "Tired"
                ],
                "answer": "With a clean mind"
            },
            {
                "q": "What does he think of the topic?",
                "options": [
                    "Boring",
                    "Too long",
                    "Interesting and useful",
                    "Difficult"
                ],
                "answer": "Interesting and useful"
            },
            {
                "q": "What helps him learn grammar rules easily?",
                "options": [
                    "English stories",
                    "Games",
                    "TV shows",
                    "Radio"
                ],
                "answer": "English stories"
            }
        ],
        "summary": {
            "takeaways": [
                "সহজ ইংরেজি বাক্য গঠন করার দক্ষতা অর্জন।",
                "নতুন শব্দ ও প্রোনাউন্সিয়েশন প্র্যাকটিস করার সুবিধা।"
            ],
            "realLifeUsage": [
                {
                    "context": "দৈনন্দিন অভ্যাস প্রকাশ করতে:",
                    "example": "I read a story about the drawing lesson to improve my English."
                }
            ]
        }
    },
    {
        "id": "s20",
        "title": "Going to School by Bus",
        "subtitle": "বাসে চড়ে স্কুলে যাওয়া",
        "level": "Beginner",
        "levelColor": "emerald",
        "topic": "Daily Life",
        "learningObjectives": [
            "Prepositions: by, on, at",
            "Commute vocabulary"
        ],
        "grammarFocus": [
            "Prepositions",
            "Commute Vocab"
        ],
        "grammarTeach": {
            "structure": "Present Simple or Past Simple",
            "formula": "Subject + Verb(V1/V2) + Object",
            "explanation": "এই গল্পে সাধারণ বর্তমান বা অতীতের রূপ ব্যবহার করে ইংরেজি বাক্য গঠন শেখানো হয়েছে।",
            "examples": [
                {
                    "eng": "We love this place.",
                    "bng": "আমরা এই জায়গাটি ভালোবাসি।"
                },
                {
                    "eng": "She spoke to me.",
                    "bng": "সে আমার সাথে কথা বলেছিল।"
                }
            ]
        },
        "sentences": [
            {
                "eng": "Today, Rahim wants to read about going to school by bus.",
                "bng": "আজ রহিম বাসে চড়ে স্কুলে যাওয়া সম্পর্কে পড়তে চায়।"
            },
            {
                "eng": "He sits down with a clean mind.",
                "bng": "সে একটি পরিষ্কার মন নিয়ে বসে পড়ে।"
            },
            {
                "eng": "He finds the topic very interesting and useful.",
                "bng": "সে বিষয়টিকে খুবই আকর্ষণীয় এবং দরকারী মনে করে।"
            },
            {
                "eng": "English stories help him learn grammar rules easily.",
                "bng": "ইংরেজি গল্প তাকে সহজেই গ্রামার নিয়ম শিখতে সাহায্য করে।"
            },
            {
                "eng": "He plans to practice speaking every day.",
                "bng": "সে প্রতিদিন ইংরেজিতে কথা বলার অনুশীলন করার পরিকল্পনা করে।"
            }
        ],
        "vocabulary": [
            {
                "word": "wants",
                "bangla": "চায়",
                "partOfSpeech": "verb"
            },
            {
                "word": "clean",
                "bangla": "পরিষ্কার",
                "partOfSpeech": "adjective"
            },
            {
                "word": "interesting",
                "bangla": "আকর্ষণীয়",
                "partOfSpeech": "adjective"
            },
            {
                "word": "easily",
                "bangla": "সহজেই",
                "partOfSpeech": "adverb"
            },
            {
                "word": "practice",
                "bangla": "অনুশীলন",
                "partOfSpeech": "verb"
            }
        ],
        "questions": [
            {
                "q": "What does Rahim want to read about?",
                "options": [
                    "Going to School by Bus",
                    "A movie",
                    "A song",
                    "A letter"
                ],
                "answer": "Going to School by Bus"
            },
            {
                "q": "How does he sit down?",
                "options": [
                    "With a heavy heart",
                    "With a clean mind",
                    "Angry",
                    "Tired"
                ],
                "answer": "With a clean mind"
            },
            {
                "q": "What does he think of the topic?",
                "options": [
                    "Boring",
                    "Too long",
                    "Interesting and useful",
                    "Difficult"
                ],
                "answer": "Interesting and useful"
            },
            {
                "q": "What helps him learn grammar rules easily?",
                "options": [
                    "English stories",
                    "Games",
                    "TV shows",
                    "Radio"
                ],
                "answer": "English stories"
            }
        ],
        "summary": {
            "takeaways": [
                "সহজ ইংরেজি বাক্য গঠন করার দক্ষতা অর্জন।",
                "নতুন শব্দ ও প্রোনাউন্সিয়েশন প্র্যাকটিস করার সুবিধা।"
            ],
            "realLifeUsage": [
                {
                    "context": "দৈনন্দিন অভ্যাস প্রকাশ করতে:",
                    "example": "I read a story about going to school by bus to improve my English."
                }
            ]
        }
    },
    {
        "id": "s21",
        "title": "Cleaning the Room",
        "subtitle": "ঘর পরিষ্কার করা",
        "level": "Beginner",
        "levelColor": "emerald",
        "topic": "Daily Life",
        "learningObjectives": [
            "Present continuous actions",
            "Household vocabulary"
        ],
        "grammarFocus": [
            "Present Continuous",
            "Household Vocab"
        ],
        "grammarTeach": {
            "structure": "Present Simple or Past Simple",
            "formula": "Subject + Verb(V1/V2) + Object",
            "explanation": "এই গল্পে সাধারণ বর্তমান বা অতীতের রূপ ব্যবহার করে ইংরেজি বাক্য গঠন শেখানো হয়েছে।",
            "examples": [
                {
                    "eng": "We love this place.",
                    "bng": "আমরা এই জায়গাটি ভালোবাসি।"
                },
                {
                    "eng": "She spoke to me.",
                    "bng": "সে আমার সাথে কথা বলেছিল।"
                }
            ]
        },
        "sentences": [
            {
                "eng": "Today, Rahim wants to read about cleaning the room.",
                "bng": "আজ রহিম ঘর পরিষ্কার করা সম্পর্কে পড়তে চায়।"
            },
            {
                "eng": "He sits down with a clean mind.",
                "bng": "সে একটি পরিষ্কার মন নিয়ে বসে পড়ে।"
            },
            {
                "eng": "He finds the topic very interesting and useful.",
                "bng": "সে বিষয়টিকে খুবই আকর্ষণীয় এবং দরকারী মনে করে।"
            },
            {
                "eng": "English stories help him learn grammar rules easily.",
                "bng": "ইংরেজি গল্প তাকে সহজেই গ্রামার নিয়ম শিখতে সাহায্য করে।"
            },
            {
                "eng": "He plans to practice speaking every day.",
                "bng": "সে প্রতিদিন ইংরেজিতে কথা বলার অনুশীলন করার পরিকল্পনা করে।"
            }
        ],
        "vocabulary": [
            {
                "word": "wants",
                "bangla": "চায়",
                "partOfSpeech": "verb"
            },
            {
                "word": "clean",
                "bangla": "পরিষ্কার",
                "partOfSpeech": "adjective"
            },
            {
                "word": "interesting",
                "bangla": "আকর্ষণীয়",
                "partOfSpeech": "adjective"
            },
            {
                "word": "easily",
                "bangla": "সহজেই",
                "partOfSpeech": "adverb"
            },
            {
                "word": "practice",
                "bangla": "অনুশীলন",
                "partOfSpeech": "verb"
            }
        ],
        "questions": [
            {
                "q": "What does Rahim want to read about?",
                "options": [
                    "Cleaning the Room",
                    "A movie",
                    "A song",
                    "A letter"
                ],
                "answer": "Cleaning the Room"
            },
            {
                "q": "How does he sit down?",
                "options": [
                    "With a heavy heart",
                    "With a clean mind",
                    "Angry",
                    "Tired"
                ],
                "answer": "With a clean mind"
            },
            {
                "q": "What does he think of the topic?",
                "options": [
                    "Boring",
                    "Too long",
                    "Interesting and useful",
                    "Difficult"
                ],
                "answer": "Interesting and useful"
            },
            {
                "q": "What helps him learn grammar rules easily?",
                "options": [
                    "English stories",
                    "Games",
                    "TV shows",
                    "Radio"
                ],
                "answer": "English stories"
            }
        ],
        "summary": {
            "takeaways": [
                "সহজ ইংরেজি বাক্য গঠন করার দক্ষতা অর্জন।",
                "নতুন শব্দ ও প্রোনাউন্সিয়েশন প্র্যাকটিস করার সুবিধা।"
            ],
            "realLifeUsage": [
                {
                    "context": "দৈনন্দিন অভ্যাস প্রকাশ করতে:",
                    "example": "I read a story about cleaning the room to improve my English."
                }
            ]
        }
    },
    {
        "id": "s22",
        "title": "Looking at the Stars",
        "subtitle": "তারাদের দেখা",
        "level": "Beginner",
        "levelColor": "emerald",
        "topic": "Nature",
        "learningObjectives": [
            "Tense usage for wonder",
            "Space vocabulary"
        ],
        "grammarFocus": [
            "Present Simple",
            "Space Vocab"
        ],
        "grammarTeach": {
            "structure": "Present Simple or Past Simple",
            "formula": "Subject + Verb(V1/V2) + Object",
            "explanation": "এই গল্পে সাধারণ বর্তমান বা অতীতের রূপ ব্যবহার করে ইংরেজি বাক্য গঠন শেখানো হয়েছে।",
            "examples": [
                {
                    "eng": "We love this place.",
                    "bng": "আমরা এই জায়গাটি ভালোবাসি।"
                },
                {
                    "eng": "She spoke to me.",
                    "bng": "সে আমার সাথে কথা বলেছিল।"
                }
            ]
        },
        "sentences": [
            {
                "eng": "Today, Rahim wants to read about looking at the stars.",
                "bng": "আজ রহিম তারাদের দেখা সম্পর্কে পড়তে চায়।"
            },
            {
                "eng": "He sits down with a clean mind.",
                "bng": "সে একটি পরিষ্কার মন নিয়ে বসে পড়ে।"
            },
            {
                "eng": "He finds the topic very interesting and useful.",
                "bng": "সে বিষয়টিকে খুবই আকর্ষণীয় এবং দরকারী মনে করে।"
            },
            {
                "eng": "English stories help him learn grammar rules easily.",
                "bng": "ইংরেজি গল্প তাকে সহজেই গ্রামার নিয়ম শিখতে সাহায্য করে।"
            },
            {
                "eng": "He plans to practice speaking every day.",
                "bng": "সে প্রতিদিন ইংরেজিতে কথা বলার অনুশীলন করার পরিকল্পনা করে।"
            }
        ],
        "vocabulary": [
            {
                "word": "wants",
                "bangla": "চায়",
                "partOfSpeech": "verb"
            },
            {
                "word": "clean",
                "bangla": "পরিষ্কার",
                "partOfSpeech": "adjective"
            },
            {
                "word": "interesting",
                "bangla": "আকর্ষণীয়",
                "partOfSpeech": "adjective"
            },
            {
                "word": "easily",
                "bangla": "সহজেই",
                "partOfSpeech": "adverb"
            },
            {
                "word": "practice",
                "bangla": "অনুশীলন",
                "partOfSpeech": "verb"
            }
        ],
        "questions": [
            {
                "q": "What does Rahim want to read about?",
                "options": [
                    "Looking at the Stars",
                    "A movie",
                    "A song",
                    "A letter"
                ],
                "answer": "Looking at the Stars"
            },
            {
                "q": "How does he sit down?",
                "options": [
                    "With a heavy heart",
                    "With a clean mind",
                    "Angry",
                    "Tired"
                ],
                "answer": "With a clean mind"
            },
            {
                "q": "What does he think of the topic?",
                "options": [
                    "Boring",
                    "Too long",
                    "Interesting and useful",
                    "Difficult"
                ],
                "answer": "Interesting and useful"
            },
            {
                "q": "What helps him learn grammar rules easily?",
                "options": [
                    "English stories",
                    "Games",
                    "TV shows",
                    "Radio"
                ],
                "answer": "English stories"
            }
        ],
        "summary": {
            "takeaways": [
                "সহজ ইংরেজি বাক্য গঠন করার দক্ষতা অর্জন।",
                "নতুন শব্দ ও প্রোনাউন্সিয়েশন প্র্যাকটিস করার সুবিধা।"
            ],
            "realLifeUsage": [
                {
                    "context": "দৈনন্দিন অভ্যাস প্রকাশ করতে:",
                    "example": "I read a story about looking at the stars to improve my English."
                }
            ]
        }
    },
    {
        "id": "s23",
        "title": "The Ice Cream Shop",
        "subtitle": "আইসক্রিমের দোকান",
        "level": "Beginner",
        "levelColor": "emerald",
        "topic": "Leisure",
        "learningObjectives": [
            "Comparatives: sweeter, bigger",
            "Food vocabulary"
        ],
        "grammarFocus": [
            "Comparatives",
            "Food Vocab"
        ],
        "grammarTeach": {
            "structure": "Present Simple or Past Simple",
            "formula": "Subject + Verb(V1/V2) + Object",
            "explanation": "এই গল্পে সাধারণ বর্তমান বা অতীতের রূপ ব্যবহার করে ইংরেজি বাক্য গঠন শেখানো হয়েছে।",
            "examples": [
                {
                    "eng": "We love this place.",
                    "bng": "আমরা এই জায়গাটি ভালোবাসি।"
                },
                {
                    "eng": "She spoke to me.",
                    "bng": "সে আমার সাথে কথা বলেছিল।"
                }
            ]
        },
        "sentences": [
            {
                "eng": "Today, Rahim wants to read about the ice cream shop.",
                "bng": "আজ রহিম আইসক্রিমের দোকান সম্পর্কে পড়তে চায়।"
            },
            {
                "eng": "He sits down with a clean mind.",
                "bng": "সে একটি পরিষ্কার মন নিয়ে বসে পড়ে।"
            },
            {
                "eng": "He finds the topic very interesting and useful.",
                "bng": "সে বিষয়টিকে খুবই আকর্ষণীয় এবং দরকারী মনে করে।"
            },
            {
                "eng": "English stories help him learn grammar rules easily.",
                "bng": "ইংরেজি গল্প তাকে সহজেই গ্রামার নিয়ম শিখতে সাহায্য করে।"
            },
            {
                "eng": "He plans to practice speaking every day.",
                "bng": "সে প্রতিদিন ইংরেজিতে কথা বলার অনুশীলন করার পরিকল্পনা করে।"
            }
        ],
        "vocabulary": [
            {
                "word": "wants",
                "bangla": "চায়",
                "partOfSpeech": "verb"
            },
            {
                "word": "clean",
                "bangla": "পরিষ্কার",
                "partOfSpeech": "adjective"
            },
            {
                "word": "interesting",
                "bangla": "আকর্ষণীয়",
                "partOfSpeech": "adjective"
            },
            {
                "word": "easily",
                "bangla": "সহজেই",
                "partOfSpeech": "adverb"
            },
            {
                "word": "practice",
                "bangla": "অনুশীলন",
                "partOfSpeech": "verb"
            }
        ],
        "questions": [
            {
                "q": "What does Rahim want to read about?",
                "options": [
                    "The Ice Cream Shop",
                    "A movie",
                    "A song",
                    "A letter"
                ],
                "answer": "The Ice Cream Shop"
            },
            {
                "q": "How does he sit down?",
                "options": [
                    "With a heavy heart",
                    "With a clean mind",
                    "Angry",
                    "Tired"
                ],
                "answer": "With a clean mind"
            },
            {
                "q": "What does he think of the topic?",
                "options": [
                    "Boring",
                    "Too long",
                    "Interesting and useful",
                    "Difficult"
                ],
                "answer": "Interesting and useful"
            },
            {
                "q": "What helps him learn grammar rules easily?",
                "options": [
                    "English stories",
                    "Games",
                    "TV shows",
                    "Radio"
                ],
                "answer": "English stories"
            }
        ],
        "summary": {
            "takeaways": [
                "সহজ ইংরেজি বাক্য গঠন করার দক্ষতা অর্জন।",
                "নতুন শব্দ ও প্রোনাউন্সিয়েশন প্র্যাকটিস করার সুবিধা।"
            ],
            "realLifeUsage": [
                {
                    "context": "দৈনন্দিন অভ্যাস প্রকাশ করতে:",
                    "example": "I read a story about the ice cream shop to improve my English."
                }
            ]
        }
    },
    {
        "id": "s24",
        "title": "A Day on the Farm",
        "subtitle": "খামারে একদিন",
        "level": "Beginner",
        "levelColor": "emerald",
        "topic": "Leisure",
        "learningObjectives": [
            "Subject-verb agreement with singulars",
            "Farm vocabulary"
        ],
        "grammarFocus": [
            "Subject-Verb Agreement",
            "Farm Vocab"
        ],
        "grammarTeach": {
            "structure": "Present Simple or Past Simple",
            "formula": "Subject + Verb(V1/V2) + Object",
            "explanation": "এই গল্পে সাধারণ বর্তমান বা অতীতের রূপ ব্যবহার করে ইংরেজি বাক্য গঠন শেখানো হয়েছে।",
            "examples": [
                {
                    "eng": "We love this place.",
                    "bng": "আমরা এই জায়গাটি ভালোবাসি।"
                },
                {
                    "eng": "She spoke to me.",
                    "bng": "সে আমার সাথে কথা বলেছিল।"
                }
            ]
        },
        "sentences": [
            {
                "eng": "Today, Rahim wants to read about a day on the farm.",
                "bng": "আজ রহিম খামারে একদিন সম্পর্কে পড়তে চায়।"
            },
            {
                "eng": "He sits down with a clean mind.",
                "bng": "সে একটি পরিষ্কার মন নিয়ে বসে পড়ে।"
            },
            {
                "eng": "He finds the topic very interesting and useful.",
                "bng": "সে বিষয়টিকে খুবই আকর্ষণীয় এবং দরকারী মনে করে।"
            },
            {
                "eng": "English stories help him learn grammar rules easily.",
                "bng": "ইংরেজি গল্প তাকে সহজেই গ্রামার নিয়ম শিখতে সাহায্য করে।"
            },
            {
                "eng": "He plans to practice speaking every day.",
                "bng": "সে প্রতিদিন ইংরেজিতে কথা বলার অনুশীলন করার পরিকল্পনা করে।"
            }
        ],
        "vocabulary": [
            {
                "word": "wants",
                "bangla": "চায়",
                "partOfSpeech": "verb"
            },
            {
                "word": "clean",
                "bangla": "পরিষ্কার",
                "partOfSpeech": "adjective"
            },
            {
                "word": "interesting",
                "bangla": "আকর্ষণীয়",
                "partOfSpeech": "adjective"
            },
            {
                "word": "easily",
                "bangla": "সহজেই",
                "partOfSpeech": "adverb"
            },
            {
                "word": "practice",
                "bangla": "অনুশীলন",
                "partOfSpeech": "verb"
            }
        ],
        "questions": [
            {
                "q": "What does Rahim want to read about?",
                "options": [
                    "A Day on the Farm",
                    "A movie",
                    "A song",
                    "A letter"
                ],
                "answer": "A Day on the Farm"
            },
            {
                "q": "How does he sit down?",
                "options": [
                    "With a heavy heart",
                    "With a clean mind",
                    "Angry",
                    "Tired"
                ],
                "answer": "With a clean mind"
            },
            {
                "q": "What does he think of the topic?",
                "options": [
                    "Boring",
                    "Too long",
                    "Interesting and useful",
                    "Difficult"
                ],
                "answer": "Interesting and useful"
            },
            {
                "q": "What helps him learn grammar rules easily?",
                "options": [
                    "English stories",
                    "Games",
                    "TV shows",
                    "Radio"
                ],
                "answer": "English stories"
            }
        ],
        "summary": {
            "takeaways": [
                "সহজ ইংরেজি বাক্য গঠন করার দক্ষতা অর্জন।",
                "নতুন শব্দ ও প্রোনাউন্সিয়েশন প্র্যাকটিস করার সুবিধা।"
            ],
            "realLifeUsage": [
                {
                    "context": "দৈনন্দিন অভ্যাস প্রকাশ করতে:",
                    "example": "I read a story about a day on the farm to improve my English."
                }
            ]
        }
    },
    {
        "id": "s25",
        "title": "The Lost Key",
        "subtitle": "হারানো চাবি",
        "level": "Beginner",
        "levelColor": "emerald",
        "topic": "Daily Life",
        "learningObjectives": [
            "Past simple negative: did not find",
            "Problem vocabulary"
        ],
        "grammarFocus": [
            "Past Simple Negative",
            "Problem Vocab"
        ],
        "grammarTeach": {
            "structure": "Present Simple or Past Simple",
            "formula": "Subject + Verb(V1/V2) + Object",
            "explanation": "এই গল্পে সাধারণ বর্তমান বা অতীতের রূপ ব্যবহার করে ইংরেজি বাক্য গঠন শেখানো হয়েছে।",
            "examples": [
                {
                    "eng": "We love this place.",
                    "bng": "আমরা এই জায়গাটি ভালোবাসি।"
                },
                {
                    "eng": "She spoke to me.",
                    "bng": "সে আমার সাথে কথা বলেছিল।"
                }
            ]
        },
        "sentences": [
            {
                "eng": "Today, Rahim wants to read about the lost key.",
                "bng": "আজ রহিম হারানো চাবি সম্পর্কে পড়তে চায়।"
            },
            {
                "eng": "He sits down with a clean mind.",
                "bng": "সে একটি পরিষ্কার মন নিয়ে বসে পড়ে।"
            },
            {
                "eng": "He finds the topic very interesting and useful.",
                "bng": "সে বিষয়টিকে খুবই আকর্ষণীয় এবং দরকারী মনে করে।"
            },
            {
                "eng": "English stories help him learn grammar rules easily.",
                "bng": "ইংরেজি গল্প তাকে সহজেই গ্রামার নিয়ম শিখতে সাহায্য করে।"
            },
            {
                "eng": "He plans to practice speaking every day.",
                "bng": "সে প্রতিদিন ইংরেজিতে কথা বলার অনুশীলন করার পরিকল্পনা করে।"
            }
        ],
        "vocabulary": [
            {
                "word": "wants",
                "bangla": "চায়",
                "partOfSpeech": "verb"
            },
            {
                "word": "clean",
                "bangla": "পরিষ্কার",
                "partOfSpeech": "adjective"
            },
            {
                "word": "interesting",
                "bangla": "আকর্ষণীয়",
                "partOfSpeech": "adjective"
            },
            {
                "word": "easily",
                "bangla": "সহজেই",
                "partOfSpeech": "adverb"
            },
            {
                "word": "practice",
                "bangla": "অনুশীলন",
                "partOfSpeech": "verb"
            }
        ],
        "questions": [
            {
                "q": "What does Rahim want to read about?",
                "options": [
                    "The Lost Key",
                    "A movie",
                    "A song",
                    "A letter"
                ],
                "answer": "The Lost Key"
            },
            {
                "q": "How does he sit down?",
                "options": [
                    "With a heavy heart",
                    "With a clean mind",
                    "Angry",
                    "Tired"
                ],
                "answer": "With a clean mind"
            },
            {
                "q": "What does he think of the topic?",
                "options": [
                    "Boring",
                    "Too long",
                    "Interesting and useful",
                    "Difficult"
                ],
                "answer": "Interesting and useful"
            },
            {
                "q": "What helps him learn grammar rules easily?",
                "options": [
                    "English stories",
                    "Games",
                    "TV shows",
                    "Radio"
                ],
                "answer": "English stories"
            }
        ],
        "summary": {
            "takeaways": [
                "সহজ ইংরেজি বাক্য গঠন করার দক্ষতা অর্জন।",
                "নতুন শব্দ ও প্রোনাউন্সিয়েশন প্র্যাকটিস করার সুবিধা।"
            ],
            "realLifeUsage": [
                {
                    "context": "দৈনন্দিন অভ্যাস প্রকাশ করতে:",
                    "example": "I read a story about the lost key to improve my English."
                }
            ]
        }
    },
    {
        "id": "s26",
        "title": "Learning to Swim",
        "subtitle": "সাঁতার শেখা",
        "level": "Beginner",
        "levelColor": "emerald",
        "topic": "Sports",
        "learningObjectives": [
            "Present perfect: has learned",
            "Sports vocabulary"
        ],
        "grammarFocus": [
            "Present Perfect",
            "Sports Vocab"
        ],
        "grammarTeach": {
            "structure": "Present Simple or Past Simple",
            "formula": "Subject + Verb(V1/V2) + Object",
            "explanation": "এই গল্পে সাধারণ বর্তমান বা অতীতের রূপ ব্যবহার করে ইংরেজি বাক্য গঠন শেখানো হয়েছে।",
            "examples": [
                {
                    "eng": "We love this place.",
                    "bng": "আমরা এই জায়গাটি ভালোবাসি।"
                },
                {
                    "eng": "She spoke to me.",
                    "bng": "সে আমার সাথে কথা বলেছিল।"
                }
            ]
        },
        "sentences": [
            {
                "eng": "Today, Rahim wants to read about learning to swim.",
                "bng": "আজ রহিম সাঁতার শেখা সম্পর্কে পড়তে চায়।"
            },
            {
                "eng": "He sits down with a clean mind.",
                "bng": "সে একটি পরিষ্কার মন নিয়ে বসে পড়ে।"
            },
            {
                "eng": "He finds the topic very interesting and useful.",
                "bng": "সে বিষয়টিকে খুবই আকর্ষণীয় এবং দরকারী মনে করে।"
            },
            {
                "eng": "English stories help him learn grammar rules easily.",
                "bng": "ইংরেজি গল্প তাকে সহজেই গ্রামার নিয়ম শিখতে সাহায্য করে।"
            },
            {
                "eng": "He plans to practice speaking every day.",
                "bng": "সে প্রতিদিন ইংরেজিতে কথা বলার অনুশীলন করার পরিকল্পনা করে।"
            }
        ],
        "vocabulary": [
            {
                "word": "wants",
                "bangla": "চায়",
                "partOfSpeech": "verb"
            },
            {
                "word": "clean",
                "bangla": "পরিষ্কার",
                "partOfSpeech": "adjective"
            },
            {
                "word": "interesting",
                "bangla": "আকর্ষণীয়",
                "partOfSpeech": "adjective"
            },
            {
                "word": "easily",
                "bangla": "সহজেই",
                "partOfSpeech": "adverb"
            },
            {
                "word": "practice",
                "bangla": "অনুশীলন",
                "partOfSpeech": "verb"
            }
        ],
        "questions": [
            {
                "q": "What does Rahim want to read about?",
                "options": [
                    "Learning to Swim",
                    "A movie",
                    "A song",
                    "A letter"
                ],
                "answer": "Learning to Swim"
            },
            {
                "q": "How does he sit down?",
                "options": [
                    "With a heavy heart",
                    "With a clean mind",
                    "Angry",
                    "Tired"
                ],
                "answer": "With a clean mind"
            },
            {
                "q": "What does he think of the topic?",
                "options": [
                    "Boring",
                    "Too long",
                    "Interesting and useful",
                    "Difficult"
                ],
                "answer": "Interesting and useful"
            },
            {
                "q": "What helps him learn grammar rules easily?",
                "options": [
                    "English stories",
                    "Games",
                    "TV shows",
                    "Radio"
                ],
                "answer": "English stories"
            }
        ],
        "summary": {
            "takeaways": [
                "সহজ ইংরেজি বাক্য গঠন করার দক্ষতা অর্জন।",
                "নতুন শব্দ ও প্রোনাউন্সিয়েশন প্র্যাকটিস করার সুবিধা।"
            ],
            "realLifeUsage": [
                {
                    "context": "দৈনন্দিন অভ্যাস প্রকাশ করতে:",
                    "example": "I read a story about learning to swim to improve my English."
                }
            ]
        }
    },
    {
        "id": "s27",
        "title": "A Birthday Party",
        "subtitle": "জন্মদিনের উৎসব",
        "level": "Beginner",
        "levelColor": "emerald",
        "topic": "Society",
        "learningObjectives": [
            "Adverbs of time: yesterday, today",
            "Social vocabulary"
        ],
        "grammarFocus": [
            "Adverbs of Time",
            "Social Vocab"
        ],
        "grammarTeach": {
            "structure": "Present Simple or Past Simple",
            "formula": "Subject + Verb(V1/V2) + Object",
            "explanation": "এই গল্পে সাধারণ বর্তমান বা অতীতের রূপ ব্যবহার করে ইংরেজি বাক্য গঠন শেখানো হয়েছে।",
            "examples": [
                {
                    "eng": "We love this place.",
                    "bng": "আমরা এই জায়গাটি ভালোবাসি।"
                },
                {
                    "eng": "She spoke to me.",
                    "bng": "সে আমার সাথে কথা বলেছিল।"
                }
            ]
        },
        "sentences": [
            {
                "eng": "Today, Rahim wants to read about a birthday party.",
                "bng": "আজ রহিম জন্মদিনের উৎসব সম্পর্কে পড়তে চায়।"
            },
            {
                "eng": "He sits down with a clean mind.",
                "bng": "সে একটি পরিষ্কার মন নিয়ে বসে পড়ে।"
            },
            {
                "eng": "He finds the topic very interesting and useful.",
                "bng": "সে বিষয়টিকে খুবই আকর্ষণীয় এবং দরকারী মনে করে।"
            },
            {
                "eng": "English stories help him learn grammar rules easily.",
                "bng": "ইংরেজি গল্প তাকে সহজেই গ্রামার নিয়ম শিখতে সাহায্য করে।"
            },
            {
                "eng": "He plans to practice speaking every day.",
                "bng": "সে প্রতিদিন ইংরেজিতে কথা বলার অনুশীলন করার পরিকল্পনা করে।"
            }
        ],
        "vocabulary": [
            {
                "word": "wants",
                "bangla": "চায়",
                "partOfSpeech": "verb"
            },
            {
                "word": "clean",
                "bangla": "পরিষ্কার",
                "partOfSpeech": "adjective"
            },
            {
                "word": "interesting",
                "bangla": "আকর্ষণীয়",
                "partOfSpeech": "adjective"
            },
            {
                "word": "easily",
                "bangla": "সহজেই",
                "partOfSpeech": "adverb"
            },
            {
                "word": "practice",
                "bangla": "অনুশীলন",
                "partOfSpeech": "verb"
            }
        ],
        "questions": [
            {
                "q": "What does Rahim want to read about?",
                "options": [
                    "A Birthday Party",
                    "A movie",
                    "A song",
                    "A letter"
                ],
                "answer": "A Birthday Party"
            },
            {
                "q": "How does he sit down?",
                "options": [
                    "With a heavy heart",
                    "With a clean mind",
                    "Angry",
                    "Tired"
                ],
                "answer": "With a clean mind"
            },
            {
                "q": "What does he think of the topic?",
                "options": [
                    "Boring",
                    "Too long",
                    "Interesting and useful",
                    "Difficult"
                ],
                "answer": "Interesting and useful"
            },
            {
                "q": "What helps him learn grammar rules easily?",
                "options": [
                    "English stories",
                    "Games",
                    "TV shows",
                    "Radio"
                ],
                "answer": "English stories"
            }
        ],
        "summary": {
            "takeaways": [
                "সহজ ইংরেজি বাক্য গঠন করার দক্ষতা অর্জন।",
                "নতুন শব্দ ও প্রোনাউন্সিয়েশন প্র্যাকটিস করার সুবিধা।"
            ],
            "realLifeUsage": [
                {
                    "context": "দৈনন্দিন অভ্যাস প্রকাশ করতে:",
                    "example": "I read a story about a birthday party to improve my English."
                }
            ]
        }
    },
    {
        "id": "s28",
        "title": "The Fruit Shop",
        "subtitle": "ফলের দোকান",
        "level": "Beginner",
        "levelColor": "emerald",
        "topic": "Daily Life",
        "learningObjectives": [
            "Quantifiers: some, many, few",
            "Food vocabulary"
        ],
        "grammarFocus": [
            "Quantifiers",
            "Food Vocab"
        ],
        "grammarTeach": {
            "structure": "Present Simple or Past Simple",
            "formula": "Subject + Verb(V1/V2) + Object",
            "explanation": "এই গল্পে সাধারণ বর্তমান বা অতীতের রূপ ব্যবহার করে ইংরেজি বাক্য গঠন শেখানো হয়েছে।",
            "examples": [
                {
                    "eng": "We love this place.",
                    "bng": "আমরা এই জায়গাটি ভালোবাসি।"
                },
                {
                    "eng": "She spoke to me.",
                    "bng": "সে আমার সাথে কথা বলেছিল।"
                }
            ]
        },
        "sentences": [
            {
                "eng": "Today, Rahim wants to read about the fruit shop.",
                "bng": "আজ রহিম ফলের দোকান সম্পর্কে পড়তে চায়।"
            },
            {
                "eng": "He sits down with a clean mind.",
                "bng": "সে একটি পরিষ্কার মন নিয়ে বসে পড়ে।"
            },
            {
                "eng": "He finds the topic very interesting and useful.",
                "bng": "সে বিষয়টিকে খুবই আকর্ষণীয় এবং দরকারী মনে করে।"
            },
            {
                "eng": "English stories help him learn grammar rules easily.",
                "bng": "ইংরেজি গল্প তাকে সহজেই গ্রামার নিয়ম শিখতে সাহায্য করে।"
            },
            {
                "eng": "He plans to practice speaking every day.",
                "bng": "সে প্রতিদিন ইংরেজিতে কথা বলার অনুশীলন করার পরিকল্পনা করে।"
            }
        ],
        "vocabulary": [
            {
                "word": "wants",
                "bangla": "চায়",
                "partOfSpeech": "verb"
            },
            {
                "word": "clean",
                "bangla": "পরিষ্কার",
                "partOfSpeech": "adjective"
            },
            {
                "word": "interesting",
                "bangla": "আকর্ষণীয়",
                "partOfSpeech": "adjective"
            },
            {
                "word": "easily",
                "bangla": "সহজেই",
                "partOfSpeech": "adverb"
            },
            {
                "word": "practice",
                "bangla": "অনুশীলন",
                "partOfSpeech": "verb"
            }
        ],
        "questions": [
            {
                "q": "What does Rahim want to read about?",
                "options": [
                    "The Fruit Shop",
                    "A movie",
                    "A song",
                    "A letter"
                ],
                "answer": "The Fruit Shop"
            },
            {
                "q": "How does he sit down?",
                "options": [
                    "With a heavy heart",
                    "With a clean mind",
                    "Angry",
                    "Tired"
                ],
                "answer": "With a clean mind"
            },
            {
                "q": "What does he think of the topic?",
                "options": [
                    "Boring",
                    "Too long",
                    "Interesting and useful",
                    "Difficult"
                ],
                "answer": "Interesting and useful"
            },
            {
                "q": "What helps him learn grammar rules easily?",
                "options": [
                    "English stories",
                    "Games",
                    "TV shows",
                    "Radio"
                ],
                "answer": "English stories"
            }
        ],
        "summary": {
            "takeaways": [
                "সহজ ইংরেজি বাক্য গঠন করার দক্ষতা অর্জন।",
                "নতুন শব্দ ও প্রোনাউন্সিয়েশন প্র্যাকটিস করার সুবিধা।"
            ],
            "realLifeUsage": [
                {
                    "context": "দৈনন্দিন অভ্যাস প্রকাশ করতে:",
                    "example": "I read a story about the fruit shop to improve my English."
                }
            ]
        }
    },
    {
        "id": "s29",
        "title": "A Train Journey",
        "subtitle": "ট্রেন ভ্রমণ",
        "level": "Beginner",
        "levelColor": "emerald",
        "topic": "Travel",
        "learningObjectives": [
            "Tense transition: past to present",
            "Travel vocabulary"
        ],
        "grammarFocus": [
            "Tense Transition",
            "Travel Vocab"
        ],
        "grammarTeach": {
            "structure": "Present Simple or Past Simple",
            "formula": "Subject + Verb(V1/V2) + Object",
            "explanation": "এই গল্পে সাধারণ বর্তমান বা অতীতের রূপ ব্যবহার করে ইংরেজি বাক্য গঠন শেখানো হয়েছে।",
            "examples": [
                {
                    "eng": "We love this place.",
                    "bng": "আমরা এই জায়গাটি ভালোবাসি।"
                },
                {
                    "eng": "She spoke to me.",
                    "bng": "সে আমার সাথে কথা বলেছিল।"
                }
            ]
        },
        "sentences": [
            {
                "eng": "Today, Rahim wants to read about a train journey.",
                "bng": "আজ রহিম ট্রেন ভ্রমণ সম্পর্কে পড়তে চায়।"
            },
            {
                "eng": "He sits down with a clean mind.",
                "bng": "সে একটি পরিষ্কার মন নিয়ে বসে পড়ে।"
            },
            {
                "eng": "He finds the topic very interesting and useful.",
                "bng": "সে বিষয়টিকে খুবই আকর্ষণীয় এবং দরকারী মনে করে।"
            },
            {
                "eng": "English stories help him learn grammar rules easily.",
                "bng": "ইংরেজি গল্প তাকে সহজেই গ্রামার নিয়ম শিখতে সাহায্য করে।"
            },
            {
                "eng": "He plans to practice speaking every day.",
                "bng": "সে প্রতিদিন ইংরেজিতে কথা বলার অনুশীলন করার পরিকল্পনা করে।"
            }
        ],
        "vocabulary": [
            {
                "word": "wants",
                "bangla": "চায়",
                "partOfSpeech": "verb"
            },
            {
                "word": "clean",
                "bangla": "পরিষ্কার",
                "partOfSpeech": "adjective"
            },
            {
                "word": "interesting",
                "bangla": "আকর্ষণীয়",
                "partOfSpeech": "adjective"
            },
            {
                "word": "easily",
                "bangla": "সহজেই",
                "partOfSpeech": "adverb"
            },
            {
                "word": "practice",
                "bangla": "অনুশীলন",
                "partOfSpeech": "verb"
            }
        ],
        "questions": [
            {
                "q": "What does Rahim want to read about?",
                "options": [
                    "A Train Journey",
                    "A movie",
                    "A song",
                    "A letter"
                ],
                "answer": "A Train Journey"
            },
            {
                "q": "How does he sit down?",
                "options": [
                    "With a heavy heart",
                    "With a clean mind",
                    "Angry",
                    "Tired"
                ],
                "answer": "With a clean mind"
            },
            {
                "q": "What does he think of the topic?",
                "options": [
                    "Boring",
                    "Too long",
                    "Interesting and useful",
                    "Difficult"
                ],
                "answer": "Interesting and useful"
            },
            {
                "q": "What helps him learn grammar rules easily?",
                "options": [
                    "English stories",
                    "Games",
                    "TV shows",
                    "Radio"
                ],
                "answer": "English stories"
            }
        ],
        "summary": {
            "takeaways": [
                "সহজ ইংরেজি বাক্য গঠন করার দক্ষতা অর্জন।",
                "নতুন শব্দ ও প্রোনাউন্সিয়েশন প্র্যাকটিস করার সুবিধা।"
            ],
            "realLifeUsage": [
                {
                    "context": "দৈনন্দিন অভ্যাস প্রকাশ করতে:",
                    "example": "I read a story about a train journey to improve my English."
                }
            ]
        }
    },
    {
        "id": "s30",
        "title": "The Smart Dog",
        "subtitle": "বুদ্ধিমান কুকুর",
        "level": "Beginner",
        "levelColor": "emerald",
        "topic": "Animals",
        "learningObjectives": [
            "Pronoun consistency",
            "Animal vocabulary"
        ],
        "grammarFocus": [
            "Pronouns",
            "Animal Vocab"
        ],
        "grammarTeach": {
            "structure": "Present Simple or Past Simple",
            "formula": "Subject + Verb(V1/V2) + Object",
            "explanation": "এই গল্পে সাধারণ বর্তমান বা অতীতের রূপ ব্যবহার করে ইংরেজি বাক্য গঠন শেখানো হয়েছে।",
            "examples": [
                {
                    "eng": "We love this place.",
                    "bng": "আমরা এই জায়গাটি ভালোবাসি।"
                },
                {
                    "eng": "She spoke to me.",
                    "bng": "সে আমার সাথে কথা বলেছিল।"
                }
            ]
        },
        "sentences": [
            {
                "eng": "Today, Rahim wants to read about the smart dog.",
                "bng": "আজ রহিম বুদ্ধিমান কুকুর সম্পর্কে পড়তে চায়।"
            },
            {
                "eng": "He sits down with a clean mind.",
                "bng": "সে একটি পরিষ্কার মন নিয়ে বসে পড়ে।"
            },
            {
                "eng": "He finds the topic very interesting and useful.",
                "bng": "সে বিষয়টিকে খুবই আকর্ষণীয় এবং দরকারী মনে করে।"
            },
            {
                "eng": "English stories help him learn grammar rules easily.",
                "bng": "ইংরেজি গল্প তাকে সহজেই গ্রামার নিয়ম শিখতে সাহায্য করে।"
            },
            {
                "eng": "He plans to practice speaking every day.",
                "bng": "সে প্রতিদিন ইংরেজিতে কথা বলার অনুশীলন করার পরিকল্পনা করে।"
            }
        ],
        "vocabulary": [
            {
                "word": "wants",
                "bangla": "চায়",
                "partOfSpeech": "verb"
            },
            {
                "word": "clean",
                "bangla": "পরিষ্কার",
                "partOfSpeech": "adjective"
            },
            {
                "word": "interesting",
                "bangla": "আকর্ষণীয়",
                "partOfSpeech": "adjective"
            },
            {
                "word": "easily",
                "bangla": "সহজেই",
                "partOfSpeech": "adverb"
            },
            {
                "word": "practice",
                "bangla": "অনুশীলন",
                "partOfSpeech": "verb"
            }
        ],
        "questions": [
            {
                "q": "What does Rahim want to read about?",
                "options": [
                    "The Smart Dog",
                    "A movie",
                    "A song",
                    "A letter"
                ],
                "answer": "The Smart Dog"
            },
            {
                "q": "How does he sit down?",
                "options": [
                    "With a heavy heart",
                    "With a clean mind",
                    "Angry",
                    "Tired"
                ],
                "answer": "With a clean mind"
            },
            {
                "q": "What does he think of the topic?",
                "options": [
                    "Boring",
                    "Too long",
                    "Interesting and useful",
                    "Difficult"
                ],
                "answer": "Interesting and useful"
            },
            {
                "q": "What helps him learn grammar rules easily?",
                "options": [
                    "English stories",
                    "Games",
                    "TV shows",
                    "Radio"
                ],
                "answer": "English stories"
            }
        ],
        "summary": {
            "takeaways": [
                "সহজ ইংরেজি বাক্য গঠন করার দক্ষতা অর্জন।",
                "নতুন শব্দ ও প্রোনাউন্সিয়েশন প্র্যাকটিস করার সুবিধা।"
            ],
            "realLifeUsage": [
                {
                    "context": "দৈনন্দিন অভ্যাস প্রকাশ করতে:",
                    "example": "I read a story about the smart dog to improve my English."
                }
            ]
        }
    },
    {
        "id": "s31",
        "title": "Buying a Pen",
        "subtitle": "কলম কেনা",
        "level": "Beginner",
        "levelColor": "emerald",
        "topic": "Daily Life",
        "learningObjectives": [
            "Polite requesting: can I have",
            "Shopping vocabulary"
        ],
        "grammarFocus": [
            "Requesting",
            "Shopping Vocab"
        ],
        "grammarTeach": {
            "structure": "Present Simple or Past Simple",
            "formula": "Subject + Verb(V1/V2) + Object",
            "explanation": "এই গল্পে সাধারণ বর্তমান বা অতীতের রূপ ব্যবহার করে ইংরেজি বাক্য গঠন শেখানো হয়েছে।",
            "examples": [
                {
                    "eng": "We love this place.",
                    "bng": "আমরা এই জায়গাটি ভালোবাসি।"
                },
                {
                    "eng": "She spoke to me.",
                    "bng": "সে আমার সাথে কথা বলেছিল।"
                }
            ]
        },
        "sentences": [
            {
                "eng": "Today, Rahim wants to read about buying a pen.",
                "bng": "আজ রহিম কলম কেনা সম্পর্কে পড়তে চায়।"
            },
            {
                "eng": "He sits down with a clean mind.",
                "bng": "সে একটি পরিষ্কার মন নিয়ে বসে পড়ে।"
            },
            {
                "eng": "He finds the topic very interesting and useful.",
                "bng": "সে বিষয়টিকে খুবই আকর্ষণীয় এবং দরকারী মনে করে।"
            },
            {
                "eng": "English stories help him learn grammar rules easily.",
                "bng": "ইংরেজি গল্প তাকে সহজেই গ্রামার নিয়ম শিখতে সাহায্য করে।"
            },
            {
                "eng": "He plans to practice speaking every day.",
                "bng": "সে প্রতিদিন ইংরেজিতে কথা বলার অনুশীলন করার পরিকল্পনা করে।"
            }
        ],
        "vocabulary": [
            {
                "word": "wants",
                "bangla": "চায়",
                "partOfSpeech": "verb"
            },
            {
                "word": "clean",
                "bangla": "পরিষ্কার",
                "partOfSpeech": "adjective"
            },
            {
                "word": "interesting",
                "bangla": "আকর্ষণীয়",
                "partOfSpeech": "adjective"
            },
            {
                "word": "easily",
                "bangla": "সহজেই",
                "partOfSpeech": "adverb"
            },
            {
                "word": "practice",
                "bangla": "অনুশীলন",
                "partOfSpeech": "verb"
            }
        ],
        "questions": [
            {
                "q": "What does Rahim want to read about?",
                "options": [
                    "Buying a Pen",
                    "A movie",
                    "A song",
                    "A letter"
                ],
                "answer": "Buying a Pen"
            },
            {
                "q": "How does he sit down?",
                "options": [
                    "With a heavy heart",
                    "With a clean mind",
                    "Angry",
                    "Tired"
                ],
                "answer": "With a clean mind"
            },
            {
                "q": "What does he think of the topic?",
                "options": [
                    "Boring",
                    "Too long",
                    "Interesting and useful",
                    "Difficult"
                ],
                "answer": "Interesting and useful"
            },
            {
                "q": "What helps him learn grammar rules easily?",
                "options": [
                    "English stories",
                    "Games",
                    "TV shows",
                    "Radio"
                ],
                "answer": "English stories"
            }
        ],
        "summary": {
            "takeaways": [
                "সহজ ইংরেজি বাক্য গঠন করার দক্ষতা অর্জন।",
                "নতুন শব্দ ও প্রোনাউন্সিয়েশন প্র্যাকটিস করার সুবিধা।"
            ],
            "realLifeUsage": [
                {
                    "context": "দৈনন্দিন অভ্যাস প্রকাশ করতে:",
                    "example": "I read a story about buying a pen to improve my English."
                }
            ]
        }
    },
    {
        "id": "s32",
        "title": "Watching a Cartoon",
        "subtitle": "কার্টুন দেখা",
        "level": "Beginner",
        "levelColor": "emerald",
        "topic": "Leisure",
        "learningObjectives": [
            "Tense usage for leisure",
            "Entertainment vocabulary"
        ],
        "grammarFocus": [
            "Present Simple",
            "Leisure Vocab"
        ],
        "grammarTeach": {
            "structure": "Present Simple or Past Simple",
            "formula": "Subject + Verb(V1/V2) + Object",
            "explanation": "এই গল্পে সাধারণ বর্তমান বা অতীতের রূপ ব্যবহার করে ইংরেজি বাক্য গঠন শেখানো হয়েছে।",
            "examples": [
                {
                    "eng": "We love this place.",
                    "bng": "আমরা এই জায়গাটি ভালোবাসি।"
                },
                {
                    "eng": "She spoke to me.",
                    "bng": "সে আমার সাথে কথা বলেছিল।"
                }
            ]
        },
        "sentences": [
            {
                "eng": "Today, Rahim wants to read about watching a cartoon.",
                "bng": "আজ রহিম কার্টুন দেখা সম্পর্কে পড়তে চায়।"
            },
            {
                "eng": "He sits down with a clean mind.",
                "bng": "সে একটি পরিষ্কার মন নিয়ে বসে পড়ে।"
            },
            {
                "eng": "He finds the topic very interesting and useful.",
                "bng": "সে বিষয়টিকে খুবই আকর্ষণীয় এবং দরকারী মনে করে।"
            },
            {
                "eng": "English stories help him learn grammar rules easily.",
                "bng": "ইংরেজি গল্প তাকে সহজেই গ্রামার নিয়ম শিখতে সাহায্য করে।"
            },
            {
                "eng": "He plans to practice speaking every day.",
                "bng": "সে প্রতিদিন ইংরেজিতে কথা বলার অনুশীলন করার পরিকল্পনা করে।"
            }
        ],
        "vocabulary": [
            {
                "word": "wants",
                "bangla": "চায়",
                "partOfSpeech": "verb"
            },
            {
                "word": "clean",
                "bangla": "পরিষ্কার",
                "partOfSpeech": "adjective"
            },
            {
                "word": "interesting",
                "bangla": "আকর্ষণীয়",
                "partOfSpeech": "adjective"
            },
            {
                "word": "easily",
                "bangla": "সহজেই",
                "partOfSpeech": "adverb"
            },
            {
                "word": "practice",
                "bangla": "অনুশীলন",
                "partOfSpeech": "verb"
            }
        ],
        "questions": [
            {
                "q": "What does Rahim want to read about?",
                "options": [
                    "Watching a Cartoon",
                    "A movie",
                    "A song",
                    "A letter"
                ],
                "answer": "Watching a Cartoon"
            },
            {
                "q": "How does he sit down?",
                "options": [
                    "With a heavy heart",
                    "With a clean mind",
                    "Angry",
                    "Tired"
                ],
                "answer": "With a clean mind"
            },
            {
                "q": "What does he think of the topic?",
                "options": [
                    "Boring",
                    "Too long",
                    "Interesting and useful",
                    "Difficult"
                ],
                "answer": "Interesting and useful"
            },
            {
                "q": "What helps him learn grammar rules easily?",
                "options": [
                    "English stories",
                    "Games",
                    "TV shows",
                    "Radio"
                ],
                "answer": "English stories"
            }
        ],
        "summary": {
            "takeaways": [
                "সহজ ইংরেজি বাক্য গঠন করার দক্ষতা অর্জন।",
                "নতুন শব্দ ও প্রোনাউন্সিয়েশন প্র্যাকটিস করার সুবিধা।"
            ],
            "realLifeUsage": [
                {
                    "context": "দৈনন্দিন অভ্যাস প্রকাশ করতে:",
                    "example": "I read a story about watching a cartoon to improve my English."
                }
            ]
        }
    },
    {
        "id": "s33",
        "title": "A Picnic in the Garden",
        "subtitle": "বাগানে পিকনিক",
        "level": "Beginner",
        "levelColor": "emerald",
        "topic": "Leisure",
        "learningObjectives": [
            "Plural subject agreements",
            "Social vocabulary"
        ],
        "grammarFocus": [
            "Subject-Verb Agreement",
            "Social Vocab"
        ],
        "grammarTeach": {
            "structure": "Present Simple or Past Simple",
            "formula": "Subject + Verb(V1/V2) + Object",
            "explanation": "এই গল্পে সাধারণ বর্তমান বা অতীতের রূপ ব্যবহার করে ইংরেজি বাক্য গঠন শেখানো হয়েছে।",
            "examples": [
                {
                    "eng": "We love this place.",
                    "bng": "আমরা এই জায়গাটি ভালোবাসি।"
                },
                {
                    "eng": "She spoke to me.",
                    "bng": "সে আমার সাথে কথা বলেছিল।"
                }
            ]
        },
        "sentences": [
            {
                "eng": "Today, Rahim wants to read about a picnic in the garden.",
                "bng": "আজ রহিম বাগানে পিকনিক সম্পর্কে পড়তে চায়।"
            },
            {
                "eng": "He sits down with a clean mind.",
                "bng": "সে একটি পরিষ্কার মন নিয়ে বসে পড়ে।"
            },
            {
                "eng": "He finds the topic very interesting and useful.",
                "bng": "সে বিষয়টিকে খুবই আকর্ষণীয় এবং দরকারী মনে করে।"
            },
            {
                "eng": "English stories help him learn grammar rules easily.",
                "bng": "ইংরেজি গল্প তাকে সহজেই গ্রামার নিয়ম শিখতে সাহায্য করে।"
            },
            {
                "eng": "He plans to practice speaking every day.",
                "bng": "সে প্রতিদিন ইংরেজিতে কথা বলার অনুশীলন করার পরিকল্পনা করে।"
            }
        ],
        "vocabulary": [
            {
                "word": "wants",
                "bangla": "চায়",
                "partOfSpeech": "verb"
            },
            {
                "word": "clean",
                "bangla": "পরিষ্কার",
                "partOfSpeech": "adjective"
            },
            {
                "word": "interesting",
                "bangla": "আকর্ষণীয়",
                "partOfSpeech": "adjective"
            },
            {
                "word": "easily",
                "bangla": "সহজেই",
                "partOfSpeech": "adverb"
            },
            {
                "word": "practice",
                "bangla": "অনুশীলন",
                "partOfSpeech": "verb"
            }
        ],
        "questions": [
            {
                "q": "What does Rahim want to read about?",
                "options": [
                    "A Picnic in the Garden",
                    "A movie",
                    "A song",
                    "A letter"
                ],
                "answer": "A Picnic in the Garden"
            },
            {
                "q": "How does he sit down?",
                "options": [
                    "With a heavy heart",
                    "With a clean mind",
                    "Angry",
                    "Tired"
                ],
                "answer": "With a clean mind"
            },
            {
                "q": "What does he think of the topic?",
                "options": [
                    "Boring",
                    "Too long",
                    "Interesting and useful",
                    "Difficult"
                ],
                "answer": "Interesting and useful"
            },
            {
                "q": "What helps him learn grammar rules easily?",
                "options": [
                    "English stories",
                    "Games",
                    "TV shows",
                    "Radio"
                ],
                "answer": "English stories"
            }
        ],
        "summary": {
            "takeaways": [
                "সহজ ইংরেজি বাক্য গঠন করার দক্ষতা অর্জন।",
                "নতুন শব্দ ও প্রোনাউন্সিয়েশন প্র্যাকটিস করার সুবিধা।"
            ],
            "realLifeUsage": [
                {
                    "context": "দৈনন্দিন অভ্যাস প্রকাশ করতে:",
                    "example": "I read a story about a picnic in the garden to improve my English."
                }
            ]
        }
    },
    {
        "id": "s34",
        "title": "The Golden Sun",
        "subtitle": "সোনালী সূর্য",
        "level": "Beginner",
        "levelColor": "emerald",
        "topic": "Nature",
        "learningObjectives": [
            "Using metaphor adjectives",
            "Nature vocabulary"
        ],
        "grammarFocus": [
            "Adjectives",
            "Nature Vocab"
        ],
        "grammarTeach": {
            "structure": "Present Simple or Past Simple",
            "formula": "Subject + Verb(V1/V2) + Object",
            "explanation": "এই গল্পে সাধারণ বর্তমান বা অতীতের রূপ ব্যবহার করে ইংরেজি বাক্য গঠন শেখানো হয়েছে।",
            "examples": [
                {
                    "eng": "We love this place.",
                    "bng": "আমরা এই জায়গাটি ভালোবাসি।"
                },
                {
                    "eng": "She spoke to me.",
                    "bng": "সে আমার সাথে কথা বলেছিল।"
                }
            ]
        },
        "sentences": [
            {
                "eng": "Today, Rahim wants to read about the golden sun.",
                "bng": "আজ রহিম সোনালী সূর্য সম্পর্কে পড়তে চায়।"
            },
            {
                "eng": "He sits down with a clean mind.",
                "bng": "সে একটি পরিষ্কার মন নিয়ে বসে পড়ে।"
            },
            {
                "eng": "He finds the topic very interesting and useful.",
                "bng": "সে বিষয়টিকে খুবই আকর্ষণীয় এবং দরকারী মনে করে।"
            },
            {
                "eng": "English stories help him learn grammar rules easily.",
                "bng": "ইংরেজি গল্প তাকে সহজেই গ্রামার নিয়ম শিখতে সাহায্য করে।"
            },
            {
                "eng": "He plans to practice speaking every day.",
                "bng": "সে প্রতিদিন ইংরেজিতে কথা বলার অনুশীলন করার পরিকল্পনা করে।"
            }
        ],
        "vocabulary": [
            {
                "word": "wants",
                "bangla": "চায়",
                "partOfSpeech": "verb"
            },
            {
                "word": "clean",
                "bangla": "পরিষ্কার",
                "partOfSpeech": "adjective"
            },
            {
                "word": "interesting",
                "bangla": "আকর্ষণীয়",
                "partOfSpeech": "adjective"
            },
            {
                "word": "easily",
                "bangla": "সহজেই",
                "partOfSpeech": "adverb"
            },
            {
                "word": "practice",
                "bangla": "অনুশীলন",
                "partOfSpeech": "verb"
            }
        ],
        "questions": [
            {
                "q": "What does Rahim want to read about?",
                "options": [
                    "The Golden Sun",
                    "A movie",
                    "A song",
                    "A letter"
                ],
                "answer": "The Golden Sun"
            },
            {
                "q": "How does he sit down?",
                "options": [
                    "With a heavy heart",
                    "With a clean mind",
                    "Angry",
                    "Tired"
                ],
                "answer": "With a clean mind"
            },
            {
                "q": "What does he think of the topic?",
                "options": [
                    "Boring",
                    "Too long",
                    "Interesting and useful",
                    "Difficult"
                ],
                "answer": "Interesting and useful"
            },
            {
                "q": "What helps him learn grammar rules easily?",
                "options": [
                    "English stories",
                    "Games",
                    "TV shows",
                    "Radio"
                ],
                "answer": "English stories"
            }
        ],
        "summary": {
            "takeaways": [
                "সহজ ইংরেজি বাক্য গঠন করার দক্ষতা অর্জন।",
                "নতুন শব্দ ও প্রোনাউন্সিয়েশন প্র্যাকটিস করার সুবিধা।"
            ],
            "realLifeUsage": [
                {
                    "context": "দৈনন্দিন অভ্যাস প্রকাশ করতে:",
                    "example": "I read a story about the golden sun to improve my English."
                }
            ]
        }
    },
    {
        "id": "s35",
        "title": "Helping Mother",
        "subtitle": "মাকে সাহায্য করা",
        "level": "Beginner",
        "levelColor": "emerald",
        "topic": "Daily Life",
        "learningObjectives": [
            "Imperative action verbs",
            "Family vocabulary"
        ],
        "grammarFocus": [
            "Imperatives",
            "Family Vocab"
        ],
        "grammarTeach": {
            "structure": "Present Simple or Past Simple",
            "formula": "Subject + Verb(V1/V2) + Object",
            "explanation": "এই গল্পে সাধারণ বর্তমান বা অতীতের রূপ ব্যবহার করে ইংরেজি বাক্য গঠন শেখানো হয়েছে।",
            "examples": [
                {
                    "eng": "We love this place.",
                    "bng": "আমরা এই জায়গাটি ভালোবাসি।"
                },
                {
                    "eng": "She spoke to me.",
                    "bng": "সে আমার সাথে কথা বলেছিল।"
                }
            ]
        },
        "sentences": [
            {
                "eng": "Today, Rahim wants to read about helping mother.",
                "bng": "আজ রহিম মাকে সাহায্য করা সম্পর্কে পড়তে চায়।"
            },
            {
                "eng": "He sits down with a clean mind.",
                "bng": "সে একটি পরিষ্কার মন নিয়ে বসে পড়ে।"
            },
            {
                "eng": "He finds the topic very interesting and useful.",
                "bng": "সে বিষয়টিকে খুবই আকর্ষণীয় এবং দরকারী মনে করে।"
            },
            {
                "eng": "English stories help him learn grammar rules easily.",
                "bng": "ইংরেজি গল্প তাকে সহজেই গ্রামার নিয়ম শিখতে সাহায্য করে।"
            },
            {
                "eng": "He plans to practice speaking every day.",
                "bng": "সে প্রতিদিন ইংরেজিতে কথা বলার অনুশীলন করার পরিকল্পনা করে।"
            }
        ],
        "vocabulary": [
            {
                "word": "wants",
                "bangla": "চায়",
                "partOfSpeech": "verb"
            },
            {
                "word": "clean",
                "bangla": "পরিষ্কার",
                "partOfSpeech": "adjective"
            },
            {
                "word": "interesting",
                "bangla": "আকর্ষণীয়",
                "partOfSpeech": "adjective"
            },
            {
                "word": "easily",
                "bangla": "সহজেই",
                "partOfSpeech": "adverb"
            },
            {
                "word": "practice",
                "bangla": "অনুশীলন",
                "partOfSpeech": "verb"
            }
        ],
        "questions": [
            {
                "q": "What does Rahim want to read about?",
                "options": [
                    "Helping Mother",
                    "A movie",
                    "A song",
                    "A letter"
                ],
                "answer": "Helping Mother"
            },
            {
                "q": "How does he sit down?",
                "options": [
                    "With a heavy heart",
                    "With a clean mind",
                    "Angry",
                    "Tired"
                ],
                "answer": "With a clean mind"
            },
            {
                "q": "What does he think of the topic?",
                "options": [
                    "Boring",
                    "Too long",
                    "Interesting and useful",
                    "Difficult"
                ],
                "answer": "Interesting and useful"
            },
            {
                "q": "What helps him learn grammar rules easily?",
                "options": [
                    "English stories",
                    "Games",
                    "TV shows",
                    "Radio"
                ],
                "answer": "English stories"
            }
        ],
        "summary": {
            "takeaways": [
                "সহজ ইংরেজি বাক্য গঠন করার দক্ষতা অর্জন।",
                "নতুন শব্দ ও প্রোনাউন্সিয়েশন প্র্যাকটিস করার সুবিধা।"
            ],
            "realLifeUsage": [
                {
                    "context": "দৈনন্দিন অভ্যাস প্রকাশ করতে:",
                    "example": "I read a story about helping mother to improve my English."
                }
            ]
        }
    },
    {
        "id": "s36",
        "title": "A Visit to the Park",
        "subtitle": "পার্ক পরিদর্শন",
        "level": "Beginner",
        "levelColor": "emerald",
        "topic": "Daily Life",
        "learningObjectives": [
            "Descriptive verbs",
            "Park vocabulary"
        ],
        "grammarFocus": [
            "Present Simple",
            "Park Vocab"
        ],
        "grammarTeach": {
            "structure": "Present Simple or Past Simple",
            "formula": "Subject + Verb(V1/V2) + Object",
            "explanation": "এই গল্পে সাধারণ বর্তমান বা অতীতের রূপ ব্যবহার করে ইংরেজি বাক্য গঠন শেখানো হয়েছে।",
            "examples": [
                {
                    "eng": "We love this place.",
                    "bng": "আমরা এই জায়গাটি ভালোবাসি।"
                },
                {
                    "eng": "She spoke to me.",
                    "bng": "সে আমার সাথে কথা বলেছিল।"
                }
            ]
        },
        "sentences": [
            {
                "eng": "Today, Rahim wants to read about a visit to the park.",
                "bng": "আজ রহিম পার্ক পরিদর্শন সম্পর্কে পড়তে চায়।"
            },
            {
                "eng": "He sits down with a clean mind.",
                "bng": "সে একটি পরিষ্কার মন নিয়ে বসে পড়ে।"
            },
            {
                "eng": "He finds the topic very interesting and useful.",
                "bng": "সে বিষয়টিকে খুবই আকর্ষণীয় এবং দরকারী মনে করে।"
            },
            {
                "eng": "English stories help him learn grammar rules easily.",
                "bng": "ইংরেজি গল্প তাকে সহজেই গ্রামার নিয়ম শিখতে সাহায্য করে।"
            },
            {
                "eng": "He plans to practice speaking every day.",
                "bng": "সে প্রতিদিন ইংরেজিতে কথা বলার অনুশীলন করার পরিকল্পনা করে।"
            }
        ],
        "vocabulary": [
            {
                "word": "wants",
                "bangla": "চায়",
                "partOfSpeech": "verb"
            },
            {
                "word": "clean",
                "bangla": "পরিষ্কার",
                "partOfSpeech": "adjective"
            },
            {
                "word": "interesting",
                "bangla": "আকর্ষণীয়",
                "partOfSpeech": "adjective"
            },
            {
                "word": "easily",
                "bangla": "সহজেই",
                "partOfSpeech": "adverb"
            },
            {
                "word": "practice",
                "bangla": "অনুশীলন",
                "partOfSpeech": "verb"
            }
        ],
        "questions": [
            {
                "q": "What does Rahim want to read about?",
                "options": [
                    "A Visit to the Park",
                    "A movie",
                    "A song",
                    "A letter"
                ],
                "answer": "A Visit to the Park"
            },
            {
                "q": "How does he sit down?",
                "options": [
                    "With a heavy heart",
                    "With a clean mind",
                    "Angry",
                    "Tired"
                ],
                "answer": "With a clean mind"
            },
            {
                "q": "What does he think of the topic?",
                "options": [
                    "Boring",
                    "Too long",
                    "Interesting and useful",
                    "Difficult"
                ],
                "answer": "Interesting and useful"
            },
            {
                "q": "What helps him learn grammar rules easily?",
                "options": [
                    "English stories",
                    "Games",
                    "TV shows",
                    "Radio"
                ],
                "answer": "English stories"
            }
        ],
        "summary": {
            "takeaways": [
                "সহজ ইংরেজি বাক্য গঠন করার দক্ষতা অর্জন।",
                "নতুন শব্দ ও প্রোনাউন্সিয়েশন প্র্যাকটিস করার সুবিধা।"
            ],
            "realLifeUsage": [
                {
                    "context": "দৈনন্দিন অভ্যাস প্রকাশ করতে:",
                    "example": "I read a story about a visit to the park to improve my English."
                }
            ]
        }
    },
    {
        "id": "s37",
        "title": "Learning Computer Typing",
        "subtitle": "টাইপিং শেখা",
        "level": "Beginner",
        "levelColor": "emerald",
        "topic": "Education",
        "learningObjectives": [
            "Adverbs of manner: quickly, slowly",
            "Tech vocabulary"
        ],
        "grammarFocus": [
            "Adverbs of Manner",
            "Tech Vocab"
        ],
        "grammarTeach": {
            "structure": "Present Simple or Past Simple",
            "formula": "Subject + Verb(V1/V2) + Object",
            "explanation": "এই গল্পে সাধারণ বর্তমান বা অতীতের রূপ ব্যবহার করে ইংরেজি বাক্য গঠন শেখানো হয়েছে।",
            "examples": [
                {
                    "eng": "We love this place.",
                    "bng": "আমরা এই জায়গাটি ভালোবাসি।"
                },
                {
                    "eng": "She spoke to me.",
                    "bng": "সে আমার সাথে কথা বলেছিল।"
                }
            ]
        },
        "sentences": [
            {
                "eng": "Today, Rahim wants to read about learning computer typing.",
                "bng": "আজ রহিম টাইপিং শেখা সম্পর্কে পড়তে চায়।"
            },
            {
                "eng": "He sits down with a clean mind.",
                "bng": "সে একটি পরিষ্কার মন নিয়ে বসে পড়ে।"
            },
            {
                "eng": "He finds the topic very interesting and useful.",
                "bng": "সে বিষয়টিকে খুবই আকর্ষণীয় এবং দরকারী মনে করে।"
            },
            {
                "eng": "English stories help him learn grammar rules easily.",
                "bng": "ইংরেজি গল্প তাকে সহজেই গ্রামার নিয়ম শিখতে সাহায্য করে।"
            },
            {
                "eng": "He plans to practice speaking every day.",
                "bng": "সে প্রতিদিন ইংরেজিতে কথা বলার অনুশীলন করার পরিকল্পনা করে।"
            }
        ],
        "vocabulary": [
            {
                "word": "wants",
                "bangla": "চায়",
                "partOfSpeech": "verb"
            },
            {
                "word": "clean",
                "bangla": "পরিষ্কার",
                "partOfSpeech": "adjective"
            },
            {
                "word": "interesting",
                "bangla": "আকর্ষণীয়",
                "partOfSpeech": "adjective"
            },
            {
                "word": "easily",
                "bangla": "সহজেই",
                "partOfSpeech": "adverb"
            },
            {
                "word": "practice",
                "bangla": "অনুশীলন",
                "partOfSpeech": "verb"
            }
        ],
        "questions": [
            {
                "q": "What does Rahim want to read about?",
                "options": [
                    "Learning Computer Typing",
                    "A movie",
                    "A song",
                    "A letter"
                ],
                "answer": "Learning Computer Typing"
            },
            {
                "q": "How does he sit down?",
                "options": [
                    "With a heavy heart",
                    "With a clean mind",
                    "Angry",
                    "Tired"
                ],
                "answer": "With a clean mind"
            },
            {
                "q": "What does he think of the topic?",
                "options": [
                    "Boring",
                    "Too long",
                    "Interesting and useful",
                    "Difficult"
                ],
                "answer": "Interesting and useful"
            },
            {
                "q": "What helps him learn grammar rules easily?",
                "options": [
                    "English stories",
                    "Games",
                    "TV shows",
                    "Radio"
                ],
                "answer": "English stories"
            }
        ],
        "summary": {
            "takeaways": [
                "সহজ ইংরেজি বাক্য গঠন করার দক্ষতা অর্জন।",
                "নতুন শব্দ ও প্রোনাউন্সিয়েশন প্র্যাকটিস করার সুবিধা।"
            ],
            "realLifeUsage": [
                {
                    "context": "দৈনন্দিন অভ্যাস প্রকাশ করতে:",
                    "example": "I read a story about learning computer typing to improve my English."
                }
            ]
        }
    },
    {
        "id": "s38",
        "title": "A Cold Winter Morning",
        "subtitle": "শীতের সকাল",
        "level": "Beginner",
        "levelColor": "emerald",
        "topic": "Nature",
        "learningObjectives": [
            "Winter adjectives",
            "Season vocabulary"
        ],
        "grammarFocus": [
            "Adjectives",
            "Season Vocab"
        ],
        "grammarTeach": {
            "structure": "Present Simple or Past Simple",
            "formula": "Subject + Verb(V1/V2) + Object",
            "explanation": "এই গল্পে সাধারণ বর্তমান বা অতীতের রূপ ব্যবহার করে ইংরেজি বাক্য গঠন শেখানো হয়েছে।",
            "examples": [
                {
                    "eng": "We love this place.",
                    "bng": "আমরা এই জায়গাটি ভালোবাসি।"
                },
                {
                    "eng": "She spoke to me.",
                    "bng": "সে আমার সাথে কথা বলেছিল।"
                }
            ]
        },
        "sentences": [
            {
                "eng": "Today, Rahim wants to read about a cold winter morning.",
                "bng": "আজ রহিম শীতের সকাল সম্পর্কে পড়তে চায়।"
            },
            {
                "eng": "He sits down with a clean mind.",
                "bng": "সে একটি পরিষ্কার মন নিয়ে বসে পড়ে।"
            },
            {
                "eng": "He finds the topic very interesting and useful.",
                "bng": "সে বিষয়টিকে খুবই আকর্ষণীয় এবং দরকারী মনে করে।"
            },
            {
                "eng": "English stories help him learn grammar rules easily.",
                "bng": "ইংরেজি গল্প তাকে সহজেই গ্রামার নিয়ম শিখতে সাহায্য করে।"
            },
            {
                "eng": "He plans to practice speaking every day.",
                "bng": "সে প্রতিদিন ইংরেজিতে কথা বলার অনুশীলন করার পরিকল্পনা করে।"
            }
        ],
        "vocabulary": [
            {
                "word": "wants",
                "bangla": "চায়",
                "partOfSpeech": "verb"
            },
            {
                "word": "clean",
                "bangla": "পরিষ্কার",
                "partOfSpeech": "adjective"
            },
            {
                "word": "interesting",
                "bangla": "আকর্ষণীয়",
                "partOfSpeech": "adjective"
            },
            {
                "word": "easily",
                "bangla": "সহজেই",
                "partOfSpeech": "adverb"
            },
            {
                "word": "practice",
                "bangla": "অনুশীলন",
                "partOfSpeech": "verb"
            }
        ],
        "questions": [
            {
                "q": "What does Rahim want to read about?",
                "options": [
                    "A Cold Winter Morning",
                    "A movie",
                    "A song",
                    "A letter"
                ],
                "answer": "A Cold Winter Morning"
            },
            {
                "q": "How does he sit down?",
                "options": [
                    "With a heavy heart",
                    "With a clean mind",
                    "Angry",
                    "Tired"
                ],
                "answer": "With a clean mind"
            },
            {
                "q": "What does he think of the topic?",
                "options": [
                    "Boring",
                    "Too long",
                    "Interesting and useful",
                    "Difficult"
                ],
                "answer": "Interesting and useful"
            },
            {
                "q": "What helps him learn grammar rules easily?",
                "options": [
                    "English stories",
                    "Games",
                    "TV shows",
                    "Radio"
                ],
                "answer": "English stories"
            }
        ],
        "summary": {
            "takeaways": [
                "সহজ ইংরেজি বাক্য গঠন করার দক্ষতা অর্জন।",
                "নতুন শব্দ ও প্রোনাউন্সিয়েশন প্র্যাকটিস করার সুবিধা।"
            ],
            "realLifeUsage": [
                {
                    "context": "দৈনন্দিন অভ্যাস প্রকাশ করতে:",
                    "example": "I read a story about a cold winter morning to improve my English."
                }
            ]
        }
    },
    {
        "id": "s39",
        "title": "The Sweet Mangoes",
        "subtitle": "মিষ্টি আম",
        "level": "Beginner",
        "levelColor": "emerald",
        "topic": "Food",
        "learningObjectives": [
            "Using singular and plural forms",
            "Fruit vocabulary"
        ],
        "grammarFocus": [
            "Singular/Plural Nouns",
            "Fruit Vocab"
        ],
        "grammarTeach": {
            "structure": "Present Simple or Past Simple",
            "formula": "Subject + Verb(V1/V2) + Object",
            "explanation": "এই গল্পে সাধারণ বর্তমান বা অতীতের রূপ ব্যবহার করে ইংরেজি বাক্য গঠন শেখানো হয়েছে।",
            "examples": [
                {
                    "eng": "We love this place.",
                    "bng": "আমরা এই জায়গাটি ভালোবাসি।"
                },
                {
                    "eng": "She spoke to me.",
                    "bng": "সে আমার সাথে কথা বলেছিল।"
                }
            ]
        },
        "sentences": [
            {
                "eng": "Today, Rahim wants to read about the sweet mangoes.",
                "bng": "আজ রহিম মিষ্টি আম সম্পর্কে পড়তে চায়।"
            },
            {
                "eng": "He sits down with a clean mind.",
                "bng": "সে একটি পরিষ্কার মন নিয়ে বসে পড়ে।"
            },
            {
                "eng": "He finds the topic very interesting and useful.",
                "bng": "সে বিষয়টিকে খুবই আকর্ষণীয় এবং দরকারী মনে করে।"
            },
            {
                "eng": "English stories help him learn grammar rules easily.",
                "bng": "ইংরেজি গল্প তাকে সহজেই গ্রামার নিয়ম শিখতে সাহায্য করে।"
            },
            {
                "eng": "He plans to practice speaking every day.",
                "bng": "সে প্রতিদিন ইংরেজিতে কথা বলার অনুশীলন করার পরিকল্পনা করে।"
            }
        ],
        "vocabulary": [
            {
                "word": "wants",
                "bangla": "চায়",
                "partOfSpeech": "verb"
            },
            {
                "word": "clean",
                "bangla": "পরিষ্কার",
                "partOfSpeech": "adjective"
            },
            {
                "word": "interesting",
                "bangla": "আকর্ষণীয়",
                "partOfSpeech": "adjective"
            },
            {
                "word": "easily",
                "bangla": "সহজেই",
                "partOfSpeech": "adverb"
            },
            {
                "word": "practice",
                "bangla": "অনুশীলন",
                "partOfSpeech": "verb"
            }
        ],
        "questions": [
            {
                "q": "What does Rahim want to read about?",
                "options": [
                    "The Sweet Mangoes",
                    "A movie",
                    "A song",
                    "A letter"
                ],
                "answer": "The Sweet Mangoes"
            },
            {
                "q": "How does he sit down?",
                "options": [
                    "With a heavy heart",
                    "With a clean mind",
                    "Angry",
                    "Tired"
                ],
                "answer": "With a clean mind"
            },
            {
                "q": "What does he think of the topic?",
                "options": [
                    "Boring",
                    "Too long",
                    "Interesting and useful",
                    "Difficult"
                ],
                "answer": "Interesting and useful"
            },
            {
                "q": "What helps him learn grammar rules easily?",
                "options": [
                    "English stories",
                    "Games",
                    "TV shows",
                    "Radio"
                ],
                "answer": "English stories"
            }
        ],
        "summary": {
            "takeaways": [
                "সহজ ইংরেজি বাক্য গঠন করার দক্ষতা অর্জন।",
                "নতুন শব্দ ও প্রোনাউন্সিয়েশন প্র্যাকটিস করার সুবিধা।"
            ],
            "realLifeUsage": [
                {
                    "context": "দৈনন্দিন অভ্যাস প্রকাশ করতে:",
                    "example": "I read a story about the sweet mangoes to improve my English."
                }
            ]
        }
    },
    {
        "id": "s40",
        "title": "Going to Sleep",
        "subtitle": "ঘুমাতে যাওয়া",
        "level": "Beginner",
        "levelColor": "emerald",
        "topic": "Daily Life",
        "learningObjectives": [
            "Tense transitions for night",
            "Sleep vocabulary"
        ],
        "grammarFocus": [
            "Tense Transition",
            "Sleep Vocab"
        ],
        "grammarTeach": {
            "structure": "Present Simple or Past Simple",
            "formula": "Subject + Verb(V1/V2) + Object",
            "explanation": "এই গল্পে সাধারণ বর্তমান বা অতীতের রূপ ব্যবহার করে ইংরেজি বাক্য গঠন শেখানো হয়েছে।",
            "examples": [
                {
                    "eng": "We love this place.",
                    "bng": "আমরা এই জায়গাটি ভালোবাসি।"
                },
                {
                    "eng": "She spoke to me.",
                    "bng": "সে আমার সাথে কথা বলেছিল।"
                }
            ]
        },
        "sentences": [
            {
                "eng": "Today, Rahim wants to read about going to sleep.",
                "bng": "আজ রহিম ঘুমাতে যাওয়া সম্পর্কে পড়তে চায়।"
            },
            {
                "eng": "He sits down with a clean mind.",
                "bng": "সে একটি পরিষ্কার মন নিয়ে বসে পড়ে।"
            },
            {
                "eng": "He finds the topic very interesting and useful.",
                "bng": "সে বিষয়টিকে খুবই আকর্ষণীয় এবং দরকারী মনে করে।"
            },
            {
                "eng": "English stories help him learn grammar rules easily.",
                "bng": "ইংরেজি গল্প তাকে সহজেই গ্রামার নিয়ম শিখতে সাহায্য করে।"
            },
            {
                "eng": "He plans to practice speaking every day.",
                "bng": "সে প্রতিদিন ইংরেজিতে কথা বলার অনুশীলন করার পরিকল্পনা করে।"
            }
        ],
        "vocabulary": [
            {
                "word": "wants",
                "bangla": "চায়",
                "partOfSpeech": "verb"
            },
            {
                "word": "clean",
                "bangla": "পরিষ্কার",
                "partOfSpeech": "adjective"
            },
            {
                "word": "interesting",
                "bangla": "আকর্ষণীয়",
                "partOfSpeech": "adjective"
            },
            {
                "word": "easily",
                "bangla": "সহজেই",
                "partOfSpeech": "adverb"
            },
            {
                "word": "practice",
                "bangla": "অনুশীলন",
                "partOfSpeech": "verb"
            }
        ],
        "questions": [
            {
                "q": "What does Rahim want to read about?",
                "options": [
                    "Going to Sleep",
                    "A movie",
                    "A song",
                    "A letter"
                ],
                "answer": "Going to Sleep"
            },
            {
                "q": "How does he sit down?",
                "options": [
                    "With a heavy heart",
                    "With a clean mind",
                    "Angry",
                    "Tired"
                ],
                "answer": "With a clean mind"
            },
            {
                "q": "What does he think of the topic?",
                "options": [
                    "Boring",
                    "Too long",
                    "Interesting and useful",
                    "Difficult"
                ],
                "answer": "Interesting and useful"
            },
            {
                "q": "What helps him learn grammar rules easily?",
                "options": [
                    "English stories",
                    "Games",
                    "TV shows",
                    "Radio"
                ],
                "answer": "English stories"
            }
        ],
        "summary": {
            "takeaways": [
                "সহজ ইংরেজি বাক্য গঠন করার দক্ষতা অর্জন।",
                "নতুন শব্দ ও প্রোনাউন্সিয়েশন প্র্যাকটিস করার সুবিধা।"
            ],
            "realLifeUsage": [
                {
                    "context": "দৈনন্দিন অভ্যাস প্রকাশ করতে:",
                    "example": "I read a story about going to sleep to improve my English."
                }
            ]
        }
    },
    {
        "id": "s41",
        "title": "Planning a Trip",
        "subtitle": "ভ্রমণের পরিকল্পনা",
        "level": "Intermediate",
        "levelColor": "amber",
        "topic": "Travel",
        "learningObjectives": [
            "Future plans: will/going to",
            "Travel vocabulary"
        ],
        "grammarFocus": [
            "Future Plans",
            "Travel Vocab"
        ],
        "grammarTeach": {
            "structure": "Present Perfect or Relative Clauses",
            "formula": "Subject + has/have + V3 + Object",
            "explanation": "এই গল্পে সংযোগকারী রিলেটিভ ক্লজ (who, which) এবং প্রেজেন্ট পারফেক্ট টেন্সের ব্যবহার নিয়ে বিষদ আলোচনা করা হয়েছে।",
            "examples": [
                {
                    "eng": "He has lived here since 2018.",
                    "bng": "সে ২০১৮ সাল থেকে এখানে বাস করছে।"
                },
                {
                    "eng": "The book, which I read, is good.",
                    "bng": "বইটি, যা আমি পড়েছিলাম, তা ভালো ছিল।"
                }
            ]
        },
        "sentences": [
            {
                "eng": "Recently, Nadia has written a paragraph on planning a trip.",
                "bng": "সম্প্রতি নাদিয়া ভ্রমণের পরিকল্পনা এর ওপর একটি অনুচ্ছেদ লিখেছে।"
            },
            {
                "eng": "She wants to highlight the key issues which affect us.",
                "bng": "সে মূল বিষয়গুলোকে তুলে ধরতে চায় যেগুলো আমাদের প্রভাবিত করে।"
            },
            {
                "eng": "She believes that technology can solve these problems easily.",
                "bng": "সে বিশ্বাস করে যে প্রযুক্তি সহজেই এই সমস্যাগুলোর সমাধান করতে পারে।"
            },
            {
                "eng": "Many students have joined the online study group to discuss it.",
                "bng": "অনেক ছাত্র এতে আলোচনা করার জন্য অনলাইন স্টাডি গ্রুপে যোগ দিয়েছে।"
            },
            {
                "eng": "This discussion will surely generate positive ideas.",
                "bng": "এই আলোচনাটি অবশ্যই ইতিবাচক চিন্তাভাবনার জন্ম দেবে।"
            }
        ],
        "vocabulary": [
            {
                "word": "recently",
                "bangla": "সম্প্রতি",
                "partOfSpeech": "adverb"
            },
            {
                "word": "highlight",
                "bangla": "তুলে ধরা / চিহ্ণিত করা",
                "partOfSpeech": "verb"
            },
            {
                "word": "affect",
                "bangla": "প্রভাবিত করা",
                "partOfSpeech": "verb"
            },
            {
                "word": "discussion",
                "bangla": "আলোচনা",
                "partOfSpeech": "noun"
            },
            {
                "word": "positive",
                "bangla": "ইতিবাচক",
                "partOfSpeech": "adjective"
            }
        ],
        "questions": [
            {
                "q": "What did Nadia write a paragraph on?",
                "options": [
                    "Planning a Trip",
                    "A standard story",
                    "A math test",
                    "A poem"
                ],
                "answer": "Planning a Trip"
            },
            {
                "q": "What does she want to highlight?",
                "options": [
                    "Key issues which affect us",
                    "Funny cartoon pictures",
                    "Her daily routine",
                    "Shopping lists"
                ],
                "answer": "Key issues which affect us"
            },
            {
                "q": "Who joined the online study group?",
                "options": [
                    "Many students",
                    "No one",
                    "Only teachers",
                    "Shopkeepers"
                ],
                "answer": "Many students"
            },
            {
                "q": "What kind of ideas will this discussion generate?",
                "options": [
                    "Negative ideas",
                    "No ideas",
                    "Positive ideas",
                    "Boring ideas"
                ],
                "answer": "Positive ideas"
            }
        ],
        "summary": {
            "takeaways": [
                "জটীল বাক্য গঠনে রিলেটিভ ক্লজ (which, who) এর সঠিক প্রয়োগ।",
                "প্রেজেন্ট পারফেক্ট টেন্সের সাহায্যে সাম্প্রতিক ঘটনা প্রকাশের নিয়ম।"
            ],
            "realLifeUsage": [
                {
                    "context": "সাম্প্রতিক কোনো অর্জন বা লেখা প্রকাশ করতে:",
                    "example": "I have recently read an essay about planning a trip."
                }
            ]
        }
    },
    {
        "id": "s42",
        "title": "A Career Choice",
        "subtitle": "পেশা নির্বাচন",
        "level": "Intermediate",
        "levelColor": "amber",
        "topic": "Education",
        "learningObjectives": [
            "Conditionals type 1 and 2",
            "Career vocabulary"
        ],
        "grammarFocus": [
            "Conditionals",
            "Career Vocab"
        ],
        "grammarTeach": {
            "structure": "Present Perfect or Relative Clauses",
            "formula": "Subject + has/have + V3 + Object",
            "explanation": "এই গল্পে সংযোগকারী রিলেটিভ ক্লজ (who, which) এবং প্রেজেন্ট পারফেক্ট টেন্সের ব্যবহার নিয়ে বিষদ আলোচনা করা হয়েছে।",
            "examples": [
                {
                    "eng": "He has lived here since 2018.",
                    "bng": "সে ২০১৮ সাল থেকে এখানে বাস করছে।"
                },
                {
                    "eng": "The book, which I read, is good.",
                    "bng": "বইটি, যা আমি পড়েছিলাম, তা ভালো ছিল।"
                }
            ]
        },
        "sentences": [
            {
                "eng": "Recently, Nadia has written a paragraph on a career choice.",
                "bng": "সম্প্রতি নাদিয়া পেশা নির্বাচন এর ওপর একটি অনুচ্ছেদ লিখেছে।"
            },
            {
                "eng": "She wants to highlight the key issues which affect us.",
                "bng": "সে মূল বিষয়গুলোকে তুলে ধরতে চায় যেগুলো আমাদের প্রভাবিত করে।"
            },
            {
                "eng": "She believes that technology can solve these problems easily.",
                "bng": "সে বিশ্বাস করে যে প্রযুক্তি সহজেই এই সমস্যাগুলোর সমাধান করতে পারে।"
            },
            {
                "eng": "Many students have joined the online study group to discuss it.",
                "bng": "অনেক ছাত্র এতে আলোচনা করার জন্য অনলাইন স্টাডি গ্রুপে যোগ দিয়েছে।"
            },
            {
                "eng": "This discussion will surely generate positive ideas.",
                "bng": "এই আলোচনাটি অবশ্যই ইতিবাচক চিন্তাভাবনার জন্ম দেবে।"
            }
        ],
        "vocabulary": [
            {
                "word": "recently",
                "bangla": "সম্প্রতি",
                "partOfSpeech": "adverb"
            },
            {
                "word": "highlight",
                "bangla": "তুলে ধরা / চিহ্ণিত করা",
                "partOfSpeech": "verb"
            },
            {
                "word": "affect",
                "bangla": "প্রভাবিত করা",
                "partOfSpeech": "verb"
            },
            {
                "word": "discussion",
                "bangla": "আলোচনা",
                "partOfSpeech": "noun"
            },
            {
                "word": "positive",
                "bangla": "ইতিবাচক",
                "partOfSpeech": "adjective"
            }
        ],
        "questions": [
            {
                "q": "What did Nadia write a paragraph on?",
                "options": [
                    "A Career Choice",
                    "A standard story",
                    "A math test",
                    "A poem"
                ],
                "answer": "A Career Choice"
            },
            {
                "q": "What does she want to highlight?",
                "options": [
                    "Key issues which affect us",
                    "Funny cartoon pictures",
                    "Her daily routine",
                    "Shopping lists"
                ],
                "answer": "Key issues which affect us"
            },
            {
                "q": "Who joined the online study group?",
                "options": [
                    "Many students",
                    "No one",
                    "Only teachers",
                    "Shopkeepers"
                ],
                "answer": "Many students"
            },
            {
                "q": "What kind of ideas will this discussion generate?",
                "options": [
                    "Negative ideas",
                    "No ideas",
                    "Positive ideas",
                    "Boring ideas"
                ],
                "answer": "Positive ideas"
            }
        ],
        "summary": {
            "takeaways": [
                "জটীল বাক্য গঠনে রিলেটিভ ক্লজ (which, who) এর সঠিক প্রয়োগ।",
                "প্রেজেন্ট পারফেক্ট টেন্সের সাহায্যে সাম্প্রতিক ঘটনা প্রকাশের নিয়ম।"
            ],
            "realLifeUsage": [
                {
                    "context": "সাম্প্রতিক কোনো অর্জন বা লেখা প্রকাশ করতে:",
                    "example": "I have recently read an essay about a career choice."
                }
            ]
        }
    },
    {
        "id": "s43",
        "title": "Environmental Protection",
        "subtitle": "পরিবেশ সুরক্ষা",
        "level": "Intermediate",
        "levelColor": "amber",
        "topic": "Environment",
        "learningObjectives": [
            "Modal verbs for necessity: must, should",
            "Environment vocabulary"
        ],
        "grammarFocus": [
            "Modals",
            "Environment Vocab"
        ],
        "grammarTeach": {
            "structure": "Present Perfect or Relative Clauses",
            "formula": "Subject + has/have + V3 + Object",
            "explanation": "এই গল্পে সংযোগকারী রিলেটিভ ক্লজ (who, which) এবং প্রেজেন্ট পারফেক্ট টেন্সের ব্যবহার নিয়ে বিষদ আলোচনা করা হয়েছে।",
            "examples": [
                {
                    "eng": "He has lived here since 2018.",
                    "bng": "সে ২০১৮ সাল থেকে এখানে বাস করছে।"
                },
                {
                    "eng": "The book, which I read, is good.",
                    "bng": "বইটি, যা আমি পড়েছিলাম, তা ভালো ছিল।"
                }
            ]
        },
        "sentences": [
            {
                "eng": "Recently, Nadia has written a paragraph on environmental protection.",
                "bng": "সম্প্রতি নাদিয়া পরিবেশ সুরক্ষা এর ওপর একটি অনুচ্ছেদ লিখেছে।"
            },
            {
                "eng": "She wants to highlight the key issues which affect us.",
                "bng": "সে মূল বিষয়গুলোকে তুলে ধরতে চায় যেগুলো আমাদের প্রভাবিত করে।"
            },
            {
                "eng": "She believes that technology can solve these problems easily.",
                "bng": "সে বিশ্বাস করে যে প্রযুক্তি সহজেই এই সমস্যাগুলোর সমাধান করতে পারে।"
            },
            {
                "eng": "Many students have joined the online study group to discuss it.",
                "bng": "অনেক ছাত্র এতে আলোচনা করার জন্য অনলাইন স্টাডি গ্রুপে যোগ দিয়েছে।"
            },
            {
                "eng": "This discussion will surely generate positive ideas.",
                "bng": "এই আলোচনাটি অবশ্যই ইতিবাচক চিন্তাভাবনার জন্ম দেবে।"
            }
        ],
        "vocabulary": [
            {
                "word": "recently",
                "bangla": "সম্প্রতি",
                "partOfSpeech": "adverb"
            },
            {
                "word": "highlight",
                "bangla": "তুলে ধরা / চিহ্ণিত করা",
                "partOfSpeech": "verb"
            },
            {
                "word": "affect",
                "bangla": "প্রভাবিত করা",
                "partOfSpeech": "verb"
            },
            {
                "word": "discussion",
                "bangla": "আলোচনা",
                "partOfSpeech": "noun"
            },
            {
                "word": "positive",
                "bangla": "ইতিবাচক",
                "partOfSpeech": "adjective"
            }
        ],
        "questions": [
            {
                "q": "What did Nadia write a paragraph on?",
                "options": [
                    "Environmental Protection",
                    "A standard story",
                    "A math test",
                    "A poem"
                ],
                "answer": "Environmental Protection"
            },
            {
                "q": "What does she want to highlight?",
                "options": [
                    "Key issues which affect us",
                    "Funny cartoon pictures",
                    "Her daily routine",
                    "Shopping lists"
                ],
                "answer": "Key issues which affect us"
            },
            {
                "q": "Who joined the online study group?",
                "options": [
                    "Many students",
                    "No one",
                    "Only teachers",
                    "Shopkeepers"
                ],
                "answer": "Many students"
            },
            {
                "q": "What kind of ideas will this discussion generate?",
                "options": [
                    "Negative ideas",
                    "No ideas",
                    "Positive ideas",
                    "Boring ideas"
                ],
                "answer": "Positive ideas"
            }
        ],
        "summary": {
            "takeaways": [
                "জটীল বাক্য গঠনে রিলেটিভ ক্লজ (which, who) এর সঠিক প্রয়োগ।",
                "প্রেজেন্ট পারফেক্ট টেন্সের সাহায্যে সাম্প্রতিক ঘটনা প্রকাশের নিয়ম।"
            ],
            "realLifeUsage": [
                {
                    "context": "সাম্প্রতিক কোনো অর্জন বা লেখা প্রকাশ করতে:",
                    "example": "I have recently read an essay about environmental protection."
                }
            ]
        }
    },
    {
        "id": "s44",
        "title": "City Traffic Jam",
        "subtitle": "শহরের যানজট",
        "level": "Intermediate",
        "levelColor": "amber",
        "topic": "Society",
        "learningObjectives": [
            "Cause and effect linkers",
            "Urban vocabulary"
        ],
        "grammarFocus": [
            "Linkers",
            "Urban Vocab"
        ],
        "grammarTeach": {
            "structure": "Present Perfect or Relative Clauses",
            "formula": "Subject + has/have + V3 + Object",
            "explanation": "এই গল্পে সংযোগকারী রিলেটিভ ক্লজ (who, which) এবং প্রেজেন্ট পারফেক্ট টেন্সের ব্যবহার নিয়ে বিষদ আলোচনা করা হয়েছে।",
            "examples": [
                {
                    "eng": "He has lived here since 2018.",
                    "bng": "সে ২০১৮ সাল থেকে এখানে বাস করছে।"
                },
                {
                    "eng": "The book, which I read, is good.",
                    "bng": "বইটি, যা আমি পড়েছিলাম, তা ভালো ছিল।"
                }
            ]
        },
        "sentences": [
            {
                "eng": "Recently, Nadia has written a paragraph on city traffic jam.",
                "bng": "সম্প্রতি নাদিয়া শহরের যানজট এর ওপর একটি অনুচ্ছেদ লিখেছে।"
            },
            {
                "eng": "She wants to highlight the key issues which affect us.",
                "bng": "সে মূল বিষয়গুলোকে তুলে ধরতে চায় যেগুলো আমাদের প্রভাবিত করে।"
            },
            {
                "eng": "She believes that technology can solve these problems easily.",
                "bng": "সে বিশ্বাস করে যে প্রযুক্তি সহজেই এই সমস্যাগুলোর সমাধান করতে পারে।"
            },
            {
                "eng": "Many students have joined the online study group to discuss it.",
                "bng": "অনেক ছাত্র এতে আলোচনা করার জন্য অনলাইন স্টাডি গ্রুপে যোগ দিয়েছে।"
            },
            {
                "eng": "This discussion will surely generate positive ideas.",
                "bng": "এই আলোচনাটি অবশ্যই ইতিবাচক চিন্তাভাবনার জন্ম দেবে।"
            }
        ],
        "vocabulary": [
            {
                "word": "recently",
                "bangla": "সম্প্রতি",
                "partOfSpeech": "adverb"
            },
            {
                "word": "highlight",
                "bangla": "তুলে ধরা / চিহ্ণিত করা",
                "partOfSpeech": "verb"
            },
            {
                "word": "affect",
                "bangla": "প্রভাবিত করা",
                "partOfSpeech": "verb"
            },
            {
                "word": "discussion",
                "bangla": "আলোচনা",
                "partOfSpeech": "noun"
            },
            {
                "word": "positive",
                "bangla": "ইতিবাচক",
                "partOfSpeech": "adjective"
            }
        ],
        "questions": [
            {
                "q": "What did Nadia write a paragraph on?",
                "options": [
                    "City Traffic Jam",
                    "A standard story",
                    "A math test",
                    "A poem"
                ],
                "answer": "City Traffic Jam"
            },
            {
                "q": "What does she want to highlight?",
                "options": [
                    "Key issues which affect us",
                    "Funny cartoon pictures",
                    "Her daily routine",
                    "Shopping lists"
                ],
                "answer": "Key issues which affect us"
            },
            {
                "q": "Who joined the online study group?",
                "options": [
                    "Many students",
                    "No one",
                    "Only teachers",
                    "Shopkeepers"
                ],
                "answer": "Many students"
            },
            {
                "q": "What kind of ideas will this discussion generate?",
                "options": [
                    "Negative ideas",
                    "No ideas",
                    "Positive ideas",
                    "Boring ideas"
                ],
                "answer": "Positive ideas"
            }
        ],
        "summary": {
            "takeaways": [
                "জটীল বাক্য গঠনে রিলেটিভ ক্লজ (which, who) এর সঠিক প্রয়োগ।",
                "প্রেজেন্ট পারফেক্ট টেন্সের সাহায্যে সাম্প্রতিক ঘটনা প্রকাশের নিয়ম।"
            ],
            "realLifeUsage": [
                {
                    "context": "সাম্প্রতিক কোনো অর্জন বা লেখা প্রকাশ করতে:",
                    "example": "I have recently read an essay about city traffic jam."
                }
            ]
        }
    },
    {
        "id": "s45",
        "title": "Healthy Eating Habits",
        "subtitle": "স্বাস্থ্যকর খাওয়ার অভ্যাস",
        "level": "Intermediate",
        "levelColor": "amber",
        "topic": "Health",
        "learningObjectives": [
            "Giving advice and recommendations",
            "Nutrition vocabulary"
        ],
        "grammarFocus": [
            "Advice Expressions",
            "Nutrition Vocab"
        ],
        "grammarTeach": {
            "structure": "Present Perfect or Relative Clauses",
            "formula": "Subject + has/have + V3 + Object",
            "explanation": "এই গল্পে সংযোগকারী রিলেটিভ ক্লজ (who, which) এবং প্রেজেন্ট পারফেক্ট টেন্সের ব্যবহার নিয়ে বিষদ আলোচনা করা হয়েছে।",
            "examples": [
                {
                    "eng": "He has lived here since 2018.",
                    "bng": "সে ২০১৮ সাল থেকে এখানে বাস করছে।"
                },
                {
                    "eng": "The book, which I read, is good.",
                    "bng": "বইটি, যা আমি পড়েছিলাম, তা ভালো ছিল।"
                }
            ]
        },
        "sentences": [
            {
                "eng": "Recently, Nadia has written a paragraph on healthy eating habits.",
                "bng": "সম্প্রতি নাদিয়া স্বাস্থ্যকর খাওয়ার অভ্যাস এর ওপর একটি অনুচ্ছেদ লিখেছে।"
            },
            {
                "eng": "She wants to highlight the key issues which affect us.",
                "bng": "সে মূল বিষয়গুলোকে তুলে ধরতে চায় যেগুলো আমাদের প্রভাবিত করে।"
            },
            {
                "eng": "She believes that technology can solve these problems easily.",
                "bng": "সে বিশ্বাস করে যে প্রযুক্তি সহজেই এই সমস্যাগুলোর সমাধান করতে পারে।"
            },
            {
                "eng": "Many students have joined the online study group to discuss it.",
                "bng": "অনেক ছাত্র এতে আলোচনা করার জন্য অনলাইন স্টাডি গ্রুপে যোগ দিয়েছে।"
            },
            {
                "eng": "This discussion will surely generate positive ideas.",
                "bng": "এই আলোচনাটি অবশ্যই ইতিবাচক চিন্তাভাবনার জন্ম দেবে।"
            }
        ],
        "vocabulary": [
            {
                "word": "recently",
                "bangla": "সম্প্রতি",
                "partOfSpeech": "adverb"
            },
            {
                "word": "highlight",
                "bangla": "তুলে ধরা / চিহ্ণিত করা",
                "partOfSpeech": "verb"
            },
            {
                "word": "affect",
                "bangla": "প্রভাবিত করা",
                "partOfSpeech": "verb"
            },
            {
                "word": "discussion",
                "bangla": "আলোচনা",
                "partOfSpeech": "noun"
            },
            {
                "word": "positive",
                "bangla": "ইতিবাচক",
                "partOfSpeech": "adjective"
            }
        ],
        "questions": [
            {
                "q": "What did Nadia write a paragraph on?",
                "options": [
                    "Healthy Eating Habits",
                    "A standard story",
                    "A math test",
                    "A poem"
                ],
                "answer": "Healthy Eating Habits"
            },
            {
                "q": "What does she want to highlight?",
                "options": [
                    "Key issues which affect us",
                    "Funny cartoon pictures",
                    "Her daily routine",
                    "Shopping lists"
                ],
                "answer": "Key issues which affect us"
            },
            {
                "q": "Who joined the online study group?",
                "options": [
                    "Many students",
                    "No one",
                    "Only teachers",
                    "Shopkeepers"
                ],
                "answer": "Many students"
            },
            {
                "q": "What kind of ideas will this discussion generate?",
                "options": [
                    "Negative ideas",
                    "No ideas",
                    "Positive ideas",
                    "Boring ideas"
                ],
                "answer": "Positive ideas"
            }
        ],
        "summary": {
            "takeaways": [
                "জটীল বাক্য গঠনে রিলেটিভ ক্লজ (which, who) এর সঠিক প্রয়োগ।",
                "প্রেজেন্ট পারফেক্ট টেন্সের সাহায্যে সাম্প্রতিক ঘটনা প্রকাশের নিয়ম।"
            ],
            "realLifeUsage": [
                {
                    "context": "সাম্প্রতিক কোনো অর্জন বা লেখা প্রকাশ করতে:",
                    "example": "I have recently read an essay about healthy eating habits."
                }
            ]
        }
    },
    {
        "id": "s46",
        "title": "Social Media Impact",
        "subtitle": "সোশ্যাল মিডিয়ার প্রভাব",
        "level": "Intermediate",
        "levelColor": "amber",
        "topic": "Technology",
        "learningObjectives": [
            "Expressing pros and cons",
            "Tech vocabulary"
        ],
        "grammarFocus": [
            "Pros & Cons",
            "Tech Vocab"
        ],
        "grammarTeach": {
            "structure": "Present Perfect or Relative Clauses",
            "formula": "Subject + has/have + V3 + Object",
            "explanation": "এই গল্পে সংযোগকারী রিলেটিভ ক্লজ (who, which) এবং প্রেজেন্ট পারফেক্ট টেন্সের ব্যবহার নিয়ে বিষদ আলোচনা করা হয়েছে।",
            "examples": [
                {
                    "eng": "He has lived here since 2018.",
                    "bng": "সে ২০১৮ সাল থেকে এখানে বাস করছে।"
                },
                {
                    "eng": "The book, which I read, is good.",
                    "bng": "বইটি, যা আমি পড়েছিলাম, তা ভালো ছিল।"
                }
            ]
        },
        "sentences": [
            {
                "eng": "Recently, Nadia has written a paragraph on social media impact.",
                "bng": "সম্প্রতি নাদিয়া সোশ্যাল মিডিয়ার প্রভাব এর ওপর একটি অনুচ্ছেদ লিখেছে।"
            },
            {
                "eng": "She wants to highlight the key issues which affect us.",
                "bng": "সে মূল বিষয়গুলোকে তুলে ধরতে চায় যেগুলো আমাদের প্রভাবিত করে।"
            },
            {
                "eng": "She believes that technology can solve these problems easily.",
                "bng": "সে বিশ্বাস করে যে প্রযুক্তি সহজেই এই সমস্যাগুলোর সমাধান করতে পারে।"
            },
            {
                "eng": "Many students have joined the online study group to discuss it.",
                "bng": "অনেক ছাত্র এতে আলোচনা করার জন্য অনলাইন স্টাডি গ্রুপে যোগ দিয়েছে।"
            },
            {
                "eng": "This discussion will surely generate positive ideas.",
                "bng": "এই আলোচনাটি অবশ্যই ইতিবাচক চিন্তাভাবনার জন্ম দেবে।"
            }
        ],
        "vocabulary": [
            {
                "word": "recently",
                "bangla": "সম্প্রতি",
                "partOfSpeech": "adverb"
            },
            {
                "word": "highlight",
                "bangla": "তুলে ধরা / চিহ্ণিত করা",
                "partOfSpeech": "verb"
            },
            {
                "word": "affect",
                "bangla": "প্রভাবিত করা",
                "partOfSpeech": "verb"
            },
            {
                "word": "discussion",
                "bangla": "আলোচনা",
                "partOfSpeech": "noun"
            },
            {
                "word": "positive",
                "bangla": "ইতিবাচক",
                "partOfSpeech": "adjective"
            }
        ],
        "questions": [
            {
                "q": "What did Nadia write a paragraph on?",
                "options": [
                    "Social Media Impact",
                    "A standard story",
                    "A math test",
                    "A poem"
                ],
                "answer": "Social Media Impact"
            },
            {
                "q": "What does she want to highlight?",
                "options": [
                    "Key issues which affect us",
                    "Funny cartoon pictures",
                    "Her daily routine",
                    "Shopping lists"
                ],
                "answer": "Key issues which affect us"
            },
            {
                "q": "Who joined the online study group?",
                "options": [
                    "Many students",
                    "No one",
                    "Only teachers",
                    "Shopkeepers"
                ],
                "answer": "Many students"
            },
            {
                "q": "What kind of ideas will this discussion generate?",
                "options": [
                    "Negative ideas",
                    "No ideas",
                    "Positive ideas",
                    "Boring ideas"
                ],
                "answer": "Positive ideas"
            }
        ],
        "summary": {
            "takeaways": [
                "জটীল বাক্য গঠনে রিলেটিভ ক্লজ (which, who) এর সঠিক প্রয়োগ।",
                "প্রেজেন্ট পারফেক্ট টেন্সের সাহায্যে সাম্প্রতিক ঘটনা প্রকাশের নিয়ম।"
            ],
            "realLifeUsage": [
                {
                    "context": "সাম্প্রতিক কোনো অর্জন বা লেখা প্রকাশ করতে:",
                    "example": "I have recently read an essay about social media impact."
                }
            ]
        }
    },
    {
        "id": "s47",
        "title": "Learning English Online",
        "subtitle": "অনলাইনে ইংরেজি শেখা",
        "level": "Intermediate",
        "levelColor": "amber",
        "topic": "Education",
        "learningObjectives": [
            "Present perfect continuous tense",
            "Education vocabulary"
        ],
        "grammarFocus": [
            "Present Perfect Continuous",
            "Education Vocab"
        ],
        "grammarTeach": {
            "structure": "Present Perfect or Relative Clauses",
            "formula": "Subject + has/have + V3 + Object",
            "explanation": "এই গল্পে সংযোগকারী রিলেটিভ ক্লজ (who, which) এবং প্রেজেন্ট পারফেক্ট টেন্সের ব্যবহার নিয়ে বিষদ আলোচনা করা হয়েছে।",
            "examples": [
                {
                    "eng": "He has lived here since 2018.",
                    "bng": "সে ২০১৮ সাল থেকে এখানে বাস করছে।"
                },
                {
                    "eng": "The book, which I read, is good.",
                    "bng": "বইটি, যা আমি পড়েছিলাম, তা ভালো ছিল।"
                }
            ]
        },
        "sentences": [
            {
                "eng": "Recently, Nadia has written a paragraph on learning english online.",
                "bng": "সম্প্রতি নাদিয়া অনলাইনে ইংরেজি শেখা এর ওপর একটি অনুচ্ছেদ লিখেছে।"
            },
            {
                "eng": "She wants to highlight the key issues which affect us.",
                "bng": "সে মূল বিষয়গুলোকে তুলে ধরতে চায় যেগুলো আমাদের প্রভাবিত করে।"
            },
            {
                "eng": "She believes that technology can solve these problems easily.",
                "bng": "সে বিশ্বাস করে যে প্রযুক্তি সহজেই এই সমস্যাগুলোর সমাধান করতে পারে।"
            },
            {
                "eng": "Many students have joined the online study group to discuss it.",
                "bng": "অনেক ছাত্র এতে আলোচনা করার জন্য অনলাইন স্টাডি গ্রুপে যোগ দিয়েছে।"
            },
            {
                "eng": "This discussion will surely generate positive ideas.",
                "bng": "এই আলোচনাটি অবশ্যই ইতিবাচক চিন্তাভাবনার জন্ম দেবে।"
            }
        ],
        "vocabulary": [
            {
                "word": "recently",
                "bangla": "সম্প্রতি",
                "partOfSpeech": "adverb"
            },
            {
                "word": "highlight",
                "bangla": "তুলে ধরা / চিহ্ণিত করা",
                "partOfSpeech": "verb"
            },
            {
                "word": "affect",
                "bangla": "প্রভাবিত করা",
                "partOfSpeech": "verb"
            },
            {
                "word": "discussion",
                "bangla": "আলোচনা",
                "partOfSpeech": "noun"
            },
            {
                "word": "positive",
                "bangla": "ইতিবাচক",
                "partOfSpeech": "adjective"
            }
        ],
        "questions": [
            {
                "q": "What did Nadia write a paragraph on?",
                "options": [
                    "Learning English Online",
                    "A standard story",
                    "A math test",
                    "A poem"
                ],
                "answer": "Learning English Online"
            },
            {
                "q": "What does she want to highlight?",
                "options": [
                    "Key issues which affect us",
                    "Funny cartoon pictures",
                    "Her daily routine",
                    "Shopping lists"
                ],
                "answer": "Key issues which affect us"
            },
            {
                "q": "Who joined the online study group?",
                "options": [
                    "Many students",
                    "No one",
                    "Only teachers",
                    "Shopkeepers"
                ],
                "answer": "Many students"
            },
            {
                "q": "What kind of ideas will this discussion generate?",
                "options": [
                    "Negative ideas",
                    "No ideas",
                    "Positive ideas",
                    "Boring ideas"
                ],
                "answer": "Positive ideas"
            }
        ],
        "summary": {
            "takeaways": [
                "জটীল বাক্য গঠনে রিলেটিভ ক্লজ (which, who) এর সঠিক প্রয়োগ।",
                "প্রেজেন্ট পারফেক্ট টেন্সের সাহায্যে সাম্প্রতিক ঘটনা প্রকাশের নিয়ম।"
            ],
            "realLifeUsage": [
                {
                    "context": "সাম্প্রতিক কোনো অর্জন বা লেখা প্রকাশ করতে:",
                    "example": "I have recently read an essay about learning english online."
                }
            ]
        }
    },
    {
        "id": "s48",
        "title": "Global Warming Threat",
        "subtitle": "বৈশ্বিক উষ্ণায়নের হুমকি",
        "level": "Intermediate",
        "levelColor": "amber",
        "topic": "Science",
        "learningObjectives": [
            "Passive voice in science",
            "Scientific vocabulary"
        ],
        "grammarFocus": [
            "Passive Voice",
            "Science Vocab"
        ],
        "grammarTeach": {
            "structure": "Present Perfect or Relative Clauses",
            "formula": "Subject + has/have + V3 + Object",
            "explanation": "এই গল্পে সংযোগকারী রিলেটিভ ক্লজ (who, which) এবং প্রেজেন্ট পারফেক্ট টেন্সের ব্যবহার নিয়ে বিষদ আলোচনা করা হয়েছে।",
            "examples": [
                {
                    "eng": "He has lived here since 2018.",
                    "bng": "সে ২০১৮ সাল থেকে এখানে বাস করছে।"
                },
                {
                    "eng": "The book, which I read, is good.",
                    "bng": "বইটি, যা আমি পড়েছিলাম, তা ভালো ছিল।"
                }
            ]
        },
        "sentences": [
            {
                "eng": "Recently, Nadia has written a paragraph on global warming threat.",
                "bng": "সম্প্রতি নাদিয়া বৈশ্বিক উষ্ণায়নের হুমকি এর ওপর একটি অনুচ্ছেদ লিখেছে।"
            },
            {
                "eng": "She wants to highlight the key issues which affect us.",
                "bng": "সে মূল বিষয়গুলোকে তুলে ধরতে চায় যেগুলো আমাদের প্রভাবিত করে।"
            },
            {
                "eng": "She believes that technology can solve these problems easily.",
                "bng": "সে বিশ্বাস করে যে প্রযুক্তি সহজেই এই সমস্যাগুলোর সমাধান করতে পারে।"
            },
            {
                "eng": "Many students have joined the online study group to discuss it.",
                "bng": "অনেক ছাত্র এতে আলোচনা করার জন্য অনলাইন স্টাডি গ্রুপে যোগ দিয়েছে।"
            },
            {
                "eng": "This discussion will surely generate positive ideas.",
                "bng": "এই আলোচনাটি অবশ্যই ইতিবাচক চিন্তাভাবনার জন্ম দেবে।"
            }
        ],
        "vocabulary": [
            {
                "word": "recently",
                "bangla": "সম্প্রতি",
                "partOfSpeech": "adverb"
            },
            {
                "word": "highlight",
                "bangla": "তুলে ধরা / চিহ্ণিত করা",
                "partOfSpeech": "verb"
            },
            {
                "word": "affect",
                "bangla": "প্রভাবিত করা",
                "partOfSpeech": "verb"
            },
            {
                "word": "discussion",
                "bangla": "আলোচনা",
                "partOfSpeech": "noun"
            },
            {
                "word": "positive",
                "bangla": "ইতিবাচক",
                "partOfSpeech": "adjective"
            }
        ],
        "questions": [
            {
                "q": "What did Nadia write a paragraph on?",
                "options": [
                    "Global Warming Threat",
                    "A standard story",
                    "A math test",
                    "A poem"
                ],
                "answer": "Global Warming Threat"
            },
            {
                "q": "What does she want to highlight?",
                "options": [
                    "Key issues which affect us",
                    "Funny cartoon pictures",
                    "Her daily routine",
                    "Shopping lists"
                ],
                "answer": "Key issues which affect us"
            },
            {
                "q": "Who joined the online study group?",
                "options": [
                    "Many students",
                    "No one",
                    "Only teachers",
                    "Shopkeepers"
                ],
                "answer": "Many students"
            },
            {
                "q": "What kind of ideas will this discussion generate?",
                "options": [
                    "Negative ideas",
                    "No ideas",
                    "Positive ideas",
                    "Boring ideas"
                ],
                "answer": "Positive ideas"
            }
        ],
        "summary": {
            "takeaways": [
                "জটীল বাক্য গঠনে রিলেটিভ ক্লজ (which, who) এর সঠিক প্রয়োগ।",
                "প্রেজেন্ট পারফেক্ট টেন্সের সাহায্যে সাম্প্রতিক ঘটনা প্রকাশের নিয়ম।"
            ],
            "realLifeUsage": [
                {
                    "context": "সাম্প্রতিক কোনো অর্জন বা লেখা প্রকাশ করতে:",
                    "example": "I have recently read an essay about global warming threat."
                }
            ]
        }
    },
    {
        "id": "s49",
        "title": "Historical Places in Bangladesh",
        "subtitle": "বাংলাদেশের ঐতিহাসিক স্থান",
        "level": "Intermediate",
        "levelColor": "amber",
        "topic": "History",
        "learningObjectives": [
            "Relative clauses: which, who",
            "Historical vocabulary"
        ],
        "grammarFocus": [
            "Relative Clauses",
            "Historical Vocab"
        ],
        "grammarTeach": {
            "structure": "Present Perfect or Relative Clauses",
            "formula": "Subject + has/have + V3 + Object",
            "explanation": "এই গল্পে সংযোগকারী রিলেটিভ ক্লজ (who, which) এবং প্রেজেন্ট পারফেক্ট টেন্সের ব্যবহার নিয়ে বিষদ আলোচনা করা হয়েছে।",
            "examples": [
                {
                    "eng": "He has lived here since 2018.",
                    "bng": "সে ২০১৮ সাল থেকে এখানে বাস করছে।"
                },
                {
                    "eng": "The book, which I read, is good.",
                    "bng": "বইটি, যা আমি পড়েছিলাম, তা ভালো ছিল।"
                }
            ]
        },
        "sentences": [
            {
                "eng": "Recently, Nadia has written a paragraph on historical places in bangladesh.",
                "bng": "সম্প্রতি নাদিয়া বাংলাদেশের ঐতিহাসিক স্থান এর ওপর একটি অনুচ্ছেদ লিখেছে।"
            },
            {
                "eng": "She wants to highlight the key issues which affect us.",
                "bng": "সে মূল বিষয়গুলোকে তুলে ধরতে চায় যেগুলো আমাদের প্রভাবিত করে।"
            },
            {
                "eng": "She believes that technology can solve these problems easily.",
                "bng": "সে বিশ্বাস করে যে প্রযুক্তি সহজেই এই সমস্যাগুলোর সমাধান করতে পারে।"
            },
            {
                "eng": "Many students have joined the online study group to discuss it.",
                "bng": "অনেক ছাত্র এতে আলোচনা করার জন্য অনলাইন স্টাডি গ্রুপে যোগ দিয়েছে।"
            },
            {
                "eng": "This discussion will surely generate positive ideas.",
                "bng": "এই আলোচনাটি অবশ্যই ইতিবাচক চিন্তাভাবনার জন্ম দেবে।"
            }
        ],
        "vocabulary": [
            {
                "word": "recently",
                "bangla": "সম্প্রতি",
                "partOfSpeech": "adverb"
            },
            {
                "word": "highlight",
                "bangla": "তুলে ধরা / চিহ্ণিত করা",
                "partOfSpeech": "verb"
            },
            {
                "word": "affect",
                "bangla": "প্রভাবিত করা",
                "partOfSpeech": "verb"
            },
            {
                "word": "discussion",
                "bangla": "আলোচনা",
                "partOfSpeech": "noun"
            },
            {
                "word": "positive",
                "bangla": "ইতিবাচক",
                "partOfSpeech": "adjective"
            }
        ],
        "questions": [
            {
                "q": "What did Nadia write a paragraph on?",
                "options": [
                    "Historical Places in Bangladesh",
                    "A standard story",
                    "A math test",
                    "A poem"
                ],
                "answer": "Historical Places in Bangladesh"
            },
            {
                "q": "What does she want to highlight?",
                "options": [
                    "Key issues which affect us",
                    "Funny cartoon pictures",
                    "Her daily routine",
                    "Shopping lists"
                ],
                "answer": "Key issues which affect us"
            },
            {
                "q": "Who joined the online study group?",
                "options": [
                    "Many students",
                    "No one",
                    "Only teachers",
                    "Shopkeepers"
                ],
                "answer": "Many students"
            },
            {
                "q": "What kind of ideas will this discussion generate?",
                "options": [
                    "Negative ideas",
                    "No ideas",
                    "Positive ideas",
                    "Boring ideas"
                ],
                "answer": "Positive ideas"
            }
        ],
        "summary": {
            "takeaways": [
                "জটীল বাক্য গঠনে রিলেটিভ ক্লজ (which, who) এর সঠিক প্রয়োগ।",
                "প্রেজেন্ট পারফেক্ট টেন্সের সাহায্যে সাম্প্রতিক ঘটনা প্রকাশের নিয়ম।"
            ],
            "realLifeUsage": [
                {
                    "context": "সাম্প্রতিক কোনো অর্জন বা লেখা প্রকাশ করতে:",
                    "example": "I have recently read an essay about historical places in bangladesh."
                }
            ]
        }
    },
    {
        "id": "s50",
        "title": "The Power of Exercise",
        "subtitle": "ব্যায়ামের ক্ষমতা",
        "level": "Intermediate",
        "levelColor": "amber",
        "topic": "Health",
        "learningObjectives": [
            "Infinitive of purpose: to stay fit",
            "Exercise vocabulary"
        ],
        "grammarFocus": [
            "Infinitive of Purpose",
            "Exercise Vocab"
        ],
        "grammarTeach": {
            "structure": "Present Perfect or Relative Clauses",
            "formula": "Subject + has/have + V3 + Object",
            "explanation": "এই গল্পে সংযোগকারী রিলেটিভ ক্লজ (who, which) এবং প্রেজেন্ট পারফেক্ট টেন্সের ব্যবহার নিয়ে বিষদ আলোচনা করা হয়েছে।",
            "examples": [
                {
                    "eng": "He has lived here since 2018.",
                    "bng": "সে ২০১৮ সাল থেকে এখানে বাস করছে।"
                },
                {
                    "eng": "The book, which I read, is good.",
                    "bng": "বইটি, যা আমি পড়েছিলাম, তা ভালো ছিল।"
                }
            ]
        },
        "sentences": [
            {
                "eng": "Recently, Nadia has written a paragraph on the power of exercise.",
                "bng": "সম্প্রতি নাদিয়া ব্যায়ামের ক্ষমতা এর ওপর একটি অনুচ্ছেদ লিখেছে।"
            },
            {
                "eng": "She wants to highlight the key issues which affect us.",
                "bng": "সে মূল বিষয়গুলোকে তুলে ধরতে চায় যেগুলো আমাদের প্রভাবিত করে।"
            },
            {
                "eng": "She believes that technology can solve these problems easily.",
                "bng": "সে বিশ্বাস করে যে প্রযুক্তি সহজেই এই সমস্যাগুলোর সমাধান করতে পারে।"
            },
            {
                "eng": "Many students have joined the online study group to discuss it.",
                "bng": "অনেক ছাত্র এতে আলোচনা করার জন্য অনলাইন স্টাডি গ্রুপে যোগ দিয়েছে।"
            },
            {
                "eng": "This discussion will surely generate positive ideas.",
                "bng": "এই আলোচনাটি অবশ্যই ইতিবাচক চিন্তাভাবনার জন্ম দেবে।"
            }
        ],
        "vocabulary": [
            {
                "word": "recently",
                "bangla": "সম্প্রতি",
                "partOfSpeech": "adverb"
            },
            {
                "word": "highlight",
                "bangla": "তুলে ধরা / চিহ্ণিত করা",
                "partOfSpeech": "verb"
            },
            {
                "word": "affect",
                "bangla": "প্রভাবিত করা",
                "partOfSpeech": "verb"
            },
            {
                "word": "discussion",
                "bangla": "আলোচনা",
                "partOfSpeech": "noun"
            },
            {
                "word": "positive",
                "bangla": "ইতিবাচক",
                "partOfSpeech": "adjective"
            }
        ],
        "questions": [
            {
                "q": "What did Nadia write a paragraph on?",
                "options": [
                    "The Power of Exercise",
                    "A standard story",
                    "A math test",
                    "A poem"
                ],
                "answer": "The Power of Exercise"
            },
            {
                "q": "What does she want to highlight?",
                "options": [
                    "Key issues which affect us",
                    "Funny cartoon pictures",
                    "Her daily routine",
                    "Shopping lists"
                ],
                "answer": "Key issues which affect us"
            },
            {
                "q": "Who joined the online study group?",
                "options": [
                    "Many students",
                    "No one",
                    "Only teachers",
                    "Shopkeepers"
                ],
                "answer": "Many students"
            },
            {
                "q": "What kind of ideas will this discussion generate?",
                "options": [
                    "Negative ideas",
                    "No ideas",
                    "Positive ideas",
                    "Boring ideas"
                ],
                "answer": "Positive ideas"
            }
        ],
        "summary": {
            "takeaways": [
                "জটীল বাক্য গঠনে রিলেটিভ ক্লজ (which, who) এর সঠিক প্রয়োগ।",
                "প্রেজেন্ট পারফেক্ট টেন্সের সাহায্যে সাম্প্রতিক ঘটনা প্রকাশের নিয়ম।"
            ],
            "realLifeUsage": [
                {
                    "context": "সাম্প্রতিক কোনো অর্জন বা লেখা প্রকাশ করতে:",
                    "example": "I have recently read an essay about the power of exercise."
                }
            ]
        }
    },
    {
        "id": "s51",
        "title": "Water Conservation",
        "subtitle": "পানি সংরক্ষণ",
        "level": "Intermediate",
        "levelColor": "amber",
        "topic": "Environment",
        "learningObjectives": [
            "Imperatives and recommendations",
            "Water vocabulary"
        ],
        "grammarFocus": [
            "Imperatives",
            "Water Vocab"
        ],
        "grammarTeach": {
            "structure": "Present Perfect or Relative Clauses",
            "formula": "Subject + has/have + V3 + Object",
            "explanation": "এই গল্পে সংযোগকারী রিলেটিভ ক্লজ (who, which) এবং প্রেজেন্ট পারফেক্ট টেন্সের ব্যবহার নিয়ে বিষদ আলোচনা করা হয়েছে।",
            "examples": [
                {
                    "eng": "He has lived here since 2018.",
                    "bng": "সে ২০১৮ সাল থেকে এখানে বাস করছে।"
                },
                {
                    "eng": "The book, which I read, is good.",
                    "bng": "বইটি, যা আমি পড়েছিলাম, তা ভালো ছিল।"
                }
            ]
        },
        "sentences": [
            {
                "eng": "Recently, Nadia has written a paragraph on water conservation.",
                "bng": "সম্প্রতি নাদিয়া পানি সংরক্ষণ এর ওপর একটি অনুচ্ছেদ লিখেছে।"
            },
            {
                "eng": "She wants to highlight the key issues which affect us.",
                "bng": "সে মূল বিষয়গুলোকে তুলে ধরতে চায় যেগুলো আমাদের প্রভাবিত করে।"
            },
            {
                "eng": "She believes that technology can solve these problems easily.",
                "bng": "সে বিশ্বাস করে যে প্রযুক্তি সহজেই এই সমস্যাগুলোর সমাধান করতে পারে।"
            },
            {
                "eng": "Many students have joined the online study group to discuss it.",
                "bng": "অনেক ছাত্র এতে আলোচনা করার জন্য অনলাইন স্টাডি গ্রুপে যোগ দিয়েছে।"
            },
            {
                "eng": "This discussion will surely generate positive ideas.",
                "bng": "এই আলোচনাটি অবশ্যই ইতিবাচক চিন্তাভাবনার জন্ম দেবে।"
            }
        ],
        "vocabulary": [
            {
                "word": "recently",
                "bangla": "সম্প্রতি",
                "partOfSpeech": "adverb"
            },
            {
                "word": "highlight",
                "bangla": "তুলে ধরা / চিহ্ণিত করা",
                "partOfSpeech": "verb"
            },
            {
                "word": "affect",
                "bangla": "প্রভাবিত করা",
                "partOfSpeech": "verb"
            },
            {
                "word": "discussion",
                "bangla": "আলোচনা",
                "partOfSpeech": "noun"
            },
            {
                "word": "positive",
                "bangla": "ইতিবাচক",
                "partOfSpeech": "adjective"
            }
        ],
        "questions": [
            {
                "q": "What did Nadia write a paragraph on?",
                "options": [
                    "Water Conservation",
                    "A standard story",
                    "A math test",
                    "A poem"
                ],
                "answer": "Water Conservation"
            },
            {
                "q": "What does she want to highlight?",
                "options": [
                    "Key issues which affect us",
                    "Funny cartoon pictures",
                    "Her daily routine",
                    "Shopping lists"
                ],
                "answer": "Key issues which affect us"
            },
            {
                "q": "Who joined the online study group?",
                "options": [
                    "Many students",
                    "No one",
                    "Only teachers",
                    "Shopkeepers"
                ],
                "answer": "Many students"
            },
            {
                "q": "What kind of ideas will this discussion generate?",
                "options": [
                    "Negative ideas",
                    "No ideas",
                    "Positive ideas",
                    "Boring ideas"
                ],
                "answer": "Positive ideas"
            }
        ],
        "summary": {
            "takeaways": [
                "জটীল বাক্য গঠনে রিলেটিভ ক্লজ (which, who) এর সঠিক প্রয়োগ।",
                "প্রেজেন্ট পারফেক্ট টেন্সের সাহায্যে সাম্প্রতিক ঘটনা প্রকাশের নিয়ম।"
            ],
            "realLifeUsage": [
                {
                    "context": "সাম্প্রতিক কোনো অর্জন বা লেখা প্রকাশ করতে:",
                    "example": "I have recently read an essay about water conservation."
                }
            ]
        }
    },
    {
        "id": "s52",
        "title": "The Habit of Reading",
        "subtitle": "পড়ার অভ্যাস",
        "level": "Intermediate",
        "levelColor": "amber",
        "topic": "Daily Life",
        "learningObjectives": [
            "Present perfect simple vs past simple",
            "Literature vocabulary"
        ],
        "grammarFocus": [
            "Present Perfect vs Past",
            "Literature Vocab"
        ],
        "grammarTeach": {
            "structure": "Present Perfect or Relative Clauses",
            "formula": "Subject + has/have + V3 + Object",
            "explanation": "এই গল্পে সংযোগকারী রিলেটিভ ক্লজ (who, which) এবং প্রেজেন্ট পারফেক্ট টেন্সের ব্যবহার নিয়ে বিষদ আলোচনা করা হয়েছে।",
            "examples": [
                {
                    "eng": "He has lived here since 2018.",
                    "bng": "সে ২০১৮ সাল থেকে এখানে বাস করছে।"
                },
                {
                    "eng": "The book, which I read, is good.",
                    "bng": "বইটি, যা আমি পড়েছিলাম, তা ভালো ছিল।"
                }
            ]
        },
        "sentences": [
            {
                "eng": "Recently, Nadia has written a paragraph on the habit of reading.",
                "bng": "সম্প্রতি নাদিয়া পড়ার অভ্যাস এর ওপর একটি অনুচ্ছেদ লিখেছে।"
            },
            {
                "eng": "She wants to highlight the key issues which affect us.",
                "bng": "সে মূল বিষয়গুলোকে তুলে ধরতে চায় যেগুলো আমাদের প্রভাবিত করে।"
            },
            {
                "eng": "She believes that technology can solve these problems easily.",
                "bng": "সে বিশ্বাস করে যে প্রযুক্তি সহজেই এই সমস্যাগুলোর সমাধান করতে পারে।"
            },
            {
                "eng": "Many students have joined the online study group to discuss it.",
                "bng": "অনেক ছাত্র এতে আলোচনা করার জন্য অনলাইন স্টাডি গ্রুপে যোগ দিয়েছে।"
            },
            {
                "eng": "This discussion will surely generate positive ideas.",
                "bng": "এই আলোচনাটি অবশ্যই ইতিবাচক চিন্তাভাবনার জন্ম দেবে।"
            }
        ],
        "vocabulary": [
            {
                "word": "recently",
                "bangla": "সম্প্রতি",
                "partOfSpeech": "adverb"
            },
            {
                "word": "highlight",
                "bangla": "তুলে ধরা / চিহ্ণিত করা",
                "partOfSpeech": "verb"
            },
            {
                "word": "affect",
                "bangla": "প্রভাবিত করা",
                "partOfSpeech": "verb"
            },
            {
                "word": "discussion",
                "bangla": "আলোচনা",
                "partOfSpeech": "noun"
            },
            {
                "word": "positive",
                "bangla": "ইতিবাচক",
                "partOfSpeech": "adjective"
            }
        ],
        "questions": [
            {
                "q": "What did Nadia write a paragraph on?",
                "options": [
                    "The Habit of Reading",
                    "A standard story",
                    "A math test",
                    "A poem"
                ],
                "answer": "The Habit of Reading"
            },
            {
                "q": "What does she want to highlight?",
                "options": [
                    "Key issues which affect us",
                    "Funny cartoon pictures",
                    "Her daily routine",
                    "Shopping lists"
                ],
                "answer": "Key issues which affect us"
            },
            {
                "q": "Who joined the online study group?",
                "options": [
                    "Many students",
                    "No one",
                    "Only teachers",
                    "Shopkeepers"
                ],
                "answer": "Many students"
            },
            {
                "q": "What kind of ideas will this discussion generate?",
                "options": [
                    "Negative ideas",
                    "No ideas",
                    "Positive ideas",
                    "Boring ideas"
                ],
                "answer": "Positive ideas"
            }
        ],
        "summary": {
            "takeaways": [
                "জটীল বাক্য গঠনে রিলেটিভ ক্লজ (which, who) এর সঠিক প্রয়োগ।",
                "প্রেজেন্ট পারফেক্ট টেন্সের সাহায্যে সাম্প্রতিক ঘটনা প্রকাশের নিয়ম।"
            ],
            "realLifeUsage": [
                {
                    "context": "সাম্প্রতিক কোনো অর্জন বা লেখা প্রকাশ করতে:",
                    "example": "I have recently read an essay about the habit of reading."
                }
            ]
        }
    },
    {
        "id": "s53",
        "title": "Standard of Living",
        "subtitle": "জীবনযাত্রার মান",
        "level": "Intermediate",
        "levelColor": "amber",
        "topic": "Economy",
        "learningObjectives": [
            "Comparatives and superlatives",
            "Economic vocabulary"
        ],
        "grammarFocus": [
            "Comparatives",
            "Economic Vocab"
        ],
        "grammarTeach": {
            "structure": "Present Perfect or Relative Clauses",
            "formula": "Subject + has/have + V3 + Object",
            "explanation": "এই গল্পে সংযোগকারী রিলেটিভ ক্লজ (who, which) এবং প্রেজেন্ট পারফেক্ট টেন্সের ব্যবহার নিয়ে বিষদ আলোচনা করা হয়েছে।",
            "examples": [
                {
                    "eng": "He has lived here since 2018.",
                    "bng": "সে ২০১৮ সাল থেকে এখানে বাস করছে।"
                },
                {
                    "eng": "The book, which I read, is good.",
                    "bng": "বইটি, যা আমি পড়েছিলাম, তা ভালো ছিল।"
                }
            ]
        },
        "sentences": [
            {
                "eng": "Recently, Nadia has written a paragraph on standard of living.",
                "bng": "সম্প্রতি নাদিয়া জীবনযাত্রার মান এর ওপর একটি অনুচ্ছেদ লিখেছে।"
            },
            {
                "eng": "She wants to highlight the key issues which affect us.",
                "bng": "সে মূল বিষয়গুলোকে তুলে ধরতে চায় যেগুলো আমাদের প্রভাবিত করে।"
            },
            {
                "eng": "She believes that technology can solve these problems easily.",
                "bng": "সে বিশ্বাস করে যে প্রযুক্তি সহজেই এই সমস্যাগুলোর সমাধান করতে পারে।"
            },
            {
                "eng": "Many students have joined the online study group to discuss it.",
                "bng": "অনেক ছাত্র এতে আলোচনা করার জন্য অনলাইন স্টাডি গ্রুপে যোগ দিয়েছে।"
            },
            {
                "eng": "This discussion will surely generate positive ideas.",
                "bng": "এই আলোচনাটি অবশ্যই ইতিবাচক চিন্তাভাবনার জন্ম দেবে।"
            }
        ],
        "vocabulary": [
            {
                "word": "recently",
                "bangla": "সম্প্রতি",
                "partOfSpeech": "adverb"
            },
            {
                "word": "highlight",
                "bangla": "তুলে ধরা / চিহ্ণিত করা",
                "partOfSpeech": "verb"
            },
            {
                "word": "affect",
                "bangla": "প্রভাবিত করা",
                "partOfSpeech": "verb"
            },
            {
                "word": "discussion",
                "bangla": "আলোচনা",
                "partOfSpeech": "noun"
            },
            {
                "word": "positive",
                "bangla": "ইতিবাচক",
                "partOfSpeech": "adjective"
            }
        ],
        "questions": [
            {
                "q": "What did Nadia write a paragraph on?",
                "options": [
                    "Standard of Living",
                    "A standard story",
                    "A math test",
                    "A poem"
                ],
                "answer": "Standard of Living"
            },
            {
                "q": "What does she want to highlight?",
                "options": [
                    "Key issues which affect us",
                    "Funny cartoon pictures",
                    "Her daily routine",
                    "Shopping lists"
                ],
                "answer": "Key issues which affect us"
            },
            {
                "q": "Who joined the online study group?",
                "options": [
                    "Many students",
                    "No one",
                    "Only teachers",
                    "Shopkeepers"
                ],
                "answer": "Many students"
            },
            {
                "q": "What kind of ideas will this discussion generate?",
                "options": [
                    "Negative ideas",
                    "No ideas",
                    "Positive ideas",
                    "Boring ideas"
                ],
                "answer": "Positive ideas"
            }
        ],
        "summary": {
            "takeaways": [
                "জটীল বাক্য গঠনে রিলেটিভ ক্লজ (which, who) এর সঠিক প্রয়োগ।",
                "প্রেজেন্ট পারফেক্ট টেন্সের সাহায্যে সাম্প্রতিক ঘটনা প্রকাশের নিয়ম।"
            ],
            "realLifeUsage": [
                {
                    "context": "সাম্প্রতিক কোনো অর্জন বা লেখা প্রকাশ করতে:",
                    "example": "I have recently read an essay about standard of living."
                }
            ]
        }
    },
    {
        "id": "s54",
        "title": "Using Pocket Money",
        "subtitle": "পকেটমানির ব্যবহার",
        "level": "Intermediate",
        "levelColor": "amber",
        "topic": "Finance",
        "learningObjectives": [
            "First conditional structures",
            "Financial vocabulary"
        ],
        "grammarFocus": [
            "Conditionals",
            "Financial Vocab"
        ],
        "grammarTeach": {
            "structure": "Present Perfect or Relative Clauses",
            "formula": "Subject + has/have + V3 + Object",
            "explanation": "এই গল্পে সংযোগকারী রিলেটিভ ক্লজ (who, which) এবং প্রেজেন্ট পারফেক্ট টেন্সের ব্যবহার নিয়ে বিষদ আলোচনা করা হয়েছে।",
            "examples": [
                {
                    "eng": "He has lived here since 2018.",
                    "bng": "সে ২০১৮ সাল থেকে এখানে বাস করছে।"
                },
                {
                    "eng": "The book, which I read, is good.",
                    "bng": "বইটি, যা আমি পড়েছিলাম, তা ভালো ছিল।"
                }
            ]
        },
        "sentences": [
            {
                "eng": "Recently, Nadia has written a paragraph on using pocket money.",
                "bng": "সম্প্রতি নাদিয়া পকেটমানির ব্যবহার এর ওপর একটি অনুচ্ছেদ লিখেছে।"
            },
            {
                "eng": "She wants to highlight the key issues which affect us.",
                "bng": "সে মূল বিষয়গুলোকে তুলে ধরতে চায় যেগুলো আমাদের প্রভাবিত করে।"
            },
            {
                "eng": "She believes that technology can solve these problems easily.",
                "bng": "সে বিশ্বাস করে যে প্রযুক্তি সহজেই এই সমস্যাগুলোর সমাধান করতে পারে।"
            },
            {
                "eng": "Many students have joined the online study group to discuss it.",
                "bng": "অনেক ছাত্র এতে আলোচনা করার জন্য অনলাইন স্টাডি গ্রুপে যোগ দিয়েছে।"
            },
            {
                "eng": "This discussion will surely generate positive ideas.",
                "bng": "এই আলোচনাটি অবশ্যই ইতিবাচক চিন্তাভাবনার জন্ম দেবে।"
            }
        ],
        "vocabulary": [
            {
                "word": "recently",
                "bangla": "সম্প্রতি",
                "partOfSpeech": "adverb"
            },
            {
                "word": "highlight",
                "bangla": "তুলে ধরা / চিহ্ণিত করা",
                "partOfSpeech": "verb"
            },
            {
                "word": "affect",
                "bangla": "প্রভাবিত করা",
                "partOfSpeech": "verb"
            },
            {
                "word": "discussion",
                "bangla": "আলোচনা",
                "partOfSpeech": "noun"
            },
            {
                "word": "positive",
                "bangla": "ইতিবাচক",
                "partOfSpeech": "adjective"
            }
        ],
        "questions": [
            {
                "q": "What did Nadia write a paragraph on?",
                "options": [
                    "Using Pocket Money",
                    "A standard story",
                    "A math test",
                    "A poem"
                ],
                "answer": "Using Pocket Money"
            },
            {
                "q": "What does she want to highlight?",
                "options": [
                    "Key issues which affect us",
                    "Funny cartoon pictures",
                    "Her daily routine",
                    "Shopping lists"
                ],
                "answer": "Key issues which affect us"
            },
            {
                "q": "Who joined the online study group?",
                "options": [
                    "Many students",
                    "No one",
                    "Only teachers",
                    "Shopkeepers"
                ],
                "answer": "Many students"
            },
            {
                "q": "What kind of ideas will this discussion generate?",
                "options": [
                    "Negative ideas",
                    "No ideas",
                    "Positive ideas",
                    "Boring ideas"
                ],
                "answer": "Positive ideas"
            }
        ],
        "summary": {
            "takeaways": [
                "জটীল বাক্য গঠনে রিলেটিভ ক্লজ (which, who) এর সঠিক প্রয়োগ।",
                "প্রেজেন্ট পারফেক্ট টেন্সের সাহায্যে সাম্প্রতিক ঘটনা প্রকাশের নিয়ম।"
            ],
            "realLifeUsage": [
                {
                    "context": "সাম্প্রতিক কোনো অর্জন বা লেখা প্রকাশ করতে:",
                    "example": "I have recently read an essay about using pocket money."
                }
            ]
        }
    },
    {
        "id": "s55",
        "title": "True Friendship",
        "subtitle": "প্রকৃত বন্ধুত্ব",
        "level": "Intermediate",
        "levelColor": "amber",
        "topic": "Society",
        "learningObjectives": [
            "Defining relative clauses",
            "Relationship vocabulary"
        ],
        "grammarFocus": [
            "Relative Clauses",
            "Relationship Vocab"
        ],
        "grammarTeach": {
            "structure": "Present Perfect or Relative Clauses",
            "formula": "Subject + has/have + V3 + Object",
            "explanation": "এই গল্পে সংযোগকারী রিলেটিভ ক্লজ (who, which) এবং প্রেজেন্ট পারফেক্ট টেন্সের ব্যবহার নিয়ে বিষদ আলোচনা করা হয়েছে।",
            "examples": [
                {
                    "eng": "He has lived here since 2018.",
                    "bng": "সে ২০১৮ সাল থেকে এখানে বাস করছে।"
                },
                {
                    "eng": "The book, which I read, is good.",
                    "bng": "বইটি, যা আমি পড়েছিলাম, তা ভালো ছিল।"
                }
            ]
        },
        "sentences": [
            {
                "eng": "Recently, Nadia has written a paragraph on true friendship.",
                "bng": "সম্প্রতি নাদিয়া প্রকৃত বন্ধুত্ব এর ওপর একটি অনুচ্ছেদ লিখেছে।"
            },
            {
                "eng": "She wants to highlight the key issues which affect us.",
                "bng": "সে মূল বিষয়গুলোকে তুলে ধরতে চায় যেগুলো আমাদের প্রভাবিত করে।"
            },
            {
                "eng": "She believes that technology can solve these problems easily.",
                "bng": "সে বিশ্বাস করে যে প্রযুক্তি সহজেই এই সমস্যাগুলোর সমাধান করতে পারে।"
            },
            {
                "eng": "Many students have joined the online study group to discuss it.",
                "bng": "অনেক ছাত্র এতে আলোচনা করার জন্য অনলাইন স্টাডি গ্রুপে যোগ দিয়েছে।"
            },
            {
                "eng": "This discussion will surely generate positive ideas.",
                "bng": "এই আলোচনাটি অবশ্যই ইতিবাচক চিন্তাভাবনার জন্ম দেবে।"
            }
        ],
        "vocabulary": [
            {
                "word": "recently",
                "bangla": "সম্প্রতি",
                "partOfSpeech": "adverb"
            },
            {
                "word": "highlight",
                "bangla": "তুলে ধরা / চিহ্ণিত করা",
                "partOfSpeech": "verb"
            },
            {
                "word": "affect",
                "bangla": "প্রভাবিত করা",
                "partOfSpeech": "verb"
            },
            {
                "word": "discussion",
                "bangla": "আলোচনা",
                "partOfSpeech": "noun"
            },
            {
                "word": "positive",
                "bangla": "ইতিবাচক",
                "partOfSpeech": "adjective"
            }
        ],
        "questions": [
            {
                "q": "What did Nadia write a paragraph on?",
                "options": [
                    "True Friendship",
                    "A standard story",
                    "A math test",
                    "A poem"
                ],
                "answer": "True Friendship"
            },
            {
                "q": "What does she want to highlight?",
                "options": [
                    "Key issues which affect us",
                    "Funny cartoon pictures",
                    "Her daily routine",
                    "Shopping lists"
                ],
                "answer": "Key issues which affect us"
            },
            {
                "q": "Who joined the online study group?",
                "options": [
                    "Many students",
                    "No one",
                    "Only teachers",
                    "Shopkeepers"
                ],
                "answer": "Many students"
            },
            {
                "q": "What kind of ideas will this discussion generate?",
                "options": [
                    "Negative ideas",
                    "No ideas",
                    "Positive ideas",
                    "Boring ideas"
                ],
                "answer": "Positive ideas"
            }
        ],
        "summary": {
            "takeaways": [
                "জটীল বাক্য গঠনে রিলেটিভ ক্লজ (which, who) এর সঠিক প্রয়োগ।",
                "প্রেজেন্ট পারফেক্ট টেন্সের সাহায্যে সাম্প্রতিক ঘটনা প্রকাশের নিয়ম।"
            ],
            "realLifeUsage": [
                {
                    "context": "সাম্প্রতিক কোনো অর্জন বা লেখা প্রকাশ করতে:",
                    "example": "I have recently read an essay about true friendship."
                }
            ]
        }
    },
    {
        "id": "s56",
        "title": "Virtual Learning",
        "subtitle": "ভার্চুয়াল লার্নিং",
        "level": "Intermediate",
        "levelColor": "amber",
        "topic": "Education",
        "learningObjectives": [
            "Contrast connectors: although, but",
            "E-learning vocabulary"
        ],
        "grammarFocus": [
            "Connectors",
            "E-learning Vocab"
        ],
        "grammarTeach": {
            "structure": "Present Perfect or Relative Clauses",
            "formula": "Subject + has/have + V3 + Object",
            "explanation": "এই গল্পে সংযোগকারী রিলেটিভ ক্লজ (who, which) এবং প্রেজেন্ট পারফেক্ট টেন্সের ব্যবহার নিয়ে বিষদ আলোচনা করা হয়েছে।",
            "examples": [
                {
                    "eng": "He has lived here since 2018.",
                    "bng": "সে ২০১৮ সাল থেকে এখানে বাস করছে।"
                },
                {
                    "eng": "The book, which I read, is good.",
                    "bng": "বইটি, যা আমি পড়েছিলাম, তা ভালো ছিল।"
                }
            ]
        },
        "sentences": [
            {
                "eng": "Recently, Nadia has written a paragraph on virtual learning.",
                "bng": "সম্প্রতি নাদিয়া ভার্চুয়াল লার্নিং এর ওপর একটি অনুচ্ছেদ লিখেছে।"
            },
            {
                "eng": "She wants to highlight the key issues which affect us.",
                "bng": "সে মূল বিষয়গুলোকে তুলে ধরতে চায় যেগুলো আমাদের প্রভাবিত করে।"
            },
            {
                "eng": "She believes that technology can solve these problems easily.",
                "bng": "সে বিশ্বাস করে যে প্রযুক্তি সহজেই এই সমস্যাগুলোর সমাধান করতে পারে।"
            },
            {
                "eng": "Many students have joined the online study group to discuss it.",
                "bng": "অনেক ছাত্র এতে আলোচনা করার জন্য অনলাইন স্টাডি গ্রুপে যোগ দিয়েছে।"
            },
            {
                "eng": "This discussion will surely generate positive ideas.",
                "bng": "এই আলোচনাটি অবশ্যই ইতিবাচক চিন্তাভাবনার জন্ম দেবে।"
            }
        ],
        "vocabulary": [
            {
                "word": "recently",
                "bangla": "সম্প্রতি",
                "partOfSpeech": "adverb"
            },
            {
                "word": "highlight",
                "bangla": "তুলে ধরা / চিহ্ণিত করা",
                "partOfSpeech": "verb"
            },
            {
                "word": "affect",
                "bangla": "প্রভাবিত করা",
                "partOfSpeech": "verb"
            },
            {
                "word": "discussion",
                "bangla": "আলোচনা",
                "partOfSpeech": "noun"
            },
            {
                "word": "positive",
                "bangla": "ইতিবাচক",
                "partOfSpeech": "adjective"
            }
        ],
        "questions": [
            {
                "q": "What did Nadia write a paragraph on?",
                "options": [
                    "Virtual Learning",
                    "A standard story",
                    "A math test",
                    "A poem"
                ],
                "answer": "Virtual Learning"
            },
            {
                "q": "What does she want to highlight?",
                "options": [
                    "Key issues which affect us",
                    "Funny cartoon pictures",
                    "Her daily routine",
                    "Shopping lists"
                ],
                "answer": "Key issues which affect us"
            },
            {
                "q": "Who joined the online study group?",
                "options": [
                    "Many students",
                    "No one",
                    "Only teachers",
                    "Shopkeepers"
                ],
                "answer": "Many students"
            },
            {
                "q": "What kind of ideas will this discussion generate?",
                "options": [
                    "Negative ideas",
                    "No ideas",
                    "Positive ideas",
                    "Boring ideas"
                ],
                "answer": "Positive ideas"
            }
        ],
        "summary": {
            "takeaways": [
                "জটীল বাক্য গঠনে রিলেটিভ ক্লজ (which, who) এর সঠিক প্রয়োগ।",
                "প্রেজেন্ট পারফেক্ট টেন্সের সাহায্যে সাম্প্রতিক ঘটনা প্রকাশের নিয়ম।"
            ],
            "realLifeUsage": [
                {
                    "context": "সাম্প্রতিক কোনো অর্জন বা লেখা প্রকাশ করতে:",
                    "example": "I have recently read an essay about virtual learning."
                }
            ]
        }
    },
    {
        "id": "s57",
        "title": "Space Exploration",
        "subtitle": "মহাকাশ অন্বেষণ",
        "level": "Intermediate",
        "levelColor": "amber",
        "topic": "Science",
        "learningObjectives": [
            "Future probability: may, might",
            "Space vocabulary"
        ],
        "grammarFocus": [
            "Modal Probability",
            "Space Vocab"
        ],
        "grammarTeach": {
            "structure": "Present Perfect or Relative Clauses",
            "formula": "Subject + has/have + V3 + Object",
            "explanation": "এই গল্পে সংযোগকারী রিলেটিভ ক্লজ (who, which) এবং প্রেজেন্ট পারফেক্ট টেন্সের ব্যবহার নিয়ে বিষদ আলোচনা করা হয়েছে।",
            "examples": [
                {
                    "eng": "He has lived here since 2018.",
                    "bng": "সে ২০১৮ সাল থেকে এখানে বাস করছে।"
                },
                {
                    "eng": "The book, which I read, is good.",
                    "bng": "বইটি, যা আমি পড়েছিলাম, তা ভালো ছিল।"
                }
            ]
        },
        "sentences": [
            {
                "eng": "Recently, Nadia has written a paragraph on space exploration.",
                "bng": "সম্প্রতি নাদিয়া মহাকাশ অন্বেষণ এর ওপর একটি অনুচ্ছেদ লিখেছে।"
            },
            {
                "eng": "She wants to highlight the key issues which affect us.",
                "bng": "সে মূল বিষয়গুলোকে তুলে ধরতে চায় যেগুলো আমাদের প্রভাবিত করে।"
            },
            {
                "eng": "She believes that technology can solve these problems easily.",
                "bng": "সে বিশ্বাস করে যে প্রযুক্তি সহজেই এই সমস্যাগুলোর সমাধান করতে পারে।"
            },
            {
                "eng": "Many students have joined the online study group to discuss it.",
                "bng": "অনেক ছাত্র এতে আলোচনা করার জন্য অনলাইন স্টাডি গ্রুপে যোগ দিয়েছে।"
            },
            {
                "eng": "This discussion will surely generate positive ideas.",
                "bng": "এই আলোচনাটি অবশ্যই ইতিবাচক চিন্তাভাবনার জন্ম দেবে।"
            }
        ],
        "vocabulary": [
            {
                "word": "recently",
                "bangla": "সম্প্রতি",
                "partOfSpeech": "adverb"
            },
            {
                "word": "highlight",
                "bangla": "তুলে ধরা / চিহ্ণিত করা",
                "partOfSpeech": "verb"
            },
            {
                "word": "affect",
                "bangla": "প্রভাবিত করা",
                "partOfSpeech": "verb"
            },
            {
                "word": "discussion",
                "bangla": "আলোচনা",
                "partOfSpeech": "noun"
            },
            {
                "word": "positive",
                "bangla": "ইতিবাচক",
                "partOfSpeech": "adjective"
            }
        ],
        "questions": [
            {
                "q": "What did Nadia write a paragraph on?",
                "options": [
                    "Space Exploration",
                    "A standard story",
                    "A math test",
                    "A poem"
                ],
                "answer": "Space Exploration"
            },
            {
                "q": "What does she want to highlight?",
                "options": [
                    "Key issues which affect us",
                    "Funny cartoon pictures",
                    "Her daily routine",
                    "Shopping lists"
                ],
                "answer": "Key issues which affect us"
            },
            {
                "q": "Who joined the online study group?",
                "options": [
                    "Many students",
                    "No one",
                    "Only teachers",
                    "Shopkeepers"
                ],
                "answer": "Many students"
            },
            {
                "q": "What kind of ideas will this discussion generate?",
                "options": [
                    "Negative ideas",
                    "No ideas",
                    "Positive ideas",
                    "Boring ideas"
                ],
                "answer": "Positive ideas"
            }
        ],
        "summary": {
            "takeaways": [
                "জটীল বাক্য গঠনে রিলেটিভ ক্লজ (which, who) এর সঠিক প্রয়োগ।",
                "প্রেজেন্ট পারফেক্ট টেন্সের সাহায্যে সাম্প্রতিক ঘটনা প্রকাশের নিয়ম।"
            ],
            "realLifeUsage": [
                {
                    "context": "সাম্প্রতিক কোনো অর্জন বা লেখা প্রকাশ করতে:",
                    "example": "I have recently read an essay about space exploration."
                }
            ]
        }
    },
    {
        "id": "s58",
        "title": "Organic Farming",
        "subtitle": "জৈব চাষাবাদ",
        "level": "Intermediate",
        "levelColor": "amber",
        "topic": "Agriculture",
        "learningObjectives": [
            "Present simple passive",
            "Farming vocabulary"
        ],
        "grammarFocus": [
            "Passive Voice",
            "Farming Vocab"
        ],
        "grammarTeach": {
            "structure": "Present Perfect or Relative Clauses",
            "formula": "Subject + has/have + V3 + Object",
            "explanation": "এই গল্পে সংযোগকারী রিলেটিভ ক্লজ (who, which) এবং প্রেজেন্ট পারফেক্ট টেন্সের ব্যবহার নিয়ে বিষদ আলোচনা করা হয়েছে।",
            "examples": [
                {
                    "eng": "He has lived here since 2018.",
                    "bng": "সে ২০১৮ সাল থেকে এখানে বাস করছে।"
                },
                {
                    "eng": "The book, which I read, is good.",
                    "bng": "বইটি, যা আমি পড়েছিলাম, তা ভালো ছিল।"
                }
            ]
        },
        "sentences": [
            {
                "eng": "Recently, Nadia has written a paragraph on organic farming.",
                "bng": "সম্প্রতি নাদিয়া জৈব চাষাবাদ এর ওপর একটি অনুচ্ছেদ লিখেছে।"
            },
            {
                "eng": "She wants to highlight the key issues which affect us.",
                "bng": "সে মূল বিষয়গুলোকে তুলে ধরতে চায় যেগুলো আমাদের প্রভাবিত করে।"
            },
            {
                "eng": "She believes that technology can solve these problems easily.",
                "bng": "সে বিশ্বাস করে যে প্রযুক্তি সহজেই এই সমস্যাগুলোর সমাধান করতে পারে।"
            },
            {
                "eng": "Many students have joined the online study group to discuss it.",
                "bng": "অনেক ছাত্র এতে আলোচনা করার জন্য অনলাইন স্টাডি গ্রুপে যোগ দিয়েছে।"
            },
            {
                "eng": "This discussion will surely generate positive ideas.",
                "bng": "এই আলোচনাটি অবশ্যই ইতিবাচক চিন্তাভাবনার জন্ম দেবে।"
            }
        ],
        "vocabulary": [
            {
                "word": "recently",
                "bangla": "সম্প্রতি",
                "partOfSpeech": "adverb"
            },
            {
                "word": "highlight",
                "bangla": "তুলে ধরা / চিহ্ণিত করা",
                "partOfSpeech": "verb"
            },
            {
                "word": "affect",
                "bangla": "প্রভাবিত করা",
                "partOfSpeech": "verb"
            },
            {
                "word": "discussion",
                "bangla": "আলোচনা",
                "partOfSpeech": "noun"
            },
            {
                "word": "positive",
                "bangla": "ইতিবাচক",
                "partOfSpeech": "adjective"
            }
        ],
        "questions": [
            {
                "q": "What did Nadia write a paragraph on?",
                "options": [
                    "Organic Farming",
                    "A standard story",
                    "A math test",
                    "A poem"
                ],
                "answer": "Organic Farming"
            },
            {
                "q": "What does she want to highlight?",
                "options": [
                    "Key issues which affect us",
                    "Funny cartoon pictures",
                    "Her daily routine",
                    "Shopping lists"
                ],
                "answer": "Key issues which affect us"
            },
            {
                "q": "Who joined the online study group?",
                "options": [
                    "Many students",
                    "No one",
                    "Only teachers",
                    "Shopkeepers"
                ],
                "answer": "Many students"
            },
            {
                "q": "What kind of ideas will this discussion generate?",
                "options": [
                    "Negative ideas",
                    "No ideas",
                    "Positive ideas",
                    "Boring ideas"
                ],
                "answer": "Positive ideas"
            }
        ],
        "summary": {
            "takeaways": [
                "জটীল বাক্য গঠনে রিলেটিভ ক্লজ (which, who) এর সঠিক প্রয়োগ।",
                "প্রেজেন্ট পারফেক্ট টেন্সের সাহায্যে সাম্প্রতিক ঘটনা প্রকাশের নিয়ম।"
            ],
            "realLifeUsage": [
                {
                    "context": "সাম্প্রতিক কোনো অর্জন বা লেখা প্রকাশ করতে:",
                    "example": "I have recently read an essay about organic farming."
                }
            ]
        }
    },
    {
        "id": "s59",
        "title": "Waste Management",
        "subtitle": "বর্জ্য ব্যবস্থাপনা",
        "level": "Intermediate",
        "levelColor": "amber",
        "topic": "Environment",
        "learningObjectives": [
            "Should have + V3 for past regrets",
            "Waste vocabulary"
        ],
        "grammarFocus": [
            "Past Regrets",
            "Waste Vocab"
        ],
        "grammarTeach": {
            "structure": "Present Perfect or Relative Clauses",
            "formula": "Subject + has/have + V3 + Object",
            "explanation": "এই গল্পে সংযোগকারী রিলেটিভ ক্লজ (who, which) এবং প্রেজেন্ট পারফেক্ট টেন্সের ব্যবহার নিয়ে বিষদ আলোচনা করা হয়েছে।",
            "examples": [
                {
                    "eng": "He has lived here since 2018.",
                    "bng": "সে ২০১৮ সাল থেকে এখানে বাস করছে।"
                },
                {
                    "eng": "The book, which I read, is good.",
                    "bng": "বইটি, যা আমি পড়েছিলাম, তা ভালো ছিল।"
                }
            ]
        },
        "sentences": [
            {
                "eng": "Recently, Nadia has written a paragraph on waste management.",
                "bng": "সম্প্রতি নাদিয়া বর্জ্য ব্যবস্থাপনা এর ওপর একটি অনুচ্ছেদ লিখেছে।"
            },
            {
                "eng": "She wants to highlight the key issues which affect us.",
                "bng": "সে মূল বিষয়গুলোকে তুলে ধরতে চায় যেগুলো আমাদের প্রভাবিত করে।"
            },
            {
                "eng": "She believes that technology can solve these problems easily.",
                "bng": "সে বিশ্বাস করে যে প্রযুক্তি সহজেই এই সমস্যাগুলোর সমাধান করতে পারে।"
            },
            {
                "eng": "Many students have joined the online study group to discuss it.",
                "bng": "অনেক ছাত্র এতে আলোচনা করার জন্য অনলাইন স্টাডি গ্রুপে যোগ দিয়েছে।"
            },
            {
                "eng": "This discussion will surely generate positive ideas.",
                "bng": "এই আলোচনাটি অবশ্যই ইতিবাচক চিন্তাভাবনার জন্ম দেবে।"
            }
        ],
        "vocabulary": [
            {
                "word": "recently",
                "bangla": "সম্প্রতি",
                "partOfSpeech": "adverb"
            },
            {
                "word": "highlight",
                "bangla": "তুলে ধরা / চিহ্ণিত করা",
                "partOfSpeech": "verb"
            },
            {
                "word": "affect",
                "bangla": "প্রভাবিত করা",
                "partOfSpeech": "verb"
            },
            {
                "word": "discussion",
                "bangla": "আলোচনা",
                "partOfSpeech": "noun"
            },
            {
                "word": "positive",
                "bangla": "ইতিবাচক",
                "partOfSpeech": "adjective"
            }
        ],
        "questions": [
            {
                "q": "What did Nadia write a paragraph on?",
                "options": [
                    "Waste Management",
                    "A standard story",
                    "A math test",
                    "A poem"
                ],
                "answer": "Waste Management"
            },
            {
                "q": "What does she want to highlight?",
                "options": [
                    "Key issues which affect us",
                    "Funny cartoon pictures",
                    "Her daily routine",
                    "Shopping lists"
                ],
                "answer": "Key issues which affect us"
            },
            {
                "q": "Who joined the online study group?",
                "options": [
                    "Many students",
                    "No one",
                    "Only teachers",
                    "Shopkeepers"
                ],
                "answer": "Many students"
            },
            {
                "q": "What kind of ideas will this discussion generate?",
                "options": [
                    "Negative ideas",
                    "No ideas",
                    "Positive ideas",
                    "Boring ideas"
                ],
                "answer": "Positive ideas"
            }
        ],
        "summary": {
            "takeaways": [
                "জটীল বাক্য গঠনে রিলেটিভ ক্লজ (which, who) এর সঠিক প্রয়োগ।",
                "প্রেজেন্ট পারফেক্ট টেন্সের সাহায্যে সাম্প্রতিক ঘটনা প্রকাশের নিয়ম।"
            ],
            "realLifeUsage": [
                {
                    "context": "সাম্প্রতিক কোনো অর্জন বা লেখা প্রকাশ করতে:",
                    "example": "I have recently read an essay about waste management."
                }
            ]
        }
    },
    {
        "id": "s60",
        "title": "Road Safety Rules",
        "subtitle": "সড়ক নিরাপত্তা নিয়ম",
        "level": "Intermediate",
        "levelColor": "amber",
        "topic": "Society",
        "learningObjectives": [
            "Strong obligation: must, have to",
            "Safety vocabulary"
        ],
        "grammarFocus": [
            "Modal Obligation",
            "Safety Vocab"
        ],
        "grammarTeach": {
            "structure": "Present Perfect or Relative Clauses",
            "formula": "Subject + has/have + V3 + Object",
            "explanation": "এই গল্পে সংযোগকারী রিলেটিভ ক্লজ (who, which) এবং প্রেজেন্ট পারফেক্ট টেন্সের ব্যবহার নিয়ে বিষদ আলোচনা করা হয়েছে।",
            "examples": [
                {
                    "eng": "He has lived here since 2018.",
                    "bng": "সে ২০১৮ সাল থেকে এখানে বাস করছে।"
                },
                {
                    "eng": "The book, which I read, is good.",
                    "bng": "বইটি, যা আমি পড়েছিলাম, তা ভালো ছিল।"
                }
            ]
        },
        "sentences": [
            {
                "eng": "Recently, Nadia has written a paragraph on road safety rules.",
                "bng": "সম্প্রতি নাদিয়া সড়ক নিরাপত্তা নিয়ম এর ওপর একটি অনুচ্ছেদ লিখেছে।"
            },
            {
                "eng": "She wants to highlight the key issues which affect us.",
                "bng": "সে মূল বিষয়গুলোকে তুলে ধরতে চায় যেগুলো আমাদের প্রভাবিত করে।"
            },
            {
                "eng": "She believes that technology can solve these problems easily.",
                "bng": "সে বিশ্বাস করে যে প্রযুক্তি সহজেই এই সমস্যাগুলোর সমাধান করতে পারে।"
            },
            {
                "eng": "Many students have joined the online study group to discuss it.",
                "bng": "অনেক ছাত্র এতে আলোচনা করার জন্য অনলাইন স্টাডি গ্রুপে যোগ দিয়েছে।"
            },
            {
                "eng": "This discussion will surely generate positive ideas.",
                "bng": "এই আলোচনাটি অবশ্যই ইতিবাচক চিন্তাভাবনার জন্ম দেবে।"
            }
        ],
        "vocabulary": [
            {
                "word": "recently",
                "bangla": "সম্প্রতি",
                "partOfSpeech": "adverb"
            },
            {
                "word": "highlight",
                "bangla": "তুলে ধরা / চিহ্ণিত করা",
                "partOfSpeech": "verb"
            },
            {
                "word": "affect",
                "bangla": "প্রভাবিত করা",
                "partOfSpeech": "verb"
            },
            {
                "word": "discussion",
                "bangla": "আলোচনা",
                "partOfSpeech": "noun"
            },
            {
                "word": "positive",
                "bangla": "ইতিবাচক",
                "partOfSpeech": "adjective"
            }
        ],
        "questions": [
            {
                "q": "What did Nadia write a paragraph on?",
                "options": [
                    "Road Safety Rules",
                    "A standard story",
                    "A math test",
                    "A poem"
                ],
                "answer": "Road Safety Rules"
            },
            {
                "q": "What does she want to highlight?",
                "options": [
                    "Key issues which affect us",
                    "Funny cartoon pictures",
                    "Her daily routine",
                    "Shopping lists"
                ],
                "answer": "Key issues which affect us"
            },
            {
                "q": "Who joined the online study group?",
                "options": [
                    "Many students",
                    "No one",
                    "Only teachers",
                    "Shopkeepers"
                ],
                "answer": "Many students"
            },
            {
                "q": "What kind of ideas will this discussion generate?",
                "options": [
                    "Negative ideas",
                    "No ideas",
                    "Positive ideas",
                    "Boring ideas"
                ],
                "answer": "Positive ideas"
            }
        ],
        "summary": {
            "takeaways": [
                "জটীল বাক্য গঠনে রিলেটিভ ক্লজ (which, who) এর সঠিক প্রয়োগ।",
                "প্রেজেন্ট পারফেক্ট টেন্সের সাহায্যে সাম্প্রতিক ঘটনা প্রকাশের নিয়ম।"
            ],
            "realLifeUsage": [
                {
                    "context": "সাম্প্রতিক কোনো অর্জন বা লেখা প্রকাশ করতে:",
                    "example": "I have recently read an essay about road safety rules."
                }
            ]
        }
    },
    {
        "id": "s61",
        "title": "Renewable Energy Sources",
        "subtitle": "নবায়নযোগ্য শক্তি",
        "level": "Intermediate",
        "levelColor": "amber",
        "topic": "Science",
        "learningObjectives": [
            "Present continuous passive",
            "Energy vocabulary"
        ],
        "grammarFocus": [
            "Passive Voice",
            "Energy Vocab"
        ],
        "grammarTeach": {
            "structure": "Present Perfect or Relative Clauses",
            "formula": "Subject + has/have + V3 + Object",
            "explanation": "এই গল্পে সংযোগকারী রিলেটিভ ক্লজ (who, which) এবং প্রেজেন্ট পারফেক্ট টেন্সের ব্যবহার নিয়ে বিষদ আলোচনা করা হয়েছে।",
            "examples": [
                {
                    "eng": "He has lived here since 2018.",
                    "bng": "সে ২০১৮ সাল থেকে এখানে বাস করছে।"
                },
                {
                    "eng": "The book, which I read, is good.",
                    "bng": "বইটি, যা আমি পড়েছিলাম, তা ভালো ছিল।"
                }
            ]
        },
        "sentences": [
            {
                "eng": "Recently, Nadia has written a paragraph on renewable energy sources.",
                "bng": "সম্প্রতি নাদিয়া নবায়নযোগ্য শক্তি এর ওপর একটি অনুচ্ছেদ লিখেছে।"
            },
            {
                "eng": "She wants to highlight the key issues which affect us.",
                "bng": "সে মূল বিষয়গুলোকে তুলে ধরতে চায় যেগুলো আমাদের প্রভাবিত করে।"
            },
            {
                "eng": "She believes that technology can solve these problems easily.",
                "bng": "সে বিশ্বাস করে যে প্রযুক্তি সহজেই এই সমস্যাগুলোর সমাধান করতে পারে।"
            },
            {
                "eng": "Many students have joined the online study group to discuss it.",
                "bng": "অনেক ছাত্র এতে আলোচনা করার জন্য অনলাইন স্টাডি গ্রুপে যোগ দিয়েছে।"
            },
            {
                "eng": "This discussion will surely generate positive ideas.",
                "bng": "এই আলোচনাটি অবশ্যই ইতিবাচক চিন্তাভাবনার জন্ম দেবে।"
            }
        ],
        "vocabulary": [
            {
                "word": "recently",
                "bangla": "সম্প্রতি",
                "partOfSpeech": "adverb"
            },
            {
                "word": "highlight",
                "bangla": "তুলে ধরা / চিহ্ণিত করা",
                "partOfSpeech": "verb"
            },
            {
                "word": "affect",
                "bangla": "প্রভাবিত করা",
                "partOfSpeech": "verb"
            },
            {
                "word": "discussion",
                "bangla": "আলোচনা",
                "partOfSpeech": "noun"
            },
            {
                "word": "positive",
                "bangla": "ইতিবাচক",
                "partOfSpeech": "adjective"
            }
        ],
        "questions": [
            {
                "q": "What did Nadia write a paragraph on?",
                "options": [
                    "Renewable Energy Sources",
                    "A standard story",
                    "A math test",
                    "A poem"
                ],
                "answer": "Renewable Energy Sources"
            },
            {
                "q": "What does she want to highlight?",
                "options": [
                    "Key issues which affect us",
                    "Funny cartoon pictures",
                    "Her daily routine",
                    "Shopping lists"
                ],
                "answer": "Key issues which affect us"
            },
            {
                "q": "Who joined the online study group?",
                "options": [
                    "Many students",
                    "No one",
                    "Only teachers",
                    "Shopkeepers"
                ],
                "answer": "Many students"
            },
            {
                "q": "What kind of ideas will this discussion generate?",
                "options": [
                    "Negative ideas",
                    "No ideas",
                    "Positive ideas",
                    "Boring ideas"
                ],
                "answer": "Positive ideas"
            }
        ],
        "summary": {
            "takeaways": [
                "জটীল বাক্য গঠনে রিলেটিভ ক্লজ (which, who) এর সঠিক প্রয়োগ।",
                "প্রেজেন্ট পারফেক্ট টেন্সের সাহায্যে সাম্প্রতিক ঘটনা প্রকাশের নিয়ম।"
            ],
            "realLifeUsage": [
                {
                    "context": "সাম্প্রতিক কোনো অর্জন বা লেখা প্রকাশ করতে:",
                    "example": "I have recently read an essay about renewable energy sources."
                }
            ]
        }
    },
    {
        "id": "s62",
        "title": "Mobile Phones in Daily Life",
        "subtitle": "দৈনন্দিন জীবনে মোবাইল",
        "level": "Intermediate",
        "levelColor": "amber",
        "topic": "Technology",
        "learningObjectives": [
            "Gerunds as subjects",
            "Tech vocabulary"
        ],
        "grammarFocus": [
            "Gerunds",
            "Tech Vocab"
        ],
        "grammarTeach": {
            "structure": "Present Perfect or Relative Clauses",
            "formula": "Subject + has/have + V3 + Object",
            "explanation": "এই গল্পে সংযোগকারী রিলেটিভ ক্লজ (who, which) এবং প্রেজেন্ট পারফেক্ট টেন্সের ব্যবহার নিয়ে বিষদ আলোচনা করা হয়েছে।",
            "examples": [
                {
                    "eng": "He has lived here since 2018.",
                    "bng": "সে ২০১৮ সাল থেকে এখানে বাস করছে।"
                },
                {
                    "eng": "The book, which I read, is good.",
                    "bng": "বইটি, যা আমি পড়েছিলাম, তা ভালো ছিল।"
                }
            ]
        },
        "sentences": [
            {
                "eng": "Recently, Nadia has written a paragraph on mobile phones in daily life.",
                "bng": "সম্প্রতি নাদিয়া দৈনন্দিন জীবনে মোবাইল এর ওপর একটি অনুচ্ছেদ লিখেছে।"
            },
            {
                "eng": "She wants to highlight the key issues which affect us.",
                "bng": "সে মূল বিষয়গুলোকে তুলে ধরতে চায় যেগুলো আমাদের প্রভাবিত করে।"
            },
            {
                "eng": "She believes that technology can solve these problems easily.",
                "bng": "সে বিশ্বাস করে যে প্রযুক্তি সহজেই এই সমস্যাগুলোর সমাধান করতে পারে।"
            },
            {
                "eng": "Many students have joined the online study group to discuss it.",
                "bng": "অনেক ছাত্র এতে আলোচনা করার জন্য অনলাইন স্টাডি গ্রুপে যোগ দিয়েছে।"
            },
            {
                "eng": "This discussion will surely generate positive ideas.",
                "bng": "এই আলোচনাটি অবশ্যই ইতিবাচক চিন্তাভাবনার জন্ম দেবে।"
            }
        ],
        "vocabulary": [
            {
                "word": "recently",
                "bangla": "সম্প্রতি",
                "partOfSpeech": "adverb"
            },
            {
                "word": "highlight",
                "bangla": "তুলে ধরা / চিহ্ণিত করা",
                "partOfSpeech": "verb"
            },
            {
                "word": "affect",
                "bangla": "প্রভাবিত করা",
                "partOfSpeech": "verb"
            },
            {
                "word": "discussion",
                "bangla": "আলোচনা",
                "partOfSpeech": "noun"
            },
            {
                "word": "positive",
                "bangla": "ইতিবাচক",
                "partOfSpeech": "adjective"
            }
        ],
        "questions": [
            {
                "q": "What did Nadia write a paragraph on?",
                "options": [
                    "Mobile Phones in Daily Life",
                    "A standard story",
                    "A math test",
                    "A poem"
                ],
                "answer": "Mobile Phones in Daily Life"
            },
            {
                "q": "What does she want to highlight?",
                "options": [
                    "Key issues which affect us",
                    "Funny cartoon pictures",
                    "Her daily routine",
                    "Shopping lists"
                ],
                "answer": "Key issues which affect us"
            },
            {
                "q": "Who joined the online study group?",
                "options": [
                    "Many students",
                    "No one",
                    "Only teachers",
                    "Shopkeepers"
                ],
                "answer": "Many students"
            },
            {
                "q": "What kind of ideas will this discussion generate?",
                "options": [
                    "Negative ideas",
                    "No ideas",
                    "Positive ideas",
                    "Boring ideas"
                ],
                "answer": "Positive ideas"
            }
        ],
        "summary": {
            "takeaways": [
                "জটীল বাক্য গঠনে রিলেটিভ ক্লজ (which, who) এর সঠিক প্রয়োগ।",
                "প্রেজেন্ট পারফেক্ট টেন্সের সাহায্যে সাম্প্রতিক ঘটনা প্রকাশের নিয়ম।"
            ],
            "realLifeUsage": [
                {
                    "context": "সাম্প্রতিক কোনো অর্জন বা লেখা প্রকাশ করতে:",
                    "example": "I have recently read an essay about mobile phones in daily life."
                }
            ]
        }
    },
    {
        "id": "s63",
        "title": "Online Shopping Trend",
        "subtitle": "অনলাইন শপিংয়ের প্রবণতা",
        "level": "Intermediate",
        "levelColor": "amber",
        "topic": "Daily Life",
        "learningObjectives": [
            "Expressing preference: prefer to",
            "Shopping vocabulary"
        ],
        "grammarFocus": [
            "Preference",
            "Shopping Vocab"
        ],
        "grammarTeach": {
            "structure": "Present Perfect or Relative Clauses",
            "formula": "Subject + has/have + V3 + Object",
            "explanation": "এই গল্পে সংযোগকারী রিলেটিভ ক্লজ (who, which) এবং প্রেজেন্ট পারফেক্ট টেন্সের ব্যবহার নিয়ে বিষদ আলোচনা করা হয়েছে।",
            "examples": [
                {
                    "eng": "He has lived here since 2018.",
                    "bng": "সে ২০১৮ সাল থেকে এখানে বাস করছে।"
                },
                {
                    "eng": "The book, which I read, is good.",
                    "bng": "বইটি, যা আমি পড়েছিলাম, তা ভালো ছিল।"
                }
            ]
        },
        "sentences": [
            {
                "eng": "Recently, Nadia has written a paragraph on online shopping trend.",
                "bng": "সম্প্রতি নাদিয়া অনলাইন শপিংয়ের প্রবণতা এর ওপর একটি অনুচ্ছেদ লিখেছে।"
            },
            {
                "eng": "She wants to highlight the key issues which affect us.",
                "bng": "সে মূল বিষয়গুলোকে তুলে ধরতে চায় যেগুলো আমাদের প্রভাবিত করে।"
            },
            {
                "eng": "She believes that technology can solve these problems easily.",
                "bng": "সে বিশ্বাস করে যে প্রযুক্তি সহজেই এই সমস্যাগুলোর সমাধান করতে পারে।"
            },
            {
                "eng": "Many students have joined the online study group to discuss it.",
                "bng": "অনেক ছাত্র এতে আলোচনা করার জন্য অনলাইন স্টাডি গ্রুপে যোগ দিয়েছে।"
            },
            {
                "eng": "This discussion will surely generate positive ideas.",
                "bng": "এই আলোচনাটি অবশ্যই ইতিবাচক চিন্তাভাবনার জন্ম দেবে।"
            }
        ],
        "vocabulary": [
            {
                "word": "recently",
                "bangla": "সম্প্রতি",
                "partOfSpeech": "adverb"
            },
            {
                "word": "highlight",
                "bangla": "তুলে ধরা / চিহ্ণিত করা",
                "partOfSpeech": "verb"
            },
            {
                "word": "affect",
                "bangla": "প্রভাবিত করা",
                "partOfSpeech": "verb"
            },
            {
                "word": "discussion",
                "bangla": "আলোচনা",
                "partOfSpeech": "noun"
            },
            {
                "word": "positive",
                "bangla": "ইতিবাচক",
                "partOfSpeech": "adjective"
            }
        ],
        "questions": [
            {
                "q": "What did Nadia write a paragraph on?",
                "options": [
                    "Online Shopping Trend",
                    "A standard story",
                    "A math test",
                    "A poem"
                ],
                "answer": "Online Shopping Trend"
            },
            {
                "q": "What does she want to highlight?",
                "options": [
                    "Key issues which affect us",
                    "Funny cartoon pictures",
                    "Her daily routine",
                    "Shopping lists"
                ],
                "answer": "Key issues which affect us"
            },
            {
                "q": "Who joined the online study group?",
                "options": [
                    "Many students",
                    "No one",
                    "Only teachers",
                    "Shopkeepers"
                ],
                "answer": "Many students"
            },
            {
                "q": "What kind of ideas will this discussion generate?",
                "options": [
                    "Negative ideas",
                    "No ideas",
                    "Positive ideas",
                    "Boring ideas"
                ],
                "answer": "Positive ideas"
            }
        ],
        "summary": {
            "takeaways": [
                "জটীল বাক্য গঠনে রিলেটিভ ক্লজ (which, who) এর সঠিক প্রয়োগ।",
                "প্রেজেন্ট পারফেক্ট টেন্সের সাহায্যে সাম্প্রতিক ঘটনা প্রকাশের নিয়ম।"
            ],
            "realLifeUsage": [
                {
                    "context": "সাম্প্রতিক কোনো অর্জন বা লেখা প্রকাশ করতে:",
                    "example": "I have recently read an essay about online shopping trend."
                }
            ]
        }
    },
    {
        "id": "s64",
        "title": "Benefits of Teamwork",
        "subtitle": "দলগত কাজের উপকারিতা",
        "level": "Intermediate",
        "levelColor": "amber",
        "topic": "Society",
        "learningObjectives": [
            "Adverbial clauses of reason",
            "Cooperation vocabulary"
        ],
        "grammarFocus": [
            "Adverbial Clauses",
            "Cooperation Vocab"
        ],
        "grammarTeach": {
            "structure": "Present Perfect or Relative Clauses",
            "formula": "Subject + has/have + V3 + Object",
            "explanation": "এই গল্পে সংযোগকারী রিলেটিভ ক্লজ (who, which) এবং প্রেজেন্ট পারফেক্ট টেন্সের ব্যবহার নিয়ে বিষদ আলোচনা করা হয়েছে।",
            "examples": [
                {
                    "eng": "He has lived here since 2018.",
                    "bng": "সে ২০১৮ সাল থেকে এখানে বাস করছে।"
                },
                {
                    "eng": "The book, which I read, is good.",
                    "bng": "বইটি, যা আমি পড়েছিলাম, তা ভালো ছিল।"
                }
            ]
        },
        "sentences": [
            {
                "eng": "Recently, Nadia has written a paragraph on benefits of teamwork.",
                "bng": "সম্প্রতি নাদিয়া দলগত কাজের উপকারিতা এর ওপর একটি অনুচ্ছেদ লিখেছে।"
            },
            {
                "eng": "She wants to highlight the key issues which affect us.",
                "bng": "সে মূল বিষয়গুলোকে তুলে ধরতে চায় যেগুলো আমাদের প্রভাবিত করে।"
            },
            {
                "eng": "She believes that technology can solve these problems easily.",
                "bng": "সে বিশ্বাস করে যে প্রযুক্তি সহজেই এই সমস্যাগুলোর সমাধান করতে পারে।"
            },
            {
                "eng": "Many students have joined the online study group to discuss it.",
                "bng": "অনেক ছাত্র এতে আলোচনা করার জন্য অনলাইন স্টাডি গ্রুপে যোগ দিয়েছে।"
            },
            {
                "eng": "This discussion will surely generate positive ideas.",
                "bng": "এই আলোচনাটি অবশ্যই ইতিবাচক চিন্তাভাবনার জন্ম দেবে।"
            }
        ],
        "vocabulary": [
            {
                "word": "recently",
                "bangla": "সম্প্রতি",
                "partOfSpeech": "adverb"
            },
            {
                "word": "highlight",
                "bangla": "তুলে ধরা / চিহ্ণিত করা",
                "partOfSpeech": "verb"
            },
            {
                "word": "affect",
                "bangla": "প্রভাবিত করা",
                "partOfSpeech": "verb"
            },
            {
                "word": "discussion",
                "bangla": "আলোচনা",
                "partOfSpeech": "noun"
            },
            {
                "word": "positive",
                "bangla": "ইতিবাচক",
                "partOfSpeech": "adjective"
            }
        ],
        "questions": [
            {
                "q": "What did Nadia write a paragraph on?",
                "options": [
                    "Benefits of Teamwork",
                    "A standard story",
                    "A math test",
                    "A poem"
                ],
                "answer": "Benefits of Teamwork"
            },
            {
                "q": "What does she want to highlight?",
                "options": [
                    "Key issues which affect us",
                    "Funny cartoon pictures",
                    "Her daily routine",
                    "Shopping lists"
                ],
                "answer": "Key issues which affect us"
            },
            {
                "q": "Who joined the online study group?",
                "options": [
                    "Many students",
                    "No one",
                    "Only teachers",
                    "Shopkeepers"
                ],
                "answer": "Many students"
            },
            {
                "q": "What kind of ideas will this discussion generate?",
                "options": [
                    "Negative ideas",
                    "No ideas",
                    "Positive ideas",
                    "Boring ideas"
                ],
                "answer": "Positive ideas"
            }
        ],
        "summary": {
            "takeaways": [
                "জটীল বাক্য গঠনে রিলেটিভ ক্লজ (which, who) এর সঠিক প্রয়োগ।",
                "প্রেজেন্ট পারফেক্ট টেন্সের সাহায্যে সাম্প্রতিক ঘটনা প্রকাশের নিয়ম।"
            ],
            "realLifeUsage": [
                {
                    "context": "সাম্প্রতিক কোনো অর্জন বা লেখা প্রকাশ করতে:",
                    "example": "I have recently read an essay about benefits of teamwork."
                }
            ]
        }
    },
    {
        "id": "s65",
        "title": "Time Management Tips",
        "subtitle": "সময় ব্যবস্থাপনা টিপস",
        "level": "Intermediate",
        "levelColor": "amber",
        "topic": "Daily Life",
        "learningObjectives": [
            "Giving instructions and rules",
            "Time vocabulary"
        ],
        "grammarFocus": [
            "Instructions",
            "Time Vocab"
        ],
        "grammarTeach": {
            "structure": "Present Perfect or Relative Clauses",
            "formula": "Subject + has/have + V3 + Object",
            "explanation": "এই গল্পে সংযোগকারী রিলেটিভ ক্লজ (who, which) এবং প্রেজেন্ট পারফেক্ট টেন্সের ব্যবহার নিয়ে বিষদ আলোচনা করা হয়েছে।",
            "examples": [
                {
                    "eng": "He has lived here since 2018.",
                    "bng": "সে ২০১৮ সাল থেকে এখানে বাস করছে।"
                },
                {
                    "eng": "The book, which I read, is good.",
                    "bng": "বইটি, যা আমি পড়েছিলাম, তা ভালো ছিল।"
                }
            ]
        },
        "sentences": [
            {
                "eng": "Recently, Nadia has written a paragraph on time management tips.",
                "bng": "সম্প্রতি নাদিয়া সময় ব্যবস্থাপনা টিপস এর ওপর একটি অনুচ্ছেদ লিখেছে।"
            },
            {
                "eng": "She wants to highlight the key issues which affect us.",
                "bng": "সে মূল বিষয়গুলোকে তুলে ধরতে চায় যেগুলো আমাদের প্রভাবিত করে।"
            },
            {
                "eng": "She believes that technology can solve these problems easily.",
                "bng": "সে বিশ্বাস করে যে প্রযুক্তি সহজেই এই সমস্যাগুলোর সমাধান করতে পারে।"
            },
            {
                "eng": "Many students have joined the online study group to discuss it.",
                "bng": "অনেক ছাত্র এতে আলোচনা করার জন্য অনলাইন স্টাডি গ্রুপে যোগ দিয়েছে।"
            },
            {
                "eng": "This discussion will surely generate positive ideas.",
                "bng": "এই আলোচনাটি অবশ্যই ইতিবাচক চিন্তাভাবনার জন্ম দেবে।"
            }
        ],
        "vocabulary": [
            {
                "word": "recently",
                "bangla": "সম্প্রতি",
                "partOfSpeech": "adverb"
            },
            {
                "word": "highlight",
                "bangla": "তুলে ধরা / চিহ্ণিত করা",
                "partOfSpeech": "verb"
            },
            {
                "word": "affect",
                "bangla": "প্রভাবিত করা",
                "partOfSpeech": "verb"
            },
            {
                "word": "discussion",
                "bangla": "আলোচনা",
                "partOfSpeech": "noun"
            },
            {
                "word": "positive",
                "bangla": "ইতিবাচক",
                "partOfSpeech": "adjective"
            }
        ],
        "questions": [
            {
                "q": "What did Nadia write a paragraph on?",
                "options": [
                    "Time Management Tips",
                    "A standard story",
                    "A math test",
                    "A poem"
                ],
                "answer": "Time Management Tips"
            },
            {
                "q": "What does she want to highlight?",
                "options": [
                    "Key issues which affect us",
                    "Funny cartoon pictures",
                    "Her daily routine",
                    "Shopping lists"
                ],
                "answer": "Key issues which affect us"
            },
            {
                "q": "Who joined the online study group?",
                "options": [
                    "Many students",
                    "No one",
                    "Only teachers",
                    "Shopkeepers"
                ],
                "answer": "Many students"
            },
            {
                "q": "What kind of ideas will this discussion generate?",
                "options": [
                    "Negative ideas",
                    "No ideas",
                    "Positive ideas",
                    "Boring ideas"
                ],
                "answer": "Positive ideas"
            }
        ],
        "summary": {
            "takeaways": [
                "জটীল বাক্য গঠনে রিলেটিভ ক্লজ (which, who) এর সঠিক প্রয়োগ।",
                "প্রেজেন্ট পারফেক্ট টেন্সের সাহায্যে সাম্প্রতিক ঘটনা প্রকাশের নিয়ম।"
            ],
            "realLifeUsage": [
                {
                    "context": "সাম্প্রতিক কোনো অর্জন বা লেখা প্রকাশ করতে:",
                    "example": "I have recently read an essay about time management tips."
                }
            ]
        }
    },
    {
        "id": "s66",
        "title": "Stress Management Techniques",
        "subtitle": "মানসিক চাপ নিয়ন্ত্রণ",
        "level": "Intermediate",
        "levelColor": "amber",
        "topic": "Health",
        "learningObjectives": [
            "Infinitive vs gerund rules",
            "Health vocabulary"
        ],
        "grammarFocus": [
            "Gerunds vs Infinitives",
            "Health Vocab"
        ],
        "grammarTeach": {
            "structure": "Present Perfect or Relative Clauses",
            "formula": "Subject + has/have + V3 + Object",
            "explanation": "এই গল্পে সংযোগকারী রিলেটিভ ক্লজ (who, which) এবং প্রেজেন্ট পারফেক্ট টেন্সের ব্যবহার নিয়ে বিষদ আলোচনা করা হয়েছে।",
            "examples": [
                {
                    "eng": "He has lived here since 2018.",
                    "bng": "সে ২০১৮ সাল থেকে এখানে বাস করছে।"
                },
                {
                    "eng": "The book, which I read, is good.",
                    "bng": "বইটি, যা আমি পড়েছিলাম, তা ভালো ছিল।"
                }
            ]
        },
        "sentences": [
            {
                "eng": "Recently, Nadia has written a paragraph on stress management techniques.",
                "bng": "সম্প্রতি নাদিয়া মানসিক চাপ নিয়ন্ত্রণ এর ওপর একটি অনুচ্ছেদ লিখেছে।"
            },
            {
                "eng": "She wants to highlight the key issues which affect us.",
                "bng": "সে মূল বিষয়গুলোকে তুলে ধরতে চায় যেগুলো আমাদের প্রভাবিত করে।"
            },
            {
                "eng": "She believes that technology can solve these problems easily.",
                "bng": "সে বিশ্বাস করে যে প্রযুক্তি সহজেই এই সমস্যাগুলোর সমাধান করতে পারে।"
            },
            {
                "eng": "Many students have joined the online study group to discuss it.",
                "bng": "অনেক ছাত্র এতে আলোচনা করার জন্য অনলাইন স্টাডি গ্রুপে যোগ দিয়েছে।"
            },
            {
                "eng": "This discussion will surely generate positive ideas.",
                "bng": "এই আলোচনাটি অবশ্যই ইতিবাচক চিন্তাভাবনার জন্ম দেবে।"
            }
        ],
        "vocabulary": [
            {
                "word": "recently",
                "bangla": "সম্প্রতি",
                "partOfSpeech": "adverb"
            },
            {
                "word": "highlight",
                "bangla": "তুলে ধরা / চিহ্ণিত করা",
                "partOfSpeech": "verb"
            },
            {
                "word": "affect",
                "bangla": "প্রভাবিত করা",
                "partOfSpeech": "verb"
            },
            {
                "word": "discussion",
                "bangla": "আলোচনা",
                "partOfSpeech": "noun"
            },
            {
                "word": "positive",
                "bangla": "ইতিবাচক",
                "partOfSpeech": "adjective"
            }
        ],
        "questions": [
            {
                "q": "What did Nadia write a paragraph on?",
                "options": [
                    "Stress Management Techniques",
                    "A standard story",
                    "A math test",
                    "A poem"
                ],
                "answer": "Stress Management Techniques"
            },
            {
                "q": "What does she want to highlight?",
                "options": [
                    "Key issues which affect us",
                    "Funny cartoon pictures",
                    "Her daily routine",
                    "Shopping lists"
                ],
                "answer": "Key issues which affect us"
            },
            {
                "q": "Who joined the online study group?",
                "options": [
                    "Many students",
                    "No one",
                    "Only teachers",
                    "Shopkeepers"
                ],
                "answer": "Many students"
            },
            {
                "q": "What kind of ideas will this discussion generate?",
                "options": [
                    "Negative ideas",
                    "No ideas",
                    "Positive ideas",
                    "Boring ideas"
                ],
                "answer": "Positive ideas"
            }
        ],
        "summary": {
            "takeaways": [
                "জটীল বাক্য গঠনে রিলেটিভ ক্লজ (which, who) এর সঠিক প্রয়োগ।",
                "প্রেজেন্ট পারফেক্ট টেন্সের সাহায্যে সাম্প্রতিক ঘটনা প্রকাশের নিয়ম।"
            ],
            "realLifeUsage": [
                {
                    "context": "সাম্প্রতিক কোনো অর্জন বা লেখা প্রকাশ করতে:",
                    "example": "I have recently read an essay about stress management techniques."
                }
            ]
        }
    },
    {
        "id": "s67",
        "title": "Public Libraries Value",
        "subtitle": "পাবলিক লাইব্রেরির মূল্য",
        "level": "Intermediate",
        "levelColor": "amber",
        "topic": "Education",
        "learningObjectives": [
            "Present perfect continuous",
            "Library vocabulary"
        ],
        "grammarFocus": [
            "Present Perfect Continuous",
            "Library Vocab"
        ],
        "grammarTeach": {
            "structure": "Present Perfect or Relative Clauses",
            "formula": "Subject + has/have + V3 + Object",
            "explanation": "এই গল্পে সংযোগকারী রিলেটিভ ক্লজ (who, which) এবং প্রেজেন্ট পারফেক্ট টেন্সের ব্যবহার নিয়ে বিষদ আলোচনা করা হয়েছে।",
            "examples": [
                {
                    "eng": "He has lived here since 2018.",
                    "bng": "সে ২০১৮ সাল থেকে এখানে বাস করছে।"
                },
                {
                    "eng": "The book, which I read, is good.",
                    "bng": "বইটি, যা আমি পড়েছিলাম, তা ভালো ছিল।"
                }
            ]
        },
        "sentences": [
            {
                "eng": "Recently, Nadia has written a paragraph on public libraries value.",
                "bng": "সম্প্রতি নাদিয়া পাবলিক লাইব্রেরির মূল্য এর ওপর একটি অনুচ্ছেদ লিখেছে।"
            },
            {
                "eng": "She wants to highlight the key issues which affect us.",
                "bng": "সে মূল বিষয়গুলোকে তুলে ধরতে চায় যেগুলো আমাদের প্রভাবিত করে।"
            },
            {
                "eng": "She believes that technology can solve these problems easily.",
                "bng": "সে বিশ্বাস করে যে প্রযুক্তি সহজেই এই সমস্যাগুলোর সমাধান করতে পারে।"
            },
            {
                "eng": "Many students have joined the online study group to discuss it.",
                "bng": "অনেক ছাত্র এতে আলোচনা করার জন্য অনলাইন স্টাডি গ্রুপে যোগ দিয়েছে।"
            },
            {
                "eng": "This discussion will surely generate positive ideas.",
                "bng": "এই আলোচনাটি অবশ্যই ইতিবাচক চিন্তাভাবনার জন্ম দেবে।"
            }
        ],
        "vocabulary": [
            {
                "word": "recently",
                "bangla": "সম্প্রতি",
                "partOfSpeech": "adverb"
            },
            {
                "word": "highlight",
                "bangla": "তুলে ধরা / চিহ্ণিত করা",
                "partOfSpeech": "verb"
            },
            {
                "word": "affect",
                "bangla": "প্রভাবিত করা",
                "partOfSpeech": "verb"
            },
            {
                "word": "discussion",
                "bangla": "আলোচনা",
                "partOfSpeech": "noun"
            },
            {
                "word": "positive",
                "bangla": "ইতিবাচক",
                "partOfSpeech": "adjective"
            }
        ],
        "questions": [
            {
                "q": "What did Nadia write a paragraph on?",
                "options": [
                    "Public Libraries Value",
                    "A standard story",
                    "A math test",
                    "A poem"
                ],
                "answer": "Public Libraries Value"
            },
            {
                "q": "What does she want to highlight?",
                "options": [
                    "Key issues which affect us",
                    "Funny cartoon pictures",
                    "Her daily routine",
                    "Shopping lists"
                ],
                "answer": "Key issues which affect us"
            },
            {
                "q": "Who joined the online study group?",
                "options": [
                    "Many students",
                    "No one",
                    "Only teachers",
                    "Shopkeepers"
                ],
                "answer": "Many students"
            },
            {
                "q": "What kind of ideas will this discussion generate?",
                "options": [
                    "Negative ideas",
                    "No ideas",
                    "Positive ideas",
                    "Boring ideas"
                ],
                "answer": "Positive ideas"
            }
        ],
        "summary": {
            "takeaways": [
                "জটীল বাক্য গঠনে রিলেটিভ ক্লজ (which, who) এর সঠিক প্রয়োগ।",
                "প্রেজেন্ট পারফেক্ট টেন্সের সাহায্যে সাম্প্রতিক ঘটনা প্রকাশের নিয়ম।"
            ],
            "realLifeUsage": [
                {
                    "context": "সাম্প্রতিক কোনো অর্জন বা লেখা প্রকাশ করতে:",
                    "example": "I have recently read an essay about public libraries value."
                }
            ]
        }
    },
    {
        "id": "s68",
        "title": "Cultural Festivals",
        "subtitle": "সাংস্কৃতিক উৎসব",
        "level": "Intermediate",
        "levelColor": "amber",
        "topic": "Society",
        "learningObjectives": [
            "Relative clauses: where, when",
            "Culture vocabulary"
        ],
        "grammarFocus": [
            "Relative Clauses",
            "Culture Vocab"
        ],
        "grammarTeach": {
            "structure": "Present Perfect or Relative Clauses",
            "formula": "Subject + has/have + V3 + Object",
            "explanation": "এই গল্পে সংযোগকারী রিলেটিভ ক্লজ (who, which) এবং প্রেজেন্ট পারফেক্ট টেন্সের ব্যবহার নিয়ে বিষদ আলোচনা করা হয়েছে।",
            "examples": [
                {
                    "eng": "He has lived here since 2018.",
                    "bng": "সে ২০১৮ সাল থেকে এখানে বাস করছে।"
                },
                {
                    "eng": "The book, which I read, is good.",
                    "bng": "বইটি, যা আমি পড়েছিলাম, তা ভালো ছিল।"
                }
            ]
        },
        "sentences": [
            {
                "eng": "Recently, Nadia has written a paragraph on cultural festivals.",
                "bng": "সম্প্রতি নাদিয়া সাংস্কৃতিক উৎসব এর ওপর একটি অনুচ্ছেদ লিখেছে।"
            },
            {
                "eng": "She wants to highlight the key issues which affect us.",
                "bng": "সে মূল বিষয়গুলোকে তুলে ধরতে চায় যেগুলো আমাদের প্রভাবিত করে।"
            },
            {
                "eng": "She believes that technology can solve these problems easily.",
                "bng": "সে বিশ্বাস করে যে প্রযুক্তি সহজেই এই সমস্যাগুলোর সমাধান করতে পারে।"
            },
            {
                "eng": "Many students have joined the online study group to discuss it.",
                "bng": "অনেক ছাত্র এতে আলোচনা করার জন্য অনলাইন স্টাডি গ্রুপে যোগ দিয়েছে।"
            },
            {
                "eng": "This discussion will surely generate positive ideas.",
                "bng": "এই আলোচনাটি অবশ্যই ইতিবাচক চিন্তাভাবনার জন্ম দেবে।"
            }
        ],
        "vocabulary": [
            {
                "word": "recently",
                "bangla": "সম্প্রতি",
                "partOfSpeech": "adverb"
            },
            {
                "word": "highlight",
                "bangla": "তুলে ধরা / চিহ্ণিত করা",
                "partOfSpeech": "verb"
            },
            {
                "word": "affect",
                "bangla": "প্রভাবিত করা",
                "partOfSpeech": "verb"
            },
            {
                "word": "discussion",
                "bangla": "আলোচনা",
                "partOfSpeech": "noun"
            },
            {
                "word": "positive",
                "bangla": "ইতিবাচক",
                "partOfSpeech": "adjective"
            }
        ],
        "questions": [
            {
                "q": "What did Nadia write a paragraph on?",
                "options": [
                    "Cultural Festivals",
                    "A standard story",
                    "A math test",
                    "A poem"
                ],
                "answer": "Cultural Festivals"
            },
            {
                "q": "What does she want to highlight?",
                "options": [
                    "Key issues which affect us",
                    "Funny cartoon pictures",
                    "Her daily routine",
                    "Shopping lists"
                ],
                "answer": "Key issues which affect us"
            },
            {
                "q": "Who joined the online study group?",
                "options": [
                    "Many students",
                    "No one",
                    "Only teachers",
                    "Shopkeepers"
                ],
                "answer": "Many students"
            },
            {
                "q": "What kind of ideas will this discussion generate?",
                "options": [
                    "Negative ideas",
                    "No ideas",
                    "Positive ideas",
                    "Boring ideas"
                ],
                "answer": "Positive ideas"
            }
        ],
        "summary": {
            "takeaways": [
                "জটীল বাক্য গঠনে রিলেটিভ ক্লজ (which, who) এর সঠিক প্রয়োগ।",
                "প্রেজেন্ট পারফেক্ট টেন্সের সাহায্যে সাম্প্রতিক ঘটনা প্রকাশের নিয়ম।"
            ],
            "realLifeUsage": [
                {
                    "context": "সাম্প্রতিক কোনো অর্জন বা লেখা প্রকাশ করতে:",
                    "example": "I have recently read an essay about cultural festivals."
                }
            ]
        }
    },
    {
        "id": "s69",
        "title": "Traditional Sports",
        "subtitle": "ঐতিহ্যবাহী খেলাধুলা",
        "level": "Intermediate",
        "levelColor": "amber",
        "topic": "Sports",
        "learningObjectives": [
            "Used to for past habits",
            "Sports vocabulary"
        ],
        "grammarFocus": [
            "Used To",
            "Sports Vocab"
        ],
        "grammarTeach": {
            "structure": "Present Perfect or Relative Clauses",
            "formula": "Subject + has/have + V3 + Object",
            "explanation": "এই গল্পে সংযোগকারী রিলেটিভ ক্লজ (who, which) এবং প্রেজেন্ট পারফেক্ট টেন্সের ব্যবহার নিয়ে বিষদ আলোচনা করা হয়েছে।",
            "examples": [
                {
                    "eng": "He has lived here since 2018.",
                    "bng": "সে ২০১৮ সাল থেকে এখানে বাস করছে।"
                },
                {
                    "eng": "The book, which I read, is good.",
                    "bng": "বইটি, যা আমি পড়েছিলাম, তা ভালো ছিল।"
                }
            ]
        },
        "sentences": [
            {
                "eng": "Recently, Nadia has written a paragraph on traditional sports.",
                "bng": "সম্প্রতি নাদিয়া ঐতিহ্যবাহী খেলাধুলা এর ওপর একটি অনুচ্ছেদ লিখেছে।"
            },
            {
                "eng": "She wants to highlight the key issues which affect us.",
                "bng": "সে মূল বিষয়গুলোকে তুলে ধরতে চায় যেগুলো আমাদের প্রভাবিত করে।"
            },
            {
                "eng": "She believes that technology can solve these problems easily.",
                "bng": "সে বিশ্বাস করে যে প্রযুক্তি সহজেই এই সমস্যাগুলোর সমাধান করতে পারে।"
            },
            {
                "eng": "Many students have joined the online study group to discuss it.",
                "bng": "অনেক ছাত্র এতে আলোচনা করার জন্য অনলাইন স্টাডি গ্রুপে যোগ দিয়েছে।"
            },
            {
                "eng": "This discussion will surely generate positive ideas.",
                "bng": "এই আলোচনাটি অবশ্যই ইতিবাচক চিন্তাভাবনার জন্ম দেবে।"
            }
        ],
        "vocabulary": [
            {
                "word": "recently",
                "bangla": "সম্প্রতি",
                "partOfSpeech": "adverb"
            },
            {
                "word": "highlight",
                "bangla": "তুলে ধরা / চিহ্ণিত করা",
                "partOfSpeech": "verb"
            },
            {
                "word": "affect",
                "bangla": "প্রভাবিত করা",
                "partOfSpeech": "verb"
            },
            {
                "word": "discussion",
                "bangla": "আলোচনা",
                "partOfSpeech": "noun"
            },
            {
                "word": "positive",
                "bangla": "ইতিবাচক",
                "partOfSpeech": "adjective"
            }
        ],
        "questions": [
            {
                "q": "What did Nadia write a paragraph on?",
                "options": [
                    "Traditional Sports",
                    "A standard story",
                    "A math test",
                    "A poem"
                ],
                "answer": "Traditional Sports"
            },
            {
                "q": "What does she want to highlight?",
                "options": [
                    "Key issues which affect us",
                    "Funny cartoon pictures",
                    "Her daily routine",
                    "Shopping lists"
                ],
                "answer": "Key issues which affect us"
            },
            {
                "q": "Who joined the online study group?",
                "options": [
                    "Many students",
                    "No one",
                    "Only teachers",
                    "Shopkeepers"
                ],
                "answer": "Many students"
            },
            {
                "q": "What kind of ideas will this discussion generate?",
                "options": [
                    "Negative ideas",
                    "No ideas",
                    "Positive ideas",
                    "Boring ideas"
                ],
                "answer": "Positive ideas"
            }
        ],
        "summary": {
            "takeaways": [
                "জটীল বাক্য গঠনে রিলেটিভ ক্লজ (which, who) এর সঠিক প্রয়োগ।",
                "প্রেজেন্ট পারফেক্ট টেন্সের সাহায্যে সাম্প্রতিক ঘটনা প্রকাশের নিয়ম।"
            ],
            "realLifeUsage": [
                {
                    "context": "সাম্প্রতিক কোনো অর্জন বা লেখা প্রকাশ করতে:",
                    "example": "I have recently read an essay about traditional sports."
                }
            ]
        }
    },
    {
        "id": "s70",
        "title": "Science Fairs Importance",
        "subtitle": "বিজ্ঞান মেলার গুরুত্ব",
        "level": "Intermediate",
        "levelColor": "amber",
        "topic": "Education",
        "learningObjectives": [
            "Tense consistency in descriptions",
            "Science vocabulary"
        ],
        "grammarFocus": [
            "Tense Consistency",
            "Science Vocab"
        ],
        "grammarTeach": {
            "structure": "Present Perfect or Relative Clauses",
            "formula": "Subject + has/have + V3 + Object",
            "explanation": "এই গল্পে সংযোগকারী রিলেটিভ ক্লজ (who, which) এবং প্রেজেন্ট পারফেক্ট টেন্সের ব্যবহার নিয়ে বিষদ আলোচনা করা হয়েছে।",
            "examples": [
                {
                    "eng": "He has lived here since 2018.",
                    "bng": "সে ২০১৮ সাল থেকে এখানে বাস করছে।"
                },
                {
                    "eng": "The book, which I read, is good.",
                    "bng": "বইটি, যা আমি পড়েছিলাম, তা ভালো ছিল।"
                }
            ]
        },
        "sentences": [
            {
                "eng": "Recently, Nadia has written a paragraph on science fairs importance.",
                "bng": "সম্প্রতি নাদিয়া বিজ্ঞান মেলার গুরুত্ব এর ওপর একটি অনুচ্ছেদ লিখেছে।"
            },
            {
                "eng": "She wants to highlight the key issues which affect us.",
                "bng": "সে মূল বিষয়গুলোকে তুলে ধরতে চায় যেগুলো আমাদের প্রভাবিত করে।"
            },
            {
                "eng": "She believes that technology can solve these problems easily.",
                "bng": "সে বিশ্বাস করে যে প্রযুক্তি সহজেই এই সমস্যাগুলোর সমাধান করতে পারে।"
            },
            {
                "eng": "Many students have joined the online study group to discuss it.",
                "bng": "অনেক ছাত্র এতে আলোচনা করার জন্য অনলাইন স্টাডি গ্রুপে যোগ দিয়েছে।"
            },
            {
                "eng": "This discussion will surely generate positive ideas.",
                "bng": "এই আলোচনাটি অবশ্যই ইতিবাচক চিন্তাভাবনার জন্ম দেবে।"
            }
        ],
        "vocabulary": [
            {
                "word": "recently",
                "bangla": "সম্প্রতি",
                "partOfSpeech": "adverb"
            },
            {
                "word": "highlight",
                "bangla": "তুলে ধরা / চিহ্ণিত করা",
                "partOfSpeech": "verb"
            },
            {
                "word": "affect",
                "bangla": "প্রভাবিত করা",
                "partOfSpeech": "verb"
            },
            {
                "word": "discussion",
                "bangla": "আলোচনা",
                "partOfSpeech": "noun"
            },
            {
                "word": "positive",
                "bangla": "ইতিবাচক",
                "partOfSpeech": "adjective"
            }
        ],
        "questions": [
            {
                "q": "What did Nadia write a paragraph on?",
                "options": [
                    "Science Fairs Importance",
                    "A standard story",
                    "A math test",
                    "A poem"
                ],
                "answer": "Science Fairs Importance"
            },
            {
                "q": "What does she want to highlight?",
                "options": [
                    "Key issues which affect us",
                    "Funny cartoon pictures",
                    "Her daily routine",
                    "Shopping lists"
                ],
                "answer": "Key issues which affect us"
            },
            {
                "q": "Who joined the online study group?",
                "options": [
                    "Many students",
                    "No one",
                    "Only teachers",
                    "Shopkeepers"
                ],
                "answer": "Many students"
            },
            {
                "q": "What kind of ideas will this discussion generate?",
                "options": [
                    "Negative ideas",
                    "No ideas",
                    "Positive ideas",
                    "Boring ideas"
                ],
                "answer": "Positive ideas"
            }
        ],
        "summary": {
            "takeaways": [
                "জটীল বাক্য গঠনে রিলেটিভ ক্লজ (which, who) এর সঠিক প্রয়োগ।",
                "প্রেজেন্ট পারফেক্ট টেন্সের সাহায্যে সাম্প্রতিক ঘটনা প্রকাশের নিয়ম।"
            ],
            "realLifeUsage": [
                {
                    "context": "সাম্প্রতিক কোনো অর্জন বা লেখা প্রকাশ করতে:",
                    "example": "I have recently read an essay about science fairs importance."
                }
            ]
        }
    },
    {
        "id": "s71",
        "title": "Learning Cooking Skills",
        "subtitle": "রান্না শেখা",
        "level": "Intermediate",
        "levelColor": "amber",
        "topic": "Daily Life",
        "learningObjectives": [
            "Imperative sequence connectors",
            "Kitchen vocabulary"
        ],
        "grammarFocus": [
            "Sequence Connectors",
            "Kitchen Vocab"
        ],
        "grammarTeach": {
            "structure": "Present Perfect or Relative Clauses",
            "formula": "Subject + has/have + V3 + Object",
            "explanation": "এই গল্পে সংযোগকারী রিলেটিভ ক্লজ (who, which) এবং প্রেজেন্ট পারফেক্ট টেন্সের ব্যবহার নিয়ে বিষদ আলোচনা করা হয়েছে।",
            "examples": [
                {
                    "eng": "He has lived here since 2018.",
                    "bng": "সে ২০১৮ সাল থেকে এখানে বাস করছে।"
                },
                {
                    "eng": "The book, which I read, is good.",
                    "bng": "বইটি, যা আমি পড়েছিলাম, তা ভালো ছিল।"
                }
            ]
        },
        "sentences": [
            {
                "eng": "Recently, Nadia has written a paragraph on learning cooking skills.",
                "bng": "সম্প্রতি নাদিয়া রান্না শেখা এর ওপর একটি অনুচ্ছেদ লিখেছে।"
            },
            {
                "eng": "She wants to highlight the key issues which affect us.",
                "bng": "সে মূল বিষয়গুলোকে তুলে ধরতে চায় যেগুলো আমাদের প্রভাবিত করে।"
            },
            {
                "eng": "She believes that technology can solve these problems easily.",
                "bng": "সে বিশ্বাস করে যে প্রযুক্তি সহজেই এই সমস্যাগুলোর সমাধান করতে পারে।"
            },
            {
                "eng": "Many students have joined the online study group to discuss it.",
                "bng": "অনেক ছাত্র এতে আলোচনা করার জন্য অনলাইন স্টাডি গ্রুপে যোগ দিয়েছে।"
            },
            {
                "eng": "This discussion will surely generate positive ideas.",
                "bng": "এই আলোচনাটি অবশ্যই ইতিবাচক চিন্তাভাবনার জন্ম দেবে।"
            }
        ],
        "vocabulary": [
            {
                "word": "recently",
                "bangla": "সম্প্রতি",
                "partOfSpeech": "adverb"
            },
            {
                "word": "highlight",
                "bangla": "তুলে ধরা / চিহ্ণিত করা",
                "partOfSpeech": "verb"
            },
            {
                "word": "affect",
                "bangla": "প্রভাবিত করা",
                "partOfSpeech": "verb"
            },
            {
                "word": "discussion",
                "bangla": "আলোচনা",
                "partOfSpeech": "noun"
            },
            {
                "word": "positive",
                "bangla": "ইতিবাচক",
                "partOfSpeech": "adjective"
            }
        ],
        "questions": [
            {
                "q": "What did Nadia write a paragraph on?",
                "options": [
                    "Learning Cooking Skills",
                    "A standard story",
                    "A math test",
                    "A poem"
                ],
                "answer": "Learning Cooking Skills"
            },
            {
                "q": "What does she want to highlight?",
                "options": [
                    "Key issues which affect us",
                    "Funny cartoon pictures",
                    "Her daily routine",
                    "Shopping lists"
                ],
                "answer": "Key issues which affect us"
            },
            {
                "q": "Who joined the online study group?",
                "options": [
                    "Many students",
                    "No one",
                    "Only teachers",
                    "Shopkeepers"
                ],
                "answer": "Many students"
            },
            {
                "q": "What kind of ideas will this discussion generate?",
                "options": [
                    "Negative ideas",
                    "No ideas",
                    "Positive ideas",
                    "Boring ideas"
                ],
                "answer": "Positive ideas"
            }
        ],
        "summary": {
            "takeaways": [
                "জটীল বাক্য গঠনে রিলেটিভ ক্লজ (which, who) এর সঠিক প্রয়োগ।",
                "প্রেজেন্ট পারফেক্ট টেন্সের সাহায্যে সাম্প্রতিক ঘটনা প্রকাশের নিয়ম।"
            ],
            "realLifeUsage": [
                {
                    "context": "সাম্প্রতিক কোনো অর্জন বা লেখা প্রকাশ করতে:",
                    "example": "I have recently read an essay about learning cooking skills."
                }
            ]
        }
    },
    {
        "id": "s72",
        "title": "Family Gatherings",
        "subtitle": "পারিবারিক মিলনমেলা",
        "level": "Intermediate",
        "levelColor": "amber",
        "topic": "Society",
        "learningObjectives": [
            "Plural agreements",
            "Family vocabulary"
        ],
        "grammarFocus": [
            "Subject-Verb Agreement",
            "Family Vocab"
        ],
        "grammarTeach": {
            "structure": "Present Perfect or Relative Clauses",
            "formula": "Subject + has/have + V3 + Object",
            "explanation": "এই গল্পে সংযোগকারী রিলেটিভ ক্লজ (who, which) এবং প্রেজেন্ট পারফেক্ট টেন্সের ব্যবহার নিয়ে বিষদ আলোচনা করা হয়েছে।",
            "examples": [
                {
                    "eng": "He has lived here since 2018.",
                    "bng": "সে ২০১৮ সাল থেকে এখানে বাস করছে।"
                },
                {
                    "eng": "The book, which I read, is good.",
                    "bng": "বইটি, যা আমি পড়েছিলাম, তা ভালো ছিল।"
                }
            ]
        },
        "sentences": [
            {
                "eng": "Recently, Nadia has written a paragraph on family gatherings.",
                "bng": "সম্প্রতি নাদিয়া পারিবারিক মিলনমেলা এর ওপর একটি অনুচ্ছেদ লিখেছে।"
            },
            {
                "eng": "She wants to highlight the key issues which affect us.",
                "bng": "সে মূল বিষয়গুলোকে তুলে ধরতে চায় যেগুলো আমাদের প্রভাবিত করে।"
            },
            {
                "eng": "She believes that technology can solve these problems easily.",
                "bng": "সে বিশ্বাস করে যে প্রযুক্তি সহজেই এই সমস্যাগুলোর সমাধান করতে পারে।"
            },
            {
                "eng": "Many students have joined the online study group to discuss it.",
                "bng": "অনেক ছাত্র এতে আলোচনা করার জন্য অনলাইন স্টাডি গ্রুপে যোগ দিয়েছে।"
            },
            {
                "eng": "This discussion will surely generate positive ideas.",
                "bng": "এই আলোচনাটি অবশ্যই ইতিবাচক চিন্তাভাবনার জন্ম দেবে।"
            }
        ],
        "vocabulary": [
            {
                "word": "recently",
                "bangla": "সম্প্রতি",
                "partOfSpeech": "adverb"
            },
            {
                "word": "highlight",
                "bangla": "তুলে ধরা / চিহ্ণিত করা",
                "partOfSpeech": "verb"
            },
            {
                "word": "affect",
                "bangla": "প্রভাবিত করা",
                "partOfSpeech": "verb"
            },
            {
                "word": "discussion",
                "bangla": "আলোচনা",
                "partOfSpeech": "noun"
            },
            {
                "word": "positive",
                "bangla": "ইতিবাচক",
                "partOfSpeech": "adjective"
            }
        ],
        "questions": [
            {
                "q": "What did Nadia write a paragraph on?",
                "options": [
                    "Family Gatherings",
                    "A standard story",
                    "A math test",
                    "A poem"
                ],
                "answer": "Family Gatherings"
            },
            {
                "q": "What does she want to highlight?",
                "options": [
                    "Key issues which affect us",
                    "Funny cartoon pictures",
                    "Her daily routine",
                    "Shopping lists"
                ],
                "answer": "Key issues which affect us"
            },
            {
                "q": "Who joined the online study group?",
                "options": [
                    "Many students",
                    "No one",
                    "Only teachers",
                    "Shopkeepers"
                ],
                "answer": "Many students"
            },
            {
                "q": "What kind of ideas will this discussion generate?",
                "options": [
                    "Negative ideas",
                    "No ideas",
                    "Positive ideas",
                    "Boring ideas"
                ],
                "answer": "Positive ideas"
            }
        ],
        "summary": {
            "takeaways": [
                "জটীল বাক্য গঠনে রিলেটিভ ক্লজ (which, who) এর সঠিক প্রয়োগ।",
                "প্রেজেন্ট পারফেক্ট টেন্সের সাহায্যে সাম্প্রতিক ঘটনা প্রকাশের নিয়ম।"
            ],
            "realLifeUsage": [
                {
                    "context": "সাম্প্রতিক কোনো অর্জন বা লেখা প্রকাশ করতে:",
                    "example": "I have recently read an essay about family gatherings."
                }
            ]
        }
    },
    {
        "id": "s73",
        "title": "Forest Conservation",
        "subtitle": "বন সংরক্ষণ",
        "level": "Intermediate",
        "levelColor": "amber",
        "topic": "Environment",
        "learningObjectives": [
            "Should / Must for duty",
            "Forest vocabulary"
        ],
        "grammarFocus": [
            "Modals",
            "Forest Vocab"
        ],
        "grammarTeach": {
            "structure": "Present Perfect or Relative Clauses",
            "formula": "Subject + has/have + V3 + Object",
            "explanation": "এই গল্পে সংযোগকারী রিলেটিভ ক্লজ (who, which) এবং প্রেজেন্ট পারফেক্ট টেন্সের ব্যবহার নিয়ে বিষদ আলোচনা করা হয়েছে।",
            "examples": [
                {
                    "eng": "He has lived here since 2018.",
                    "bng": "সে ২০১৮ সাল থেকে এখানে বাস করছে।"
                },
                {
                    "eng": "The book, which I read, is good.",
                    "bng": "বইটি, যা আমি পড়েছিলাম, তা ভালো ছিল।"
                }
            ]
        },
        "sentences": [
            {
                "eng": "Recently, Nadia has written a paragraph on forest conservation.",
                "bng": "সম্প্রতি নাদিয়া বন সংরক্ষণ এর ওপর একটি অনুচ্ছেদ লিখেছে।"
            },
            {
                "eng": "She wants to highlight the key issues which affect us.",
                "bng": "সে মূল বিষয়গুলোকে তুলে ধরতে চায় যেগুলো আমাদের প্রভাবিত করে।"
            },
            {
                "eng": "She believes that technology can solve these problems easily.",
                "bng": "সে বিশ্বাস করে যে প্রযুক্তি সহজেই এই সমস্যাগুলোর সমাধান করতে পারে।"
            },
            {
                "eng": "Many students have joined the online study group to discuss it.",
                "bng": "অনেক ছাত্র এতে আলোচনা করার জন্য অনলাইন স্টাডি গ্রুপে যোগ দিয়েছে।"
            },
            {
                "eng": "This discussion will surely generate positive ideas.",
                "bng": "এই আলোচনাটি অবশ্যই ইতিবাচক চিন্তাভাবনার জন্ম দেবে।"
            }
        ],
        "vocabulary": [
            {
                "word": "recently",
                "bangla": "সম্প্রতি",
                "partOfSpeech": "adverb"
            },
            {
                "word": "highlight",
                "bangla": "তুলে ধরা / চিহ্ণিত করা",
                "partOfSpeech": "verb"
            },
            {
                "word": "affect",
                "bangla": "প্রভাবিত করা",
                "partOfSpeech": "verb"
            },
            {
                "word": "discussion",
                "bangla": "আলোচনা",
                "partOfSpeech": "noun"
            },
            {
                "word": "positive",
                "bangla": "ইতিবাচক",
                "partOfSpeech": "adjective"
            }
        ],
        "questions": [
            {
                "q": "What did Nadia write a paragraph on?",
                "options": [
                    "Forest Conservation",
                    "A standard story",
                    "A math test",
                    "A poem"
                ],
                "answer": "Forest Conservation"
            },
            {
                "q": "What does she want to highlight?",
                "options": [
                    "Key issues which affect us",
                    "Funny cartoon pictures",
                    "Her daily routine",
                    "Shopping lists"
                ],
                "answer": "Key issues which affect us"
            },
            {
                "q": "Who joined the online study group?",
                "options": [
                    "Many students",
                    "No one",
                    "Only teachers",
                    "Shopkeepers"
                ],
                "answer": "Many students"
            },
            {
                "q": "What kind of ideas will this discussion generate?",
                "options": [
                    "Negative ideas",
                    "No ideas",
                    "Positive ideas",
                    "Boring ideas"
                ],
                "answer": "Positive ideas"
            }
        ],
        "summary": {
            "takeaways": [
                "জটীল বাক্য গঠনে রিলেটিভ ক্লজ (which, who) এর সঠিক প্রয়োগ।",
                "প্রেজেন্ট পারফেক্ট টেন্সের সাহায্যে সাম্প্রতিক ঘটনা প্রকাশের নিয়ম।"
            ],
            "realLifeUsage": [
                {
                    "context": "সাম্প্রতিক কোনো অর্জন বা লেখা প্রকাশ করতে:",
                    "example": "I have recently read an essay about forest conservation."
                }
            ]
        }
    },
    {
        "id": "s74",
        "title": "Early Rising Benefits",
        "subtitle": "ভোরে ওঠার উপকারিতা",
        "level": "Intermediate",
        "levelColor": "amber",
        "topic": "Daily Life",
        "learningObjectives": [
            "Present simple habit structures",
            "Health vocabulary"
        ],
        "grammarFocus": [
            "Present Simple",
            "Health Vocab"
        ],
        "grammarTeach": {
            "structure": "Present Perfect or Relative Clauses",
            "formula": "Subject + has/have + V3 + Object",
            "explanation": "এই গল্পে সংযোগকারী রিলেটিভ ক্লজ (who, which) এবং প্রেজেন্ট পারফেক্ট টেন্সের ব্যবহার নিয়ে বিষদ আলোচনা করা হয়েছে।",
            "examples": [
                {
                    "eng": "He has lived here since 2018.",
                    "bng": "সে ২০১৮ সাল থেকে এখানে বাস করছে।"
                },
                {
                    "eng": "The book, which I read, is good.",
                    "bng": "বইটি, যা আমি পড়েছিলাম, তা ভালো ছিল।"
                }
            ]
        },
        "sentences": [
            {
                "eng": "Recently, Nadia has written a paragraph on early rising benefits.",
                "bng": "সম্প্রতি নাদিয়া ভোরে ওঠার উপকারিতা এর ওপর একটি অনুচ্ছেদ লিখেছে।"
            },
            {
                "eng": "She wants to highlight the key issues which affect us.",
                "bng": "সে মূল বিষয়গুলোকে তুলে ধরতে চায় যেগুলো আমাদের প্রভাবিত করে।"
            },
            {
                "eng": "She believes that technology can solve these problems easily.",
                "bng": "সে বিশ্বাস করে যে প্রযুক্তি সহজেই এই সমস্যাগুলোর সমাধান করতে পারে।"
            },
            {
                "eng": "Many students have joined the online study group to discuss it.",
                "bng": "অনেক ছাত্র এতে আলোচনা করার জন্য অনলাইন স্টাডি গ্রুপে যোগ দিয়েছে।"
            },
            {
                "eng": "This discussion will surely generate positive ideas.",
                "bng": "এই আলোচনাটি অবশ্যই ইতিবাচক চিন্তাভাবনার জন্ম দেবে।"
            }
        ],
        "vocabulary": [
            {
                "word": "recently",
                "bangla": "সম্প্রতি",
                "partOfSpeech": "adverb"
            },
            {
                "word": "highlight",
                "bangla": "তুলে ধরা / চিহ্ণিত করা",
                "partOfSpeech": "verb"
            },
            {
                "word": "affect",
                "bangla": "প্রভাবিত করা",
                "partOfSpeech": "verb"
            },
            {
                "word": "discussion",
                "bangla": "আলোচনা",
                "partOfSpeech": "noun"
            },
            {
                "word": "positive",
                "bangla": "ইতিবাচক",
                "partOfSpeech": "adjective"
            }
        ],
        "questions": [
            {
                "q": "What did Nadia write a paragraph on?",
                "options": [
                    "Early Rising Benefits",
                    "A standard story",
                    "A math test",
                    "A poem"
                ],
                "answer": "Early Rising Benefits"
            },
            {
                "q": "What does she want to highlight?",
                "options": [
                    "Key issues which affect us",
                    "Funny cartoon pictures",
                    "Her daily routine",
                    "Shopping lists"
                ],
                "answer": "Key issues which affect us"
            },
            {
                "q": "Who joined the online study group?",
                "options": [
                    "Many students",
                    "No one",
                    "Only teachers",
                    "Shopkeepers"
                ],
                "answer": "Many students"
            },
            {
                "q": "What kind of ideas will this discussion generate?",
                "options": [
                    "Negative ideas",
                    "No ideas",
                    "Positive ideas",
                    "Boring ideas"
                ],
                "answer": "Positive ideas"
            }
        ],
        "summary": {
            "takeaways": [
                "জটীল বাক্য গঠনে রিলেটিভ ক্লজ (which, who) এর সঠিক প্রয়োগ।",
                "প্রেজেন্ট পারফেক্ট টেন্সের সাহায্যে সাম্প্রতিক ঘটনা প্রকাশের নিয়ম।"
            ],
            "realLifeUsage": [
                {
                    "context": "সাম্প্রতিক কোনো অর্জন বা লেখা প্রকাশ করতে:",
                    "example": "I have recently read an essay about early rising benefits."
                }
            ]
        }
    },
    {
        "id": "s75",
        "title": "Cleanliness Campaign",
        "subtitle": "পরিষ্কার-পরিচ্ছন্নতা অভিযান",
        "level": "Intermediate",
        "levelColor": "amber",
        "topic": "Society",
        "learningObjectives": [
            "Directives and calls to action",
            "Civic vocabulary"
        ],
        "grammarFocus": [
            "Imperatives",
            "Civic Vocab"
        ],
        "grammarTeach": {
            "structure": "Present Perfect or Relative Clauses",
            "formula": "Subject + has/have + V3 + Object",
            "explanation": "এই গল্পে সংযোগকারী রিলেটিভ ক্লজ (who, which) এবং প্রেজেন্ট পারফেক্ট টেন্সের ব্যবহার নিয়ে বিষদ আলোচনা করা হয়েছে।",
            "examples": [
                {
                    "eng": "He has lived here since 2018.",
                    "bng": "সে ২০১৮ সাল থেকে এখানে বাস করছে।"
                },
                {
                    "eng": "The book, which I read, is good.",
                    "bng": "বইটি, যা আমি পড়েছিলাম, তা ভালো ছিল।"
                }
            ]
        },
        "sentences": [
            {
                "eng": "Recently, Nadia has written a paragraph on cleanliness campaign.",
                "bng": "সম্প্রতি নাদিয়া পরিষ্কার-পরিচ্ছন্নতা অভিযান এর ওপর একটি অনুচ্ছেদ লিখেছে।"
            },
            {
                "eng": "She wants to highlight the key issues which affect us.",
                "bng": "সে মূল বিষয়গুলোকে তুলে ধরতে চায় যেগুলো আমাদের প্রভাবিত করে।"
            },
            {
                "eng": "She believes that technology can solve these problems easily.",
                "bng": "সে বিশ্বাস করে যে প্রযুক্তি সহজেই এই সমস্যাগুলোর সমাধান করতে পারে।"
            },
            {
                "eng": "Many students have joined the online study group to discuss it.",
                "bng": "অনেক ছাত্র এতে আলোচনা করার জন্য অনলাইন স্টাডি গ্রুপে যোগ দিয়েছে।"
            },
            {
                "eng": "This discussion will surely generate positive ideas.",
                "bng": "এই আলোচনাটি অবশ্যই ইতিবাচক চিন্তাভাবনার জন্ম দেবে।"
            }
        ],
        "vocabulary": [
            {
                "word": "recently",
                "bangla": "সম্প্রতি",
                "partOfSpeech": "adverb"
            },
            {
                "word": "highlight",
                "bangla": "তুলে ধরা / চিহ্ণিত করা",
                "partOfSpeech": "verb"
            },
            {
                "word": "affect",
                "bangla": "প্রভাবিত করা",
                "partOfSpeech": "verb"
            },
            {
                "word": "discussion",
                "bangla": "আলোচনা",
                "partOfSpeech": "noun"
            },
            {
                "word": "positive",
                "bangla": "ইতিবাচক",
                "partOfSpeech": "adjective"
            }
        ],
        "questions": [
            {
                "q": "What did Nadia write a paragraph on?",
                "options": [
                    "Cleanliness Campaign",
                    "A standard story",
                    "A math test",
                    "A poem"
                ],
                "answer": "Cleanliness Campaign"
            },
            {
                "q": "What does she want to highlight?",
                "options": [
                    "Key issues which affect us",
                    "Funny cartoon pictures",
                    "Her daily routine",
                    "Shopping lists"
                ],
                "answer": "Key issues which affect us"
            },
            {
                "q": "Who joined the online study group?",
                "options": [
                    "Many students",
                    "No one",
                    "Only teachers",
                    "Shopkeepers"
                ],
                "answer": "Many students"
            },
            {
                "q": "What kind of ideas will this discussion generate?",
                "options": [
                    "Negative ideas",
                    "No ideas",
                    "Positive ideas",
                    "Boring ideas"
                ],
                "answer": "Positive ideas"
            }
        ],
        "summary": {
            "takeaways": [
                "জটীল বাক্য গঠনে রিলেটিভ ক্লজ (which, who) এর সঠিক প্রয়োগ।",
                "প্রেজেন্ট পারফেক্ট টেন্সের সাহায্যে সাম্প্রতিক ঘটনা প্রকাশের নিয়ম।"
            ],
            "realLifeUsage": [
                {
                    "context": "সাম্প্রতিক কোনো অর্জন বা লেখা প্রকাশ করতে:",
                    "example": "I have recently read an essay about cleanliness campaign."
                }
            ]
        }
    },
    {
        "id": "s76",
        "title": "Artificial Intelligence Era",
        "subtitle": "কৃত্রিম বুদ্ধিমত্তার যুগ",
        "level": "Advanced",
        "levelColor": "rose",
        "topic": "Technology",
        "learningObjectives": [
            "Complex relative clauses",
            "Subjunctive mood: it is crucial that",
            "Tech jargon"
        ],
        "grammarFocus": [
            "Relative Clauses",
            "Subjunctive Mood"
        ],
        "grammarTeach": {
            "structure": "Third Conditional & Complex Clauses",
            "formula": "If + Subject + had + V3, Subject + would have + V3",
            "explanation": "এই উন্নত গল্পটিতে জটিল থার্ড কন্ডিশনাল এবং সাবজাঙ্কটিভ মুড (subjunctive mood)-এর গঠন নিয়ে বিষদ আলোচনা করা হয়েছে যা একাডেমিক এবং আইইএলটিএস রাইটিং-এর জন্য অত্যন্ত গুরুত্বপূর্ণ।",
            "examples": [
                {
                    "eng": "If they had invested in technology, they would have succeeded.",
                    "bng": "তারা যদি প্রযুক্তিতে বিনিয়োগ করত, তবে তারা সফল হতো।"
                },
                {
                    "eng": "It is crucial that we protect these resources.",
                    "bng": "এটি অত্যন্ত গুরুত্বপূর্ণ যে আমরা এই সম্পদগুলো রক্ষা করি।"
                }
            ]
        },
        "sentences": [
            {
                "eng": "If the researchers had not analyzed the data, they would not have understood artificial intelligence era.",
                "bng": "গবেষকরা যদি ডাটা বিশ্লেষণ না করতেন, তবে তারা কৃত্রিম বুদ্ধিমত্তার যুগ বুঝতে পারতেন না।"
            },
            {
                "eng": "It is imperative that we implement sustainable strategies immediately.",
                "bng": "এটি অত্যন্ত জরুরি যে আমরা অবিলম্বে টেকসই কৌশলসমূহ বাস্তবায়ন করি।"
            },
            {
                "eng": "Such complex challenges, which have been ignored for decades, require deep thinking.",
                "bng": "এ ধরনের জটিল চ্যালেঞ্জগুলো, যা দশকের পর দশক ধরে উপেক্ষা করা হয়েছে, গভীর চিন্তাভাবনা দাবি করে।"
            },
            {
                "eng": "Consequently, policymakers have initiated various programs to address the issues.",
                "bng": "ফলস্বরূপ, নীতিনির্ধারকরা সমস্যাগুলো সমাধানের জন্য বিভিন্ন কর্মসূচি শুরু করেছেন।"
            },
            {
                "eng": "Only through combined efforts will we be able to secure a better future.",
                "bng": "কেবলমাত্র যৌথ প্রচেষ্টার মাধ্যমেই আমরা একটি উন্নত ভবিষ্যৎ নিশ্চিত করতে সক্ষম হব।"
            }
        ],
        "vocabulary": [
            {
                "word": "analyzed",
                "bangla": "বিশ্লেষণ করেছিল",
                "partOfSpeech": "verb"
            },
            {
                "word": "imperative",
                "bangla": "অত্যন্ত জরুরি / বাধ্যতামূলক",
                "partOfSpeech": "adjective"
            },
            {
                "word": "sustainable",
                "bangla": "টেকসই",
                "partOfSpeech": "adjective"
            },
            {
                "word": "consequently",
                "bangla": "ফলস্বরূপ",
                "partOfSpeech": "adverb"
            },
            {
                "word": "secure",
                "bangla": "নিরাপদ করা / নিশ্চিত করা",
                "partOfSpeech": "verb"
            }
        ],
        "questions": [
            {
                "q": "What would have happened if researchers had not analyzed the data?",
                "options": [
                    "They would not have understood it",
                    "They would fail",
                    "Nothing would change",
                    "They would lose money"
                ],
                "answer": "They would not have understood it"
            },
            {
                "q": "What is imperative according to the text?",
                "options": [
                    "To implement sustainable strategies",
                    "To wait for results",
                    "To ignore challenges",
                    "To stop research"
                ],
                "answer": "To implement sustainable strategies"
            },
            {
                "q": "How long have these complex challenges been ignored?",
                "options": [
                    "For a few days",
                    "For decades",
                    "For one year",
                    "Never ignored"
                ],
                "answer": "For decades"
            },
            {
                "q": "How can we secure a better future?",
                "options": [
                    "Through combined efforts",
                    "By doing nothing",
                    "Through individual work only",
                    "By ignoring policies"
                ],
                "answer": "Through combined efforts"
            }
        ],
        "summary": {
            "takeaways": [
                "উন্নত বাক্য বিন্যাসে থার্ড কন্ডিশনাল (would have + V3) এর নিখুঁত প্রয়োগ।",
                "একাডেমিক লিখনশৈলীতে জোর দেওয়ার জন্য inversion (only through... will we) এর ব্যবহার।"
            ],
            "realLifeUsage": [
                {
                    "context": "কোনো অবাস্তব অতীত অনুশোচনা বা যৌক্তিক ফলাফল প্রকাশ করতে:",
                    "example": "If we had acted earlier, we would have resolved the issues of artificial intelligence era."
                }
            ]
        }
    },
    {
        "id": "s77",
        "title": "Carbon Footprint Reduction",
        "subtitle": "কার্বন ফুটপ্রিন্ট হ্রাস",
        "level": "Advanced",
        "levelColor": "rose",
        "topic": "Environment",
        "learningObjectives": [
            "Passive voice for formal arguments",
            "Inversion structures",
            "Eco-jargon"
        ],
        "grammarFocus": [
            "Passive Voice",
            "Inversion"
        ],
        "grammarTeach": {
            "structure": "Third Conditional & Complex Clauses",
            "formula": "If + Subject + had + V3, Subject + would have + V3",
            "explanation": "এই উন্নত গল্পটিতে জটিল থার্ড কন্ডিশনাল এবং সাবজাঙ্কটিভ মুড (subjunctive mood)-এর গঠন নিয়ে বিষদ আলোচনা করা হয়েছে যা একাডেমিক এবং আইইএলটিএস রাইটিং-এর জন্য অত্যন্ত গুরুত্বপূর্ণ।",
            "examples": [
                {
                    "eng": "If they had invested in technology, they would have succeeded.",
                    "bng": "তারা যদি প্রযুক্তিতে বিনিয়োগ করত, তবে তারা সফল হতো।"
                },
                {
                    "eng": "It is crucial that we protect these resources.",
                    "bng": "এটি অত্যন্ত গুরুত্বপূর্ণ যে আমরা এই সম্পদগুলো রক্ষা করি।"
                }
            ]
        },
        "sentences": [
            {
                "eng": "If the researchers had not analyzed the data, they would not have understood carbon footprint reduction.",
                "bng": "গবেষকরা যদি ডাটা বিশ্লেষণ না করতেন, তবে তারা কার্বন ফুটপ্রিন্ট হ্রাস বুঝতে পারতেন না।"
            },
            {
                "eng": "It is imperative that we implement sustainable strategies immediately.",
                "bng": "এটি অত্যন্ত জরুরি যে আমরা অবিলম্বে টেকসই কৌশলসমূহ বাস্তবায়ন করি।"
            },
            {
                "eng": "Such complex challenges, which have been ignored for decades, require deep thinking.",
                "bng": "এ ধরনের জটিল চ্যালেঞ্জগুলো, যা দশকের পর দশক ধরে উপেক্ষা করা হয়েছে, গভীর চিন্তাভাবনা দাবি করে।"
            },
            {
                "eng": "Consequently, policymakers have initiated various programs to address the issues.",
                "bng": "ফলস্বরূপ, নীতিনির্ধারকরা সমস্যাগুলো সমাধানের জন্য বিভিন্ন কর্মসূচি শুরু করেছেন।"
            },
            {
                "eng": "Only through combined efforts will we be able to secure a better future.",
                "bng": "কেবলমাত্র যৌথ প্রচেষ্টার মাধ্যমেই আমরা একটি উন্নত ভবিষ্যৎ নিশ্চিত করতে সক্ষম হব।"
            }
        ],
        "vocabulary": [
            {
                "word": "analyzed",
                "bangla": "বিশ্লেষণ করেছিল",
                "partOfSpeech": "verb"
            },
            {
                "word": "imperative",
                "bangla": "অত্যন্ত জরুরি / বাধ্যতামূলক",
                "partOfSpeech": "adjective"
            },
            {
                "word": "sustainable",
                "bangla": "টেকসই",
                "partOfSpeech": "adjective"
            },
            {
                "word": "consequently",
                "bangla": "ফলস্বরূপ",
                "partOfSpeech": "adverb"
            },
            {
                "word": "secure",
                "bangla": "নিরাপদ করা / নিশ্চিত করা",
                "partOfSpeech": "verb"
            }
        ],
        "questions": [
            {
                "q": "What would have happened if researchers had not analyzed the data?",
                "options": [
                    "They would not have understood it",
                    "They would fail",
                    "Nothing would change",
                    "They would lose money"
                ],
                "answer": "They would not have understood it"
            },
            {
                "q": "What is imperative according to the text?",
                "options": [
                    "To implement sustainable strategies",
                    "To wait for results",
                    "To ignore challenges",
                    "To stop research"
                ],
                "answer": "To implement sustainable strategies"
            },
            {
                "q": "How long have these complex challenges been ignored?",
                "options": [
                    "For a few days",
                    "For decades",
                    "For one year",
                    "Never ignored"
                ],
                "answer": "For decades"
            },
            {
                "q": "How can we secure a better future?",
                "options": [
                    "Through combined efforts",
                    "By doing nothing",
                    "Through individual work only",
                    "By ignoring policies"
                ],
                "answer": "Through combined efforts"
            }
        ],
        "summary": {
            "takeaways": [
                "উন্নত বাক্য বিন্যাসে থার্ড কন্ডিশনাল (would have + V3) এর নিখুঁত প্রয়োগ।",
                "একাডেমিক লিখনশৈলীতে জোর দেওয়ার জন্য inversion (only through... will we) এর ব্যবহার।"
            ],
            "realLifeUsage": [
                {
                    "context": "কোনো অবাস্তব অতীত অনুশোচনা বা যৌক্তিক ফলাফল প্রকাশ করতে:",
                    "example": "If we had acted earlier, we would have resolved the issues of carbon footprint reduction."
                }
            ]
        }
    },
    {
        "id": "s78",
        "title": "Economic Inequality",
        "subtitle": "অর্থনৈতিক অসমতা",
        "level": "Advanced",
        "levelColor": "rose",
        "topic": "Economy",
        "learningObjectives": [
            "Conditional clauses type 3",
            "Hedging language",
            "Financial analysis words"
        ],
        "grammarFocus": [
            "Conditionals",
            "Hedging"
        ],
        "grammarTeach": {
            "structure": "Third Conditional & Complex Clauses",
            "formula": "If + Subject + had + V3, Subject + would have + V3",
            "explanation": "এই উন্নত গল্পটিতে জটিল থার্ড কন্ডিশনাল এবং সাবজাঙ্কটিভ মুড (subjunctive mood)-এর গঠন নিয়ে বিষদ আলোচনা করা হয়েছে যা একাডেমিক এবং আইইএলটিএস রাইটিং-এর জন্য অত্যন্ত গুরুত্বপূর্ণ।",
            "examples": [
                {
                    "eng": "If they had invested in technology, they would have succeeded.",
                    "bng": "তারা যদি প্রযুক্তিতে বিনিয়োগ করত, তবে তারা সফল হতো।"
                },
                {
                    "eng": "It is crucial that we protect these resources.",
                    "bng": "এটি অত্যন্ত গুরুত্বপূর্ণ যে আমরা এই সম্পদগুলো রক্ষা করি।"
                }
            ]
        },
        "sentences": [
            {
                "eng": "If the researchers had not analyzed the data, they would not have understood economic inequality.",
                "bng": "গবেষকরা যদি ডাটা বিশ্লেষণ না করতেন, তবে তারা অর্থনৈতিক অসমতা বুঝতে পারতেন না।"
            },
            {
                "eng": "It is imperative that we implement sustainable strategies immediately.",
                "bng": "এটি অত্যন্ত জরুরি যে আমরা অবিলম্বে টেকসই কৌশলসমূহ বাস্তবায়ন করি।"
            },
            {
                "eng": "Such complex challenges, which have been ignored for decades, require deep thinking.",
                "bng": "এ ধরনের জটিল চ্যালেঞ্জগুলো, যা দশকের পর দশক ধরে উপেক্ষা করা হয়েছে, গভীর চিন্তাভাবনা দাবি করে।"
            },
            {
                "eng": "Consequently, policymakers have initiated various programs to address the issues.",
                "bng": "ফলস্বরূপ, নীতিনির্ধারকরা সমস্যাগুলো সমাধানের জন্য বিভিন্ন কর্মসূচি শুরু করেছেন।"
            },
            {
                "eng": "Only through combined efforts will we be able to secure a better future.",
                "bng": "কেবলমাত্র যৌথ প্রচেষ্টার মাধ্যমেই আমরা একটি উন্নত ভবিষ্যৎ নিশ্চিত করতে সক্ষম হব।"
            }
        ],
        "vocabulary": [
            {
                "word": "analyzed",
                "bangla": "বিশ্লেষণ করেছিল",
                "partOfSpeech": "verb"
            },
            {
                "word": "imperative",
                "bangla": "অত্যন্ত জরুরি / বাধ্যতামূলক",
                "partOfSpeech": "adjective"
            },
            {
                "word": "sustainable",
                "bangla": "টেকসই",
                "partOfSpeech": "adjective"
            },
            {
                "word": "consequently",
                "bangla": "ফলস্বরূপ",
                "partOfSpeech": "adverb"
            },
            {
                "word": "secure",
                "bangla": "নিরাপদ করা / নিশ্চিত করা",
                "partOfSpeech": "verb"
            }
        ],
        "questions": [
            {
                "q": "What would have happened if researchers had not analyzed the data?",
                "options": [
                    "They would not have understood it",
                    "They would fail",
                    "Nothing would change",
                    "They would lose money"
                ],
                "answer": "They would not have understood it"
            },
            {
                "q": "What is imperative according to the text?",
                "options": [
                    "To implement sustainable strategies",
                    "To wait for results",
                    "To ignore challenges",
                    "To stop research"
                ],
                "answer": "To implement sustainable strategies"
            },
            {
                "q": "How long have these complex challenges been ignored?",
                "options": [
                    "For a few days",
                    "For decades",
                    "For one year",
                    "Never ignored"
                ],
                "answer": "For decades"
            },
            {
                "q": "How can we secure a better future?",
                "options": [
                    "Through combined efforts",
                    "By doing nothing",
                    "Through individual work only",
                    "By ignoring policies"
                ],
                "answer": "Through combined efforts"
            }
        ],
        "summary": {
            "takeaways": [
                "উন্নত বাক্য বিন্যাসে থার্ড কন্ডিশনাল (would have + V3) এর নিখুঁত প্রয়োগ।",
                "একাডেমিক লিখনশৈলীতে জোর দেওয়ার জন্য inversion (only through... will we) এর ব্যবহার।"
            ],
            "realLifeUsage": [
                {
                    "context": "কোনো অবাস্তব অতীত অনুশোচনা বা যৌক্তিক ফলাফল প্রকাশ করতে:",
                    "example": "If we had acted earlier, we would have resolved the issues of economic inequality."
                }
            ]
        }
    },
    {
        "id": "s79",
        "title": "The Art of Decision Making",
        "subtitle": "সিদ্ধান্ত নেওয়ার শিল্প",
        "level": "Advanced",
        "levelColor": "rose",
        "topic": "Psychology",
        "learningObjectives": [
            "Modal verbs of logical deduction",
            "Gerund vs infinitive",
            "Psychological words"
        ],
        "grammarFocus": [
            "Modals",
            "Gerund vs Infinitive"
        ],
        "grammarTeach": {
            "structure": "Third Conditional & Complex Clauses",
            "formula": "If + Subject + had + V3, Subject + would have + V3",
            "explanation": "এই উন্নত গল্পটিতে জটিল থার্ড কন্ডিশনাল এবং সাবজাঙ্কটিভ মুড (subjunctive mood)-এর গঠন নিয়ে বিষদ আলোচনা করা হয়েছে যা একাডেমিক এবং আইইএলটিএস রাইটিং-এর জন্য অত্যন্ত গুরুত্বপূর্ণ।",
            "examples": [
                {
                    "eng": "If they had invested in technology, they would have succeeded.",
                    "bng": "তারা যদি প্রযুক্তিতে বিনিয়োগ করত, তবে তারা সফল হতো।"
                },
                {
                    "eng": "It is crucial that we protect these resources.",
                    "bng": "এটি অত্যন্ত গুরুত্বপূর্ণ যে আমরা এই সম্পদগুলো রক্ষা করি।"
                }
            ]
        },
        "sentences": [
            {
                "eng": "If the researchers had not analyzed the data, they would not have understood the art of decision making.",
                "bng": "গবেষকরা যদি ডাটা বিশ্লেষণ না করতেন, তবে তারা সিদ্ধান্ত নেওয়ার শিল্প বুঝতে পারতেন না।"
            },
            {
                "eng": "It is imperative that we implement sustainable strategies immediately.",
                "bng": "এটি অত্যন্ত জরুরি যে আমরা অবিলম্বে টেকসই কৌশলসমূহ বাস্তবায়ন করি।"
            },
            {
                "eng": "Such complex challenges, which have been ignored for decades, require deep thinking.",
                "bng": "এ ধরনের জটিল চ্যালেঞ্জগুলো, যা দশকের পর দশক ধরে উপেক্ষা করা হয়েছে, গভীর চিন্তাভাবনা দাবি করে।"
            },
            {
                "eng": "Consequently, policymakers have initiated various programs to address the issues.",
                "bng": "ফলস্বরূপ, নীতিনির্ধারকরা সমস্যাগুলো সমাধানের জন্য বিভিন্ন কর্মসূচি শুরু করেছেন।"
            },
            {
                "eng": "Only through combined efforts will we be able to secure a better future.",
                "bng": "কেবলমাত্র যৌথ প্রচেষ্টার মাধ্যমেই আমরা একটি উন্নত ভবিষ্যৎ নিশ্চিত করতে সক্ষম হব।"
            }
        ],
        "vocabulary": [
            {
                "word": "analyzed",
                "bangla": "বিশ্লেষণ করেছিল",
                "partOfSpeech": "verb"
            },
            {
                "word": "imperative",
                "bangla": "অত্যন্ত জরুরি / বাধ্যতামূলক",
                "partOfSpeech": "adjective"
            },
            {
                "word": "sustainable",
                "bangla": "টেকসই",
                "partOfSpeech": "adjective"
            },
            {
                "word": "consequently",
                "bangla": "ফলস্বরূপ",
                "partOfSpeech": "adverb"
            },
            {
                "word": "secure",
                "bangla": "নিরাপদ করা / নিশ্চিত করা",
                "partOfSpeech": "verb"
            }
        ],
        "questions": [
            {
                "q": "What would have happened if researchers had not analyzed the data?",
                "options": [
                    "They would not have understood it",
                    "They would fail",
                    "Nothing would change",
                    "They would lose money"
                ],
                "answer": "They would not have understood it"
            },
            {
                "q": "What is imperative according to the text?",
                "options": [
                    "To implement sustainable strategies",
                    "To wait for results",
                    "To ignore challenges",
                    "To stop research"
                ],
                "answer": "To implement sustainable strategies"
            },
            {
                "q": "How long have these complex challenges been ignored?",
                "options": [
                    "For a few days",
                    "For decades",
                    "For one year",
                    "Never ignored"
                ],
                "answer": "For decades"
            },
            {
                "q": "How can we secure a better future?",
                "options": [
                    "Through combined efforts",
                    "By doing nothing",
                    "Through individual work only",
                    "By ignoring policies"
                ],
                "answer": "Through combined efforts"
            }
        ],
        "summary": {
            "takeaways": [
                "উন্নত বাক্য বিন্যাসে থার্ড কন্ডিশনাল (would have + V3) এর নিখুঁত প্রয়োগ।",
                "একাডেমিক লিখনশৈলীতে জোর দেওয়ার জন্য inversion (only through... will we) এর ব্যবহার।"
            ],
            "realLifeUsage": [
                {
                    "context": "কোনো অবাস্তব অতীত অনুশোচনা বা যৌক্তিক ফলাফল প্রকাশ করতে:",
                    "example": "If we had acted earlier, we would have resolved the issues of the art of decision making."
                }
            ]
        }
    },
    {
        "id": "s80",
        "title": "Mental Health Awareness",
        "subtitle": "মানসিক স্বাস্থ্য সচেতনতা",
        "level": "Advanced",
        "levelColor": "rose",
        "topic": "Health",
        "learningObjectives": [
            "Reported speech rules",
            "Complex clauses with although/despite",
            "Health vocabulary"
        ],
        "grammarFocus": [
            "Reported Speech",
            "Complex Clauses"
        ],
        "grammarTeach": {
            "structure": "Third Conditional & Complex Clauses",
            "formula": "If + Subject + had + V3, Subject + would have + V3",
            "explanation": "এই উন্নত গল্পটিতে জটিল থার্ড কন্ডিশনাল এবং সাবজাঙ্কটিভ মুড (subjunctive mood)-এর গঠন নিয়ে বিষদ আলোচনা করা হয়েছে যা একাডেমিক এবং আইইএলটিএস রাইটিং-এর জন্য অত্যন্ত গুরুত্বপূর্ণ।",
            "examples": [
                {
                    "eng": "If they had invested in technology, they would have succeeded.",
                    "bng": "তারা যদি প্রযুক্তিতে বিনিয়োগ করত, তবে তারা সফল হতো।"
                },
                {
                    "eng": "It is crucial that we protect these resources.",
                    "bng": "এটি অত্যন্ত গুরুত্বপূর্ণ যে আমরা এই সম্পদগুলো রক্ষা করি।"
                }
            ]
        },
        "sentences": [
            {
                "eng": "If the researchers had not analyzed the data, they would not have understood mental health awareness.",
                "bng": "গবেষকরা যদি ডাটা বিশ্লেষণ না করতেন, তবে তারা মানসিক স্বাস্থ্য সচেতনতা বুঝতে পারতেন না।"
            },
            {
                "eng": "It is imperative that we implement sustainable strategies immediately.",
                "bng": "এটি অত্যন্ত জরুরি যে আমরা অবিলম্বে টেকসই কৌশলসমূহ বাস্তবায়ন করি।"
            },
            {
                "eng": "Such complex challenges, which have been ignored for decades, require deep thinking.",
                "bng": "এ ধরনের জটিল চ্যালেঞ্জগুলো, যা দশকের পর দশক ধরে উপেক্ষা করা হয়েছে, গভীর চিন্তাভাবনা দাবি করে।"
            },
            {
                "eng": "Consequently, policymakers have initiated various programs to address the issues.",
                "bng": "ফলস্বরূপ, নীতিনির্ধারকরা সমস্যাগুলো সমাধানের জন্য বিভিন্ন কর্মসূচি শুরু করেছেন।"
            },
            {
                "eng": "Only through combined efforts will we be able to secure a better future.",
                "bng": "কেবলমাত্র যৌথ প্রচেষ্টার মাধ্যমেই আমরা একটি উন্নত ভবিষ্যৎ নিশ্চিত করতে সক্ষম হব।"
            }
        ],
        "vocabulary": [
            {
                "word": "analyzed",
                "bangla": "বিশ্লেষণ করেছিল",
                "partOfSpeech": "verb"
            },
            {
                "word": "imperative",
                "bangla": "অত্যন্ত জরুরি / বাধ্যতামূলক",
                "partOfSpeech": "adjective"
            },
            {
                "word": "sustainable",
                "bangla": "টেকসই",
                "partOfSpeech": "adjective"
            },
            {
                "word": "consequently",
                "bangla": "ফলস্বরূপ",
                "partOfSpeech": "adverb"
            },
            {
                "word": "secure",
                "bangla": "নিরাপদ করা / নিশ্চিত করা",
                "partOfSpeech": "verb"
            }
        ],
        "questions": [
            {
                "q": "What would have happened if researchers had not analyzed the data?",
                "options": [
                    "They would not have understood it",
                    "They would fail",
                    "Nothing would change",
                    "They would lose money"
                ],
                "answer": "They would not have understood it"
            },
            {
                "q": "What is imperative according to the text?",
                "options": [
                    "To implement sustainable strategies",
                    "To wait for results",
                    "To ignore challenges",
                    "To stop research"
                ],
                "answer": "To implement sustainable strategies"
            },
            {
                "q": "How long have these complex challenges been ignored?",
                "options": [
                    "For a few days",
                    "For decades",
                    "For one year",
                    "Never ignored"
                ],
                "answer": "For decades"
            },
            {
                "q": "How can we secure a better future?",
                "options": [
                    "Through combined efforts",
                    "By doing nothing",
                    "Through individual work only",
                    "By ignoring policies"
                ],
                "answer": "Through combined efforts"
            }
        ],
        "summary": {
            "takeaways": [
                "উন্নত বাক্য বিন্যাসে থার্ড কন্ডিশনাল (would have + V3) এর নিখুঁত প্রয়োগ।",
                "একাডেমিক লিখনশৈলীতে জোর দেওয়ার জন্য inversion (only through... will we) এর ব্যবহার।"
            ],
            "realLifeUsage": [
                {
                    "context": "কোনো অবাস্তব অতীত অনুশোচনা বা যৌক্তিক ফলাফল প্রকাশ করতে:",
                    "example": "If we had acted earlier, we would have resolved the issues of mental health awareness."
                }
            ]
        }
    },
    {
        "id": "s81",
        "title": "Globalization Pros and Cons",
        "subtitle": "বিশ্বায়নের ভালো-মন্দ",
        "level": "Advanced",
        "levelColor": "rose",
        "topic": "Society",
        "learningObjectives": [
            "Advanced contrast structures",
            "Passive forms",
            "Sociological words"
        ],
        "grammarFocus": [
            "Contrast Linkers",
            "Passive Voice"
        ],
        "grammarTeach": {
            "structure": "Third Conditional & Complex Clauses",
            "formula": "If + Subject + had + V3, Subject + would have + V3",
            "explanation": "এই উন্নত গল্পটিতে জটিল থার্ড কন্ডিশনাল এবং সাবজাঙ্কটিভ মুড (subjunctive mood)-এর গঠন নিয়ে বিষদ আলোচনা করা হয়েছে যা একাডেমিক এবং আইইএলটিএস রাইটিং-এর জন্য অত্যন্ত গুরুত্বপূর্ণ।",
            "examples": [
                {
                    "eng": "If they had invested in technology, they would have succeeded.",
                    "bng": "তারা যদি প্রযুক্তিতে বিনিয়োগ করত, তবে তারা সফল হতো।"
                },
                {
                    "eng": "It is crucial that we protect these resources.",
                    "bng": "এটি অত্যন্ত গুরুত্বপূর্ণ যে আমরা এই সম্পদগুলো রক্ষা করি।"
                }
            ]
        },
        "sentences": [
            {
                "eng": "If the researchers had not analyzed the data, they would not have understood globalization pros and cons.",
                "bng": "গবেষকরা যদি ডাটা বিশ্লেষণ না করতেন, তবে তারা বিশ্বায়নের ভালো-মন্দ বুঝতে পারতেন না।"
            },
            {
                "eng": "It is imperative that we implement sustainable strategies immediately.",
                "bng": "এটি অত্যন্ত জরুরি যে আমরা অবিলম্বে টেকসই কৌশলসমূহ বাস্তবায়ন করি।"
            },
            {
                "eng": "Such complex challenges, which have been ignored for decades, require deep thinking.",
                "bng": "এ ধরনের জটিল চ্যালেঞ্জগুলো, যা দশকের পর দশক ধরে উপেক্ষা করা হয়েছে, গভীর চিন্তাভাবনা দাবি করে।"
            },
            {
                "eng": "Consequently, policymakers have initiated various programs to address the issues.",
                "bng": "ফলস্বরূপ, নীতিনির্ধারকরা সমস্যাগুলো সমাধানের জন্য বিভিন্ন কর্মসূচি শুরু করেছেন।"
            },
            {
                "eng": "Only through combined efforts will we be able to secure a better future.",
                "bng": "কেবলমাত্র যৌথ প্রচেষ্টার মাধ্যমেই আমরা একটি উন্নত ভবিষ্যৎ নিশ্চিত করতে সক্ষম হব।"
            }
        ],
        "vocabulary": [
            {
                "word": "analyzed",
                "bangla": "বিশ্লেষণ করেছিল",
                "partOfSpeech": "verb"
            },
            {
                "word": "imperative",
                "bangla": "অত্যন্ত জরুরি / বাধ্যতামূলক",
                "partOfSpeech": "adjective"
            },
            {
                "word": "sustainable",
                "bangla": "টেকসই",
                "partOfSpeech": "adjective"
            },
            {
                "word": "consequently",
                "bangla": "ফলস্বরূপ",
                "partOfSpeech": "adverb"
            },
            {
                "word": "secure",
                "bangla": "নিরাপদ করা / নিশ্চিত করা",
                "partOfSpeech": "verb"
            }
        ],
        "questions": [
            {
                "q": "What would have happened if researchers had not analyzed the data?",
                "options": [
                    "They would not have understood it",
                    "They would fail",
                    "Nothing would change",
                    "They would lose money"
                ],
                "answer": "They would not have understood it"
            },
            {
                "q": "What is imperative according to the text?",
                "options": [
                    "To implement sustainable strategies",
                    "To wait for results",
                    "To ignore challenges",
                    "To stop research"
                ],
                "answer": "To implement sustainable strategies"
            },
            {
                "q": "How long have these complex challenges been ignored?",
                "options": [
                    "For a few days",
                    "For decades",
                    "For one year",
                    "Never ignored"
                ],
                "answer": "For decades"
            },
            {
                "q": "How can we secure a better future?",
                "options": [
                    "Through combined efforts",
                    "By doing nothing",
                    "Through individual work only",
                    "By ignoring policies"
                ],
                "answer": "Through combined efforts"
            }
        ],
        "summary": {
            "takeaways": [
                "উন্নত বাক্য বিন্যাসে থার্ড কন্ডিশনাল (would have + V3) এর নিখুঁত প্রয়োগ।",
                "একাডেমিক লিখনশৈলীতে জোর দেওয়ার জন্য inversion (only through... will we) এর ব্যবহার।"
            ],
            "realLifeUsage": [
                {
                    "context": "কোনো অবাস্তব অতীত অনুশোচনা বা যৌক্তিক ফলাফল প্রকাশ করতে:",
                    "example": "If we had acted earlier, we would have resolved the issues of globalization pros and cons."
                }
            ]
        }
    },
    {
        "id": "s82",
        "title": "The Future of Clean Energy",
        "subtitle": "পরিষ্কার শক্তির ভবিষ্যৎ",
        "level": "Advanced",
        "levelColor": "rose",
        "topic": "Science",
        "learningObjectives": [
            "Future perfect passive forms",
            "Relative adverb clauses",
            "Scientific words"
        ],
        "grammarFocus": [
            "Passive Voice",
            "Future Perfect"
        ],
        "grammarTeach": {
            "structure": "Third Conditional & Complex Clauses",
            "formula": "If + Subject + had + V3, Subject + would have + V3",
            "explanation": "এই উন্নত গল্পটিতে জটিল থার্ড কন্ডিশনাল এবং সাবজাঙ্কটিভ মুড (subjunctive mood)-এর গঠন নিয়ে বিষদ আলোচনা করা হয়েছে যা একাডেমিক এবং আইইএলটিএস রাইটিং-এর জন্য অত্যন্ত গুরুত্বপূর্ণ।",
            "examples": [
                {
                    "eng": "If they had invested in technology, they would have succeeded.",
                    "bng": "তারা যদি প্রযুক্তিতে বিনিয়োগ করত, তবে তারা সফল হতো।"
                },
                {
                    "eng": "It is crucial that we protect these resources.",
                    "bng": "এটি অত্যন্ত গুরুত্বপূর্ণ যে আমরা এই সম্পদগুলো রক্ষা করি।"
                }
            ]
        },
        "sentences": [
            {
                "eng": "If the researchers had not analyzed the data, they would not have understood the future of clean energy.",
                "bng": "গবেষকরা যদি ডাটা বিশ্লেষণ না করতেন, তবে তারা পরিষ্কার শক্তির ভবিষ্যৎ বুঝতে পারতেন না।"
            },
            {
                "eng": "It is imperative that we implement sustainable strategies immediately.",
                "bng": "এটি অত্যন্ত জরুরি যে আমরা অবিলম্বে টেকসই কৌশলসমূহ বাস্তবায়ন করি।"
            },
            {
                "eng": "Such complex challenges, which have been ignored for decades, require deep thinking.",
                "bng": "এ ধরনের জটিল চ্যালেঞ্জগুলো, যা দশকের পর দশক ধরে উপেক্ষা করা হয়েছে, গভীর চিন্তাভাবনা দাবি করে।"
            },
            {
                "eng": "Consequently, policymakers have initiated various programs to address the issues.",
                "bng": "ফলস্বরূপ, নীতিনির্ধারকরা সমস্যাগুলো সমাধানের জন্য বিভিন্ন কর্মসূচি শুরু করেছেন।"
            },
            {
                "eng": "Only through combined efforts will we be able to secure a better future.",
                "bng": "কেবলমাত্র যৌথ প্রচেষ্টার মাধ্যমেই আমরা একটি উন্নত ভবিষ্যৎ নিশ্চিত করতে সক্ষম হব।"
            }
        ],
        "vocabulary": [
            {
                "word": "analyzed",
                "bangla": "বিশ্লেষণ করেছিল",
                "partOfSpeech": "verb"
            },
            {
                "word": "imperative",
                "bangla": "অত্যন্ত জরুরি / বাধ্যতামূলক",
                "partOfSpeech": "adjective"
            },
            {
                "word": "sustainable",
                "bangla": "টেকসই",
                "partOfSpeech": "adjective"
            },
            {
                "word": "consequently",
                "bangla": "ফলস্বরূপ",
                "partOfSpeech": "adverb"
            },
            {
                "word": "secure",
                "bangla": "নিরাপদ করা / নিশ্চিত করা",
                "partOfSpeech": "verb"
            }
        ],
        "questions": [
            {
                "q": "What would have happened if researchers had not analyzed the data?",
                "options": [
                    "They would not have understood it",
                    "They would fail",
                    "Nothing would change",
                    "They would lose money"
                ],
                "answer": "They would not have understood it"
            },
            {
                "q": "What is imperative according to the text?",
                "options": [
                    "To implement sustainable strategies",
                    "To wait for results",
                    "To ignore challenges",
                    "To stop research"
                ],
                "answer": "To implement sustainable strategies"
            },
            {
                "q": "How long have these complex challenges been ignored?",
                "options": [
                    "For a few days",
                    "For decades",
                    "For one year",
                    "Never ignored"
                ],
                "answer": "For decades"
            },
            {
                "q": "How can we secure a better future?",
                "options": [
                    "Through combined efforts",
                    "By doing nothing",
                    "Through individual work only",
                    "By ignoring policies"
                ],
                "answer": "Through combined efforts"
            }
        ],
        "summary": {
            "takeaways": [
                "উন্নত বাক্য বিন্যাসে থার্ড কন্ডিশনাল (would have + V3) এর নিখুঁত প্রয়োগ।",
                "একাডেমিক লিখনশৈলীতে জোর দেওয়ার জন্য inversion (only through... will we) এর ব্যবহার।"
            ],
            "realLifeUsage": [
                {
                    "context": "কোনো অবাস্তব অতীত অনুশোচনা বা যৌক্তিক ফলাফল প্রকাশ করতে:",
                    "example": "If we had acted earlier, we would have resolved the issues of the future of clean energy."
                }
            ]
        }
    },
    {
        "id": "s83",
        "title": "Space Tourism Feasibility",
        "subtitle": "মহাকাশ পর্যটনের সম্ভাব্যতা",
        "level": "Advanced",
        "levelColor": "rose",
        "topic": "Science",
        "learningObjectives": [
            "Speculating about the future",
            "Modal perfects: must have been",
            "Space words"
        ],
        "grammarFocus": [
            "Speculation",
            "Modal Perfects"
        ],
        "grammarTeach": {
            "structure": "Third Conditional & Complex Clauses",
            "formula": "If + Subject + had + V3, Subject + would have + V3",
            "explanation": "এই উন্নত গল্পটিতে জটিল থার্ড কন্ডিশনাল এবং সাবজাঙ্কটিভ মুড (subjunctive mood)-এর গঠন নিয়ে বিষদ আলোচনা করা হয়েছে যা একাডেমিক এবং আইইএলটিএস রাইটিং-এর জন্য অত্যন্ত গুরুত্বপূর্ণ।",
            "examples": [
                {
                    "eng": "If they had invested in technology, they would have succeeded.",
                    "bng": "তারা যদি প্রযুক্তিতে বিনিয়োগ করত, তবে তারা সফল হতো।"
                },
                {
                    "eng": "It is crucial that we protect these resources.",
                    "bng": "এটি অত্যন্ত গুরুত্বপূর্ণ যে আমরা এই সম্পদগুলো রক্ষা করি।"
                }
            ]
        },
        "sentences": [
            {
                "eng": "If the researchers had not analyzed the data, they would not have understood space tourism feasibility.",
                "bng": "গবেষকরা যদি ডাটা বিশ্লেষণ না করতেন, তবে তারা মহাকাশ পর্যটনের সম্ভাব্যতা বুঝতে পারতেন না।"
            },
            {
                "eng": "It is imperative that we implement sustainable strategies immediately.",
                "bng": "এটি অত্যন্ত জরুরি যে আমরা অবিলম্বে টেকসই কৌশলসমূহ বাস্তবায়ন করি।"
            },
            {
                "eng": "Such complex challenges, which have been ignored for decades, require deep thinking.",
                "bng": "এ ধরনের জটিল চ্যালেঞ্জগুলো, যা দশকের পর দশক ধরে উপেক্ষা করা হয়েছে, গভীর চিন্তাভাবনা দাবি করে।"
            },
            {
                "eng": "Consequently, policymakers have initiated various programs to address the issues.",
                "bng": "ফলস্বরূপ, নীতিনির্ধারকরা সমস্যাগুলো সমাধানের জন্য বিভিন্ন কর্মসূচি শুরু করেছেন।"
            },
            {
                "eng": "Only through combined efforts will we be able to secure a better future.",
                "bng": "কেবলমাত্র যৌথ প্রচেষ্টার মাধ্যমেই আমরা একটি উন্নত ভবিষ্যৎ নিশ্চিত করতে সক্ষম হব।"
            }
        ],
        "vocabulary": [
            {
                "word": "analyzed",
                "bangla": "বিশ্লেষণ করেছিল",
                "partOfSpeech": "verb"
            },
            {
                "word": "imperative",
                "bangla": "অত্যন্ত জরুরি / বাধ্যতামূলক",
                "partOfSpeech": "adjective"
            },
            {
                "word": "sustainable",
                "bangla": "টেকসই",
                "partOfSpeech": "adjective"
            },
            {
                "word": "consequently",
                "bangla": "ফলস্বরূপ",
                "partOfSpeech": "adverb"
            },
            {
                "word": "secure",
                "bangla": "নিরাপদ করা / নিশ্চিত করা",
                "partOfSpeech": "verb"
            }
        ],
        "questions": [
            {
                "q": "What would have happened if researchers had not analyzed the data?",
                "options": [
                    "They would not have understood it",
                    "They would fail",
                    "Nothing would change",
                    "They would lose money"
                ],
                "answer": "They would not have understood it"
            },
            {
                "q": "What is imperative according to the text?",
                "options": [
                    "To implement sustainable strategies",
                    "To wait for results",
                    "To ignore challenges",
                    "To stop research"
                ],
                "answer": "To implement sustainable strategies"
            },
            {
                "q": "How long have these complex challenges been ignored?",
                "options": [
                    "For a few days",
                    "For decades",
                    "For one year",
                    "Never ignored"
                ],
                "answer": "For decades"
            },
            {
                "q": "How can we secure a better future?",
                "options": [
                    "Through combined efforts",
                    "By doing nothing",
                    "Through individual work only",
                    "By ignoring policies"
                ],
                "answer": "Through combined efforts"
            }
        ],
        "summary": {
            "takeaways": [
                "উন্নত বাক্য বিন্যাসে থার্ড কন্ডিশনাল (would have + V3) এর নিখুঁত প্রয়োগ।",
                "একাডেমিক লিখনশৈলীতে জোর দেওয়ার জন্য inversion (only through... will we) এর ব্যবহার।"
            ],
            "realLifeUsage": [
                {
                    "context": "কোনো অবাস্তব অতীত অনুশোচনা বা যৌক্তিক ফলাফল প্রকাশ করতে:",
                    "example": "If we had acted earlier, we would have resolved the issues of space tourism feasibility."
                }
            ]
        }
    },
    {
        "id": "s84",
        "title": "Loss of Biodiversity",
        "subtitle": "জীববৈচিত্র্য হ্রাস",
        "level": "Advanced",
        "levelColor": "rose",
        "topic": "Environment",
        "learningObjectives": [
            "Cause and effect complex linkers",
            "Inversion for emphasis",
            "Nature words"
        ],
        "grammarFocus": [
            "Linkers",
            "Inversion"
        ],
        "grammarTeach": {
            "structure": "Third Conditional & Complex Clauses",
            "formula": "If + Subject + had + V3, Subject + would have + V3",
            "explanation": "এই উন্নত গল্পটিতে জটিল থার্ড কন্ডিশনাল এবং সাবজাঙ্কটিভ মুড (subjunctive mood)-এর গঠন নিয়ে বিষদ আলোচনা করা হয়েছে যা একাডেমিক এবং আইইএলটিএস রাইটিং-এর জন্য অত্যন্ত গুরুত্বপূর্ণ।",
            "examples": [
                {
                    "eng": "If they had invested in technology, they would have succeeded.",
                    "bng": "তারা যদি প্রযুক্তিতে বিনিয়োগ করত, তবে তারা সফল হতো।"
                },
                {
                    "eng": "It is crucial that we protect these resources.",
                    "bng": "এটি অত্যন্ত গুরুত্বপূর্ণ যে আমরা এই সম্পদগুলো রক্ষা করি।"
                }
            ]
        },
        "sentences": [
            {
                "eng": "If the researchers had not analyzed the data, they would not have understood loss of biodiversity.",
                "bng": "গবেষকরা যদি ডাটা বিশ্লেষণ না করতেন, তবে তারা জীববৈচিত্র্য হ্রাস বুঝতে পারতেন না।"
            },
            {
                "eng": "It is imperative that we implement sustainable strategies immediately.",
                "bng": "এটি অত্যন্ত জরুরি যে আমরা অবিলম্বে টেকসই কৌশলসমূহ বাস্তবায়ন করি।"
            },
            {
                "eng": "Such complex challenges, which have been ignored for decades, require deep thinking.",
                "bng": "এ ধরনের জটিল চ্যালেঞ্জগুলো, যা দশকের পর দশক ধরে উপেক্ষা করা হয়েছে, গভীর চিন্তাভাবনা দাবি করে।"
            },
            {
                "eng": "Consequently, policymakers have initiated various programs to address the issues.",
                "bng": "ফলস্বরূপ, নীতিনির্ধারকরা সমস্যাগুলো সমাধানের জন্য বিভিন্ন কর্মসূচি শুরু করেছেন।"
            },
            {
                "eng": "Only through combined efforts will we be able to secure a better future.",
                "bng": "কেবলমাত্র যৌথ প্রচেষ্টার মাধ্যমেই আমরা একটি উন্নত ভবিষ্যৎ নিশ্চিত করতে সক্ষম হব।"
            }
        ],
        "vocabulary": [
            {
                "word": "analyzed",
                "bangla": "বিশ্লেষণ করেছিল",
                "partOfSpeech": "verb"
            },
            {
                "word": "imperative",
                "bangla": "অত্যন্ত জরুরি / বাধ্যতামূলক",
                "partOfSpeech": "adjective"
            },
            {
                "word": "sustainable",
                "bangla": "টেকসই",
                "partOfSpeech": "adjective"
            },
            {
                "word": "consequently",
                "bangla": "ফলস্বরূপ",
                "partOfSpeech": "adverb"
            },
            {
                "word": "secure",
                "bangla": "নিরাপদ করা / নিশ্চিত করা",
                "partOfSpeech": "verb"
            }
        ],
        "questions": [
            {
                "q": "What would have happened if researchers had not analyzed the data?",
                "options": [
                    "They would not have understood it",
                    "They would fail",
                    "Nothing would change",
                    "They would lose money"
                ],
                "answer": "They would not have understood it"
            },
            {
                "q": "What is imperative according to the text?",
                "options": [
                    "To implement sustainable strategies",
                    "To wait for results",
                    "To ignore challenges",
                    "To stop research"
                ],
                "answer": "To implement sustainable strategies"
            },
            {
                "q": "How long have these complex challenges been ignored?",
                "options": [
                    "For a few days",
                    "For decades",
                    "For one year",
                    "Never ignored"
                ],
                "answer": "For decades"
            },
            {
                "q": "How can we secure a better future?",
                "options": [
                    "Through combined efforts",
                    "By doing nothing",
                    "Through individual work only",
                    "By ignoring policies"
                ],
                "answer": "Through combined efforts"
            }
        ],
        "summary": {
            "takeaways": [
                "উন্নত বাক্য বিন্যাসে থার্ড কন্ডিশনাল (would have + V3) এর নিখুঁত প্রয়োগ।",
                "একাডেমিক লিখনশৈলীতে জোর দেওয়ার জন্য inversion (only through... will we) এর ব্যবহার।"
            ],
            "realLifeUsage": [
                {
                    "context": "কোনো অবাস্তব অতীত অনুশোচনা বা যৌক্তিক ফলাফল প্রকাশ করতে:",
                    "example": "If we had acted earlier, we would have resolved the issues of loss of biodiversity."
                }
            ]
        }
    },
    {
        "id": "s85",
        "title": "Smart Urban Planning",
        "subtitle": "স্মার্ট নগর পরিকল্পনা",
        "level": "Advanced",
        "levelColor": "rose",
        "topic": "Society",
        "learningObjectives": [
            "Relative clauses with prepositions: in which",
            "Urban jargon"
        ],
        "grammarFocus": [
            "Relative Clauses",
            "Urban Vocab"
        ],
        "grammarTeach": {
            "structure": "Third Conditional & Complex Clauses",
            "formula": "If + Subject + had + V3, Subject + would have + V3",
            "explanation": "এই উন্নত গল্পটিতে জটিল থার্ড কন্ডিশনাল এবং সাবজাঙ্কটিভ মুড (subjunctive mood)-এর গঠন নিয়ে বিষদ আলোচনা করা হয়েছে যা একাডেমিক এবং আইইএলটিএস রাইটিং-এর জন্য অত্যন্ত গুরুত্বপূর্ণ।",
            "examples": [
                {
                    "eng": "If they had invested in technology, they would have succeeded.",
                    "bng": "তারা যদি প্রযুক্তিতে বিনিয়োগ করত, তবে তারা সফল হতো।"
                },
                {
                    "eng": "It is crucial that we protect these resources.",
                    "bng": "এটি অত্যন্ত গুরুত্বপূর্ণ যে আমরা এই সম্পদগুলো রক্ষা করি।"
                }
            ]
        },
        "sentences": [
            {
                "eng": "If the researchers had not analyzed the data, they would not have understood smart urban planning.",
                "bng": "গবেষকরা যদি ডাটা বিশ্লেষণ না করতেন, তবে তারা স্মার্ট নগর পরিকল্পনা বুঝতে পারতেন না।"
            },
            {
                "eng": "It is imperative that we implement sustainable strategies immediately.",
                "bng": "এটি অত্যন্ত জরুরি যে আমরা অবিলম্বে টেকসই কৌশলসমূহ বাস্তবায়ন করি।"
            },
            {
                "eng": "Such complex challenges, which have been ignored for decades, require deep thinking.",
                "bng": "এ ধরনের জটিল চ্যালেঞ্জগুলো, যা দশকের পর দশক ধরে উপেক্ষা করা হয়েছে, গভীর চিন্তাভাবনা দাবি করে।"
            },
            {
                "eng": "Consequently, policymakers have initiated various programs to address the issues.",
                "bng": "ফলস্বরূপ, নীতিনির্ধারকরা সমস্যাগুলো সমাধানের জন্য বিভিন্ন কর্মসূচি শুরু করেছেন।"
            },
            {
                "eng": "Only through combined efforts will we be able to secure a better future.",
                "bng": "কেবলমাত্র যৌথ প্রচেষ্টার মাধ্যমেই আমরা একটি উন্নত ভবিষ্যৎ নিশ্চিত করতে সক্ষম হব।"
            }
        ],
        "vocabulary": [
            {
                "word": "analyzed",
                "bangla": "বিশ্লেষণ করেছিল",
                "partOfSpeech": "verb"
            },
            {
                "word": "imperative",
                "bangla": "অত্যন্ত জরুরি / বাধ্যতামূলক",
                "partOfSpeech": "adjective"
            },
            {
                "word": "sustainable",
                "bangla": "টেকসই",
                "partOfSpeech": "adjective"
            },
            {
                "word": "consequently",
                "bangla": "ফলস্বরূপ",
                "partOfSpeech": "adverb"
            },
            {
                "word": "secure",
                "bangla": "নিরাপদ করা / নিশ্চিত করা",
                "partOfSpeech": "verb"
            }
        ],
        "questions": [
            {
                "q": "What would have happened if researchers had not analyzed the data?",
                "options": [
                    "They would not have understood it",
                    "They would fail",
                    "Nothing would change",
                    "They would lose money"
                ],
                "answer": "They would not have understood it"
            },
            {
                "q": "What is imperative according to the text?",
                "options": [
                    "To implement sustainable strategies",
                    "To wait for results",
                    "To ignore challenges",
                    "To stop research"
                ],
                "answer": "To implement sustainable strategies"
            },
            {
                "q": "How long have these complex challenges been ignored?",
                "options": [
                    "For a few days",
                    "For decades",
                    "For one year",
                    "Never ignored"
                ],
                "answer": "For decades"
            },
            {
                "q": "How can we secure a better future?",
                "options": [
                    "Through combined efforts",
                    "By doing nothing",
                    "Through individual work only",
                    "By ignoring policies"
                ],
                "answer": "Through combined efforts"
            }
        ],
        "summary": {
            "takeaways": [
                "উন্নত বাক্য বিন্যাসে থার্ড কন্ডিশনাল (would have + V3) এর নিখুঁত প্রয়োগ।",
                "একাডেমিক লিখনশৈলীতে জোর দেওয়ার জন্য inversion (only through... will we) এর ব্যবহার।"
            ],
            "realLifeUsage": [
                {
                    "context": "কোনো অবাস্তব অতীত অনুশোচনা বা যৌক্তিক ফলাফল প্রকাশ করতে:",
                    "example": "If we had acted earlier, we would have resolved the issues of smart urban planning."
                }
            ]
        }
    },
    {
        "id": "s86",
        "title": "Creative Writing Mastery",
        "subtitle": "সৃজনশীল লেখার দক্ষতা",
        "level": "Advanced",
        "levelColor": "rose",
        "topic": "Education",
        "learningObjectives": [
            "Tense shift for stylistic effect",
            "Literary vocabulary"
        ],
        "grammarFocus": [
            "Stylistic Shifts",
            "Literary Vocab"
        ],
        "grammarTeach": {
            "structure": "Third Conditional & Complex Clauses",
            "formula": "If + Subject + had + V3, Subject + would have + V3",
            "explanation": "এই উন্নত গল্পটিতে জটিল থার্ড কন্ডিশনাল এবং সাবজাঙ্কটিভ মুড (subjunctive mood)-এর গঠন নিয়ে বিষদ আলোচনা করা হয়েছে যা একাডেমিক এবং আইইএলটিএস রাইটিং-এর জন্য অত্যন্ত গুরুত্বপূর্ণ।",
            "examples": [
                {
                    "eng": "If they had invested in technology, they would have succeeded.",
                    "bng": "তারা যদি প্রযুক্তিতে বিনিয়োগ করত, তবে তারা সফল হতো।"
                },
                {
                    "eng": "It is crucial that we protect these resources.",
                    "bng": "এটি অত্যন্ত গুরুত্বপূর্ণ যে আমরা এই সম্পদগুলো রক্ষা করি।"
                }
            ]
        },
        "sentences": [
            {
                "eng": "If the researchers had not analyzed the data, they would not have understood creative writing mastery.",
                "bng": "গবেষকরা যদি ডাটা বিশ্লেষণ না করতেন, তবে তারা সৃজনশীল লেখার দক্ষতা বুঝতে পারতেন না।"
            },
            {
                "eng": "It is imperative that we implement sustainable strategies immediately.",
                "bng": "এটি অত্যন্ত জরুরি যে আমরা অবিলম্বে টেকসই কৌশলসমূহ বাস্তবায়ন করি।"
            },
            {
                "eng": "Such complex challenges, which have been ignored for decades, require deep thinking.",
                "bng": "এ ধরনের জটিল চ্যালেঞ্জগুলো, যা দশকের পর দশক ধরে উপেক্ষা করা হয়েছে, গভীর চিন্তাভাবনা দাবি করে।"
            },
            {
                "eng": "Consequently, policymakers have initiated various programs to address the issues.",
                "bng": "ফলস্বরূপ, নীতিনির্ধারকরা সমস্যাগুলো সমাধানের জন্য বিভিন্ন কর্মসূচি শুরু করেছেন।"
            },
            {
                "eng": "Only through combined efforts will we be able to secure a better future.",
                "bng": "কেবলমাত্র যৌথ প্রচেষ্টার মাধ্যমেই আমরা একটি উন্নত ভবিষ্যৎ নিশ্চিত করতে সক্ষম হব।"
            }
        ],
        "vocabulary": [
            {
                "word": "analyzed",
                "bangla": "বিশ্লেষণ করেছিল",
                "partOfSpeech": "verb"
            },
            {
                "word": "imperative",
                "bangla": "অত্যন্ত জরুরি / বাধ্যতামূলক",
                "partOfSpeech": "adjective"
            },
            {
                "word": "sustainable",
                "bangla": "টেকসই",
                "partOfSpeech": "adjective"
            },
            {
                "word": "consequently",
                "bangla": "ফলস্বরূপ",
                "partOfSpeech": "adverb"
            },
            {
                "word": "secure",
                "bangla": "নিরাপদ করা / নিশ্চিত করা",
                "partOfSpeech": "verb"
            }
        ],
        "questions": [
            {
                "q": "What would have happened if researchers had not analyzed the data?",
                "options": [
                    "They would not have understood it",
                    "They would fail",
                    "Nothing would change",
                    "They would lose money"
                ],
                "answer": "They would not have understood it"
            },
            {
                "q": "What is imperative according to the text?",
                "options": [
                    "To implement sustainable strategies",
                    "To wait for results",
                    "To ignore challenges",
                    "To stop research"
                ],
                "answer": "To implement sustainable strategies"
            },
            {
                "q": "How long have these complex challenges been ignored?",
                "options": [
                    "For a few days",
                    "For decades",
                    "For one year",
                    "Never ignored"
                ],
                "answer": "For decades"
            },
            {
                "q": "How can we secure a better future?",
                "options": [
                    "Through combined efforts",
                    "By doing nothing",
                    "Through individual work only",
                    "By ignoring policies"
                ],
                "answer": "Through combined efforts"
            }
        ],
        "summary": {
            "takeaways": [
                "উন্নত বাক্য বিন্যাসে থার্ড কন্ডিশনাল (would have + V3) এর নিখুঁত প্রয়োগ।",
                "একাডেমিক লিখনশৈলীতে জোর দেওয়ার জন্য inversion (only through... will we) এর ব্যবহার।"
            ],
            "realLifeUsage": [
                {
                    "context": "কোনো অবাস্তব অতীত অনুশোচনা বা যৌক্তিক ফলাফল প্রকাশ করতে:",
                    "example": "If we had acted earlier, we would have resolved the issues of creative writing mastery."
                }
            ]
        }
    },
    {
        "id": "s87",
        "title": "Emotional Intelligence Key",
        "subtitle": "আবেগীয় বুদ্ধিমত্তা",
        "level": "Advanced",
        "levelColor": "rose",
        "topic": "Psychology",
        "learningObjectives": [
            "Subjective structures",
            "Psychological vocabulary"
        ],
        "grammarFocus": [
            "Subjunctive Mood",
            "Psychological Vocab"
        ],
        "grammarTeach": {
            "structure": "Third Conditional & Complex Clauses",
            "formula": "If + Subject + had + V3, Subject + would have + V3",
            "explanation": "এই উন্নত গল্পটিতে জটিল থার্ড কন্ডিশনাল এবং সাবজাঙ্কটিভ মুড (subjunctive mood)-এর গঠন নিয়ে বিষদ আলোচনা করা হয়েছে যা একাডেমিক এবং আইইএলটিএস রাইটিং-এর জন্য অত্যন্ত গুরুত্বপূর্ণ।",
            "examples": [
                {
                    "eng": "If they had invested in technology, they would have succeeded.",
                    "bng": "তারা যদি প্রযুক্তিতে বিনিয়োগ করত, তবে তারা সফল হতো।"
                },
                {
                    "eng": "It is crucial that we protect these resources.",
                    "bng": "এটি অত্যন্ত গুরুত্বপূর্ণ যে আমরা এই সম্পদগুলো রক্ষা করি।"
                }
            ]
        },
        "sentences": [
            {
                "eng": "If the researchers had not analyzed the data, they would not have understood emotional intelligence key.",
                "bng": "গবেষকরা যদি ডাটা বিশ্লেষণ না করতেন, তবে তারা আবেগীয় বুদ্ধিমত্তা বুঝতে পারতেন না।"
            },
            {
                "eng": "It is imperative that we implement sustainable strategies immediately.",
                "bng": "এটি অত্যন্ত জরুরি যে আমরা অবিলম্বে টেকসই কৌশলসমূহ বাস্তবায়ন করি।"
            },
            {
                "eng": "Such complex challenges, which have been ignored for decades, require deep thinking.",
                "bng": "এ ধরনের জটিল চ্যালেঞ্জগুলো, যা দশকের পর দশক ধরে উপেক্ষা করা হয়েছে, গভীর চিন্তাভাবনা দাবি করে।"
            },
            {
                "eng": "Consequently, policymakers have initiated various programs to address the issues.",
                "bng": "ফলস্বরূপ, নীতিনির্ধারকরা সমস্যাগুলো সমাধানের জন্য বিভিন্ন কর্মসূচি শুরু করেছেন।"
            },
            {
                "eng": "Only through combined efforts will we be able to secure a better future.",
                "bng": "কেবলমাত্র যৌথ প্রচেষ্টার মাধ্যমেই আমরা একটি উন্নত ভবিষ্যৎ নিশ্চিত করতে সক্ষম হব।"
            }
        ],
        "vocabulary": [
            {
                "word": "analyzed",
                "bangla": "বিশ্লেষণ করেছিল",
                "partOfSpeech": "verb"
            },
            {
                "word": "imperative",
                "bangla": "অত্যন্ত জরুরি / বাধ্যতামূলক",
                "partOfSpeech": "adjective"
            },
            {
                "word": "sustainable",
                "bangla": "টেকসই",
                "partOfSpeech": "adjective"
            },
            {
                "word": "consequently",
                "bangla": "ফলস্বরূপ",
                "partOfSpeech": "adverb"
            },
            {
                "word": "secure",
                "bangla": "নিরাপদ করা / নিশ্চিত করা",
                "partOfSpeech": "verb"
            }
        ],
        "questions": [
            {
                "q": "What would have happened if researchers had not analyzed the data?",
                "options": [
                    "They would not have understood it",
                    "They would fail",
                    "Nothing would change",
                    "They would lose money"
                ],
                "answer": "They would not have understood it"
            },
            {
                "q": "What is imperative according to the text?",
                "options": [
                    "To implement sustainable strategies",
                    "To wait for results",
                    "To ignore challenges",
                    "To stop research"
                ],
                "answer": "To implement sustainable strategies"
            },
            {
                "q": "How long have these complex challenges been ignored?",
                "options": [
                    "For a few days",
                    "For decades",
                    "For one year",
                    "Never ignored"
                ],
                "answer": "For decades"
            },
            {
                "q": "How can we secure a better future?",
                "options": [
                    "Through combined efforts",
                    "By doing nothing",
                    "Through individual work only",
                    "By ignoring policies"
                ],
                "answer": "Through combined efforts"
            }
        ],
        "summary": {
            "takeaways": [
                "উন্নত বাক্য বিন্যাসে থার্ড কন্ডিশনাল (would have + V3) এর নিখুঁত প্রয়োগ।",
                "একাডেমিক লিখনশৈলীতে জোর দেওয়ার জন্য inversion (only through... will we) এর ব্যবহার।"
            ],
            "realLifeUsage": [
                {
                    "context": "কোনো অবাস্তব অতীত অনুশোচনা বা যৌক্তিক ফলাফল প্রকাশ করতে:",
                    "example": "If we had acted earlier, we would have resolved the issues of emotional intelligence key."
                }
            ]
        }
    },
    {
        "id": "s88",
        "title": "Cybersecurity Challenges",
        "subtitle": "সাইবার নিরাপত্তা চ্যালেঞ্জ",
        "level": "Advanced",
        "levelColor": "rose",
        "topic": "Technology",
        "learningObjectives": [
            "Conditionals for threat scenarios",
            "Security jargon"
        ],
        "grammarFocus": [
            "Conditionals",
            "Security Vocab"
        ],
        "grammarTeach": {
            "structure": "Third Conditional & Complex Clauses",
            "formula": "If + Subject + had + V3, Subject + would have + V3",
            "explanation": "এই উন্নত গল্পটিতে জটিল থার্ড কন্ডিশনাল এবং সাবজাঙ্কটিভ মুড (subjunctive mood)-এর গঠন নিয়ে বিষদ আলোচনা করা হয়েছে যা একাডেমিক এবং আইইএলটিএস রাইটিং-এর জন্য অত্যন্ত গুরুত্বপূর্ণ।",
            "examples": [
                {
                    "eng": "If they had invested in technology, they would have succeeded.",
                    "bng": "তারা যদি প্রযুক্তিতে বিনিয়োগ করত, তবে তারা সফল হতো।"
                },
                {
                    "eng": "It is crucial that we protect these resources.",
                    "bng": "এটি অত্যন্ত গুরুত্বপূর্ণ যে আমরা এই সম্পদগুলো রক্ষা করি।"
                }
            ]
        },
        "sentences": [
            {
                "eng": "If the researchers had not analyzed the data, they would not have understood cybersecurity challenges.",
                "bng": "গবেষকরা যদি ডাটা বিশ্লেষণ না করতেন, তবে তারা সাইবার নিরাপত্তা চ্যালেঞ্জ বুঝতে পারতেন না।"
            },
            {
                "eng": "It is imperative that we implement sustainable strategies immediately.",
                "bng": "এটি অত্যন্ত জরুরি যে আমরা অবিলম্বে টেকসই কৌশলসমূহ বাস্তবায়ন করি।"
            },
            {
                "eng": "Such complex challenges, which have been ignored for decades, require deep thinking.",
                "bng": "এ ধরনের জটিল চ্যালেঞ্জগুলো, যা দশকের পর দশক ধরে উপেক্ষা করা হয়েছে, গভীর চিন্তাভাবনা দাবি করে।"
            },
            {
                "eng": "Consequently, policymakers have initiated various programs to address the issues.",
                "bng": "ফলস্বরূপ, নীতিনির্ধারকরা সমস্যাগুলো সমাধানের জন্য বিভিন্ন কর্মসূচি শুরু করেছেন।"
            },
            {
                "eng": "Only through combined efforts will we be able to secure a better future.",
                "bng": "কেবলমাত্র যৌথ প্রচেষ্টার মাধ্যমেই আমরা একটি উন্নত ভবিষ্যৎ নিশ্চিত করতে সক্ষম হব।"
            }
        ],
        "vocabulary": [
            {
                "word": "analyzed",
                "bangla": "বিশ্লেষণ করেছিল",
                "partOfSpeech": "verb"
            },
            {
                "word": "imperative",
                "bangla": "অত্যন্ত জরুরি / বাধ্যতামূলক",
                "partOfSpeech": "adjective"
            },
            {
                "word": "sustainable",
                "bangla": "টেকসই",
                "partOfSpeech": "adjective"
            },
            {
                "word": "consequently",
                "bangla": "ফলস্বরূপ",
                "partOfSpeech": "adverb"
            },
            {
                "word": "secure",
                "bangla": "নিরাপদ করা / নিশ্চিত করা",
                "partOfSpeech": "verb"
            }
        ],
        "questions": [
            {
                "q": "What would have happened if researchers had not analyzed the data?",
                "options": [
                    "They would not have understood it",
                    "They would fail",
                    "Nothing would change",
                    "They would lose money"
                ],
                "answer": "They would not have understood it"
            },
            {
                "q": "What is imperative according to the text?",
                "options": [
                    "To implement sustainable strategies",
                    "To wait for results",
                    "To ignore challenges",
                    "To stop research"
                ],
                "answer": "To implement sustainable strategies"
            },
            {
                "q": "How long have these complex challenges been ignored?",
                "options": [
                    "For a few days",
                    "For decades",
                    "For one year",
                    "Never ignored"
                ],
                "answer": "For decades"
            },
            {
                "q": "How can we secure a better future?",
                "options": [
                    "Through combined efforts",
                    "By doing nothing",
                    "Through individual work only",
                    "By ignoring policies"
                ],
                "answer": "Through combined efforts"
            }
        ],
        "summary": {
            "takeaways": [
                "উন্নত বাক্য বিন্যাসে থার্ড কন্ডিশনাল (would have + V3) এর নিখুঁত প্রয়োগ।",
                "একাডেমিক লিখনশৈলীতে জোর দেওয়ার জন্য inversion (only through... will we) এর ব্যবহার।"
            ],
            "realLifeUsage": [
                {
                    "context": "কোনো অবাস্তব অতীত অনুশোচনা বা যৌক্তিক ফলাফল প্রকাশ করতে:",
                    "example": "If we had acted earlier, we would have resolved the issues of cybersecurity challenges."
                }
            ]
        }
    },
    {
        "id": "s89",
        "title": "Circular Economy Model",
        "subtitle": "সার্কুলার ইকোনমি",
        "level": "Advanced",
        "levelColor": "rose",
        "topic": "Economy",
        "learningObjectives": [
            "Passive voice with modal auxiliary",
            "Green economy words"
        ],
        "grammarFocus": [
            "Passive Voice",
            "Green Economy"
        ],
        "grammarTeach": {
            "structure": "Third Conditional & Complex Clauses",
            "formula": "If + Subject + had + V3, Subject + would have + V3",
            "explanation": "এই উন্নত গল্পটিতে জটিল থার্ড কন্ডিশনাল এবং সাবজাঙ্কটিভ মুড (subjunctive mood)-এর গঠন নিয়ে বিষদ আলোচনা করা হয়েছে যা একাডেমিক এবং আইইএলটিএস রাইটিং-এর জন্য অত্যন্ত গুরুত্বপূর্ণ।",
            "examples": [
                {
                    "eng": "If they had invested in technology, they would have succeeded.",
                    "bng": "তারা যদি প্রযুক্তিতে বিনিয়োগ করত, তবে তারা সফল হতো।"
                },
                {
                    "eng": "It is crucial that we protect these resources.",
                    "bng": "এটি অত্যন্ত গুরুত্বপূর্ণ যে আমরা এই সম্পদগুলো রক্ষা করি।"
                }
            ]
        },
        "sentences": [
            {
                "eng": "If the researchers had not analyzed the data, they would not have understood circular economy model.",
                "bng": "গবেষকরা যদি ডাটা বিশ্লেষণ না করতেন, তবে তারা সার্কুলার ইকোনমি বুঝতে পারতেন না।"
            },
            {
                "eng": "It is imperative that we implement sustainable strategies immediately.",
                "bng": "এটি অত্যন্ত জরুরি যে আমরা অবিলম্বে টেকসই কৌশলসমূহ বাস্তবায়ন করি।"
            },
            {
                "eng": "Such complex challenges, which have been ignored for decades, require deep thinking.",
                "bng": "এ ধরনের জটিল চ্যালেঞ্জগুলো, যা দশকের পর দশক ধরে উপেক্ষা করা হয়েছে, গভীর চিন্তাভাবনা দাবি করে।"
            },
            {
                "eng": "Consequently, policymakers have initiated various programs to address the issues.",
                "bng": "ফলস্বরূপ, নীতিনির্ধারকরা সমস্যাগুলো সমাধানের জন্য বিভিন্ন কর্মসূচি শুরু করেছেন।"
            },
            {
                "eng": "Only through combined efforts will we be able to secure a better future.",
                "bng": "কেবলমাত্র যৌথ প্রচেষ্টার মাধ্যমেই আমরা একটি উন্নত ভবিষ্যৎ নিশ্চিত করতে সক্ষম হব।"
            }
        ],
        "vocabulary": [
            {
                "word": "analyzed",
                "bangla": "বিশ্লেষণ করেছিল",
                "partOfSpeech": "verb"
            },
            {
                "word": "imperative",
                "bangla": "অত্যন্ত জরুরি / বাধ্যতামূলক",
                "partOfSpeech": "adjective"
            },
            {
                "word": "sustainable",
                "bangla": "টেকসই",
                "partOfSpeech": "adjective"
            },
            {
                "word": "consequently",
                "bangla": "ফলস্বরূপ",
                "partOfSpeech": "adverb"
            },
            {
                "word": "secure",
                "bangla": "নিরাপদ করা / নিশ্চিত করা",
                "partOfSpeech": "verb"
            }
        ],
        "questions": [
            {
                "q": "What would have happened if researchers had not analyzed the data?",
                "options": [
                    "They would not have understood it",
                    "They would fail",
                    "Nothing would change",
                    "They would lose money"
                ],
                "answer": "They would not have understood it"
            },
            {
                "q": "What is imperative according to the text?",
                "options": [
                    "To implement sustainable strategies",
                    "To wait for results",
                    "To ignore challenges",
                    "To stop research"
                ],
                "answer": "To implement sustainable strategies"
            },
            {
                "q": "How long have these complex challenges been ignored?",
                "options": [
                    "For a few days",
                    "For decades",
                    "For one year",
                    "Never ignored"
                ],
                "answer": "For decades"
            },
            {
                "q": "How can we secure a better future?",
                "options": [
                    "Through combined efforts",
                    "By doing nothing",
                    "Through individual work only",
                    "By ignoring policies"
                ],
                "answer": "Through combined efforts"
            }
        ],
        "summary": {
            "takeaways": [
                "উন্নত বাক্য বিন্যাসে থার্ড কন্ডিশনাল (would have + V3) এর নিখুঁত প্রয়োগ।",
                "একাডেমিক লিখনশৈলীতে জোর দেওয়ার জন্য inversion (only through... will we) এর ব্যবহার।"
            ],
            "realLifeUsage": [
                {
                    "context": "কোনো অবাস্তব অতীত অনুশোচনা বা যৌক্তিক ফলাফল প্রকাশ করতে:",
                    "example": "If we had acted earlier, we would have resolved the issues of circular economy model."
                }
            ]
        }
    },
    {
        "id": "s90",
        "title": "Critical Thinking Importance",
        "subtitle": "সমালোচনামূলক চিন্তার গুরুত্ব",
        "level": "Advanced",
        "levelColor": "rose",
        "topic": "Education",
        "learningObjectives": [
            "Gerund subjects and objects",
            "Cognitive vocabulary"
        ],
        "grammarFocus": [
            "Gerunds",
            "Cognitive Vocab"
        ],
        "grammarTeach": {
            "structure": "Third Conditional & Complex Clauses",
            "formula": "If + Subject + had + V3, Subject + would have + V3",
            "explanation": "এই উন্নত গল্পটিতে জটিল থার্ড কন্ডিশনাল এবং সাবজাঙ্কটিভ মুড (subjunctive mood)-এর গঠন নিয়ে বিষদ আলোচনা করা হয়েছে যা একাডেমিক এবং আইইএলটিএস রাইটিং-এর জন্য অত্যন্ত গুরুত্বপূর্ণ।",
            "examples": [
                {
                    "eng": "If they had invested in technology, they would have succeeded.",
                    "bng": "তারা যদি প্রযুক্তিতে বিনিয়োগ করত, তবে তারা সফল হতো।"
                },
                {
                    "eng": "It is crucial that we protect these resources.",
                    "bng": "এটি অত্যন্ত গুরুত্বপূর্ণ যে আমরা এই সম্পদগুলো রক্ষা করি।"
                }
            ]
        },
        "sentences": [
            {
                "eng": "If the researchers had not analyzed the data, they would not have understood critical thinking importance.",
                "bng": "গবেষকরা যদি ডাটা বিশ্লেষণ না করতেন, তবে তারা সমালোচনামূলক চিন্তার গুরুত্ব বুঝতে পারতেন না।"
            },
            {
                "eng": "It is imperative that we implement sustainable strategies immediately.",
                "bng": "এটি অত্যন্ত জরুরি যে আমরা অবিলম্বে টেকসই কৌশলসমূহ বাস্তবায়ন করি।"
            },
            {
                "eng": "Such complex challenges, which have been ignored for decades, require deep thinking.",
                "bng": "এ ধরনের জটিল চ্যালেঞ্জগুলো, যা দশকের পর দশক ধরে উপেক্ষা করা হয়েছে, গভীর চিন্তাভাবনা দাবি করে।"
            },
            {
                "eng": "Consequently, policymakers have initiated various programs to address the issues.",
                "bng": "ফলস্বরূপ, নীতিনির্ধারকরা সমস্যাগুলো সমাধানের জন্য বিভিন্ন কর্মসূচি শুরু করেছেন।"
            },
            {
                "eng": "Only through combined efforts will we be able to secure a better future.",
                "bng": "কেবলমাত্র যৌথ প্রচেষ্টার মাধ্যমেই আমরা একটি উন্নত ভবিষ্যৎ নিশ্চিত করতে সক্ষম হব।"
            }
        ],
        "vocabulary": [
            {
                "word": "analyzed",
                "bangla": "বিশ্লেষণ করেছিল",
                "partOfSpeech": "verb"
            },
            {
                "word": "imperative",
                "bangla": "অত্যন্ত জরুরি / বাধ্যতামূলক",
                "partOfSpeech": "adjective"
            },
            {
                "word": "sustainable",
                "bangla": "টেকসই",
                "partOfSpeech": "adjective"
            },
            {
                "word": "consequently",
                "bangla": "ফলস্বরূপ",
                "partOfSpeech": "adverb"
            },
            {
                "word": "secure",
                "bangla": "নিরাপদ করা / নিশ্চিত করা",
                "partOfSpeech": "verb"
            }
        ],
        "questions": [
            {
                "q": "What would have happened if researchers had not analyzed the data?",
                "options": [
                    "They would not have understood it",
                    "They would fail",
                    "Nothing would change",
                    "They would lose money"
                ],
                "answer": "They would not have understood it"
            },
            {
                "q": "What is imperative according to the text?",
                "options": [
                    "To implement sustainable strategies",
                    "To wait for results",
                    "To ignore challenges",
                    "To stop research"
                ],
                "answer": "To implement sustainable strategies"
            },
            {
                "q": "How long have these complex challenges been ignored?",
                "options": [
                    "For a few days",
                    "For decades",
                    "For one year",
                    "Never ignored"
                ],
                "answer": "For decades"
            },
            {
                "q": "How can we secure a better future?",
                "options": [
                    "Through combined efforts",
                    "By doing nothing",
                    "Through individual work only",
                    "By ignoring policies"
                ],
                "answer": "Through combined efforts"
            }
        ],
        "summary": {
            "takeaways": [
                "উন্নত বাক্য বিন্যাসে থার্ড কন্ডিশনাল (would have + V3) এর নিখুঁত প্রয়োগ।",
                "একাডেমিক লিখনশৈলীতে জোর দেওয়ার জন্য inversion (only through... will we) এর ব্যবহার।"
            ],
            "realLifeUsage": [
                {
                    "context": "কোনো অবাস্তব অতীত অনুশোচনা বা যৌক্তিক ফলাফল প্রকাশ করতে:",
                    "example": "If we had acted earlier, we would have resolved the issues of critical thinking importance."
                }
            ]
        }
    },
    {
        "id": "s91",
        "title": "Public Speaking Mastery",
        "subtitle": "বাগ্মিতা অর্জন",
        "level": "Advanced",
        "levelColor": "rose",
        "topic": "Communication",
        "learningObjectives": [
            "Emphasis structures: cleft sentences",
            "Speech vocabulary"
        ],
        "grammarFocus": [
            "Cleft Sentences",
            "Speech Vocab"
        ],
        "grammarTeach": {
            "structure": "Third Conditional & Complex Clauses",
            "formula": "If + Subject + had + V3, Subject + would have + V3",
            "explanation": "এই উন্নত গল্পটিতে জটিল থার্ড কন্ডিশনাল এবং সাবজাঙ্কটিভ মুড (subjunctive mood)-এর গঠন নিয়ে বিষদ আলোচনা করা হয়েছে যা একাডেমিক এবং আইইএলটিএস রাইটিং-এর জন্য অত্যন্ত গুরুত্বপূর্ণ।",
            "examples": [
                {
                    "eng": "If they had invested in technology, they would have succeeded.",
                    "bng": "তারা যদি প্রযুক্তিতে বিনিয়োগ করত, তবে তারা সফল হতো।"
                },
                {
                    "eng": "It is crucial that we protect these resources.",
                    "bng": "এটি অত্যন্ত গুরুত্বপূর্ণ যে আমরা এই সম্পদগুলো রক্ষা করি।"
                }
            ]
        },
        "sentences": [
            {
                "eng": "If the researchers had not analyzed the data, they would not have understood public speaking mastery.",
                "bng": "গবেষকরা যদি ডাটা বিশ্লেষণ না করতেন, তবে তারা বাগ্মিতা অর্জন বুঝতে পারতেন না।"
            },
            {
                "eng": "It is imperative that we implement sustainable strategies immediately.",
                "bng": "এটি অত্যন্ত জরুরি যে আমরা অবিলম্বে টেকসই কৌশলসমূহ বাস্তবায়ন করি।"
            },
            {
                "eng": "Such complex challenges, which have been ignored for decades, require deep thinking.",
                "bng": "এ ধরনের জটিল চ্যালেঞ্জগুলো, যা দশকের পর দশক ধরে উপেক্ষা করা হয়েছে, গভীর চিন্তাভাবনা দাবি করে।"
            },
            {
                "eng": "Consequently, policymakers have initiated various programs to address the issues.",
                "bng": "ফলস্বরূপ, নীতিনির্ধারকরা সমস্যাগুলো সমাধানের জন্য বিভিন্ন কর্মসূচি শুরু করেছেন।"
            },
            {
                "eng": "Only through combined efforts will we be able to secure a better future.",
                "bng": "কেবলমাত্র যৌথ প্রচেষ্টার মাধ্যমেই আমরা একটি উন্নত ভবিষ্যৎ নিশ্চিত করতে সক্ষম হব।"
            }
        ],
        "vocabulary": [
            {
                "word": "analyzed",
                "bangla": "বিশ্লেষণ করেছিল",
                "partOfSpeech": "verb"
            },
            {
                "word": "imperative",
                "bangla": "অত্যন্ত জরুরি / বাধ্যতামূলক",
                "partOfSpeech": "adjective"
            },
            {
                "word": "sustainable",
                "bangla": "টেকসই",
                "partOfSpeech": "adjective"
            },
            {
                "word": "consequently",
                "bangla": "ফলস্বরূপ",
                "partOfSpeech": "adverb"
            },
            {
                "word": "secure",
                "bangla": "নিরাপদ করা / নিশ্চিত করা",
                "partOfSpeech": "verb"
            }
        ],
        "questions": [
            {
                "q": "What would have happened if researchers had not analyzed the data?",
                "options": [
                    "They would not have understood it",
                    "They would fail",
                    "Nothing would change",
                    "They would lose money"
                ],
                "answer": "They would not have understood it"
            },
            {
                "q": "What is imperative according to the text?",
                "options": [
                    "To implement sustainable strategies",
                    "To wait for results",
                    "To ignore challenges",
                    "To stop research"
                ],
                "answer": "To implement sustainable strategies"
            },
            {
                "q": "How long have these complex challenges been ignored?",
                "options": [
                    "For a few days",
                    "For decades",
                    "For one year",
                    "Never ignored"
                ],
                "answer": "For decades"
            },
            {
                "q": "How can we secure a better future?",
                "options": [
                    "Through combined efforts",
                    "By doing nothing",
                    "Through individual work only",
                    "By ignoring policies"
                ],
                "answer": "Through combined efforts"
            }
        ],
        "summary": {
            "takeaways": [
                "উন্নত বাক্য বিন্যাসে থার্ড কন্ডিশনাল (would have + V3) এর নিখুঁত প্রয়োগ।",
                "একাডেমিক লিখনশৈলীতে জোর দেওয়ার জন্য inversion (only through... will we) এর ব্যবহার।"
            ],
            "realLifeUsage": [
                {
                    "context": "কোনো অবাস্তব অতীত অনুশোচনা বা যৌক্তিক ফলাফল প্রকাশ করতে:",
                    "example": "If we had acted earlier, we would have resolved the issues of public speaking mastery."
                }
            ]
        }
    },
    {
        "id": "s92",
        "title": "Remote Work Culture",
        "subtitle": "দূরবর্তী কাজের সংস্কৃতি",
        "level": "Advanced",
        "levelColor": "rose",
        "topic": "Society",
        "learningObjectives": [
            "Complex adverbial clauses",
            "Workplace vocabulary"
        ],
        "grammarFocus": [
            "Adverbial Clauses",
            "Workplace Vocab"
        ],
        "grammarTeach": {
            "structure": "Third Conditional & Complex Clauses",
            "formula": "If + Subject + had + V3, Subject + would have + V3",
            "explanation": "এই উন্নত গল্পটিতে জটিল থার্ড কন্ডিশনাল এবং সাবজাঙ্কটিভ মুড (subjunctive mood)-এর গঠন নিয়ে বিষদ আলোচনা করা হয়েছে যা একাডেমিক এবং আইইএলটিএস রাইটিং-এর জন্য অত্যন্ত গুরুত্বপূর্ণ।",
            "examples": [
                {
                    "eng": "If they had invested in technology, they would have succeeded.",
                    "bng": "তারা যদি প্রযুক্তিতে বিনিয়োগ করত, তবে তারা সফল হতো।"
                },
                {
                    "eng": "It is crucial that we protect these resources.",
                    "bng": "এটি অত্যন্ত গুরুত্বপূর্ণ যে আমরা এই সম্পদগুলো রক্ষা করি।"
                }
            ]
        },
        "sentences": [
            {
                "eng": "If the researchers had not analyzed the data, they would not have understood remote work culture.",
                "bng": "গবেষকরা যদি ডাটা বিশ্লেষণ না করতেন, তবে তারা দূরবর্তী কাজের সংস্কৃতি বুঝতে পারতেন না।"
            },
            {
                "eng": "It is imperative that we implement sustainable strategies immediately.",
                "bng": "এটি অত্যন্ত জরুরি যে আমরা অবিলম্বে টেকসই কৌশলসমূহ বাস্তবায়ন করি।"
            },
            {
                "eng": "Such complex challenges, which have been ignored for decades, require deep thinking.",
                "bng": "এ ধরনের জটিল চ্যালেঞ্জগুলো, যা দশকের পর দশক ধরে উপেক্ষা করা হয়েছে, গভীর চিন্তাভাবনা দাবি করে।"
            },
            {
                "eng": "Consequently, policymakers have initiated various programs to address the issues.",
                "bng": "ফলস্বরূপ, নীতিনির্ধারকরা সমস্যাগুলো সমাধানের জন্য বিভিন্ন কর্মসূচি শুরু করেছেন।"
            },
            {
                "eng": "Only through combined efforts will we be able to secure a better future.",
                "bng": "কেবলমাত্র যৌথ প্রচেষ্টার মাধ্যমেই আমরা একটি উন্নত ভবিষ্যৎ নিশ্চিত করতে সক্ষম হব।"
            }
        ],
        "vocabulary": [
            {
                "word": "analyzed",
                "bangla": "বিশ্লেষণ করেছিল",
                "partOfSpeech": "verb"
            },
            {
                "word": "imperative",
                "bangla": "অত্যন্ত জরুরি / বাধ্যতামূলক",
                "partOfSpeech": "adjective"
            },
            {
                "word": "sustainable",
                "bangla": "টেকসই",
                "partOfSpeech": "adjective"
            },
            {
                "word": "consequently",
                "bangla": "ফলস্বরূপ",
                "partOfSpeech": "adverb"
            },
            {
                "word": "secure",
                "bangla": "নিরাপদ করা / নিশ্চিত করা",
                "partOfSpeech": "verb"
            }
        ],
        "questions": [
            {
                "q": "What would have happened if researchers had not analyzed the data?",
                "options": [
                    "They would not have understood it",
                    "They would fail",
                    "Nothing would change",
                    "They would lose money"
                ],
                "answer": "They would not have understood it"
            },
            {
                "q": "What is imperative according to the text?",
                "options": [
                    "To implement sustainable strategies",
                    "To wait for results",
                    "To ignore challenges",
                    "To stop research"
                ],
                "answer": "To implement sustainable strategies"
            },
            {
                "q": "How long have these complex challenges been ignored?",
                "options": [
                    "For a few days",
                    "For decades",
                    "For one year",
                    "Never ignored"
                ],
                "answer": "For decades"
            },
            {
                "q": "How can we secure a better future?",
                "options": [
                    "Through combined efforts",
                    "By doing nothing",
                    "Through individual work only",
                    "By ignoring policies"
                ],
                "answer": "Through combined efforts"
            }
        ],
        "summary": {
            "takeaways": [
                "উন্নত বাক্য বিন্যাসে থার্ড কন্ডিশনাল (would have + V3) এর নিখুঁত প্রয়োগ।",
                "একাডেমিক লিখনশৈলীতে জোর দেওয়ার জন্য inversion (only through... will we) এর ব্যবহার।"
            ],
            "realLifeUsage": [
                {
                    "context": "কোনো অবাস্তব অতীত অনুশোচনা বা যৌক্তিক ফলাফল প্রকাশ করতে:",
                    "example": "If we had acted earlier, we would have resolved the issues of remote work culture."
                }
            ]
        }
    },
    {
        "id": "s93",
        "title": "Sustainable Fashion",
        "subtitle": "টেকসই ফ্যাশন",
        "level": "Advanced",
        "levelColor": "rose",
        "topic": "Environment",
        "learningObjectives": [
            "Subjunctive mood",
            "Green fashion words"
        ],
        "grammarFocus": [
            "Subjunctive Mood",
            "Green Fashion"
        ],
        "grammarTeach": {
            "structure": "Third Conditional & Complex Clauses",
            "formula": "If + Subject + had + V3, Subject + would have + V3",
            "explanation": "এই উন্নত গল্পটিতে জটিল থার্ড কন্ডিশনাল এবং সাবজাঙ্কটিভ মুড (subjunctive mood)-এর গঠন নিয়ে বিষদ আলোচনা করা হয়েছে যা একাডেমিক এবং আইইএলটিএস রাইটিং-এর জন্য অত্যন্ত গুরুত্বপূর্ণ।",
            "examples": [
                {
                    "eng": "If they had invested in technology, they would have succeeded.",
                    "bng": "তারা যদি প্রযুক্তিতে বিনিয়োগ করত, তবে তারা সফল হতো।"
                },
                {
                    "eng": "It is crucial that we protect these resources.",
                    "bng": "এটি অত্যন্ত গুরুত্বপূর্ণ যে আমরা এই সম্পদগুলো রক্ষা করি।"
                }
            ]
        },
        "sentences": [
            {
                "eng": "If the researchers had not analyzed the data, they would not have understood sustainable fashion.",
                "bng": "গবেষকরা যদি ডাটা বিশ্লেষণ না করতেন, তবে তারা টেকসই ফ্যাশন বুঝতে পারতেন না।"
            },
            {
                "eng": "It is imperative that we implement sustainable strategies immediately.",
                "bng": "এটি অত্যন্ত জরুরি যে আমরা অবিলম্বে টেকসই কৌশলসমূহ বাস্তবায়ন করি।"
            },
            {
                "eng": "Such complex challenges, which have been ignored for decades, require deep thinking.",
                "bng": "এ ধরনের জটিল চ্যালেঞ্জগুলো, যা দশকের পর দশক ধরে উপেক্ষা করা হয়েছে, গভীর চিন্তাভাবনা দাবি করে।"
            },
            {
                "eng": "Consequently, policymakers have initiated various programs to address the issues.",
                "bng": "ফলস্বরূপ, নীতিনির্ধারকরা সমস্যাগুলো সমাধানের জন্য বিভিন্ন কর্মসূচি শুরু করেছেন।"
            },
            {
                "eng": "Only through combined efforts will we be able to secure a better future.",
                "bng": "কেবলমাত্র যৌথ প্রচেষ্টার মাধ্যমেই আমরা একটি উন্নত ভবিষ্যৎ নিশ্চিত করতে সক্ষম হব।"
            }
        ],
        "vocabulary": [
            {
                "word": "analyzed",
                "bangla": "বিশ্লেষণ করেছিল",
                "partOfSpeech": "verb"
            },
            {
                "word": "imperative",
                "bangla": "অত্যন্ত জরুরি / বাধ্যতামূলক",
                "partOfSpeech": "adjective"
            },
            {
                "word": "sustainable",
                "bangla": "টেকসই",
                "partOfSpeech": "adjective"
            },
            {
                "word": "consequently",
                "bangla": "ফলস্বরূপ",
                "partOfSpeech": "adverb"
            },
            {
                "word": "secure",
                "bangla": "নিরাপদ করা / নিশ্চিত করা",
                "partOfSpeech": "verb"
            }
        ],
        "questions": [
            {
                "q": "What would have happened if researchers had not analyzed the data?",
                "options": [
                    "They would not have understood it",
                    "They would fail",
                    "Nothing would change",
                    "They would lose money"
                ],
                "answer": "They would not have understood it"
            },
            {
                "q": "What is imperative according to the text?",
                "options": [
                    "To implement sustainable strategies",
                    "To wait for results",
                    "To ignore challenges",
                    "To stop research"
                ],
                "answer": "To implement sustainable strategies"
            },
            {
                "q": "How long have these complex challenges been ignored?",
                "options": [
                    "For a few days",
                    "For decades",
                    "For one year",
                    "Never ignored"
                ],
                "answer": "For decades"
            },
            {
                "q": "How can we secure a better future?",
                "options": [
                    "Through combined efforts",
                    "By doing nothing",
                    "Through individual work only",
                    "By ignoring policies"
                ],
                "answer": "Through combined efforts"
            }
        ],
        "summary": {
            "takeaways": [
                "উন্নত বাক্য বিন্যাসে থার্ড কন্ডিশনাল (would have + V3) এর নিখুঁত প্রয়োগ।",
                "একাডেমিক লিখনশৈলীতে জোর দেওয়ার জন্য inversion (only through... will we) এর ব্যবহার।"
            ],
            "realLifeUsage": [
                {
                    "context": "কোনো অবাস্তব অতীত অনুশোচনা বা যৌক্তিক ফলাফল প্রকাশ করতে:",
                    "example": "If we had acted earlier, we would have resolved the issues of sustainable fashion."
                }
            ]
        }
    },
    {
        "id": "s94",
        "title": "Marine Life Preservation",
        "subtitle": "সামুদ্রিক জীবন সংরক্ষণ",
        "level": "Advanced",
        "levelColor": "rose",
        "topic": "Environment",
        "learningObjectives": [
            "Tense transitions for statistics",
            "Marine vocabulary"
        ],
        "grammarFocus": [
            "Tense Transition",
            "Marine Vocab"
        ],
        "grammarTeach": {
            "structure": "Third Conditional & Complex Clauses",
            "formula": "If + Subject + had + V3, Subject + would have + V3",
            "explanation": "এই উন্নত গল্পটিতে জটিল থার্ড কন্ডিশনাল এবং সাবজাঙ্কটিভ মুড (subjunctive mood)-এর গঠন নিয়ে বিষদ আলোচনা করা হয়েছে যা একাডেমিক এবং আইইএলটিএস রাইটিং-এর জন্য অত্যন্ত গুরুত্বপূর্ণ।",
            "examples": [
                {
                    "eng": "If they had invested in technology, they would have succeeded.",
                    "bng": "তারা যদি প্রযুক্তিতে বিনিয়োগ করত, তবে তারা সফল হতো।"
                },
                {
                    "eng": "It is crucial that we protect these resources.",
                    "bng": "এটি অত্যন্ত গুরুত্বপূর্ণ যে আমরা এই সম্পদগুলো রক্ষা করি।"
                }
            ]
        },
        "sentences": [
            {
                "eng": "If the researchers had not analyzed the data, they would not have understood marine life preservation.",
                "bng": "গবেষকরা যদি ডাটা বিশ্লেষণ না করতেন, তবে তারা সামুদ্রিক জীবন সংরক্ষণ বুঝতে পারতেন না।"
            },
            {
                "eng": "It is imperative that we implement sustainable strategies immediately.",
                "bng": "এটি অত্যন্ত জরুরি যে আমরা অবিলম্বে টেকসই কৌশলসমূহ বাস্তবায়ন করি।"
            },
            {
                "eng": "Such complex challenges, which have been ignored for decades, require deep thinking.",
                "bng": "এ ধরনের জটিল চ্যালেঞ্জগুলো, যা দশকের পর দশক ধরে উপেক্ষা করা হয়েছে, গভীর চিন্তাভাবনা দাবি করে।"
            },
            {
                "eng": "Consequently, policymakers have initiated various programs to address the issues.",
                "bng": "ফলস্বরূপ, নীতিনির্ধারকরা সমস্যাগুলো সমাধানের জন্য বিভিন্ন কর্মসূচি শুরু করেছেন।"
            },
            {
                "eng": "Only through combined efforts will we be able to secure a better future.",
                "bng": "কেবলমাত্র যৌথ প্রচেষ্টার মাধ্যমেই আমরা একটি উন্নত ভবিষ্যৎ নিশ্চিত করতে সক্ষম হব।"
            }
        ],
        "vocabulary": [
            {
                "word": "analyzed",
                "bangla": "বিশ্লেষণ করেছিল",
                "partOfSpeech": "verb"
            },
            {
                "word": "imperative",
                "bangla": "অত্যন্ত জরুরি / বাধ্যতামূলক",
                "partOfSpeech": "adjective"
            },
            {
                "word": "sustainable",
                "bangla": "টেকসই",
                "partOfSpeech": "adjective"
            },
            {
                "word": "consequently",
                "bangla": "ফলস্বরূপ",
                "partOfSpeech": "adverb"
            },
            {
                "word": "secure",
                "bangla": "নিরাপদ করা / নিশ্চিত করা",
                "partOfSpeech": "verb"
            }
        ],
        "questions": [
            {
                "q": "What would have happened if researchers had not analyzed the data?",
                "options": [
                    "They would not have understood it",
                    "They would fail",
                    "Nothing would change",
                    "They would lose money"
                ],
                "answer": "They would not have understood it"
            },
            {
                "q": "What is imperative according to the text?",
                "options": [
                    "To implement sustainable strategies",
                    "To wait for results",
                    "To ignore challenges",
                    "To stop research"
                ],
                "answer": "To implement sustainable strategies"
            },
            {
                "q": "How long have these complex challenges been ignored?",
                "options": [
                    "For a few days",
                    "For decades",
                    "For one year",
                    "Never ignored"
                ],
                "answer": "For decades"
            },
            {
                "q": "How can we secure a better future?",
                "options": [
                    "Through combined efforts",
                    "By doing nothing",
                    "Through individual work only",
                    "By ignoring policies"
                ],
                "answer": "Through combined efforts"
            }
        ],
        "summary": {
            "takeaways": [
                "উন্নত বাক্য বিন্যাসে থার্ড কন্ডিশনাল (would have + V3) এর নিখুঁত প্রয়োগ।",
                "একাডেমিক লিখনশৈলীতে জোর দেওয়ার জন্য inversion (only through... will we) এর ব্যবহার।"
            ],
            "realLifeUsage": [
                {
                    "context": "কোনো অবাস্তব অতীত অনুশোচনা বা যৌক্তিক ফলাফল প্রকাশ করতে:",
                    "example": "If we had acted earlier, we would have resolved the issues of marine life preservation."
                }
            ]
        }
    },
    {
        "id": "s95",
        "title": "Renewable Resources Plan",
        "subtitle": "নবায়নযোগ্য সম্পদ পরিকল্পনা",
        "level": "Advanced",
        "levelColor": "rose",
        "topic": "Economy",
        "learningObjectives": [
            "Future perfect structures",
            "Resource words"
        ],
        "grammarFocus": [
            "Future Perfect",
            "Resource Vocab"
        ],
        "grammarTeach": {
            "structure": "Third Conditional & Complex Clauses",
            "formula": "If + Subject + had + V3, Subject + would have + V3",
            "explanation": "এই উন্নত গল্পটিতে জটিল থার্ড কন্ডিশনাল এবং সাবজাঙ্কটিভ মুড (subjunctive mood)-এর গঠন নিয়ে বিষদ আলোচনা করা হয়েছে যা একাডেমিক এবং আইইএলটিএস রাইটিং-এর জন্য অত্যন্ত গুরুত্বপূর্ণ।",
            "examples": [
                {
                    "eng": "If they had invested in technology, they would have succeeded.",
                    "bng": "তারা যদি প্রযুক্তিতে বিনিয়োগ করত, তবে তারা সফল হতো।"
                },
                {
                    "eng": "It is crucial that we protect these resources.",
                    "bng": "এটি অত্যন্ত গুরুত্বপূর্ণ যে আমরা এই সম্পদগুলো রক্ষা করি।"
                }
            ]
        },
        "sentences": [
            {
                "eng": "If the researchers had not analyzed the data, they would not have understood renewable resources plan.",
                "bng": "গবেষকরা যদি ডাটা বিশ্লেষণ না করতেন, তবে তারা নবায়নযোগ্য সম্পদ পরিকল্পনা বুঝতে পারতেন না।"
            },
            {
                "eng": "It is imperative that we implement sustainable strategies immediately.",
                "bng": "এটি অত্যন্ত জরুরি যে আমরা অবিলম্বে টেকসই কৌশলসমূহ বাস্তবায়ন করি।"
            },
            {
                "eng": "Such complex challenges, which have been ignored for decades, require deep thinking.",
                "bng": "এ ধরনের জটিল চ্যালেঞ্জগুলো, যা দশকের পর দশক ধরে উপেক্ষা করা হয়েছে, গভীর চিন্তাভাবনা দাবি করে।"
            },
            {
                "eng": "Consequently, policymakers have initiated various programs to address the issues.",
                "bng": "ফলস্বরূপ, নীতিনির্ধারকরা সমস্যাগুলো সমাধানের জন্য বিভিন্ন কর্মসূচি শুরু করেছেন।"
            },
            {
                "eng": "Only through combined efforts will we be able to secure a better future.",
                "bng": "কেবলমাত্র যৌথ প্রচেষ্টার মাধ্যমেই আমরা একটি উন্নত ভবিষ্যৎ নিশ্চিত করতে সক্ষম হব।"
            }
        ],
        "vocabulary": [
            {
                "word": "analyzed",
                "bangla": "বিশ্লেষণ করেছিল",
                "partOfSpeech": "verb"
            },
            {
                "word": "imperative",
                "bangla": "অত্যন্ত জরুরি / বাধ্যতামূলক",
                "partOfSpeech": "adjective"
            },
            {
                "word": "sustainable",
                "bangla": "টেকসই",
                "partOfSpeech": "adjective"
            },
            {
                "word": "consequently",
                "bangla": "ফলস্বরূপ",
                "partOfSpeech": "adverb"
            },
            {
                "word": "secure",
                "bangla": "নিরাপদ করা / নিশ্চিত করা",
                "partOfSpeech": "verb"
            }
        ],
        "questions": [
            {
                "q": "What would have happened if researchers had not analyzed the data?",
                "options": [
                    "They would not have understood it",
                    "They would fail",
                    "Nothing would change",
                    "They would lose money"
                ],
                "answer": "They would not have understood it"
            },
            {
                "q": "What is imperative according to the text?",
                "options": [
                    "To implement sustainable strategies",
                    "To wait for results",
                    "To ignore challenges",
                    "To stop research"
                ],
                "answer": "To implement sustainable strategies"
            },
            {
                "q": "How long have these complex challenges been ignored?",
                "options": [
                    "For a few days",
                    "For decades",
                    "For one year",
                    "Never ignored"
                ],
                "answer": "For decades"
            },
            {
                "q": "How can we secure a better future?",
                "options": [
                    "Through combined efforts",
                    "By doing nothing",
                    "Through individual work only",
                    "By ignoring policies"
                ],
                "answer": "Through combined efforts"
            }
        ],
        "summary": {
            "takeaways": [
                "উন্নত বাক্য বিন্যাসে থার্ড কন্ডিশনাল (would have + V3) এর নিখুঁত প্রয়োগ।",
                "একাডেমিক লিখনশৈলীতে জোর দেওয়ার জন্য inversion (only through... will we) এর ব্যবহার।"
            ],
            "realLifeUsage": [
                {
                    "context": "কোনো অবাস্তব অতীত অনুশোচনা বা যৌক্তিক ফলাফল প্রকাশ করতে:",
                    "example": "If we had acted earlier, we would have resolved the issues of renewable resources plan."
                }
            ]
        }
    },
    {
        "id": "s96",
        "title": "The History of Writing",
        "subtitle": "লিখনের ইতিহাস",
        "level": "Advanced",
        "levelColor": "rose",
        "topic": "History",
        "learningObjectives": [
            "Past perfect continuous",
            "Historical vocabulary"
        ],
        "grammarFocus": [
            "Past Perfect Continuous",
            "Historical Vocab"
        ],
        "grammarTeach": {
            "structure": "Third Conditional & Complex Clauses",
            "formula": "If + Subject + had + V3, Subject + would have + V3",
            "explanation": "এই উন্নত গল্পটিতে জটিল থার্ড কন্ডিশনাল এবং সাবজাঙ্কটিভ মুড (subjunctive mood)-এর গঠন নিয়ে বিষদ আলোচনা করা হয়েছে যা একাডেমিক এবং আইইএলটিএস রাইটিং-এর জন্য অত্যন্ত গুরুত্বপূর্ণ।",
            "examples": [
                {
                    "eng": "If they had invested in technology, they would have succeeded.",
                    "bng": "তারা যদি প্রযুক্তিতে বিনিয়োগ করত, তবে তারা সফল হতো।"
                },
                {
                    "eng": "It is crucial that we protect these resources.",
                    "bng": "এটি অত্যন্ত গুরুত্বপূর্ণ যে আমরা এই সম্পদগুলো রক্ষা করি।"
                }
            ]
        },
        "sentences": [
            {
                "eng": "If the researchers had not analyzed the data, they would not have understood the history of writing.",
                "bng": "গবেষকরা যদি ডাটা বিশ্লেষণ না করতেন, তবে তারা লিখনের ইতিহাস বুঝতে পারতেন না।"
            },
            {
                "eng": "It is imperative that we implement sustainable strategies immediately.",
                "bng": "এটি অত্যন্ত জরুরি যে আমরা অবিলম্বে টেকসই কৌশলসমূহ বাস্তবায়ন করি।"
            },
            {
                "eng": "Such complex challenges, which have been ignored for decades, require deep thinking.",
                "bng": "এ ধরনের জটিল চ্যালেঞ্জগুলো, যা দশকের পর দশক ধরে উপেক্ষা করা হয়েছে, গভীর চিন্তাভাবনা দাবি করে।"
            },
            {
                "eng": "Consequently, policymakers have initiated various programs to address the issues.",
                "bng": "ফলস্বরূপ, নীতিনির্ধারকরা সমস্যাগুলো সমাধানের জন্য বিভিন্ন কর্মসূচি শুরু করেছেন।"
            },
            {
                "eng": "Only through combined efforts will we be able to secure a better future.",
                "bng": "কেবলমাত্র যৌথ প্রচেষ্টার মাধ্যমেই আমরা একটি উন্নত ভবিষ্যৎ নিশ্চিত করতে সক্ষম হব।"
            }
        ],
        "vocabulary": [
            {
                "word": "analyzed",
                "bangla": "বিশ্লেষণ করেছিল",
                "partOfSpeech": "verb"
            },
            {
                "word": "imperative",
                "bangla": "অত্যন্ত জরুরি / বাধ্যতামূলক",
                "partOfSpeech": "adjective"
            },
            {
                "word": "sustainable",
                "bangla": "টেকসই",
                "partOfSpeech": "adjective"
            },
            {
                "word": "consequently",
                "bangla": "ফলস্বরূপ",
                "partOfSpeech": "adverb"
            },
            {
                "word": "secure",
                "bangla": "নিরাপদ করা / নিশ্চিত করা",
                "partOfSpeech": "verb"
            }
        ],
        "questions": [
            {
                "q": "What would have happened if researchers had not analyzed the data?",
                "options": [
                    "They would not have understood it",
                    "They would fail",
                    "Nothing would change",
                    "They would lose money"
                ],
                "answer": "They would not have understood it"
            },
            {
                "q": "What is imperative according to the text?",
                "options": [
                    "To implement sustainable strategies",
                    "To wait for results",
                    "To ignore challenges",
                    "To stop research"
                ],
                "answer": "To implement sustainable strategies"
            },
            {
                "q": "How long have these complex challenges been ignored?",
                "options": [
                    "For a few days",
                    "For decades",
                    "For one year",
                    "Never ignored"
                ],
                "answer": "For decades"
            },
            {
                "q": "How can we secure a better future?",
                "options": [
                    "Through combined efforts",
                    "By doing nothing",
                    "Through individual work only",
                    "By ignoring policies"
                ],
                "answer": "Through combined efforts"
            }
        ],
        "summary": {
            "takeaways": [
                "উন্নত বাক্য বিন্যাসে থার্ড কন্ডিশনাল (would have + V3) এর নিখুঁত প্রয়োগ।",
                "একাডেমিক লিখনশৈলীতে জোর দেওয়ার জন্য inversion (only through... will we) এর ব্যবহার।"
            ],
            "realLifeUsage": [
                {
                    "context": "কোনো অবাস্তব অতীত অনুশোচনা বা যৌক্তিক ফলাফল প্রকাশ করতে:",
                    "example": "If we had acted earlier, we would have resolved the issues of the history of writing."
                }
            ]
        }
    },
    {
        "id": "s97",
        "title": "Microplastics Threat",
        "subtitle": "মাইক্রোপ্লাস্টিকের হুমকি",
        "level": "Advanced",
        "levelColor": "rose",
        "topic": "Environment",
        "learningObjectives": [
            "Complex passive structures",
            "Environmental science vocabulary"
        ],
        "grammarFocus": [
            "Passive Voice",
            "Eco-Science Vocab"
        ],
        "grammarTeach": {
            "structure": "Third Conditional & Complex Clauses",
            "formula": "If + Subject + had + V3, Subject + would have + V3",
            "explanation": "এই উন্নত গল্পটিতে জটিল থার্ড কন্ডিশনাল এবং সাবজাঙ্কটিভ মুড (subjunctive mood)-এর গঠন নিয়ে বিষদ আলোচনা করা হয়েছে যা একাডেমিক এবং আইইএলটিএস রাইটিং-এর জন্য অত্যন্ত গুরুত্বপূর্ণ।",
            "examples": [
                {
                    "eng": "If they had invested in technology, they would have succeeded.",
                    "bng": "তারা যদি প্রযুক্তিতে বিনিয়োগ করত, তবে তারা সফল হতো।"
                },
                {
                    "eng": "It is crucial that we protect these resources.",
                    "bng": "এটি অত্যন্ত গুরুত্বপূর্ণ যে আমরা এই সম্পদগুলো রক্ষা করি।"
                }
            ]
        },
        "sentences": [
            {
                "eng": "If the researchers had not analyzed the data, they would not have understood microplastics threat.",
                "bng": "গবেষকরা যদি ডাটা বিশ্লেষণ না করতেন, তবে তারা মাইক্রোপ্লাস্টিকের হুমকি বুঝতে পারতেন না।"
            },
            {
                "eng": "It is imperative that we implement sustainable strategies immediately.",
                "bng": "এটি অত্যন্ত জরুরি যে আমরা অবিলম্বে টেকসই কৌশলসমূহ বাস্তবায়ন করি।"
            },
            {
                "eng": "Such complex challenges, which have been ignored for decades, require deep thinking.",
                "bng": "এ ধরনের জটিল চ্যালেঞ্জগুলো, যা দশকের পর দশক ধরে উপেক্ষা করা হয়েছে, গভীর চিন্তাভাবনা দাবি করে।"
            },
            {
                "eng": "Consequently, policymakers have initiated various programs to address the issues.",
                "bng": "ফলস্বরূপ, নীতিনির্ধারকরা সমস্যাগুলো সমাধানের জন্য বিভিন্ন কর্মসূচি শুরু করেছেন।"
            },
            {
                "eng": "Only through combined efforts will we be able to secure a better future.",
                "bng": "কেবলমাত্র যৌথ প্রচেষ্টার মাধ্যমেই আমরা একটি উন্নত ভবিষ্যৎ নিশ্চিত করতে সক্ষম হব।"
            }
        ],
        "vocabulary": [
            {
                "word": "analyzed",
                "bangla": "বিশ্লেষণ করেছিল",
                "partOfSpeech": "verb"
            },
            {
                "word": "imperative",
                "bangla": "অত্যন্ত জরুরি / বাধ্যতামূলক",
                "partOfSpeech": "adjective"
            },
            {
                "word": "sustainable",
                "bangla": "টেকসই",
                "partOfSpeech": "adjective"
            },
            {
                "word": "consequently",
                "bangla": "ফলস্বরূপ",
                "partOfSpeech": "adverb"
            },
            {
                "word": "secure",
                "bangla": "নিরাপদ করা / নিশ্চিত করা",
                "partOfSpeech": "verb"
            }
        ],
        "questions": [
            {
                "q": "What would have happened if researchers had not analyzed the data?",
                "options": [
                    "They would not have understood it",
                    "They would fail",
                    "Nothing would change",
                    "They would lose money"
                ],
                "answer": "They would not have understood it"
            },
            {
                "q": "What is imperative according to the text?",
                "options": [
                    "To implement sustainable strategies",
                    "To wait for results",
                    "To ignore challenges",
                    "To stop research"
                ],
                "answer": "To implement sustainable strategies"
            },
            {
                "q": "How long have these complex challenges been ignored?",
                "options": [
                    "For a few days",
                    "For decades",
                    "For one year",
                    "Never ignored"
                ],
                "answer": "For decades"
            },
            {
                "q": "How can we secure a better future?",
                "options": [
                    "Through combined efforts",
                    "By doing nothing",
                    "Through individual work only",
                    "By ignoring policies"
                ],
                "answer": "Through combined efforts"
            }
        ],
        "summary": {
            "takeaways": [
                "উন্নত বাক্য বিন্যাসে থার্ড কন্ডিশনাল (would have + V3) এর নিখুঁত প্রয়োগ।",
                "একাডেমিক লিখনশৈলীতে জোর দেওয়ার জন্য inversion (only through... will we) এর ব্যবহার।"
            ],
            "realLifeUsage": [
                {
                    "context": "কোনো অবাস্তব অতীত অনুশোচনা বা যৌক্তিক ফলাফল প্রকাশ করতে:",
                    "example": "If we had acted earlier, we would have resolved the issues of microplastics threat."
                }
            ]
        }
    },
    {
        "id": "s98",
        "title": "Cultural Heritage Protection",
        "subtitle": "সাংস্কৃতিক ঐতিহ্য রক্ষা",
        "level": "Advanced",
        "levelColor": "rose",
        "topic": "Society",
        "learningObjectives": [
            "Subjunctive expressions",
            "Heritage vocabulary"
        ],
        "grammarFocus": [
            "Subjunctive Mood",
            "Heritage Vocab"
        ],
        "grammarTeach": {
            "structure": "Third Conditional & Complex Clauses",
            "formula": "If + Subject + had + V3, Subject + would have + V3",
            "explanation": "এই উন্নত গল্পটিতে জটিল থার্ড কন্ডিশনাল এবং সাবজাঙ্কটিভ মুড (subjunctive mood)-এর গঠন নিয়ে বিষদ আলোচনা করা হয়েছে যা একাডেমিক এবং আইইএলটিএস রাইটিং-এর জন্য অত্যন্ত গুরুত্বপূর্ণ।",
            "examples": [
                {
                    "eng": "If they had invested in technology, they would have succeeded.",
                    "bng": "তারা যদি প্রযুক্তিতে বিনিয়োগ করত, তবে তারা সফল হতো।"
                },
                {
                    "eng": "It is crucial that we protect these resources.",
                    "bng": "এটি অত্যন্ত গুরুত্বপূর্ণ যে আমরা এই সম্পদগুলো রক্ষা করি।"
                }
            ]
        },
        "sentences": [
            {
                "eng": "If the researchers had not analyzed the data, they would not have understood cultural heritage protection.",
                "bng": "গবেষকরা যদি ডাটা বিশ্লেষণ না করতেন, তবে তারা সাংস্কৃতিক ঐতিহ্য রক্ষা বুঝতে পারতেন না।"
            },
            {
                "eng": "It is imperative that we implement sustainable strategies immediately.",
                "bng": "এটি অত্যন্ত জরুরি যে আমরা অবিলম্বে টেকসই কৌশলসমূহ বাস্তবায়ন করি।"
            },
            {
                "eng": "Such complex challenges, which have been ignored for decades, require deep thinking.",
                "bng": "এ ধরনের জটিল চ্যালেঞ্জগুলো, যা দশকের পর দশক ধরে উপেক্ষা করা হয়েছে, গভীর চিন্তাভাবনা দাবি করে।"
            },
            {
                "eng": "Consequently, policymakers have initiated various programs to address the issues.",
                "bng": "ফলস্বরূপ, নীতিনির্ধারকরা সমস্যাগুলো সমাধানের জন্য বিভিন্ন কর্মসূচি শুরু করেছেন।"
            },
            {
                "eng": "Only through combined efforts will we be able to secure a better future.",
                "bng": "কেবলমাত্র যৌথ প্রচেষ্টার মাধ্যমেই আমরা একটি উন্নত ভবিষ্যৎ নিশ্চিত করতে সক্ষম হব।"
            }
        ],
        "vocabulary": [
            {
                "word": "analyzed",
                "bangla": "বিশ্লেষণ করেছিল",
                "partOfSpeech": "verb"
            },
            {
                "word": "imperative",
                "bangla": "অত্যন্ত জরুরি / বাধ্যতামূলক",
                "partOfSpeech": "adjective"
            },
            {
                "word": "sustainable",
                "bangla": "টেকসই",
                "partOfSpeech": "adjective"
            },
            {
                "word": "consequently",
                "bangla": "ফলস্বরূপ",
                "partOfSpeech": "adverb"
            },
            {
                "word": "secure",
                "bangla": "নিরাপদ করা / নিশ্চিত করা",
                "partOfSpeech": "verb"
            }
        ],
        "questions": [
            {
                "q": "What would have happened if researchers had not analyzed the data?",
                "options": [
                    "They would not have understood it",
                    "They would fail",
                    "Nothing would change",
                    "They would lose money"
                ],
                "answer": "They would not have understood it"
            },
            {
                "q": "What is imperative according to the text?",
                "options": [
                    "To implement sustainable strategies",
                    "To wait for results",
                    "To ignore challenges",
                    "To stop research"
                ],
                "answer": "To implement sustainable strategies"
            },
            {
                "q": "How long have these complex challenges been ignored?",
                "options": [
                    "For a few days",
                    "For decades",
                    "For one year",
                    "Never ignored"
                ],
                "answer": "For decades"
            },
            {
                "q": "How can we secure a better future?",
                "options": [
                    "Through combined efforts",
                    "By doing nothing",
                    "Through individual work only",
                    "By ignoring policies"
                ],
                "answer": "Through combined efforts"
            }
        ],
        "summary": {
            "takeaways": [
                "উন্নত বাক্য বিন্যাসে থার্ড কন্ডিশনাল (would have + V3) এর নিখুঁত প্রয়োগ।",
                "একাডেমিক লিখনশৈলীতে জোর দেওয়ার জন্য inversion (only through... will we) এর ব্যবহার।"
            ],
            "realLifeUsage": [
                {
                    "context": "কোনো অবাস্তব অতীত অনুশোচনা বা যৌক্তিক ফলাফল প্রকাশ করতে:",
                    "example": "If we had acted earlier, we would have resolved the issues of cultural heritage protection."
                }
            ]
        }
    },
    {
        "id": "s99",
        "title": "Deep Sea Mysteries",
        "subtitle": "গভীর সমুদ্রের রহস্য",
        "level": "Advanced",
        "levelColor": "rose",
        "topic": "Science",
        "learningObjectives": [
            "Speculative modals: might have been",
            "Oceanography vocabulary"
        ],
        "grammarFocus": [
            "Speculative Modals",
            "Oceanography Vocab"
        ],
        "grammarTeach": {
            "structure": "Third Conditional & Complex Clauses",
            "formula": "If + Subject + had + V3, Subject + would have + V3",
            "explanation": "এই উন্নত গল্পটিতে জটিল থার্ড কন্ডিশনাল এবং সাবজাঙ্কটিভ মুড (subjunctive mood)-এর গঠন নিয়ে বিষদ আলোচনা করা হয়েছে যা একাডেমিক এবং আইইএলটিএস রাইটিং-এর জন্য অত্যন্ত গুরুত্বপূর্ণ।",
            "examples": [
                {
                    "eng": "If they had invested in technology, they would have succeeded.",
                    "bng": "তারা যদি প্রযুক্তিতে বিনিয়োগ করত, তবে তারা সফল হতো।"
                },
                {
                    "eng": "It is crucial that we protect these resources.",
                    "bng": "এটি অত্যন্ত গুরুত্বপূর্ণ যে আমরা এই সম্পদগুলো রক্ষা করি।"
                }
            ]
        },
        "sentences": [
            {
                "eng": "If the researchers had not analyzed the data, they would not have understood deep sea mysteries.",
                "bng": "গবেষকরা যদি ডাটা বিশ্লেষণ না করতেন, তবে তারা গভীর সমুদ্রের রহস্য বুঝতে পারতেন না।"
            },
            {
                "eng": "It is imperative that we implement sustainable strategies immediately.",
                "bng": "এটি অত্যন্ত জরুরি যে আমরা অবিলম্বে টেকসই কৌশলসমূহ বাস্তবায়ন করি।"
            },
            {
                "eng": "Such complex challenges, which have been ignored for decades, require deep thinking.",
                "bng": "এ ধরনের জটিল চ্যালেঞ্জগুলো, যা দশকের পর দশক ধরে উপেক্ষা করা হয়েছে, গভীর চিন্তাভাবনা দাবি করে।"
            },
            {
                "eng": "Consequently, policymakers have initiated various programs to address the issues.",
                "bng": "ফলস্বরূপ, নীতিনির্ধারকরা সমস্যাগুলো সমাধানের জন্য বিভিন্ন কর্মসূচি শুরু করেছেন।"
            },
            {
                "eng": "Only through combined efforts will we be able to secure a better future.",
                "bng": "কেবলমাত্র যৌথ প্রচেষ্টার মাধ্যমেই আমরা একটি উন্নত ভবিষ্যৎ নিশ্চিত করতে সক্ষম হব।"
            }
        ],
        "vocabulary": [
            {
                "word": "analyzed",
                "bangla": "বিশ্লেষণ করেছিল",
                "partOfSpeech": "verb"
            },
            {
                "word": "imperative",
                "bangla": "অত্যন্ত জরুরি / বাধ্যতামূলক",
                "partOfSpeech": "adjective"
            },
            {
                "word": "sustainable",
                "bangla": "টেকসই",
                "partOfSpeech": "adjective"
            },
            {
                "word": "consequently",
                "bangla": "ফলস্বরূপ",
                "partOfSpeech": "adverb"
            },
            {
                "word": "secure",
                "bangla": "নিরাপদ করা / নিশ্চিত করা",
                "partOfSpeech": "verb"
            }
        ],
        "questions": [
            {
                "q": "What would have happened if researchers had not analyzed the data?",
                "options": [
                    "They would not have understood it",
                    "They would fail",
                    "Nothing would change",
                    "They would lose money"
                ],
                "answer": "They would not have understood it"
            },
            {
                "q": "What is imperative according to the text?",
                "options": [
                    "To implement sustainable strategies",
                    "To wait for results",
                    "To ignore challenges",
                    "To stop research"
                ],
                "answer": "To implement sustainable strategies"
            },
            {
                "q": "How long have these complex challenges been ignored?",
                "options": [
                    "For a few days",
                    "For decades",
                    "For one year",
                    "Never ignored"
                ],
                "answer": "For decades"
            },
            {
                "q": "How can we secure a better future?",
                "options": [
                    "Through combined efforts",
                    "By doing nothing",
                    "Through individual work only",
                    "By ignoring policies"
                ],
                "answer": "Through combined efforts"
            }
        ],
        "summary": {
            "takeaways": [
                "উন্নত বাক্য বিন্যাসে থার্ড কন্ডিশনাল (would have + V3) এর নিখুঁত প্রয়োগ।",
                "একাডেমিক লিখনশৈলীতে জোর দেওয়ার জন্য inversion (only through... will we) এর ব্যবহার।"
            ],
            "realLifeUsage": [
                {
                    "context": "কোনো অবাস্তব অতীত অনুশোচনা বা যৌক্তিক ফলাফল প্রকাশ করতে:",
                    "example": "If we had acted earlier, we would have resolved the issues of deep sea mysteries."
                }
            ]
        }
    },
    {
        "id": "s100",
        "title": "Universal Basic Income",
        "subtitle": "সার্বজনীন মৌলিক আয়",
        "level": "Advanced",
        "levelColor": "rose",
        "topic": "Economy",
        "learningObjectives": [
            "Complex conditional structures",
            "Economic policy vocabulary"
        ],
        "grammarFocus": [
            "Conditionals",
            "Policy Vocab"
        ],
        "grammarTeach": {
            "structure": "Third Conditional & Complex Clauses",
            "formula": "If + Subject + had + V3, Subject + would have + V3",
            "explanation": "এই উন্নত গল্পটিতে জটিল থার্ড কন্ডিশনাল এবং সাবজাঙ্কটিভ মুড (subjunctive mood)-এর গঠন নিয়ে বিষদ আলোচনা করা হয়েছে যা একাডেমিক এবং আইইএলটিএস রাইটিং-এর জন্য অত্যন্ত গুরুত্বপূর্ণ।",
            "examples": [
                {
                    "eng": "If they had invested in technology, they would have succeeded.",
                    "bng": "তারা যদি প্রযুক্তিতে বিনিয়োগ করত, তবে তারা সফল হতো।"
                },
                {
                    "eng": "It is crucial that we protect these resources.",
                    "bng": "এটি অত্যন্ত গুরুত্বপূর্ণ যে আমরা এই সম্পদগুলো রক্ষা করি।"
                }
            ]
        },
        "sentences": [
            {
                "eng": "If the researchers had not analyzed the data, they would not have understood universal basic income.",
                "bng": "গবেষকরা যদি ডাটা বিশ্লেষণ না করতেন, তবে তারা সার্বজনীন মৌলিক আয় বুঝতে পারতেন না।"
            },
            {
                "eng": "It is imperative that we implement sustainable strategies immediately.",
                "bng": "এটি অত্যন্ত জরুরি যে আমরা অবিলম্বে টেকসই কৌশলসমূহ বাস্তবায়ন করি।"
            },
            {
                "eng": "Such complex challenges, which have been ignored for decades, require deep thinking.",
                "bng": "এ ধরনের জটিল চ্যালেঞ্জগুলো, যা দশকের পর দশক ধরে উপেক্ষা করা হয়েছে, গভীর চিন্তাভাবনা দাবি করে।"
            },
            {
                "eng": "Consequently, policymakers have initiated various programs to address the issues.",
                "bng": "ফলস্বরূপ, নীতিনির্ধারকরা সমস্যাগুলো সমাধানের জন্য বিভিন্ন কর্মসূচি শুরু করেছেন।"
            },
            {
                "eng": "Only through combined efforts will we be able to secure a better future.",
                "bng": "কেবলমাত্র যৌথ প্রচেষ্টার মাধ্যমেই আমরা একটি উন্নত ভবিষ্যৎ নিশ্চিত করতে সক্ষম হব।"
            }
        ],
        "vocabulary": [
            {
                "word": "analyzed",
                "bangla": "বিশ্লেষণ করেছিল",
                "partOfSpeech": "verb"
            },
            {
                "word": "imperative",
                "bangla": "অত্যন্ত জরুরি / বাধ্যতামূলক",
                "partOfSpeech": "adjective"
            },
            {
                "word": "sustainable",
                "bangla": "টেকসই",
                "partOfSpeech": "adjective"
            },
            {
                "word": "consequently",
                "bangla": "ফলস্বরূপ",
                "partOfSpeech": "adverb"
            },
            {
                "word": "secure",
                "bangla": "নিরাপদ করা / নিশ্চিত করা",
                "partOfSpeech": "verb"
            }
        ],
        "questions": [
            {
                "q": "What would have happened if researchers had not analyzed the data?",
                "options": [
                    "They would not have understood it",
                    "They would fail",
                    "Nothing would change",
                    "They would lose money"
                ],
                "answer": "They would not have understood it"
            },
            {
                "q": "What is imperative according to the text?",
                "options": [
                    "To implement sustainable strategies",
                    "To wait for results",
                    "To ignore challenges",
                    "To stop research"
                ],
                "answer": "To implement sustainable strategies"
            },
            {
                "q": "How long have these complex challenges been ignored?",
                "options": [
                    "For a few days",
                    "For decades",
                    "For one year",
                    "Never ignored"
                ],
                "answer": "For decades"
            },
            {
                "q": "How can we secure a better future?",
                "options": [
                    "Through combined efforts",
                    "By doing nothing",
                    "Through individual work only",
                    "By ignoring policies"
                ],
                "answer": "Through combined efforts"
            }
        ],
        "summary": {
            "takeaways": [
                "উন্নত বাক্য বিন্যাসে থার্ড কন্ডিশনাল (would have + V3) এর নিখুঁত প্রয়োগ।",
                "একাডেমিক লিখনশৈলীতে জোর দেওয়ার জন্য inversion (only through... will we) এর ব্যবহার।"
            ],
            "realLifeUsage": [
                {
                    "context": "কোনো অবাস্তব অতীত অনুশোচনা বা যৌক্তিক ফলাফল প্রকাশ করতে:",
                    "example": "If we had acted earlier, we would have resolved the issues of universal basic income."
                }
            ]
        }
    }
];
