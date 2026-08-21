
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
        "question": "I ___ to the store yesterday.",
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
        "question": "She is interested ___ learning English.",
        "options": [
            "in",
            "on",
            "at",
            "with"
        ],
        "answer": "in"
    },
    {
        "id": "g3",
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
        "id": "g4",
        "question": "They ___ here for three years.",
        "options": [
            "are living",
            "lived",
            "have lived",
            "live"
        ],
        "answer": "have lived"
    },
    {
        "id": "g5",
        "question": "He is the man ___ car was stolen.",
        "options": [
            "who",
            "whom",
            "whose",
            "which"
        ],
        "answer": "whose"
    },
    {
        "id": "g6",
        "question": "Grammar Question 6: Select the correct word to complete the sentence.",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "answer": "Option A"
    },
    {
        "id": "g7",
        "question": "Grammar Question 7: Select the correct word to complete the sentence.",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "answer": "Option A"
    },
    {
        "id": "g8",
        "question": "Grammar Question 8: Select the correct word to complete the sentence.",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "answer": "Option A"
    },
    {
        "id": "g9",
        "question": "Grammar Question 9: Select the correct word to complete the sentence.",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "answer": "Option A"
    },
    {
        "id": "g10",
        "question": "Grammar Question 10: Select the correct word to complete the sentence.",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "answer": "Option A"
    },
    {
        "id": "g11",
        "question": "Grammar Question 11: Select the correct word to complete the sentence.",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "answer": "Option A"
    },
    {
        "id": "g12",
        "question": "Grammar Question 12: Select the correct word to complete the sentence.",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "answer": "Option A"
    },
    {
        "id": "g13",
        "question": "Grammar Question 13: Select the correct word to complete the sentence.",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "answer": "Option A"
    },
    {
        "id": "g14",
        "question": "Grammar Question 14: Select the correct word to complete the sentence.",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "answer": "Option A"
    },
    {
        "id": "g15",
        "question": "Grammar Question 15: Select the correct word to complete the sentence.",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "answer": "Option A"
    },
    {
        "id": "g16",
        "question": "Grammar Question 16: Select the correct word to complete the sentence.",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "answer": "Option A"
    },
    {
        "id": "g17",
        "question": "Grammar Question 17: Select the correct word to complete the sentence.",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "answer": "Option A"
    },
    {
        "id": "g18",
        "question": "Grammar Question 18: Select the correct word to complete the sentence.",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "answer": "Option A"
    },
    {
        "id": "g19",
        "question": "Grammar Question 19: Select the correct word to complete the sentence.",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "answer": "Option A"
    },
    {
        "id": "g20",
        "question": "Grammar Question 20: Select the correct word to complete the sentence.",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "answer": "Option A"
    },
    {
        "id": "g21",
        "question": "Grammar Question 21: Select the correct word to complete the sentence.",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "answer": "Option A"
    },
    {
        "id": "g22",
        "question": "Grammar Question 22: Select the correct word to complete the sentence.",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "answer": "Option A"
    },
    {
        "id": "g23",
        "question": "Grammar Question 23: Select the correct word to complete the sentence.",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "answer": "Option A"
    },
    {
        "id": "g24",
        "question": "Grammar Question 24: Select the correct word to complete the sentence.",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "answer": "Option A"
    },
    {
        "id": "g25",
        "question": "Grammar Question 25: Select the correct word to complete the sentence.",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "answer": "Option A"
    },
    {
        "id": "g26",
        "question": "Grammar Question 26: Select the correct word to complete the sentence.",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "answer": "Option A"
    },
    {
        "id": "g27",
        "question": "Grammar Question 27: Select the correct word to complete the sentence.",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "answer": "Option A"
    },
    {
        "id": "g28",
        "question": "Grammar Question 28: Select the correct word to complete the sentence.",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "answer": "Option A"
    },
    {
        "id": "g29",
        "question": "Grammar Question 29: Select the correct word to complete the sentence.",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "answer": "Option A"
    },
    {
        "id": "g30",
        "question": "Grammar Question 30: Select the correct word to complete the sentence.",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "answer": "Option A"
    },
    {
        "id": "g31",
        "question": "Grammar Question 31: Select the correct word to complete the sentence.",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "answer": "Option A"
    },
    {
        "id": "g32",
        "question": "Grammar Question 32: Select the correct word to complete the sentence.",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "answer": "Option A"
    },
    {
        "id": "g33",
        "question": "Grammar Question 33: Select the correct word to complete the sentence.",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "answer": "Option A"
    },
    {
        "id": "g34",
        "question": "Grammar Question 34: Select the correct word to complete the sentence.",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "answer": "Option A"
    },
    {
        "id": "g35",
        "question": "Grammar Question 35: Select the correct word to complete the sentence.",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "answer": "Option A"
    },
    {
        "id": "g36",
        "question": "Grammar Question 36: Select the correct word to complete the sentence.",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "answer": "Option A"
    },
    {
        "id": "g37",
        "question": "Grammar Question 37: Select the correct word to complete the sentence.",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "answer": "Option A"
    },
    {
        "id": "g38",
        "question": "Grammar Question 38: Select the correct word to complete the sentence.",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "answer": "Option A"
    },
    {
        "id": "g39",
        "question": "Grammar Question 39: Select the correct word to complete the sentence.",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "answer": "Option A"
    },
    {
        "id": "g40",
        "question": "Grammar Question 40: Select the correct word to complete the sentence.",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "answer": "Option A"
    },
    {
        "id": "g41",
        "question": "Grammar Question 41: Select the correct word to complete the sentence.",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "answer": "Option A"
    },
    {
        "id": "g42",
        "question": "Grammar Question 42: Select the correct word to complete the sentence.",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "answer": "Option A"
    },
    {
        "id": "g43",
        "question": "Grammar Question 43: Select the correct word to complete the sentence.",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "answer": "Option A"
    },
    {
        "id": "g44",
        "question": "Grammar Question 44: Select the correct word to complete the sentence.",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "answer": "Option A"
    },
    {
        "id": "g45",
        "question": "Grammar Question 45: Select the correct word to complete the sentence.",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "answer": "Option A"
    },
    {
        "id": "g46",
        "question": "Grammar Question 46: Select the correct word to complete the sentence.",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "answer": "Option A"
    },
    {
        "id": "g47",
        "question": "Grammar Question 47: Select the correct word to complete the sentence.",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "answer": "Option A"
    },
    {
        "id": "g48",
        "question": "Grammar Question 48: Select the correct word to complete the sentence.",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "answer": "Option A"
    },
    {
        "id": "g49",
        "question": "Grammar Question 49: Select the correct word to complete the sentence.",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "answer": "Option A"
    },
    {
        "id": "g50",
        "question": "Grammar Question 50: Select the correct word to complete the sentence.",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "answer": "Option A"
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
        "question": "Identify the silent letter in the word \"KNIFE\"",
        "options": [
            "K",
            "N",
            "I",
            "E"
        ],
        "answer": "K"
    },
    {
        "id": "p3",
        "question": "Phonics Question 3: Which word has a different vowel sound?",
        "options": [
            "Word 1",
            "Word 2",
            "Word 3"
        ],
        "answer": "Word 3"
    },
    {
        "id": "p4",
        "question": "Phonics Question 4: Which word has a different vowel sound?",
        "options": [
            "Word 1",
            "Word 2",
            "Word 3"
        ],
        "answer": "Word 3"
    },
    {
        "id": "p5",
        "question": "Phonics Question 5: Which word has a different vowel sound?",
        "options": [
            "Word 1",
            "Word 2",
            "Word 3"
        ],
        "answer": "Word 3"
    },
    {
        "id": "p6",
        "question": "Phonics Question 6: Which word has a different vowel sound?",
        "options": [
            "Word 1",
            "Word 2",
            "Word 3"
        ],
        "answer": "Word 3"
    },
    {
        "id": "p7",
        "question": "Phonics Question 7: Which word has a different vowel sound?",
        "options": [
            "Word 1",
            "Word 2",
            "Word 3"
        ],
        "answer": "Word 3"
    },
    {
        "id": "p8",
        "question": "Phonics Question 8: Which word has a different vowel sound?",
        "options": [
            "Word 1",
            "Word 2",
            "Word 3"
        ],
        "answer": "Word 3"
    },
    {
        "id": "p9",
        "question": "Phonics Question 9: Which word has a different vowel sound?",
        "options": [
            "Word 1",
            "Word 2",
            "Word 3"
        ],
        "answer": "Word 3"
    },
    {
        "id": "p10",
        "question": "Phonics Question 10: Which word has a different vowel sound?",
        "options": [
            "Word 1",
            "Word 2",
            "Word 3"
        ],
        "answer": "Word 3"
    },
    {
        "id": "p11",
        "question": "Phonics Question 11: Which word has a different vowel sound?",
        "options": [
            "Word 1",
            "Word 2",
            "Word 3"
        ],
        "answer": "Word 3"
    },
    {
        "id": "p12",
        "question": "Phonics Question 12: Which word has a different vowel sound?",
        "options": [
            "Word 1",
            "Word 2",
            "Word 3"
        ],
        "answer": "Word 3"
    },
    {
        "id": "p13",
        "question": "Phonics Question 13: Which word has a different vowel sound?",
        "options": [
            "Word 1",
            "Word 2",
            "Word 3"
        ],
        "answer": "Word 3"
    },
    {
        "id": "p14",
        "question": "Phonics Question 14: Which word has a different vowel sound?",
        "options": [
            "Word 1",
            "Word 2",
            "Word 3"
        ],
        "answer": "Word 3"
    },
    {
        "id": "p15",
        "question": "Phonics Question 15: Which word has a different vowel sound?",
        "options": [
            "Word 1",
            "Word 2",
            "Word 3"
        ],
        "answer": "Word 3"
    },
    {
        "id": "p16",
        "question": "Phonics Question 16: Which word has a different vowel sound?",
        "options": [
            "Word 1",
            "Word 2",
            "Word 3"
        ],
        "answer": "Word 3"
    },
    {
        "id": "p17",
        "question": "Phonics Question 17: Which word has a different vowel sound?",
        "options": [
            "Word 1",
            "Word 2",
            "Word 3"
        ],
        "answer": "Word 3"
    },
    {
        "id": "p18",
        "question": "Phonics Question 18: Which word has a different vowel sound?",
        "options": [
            "Word 1",
            "Word 2",
            "Word 3"
        ],
        "answer": "Word 3"
    },
    {
        "id": "p19",
        "question": "Phonics Question 19: Which word has a different vowel sound?",
        "options": [
            "Word 1",
            "Word 2",
            "Word 3"
        ],
        "answer": "Word 3"
    },
    {
        "id": "p20",
        "question": "Phonics Question 20: Which word has a different vowel sound?",
        "options": [
            "Word 1",
            "Word 2",
            "Word 3"
        ],
        "answer": "Word 3"
    }
];

