
export interface Question {
    id: string;
    question: string;
    options: string[];
    answer: string;
}

export interface TranslationQuestion {
    id: string;
    type: 'b2e' | 'e2b'; // b2e = Bangla to English, e2b = English to Bangla
    question: string;
}

export interface ListeningQuestion extends Question {
    audioUrl: string;
    textPrompt?: string;
}

export interface LiveReadingPassage {
    id: string;
    title: string;
    content: string;
}

export const grammarQuestions: Question[] = [
    {
        "id": "g1",
        "question": "I ___ to the market yesterday.",
        "options": [
            "go",
            "went",
            "gone",
            "going"
        ],
        "answer": "went"
    },
    {
        "id": "g2",
        "question": "She ___ playing tennis right now.",
        "options": [
            "is",
            "are",
            "am",
            "be"
        ],
        "answer": "is"
    },
    {
        "id": "g3",
        "question": "They have ___ in this city for 10 years.",
        "options": [
            "live",
            "lives",
            "lived",
            "living"
        ],
        "answer": "lived"
    },
    {
        "id": "g4",
        "question": "If it rains, we ___ at home.",
        "options": [
            "stay",
            "will stay",
            "stayed",
            "would stay"
        ],
        "answer": "will stay"
    },
    {
        "id": "g5",
        "question": "He is the boy ___ won the first prize.",
        "options": [
            "who",
            "whom",
            "whose",
            "which"
        ],
        "answer": "who"
    },
    {
        "id": "g6",
        "question": "I haven't seen him ___ last month.",
        "options": [
            "for",
            "since",
            "from",
            "in"
        ],
        "answer": "since"
    },
    {
        "id": "g7",
        "question": "She can speak English fluently, ___ she?",
        "options": [
            "can",
            "can't",
            "does",
            "doesn't"
        ],
        "answer": "can't"
    },
    {
        "id": "g8",
        "question": "___ you ever been to London?",
        "options": [
            "Have",
            "Has",
            "Did",
            "Are"
        ],
        "answer": "Have"
    },
    {
        "id": "g9",
        "question": "The book is ___ the table.",
        "options": [
            "in",
            "on",
            "at",
            "over"
        ],
        "answer": "on"
    },
    {
        "id": "g10",
        "question": "I look forward to ___ you soon.",
        "options": [
            "see",
            "seeing",
            "saw",
            "seen"
        ],
        "answer": "seeing"
    },
    {
        "id": "g11",
        "question": "He doesn't have ___ money left.",
        "options": [
            "some",
            "any",
            "many",
            "few"
        ],
        "answer": "any"
    },
    {
        "id": "g12",
        "question": "She usually ___ up at 6 AM.",
        "options": [
            "wake",
            "wakes",
            "woke",
            "waking"
        ],
        "answer": "wakes"
    },
    {
        "id": "g13",
        "question": "Neither John ___ Mary came to the party.",
        "options": [
            "or",
            "nor",
            "and",
            "but"
        ],
        "answer": "nor"
    },
    {
        "id": "g14",
        "question": "By this time next year, I ___ my degree.",
        "options": [
            "will finish",
            "will have finished",
            "finished",
            "finish"
        ],
        "answer": "will have finished"
    },
    {
        "id": "g15",
        "question": "It's time you ___ to bed.",
        "options": [
            "go",
            "went",
            "gone",
            "going"
        ],
        "answer": "went"
    },
    {
        "id": "g16",
        "question": "I prefer tea ___ coffee.",
        "options": [
            "than",
            "to",
            "over",
            "from"
        ],
        "answer": "to"
    },
    {
        "id": "g17",
        "question": "He is ___ honest man.",
        "options": [
            "a",
            "an",
            "the",
            "no article"
        ],
        "answer": "an"
    },
    {
        "id": "g18",
        "question": "They made him ___ the room.",
        "options": [
            "clean",
            "to clean",
            "cleaned",
            "cleaning"
        ],
        "answer": "clean"
    },
    {
        "id": "g19",
        "question": "You had better ___ a doctor.",
        "options": [
            "consult",
            "to consult",
            "consulted",
            "consulting"
        ],
        "answer": "consult"
    },
    {
        "id": "g20",
        "question": "No sooner had he left ___ it started raining.",
        "options": [
            "when",
            "then",
            "than",
            "and"
        ],
        "answer": "than"
    },
    {
        "id": "g21",
        "question": "I wish I ___ a bird.",
        "options": [
            "was",
            "were",
            "am",
            "be"
        ],
        "answer": "were"
    },
    {
        "id": "g22",
        "question": "He works hard lest he ___ fail.",
        "options": [
            "should",
            "would",
            "may",
            "can"
        ],
        "answer": "should"
    },
    {
        "id": "g23",
        "question": "Despite ___ sick, he went to work.",
        "options": [
            "he was",
            "being",
            "of being",
            "was"
        ],
        "answer": "being"
    },
    {
        "id": "g24",
        "question": "Let's go for a walk, ___?",
        "options": [
            "shall we",
            "will you",
            "don't we",
            "aren't we"
        ],
        "answer": "shall we"
    },
    {
        "id": "g25",
        "question": "Do you know where ___?",
        "options": [
            "does he live",
            "he lives",
            "did he live",
            "he live"
        ],
        "answer": "he lives"
    },
    {
        "id": "g26",
        "question": "He is so weak that he ___ walk.",
        "options": [
            "can",
            "cannot",
            "could",
            "could not"
        ],
        "answer": "cannot"
    },
    {
        "id": "g27",
        "question": "I am used to ___ early.",
        "options": [
            "wake up",
            "waking up",
            "woke up",
            "waken up"
        ],
        "answer": "waking up"
    },
    {
        "id": "g28",
        "question": "If I had known, I ___ helped you.",
        "options": [
            "will have",
            "would have",
            "had",
            "have"
        ],
        "answer": "would have"
    },
    {
        "id": "g29",
        "question": "The scenery of Kashmir ___ very beautiful.",
        "options": [
            "is",
            "are",
            "were",
            "have been"
        ],
        "answer": "is"
    },
    {
        "id": "g30",
        "question": "Fifty miles ___ a long distance.",
        "options": [
            "is",
            "are",
            "were",
            "have"
        ],
        "answer": "is"
    },
    {
        "id": "g31",
        "question": "One of the boys ___ absent yesterday.",
        "options": [
            "was",
            "were",
            "is",
            "are"
        ],
        "answer": "was"
    },
    {
        "id": "g32",
        "question": "Each of the girls ___ given a prize.",
        "options": [
            "was",
            "were",
            "have",
            "are"
        ],
        "answer": "was"
    },
    {
        "id": "g33",
        "question": "A number of students ___ present.",
        "options": [
            "is",
            "are",
            "was",
            "has"
        ],
        "answer": "are"
    },
    {
        "id": "g34",
        "question": "The number of students ___ fifty.",
        "options": [
            "is",
            "are",
            "were",
            "have"
        ],
        "answer": "is"
    },
    {
        "id": "g35",
        "question": "Bread and butter ___ my favorite breakfast.",
        "options": [
            "is",
            "are",
            "were",
            "have"
        ],
        "answer": "is"
    },
    {
        "id": "g36",
        "question": "Slow and steady ___ the race.",
        "options": [
            "win",
            "wins",
            "won",
            "winning"
        ],
        "answer": "wins"
    },
    {
        "id": "g37",
        "question": "Time and tide ___ for none.",
        "options": [
            "wait",
            "waits",
            "waited",
            "waiting"
        ],
        "answer": "wait"
    },
    {
        "id": "g38",
        "question": "It is I who ___ to blame.",
        "options": [
            "is",
            "am",
            "are",
            "was"
        ],
        "answer": "am"
    },
    {
        "id": "g39",
        "question": "He as well as his friends ___ guilty.",
        "options": [
            "is",
            "are",
            "were",
            "have"
        ],
        "answer": "is"
    },
    {
        "id": "g40",
        "question": "Not only he but also his brothers ___ present.",
        "options": [
            "was",
            "were",
            "is",
            "has"
        ],
        "answer": "were"
    },
    {
        "id": "g41",
        "question": "Either you or he ___ to go.",
        "options": [
            "has",
            "have",
            "are",
            "were"
        ],
        "answer": "has"
    },
    {
        "id": "g42",
        "question": "Neither of them ___ qualified.",
        "options": [
            "is",
            "are",
            "were",
            "have"
        ],
        "answer": "is"
    },
    {
        "id": "g43",
        "question": "Many a man ___ died in the war.",
        "options": [
            "has",
            "have",
            "are",
            "were"
        ],
        "answer": "has"
    },
    {
        "id": "g44",
        "question": "More than one person ___ involved.",
        "options": [
            "was",
            "were",
            "are",
            "have"
        ],
        "answer": "was"
    },
    {
        "id": "g45",
        "question": "Half of the mangoes ___ rotten.",
        "options": [
            "is",
            "are",
            "was",
            "has"
        ],
        "answer": "are"
    },
    {
        "id": "g46",
        "question": "Two-thirds of the work ___ been done.",
        "options": [
            "has",
            "have",
            "are",
            "were"
        ],
        "answer": "has"
    },
    {
        "id": "g47",
        "question": "The jury ___ divided in their opinion.",
        "options": [
            "was",
            "were",
            "is",
            "has"
        ],
        "answer": "were"
    },
    {
        "id": "g48",
        "question": "The committee ___ formed last year.",
        "options": [
            "was",
            "were",
            "are",
            "have"
        ],
        "answer": "was"
    },
    {
        "id": "g49",
        "question": "Information ___ power.",
        "options": [
            "is",
            "are",
            "were",
            "have"
        ],
        "answer": "is"
    },
    {
        "id": "g50",
        "question": "The police ___ searching for the thief.",
        "options": [
            "is",
            "are",
            "was",
            "has"
        ],
        "answer": "are"
    }
];

export const phonicsQuestions: Question[] = [
    {
        "id": "p1",
        "question": "Which word has a different vowel sound?",
        "options": [
            "Cat",
            "Bat",
            "Car"
        ],
        "answer": "Car"
    },
    {
        "id": "p2",
        "question": "Identify the silent letter in the word 'KNOWLEDGE'",
        "options": [
            "K",
            "N",
            "W",
            "L"
        ],
        "answer": "K"
    },
    {
        "id": "p3",
        "question": "Which word rhymes with 'Light'?",
        "options": [
            "Bite",
            "Late",
            "Lit"
        ],
        "answer": "Bite"
    },
    {
        "id": "p4",
        "question": "What is the vowel sound in the word 'Tree'?",
        "options": [
            "Short E",
            "Long E",
            "Short I"
        ],
        "answer": "Long E"
    },
    {
        "id": "p5",
        "question": "Which word contains a short 'a' sound?",
        "options": [
            "Cake",
            "Apple",
            "Car"
        ],
        "answer": "Apple"
    },
    {
        "id": "p6",
        "question": "Identify the silent letter in 'HONEST'",
        "options": [
            "H",
            "O",
            "E",
            "T"
        ],
        "answer": "H"
    },
    {
        "id": "p7",
        "question": "Which word has the same vowel sound as 'Boat'?",
        "options": [
            "Coat",
            "Boot",
            "Bout"
        ],
        "answer": "Coat"
    },
    {
        "id": "p8",
        "question": "What sound does 'ch' make in 'School'?",
        "options": [
            "/ch/",
            "/sh/",
            "/k/"
        ],
        "answer": "/k/"
    },
    {
        "id": "p9",
        "question": "Which word ends with a /z/ sound?",
        "options": [
            "Cats",
            "Dogs",
            "Books"
        ],
        "answer": "Dogs"
    },
    {
        "id": "p10",
        "question": "Identify the silent letter in 'ISLAND'",
        "options": [
            "I",
            "S",
            "L",
            "A"
        ],
        "answer": "S"
    },
    {
        "id": "p11",
        "question": "Which word has a different vowel sound?",
        "options": [
            "Meet",
            "Seat",
            "Great"
        ],
        "answer": "Great"
    },
    {
        "id": "p12",
        "question": "What is the vowel sound in 'Moon'?",
        "options": [
            "Long U",
            "Short U",
            "Long O"
        ],
        "answer": "Long U"
    },
    {
        "id": "p13",
        "question": "Which word contains the /θ/ (voiceless th) sound?",
        "options": [
            "This",
            "That",
            "Think"
        ],
        "answer": "Think"
    },
    {
        "id": "p14",
        "question": "Identify the silent letter in 'WRIST'",
        "options": [
            "W",
            "R",
            "I",
            "S"
        ],
        "answer": "W"
    },
    {
        "id": "p15",
        "question": "Which word has the same vowel sound as 'Bird'?",
        "options": [
            "Word",
            "Board",
            "Beard"
        ],
        "answer": "Word"
    },
    {
        "id": "p16",
        "question": "What sound does 'ed' make in 'Played'?",
        "options": [
            "/t/",
            "/d/",
            "/id/"
        ],
        "answer": "/d/"
    },
    {
        "id": "p17",
        "question": "Which word has a different vowel sound?",
        "options": [
            "Put",
            "Cut",
            "Hut"
        ],
        "answer": "Put"
    },
    {
        "id": "p18",
        "question": "Identify the silent letter in 'COMB'",
        "options": [
            "C",
            "O",
            "M",
            "B"
        ],
        "answer": "B"
    },
    {
        "id": "p19",
        "question": "Which word contains the /ʃ/ (sh) sound?",
        "options": [
            "Machine",
            "Match",
            "Much"
        ],
        "answer": "Machine"
    },
    {
        "id": "p20",
        "question": "What is the vowel sound in 'Boy'?",
        "options": [
            "/ɔɪ/",
            "/aɪ/",
            "/eɪ/"
        ],
        "answer": "/ɔɪ/"
    }
];