export const readingPassage = `Once upon a time in a small village, there lived an old man who loved to read. Every day, he would sit under the large oak tree and read books aloud to the children. The children loved listening to his stories because he had a very expressive voice.`;
export const readingQuestions: Question[] = [
    {
        "id": "r1",
        "question": "Where did the old man sit to read?",
        "options": [
            "Under an apple tree",
            "In his house",
            "Under a large oak tree",
            "In the library"
        ],
        "answer": "Under a large oak tree"
    },
    {
        "id": "r2",
        "question": "Reading Q2: Based on the passage, what is the answer?",
        "options": [
            "Option 1",
            "Option 2",
            "Option 3",
            "Option 4"
        ],
        "answer": "Option 1"
    },
    {
        "id": "r3",
        "question": "Reading Q3: Based on the passage, what is the answer?",
        "options": [
            "Option 1",
            "Option 2",
            "Option 3",
            "Option 4"
        ],
        "answer": "Option 1"
    },
    {
        "id": "r4",
        "question": "Reading Q4: Based on the passage, what is the answer?",
        "options": [
            "Option 1",
            "Option 2",
            "Option 3",
            "Option 4"
        ],
        "answer": "Option 1"
    },
    {
        "id": "r5",
        "question": "Reading Q5: Based on the passage, what is the answer?",
        "options": [
            "Option 1",
            "Option 2",
            "Option 3",
            "Option 4"
        ],
        "answer": "Option 1"
    }
];