export const readingPassage = `Marie Curie was a pioneering physicist and chemist. Born in Poland in 1867, she moved to Paris to study. She is famous for her work on radioactivity and was the first woman to win a Nobel Prize. She actually won it twice, in two different sciences: Physics and Chemistry. Despite her brilliant mind, she faced many challenges because she was a woman in a male-dominated field. However, her dedication to science never wavered. Her discoveries have had a profound impact on medicine, especially in the treatment of cancer.`;
export const readingQuestions: Question[] = [
    {
        "id": "r1",
        "question": "Where was Marie Curie born?",
        "options": [
            "Paris",
            "Poland",
            "London",
            "Berlin"
        ],
        "answer": "Poland"
    },
    {
        "id": "r2",
        "question": "What is Marie Curie famous for?",
        "options": [
            "Discovering electricity",
            "Work on radioactivity",
            "Inventing the telephone",
            "Studying biology"
        ],
        "answer": "Work on radioactivity"
    },
    {
        "id": "r3",
        "question": "How many Nobel Prizes did she win?",
        "options": [
            "One",
            "Two",
            "Three",
            "None"
        ],
        "answer": "Two"
    },
    {
        "id": "r4",
        "question": "What fields of science did she win her Nobel Prizes in?",
        "options": [
            "Physics and Biology",
            "Chemistry and Medicine",
            "Physics and Chemistry",
            "Mathematics and Physics"
        ],
        "answer": "Physics and Chemistry"
    },
    {
        "id": "r5",
        "question": "What major impact did her discoveries have?",
        "options": [
            "They helped invent the computer",
            "They changed how we travel",
            "They improved cancer treatment",
            "They advanced space exploration"
        ],
        "answer": "They improved cancer treatment"
    }
];

export const listeningQuestions: ListeningQuestion[] = [
    {
        "id": "l1",
        "question": "Listen to the prompt: 'The train departs at 3:15 PM.' When does the train leave?",
        "audioUrl": "",
        "textPrompt": "Audio Script: 'The train departs at 3:15 PM.'",
        "options": [
            "3:00 PM",
            "3:15 PM",
            "3:30 PM",
            "3:45 PM"
        ],
        "answer": "3:15 PM"
    },
    {
        "id": "l2",
        "question": "Listen to the prompt: 'I will meet you outside the library.' Where will they meet?",
        "audioUrl": "",
        "textPrompt": "Audio Script: 'I will meet you outside the library.'",
        "options": [
            "Inside the library",
            "At the cafe",
            "Outside the library",
            "In the park"
        ],
        "answer": "Outside the library"
    },
    {
        "id": "l3",
        "question": "Listen to the prompt: 'She bought two apples and three oranges.' How many fruits did she buy in total?",
        "audioUrl": "",
        "textPrompt": "Audio Script: 'She bought two apples and three oranges.'",
        "options": [
            "Two",
            "Three",
            "Five",
            "Six"
        ],
        "answer": "Five"
    },
    {
        "id": "l4",
        "question": "Listen to the prompt: 'The meeting has been postponed to Friday.' When is the new meeting date?",
        "audioUrl": "",
        "textPrompt": "Audio Script: 'The meeting has been postponed to Friday.'",
        "options": [
            "Monday",
            "Wednesday",
            "Thursday",
            "Friday"
        ],
        "answer": "Friday"
    },
    {
        "id": "l5",
        "question": "Listen to the prompt: 'He is wearing a blue shirt and black pants.' What color is his shirt?",
        "audioUrl": "",
        "textPrompt": "Audio Script: 'He is wearing a blue shirt and black pants.'",
        "options": [
            "Blue",
            "Black",
            "White",
            "Red"
        ],
        "answer": "Blue"
    },
    {
        "id": "l6",
        "question": "Listen to the prompt: 'The weather will be sunny tomorrow.' What will the weather be like?",
        "audioUrl": "",
        "textPrompt": "Audio Script: 'The weather will be sunny tomorrow.'",
        "options": [
            "Rainy",
            "Cloudy",
            "Sunny",
            "Snowy"
        ],
        "answer": "Sunny"
    },
    {
        "id": "l7",
        "question": "Listen to the prompt: 'Please turn off your mobile phones.' What is requested?",
        "audioUrl": "",
        "textPrompt": "Audio Script: 'Please turn off your mobile phones.'",
        "options": [
            "Turn on phones",
            "Turn off phones",
            "Use phones quietly",
            "Leave phones at home"
        ],
        "answer": "Turn off phones"
    },
    {
        "id": "l8",
        "question": "Listen to the prompt: 'The concert tickets cost $50 each.' How much is one ticket?",
        "audioUrl": "",
        "textPrompt": "Audio Script: 'The concert tickets cost $50 each.'",
        "options": [
            "$15",
            "$50",
            "$500",
            "$5"
        ],
        "answer": "$50"
    },
    {
        "id": "l9",
        "question": "Listen to the prompt: 'My favorite subject is history.' What is their favorite subject?",
        "audioUrl": "",
        "textPrompt": "Audio Script: 'My favorite subject is history.'",
        "options": [
            "Math",
            "Science",
            "History",
            "English"
        ],
        "answer": "History"
    },
    {
        "id": "l10",
        "question": "Listen to the prompt: 'Don't forget to lock the door.' What should you remember to do?",
        "audioUrl": "",
        "textPrompt": "Audio Script: 'Don't forget to lock the door.'",
        "options": [
            "Open the door",
            "Lock the door",
            "Clean the door",
            "Paint the door"
        ],
        "answer": "Lock the door"
    }
];