export const listeningQuestions: ListeningQuestion[] = [
    {
        "id": "l1",
        "question": "Listening Q1: Listen to the audio and select the correct answer.",
        "audioUrl": "",
        "textPrompt": "[Imagine an audio saying: \"The train leaves at 5 PM\"]",
        "options": [
            "4 PM",
            "5 PM",
            "6 PM",
            "7 PM"
        ],
        "answer": "5 PM"
    },
    {
        "id": "l2",
        "question": "Listening Q2: Listen to the audio and select the correct answer.",
        "audioUrl": "",
        "textPrompt": "[Imagine an audio saying: \"The train leaves at 5 PM\"]",
        "options": [
            "4 PM",
            "5 PM",
            "6 PM",
            "7 PM"
        ],
        "answer": "5 PM"
    },
    {
        "id": "l3",
        "question": "Listening Q3: Listen to the audio and select the correct answer.",
        "audioUrl": "",
        "textPrompt": "[Imagine an audio saying: \"The train leaves at 5 PM\"]",
        "options": [
            "4 PM",
            "5 PM",
            "6 PM",
            "7 PM"
        ],
        "answer": "5 PM"
    },
    {
        "id": "l4",
        "question": "Listening Q4: Listen to the audio and select the correct answer.",
        "audioUrl": "",
        "textPrompt": "[Imagine an audio saying: \"The train leaves at 5 PM\"]",
        "options": [
            "4 PM",
            "5 PM",
            "6 PM",
            "7 PM"
        ],
        "answer": "5 PM"
    },
    {
        "id": "l5",
        "question": "Listening Q5: Listen to the audio and select the correct answer.",
        "audioUrl": "",
        "textPrompt": "[Imagine an audio saying: \"The train leaves at 5 PM\"]",
        "options": [
            "4 PM",
            "5 PM",
            "6 PM",
            "7 PM"
        ],
        "answer": "5 PM"
    },
    {
        "id": "l6",
        "question": "Listening Q6: Listen to the audio and select the correct answer.",
        "audioUrl": "",
        "textPrompt": "[Imagine an audio saying: \"The train leaves at 5 PM\"]",
        "options": [
            "4 PM",
            "5 PM",
            "6 PM",
            "7 PM"
        ],
        "answer": "5 PM"
    },
    {
        "id": "l7",
        "question": "Listening Q7: Listen to the audio and select the correct answer.",
        "audioUrl": "",
        "textPrompt": "[Imagine an audio saying: \"The train leaves at 5 PM\"]",
        "options": [
            "4 PM",
            "5 PM",
            "6 PM",
            "7 PM"
        ],
        "answer": "5 PM"
    },
    {
        "id": "l8",
        "question": "Listening Q8: Listen to the audio and select the correct answer.",
        "audioUrl": "",
        "textPrompt": "[Imagine an audio saying: \"The train leaves at 5 PM\"]",
        "options": [
            "4 PM",
            "5 PM",
            "6 PM",
            "7 PM"
        ],
        "answer": "5 PM"
    },
    {
        "id": "l9",
        "question": "Listening Q9: Listen to the audio and select the correct answer.",
        "audioUrl": "",
        "textPrompt": "[Imagine an audio saying: \"The train leaves at 5 PM\"]",
        "options": [
            "4 PM",
            "5 PM",
            "6 PM",
            "7 PM"
        ],
        "answer": "5 PM"
    },
    {
        "id": "l10",
        "question": "Listening Q10: Listen to the audio and select the correct answer.",
        "audioUrl": "",
        "textPrompt": "[Imagine an audio saying: \"The train leaves at 5 PM\"]",
        "options": [
            "4 PM",
            "5 PM",
            "6 PM",
            "7 PM"
        ],
        "answer": "5 PM"
    }
];