export const translationQuestions: TranslationQuestion[] = [
    {
        "id": "t1",
        "type": "b2e",
        "question": "আমি প্রতিদিন সকালে খবরের কাগজ পড়ি।"
    },
    {
        "id": "t2",
        "type": "b2e",
        "question": "সে কি গতকাল স্কুলে গিয়েছিল?"
    },
    {
        "id": "t3",
        "type": "b2e",
        "question": "বৃষ্টি শুরু হওয়ার আগেই আমরা বাড়ি পৌঁছেছিলাম।"
    },
    {
        "id": "t4",
        "type": "b2e",
        "question": "তুমি কি কখনো লন্ডন গিয়েছ?"
    },
    {
        "id": "t5",
        "type": "b2e",
        "question": "আমি যদি পাখি হতাম, আকাশে উড়তাম।"
    },
    {
        "id": "t6",
        "type": "e2b",
        "question": "He has been suffering from fever for three days."
    },
    {
        "id": "t7",
        "type": "e2b",
        "question": "It is high time we changed our bad habits."
    },
    {
        "id": "t8",
        "type": "e2b",
        "question": "No sooner had I reached the station than the train left."
    },
    {
        "id": "t9",
        "type": "e2b",
        "question": "Honesty is the best policy."
    },
    {
        "id": "t10",
        "type": "e2b",
        "question": "I am looking forward to hearing from you."
    }
];

export const liveReadingPassages: LiveReadingPassage[] = [
    {
        "id": "lr1",
        "title": "Passage 1: Global Language",
        "content": "English is widely spoken around the world. It serves as a global bridge, connecting people from different cultures and backgrounds. Mastering it can open doors to numerous opportunities."
    },
    {
        "id": "lr2",
        "title": "Passage 2: Technology",
        "content": "In today’s digital age, technology is advancing at an unprecedented pace. It has revolutionized the way we work, communicate, and learn, making information instantly accessible."
    },
    {
        "id": "lr3",
        "title": "Passage 3: Environment",
        "content": "Protecting the environment is crucial for future generations. Simple actions like recycling, reducing plastic use, and planting trees can make a significant difference in combating climate change."
    },
    {
        "id": "lr4",
        "title": "Passage 4: Health",
        "content": "Maintaining a balanced diet and exercising regularly are key to a healthy life. Physical activity not only strengthens the body but also improves mental well-being."
    },
    {
        "id": "lr5",
        "title": "Passage 5: Reading",
        "content": "Reading is a journey of the mind. It allows us to explore new worlds, understand different perspectives, and continuously expand our horizons and vocabulary."
    }
];