export const translationQuestions: TranslationQuestion[] = [
    {
        "id": "t1",
        "type": "b2e",
        "question": "আমি ভাত খাই।"
    },
    {
        "id": "t2",
        "type": "b2e",
        "question": "সে গতকাল স্কুলে যায় নি।"
    },
    {
        "id": "t3",
        "type": "b2e",
        "question": "তুমি কি কখনো কক্সবাজার গিয়েছ?"
    },
    {
        "id": "t4",
        "type": "b2e",
        "question": "বৃষ্টি হচ্ছে।"
    },
    {
        "id": "t5",
        "type": "b2e",
        "question": "আমি এই বইটি খুঁজছিলাম।"
    },
    {
        "id": "t6",
        "type": "e2b",
        "question": "He has been reading since morning."
    },
    {
        "id": "t7",
        "type": "e2b",
        "question": "I would rather die than beg."
    },
    {
        "id": "t8",
        "type": "e2b",
        "question": "It is time we changed our bad habits."
    },
    {
        "id": "t9",
        "type": "e2b",
        "question": "As soon as he saw the police, he ran away."
    },
    {
        "id": "t10",
        "type": "e2b",
        "question": "Knowledge is power."
    }
];

export const liveReadingPassages: LiveReadingPassage[] = [
    {
        "id": "lr1",
        "title": "Passage 1",
        "content": "English is considered an international language. It is spoken all over the world. To get a good job and communicate globally, learning English is essential."
    },
    {
        "id": "lr2",
        "title": "Passage 2",
        "content": "Technology has changed the way we live. Today, we can connect with people instantly. However, it also has some negative impacts on our social lives."
    },
    {
        "id": "lr3",
        "title": "Passage 3",
        "content": "Health is wealth. Without good health, money has no value. We should eat nutritious food and exercise daily to maintain our health."
    },
    {
        "id": "lr4",
        "title": "Passage 4",
        "content": "Reading books is a wonderful habit. It expands our knowledge, improves our vocabulary, and helps us relax after a long day."
    },
    {
        "id": "lr5",
        "title": "Passage 5",
        "content": "Global warming is a serious issue. The temperature of the earth is rising due to greenhouse gases. We must plant more trees to save our planet."
    }
];
