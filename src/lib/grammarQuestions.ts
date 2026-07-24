export type Difficulty = 'easy' | 'medium' | 'hard';

export interface Question {
    id: string;
    topic: string;
    difficulty: Difficulty;
    sentence: string;
    options: string[];
    answer: string;
    explanation: string;
    banglaRule: string;
}

export const QUESTIONS: Question[] = [
    {
        "id": "art_e_1",
        "topic": "Articles",
        "difficulty": "easy",
        "sentence": "Karim wants to buy ___ cat.",
        "options": [
            "a",
            "an",
            "the",
            "—"
        ],
        "answer": "a",
        "explanation": "\"cat\" একটি সাধারণ গণনযোগ্য একবচন নাম এবং এর প্রথম উচ্চারণ অনুযায়ী \"a\" বসে।",
        "banglaRule": "সাধারণ ব্যঞ্জনবর্ণ উচ্চারণের আগে a এবং স্বরবর্ণ উচ্চারণের আগে an বসে।"
    },
    {
        "id": "art_e_2",
        "topic": "Articles",
        "difficulty": "easy",
        "sentence": "There is ___ umbrella on the table.",
        "options": [
            "a",
            "an",
            "the",
            "—"
        ],
        "answer": "an",
        "explanation": "\"umbrella\" একটি সাধারণ গণনযোগ্য একবচন নাম এবং এর প্রথম উচ্চারণ অনুযায়ী \"an\" বসে।",
        "banglaRule": "সাধারণ ব্যঞ্জনবর্ণ উচ্চারণের আগে a এবং স্বরবর্ণ উচ্চারণের আগে an বসে।"
    },
    {
        "id": "art_e_3",
        "topic": "Articles",
        "difficulty": "easy",
        "sentence": "Could you show me ___ book?",
        "options": [
            "a",
            "an",
            "the",
            "—"
        ],
        "answer": "a",
        "explanation": "\"book\" একটি সাধারণ গণনযোগ্য একবচন নাম এবং এর প্রথম উচ্চারণ অনুযায়ী \"a\" বসে।",
        "banglaRule": "সাধারণ ব্যঞ্জনবর্ণ উচ্চারণের আগে a এবং স্বরবর্ণ উচ্চারণের আগে an বসে।"
    },
    {
        "id": "art_e_4",
        "topic": "Articles",
        "difficulty": "easy",
        "sentence": "David bought ___ elephant yesterday.",
        "options": [
            "a",
            "an",
            "the",
            "—"
        ],
        "answer": "an",
        "explanation": "\"elephant\" একটি সাধারণ গণনযোগ্য একবচন নাম এবং এর প্রথম উচ্চারণ অনুযায়ী \"an\" বসে।",
        "banglaRule": "সাধারণ ব্যঞ্জনবর্ণ উচ্চারণের আগে a এবং স্বরবর্ণ উচ্চারণের আগে an বসে।"
    },
    {
        "id": "art_e_5",
        "topic": "Articles",
        "difficulty": "easy",
        "sentence": "Sumi wants to buy ___ computer.",
        "options": [
            "a",
            "an",
            "the",
            "—"
        ],
        "answer": "a",
        "explanation": "\"computer\" একটি সাধারণ গণনযোগ্য একবচন নাম এবং এর প্রথম উচ্চারণ অনুযায়ী \"a\" বসে।",
        "banglaRule": "সাধারণ ব্যঞ্জনবর্ণ উচ্চারণের আগে a এবং স্বরবর্ণ উচ্চারণের আগে an বসে।"
    },
    {
        "id": "art_e_6",
        "topic": "Articles",
        "difficulty": "easy",
        "sentence": "There is ___ artist on the table.",
        "options": [
            "a",
            "an",
            "the",
            "—"
        ],
        "answer": "an",
        "explanation": "\"artist\" একটি সাধারণ গণনযোগ্য একবচন নাম এবং এর প্রথম উচ্চারণ অনুযায়ী \"an\" বসে।",
        "banglaRule": "সাধারণ ব্যঞ্জনবর্ণ উচ্চারণের আগে a এবং স্বরবর্ণ উচ্চারণের আগে an বসে।"
    },
    {
        "id": "art_e_7",
        "topic": "Articles",
        "difficulty": "easy",
        "sentence": "Could you show me ___ bike?",
        "options": [
            "a",
            "an",
            "the",
            "—"
        ],
        "answer": "a",
        "explanation": "\"bike\" একটি সাধারণ গণনযোগ্য একবচন নাম এবং এর প্রথম উচ্চারণ অনুযায়ী \"a\" বসে।",
        "banglaRule": "সাধারণ ব্যঞ্জনবর্ণ উচ্চারণের আগে a এবং স্বরবর্ণ উচ্চারণের আগে an বসে।"
    },
    {
        "id": "art_e_8",
        "topic": "Articles",
        "difficulty": "easy",
        "sentence": "Fahim bought ___ author yesterday.",
        "options": [
            "a",
            "an",
            "the",
            "—"
        ],
        "answer": "an",
        "explanation": "\"author\" একটি সাধারণ গণনযোগ্য একবচন নাম এবং এর প্রথম উচ্চারণ অনুযায়ী \"an\" বসে।",
        "banglaRule": "সাধারণ ব্যঞ্জনবর্ণ উচ্চারণের আগে a এবং স্বরবর্ণ উচ্চারণের আগে an বসে।"
    },
    {
        "id": "art_e_9",
        "topic": "Articles",
        "difficulty": "easy",
        "sentence": "Ayesha wants to buy ___ river.",
        "options": [
            "a",
            "an",
            "the",
            "—"
        ],
        "answer": "a",
        "explanation": "\"river\" একটি সাধারণ গণনযোগ্য একবচন নাম এবং এর প্রথম উচ্চারণ অনুযায়ী \"a\" বসে।",
        "banglaRule": "সাধারণ ব্যঞ্জনবর্ণ উচ্চারণের আগে a এবং স্বরবর্ণ উচ্চারণের আগে an বসে।"
    },
    {
        "id": "art_e_10",
        "topic": "Articles",
        "difficulty": "easy",
        "sentence": "There is ___ engineer on the table.",
        "options": [
            "a",
            "an",
            "the",
            "—"
        ],
        "answer": "an",
        "explanation": "\"engineer\" একটি সাধারণ গণনযোগ্য একবচন নাম এবং এর প্রথম উচ্চারণ অনুযায়ী \"an\" বসে।",
        "banglaRule": "সাধারণ ব্যঞ্জনবর্ণ উচ্চারণের আগে a এবং স্বরবর্ণ উচ্চারণের আগে an বসে।"
    },
    {
        "id": "art_e_11",
        "topic": "Articles",
        "difficulty": "easy",
        "sentence": "Could you show me ___ teacher?",
        "options": [
            "a",
            "an",
            "the",
            "—"
        ],
        "answer": "a",
        "explanation": "\"teacher\" একটি সাধারণ গণনযোগ্য একবচন নাম এবং এর প্রথম উচ্চারণ অনুযায়ী \"a\" বসে।",
        "banglaRule": "সাধারণ ব্যঞ্জনবর্ণ উচ্চারণের আগে a এবং স্বরবর্ণ উচ্চারণের আগে an বসে।"
    },
    {
        "id": "art_e_12",
        "topic": "Articles",
        "difficulty": "easy",
        "sentence": "Jessica bought ___ inspector yesterday.",
        "options": [
            "a",
            "an",
            "the",
            "—"
        ],
        "answer": "an",
        "explanation": "\"inspector\" একটি সাধারণ গণনযোগ্য একবচন নাম এবং এর প্রথম উচ্চারণ অনুযায়ী \"an\" বসে।",
        "banglaRule": "সাধারণ ব্যঞ্জনবর্ণ উচ্চারণের আগে a এবং স্বরবর্ণ উচ্চারণের আগে an বসে।"
    },
    {
        "id": "art_e_13",
        "topic": "Articles",
        "difficulty": "easy",
        "sentence": "Alex wants to buy ___ lawyer.",
        "options": [
            "a",
            "an",
            "the",
            "—"
        ],
        "answer": "a",
        "explanation": "\"lawyer\" একটি সাধারণ গণনযোগ্য একবচন নাম এবং এর প্রথম উচ্চারণ অনুযায়ী \"a\" বসে।",
        "banglaRule": "সাধারণ ব্যঞ্জনবর্ণ উচ্চারণের আগে a এবং স্বরবর্ণ উচ্চারণের আগে an বসে।"
    },
    {
        "id": "art_e_14",
        "topic": "Articles",
        "difficulty": "easy",
        "sentence": "Ryan waited for ___ honest person.",
        "options": [
            "a",
            "an",
            "the",
            "—"
        ],
        "answer": "an",
        "explanation": "\"honest person\"-এর উচ্চারণ ভাওয়েল sound (আ/এ) দিয়ে শুরু, তাই \"an\" বসে।",
        "banglaRule": "H সাইলেন্ট থাকলে বা উচ্চারণ ভাওয়েল sound হলে \"an\" বসে।"
    },
    {
        "id": "art_e_15",
        "topic": "Articles",
        "difficulty": "easy",
        "sentence": "Sofie is ___ university student.",
        "options": [
            "a",
            "an",
            "the",
            "—"
        ],
        "answer": "a",
        "explanation": "\"university student\"-এর প্রথম অক্ষর ভাওয়েল হলেও উচ্চারণ \"ইউ\" বা \"ওয়া\"-এর মতো, তাই \"a\" বসে।",
        "banglaRule": "U বা E-এর উচ্চারণ \"ইউ\" (yu) এবং O-এর উচ্চারণ \"ওয়া\" (wa) হলে a বসে।"
    },
    {
        "id": "art_e_16",
        "topic": "Articles",
        "difficulty": "easy",
        "sentence": "Rahim bought ___ apple yesterday.",
        "options": [
            "a",
            "an",
            "the",
            "—"
        ],
        "answer": "an",
        "explanation": "\"apple\" একটি সাধারণ গণনযোগ্য একবচন নাম এবং এর প্রথম উচ্চারণ অনুযায়ী \"an\" বসে।",
        "banglaRule": "সাধারণ ব্যঞ্জনবর্ণ উচ্চারণের আগে a এবং স্বরবর্ণ উচ্চারণের আগে an বসে।"
    },
    {
        "id": "art_e_17",
        "topic": "Articles",
        "difficulty": "easy",
        "sentence": "Karim is ___ one-eyed man.",
        "options": [
            "a",
            "an",
            "the",
            "—"
        ],
        "answer": "a",
        "explanation": "\"one-eyed man\"-এর প্রথম অক্ষর ভাওয়েল হলেও উচ্চারণ \"ইউ\" বা \"ওয়া\"-এর মতো, তাই \"a\" বসে।",
        "banglaRule": "U বা E-এর উচ্চারণ \"ইউ\" (yu) এবং O-এর উচ্চারণ \"ওয়া\" (wa) হলে a বসে।"
    },
    {
        "id": "art_e_18",
        "topic": "Articles",
        "difficulty": "easy",
        "sentence": "There is ___ umbrella on the table.",
        "options": [
            "a",
            "an",
            "the",
            "—"
        ],
        "answer": "an",
        "explanation": "\"umbrella\" একটি সাধারণ গণনযোগ্য একবচন নাম এবং এর প্রথম উচ্চারণ অনুযায়ী \"an\" বসে।",
        "banglaRule": "সাধারণ ব্যঞ্জনবর্ণ উচ্চারণের আগে a এবং স্বরবর্ণ উচ্চারণের আগে an বসে।"
    },
    {
        "id": "art_e_19",
        "topic": "Articles",
        "difficulty": "easy",
        "sentence": "Could you show me ___ cat?",
        "options": [
            "a",
            "an",
            "the",
            "—"
        ],
        "answer": "a",
        "explanation": "\"cat\" একটি সাধারণ গণনযোগ্য একবচন নাম এবং এর প্রথম উচ্চারণ অনুযায়ী \"a\" বসে।",
        "banglaRule": "সাধারণ ব্যঞ্জনবর্ণ উচ্চারণের আগে a এবং স্বরবর্ণ উচ্চারণের আগে an বসে।"
    },
    {
        "id": "art_e_20",
        "topic": "Articles",
        "difficulty": "easy",
        "sentence": "David bought ___ elephant yesterday.",
        "options": [
            "a",
            "an",
            "the",
            "—"
        ],
        "answer": "an",
        "explanation": "\"elephant\" একটি সাধারণ গণনযোগ্য একবচন নাম এবং এর প্রথম উচ্চারণ অনুযায়ী \"an\" বসে।",
        "banglaRule": "সাধারণ ব্যঞ্জনবর্ণ উচ্চারণের আগে a এবং স্বরবর্ণ উচ্চারণের আগে an বসে।"
    },
    {
        "id": "art_e_21",
        "topic": "Articles",
        "difficulty": "easy",
        "sentence": "Sumi wants to buy ___ book.",
        "options": [
            "a",
            "an",
            "the",
            "—"
        ],
        "answer": "a",
        "explanation": "\"book\" একটি সাধারণ গণনযোগ্য একবচন নাম এবং এর প্রথম উচ্চারণ অনুযায়ী \"a\" বসে।",
        "banglaRule": "সাধারণ ব্যঞ্জনবর্ণ উচ্চারণের আগে a এবং স্বরবর্ণ উচ্চারণের আগে an বসে।"
    },
    {
        "id": "art_e_22",
        "topic": "Articles",
        "difficulty": "easy",
        "sentence": "There is ___ artist on the table.",
        "options": [
            "a",
            "an",
            "the",
            "—"
        ],
        "answer": "an",
        "explanation": "\"artist\" একটি সাধারণ গণনযোগ্য একবচন নাম এবং এর প্রথম উচ্চারণ অনুযায়ী \"an\" বসে।",
        "banglaRule": "সাধারণ ব্যঞ্জনবর্ণ উচ্চারণের আগে a এবং স্বরবর্ণ উচ্চারণের আগে an বসে।"
    },
    {
        "id": "art_e_23",
        "topic": "Articles",
        "difficulty": "easy",
        "sentence": "Could you show me ___ computer?",
        "options": [
            "a",
            "an",
            "the",
            "—"
        ],
        "answer": "a",
        "explanation": "\"computer\" একটি সাধারণ গণনযোগ্য একবচন নাম এবং এর প্রথম উচ্চারণ অনুযায়ী \"a\" বসে।",
        "banglaRule": "সাধারণ ব্যঞ্জনবর্ণ উচ্চারণের আগে a এবং স্বরবর্ণ উচ্চারণের আগে an বসে।"
    },
    {
        "id": "art_e_24",
        "topic": "Articles",
        "difficulty": "easy",
        "sentence": "Fahim bought ___ author yesterday.",
        "options": [
            "a",
            "an",
            "the",
            "—"
        ],
        "answer": "an",
        "explanation": "\"author\" একটি সাধারণ গণনযোগ্য একবচন নাম এবং এর প্রথম উচ্চারণ অনুযায়ী \"an\" বসে।",
        "banglaRule": "সাধারণ ব্যঞ্জনবর্ণ উচ্চারণের আগে a এবং স্বরবর্ণ উচ্চারণের আগে an বসে।"
    },
    {
        "id": "art_e_25",
        "topic": "Articles",
        "difficulty": "easy",
        "sentence": "Ayesha wants to buy ___ bike.",
        "options": [
            "a",
            "an",
            "the",
            "—"
        ],
        "answer": "a",
        "explanation": "\"bike\" একটি সাধারণ গণনযোগ্য একবচন নাম এবং এর প্রথম উচ্চারণ অনুযায়ী \"a\" বসে।",
        "banglaRule": "সাধারণ ব্যঞ্জনবর্ণ উচ্চারণের আগে a এবং স্বরবর্ণ উচ্চারণের আগে an বসে।"
    },
    {
        "id": "art_e_26",
        "topic": "Articles",
        "difficulty": "easy",
        "sentence": "There is ___ engineer on the table.",
        "options": [
            "a",
            "an",
            "the",
            "—"
        ],
        "answer": "an",
        "explanation": "\"engineer\" একটি সাধারণ গণনযোগ্য একবচন নাম এবং এর প্রথম উচ্চারণ অনুযায়ী \"an\" বসে।",
        "banglaRule": "সাধারণ ব্যঞ্জনবর্ণ উচ্চারণের আগে a এবং স্বরবর্ণ উচ্চারণের আগে an বসে।"
    },
    {
        "id": "art_e_27",
        "topic": "Articles",
        "difficulty": "easy",
        "sentence": "Could you show me ___ river?",
        "options": [
            "a",
            "an",
            "the",
            "—"
        ],
        "answer": "a",
        "explanation": "\"river\" একটি সাধারণ গণনযোগ্য একবচন নাম এবং এর প্রথম উচ্চারণ অনুযায়ী \"a\" বসে।",
        "banglaRule": "সাধারণ ব্যঞ্জনবর্ণ উচ্চারণের আগে a এবং স্বরবর্ণ উচ্চারণের আগে an বসে।"
    },
    {
        "id": "art_e_28",
        "topic": "Articles",
        "difficulty": "easy",
        "sentence": "Jessica bought ___ inspector yesterday.",
        "options": [
            "a",
            "an",
            "the",
            "—"
        ],
        "answer": "an",
        "explanation": "\"inspector\" একটি সাধারণ গণনযোগ্য একবচন নাম এবং এর প্রথম উচ্চারণ অনুযায়ী \"an\" বসে।",
        "banglaRule": "সাধারণ ব্যঞ্জনবর্ণ উচ্চারণের আগে a এবং স্বরবর্ণ উচ্চারণের আগে an বসে।"
    },
    {
        "id": "art_e_29",
        "topic": "Articles",
        "difficulty": "easy",
        "sentence": "Alex wants to buy ___ teacher.",
        "options": [
            "a",
            "an",
            "the",
            "—"
        ],
        "answer": "a",
        "explanation": "\"teacher\" একটি সাধারণ গণনযোগ্য একবচন নাম এবং এর প্রথম উচ্চারণ অনুযায়ী \"a\" বসে।",
        "banglaRule": "সাধারণ ব্যঞ্জনবর্ণ উচ্চারণের আগে a এবং স্বরবর্ণ উচ্চারণের আগে an বসে।"
    },
    {
        "id": "art_e_30",
        "topic": "Articles",
        "difficulty": "easy",
        "sentence": "Ryan waited for ___ honest person.",
        "options": [
            "a",
            "an",
            "the",
            "—"
        ],
        "answer": "an",
        "explanation": "\"honest person\"-এর উচ্চারণ ভাওয়েল sound (আ/এ) দিয়ে শুরু, তাই \"an\" বসে।",
        "banglaRule": "H সাইলেন্ট থাকলে বা উচ্চারণ ভাওয়েল sound হলে \"an\" বসে।"
    },
    {
        "id": "art_e_31",
        "topic": "Articles",
        "difficulty": "easy",
        "sentence": "Could you show me ___ lawyer?",
        "options": [
            "a",
            "an",
            "the",
            "—"
        ],
        "answer": "a",
        "explanation": "\"lawyer\" একটি সাধারণ গণনযোগ্য একবচন নাম এবং এর প্রথম উচ্চারণ অনুযায়ী \"a\" বসে।",
        "banglaRule": "সাধারণ ব্যঞ্জনবর্ণ উচ্চারণের আগে a এবং স্বরবর্ণ উচ্চারণের আগে an বসে।"
    },
    {
        "id": "art_e_32",
        "topic": "Articles",
        "difficulty": "easy",
        "sentence": "Rahim bought ___ apple yesterday.",
        "options": [
            "a",
            "an",
            "the",
            "—"
        ],
        "answer": "an",
        "explanation": "\"apple\" একটি সাধারণ গণনযোগ্য একবচন নাম এবং এর প্রথম উচ্চারণ অনুযায়ী \"an\" বসে।",
        "banglaRule": "সাধারণ ব্যঞ্জনবর্ণ উচ্চারণের আগে a এবং স্বরবর্ণ উচ্চারণের আগে an বসে।"
    },
    {
        "id": "art_e_33",
        "topic": "Articles",
        "difficulty": "easy",
        "sentence": "Karim is ___ university student.",
        "options": [
            "a",
            "an",
            "the",
            "—"
        ],
        "answer": "a",
        "explanation": "\"university student\"-এর প্রথম অক্ষর ভাওয়েল হলেও উচ্চারণ \"ইউ\" বা \"ওয়া\"-এর মতো, তাই \"a\" বসে।",
        "banglaRule": "U বা E-এর উচ্চারণ \"ইউ\" (yu) এবং O-এর উচ্চারণ \"ওয়া\" (wa) হলে a বসে।"
    },
    {
        "id": "art_e_34",
        "topic": "Articles",
        "difficulty": "easy",
        "sentence": "There is ___ umbrella on the table.",
        "options": [
            "a",
            "an",
            "the",
            "—"
        ],
        "answer": "an",
        "explanation": "\"umbrella\" একটি সাধারণ গণনযোগ্য একবচন নাম এবং এর প্রথম উচ্চারণ অনুযায়ী \"an\" বসে।",
        "banglaRule": "সাধারণ ব্যঞ্জনবর্ণ উচ্চারণের আগে a এবং স্বরবর্ণ উচ্চারণের আগে an বসে।"
    },
    {
        "id": "art_e_35",
        "topic": "Articles",
        "difficulty": "easy",
        "sentence": "Emily is ___ one-eyed man.",
        "options": [
            "a",
            "an",
            "the",
            "—"
        ],
        "answer": "a",
        "explanation": "\"one-eyed man\"-এর প্রথম অক্ষর ভাওয়েল হলেও উচ্চারণ \"ইউ\" বা \"ওয়া\"-এর মতো, তাই \"a\" বসে।",
        "banglaRule": "U বা E-এর উচ্চারণ \"ইউ\" (yu) এবং O-এর উচ্চারণ \"ওয়া\" (wa) হলে a বসে।"
    },
    {
        "id": "art_e_36",
        "topic": "Articles",
        "difficulty": "easy",
        "sentence": "David bought ___ elephant yesterday.",
        "options": [
            "a",
            "an",
            "the",
            "—"
        ],
        "answer": "an",
        "explanation": "\"elephant\" একটি সাধারণ গণনযোগ্য একবচন নাম এবং এর প্রথম উচ্চারণ অনুযায়ী \"an\" বসে।",
        "banglaRule": "সাধারণ ব্যঞ্জনবর্ণ উচ্চারণের আগে a এবং স্বরবর্ণ উচ্চারণের আগে an বসে।"
    },
    {
        "id": "art_e_37",
        "topic": "Articles",
        "difficulty": "easy",
        "sentence": "Sumi wants to buy ___ cat.",
        "options": [
            "a",
            "an",
            "the",
            "—"
        ],
        "answer": "a",
        "explanation": "\"cat\" একটি সাধারণ গণনযোগ্য একবচন নাম এবং এর প্রথম উচ্চারণ অনুযায়ী \"a\" বসে।",
        "banglaRule": "সাধারণ ব্যঞ্জনবর্ণ উচ্চারণের আগে a এবং স্বরবর্ণ উচ্চারণের আগে an বসে।"
    },
    {
        "id": "art_e_38",
        "topic": "Articles",
        "difficulty": "easy",
        "sentence": "There is ___ artist on the table.",
        "options": [
            "a",
            "an",
            "the",
            "—"
        ],
        "answer": "an",
        "explanation": "\"artist\" একটি সাধারণ গণনযোগ্য একবচন নাম এবং এর প্রথম উচ্চারণ অনুযায়ী \"an\" বসে।",
        "banglaRule": "সাধারণ ব্যঞ্জনবর্ণ উচ্চারণের আগে a এবং স্বরবর্ণ উচ্চারণের আগে an বসে।"
    },
    {
        "id": "art_e_39",
        "topic": "Articles",
        "difficulty": "easy",
        "sentence": "Could you show me ___ book?",
        "options": [
            "a",
            "an",
            "the",
            "—"
        ],
        "answer": "a",
        "explanation": "\"book\" একটি সাধারণ গণনযোগ্য একবচন নাম এবং এর প্রথম উচ্চারণ অনুযায়ী \"a\" বসে।",
        "banglaRule": "সাধারণ ব্যঞ্জনবর্ণ উচ্চারণের আগে a এবং স্বরবর্ণ উচ্চারণের আগে an বসে।"
    },
    {
        "id": "art_e_40",
        "topic": "Articles",
        "difficulty": "easy",
        "sentence": "Fahim bought ___ author yesterday.",
        "options": [
            "a",
            "an",
            "the",
            "—"
        ],
        "answer": "an",
        "explanation": "\"author\" একটি সাধারণ গণনযোগ্য একবচন নাম এবং এর প্রথম উচ্চারণ অনুযায়ী \"an\" বসে।",
        "banglaRule": "সাধারণ ব্যঞ্জনবর্ণ উচ্চারণের আগে a এবং স্বরবর্ণ উচ্চারণের আগে an বসে।"
    },
    {
        "id": "art_e_41",
        "topic": "Articles",
        "difficulty": "easy",
        "sentence": "Ayesha wants to buy ___ computer.",
        "options": [
            "a",
            "an",
            "the",
            "—"
        ],
        "answer": "a",
        "explanation": "\"computer\" একটি সাধারণ গণনযোগ্য একবচন নাম এবং এর প্রথম উচ্চারণ অনুযায়ী \"a\" বসে।",
        "banglaRule": "সাধারণ ব্যঞ্জনবর্ণ উচ্চারণের আগে a এবং স্বরবর্ণ উচ্চারণের আগে an বসে।"
    },
    {
        "id": "art_e_42",
        "topic": "Articles",
        "difficulty": "easy",
        "sentence": "There is ___ engineer on the table.",
        "options": [
            "a",
            "an",
            "the",
            "—"
        ],
        "answer": "an",
        "explanation": "\"engineer\" একটি সাধারণ গণনযোগ্য একবচন নাম এবং এর প্রথম উচ্চারণ অনুযায়ী \"an\" বসে।",
        "banglaRule": "সাধারণ ব্যঞ্জনবর্ণ উচ্চারণের আগে a এবং স্বরবর্ণ উচ্চারণের আগে an বসে।"
    },
    {
        "id": "art_e_43",
        "topic": "Articles",
        "difficulty": "easy",
        "sentence": "Could you show me ___ bike?",
        "options": [
            "a",
            "an",
            "the",
            "—"
        ],
        "answer": "a",
        "explanation": "\"bike\" একটি সাধারণ গণনযোগ্য একবচন নাম এবং এর প্রথম উচ্চারণ অনুযায়ী \"a\" বসে।",
        "banglaRule": "সাধারণ ব্যঞ্জনবর্ণ উচ্চারণের আগে a এবং স্বরবর্ণ উচ্চারণের আগে an বসে।"
    },
    {
        "id": "art_e_44",
        "topic": "Articles",
        "difficulty": "easy",
        "sentence": "Jessica bought ___ inspector yesterday.",
        "options": [
            "a",
            "an",
            "the",
            "—"
        ],
        "answer": "an",
        "explanation": "\"inspector\" একটি সাধারণ গণনযোগ্য একবচন নাম এবং এর প্রথম উচ্চারণ অনুযায়ী \"an\" বসে।",
        "banglaRule": "সাধারণ ব্যঞ্জনবর্ণ উচ্চারণের আগে a এবং স্বরবর্ণ উচ্চারণের আগে an বসে।"
    },
    {
        "id": "art_e_45",
        "topic": "Articles",
        "difficulty": "easy",
        "sentence": "Alex wants to buy ___ river.",
        "options": [
            "a",
            "an",
            "the",
            "—"
        ],
        "answer": "a",
        "explanation": "\"river\" একটি সাধারণ গণনযোগ্য একবচন নাম এবং এর প্রথম উচ্চারণ অনুযায়ী \"a\" বসে।",
        "banglaRule": "সাধারণ ব্যঞ্জনবর্ণ উচ্চারণের আগে a এবং স্বরবর্ণ উচ্চারণের আগে an বসে।"
    },
    {
        "id": "art_e_46",
        "topic": "Articles",
        "difficulty": "easy",
        "sentence": "Ryan waited for ___ honest person.",
        "options": [
            "a",
            "an",
            "the",
            "—"
        ],
        "answer": "an",
        "explanation": "\"honest person\"-এর উচ্চারণ ভাওয়েল sound (আ/এ) দিয়ে শুরু, তাই \"an\" বসে।",
        "banglaRule": "H সাইলেন্ট থাকলে বা উচ্চারণ ভাওয়েল sound হলে \"an\" বসে।"
    },
    {
        "id": "art_e_47",
        "topic": "Articles",
        "difficulty": "easy",
        "sentence": "Could you show me ___ teacher?",
        "options": [
            "a",
            "an",
            "the",
            "—"
        ],
        "answer": "a",
        "explanation": "\"teacher\" একটি সাধারণ গণনযোগ্য একবচন নাম এবং এর প্রথম উচ্চারণ অনুযায়ী \"a\" বসে।",
        "banglaRule": "সাধারণ ব্যঞ্জনবর্ণ উচ্চারণের আগে a এবং স্বরবর্ণ উচ্চারণের আগে an বসে।"
    },
    {
        "id": "art_e_48",
        "topic": "Articles",
        "difficulty": "easy",
        "sentence": "Rahim bought ___ apple yesterday.",
        "options": [
            "a",
            "an",
            "the",
            "—"
        ],
        "answer": "an",
        "explanation": "\"apple\" একটি সাধারণ গণনযোগ্য একবচন নাম এবং এর প্রথম উচ্চারণ অনুযায়ী \"an\" বসে।",
        "banglaRule": "সাধারণ ব্যঞ্জনবর্ণ উচ্চারণের আগে a এবং স্বরবর্ণ উচ্চারণের আগে an বসে।"
    },
    {
        "id": "art_e_49",
        "topic": "Articles",
        "difficulty": "easy",
        "sentence": "Karim wants to buy ___ lawyer.",
        "options": [
            "a",
            "an",
            "the",
            "—"
        ],
        "answer": "a",
        "explanation": "\"lawyer\" একটি সাধারণ গণনযোগ্য একবচন নাম এবং এর প্রথম উচ্চারণ অনুযায়ী \"a\" বসে।",
        "banglaRule": "সাধারণ ব্যঞ্জনবর্ণ উচ্চারণের আগে a এবং স্বরবর্ণ উচ্চারণের আগে an বসে।"
    },
    {
        "id": "art_e_50",
        "topic": "Articles",
        "difficulty": "easy",
        "sentence": "There is ___ umbrella on the table.",
        "options": [
            "a",
            "an",
            "the",
            "—"
        ],
        "answer": "an",
        "explanation": "\"umbrella\" একটি সাধারণ গণনযোগ্য একবচন নাম এবং এর প্রথম উচ্চারণ অনুযায়ী \"an\" বসে।",
        "banglaRule": "সাধারণ ব্যঞ্জনবর্ণ উচ্চারণের আগে a এবং স্বরবর্ণ উচ্চারণের আগে an বসে।"
    },
    {
        "id": "art_e_51",
        "topic": "Articles",
        "difficulty": "easy",
        "sentence": "Emily is ___ university student.",
        "options": [
            "a",
            "an",
            "the",
            "—"
        ],
        "answer": "a",
        "explanation": "\"university student\"-এর প্রথম অক্ষর ভাওয়েল হলেও উচ্চারণ \"ইউ\" বা \"ওয়া\"-এর মতো, তাই \"a\" বসে।",
        "banglaRule": "U বা E-এর উচ্চারণ \"ইউ\" (yu) এবং O-এর উচ্চারণ \"ওয়া\" (wa) হলে a বসে।"
    },
    {
        "id": "art_e_52",
        "topic": "Articles",
        "difficulty": "easy",
        "sentence": "David bought ___ elephant yesterday.",
        "options": [
            "a",
            "an",
            "the",
            "—"
        ],
        "answer": "an",
        "explanation": "\"elephant\" একটি সাধারণ গণনযোগ্য একবচন নাম এবং এর প্রথম উচ্চারণ অনুযায়ী \"an\" বসে।",
        "banglaRule": "সাধারণ ব্যঞ্জনবর্ণ উচ্চারণের আগে a এবং স্বরবর্ণ উচ্চারণের আগে an বসে।"
    },
    {
        "id": "art_e_53",
        "topic": "Articles",
        "difficulty": "easy",
        "sentence": "Sumi is ___ one-eyed man.",
        "options": [
            "a",
            "an",
            "the",
            "—"
        ],
        "answer": "a",
        "explanation": "\"one-eyed man\"-এর প্রথম অক্ষর ভাওয়েল হলেও উচ্চারণ \"ইউ\" বা \"ওয়া\"-এর মতো, তাই \"a\" বসে।",
        "banglaRule": "U বা E-এর উচ্চারণ \"ইউ\" (yu) এবং O-এর উচ্চারণ \"ওয়া\" (wa) হলে a বসে।"
    },
    {
        "id": "art_e_54",
        "topic": "Articles",
        "difficulty": "easy",
        "sentence": "There is ___ artist on the table.",
        "options": [
            "a",
            "an",
            "the",
            "—"
        ],
        "answer": "an",
        "explanation": "\"artist\" একটি সাধারণ গণনযোগ্য একবচন নাম এবং এর প্রথম উচ্চারণ অনুযায়ী \"an\" বসে।",
        "banglaRule": "সাধারণ ব্যঞ্জনবর্ণ উচ্চারণের আগে a এবং স্বরবর্ণ উচ্চারণের আগে an বসে।"
    },
    {
        "id": "art_e_55",
        "topic": "Articles",
        "difficulty": "easy",
        "sentence": "Could you show me ___ cat?",
        "options": [
            "a",
            "an",
            "the",
            "—"
        ],
        "answer": "a",
        "explanation": "\"cat\" একটি সাধারণ গণনযোগ্য একবচন নাম এবং এর প্রথম উচ্চারণ অনুযায়ী \"a\" বসে।",
        "banglaRule": "সাধারণ ব্যঞ্জনবর্ণ উচ্চারণের আগে a এবং স্বরবর্ণ উচ্চারণের আগে an বসে।"
    },
    {
        "id": "art_e_56",
        "topic": "Articles",
        "difficulty": "easy",
        "sentence": "Fahim bought ___ author yesterday.",
        "options": [
            "a",
            "an",
            "the",
            "—"
        ],
        "answer": "an",
        "explanation": "\"author\" একটি সাধারণ গণনযোগ্য একবচন নাম এবং এর প্রথম উচ্চারণ অনুযায়ী \"an\" বসে।",
        "banglaRule": "সাধারণ ব্যঞ্জনবর্ণ উচ্চারণের আগে a এবং স্বরবর্ণ উচ্চারণের আগে an বসে।"
    },
    {
        "id": "art_e_57",
        "topic": "Articles",
        "difficulty": "easy",
        "sentence": "Ayesha wants to buy ___ book.",
        "options": [
            "a",
            "an",
            "the",
            "—"
        ],
        "answer": "a",
        "explanation": "\"book\" একটি সাধারণ গণনযোগ্য একবচন নাম এবং এর প্রথম উচ্চারণ অনুযায়ী \"a\" বসে।",
        "banglaRule": "সাধারণ ব্যঞ্জনবর্ণ উচ্চারণের আগে a এবং স্বরবর্ণ উচ্চারণের আগে an বসে।"
    },
    {
        "id": "art_e_58",
        "topic": "Articles",
        "difficulty": "easy",
        "sentence": "There is ___ engineer on the table.",
        "options": [
            "a",
            "an",
            "the",
            "—"
        ],
        "answer": "an",
        "explanation": "\"engineer\" একটি সাধারণ গণনযোগ্য একবচন নাম এবং এর প্রথম উচ্চারণ অনুযায়ী \"an\" বসে।",
        "banglaRule": "সাধারণ ব্যঞ্জনবর্ণ উচ্চারণের আগে a এবং স্বরবর্ণ উচ্চারণের আগে an বসে।"
    },
    {
        "id": "art_e_59",
        "topic": "Articles",
        "difficulty": "easy",
        "sentence": "Could you show me ___ computer?",
        "options": [
            "a",
            "an",
            "the",
            "—"
        ],
        "answer": "a",
        "explanation": "\"computer\" একটি সাধারণ গণনযোগ্য একবচন নাম এবং এর প্রথম উচ্চারণ অনুযায়ী \"a\" বসে।",
        "banglaRule": "সাধারণ ব্যঞ্জনবর্ণ উচ্চারণের আগে a এবং স্বরবর্ণ উচ্চারণের আগে an বসে।"
    },
    {
        "id": "art_e_60",
        "topic": "Articles",
        "difficulty": "easy",
        "sentence": "Jessica bought ___ inspector yesterday.",
        "options": [
            "a",
            "an",
            "the",
            "—"
        ],
        "answer": "an",
        "explanation": "\"inspector\" একটি সাধারণ গণনযোগ্য একবচন নাম এবং এর প্রথম উচ্চারণ অনুযায়ী \"an\" বসে।",
        "banglaRule": "সাধারণ ব্যঞ্জনবর্ণ উচ্চারণের আগে a এবং স্বরবর্ণ উচ্চারণের আগে an বসে।"
    },
    {
        "id": "art_m_1",
        "topic": "Articles",
        "difficulty": "medium",
        "sentence": "___ Himalayas are in Asia.",
        "options": [
            "A",
            "An",
            "The",
            "—"
        ],
        "answer": "The",
        "explanation": "পর্বতমালার নামের আগে \"the\" বসে।",
        "banglaRule": "পর্বতমালা (Himalayas), ocean, river-এর আগে \"the\" বসে।"
    },
    {
        "id": "art_m_2",
        "topic": "Articles",
        "difficulty": "medium",
        "sentence": "___ Alps are in Asia.",
        "options": [
            "A",
            "An",
            "The",
            "—"
        ],
        "answer": "The",
        "explanation": "পর্বতমালার নামের আগে \"the\" বসে।",
        "banglaRule": "পর্বতমালা (Himalayas), ocean, river-এর আগে \"the\" বসে।"
    },
    {
        "id": "art_m_3",
        "topic": "Articles",
        "difficulty": "medium",
        "sentence": "___ Ganges is a sacred river.",
        "options": [
            "A",
            "An",
            "The",
            "—"
        ],
        "answer": "The",
        "explanation": "নদীর নামের আগে সবসময় \"the\" বসে।",
        "banglaRule": "নদী, সাগর, উপসাগরের নামের আগে \"the\" বসে।"
    },
    {
        "id": "art_m_4",
        "topic": "Articles",
        "difficulty": "medium",
        "sentence": "___ Padma is a sacred river.",
        "options": [
            "A",
            "An",
            "The",
            "—"
        ],
        "answer": "The",
        "explanation": "নদীর নামের আগে সবসময় \"the\" বসে।",
        "banglaRule": "নদী, সাগর, উপসাগরের নামের আগে \"the\" বসে।"
    },
    {
        "id": "art_m_5",
        "topic": "Articles",
        "difficulty": "medium",
        "sentence": "___ USA is a developed nation.",
        "options": [
            "A",
            "An",
            "The",
            "—"
        ],
        "answer": "The",
        "explanation": "যুক্তরাষ্ট্র বা সংক্ষিপ্ত দেশের নামের আগে \"the\" বসে।",
        "banglaRule": "USA, UK, UAE, Netherlands-এর আগে \"the\" বসে।"
    },
    {
        "id": "art_m_6",
        "topic": "Articles",
        "difficulty": "medium",
        "sentence": "___ UK is a developed nation.",
        "options": [
            "A",
            "An",
            "The",
            "—"
        ],
        "answer": "The",
        "explanation": "যুক্তরাষ্ট্র বা সংক্ষিপ্ত দেশের নামের আগে \"the\" বসে।",
        "banglaRule": "USA, UK, UAE, Netherlands-এর আগে \"the\" বসে।"
    },
    {
        "id": "art_m_7",
        "topic": "Articles",
        "difficulty": "medium",
        "sentence": "She plays ___ piano beautifully.",
        "options": [
            "a",
            "an",
            "the",
            "—"
        ],
        "answer": "the",
        "explanation": "বাদ্যযন্ত্র বাজানোর ক্ষেত্রে \"the\" বসে।",
        "banglaRule": "Play + the + musical instrument।"
    },
    {
        "id": "art_m_8",
        "topic": "Articles",
        "difficulty": "medium",
        "sentence": "She plays ___ guitar beautifully.",
        "options": [
            "a",
            "an",
            "the",
            "—"
        ],
        "answer": "the",
        "explanation": "বাদ্যযন্ত্র বাজানোর ক্ষেত্রে \"the\" বসে।",
        "banglaRule": "Play + the + musical instrument।"
    },
    {
        "id": "art_m_9",
        "topic": "Articles",
        "difficulty": "medium",
        "sentence": "This is ___ best book in the library.",
        "options": [
            "a",
            "an",
            "the",
            "—"
        ],
        "answer": "the",
        "explanation": "সুপারলেটিভ ডিগ্রির আগে \"the\" বসে।",
        "banglaRule": "Superlative adjective (best, tallest)-এর আগে \"the\" বসে।"
    },
    {
        "id": "art_m_10",
        "topic": "Articles",
        "difficulty": "medium",
        "sentence": "This is ___ greatest book in the library.",
        "options": [
            "a",
            "an",
            "the",
            "—"
        ],
        "answer": "the",
        "explanation": "সুপারলেটিভ ডিগ্রির আগে \"the\" বসে।",
        "banglaRule": "Superlative adjective (best, tallest)-এর আগে \"the\" বসে।"
    },
    {
        "id": "art_m_11",
        "topic": "Articles",
        "difficulty": "medium",
        "sentence": "___ water of this well is sweet.",
        "options": [
            "A",
            "An",
            "The",
            "—"
        ],
        "answer": "The",
        "explanation": "নির্দিষ্ট কোনো কিছুর পানি বোঝাতে \"the\" বসে।",
        "banglaRule": "Uncountable noun-কে নির্দিষ্ট করলে \"the\" বসে।"
    },
    {
        "id": "art_m_12",
        "topic": "Articles",
        "difficulty": "medium",
        "sentence": "___ water of this river is sweet.",
        "options": [
            "A",
            "An",
            "The",
            "—"
        ],
        "answer": "The",
        "explanation": "নির্দিষ্ট কোনো কিছুর পানি বোঝাতে \"the\" বসে।",
        "banglaRule": "Uncountable noun-কে নির্দিষ্ট করলে \"the\" বসে।"
    },
    {
        "id": "art_m_13",
        "topic": "Articles",
        "difficulty": "medium",
        "sentence": "I saw ___ army marching yesterday.",
        "options": [
            "a",
            "an",
            "the",
            "—"
        ],
        "answer": "the",
        "explanation": "সেনাবাহিনীকে সামগ্রিকভাবে বোঝাতে \"the\" বসে।",
        "banglaRule": "নির্দিষ্ট বাহিনী বা সংস্থার নামের আগে \"the\" বসে।"
    },
    {
        "id": "art_m_14",
        "topic": "Articles",
        "difficulty": "medium",
        "sentence": "I saw ___ police marching yesterday.",
        "options": [
            "a",
            "an",
            "the",
            "—"
        ],
        "answer": "the",
        "explanation": "সেনাবাহিনীকে সামগ্রিকভাবে বোঝাতে \"the\" বসে।",
        "banglaRule": "নির্দিষ্ট বাহিনী বা সংস্থার নামের আগে \"the\" বসে।"
    },
    {
        "id": "art_m_15",
        "topic": "Articles",
        "difficulty": "medium",
        "sentence": "___ brave deserve the fair.",
        "options": [
            "A",
            "An",
            "The",
            "—"
        ],
        "answer": "The",
        "explanation": "বিশেষণকে বহুবচন বিশেষ্য হিসেবে ব্যবহার করলে \"the\" বসে।",
        "banglaRule": "The + Adjective = সমগ্র জাতি (the brave, the rich, the poor)।"
    },
    {
        "id": "art_m_16",
        "topic": "Articles",
        "difficulty": "medium",
        "sentence": "___ honest deserve the fair.",
        "options": [
            "A",
            "An",
            "The",
            "—"
        ],
        "answer": "The",
        "explanation": "বিশেষণকে বহুবচন বিশেষ্য হিসেবে ব্যবহার করলে \"the\" বসে।",
        "banglaRule": "The + Adjective = সমগ্র জাতি (the brave, the rich, the poor)।"
    },
    {
        "id": "art_m_17",
        "topic": "Articles",
        "difficulty": "medium",
        "sentence": "He reads ___ Daily Ittefaq every day.",
        "options": [
            "a",
            "an",
            "the",
            "—"
        ],
        "answer": "the",
        "explanation": "সংবাদপত্রের নামের আগে \"the\" বসে।",
        "banglaRule": "সংবাদপত্র বা বিখ্যাত বইয়ের নামের আগে \"the\" বসে।"
    },
    {
        "id": "art_m_18",
        "topic": "Articles",
        "difficulty": "medium",
        "sentence": "He reads ___ Prothom Alo every day.",
        "options": [
            "a",
            "an",
            "the",
            "—"
        ],
        "answer": "the",
        "explanation": "সংবাদপত্রের নামের আগে \"the\" বসে।",
        "banglaRule": "সংবাদপত্র বা বিখ্যাত বইয়ের নামের আগে \"the\" বসে।"
    },
    {
        "id": "art_m_19",
        "topic": "Articles",
        "difficulty": "medium",
        "sentence": "___ moon shines at night.",
        "options": [
            "A",
            "An",
            "The",
            "—"
        ],
        "answer": "The",
        "explanation": "চন্দ্র বা সূর্যের মতো অনন্য জিনিসের আগে \"the\" বসে।",
        "banglaRule": "চন্দ্র, সূর্য, পৃথিবী, আকাশ-এর নামের আগে \"the\" বসে।"
    },
    {
        "id": "art_m_20",
        "topic": "Articles",
        "difficulty": "medium",
        "sentence": "___ sun shines at night.",
        "options": [
            "A",
            "An",
            "The",
            "—"
        ],
        "answer": "The",
        "explanation": "চন্দ্র বা সূর্যের মতো অনন্য জিনিসের আগে \"the\" বসে।",
        "banglaRule": "চন্দ্র, সূর্য, পৃথিবী, আকাশ-এর নামের আগে \"the\" বসে।"
    },
    {
        "id": "art_h_1",
        "topic": "Articles",
        "difficulty": "hard",
        "sentence": "___ gold in this ring is pure.",
        "options": [
            "A",
            "An",
            "The",
            "—"
        ],
        "answer": "The",
        "explanation": "বস্তুবাচক নাম সাধারণত আর্টিকল নেয় না, কিন্তু নির্দিষ্ট করলে \"the\" বসে।",
        "banglaRule": "Material noun নির্দিষ্ট করলে \"the\" বসে।"
    },
    {
        "id": "art_h_2",
        "topic": "Articles",
        "difficulty": "hard",
        "sentence": "He goes to ___ church on Sundays.",
        "options": [
            "a",
            "an",
            "the",
            "—"
        ],
        "answer": "—",
        "explanation": "মূল উদ্দেশ্যে স্কুল/চার্চ/হাসপাতালে গেলে আর্টিকল বসে না।",
        "banglaRule": "School, Church, Hospital, Bed-এ মূল উদ্দেশ্যে গেলে no article (—)।"
    },
    {
        "id": "art_h_3",
        "topic": "Articles",
        "difficulty": "hard",
        "sentence": "___ breakfast we had today was delicious.",
        "options": [
            "A",
            "An",
            "The",
            "—"
        ],
        "answer": "The",
        "explanation": "নির্দিষ্ট সকালের খাবারের কথা বলা হয়েছে, তাই \"the\" বসে।",
        "banglaRule": "খাবারের নামের আগে সাধারণত বসে না, কিন্তু নির্দিষ্ট করলে \"the\" বসে।"
    },
    {
        "id": "art_h_4",
        "topic": "Articles",
        "difficulty": "hard",
        "sentence": "She is studying ___ English literature.",
        "options": [
            "a",
            "an",
            "the",
            "—"
        ],
        "answer": "—",
        "explanation": "ভাষার বা বিষয়ের নামের আগে কোনো আর্টিকল বসে না।",
        "banglaRule": "ভাষা বা বিষয়ের (English, Mathematics) নামের আগে no article (—)।"
    },
    {
        "id": "art_h_5",
        "topic": "Articles",
        "difficulty": "hard",
        "sentence": "He is ___ Newton of our age.",
        "options": [
            "a",
            "an",
            "the",
            "—"
        ],
        "answer": "the",
        "explanation": "কারো সাথে তুলনা করে উপাধি দিলে \"the\" বসে।",
        "banglaRule": "Proper noun-কে তুলনা করলে তার আগে \"the\" বসে।"
    },
    {
        "id": "art_h_6",
        "topic": "Articles",
        "difficulty": "hard",
        "sentence": "___ wisdom of Solomon is famous.",
        "options": [
            "A",
            "An",
            "The",
            "—"
        ],
        "answer": "The",
        "explanation": "নির্দিষ্ট কারো জ্ঞান বা গুণ বোঝালে \"the\" বসে।",
        "banglaRule": "Abstract noun + of = the + abstract noun + of।"
    },
    {
        "id": "art_h_7",
        "topic": "Articles",
        "difficulty": "hard",
        "sentence": "They travelled by ___ air.",
        "options": [
            "a",
            "an",
            "the",
            "—"
        ],
        "answer": "—",
        "explanation": "ভ্রমণের মাধ্যমের আগে আর্টিকল বসে না।",
        "banglaRule": "By + travel medium (by bus, by train, by air) = no article।"
    },
    {
        "id": "art_h_8",
        "topic": "Articles",
        "difficulty": "hard",
        "sentence": "___ dinner will be served at 8 PM.",
        "options": [
            "A",
            "An",
            "The",
            "—"
        ],
        "answer": "—",
        "explanation": "সাধারণ রাতের খাবারের কথা বলা হয়েছে, তাই নো আর্টিকল।",
        "banglaRule": "খাবারের নামের আগে নো আর্টিকল (—)।"
    },
    {
        "id": "art_h_9",
        "topic": "Articles",
        "difficulty": "hard",
        "sentence": "He was elected ___ chairman.",
        "options": [
            "a",
            "an",
            "the",
            "—"
        ],
        "answer": "—",
        "explanation": "একক পদের ক্ষেত্রে Complement হিসেবে আর্টিকল বসে না।",
        "banglaRule": "Elected/Selected + post = no article।"
    },
    {
        "id": "art_h_10",
        "topic": "Articles",
        "difficulty": "hard",
        "sentence": "___ more you read, ___ more you learn.",
        "options": [
            "The / the",
            "A / a",
            "The / a",
            "— / —"
        ],
        "answer": "The / the",
        "explanation": "অনুপাত বৃদ্ধিতে দুটিতেই \"the\" বসে।",
        "banglaRule": "Double comparative-এ দুটিতেই \"the\" বসে।"
    },
    {
        "id": "prep_e_1",
        "topic": "Prepositions",
        "difficulty": "easy",
        "sentence": "The wedding is ___ Tuesday.",
        "options": [
            "in",
            "on",
            "at",
            "by"
        ],
        "answer": "on",
        "explanation": "দিনের নামের আগে সবসময় \"on\" বসে।",
        "banglaRule": "দিনের নাম এবং নির্দিষ্ট তারিখের আগে \"on\" বসে।"
    },
    {
        "id": "prep_e_2",
        "topic": "Prepositions",
        "difficulty": "easy",
        "sentence": "The flight departs ___ 8:30.",
        "options": [
            "in",
            "on",
            "at",
            "with"
        ],
        "answer": "at",
        "explanation": "নির্দিষ্ট ঘড়ির সময়ের আগে সবসময় \"at\" বসে।",
        "banglaRule": "নির্দিষ্ট সময়ের আগে \"at\" বসে।"
    },
    {
        "id": "prep_e_3",
        "topic": "Prepositions",
        "difficulty": "easy",
        "sentence": "Emily graduated ___ 2022.",
        "options": [
            "in",
            "on",
            "at",
            "for"
        ],
        "answer": "in",
        "explanation": "বছরের নামের আগে সবসময় \"in\" বসে।",
        "banglaRule": "বছর, মাস বা ঋতুর আগে \"in\" বসে।"
    },
    {
        "id": "prep_e_4",
        "topic": "Prepositions",
        "difficulty": "easy",
        "sentence": "The wedding is ___ Friday.",
        "options": [
            "in",
            "on",
            "at",
            "by"
        ],
        "answer": "on",
        "explanation": "দিনের নামের আগে সবসময় \"on\" বসে।",
        "banglaRule": "দিনের নাম এবং নির্দিষ্ট তারিখের আগে \"on\" বসে।"
    },
    {
        "id": "prep_e_5",
        "topic": "Prepositions",
        "difficulty": "easy",
        "sentence": "The flight departs ___ 6 o'clock.",
        "options": [
            "in",
            "on",
            "at",
            "with"
        ],
        "answer": "at",
        "explanation": "নির্দিষ্ট ঘড়ির সময়ের আগে সবসময় \"at\" বসে।",
        "banglaRule": "নির্দিষ্ট সময়ের আগে \"at\" বসে।"
    },
    {
        "id": "prep_e_6",
        "topic": "Prepositions",
        "difficulty": "easy",
        "sentence": "Lisa graduated ___ 2018.",
        "options": [
            "in",
            "on",
            "at",
            "for"
        ],
        "answer": "in",
        "explanation": "বছরের নামের আগে সবসময় \"in\" বসে।",
        "banglaRule": "বছর, মাস বা ঋতুর আগে \"in\" বসে।"
    },
    {
        "id": "prep_e_7",
        "topic": "Prepositions",
        "difficulty": "easy",
        "sentence": "The wedding is ___ Monday.",
        "options": [
            "in",
            "on",
            "at",
            "by"
        ],
        "answer": "on",
        "explanation": "দিনের নামের আগে সবসময় \"on\" বসে।",
        "banglaRule": "দিনের নাম এবং নির্দিষ্ট তারিখের আগে \"on\" বসে।"
    },
    {
        "id": "prep_e_8",
        "topic": "Prepositions",
        "difficulty": "easy",
        "sentence": "The flight departs ___ 9 o'clock.",
        "options": [
            "in",
            "on",
            "at",
            "with"
        ],
        "answer": "at",
        "explanation": "নির্দিষ্ট ঘড়ির সময়ের আগে সবসময় \"at\" বসে।",
        "banglaRule": "নির্দিষ্ট সময়ের আগে \"at\" বসে।"
    },
    {
        "id": "prep_e_9",
        "topic": "Prepositions",
        "difficulty": "easy",
        "sentence": "Ayesha graduated ___ 2024.",
        "options": [
            "in",
            "on",
            "at",
            "for"
        ],
        "answer": "in",
        "explanation": "বছরের নামের আগে সবসময় \"in\" বসে।",
        "banglaRule": "বছর, মাস বা ঋতুর আগে \"in\" বসে।"
    },
    {
        "id": "prep_e_10",
        "topic": "Prepositions",
        "difficulty": "easy",
        "sentence": "The wedding is ___ Thursday.",
        "options": [
            "in",
            "on",
            "at",
            "by"
        ],
        "answer": "on",
        "explanation": "দিনের নামের আগে সবসময় \"on\" বসে।",
        "banglaRule": "দিনের নাম এবং নির্দিষ্ট তারিখের আগে \"on\" বসে।"
    },
    {
        "id": "prep_e_11",
        "topic": "Prepositions",
        "difficulty": "easy",
        "sentence": "The flight departs ___ 7 AM.",
        "options": [
            "in",
            "on",
            "at",
            "with"
        ],
        "answer": "at",
        "explanation": "নির্দিষ্ট ঘড়ির সময়ের আগে সবসময় \"at\" বসে।",
        "banglaRule": "নির্দিষ্ট সময়ের আগে \"at\" বসে।"
    },
    {
        "id": "prep_e_12",
        "topic": "Prepositions",
        "difficulty": "easy",
        "sentence": "Jessica graduated ___ 2020.",
        "options": [
            "in",
            "on",
            "at",
            "for"
        ],
        "answer": "in",
        "explanation": "বছরের নামের আগে সবসময় \"in\" বসে।",
        "banglaRule": "বছর, মাস বা ঋতুর আগে \"in\" বসে।"
    },
    {
        "id": "prep_e_13",
        "topic": "Prepositions",
        "difficulty": "easy",
        "sentence": "The wedding is ___ Sunday.",
        "options": [
            "in",
            "on",
            "at",
            "by"
        ],
        "answer": "on",
        "explanation": "দিনের নামের আগে সবসময় \"on\" বসে।",
        "banglaRule": "দিনের নাম এবং নির্দিষ্ট তারিখের আগে \"on\" বসে।"
    },
    {
        "id": "prep_e_14",
        "topic": "Prepositions",
        "difficulty": "easy",
        "sentence": "The flight departs ___ 10:15 PM.",
        "options": [
            "in",
            "on",
            "at",
            "with"
        ],
        "answer": "at",
        "explanation": "নির্দিষ্ট ঘড়ির সময়ের আগে সবসময় \"at\" বসে।",
        "banglaRule": "নির্দিষ্ট সময়ের আগে \"at\" বসে।"
    },
    {
        "id": "prep_e_15",
        "topic": "Prepositions",
        "difficulty": "easy",
        "sentence": "Sofie graduated ___ 2015.",
        "options": [
            "in",
            "on",
            "at",
            "for"
        ],
        "answer": "in",
        "explanation": "বছরের নামের আগে সবসময় \"in\" বসে।",
        "banglaRule": "বছর, মাস বা ঋতুর আগে \"in\" বসে।"
    },
    {
        "id": "prep_e_16",
        "topic": "Prepositions",
        "difficulty": "easy",
        "sentence": "The wedding is ___ Wednesday.",
        "options": [
            "in",
            "on",
            "at",
            "by"
        ],
        "answer": "on",
        "explanation": "দিনের নামের আগে সবসময় \"on\" বসে।",
        "banglaRule": "দিনের নাম এবং নির্দিষ্ট তারিখের আগে \"on\" বসে।"
    },
    {
        "id": "prep_e_17",
        "topic": "Prepositions",
        "difficulty": "easy",
        "sentence": "The flight departs ___ 8:30.",
        "options": [
            "in",
            "on",
            "at",
            "with"
        ],
        "answer": "at",
        "explanation": "নির্দিষ্ট ঘড়ির সময়ের আগে সবসময় \"at\" বসে।",
        "banglaRule": "নির্দিষ্ট সময়ের আগে \"at\" বসে।"
    },
    {
        "id": "prep_e_18",
        "topic": "Prepositions",
        "difficulty": "easy",
        "sentence": "Sarah graduated ___ 2022.",
        "options": [
            "in",
            "on",
            "at",
            "for"
        ],
        "answer": "in",
        "explanation": "বছরের নামের আগে সবসময় \"in\" বসে।",
        "banglaRule": "বছর, মাস বা ঋতুর আগে \"in\" বসে।"
    },
    {
        "id": "prep_e_19",
        "topic": "Prepositions",
        "difficulty": "easy",
        "sentence": "The wedding is ___ Saturday.",
        "options": [
            "in",
            "on",
            "at",
            "by"
        ],
        "answer": "on",
        "explanation": "দিনের নামের আগে সবসময় \"on\" বসে।",
        "banglaRule": "দিনের নাম এবং নির্দিষ্ট তারিখের আগে \"on\" বসে।"
    },
    {
        "id": "prep_e_20",
        "topic": "Prepositions",
        "difficulty": "easy",
        "sentence": "The flight departs ___ 6 o'clock.",
        "options": [
            "in",
            "on",
            "at",
            "with"
        ],
        "answer": "at",
        "explanation": "নির্দিষ্ট ঘড়ির সময়ের আগে সবসময় \"at\" বসে।",
        "banglaRule": "নির্দিষ্ট সময়ের আগে \"at\" বসে।"
    },
    {
        "id": "prep_e_21",
        "topic": "Prepositions",
        "difficulty": "easy",
        "sentence": "Sumi graduated ___ 2018.",
        "options": [
            "in",
            "on",
            "at",
            "for"
        ],
        "answer": "in",
        "explanation": "বছরের নামের আগে সবসময় \"in\" বসে।",
        "banglaRule": "বছর, মাস বা ঋতুর আগে \"in\" বসে।"
    },
    {
        "id": "prep_e_22",
        "topic": "Prepositions",
        "difficulty": "easy",
        "sentence": "The wedding is ___ Tuesday.",
        "options": [
            "in",
            "on",
            "at",
            "by"
        ],
        "answer": "on",
        "explanation": "দিনের নামের আগে সবসময় \"on\" বসে।",
        "banglaRule": "দিনের নাম এবং নির্দিষ্ট তারিখের আগে \"on\" বসে।"
    },
    {
        "id": "prep_e_23",
        "topic": "Prepositions",
        "difficulty": "easy",
        "sentence": "The flight departs ___ 9 o'clock.",
        "options": [
            "in",
            "on",
            "at",
            "with"
        ],
        "answer": "at",
        "explanation": "নির্দিষ্ট ঘড়ির সময়ের আগে সবসময় \"at\" বসে।",
        "banglaRule": "নির্দিষ্ট সময়ের আগে \"at\" বসে।"
    },
    {
        "id": "prep_e_24",
        "topic": "Prepositions",
        "difficulty": "easy",
        "sentence": "Fahim graduated ___ 2024.",
        "options": [
            "in",
            "on",
            "at",
            "for"
        ],
        "answer": "in",
        "explanation": "বছরের নামের আগে সবসময় \"in\" বসে।",
        "banglaRule": "বছর, মাস বা ঋতুর আগে \"in\" বসে।"
    },
    {
        "id": "prep_e_25",
        "topic": "Prepositions",
        "difficulty": "easy",
        "sentence": "The wedding is ___ Friday.",
        "options": [
            "in",
            "on",
            "at",
            "by"
        ],
        "answer": "on",
        "explanation": "দিনের নামের আগে সবসময় \"on\" বসে।",
        "banglaRule": "দিনের নাম এবং নির্দিষ্ট তারিখের আগে \"on\" বসে।"
    },
    {
        "id": "prep_e_26",
        "topic": "Prepositions",
        "difficulty": "easy",
        "sentence": "The flight departs ___ 7 AM.",
        "options": [
            "in",
            "on",
            "at",
            "with"
        ],
        "answer": "at",
        "explanation": "নির্দিষ্ট ঘড়ির সময়ের আগে সবসময় \"at\" বসে।",
        "banglaRule": "নির্দিষ্ট সময়ের আগে \"at\" বসে।"
    },
    {
        "id": "prep_e_27",
        "topic": "Prepositions",
        "difficulty": "easy",
        "sentence": "Maria graduated ___ 2020.",
        "options": [
            "in",
            "on",
            "at",
            "for"
        ],
        "answer": "in",
        "explanation": "বছরের নামের আগে সবসময় \"in\" বসে।",
        "banglaRule": "বছর, মাস বা ঋতুর আগে \"in\" বসে।"
    },
    {
        "id": "prep_e_28",
        "topic": "Prepositions",
        "difficulty": "easy",
        "sentence": "The wedding is ___ Monday.",
        "options": [
            "in",
            "on",
            "at",
            "by"
        ],
        "answer": "on",
        "explanation": "দিনের নামের আগে সবসময় \"on\" বসে।",
        "banglaRule": "দিনের নাম এবং নির্দিষ্ট তারিখের আগে \"on\" বসে।"
    },
    {
        "id": "prep_e_29",
        "topic": "Prepositions",
        "difficulty": "easy",
        "sentence": "The flight departs ___ 10:15 PM.",
        "options": [
            "in",
            "on",
            "at",
            "with"
        ],
        "answer": "at",
        "explanation": "নির্দিষ্ট ঘড়ির সময়ের আগে সবসময় \"at\" বসে।",
        "banglaRule": "নির্দিষ্ট সময়ের আগে \"at\" বসে।"
    },
    {
        "id": "prep_e_30",
        "topic": "Prepositions",
        "difficulty": "easy",
        "sentence": "Ryan graduated ___ 2015.",
        "options": [
            "in",
            "on",
            "at",
            "for"
        ],
        "answer": "in",
        "explanation": "বছরের নামের আগে সবসময় \"in\" বসে।",
        "banglaRule": "বছর, মাস বা ঋতুর আগে \"in\" বসে।"
    },
    {
        "id": "prep_e_31",
        "topic": "Prepositions",
        "difficulty": "easy",
        "sentence": "The wedding is ___ Thursday.",
        "options": [
            "in",
            "on",
            "at",
            "by"
        ],
        "answer": "on",
        "explanation": "দিনের নামের আগে সবসময় \"on\" বসে।",
        "banglaRule": "দিনের নাম এবং নির্দিষ্ট তারিখের আগে \"on\" বসে।"
    },
    {
        "id": "prep_e_32",
        "topic": "Prepositions",
        "difficulty": "easy",
        "sentence": "The flight departs ___ 8:30.",
        "options": [
            "in",
            "on",
            "at",
            "with"
        ],
        "answer": "at",
        "explanation": "নির্দিষ্ট ঘড়ির সময়ের আগে সবসময় \"at\" বসে।",
        "banglaRule": "নির্দিষ্ট সময়ের আগে \"at\" বসে।"
    },
    {
        "id": "prep_e_33",
        "topic": "Prepositions",
        "difficulty": "easy",
        "sentence": "Karim graduated ___ 2022.",
        "options": [
            "in",
            "on",
            "at",
            "for"
        ],
        "answer": "in",
        "explanation": "বছরের নামের আগে সবসময় \"in\" বসে।",
        "banglaRule": "বছর, মাস বা ঋতুর আগে \"in\" বসে।"
    },
    {
        "id": "prep_e_34",
        "topic": "Prepositions",
        "difficulty": "easy",
        "sentence": "The wedding is ___ Sunday.",
        "options": [
            "in",
            "on",
            "at",
            "by"
        ],
        "answer": "on",
        "explanation": "দিনের নামের আগে সবসময় \"on\" বসে।",
        "banglaRule": "দিনের নাম এবং নির্দিষ্ট তারিখের আগে \"on\" বসে।"
    },
    {
        "id": "prep_e_35",
        "topic": "Prepositions",
        "difficulty": "easy",
        "sentence": "The flight departs ___ 6 o'clock.",
        "options": [
            "in",
            "on",
            "at",
            "with"
        ],
        "answer": "at",
        "explanation": "নির্দিষ্ট ঘড়ির সময়ের আগে সবসময় \"at\" বসে।",
        "banglaRule": "নির্দিষ্ট সময়ের আগে \"at\" বসে।"
    },
    {
        "id": "prep_e_36",
        "topic": "Prepositions",
        "difficulty": "easy",
        "sentence": "David graduated ___ 2018.",
        "options": [
            "in",
            "on",
            "at",
            "for"
        ],
        "answer": "in",
        "explanation": "বছরের নামের আগে সবসময় \"in\" বসে।",
        "banglaRule": "বছর, মাস বা ঋতুর আগে \"in\" বসে।"
    },
    {
        "id": "prep_e_37",
        "topic": "Prepositions",
        "difficulty": "easy",
        "sentence": "The wedding is ___ Wednesday.",
        "options": [
            "in",
            "on",
            "at",
            "by"
        ],
        "answer": "on",
        "explanation": "দিনের নামের আগে সবসময় \"on\" বসে।",
        "banglaRule": "দিনের নাম এবং নির্দিষ্ট তারিখের আগে \"on\" বসে।"
    },
    {
        "id": "prep_e_38",
        "topic": "Prepositions",
        "difficulty": "easy",
        "sentence": "The flight departs ___ 9 o'clock.",
        "options": [
            "in",
            "on",
            "at",
            "with"
        ],
        "answer": "at",
        "explanation": "নির্দিষ্ট ঘড়ির সময়ের আগে সবসময় \"at\" বসে।",
        "banglaRule": "নির্দিষ্ট সময়ের আগে \"at\" বসে।"
    },
    {
        "id": "prep_e_39",
        "topic": "Prepositions",
        "difficulty": "easy",
        "sentence": "Kabir graduated ___ 2024.",
        "options": [
            "in",
            "on",
            "at",
            "for"
        ],
        "answer": "in",
        "explanation": "বছরের নামের আগে সবসময় \"in\" বসে।",
        "banglaRule": "বছর, মাস বা ঋতুর আগে \"in\" বসে।"
    },
    {
        "id": "prep_e_40",
        "topic": "Prepositions",
        "difficulty": "easy",
        "sentence": "The wedding is ___ Saturday.",
        "options": [
            "in",
            "on",
            "at",
            "by"
        ],
        "answer": "on",
        "explanation": "দিনের নামের আগে সবসময় \"on\" বসে।",
        "banglaRule": "দিনের নাম এবং নির্দিষ্ট তারিখের আগে \"on\" বসে।"
    },
    {
        "id": "prep_e_41",
        "topic": "Prepositions",
        "difficulty": "easy",
        "sentence": "The flight departs ___ 7 AM.",
        "options": [
            "in",
            "on",
            "at",
            "with"
        ],
        "answer": "at",
        "explanation": "নির্দিষ্ট ঘড়ির সময়ের আগে সবসময় \"at\" বসে।",
        "banglaRule": "নির্দিষ্ট সময়ের আগে \"at\" বসে।"
    },
    {
        "id": "prep_e_42",
        "topic": "Prepositions",
        "difficulty": "easy",
        "sentence": "John graduated ___ 2020.",
        "options": [
            "in",
            "on",
            "at",
            "for"
        ],
        "answer": "in",
        "explanation": "বছরের নামের আগে সবসময় \"in\" বসে।",
        "banglaRule": "বছর, মাস বা ঋতুর আগে \"in\" বসে।"
    },
    {
        "id": "prep_e_43",
        "topic": "Prepositions",
        "difficulty": "easy",
        "sentence": "The wedding is ___ Tuesday.",
        "options": [
            "in",
            "on",
            "at",
            "by"
        ],
        "answer": "on",
        "explanation": "দিনের নামের আগে সবসময় \"on\" বসে।",
        "banglaRule": "দিনের নাম এবং নির্দিষ্ট তারিখের আগে \"on\" বসে।"
    },
    {
        "id": "prep_e_44",
        "topic": "Prepositions",
        "difficulty": "easy",
        "sentence": "The flight departs ___ 10:15 PM.",
        "options": [
            "in",
            "on",
            "at",
            "with"
        ],
        "answer": "at",
        "explanation": "নির্দিষ্ট ঘড়ির সময়ের আগে সবসময় \"at\" বসে।",
        "banglaRule": "নির্দিষ্ট সময়ের আগে \"at\" বসে।"
    },
    {
        "id": "prep_e_45",
        "topic": "Prepositions",
        "difficulty": "easy",
        "sentence": "Alex graduated ___ 2015.",
        "options": [
            "in",
            "on",
            "at",
            "for"
        ],
        "answer": "in",
        "explanation": "বছরের নামের আগে সবসময় \"in\" বসে।",
        "banglaRule": "বছর, মাস বা ঋতুর আগে \"in\" বসে।"
    },
    {
        "id": "prep_e_46",
        "topic": "Prepositions",
        "difficulty": "easy",
        "sentence": "The wedding is ___ Friday.",
        "options": [
            "in",
            "on",
            "at",
            "by"
        ],
        "answer": "on",
        "explanation": "দিনের নামের আগে সবসময় \"on\" বসে।",
        "banglaRule": "দিনের নাম এবং নির্দিষ্ট তারিখের আগে \"on\" বসে।"
    },
    {
        "id": "prep_e_47",
        "topic": "Prepositions",
        "difficulty": "easy",
        "sentence": "The flight departs ___ 8:30.",
        "options": [
            "in",
            "on",
            "at",
            "with"
        ],
        "answer": "at",
        "explanation": "নির্দিষ্ট ঘড়ির সময়ের আগে সবসময় \"at\" বসে।",
        "banglaRule": "নির্দিষ্ট সময়ের আগে \"at\" বসে।"
    },
    {
        "id": "prep_e_48",
        "topic": "Prepositions",
        "difficulty": "easy",
        "sentence": "Rahim graduated ___ 2022.",
        "options": [
            "in",
            "on",
            "at",
            "for"
        ],
        "answer": "in",
        "explanation": "বছরের নামের আগে সবসময় \"in\" বসে।",
        "banglaRule": "বছর, মাস বা ঋতুর আগে \"in\" বসে।"
    },
    {
        "id": "prep_e_49",
        "topic": "Prepositions",
        "difficulty": "easy",
        "sentence": "The wedding is ___ Monday.",
        "options": [
            "in",
            "on",
            "at",
            "by"
        ],
        "answer": "on",
        "explanation": "দিনের নামের আগে সবসময় \"on\" বসে।",
        "banglaRule": "দিনের নাম এবং নির্দিষ্ট তারিখের আগে \"on\" বসে।"
    },
    {
        "id": "prep_e_50",
        "topic": "Prepositions",
        "difficulty": "easy",
        "sentence": "The flight departs ___ 6 o'clock.",
        "options": [
            "in",
            "on",
            "at",
            "with"
        ],
        "answer": "at",
        "explanation": "নির্দিষ্ট ঘড়ির সময়ের আগে সবসময় \"at\" বসে।",
        "banglaRule": "নির্দিষ্ট সময়ের আগে \"at\" বসে।"
    },
    {
        "id": "prep_m_1",
        "topic": "Prepositions",
        "difficulty": "medium",
        "sentence": "She is good ___ playing chess.",
        "options": [
            "in",
            "on",
            "at",
            "with"
        ],
        "answer": "at",
        "explanation": "\"Good at\" মানে কোনো কাজে দক্ষ হওয়া।",
        "banglaRule": "দক্ষতা বোঝাতে Good at বসে।"
    },
    {
        "id": "prep_m_2",
        "topic": "Prepositions",
        "difficulty": "medium",
        "sentence": "She is good ___ playing tennis.",
        "options": [
            "in",
            "on",
            "at",
            "with"
        ],
        "answer": "at",
        "explanation": "\"Good at\" মানে কোনো কাজে দক্ষ হওয়া।",
        "banglaRule": "দক্ষতা বোঝাতে Good at বসে।"
    },
    {
        "id": "prep_m_3",
        "topic": "Prepositions",
        "difficulty": "medium",
        "sentence": "He is afraid ___ spiders.",
        "options": [
            "of",
            "from",
            "with",
            "by"
        ],
        "answer": "of",
        "explanation": "\"Afraid of\" মানে ভয় পাওয়া।",
        "banglaRule": "ভয় পাওয়া অর্থে Afraid of বসে।"
    },
    {
        "id": "prep_m_4",
        "topic": "Prepositions",
        "difficulty": "medium",
        "sentence": "He is afraid ___ snakes.",
        "options": [
            "of",
            "from",
            "with",
            "by"
        ],
        "answer": "of",
        "explanation": "\"Afraid of\" মানে ভয় পাওয়া।",
        "banglaRule": "ভয় পাওয়া অর্থে Afraid of বসে।"
    },
    {
        "id": "prep_m_5",
        "topic": "Prepositions",
        "difficulty": "medium",
        "sentence": "I look forward ___ meeting you.",
        "options": [
            "to",
            "for",
            "with",
            "at"
        ],
        "answer": "to",
        "explanation": "\"Look forward to\"-এর পর verb+ing বসে।",
        "banglaRule": "Look forward to = অধীর আগ্রহে অপেক্ষা করা।"
    },
    {
        "id": "prep_m_6",
        "topic": "Prepositions",
        "difficulty": "medium",
        "sentence": "I look forward ___ meeting you.",
        "options": [
            "to",
            "for",
            "with",
            "at"
        ],
        "answer": "to",
        "explanation": "\"Look forward to\"-এর পর verb+ing বসে।",
        "banglaRule": "Look forward to = অধীর আগ্রহে অপেক্ষা করা।"
    },
    {
        "id": "prep_m_7",
        "topic": "Prepositions",
        "difficulty": "medium",
        "sentence": "They are interested ___ music.",
        "options": [
            "in",
            "on",
            "with",
            "about"
        ],
        "answer": "in",
        "explanation": "\"Interested in\" মানে আগ্রহী।",
        "banglaRule": "আগ্রহী বোঝাতে Interested in বসে।"
    },
    {
        "id": "prep_m_8",
        "topic": "Prepositions",
        "difficulty": "medium",
        "sentence": "They are interested ___ art.",
        "options": [
            "in",
            "on",
            "with",
            "about"
        ],
        "answer": "in",
        "explanation": "\"Interested in\" মানে আগ্রহী।",
        "banglaRule": "আগ্রহী বোঝাতে Interested in বসে।"
    },
    {
        "id": "prep_m_9",
        "topic": "Prepositions",
        "difficulty": "medium",
        "sentence": "He died ___ cancer.",
        "options": [
            "of",
            "by",
            "from",
            "with"
        ],
        "answer": "of",
        "explanation": "রোগে মারা গেলে \"die of\" বসে।",
        "banglaRule": "রোগে মৃত্যু = Die of, দুর্ঘটনায় মৃত্যু = Die by, অতিভোজন = Die from।"
    },
    {
        "id": "prep_m_10",
        "topic": "Prepositions",
        "difficulty": "medium",
        "sentence": "He died ___ cholera.",
        "options": [
            "of",
            "by",
            "from",
            "with"
        ],
        "answer": "of",
        "explanation": "রোগে মারা গেলে \"die of\" বসে।",
        "banglaRule": "রোগে মৃত্যু = Die of, দুর্ঘটনায় মৃত্যু = Die by, অতিভোজন = Die from।"
    },
    {
        "id": "prep_m_11",
        "topic": "Prepositions",
        "difficulty": "medium",
        "sentence": "She is married ___ a doctor.",
        "options": [
            "to",
            "with",
            "by",
            "for"
        ],
        "answer": "to",
        "explanation": "বিবাহিত বোঝাতে \"married to\" বসে, \"with\" নয়।",
        "banglaRule": "Married-এর সাথে appropriate preposition \"to\" বসে।"
    },
    {
        "id": "prep_m_12",
        "topic": "Prepositions",
        "difficulty": "medium",
        "sentence": "She is married ___ a engineer.",
        "options": [
            "to",
            "with",
            "by",
            "for"
        ],
        "answer": "to",
        "explanation": "বিবাহিত বোঝাতে \"married to\" বসে, \"with\" নয়।",
        "banglaRule": "Married-এর সাথে appropriate preposition \"to\" বসে।"
    },
    {
        "id": "prep_m_13",
        "topic": "Prepositions",
        "difficulty": "medium",
        "sentence": "Divide the apple ___ the two children.",
        "options": [
            "between",
            "among",
            "with",
            "in"
        ],
        "answer": "between",
        "explanation": "দুজনের মধ্যে ভাগ করলে \"between\" বসে।",
        "banglaRule": "দুজনের মধ্যে = between, অনেকের মধ্যে = among।"
    },
    {
        "id": "prep_m_14",
        "topic": "Prepositions",
        "difficulty": "medium",
        "sentence": "Divide the orange ___ the two children.",
        "options": [
            "between",
            "among",
            "with",
            "in"
        ],
        "answer": "between",
        "explanation": "দুজনের মধ্যে ভাগ করলে \"between\" বসে।",
        "banglaRule": "দুজনের মধ্যে = between, অনেকের মধ্যে = among।"
    },
    {
        "id": "prep_m_15",
        "topic": "Prepositions",
        "difficulty": "medium",
        "sentence": "Divide the sweets ___ the students.",
        "options": [
            "between",
            "among",
            "with",
            "in"
        ],
        "answer": "among",
        "explanation": "অনেকের মধ্যে ভাগ করলে \"among\" বসে।",
        "banglaRule": "অনেকের মধ্যে বণ্টন = among।"
    },
    {
        "id": "prep_m_16",
        "topic": "Prepositions",
        "difficulty": "medium",
        "sentence": "Divide the candies ___ the students.",
        "options": [
            "between",
            "among",
            "with",
            "in"
        ],
        "answer": "among",
        "explanation": "অনেকের মধ্যে ভাগ করলে \"among\" বসে।",
        "banglaRule": "অনেকের মধ্যে বণ্টন = among।"
    },
    {
        "id": "prep_m_17",
        "topic": "Prepositions",
        "difficulty": "medium",
        "sentence": "He has been absent ___ Monday.",
        "options": [
            "since",
            "for",
            "from",
            "till"
        ],
        "answer": "since",
        "explanation": "নির্দিষ্ট সময়বিন্দু থেকে শুরু বোঝালে \"since\" বসে।",
        "banglaRule": "Point of time = since, Period of time = for।"
    },
    {
        "id": "prep_m_18",
        "topic": "Prepositions",
        "difficulty": "medium",
        "sentence": "He has been absent ___ last week.",
        "options": [
            "since",
            "for",
            "from",
            "till"
        ],
        "answer": "since",
        "explanation": "নির্দিষ্ট সময়বিন্দু থেকে শুরু বোঝালে \"since\" বসে।",
        "banglaRule": "Point of time = since, Period of time = for।"
    },
    {
        "id": "prep_m_19",
        "topic": "Prepositions",
        "difficulty": "medium",
        "sentence": "They have lived here ___ five years.",
        "options": [
            "since",
            "for",
            "during",
            "from"
        ],
        "answer": "for",
        "explanation": "সময়ের ব্যাপ্তি বোঝালে \"for\" বসে।",
        "banglaRule": "সময়ের মোট ব্যাপ্তি (duration) = for।"
    },
    {
        "id": "prep_m_20",
        "topic": "Prepositions",
        "difficulty": "medium",
        "sentence": "They have lived here ___ ten years.",
        "options": [
            "since",
            "for",
            "during",
            "from"
        ],
        "answer": "for",
        "explanation": "সময়ের ব্যাপ্তি বোঝালে \"for\" বসে।",
        "banglaRule": "সময়ের মোট ব্যাপ্তি (duration) = for।"
    },
    {
        "id": "prep_m_21",
        "topic": "Prepositions",
        "difficulty": "medium",
        "sentence": "The cat jumped ___ the table.",
        "options": [
            "onto",
            "in",
            "at",
            "under"
        ],
        "answer": "onto",
        "explanation": "গতিশীলভাবে কোনো তলের উপরে গেলে \"onto\" বসে।",
        "banglaRule": "বাইরে থেকে গতি নিয়ে উপরে বসলে = onto।"
    },
    {
        "id": "prep_m_22",
        "topic": "Prepositions",
        "difficulty": "medium",
        "sentence": "The cat jumped ___ the chair.",
        "options": [
            "onto",
            "in",
            "at",
            "under"
        ],
        "answer": "onto",
        "explanation": "গতিশীলভাবে কোনো তলের উপরে গেলে \"onto\" বসে।",
        "banglaRule": "বাইরে থেকে গতি নিয়ে উপরে বসলে = onto।"
    },
    {
        "id": "prep_m_23",
        "topic": "Prepositions",
        "difficulty": "medium",
        "sentence": "He is fond ___ sweets.",
        "options": [
            "of",
            "for",
            "with",
            "about"
        ],
        "answer": "of",
        "explanation": "\"Fond of\" মানে প্রিয় বা পছন্দ করা।",
        "banglaRule": "পছন্দ করা = Fond of।"
    },
    {
        "id": "prep_m_24",
        "topic": "Prepositions",
        "difficulty": "medium",
        "sentence": "He is fond ___ candies.",
        "options": [
            "of",
            "for",
            "with",
            "about"
        ],
        "answer": "of",
        "explanation": "\"Fond of\" মানে প্রিয় বা পছন্দ করা।",
        "banglaRule": "পছন্দ করা = Fond of।"
    },
    {
        "id": "prep_m_25",
        "topic": "Prepositions",
        "difficulty": "medium",
        "sentence": "We arrived ___ the airport late.",
        "options": [
            "at",
            "in",
            "to",
            "on"
        ],
        "answer": "at",
        "explanation": "ছোট স্থান বা নির্দিষ্ট ভবনে পৌঁছালে \"arrive at\" বসে।",
        "banglaRule": "বিমানবন্দর, স্টেশন, হোটেল = arrive at। শহর, দেশ = arrive in।"
    },
    {
        "id": "prep_m_26",
        "topic": "Prepositions",
        "difficulty": "medium",
        "sentence": "We arrived ___ the hotel late.",
        "options": [
            "at",
            "in",
            "to",
            "on"
        ],
        "answer": "at",
        "explanation": "ছোট স্থান বা নির্দিষ্ট ভবনে পৌঁছালে \"arrive at\" বসে।",
        "banglaRule": "বিমানবন্দর, স্টেশন, হোটেল = arrive at। শহর, দেশ = arrive in।"
    },
    {
        "id": "prep_m_27",
        "topic": "Prepositions",
        "difficulty": "medium",
        "sentence": "I prefer tea ___ coffee.",
        "options": [
            "to",
            "than",
            "for",
            "with"
        ],
        "answer": "to",
        "explanation": "\"Prefer\"-এর পর comparative-এ \"to\" বসে।",
        "banglaRule": "পছন্দ করা অর্থে Prefer + noun + to + noun।"
    },
    {
        "id": "prep_m_28",
        "topic": "Prepositions",
        "difficulty": "medium",
        "sentence": "I prefer milk ___ juice.",
        "options": [
            "to",
            "than",
            "for",
            "with"
        ],
        "answer": "to",
        "explanation": "\"Prefer\"-এর পর comparative-এ \"to\" বসে।",
        "banglaRule": "পছন্দ করা অর্থে Prefer + noun + to + noun।"
    },
    {
        "id": "prep_m_29",
        "topic": "Prepositions",
        "difficulty": "medium",
        "sentence": "He apologized ___ his teacher.",
        "options": [
            "to",
            "for",
            "with",
            "at"
        ],
        "answer": "to",
        "explanation": "ব্যক্তির কাছে ক্ষমা চাইলে \"apologize to\" বসে।",
        "banglaRule": "Apologize to (someone) for (something)।"
    },
    {
        "id": "prep_m_30",
        "topic": "Prepositions",
        "difficulty": "medium",
        "sentence": "He apologized ___ his milkcher.",
        "options": [
            "to",
            "for",
            "with",
            "at"
        ],
        "answer": "to",
        "explanation": "ব্যক্তির কাছে ক্ষমা চাইলে \"apologize to\" বসে।",
        "banglaRule": "Apologize to (someone) for (something)।"
    },
    {
        "id": "prep_h_1",
        "topic": "Prepositions",
        "difficulty": "hard",
        "sentence": "He is blind ___ his son's faults.",
        "options": [
            "to",
            "of",
            "with",
            "in"
        ],
        "answer": "to",
        "explanation": "নিজের বা কারো ভুল এড়িয়ে যাওয়া/অন্ধ হওয়া = blind to।",
        "banglaRule": "চোখে অন্ধ = blind of, ভুলের প্রতি অন্ধ = blind to।"
    },
    {
        "id": "prep_h_2",
        "topic": "Prepositions",
        "difficulty": "hard",
        "sentence": "He is blind ___ his daughter's faults.",
        "options": [
            "to",
            "of",
            "with",
            "in"
        ],
        "answer": "to",
        "explanation": "নিজের বা কারো ভুল এড়িয়ে যাওয়া/অন্ধ হওয়া = blind to।",
        "banglaRule": "চোখে অন্ধ = blind of, ভুলের প্রতি অন্ধ = blind to।"
    },
    {
        "id": "prep_h_3",
        "topic": "Prepositions",
        "difficulty": "hard",
        "sentence": "The train is ___ time.",
        "options": [
            "on",
            "in",
            "at",
            "by"
        ],
        "answer": "on",
        "explanation": "নির্ধারিত সময়ে চলা বোঝাতে \"on time\" বসে।",
        "banglaRule": "On time = একদম সময়মতো (schedule), In time = সময়ের কিছুটা আগে।"
    },
    {
        "id": "prep_h_4",
        "topic": "Prepositions",
        "difficulty": "hard",
        "sentence": "The bus is ___ time.",
        "options": [
            "on",
            "in",
            "at",
            "by"
        ],
        "answer": "on",
        "explanation": "নির্ধারিত সময়ে চলা বোঝাতে \"on time\" বসে।",
        "banglaRule": "On time = একদম সময়মতো (schedule), In time = সময়ের কিছুটা আগে।"
    },
    {
        "id": "prep_h_5",
        "topic": "Prepositions",
        "difficulty": "hard",
        "sentence": "She succeeded ___ passing the exam.",
        "options": [
            "in",
            "on",
            "at",
            "for"
        ],
        "answer": "in",
        "explanation": "\"Succeed in\" মানে সফল হওয়া।",
        "banglaRule": "সফল হওয়া = Succeed in + verb+ing।"
    },
    {
        "id": "prep_h_6",
        "topic": "Prepositions",
        "difficulty": "hard",
        "sentence": "She succeeded ___ getting the house.",
        "options": [
            "in",
            "on",
            "at",
            "for"
        ],
        "answer": "in",
        "explanation": "\"Succeed in\" মানে সফল হওয়া।",
        "banglaRule": "সফল হওয়া = Succeed in + verb+ing।"
    },
    {
        "id": "prep_h_7",
        "topic": "Prepositions",
        "difficulty": "hard",
        "sentence": "I am in search ___ a job.",
        "options": [
            "of",
            "for",
            "with",
            "on"
        ],
        "answer": "of",
        "explanation": "\"in search of\" একটি ফ্রেজ যার অর্থ খোঁজা।",
        "banglaRule": "In search of = সন্ধানে।"
    },
    {
        "id": "prep_h_8",
        "topic": "Prepositions",
        "difficulty": "hard",
        "sentence": "I am in search ___ a house.",
        "options": [
            "of",
            "for",
            "with",
            "on"
        ],
        "answer": "of",
        "explanation": "\"in search of\" একটি ফ্রেজ যার অর্থ খোঁজা।",
        "banglaRule": "In search of = সন্ধানে।"
    },
    {
        "id": "prep_h_9",
        "topic": "Prepositions",
        "difficulty": "hard",
        "sentence": "He congratulated me ___ my success.",
        "options": [
            "on",
            "for",
            "at",
            "with"
        ],
        "answer": "on",
        "explanation": "\"Congratulate on\" মানে অভিনন্দন জানানো।",
        "banglaRule": "অভিনন্দন জানানো = Congratulate someone on success।"
    },
    {
        "id": "prep_h_10",
        "topic": "Prepositions",
        "difficulty": "hard",
        "sentence": "He congratulated me ___ my graduation.",
        "options": [
            "on",
            "for",
            "at",
            "with"
        ],
        "answer": "on",
        "explanation": "\"Congratulate on\" মানে অভিনন্দন জানানো।",
        "banglaRule": "অভিনন্দন জানানো = Congratulate someone on success।"
    },
    {
        "id": "ten_e_1",
        "topic": "Tenses",
        "difficulty": "easy",
        "sentence": "Look! Karim ___ in the pool now.",
        "options": [
            "swim",
            "swims",
            "is swimming",
            "was swimming"
        ],
        "answer": "is swimming",
        "explanation": "\"Now\" বা \"Look!\" থাকলে কাজটি বর্তমানে চলছে বোঝায় (Present Continuous)।",
        "banglaRule": "বর্তমানে কোনো কাজ চলছে (now, at this moment) → Present Continuous।"
    },
    {
        "id": "ten_e_2",
        "topic": "Tenses",
        "difficulty": "easy",
        "sentence": "Every morning, Sarah ___ a newspaper.",
        "options": [
            "read",
            "reads",
            "is reading",
            "readed"
        ],
        "answer": "reads",
        "explanation": "প্রতিদিনের অভ্যাস বোঝাতে Present Simple tense হয় এবং 3rd person singular-এর পর s/es বসে।",
        "banglaRule": "অভ্যাসগত কাজ (Every day/always/usually) → Present Simple।"
    },
    {
        "id": "ten_e_3",
        "topic": "Tenses",
        "difficulty": "easy",
        "sentence": "Look! Emily ___ in the pool now.",
        "options": [
            "swim",
            "swims",
            "is swimming",
            "was swimming"
        ],
        "answer": "is swimming",
        "explanation": "\"Now\" বা \"Look!\" থাকলে কাজটি বর্তমানে চলছে বোঝায় (Present Continuous)।",
        "banglaRule": "বর্তমানে কোনো কাজ চলছে (now, at this moment) → Present Continuous।"
    },
    {
        "id": "ten_e_4",
        "topic": "Tenses",
        "difficulty": "easy",
        "sentence": "Every morning, David ___ a newspaper.",
        "options": [
            "read",
            "reads",
            "is reading",
            "readed"
        ],
        "answer": "reads",
        "explanation": "প্রতিদিনের অভ্যাস বোঝাতে Present Simple tense হয় এবং 3rd person singular-এর পর s/es বসে।",
        "banglaRule": "অভ্যাসগত কাজ (Every day/always/usually) → Present Simple।"
    },
    {
        "id": "ten_e_5",
        "topic": "Tenses",
        "difficulty": "easy",
        "sentence": "Look! Sumi ___ in the pool now.",
        "options": [
            "swim",
            "swims",
            "is swimming",
            "was swimming"
        ],
        "answer": "is swimming",
        "explanation": "\"Now\" বা \"Look!\" থাকলে কাজটি বর্তমানে চলছে বোঝায় (Present Continuous)।",
        "banglaRule": "বর্তমানে কোনো কাজ চলছে (now, at this moment) → Present Continuous।"
    },
    {
        "id": "ten_e_6",
        "topic": "Tenses",
        "difficulty": "easy",
        "sentence": "Every morning, Lisa ___ a newspaper.",
        "options": [
            "read",
            "reads",
            "is reading",
            "readed"
        ],
        "answer": "reads",
        "explanation": "প্রতিদিনের অভ্যাস বোঝাতে Present Simple tense হয় এবং 3rd person singular-এর পর s/es বসে।",
        "banglaRule": "অভ্যাসগত কাজ (Every day/always/usually) → Present Simple।"
    },
    {
        "id": "ten_e_7",
        "topic": "Tenses",
        "difficulty": "easy",
        "sentence": "Look! Kabir ___ in the pool now.",
        "options": [
            "swim",
            "swims",
            "is swimming",
            "was swimming"
        ],
        "answer": "is swimming",
        "explanation": "\"Now\" বা \"Look!\" থাকলে কাজটি বর্তমানে চলছে বোঝায় (Present Continuous)।",
        "banglaRule": "বর্তমানে কোনো কাজ চলছে (now, at this moment) → Present Continuous।"
    },
    {
        "id": "ten_e_8",
        "topic": "Tenses",
        "difficulty": "easy",
        "sentence": "Every morning, Fahim ___ a newspaper.",
        "options": [
            "read",
            "reads",
            "is reading",
            "readed"
        ],
        "answer": "reads",
        "explanation": "প্রতিদিনের অভ্যাস বোঝাতে Present Simple tense হয় এবং 3rd person singular-এর পর s/es বসে।",
        "banglaRule": "অভ্যাসগত কাজ (Every day/always/usually) → Present Simple।"
    },
    {
        "id": "ten_e_9",
        "topic": "Tenses",
        "difficulty": "easy",
        "sentence": "Look! Ayesha ___ in the pool now.",
        "options": [
            "swim",
            "swims",
            "is swimming",
            "was swimming"
        ],
        "answer": "is swimming",
        "explanation": "\"Now\" বা \"Look!\" থাকলে কাজটি বর্তমানে চলছে বোঝায় (Present Continuous)।",
        "banglaRule": "বর্তমানে কোনো কাজ চলছে (now, at this moment) → Present Continuous।"
    },
    {
        "id": "ten_e_10",
        "topic": "Tenses",
        "difficulty": "easy",
        "sentence": "Every morning, John ___ a newspaper.",
        "options": [
            "read",
            "reads",
            "is reading",
            "readed"
        ],
        "answer": "reads",
        "explanation": "প্রতিদিনের অভ্যাস বোঝাতে Present Simple tense হয় এবং 3rd person singular-এর পর s/es বসে।",
        "banglaRule": "অভ্যাসগত কাজ (Every day/always/usually) → Present Simple।"
    },
    {
        "id": "ten_e_11",
        "topic": "Tenses",
        "difficulty": "easy",
        "sentence": "Look! Maria ___ in the pool now.",
        "options": [
            "swim",
            "swims",
            "is swimming",
            "was swimming"
        ],
        "answer": "is swimming",
        "explanation": "\"Now\" বা \"Look!\" থাকলে কাজটি বর্তমানে চলছে বোঝায় (Present Continuous)।",
        "banglaRule": "বর্তমানে কোনো কাজ চলছে (now, at this moment) → Present Continuous।"
    },
    {
        "id": "ten_e_12",
        "topic": "Tenses",
        "difficulty": "easy",
        "sentence": "Every morning, Jessica ___ a newspaper.",
        "options": [
            "read",
            "reads",
            "is reading",
            "readed"
        ],
        "answer": "reads",
        "explanation": "প্রতিদিনের অভ্যাস বোঝাতে Present Simple tense হয় এবং 3rd person singular-এর পর s/es বসে।",
        "banglaRule": "অভ্যাসগত কাজ (Every day/always/usually) → Present Simple।"
    },
    {
        "id": "ten_e_13",
        "topic": "Tenses",
        "difficulty": "easy",
        "sentence": "Look! Alex ___ in the pool now.",
        "options": [
            "swim",
            "swims",
            "is swimming",
            "was swimming"
        ],
        "answer": "is swimming",
        "explanation": "\"Now\" বা \"Look!\" থাকলে কাজটি বর্তমানে চলছে বোঝায় (Present Continuous)।",
        "banglaRule": "বর্তমানে কোনো কাজ চলছে (now, at this moment) → Present Continuous।"
    },
    {
        "id": "ten_e_14",
        "topic": "Tenses",
        "difficulty": "easy",
        "sentence": "Every morning, Ryan ___ a newspaper.",
        "options": [
            "read",
            "reads",
            "is reading",
            "readed"
        ],
        "answer": "reads",
        "explanation": "প্রতিদিনের অভ্যাস বোঝাতে Present Simple tense হয় এবং 3rd person singular-এর পর s/es বসে।",
        "banglaRule": "অভ্যাসগত কাজ (Every day/always/usually) → Present Simple।"
    },
    {
        "id": "ten_e_15",
        "topic": "Tenses",
        "difficulty": "easy",
        "sentence": "Look! Sofie ___ in the pool now.",
        "options": [
            "swim",
            "swims",
            "is swimming",
            "was swimming"
        ],
        "answer": "is swimming",
        "explanation": "\"Now\" বা \"Look!\" থাকলে কাজটি বর্তমানে চলছে বোঝায় (Present Continuous)।",
        "banglaRule": "বর্তমানে কোনো কাজ চলছে (now, at this moment) → Present Continuous।"
    },
    {
        "id": "ten_e_16",
        "topic": "Tenses",
        "difficulty": "easy",
        "sentence": "Every morning, Rahim ___ a newspaper.",
        "options": [
            "read",
            "reads",
            "is reading",
            "readed"
        ],
        "answer": "reads",
        "explanation": "প্রতিদিনের অভ্যাস বোঝাতে Present Simple tense হয় এবং 3rd person singular-এর পর s/es বসে।",
        "banglaRule": "অভ্যাসগত কাজ (Every day/always/usually) → Present Simple।"
    },
    {
        "id": "ten_e_17",
        "topic": "Tenses",
        "difficulty": "easy",
        "sentence": "Look! Karim ___ in the pool now.",
        "options": [
            "swim",
            "swims",
            "is swimming",
            "was swimming"
        ],
        "answer": "is swimming",
        "explanation": "\"Now\" বা \"Look!\" থাকলে কাজটি বর্তমানে চলছে বোঝায় (Present Continuous)।",
        "banglaRule": "বর্তমানে কোনো কাজ চলছে (now, at this moment) → Present Continuous।"
    },
    {
        "id": "ten_e_18",
        "topic": "Tenses",
        "difficulty": "easy",
        "sentence": "Every morning, Sarah ___ a newspaper.",
        "options": [
            "read",
            "reads",
            "is reading",
            "readed"
        ],
        "answer": "reads",
        "explanation": "প্রতিদিনের অভ্যাস বোঝাতে Present Simple tense হয় এবং 3rd person singular-এর পর s/es বসে।",
        "banglaRule": "অভ্যাসগত কাজ (Every day/always/usually) → Present Simple।"
    },
    {
        "id": "ten_e_19",
        "topic": "Tenses",
        "difficulty": "easy",
        "sentence": "Look! Emily ___ in the pool now.",
        "options": [
            "swim",
            "swims",
            "is swimming",
            "was swimming"
        ],
        "answer": "is swimming",
        "explanation": "\"Now\" বা \"Look!\" থাকলে কাজটি বর্তমানে চলছে বোঝায় (Present Continuous)।",
        "banglaRule": "বর্তমানে কোনো কাজ চলছে (now, at this moment) → Present Continuous।"
    },
    {
        "id": "ten_e_20",
        "topic": "Tenses",
        "difficulty": "easy",
        "sentence": "Every morning, David ___ a newspaper.",
        "options": [
            "read",
            "reads",
            "is reading",
            "readed"
        ],
        "answer": "reads",
        "explanation": "প্রতিদিনের অভ্যাস বোঝাতে Present Simple tense হয় এবং 3rd person singular-এর পর s/es বসে।",
        "banglaRule": "অভ্যাসগত কাজ (Every day/always/usually) → Present Simple।"
    },
    {
        "id": "ten_e_21",
        "topic": "Tenses",
        "difficulty": "easy",
        "sentence": "Look! Sumi ___ in the pool now.",
        "options": [
            "swim",
            "swims",
            "is swimming",
            "was swimming"
        ],
        "answer": "is swimming",
        "explanation": "\"Now\" বা \"Look!\" থাকলে কাজটি বর্তমানে চলছে বোঝায় (Present Continuous)।",
        "banglaRule": "বর্তমানে কোনো কাজ চলছে (now, at this moment) → Present Continuous।"
    },
    {
        "id": "ten_e_22",
        "topic": "Tenses",
        "difficulty": "easy",
        "sentence": "Every morning, Lisa ___ a newspaper.",
        "options": [
            "read",
            "reads",
            "is reading",
            "readed"
        ],
        "answer": "reads",
        "explanation": "প্রতিদিনের অভ্যাস বোঝাতে Present Simple tense হয় এবং 3rd person singular-এর পর s/es বসে।",
        "banglaRule": "অভ্যাসগত কাজ (Every day/always/usually) → Present Simple।"
    },
    {
        "id": "ten_e_23",
        "topic": "Tenses",
        "difficulty": "easy",
        "sentence": "Look! Kabir ___ in the pool now.",
        "options": [
            "swim",
            "swims",
            "is swimming",
            "was swimming"
        ],
        "answer": "is swimming",
        "explanation": "\"Now\" বা \"Look!\" থাকলে কাজটি বর্তমানে চলছে বোঝায় (Present Continuous)।",
        "banglaRule": "বর্তমানে কোনো কাজ চলছে (now, at this moment) → Present Continuous।"
    },
    {
        "id": "ten_e_24",
        "topic": "Tenses",
        "difficulty": "easy",
        "sentence": "Every morning, Fahim ___ a newspaper.",
        "options": [
            "read",
            "reads",
            "is reading",
            "readed"
        ],
        "answer": "reads",
        "explanation": "প্রতিদিনের অভ্যাস বোঝাতে Present Simple tense হয় এবং 3rd person singular-এর পর s/es বসে।",
        "banglaRule": "অভ্যাসগত কাজ (Every day/always/usually) → Present Simple।"
    },
    {
        "id": "ten_e_25",
        "topic": "Tenses",
        "difficulty": "easy",
        "sentence": "Look! Ayesha ___ in the pool now.",
        "options": [
            "swim",
            "swims",
            "is swimming",
            "was swimming"
        ],
        "answer": "is swimming",
        "explanation": "\"Now\" বা \"Look!\" থাকলে কাজটি বর্তমানে চলছে বোঝায় (Present Continuous)।",
        "banglaRule": "বর্তমানে কোনো কাজ চলছে (now, at this moment) → Present Continuous।"
    },
    {
        "id": "ten_e_26",
        "topic": "Tenses",
        "difficulty": "easy",
        "sentence": "Every morning, John ___ a newspaper.",
        "options": [
            "read",
            "reads",
            "is reading",
            "readed"
        ],
        "answer": "reads",
        "explanation": "প্রতিদিনের অভ্যাস বোঝাতে Present Simple tense হয় এবং 3rd person singular-এর পর s/es বসে।",
        "banglaRule": "অভ্যাসগত কাজ (Every day/always/usually) → Present Simple।"
    },
    {
        "id": "ten_e_27",
        "topic": "Tenses",
        "difficulty": "easy",
        "sentence": "Look! Maria ___ in the pool now.",
        "options": [
            "swim",
            "swims",
            "is swimming",
            "was swimming"
        ],
        "answer": "is swimming",
        "explanation": "\"Now\" বা \"Look!\" থাকলে কাজটি বর্তমানে চলছে বোঝায় (Present Continuous)।",
        "banglaRule": "বর্তমানে কোনো কাজ চলছে (now, at this moment) → Present Continuous।"
    },
    {
        "id": "ten_e_28",
        "topic": "Tenses",
        "difficulty": "easy",
        "sentence": "Every morning, Jessica ___ a newspaper.",
        "options": [
            "read",
            "reads",
            "is reading",
            "readed"
        ],
        "answer": "reads",
        "explanation": "প্রতিদিনের অভ্যাস বোঝাতে Present Simple tense হয় এবং 3rd person singular-এর পর s/es বসে।",
        "banglaRule": "অভ্যাসগত কাজ (Every day/always/usually) → Present Simple।"
    },
    {
        "id": "ten_e_29",
        "topic": "Tenses",
        "difficulty": "easy",
        "sentence": "Look! Alex ___ in the pool now.",
        "options": [
            "swim",
            "swims",
            "is swimming",
            "was swimming"
        ],
        "answer": "is swimming",
        "explanation": "\"Now\" বা \"Look!\" থাকলে কাজটি বর্তমানে চলছে বোঝায় (Present Continuous)।",
        "banglaRule": "বর্তমানে কোনো কাজ চলছে (now, at this moment) → Present Continuous।"
    },
    {
        "id": "ten_e_30",
        "topic": "Tenses",
        "difficulty": "easy",
        "sentence": "Every morning, Ryan ___ a newspaper.",
        "options": [
            "read",
            "reads",
            "is reading",
            "readed"
        ],
        "answer": "reads",
        "explanation": "প্রতিদিনের অভ্যাস বোঝাতে Present Simple tense হয় এবং 3rd person singular-এর পর s/es বসে।",
        "banglaRule": "অভ্যাসগত কাজ (Every day/always/usually) → Present Simple।"
    },
    {
        "id": "ten_e_31",
        "topic": "Tenses",
        "difficulty": "easy",
        "sentence": "Look! Sofie ___ in the pool now.",
        "options": [
            "swim",
            "swims",
            "is swimming",
            "was swimming"
        ],
        "answer": "is swimming",
        "explanation": "\"Now\" বা \"Look!\" থাকলে কাজটি বর্তমানে চলছে বোঝায় (Present Continuous)।",
        "banglaRule": "বর্তমানে কোনো কাজ চলছে (now, at this moment) → Present Continuous।"
    },
    {
        "id": "ten_e_32",
        "topic": "Tenses",
        "difficulty": "easy",
        "sentence": "Every morning, Rahim ___ a newspaper.",
        "options": [
            "read",
            "reads",
            "is reading",
            "readed"
        ],
        "answer": "reads",
        "explanation": "প্রতিদিনের অভ্যাস বোঝাতে Present Simple tense হয় এবং 3rd person singular-এর পর s/es বসে।",
        "banglaRule": "অভ্যাসগত কাজ (Every day/always/usually) → Present Simple।"
    },
    {
        "id": "ten_e_33",
        "topic": "Tenses",
        "difficulty": "easy",
        "sentence": "Look! Karim ___ in the pool now.",
        "options": [
            "swim",
            "swims",
            "is swimming",
            "was swimming"
        ],
        "answer": "is swimming",
        "explanation": "\"Now\" বা \"Look!\" থাকলে কাজটি বর্তমানে চলছে বোঝায় (Present Continuous)।",
        "banglaRule": "বর্তমানে কোনো কাজ চলছে (now, at this moment) → Present Continuous।"
    },
    {
        "id": "ten_e_34",
        "topic": "Tenses",
        "difficulty": "easy",
        "sentence": "Every morning, Sarah ___ a newspaper.",
        "options": [
            "read",
            "reads",
            "is reading",
            "readed"
        ],
        "answer": "reads",
        "explanation": "প্রতিদিনের অভ্যাস বোঝাতে Present Simple tense হয় এবং 3rd person singular-এর পর s/es বসে।",
        "banglaRule": "অভ্যাসগত কাজ (Every day/always/usually) → Present Simple।"
    },
    {
        "id": "ten_e_35",
        "topic": "Tenses",
        "difficulty": "easy",
        "sentence": "Look! Emily ___ in the pool now.",
        "options": [
            "swim",
            "swims",
            "is swimming",
            "was swimming"
        ],
        "answer": "is swimming",
        "explanation": "\"Now\" বা \"Look!\" থাকলে কাজটি বর্তমানে চলছে বোঝায় (Present Continuous)।",
        "banglaRule": "বর্তমানে কোনো কাজ চলছে (now, at this moment) → Present Continuous।"
    },
    {
        "id": "ten_e_36",
        "topic": "Tenses",
        "difficulty": "easy",
        "sentence": "Every morning, David ___ a newspaper.",
        "options": [
            "read",
            "reads",
            "is reading",
            "readed"
        ],
        "answer": "reads",
        "explanation": "প্রতিদিনের অভ্যাস বোঝাতে Present Simple tense হয় এবং 3rd person singular-এর পর s/es বসে।",
        "banglaRule": "অভ্যাসগত কাজ (Every day/always/usually) → Present Simple।"
    },
    {
        "id": "ten_e_37",
        "topic": "Tenses",
        "difficulty": "easy",
        "sentence": "Look! Sumi ___ in the pool now.",
        "options": [
            "swim",
            "swims",
            "is swimming",
            "was swimming"
        ],
        "answer": "is swimming",
        "explanation": "\"Now\" বা \"Look!\" থাকলে কাজটি বর্তমানে চলছে বোঝায় (Present Continuous)।",
        "banglaRule": "বর্তমানে কোনো কাজ চলছে (now, at this moment) → Present Continuous।"
    },
    {
        "id": "ten_e_38",
        "topic": "Tenses",
        "difficulty": "easy",
        "sentence": "Every morning, Lisa ___ a newspaper.",
        "options": [
            "read",
            "reads",
            "is reading",
            "readed"
        ],
        "answer": "reads",
        "explanation": "প্রতিদিনের অভ্যাস বোঝাতে Present Simple tense হয় এবং 3rd person singular-এর পর s/es বসে।",
        "banglaRule": "অভ্যাসগত কাজ (Every day/always/usually) → Present Simple।"
    },
    {
        "id": "ten_e_39",
        "topic": "Tenses",
        "difficulty": "easy",
        "sentence": "Look! Kabir ___ in the pool now.",
        "options": [
            "swim",
            "swims",
            "is swimming",
            "was swimming"
        ],
        "answer": "is swimming",
        "explanation": "\"Now\" বা \"Look!\" থাকলে কাজটি বর্তমানে চলছে বোঝায় (Present Continuous)।",
        "banglaRule": "বর্তমানে কোনো কাজ চলছে (now, at this moment) → Present Continuous।"
    },
    {
        "id": "ten_e_40",
        "topic": "Tenses",
        "difficulty": "easy",
        "sentence": "Every morning, Fahim ___ a newspaper.",
        "options": [
            "read",
            "reads",
            "is reading",
            "readed"
        ],
        "answer": "reads",
        "explanation": "প্রতিদিনের অভ্যাস বোঝাতে Present Simple tense হয় এবং 3rd person singular-এর পর s/es বসে।",
        "banglaRule": "অভ্যাসগত কাজ (Every day/always/usually) → Present Simple।"
    },
    {
        "id": "ten_m_1",
        "topic": "Tenses",
        "difficulty": "medium",
        "sentence": "She ___ for the exam since morning.",
        "options": [
            "is studying",
            "studies",
            "has been studying",
            "studied"
        ],
        "answer": "has been studying",
        "explanation": "অгляд থেকে শুরু হয়ে এখনো চলছে এবং সময়ের সূচনা (since morning) আছে → Present Perfect Continuous।",
        "banglaRule": "সময়ের ব্যাপ্তি বা সূচনা সহ কোনো কাজ চলছে (since/for) → Present Perfect Continuous।"
    },
    {
        "id": "ten_m_2",
        "topic": "Tenses",
        "difficulty": "medium",
        "sentence": "While we were sleeping, the thief ___ into the house.",
        "options": [
            "break",
            "broke",
            "was breaking",
            "had broken"
        ],
        "answer": "broke",
        "explanation": "অতীতের একটি দীর্ঘ কাজের সময় আরেকটি সংক্ষিপ্ত কাজ করা বোঝালে Past Simple বসে।",
        "banglaRule": "অতীতের চলমান কাজের মাঝে অন্য ঘটনা → Past Simple (was/were + Ving + while + Past Simple)।"
    },
    {
        "id": "ten_m_3",
        "topic": "Tenses",
        "difficulty": "medium",
        "sentence": "I ___ my homework a few minutes ago.",
        "options": [
            "finish",
            "have finished",
            "finished",
            "had finished"
        ],
        "answer": "finished",
        "explanation": "\"ago\" নির্দিষ্ট অতীত সময় বোঝায়, তাই Past Simple tense বসে।",
        "banglaRule": "অতীত নির্দেশক শব্দ (ago, yesterday, last night) → Past Simple।"
    },
    {
        "id": "ten_m_4",
        "topic": "Tenses",
        "difficulty": "medium",
        "sentence": "She ___ for the exam since morning.",
        "options": [
            "is studying",
            "studies",
            "has been studying",
            "studied"
        ],
        "answer": "has been studying",
        "explanation": "অгляд থেকে শুরু হয়ে এখনো চলছে এবং সময়ের সূচনা (since morning) আছে → Present Perfect Continuous।",
        "banglaRule": "সময়ের ব্যাপ্তি বা সূচনা সহ কোনো কাজ চলছে (since/for) → Present Perfect Continuous।"
    },
    {
        "id": "ten_m_5",
        "topic": "Tenses",
        "difficulty": "medium",
        "sentence": "While we were sleeping, the thief ___ into the house.",
        "options": [
            "break",
            "broke",
            "was breaking",
            "had broken"
        ],
        "answer": "broke",
        "explanation": "অতীতের একটি দীর্ঘ কাজের সময় আরেকটি সংক্ষিপ্ত কাজ করা বোঝালে Past Simple বসে।",
        "banglaRule": "অতীতের চলমান কাজের মাঝে অন্য ঘটনা → Past Simple (was/were + Ving + while + Past Simple)।"
    },
    {
        "id": "ten_m_6",
        "topic": "Tenses",
        "difficulty": "medium",
        "sentence": "I ___ my homework a few minutes ago.",
        "options": [
            "finish",
            "have finished",
            "finished",
            "had finished"
        ],
        "answer": "finished",
        "explanation": "\"ago\" নির্দিষ্ট অতীত সময় বোঝায়, তাই Past Simple tense বসে।",
        "banglaRule": "অতীত নির্দেশক শব্দ (ago, yesterday, last night) → Past Simple।"
    },
    {
        "id": "ten_m_7",
        "topic": "Tenses",
        "difficulty": "medium",
        "sentence": "She ___ for the exam since morning.",
        "options": [
            "is studying",
            "studies",
            "has been studying",
            "studied"
        ],
        "answer": "has been studying",
        "explanation": "অгляд থেকে শুরু হয়ে এখনো চলছে এবং সময়ের সূচনা (since morning) আছে → Present Perfect Continuous।",
        "banglaRule": "সময়ের ব্যাপ্তি বা সূচনা সহ কোনো কাজ চলছে (since/for) → Present Perfect Continuous।"
    },
    {
        "id": "ten_m_8",
        "topic": "Tenses",
        "difficulty": "medium",
        "sentence": "While we were sleeping, the thief ___ into the house.",
        "options": [
            "break",
            "broke",
            "was breaking",
            "had broken"
        ],
        "answer": "broke",
        "explanation": "অতীতের একটি দীর্ঘ কাজের সময় আরেকটি সংক্ষিপ্ত কাজ করা বোঝালে Past Simple বসে।",
        "banglaRule": "অতীতের চলমান কাজের মাঝে অন্য ঘটনা → Past Simple (was/were + Ving + while + Past Simple)।"
    },
    {
        "id": "ten_m_9",
        "topic": "Tenses",
        "difficulty": "medium",
        "sentence": "I ___ my homework a few minutes ago.",
        "options": [
            "finish",
            "have finished",
            "finished",
            "had finished"
        ],
        "answer": "finished",
        "explanation": "\"ago\" নির্দিষ্ট অতীত সময় বোঝায়, তাই Past Simple tense বসে।",
        "banglaRule": "অতীত নির্দেশক শব্দ (ago, yesterday, last night) → Past Simple।"
    },
    {
        "id": "ten_m_10",
        "topic": "Tenses",
        "difficulty": "medium",
        "sentence": "She ___ for the exam since morning.",
        "options": [
            "is studying",
            "studies",
            "has been studying",
            "studied"
        ],
        "answer": "has been studying",
        "explanation": "অгляд থেকে শুরু হয়ে এখনো চলছে এবং সময়ের সূচনা (since morning) আছে → Present Perfect Continuous।",
        "banglaRule": "সময়ের ব্যাপ্তি বা সূচনা সহ কোনো কাজ চলছে (since/for) → Present Perfect Continuous।"
    },
    {
        "id": "ten_m_11",
        "topic": "Tenses",
        "difficulty": "medium",
        "sentence": "While we were sleeping, the thief ___ into the house.",
        "options": [
            "break",
            "broke",
            "was breaking",
            "had broken"
        ],
        "answer": "broke",
        "explanation": "অতীতের একটি দীর্ঘ কাজের সময় আরেকটি সংক্ষিপ্ত কাজ করা বোঝালে Past Simple বসে।",
        "banglaRule": "অতীতের চলমান কাজের মাঝে অন্য ঘটনা → Past Simple (was/were + Ving + while + Past Simple)।"
    },
    {
        "id": "ten_m_12",
        "topic": "Tenses",
        "difficulty": "medium",
        "sentence": "I ___ my homework a few minutes ago.",
        "options": [
            "finish",
            "have finished",
            "finished",
            "had finished"
        ],
        "answer": "finished",
        "explanation": "\"ago\" নির্দিষ্ট অতীত সময় বোঝায়, তাই Past Simple tense বসে।",
        "banglaRule": "অতীত নির্দেশক শব্দ (ago, yesterday, last night) → Past Simple।"
    },
    {
        "id": "ten_m_13",
        "topic": "Tenses",
        "difficulty": "medium",
        "sentence": "She ___ for the exam since morning.",
        "options": [
            "is studying",
            "studies",
            "has been studying",
            "studied"
        ],
        "answer": "has been studying",
        "explanation": "অгляд থেকে শুরু হয়ে এখনো চলছে এবং সময়ের সূচনা (since morning) আছে → Present Perfect Continuous।",
        "banglaRule": "সময়ের ব্যাপ্তি বা সূচনা সহ কোনো কাজ চলছে (since/for) → Present Perfect Continuous।"
    },
    {
        "id": "ten_m_14",
        "topic": "Tenses",
        "difficulty": "medium",
        "sentence": "While we were sleeping, the thief ___ into the house.",
        "options": [
            "break",
            "broke",
            "was breaking",
            "had broken"
        ],
        "answer": "broke",
        "explanation": "অতীতের একটি দীর্ঘ কাজের সময় আরেকটি সংক্ষিপ্ত কাজ করা বোঝালে Past Simple বসে।",
        "banglaRule": "অতীতের চলমান কাজের মাঝে অন্য ঘটনা → Past Simple (was/were + Ving + while + Past Simple)।"
    },
    {
        "id": "ten_m_15",
        "topic": "Tenses",
        "difficulty": "medium",
        "sentence": "I ___ my homework a few minutes ago.",
        "options": [
            "finish",
            "have finished",
            "finished",
            "had finished"
        ],
        "answer": "finished",
        "explanation": "\"ago\" নির্দিষ্ট অতীত সময় বোঝায়, তাই Past Simple tense বসে।",
        "banglaRule": "অতীত নির্দেশক শব্দ (ago, yesterday, last night) → Past Simple।"
    },
    {
        "id": "ten_m_16",
        "topic": "Tenses",
        "difficulty": "medium",
        "sentence": "She ___ for the exam since morning.",
        "options": [
            "is studying",
            "studies",
            "has been studying",
            "studied"
        ],
        "answer": "has been studying",
        "explanation": "অгляд থেকে শুরু হয়ে এখনো চলছে এবং সময়ের সূচনা (since morning) আছে → Present Perfect Continuous।",
        "banglaRule": "সময়ের ব্যাপ্তি বা সূচনা সহ কোনো কাজ চলছে (since/for) → Present Perfect Continuous।"
    },
    {
        "id": "ten_m_17",
        "topic": "Tenses",
        "difficulty": "medium",
        "sentence": "While we were sleeping, the thief ___ into the house.",
        "options": [
            "break",
            "broke",
            "was breaking",
            "had broken"
        ],
        "answer": "broke",
        "explanation": "অতীতের একটি দীর্ঘ কাজের সময় আরেকটি সংক্ষিপ্ত কাজ করা বোঝালে Past Simple বসে।",
        "banglaRule": "অতীতের চলমান কাজের মাঝে অন্য ঘটনা → Past Simple (was/were + Ving + while + Past Simple)।"
    },
    {
        "id": "ten_m_18",
        "topic": "Tenses",
        "difficulty": "medium",
        "sentence": "I ___ my homework a few minutes ago.",
        "options": [
            "finish",
            "have finished",
            "finished",
            "had finished"
        ],
        "answer": "finished",
        "explanation": "\"ago\" নির্দিষ্ট অতীত সময় বোঝায়, তাই Past Simple tense বসে।",
        "banglaRule": "অতীত নির্দেশক শব্দ (ago, yesterday, last night) → Past Simple।"
    },
    {
        "id": "ten_m_19",
        "topic": "Tenses",
        "difficulty": "medium",
        "sentence": "She ___ for the exam since morning.",
        "options": [
            "is studying",
            "studies",
            "has been studying",
            "studied"
        ],
        "answer": "has been studying",
        "explanation": "অгляд থেকে শুরু হয়ে এখনো চলছে এবং সময়ের সূচনা (since morning) আছে → Present Perfect Continuous।",
        "banglaRule": "সময়ের ব্যাপ্তি বা সূচনা সহ কোনো কাজ চলছে (since/for) → Present Perfect Continuous।"
    },
    {
        "id": "ten_m_20",
        "topic": "Tenses",
        "difficulty": "medium",
        "sentence": "While we were sleeping, the thief ___ into the house.",
        "options": [
            "break",
            "broke",
            "was breaking",
            "had broken"
        ],
        "answer": "broke",
        "explanation": "অতীতের একটি দীর্ঘ কাজের সময় আরেকটি সংক্ষিপ্ত কাজ করা বোঝালে Past Simple বসে।",
        "banglaRule": "অতীতের চলমান কাজের মাঝে অন্য ঘটনা → Past Simple (was/were + Ving + while + Past Simple)।"
    },
    {
        "id": "ten_m_21",
        "topic": "Tenses",
        "difficulty": "medium",
        "sentence": "I ___ my homework a few minutes ago.",
        "options": [
            "finish",
            "have finished",
            "finished",
            "had finished"
        ],
        "answer": "finished",
        "explanation": "\"ago\" নির্দিষ্ট অতীত সময় বোঝায়, তাই Past Simple tense বসে।",
        "banglaRule": "অতীত নির্দেশক শব্দ (ago, yesterday, last night) → Past Simple।"
    },
    {
        "id": "ten_m_22",
        "topic": "Tenses",
        "difficulty": "medium",
        "sentence": "She ___ for the exam since morning.",
        "options": [
            "is studying",
            "studies",
            "has been studying",
            "studied"
        ],
        "answer": "has been studying",
        "explanation": "অгляд থেকে শুরু হয়ে এখনো চলছে এবং সময়ের সূচনা (since morning) আছে → Present Perfect Continuous।",
        "banglaRule": "সময়ের ব্যাপ্তি বা সূচনা সহ কোনো কাজ চলছে (since/for) → Present Perfect Continuous।"
    },
    {
        "id": "ten_m_23",
        "topic": "Tenses",
        "difficulty": "medium",
        "sentence": "While we were sleeping, the thief ___ into the house.",
        "options": [
            "break",
            "broke",
            "was breaking",
            "had broken"
        ],
        "answer": "broke",
        "explanation": "অতীতের একটি দীর্ঘ কাজের সময় আরেকটি সংক্ষিপ্ত কাজ করা বোঝালে Past Simple বসে।",
        "banglaRule": "অতীতের চলমান কাজের মাঝে অন্য ঘটনা → Past Simple (was/were + Ving + while + Past Simple)।"
    },
    {
        "id": "ten_m_24",
        "topic": "Tenses",
        "difficulty": "medium",
        "sentence": "I ___ my homework a few minutes ago.",
        "options": [
            "finish",
            "have finished",
            "finished",
            "had finished"
        ],
        "answer": "finished",
        "explanation": "\"ago\" নির্দিষ্ট অতীত সময় বোঝায়, তাই Past Simple tense বসে।",
        "banglaRule": "অতীত নির্দেশক শব্দ (ago, yesterday, last night) → Past Simple।"
    },
    {
        "id": "ten_m_25",
        "topic": "Tenses",
        "difficulty": "medium",
        "sentence": "She ___ for the exam since morning.",
        "options": [
            "is studying",
            "studies",
            "has been studying",
            "studied"
        ],
        "answer": "has been studying",
        "explanation": "অгляд থেকে শুরু হয়ে এখনো চলছে এবং সময়ের সূচনা (since morning) আছে → Present Perfect Continuous।",
        "banglaRule": "সময়ের ব্যাপ্তি বা সূচনা সহ কোনো কাজ চলছে (since/for) → Present Perfect Continuous।"
    },
    {
        "id": "ten_m_26",
        "topic": "Tenses",
        "difficulty": "medium",
        "sentence": "While we were sleeping, the thief ___ into the house.",
        "options": [
            "break",
            "broke",
            "was breaking",
            "had broken"
        ],
        "answer": "broke",
        "explanation": "অতীতের একটি দীর্ঘ কাজের সময় আরেকটি সংক্ষিপ্ত কাজ করা বোঝালে Past Simple বসে।",
        "banglaRule": "অতীতের চলমান কাজের মাঝে অন্য ঘটনা → Past Simple (was/were + Ving + while + Past Simple)।"
    },
    {
        "id": "ten_m_27",
        "topic": "Tenses",
        "difficulty": "medium",
        "sentence": "I ___ my homework a few minutes ago.",
        "options": [
            "finish",
            "have finished",
            "finished",
            "had finished"
        ],
        "answer": "finished",
        "explanation": "\"ago\" নির্দিষ্ট অতীত সময় বোঝায়, তাই Past Simple tense বসে।",
        "banglaRule": "অতীত নির্দেশক শব্দ (ago, yesterday, last night) → Past Simple।"
    },
    {
        "id": "ten_m_28",
        "topic": "Tenses",
        "difficulty": "medium",
        "sentence": "She ___ for the exam since morning.",
        "options": [
            "is studying",
            "studies",
            "has been studying",
            "studied"
        ],
        "answer": "has been studying",
        "explanation": "অгляд থেকে শুরু হয়ে এখনো চলছে এবং সময়ের সূচনা (since morning) আছে → Present Perfect Continuous।",
        "banglaRule": "সময়ের ব্যাপ্তি বা সূচনা সহ কোনো কাজ চলছে (since/for) → Present Perfect Continuous।"
    },
    {
        "id": "ten_m_29",
        "topic": "Tenses",
        "difficulty": "medium",
        "sentence": "While we were sleeping, the thief ___ into the house.",
        "options": [
            "break",
            "broke",
            "was breaking",
            "had broken"
        ],
        "answer": "broke",
        "explanation": "অতীতের একটি দীর্ঘ কাজের সময় আরেকটি সংক্ষিপ্ত কাজ করা বোঝালে Past Simple বসে।",
        "banglaRule": "অতীতের চলমান কাজের মাঝে অন্য ঘটনা → Past Simple (was/were + Ving + while + Past Simple)।"
    },
    {
        "id": "ten_m_30",
        "topic": "Tenses",
        "difficulty": "medium",
        "sentence": "I ___ my homework a few minutes ago.",
        "options": [
            "finish",
            "have finished",
            "finished",
            "had finished"
        ],
        "answer": "finished",
        "explanation": "\"ago\" নির্দিষ্ট অতীত সময় বোঝায়, তাই Past Simple tense বসে।",
        "banglaRule": "অতীত নির্দেশক শব্দ (ago, yesterday, last night) → Past Simple।"
    },
    {
        "id": "ten_m_31",
        "topic": "Tenses",
        "difficulty": "medium",
        "sentence": "She ___ for the exam since morning.",
        "options": [
            "is studying",
            "studies",
            "has been studying",
            "studied"
        ],
        "answer": "has been studying",
        "explanation": "অгляд থেকে শুরু হয়ে এখনো চলছে এবং সময়ের সূচনা (since morning) আছে → Present Perfect Continuous।",
        "banglaRule": "সময়ের ব্যাপ্তি বা সূচনা সহ কোনো কাজ চলছে (since/for) → Present Perfect Continuous।"
    },
    {
        "id": "ten_m_32",
        "topic": "Tenses",
        "difficulty": "medium",
        "sentence": "While we were sleeping, the thief ___ into the house.",
        "options": [
            "break",
            "broke",
            "was breaking",
            "had broken"
        ],
        "answer": "broke",
        "explanation": "অতীতের একটি দীর্ঘ কাজের সময় আরেকটি সংক্ষিপ্ত কাজ করা বোঝালে Past Simple বসে।",
        "banglaRule": "অতীতের চলমান কাজের মাঝে অন্য ঘটনা → Past Simple (was/were + Ving + while + Past Simple)।"
    },
    {
        "id": "ten_m_33",
        "topic": "Tenses",
        "difficulty": "medium",
        "sentence": "I ___ my homework a few minutes ago.",
        "options": [
            "finish",
            "have finished",
            "finished",
            "had finished"
        ],
        "answer": "finished",
        "explanation": "\"ago\" নির্দিষ্ট অতীত সময় বোঝায়, তাই Past Simple tense বসে।",
        "banglaRule": "অতীত নির্দেশক শব্দ (ago, yesterday, last night) → Past Simple।"
    },
    {
        "id": "ten_m_34",
        "topic": "Tenses",
        "difficulty": "medium",
        "sentence": "She ___ for the exam since morning.",
        "options": [
            "is studying",
            "studies",
            "has been studying",
            "studied"
        ],
        "answer": "has been studying",
        "explanation": "অгляд থেকে শুরু হয়ে এখনো চলছে এবং সময়ের সূচনা (since morning) আছে → Present Perfect Continuous।",
        "banglaRule": "সময়ের ব্যাপ্তি বা সূচনা সহ কোনো কাজ চলছে (since/for) → Present Perfect Continuous।"
    },
    {
        "id": "ten_m_35",
        "topic": "Tenses",
        "difficulty": "medium",
        "sentence": "While we were sleeping, the thief ___ into the house.",
        "options": [
            "break",
            "broke",
            "was breaking",
            "had broken"
        ],
        "answer": "broke",
        "explanation": "অতীতের একটি দীর্ঘ কাজের সময় আরেকটি সংক্ষিপ্ত কাজ করা বোঝালে Past Simple বসে।",
        "banglaRule": "অতীতের চলমান কাজের মাঝে অন্য ঘটনা → Past Simple (was/were + Ving + while + Past Simple)।"
    },
    {
        "id": "ten_m_36",
        "topic": "Tenses",
        "difficulty": "medium",
        "sentence": "I ___ my homework a few minutes ago.",
        "options": [
            "finish",
            "have finished",
            "finished",
            "had finished"
        ],
        "answer": "finished",
        "explanation": "\"ago\" নির্দিষ্ট অতীত সময় বোঝায়, তাই Past Simple tense বসে।",
        "banglaRule": "অতীত নির্দেশক শব্দ (ago, yesterday, last night) → Past Simple।"
    },
    {
        "id": "ten_m_37",
        "topic": "Tenses",
        "difficulty": "medium",
        "sentence": "She ___ for the exam since morning.",
        "options": [
            "is studying",
            "studies",
            "has been studying",
            "studied"
        ],
        "answer": "has been studying",
        "explanation": "অгляд থেকে শুরু হয়ে এখনো চলছে এবং সময়ের সূচনা (since morning) আছে → Present Perfect Continuous।",
        "banglaRule": "সময়ের ব্যাপ্তি বা সূচনা সহ কোনো কাজ চলছে (since/for) → Present Perfect Continuous।"
    },
    {
        "id": "ten_m_38",
        "topic": "Tenses",
        "difficulty": "medium",
        "sentence": "While we were sleeping, the thief ___ into the house.",
        "options": [
            "break",
            "broke",
            "was breaking",
            "had broken"
        ],
        "answer": "broke",
        "explanation": "অতীতের একটি দীর্ঘ কাজের সময় আরেকটি সংক্ষিপ্ত কাজ করা বোঝালে Past Simple বসে।",
        "banglaRule": "অতীতের চলমান কাজের মাঝে অন্য ঘটনা → Past Simple (was/were + Ving + while + Past Simple)।"
    },
    {
        "id": "ten_m_39",
        "topic": "Tenses",
        "difficulty": "medium",
        "sentence": "I ___ my homework a few minutes ago.",
        "options": [
            "finish",
            "have finished",
            "finished",
            "had finished"
        ],
        "answer": "finished",
        "explanation": "\"ago\" নির্দিষ্ট অতীত সময় বোঝায়, তাই Past Simple tense বসে।",
        "banglaRule": "অতীত নির্দেশক শব্দ (ago, yesterday, last night) → Past Simple।"
    },
    {
        "id": "ten_m_40",
        "topic": "Tenses",
        "difficulty": "medium",
        "sentence": "She ___ for the exam since morning.",
        "options": [
            "is studying",
            "studies",
            "has been studying",
            "studied"
        ],
        "answer": "has been studying",
        "explanation": "অгляд থেকে শুরু হয়ে এখনো চলছে এবং সময়ের সূচনা (since morning) আছে → Present Perfect Continuous।",
        "banglaRule": "সময়ের ব্যাপ্তি বা সূচনা সহ কোনো কাজ চলছে (since/for) → Present Perfect Continuous।"
    },
    {
        "id": "ten_h_1",
        "topic": "Tenses",
        "difficulty": "hard",
        "sentence": "By the time you arrive, I ___ the work.",
        "options": [
            "will finish",
            "will have finished",
            "finish",
            "finished"
        ],
        "answer": "will have finished",
        "explanation": "ভবিষ্যতের একটি নির্দিষ্ট সময়ের মধ্যে কাজ শেষ হওয়া → Future Perfect।",
        "banglaRule": "ভবিষ্যতের শেষ হওয়া কাজ = will have + V3।"
    },
    {
        "id": "ten_h_2",
        "topic": "Tenses",
        "difficulty": "hard",
        "sentence": "By the time you reach, I ___ the work.",
        "options": [
            "will finish",
            "will have finished",
            "finish",
            "finished"
        ],
        "answer": "will have finished",
        "explanation": "ভবিষ্যতের একটি নির্দিষ্ট সময়ের মধ্যে কাজ শেষ হওয়া → Future Perfect।",
        "banglaRule": "ভবিষ্যতের শেষ হওয়া কাজ = will have + V3।"
    },
    {
        "id": "ten_h_3",
        "topic": "Tenses",
        "difficulty": "hard",
        "sentence": "If I ___ rich, I would help everyone.",
        "options": [
            "am",
            "was",
            "were",
            "had been"
        ],
        "answer": "were",
        "explanation": "অবাস্তব কল্পনা বা Second Conditional-এ সব subject-এর সাথে were বসে।",
        "banglaRule": "অবাস্তব কল্পনা = was-এর জায়গায় were বসে।"
    },
    {
        "id": "ten_h_4",
        "topic": "Tenses",
        "difficulty": "hard",
        "sentence": "If I ___ prime minister, I would help everyone.",
        "options": [
            "am",
            "was",
            "were",
            "had been"
        ],
        "answer": "were",
        "explanation": "অবাস্তব কল্পনা বা Second Conditional-এ সব subject-এর সাথে were বসে।",
        "banglaRule": "অবাস্তব কল্পনা = was-এর জায়গায় were বসে।"
    },
    {
        "id": "ten_h_5",
        "topic": "Tenses",
        "difficulty": "hard",
        "sentence": "He talks as if he ___ everything.",
        "options": [
            "knows",
            "know",
            "knew",
            "had known"
        ],
        "answer": "knew",
        "explanation": "\"as if/as though\"-এর প্রথম অংশ present হলে পরের অংশ past simple হয়।",
        "banglaRule": "as if + past simple (অবাস্তব বর্তমান বোঝাতে)।"
    },
    {
        "id": "ten_h_6",
        "topic": "Tenses",
        "difficulty": "hard",
        "sentence": "He talks as if he ___ everything.",
        "options": [
            "knows",
            "know",
            "knew",
            "had known"
        ],
        "answer": "knew",
        "explanation": "\"as if/as though\"-এর প্রথম অংশ present হলে পরের অংশ past simple হয়।",
        "banglaRule": "as if + past simple (অবাস্তব বর্তমান বোঝাতে)।"
    },
    {
        "id": "ten_h_7",
        "topic": "Tenses",
        "difficulty": "hard",
        "sentence": "I wish I ___ a king.",
        "options": [
            "am",
            "was",
            "were",
            "had been"
        ],
        "answer": "were",
        "explanation": "ইচ্ছা প্রকাশ করতে অবাস্তব অতীত \"were\" ব্যবহৃত হয়।",
        "banglaRule": "Wish + subject + were।"
    },
    {
        "id": "ten_h_8",
        "topic": "Tenses",
        "difficulty": "hard",
        "sentence": "I wish I ___ a king.",
        "options": [
            "am",
            "was",
            "were",
            "had been"
        ],
        "answer": "were",
        "explanation": "ইচ্ছা প্রকাশ করতে অবাস্তব অতীত \"were\" ব্যবহৃত হয়।",
        "banglaRule": "Wish + subject + were।"
    },
    {
        "id": "ten_h_9",
        "topic": "Tenses",
        "difficulty": "hard",
        "sentence": "She behaved as if she ___ the president.",
        "options": [
            "was",
            "were",
            "had been",
            "is"
        ],
        "answer": "had been",
        "explanation": "\"as if\"-এর প্রথম অংশ past হলে পরের অংশ past perfect হয়।",
        "banglaRule": "Past simple + as if + past perfect।"
    },
    {
        "id": "ten_h_10",
        "topic": "Tenses",
        "difficulty": "hard",
        "sentence": "She behaved as if she ___ the queen.",
        "options": [
            "was",
            "were",
            "had been",
            "is"
        ],
        "answer": "had been",
        "explanation": "\"as if\"-এর প্রথম অংশ past হলে পরের অংশ past perfect হয়।",
        "banglaRule": "Past simple + as if + past perfect।"
    },
    {
        "id": "ten_h_11",
        "topic": "Tenses",
        "difficulty": "hard",
        "sentence": "It is high time we ___ our habits.",
        "options": [
            "change",
            "changed",
            "is changing",
            "should change"
        ],
        "answer": "changed",
        "explanation": "\"It is high time\"-এর পর subject থাকলে Past Simple tense হয়।",
        "banglaRule": "It is high time + subject + V2 (Past Simple)।"
    },
    {
        "id": "ten_h_12",
        "topic": "Tenses",
        "difficulty": "hard",
        "sentence": "It is high time we ___ our behavior.",
        "options": [
            "change",
            "changed",
            "is changing",
            "should change"
        ],
        "answer": "changed",
        "explanation": "\"It is high time\"-এর পর subject থাকলে Past Simple tense হয়।",
        "banglaRule": "It is high time + subject + V2 (Past Simple)।"
    },
    {
        "id": "ten_h_13",
        "topic": "Tenses",
        "difficulty": "hard",
        "sentence": "No sooner had the thief seen the police than he ___ away.",
        "options": [
            "run",
            "ran",
            "runs",
            "running"
        ],
        "answer": "ran",
        "explanation": "\"No sooner had ... than\"-এর পর Past Simple tense হয়।",
        "banglaRule": "No sooner had + V3 ... than + V2।"
    },
    {
        "id": "ten_h_14",
        "topic": "Tenses",
        "difficulty": "hard",
        "sentence": "No sooner had the thief seen the guard than he ___ away.",
        "options": [
            "run",
            "ran",
            "runs",
            "running"
        ],
        "answer": "ran",
        "explanation": "\"No sooner had ... than\"-এর পর Past Simple tense হয়।",
        "banglaRule": "No sooner had + V3 ... than + V2।"
    },
    {
        "id": "ten_h_15",
        "topic": "Tenses",
        "difficulty": "hard",
        "sentence": "Hardly had I reached the station when the train ___.",
        "options": [
            "leaves",
            "left",
            "has left",
            "had left"
        ],
        "answer": "left",
        "explanation": "\"Hardly had ... when\"-এর পর Past Simple tense হয়।",
        "banglaRule": "Hardly had + V3 ... when + V2।"
    },
    {
        "id": "ten_h_16",
        "topic": "Tenses",
        "difficulty": "hard",
        "sentence": "Hardly had I reached the airport when the train ___.",
        "options": [
            "leaves",
            "left",
            "has left",
            "had left"
        ],
        "answer": "left",
        "explanation": "\"Hardly had ... when\"-এর পর Past Simple tense হয়।",
        "banglaRule": "Hardly had + V3 ... when + V2।"
    },
    {
        "id": "ten_h_17",
        "topic": "Tenses",
        "difficulty": "hard",
        "sentence": "The patient ___ before the doctor came.",
        "options": [
            "died",
            "has died",
            "had died",
            "was dying"
        ],
        "answer": "had died",
        "explanation": "অতীতের দুটি কাজের মধ্যে যেটি আগে ঘটেছে সেটি Past Perfect হয়।",
        "banglaRule": "Doctor came (অতীত) এর আগে রোগী মারা গেছে → Past Perfect (had + V3)।"
    },
    {
        "id": "ten_h_18",
        "topic": "Tenses",
        "difficulty": "hard",
        "sentence": "The old man ___ before the medic came.",
        "options": [
            "died",
            "has died",
            "had died",
            "was dying"
        ],
        "answer": "had died",
        "explanation": "অতীতের দুটি কাজের মধ্যে যেটি আগে ঘটেছে সেটি Past Perfect হয়।",
        "banglaRule": "Doctor came (অতীত) এর আগে রোগী মারা গেছে → Past Perfect (had + V3)।"
    },
    {
        "id": "ten_h_19",
        "topic": "Tenses",
        "difficulty": "hard",
        "sentence": "After the doctor ___ , the patient died.",
        "options": [
            "arrived",
            "had arrived",
            "arrives",
            "was arriving"
        ],
        "answer": "had arrived",
        "explanation": "\"After\"-এর পরের অংশ Past Perfect tense হয়।",
        "banglaRule": "Past simple + after + Past perfect।"
    },
    {
        "id": "ten_h_20",
        "topic": "Tenses",
        "difficulty": "hard",
        "sentence": "After the medic ___ , the old man died.",
        "options": [
            "arrived",
            "had arrived",
            "arrives",
            "was arriving"
        ],
        "answer": "had arrived",
        "explanation": "\"After\"-এর পরের অংশ Past Perfect tense হয়।",
        "banglaRule": "Past simple + after + Past perfect।"
    },
    {
        "id": "sva_e_1",
        "topic": "Subject-Verb Agreement",
        "difficulty": "easy",
        "sentence": "One of the players ___ injured.",
        "options": [
            "has",
            "have",
            "is",
            "were"
        ],
        "answer": "is",
        "explanation": "\"One of\"-এর পর noun plural হলেও verb singular হয়।",
        "banglaRule": "One of / Each of + Plural Noun + Singular Verb।"
    },
    {
        "id": "sva_e_2",
        "topic": "Subject-Verb Agreement",
        "difficulty": "easy",
        "sentence": "Sarah and David ___ working on a project.",
        "options": [
            "is",
            "are",
            "am",
            "was"
        ],
        "answer": "are",
        "explanation": "\"and\" দ্বারা যুক্ত একাধিক subject plural হয়, তাই \"are\" বসে।",
        "banglaRule": "A and B + Plural Verb।"
    },
    {
        "id": "sva_e_3",
        "topic": "Subject-Verb Agreement",
        "difficulty": "easy",
        "sentence": "One of the players ___ injured.",
        "options": [
            "has",
            "have",
            "is",
            "were"
        ],
        "answer": "is",
        "explanation": "\"One of\"-এর পর noun plural হলেও verb singular হয়।",
        "banglaRule": "One of / Each of + Plural Noun + Singular Verb।"
    },
    {
        "id": "sva_e_4",
        "topic": "Subject-Verb Agreement",
        "difficulty": "easy",
        "sentence": "David and Lisa ___ working on a project.",
        "options": [
            "is",
            "are",
            "am",
            "was"
        ],
        "answer": "are",
        "explanation": "\"and\" দ্বারা যুক্ত একাধিক subject plural হয়, তাই \"are\" বসে।",
        "banglaRule": "A and B + Plural Verb।"
    },
    {
        "id": "sva_e_5",
        "topic": "Subject-Verb Agreement",
        "difficulty": "easy",
        "sentence": "One of the players ___ injured.",
        "options": [
            "has",
            "have",
            "is",
            "were"
        ],
        "answer": "is",
        "explanation": "\"One of\"-এর পর noun plural হলেও verb singular হয়।",
        "banglaRule": "One of / Each of + Plural Noun + Singular Verb।"
    },
    {
        "id": "sva_e_6",
        "topic": "Subject-Verb Agreement",
        "difficulty": "easy",
        "sentence": "Lisa and Fahim ___ working on a project.",
        "options": [
            "is",
            "are",
            "am",
            "was"
        ],
        "answer": "are",
        "explanation": "\"and\" দ্বারা যুক্ত একাধিক subject plural হয়, তাই \"are\" বসে।",
        "banglaRule": "A and B + Plural Verb।"
    },
    {
        "id": "sva_e_7",
        "topic": "Subject-Verb Agreement",
        "difficulty": "easy",
        "sentence": "One of the players ___ injured.",
        "options": [
            "has",
            "have",
            "is",
            "were"
        ],
        "answer": "is",
        "explanation": "\"One of\"-এর পর noun plural হলেও verb singular হয়।",
        "banglaRule": "One of / Each of + Plural Noun + Singular Verb।"
    },
    {
        "id": "sva_e_8",
        "topic": "Subject-Verb Agreement",
        "difficulty": "easy",
        "sentence": "Fahim and John ___ working on a project.",
        "options": [
            "is",
            "are",
            "am",
            "was"
        ],
        "answer": "are",
        "explanation": "\"and\" দ্বারা যুক্ত একাধিক subject plural হয়, তাই \"are\" বসে।",
        "banglaRule": "A and B + Plural Verb।"
    },
    {
        "id": "sva_e_9",
        "topic": "Subject-Verb Agreement",
        "difficulty": "easy",
        "sentence": "One of the players ___ injured.",
        "options": [
            "has",
            "have",
            "is",
            "were"
        ],
        "answer": "is",
        "explanation": "\"One of\"-এর পর noun plural হলেও verb singular হয়।",
        "banglaRule": "One of / Each of + Plural Noun + Singular Verb।"
    },
    {
        "id": "sva_e_10",
        "topic": "Subject-Verb Agreement",
        "difficulty": "easy",
        "sentence": "John and Jessica ___ working on a project.",
        "options": [
            "is",
            "are",
            "am",
            "was"
        ],
        "answer": "are",
        "explanation": "\"and\" দ্বারা যুক্ত একাধিক subject plural হয়, তাই \"are\" বসে।",
        "banglaRule": "A and B + Plural Verb।"
    },
    {
        "id": "sva_e_11",
        "topic": "Subject-Verb Agreement",
        "difficulty": "easy",
        "sentence": "One of the players ___ injured.",
        "options": [
            "has",
            "have",
            "is",
            "were"
        ],
        "answer": "is",
        "explanation": "\"One of\"-এর পর noun plural হলেও verb singular হয়।",
        "banglaRule": "One of / Each of + Plural Noun + Singular Verb।"
    },
    {
        "id": "sva_e_12",
        "topic": "Subject-Verb Agreement",
        "difficulty": "easy",
        "sentence": "Jessica and Ryan ___ working on a project.",
        "options": [
            "is",
            "are",
            "am",
            "was"
        ],
        "answer": "are",
        "explanation": "\"and\" দ্বারা যুক্ত একাধিক subject plural হয়, তাই \"are\" বসে।",
        "banglaRule": "A and B + Plural Verb।"
    },
    {
        "id": "sva_e_13",
        "topic": "Subject-Verb Agreement",
        "difficulty": "easy",
        "sentence": "One of the players ___ injured.",
        "options": [
            "has",
            "have",
            "is",
            "were"
        ],
        "answer": "is",
        "explanation": "\"One of\"-এর পর noun plural হলেও verb singular হয়।",
        "banglaRule": "One of / Each of + Plural Noun + Singular Verb।"
    },
    {
        "id": "sva_e_14",
        "topic": "Subject-Verb Agreement",
        "difficulty": "easy",
        "sentence": "Ryan and Rahim ___ working on a project.",
        "options": [
            "is",
            "are",
            "am",
            "was"
        ],
        "answer": "are",
        "explanation": "\"and\" দ্বারা যুক্ত একাধিক subject plural হয়, তাই \"are\" বসে।",
        "banglaRule": "A and B + Plural Verb।"
    },
    {
        "id": "sva_e_15",
        "topic": "Subject-Verb Agreement",
        "difficulty": "easy",
        "sentence": "One of the players ___ injured.",
        "options": [
            "has",
            "have",
            "is",
            "were"
        ],
        "answer": "is",
        "explanation": "\"One of\"-এর পর noun plural হলেও verb singular হয়।",
        "banglaRule": "One of / Each of + Plural Noun + Singular Verb।"
    },
    {
        "id": "sva_e_16",
        "topic": "Subject-Verb Agreement",
        "difficulty": "easy",
        "sentence": "Rahim and Sarah ___ working on a project.",
        "options": [
            "is",
            "are",
            "am",
            "was"
        ],
        "answer": "are",
        "explanation": "\"and\" দ্বারা যুক্ত একাধিক subject plural হয়, তাই \"are\" বসে।",
        "banglaRule": "A and B + Plural Verb।"
    },
    {
        "id": "sva_e_17",
        "topic": "Subject-Verb Agreement",
        "difficulty": "easy",
        "sentence": "One of the players ___ injured.",
        "options": [
            "has",
            "have",
            "is",
            "were"
        ],
        "answer": "is",
        "explanation": "\"One of\"-এর পর noun plural হলেও verb singular হয়।",
        "banglaRule": "One of / Each of + Plural Noun + Singular Verb।"
    },
    {
        "id": "sva_e_18",
        "topic": "Subject-Verb Agreement",
        "difficulty": "easy",
        "sentence": "Sarah and David ___ working on a project.",
        "options": [
            "is",
            "are",
            "am",
            "was"
        ],
        "answer": "are",
        "explanation": "\"and\" দ্বারা যুক্ত একাধিক subject plural হয়, তাই \"are\" বসে।",
        "banglaRule": "A and B + Plural Verb।"
    },
    {
        "id": "sva_e_19",
        "topic": "Subject-Verb Agreement",
        "difficulty": "easy",
        "sentence": "One of the players ___ injured.",
        "options": [
            "has",
            "have",
            "is",
            "were"
        ],
        "answer": "is",
        "explanation": "\"One of\"-এর পর noun plural হলেও verb singular হয়।",
        "banglaRule": "One of / Each of + Plural Noun + Singular Verb।"
    },
    {
        "id": "sva_e_20",
        "topic": "Subject-Verb Agreement",
        "difficulty": "easy",
        "sentence": "David and Lisa ___ working on a project.",
        "options": [
            "is",
            "are",
            "am",
            "was"
        ],
        "answer": "are",
        "explanation": "\"and\" দ্বারা যুক্ত একাধিক subject plural হয়, তাই \"are\" বসে।",
        "banglaRule": "A and B + Plural Verb।"
    },
    {
        "id": "sva_e_21",
        "topic": "Subject-Verb Agreement",
        "difficulty": "easy",
        "sentence": "One of the players ___ injured.",
        "options": [
            "has",
            "have",
            "is",
            "were"
        ],
        "answer": "is",
        "explanation": "\"One of\"-এর পর noun plural হলেও verb singular হয়।",
        "banglaRule": "One of / Each of + Plural Noun + Singular Verb।"
    },
    {
        "id": "sva_e_22",
        "topic": "Subject-Verb Agreement",
        "difficulty": "easy",
        "sentence": "Lisa and Fahim ___ working on a project.",
        "options": [
            "is",
            "are",
            "am",
            "was"
        ],
        "answer": "are",
        "explanation": "\"and\" দ্বারা যুক্ত একাধিক subject plural হয়, তাই \"are\" বসে।",
        "banglaRule": "A and B + Plural Verb।"
    },
    {
        "id": "sva_e_23",
        "topic": "Subject-Verb Agreement",
        "difficulty": "easy",
        "sentence": "One of the players ___ injured.",
        "options": [
            "has",
            "have",
            "is",
            "were"
        ],
        "answer": "is",
        "explanation": "\"One of\"-এর পর noun plural হলেও verb singular হয়।",
        "banglaRule": "One of / Each of + Plural Noun + Singular Verb।"
    },
    {
        "id": "sva_e_24",
        "topic": "Subject-Verb Agreement",
        "difficulty": "easy",
        "sentence": "Fahim and John ___ working on a project.",
        "options": [
            "is",
            "are",
            "am",
            "was"
        ],
        "answer": "are",
        "explanation": "\"and\" দ্বারা যুক্ত একাধিক subject plural হয়, তাই \"are\" বসে।",
        "banglaRule": "A and B + Plural Verb।"
    },
    {
        "id": "sva_e_25",
        "topic": "Subject-Verb Agreement",
        "difficulty": "easy",
        "sentence": "One of the players ___ injured.",
        "options": [
            "has",
            "have",
            "is",
            "were"
        ],
        "answer": "is",
        "explanation": "\"One of\"-এর পর noun plural হলেও verb singular হয়।",
        "banglaRule": "One of / Each of + Plural Noun + Singular Verb।"
    },
    {
        "id": "sva_e_26",
        "topic": "Subject-Verb Agreement",
        "difficulty": "easy",
        "sentence": "John and Jessica ___ working on a project.",
        "options": [
            "is",
            "are",
            "am",
            "was"
        ],
        "answer": "are",
        "explanation": "\"and\" দ্বারা যুক্ত একাধিক subject plural হয়, তাই \"are\" বসে।",
        "banglaRule": "A and B + Plural Verb।"
    },
    {
        "id": "sva_e_27",
        "topic": "Subject-Verb Agreement",
        "difficulty": "easy",
        "sentence": "One of the players ___ injured.",
        "options": [
            "has",
            "have",
            "is",
            "were"
        ],
        "answer": "is",
        "explanation": "\"One of\"-এর পর noun plural হলেও verb singular হয়।",
        "banglaRule": "One of / Each of + Plural Noun + Singular Verb।"
    },
    {
        "id": "sva_e_28",
        "topic": "Subject-Verb Agreement",
        "difficulty": "easy",
        "sentence": "Jessica and Ryan ___ working on a project.",
        "options": [
            "is",
            "are",
            "am",
            "was"
        ],
        "answer": "are",
        "explanation": "\"and\" দ্বারা যুক্ত একাধিক subject plural হয়, তাই \"are\" বসে।",
        "banglaRule": "A and B + Plural Verb।"
    },
    {
        "id": "sva_e_29",
        "topic": "Subject-Verb Agreement",
        "difficulty": "easy",
        "sentence": "One of the players ___ injured.",
        "options": [
            "has",
            "have",
            "is",
            "were"
        ],
        "answer": "is",
        "explanation": "\"One of\"-এর পর noun plural হলেও verb singular হয়।",
        "banglaRule": "One of / Each of + Plural Noun + Singular Verb।"
    },
    {
        "id": "sva_e_30",
        "topic": "Subject-Verb Agreement",
        "difficulty": "easy",
        "sentence": "Ryan and Rahim ___ working on a project.",
        "options": [
            "is",
            "are",
            "am",
            "was"
        ],
        "answer": "are",
        "explanation": "\"and\" দ্বারা যুক্ত একাধিক subject plural হয়, তাই \"are\" বসে।",
        "banglaRule": "A and B + Plural Verb।"
    },
    {
        "id": "sva_e_31",
        "topic": "Subject-Verb Agreement",
        "difficulty": "easy",
        "sentence": "One of the players ___ injured.",
        "options": [
            "has",
            "have",
            "is",
            "were"
        ],
        "answer": "is",
        "explanation": "\"One of\"-এর পর noun plural হলেও verb singular হয়।",
        "banglaRule": "One of / Each of + Plural Noun + Singular Verb।"
    },
    {
        "id": "sva_e_32",
        "topic": "Subject-Verb Agreement",
        "difficulty": "easy",
        "sentence": "Rahim and Sarah ___ working on a project.",
        "options": [
            "is",
            "are",
            "am",
            "was"
        ],
        "answer": "are",
        "explanation": "\"and\" দ্বারা যুক্ত একাধিক subject plural হয়, তাই \"are\" বসে।",
        "banglaRule": "A and B + Plural Verb।"
    },
    {
        "id": "sva_e_33",
        "topic": "Subject-Verb Agreement",
        "difficulty": "easy",
        "sentence": "One of the players ___ injured.",
        "options": [
            "has",
            "have",
            "is",
            "were"
        ],
        "answer": "is",
        "explanation": "\"One of\"-এর পর noun plural হলেও verb singular হয়।",
        "banglaRule": "One of / Each of + Plural Noun + Singular Verb।"
    },
    {
        "id": "sva_e_34",
        "topic": "Subject-Verb Agreement",
        "difficulty": "easy",
        "sentence": "Sarah and David ___ working on a project.",
        "options": [
            "is",
            "are",
            "am",
            "was"
        ],
        "answer": "are",
        "explanation": "\"and\" দ্বারা যুক্ত একাধিক subject plural হয়, তাই \"are\" বসে।",
        "banglaRule": "A and B + Plural Verb।"
    },
    {
        "id": "sva_e_35",
        "topic": "Subject-Verb Agreement",
        "difficulty": "easy",
        "sentence": "One of the players ___ injured.",
        "options": [
            "has",
            "have",
            "is",
            "were"
        ],
        "answer": "is",
        "explanation": "\"One of\"-এর পর noun plural হলেও verb singular হয়।",
        "banglaRule": "One of / Each of + Plural Noun + Singular Verb।"
    },
    {
        "id": "sva_e_36",
        "topic": "Subject-Verb Agreement",
        "difficulty": "easy",
        "sentence": "David and Lisa ___ working on a project.",
        "options": [
            "is",
            "are",
            "am",
            "was"
        ],
        "answer": "are",
        "explanation": "\"and\" দ্বারা যুক্ত একাধিক subject plural হয়, তাই \"are\" বসে।",
        "banglaRule": "A and B + Plural Verb।"
    },
    {
        "id": "sva_e_37",
        "topic": "Subject-Verb Agreement",
        "difficulty": "easy",
        "sentence": "One of the players ___ injured.",
        "options": [
            "has",
            "have",
            "is",
            "were"
        ],
        "answer": "is",
        "explanation": "\"One of\"-এর পর noun plural হলেও verb singular হয়।",
        "banglaRule": "One of / Each of + Plural Noun + Singular Verb।"
    },
    {
        "id": "sva_e_38",
        "topic": "Subject-Verb Agreement",
        "difficulty": "easy",
        "sentence": "Lisa and Fahim ___ working on a project.",
        "options": [
            "is",
            "are",
            "am",
            "was"
        ],
        "answer": "are",
        "explanation": "\"and\" দ্বারা যুক্ত একাধিক subject plural হয়, তাই \"are\" বসে।",
        "banglaRule": "A and B + Plural Verb।"
    },
    {
        "id": "sva_e_39",
        "topic": "Subject-Verb Agreement",
        "difficulty": "easy",
        "sentence": "One of the players ___ injured.",
        "options": [
            "has",
            "have",
            "is",
            "were"
        ],
        "answer": "is",
        "explanation": "\"One of\"-এর পর noun plural হলেও verb singular হয়।",
        "banglaRule": "One of / Each of + Plural Noun + Singular Verb।"
    },
    {
        "id": "sva_e_40",
        "topic": "Subject-Verb Agreement",
        "difficulty": "easy",
        "sentence": "Fahim and John ___ working on a project.",
        "options": [
            "is",
            "are",
            "am",
            "was"
        ],
        "answer": "are",
        "explanation": "\"and\" দ্বারা যুক্ত একাধিক subject plural হয়, তাই \"are\" বসে।",
        "banglaRule": "A and B + Plural Verb।"
    },
    {
        "id": "sva_m_1",
        "topic": "Subject-Verb Agreement",
        "difficulty": "medium",
        "sentence": "The news ___ true.",
        "options": [
            "is",
            "are",
            "were",
            "have been"
        ],
        "answer": "is",
        "explanation": "\"News\" দেখতে plural হলেও এটি singular uncountable noun, তাই verb singular হয়।",
        "banglaRule": "Uncountable/Singular form (news, physics, politics) + Singular Verb।"
    },
    {
        "id": "sva_m_2",
        "topic": "Subject-Verb Agreement",
        "difficulty": "medium",
        "sentence": "The information ___ true.",
        "options": [
            "is",
            "are",
            "were",
            "have been"
        ],
        "answer": "is",
        "explanation": "\"News\" দেখতে plural হলেও এটি singular uncountable noun, তাই verb singular হয়।",
        "banglaRule": "Uncountable/Singular form (news, physics, politics) + Singular Verb।"
    },
    {
        "id": "sva_m_3",
        "topic": "Subject-Verb Agreement",
        "difficulty": "medium",
        "sentence": "Mathematics ___ my favorite subject.",
        "options": [
            "is",
            "are",
            "were",
            "am"
        ],
        "answer": "is",
        "explanation": "বিষয়ের নাম singular, তাই verb singular হবে।",
        "banglaRule": "Subject names (Mathematics, Physics) + Singular Verb।"
    },
    {
        "id": "sva_m_4",
        "topic": "Subject-Verb Agreement",
        "difficulty": "medium",
        "sentence": "Physics ___ my favorite subject.",
        "options": [
            "is",
            "are",
            "were",
            "am"
        ],
        "answer": "is",
        "explanation": "বিষয়ের নাম singular, তাই verb singular হবে।",
        "banglaRule": "Subject names (Mathematics, Physics) + Singular Verb।"
    },
    {
        "id": "sva_m_5",
        "topic": "Subject-Verb Agreement",
        "difficulty": "medium",
        "sentence": "Bread and butter ___ my favorite breakfast.",
        "options": [
            "is",
            "are",
            "were",
            "be"
        ],
        "answer": "is",
        "explanation": "দুটি জিনিস যখন একটি একক ধারণাকে প্রকাশ করে, তখন verb singular হয়।",
        "banglaRule": "Bread and butter, Slow and steady + Singular Verb।"
    },
    {
        "id": "sva_m_6",
        "topic": "Subject-Verb Agreement",
        "difficulty": "medium",
        "sentence": "Slow and steady ___ my favorite breakfast.",
        "options": [
            "is",
            "are",
            "were",
            "be"
        ],
        "answer": "is",
        "explanation": "দুটি জিনিস যখন একটি একক ধারণাকে প্রকাশ করে, তখন verb singular হয়।",
        "banglaRule": "Bread and butter, Slow and steady + Singular Verb।"
    },
    {
        "id": "sva_m_7",
        "topic": "Subject-Verb Agreement",
        "difficulty": "medium",
        "sentence": "Either you or he ___ responsible.",
        "options": [
            "is",
            "are",
            "am",
            "were"
        ],
        "answer": "is",
        "explanation": "\"Either... or\" থাকলে দ্বিতীয় subject অনুযায়ী verb বসে।",
        "banglaRule": "Either or / Neither nor + Subject 2 (singular/plural) -> Verb follows Subject 2।"
    },
    {
        "id": "sva_m_8",
        "topic": "Subject-Verb Agreement",
        "difficulty": "medium",
        "sentence": "Either you or he ___ responsible.",
        "options": [
            "is",
            "are",
            "am",
            "were"
        ],
        "answer": "is",
        "explanation": "\"Either... or\" থাকলে দ্বিতীয় subject অনুযায়ী verb বসে।",
        "banglaRule": "Either or / Neither nor + Subject 2 (singular/plural) -> Verb follows Subject 2।"
    },
    {
        "id": "sva_m_9",
        "topic": "Subject-Verb Agreement",
        "difficulty": "medium",
        "sentence": "Neither the teacher nor the students ___ present.",
        "options": [
            "was",
            "were",
            "is",
            "has been"
        ],
        "answer": "were",
        "explanation": "\"Neither... nor\" এর পর verb-টি নিকটবর্তী subject (students - plural) অনুযায়ী \"were\" হয়েছে।",
        "banglaRule": "নিকটবর্তী subject অনুযায়ী verb বসে।"
    },
    {
        "id": "sva_m_10",
        "topic": "Subject-Verb Agreement",
        "difficulty": "medium",
        "sentence": "Neither the teacher nor the parents ___ present.",
        "options": [
            "was",
            "were",
            "is",
            "has been"
        ],
        "answer": "were",
        "explanation": "\"Neither... nor\" এর পর verb-টি নিকটবর্তী subject (students - plural) অনুযায়ী \"were\" হয়েছে।",
        "banglaRule": "নিকটবর্তী subject অনুযায়ী verb বসে।"
    },
    {
        "id": "sva_m_11",
        "topic": "Subject-Verb Agreement",
        "difficulty": "medium",
        "sentence": "A number of students ___ present.",
        "options": [
            "was",
            "were",
            "is",
            "has been"
        ],
        "answer": "were",
        "explanation": "\"A number of\"-এর পর plural verb এবং \"The number of\"-এর পর singular verb বসে।",
        "banglaRule": "A number of + Plural Verb. The number of + Singular Verb।"
    },
    {
        "id": "sva_m_12",
        "topic": "Subject-Verb Agreement",
        "difficulty": "medium",
        "sentence": "A number of parents ___ present.",
        "options": [
            "was",
            "were",
            "is",
            "has been"
        ],
        "answer": "were",
        "explanation": "\"A number of\"-এর পর plural verb এবং \"The number of\"-এর পর singular verb বসে।",
        "banglaRule": "A number of + Plural Verb. The number of + Singular Verb।"
    },
    {
        "id": "sva_m_13",
        "topic": "Subject-Verb Agreement",
        "difficulty": "medium",
        "sentence": "The number of candidates ___ decreasing.",
        "options": [
            "is",
            "are",
            "were",
            "have been"
        ],
        "answer": "is",
        "explanation": "\"The number of\" সমষ্টিকে বোঝায়, তাই verb singular হয়।",
        "banglaRule": "The number of + Singular Verb।"
    },
    {
        "id": "sva_m_14",
        "topic": "Subject-Verb Agreement",
        "difficulty": "medium",
        "sentence": "The number of members ___ decreasing.",
        "options": [
            "is",
            "are",
            "were",
            "have been"
        ],
        "answer": "is",
        "explanation": "\"The number of\" সমষ্টিকে বোঝায়, তাই verb singular হয়।",
        "banglaRule": "The number of + Singular Verb।"
    },
    {
        "id": "sva_m_15",
        "topic": "Subject-Verb Agreement",
        "difficulty": "medium",
        "sentence": "The jury ___ divided in their opinions.",
        "options": [
            "was",
            "were",
            "is",
            "has"
        ],
        "answer": "were",
        "explanation": "Collective noun (jury) যখন ভিন্ন ভিন্ন মত দেয়, তখন verb plural হয়।",
        "banglaRule": "Noun of multitude (divided collective noun) + Plural Verb।"
    },
    {
        "id": "sva_m_16",
        "topic": "Subject-Verb Agreement",
        "difficulty": "medium",
        "sentence": "The jury ___ divided in their opinions.",
        "options": [
            "was",
            "were",
            "is",
            "has"
        ],
        "answer": "were",
        "explanation": "Collective noun (jury) যখন ভিন্ন ভিন্ন মত দেয়, তখন verb plural হয়।",
        "banglaRule": "Noun of multitude (divided collective noun) + Plural Verb।"
    },
    {
        "id": "sva_m_17",
        "topic": "Subject-Verb Agreement",
        "difficulty": "medium",
        "sentence": "The jury ___ unanimous in its decision.",
        "options": [
            "was",
            "were",
            "are",
            "have been"
        ],
        "answer": "was",
        "explanation": "Collective noun যখন একমত থাকে, তখন verb singular হয়।",
        "banglaRule": "United collective noun + Singular Verb।"
    },
    {
        "id": "sva_m_18",
        "topic": "Subject-Verb Agreement",
        "difficulty": "medium",
        "sentence": "The jury ___ unanimous in its decision.",
        "options": [
            "was",
            "were",
            "are",
            "have been"
        ],
        "answer": "was",
        "explanation": "Collective noun যখন একমত থাকে, তখন verb singular হয়।",
        "banglaRule": "United collective noun + Singular Verb।"
    },
    {
        "id": "sva_m_19",
        "topic": "Subject-Verb Agreement",
        "difficulty": "medium",
        "sentence": "Ten miles ___ a long distance.",
        "options": [
            "is",
            "are",
            "were",
            "be"
        ],
        "answer": "is",
        "explanation": "দূরত্ব, সময় বা অর্থের পরিমাণ সমষ্টিগতভাবে singular verb নেয়।",
        "banglaRule": "নির্দিষ্ট পরিমাণ/দূরত্ব (Ten miles, Fifty dollars) + Singular Verb।"
    },
    {
        "id": "sva_m_20",
        "topic": "Subject-Verb Agreement",
        "difficulty": "medium",
        "sentence": "Fifty dollars ___ a long distance.",
        "options": [
            "is",
            "are",
            "were",
            "be"
        ],
        "answer": "is",
        "explanation": "দূরত্ব, সময় বা অর্থের পরিমাণ সমষ্টিগতভাবে singular verb নেয়।",
        "banglaRule": "নির্দিষ্ট পরিমাণ/দূরত্ব (Ten miles, Fifty dollars) + Singular Verb।"
    },
    {
        "id": "sva_m_21",
        "topic": "Subject-Verb Agreement",
        "difficulty": "medium",
        "sentence": "Many a student ___ failed the exam.",
        "options": [
            "has",
            "have",
            "are",
            "were"
        ],
        "answer": "has",
        "explanation": "\"Many a\"-এর পর noun এবং verb দুটিই singular হয়।",
        "banglaRule": "Many a + Singular Noun + Singular Verb।"
    },
    {
        "id": "sva_m_22",
        "topic": "Subject-Verb Agreement",
        "difficulty": "medium",
        "sentence": "Many a voter ___ failed the exam.",
        "options": [
            "has",
            "have",
            "are",
            "were"
        ],
        "answer": "has",
        "explanation": "\"Many a\"-এর পর noun এবং verb দুটিই singular হয়।",
        "banglaRule": "Many a + Singular Noun + Singular Verb।"
    },
    {
        "id": "sva_m_23",
        "topic": "Subject-Verb Agreement",
        "difficulty": "medium",
        "sentence": "More than one candidate ___ present.",
        "options": [
            "was",
            "were",
            "are",
            "have been"
        ],
        "answer": "was",
        "explanation": "\"More than one\"-এর পর singular verb বসে।",
        "banglaRule": "More than one + Singular Verb. More than two + Plural Verb।"
    },
    {
        "id": "sva_m_24",
        "topic": "Subject-Verb Agreement",
        "difficulty": "medium",
        "sentence": "More than one candidate ___ present.",
        "options": [
            "was",
            "were",
            "are",
            "have been"
        ],
        "answer": "was",
        "explanation": "\"More than one\"-এর পর singular verb বসে।",
        "banglaRule": "More than one + Singular Verb. More than two + Plural Verb।"
    },
    {
        "id": "sva_m_25",
        "topic": "Subject-Verb Agreement",
        "difficulty": "medium",
        "sentence": "One and a half hours ___ passed.",
        "options": [
            "has",
            "have",
            "is",
            "was"
        ],
        "answer": "have",
        "explanation": "\"One and a half\"-এর পর noun এবং verb দুটিই plural হয়।",
        "banglaRule": "One and a half + Plural Noun + Plural Verb।"
    },
    {
        "id": "sva_m_26",
        "topic": "Subject-Verb Agreement",
        "difficulty": "medium",
        "sentence": "One and a half hours ___ passed.",
        "options": [
            "has",
            "have",
            "is",
            "was"
        ],
        "answer": "have",
        "explanation": "\"One and a half\"-এর পর noun এবং verb দুটিই plural হয়।",
        "banglaRule": "One and a half + Plural Noun + Plural Verb।"
    },
    {
        "id": "sva_m_27",
        "topic": "Subject-Verb Agreement",
        "difficulty": "medium",
        "sentence": "All the luggage ___ packed.",
        "options": [
            "was",
            "were",
            "are",
            "have been"
        ],
        "answer": "was",
        "explanation": "\"Luggage\" একটি uncountable noun, তাই verb singular হবে।",
        "banglaRule": "Uncountable noun (luggage, furniture, information) + Singular Verb।"
    },
    {
        "id": "sva_m_28",
        "topic": "Subject-Verb Agreement",
        "difficulty": "medium",
        "sentence": "All the luggage ___ packed.",
        "options": [
            "was",
            "were",
            "are",
            "have been"
        ],
        "answer": "was",
        "explanation": "\"Luggage\" একটি uncountable noun, তাই verb singular হবে।",
        "banglaRule": "Uncountable noun (luggage, furniture, information) + Singular Verb।"
    },
    {
        "id": "sva_m_29",
        "topic": "Subject-Verb Agreement",
        "difficulty": "medium",
        "sentence": "The scissors ___ on the table.",
        "options": [
            "is",
            "are",
            "was",
            "has been"
        ],
        "answer": "are",
        "explanation": "দ্বি-অংশ বিশিষ্ট পোশাক বা যন্ত্রপাতির নাম (scissors, pants) plural verb নেয়।",
        "banglaRule": "Scissors, trousers, spectacles + Plural Verb।"
    },
    {
        "id": "sva_m_30",
        "topic": "Subject-Verb Agreement",
        "difficulty": "medium",
        "sentence": "The trousers ___ on the table.",
        "options": [
            "is",
            "are",
            "was",
            "has been"
        ],
        "answer": "are",
        "explanation": "দ্বি-অংশ বিশিষ্ট পোশাক বা যন্ত্রপাতির নাম (scissors, pants) plural verb নেয়।",
        "banglaRule": "Scissors, trousers, spectacles + Plural Verb।"
    },
    {
        "id": "sva_m_31",
        "topic": "Subject-Verb Agreement",
        "difficulty": "medium",
        "sentence": "A pair of scissors ___ on the table.",
        "options": [
            "is",
            "are",
            "were",
            "have been"
        ],
        "answer": "is",
        "explanation": "\"A pair of\" থাকলে verb singular হয়।",
        "banglaRule": "A pair of + Singular Verb।"
    },
    {
        "id": "sva_m_32",
        "topic": "Subject-Verb Agreement",
        "difficulty": "medium",
        "sentence": "A pair of trousers ___ on the table.",
        "options": [
            "is",
            "are",
            "were",
            "have been"
        ],
        "answer": "is",
        "explanation": "\"A pair of\" থাকলে verb singular হয়।",
        "banglaRule": "A pair of + Singular Verb।"
    },
    {
        "id": "sva_m_33",
        "topic": "Subject-Verb Agreement",
        "difficulty": "medium",
        "sentence": "The committee ___ going to hold a meeting.",
        "options": [
            "is",
            "are",
            "were",
            "be"
        ],
        "answer": "is",
        "explanation": "কমিটি দল হিসেবে কাজ করছে, তাই singular verb।",
        "banglaRule": "Collective noun acting as one unit + Singular Verb।"
    },
    {
        "id": "sva_m_34",
        "topic": "Subject-Verb Agreement",
        "difficulty": "medium",
        "sentence": "The board ___ going to hold a meeting.",
        "options": [
            "is",
            "are",
            "were",
            "be"
        ],
        "answer": "is",
        "explanation": "কমিটি দল হিসেবে কাজ করছে, তাই singular verb।",
        "banglaRule": "Collective noun acting as one unit + Singular Verb।"
    },
    {
        "id": "sva_m_35",
        "topic": "Subject-Verb Agreement",
        "difficulty": "medium",
        "sentence": "Fire and water ___ not agree.",
        "options": [
            "does",
            "do",
            "is",
            "are"
        ],
        "answer": "do",
        "explanation": "দুটি সম্পূর্ণ ভিন্ন বৈপরিত্যমূলক উপাদান, তাই plural verb।",
        "banglaRule": "ভিন্ন ভিন্ন উপাদান \"and\" দিয়ে যুক্ত হলে Plural Verb বসে।"
    },
    {
        "id": "sva_m_36",
        "topic": "Subject-Verb Agreement",
        "difficulty": "medium",
        "sentence": "Oil and water ___ not agree.",
        "options": [
            "does",
            "do",
            "is",
            "are"
        ],
        "answer": "do",
        "explanation": "দুটি সম্পূর্ণ ভিন্ন বৈপরিত্যমূলক উপাদান, তাই plural verb।",
        "banglaRule": "ভিন্ন ভিন্ন উপাদান \"and\" দিয়ে যুক্ত হলে Plural Verb বসে।"
    },
    {
        "id": "sva_m_37",
        "topic": "Subject-Verb Agreement",
        "difficulty": "medium",
        "sentence": "Every man, woman, and child ___ present.",
        "options": [
            "was",
            "were",
            "are",
            "have been"
        ],
        "answer": "was",
        "explanation": "\"Every\" বা \"Each\" দ্বারা যুক্ত প্রতি জোড়া subject-এর পর verb singular হয়।",
        "banglaRule": "Each/Every + Singular Noun + Singular Verb।"
    },
    {
        "id": "sva_m_38",
        "topic": "Subject-Verb Agreement",
        "difficulty": "medium",
        "sentence": "Every man, woman, and child ___ present.",
        "options": [
            "was",
            "were",
            "are",
            "have been"
        ],
        "answer": "was",
        "explanation": "\"Every\" বা \"Each\" দ্বারা যুক্ত প্রতি জোড়া subject-এর পর verb singular হয়।",
        "banglaRule": "Each/Every + Singular Noun + Singular Verb।"
    },
    {
        "id": "sva_m_39",
        "topic": "Subject-Verb Agreement",
        "difficulty": "medium",
        "sentence": "My friend, philosopher, and guide ___ passed away.",
        "options": [
            "has",
            "have",
            "are",
            "were"
        ],
        "answer": "has",
        "explanation": "একই ব্যক্তি যখন ৩টি পদাধিকারী হন, তখন verb singular হয়।",
        "banglaRule": "একই ব্যক্তি নির্দেশ করলে একটি মাত্র \"my/the\" বসে এবং singular verb হয়।"
    },
    {
        "id": "sva_m_40",
        "topic": "Subject-Verb Agreement",
        "difficulty": "medium",
        "sentence": "My friend, philosopher, and guide ___ passed away.",
        "options": [
            "has",
            "have",
            "are",
            "were"
        ],
        "answer": "has",
        "explanation": "একই ব্যক্তি যখন ৩টি পদাধিকারী হন, তখন verb singular হয়।",
        "banglaRule": "একই ব্যক্তি নির্দেশ করলে একটি মাত্র \"my/the\" বসে এবং singular verb হয়।"
    },
    {
        "id": "sva_h_1",
        "topic": "Subject-Verb Agreement",
        "difficulty": "hard",
        "sentence": "Sarah, along with her friends, ___ arriving today.",
        "options": [
            "is",
            "are",
            "were",
            "have been"
        ],
        "answer": "is",
        "explanation": "\"along with\", \"as well as\", \"together with\" থাকলে প্রথম subject অনুযায়ী verb বসে।",
        "banglaRule": "Parenthetical expression থাকলে Subject 1 অনুযায়ী verb বসে।"
    },
    {
        "id": "sva_h_2",
        "topic": "Subject-Verb Agreement",
        "difficulty": "hard",
        "sentence": "The quality of these mangoes ___ not good.",
        "options": [
            "is",
            "are",
            "were",
            "be"
        ],
        "answer": "is",
        "explanation": "এখানে মূল subject হলো \"quality\" (singular), \"mangoes\" নয়।",
        "banglaRule": "Subject + preposition + noun-এ প্রথম subject-ই মূল subject।"
    },
    {
        "id": "sva_h_3",
        "topic": "Subject-Verb Agreement",
        "difficulty": "hard",
        "sentence": "Three-fourths of the work ___ finished.",
        "options": [
            "is",
            "are",
            "were",
            "have been"
        ],
        "answer": "is",
        "explanation": "ভগ্নাংশের ক্ষেত্রে noun uncountable হলে verb singular হয়।",
        "banglaRule": "ভগ্নাংশ + Uncountable Noun = Singular Verb।"
    },
    {
        "id": "sva_h_4",
        "topic": "Subject-Verb Agreement",
        "difficulty": "hard",
        "sentence": "Two-thirds of the students ___ present.",
        "options": [
            "was",
            "were",
            "is",
            "has been"
        ],
        "answer": "were",
        "explanation": "ভগ্নাংশের ক্ষেত্রে noun plural হলে verb plural হয়।",
        "banglaRule": "ভগ্নাংশ + Plural Noun = Plural Verb।"
    },
    {
        "id": "sva_h_5",
        "topic": "Subject-Verb Agreement",
        "difficulty": "hard",
        "sentence": "There ___ a book and two pens on the desk.",
        "options": [
            "is",
            "are",
            "was",
            "were"
        ],
        "answer": "is",
        "explanation": "\"There\" দিয়ে শুরু বাক্যে নিকটবর্তী noun (a book) অনুযায়ী verb বসে।",
        "banglaRule": "There/Here + নিকটবর্তী Subject অনুযায়ী Verb।"
    },
    {
        "id": "sva_h_6",
        "topic": "Subject-Verb Agreement",
        "difficulty": "hard",
        "sentence": "Gulliver's Travels ___ written by Swift.",
        "options": [
            "was",
            "were",
            "are",
            "is being"
        ],
        "answer": "was",
        "explanation": "বইয়ের নাম দেখতে plural হলেও তা singular noun।",
        "banglaRule": "বই, সিনেমা বা নাটকের নাম + Singular Verb।"
    },
    {
        "id": "sva_h_7",
        "topic": "Subject-Verb Agreement",
        "difficulty": "hard",
        "sentence": "It is I who ___ to blame.",
        "options": [
            "is",
            "am",
            "are",
            "was"
        ],
        "answer": "am",
        "explanation": "Relative pronoun (who)-এর আগের antecedent (I) অনুযায়ী verb বসে।",
        "banglaRule": "Antecedent pronoun অনুযায়ী relative clause-এর verb নির্ধারিত হয়।"
    },
    {
        "id": "sva_h_8",
        "topic": "Subject-Verb Agreement",
        "difficulty": "hard",
        "sentence": "Neither of the plans ___ successful.",
        "options": [
            "was",
            "were",
            "are",
            "have been"
        ],
        "answer": "was",
        "explanation": "\"Neither of\" ও \"Either of\"-এর পর verb singular হয়।",
        "banglaRule": "Neither of / Either of + Plural Noun + Singular Verb।"
    },
    {
        "id": "sva_h_9",
        "topic": "Subject-Verb Agreement",
        "difficulty": "hard",
        "sentence": "The majority of the population ___ poor.",
        "options": [
            "is",
            "are",
            "was",
            "were"
        ],
        "answer": "is",
        "explanation": "এখানে জনসংখ্যাকে একক গোষ্ঠী হিসেবে ধরা হয়েছে, তাই \"is\"।",
        "banglaRule": "The majority of + collective/uncountable noun + Singular Verb।"
    },
    {
        "id": "sva_h_10",
        "topic": "Subject-Verb Agreement",
        "difficulty": "hard",
        "sentence": "Nothing but trees ___ seen.",
        "options": [
            "was",
            "were",
            "are",
            "have been"
        ],
        "answer": "was",
        "explanation": "\"Nothing but\"-এর পর noun plural হলেও verb singular হয়।",
        "banglaRule": "Nothing but + Plural Noun + Singular Verb।"
    },
    {
        "id": "mod_e_1",
        "topic": "Modal Verbs",
        "difficulty": "easy",
        "sentence": "We ___ pay our taxes.",
        "options": [
            "should",
            "can",
            "must",
            "might"
        ],
        "answer": "must",
        "explanation": "বাধ্যবাধকতা বা অবশ্য পালনীয় কর্তব্য বোঝাতে \"must\" বসে।",
        "banglaRule": "বাধ্যবাধকতা (obligation) বোঝাতে \"must\" বসে।"
    },
    {
        "id": "mod_e_2",
        "topic": "Modal Verbs",
        "difficulty": "easy",
        "sentence": "Sarah ___ run very fast.",
        "options": [
            "can",
            "should",
            "must",
            "might"
        ],
        "answer": "can",
        "explanation": "দক্ষতা বা সামর্থ্য বোঝাতে \"can\" বসে।",
        "banglaRule": "সামর্থ্য (ability) বোঝাতে \"can\" ব্যবহৃত হয়।"
    },
    {
        "id": "mod_e_3",
        "topic": "Modal Verbs",
        "difficulty": "easy",
        "sentence": "We ___ pay our taxes.",
        "options": [
            "should",
            "can",
            "must",
            "might"
        ],
        "answer": "must",
        "explanation": "বাধ্যবাধকতা বা অবশ্য পালনীয় কর্তব্য বোঝাতে \"must\" বসে।",
        "banglaRule": "বাধ্যবাধকতা (obligation) বোঝাতে \"must\" বসে।"
    },
    {
        "id": "mod_e_4",
        "topic": "Modal Verbs",
        "difficulty": "easy",
        "sentence": "David ___ run very fast.",
        "options": [
            "can",
            "should",
            "must",
            "might"
        ],
        "answer": "can",
        "explanation": "দক্ষতা বা সামর্থ্য বোঝাতে \"can\" বসে।",
        "banglaRule": "সামর্থ্য (ability) বোঝাতে \"can\" ব্যবহৃত হয়।"
    },
    {
        "id": "mod_e_5",
        "topic": "Modal Verbs",
        "difficulty": "easy",
        "sentence": "We ___ pay our taxes.",
        "options": [
            "should",
            "can",
            "must",
            "might"
        ],
        "answer": "must",
        "explanation": "বাধ্যবাধকতা বা অবশ্য পালনীয় কর্তব্য বোঝাতে \"must\" বসে।",
        "banglaRule": "বাধ্যবাধকতা (obligation) বোঝাতে \"must\" বসে।"
    },
    {
        "id": "mod_e_6",
        "topic": "Modal Verbs",
        "difficulty": "easy",
        "sentence": "Lisa ___ run very fast.",
        "options": [
            "can",
            "should",
            "must",
            "might"
        ],
        "answer": "can",
        "explanation": "দক্ষতা বা সামর্থ্য বোঝাতে \"can\" বসে।",
        "banglaRule": "সামর্থ্য (ability) বোঝাতে \"can\" ব্যবহৃত হয়।"
    },
    {
        "id": "mod_e_7",
        "topic": "Modal Verbs",
        "difficulty": "easy",
        "sentence": "We ___ pay our taxes.",
        "options": [
            "should",
            "can",
            "must",
            "might"
        ],
        "answer": "must",
        "explanation": "বাধ্যবাধকতা বা অবশ্য পালনীয় কর্তব্য বোঝাতে \"must\" বসে।",
        "banglaRule": "বাধ্যবাধকতা (obligation) বোঝাতে \"must\" বসে।"
    },
    {
        "id": "mod_e_8",
        "topic": "Modal Verbs",
        "difficulty": "easy",
        "sentence": "Fahim ___ run very fast.",
        "options": [
            "can",
            "should",
            "must",
            "might"
        ],
        "answer": "can",
        "explanation": "দক্ষতা বা সামর্থ্য বোঝাতে \"can\" বসে।",
        "banglaRule": "সামর্থ্য (ability) বোঝাতে \"can\" ব্যবহৃত হয়।"
    },
    {
        "id": "mod_e_9",
        "topic": "Modal Verbs",
        "difficulty": "easy",
        "sentence": "We ___ pay our taxes.",
        "options": [
            "should",
            "can",
            "must",
            "might"
        ],
        "answer": "must",
        "explanation": "বাধ্যবাধকতা বা অবশ্য পালনীয় কর্তব্য বোঝাতে \"must\" বসে।",
        "banglaRule": "বাধ্যবাধকতা (obligation) বোঝাতে \"must\" বসে।"
    },
    {
        "id": "mod_e_10",
        "topic": "Modal Verbs",
        "difficulty": "easy",
        "sentence": "John ___ run very fast.",
        "options": [
            "can",
            "should",
            "must",
            "might"
        ],
        "answer": "can",
        "explanation": "দক্ষতা বা সামর্থ্য বোঝাতে \"can\" বসে।",
        "banglaRule": "সামর্থ্য (ability) বোঝাতে \"can\" ব্যবহৃত হয়।"
    },
    {
        "id": "mod_e_11",
        "topic": "Modal Verbs",
        "difficulty": "easy",
        "sentence": "We ___ pay our taxes.",
        "options": [
            "should",
            "can",
            "must",
            "might"
        ],
        "answer": "must",
        "explanation": "বাধ্যবাধকতা বা অবশ্য পালনীয় কর্তব্য বোঝাতে \"must\" বসে।",
        "banglaRule": "বাধ্যবাধকতা (obligation) বোঝাতে \"must\" বসে।"
    },
    {
        "id": "mod_e_12",
        "topic": "Modal Verbs",
        "difficulty": "easy",
        "sentence": "Jessica ___ run very fast.",
        "options": [
            "can",
            "should",
            "must",
            "might"
        ],
        "answer": "can",
        "explanation": "দক্ষতা বা সামর্থ্য বোঝাতে \"can\" বসে।",
        "banglaRule": "সামর্থ্য (ability) বোঝাতে \"can\" ব্যবহৃত হয়।"
    },
    {
        "id": "mod_e_13",
        "topic": "Modal Verbs",
        "difficulty": "easy",
        "sentence": "We ___ pay our taxes.",
        "options": [
            "should",
            "can",
            "must",
            "might"
        ],
        "answer": "must",
        "explanation": "বাধ্যবাধকতা বা অবশ্য পালনীয় কর্তব্য বোঝাতে \"must\" বসে।",
        "banglaRule": "বাধ্যবাধকতা (obligation) বোঝাতে \"must\" বসে।"
    },
    {
        "id": "mod_e_14",
        "topic": "Modal Verbs",
        "difficulty": "easy",
        "sentence": "Ryan ___ run very fast.",
        "options": [
            "can",
            "should",
            "must",
            "might"
        ],
        "answer": "can",
        "explanation": "দক্ষতা বা সামর্থ্য বোঝাতে \"can\" বসে।",
        "banglaRule": "সামর্থ্য (ability) বোঝাতে \"can\" ব্যবহৃত হয়।"
    },
    {
        "id": "mod_e_15",
        "topic": "Modal Verbs",
        "difficulty": "easy",
        "sentence": "We ___ pay our taxes.",
        "options": [
            "should",
            "can",
            "must",
            "might"
        ],
        "answer": "must",
        "explanation": "বাধ্যবাধকতা বা অবশ্য পালনীয় কর্তব্য বোঝাতে \"must\" বসে।",
        "banglaRule": "বাধ্যবাধকতা (obligation) বোঝাতে \"must\" বসে।"
    },
    {
        "id": "mod_e_16",
        "topic": "Modal Verbs",
        "difficulty": "easy",
        "sentence": "Rahim ___ run very fast.",
        "options": [
            "can",
            "should",
            "must",
            "might"
        ],
        "answer": "can",
        "explanation": "দক্ষতা বা সামর্থ্য বোঝাতে \"can\" বসে।",
        "banglaRule": "সামর্থ্য (ability) বোঝাতে \"can\" ব্যবহৃত হয়।"
    },
    {
        "id": "mod_e_17",
        "topic": "Modal Verbs",
        "difficulty": "easy",
        "sentence": "We ___ pay our taxes.",
        "options": [
            "should",
            "can",
            "must",
            "might"
        ],
        "answer": "must",
        "explanation": "বাধ্যবাধকতা বা অবশ্য পালনীয় কর্তব্য বোঝাতে \"must\" বসে।",
        "banglaRule": "বাধ্যবাধকতা (obligation) বোঝাতে \"must\" বসে।"
    },
    {
        "id": "mod_e_18",
        "topic": "Modal Verbs",
        "difficulty": "easy",
        "sentence": "Sarah ___ run very fast.",
        "options": [
            "can",
            "should",
            "must",
            "might"
        ],
        "answer": "can",
        "explanation": "দক্ষতা বা সামর্থ্য বোঝাতে \"can\" বসে।",
        "banglaRule": "সামর্থ্য (ability) বোঝাতে \"can\" ব্যবহৃত হয়।"
    },
    {
        "id": "mod_e_19",
        "topic": "Modal Verbs",
        "difficulty": "easy",
        "sentence": "We ___ pay our taxes.",
        "options": [
            "should",
            "can",
            "must",
            "might"
        ],
        "answer": "must",
        "explanation": "বাধ্যবাধকতা বা অবশ্য পালনীয় কর্তব্য বোঝাতে \"must\" বসে।",
        "banglaRule": "বাধ্যবাধকতা (obligation) বোঝাতে \"must\" বসে।"
    },
    {
        "id": "mod_e_20",
        "topic": "Modal Verbs",
        "difficulty": "easy",
        "sentence": "David ___ run very fast.",
        "options": [
            "can",
            "should",
            "must",
            "might"
        ],
        "answer": "can",
        "explanation": "দক্ষতা বা সামর্থ্য বোঝাতে \"can\" বসে।",
        "banglaRule": "সামর্থ্য (ability) বোঝাতে \"can\" ব্যবহৃত হয়।"
    },
    {
        "id": "mod_e_21",
        "topic": "Modal Verbs",
        "difficulty": "easy",
        "sentence": "We ___ pay our taxes.",
        "options": [
            "should",
            "can",
            "must",
            "might"
        ],
        "answer": "must",
        "explanation": "বাধ্যবাধকতা বা অবশ্য পালনীয় কর্তব্য বোঝাতে \"must\" বসে।",
        "banglaRule": "বাধ্যবাধকতা (obligation) বোঝাতে \"must\" বসে।"
    },
    {
        "id": "mod_e_22",
        "topic": "Modal Verbs",
        "difficulty": "easy",
        "sentence": "Lisa ___ run very fast.",
        "options": [
            "can",
            "should",
            "must",
            "might"
        ],
        "answer": "can",
        "explanation": "দক্ষতা বা সামর্থ্য বোঝাতে \"can\" বসে।",
        "banglaRule": "সামর্থ্য (ability) বোঝাতে \"can\" ব্যবহৃত হয়।"
    },
    {
        "id": "mod_e_23",
        "topic": "Modal Verbs",
        "difficulty": "easy",
        "sentence": "We ___ pay our taxes.",
        "options": [
            "should",
            "can",
            "must",
            "might"
        ],
        "answer": "must",
        "explanation": "বাধ্যবাধকতা বা অবশ্য পালনীয় কর্তব্য বোঝাতে \"must\" বসে।",
        "banglaRule": "বাধ্যবাধকতা (obligation) বোঝাতে \"must\" বসে।"
    },
    {
        "id": "mod_e_24",
        "topic": "Modal Verbs",
        "difficulty": "easy",
        "sentence": "Fahim ___ run very fast.",
        "options": [
            "can",
            "should",
            "must",
            "might"
        ],
        "answer": "can",
        "explanation": "দক্ষতা বা সামর্থ্য বোঝাতে \"can\" বসে।",
        "banglaRule": "সামর্থ্য (ability) বোঝাতে \"can\" ব্যবহৃত হয়।"
    },
    {
        "id": "mod_e_25",
        "topic": "Modal Verbs",
        "difficulty": "easy",
        "sentence": "We ___ pay our taxes.",
        "options": [
            "should",
            "can",
            "must",
            "might"
        ],
        "answer": "must",
        "explanation": "বাধ্যবাধকতা বা অবশ্য পালনীয় কর্তব্য বোঝাতে \"must\" বসে।",
        "banglaRule": "বাধ্যবাধকতা (obligation) বোঝাতে \"must\" বসে।"
    },
    {
        "id": "mod_e_26",
        "topic": "Modal Verbs",
        "difficulty": "easy",
        "sentence": "John ___ run very fast.",
        "options": [
            "can",
            "should",
            "must",
            "might"
        ],
        "answer": "can",
        "explanation": "দক্ষতা বা সামর্থ্য বোঝাতে \"can\" বসে।",
        "banglaRule": "সামর্থ্য (ability) বোঝাতে \"can\" ব্যবহৃত হয়।"
    },
    {
        "id": "mod_e_27",
        "topic": "Modal Verbs",
        "difficulty": "easy",
        "sentence": "We ___ pay our taxes.",
        "options": [
            "should",
            "can",
            "must",
            "might"
        ],
        "answer": "must",
        "explanation": "বাধ্যবাধকতা বা অবশ্য পালনীয় কর্তব্য বোঝাতে \"must\" বসে।",
        "banglaRule": "বাধ্যবাধকতা (obligation) বোঝাতে \"must\" বসে।"
    },
    {
        "id": "mod_e_28",
        "topic": "Modal Verbs",
        "difficulty": "easy",
        "sentence": "Jessica ___ run very fast.",
        "options": [
            "can",
            "should",
            "must",
            "might"
        ],
        "answer": "can",
        "explanation": "দক্ষতা বা সামর্থ্য বোঝাতে \"can\" বসে।",
        "banglaRule": "সামর্থ্য (ability) বোঝাতে \"can\" ব্যবহৃত হয়।"
    },
    {
        "id": "mod_e_29",
        "topic": "Modal Verbs",
        "difficulty": "easy",
        "sentence": "We ___ pay our taxes.",
        "options": [
            "should",
            "can",
            "must",
            "might"
        ],
        "answer": "must",
        "explanation": "বাধ্যবাধকতা বা অবশ্য পালনীয় কর্তব্য বোঝাতে \"must\" বসে।",
        "banglaRule": "বাধ্যবাধকতা (obligation) বোঝাতে \"must\" বসে।"
    },
    {
        "id": "mod_e_30",
        "topic": "Modal Verbs",
        "difficulty": "easy",
        "sentence": "Ryan ___ run very fast.",
        "options": [
            "can",
            "should",
            "must",
            "might"
        ],
        "answer": "can",
        "explanation": "দক্ষতা বা সামর্থ্য বোঝাতে \"can\" বসে।",
        "banglaRule": "সামর্থ্য (ability) বোঝাতে \"can\" ব্যবহৃত হয়।"
    },
    {
        "id": "mod_e_31",
        "topic": "Modal Verbs",
        "difficulty": "easy",
        "sentence": "We ___ pay our taxes.",
        "options": [
            "should",
            "can",
            "must",
            "might"
        ],
        "answer": "must",
        "explanation": "বাধ্যবাধকতা বা অবশ্য পালনীয় কর্তব্য বোঝাতে \"must\" বসে।",
        "banglaRule": "বাধ্যবাধকতা (obligation) বোঝাতে \"must\" বসে।"
    },
    {
        "id": "mod_e_32",
        "topic": "Modal Verbs",
        "difficulty": "easy",
        "sentence": "Rahim ___ run very fast.",
        "options": [
            "can",
            "should",
            "must",
            "might"
        ],
        "answer": "can",
        "explanation": "দক্ষতা বা সামর্থ্য বোঝাতে \"can\" বসে।",
        "banglaRule": "সামর্থ্য (ability) বোঝাতে \"can\" ব্যবহৃত হয়।"
    },
    {
        "id": "mod_e_33",
        "topic": "Modal Verbs",
        "difficulty": "easy",
        "sentence": "We ___ pay our taxes.",
        "options": [
            "should",
            "can",
            "must",
            "might"
        ],
        "answer": "must",
        "explanation": "বাধ্যবাধকতা বা অবশ্য পালনীয় কর্তব্য বোঝাতে \"must\" বসে।",
        "banglaRule": "বাধ্যবাধকতা (obligation) বোঝাতে \"must\" বসে।"
    },
    {
        "id": "mod_e_34",
        "topic": "Modal Verbs",
        "difficulty": "easy",
        "sentence": "Sarah ___ run very fast.",
        "options": [
            "can",
            "should",
            "must",
            "might"
        ],
        "answer": "can",
        "explanation": "দক্ষতা বা সামর্থ্য বোঝাতে \"can\" বসে।",
        "banglaRule": "সামর্থ্য (ability) বোঝাতে \"can\" ব্যবহৃত হয়।"
    },
    {
        "id": "mod_e_35",
        "topic": "Modal Verbs",
        "difficulty": "easy",
        "sentence": "We ___ pay our taxes.",
        "options": [
            "should",
            "can",
            "must",
            "might"
        ],
        "answer": "must",
        "explanation": "বাধ্যবাধকতা বা অবশ্য পালনীয় কর্তব্য বোঝাতে \"must\" বসে।",
        "banglaRule": "বাধ্যবাধকতা (obligation) বোঝাতে \"must\" বসে।"
    },
    {
        "id": "mod_e_36",
        "topic": "Modal Verbs",
        "difficulty": "easy",
        "sentence": "David ___ run very fast.",
        "options": [
            "can",
            "should",
            "must",
            "might"
        ],
        "answer": "can",
        "explanation": "দক্ষতা বা সামর্থ্য বোঝাতে \"can\" বসে।",
        "banglaRule": "সামর্থ্য (ability) বোঝাতে \"can\" ব্যবহৃত হয়।"
    },
    {
        "id": "mod_e_37",
        "topic": "Modal Verbs",
        "difficulty": "easy",
        "sentence": "We ___ pay our taxes.",
        "options": [
            "should",
            "can",
            "must",
            "might"
        ],
        "answer": "must",
        "explanation": "বাধ্যবাধকতা বা অবশ্য পালনীয় কর্তব্য বোঝাতে \"must\" বসে।",
        "banglaRule": "বাধ্যবাধকতা (obligation) বোঝাতে \"must\" বসে।"
    },
    {
        "id": "mod_e_38",
        "topic": "Modal Verbs",
        "difficulty": "easy",
        "sentence": "Lisa ___ run very fast.",
        "options": [
            "can",
            "should",
            "must",
            "might"
        ],
        "answer": "can",
        "explanation": "দক্ষতা বা সামর্থ্য বোঝাতে \"can\" বসে।",
        "banglaRule": "সামর্থ্য (ability) বোঝাতে \"can\" ব্যবহৃত হয়।"
    },
    {
        "id": "mod_e_39",
        "topic": "Modal Verbs",
        "difficulty": "easy",
        "sentence": "We ___ pay our taxes.",
        "options": [
            "should",
            "can",
            "must",
            "might"
        ],
        "answer": "must",
        "explanation": "বাধ্যবাধকতা বা অবশ্য পালনীয় কর্তব্য বোঝাতে \"must\" বসে।",
        "banglaRule": "বাধ্যবাধকতা (obligation) বোঝাতে \"must\" বসে।"
    },
    {
        "id": "mod_e_40",
        "topic": "Modal Verbs",
        "difficulty": "easy",
        "sentence": "Fahim ___ run very fast.",
        "options": [
            "can",
            "should",
            "must",
            "might"
        ],
        "answer": "can",
        "explanation": "দক্ষতা বা সামর্থ্য বোঝাতে \"can\" বসে।",
        "banglaRule": "সামর্থ্য (ability) বোঝাতে \"can\" ব্যবহৃত হয়।"
    },
    {
        "id": "mod_m_1",
        "topic": "Modal Verbs",
        "difficulty": "medium",
        "sentence": "___ you help me with this bag?",
        "options": [
            "Could",
            "Should",
            "Must",
            "May"
        ],
        "answer": "Could",
        "explanation": "বিনম্র অনুরোধ বা প্রশ্নের ক্ষেত্রে \"Could\" বা \"Would\" বসে।",
        "banglaRule": "Polite request = Could / Would you...?"
    },
    {
        "id": "mod_m_2",
        "topic": "Modal Verbs",
        "difficulty": "medium",
        "sentence": "___ you help me with this box?",
        "options": [
            "Could",
            "Should",
            "Must",
            "May"
        ],
        "answer": "Could",
        "explanation": "বিনম্র অনুরোধ বা প্রশ্নের ক্ষেত্রে \"Could\" বা \"Would\" বসে।",
        "banglaRule": "Polite request = Could / Would you...?"
    },
    {
        "id": "mod_m_3",
        "topic": "Modal Verbs",
        "difficulty": "medium",
        "sentence": "It ___ rain today. The sky is dark.",
        "options": [
            "might",
            "must",
            "will",
            "should"
        ],
        "answer": "might",
        "explanation": "দুর্বল সম্ভাবনা বোঝাতে \"might\" বসে।",
        "banglaRule": "Possibility (weak) = might, (strong) = may।"
    },
    {
        "id": "mod_m_4",
        "topic": "Modal Verbs",
        "difficulty": "medium",
        "sentence": "It ___ rain today. The clouds are white.",
        "options": [
            "might",
            "must",
            "will",
            "should"
        ],
        "answer": "might",
        "explanation": "দুর্বল সম্ভাবনা বোঝাতে \"might\" বসে।",
        "banglaRule": "Possibility (weak) = might, (strong) = may।"
    },
    {
        "id": "mod_m_5",
        "topic": "Modal Verbs",
        "difficulty": "medium",
        "sentence": "You ___ not touch that wire.",
        "options": [
            "must",
            "should",
            "could",
            "might"
        ],
        "answer": "must",
        "explanation": "নিষেধাজ্ঞা বোঝাতে \"must not\" বা \"mustn't\" বসে।",
        "banglaRule": "Prohibition (নিষেধাজ্ঞা) = must not।"
    },
    {
        "id": "mod_m_6",
        "topic": "Modal Verbs",
        "difficulty": "medium",
        "sentence": "You ___ not touch that paint.",
        "options": [
            "must",
            "should",
            "could",
            "might"
        ],
        "answer": "must",
        "explanation": "নিষেধাজ্ঞা বোঝাতে \"must not\" বা \"mustn't\" বসে।",
        "banglaRule": "Prohibition (নিষেধাজ্ঞা) = must not।"
    },
    {
        "id": "mod_m_7",
        "topic": "Modal Verbs",
        "difficulty": "medium",
        "sentence": "You ___ rest. You look tired.",
        "options": [
            "should",
            "might",
            "could",
            "would"
        ],
        "answer": "should",
        "explanation": "পরামর্শ বা উচিত কাজ বোঝাতে \"should\" বসে।",
        "banglaRule": "উচিত বা পরামর্শ (advice) = should।"
    },
    {
        "id": "mod_m_8",
        "topic": "Modal Verbs",
        "difficulty": "medium",
        "sentence": "You ___ rest. You look sick.",
        "options": [
            "should",
            "might",
            "could",
            "would"
        ],
        "answer": "should",
        "explanation": "পরামর্শ বা উচিত কাজ বোঝাতে \"should\" বসে।",
        "banglaRule": "উচিত বা পরামর্শ (advice) = should।"
    },
    {
        "id": "mod_m_9",
        "topic": "Modal Verbs",
        "difficulty": "medium",
        "sentence": "___ I ask a question, sir?",
        "options": [
            "May",
            "Can",
            "Could",
            "Should"
        ],
        "answer": "May",
        "explanation": "আনুষ্ঠানিক অনুমতি চাইতে \"May\" ব্যবহৃত হয়।",
        "banglaRule": "Formal permission = May I...?"
    },
    {
        "id": "mod_m_10",
        "topic": "Modal Verbs",
        "difficulty": "medium",
        "sentence": "___ I enter the room, sir?",
        "options": [
            "May",
            "Can",
            "Could",
            "Should"
        ],
        "answer": "May",
        "explanation": "আনুষ্ঠানিক অনুমতি চাইতে \"May\" ব্যবহৃত হয়।",
        "banglaRule": "Formal permission = May I...?"
    },
    {
        "id": "mod_m_11",
        "topic": "Modal Verbs",
        "difficulty": "medium",
        "sentence": "We ___ to protect our environment.",
        "options": [
            "ought",
            "should",
            "must",
            "could"
        ],
        "answer": "ought",
        "explanation": "\"ought\"-এর পর সবসময় \"to\" বসে।",
        "banglaRule": "Ought to = উচিত (moral obligation)।"
    },
    {
        "id": "mod_m_12",
        "topic": "Modal Verbs",
        "difficulty": "medium",
        "sentence": "We ___ to protect our forest.",
        "options": [
            "ought",
            "should",
            "must",
            "could"
        ],
        "answer": "ought",
        "explanation": "\"ought\"-এর পর সবসময় \"to\" বসে।",
        "banglaRule": "Ought to = উচিত (moral obligation)।"
    },
    {
        "id": "mod_m_13",
        "topic": "Modal Verbs",
        "difficulty": "medium",
        "sentence": "He ___ write letters when he was young.",
        "options": [
            "used to",
            "would",
            "must",
            "should"
        ],
        "answer": "used to",
        "explanation": "অতীতের নিয়মিত অভ্যাস বোঝাতে \"used to\" বসে।",
        "banglaRule": "অতীতের নিয়মিত অভ্যাস = used to + V1।"
    },
    {
        "id": "mod_m_14",
        "topic": "Modal Verbs",
        "difficulty": "medium",
        "sentence": "He ___ write diaries when he was young.",
        "options": [
            "used to",
            "would",
            "must",
            "should"
        ],
        "answer": "used to",
        "explanation": "অতীতের নিয়মিত অভ্যাস বোঝাতে \"used to\" বসে।",
        "banglaRule": "অতীতের নিয়মিত অভ্যাস = used to + V1।"
    },
    {
        "id": "mod_m_15",
        "topic": "Modal Verbs",
        "difficulty": "medium",
        "sentence": "I ___ rather fail than cheat.",
        "options": [
            "would",
            "should",
            "could",
            "had"
        ],
        "answer": "would",
        "explanation": "পছন্দের বৈপরীত্য প্রকাশে \"would rather... than\" বসে।",
        "banglaRule": "Would rather + V1 ... than = বরং তাও ভালো।"
    },
    {
        "id": "mod_m_16",
        "topic": "Modal Verbs",
        "difficulty": "medium",
        "sentence": "I ___ rather starve than beg.",
        "options": [
            "would",
            "should",
            "could",
            "had"
        ],
        "answer": "would",
        "explanation": "পছন্দের বৈপরীত্য প্রকাশে \"would rather... than\" বসে।",
        "banglaRule": "Would rather + V1 ... than = বরং তাও ভালো।"
    },
    {
        "id": "mod_m_17",
        "topic": "Modal Verbs",
        "difficulty": "medium",
        "sentence": "You ___ start preparation now.",
        "options": [
            "had better",
            "would rather",
            "should to",
            "must to"
        ],
        "answer": "had better",
        "explanation": "উপদেশ বা সতর্কবার্তা দিতে \"had better\" বসে।",
        "banglaRule": "Had better + base verb (V1)।"
    },
    {
        "id": "mod_m_18",
        "topic": "Modal Verbs",
        "difficulty": "medium",
        "sentence": "You ___ start running now.",
        "options": [
            "had better",
            "would rather",
            "should to",
            "must to"
        ],
        "answer": "had better",
        "explanation": "উপদেশ বা সতর্কবার্তা দিতে \"had better\" বসে।",
        "banglaRule": "Had better + base verb (V1)।"
    },
    {
        "id": "mod_m_19",
        "topic": "Modal Verbs",
        "difficulty": "medium",
        "sentence": "I ___ read when I was five years old.",
        "options": [
            "could",
            "can",
            "might",
            "should"
        ],
        "answer": "could",
        "explanation": "অতীতের সামর্থ্য বা ক্ষমতা বোঝাতে \"could\" বসে।",
        "banglaRule": "Past ability = could।"
    },
    {
        "id": "mod_m_20",
        "topic": "Modal Verbs",
        "difficulty": "medium",
        "sentence": "I ___ read when I was ten years old.",
        "options": [
            "could",
            "can",
            "might",
            "should"
        ],
        "answer": "could",
        "explanation": "অতীতের সামর্থ্য বা ক্ষমতা বোঝাতে \"could\" বসে।",
        "banglaRule": "Past ability = could।"
    },
    {
        "id": "mod_h_1",
        "topic": "Modal Verbs",
        "difficulty": "hard",
        "sentence": "Lest you ___ fail, study hard.",
        "options": [
            "should",
            "must",
            "might",
            "would"
        ],
        "answer": "should",
        "explanation": "\"lest\" শব্দের পর subject + should/might বসে।",
        "banglaRule": "Lest + subject + should/might + V1।"
    },
    {
        "id": "mod_h_2",
        "topic": "Modal Verbs",
        "difficulty": "hard",
        "sentence": "He walked fast lest he ___ miss the train.",
        "options": [
            "should",
            "would",
            "must",
            "could"
        ],
        "answer": "should",
        "explanation": "\"lest\" এর নিয়ম অনুযায়ী \"should\" বসবে।",
        "banglaRule": "ভয় বা নেতিবাচক ফলাফল এড়াতে lest + should বসে।"
    },
    {
        "id": "mod_h_3",
        "topic": "Modal Verbs",
        "difficulty": "hard",
        "sentence": "I ___ have helped you if you had asked.",
        "options": [
            "would",
            "must",
            "should",
            "could"
        ],
        "answer": "would",
        "explanation": "শর্তাধীন বাক্যের ৩য় নিয়মে \"would have + V3\" বসে।",
        "banglaRule": "3rd conditional: If + had V3, would have V3।"
    },
    {
        "id": "mod_h_4",
        "topic": "Modal Verbs",
        "difficulty": "hard",
        "sentence": "She ___ not have heard you. Speak louder.",
        "options": [
            "might",
            "should",
            "would",
            "will"
        ],
        "answer": "might",
        "explanation": "সম্ভবত সে শুনতে পায়নি (দুর্বল সম্ভাবনা) → might not have।",
        "banglaRule": "Past possibility (negative) = might not have + V3।"
    },
    {
        "id": "mod_h_5",
        "topic": "Modal Verbs",
        "difficulty": "hard",
        "sentence": "If it hadn't rained, we ___ have won the match.",
        "options": [
            "would",
            "might",
            "could",
            "should"
        ],
        "answer": "would",
        "explanation": "অতীতের নিশ্চিত ফলাফল যা ঘটেনি → would have V3।",
        "banglaRule": "3rd conditional result clause।"
    },
    {
        "id": "mod_h_6",
        "topic": "Modal Verbs",
        "difficulty": "hard",
        "sentence": "We ___ as well go home. There is nothing to do.",
        "options": [
            "might",
            "must",
            "should",
            "could"
        ],
        "answer": "might",
        "explanation": "\"might as well\" একটি ফ্রেজ যার অর্থ এছাড়া আর কোনো ভালো উপায় নেই।",
        "banglaRule": "Might as well + V1 = করা ছাড়া উপায় নেই।"
    },
    {
        "id": "mod_h_7",
        "topic": "Modal Verbs",
        "difficulty": "hard",
        "sentence": "You ___ not have gone there alone. It was dangerous.",
        "options": [
            "should",
            "must",
            "would",
            "might"
        ],
        "answer": "should",
        "explanation": "অতীতের অনুচিত কাজ যা করা হয়েছিল → should not have V3।",
        "banglaRule": "Past advice / regret = should not have + V3।"
    },
    {
        "id": "mod_h_8",
        "topic": "Modal Verbs",
        "difficulty": "hard",
        "sentence": "They ___ have arrived already, but they are late.",
        "options": [
            "ought to",
            "must",
            "might",
            "could"
        ],
        "answer": "ought to",
        "explanation": "যৌক্তিক প্রত্যাশা বা দায়িত্ব ছিল → ought to have V3।",
        "banglaRule": "Ought to have + V3 = উচিত ছিল কিন্তু করা হয়নি।"
    },
    {
        "id": "mod_h_9",
        "topic": "Modal Verbs",
        "difficulty": "hard",
        "sentence": "How ___ you say such a thing to me?",
        "options": [
            "dare",
            "must",
            "should",
            "might"
        ],
        "answer": "dare",
        "explanation": "সাহস প্রকাশ বা চ্যালেঞ্জ করতে \"dare\" বসে।",
        "banglaRule": "Dare = সাহস করা (Interrogative/Negative expression)।"
    },
    {
        "id": "mod_h_10",
        "topic": "Modal Verbs",
        "difficulty": "hard",
        "sentence": "I ___ have gone to the party, but I was tired.",
        "options": [
            "would",
            "must",
            "should",
            "might"
        ],
        "answer": "would",
        "explanation": "অতীতের ইচ্ছা ছিল কিন্তু করা হয়নি → would have V3।",
        "banglaRule": "Would have + V3 = ইচ্ছা ছিল কিন্তু করা হয়নি।"
    },
    {
        "id": "comp_e_1",
        "topic": "Comparatives",
        "difficulty": "easy",
        "sentence": "This is the ___ building in Dhaka.",
        "options": [
            "tall",
            "taller",
            "tallest",
            "more tall"
        ],
        "answer": "tallest",
        "explanation": "সবার মধ্যে তুলনা করতে (the থাকলে) superlative degree (tallest) বসে।",
        "banglaRule": "The + Short adjective + est (Superlative)।"
    },
    {
        "id": "comp_e_2",
        "topic": "Comparatives",
        "difficulty": "easy",
        "sentence": "Sarah is ___ than Emily.",
        "options": [
            "tall",
            "taller",
            "tallest",
            "more tall"
        ],
        "answer": "taller",
        "explanation": "তুলনা করতে (than থাকলে) comparative degree (taller) বসে।",
        "banglaRule": "Short adjective + er + than (Comparative)।"
    },
    {
        "id": "comp_e_3",
        "topic": "Comparatives",
        "difficulty": "easy",
        "sentence": "This is the ___ building in Dhaka.",
        "options": [
            "tall",
            "taller",
            "tallest",
            "more tall"
        ],
        "answer": "tallest",
        "explanation": "সবার মধ্যে তুলনা করতে (the থাকলে) superlative degree (tallest) বসে।",
        "banglaRule": "The + Short adjective + est (Superlative)।"
    },
    {
        "id": "comp_e_4",
        "topic": "Comparatives",
        "difficulty": "easy",
        "sentence": "David is ___ than Emily.",
        "options": [
            "tall",
            "taller",
            "tallest",
            "more tall"
        ],
        "answer": "taller",
        "explanation": "তুলনা করতে (than থাকলে) comparative degree (taller) বসে।",
        "banglaRule": "Short adjective + er + than (Comparative)।"
    },
    {
        "id": "comp_e_5",
        "topic": "Comparatives",
        "difficulty": "easy",
        "sentence": "This is the ___ building in Dhaka.",
        "options": [
            "tall",
            "taller",
            "tallest",
            "more tall"
        ],
        "answer": "tallest",
        "explanation": "সবার মধ্যে তুলনা করতে (the থাকলে) superlative degree (tallest) বসে।",
        "banglaRule": "The + Short adjective + est (Superlative)।"
    },
    {
        "id": "comp_e_6",
        "topic": "Comparatives",
        "difficulty": "easy",
        "sentence": "Lisa is ___ than Emily.",
        "options": [
            "tall",
            "taller",
            "tallest",
            "more tall"
        ],
        "answer": "taller",
        "explanation": "তুলনা করতে (than থাকলে) comparative degree (taller) বসে।",
        "banglaRule": "Short adjective + er + than (Comparative)।"
    },
    {
        "id": "comp_e_7",
        "topic": "Comparatives",
        "difficulty": "easy",
        "sentence": "This is the ___ building in Dhaka.",
        "options": [
            "tall",
            "taller",
            "tallest",
            "more tall"
        ],
        "answer": "tallest",
        "explanation": "সবার মধ্যে তুলনা করতে (the থাকলে) superlative degree (tallest) বসে।",
        "banglaRule": "The + Short adjective + est (Superlative)।"
    },
    {
        "id": "comp_e_8",
        "topic": "Comparatives",
        "difficulty": "easy",
        "sentence": "Fahim is ___ than Emily.",
        "options": [
            "tall",
            "taller",
            "tallest",
            "more tall"
        ],
        "answer": "taller",
        "explanation": "তুলনা করতে (than থাকলে) comparative degree (taller) বসে।",
        "banglaRule": "Short adjective + er + than (Comparative)।"
    },
    {
        "id": "comp_e_9",
        "topic": "Comparatives",
        "difficulty": "easy",
        "sentence": "This is the ___ building in Dhaka.",
        "options": [
            "tall",
            "taller",
            "tallest",
            "more tall"
        ],
        "answer": "tallest",
        "explanation": "সবার মধ্যে তুলনা করতে (the থাকলে) superlative degree (tallest) বসে।",
        "banglaRule": "The + Short adjective + est (Superlative)।"
    },
    {
        "id": "comp_e_10",
        "topic": "Comparatives",
        "difficulty": "easy",
        "sentence": "John is ___ than Emily.",
        "options": [
            "tall",
            "taller",
            "tallest",
            "more tall"
        ],
        "answer": "taller",
        "explanation": "তুলনা করতে (than থাকলে) comparative degree (taller) বসে।",
        "banglaRule": "Short adjective + er + than (Comparative)।"
    },
    {
        "id": "comp_e_11",
        "topic": "Comparatives",
        "difficulty": "easy",
        "sentence": "This is the ___ building in Dhaka.",
        "options": [
            "tall",
            "taller",
            "tallest",
            "more tall"
        ],
        "answer": "tallest",
        "explanation": "সবার মধ্যে তুলনা করতে (the থাকলে) superlative degree (tallest) বসে।",
        "banglaRule": "The + Short adjective + est (Superlative)।"
    },
    {
        "id": "comp_e_12",
        "topic": "Comparatives",
        "difficulty": "easy",
        "sentence": "Jessica is ___ than Emily.",
        "options": [
            "tall",
            "taller",
            "tallest",
            "more tall"
        ],
        "answer": "taller",
        "explanation": "তুলনা করতে (than থাকলে) comparative degree (taller) বসে।",
        "banglaRule": "Short adjective + er + than (Comparative)।"
    },
    {
        "id": "comp_e_13",
        "topic": "Comparatives",
        "difficulty": "easy",
        "sentence": "This is the ___ building in Dhaka.",
        "options": [
            "tall",
            "taller",
            "tallest",
            "more tall"
        ],
        "answer": "tallest",
        "explanation": "সবার মধ্যে তুলনা করতে (the থাকলে) superlative degree (tallest) বসে।",
        "banglaRule": "The + Short adjective + est (Superlative)।"
    },
    {
        "id": "comp_e_14",
        "topic": "Comparatives",
        "difficulty": "easy",
        "sentence": "Ryan is ___ than Emily.",
        "options": [
            "tall",
            "taller",
            "tallest",
            "more tall"
        ],
        "answer": "taller",
        "explanation": "তুলনা করতে (than থাকলে) comparative degree (taller) বসে।",
        "banglaRule": "Short adjective + er + than (Comparative)।"
    },
    {
        "id": "comp_e_15",
        "topic": "Comparatives",
        "difficulty": "easy",
        "sentence": "This is the ___ building in Dhaka.",
        "options": [
            "tall",
            "taller",
            "tallest",
            "more tall"
        ],
        "answer": "tallest",
        "explanation": "সবার মধ্যে তুলনা করতে (the থাকলে) superlative degree (tallest) বসে।",
        "banglaRule": "The + Short adjective + est (Superlative)।"
    },
    {
        "id": "comp_e_16",
        "topic": "Comparatives",
        "difficulty": "easy",
        "sentence": "Rahim is ___ than Emily.",
        "options": [
            "tall",
            "taller",
            "tallest",
            "more tall"
        ],
        "answer": "taller",
        "explanation": "তুলনা করতে (than থাকলে) comparative degree (taller) বসে।",
        "banglaRule": "Short adjective + er + than (Comparative)।"
    },
    {
        "id": "comp_e_17",
        "topic": "Comparatives",
        "difficulty": "easy",
        "sentence": "This is the ___ building in Dhaka.",
        "options": [
            "tall",
            "taller",
            "tallest",
            "more tall"
        ],
        "answer": "tallest",
        "explanation": "সবার মধ্যে তুলনা করতে (the থাকলে) superlative degree (tallest) বসে।",
        "banglaRule": "The + Short adjective + est (Superlative)।"
    },
    {
        "id": "comp_e_18",
        "topic": "Comparatives",
        "difficulty": "easy",
        "sentence": "Sarah is ___ than Emily.",
        "options": [
            "tall",
            "taller",
            "tallest",
            "more tall"
        ],
        "answer": "taller",
        "explanation": "তুলনা করতে (than থাকলে) comparative degree (taller) বসে।",
        "banglaRule": "Short adjective + er + than (Comparative)।"
    },
    {
        "id": "comp_e_19",
        "topic": "Comparatives",
        "difficulty": "easy",
        "sentence": "This is the ___ building in Dhaka.",
        "options": [
            "tall",
            "taller",
            "tallest",
            "more tall"
        ],
        "answer": "tallest",
        "explanation": "সবার মধ্যে তুলনা করতে (the থাকলে) superlative degree (tallest) বসে।",
        "banglaRule": "The + Short adjective + est (Superlative)।"
    },
    {
        "id": "comp_e_20",
        "topic": "Comparatives",
        "difficulty": "easy",
        "sentence": "David is ___ than Emily.",
        "options": [
            "tall",
            "taller",
            "tallest",
            "more tall"
        ],
        "answer": "taller",
        "explanation": "তুলনা করতে (than থাকলে) comparative degree (taller) বসে।",
        "banglaRule": "Short adjective + er + than (Comparative)।"
    },
    {
        "id": "comp_e_21",
        "topic": "Comparatives",
        "difficulty": "easy",
        "sentence": "This is the ___ building in Dhaka.",
        "options": [
            "tall",
            "taller",
            "tallest",
            "more tall"
        ],
        "answer": "tallest",
        "explanation": "সবার মধ্যে তুলনা করতে (the থাকলে) superlative degree (tallest) বসে।",
        "banglaRule": "The + Short adjective + est (Superlative)।"
    },
    {
        "id": "comp_e_22",
        "topic": "Comparatives",
        "difficulty": "easy",
        "sentence": "Lisa is ___ than Emily.",
        "options": [
            "tall",
            "taller",
            "tallest",
            "more tall"
        ],
        "answer": "taller",
        "explanation": "তুলনা করতে (than থাকলে) comparative degree (taller) বসে।",
        "banglaRule": "Short adjective + er + than (Comparative)।"
    },
    {
        "id": "comp_e_23",
        "topic": "Comparatives",
        "difficulty": "easy",
        "sentence": "This is the ___ building in Dhaka.",
        "options": [
            "tall",
            "taller",
            "tallest",
            "more tall"
        ],
        "answer": "tallest",
        "explanation": "সবার মধ্যে তুলনা করতে (the থাকলে) superlative degree (tallest) বসে।",
        "banglaRule": "The + Short adjective + est (Superlative)।"
    },
    {
        "id": "comp_e_24",
        "topic": "Comparatives",
        "difficulty": "easy",
        "sentence": "Fahim is ___ than Emily.",
        "options": [
            "tall",
            "taller",
            "tallest",
            "more tall"
        ],
        "answer": "taller",
        "explanation": "তুলনা করতে (than থাকলে) comparative degree (taller) বসে।",
        "banglaRule": "Short adjective + er + than (Comparative)।"
    },
    {
        "id": "comp_e_25",
        "topic": "Comparatives",
        "difficulty": "easy",
        "sentence": "This is the ___ building in Dhaka.",
        "options": [
            "tall",
            "taller",
            "tallest",
            "more tall"
        ],
        "answer": "tallest",
        "explanation": "সবার মধ্যে তুলনা করতে (the থাকলে) superlative degree (tallest) বসে।",
        "banglaRule": "The + Short adjective + est (Superlative)।"
    },
    {
        "id": "comp_e_26",
        "topic": "Comparatives",
        "difficulty": "easy",
        "sentence": "John is ___ than Emily.",
        "options": [
            "tall",
            "taller",
            "tallest",
            "more tall"
        ],
        "answer": "taller",
        "explanation": "তুলনা করতে (than থাকলে) comparative degree (taller) বসে।",
        "banglaRule": "Short adjective + er + than (Comparative)।"
    },
    {
        "id": "comp_e_27",
        "topic": "Comparatives",
        "difficulty": "easy",
        "sentence": "This is the ___ building in Dhaka.",
        "options": [
            "tall",
            "taller",
            "tallest",
            "more tall"
        ],
        "answer": "tallest",
        "explanation": "সবার মধ্যে তুলনা করতে (the থাকলে) superlative degree (tallest) বসে।",
        "banglaRule": "The + Short adjective + est (Superlative)।"
    },
    {
        "id": "comp_e_28",
        "topic": "Comparatives",
        "difficulty": "easy",
        "sentence": "Jessica is ___ than Emily.",
        "options": [
            "tall",
            "taller",
            "tallest",
            "more tall"
        ],
        "answer": "taller",
        "explanation": "তুলনা করতে (than থাকলে) comparative degree (taller) বসে।",
        "banglaRule": "Short adjective + er + than (Comparative)।"
    },
    {
        "id": "comp_e_29",
        "topic": "Comparatives",
        "difficulty": "easy",
        "sentence": "This is the ___ building in Dhaka.",
        "options": [
            "tall",
            "taller",
            "tallest",
            "more tall"
        ],
        "answer": "tallest",
        "explanation": "সবার মধ্যে তুলনা করতে (the থাকলে) superlative degree (tallest) বসে।",
        "banglaRule": "The + Short adjective + est (Superlative)।"
    },
    {
        "id": "comp_e_30",
        "topic": "Comparatives",
        "difficulty": "easy",
        "sentence": "Ryan is ___ than Emily.",
        "options": [
            "tall",
            "taller",
            "tallest",
            "more tall"
        ],
        "answer": "taller",
        "explanation": "তুলনা করতে (than থাকলে) comparative degree (taller) বসে।",
        "banglaRule": "Short adjective + er + than (Comparative)।"
    },
    {
        "id": "comp_e_31",
        "topic": "Comparatives",
        "difficulty": "easy",
        "sentence": "This is the ___ building in Dhaka.",
        "options": [
            "tall",
            "taller",
            "tallest",
            "more tall"
        ],
        "answer": "tallest",
        "explanation": "সবার মধ্যে তুলনা করতে (the থাকলে) superlative degree (tallest) বসে।",
        "banglaRule": "The + Short adjective + est (Superlative)।"
    },
    {
        "id": "comp_e_32",
        "topic": "Comparatives",
        "difficulty": "easy",
        "sentence": "Rahim is ___ than Emily.",
        "options": [
            "tall",
            "taller",
            "tallest",
            "more tall"
        ],
        "answer": "taller",
        "explanation": "তুলনা করতে (than থাকলে) comparative degree (taller) বসে।",
        "banglaRule": "Short adjective + er + than (Comparative)।"
    },
    {
        "id": "comp_e_33",
        "topic": "Comparatives",
        "difficulty": "easy",
        "sentence": "This is the ___ building in Dhaka.",
        "options": [
            "tall",
            "taller",
            "tallest",
            "more tall"
        ],
        "answer": "tallest",
        "explanation": "সবার মধ্যে তুলনা করতে (the থাকলে) superlative degree (tallest) বসে।",
        "banglaRule": "The + Short adjective + est (Superlative)।"
    },
    {
        "id": "comp_e_34",
        "topic": "Comparatives",
        "difficulty": "easy",
        "sentence": "Sarah is ___ than Emily.",
        "options": [
            "tall",
            "taller",
            "tallest",
            "more tall"
        ],
        "answer": "taller",
        "explanation": "তুলনা করতে (than থাকলে) comparative degree (taller) বসে।",
        "banglaRule": "Short adjective + er + than (Comparative)।"
    },
    {
        "id": "comp_e_35",
        "topic": "Comparatives",
        "difficulty": "easy",
        "sentence": "This is the ___ building in Dhaka.",
        "options": [
            "tall",
            "taller",
            "tallest",
            "more tall"
        ],
        "answer": "tallest",
        "explanation": "সবার মধ্যে তুলনা করতে (the থাকলে) superlative degree (tallest) বসে।",
        "banglaRule": "The + Short adjective + est (Superlative)।"
    },
    {
        "id": "comp_e_36",
        "topic": "Comparatives",
        "difficulty": "easy",
        "sentence": "David is ___ than Emily.",
        "options": [
            "tall",
            "taller",
            "tallest",
            "more tall"
        ],
        "answer": "taller",
        "explanation": "তুলনা করতে (than থাকলে) comparative degree (taller) বসে।",
        "banglaRule": "Short adjective + er + than (Comparative)।"
    },
    {
        "id": "comp_e_37",
        "topic": "Comparatives",
        "difficulty": "easy",
        "sentence": "This is the ___ building in Dhaka.",
        "options": [
            "tall",
            "taller",
            "tallest",
            "more tall"
        ],
        "answer": "tallest",
        "explanation": "সবার মধ্যে তুলনা করতে (the থাকলে) superlative degree (tallest) বসে।",
        "banglaRule": "The + Short adjective + est (Superlative)।"
    },
    {
        "id": "comp_e_38",
        "topic": "Comparatives",
        "difficulty": "easy",
        "sentence": "Lisa is ___ than Emily.",
        "options": [
            "tall",
            "taller",
            "tallest",
            "more tall"
        ],
        "answer": "taller",
        "explanation": "তুলনা করতে (than থাকলে) comparative degree (taller) বসে।",
        "banglaRule": "Short adjective + er + than (Comparative)।"
    },
    {
        "id": "comp_e_39",
        "topic": "Comparatives",
        "difficulty": "easy",
        "sentence": "This is the ___ building in Dhaka.",
        "options": [
            "tall",
            "taller",
            "tallest",
            "more tall"
        ],
        "answer": "tallest",
        "explanation": "সবার মধ্যে তুলনা করতে (the থাকলে) superlative degree (tallest) বসে।",
        "banglaRule": "The + Short adjective + est (Superlative)।"
    },
    {
        "id": "comp_e_40",
        "topic": "Comparatives",
        "difficulty": "easy",
        "sentence": "Fahim is ___ than Emily.",
        "options": [
            "tall",
            "taller",
            "tallest",
            "more tall"
        ],
        "answer": "taller",
        "explanation": "তুলনা করতে (than থাকলে) comparative degree (taller) বসে।",
        "banglaRule": "Short adjective + er + than (Comparative)।"
    },
    {
        "id": "comp_m_1",
        "topic": "Comparatives",
        "difficulty": "medium",
        "sentence": "This book is ___ than the other one.",
        "options": [
            "more interesting",
            "most interesting",
            "interestinger",
            "as interesting"
        ],
        "answer": "more interesting",
        "explanation": "দ্বি-অক্ষর বিশিষ্ট দীর্ঘ শব্দের comparative রূপ \"more + adj\" হয়।",
        "banglaRule": "Long adjective (2+ syllables) comparative = more + adjective।"
    },
    {
        "id": "comp_m_2",
        "topic": "Comparatives",
        "difficulty": "medium",
        "sentence": "This movie is ___ than the other one.",
        "options": [
            "more interesting",
            "most interesting",
            "interestinger",
            "as interesting"
        ],
        "answer": "more interesting",
        "explanation": "দ্বি-অক্ষর বিশিষ্ট দীর্ঘ শব্দের comparative রূপ \"more + adj\" হয়।",
        "banglaRule": "Long adjective (2+ syllables) comparative = more + adjective।"
    },
    {
        "id": "comp_m_3",
        "topic": "Comparatives",
        "difficulty": "medium",
        "sentence": "She is the ___ beautiful girl in the room.",
        "options": [
            "more",
            "most",
            "as",
            "very"
        ],
        "answer": "most",
        "explanation": "দীর্ঘ শব্দের superlative রূপ \"the + most + adj\" হয়।",
        "banglaRule": "Superlative of long adjective = the most + adjective।"
    },
    {
        "id": "comp_m_4",
        "topic": "Comparatives",
        "difficulty": "medium",
        "sentence": "She is the ___ beautiful girl in the hall.",
        "options": [
            "more",
            "most",
            "as",
            "very"
        ],
        "answer": "most",
        "explanation": "দীর্ঘ শব্দের superlative রূপ \"the + most + adj\" হয়।",
        "banglaRule": "Superlative of long adjective = the most + adjective।"
    },
    {
        "id": "comp_m_5",
        "topic": "Comparatives",
        "difficulty": "medium",
        "sentence": "My English is getting ___ day by day.",
        "options": [
            "good",
            "better",
            "best",
            "more good"
        ],
        "answer": "better",
        "explanation": "উন্নতি প্রকাশ করতে comparative রূপ \"better\" ব্যবহৃত হয়।",
        "banglaRule": "Good-এর comparative রূপ better, superlative রূপ best।"
    },
    {
        "id": "comp_m_6",
        "topic": "Comparatives",
        "difficulty": "medium",
        "sentence": "My speaking is getting ___ day by day.",
        "options": [
            "good",
            "better",
            "best",
            "more good"
        ],
        "answer": "better",
        "explanation": "উন্নতি প্রকাশ করতে comparative রূপ \"better\" ব্যবহৃত হয়।",
        "banglaRule": "Good-এর comparative রূপ better, superlative রূপ best।"
    },
    {
        "id": "comp_m_7",
        "topic": "Comparatives",
        "difficulty": "medium",
        "sentence": "He is the ___ player on the team.",
        "options": [
            "bad",
            "worse",
            "worst",
            "more bad"
        ],
        "answer": "worst",
        "explanation": "\"Bad\"-এর superlative রূপ \"worst\"।",
        "banglaRule": "Bad (Positive) -> Worse (Comparative) -> Worst (Superlative)।"
    },
    {
        "id": "comp_m_8",
        "topic": "Comparatives",
        "difficulty": "medium",
        "sentence": "He is the ___ runner on the team.",
        "options": [
            "bad",
            "worse",
            "worst",
            "more bad"
        ],
        "answer": "worst",
        "explanation": "\"Bad\"-এর superlative রূপ \"worst\"।",
        "banglaRule": "Bad (Positive) -> Worse (Comparative) -> Worst (Superlative)।"
    },
    {
        "id": "comp_m_9",
        "topic": "Comparatives",
        "difficulty": "medium",
        "sentence": "This task is ___ than the last one.",
        "options": [
            "easy",
            "easier",
            "easiest",
            "more easy"
        ],
        "answer": "easier",
        "explanation": "y-দিয়ে শেষ হওয়া শব্দের comparative-এ y উঠে ier হয়।",
        "banglaRule": "Adjective ending in y -> ier (Comparative) / iest (Superlative)।"
    },
    {
        "id": "comp_m_10",
        "topic": "Comparatives",
        "difficulty": "medium",
        "sentence": "This puzzle is ___ than the last one.",
        "options": [
            "easy",
            "easier",
            "easiest",
            "more easy"
        ],
        "answer": "easier",
        "explanation": "y-দিয়ে শেষ হওয়া শব্দের comparative-এ y উঠে ier হয়।",
        "banglaRule": "Adjective ending in y -> ier (Comparative) / iest (Superlative)।"
    },
    {
        "id": "comp_m_11",
        "topic": "Comparatives",
        "difficulty": "medium",
        "sentence": "She runs ___ than Rahim.",
        "options": [
            "fast",
            "faster",
            "fastest",
            "more fast"
        ],
        "answer": "faster",
        "explanation": "\"fast\" adveb-টির comparative রূপ \"faster\"।",
        "banglaRule": "Fast -> Faster -> Fastest।"
    },
    {
        "id": "comp_m_12",
        "topic": "Comparatives",
        "difficulty": "medium",
        "sentence": "She runs ___ than Alex.",
        "options": [
            "fast",
            "faster",
            "fastest",
            "more fast"
        ],
        "answer": "faster",
        "explanation": "\"fast\" adveb-টির comparative রূপ \"faster\"।",
        "banglaRule": "Fast -> Faster -> Fastest।"
    },
    {
        "id": "comp_m_13",
        "topic": "Comparatives",
        "difficulty": "medium",
        "sentence": "Gold is ___ than silver.",
        "options": [
            "expensive",
            "more expensive",
            "most expensive",
            "expensiver"
        ],
        "answer": "more expensive",
        "explanation": "দীর্ঘ বিশেষণ, তাই comparative-এ \"more\" বসবে।",
        "banglaRule": "More + expensive + than।"
    },
    {
        "id": "comp_m_14",
        "topic": "Comparatives",
        "difficulty": "medium",
        "sentence": "Platinum is ___ than silver.",
        "options": [
            "expensive",
            "more expensive",
            "most expensive",
            "expensiver"
        ],
        "answer": "more expensive",
        "explanation": "দীর্ঘ বিশেষণ, তাই comparative-এ \"more\" বসবে।",
        "banglaRule": "More + expensive + than।"
    },
    {
        "id": "comp_m_15",
        "topic": "Comparatives",
        "difficulty": "medium",
        "sentence": "He is not so ___ as his brother.",
        "options": [
            "strong",
            "stronger",
            "strongest",
            "more strong"
        ],
        "answer": "strong",
        "explanation": "so/as ... as এর মাঝে positive degree-র adjective বসে।",
        "banglaRule": "As/so + Positive Adjective + as।"
    },
    {
        "id": "comp_m_16",
        "topic": "Comparatives",
        "difficulty": "medium",
        "sentence": "He is not so ___ as his father.",
        "options": [
            "strong",
            "stronger",
            "strongest",
            "more strong"
        ],
        "answer": "strong",
        "explanation": "so/as ... as এর মাঝে positive degree-র adjective বসে।",
        "banglaRule": "As/so + Positive Adjective + as।"
    },
    {
        "id": "comp_m_17",
        "topic": "Comparatives",
        "difficulty": "medium",
        "sentence": "This is the ___ film I have ever seen.",
        "options": [
            "worse",
            "worst",
            "bad",
            "badly"
        ],
        "answer": "worst",
        "explanation": "সবার চেয়ে খারাপ অর্থে superlative \"worst\" বসে।",
        "banglaRule": "The + Superlative (worst)।"
    },
    {
        "id": "comp_m_18",
        "topic": "Comparatives",
        "difficulty": "medium",
        "sentence": "This is the ___ novel I have ever seen.",
        "options": [
            "worse",
            "worst",
            "bad",
            "badly"
        ],
        "answer": "worst",
        "explanation": "সবার চেয়ে খারাপ অর্থে superlative \"worst\" বসে।",
        "banglaRule": "The + Superlative (worst)।"
    },
    {
        "id": "comp_m_19",
        "topic": "Comparatives",
        "difficulty": "medium",
        "sentence": "Of the two sisters, she is the ___.",
        "options": [
            "pretty",
            "prettier",
            "prettiest",
            "more pretty"
        ],
        "answer": "prettier",
        "explanation": "দুটি জিনিসের মধ্যে তুলনা বোঝালে specific comparative \"the + comparative\" বসে।",
        "banglaRule": "Of the two + The + Comparative Adjective।"
    },
    {
        "id": "comp_m_20",
        "topic": "Comparatives",
        "difficulty": "medium",
        "sentence": "Of the two students, she is the ___.",
        "options": [
            "pretty",
            "prettier",
            "prettiest",
            "more pretty"
        ],
        "answer": "prettier",
        "explanation": "দুটি জিনিসের মধ্যে তুলনা বোঝালে specific comparative \"the + comparative\" বসে।",
        "banglaRule": "Of the two + The + Comparative Adjective।"
    },
    {
        "id": "comp_m_21",
        "topic": "Comparatives",
        "difficulty": "medium",
        "sentence": "Of the three brothers, he is the ___.",
        "options": [
            "smart",
            "smarter",
            "smartest",
            "more smart"
        ],
        "answer": "smartest",
        "explanation": "তিনজনের মধ্যে সুপারলেটিভ ডিগ্রি বসবে।",
        "banglaRule": "Of the three or more + The + Superlative Adjective।"
    },
    {
        "id": "comp_m_22",
        "topic": "Comparatives",
        "difficulty": "medium",
        "sentence": "Of the three fathers, he is the ___.",
        "options": [
            "smart",
            "smarter",
            "smartest",
            "more smart"
        ],
        "answer": "smartest",
        "explanation": "তিনজনের মধ্যে সুপারলেটিভ ডিগ্রি বসবে।",
        "banglaRule": "Of the three or more + The + Superlative Adjective।"
    },
    {
        "id": "comp_m_23",
        "topic": "Comparatives",
        "difficulty": "medium",
        "sentence": "She is ___ than anyone else.",
        "options": [
            "intelligent",
            "more intelligent",
            "most intelligent",
            "intelligenter"
        ],
        "answer": "more intelligent",
        "explanation": "than anyone else থাকলে comparative degree বসে।",
        "banglaRule": "Comparative + than anyone else।"
    },
    {
        "id": "comp_m_24",
        "topic": "Comparatives",
        "difficulty": "medium",
        "sentence": "She is ___ than everyone else.",
        "options": [
            "intelligent",
            "more intelligent",
            "most intelligent",
            "intelligenter"
        ],
        "answer": "more intelligent",
        "explanation": "than anyone else থাকলে comparative degree বসে।",
        "banglaRule": "Comparative + than anyone else।"
    },
    {
        "id": "comp_m_25",
        "topic": "Comparatives",
        "difficulty": "medium",
        "sentence": "My house is ___ than yours.",
        "options": [
            "big",
            "bigger",
            "biggest",
            "more big"
        ],
        "answer": "bigger",
        "explanation": "তুলনা করতে comparative degree. \"Yours\" মানে your house।",
        "banglaRule": "Comparative + than + possessive pronoun।"
    },
    {
        "id": "comp_m_26",
        "topic": "Comparatives",
        "difficulty": "medium",
        "sentence": "My room is ___ than yours.",
        "options": [
            "big",
            "bigger",
            "biggest",
            "more big"
        ],
        "answer": "bigger",
        "explanation": "তুলনা করতে comparative degree. \"Yours\" মানে your house।",
        "banglaRule": "Comparative + than + possessive pronoun।"
    },
    {
        "id": "comp_m_27",
        "topic": "Comparatives",
        "difficulty": "medium",
        "sentence": "This computer is ___ than that one.",
        "options": [
            "cheaper",
            "cheapest",
            "cheap",
            "more cheap"
        ],
        "answer": "cheaper",
        "explanation": "\"cheap\" একটি short adjective, তাই \"cheaper\" বসবে।",
        "banglaRule": "Short adjective comparative = adj+er।"
    },
    {
        "id": "comp_m_28",
        "topic": "Comparatives",
        "difficulty": "medium",
        "sentence": "This phone is ___ than that one.",
        "options": [
            "cheaper",
            "cheapest",
            "cheap",
            "more cheap"
        ],
        "answer": "cheaper",
        "explanation": "\"cheap\" একটি short adjective, তাই \"cheaper\" বসবে।",
        "banglaRule": "Short adjective comparative = adj+er।"
    },
    {
        "id": "comp_m_29",
        "topic": "Comparatives",
        "difficulty": "medium",
        "sentence": "Today is ___ than yesterday.",
        "options": [
            "hot",
            "hotter",
            "hottest",
            "more hot"
        ],
        "answer": "hotter",
        "explanation": "hot-এর comparative-এ consonant double হয়ে hotter হয়।",
        "banglaRule": "CVC pattern short adjective consonant double হয় (hotter, bigger, thinner)।"
    },
    {
        "id": "comp_m_30",
        "topic": "Comparatives",
        "difficulty": "medium",
        "sentence": "Today is ___ than last night.",
        "options": [
            "hot",
            "hotter",
            "hottest",
            "more hot"
        ],
        "answer": "hotter",
        "explanation": "hot-এর comparative-এ consonant double হয়ে hotter হয়।",
        "banglaRule": "CVC pattern short adjective consonant double হয় (hotter, bigger, thinner)।"
    },
    {
        "id": "comp_h_1",
        "topic": "Comparatives",
        "difficulty": "hard",
        "sentence": "He is ___ senior to me.",
        "options": [
            "more",
            "—",
            "than",
            "to"
        ],
        "answer": "—",
        "explanation": "\"senior, junior, prefer\"-এর সাথে comparative-এ clear comparison-এ to বসে, extra more লাগে না।",
        "banglaRule": "Latin comparatives (senior, junior, superior, inferior) + to (no more/than)।"
    },
    {
        "id": "comp_h_2",
        "topic": "Comparatives",
        "difficulty": "hard",
        "sentence": "He is ___ junior to me.",
        "options": [
            "more",
            "—",
            "than",
            "to"
        ],
        "answer": "—",
        "explanation": "\"senior, junior, prefer\"-এর সাথে comparative-এ clear comparison-এ to বসে, extra more লাগে না।",
        "banglaRule": "Latin comparatives (senior, junior, superior, inferior) + to (no more/than)।"
    },
    {
        "id": "comp_h_3",
        "topic": "Comparatives",
        "difficulty": "hard",
        "sentence": "The weather is getting ___ and ___.",
        "options": [
            "cold / cold",
            "colder / colder",
            "coldest / coldest",
            "more cold / more cold"
        ],
        "answer": "colder / colder",
        "explanation": "ক্রমশ পরিবর্তন বোঝাতে double comparative বসে।",
        "banglaRule": "Gradual increase/decrease = Comparative + and + Comparative।"
    },
    {
        "id": "comp_h_4",
        "topic": "Comparatives",
        "difficulty": "hard",
        "sentence": "The economy is getting ___ and ___.",
        "options": [
            "cold / cold",
            "colder / colder",
            "coldest / coldest",
            "more cold / more cold"
        ],
        "answer": "colder / colder",
        "explanation": "ক্রমশ পরিবর্তন বোঝাতে double comparative বসে।",
        "banglaRule": "Gradual increase/decrease = Comparative + and + Comparative।"
    },
    {
        "id": "comp_h_5",
        "topic": "Comparatives",
        "difficulty": "hard",
        "sentence": "He is the ___ of the two boys.",
        "options": [
            "tall",
            "taller",
            "tallest",
            "more tall"
        ],
        "answer": "taller",
        "explanation": "দুজনের মধ্যে তুলনা নির্দিষ্ট করতে the + comparative বসে।",
        "banglaRule": "Of the two + the + comparative (সাধারণত the + superlative হয়, কিন্তু এখানে ২ জন)।"
    },
    {
        "id": "comp_h_6",
        "topic": "Comparatives",
        "difficulty": "hard",
        "sentence": "He is the ___ of the two girls.",
        "options": [
            "tall",
            "taller",
            "tallest",
            "more tall"
        ],
        "answer": "taller",
        "explanation": "দুজনের মধ্যে তুলনা নির্দিষ্ট করতে the + comparative বসে।",
        "banglaRule": "Of the two + the + comparative (সাধারণত the + superlative হয়, কিন্তু এখানে ২ জন)।"
    },
    {
        "id": "comp_h_7",
        "topic": "Comparatives",
        "difficulty": "hard",
        "sentence": "He is ___ clever than wise.",
        "options": [
            "more",
            "cleverer",
            "most",
            "—"
        ],
        "answer": "more",
        "explanation": "একই ব্যক্তির দুটি গুণের তুলনা করতে \"more + positive adj\" বসে।",
        "banglaRule": "একই ব্যক্তির দুটি গুণের তুলনা = more + positive adj + than + positive adj।"
    },
    {
        "id": "comp_h_8",
        "topic": "Comparatives",
        "difficulty": "hard",
        "sentence": "He is ___ brave than honest.",
        "options": [
            "more",
            "cleverer",
            "most",
            "—"
        ],
        "answer": "more",
        "explanation": "একই ব্যক্তির দুটি গুণের তুলনা করতে \"more + positive adj\" বসে।",
        "banglaRule": "একই ব্যক্তির দুটি গুণের তুলনা = more + positive adj + than + positive adj।"
    },
    {
        "id": "comp_h_9",
        "topic": "Comparatives",
        "difficulty": "hard",
        "sentence": "The less you study, ___ you learn.",
        "options": [
            "the less",
            "the more",
            "less",
            "more"
        ],
        "answer": "the less",
        "explanation": "দুটি ঘটনার সমানুপাতিক রাস বোঝাতে \"the less ... the less\" বসে।",
        "banglaRule": "The comparative ... the comparative (Double comparative)।"
    },
    {
        "id": "comp_h_10",
        "topic": "Comparatives",
        "difficulty": "hard",
        "sentence": "The less you eat, ___ you save.",
        "options": [
            "the less",
            "the more",
            "less",
            "more"
        ],
        "answer": "the less",
        "explanation": "দুটি ঘটনার সমানুপাতিক রাস বোঝাতে \"the less ... the less\" বসে।",
        "banglaRule": "The comparative ... the comparative (Double comparative)।"
    },
    {
        "id": "cond_e_1",
        "topic": "Conditionals",
        "difficulty": "easy",
        "sentence": "If Karim works hard, he ___ succeed.",
        "options": [
            "will",
            "would",
            "would have",
            "had"
        ],
        "answer": "will",
        "explanation": "First conditional: If + Present simple → Future Simple (will + V1)।",
        "banglaRule": "1st Conditional: If + Present, Will + V1 (বাস্তব ও সম্ভাব্য ভবিষ্যৎ)।"
    },
    {
        "id": "cond_e_2",
        "topic": "Conditionals",
        "difficulty": "easy",
        "sentence": "If Sarah works hard, he ___ succeed.",
        "options": [
            "will",
            "would",
            "would have",
            "had"
        ],
        "answer": "will",
        "explanation": "First conditional: If + Present simple → Future Simple (will + V1)।",
        "banglaRule": "1st Conditional: If + Present, Will + V1 (বাস্তব ও সম্ভাব্য ভবিষ্যৎ)।"
    },
    {
        "id": "cond_e_3",
        "topic": "Conditionals",
        "difficulty": "easy",
        "sentence": "If Emily works hard, he ___ succeed.",
        "options": [
            "will",
            "would",
            "would have",
            "had"
        ],
        "answer": "will",
        "explanation": "First conditional: If + Present simple → Future Simple (will + V1)।",
        "banglaRule": "1st Conditional: If + Present, Will + V1 (বাস্তব ও সম্ভাব্য ভবিষ্যৎ)।"
    },
    {
        "id": "cond_e_4",
        "topic": "Conditionals",
        "difficulty": "easy",
        "sentence": "If David works hard, he ___ succeed.",
        "options": [
            "will",
            "would",
            "would have",
            "had"
        ],
        "answer": "will",
        "explanation": "First conditional: If + Present simple → Future Simple (will + V1)।",
        "banglaRule": "1st Conditional: If + Present, Will + V1 (বাস্তব ও সম্ভাব্য ভবিষ্যৎ)।"
    },
    {
        "id": "cond_e_5",
        "topic": "Conditionals",
        "difficulty": "easy",
        "sentence": "If Sumi works hard, he ___ succeed.",
        "options": [
            "will",
            "would",
            "would have",
            "had"
        ],
        "answer": "will",
        "explanation": "First conditional: If + Present simple → Future Simple (will + V1)।",
        "banglaRule": "1st Conditional: If + Present, Will + V1 (বাস্তব ও সম্ভাব্য ভবিষ্যৎ)।"
    },
    {
        "id": "cond_e_6",
        "topic": "Conditionals",
        "difficulty": "easy",
        "sentence": "If Lisa works hard, he ___ succeed.",
        "options": [
            "will",
            "would",
            "would have",
            "had"
        ],
        "answer": "will",
        "explanation": "First conditional: If + Present simple → Future Simple (will + V1)।",
        "banglaRule": "1st Conditional: If + Present, Will + V1 (বাস্তব ও সম্ভাব্য ভবিষ্যৎ)।"
    },
    {
        "id": "cond_e_7",
        "topic": "Conditionals",
        "difficulty": "easy",
        "sentence": "If Kabir works hard, he ___ succeed.",
        "options": [
            "will",
            "would",
            "would have",
            "had"
        ],
        "answer": "will",
        "explanation": "First conditional: If + Present simple → Future Simple (will + V1)।",
        "banglaRule": "1st Conditional: If + Present, Will + V1 (বাস্তব ও সম্ভাব্য ভবিষ্যৎ)।"
    },
    {
        "id": "cond_e_8",
        "topic": "Conditionals",
        "difficulty": "easy",
        "sentence": "If Fahim works hard, he ___ succeed.",
        "options": [
            "will",
            "would",
            "would have",
            "had"
        ],
        "answer": "will",
        "explanation": "First conditional: If + Present simple → Future Simple (will + V1)।",
        "banglaRule": "1st Conditional: If + Present, Will + V1 (বাস্তব ও সম্ভাব্য ভবিষ্যৎ)।"
    },
    {
        "id": "cond_e_9",
        "topic": "Conditionals",
        "difficulty": "easy",
        "sentence": "If Ayesha works hard, he ___ succeed.",
        "options": [
            "will",
            "would",
            "would have",
            "had"
        ],
        "answer": "will",
        "explanation": "First conditional: If + Present simple → Future Simple (will + V1)।",
        "banglaRule": "1st Conditional: If + Present, Will + V1 (বাস্তব ও সম্ভাব্য ভবিষ্যৎ)।"
    },
    {
        "id": "cond_e_10",
        "topic": "Conditionals",
        "difficulty": "easy",
        "sentence": "If John works hard, he ___ succeed.",
        "options": [
            "will",
            "would",
            "would have",
            "had"
        ],
        "answer": "will",
        "explanation": "First conditional: If + Present simple → Future Simple (will + V1)।",
        "banglaRule": "1st Conditional: If + Present, Will + V1 (বাস্তব ও সম্ভাব্য ভবিষ্যৎ)।"
    },
    {
        "id": "cond_e_11",
        "topic": "Conditionals",
        "difficulty": "easy",
        "sentence": "If Maria works hard, he ___ succeed.",
        "options": [
            "will",
            "would",
            "would have",
            "had"
        ],
        "answer": "will",
        "explanation": "First conditional: If + Present simple → Future Simple (will + V1)।",
        "banglaRule": "1st Conditional: If + Present, Will + V1 (বাস্তব ও সম্ভাব্য ভবিষ্যৎ)।"
    },
    {
        "id": "cond_e_12",
        "topic": "Conditionals",
        "difficulty": "easy",
        "sentence": "If Jessica works hard, he ___ succeed.",
        "options": [
            "will",
            "would",
            "would have",
            "had"
        ],
        "answer": "will",
        "explanation": "First conditional: If + Present simple → Future Simple (will + V1)।",
        "banglaRule": "1st Conditional: If + Present, Will + V1 (বাস্তব ও সম্ভাব্য ভবিষ্যৎ)।"
    },
    {
        "id": "cond_e_13",
        "topic": "Conditionals",
        "difficulty": "easy",
        "sentence": "If Alex works hard, he ___ succeed.",
        "options": [
            "will",
            "would",
            "would have",
            "had"
        ],
        "answer": "will",
        "explanation": "First conditional: If + Present simple → Future Simple (will + V1)।",
        "banglaRule": "1st Conditional: If + Present, Will + V1 (বাস্তব ও সম্ভাব্য ভবিষ্যৎ)।"
    },
    {
        "id": "cond_e_14",
        "topic": "Conditionals",
        "difficulty": "easy",
        "sentence": "If Ryan works hard, he ___ succeed.",
        "options": [
            "will",
            "would",
            "would have",
            "had"
        ],
        "answer": "will",
        "explanation": "First conditional: If + Present simple → Future Simple (will + V1)।",
        "banglaRule": "1st Conditional: If + Present, Will + V1 (বাস্তব ও সম্ভাব্য ভবিষ্যৎ)।"
    },
    {
        "id": "cond_e_15",
        "topic": "Conditionals",
        "difficulty": "easy",
        "sentence": "If Sofie works hard, he ___ succeed.",
        "options": [
            "will",
            "would",
            "would have",
            "had"
        ],
        "answer": "will",
        "explanation": "First conditional: If + Present simple → Future Simple (will + V1)।",
        "banglaRule": "1st Conditional: If + Present, Will + V1 (বাস্তব ও সম্ভাব্য ভবিষ্যৎ)।"
    },
    {
        "id": "cond_e_16",
        "topic": "Conditionals",
        "difficulty": "easy",
        "sentence": "If Rahim works hard, he ___ succeed.",
        "options": [
            "will",
            "would",
            "would have",
            "had"
        ],
        "answer": "will",
        "explanation": "First conditional: If + Present simple → Future Simple (will + V1)।",
        "banglaRule": "1st Conditional: If + Present, Will + V1 (বাস্তব ও সম্ভাব্য ভবিষ্যৎ)।"
    },
    {
        "id": "cond_e_17",
        "topic": "Conditionals",
        "difficulty": "easy",
        "sentence": "If Karim works hard, he ___ succeed.",
        "options": [
            "will",
            "would",
            "would have",
            "had"
        ],
        "answer": "will",
        "explanation": "First conditional: If + Present simple → Future Simple (will + V1)।",
        "banglaRule": "1st Conditional: If + Present, Will + V1 (বাস্তব ও সম্ভাব্য ভবিষ্যৎ)।"
    },
    {
        "id": "cond_e_18",
        "topic": "Conditionals",
        "difficulty": "easy",
        "sentence": "If Sarah works hard, he ___ succeed.",
        "options": [
            "will",
            "would",
            "would have",
            "had"
        ],
        "answer": "will",
        "explanation": "First conditional: If + Present simple → Future Simple (will + V1)।",
        "banglaRule": "1st Conditional: If + Present, Will + V1 (বাস্তব ও সম্ভাব্য ভবিষ্যৎ)।"
    },
    {
        "id": "cond_e_19",
        "topic": "Conditionals",
        "difficulty": "easy",
        "sentence": "If Emily works hard, he ___ succeed.",
        "options": [
            "will",
            "would",
            "would have",
            "had"
        ],
        "answer": "will",
        "explanation": "First conditional: If + Present simple → Future Simple (will + V1)।",
        "banglaRule": "1st Conditional: If + Present, Will + V1 (বাস্তব ও সম্ভাব্য ভবিষ্যৎ)।"
    },
    {
        "id": "cond_e_20",
        "topic": "Conditionals",
        "difficulty": "easy",
        "sentence": "If David works hard, he ___ succeed.",
        "options": [
            "will",
            "would",
            "would have",
            "had"
        ],
        "answer": "will",
        "explanation": "First conditional: If + Present simple → Future Simple (will + V1)।",
        "banglaRule": "1st Conditional: If + Present, Will + V1 (বাস্তব ও সম্ভাব্য ভবিষ্যৎ)।"
    },
    {
        "id": "cond_m_1",
        "topic": "Conditionals",
        "difficulty": "medium",
        "sentence": "If she ___ a car, she would drive to work.",
        "options": [
            "has",
            "had",
            "had had",
            "would have"
        ],
        "answer": "had",
        "explanation": "Second conditional: If + Past simple (had) → would + drive (V1)।",
        "banglaRule": "2nd Conditional structure।"
    },
    {
        "id": "cond_m_2",
        "topic": "Conditionals",
        "difficulty": "medium",
        "sentence": "If I ___ the doctor, I would ask him.",
        "options": [
            "see",
            "saw",
            "have seen",
            "had seen"
        ],
        "answer": "saw",
        "explanation": "Second conditional (imaginary present): If + Past simple → Would + V1।",
        "banglaRule": "2nd Conditional: If + Past Simple, Would + V1 (অবাস্তব বর্তমান/ভবিষ্যৎ)।"
    },
    {
        "id": "cond_m_3",
        "topic": "Conditionals",
        "difficulty": "medium",
        "sentence": "If she ___ a car, she would drive to work.",
        "options": [
            "has",
            "had",
            "had had",
            "would have"
        ],
        "answer": "had",
        "explanation": "Second conditional: If + Past simple (had) → would + drive (V1)।",
        "banglaRule": "2nd Conditional structure।"
    },
    {
        "id": "cond_m_4",
        "topic": "Conditionals",
        "difficulty": "medium",
        "sentence": "If I ___ the doctor, I would ask him.",
        "options": [
            "see",
            "saw",
            "have seen",
            "had seen"
        ],
        "answer": "saw",
        "explanation": "Second conditional (imaginary present): If + Past simple → Would + V1।",
        "banglaRule": "2nd Conditional: If + Past Simple, Would + V1 (অবাস্তব বর্তমান/ভবিষ্যৎ)।"
    },
    {
        "id": "cond_m_5",
        "topic": "Conditionals",
        "difficulty": "medium",
        "sentence": "If she ___ a car, she would drive to work.",
        "options": [
            "has",
            "had",
            "had had",
            "would have"
        ],
        "answer": "had",
        "explanation": "Second conditional: If + Past simple (had) → would + drive (V1)।",
        "banglaRule": "2nd Conditional structure।"
    },
    {
        "id": "cond_m_6",
        "topic": "Conditionals",
        "difficulty": "medium",
        "sentence": "If I ___ the doctor, I would ask him.",
        "options": [
            "see",
            "saw",
            "have seen",
            "had seen"
        ],
        "answer": "saw",
        "explanation": "Second conditional (imaginary present): If + Past simple → Would + V1।",
        "banglaRule": "2nd Conditional: If + Past Simple, Would + V1 (অবাস্তব বর্তমান/ভবিষ্যৎ)।"
    },
    {
        "id": "cond_m_7",
        "topic": "Conditionals",
        "difficulty": "medium",
        "sentence": "If she ___ a car, she would drive to work.",
        "options": [
            "has",
            "had",
            "had had",
            "would have"
        ],
        "answer": "had",
        "explanation": "Second conditional: If + Past simple (had) → would + drive (V1)।",
        "banglaRule": "2nd Conditional structure।"
    },
    {
        "id": "cond_m_8",
        "topic": "Conditionals",
        "difficulty": "medium",
        "sentence": "If I ___ the doctor, I would ask him.",
        "options": [
            "see",
            "saw",
            "have seen",
            "had seen"
        ],
        "answer": "saw",
        "explanation": "Second conditional (imaginary present): If + Past simple → Would + V1।",
        "banglaRule": "2nd Conditional: If + Past Simple, Would + V1 (অবাস্তব বর্তমান/ভবিষ্যৎ)।"
    },
    {
        "id": "cond_m_9",
        "topic": "Conditionals",
        "difficulty": "medium",
        "sentence": "If she ___ a car, she would drive to work.",
        "options": [
            "has",
            "had",
            "had had",
            "would have"
        ],
        "answer": "had",
        "explanation": "Second conditional: If + Past simple (had) → would + drive (V1)।",
        "banglaRule": "2nd Conditional structure।"
    },
    {
        "id": "cond_m_10",
        "topic": "Conditionals",
        "difficulty": "medium",
        "sentence": "If I ___ the doctor, I would ask him.",
        "options": [
            "see",
            "saw",
            "have seen",
            "had seen"
        ],
        "answer": "saw",
        "explanation": "Second conditional (imaginary present): If + Past simple → Would + V1।",
        "banglaRule": "2nd Conditional: If + Past Simple, Would + V1 (অবাস্তব বর্তমান/ভবিষ্যৎ)।"
    },
    {
        "id": "cond_m_11",
        "topic": "Conditionals",
        "difficulty": "medium",
        "sentence": "If she ___ a car, she would drive to work.",
        "options": [
            "has",
            "had",
            "had had",
            "would have"
        ],
        "answer": "had",
        "explanation": "Second conditional: If + Past simple (had) → would + drive (V1)।",
        "banglaRule": "2nd Conditional structure।"
    },
    {
        "id": "cond_m_12",
        "topic": "Conditionals",
        "difficulty": "medium",
        "sentence": "If I ___ the doctor, I would ask him.",
        "options": [
            "see",
            "saw",
            "have seen",
            "had seen"
        ],
        "answer": "saw",
        "explanation": "Second conditional (imaginary present): If + Past simple → Would + V1।",
        "banglaRule": "2nd Conditional: If + Past Simple, Would + V1 (অবাস্তব বর্তমান/ভবিষ্যৎ)।"
    },
    {
        "id": "cond_m_13",
        "topic": "Conditionals",
        "difficulty": "medium",
        "sentence": "If she ___ a car, she would drive to work.",
        "options": [
            "has",
            "had",
            "had had",
            "would have"
        ],
        "answer": "had",
        "explanation": "Second conditional: If + Past simple (had) → would + drive (V1)।",
        "banglaRule": "2nd Conditional structure।"
    },
    {
        "id": "cond_m_14",
        "topic": "Conditionals",
        "difficulty": "medium",
        "sentence": "If I ___ the doctor, I would ask him.",
        "options": [
            "see",
            "saw",
            "have seen",
            "had seen"
        ],
        "answer": "saw",
        "explanation": "Second conditional (imaginary present): If + Past simple → Would + V1।",
        "banglaRule": "2nd Conditional: If + Past Simple, Would + V1 (অবাস্তব বর্তমান/ভবিষ্যৎ)।"
    },
    {
        "id": "cond_m_15",
        "topic": "Conditionals",
        "difficulty": "medium",
        "sentence": "If she ___ a car, she would drive to work.",
        "options": [
            "has",
            "had",
            "had had",
            "would have"
        ],
        "answer": "had",
        "explanation": "Second conditional: If + Past simple (had) → would + drive (V1)।",
        "banglaRule": "2nd Conditional structure।"
    },
    {
        "id": "cond_m_16",
        "topic": "Conditionals",
        "difficulty": "medium",
        "sentence": "If I ___ the doctor, I would ask him.",
        "options": [
            "see",
            "saw",
            "have seen",
            "had seen"
        ],
        "answer": "saw",
        "explanation": "Second conditional (imaginary present): If + Past simple → Would + V1।",
        "banglaRule": "2nd Conditional: If + Past Simple, Would + V1 (অবাস্তব বর্তমান/ভবিষ্যৎ)।"
    },
    {
        "id": "cond_m_17",
        "topic": "Conditionals",
        "difficulty": "medium",
        "sentence": "If she ___ a car, she would drive to work.",
        "options": [
            "has",
            "had",
            "had had",
            "would have"
        ],
        "answer": "had",
        "explanation": "Second conditional: If + Past simple (had) → would + drive (V1)।",
        "banglaRule": "2nd Conditional structure।"
    },
    {
        "id": "cond_m_18",
        "topic": "Conditionals",
        "difficulty": "medium",
        "sentence": "If I ___ the doctor, I would ask him.",
        "options": [
            "see",
            "saw",
            "have seen",
            "had seen"
        ],
        "answer": "saw",
        "explanation": "Second conditional (imaginary present): If + Past simple → Would + V1।",
        "banglaRule": "2nd Conditional: If + Past Simple, Would + V1 (অবাস্তব বর্তমান/ভবিষ্যৎ)।"
    },
    {
        "id": "cond_m_19",
        "topic": "Conditionals",
        "difficulty": "medium",
        "sentence": "If she ___ a car, she would drive to work.",
        "options": [
            "has",
            "had",
            "had had",
            "would have"
        ],
        "answer": "had",
        "explanation": "Second conditional: If + Past simple (had) → would + drive (V1)।",
        "banglaRule": "2nd Conditional structure।"
    },
    {
        "id": "cond_m_20",
        "topic": "Conditionals",
        "difficulty": "medium",
        "sentence": "If I ___ the doctor, I would ask him.",
        "options": [
            "see",
            "saw",
            "have seen",
            "had seen"
        ],
        "answer": "saw",
        "explanation": "Second conditional (imaginary present): If + Past simple → Would + V1।",
        "banglaRule": "2nd Conditional: If + Past Simple, Would + V1 (অবাস্তব বর্তমান/ভবিষ্যৎ)।"
    },
    {
        "id": "cond_m_21",
        "topic": "Conditionals",
        "difficulty": "medium",
        "sentence": "If she ___ a car, she would drive to work.",
        "options": [
            "has",
            "had",
            "had had",
            "would have"
        ],
        "answer": "had",
        "explanation": "Second conditional: If + Past simple (had) → would + drive (V1)।",
        "banglaRule": "2nd Conditional structure।"
    },
    {
        "id": "cond_m_22",
        "topic": "Conditionals",
        "difficulty": "medium",
        "sentence": "If I ___ the doctor, I would ask him.",
        "options": [
            "see",
            "saw",
            "have seen",
            "had seen"
        ],
        "answer": "saw",
        "explanation": "Second conditional (imaginary present): If + Past simple → Would + V1।",
        "banglaRule": "2nd Conditional: If + Past Simple, Would + V1 (অবাস্তব বর্তমান/ভবিষ্যৎ)।"
    },
    {
        "id": "cond_m_23",
        "topic": "Conditionals",
        "difficulty": "medium",
        "sentence": "If she ___ a car, she would drive to work.",
        "options": [
            "has",
            "had",
            "had had",
            "would have"
        ],
        "answer": "had",
        "explanation": "Second conditional: If + Past simple (had) → would + drive (V1)।",
        "banglaRule": "2nd Conditional structure।"
    },
    {
        "id": "cond_m_24",
        "topic": "Conditionals",
        "difficulty": "medium",
        "sentence": "If I ___ the doctor, I would ask him.",
        "options": [
            "see",
            "saw",
            "have seen",
            "had seen"
        ],
        "answer": "saw",
        "explanation": "Second conditional (imaginary present): If + Past simple → Would + V1।",
        "banglaRule": "2nd Conditional: If + Past Simple, Would + V1 (অবাস্তব বর্তমান/ভবিষ্যৎ)।"
    },
    {
        "id": "cond_m_25",
        "topic": "Conditionals",
        "difficulty": "medium",
        "sentence": "If she ___ a car, she would drive to work.",
        "options": [
            "has",
            "had",
            "had had",
            "would have"
        ],
        "answer": "had",
        "explanation": "Second conditional: If + Past simple (had) → would + drive (V1)।",
        "banglaRule": "2nd Conditional structure।"
    },
    {
        "id": "cond_m_26",
        "topic": "Conditionals",
        "difficulty": "medium",
        "sentence": "If I ___ the doctor, I would ask him.",
        "options": [
            "see",
            "saw",
            "have seen",
            "had seen"
        ],
        "answer": "saw",
        "explanation": "Second conditional (imaginary present): If + Past simple → Would + V1।",
        "banglaRule": "2nd Conditional: If + Past Simple, Would + V1 (অবাস্তব বর্তমান/ভবিষ্যৎ)।"
    },
    {
        "id": "cond_m_27",
        "topic": "Conditionals",
        "difficulty": "medium",
        "sentence": "If she ___ a car, she would drive to work.",
        "options": [
            "has",
            "had",
            "had had",
            "would have"
        ],
        "answer": "had",
        "explanation": "Second conditional: If + Past simple (had) → would + drive (V1)।",
        "banglaRule": "2nd Conditional structure।"
    },
    {
        "id": "cond_m_28",
        "topic": "Conditionals",
        "difficulty": "medium",
        "sentence": "If I ___ the doctor, I would ask him.",
        "options": [
            "see",
            "saw",
            "have seen",
            "had seen"
        ],
        "answer": "saw",
        "explanation": "Second conditional (imaginary present): If + Past simple → Would + V1।",
        "banglaRule": "2nd Conditional: If + Past Simple, Would + V1 (অবাস্তব বর্তমান/ভবিষ্যৎ)।"
    },
    {
        "id": "cond_m_29",
        "topic": "Conditionals",
        "difficulty": "medium",
        "sentence": "If she ___ a car, she would drive to work.",
        "options": [
            "has",
            "had",
            "had had",
            "would have"
        ],
        "answer": "had",
        "explanation": "Second conditional: If + Past simple (had) → would + drive (V1)।",
        "banglaRule": "2nd Conditional structure।"
    },
    {
        "id": "cond_m_30",
        "topic": "Conditionals",
        "difficulty": "medium",
        "sentence": "If I ___ the doctor, I would ask him.",
        "options": [
            "see",
            "saw",
            "have seen",
            "had seen"
        ],
        "answer": "saw",
        "explanation": "Second conditional (imaginary present): If + Past simple → Would + V1।",
        "banglaRule": "2nd Conditional: If + Past Simple, Would + V1 (অবাস্তব বর্তমান/ভবিষ্যৎ)।"
    },
    {
        "id": "cond_m_31",
        "topic": "Conditionals",
        "difficulty": "medium",
        "sentence": "If she ___ a car, she would drive to work.",
        "options": [
            "has",
            "had",
            "had had",
            "would have"
        ],
        "answer": "had",
        "explanation": "Second conditional: If + Past simple (had) → would + drive (V1)।",
        "banglaRule": "2nd Conditional structure।"
    },
    {
        "id": "cond_m_32",
        "topic": "Conditionals",
        "difficulty": "medium",
        "sentence": "If I ___ the doctor, I would ask him.",
        "options": [
            "see",
            "saw",
            "have seen",
            "had seen"
        ],
        "answer": "saw",
        "explanation": "Second conditional (imaginary present): If + Past simple → Would + V1।",
        "banglaRule": "2nd Conditional: If + Past Simple, Would + V1 (অবাস্তব বর্তমান/ভবিষ্যৎ)।"
    },
    {
        "id": "cond_m_33",
        "topic": "Conditionals",
        "difficulty": "medium",
        "sentence": "If she ___ a car, she would drive to work.",
        "options": [
            "has",
            "had",
            "had had",
            "would have"
        ],
        "answer": "had",
        "explanation": "Second conditional: If + Past simple (had) → would + drive (V1)।",
        "banglaRule": "2nd Conditional structure।"
    },
    {
        "id": "cond_m_34",
        "topic": "Conditionals",
        "difficulty": "medium",
        "sentence": "If I ___ the doctor, I would ask him.",
        "options": [
            "see",
            "saw",
            "have seen",
            "had seen"
        ],
        "answer": "saw",
        "explanation": "Second conditional (imaginary present): If + Past simple → Would + V1।",
        "banglaRule": "2nd Conditional: If + Past Simple, Would + V1 (অবাস্তব বর্তমান/ভবিষ্যৎ)।"
    },
    {
        "id": "cond_m_35",
        "topic": "Conditionals",
        "difficulty": "medium",
        "sentence": "If she ___ a car, she would drive to work.",
        "options": [
            "has",
            "had",
            "had had",
            "would have"
        ],
        "answer": "had",
        "explanation": "Second conditional: If + Past simple (had) → would + drive (V1)।",
        "banglaRule": "2nd Conditional structure।"
    },
    {
        "id": "cond_m_36",
        "topic": "Conditionals",
        "difficulty": "medium",
        "sentence": "If I ___ the doctor, I would ask him.",
        "options": [
            "see",
            "saw",
            "have seen",
            "had seen"
        ],
        "answer": "saw",
        "explanation": "Second conditional (imaginary present): If + Past simple → Would + V1।",
        "banglaRule": "2nd Conditional: If + Past Simple, Would + V1 (অবাস্তব বর্তমান/ভবিষ্যৎ)।"
    },
    {
        "id": "cond_m_37",
        "topic": "Conditionals",
        "difficulty": "medium",
        "sentence": "If she ___ a car, she would drive to work.",
        "options": [
            "has",
            "had",
            "had had",
            "would have"
        ],
        "answer": "had",
        "explanation": "Second conditional: If + Past simple (had) → would + drive (V1)।",
        "banglaRule": "2nd Conditional structure।"
    },
    {
        "id": "cond_m_38",
        "topic": "Conditionals",
        "difficulty": "medium",
        "sentence": "If I ___ the doctor, I would ask him.",
        "options": [
            "see",
            "saw",
            "have seen",
            "had seen"
        ],
        "answer": "saw",
        "explanation": "Second conditional (imaginary present): If + Past simple → Would + V1।",
        "banglaRule": "2nd Conditional: If + Past Simple, Would + V1 (অবাস্তব বর্তমান/ভবিষ্যৎ)।"
    },
    {
        "id": "cond_m_39",
        "topic": "Conditionals",
        "difficulty": "medium",
        "sentence": "If she ___ a car, she would drive to work.",
        "options": [
            "has",
            "had",
            "had had",
            "would have"
        ],
        "answer": "had",
        "explanation": "Second conditional: If + Past simple (had) → would + drive (V1)।",
        "banglaRule": "2nd Conditional structure।"
    },
    {
        "id": "cond_m_40",
        "topic": "Conditionals",
        "difficulty": "medium",
        "sentence": "If I ___ the doctor, I would ask him.",
        "options": [
            "see",
            "saw",
            "have seen",
            "had seen"
        ],
        "answer": "saw",
        "explanation": "Second conditional (imaginary present): If + Past simple → Would + V1।",
        "banglaRule": "2nd Conditional: If + Past Simple, Would + V1 (অবাস্তব বর্তমান/ভবিষ্যৎ)।"
    },
    {
        "id": "cond_h_1",
        "topic": "Conditionals",
        "difficulty": "hard",
        "sentence": "If we had played well, we ___ won the match.",
        "options": [
            "will have",
            "would have",
            "would",
            "had"
        ],
        "answer": "would have",
        "explanation": "Third conditional (past regret): If + Past Perfect → Would have + V3।",
        "banglaRule": "3rd Conditional: If + Past Perfect, Would have + V3 (অতীতের অপ্রাপ্তি/অনুশোচনা)।"
    },
    {
        "id": "cond_h_2",
        "topic": "Conditionals",
        "difficulty": "hard",
        "sentence": "If you freeze water, it ___ into ice.",
        "options": [
            "turns",
            "will turn",
            "would turn",
            "turned"
        ],
        "answer": "turns",
        "explanation": "Zero conditional (scientific fact): If + Present simple → Present simple।",
        "banglaRule": "Zero Conditional: If + Present, Present (চিরন্তন সত্য বা বৈজ্ঞানিক সত্য)।"
    },
    {
        "id": "cond_h_3",
        "topic": "Conditionals",
        "difficulty": "hard",
        "sentence": "Had Sarah known you were coming, Sarah ___ at hoSarah.",
        "options": [
            "would stay",
            "would have stayed",
            "had stayed",
            "will stay"
        ],
        "answer": "would have stayed",
        "explanation": "\"Had I + V3\" হলো Third conditional-এর inversion রূপ।",
        "banglaRule": "Had + Subject + V3 = If + Subject + had + V3।"
    },
    {
        "id": "cond_h_4",
        "topic": "Conditionals",
        "difficulty": "hard",
        "sentence": "If Emily were the president, Emily ___ taxes.",
        "options": [
            "reduce",
            "will reduce",
            "would reduce",
            "would have reduced"
        ],
        "answer": "would reduce",
        "explanation": "Second conditional (imaginary role): If + were → would + V1।",
        "banglaRule": "অবাস্তব ইচ্ছা বা কল্পনা = would + V1।"
    },
    {
        "id": "cond_h_5",
        "topic": "Conditionals",
        "difficulty": "hard",
        "sentence": "Unless you ___ hard, you will fail.",
        "options": [
            "work",
            "don't work",
            "worked",
            "will work"
        ],
        "answer": "work",
        "explanation": "\"Unless\" মানে \"যদি না\" (if not)। এর সাথে negative verb বসে না।",
        "banglaRule": "Unless + positive verb = If + negative verb।"
    },
    {
        "id": "cond_h_6",
        "topic": "Conditionals",
        "difficulty": "hard",
        "sentence": "Provided that she ___ on tiSumi, we can start.",
        "options": [
            "arrives",
            "arrive",
            "arrived",
            "will arrive"
        ],
        "answer": "arrives",
        "explanation": "\"Provided that\" শর্ত প্রকাশ করে এবং এর পরের অংশ present simple হয়।",
        "banglaRule": "Provided that / As long as + Present Simple (শর্তমূলক বাক্যে)।"
    },
    {
        "id": "cond_h_7",
        "topic": "Conditionals",
        "difficulty": "hard",
        "sentence": "But for your help, Lisa ___ failed.",
        "options": [
            "will have",
            "would have",
            "would",
            "had"
        ],
        "answer": "would have",
        "explanation": "\"But for\" মানে \"যদি না থাকত\"। এটি Third conditional প্রকাশ করে।",
        "banglaRule": "But for + noun = If it had not been for + noun (3rd conditional)।"
    },
    {
        "id": "cond_h_8",
        "topic": "Conditionals",
        "difficulty": "hard",
        "sentence": "If she had invited Kabir, Kabir ___ gone.",
        "options": [
            "would have",
            "will have",
            "would",
            "had"
        ],
        "answer": "would have",
        "explanation": "Third conditional: If + had + V3 → would have + V3।",
        "banglaRule": "3rd Conditional structure।"
    },
    {
        "id": "cond_h_9",
        "topic": "Conditionals",
        "difficulty": "hard",
        "sentence": "In case it ___ , take an umbrella.",
        "options": [
            "rains",
            "will rain",
            "rained",
            "would rain"
        ],
        "answer": "rains",
        "explanation": "\"In case\" যুক্ত অংশটি Present Simple tense হয়।",
        "banglaRule": "In case + Present Simple (সতর্কতামূলক শর্ত)।"
    },
    {
        "id": "cond_h_10",
        "topic": "Conditionals",
        "difficulty": "hard",
        "sentence": "If water is heated, it ___.",
        "options": [
            "evaporates",
            "will evaporate",
            "would evaporate",
            "evaporated"
        ],
        "answer": "evaporates",
        "explanation": "চিরন্তন সত্য বা বৈজ্ঞানিক ঘটনা → Zero Conditional (evaporates)।",
        "banglaRule": "Zero Conditional logic।"
    },
    {
        "id": "cond_h_11",
        "topic": "Conditionals",
        "difficulty": "hard",
        "sentence": "If we had played well, we ___ won the match.",
        "options": [
            "will have",
            "would have",
            "would",
            "had"
        ],
        "answer": "would have",
        "explanation": "Third conditional (past regret): If + Past Perfect → Would have + V3।",
        "banglaRule": "3rd Conditional: If + Past Perfect, Would have + V3 (অতীতের অপ্রাপ্তি/অনুশোচনা)।"
    },
    {
        "id": "cond_h_12",
        "topic": "Conditionals",
        "difficulty": "hard",
        "sentence": "If you freeze water, it ___ into ice.",
        "options": [
            "turns",
            "will turn",
            "would turn",
            "turned"
        ],
        "answer": "turns",
        "explanation": "Zero conditional (scientific fact): If + Present simple → Present simple।",
        "banglaRule": "Zero Conditional: If + Present, Present (চিরন্তন সত্য বা বৈজ্ঞানিক সত্য)।"
    },
    {
        "id": "cond_h_13",
        "topic": "Conditionals",
        "difficulty": "hard",
        "sentence": "Had Jessica known you were coming, Jessica ___ at hoJessica.",
        "options": [
            "would stay",
            "would have stayed",
            "had stayed",
            "will stay"
        ],
        "answer": "would have stayed",
        "explanation": "\"Had I + V3\" হলো Third conditional-এর inversion রূপ।",
        "banglaRule": "Had + Subject + V3 = If + Subject + had + V3।"
    },
    {
        "id": "cond_h_14",
        "topic": "Conditionals",
        "difficulty": "hard",
        "sentence": "If Alex were the president, Alex ___ taxes.",
        "options": [
            "reduce",
            "will reduce",
            "would reduce",
            "would have reduced"
        ],
        "answer": "would reduce",
        "explanation": "Second conditional (imaginary role): If + were → would + V1।",
        "banglaRule": "অবাস্তব ইচ্ছা বা কল্পনা = would + V1।"
    },
    {
        "id": "cond_h_15",
        "topic": "Conditionals",
        "difficulty": "hard",
        "sentence": "Unless you ___ hard, you will fail.",
        "options": [
            "work",
            "don't work",
            "worked",
            "will work"
        ],
        "answer": "work",
        "explanation": "\"Unless\" মানে \"যদি না\" (if not)। এর সাথে negative verb বসে না।",
        "banglaRule": "Unless + positive verb = If + negative verb।"
    },
    {
        "id": "cond_h_16",
        "topic": "Conditionals",
        "difficulty": "hard",
        "sentence": "Provided that she ___ on tiSofie, we can start.",
        "options": [
            "arrives",
            "arrive",
            "arrived",
            "will arrive"
        ],
        "answer": "arrives",
        "explanation": "\"Provided that\" শর্ত প্রকাশ করে এবং এর পরের অংশ present simple হয়।",
        "banglaRule": "Provided that / As long as + Present Simple (শর্তমূলক বাক্যে)।"
    },
    {
        "id": "cond_h_17",
        "topic": "Conditionals",
        "difficulty": "hard",
        "sentence": "But for your help, Rahim ___ failed.",
        "options": [
            "will have",
            "would have",
            "would",
            "had"
        ],
        "answer": "would have",
        "explanation": "\"But for\" মানে \"যদি না থাকত\"। এটি Third conditional প্রকাশ করে।",
        "banglaRule": "But for + noun = If it had not been for + noun (3rd conditional)।"
    },
    {
        "id": "cond_h_18",
        "topic": "Conditionals",
        "difficulty": "hard",
        "sentence": "If she had invited Karim, Karim ___ gone.",
        "options": [
            "would have",
            "will have",
            "would",
            "had"
        ],
        "answer": "would have",
        "explanation": "Third conditional: If + had + V3 → would have + V3।",
        "banglaRule": "3rd Conditional structure।"
    },
    {
        "id": "cond_h_19",
        "topic": "Conditionals",
        "difficulty": "hard",
        "sentence": "In case it ___ , take an umbrella.",
        "options": [
            "rains",
            "will rain",
            "rained",
            "would rain"
        ],
        "answer": "rains",
        "explanation": "\"In case\" যুক্ত অংশটি Present Simple tense হয়।",
        "banglaRule": "In case + Present Simple (সতর্কতামূলক শর্ত)।"
    },
    {
        "id": "cond_h_20",
        "topic": "Conditionals",
        "difficulty": "hard",
        "sentence": "If water is heated, it ___.",
        "options": [
            "evaporates",
            "will evaporate",
            "would evaporate",
            "evaporated"
        ],
        "answer": "evaporates",
        "explanation": "চিরন্তন সত্য বা বৈজ্ঞানিক ঘটনা → Zero Conditional (evaporates)।",
        "banglaRule": "Zero Conditional logic।"
    },
    {
        "id": "cond_h_21",
        "topic": "Conditionals",
        "difficulty": "hard",
        "sentence": "If we had played well, we ___ won the match.",
        "options": [
            "will have",
            "would have",
            "would",
            "had"
        ],
        "answer": "would have",
        "explanation": "Third conditional (past regret): If + Past Perfect → Would have + V3।",
        "banglaRule": "3rd Conditional: If + Past Perfect, Would have + V3 (অতীতের অপ্রাপ্তি/অনুশোচনা)।"
    },
    {
        "id": "cond_h_22",
        "topic": "Conditionals",
        "difficulty": "hard",
        "sentence": "If you freeze water, it ___ into ice.",
        "options": [
            "turns",
            "will turn",
            "would turn",
            "turned"
        ],
        "answer": "turns",
        "explanation": "Zero conditional (scientific fact): If + Present simple → Present simple।",
        "banglaRule": "Zero Conditional: If + Present, Present (চিরন্তন সত্য বা বৈজ্ঞানিক সত্য)।"
    },
    {
        "id": "cond_h_23",
        "topic": "Conditionals",
        "difficulty": "hard",
        "sentence": "Had Lisa known you were coming, Lisa ___ at hoLisa.",
        "options": [
            "would stay",
            "would have stayed",
            "had stayed",
            "will stay"
        ],
        "answer": "would have stayed",
        "explanation": "\"Had I + V3\" হলো Third conditional-এর inversion রূপ।",
        "banglaRule": "Had + Subject + V3 = If + Subject + had + V3।"
    },
    {
        "id": "cond_h_24",
        "topic": "Conditionals",
        "difficulty": "hard",
        "sentence": "If Kabir were the president, Kabir ___ taxes.",
        "options": [
            "reduce",
            "will reduce",
            "would reduce",
            "would have reduced"
        ],
        "answer": "would reduce",
        "explanation": "Second conditional (imaginary role): If + were → would + V1।",
        "banglaRule": "অবাস্তব ইচ্ছা বা কল্পনা = would + V1।"
    },
    {
        "id": "cond_h_25",
        "topic": "Conditionals",
        "difficulty": "hard",
        "sentence": "Unless you ___ hard, you will fail.",
        "options": [
            "work",
            "don't work",
            "worked",
            "will work"
        ],
        "answer": "work",
        "explanation": "\"Unless\" মানে \"যদি না\" (if not)। এর সাথে negative verb বসে না।",
        "banglaRule": "Unless + positive verb = If + negative verb।"
    },
    {
        "id": "cond_h_26",
        "topic": "Conditionals",
        "difficulty": "hard",
        "sentence": "Provided that she ___ on tiAyesha, we can start.",
        "options": [
            "arrives",
            "arrive",
            "arrived",
            "will arrive"
        ],
        "answer": "arrives",
        "explanation": "\"Provided that\" শর্ত প্রকাশ করে এবং এর পরের অংশ present simple হয়।",
        "banglaRule": "Provided that / As long as + Present Simple (শর্তমূলক বাক্যে)।"
    },
    {
        "id": "cond_h_27",
        "topic": "Conditionals",
        "difficulty": "hard",
        "sentence": "But for your help, John ___ failed.",
        "options": [
            "will have",
            "would have",
            "would",
            "had"
        ],
        "answer": "would have",
        "explanation": "\"But for\" মানে \"যদি না থাকত\"। এটি Third conditional প্রকাশ করে।",
        "banglaRule": "But for + noun = If it had not been for + noun (3rd conditional)।"
    },
    {
        "id": "cond_h_28",
        "topic": "Conditionals",
        "difficulty": "hard",
        "sentence": "If she had invited Maria, Maria ___ gone.",
        "options": [
            "would have",
            "will have",
            "would",
            "had"
        ],
        "answer": "would have",
        "explanation": "Third conditional: If + had + V3 → would have + V3।",
        "banglaRule": "3rd Conditional structure।"
    },
    {
        "id": "cond_h_29",
        "topic": "Conditionals",
        "difficulty": "hard",
        "sentence": "In case it ___ , take an umbrella.",
        "options": [
            "rains",
            "will rain",
            "rained",
            "would rain"
        ],
        "answer": "rains",
        "explanation": "\"In case\" যুক্ত অংশটি Present Simple tense হয়।",
        "banglaRule": "In case + Present Simple (সতর্কতামূলক শর্ত)।"
    },
    {
        "id": "cond_h_30",
        "topic": "Conditionals",
        "difficulty": "hard",
        "sentence": "If water is heated, it ___.",
        "options": [
            "evaporates",
            "will evaporate",
            "would evaporate",
            "evaporated"
        ],
        "answer": "evaporates",
        "explanation": "চিরন্তন সত্য বা বৈজ্ঞানিক ঘটনা → Zero Conditional (evaporates)।",
        "banglaRule": "Zero Conditional logic।"
    },
    {
        "id": "pass_e_1",
        "topic": "Passive Voice",
        "difficulty": "easy",
        "sentence": "The rooms ___ every morning.",
        "options": [
            "clean",
            "are cleaned",
            "cleaned",
            "are cleaning"
        ],
        "answer": "are cleaned",
        "explanation": "Present passive: am/is/are + V3 (অতীত বা বর্তমানের নিয়মিত কাজ)।",
        "banglaRule": "Present simple passive = am/is/are + Past Participle (V3)।"
    },
    {
        "id": "pass_e_2",
        "topic": "Passive Voice",
        "difficulty": "easy",
        "sentence": "The rooms ___ every morning.",
        "options": [
            "clean",
            "are cleaned",
            "cleaned",
            "are cleaning"
        ],
        "answer": "are cleaned",
        "explanation": "Present passive: am/is/are + V3 (অতীত বা বর্তমানের নিয়মিত কাজ)।",
        "banglaRule": "Present simple passive = am/is/are + Past Participle (V3)।"
    },
    {
        "id": "pass_e_3",
        "topic": "Passive Voice",
        "difficulty": "easy",
        "sentence": "The rooms ___ every morning.",
        "options": [
            "clean",
            "are cleaned",
            "cleaned",
            "are cleaning"
        ],
        "answer": "are cleaned",
        "explanation": "Present passive: am/is/are + V3 (অতীত বা বর্তমানের নিয়মিত কাজ)।",
        "banglaRule": "Present simple passive = am/is/are + Past Participle (V3)।"
    },
    {
        "id": "pass_e_4",
        "topic": "Passive Voice",
        "difficulty": "easy",
        "sentence": "The rooms ___ every morning.",
        "options": [
            "clean",
            "are cleaned",
            "cleaned",
            "are cleaning"
        ],
        "answer": "are cleaned",
        "explanation": "Present passive: am/is/are + V3 (অতীত বা বর্তমানের নিয়মিত কাজ)।",
        "banglaRule": "Present simple passive = am/is/are + Past Participle (V3)।"
    },
    {
        "id": "pass_e_5",
        "topic": "Passive Voice",
        "difficulty": "easy",
        "sentence": "The rooms ___ every morning.",
        "options": [
            "clean",
            "are cleaned",
            "cleaned",
            "are cleaning"
        ],
        "answer": "are cleaned",
        "explanation": "Present passive: am/is/are + V3 (অতীত বা বর্তমানের নিয়মিত কাজ)।",
        "banglaRule": "Present simple passive = am/is/are + Past Participle (V3)।"
    },
    {
        "id": "pass_e_6",
        "topic": "Passive Voice",
        "difficulty": "easy",
        "sentence": "The rooms ___ every morning.",
        "options": [
            "clean",
            "are cleaned",
            "cleaned",
            "are cleaning"
        ],
        "answer": "are cleaned",
        "explanation": "Present passive: am/is/are + V3 (অতীত বা বর্তমানের নিয়মিত কাজ)।",
        "banglaRule": "Present simple passive = am/is/are + Past Participle (V3)।"
    },
    {
        "id": "pass_e_7",
        "topic": "Passive Voice",
        "difficulty": "easy",
        "sentence": "The rooms ___ every morning.",
        "options": [
            "clean",
            "are cleaned",
            "cleaned",
            "are cleaning"
        ],
        "answer": "are cleaned",
        "explanation": "Present passive: am/is/are + V3 (অতীত বা বর্তমানের নিয়মিত কাজ)।",
        "banglaRule": "Present simple passive = am/is/are + Past Participle (V3)।"
    },
    {
        "id": "pass_e_8",
        "topic": "Passive Voice",
        "difficulty": "easy",
        "sentence": "The rooms ___ every morning.",
        "options": [
            "clean",
            "are cleaned",
            "cleaned",
            "are cleaning"
        ],
        "answer": "are cleaned",
        "explanation": "Present passive: am/is/are + V3 (অতীত বা বর্তমানের নিয়মিত কাজ)।",
        "banglaRule": "Present simple passive = am/is/are + Past Participle (V3)।"
    },
    {
        "id": "pass_e_9",
        "topic": "Passive Voice",
        "difficulty": "easy",
        "sentence": "The rooms ___ every morning.",
        "options": [
            "clean",
            "are cleaned",
            "cleaned",
            "are cleaning"
        ],
        "answer": "are cleaned",
        "explanation": "Present passive: am/is/are + V3 (অতীত বা বর্তমানের নিয়মিত কাজ)।",
        "banglaRule": "Present simple passive = am/is/are + Past Participle (V3)।"
    },
    {
        "id": "pass_e_10",
        "topic": "Passive Voice",
        "difficulty": "easy",
        "sentence": "The rooms ___ every morning.",
        "options": [
            "clean",
            "are cleaned",
            "cleaned",
            "are cleaning"
        ],
        "answer": "are cleaned",
        "explanation": "Present passive: am/is/are + V3 (অতীত বা বর্তমানের নিয়মিত কাজ)।",
        "banglaRule": "Present simple passive = am/is/are + Past Participle (V3)।"
    },
    {
        "id": "pass_e_11",
        "topic": "Passive Voice",
        "difficulty": "easy",
        "sentence": "The rooms ___ every morning.",
        "options": [
            "clean",
            "are cleaned",
            "cleaned",
            "are cleaning"
        ],
        "answer": "are cleaned",
        "explanation": "Present passive: am/is/are + V3 (অতীত বা বর্তমানের নিয়মিত কাজ)।",
        "banglaRule": "Present simple passive = am/is/are + Past Participle (V3)।"
    },
    {
        "id": "pass_e_12",
        "topic": "Passive Voice",
        "difficulty": "easy",
        "sentence": "The rooms ___ every morning.",
        "options": [
            "clean",
            "are cleaned",
            "cleaned",
            "are cleaning"
        ],
        "answer": "are cleaned",
        "explanation": "Present passive: am/is/are + V3 (অতীত বা বর্তমানের নিয়মিত কাজ)।",
        "banglaRule": "Present simple passive = am/is/are + Past Participle (V3)।"
    },
    {
        "id": "pass_e_13",
        "topic": "Passive Voice",
        "difficulty": "easy",
        "sentence": "The rooms ___ every morning.",
        "options": [
            "clean",
            "are cleaned",
            "cleaned",
            "are cleaning"
        ],
        "answer": "are cleaned",
        "explanation": "Present passive: am/is/are + V3 (অতীত বা বর্তমানের নিয়মিত কাজ)।",
        "banglaRule": "Present simple passive = am/is/are + Past Participle (V3)।"
    },
    {
        "id": "pass_e_14",
        "topic": "Passive Voice",
        "difficulty": "easy",
        "sentence": "The rooms ___ every morning.",
        "options": [
            "clean",
            "are cleaned",
            "cleaned",
            "are cleaning"
        ],
        "answer": "are cleaned",
        "explanation": "Present passive: am/is/are + V3 (অতীত বা বর্তমানের নিয়মিত কাজ)।",
        "banglaRule": "Present simple passive = am/is/are + Past Participle (V3)।"
    },
    {
        "id": "pass_e_15",
        "topic": "Passive Voice",
        "difficulty": "easy",
        "sentence": "The rooms ___ every morning.",
        "options": [
            "clean",
            "are cleaned",
            "cleaned",
            "are cleaning"
        ],
        "answer": "are cleaned",
        "explanation": "Present passive: am/is/are + V3 (অতীত বা বর্তমানের নিয়মিত কাজ)।",
        "banglaRule": "Present simple passive = am/is/are + Past Participle (V3)।"
    },
    {
        "id": "pass_e_16",
        "topic": "Passive Voice",
        "difficulty": "easy",
        "sentence": "The rooms ___ every morning.",
        "options": [
            "clean",
            "are cleaned",
            "cleaned",
            "are cleaning"
        ],
        "answer": "are cleaned",
        "explanation": "Present passive: am/is/are + V3 (অতীত বা বর্তমানের নিয়মিত কাজ)।",
        "banglaRule": "Present simple passive = am/is/are + Past Participle (V3)।"
    },
    {
        "id": "pass_e_17",
        "topic": "Passive Voice",
        "difficulty": "easy",
        "sentence": "The rooms ___ every morning.",
        "options": [
            "clean",
            "are cleaned",
            "cleaned",
            "are cleaning"
        ],
        "answer": "are cleaned",
        "explanation": "Present passive: am/is/are + V3 (অতীত বা বর্তমানের নিয়মিত কাজ)।",
        "banglaRule": "Present simple passive = am/is/are + Past Participle (V3)।"
    },
    {
        "id": "pass_e_18",
        "topic": "Passive Voice",
        "difficulty": "easy",
        "sentence": "The rooms ___ every morning.",
        "options": [
            "clean",
            "are cleaned",
            "cleaned",
            "are cleaning"
        ],
        "answer": "are cleaned",
        "explanation": "Present passive: am/is/are + V3 (অতীত বা বর্তমানের নিয়মিত কাজ)।",
        "banglaRule": "Present simple passive = am/is/are + Past Participle (V3)।"
    },
    {
        "id": "pass_e_19",
        "topic": "Passive Voice",
        "difficulty": "easy",
        "sentence": "The rooms ___ every morning.",
        "options": [
            "clean",
            "are cleaned",
            "cleaned",
            "are cleaning"
        ],
        "answer": "are cleaned",
        "explanation": "Present passive: am/is/are + V3 (অতীত বা বর্তমানের নিয়মিত কাজ)।",
        "banglaRule": "Present simple passive = am/is/are + Past Participle (V3)।"
    },
    {
        "id": "pass_e_20",
        "topic": "Passive Voice",
        "difficulty": "easy",
        "sentence": "The rooms ___ every morning.",
        "options": [
            "clean",
            "are cleaned",
            "cleaned",
            "are cleaning"
        ],
        "answer": "are cleaned",
        "explanation": "Present passive: am/is/are + V3 (অতীত বা বর্তমানের নিয়মিত কাজ)।",
        "banglaRule": "Present simple passive = am/is/are + Past Participle (V3)।"
    },
    {
        "id": "pass_m_1",
        "topic": "Passive Voice",
        "difficulty": "medium",
        "sentence": "French ___ in many parts of Canada.",
        "options": [
            "speaks",
            "is speaking",
            "is spoken",
            "spoke"
        ],
        "answer": "is spoken",
        "explanation": "সাধারণ সত্য বা চলমান অবস্থা বোঝাচ্ছে → Present passive।",
        "banglaRule": "Present passive structure।"
    },
    {
        "id": "pass_m_2",
        "topic": "Passive Voice",
        "difficulty": "medium",
        "sentence": "The houses ___ last week.",
        "options": [
            "repaired",
            "were repaired",
            "are repaired",
            "have repaired"
        ],
        "answer": "were repaired",
        "explanation": "Past passive: was/were + V3 (অতীতের নির্দিষ্ট কাজ)।",
        "banglaRule": "Past simple passive = was/were + Past Participle (V3)।"
    },
    {
        "id": "pass_m_3",
        "topic": "Passive Voice",
        "difficulty": "medium",
        "sentence": "French ___ in many parts of Canada.",
        "options": [
            "speaks",
            "is speaking",
            "is spoken",
            "spoke"
        ],
        "answer": "is spoken",
        "explanation": "সাধারণ সত্য বা চলমান অবস্থা বোঝাচ্ছে → Present passive।",
        "banglaRule": "Present passive structure।"
    },
    {
        "id": "pass_m_4",
        "topic": "Passive Voice",
        "difficulty": "medium",
        "sentence": "The houses ___ last week.",
        "options": [
            "repaired",
            "were repaired",
            "are repaired",
            "have repaired"
        ],
        "answer": "were repaired",
        "explanation": "Past passive: was/were + V3 (অতীতের নির্দিষ্ট কাজ)।",
        "banglaRule": "Past simple passive = was/were + Past Participle (V3)।"
    },
    {
        "id": "pass_m_5",
        "topic": "Passive Voice",
        "difficulty": "medium",
        "sentence": "French ___ in many parts of Canada.",
        "options": [
            "speaks",
            "is speaking",
            "is spoken",
            "spoke"
        ],
        "answer": "is spoken",
        "explanation": "সাধারণ সত্য বা চলমান অবস্থা বোঝাচ্ছে → Present passive।",
        "banglaRule": "Present passive structure।"
    },
    {
        "id": "pass_m_6",
        "topic": "Passive Voice",
        "difficulty": "medium",
        "sentence": "The houses ___ last week.",
        "options": [
            "repaired",
            "were repaired",
            "are repaired",
            "have repaired"
        ],
        "answer": "were repaired",
        "explanation": "Past passive: was/were + V3 (অতীতের নির্দিষ্ট কাজ)।",
        "banglaRule": "Past simple passive = was/were + Past Participle (V3)।"
    },
    {
        "id": "pass_m_7",
        "topic": "Passive Voice",
        "difficulty": "medium",
        "sentence": "French ___ in many parts of Canada.",
        "options": [
            "speaks",
            "is speaking",
            "is spoken",
            "spoke"
        ],
        "answer": "is spoken",
        "explanation": "সাধারণ সত্য বা চলমান অবস্থা বোঝাচ্ছে → Present passive।",
        "banglaRule": "Present passive structure।"
    },
    {
        "id": "pass_m_8",
        "topic": "Passive Voice",
        "difficulty": "medium",
        "sentence": "The houses ___ last week.",
        "options": [
            "repaired",
            "were repaired",
            "are repaired",
            "have repaired"
        ],
        "answer": "were repaired",
        "explanation": "Past passive: was/were + V3 (অতীতের নির্দিষ্ট কাজ)।",
        "banglaRule": "Past simple passive = was/were + Past Participle (V3)।"
    },
    {
        "id": "pass_m_9",
        "topic": "Passive Voice",
        "difficulty": "medium",
        "sentence": "French ___ in many parts of Canada.",
        "options": [
            "speaks",
            "is speaking",
            "is spoken",
            "spoke"
        ],
        "answer": "is spoken",
        "explanation": "সাধারণ সত্য বা চলমান অবস্থা বোঝাচ্ছে → Present passive।",
        "banglaRule": "Present passive structure।"
    },
    {
        "id": "pass_m_10",
        "topic": "Passive Voice",
        "difficulty": "medium",
        "sentence": "The houses ___ last week.",
        "options": [
            "repaired",
            "were repaired",
            "are repaired",
            "have repaired"
        ],
        "answer": "were repaired",
        "explanation": "Past passive: was/were + V3 (অতীতের নির্দিষ্ট কাজ)।",
        "banglaRule": "Past simple passive = was/were + Past Participle (V3)।"
    },
    {
        "id": "pass_m_11",
        "topic": "Passive Voice",
        "difficulty": "medium",
        "sentence": "French ___ in many parts of Canada.",
        "options": [
            "speaks",
            "is speaking",
            "is spoken",
            "spoke"
        ],
        "answer": "is spoken",
        "explanation": "সাধারণ সত্য বা চলমান অবস্থা বোঝাচ্ছে → Present passive।",
        "banglaRule": "Present passive structure।"
    },
    {
        "id": "pass_m_12",
        "topic": "Passive Voice",
        "difficulty": "medium",
        "sentence": "The houses ___ last week.",
        "options": [
            "repaired",
            "were repaired",
            "are repaired",
            "have repaired"
        ],
        "answer": "were repaired",
        "explanation": "Past passive: was/were + V3 (অতীতের নির্দিষ্ট কাজ)।",
        "banglaRule": "Past simple passive = was/were + Past Participle (V3)।"
    },
    {
        "id": "pass_m_13",
        "topic": "Passive Voice",
        "difficulty": "medium",
        "sentence": "French ___ in many parts of Canada.",
        "options": [
            "speaks",
            "is speaking",
            "is spoken",
            "spoke"
        ],
        "answer": "is spoken",
        "explanation": "সাধারণ সত্য বা চলমান অবস্থা বোঝাচ্ছে → Present passive।",
        "banglaRule": "Present passive structure।"
    },
    {
        "id": "pass_m_14",
        "topic": "Passive Voice",
        "difficulty": "medium",
        "sentence": "The houses ___ last week.",
        "options": [
            "repaired",
            "were repaired",
            "are repaired",
            "have repaired"
        ],
        "answer": "were repaired",
        "explanation": "Past passive: was/were + V3 (অতীতের নির্দিষ্ট কাজ)।",
        "banglaRule": "Past simple passive = was/were + Past Participle (V3)।"
    },
    {
        "id": "pass_m_15",
        "topic": "Passive Voice",
        "difficulty": "medium",
        "sentence": "French ___ in many parts of Canada.",
        "options": [
            "speaks",
            "is speaking",
            "is spoken",
            "spoke"
        ],
        "answer": "is spoken",
        "explanation": "সাধারণ সত্য বা চলমান অবস্থা বোঝাচ্ছে → Present passive।",
        "banglaRule": "Present passive structure।"
    },
    {
        "id": "pass_m_16",
        "topic": "Passive Voice",
        "difficulty": "medium",
        "sentence": "The houses ___ last week.",
        "options": [
            "repaired",
            "were repaired",
            "are repaired",
            "have repaired"
        ],
        "answer": "were repaired",
        "explanation": "Past passive: was/were + V3 (অতীতের নির্দিষ্ট কাজ)।",
        "banglaRule": "Past simple passive = was/were + Past Participle (V3)।"
    },
    {
        "id": "pass_m_17",
        "topic": "Passive Voice",
        "difficulty": "medium",
        "sentence": "French ___ in many parts of Canada.",
        "options": [
            "speaks",
            "is speaking",
            "is spoken",
            "spoke"
        ],
        "answer": "is spoken",
        "explanation": "সাধারণ সত্য বা চলমান অবস্থা বোঝাচ্ছে → Present passive।",
        "banglaRule": "Present passive structure।"
    },
    {
        "id": "pass_m_18",
        "topic": "Passive Voice",
        "difficulty": "medium",
        "sentence": "The houses ___ last week.",
        "options": [
            "repaired",
            "were repaired",
            "are repaired",
            "have repaired"
        ],
        "answer": "were repaired",
        "explanation": "Past passive: was/were + V3 (অতীতের নির্দিষ্ট কাজ)।",
        "banglaRule": "Past simple passive = was/were + Past Participle (V3)।"
    },
    {
        "id": "pass_m_19",
        "topic": "Passive Voice",
        "difficulty": "medium",
        "sentence": "French ___ in many parts of Canada.",
        "options": [
            "speaks",
            "is speaking",
            "is spoken",
            "spoke"
        ],
        "answer": "is spoken",
        "explanation": "সাধারণ সত্য বা চলমান অবস্থা বোঝাচ্ছে → Present passive।",
        "banglaRule": "Present passive structure।"
    },
    {
        "id": "pass_m_20",
        "topic": "Passive Voice",
        "difficulty": "medium",
        "sentence": "The houses ___ last week.",
        "options": [
            "repaired",
            "were repaired",
            "are repaired",
            "have repaired"
        ],
        "answer": "were repaired",
        "explanation": "Past passive: was/were + V3 (অতীতের নির্দিষ্ট কাজ)।",
        "banglaRule": "Past simple passive = was/were + Past Participle (V3)।"
    },
    {
        "id": "pass_m_21",
        "topic": "Passive Voice",
        "difficulty": "medium",
        "sentence": "French ___ in many parts of Canada.",
        "options": [
            "speaks",
            "is speaking",
            "is spoken",
            "spoke"
        ],
        "answer": "is spoken",
        "explanation": "সাধারণ সত্য বা চলমান অবস্থা বোঝাচ্ছে → Present passive।",
        "banglaRule": "Present passive structure।"
    },
    {
        "id": "pass_m_22",
        "topic": "Passive Voice",
        "difficulty": "medium",
        "sentence": "The houses ___ last week.",
        "options": [
            "repaired",
            "were repaired",
            "are repaired",
            "have repaired"
        ],
        "answer": "were repaired",
        "explanation": "Past passive: was/were + V3 (অতীতের নির্দিষ্ট কাজ)।",
        "banglaRule": "Past simple passive = was/were + Past Participle (V3)।"
    },
    {
        "id": "pass_m_23",
        "topic": "Passive Voice",
        "difficulty": "medium",
        "sentence": "French ___ in many parts of Canada.",
        "options": [
            "speaks",
            "is speaking",
            "is spoken",
            "spoke"
        ],
        "answer": "is spoken",
        "explanation": "সাধারণ সত্য বা চলমান অবস্থা বোঝাচ্ছে → Present passive।",
        "banglaRule": "Present passive structure।"
    },
    {
        "id": "pass_m_24",
        "topic": "Passive Voice",
        "difficulty": "medium",
        "sentence": "The houses ___ last week.",
        "options": [
            "repaired",
            "were repaired",
            "are repaired",
            "have repaired"
        ],
        "answer": "were repaired",
        "explanation": "Past passive: was/were + V3 (অতীতের নির্দিষ্ট কাজ)।",
        "banglaRule": "Past simple passive = was/were + Past Participle (V3)।"
    },
    {
        "id": "pass_m_25",
        "topic": "Passive Voice",
        "difficulty": "medium",
        "sentence": "French ___ in many parts of Canada.",
        "options": [
            "speaks",
            "is speaking",
            "is spoken",
            "spoke"
        ],
        "answer": "is spoken",
        "explanation": "সাধারণ সত্য বা চলমান অবস্থা বোঝাচ্ছে → Present passive।",
        "banglaRule": "Present passive structure।"
    },
    {
        "id": "pass_m_26",
        "topic": "Passive Voice",
        "difficulty": "medium",
        "sentence": "The houses ___ last week.",
        "options": [
            "repaired",
            "were repaired",
            "are repaired",
            "have repaired"
        ],
        "answer": "were repaired",
        "explanation": "Past passive: was/were + V3 (অতীতের নির্দিষ্ট কাজ)।",
        "banglaRule": "Past simple passive = was/were + Past Participle (V3)।"
    },
    {
        "id": "pass_m_27",
        "topic": "Passive Voice",
        "difficulty": "medium",
        "sentence": "French ___ in many parts of Canada.",
        "options": [
            "speaks",
            "is speaking",
            "is spoken",
            "spoke"
        ],
        "answer": "is spoken",
        "explanation": "সাধারণ সত্য বা চলমান অবস্থা বোঝাচ্ছে → Present passive।",
        "banglaRule": "Present passive structure।"
    },
    {
        "id": "pass_m_28",
        "topic": "Passive Voice",
        "difficulty": "medium",
        "sentence": "The houses ___ last week.",
        "options": [
            "repaired",
            "were repaired",
            "are repaired",
            "have repaired"
        ],
        "answer": "were repaired",
        "explanation": "Past passive: was/were + V3 (অতীতের নির্দিষ্ট কাজ)।",
        "banglaRule": "Past simple passive = was/were + Past Participle (V3)।"
    },
    {
        "id": "pass_m_29",
        "topic": "Passive Voice",
        "difficulty": "medium",
        "sentence": "French ___ in many parts of Canada.",
        "options": [
            "speaks",
            "is speaking",
            "is spoken",
            "spoke"
        ],
        "answer": "is spoken",
        "explanation": "সাধারণ সত্য বা চলমান অবস্থা বোঝাচ্ছে → Present passive।",
        "banglaRule": "Present passive structure।"
    },
    {
        "id": "pass_m_30",
        "topic": "Passive Voice",
        "difficulty": "medium",
        "sentence": "The houses ___ last week.",
        "options": [
            "repaired",
            "were repaired",
            "are repaired",
            "have repaired"
        ],
        "answer": "were repaired",
        "explanation": "Past passive: was/were + V3 (অতীতের নির্দিষ্ট কাজ)।",
        "banglaRule": "Past simple passive = was/were + Past Participle (V3)।"
    },
    {
        "id": "pass_m_31",
        "topic": "Passive Voice",
        "difficulty": "medium",
        "sentence": "French ___ in many parts of Canada.",
        "options": [
            "speaks",
            "is speaking",
            "is spoken",
            "spoke"
        ],
        "answer": "is spoken",
        "explanation": "সাধারণ সত্য বা চলমান অবস্থা বোঝাচ্ছে → Present passive।",
        "banglaRule": "Present passive structure।"
    },
    {
        "id": "pass_m_32",
        "topic": "Passive Voice",
        "difficulty": "medium",
        "sentence": "The houses ___ last week.",
        "options": [
            "repaired",
            "were repaired",
            "are repaired",
            "have repaired"
        ],
        "answer": "were repaired",
        "explanation": "Past passive: was/were + V3 (অতীতের নির্দিষ্ট কাজ)।",
        "banglaRule": "Past simple passive = was/were + Past Participle (V3)।"
    },
    {
        "id": "pass_m_33",
        "topic": "Passive Voice",
        "difficulty": "medium",
        "sentence": "French ___ in many parts of Canada.",
        "options": [
            "speaks",
            "is speaking",
            "is spoken",
            "spoke"
        ],
        "answer": "is spoken",
        "explanation": "সাধারণ সত্য বা চলমান অবস্থা বোঝাচ্ছে → Present passive।",
        "banglaRule": "Present passive structure।"
    },
    {
        "id": "pass_m_34",
        "topic": "Passive Voice",
        "difficulty": "medium",
        "sentence": "The houses ___ last week.",
        "options": [
            "repaired",
            "were repaired",
            "are repaired",
            "have repaired"
        ],
        "answer": "were repaired",
        "explanation": "Past passive: was/were + V3 (অতীতের নির্দিষ্ট কাজ)।",
        "banglaRule": "Past simple passive = was/were + Past Participle (V3)।"
    },
    {
        "id": "pass_m_35",
        "topic": "Passive Voice",
        "difficulty": "medium",
        "sentence": "French ___ in many parts of Canada.",
        "options": [
            "speaks",
            "is speaking",
            "is spoken",
            "spoke"
        ],
        "answer": "is spoken",
        "explanation": "সাধারণ সত্য বা চলমান অবস্থা বোঝাচ্ছে → Present passive।",
        "banglaRule": "Present passive structure।"
    },
    {
        "id": "pass_m_36",
        "topic": "Passive Voice",
        "difficulty": "medium",
        "sentence": "The houses ___ last week.",
        "options": [
            "repaired",
            "were repaired",
            "are repaired",
            "have repaired"
        ],
        "answer": "were repaired",
        "explanation": "Past passive: was/were + V3 (অতীতের নির্দিষ্ট কাজ)।",
        "banglaRule": "Past simple passive = was/were + Past Participle (V3)।"
    },
    {
        "id": "pass_m_37",
        "topic": "Passive Voice",
        "difficulty": "medium",
        "sentence": "French ___ in many parts of Canada.",
        "options": [
            "speaks",
            "is speaking",
            "is spoken",
            "spoke"
        ],
        "answer": "is spoken",
        "explanation": "সাধারণ সত্য বা চলমান অবস্থা বোঝাচ্ছে → Present passive।",
        "banglaRule": "Present passive structure।"
    },
    {
        "id": "pass_m_38",
        "topic": "Passive Voice",
        "difficulty": "medium",
        "sentence": "The houses ___ last week.",
        "options": [
            "repaired",
            "were repaired",
            "are repaired",
            "have repaired"
        ],
        "answer": "were repaired",
        "explanation": "Past passive: was/were + V3 (অতীতের নির্দিষ্ট কাজ)।",
        "banglaRule": "Past simple passive = was/were + Past Participle (V3)।"
    },
    {
        "id": "pass_m_39",
        "topic": "Passive Voice",
        "difficulty": "medium",
        "sentence": "French ___ in many parts of Canada.",
        "options": [
            "speaks",
            "is speaking",
            "is spoken",
            "spoke"
        ],
        "answer": "is spoken",
        "explanation": "সাধারণ সত্য বা চলমান অবস্থা বোঝাচ্ছে → Present passive।",
        "banglaRule": "Present passive structure।"
    },
    {
        "id": "pass_m_40",
        "topic": "Passive Voice",
        "difficulty": "medium",
        "sentence": "The houses ___ last week.",
        "options": [
            "repaired",
            "were repaired",
            "are repaired",
            "have repaired"
        ],
        "answer": "were repaired",
        "explanation": "Past passive: was/were + V3 (অতীতের নির্দিষ্ট কাজ)।",
        "banglaRule": "Past simple passive = was/were + Past Participle (V3)।"
    },
    {
        "id": "pass_h_1",
        "topic": "Passive Voice",
        "difficulty": "hard",
        "sentence": "The house ___ when we arrived.",
        "options": [
            "was painting",
            "was being painted",
            "painted",
            "had painted"
        ],
        "answer": "was being painted",
        "explanation": "Past continuous passive: was/were + being + V3।",
        "banglaRule": "Past Continuous Passive = was/were + being + V3 (অতীতের চলমান কাজ)।"
    },
    {
        "id": "pass_h_2",
        "topic": "Passive Voice",
        "difficulty": "hard",
        "sentence": "The work must ___ by tomorrow.",
        "options": [
            "be finished",
            "finish",
            "finished",
            "be finishing"
        ],
        "answer": "be finished",
        "explanation": "Modal passive: modal + be + V3।",
        "banglaRule": "Modal Passive = can/could/must/should + be + V3।"
    },
    {
        "id": "pass_h_3",
        "topic": "Passive Voice",
        "difficulty": "hard",
        "sentence": "The bridge ___ by the end of next month.",
        "options": [
            "will build",
            "will be built",
            "builds",
            "will have been built"
        ],
        "answer": "will have been built",
        "explanation": "Future perfect passive: will have been + V3।",
        "banglaRule": "Future Perfect Passive = will have been + V3।"
    },
    {
        "id": "pass_h_4",
        "topic": "Passive Voice",
        "difficulty": "hard",
        "sentence": "The thief is said to ___ arrested.",
        "options": [
            "have been",
            "be",
            "been",
            "has been"
        ],
        "answer": "have been",
        "explanation": "Perfect infinitive passive: to have been + V3।",
        "banglaRule": "Perfect Infinitive Passive = to have been + V3।"
    },
    {
        "id": "pass_h_5",
        "topic": "Passive Voice",
        "difficulty": "hard",
        "sentence": "I object to ___ treated like this.",
        "options": [
            "being",
            "be",
            "been",
            "having been"
        ],
        "answer": "being",
        "explanation": "\"object to\" এর পর verb+ing বসে, তাই passive-এ \"being + V3\" হবে।",
        "banglaRule": "Preposition/Phrase + being + V3 (Gerund passive)।"
    },
    {
        "id": "pass_h_6",
        "topic": "Passive Voice",
        "difficulty": "hard",
        "sentence": "Active: People say that he is wise. → Passive: He is said ___ wise.",
        "options": [
            "to be",
            "being",
            "is",
            "to have been"
        ],
        "answer": "to be",
        "explanation": "সেয়ানা প্যাসিভ: subject + is said + to + V1।",
        "banglaRule": "It is said that... বা Subject + is said + to + V1।"
    },
    {
        "id": "pass_h_7",
        "topic": "Passive Voice",
        "difficulty": "hard",
        "sentence": "Let the door ___.",
        "options": [
            "be opened",
            "open",
            "be open",
            "opened"
        ],
        "answer": "be opened",
        "explanation": "Imperative active to passive: Let + object + be + V3।",
        "banglaRule": "Imperative Passive = Let + Object + be + V3।"
    },
    {
        "id": "pass_h_8",
        "topic": "Passive Voice",
        "difficulty": "hard",
        "sentence": "Active: Do it. → Passive: Let it ___.",
        "options": [
            "be done",
            "do",
            "done",
            "be doing"
        ],
        "answer": "be done",
        "explanation": "Imperative passive rule.",
        "banglaRule": "Let + object + be + V3 (V1-এর passive)।"
    },
    {
        "id": "pass_h_9",
        "topic": "Passive Voice",
        "difficulty": "hard",
        "sentence": "Active: Who wrote this? → Passive: By whom ___ this written?",
        "options": [
            "was",
            "is",
            "were",
            "had"
        ],
        "answer": "was",
        "explanation": "\"Who\" এর প্যাসিভ \"By whom\" দিয়ে শুরু হয়। বাক্যটি past, তাই \"was\" বসবে।",
        "banglaRule": "Who -> By whom + Auxiliary + Subject + V3?"
    },
    {
        "id": "pass_h_10",
        "topic": "Passive Voice",
        "difficulty": "hard",
        "sentence": "Active: Whom did you see? → Passive: ___ was seen by you?",
        "options": [
            "Who",
            "Whom",
            "By whom",
            "To whom"
        ],
        "answer": "Who",
        "explanation": "\"Whom\" এর প্যাসিভ \"Who\" দিয়ে শুরু হয়।",
        "banglaRule": "Whom -> Who + Auxiliary + V3 + by + Object?"
    },
    {
        "id": "pass_h_11",
        "topic": "Passive Voice",
        "difficulty": "hard",
        "sentence": "The house ___ when we arrived.",
        "options": [
            "was painting",
            "was being painted",
            "painted",
            "had painted"
        ],
        "answer": "was being painted",
        "explanation": "Past continuous passive: was/were + being + V3।",
        "banglaRule": "Past Continuous Passive = was/were + being + V3 (অতীতের চলমান কাজ)।"
    },
    {
        "id": "pass_h_12",
        "topic": "Passive Voice",
        "difficulty": "hard",
        "sentence": "The work must ___ by tomorrow.",
        "options": [
            "be finished",
            "finish",
            "finished",
            "be finishing"
        ],
        "answer": "be finished",
        "explanation": "Modal passive: modal + be + V3।",
        "banglaRule": "Modal Passive = can/could/must/should + be + V3।"
    },
    {
        "id": "pass_h_13",
        "topic": "Passive Voice",
        "difficulty": "hard",
        "sentence": "The bridge ___ by the end of next month.",
        "options": [
            "will build",
            "will be built",
            "builds",
            "will have been built"
        ],
        "answer": "will have been built",
        "explanation": "Future perfect passive: will have been + V3।",
        "banglaRule": "Future Perfect Passive = will have been + V3।"
    },
    {
        "id": "pass_h_14",
        "topic": "Passive Voice",
        "difficulty": "hard",
        "sentence": "The thief is said to ___ arrested.",
        "options": [
            "have been",
            "be",
            "been",
            "has been"
        ],
        "answer": "have been",
        "explanation": "Perfect infinitive passive: to have been + V3।",
        "banglaRule": "Perfect Infinitive Passive = to have been + V3।"
    },
    {
        "id": "pass_h_15",
        "topic": "Passive Voice",
        "difficulty": "hard",
        "sentence": "I object to ___ treated like this.",
        "options": [
            "being",
            "be",
            "been",
            "having been"
        ],
        "answer": "being",
        "explanation": "\"object to\" এর পর verb+ing বসে, তাই passive-এ \"being + V3\" হবে।",
        "banglaRule": "Preposition/Phrase + being + V3 (Gerund passive)।"
    },
    {
        "id": "pass_h_16",
        "topic": "Passive Voice",
        "difficulty": "hard",
        "sentence": "Active: People say that he is wise. → Passive: He is said ___ wise.",
        "options": [
            "to be",
            "being",
            "is",
            "to have been"
        ],
        "answer": "to be",
        "explanation": "সেয়ানা প্যাসিভ: subject + is said + to + V1।",
        "banglaRule": "It is said that... বা Subject + is said + to + V1।"
    },
    {
        "id": "pass_h_17",
        "topic": "Passive Voice",
        "difficulty": "hard",
        "sentence": "Let the door ___.",
        "options": [
            "be opened",
            "open",
            "be open",
            "opened"
        ],
        "answer": "be opened",
        "explanation": "Imperative active to passive: Let + object + be + V3।",
        "banglaRule": "Imperative Passive = Let + Object + be + V3।"
    },
    {
        "id": "pass_h_18",
        "topic": "Passive Voice",
        "difficulty": "hard",
        "sentence": "Active: Do it. → Passive: Let it ___.",
        "options": [
            "be done",
            "do",
            "done",
            "be doing"
        ],
        "answer": "be done",
        "explanation": "Imperative passive rule.",
        "banglaRule": "Let + object + be + V3 (V1-এর passive)।"
    },
    {
        "id": "pass_h_19",
        "topic": "Passive Voice",
        "difficulty": "hard",
        "sentence": "Active: Who wrote this? → Passive: By whom ___ this written?",
        "options": [
            "was",
            "is",
            "were",
            "had"
        ],
        "answer": "was",
        "explanation": "\"Who\" এর প্যাসিভ \"By whom\" দিয়ে শুরু হয়। বাক্যটি past, তাই \"was\" বসবে।",
        "banglaRule": "Who -> By whom + Auxiliary + Subject + V3?"
    },
    {
        "id": "pass_h_20",
        "topic": "Passive Voice",
        "difficulty": "hard",
        "sentence": "Active: Whom did you see? → Passive: ___ was seen by you?",
        "options": [
            "Who",
            "Whom",
            "By whom",
            "To whom"
        ],
        "answer": "Who",
        "explanation": "\"Whom\" এর প্যাসিভ \"Who\" দিয়ে শুরু হয়।",
        "banglaRule": "Whom -> Who + Auxiliary + V3 + by + Object?"
    },
    {
        "id": "pass_h_21",
        "topic": "Passive Voice",
        "difficulty": "hard",
        "sentence": "The house ___ when we arrived.",
        "options": [
            "was painting",
            "was being painted",
            "painted",
            "had painted"
        ],
        "answer": "was being painted",
        "explanation": "Past continuous passive: was/were + being + V3।",
        "banglaRule": "Past Continuous Passive = was/were + being + V3 (অতীতের চলমান কাজ)।"
    },
    {
        "id": "pass_h_22",
        "topic": "Passive Voice",
        "difficulty": "hard",
        "sentence": "The work must ___ by tomorrow.",
        "options": [
            "be finished",
            "finish",
            "finished",
            "be finishing"
        ],
        "answer": "be finished",
        "explanation": "Modal passive: modal + be + V3।",
        "banglaRule": "Modal Passive = can/could/must/should + be + V3।"
    },
    {
        "id": "pass_h_23",
        "topic": "Passive Voice",
        "difficulty": "hard",
        "sentence": "The bridge ___ by the end of next month.",
        "options": [
            "will build",
            "will be built",
            "builds",
            "will have been built"
        ],
        "answer": "will have been built",
        "explanation": "Future perfect passive: will have been + V3।",
        "banglaRule": "Future Perfect Passive = will have been + V3।"
    },
    {
        "id": "pass_h_24",
        "topic": "Passive Voice",
        "difficulty": "hard",
        "sentence": "The thief is said to ___ arrested.",
        "options": [
            "have been",
            "be",
            "been",
            "has been"
        ],
        "answer": "have been",
        "explanation": "Perfect infinitive passive: to have been + V3।",
        "banglaRule": "Perfect Infinitive Passive = to have been + V3।"
    },
    {
        "id": "pass_h_25",
        "topic": "Passive Voice",
        "difficulty": "hard",
        "sentence": "I object to ___ treated like this.",
        "options": [
            "being",
            "be",
            "been",
            "having been"
        ],
        "answer": "being",
        "explanation": "\"object to\" এর পর verb+ing বসে, তাই passive-এ \"being + V3\" হবে।",
        "banglaRule": "Preposition/Phrase + being + V3 (Gerund passive)।"
    },
    {
        "id": "pass_h_26",
        "topic": "Passive Voice",
        "difficulty": "hard",
        "sentence": "Active: People say that he is wise. → Passive: He is said ___ wise.",
        "options": [
            "to be",
            "being",
            "is",
            "to have been"
        ],
        "answer": "to be",
        "explanation": "সেয়ানা প্যাসিভ: subject + is said + to + V1।",
        "banglaRule": "It is said that... বা Subject + is said + to + V1।"
    },
    {
        "id": "pass_h_27",
        "topic": "Passive Voice",
        "difficulty": "hard",
        "sentence": "Let the door ___.",
        "options": [
            "be opened",
            "open",
            "be open",
            "opened"
        ],
        "answer": "be opened",
        "explanation": "Imperative active to passive: Let + object + be + V3।",
        "banglaRule": "Imperative Passive = Let + Object + be + V3।"
    },
    {
        "id": "pass_h_28",
        "topic": "Passive Voice",
        "difficulty": "hard",
        "sentence": "Active: Do it. → Passive: Let it ___.",
        "options": [
            "be done",
            "do",
            "done",
            "be doing"
        ],
        "answer": "be done",
        "explanation": "Imperative passive rule.",
        "banglaRule": "Let + object + be + V3 (V1-এর passive)।"
    },
    {
        "id": "pass_h_29",
        "topic": "Passive Voice",
        "difficulty": "hard",
        "sentence": "Active: Who wrote this? → Passive: By whom ___ this written?",
        "options": [
            "was",
            "is",
            "were",
            "had"
        ],
        "answer": "was",
        "explanation": "\"Who\" এর প্যাসিভ \"By whom\" দিয়ে শুরু হয়। বাক্যটি past, তাই \"was\" বসবে।",
        "banglaRule": "Who -> By whom + Auxiliary + Subject + V3?"
    },
    {
        "id": "pass_h_30",
        "topic": "Passive Voice",
        "difficulty": "hard",
        "sentence": "Active: Whom did you see? → Passive: ___ was seen by you?",
        "options": [
            "Who",
            "Whom",
            "By whom",
            "To whom"
        ],
        "answer": "Who",
        "explanation": "\"Whom\" এর প্যাসিভ \"Who\" দিয়ে শুরু হয়।",
        "banglaRule": "Whom -> Who + Auxiliary + V3 + by + Object?"
    },
    {
        "id": "rs_e_1",
        "topic": "Reported Speech",
        "difficulty": "easy",
        "sentence": "Karim said, \"I am tired.\" → Karim said that he ___ tired.",
        "options": [
            "is",
            "was",
            "were",
            "has been"
        ],
        "answer": "was",
        "explanation": "Direct থেকে Indirect speech-এ reporting verb past হলে reported parts-এর am/is → was হয়।",
        "banglaRule": "Reported Speech Backshift: Present Simple (am/is/are) → Past Simple (was/were)।"
    },
    {
        "id": "rs_e_2",
        "topic": "Reported Speech",
        "difficulty": "easy",
        "sentence": "Karim said, \"I am tired.\" → Karim said that he ___ tired.",
        "options": [
            "is",
            "was",
            "were",
            "has been"
        ],
        "answer": "was",
        "explanation": "Direct থেকে Indirect speech-এ reporting verb past হলে reported parts-এর am/is → was হয়।",
        "banglaRule": "Reported Speech Backshift: Present Simple (am/is/are) → Past Simple (was/were)।"
    },
    {
        "id": "rs_e_3",
        "topic": "Reported Speech",
        "difficulty": "easy",
        "sentence": "Karim said, \"I am tired.\" → Karim said that he ___ tired.",
        "options": [
            "is",
            "was",
            "were",
            "has been"
        ],
        "answer": "was",
        "explanation": "Direct থেকে Indirect speech-এ reporting verb past হলে reported parts-এর am/is → was হয়।",
        "banglaRule": "Reported Speech Backshift: Present Simple (am/is/are) → Past Simple (was/were)।"
    },
    {
        "id": "rs_e_4",
        "topic": "Reported Speech",
        "difficulty": "easy",
        "sentence": "Karim said, \"I am tired.\" → Karim said that he ___ tired.",
        "options": [
            "is",
            "was",
            "were",
            "has been"
        ],
        "answer": "was",
        "explanation": "Direct থেকে Indirect speech-এ reporting verb past হলে reported parts-এর am/is → was হয়।",
        "banglaRule": "Reported Speech Backshift: Present Simple (am/is/are) → Past Simple (was/were)।"
    },
    {
        "id": "rs_e_5",
        "topic": "Reported Speech",
        "difficulty": "easy",
        "sentence": "Karim said, \"I am tired.\" → Karim said that he ___ tired.",
        "options": [
            "is",
            "was",
            "were",
            "has been"
        ],
        "answer": "was",
        "explanation": "Direct থেকে Indirect speech-এ reporting verb past হলে reported parts-এর am/is → was হয়।",
        "banglaRule": "Reported Speech Backshift: Present Simple (am/is/are) → Past Simple (was/were)।"
    },
    {
        "id": "rs_e_6",
        "topic": "Reported Speech",
        "difficulty": "easy",
        "sentence": "Karim said, \"I am tired.\" → Karim said that he ___ tired.",
        "options": [
            "is",
            "was",
            "were",
            "has been"
        ],
        "answer": "was",
        "explanation": "Direct থেকে Indirect speech-এ reporting verb past হলে reported parts-এর am/is → was হয়।",
        "banglaRule": "Reported Speech Backshift: Present Simple (am/is/are) → Past Simple (was/were)।"
    },
    {
        "id": "rs_e_7",
        "topic": "Reported Speech",
        "difficulty": "easy",
        "sentence": "Karim said, \"I am tired.\" → Karim said that he ___ tired.",
        "options": [
            "is",
            "was",
            "were",
            "has been"
        ],
        "answer": "was",
        "explanation": "Direct থেকে Indirect speech-এ reporting verb past হলে reported parts-এর am/is → was হয়।",
        "banglaRule": "Reported Speech Backshift: Present Simple (am/is/are) → Past Simple (was/were)।"
    },
    {
        "id": "rs_e_8",
        "topic": "Reported Speech",
        "difficulty": "easy",
        "sentence": "Karim said, \"I am tired.\" → Karim said that he ___ tired.",
        "options": [
            "is",
            "was",
            "were",
            "has been"
        ],
        "answer": "was",
        "explanation": "Direct থেকে Indirect speech-এ reporting verb past হলে reported parts-এর am/is → was হয়।",
        "banglaRule": "Reported Speech Backshift: Present Simple (am/is/are) → Past Simple (was/were)।"
    },
    {
        "id": "rs_e_9",
        "topic": "Reported Speech",
        "difficulty": "easy",
        "sentence": "Karim said, \"I am tired.\" → Karim said that he ___ tired.",
        "options": [
            "is",
            "was",
            "were",
            "has been"
        ],
        "answer": "was",
        "explanation": "Direct থেকে Indirect speech-এ reporting verb past হলে reported parts-এর am/is → was হয়।",
        "banglaRule": "Reported Speech Backshift: Present Simple (am/is/are) → Past Simple (was/were)।"
    },
    {
        "id": "rs_e_10",
        "topic": "Reported Speech",
        "difficulty": "easy",
        "sentence": "Karim said, \"I am tired.\" → Karim said that he ___ tired.",
        "options": [
            "is",
            "was",
            "were",
            "has been"
        ],
        "answer": "was",
        "explanation": "Direct থেকে Indirect speech-এ reporting verb past হলে reported parts-এর am/is → was হয়।",
        "banglaRule": "Reported Speech Backshift: Present Simple (am/is/are) → Past Simple (was/were)।"
    },
    {
        "id": "rs_e_11",
        "topic": "Reported Speech",
        "difficulty": "easy",
        "sentence": "Karim said, \"I am tired.\" → Karim said that he ___ tired.",
        "options": [
            "is",
            "was",
            "were",
            "has been"
        ],
        "answer": "was",
        "explanation": "Direct থেকে Indirect speech-এ reporting verb past হলে reported parts-এর am/is → was হয়।",
        "banglaRule": "Reported Speech Backshift: Present Simple (am/is/are) → Past Simple (was/were)।"
    },
    {
        "id": "rs_e_12",
        "topic": "Reported Speech",
        "difficulty": "easy",
        "sentence": "Karim said, \"I am tired.\" → Karim said that he ___ tired.",
        "options": [
            "is",
            "was",
            "were",
            "has been"
        ],
        "answer": "was",
        "explanation": "Direct থেকে Indirect speech-এ reporting verb past হলে reported parts-এর am/is → was হয়।",
        "banglaRule": "Reported Speech Backshift: Present Simple (am/is/are) → Past Simple (was/were)।"
    },
    {
        "id": "rs_e_13",
        "topic": "Reported Speech",
        "difficulty": "easy",
        "sentence": "Karim said, \"I am tired.\" → Karim said that he ___ tired.",
        "options": [
            "is",
            "was",
            "were",
            "has been"
        ],
        "answer": "was",
        "explanation": "Direct থেকে Indirect speech-এ reporting verb past হলে reported parts-এর am/is → was হয়।",
        "banglaRule": "Reported Speech Backshift: Present Simple (am/is/are) → Past Simple (was/were)।"
    },
    {
        "id": "rs_e_14",
        "topic": "Reported Speech",
        "difficulty": "easy",
        "sentence": "Karim said, \"I am tired.\" → Karim said that he ___ tired.",
        "options": [
            "is",
            "was",
            "were",
            "has been"
        ],
        "answer": "was",
        "explanation": "Direct থেকে Indirect speech-এ reporting verb past হলে reported parts-এর am/is → was হয়।",
        "banglaRule": "Reported Speech Backshift: Present Simple (am/is/are) → Past Simple (was/were)।"
    },
    {
        "id": "rs_e_15",
        "topic": "Reported Speech",
        "difficulty": "easy",
        "sentence": "Karim said, \"I am tired.\" → Karim said that he ___ tired.",
        "options": [
            "is",
            "was",
            "were",
            "has been"
        ],
        "answer": "was",
        "explanation": "Direct থেকে Indirect speech-এ reporting verb past হলে reported parts-এর am/is → was হয়।",
        "banglaRule": "Reported Speech Backshift: Present Simple (am/is/are) → Past Simple (was/were)।"
    },
    {
        "id": "rs_e_16",
        "topic": "Reported Speech",
        "difficulty": "easy",
        "sentence": "Karim said, \"I am tired.\" → Karim said that he ___ tired.",
        "options": [
            "is",
            "was",
            "were",
            "has been"
        ],
        "answer": "was",
        "explanation": "Direct থেকে Indirect speech-এ reporting verb past হলে reported parts-এর am/is → was হয়।",
        "banglaRule": "Reported Speech Backshift: Present Simple (am/is/are) → Past Simple (was/were)।"
    },
    {
        "id": "rs_e_17",
        "topic": "Reported Speech",
        "difficulty": "easy",
        "sentence": "Karim said, \"I am tired.\" → Karim said that he ___ tired.",
        "options": [
            "is",
            "was",
            "were",
            "has been"
        ],
        "answer": "was",
        "explanation": "Direct থেকে Indirect speech-এ reporting verb past হলে reported parts-এর am/is → was হয়।",
        "banglaRule": "Reported Speech Backshift: Present Simple (am/is/are) → Past Simple (was/were)।"
    },
    {
        "id": "rs_e_18",
        "topic": "Reported Speech",
        "difficulty": "easy",
        "sentence": "Karim said, \"I am tired.\" → Karim said that he ___ tired.",
        "options": [
            "is",
            "was",
            "were",
            "has been"
        ],
        "answer": "was",
        "explanation": "Direct থেকে Indirect speech-এ reporting verb past হলে reported parts-এর am/is → was হয়।",
        "banglaRule": "Reported Speech Backshift: Present Simple (am/is/are) → Past Simple (was/were)।"
    },
    {
        "id": "rs_e_19",
        "topic": "Reported Speech",
        "difficulty": "easy",
        "sentence": "Karim said, \"I am tired.\" → Karim said that he ___ tired.",
        "options": [
            "is",
            "was",
            "were",
            "has been"
        ],
        "answer": "was",
        "explanation": "Direct থেকে Indirect speech-এ reporting verb past হলে reported parts-এর am/is → was হয়।",
        "banglaRule": "Reported Speech Backshift: Present Simple (am/is/are) → Past Simple (was/were)।"
    },
    {
        "id": "rs_e_20",
        "topic": "Reported Speech",
        "difficulty": "easy",
        "sentence": "Karim said, \"I am tired.\" → Karim said that he ___ tired.",
        "options": [
            "is",
            "was",
            "were",
            "has been"
        ],
        "answer": "was",
        "explanation": "Direct থেকে Indirect speech-এ reporting verb past হলে reported parts-এর am/is → was হয়।",
        "banglaRule": "Reported Speech Backshift: Present Simple (am/is/are) → Past Simple (was/were)।"
    },
    {
        "id": "rs_m_1",
        "topic": "Reported Speech",
        "difficulty": "medium",
        "sentence": "He said, \"I will write a letter.\" → He said that he ___ a letter.",
        "options": [
            "will write",
            "would write",
            "wrote",
            "will be writing"
        ],
        "answer": "would write",
        "explanation": "Reporting verb past tense হলে will/shall → would/should হয়।",
        "banglaRule": "Will → Would (Reported Speech)।"
    },
    {
        "id": "rs_m_2",
        "topic": "Reported Speech",
        "difficulty": "medium",
        "sentence": "She said, \"I have done it.\" → She said that she ___ it.",
        "options": [
            "has done",
            "did",
            "had done",
            "was doing"
        ],
        "answer": "had done",
        "explanation": "Present Perfect (have done) → Past Perfect (had done) হয়।",
        "banglaRule": "Present Perfect → Past Perfect (Reported Speech)।"
    },
    {
        "id": "rs_m_3",
        "topic": "Reported Speech",
        "difficulty": "medium",
        "sentence": "He said, \"I went to Dhaka yesterday.\" → He said that he ___ to Dhaka the previous day.",
        "options": [
            "went",
            "had gone",
            "has gone",
            "would go"
        ],
        "answer": "had gone",
        "explanation": "Past Simple (went) → Past Perfect (had gone) হয়।",
        "banglaRule": "Past Simple → Past Perfect (Reported Speech)।"
    },
    {
        "id": "rs_m_4",
        "topic": "Reported Speech",
        "difficulty": "medium",
        "sentence": "She said to me, \"Help me.\" → She ___ me to help her.",
        "options": [
            "said",
            "told",
            "asked",
            "requested"
        ],
        "answer": "requested",
        "explanation": "অনুরোধমূলক বাক্যে reporting verb \"requested\" বা \"asked\" হয় এবং \"to + V1\" বসে।",
        "banglaRule": "Imperative Indirect = Request/Order/Advise + Object + to + V1।"
    },
    {
        "id": "rs_m_5",
        "topic": "Reported Speech",
        "difficulty": "medium",
        "sentence": "He asked, \"Where are you going?\" → He asked where I ___ going.",
        "options": [
            "am",
            "was",
            "were",
            "is"
        ],
        "answer": "was",
        "explanation": "প্রশ্নবোধক বাক্যে indirect speech-এ syntax সাধারণ বাক্যের মতো হয় (I was, was I নয়)।",
        "banglaRule": "Indirect question has declarative word order (Subject + Verb)।"
    },
    {
        "id": "rs_m_6",
        "topic": "Reported Speech",
        "difficulty": "medium",
        "sentence": "She asked, \"Do you know him?\" → She asked if I ___ him.",
        "options": [
            "know",
            "knew",
            "known",
            "had known"
        ],
        "answer": "knew",
        "explanation": "Yes/No question-এ linker হিসেবে \"if\" বা \"whether\" বসে এবং tense past simple হয়।",
        "banglaRule": "Yes/No Question -> Linker \"if/whether\" + Subject + V2।"
    },
    {
        "id": "rs_m_7",
        "topic": "Reported Speech",
        "difficulty": "medium",
        "sentence": "The teacher said, \"The earth is round.\" → The teacher said that the earth ___ round.",
        "options": [
            "is",
            "was",
            "were",
            "had been"
        ],
        "answer": "is",
        "explanation": "চিরন্তন সত্য বা বৈজ্ঞানিক সত্যের tense-এর কোনো পরিবর্তন (backshift) হয় না।",
        "banglaRule": "Universal Truth -> No change in tense।"
    },
    {
        "id": "rs_m_8",
        "topic": "Reported Speech",
        "difficulty": "medium",
        "sentence": "He said, \"I am writing now.\" → He said that he was writing ___.",
        "options": [
            "now",
            "then",
            "today",
            "that day"
        ],
        "answer": "then",
        "explanation": "নিকটবর্তী শব্দ পরিবর্তিত হয়ে দূরবর্তী শব্দ হয় (now → then)।",
        "banglaRule": "Now → Then, Yesterday → The previous day, Tomorrow → The next day।"
    },
    {
        "id": "rs_m_9",
        "topic": "Reported Speech",
        "difficulty": "medium",
        "sentence": "He said, \"I will write a letter.\" → He said that he ___ a letter.",
        "options": [
            "will write",
            "would write",
            "wrote",
            "will be writing"
        ],
        "answer": "would write",
        "explanation": "Reporting verb past tense হলে will/shall → would/should হয়।",
        "banglaRule": "Will → Would (Reported Speech)।"
    },
    {
        "id": "rs_m_10",
        "topic": "Reported Speech",
        "difficulty": "medium",
        "sentence": "She said, \"I have done it.\" → She said that she ___ it.",
        "options": [
            "has done",
            "did",
            "had done",
            "was doing"
        ],
        "answer": "had done",
        "explanation": "Present Perfect (have done) → Past Perfect (had done) হয়।",
        "banglaRule": "Present Perfect → Past Perfect (Reported Speech)।"
    },
    {
        "id": "rs_m_11",
        "topic": "Reported Speech",
        "difficulty": "medium",
        "sentence": "He said, \"I went to Dhaka yesterday.\" → He said that he ___ to Dhaka the previous day.",
        "options": [
            "went",
            "had gone",
            "has gone",
            "would go"
        ],
        "answer": "had gone",
        "explanation": "Past Simple (went) → Past Perfect (had gone) হয়।",
        "banglaRule": "Past Simple → Past Perfect (Reported Speech)।"
    },
    {
        "id": "rs_m_12",
        "topic": "Reported Speech",
        "difficulty": "medium",
        "sentence": "She said to me, \"Help me.\" → She ___ me to help her.",
        "options": [
            "said",
            "told",
            "asked",
            "requested"
        ],
        "answer": "requested",
        "explanation": "অনুরোধমূলক বাক্যে reporting verb \"requested\" বা \"asked\" হয় এবং \"to + V1\" বসে।",
        "banglaRule": "Imperative Indirect = Request/Order/Advise + Object + to + V1।"
    },
    {
        "id": "rs_m_13",
        "topic": "Reported Speech",
        "difficulty": "medium",
        "sentence": "He asked, \"Where are you going?\" → He asked where I ___ going.",
        "options": [
            "am",
            "was",
            "were",
            "is"
        ],
        "answer": "was",
        "explanation": "প্রশ্নবোধক বাক্যে indirect speech-এ syntax সাধারণ বাক্যের মতো হয় (I was, was I নয়)।",
        "banglaRule": "Indirect question has declarative word order (Subject + Verb)।"
    },
    {
        "id": "rs_m_14",
        "topic": "Reported Speech",
        "difficulty": "medium",
        "sentence": "She asked, \"Do you know him?\" → She asked if I ___ him.",
        "options": [
            "know",
            "knew",
            "known",
            "had known"
        ],
        "answer": "knew",
        "explanation": "Yes/No question-এ linker হিসেবে \"if\" বা \"whether\" বসে এবং tense past simple হয়।",
        "banglaRule": "Yes/No Question -> Linker \"if/whether\" + Subject + V2।"
    },
    {
        "id": "rs_m_15",
        "topic": "Reported Speech",
        "difficulty": "medium",
        "sentence": "The teacher said, \"The earth is round.\" → The teacher said that the earth ___ round.",
        "options": [
            "is",
            "was",
            "were",
            "had been"
        ],
        "answer": "is",
        "explanation": "চিরন্তন সত্য বা বৈজ্ঞানিক সত্যের tense-এর কোনো পরিবর্তন (backshift) হয় না।",
        "banglaRule": "Universal Truth -> No change in tense।"
    },
    {
        "id": "rs_m_16",
        "topic": "Reported Speech",
        "difficulty": "medium",
        "sentence": "He said, \"I am writing now.\" → He said that he was writing ___.",
        "options": [
            "now",
            "then",
            "today",
            "that day"
        ],
        "answer": "then",
        "explanation": "নিকটবর্তী শব্দ পরিবর্তিত হয়ে দূরবর্তী শব্দ হয় (now → then)।",
        "banglaRule": "Now → Then, Yesterday → The previous day, Tomorrow → The next day।"
    },
    {
        "id": "rs_m_17",
        "topic": "Reported Speech",
        "difficulty": "medium",
        "sentence": "He said, \"I will write a letter.\" → He said that he ___ a letter.",
        "options": [
            "will write",
            "would write",
            "wrote",
            "will be writing"
        ],
        "answer": "would write",
        "explanation": "Reporting verb past tense হলে will/shall → would/should হয়।",
        "banglaRule": "Will → Would (Reported Speech)।"
    },
    {
        "id": "rs_m_18",
        "topic": "Reported Speech",
        "difficulty": "medium",
        "sentence": "She said, \"I have done it.\" → She said that she ___ it.",
        "options": [
            "has done",
            "did",
            "had done",
            "was doing"
        ],
        "answer": "had done",
        "explanation": "Present Perfect (have done) → Past Perfect (had done) হয়।",
        "banglaRule": "Present Perfect → Past Perfect (Reported Speech)।"
    },
    {
        "id": "rs_m_19",
        "topic": "Reported Speech",
        "difficulty": "medium",
        "sentence": "He said, \"I went to Dhaka yesterday.\" → He said that he ___ to Dhaka the previous day.",
        "options": [
            "went",
            "had gone",
            "has gone",
            "would go"
        ],
        "answer": "had gone",
        "explanation": "Past Simple (went) → Past Perfect (had gone) হয়।",
        "banglaRule": "Past Simple → Past Perfect (Reported Speech)।"
    },
    {
        "id": "rs_m_20",
        "topic": "Reported Speech",
        "difficulty": "medium",
        "sentence": "She said to me, \"Help me.\" → She ___ me to help her.",
        "options": [
            "said",
            "told",
            "asked",
            "requested"
        ],
        "answer": "requested",
        "explanation": "অনুরোধমূলক বাক্যে reporting verb \"requested\" বা \"asked\" হয় এবং \"to + V1\" বসে।",
        "banglaRule": "Imperative Indirect = Request/Order/Advise + Object + to + V1।"
    },
    {
        "id": "rs_m_21",
        "topic": "Reported Speech",
        "difficulty": "medium",
        "sentence": "He asked, \"Where are you going?\" → He asked where I ___ going.",
        "options": [
            "am",
            "was",
            "were",
            "is"
        ],
        "answer": "was",
        "explanation": "প্রশ্নবোধক বাক্যে indirect speech-এ syntax সাধারণ বাক্যের মতো হয় (I was, was I নয়)।",
        "banglaRule": "Indirect question has declarative word order (Subject + Verb)।"
    },
    {
        "id": "rs_m_22",
        "topic": "Reported Speech",
        "difficulty": "medium",
        "sentence": "She asked, \"Do you know him?\" → She asked if I ___ him.",
        "options": [
            "know",
            "knew",
            "known",
            "had known"
        ],
        "answer": "knew",
        "explanation": "Yes/No question-এ linker হিসেবে \"if\" বা \"whether\" বসে এবং tense past simple হয়।",
        "banglaRule": "Yes/No Question -> Linker \"if/whether\" + Subject + V2।"
    },
    {
        "id": "rs_m_23",
        "topic": "Reported Speech",
        "difficulty": "medium",
        "sentence": "The teacher said, \"The earth is round.\" → The teacher said that the earth ___ round.",
        "options": [
            "is",
            "was",
            "were",
            "had been"
        ],
        "answer": "is",
        "explanation": "চিরন্তন সত্য বা বৈজ্ঞানিক সত্যের tense-এর কোনো পরিবর্তন (backshift) হয় না।",
        "banglaRule": "Universal Truth -> No change in tense।"
    },
    {
        "id": "rs_m_24",
        "topic": "Reported Speech",
        "difficulty": "medium",
        "sentence": "He said, \"I am writing now.\" → He said that he was writing ___.",
        "options": [
            "now",
            "then",
            "today",
            "that day"
        ],
        "answer": "then",
        "explanation": "নিকটবর্তী শব্দ পরিবর্তিত হয়ে দূরবর্তী শব্দ হয় (now → then)।",
        "banglaRule": "Now → Then, Yesterday → The previous day, Tomorrow → The next day।"
    },
    {
        "id": "rs_m_25",
        "topic": "Reported Speech",
        "difficulty": "medium",
        "sentence": "He said, \"I will write a letter.\" → He said that he ___ a letter.",
        "options": [
            "will write",
            "would write",
            "wrote",
            "will be writing"
        ],
        "answer": "would write",
        "explanation": "Reporting verb past tense হলে will/shall → would/should হয়।",
        "banglaRule": "Will → Would (Reported Speech)।"
    },
    {
        "id": "rs_m_26",
        "topic": "Reported Speech",
        "difficulty": "medium",
        "sentence": "She said, \"I have done it.\" → She said that she ___ it.",
        "options": [
            "has done",
            "did",
            "had done",
            "was doing"
        ],
        "answer": "had done",
        "explanation": "Present Perfect (have done) → Past Perfect (had done) হয়।",
        "banglaRule": "Present Perfect → Past Perfect (Reported Speech)।"
    },
    {
        "id": "rs_m_27",
        "topic": "Reported Speech",
        "difficulty": "medium",
        "sentence": "He said, \"I went to Dhaka yesterday.\" → He said that he ___ to Dhaka the previous day.",
        "options": [
            "went",
            "had gone",
            "has gone",
            "would go"
        ],
        "answer": "had gone",
        "explanation": "Past Simple (went) → Past Perfect (had gone) হয়।",
        "banglaRule": "Past Simple → Past Perfect (Reported Speech)।"
    },
    {
        "id": "rs_m_28",
        "topic": "Reported Speech",
        "difficulty": "medium",
        "sentence": "She said to me, \"Help me.\" → She ___ me to help her.",
        "options": [
            "said",
            "told",
            "asked",
            "requested"
        ],
        "answer": "requested",
        "explanation": "অনুরোধমূলক বাক্যে reporting verb \"requested\" বা \"asked\" হয় এবং \"to + V1\" বসে।",
        "banglaRule": "Imperative Indirect = Request/Order/Advise + Object + to + V1।"
    },
    {
        "id": "rs_m_29",
        "topic": "Reported Speech",
        "difficulty": "medium",
        "sentence": "He asked, \"Where are you going?\" → He asked where I ___ going.",
        "options": [
            "am",
            "was",
            "were",
            "is"
        ],
        "answer": "was",
        "explanation": "প্রশ্নবোধক বাক্যে indirect speech-এ syntax সাধারণ বাক্যের মতো হয় (I was, was I নয়)।",
        "banglaRule": "Indirect question has declarative word order (Subject + Verb)।"
    },
    {
        "id": "rs_m_30",
        "topic": "Reported Speech",
        "difficulty": "medium",
        "sentence": "She asked, \"Do you know him?\" → She asked if I ___ him.",
        "options": [
            "know",
            "knew",
            "known",
            "had known"
        ],
        "answer": "knew",
        "explanation": "Yes/No question-এ linker হিসেবে \"if\" বা \"whether\" বসে এবং tense past simple হয়।",
        "banglaRule": "Yes/No Question -> Linker \"if/whether\" + Subject + V2।"
    },
    {
        "id": "rs_m_31",
        "topic": "Reported Speech",
        "difficulty": "medium",
        "sentence": "The teacher said, \"The earth is round.\" → The teacher said that the earth ___ round.",
        "options": [
            "is",
            "was",
            "were",
            "had been"
        ],
        "answer": "is",
        "explanation": "চিরন্তন সত্য বা বৈজ্ঞানিক সত্যের tense-এর কোনো পরিবর্তন (backshift) হয় না।",
        "banglaRule": "Universal Truth -> No change in tense।"
    },
    {
        "id": "rs_m_32",
        "topic": "Reported Speech",
        "difficulty": "medium",
        "sentence": "He said, \"I am writing now.\" → He said that he was writing ___.",
        "options": [
            "now",
            "then",
            "today",
            "that day"
        ],
        "answer": "then",
        "explanation": "নিকটবর্তী শব্দ পরিবর্তিত হয়ে দূরবর্তী শব্দ হয় (now → then)।",
        "banglaRule": "Now → Then, Yesterday → The previous day, Tomorrow → The next day।"
    },
    {
        "id": "rs_m_33",
        "topic": "Reported Speech",
        "difficulty": "medium",
        "sentence": "He said, \"I will write a letter.\" → He said that he ___ a letter.",
        "options": [
            "will write",
            "would write",
            "wrote",
            "will be writing"
        ],
        "answer": "would write",
        "explanation": "Reporting verb past tense হলে will/shall → would/should হয়।",
        "banglaRule": "Will → Would (Reported Speech)।"
    },
    {
        "id": "rs_m_34",
        "topic": "Reported Speech",
        "difficulty": "medium",
        "sentence": "She said, \"I have done it.\" → She said that she ___ it.",
        "options": [
            "has done",
            "did",
            "had done",
            "was doing"
        ],
        "answer": "had done",
        "explanation": "Present Perfect (have done) → Past Perfect (had done) হয়।",
        "banglaRule": "Present Perfect → Past Perfect (Reported Speech)।"
    },
    {
        "id": "rs_m_35",
        "topic": "Reported Speech",
        "difficulty": "medium",
        "sentence": "He said, \"I went to Dhaka yesterday.\" → He said that he ___ to Dhaka the previous day.",
        "options": [
            "went",
            "had gone",
            "has gone",
            "would go"
        ],
        "answer": "had gone",
        "explanation": "Past Simple (went) → Past Perfect (had gone) হয়।",
        "banglaRule": "Past Simple → Past Perfect (Reported Speech)।"
    },
    {
        "id": "rs_m_36",
        "topic": "Reported Speech",
        "difficulty": "medium",
        "sentence": "She said to me, \"Help me.\" → She ___ me to help her.",
        "options": [
            "said",
            "told",
            "asked",
            "requested"
        ],
        "answer": "requested",
        "explanation": "অনুরোধমূলক বাক্যে reporting verb \"requested\" বা \"asked\" হয় এবং \"to + V1\" বসে।",
        "banglaRule": "Imperative Indirect = Request/Order/Advise + Object + to + V1।"
    },
    {
        "id": "rs_m_37",
        "topic": "Reported Speech",
        "difficulty": "medium",
        "sentence": "He asked, \"Where are you going?\" → He asked where I ___ going.",
        "options": [
            "am",
            "was",
            "were",
            "is"
        ],
        "answer": "was",
        "explanation": "প্রশ্নবোধক বাক্যে indirect speech-এ syntax সাধারণ বাক্যের মতো হয় (I was, was I নয়)।",
        "banglaRule": "Indirect question has declarative word order (Subject + Verb)।"
    },
    {
        "id": "rs_m_38",
        "topic": "Reported Speech",
        "difficulty": "medium",
        "sentence": "She asked, \"Do you know him?\" → She asked if I ___ him.",
        "options": [
            "know",
            "knew",
            "known",
            "had known"
        ],
        "answer": "knew",
        "explanation": "Yes/No question-এ linker হিসেবে \"if\" বা \"whether\" বসে এবং tense past simple হয়।",
        "banglaRule": "Yes/No Question -> Linker \"if/whether\" + Subject + V2।"
    },
    {
        "id": "rs_m_39",
        "topic": "Reported Speech",
        "difficulty": "medium",
        "sentence": "The teacher said, \"The earth is round.\" → The teacher said that the earth ___ round.",
        "options": [
            "is",
            "was",
            "were",
            "had been"
        ],
        "answer": "is",
        "explanation": "চিরন্তন সত্য বা বৈজ্ঞানিক সত্যের tense-এর কোনো পরিবর্তন (backshift) হয় না।",
        "banglaRule": "Universal Truth -> No change in tense।"
    },
    {
        "id": "rs_m_40",
        "topic": "Reported Speech",
        "difficulty": "medium",
        "sentence": "He said, \"I am writing now.\" → He said that he was writing ___.",
        "options": [
            "now",
            "then",
            "today",
            "that day"
        ],
        "answer": "then",
        "explanation": "নিকটবর্তী শব্দ পরিবর্তিত হয়ে দূরবর্তী শব্দ হয় (now → then)।",
        "banglaRule": "Now → Then, Yesterday → The previous day, Tomorrow → The next day।"
    },
    {
        "id": "rs_h_1",
        "topic": "Reported Speech",
        "difficulty": "hard",
        "sentence": "He said, \"Let's go for a walk.\" → He suggested that they ___ go for a walk.",
        "options": [
            "should",
            "would",
            "could",
            "might"
        ],
        "answer": "should",
        "explanation": "\"Let's\" থাকলে reporting verb \"suggested/proposed\" হয় এবং linker \"that\" এর পর subject + should বসে।",
        "banglaRule": "Let's / Let us -> Subject + should + V1।"
    },
    {
        "id": "rs_h_2",
        "topic": "Reported Speech",
        "difficulty": "hard",
        "sentence": "She said, \"Alas! I am undone.\" → She exclaimed with sorrow that she ___ undone.",
        "options": [
            "is",
            "was",
            "has been",
            "had been"
        ],
        "answer": "was",
        "explanation": "আবেগসূচক বাক্যে reporting verb \"exclaimed with sorrow/joy\" হয়।",
        "banglaRule": "Exclamatory Indirect = Exclaim with joy/sorrow + that + Subject + Past Tense।"
    },
    {
        "id": "rs_h_3",
        "topic": "Reported Speech",
        "difficulty": "hard",
        "sentence": "He said, \"May you live long.\" → He wished that I ___ live long.",
        "options": [
            "might",
            "may",
            "would",
            "should"
        ],
        "answer": "might",
        "explanation": "ইচ্ছামূলক বাক্যে reporting verb \"wished/prayed\" হয় এবং \"might\" বসে।",
        "banglaRule": "Optative Indirect = Wish/Pray + that + Subject + might + V1।"
    },
    {
        "id": "rs_h_4",
        "topic": "Reported Speech",
        "difficulty": "hard",
        "sentence": "He said, \"I had finished it before they arrived.\" → He said that he ___ it before they arrived.",
        "options": [
            "had finished",
            "finished",
            "has finished",
            "would finish"
        ],
        "answer": "had finished",
        "explanation": "Past Perfect-এর indirect speech-এ tense-এর কোনো পরিবর্তন হয় না।",
        "banglaRule": "Past Perfect -> No backshift in reported speech।"
    },
    {
        "id": "rs_h_5",
        "topic": "Reported Speech",
        "difficulty": "hard",
        "sentence": "She said to him, \"Thank you.\" → She ___ him.",
        "options": [
            "thanked",
            "said thank you",
            "wished thank you",
            "thank"
        ],
        "answer": "thanked",
        "explanation": "\"Thank you\" থাকলে সরাসরি \"subject + thanked + object\" হয়।",
        "banglaRule": "Direct thank expression: Subject + thanked + Object।"
    },
    {
        "id": "rs_h_6",
        "topic": "Reported Speech",
        "difficulty": "hard",
        "sentence": "He said, \"Let's go for a walk.\" → He suggested that they ___ go for a walk.",
        "options": [
            "should",
            "would",
            "could",
            "might"
        ],
        "answer": "should",
        "explanation": "\"Let's\" থাকলে reporting verb \"suggested/proposed\" হয় এবং linker \"that\" এর পর subject + should বসে।",
        "banglaRule": "Let's / Let us -> Subject + should + V1।"
    },
    {
        "id": "rs_h_7",
        "topic": "Reported Speech",
        "difficulty": "hard",
        "sentence": "She said, \"Alas! I am undone.\" → She exclaimed with sorrow that she ___ undone.",
        "options": [
            "is",
            "was",
            "has been",
            "had been"
        ],
        "answer": "was",
        "explanation": "আবেগসূচক বাক্যে reporting verb \"exclaimed with sorrow/joy\" হয়।",
        "banglaRule": "Exclamatory Indirect = Exclaim with joy/sorrow + that + Subject + Past Tense।"
    },
    {
        "id": "rs_h_8",
        "topic": "Reported Speech",
        "difficulty": "hard",
        "sentence": "He said, \"May you live long.\" → He wished that I ___ live long.",
        "options": [
            "might",
            "may",
            "would",
            "should"
        ],
        "answer": "might",
        "explanation": "ইচ্ছামূলক বাক্যে reporting verb \"wished/prayed\" হয় এবং \"might\" বসে।",
        "banglaRule": "Optative Indirect = Wish/Pray + that + Subject + might + V1।"
    },
    {
        "id": "rs_h_9",
        "topic": "Reported Speech",
        "difficulty": "hard",
        "sentence": "He said, \"I had finished it before they arrived.\" → He said that he ___ it before they arrived.",
        "options": [
            "had finished",
            "finished",
            "has finished",
            "would finish"
        ],
        "answer": "had finished",
        "explanation": "Past Perfect-এর indirect speech-এ tense-এর কোনো পরিবর্তন হয় না।",
        "banglaRule": "Past Perfect -> No backshift in reported speech।"
    },
    {
        "id": "rs_h_10",
        "topic": "Reported Speech",
        "difficulty": "hard",
        "sentence": "She said to him, \"Thank you.\" → She ___ him.",
        "options": [
            "thanked",
            "said thank you",
            "wished thank you",
            "thank"
        ],
        "answer": "thanked",
        "explanation": "\"Thank you\" থাকলে সরাসরি \"subject + thanked + object\" হয়।",
        "banglaRule": "Direct thank expression: Subject + thanked + Object।"
    },
    {
        "id": "rs_h_11",
        "topic": "Reported Speech",
        "difficulty": "hard",
        "sentence": "He said, \"Let's go for a walk.\" → He suggested that they ___ go for a walk.",
        "options": [
            "should",
            "would",
            "could",
            "might"
        ],
        "answer": "should",
        "explanation": "\"Let's\" থাকলে reporting verb \"suggested/proposed\" হয় এবং linker \"that\" এর পর subject + should বসে।",
        "banglaRule": "Let's / Let us -> Subject + should + V1।"
    },
    {
        "id": "rs_h_12",
        "topic": "Reported Speech",
        "difficulty": "hard",
        "sentence": "She said, \"Alas! I am undone.\" → She exclaimed with sorrow that she ___ undone.",
        "options": [
            "is",
            "was",
            "has been",
            "had been"
        ],
        "answer": "was",
        "explanation": "আবেগসূচক বাক্যে reporting verb \"exclaimed with sorrow/joy\" হয়।",
        "banglaRule": "Exclamatory Indirect = Exclaim with joy/sorrow + that + Subject + Past Tense।"
    },
    {
        "id": "rs_h_13",
        "topic": "Reported Speech",
        "difficulty": "hard",
        "sentence": "He said, \"May you live long.\" → He wished that I ___ live long.",
        "options": [
            "might",
            "may",
            "would",
            "should"
        ],
        "answer": "might",
        "explanation": "ইচ্ছামূলক বাক্যে reporting verb \"wished/prayed\" হয় এবং \"might\" বসে।",
        "banglaRule": "Optative Indirect = Wish/Pray + that + Subject + might + V1।"
    },
    {
        "id": "rs_h_14",
        "topic": "Reported Speech",
        "difficulty": "hard",
        "sentence": "He said, \"I had finished it before they arrived.\" → He said that he ___ it before they arrived.",
        "options": [
            "had finished",
            "finished",
            "has finished",
            "would finish"
        ],
        "answer": "had finished",
        "explanation": "Past Perfect-এর indirect speech-এ tense-এর কোনো পরিবর্তন হয় না।",
        "banglaRule": "Past Perfect -> No backshift in reported speech।"
    },
    {
        "id": "rs_h_15",
        "topic": "Reported Speech",
        "difficulty": "hard",
        "sentence": "She said to him, \"Thank you.\" → She ___ him.",
        "options": [
            "thanked",
            "said thank you",
            "wished thank you",
            "thank"
        ],
        "answer": "thanked",
        "explanation": "\"Thank you\" থাকলে সরাসরি \"subject + thanked + object\" হয়।",
        "banglaRule": "Direct thank expression: Subject + thanked + Object।"
    },
    {
        "id": "rs_h_16",
        "topic": "Reported Speech",
        "difficulty": "hard",
        "sentence": "He said, \"Let's go for a walk.\" → He suggested that they ___ go for a walk.",
        "options": [
            "should",
            "would",
            "could",
            "might"
        ],
        "answer": "should",
        "explanation": "\"Let's\" থাকলে reporting verb \"suggested/proposed\" হয় এবং linker \"that\" এর পর subject + should বসে।",
        "banglaRule": "Let's / Let us -> Subject + should + V1।"
    },
    {
        "id": "rs_h_17",
        "topic": "Reported Speech",
        "difficulty": "hard",
        "sentence": "She said, \"Alas! I am undone.\" → She exclaimed with sorrow that she ___ undone.",
        "options": [
            "is",
            "was",
            "has been",
            "had been"
        ],
        "answer": "was",
        "explanation": "আবেগসূচক বাক্যে reporting verb \"exclaimed with sorrow/joy\" হয়।",
        "banglaRule": "Exclamatory Indirect = Exclaim with joy/sorrow + that + Subject + Past Tense।"
    },
    {
        "id": "rs_h_18",
        "topic": "Reported Speech",
        "difficulty": "hard",
        "sentence": "He said, \"May you live long.\" → He wished that I ___ live long.",
        "options": [
            "might",
            "may",
            "would",
            "should"
        ],
        "answer": "might",
        "explanation": "ইচ্ছামূলক বাক্যে reporting verb \"wished/prayed\" হয় এবং \"might\" বসে।",
        "banglaRule": "Optative Indirect = Wish/Pray + that + Subject + might + V1।"
    },
    {
        "id": "rs_h_19",
        "topic": "Reported Speech",
        "difficulty": "hard",
        "sentence": "He said, \"I had finished it before they arrived.\" → He said that he ___ it before they arrived.",
        "options": [
            "had finished",
            "finished",
            "has finished",
            "would finish"
        ],
        "answer": "had finished",
        "explanation": "Past Perfect-এর indirect speech-এ tense-এর কোনো পরিবর্তন হয় না।",
        "banglaRule": "Past Perfect -> No backshift in reported speech।"
    },
    {
        "id": "rs_h_20",
        "topic": "Reported Speech",
        "difficulty": "hard",
        "sentence": "She said to him, \"Thank you.\" → She ___ him.",
        "options": [
            "thanked",
            "said thank you",
            "wished thank you",
            "thank"
        ],
        "answer": "thanked",
        "explanation": "\"Thank you\" থাকলে সরাসরি \"subject + thanked + object\" হয়।",
        "banglaRule": "Direct thank expression: Subject + thanked + Object।"
    },
    {
        "id": "pron_e_1",
        "topic": "Pronouns & Determiners",
        "difficulty": "easy",
        "sentence": "He is looking at ___ in the glass.",
        "options": [
            "him",
            "himself",
            "he",
            "his"
        ],
        "answer": "himself",
        "explanation": "Subject এবং Object একই ব্যক্তি হলে reflexive pronoun (himself) বসে।",
        "banglaRule": "Reflexive Pronoun (himself, herself, themselves) - Subject-এর প্রতিফলন।"
    },
    {
        "id": "pron_e_2",
        "topic": "Pronouns & Determiners",
        "difficulty": "easy",
        "sentence": "This is my pen. Where is ___?",
        "options": [
            "your",
            "yours",
            "you",
            "my"
        ],
        "answer": "yours",
        "explanation": "অধিকার বোঝাতে possessive pronoun \"yours\" বসে, যার অর্থ \"your pen\"।",
        "banglaRule": "Possessive Pronoun (yours, mine, hers, theirs) = Possessive Adj + Noun।"
    },
    {
        "id": "pron_e_3",
        "topic": "Pronouns & Determiners",
        "difficulty": "easy",
        "sentence": "He is looking at ___ in the glass.",
        "options": [
            "him",
            "himself",
            "he",
            "his"
        ],
        "answer": "himself",
        "explanation": "Subject এবং Object একই ব্যক্তি হলে reflexive pronoun (himself) বসে।",
        "banglaRule": "Reflexive Pronoun (himself, herself, themselves) - Subject-এর প্রতিফলন।"
    },
    {
        "id": "pron_e_4",
        "topic": "Pronouns & Determiners",
        "difficulty": "easy",
        "sentence": "This is my pen. Where is ___?",
        "options": [
            "your",
            "yours",
            "you",
            "my"
        ],
        "answer": "yours",
        "explanation": "অধিকার বোঝাতে possessive pronoun \"yours\" বসে, যার অর্থ \"your pen\"।",
        "banglaRule": "Possessive Pronoun (yours, mine, hers, theirs) = Possessive Adj + Noun।"
    },
    {
        "id": "pron_e_5",
        "topic": "Pronouns & Determiners",
        "difficulty": "easy",
        "sentence": "He is looking at ___ in the glass.",
        "options": [
            "him",
            "himself",
            "he",
            "his"
        ],
        "answer": "himself",
        "explanation": "Subject এবং Object একই ব্যক্তি হলে reflexive pronoun (himself) বসে।",
        "banglaRule": "Reflexive Pronoun (himself, herself, themselves) - Subject-এর প্রতিফলন।"
    },
    {
        "id": "pron_e_6",
        "topic": "Pronouns & Determiners",
        "difficulty": "easy",
        "sentence": "This is my pen. Where is ___?",
        "options": [
            "your",
            "yours",
            "you",
            "my"
        ],
        "answer": "yours",
        "explanation": "অধিকার বোঝাতে possessive pronoun \"yours\" বসে, যার অর্থ \"your pen\"।",
        "banglaRule": "Possessive Pronoun (yours, mine, hers, theirs) = Possessive Adj + Noun।"
    },
    {
        "id": "pron_e_7",
        "topic": "Pronouns & Determiners",
        "difficulty": "easy",
        "sentence": "He is looking at ___ in the glass.",
        "options": [
            "him",
            "himself",
            "he",
            "his"
        ],
        "answer": "himself",
        "explanation": "Subject এবং Object একই ব্যক্তি হলে reflexive pronoun (himself) বসে।",
        "banglaRule": "Reflexive Pronoun (himself, herself, themselves) - Subject-এর প্রতিফলন।"
    },
    {
        "id": "pron_e_8",
        "topic": "Pronouns & Determiners",
        "difficulty": "easy",
        "sentence": "This is my pen. Where is ___?",
        "options": [
            "your",
            "yours",
            "you",
            "my"
        ],
        "answer": "yours",
        "explanation": "অধিকার বোঝাতে possessive pronoun \"yours\" বসে, যার অর্থ \"your pen\"।",
        "banglaRule": "Possessive Pronoun (yours, mine, hers, theirs) = Possessive Adj + Noun।"
    },
    {
        "id": "pron_e_9",
        "topic": "Pronouns & Determiners",
        "difficulty": "easy",
        "sentence": "He is looking at ___ in the glass.",
        "options": [
            "him",
            "himself",
            "he",
            "his"
        ],
        "answer": "himself",
        "explanation": "Subject এবং Object একই ব্যক্তি হলে reflexive pronoun (himself) বসে।",
        "banglaRule": "Reflexive Pronoun (himself, herself, themselves) - Subject-এর প্রতিফলন।"
    },
    {
        "id": "pron_e_10",
        "topic": "Pronouns & Determiners",
        "difficulty": "easy",
        "sentence": "This is my pen. Where is ___?",
        "options": [
            "your",
            "yours",
            "you",
            "my"
        ],
        "answer": "yours",
        "explanation": "অধিকার বোঝাতে possessive pronoun \"yours\" বসে, যার অর্থ \"your pen\"।",
        "banglaRule": "Possessive Pronoun (yours, mine, hers, theirs) = Possessive Adj + Noun।"
    },
    {
        "id": "pron_e_11",
        "topic": "Pronouns & Determiners",
        "difficulty": "easy",
        "sentence": "He is looking at ___ in the glass.",
        "options": [
            "him",
            "himself",
            "he",
            "his"
        ],
        "answer": "himself",
        "explanation": "Subject এবং Object একই ব্যক্তি হলে reflexive pronoun (himself) বসে।",
        "banglaRule": "Reflexive Pronoun (himself, herself, themselves) - Subject-এর প্রতিফলন।"
    },
    {
        "id": "pron_e_12",
        "topic": "Pronouns & Determiners",
        "difficulty": "easy",
        "sentence": "This is my pen. Where is ___?",
        "options": [
            "your",
            "yours",
            "you",
            "my"
        ],
        "answer": "yours",
        "explanation": "অধিকার বোঝাতে possessive pronoun \"yours\" বসে, যার অর্থ \"your pen\"।",
        "banglaRule": "Possessive Pronoun (yours, mine, hers, theirs) = Possessive Adj + Noun।"
    },
    {
        "id": "pron_e_13",
        "topic": "Pronouns & Determiners",
        "difficulty": "easy",
        "sentence": "He is looking at ___ in the glass.",
        "options": [
            "him",
            "himself",
            "he",
            "his"
        ],
        "answer": "himself",
        "explanation": "Subject এবং Object একই ব্যক্তি হলে reflexive pronoun (himself) বসে।",
        "banglaRule": "Reflexive Pronoun (himself, herself, themselves) - Subject-এর প্রতিফলন।"
    },
    {
        "id": "pron_e_14",
        "topic": "Pronouns & Determiners",
        "difficulty": "easy",
        "sentence": "This is my pen. Where is ___?",
        "options": [
            "your",
            "yours",
            "you",
            "my"
        ],
        "answer": "yours",
        "explanation": "অধিকার বোঝাতে possessive pronoun \"yours\" বসে, যার অর্থ \"your pen\"।",
        "banglaRule": "Possessive Pronoun (yours, mine, hers, theirs) = Possessive Adj + Noun।"
    },
    {
        "id": "pron_e_15",
        "topic": "Pronouns & Determiners",
        "difficulty": "easy",
        "sentence": "He is looking at ___ in the glass.",
        "options": [
            "him",
            "himself",
            "he",
            "his"
        ],
        "answer": "himself",
        "explanation": "Subject এবং Object একই ব্যক্তি হলে reflexive pronoun (himself) বসে।",
        "banglaRule": "Reflexive Pronoun (himself, herself, themselves) - Subject-এর প্রতিফলন।"
    },
    {
        "id": "pron_e_16",
        "topic": "Pronouns & Determiners",
        "difficulty": "easy",
        "sentence": "This is my pen. Where is ___?",
        "options": [
            "your",
            "yours",
            "you",
            "my"
        ],
        "answer": "yours",
        "explanation": "অধিকার বোঝাতে possessive pronoun \"yours\" বসে, যার অর্থ \"your pen\"।",
        "banglaRule": "Possessive Pronoun (yours, mine, hers, theirs) = Possessive Adj + Noun।"
    },
    {
        "id": "pron_e_17",
        "topic": "Pronouns & Determiners",
        "difficulty": "easy",
        "sentence": "He is looking at ___ in the glass.",
        "options": [
            "him",
            "himself",
            "he",
            "his"
        ],
        "answer": "himself",
        "explanation": "Subject এবং Object একই ব্যক্তি হলে reflexive pronoun (himself) বসে।",
        "banglaRule": "Reflexive Pronoun (himself, herself, themselves) - Subject-এর প্রতিফলন।"
    },
    {
        "id": "pron_e_18",
        "topic": "Pronouns & Determiners",
        "difficulty": "easy",
        "sentence": "This is my pen. Where is ___?",
        "options": [
            "your",
            "yours",
            "you",
            "my"
        ],
        "answer": "yours",
        "explanation": "অধিকার বোঝাতে possessive pronoun \"yours\" বসে, যার অর্থ \"your pen\"।",
        "banglaRule": "Possessive Pronoun (yours, mine, hers, theirs) = Possessive Adj + Noun।"
    },
    {
        "id": "pron_e_19",
        "topic": "Pronouns & Determiners",
        "difficulty": "easy",
        "sentence": "He is looking at ___ in the glass.",
        "options": [
            "him",
            "himself",
            "he",
            "his"
        ],
        "answer": "himself",
        "explanation": "Subject এবং Object একই ব্যক্তি হলে reflexive pronoun (himself) বসে।",
        "banglaRule": "Reflexive Pronoun (himself, herself, themselves) - Subject-এর প্রতিফলন।"
    },
    {
        "id": "pron_e_20",
        "topic": "Pronouns & Determiners",
        "difficulty": "easy",
        "sentence": "This is my pen. Where is ___?",
        "options": [
            "your",
            "yours",
            "you",
            "my"
        ],
        "answer": "yours",
        "explanation": "অধিকার বোঝাতে possessive pronoun \"yours\" বসে, যার অর্থ \"your pen\"।",
        "banglaRule": "Possessive Pronoun (yours, mine, hers, theirs) = Possessive Adj + Noun।"
    },
    {
        "id": "pron_e_21",
        "topic": "Pronouns & Determiners",
        "difficulty": "easy",
        "sentence": "He is looking at ___ in the glass.",
        "options": [
            "him",
            "himself",
            "he",
            "his"
        ],
        "answer": "himself",
        "explanation": "Subject এবং Object একই ব্যক্তি হলে reflexive pronoun (himself) বসে।",
        "banglaRule": "Reflexive Pronoun (himself, herself, themselves) - Subject-এর প্রতিফলন।"
    },
    {
        "id": "pron_e_22",
        "topic": "Pronouns & Determiners",
        "difficulty": "easy",
        "sentence": "This is my pen. Where is ___?",
        "options": [
            "your",
            "yours",
            "you",
            "my"
        ],
        "answer": "yours",
        "explanation": "অধিকার বোঝাতে possessive pronoun \"yours\" বসে, যার অর্থ \"your pen\"।",
        "banglaRule": "Possessive Pronoun (yours, mine, hers, theirs) = Possessive Adj + Noun।"
    },
    {
        "id": "pron_e_23",
        "topic": "Pronouns & Determiners",
        "difficulty": "easy",
        "sentence": "He is looking at ___ in the glass.",
        "options": [
            "him",
            "himself",
            "he",
            "his"
        ],
        "answer": "himself",
        "explanation": "Subject এবং Object একই ব্যক্তি হলে reflexive pronoun (himself) বসে।",
        "banglaRule": "Reflexive Pronoun (himself, herself, themselves) - Subject-এর প্রতিফলন।"
    },
    {
        "id": "pron_e_24",
        "topic": "Pronouns & Determiners",
        "difficulty": "easy",
        "sentence": "This is my pen. Where is ___?",
        "options": [
            "your",
            "yours",
            "you",
            "my"
        ],
        "answer": "yours",
        "explanation": "অধিকার বোঝাতে possessive pronoun \"yours\" বসে, যার অর্থ \"your pen\"।",
        "banglaRule": "Possessive Pronoun (yours, mine, hers, theirs) = Possessive Adj + Noun।"
    },
    {
        "id": "pron_e_25",
        "topic": "Pronouns & Determiners",
        "difficulty": "easy",
        "sentence": "He is looking at ___ in the glass.",
        "options": [
            "him",
            "himself",
            "he",
            "his"
        ],
        "answer": "himself",
        "explanation": "Subject এবং Object একই ব্যক্তি হলে reflexive pronoun (himself) বসে।",
        "banglaRule": "Reflexive Pronoun (himself, herself, themselves) - Subject-এর প্রতিফলন।"
    },
    {
        "id": "pron_e_26",
        "topic": "Pronouns & Determiners",
        "difficulty": "easy",
        "sentence": "This is my pen. Where is ___?",
        "options": [
            "your",
            "yours",
            "you",
            "my"
        ],
        "answer": "yours",
        "explanation": "অধিকার বোঝাতে possessive pronoun \"yours\" বসে, যার অর্থ \"your pen\"।",
        "banglaRule": "Possessive Pronoun (yours, mine, hers, theirs) = Possessive Adj + Noun।"
    },
    {
        "id": "pron_e_27",
        "topic": "Pronouns & Determiners",
        "difficulty": "easy",
        "sentence": "He is looking at ___ in the glass.",
        "options": [
            "him",
            "himself",
            "he",
            "his"
        ],
        "answer": "himself",
        "explanation": "Subject এবং Object একই ব্যক্তি হলে reflexive pronoun (himself) বসে।",
        "banglaRule": "Reflexive Pronoun (himself, herself, themselves) - Subject-এর প্রতিফলন।"
    },
    {
        "id": "pron_e_28",
        "topic": "Pronouns & Determiners",
        "difficulty": "easy",
        "sentence": "This is my pen. Where is ___?",
        "options": [
            "your",
            "yours",
            "you",
            "my"
        ],
        "answer": "yours",
        "explanation": "অধিকার বোঝাতে possessive pronoun \"yours\" বসে, যার অর্থ \"your pen\"।",
        "banglaRule": "Possessive Pronoun (yours, mine, hers, theirs) = Possessive Adj + Noun।"
    },
    {
        "id": "pron_e_29",
        "topic": "Pronouns & Determiners",
        "difficulty": "easy",
        "sentence": "He is looking at ___ in the glass.",
        "options": [
            "him",
            "himself",
            "he",
            "his"
        ],
        "answer": "himself",
        "explanation": "Subject এবং Object একই ব্যক্তি হলে reflexive pronoun (himself) বসে।",
        "banglaRule": "Reflexive Pronoun (himself, herself, themselves) - Subject-এর প্রতিফলন।"
    },
    {
        "id": "pron_e_30",
        "topic": "Pronouns & Determiners",
        "difficulty": "easy",
        "sentence": "This is my pen. Where is ___?",
        "options": [
            "your",
            "yours",
            "you",
            "my"
        ],
        "answer": "yours",
        "explanation": "অধিকার বোঝাতে possessive pronoun \"yours\" বসে, যার অর্থ \"your pen\"।",
        "banglaRule": "Possessive Pronoun (yours, mine, hers, theirs) = Possessive Adj + Noun।"
    },
    {
        "id": "pron_m_1",
        "topic": "Pronouns & Determiners",
        "difficulty": "medium",
        "sentence": "There is ___ milk in the fridge.",
        "options": [
            "some",
            "any",
            "many",
            "few"
        ],
        "answer": "some",
        "explanation": "ইতিবাচক বাক্যে uncountable noun-এর সাথে \"some\" বসে।",
        "banglaRule": "Some = ইতিবাচক (affirmative) বাক্য। Any = নেতিবাচক/প্রশ্নবোধক বাক্য।"
    },
    {
        "id": "pron_m_2",
        "topic": "Pronouns & Determiners",
        "difficulty": "medium",
        "sentence": "Do you have ___ questions?",
        "options": [
            "some",
            "any",
            "much",
            "few"
        ],
        "answer": "any",
        "explanation": "প্রশ্নবোধক বাক্যে সাধারণত \"any\" বসে।",
        "banglaRule": "Any in questions and negative statements।"
    },
    {
        "id": "pron_m_3",
        "topic": "Pronouns & Determiners",
        "difficulty": "medium",
        "sentence": "I have ___ friends in London.",
        "options": [
            "a few",
            "a little",
            "much",
            "any"
        ],
        "answer": "a few",
        "explanation": "গণনযোগ্য বহুবচন নামের সাথে \"a few\" বসে।",
        "banglaRule": "A few + Plural Countable Noun. A little + Uncountable Noun।"
    },
    {
        "id": "pron_m_4",
        "topic": "Pronouns & Determiners",
        "difficulty": "medium",
        "sentence": "There is ___ water in the jug.",
        "options": [
            "a little",
            "a few",
            "many",
            "any"
        ],
        "answer": "a little",
        "explanation": "অগণনযোগ্য নামের সাথে \"a little\" বসে।",
        "banglaRule": "A little + Uncountable Noun (water, milk, sand)।"
    },
    {
        "id": "pron_m_5",
        "topic": "Pronouns & Determiners",
        "difficulty": "medium",
        "sentence": "The man ___ wrote this book is famous.",
        "options": [
            "who",
            "which",
            "whom",
            "whose"
        ],
        "answer": "who",
        "explanation": "ব্যক্তির ক্ষেত্রে relative pronoun \"who\" বসে।",
        "banglaRule": "ব্যক্তি = who, বস্তু/প্রাণী = which/that, অধিকার = whose।"
    },
    {
        "id": "pron_m_6",
        "topic": "Pronouns & Determiners",
        "difficulty": "medium",
        "sentence": "The house ___ has a red door is mine.",
        "options": [
            "which",
            "who",
            "whom",
            "whose"
        ],
        "answer": "which",
        "explanation": "বস্তুর ক্ষেত্রে relative pronoun \"which\" বা \"that\" বসে।",
        "banglaRule": "Which/That for things and animals।"
    },
    {
        "id": "pron_m_7",
        "topic": "Pronouns & Determiners",
        "difficulty": "medium",
        "sentence": "This is the boy ___ father is a doctor.",
        "options": [
            "whose",
            "who",
            "whom",
            "which"
        ],
        "answer": "whose",
        "explanation": "মালিকানা বা সম্পর্ক বোঝাতে relative pronoun \"whose\" বসে।",
        "banglaRule": "Whose + Noun = যার/যাদের (possessive relation)।"
    },
    {
        "id": "pron_m_8",
        "topic": "Pronouns & Determiners",
        "difficulty": "medium",
        "sentence": "Between you and ___ , it is a secret.",
        "options": [
            "me",
            "I",
            "my",
            "myself"
        ],
        "answer": "me",
        "explanation": "Preposition (between)-এর পর objective pronoun (me) বসে।",
        "banglaRule": "Preposition + Objective Pronoun (me, him, her, us, them)।"
    },
    {
        "id": "pron_m_9",
        "topic": "Pronouns & Determiners",
        "difficulty": "medium",
        "sentence": "Each candidate must bring ___ own pen.",
        "options": [
            "their",
            "his or her",
            "our",
            "its"
        ],
        "answer": "his or her",
        "explanation": "\"Each\" singular, তাই formal English-এ \"his or her\" বসে।",
        "banglaRule": "Each / Every + Singular Pronoun (his/her)।"
    },
    {
        "id": "pron_m_10",
        "topic": "Pronouns & Determiners",
        "difficulty": "medium",
        "sentence": "He is the man ___ I met yesterday.",
        "options": [
            "whom",
            "who",
            "whose",
            "which"
        ],
        "answer": "whom",
        "explanation": "ব্যক্তির অবজেক্ট হিসেবে \"whom\" বসে।",
        "banglaRule": "Object pronoun for person = whom।"
    },
    {
        "id": "pron_m_11",
        "topic": "Pronouns & Determiners",
        "difficulty": "medium",
        "sentence": "None of the students completed ___ homework.",
        "options": [
            "their",
            "his",
            "her",
            "its"
        ],
        "answer": "their",
        "explanation": "\"None of\"-এর পর সাধারণত plural pronoun \"their\" বসে।",
        "banglaRule": "None of + Plural Pronoun (their) in modern English।"
    },
    {
        "id": "pron_m_12",
        "topic": "Pronouns & Determiners",
        "difficulty": "medium",
        "sentence": "We enjoyed ___ at the party.",
        "options": [
            "ourselves",
            "us",
            "our",
            "ours"
        ],
        "answer": "ourselves",
        "explanation": "আমরা নিজেরাই উপভোগ করেছি → reflexive \"ourselves\" বসে।",
        "banglaRule": "We -> Ourselves, They -> Themselves।"
    },
    {
        "id": "pron_m_13",
        "topic": "Pronouns & Determiners",
        "difficulty": "medium",
        "sentence": "I don't have ___ money.",
        "options": [
            "much",
            "many",
            "few",
            "a few"
        ],
        "answer": "much",
        "explanation": "অগণনযোগ্য নামের নেতিবাচক বাক্যে \"much\" বসে।",
        "banglaRule": "Much + Uncountable (negative/question). Many + Plural Countable।"
    },
    {
        "id": "pron_m_14",
        "topic": "Pronouns & Determiners",
        "difficulty": "medium",
        "sentence": "She has ___ books to read.",
        "options": [
            "many",
            "much",
            "little",
            "a little"
        ],
        "answer": "many",
        "explanation": "গণনযোগ্য নামের সাথে \"many\" বসে।",
        "banglaRule": "Many + Plural Countable Noun।"
    },
    {
        "id": "pron_m_15",
        "topic": "Pronouns & Determiners",
        "difficulty": "medium",
        "sentence": "One should do ___ duty.",
        "options": [
            "one's",
            "his",
            "her",
            "their"
        ],
        "answer": "one's",
        "explanation": "Subject \"one\" হলে possessive \"one's\" হয়।",
        "banglaRule": "One -> One's (not his/her/their)।"
    },
    {
        "id": "pron_m_16",
        "topic": "Pronouns & Determiners",
        "difficulty": "medium",
        "sentence": "There is ___ milk in the fridge.",
        "options": [
            "some",
            "any",
            "many",
            "few"
        ],
        "answer": "some",
        "explanation": "ইতিবাচক বাক্যে uncountable noun-এর সাথে \"some\" বসে।",
        "banglaRule": "Some = ইতিবাচক (affirmative) বাক্য। Any = নেতিবাচক/প্রশ্নবোধক বাক্য।"
    },
    {
        "id": "pron_m_17",
        "topic": "Pronouns & Determiners",
        "difficulty": "medium",
        "sentence": "Do you have ___ questions?",
        "options": [
            "some",
            "any",
            "much",
            "few"
        ],
        "answer": "any",
        "explanation": "প্রশ্নবোধক বাক্যে সাধারণত \"any\" বসে।",
        "banglaRule": "Any in questions and negative statements।"
    },
    {
        "id": "pron_m_18",
        "topic": "Pronouns & Determiners",
        "difficulty": "medium",
        "sentence": "I have ___ friends in London.",
        "options": [
            "a few",
            "a little",
            "much",
            "any"
        ],
        "answer": "a few",
        "explanation": "গণনযোগ্য বহুবচন নামের সাথে \"a few\" বসে।",
        "banglaRule": "A few + Plural Countable Noun. A little + Uncountable Noun।"
    },
    {
        "id": "pron_m_19",
        "topic": "Pronouns & Determiners",
        "difficulty": "medium",
        "sentence": "There is ___ water in the jug.",
        "options": [
            "a little",
            "a few",
            "many",
            "any"
        ],
        "answer": "a little",
        "explanation": "অগণনযোগ্য নামের সাথে \"a little\" বসে।",
        "banglaRule": "A little + Uncountable Noun (water, milk, sand)।"
    },
    {
        "id": "pron_m_20",
        "topic": "Pronouns & Determiners",
        "difficulty": "medium",
        "sentence": "The man ___ wrote this book is famous.",
        "options": [
            "who",
            "which",
            "whom",
            "whose"
        ],
        "answer": "who",
        "explanation": "ব্যক্তির ক্ষেত্রে relative pronoun \"who\" বসে।",
        "banglaRule": "ব্যক্তি = who, বস্তু/প্রাণী = which/that, অধিকার = whose।"
    },
    {
        "id": "pron_m_21",
        "topic": "Pronouns & Determiners",
        "difficulty": "medium",
        "sentence": "The house ___ has a red door is mine.",
        "options": [
            "which",
            "who",
            "whom",
            "whose"
        ],
        "answer": "which",
        "explanation": "বস্তুর ক্ষেত্রে relative pronoun \"which\" বা \"that\" বসে।",
        "banglaRule": "Which/That for things and animals।"
    },
    {
        "id": "pron_m_22",
        "topic": "Pronouns & Determiners",
        "difficulty": "medium",
        "sentence": "This is the boy ___ father is a doctor.",
        "options": [
            "whose",
            "who",
            "whom",
            "which"
        ],
        "answer": "whose",
        "explanation": "মালিকানা বা সম্পর্ক বোঝাতে relative pronoun \"whose\" বসে।",
        "banglaRule": "Whose + Noun = যার/যাদের (possessive relation)।"
    },
    {
        "id": "pron_m_23",
        "topic": "Pronouns & Determiners",
        "difficulty": "medium",
        "sentence": "Between you and ___ , it is a secret.",
        "options": [
            "me",
            "I",
            "my",
            "myself"
        ],
        "answer": "me",
        "explanation": "Preposition (between)-এর পর objective pronoun (me) বসে।",
        "banglaRule": "Preposition + Objective Pronoun (me, him, her, us, them)।"
    },
    {
        "id": "pron_m_24",
        "topic": "Pronouns & Determiners",
        "difficulty": "medium",
        "sentence": "Each candidate must bring ___ own pen.",
        "options": [
            "their",
            "his or her",
            "our",
            "its"
        ],
        "answer": "his or her",
        "explanation": "\"Each\" singular, তাই formal English-এ \"his or her\" বসে।",
        "banglaRule": "Each / Every + Singular Pronoun (his/her)।"
    },
    {
        "id": "pron_m_25",
        "topic": "Pronouns & Determiners",
        "difficulty": "medium",
        "sentence": "He is the man ___ I met yesterday.",
        "options": [
            "whom",
            "who",
            "whose",
            "which"
        ],
        "answer": "whom",
        "explanation": "ব্যক্তির অবজেক্ট হিসেবে \"whom\" বসে।",
        "banglaRule": "Object pronoun for person = whom।"
    },
    {
        "id": "pron_m_26",
        "topic": "Pronouns & Determiners",
        "difficulty": "medium",
        "sentence": "None of the students completed ___ homework.",
        "options": [
            "their",
            "his",
            "her",
            "its"
        ],
        "answer": "their",
        "explanation": "\"None of\"-এর পর সাধারণত plural pronoun \"their\" বসে।",
        "banglaRule": "None of + Plural Pronoun (their) in modern English।"
    },
    {
        "id": "pron_m_27",
        "topic": "Pronouns & Determiners",
        "difficulty": "medium",
        "sentence": "We enjoyed ___ at the party.",
        "options": [
            "ourselves",
            "us",
            "our",
            "ours"
        ],
        "answer": "ourselves",
        "explanation": "আমরা নিজেরাই উপভোগ করেছি → reflexive \"ourselves\" বসে।",
        "banglaRule": "We -> Ourselves, They -> Themselves।"
    },
    {
        "id": "pron_m_28",
        "topic": "Pronouns & Determiners",
        "difficulty": "medium",
        "sentence": "I don't have ___ money.",
        "options": [
            "much",
            "many",
            "few",
            "a few"
        ],
        "answer": "much",
        "explanation": "অগণনযোগ্য নামের নেতিবাচক বাক্যে \"much\" বসে।",
        "banglaRule": "Much + Uncountable (negative/question). Many + Plural Countable।"
    },
    {
        "id": "pron_m_29",
        "topic": "Pronouns & Determiners",
        "difficulty": "medium",
        "sentence": "She has ___ books to read.",
        "options": [
            "many",
            "much",
            "little",
            "a little"
        ],
        "answer": "many",
        "explanation": "গণনযোগ্য নামের সাথে \"many\" বসে।",
        "banglaRule": "Many + Plural Countable Noun।"
    },
    {
        "id": "pron_m_30",
        "topic": "Pronouns & Determiners",
        "difficulty": "medium",
        "sentence": "One should do ___ duty.",
        "options": [
            "one's",
            "his",
            "her",
            "their"
        ],
        "answer": "one's",
        "explanation": "Subject \"one\" হলে possessive \"one's\" হয়।",
        "banglaRule": "One -> One's (not his/her/their)।"
    },
    {
        "id": "pron_h_1",
        "topic": "Pronouns & Determiners",
        "difficulty": "hard",
        "sentence": "He is taller than ___.",
        "options": [
            "me",
            "I",
            "my",
            "myself"
        ],
        "answer": "I",
        "explanation": "আনুষ্ঠানিক তুলনা বা comparative-এ \"than\"-এর পর subject pronoun বসে (than I am)।",
        "banglaRule": "Comparative Comparison: than + Subject Pronoun (informal-এ me চলে, formal-এ I)।"
    },
    {
        "id": "pron_h_2",
        "topic": "Pronouns & Determiners",
        "difficulty": "hard",
        "sentence": "He is smarter than ___.",
        "options": [
            "me",
            "I",
            "my",
            "myself"
        ],
        "answer": "I",
        "explanation": "আনুষ্ঠানিক তুলনা বা comparative-এ \"than\"-এর পর subject pronoun বসে (than I am)।",
        "banglaRule": "Comparative Comparison: than + Subject Pronoun (informal-এ me চলে, formal-এ I)।"
    },
    {
        "id": "pron_h_3",
        "topic": "Pronouns & Determiners",
        "difficulty": "hard",
        "sentence": "___ of the twins was invited.",
        "options": [
            "Neither",
            "None",
            "Any",
            "Both"
        ],
        "answer": "Neither",
        "explanation": "দুইয়ের মধ্যে নেতিবাচক বোঝাতে \"Neither\" এবং দুইয়ের বেশির জন্য \"None\" বসে।",
        "banglaRule": "Neither / Either = ২ জনের মধ্যে। None / Any = ২ এর বেশির মধ্যে।"
    },
    {
        "id": "pron_h_4",
        "topic": "Pronouns & Determiners",
        "difficulty": "hard",
        "sentence": "___ of the brothers was invited.",
        "options": [
            "Neither",
            "None",
            "Any",
            "Both"
        ],
        "answer": "Neither",
        "explanation": "দুইয়ের মধ্যে নেতিবাচক বোঝাতে \"Neither\" এবং দুইয়ের বেশির জন্য \"None\" বসে।",
        "banglaRule": "Neither / Either = ২ জনের মধ্যে। None / Any = ২ এর বেশির মধ্যে।"
    },
    {
        "id": "pron_h_5",
        "topic": "Pronouns & Determiners",
        "difficulty": "hard",
        "sentence": "We have very ___ hope of winning.",
        "options": [
            "little",
            "few",
            "a little",
            "a few"
        ],
        "answer": "little",
        "explanation": "নেতিবাচক অর্থ (নেই বললেই চলে) প্রকাশে আর্টিকল ছাড়া \"little\" বসে।",
        "banglaRule": "Few/Little = নেই বললেই চলে (negative). A few/A little = কিছু আছে (positive)।"
    },
    {
        "id": "pron_h_6",
        "topic": "Pronouns & Determiners",
        "difficulty": "hard",
        "sentence": "We have very ___ chance of winning.",
        "options": [
            "little",
            "few",
            "a little",
            "a few"
        ],
        "answer": "little",
        "explanation": "নেতিবাচক অর্থ (নেই বললেই চলে) প্রকাশে আর্টিকল ছাড়া \"little\" বসে।",
        "banglaRule": "Few/Little = নেই বললেই চলে (negative). A few/A little = কিছু আছে (positive)।"
    },
    {
        "id": "pron_h_7",
        "topic": "Pronouns & Determiners",
        "difficulty": "hard",
        "sentence": "The climate of Dhaka is better than ___ of Sylhet.",
        "options": [
            "that",
            "those",
            "—",
            "the one"
        ],
        "answer": "that",
        "explanation": "একবচন তুলনা পুনরাবৃত্তি এড়াতে \"that\" বসে।",
        "banglaRule": "Singular comparison repeat avoid = that of. Plural = those of।"
    },
    {
        "id": "pron_h_8",
        "topic": "Pronouns & Determiners",
        "difficulty": "hard",
        "sentence": "The air quality of Dhaka is better than ___ of Sylhet.",
        "options": [
            "that",
            "those",
            "—",
            "the one"
        ],
        "answer": "that",
        "explanation": "একবচন তুলনা পুনরাবৃত্তি এড়াতে \"that\" বসে।",
        "banglaRule": "Singular comparison repeat avoid = that of. Plural = those of।"
    },
    {
        "id": "pron_h_9",
        "topic": "Pronouns & Determiners",
        "difficulty": "hard",
        "sentence": "The mangoes of Rajshahi are better than ___ of Dhaka.",
        "options": [
            "those",
            "that",
            "—",
            "them"
        ],
        "answer": "those",
        "explanation": "বহুবচন তুলনা পুনরাবৃত্তি এড়াতে \"those\" বসে।",
        "banglaRule": "Plural comparison repeat avoid = those of।"
    },
    {
        "id": "pron_h_10",
        "topic": "Pronouns & Determiners",
        "difficulty": "hard",
        "sentence": "The apples of Kashmir are better than ___ of Dhaka.",
        "options": [
            "those",
            "that",
            "—",
            "them"
        ],
        "answer": "those",
        "explanation": "বহুবচন তুলনা পুনরাবৃত্তি এড়াতে \"those\" বসে।",
        "banglaRule": "Plural comparison repeat avoid = those of।"
    },
    {
        "id": "gi_e_1",
        "topic": "Gerunds & Infinitives",
        "difficulty": "easy",
        "sentence": "Karim wants ___ a new language.",
        "options": [
            "to learn",
            "learning",
            "learn",
            "learned"
        ],
        "answer": "to learn",
        "explanation": "\"want\" verb-এর পর সবসময় infinitive (to + V1) বসে।",
        "banglaRule": "Decide, want, hope, plan + to-infinitive।"
    },
    {
        "id": "gi_e_2",
        "topic": "Gerunds & Infinitives",
        "difficulty": "easy",
        "sentence": "Sarah wants ___ a new language.",
        "options": [
            "to learn",
            "learning",
            "learn",
            "learned"
        ],
        "answer": "to learn",
        "explanation": "\"want\" verb-এর পর সবসময় infinitive (to + V1) বসে।",
        "banglaRule": "Decide, want, hope, plan + to-infinitive।"
    },
    {
        "id": "gi_e_3",
        "topic": "Gerunds & Infinitives",
        "difficulty": "easy",
        "sentence": "Emily wants ___ a new language.",
        "options": [
            "to learn",
            "learning",
            "learn",
            "learned"
        ],
        "answer": "to learn",
        "explanation": "\"want\" verb-এর পর সবসময় infinitive (to + V1) বসে।",
        "banglaRule": "Decide, want, hope, plan + to-infinitive।"
    },
    {
        "id": "gi_e_4",
        "topic": "Gerunds & Infinitives",
        "difficulty": "easy",
        "sentence": "David wants ___ a new language.",
        "options": [
            "to learn",
            "learning",
            "learn",
            "learned"
        ],
        "answer": "to learn",
        "explanation": "\"want\" verb-এর পর সবসময় infinitive (to + V1) বসে।",
        "banglaRule": "Decide, want, hope, plan + to-infinitive।"
    },
    {
        "id": "gi_e_5",
        "topic": "Gerunds & Infinitives",
        "difficulty": "easy",
        "sentence": "Sumi wants ___ a new language.",
        "options": [
            "to learn",
            "learning",
            "learn",
            "learned"
        ],
        "answer": "to learn",
        "explanation": "\"want\" verb-এর পর সবসময় infinitive (to + V1) বসে।",
        "banglaRule": "Decide, want, hope, plan + to-infinitive।"
    },
    {
        "id": "gi_e_6",
        "topic": "Gerunds & Infinitives",
        "difficulty": "easy",
        "sentence": "Lisa wants ___ a new language.",
        "options": [
            "to learn",
            "learning",
            "learn",
            "learned"
        ],
        "answer": "to learn",
        "explanation": "\"want\" verb-এর পর সবসময় infinitive (to + V1) বসে।",
        "banglaRule": "Decide, want, hope, plan + to-infinitive।"
    },
    {
        "id": "gi_e_7",
        "topic": "Gerunds & Infinitives",
        "difficulty": "easy",
        "sentence": "Kabir wants ___ a new language.",
        "options": [
            "to learn",
            "learning",
            "learn",
            "learned"
        ],
        "answer": "to learn",
        "explanation": "\"want\" verb-এর পর সবসময় infinitive (to + V1) বসে।",
        "banglaRule": "Decide, want, hope, plan + to-infinitive।"
    },
    {
        "id": "gi_e_8",
        "topic": "Gerunds & Infinitives",
        "difficulty": "easy",
        "sentence": "Fahim wants ___ a new language.",
        "options": [
            "to learn",
            "learning",
            "learn",
            "learned"
        ],
        "answer": "to learn",
        "explanation": "\"want\" verb-এর পর সবসময় infinitive (to + V1) বসে।",
        "banglaRule": "Decide, want, hope, plan + to-infinitive।"
    },
    {
        "id": "gi_e_9",
        "topic": "Gerunds & Infinitives",
        "difficulty": "easy",
        "sentence": "Ayesha wants ___ a new language.",
        "options": [
            "to learn",
            "learning",
            "learn",
            "learned"
        ],
        "answer": "to learn",
        "explanation": "\"want\" verb-এর পর সবসময় infinitive (to + V1) বসে।",
        "banglaRule": "Decide, want, hope, plan + to-infinitive।"
    },
    {
        "id": "gi_e_10",
        "topic": "Gerunds & Infinitives",
        "difficulty": "easy",
        "sentence": "John wants ___ a new language.",
        "options": [
            "to learn",
            "learning",
            "learn",
            "learned"
        ],
        "answer": "to learn",
        "explanation": "\"want\" verb-এর পর সবসময় infinitive (to + V1) বসে।",
        "banglaRule": "Decide, want, hope, plan + to-infinitive।"
    },
    {
        "id": "gi_e_11",
        "topic": "Gerunds & Infinitives",
        "difficulty": "easy",
        "sentence": "Maria wants ___ a new language.",
        "options": [
            "to learn",
            "learning",
            "learn",
            "learned"
        ],
        "answer": "to learn",
        "explanation": "\"want\" verb-এর পর সবসময় infinitive (to + V1) বসে।",
        "banglaRule": "Decide, want, hope, plan + to-infinitive।"
    },
    {
        "id": "gi_e_12",
        "topic": "Gerunds & Infinitives",
        "difficulty": "easy",
        "sentence": "Jessica wants ___ a new language.",
        "options": [
            "to learn",
            "learning",
            "learn",
            "learned"
        ],
        "answer": "to learn",
        "explanation": "\"want\" verb-এর পর সবসময় infinitive (to + V1) বসে।",
        "banglaRule": "Decide, want, hope, plan + to-infinitive।"
    },
    {
        "id": "gi_e_13",
        "topic": "Gerunds & Infinitives",
        "difficulty": "easy",
        "sentence": "Alex wants ___ a new language.",
        "options": [
            "to learn",
            "learning",
            "learn",
            "learned"
        ],
        "answer": "to learn",
        "explanation": "\"want\" verb-এর পর সবসময় infinitive (to + V1) বসে।",
        "banglaRule": "Decide, want, hope, plan + to-infinitive।"
    },
    {
        "id": "gi_e_14",
        "topic": "Gerunds & Infinitives",
        "difficulty": "easy",
        "sentence": "Ryan wants ___ a new language.",
        "options": [
            "to learn",
            "learning",
            "learn",
            "learned"
        ],
        "answer": "to learn",
        "explanation": "\"want\" verb-এর পর সবসময় infinitive (to + V1) বসে।",
        "banglaRule": "Decide, want, hope, plan + to-infinitive।"
    },
    {
        "id": "gi_e_15",
        "topic": "Gerunds & Infinitives",
        "difficulty": "easy",
        "sentence": "Sofie wants ___ a new language.",
        "options": [
            "to learn",
            "learning",
            "learn",
            "learned"
        ],
        "answer": "to learn",
        "explanation": "\"want\" verb-এর পর সবসময় infinitive (to + V1) বসে।",
        "banglaRule": "Decide, want, hope, plan + to-infinitive।"
    },
    {
        "id": "gi_e_16",
        "topic": "Gerunds & Infinitives",
        "difficulty": "easy",
        "sentence": "Rahim wants ___ a new language.",
        "options": [
            "to learn",
            "learning",
            "learn",
            "learned"
        ],
        "answer": "to learn",
        "explanation": "\"want\" verb-এর পর সবসময় infinitive (to + V1) বসে।",
        "banglaRule": "Decide, want, hope, plan + to-infinitive।"
    },
    {
        "id": "gi_e_17",
        "topic": "Gerunds & Infinitives",
        "difficulty": "easy",
        "sentence": "Karim wants ___ a new language.",
        "options": [
            "to learn",
            "learning",
            "learn",
            "learned"
        ],
        "answer": "to learn",
        "explanation": "\"want\" verb-এর পর সবসময় infinitive (to + V1) বসে।",
        "banglaRule": "Decide, want, hope, plan + to-infinitive।"
    },
    {
        "id": "gi_e_18",
        "topic": "Gerunds & Infinitives",
        "difficulty": "easy",
        "sentence": "Sarah wants ___ a new language.",
        "options": [
            "to learn",
            "learning",
            "learn",
            "learned"
        ],
        "answer": "to learn",
        "explanation": "\"want\" verb-এর পর সবসময় infinitive (to + V1) বসে।",
        "banglaRule": "Decide, want, hope, plan + to-infinitive।"
    },
    {
        "id": "gi_e_19",
        "topic": "Gerunds & Infinitives",
        "difficulty": "easy",
        "sentence": "Emily wants ___ a new language.",
        "options": [
            "to learn",
            "learning",
            "learn",
            "learned"
        ],
        "answer": "to learn",
        "explanation": "\"want\" verb-এর পর সবসময় infinitive (to + V1) বসে।",
        "banglaRule": "Decide, want, hope, plan + to-infinitive।"
    },
    {
        "id": "gi_e_20",
        "topic": "Gerunds & Infinitives",
        "difficulty": "easy",
        "sentence": "David wants ___ a new language.",
        "options": [
            "to learn",
            "learning",
            "learn",
            "learned"
        ],
        "answer": "to learn",
        "explanation": "\"want\" verb-এর পর সবসময় infinitive (to + V1) বসে।",
        "banglaRule": "Decide, want, hope, plan + to-infinitive।"
    },
    {
        "id": "gi_e_21",
        "topic": "Gerunds & Infinitives",
        "difficulty": "easy",
        "sentence": "Sumi wants ___ a new language.",
        "options": [
            "to learn",
            "learning",
            "learn",
            "learned"
        ],
        "answer": "to learn",
        "explanation": "\"want\" verb-এর পর সবসময় infinitive (to + V1) বসে।",
        "banglaRule": "Decide, want, hope, plan + to-infinitive।"
    },
    {
        "id": "gi_e_22",
        "topic": "Gerunds & Infinitives",
        "difficulty": "easy",
        "sentence": "Lisa wants ___ a new language.",
        "options": [
            "to learn",
            "learning",
            "learn",
            "learned"
        ],
        "answer": "to learn",
        "explanation": "\"want\" verb-এর পর সবসময় infinitive (to + V1) বসে।",
        "banglaRule": "Decide, want, hope, plan + to-infinitive।"
    },
    {
        "id": "gi_e_23",
        "topic": "Gerunds & Infinitives",
        "difficulty": "easy",
        "sentence": "Kabir wants ___ a new language.",
        "options": [
            "to learn",
            "learning",
            "learn",
            "learned"
        ],
        "answer": "to learn",
        "explanation": "\"want\" verb-এর পর সবসময় infinitive (to + V1) বসে।",
        "banglaRule": "Decide, want, hope, plan + to-infinitive।"
    },
    {
        "id": "gi_e_24",
        "topic": "Gerunds & Infinitives",
        "difficulty": "easy",
        "sentence": "Fahim wants ___ a new language.",
        "options": [
            "to learn",
            "learning",
            "learn",
            "learned"
        ],
        "answer": "to learn",
        "explanation": "\"want\" verb-এর পর সবসময় infinitive (to + V1) বসে।",
        "banglaRule": "Decide, want, hope, plan + to-infinitive।"
    },
    {
        "id": "gi_e_25",
        "topic": "Gerunds & Infinitives",
        "difficulty": "easy",
        "sentence": "Ayesha wants ___ a new language.",
        "options": [
            "to learn",
            "learning",
            "learn",
            "learned"
        ],
        "answer": "to learn",
        "explanation": "\"want\" verb-এর পর সবসময় infinitive (to + V1) বসে।",
        "banglaRule": "Decide, want, hope, plan + to-infinitive।"
    },
    {
        "id": "gi_e_26",
        "topic": "Gerunds & Infinitives",
        "difficulty": "easy",
        "sentence": "John wants ___ a new language.",
        "options": [
            "to learn",
            "learning",
            "learn",
            "learned"
        ],
        "answer": "to learn",
        "explanation": "\"want\" verb-এর পর সবসময় infinitive (to + V1) বসে।",
        "banglaRule": "Decide, want, hope, plan + to-infinitive।"
    },
    {
        "id": "gi_e_27",
        "topic": "Gerunds & Infinitives",
        "difficulty": "easy",
        "sentence": "Maria wants ___ a new language.",
        "options": [
            "to learn",
            "learning",
            "learn",
            "learned"
        ],
        "answer": "to learn",
        "explanation": "\"want\" verb-এর পর সবসময় infinitive (to + V1) বসে।",
        "banglaRule": "Decide, want, hope, plan + to-infinitive।"
    },
    {
        "id": "gi_e_28",
        "topic": "Gerunds & Infinitives",
        "difficulty": "easy",
        "sentence": "Jessica wants ___ a new language.",
        "options": [
            "to learn",
            "learning",
            "learn",
            "learned"
        ],
        "answer": "to learn",
        "explanation": "\"want\" verb-এর পর সবসময় infinitive (to + V1) বসে।",
        "banglaRule": "Decide, want, hope, plan + to-infinitive।"
    },
    {
        "id": "gi_e_29",
        "topic": "Gerunds & Infinitives",
        "difficulty": "easy",
        "sentence": "Alex wants ___ a new language.",
        "options": [
            "to learn",
            "learning",
            "learn",
            "learned"
        ],
        "answer": "to learn",
        "explanation": "\"want\" verb-এর পর সবসময় infinitive (to + V1) বসে।",
        "banglaRule": "Decide, want, hope, plan + to-infinitive।"
    },
    {
        "id": "gi_e_30",
        "topic": "Gerunds & Infinitives",
        "difficulty": "easy",
        "sentence": "Ryan wants ___ a new language.",
        "options": [
            "to learn",
            "learning",
            "learn",
            "learned"
        ],
        "answer": "to learn",
        "explanation": "\"want\" verb-এর পর সবসময় infinitive (to + V1) বসে।",
        "banglaRule": "Decide, want, hope, plan + to-infinitive।"
    },
    {
        "id": "gi_m_1",
        "topic": "Gerunds & Infinitives",
        "difficulty": "medium",
        "sentence": "She enjoys ___ novels in her free time.",
        "options": [
            "reading",
            "to read",
            "read",
            "reads"
        ],
        "answer": "reading",
        "explanation": "\"enjoy\" verb-এর পর gerund (V+ing) বসে।",
        "banglaRule": "Enjoy, avoid, mind, finish, practice + Gerund (V-ing)।"
    },
    {
        "id": "gi_m_2",
        "topic": "Gerunds & Infinitives",
        "difficulty": "medium",
        "sentence": "I look forward to ___ from you soon.",
        "options": [
            "hearing",
            "hear",
            "to hear",
            "heard"
        ],
        "answer": "hearing",
        "explanation": "\"look forward to\" ফ্রেজটির পর gerund (V+ing) বসে।",
        "banglaRule": "Prepositional phrase (look forward to, object to) + Gerund (V-ing)।"
    },
    {
        "id": "gi_m_3",
        "topic": "Gerunds & Infinitives",
        "difficulty": "medium",
        "sentence": "He is good at ___ football.",
        "options": [
            "playing",
            "to play",
            "play",
            "played"
        ],
        "answer": "playing",
        "explanation": "Preposition (at)-এর পর verb আসলে gerund (V+ing) হয়।",
        "banglaRule": "Preposition + Gerund (V-ing)।"
    },
    {
        "id": "gi_m_4",
        "topic": "Gerunds & Infinitives",
        "difficulty": "medium",
        "sentence": "We managed ___ the task on time.",
        "options": [
            "to complete",
            "completing",
            "complete",
            "completed"
        ],
        "answer": "to complete",
        "explanation": "\"manage\" verb-এর পর infinitive (to + V1) বসে।",
        "banglaRule": "Manage, agree, refuse + to-infinitive।"
    },
    {
        "id": "gi_m_5",
        "topic": "Gerunds & Infinitives",
        "difficulty": "medium",
        "sentence": "You should avoid ___ junk food.",
        "options": [
            "eating",
            "to eat",
            "eat",
            "eaten"
        ],
        "answer": "eating",
        "explanation": "\"avoid\" এর পর gerund (V+ing) বসে।",
        "banglaRule": "Avoid + Gerund।"
    },
    {
        "id": "gi_m_6",
        "topic": "Gerunds & Infinitives",
        "difficulty": "medium",
        "sentence": "He promised ___ me tomorrow.",
        "options": [
            "to help",
            "helping",
            "help",
            "helped"
        ],
        "answer": "to help",
        "explanation": "\"promise\" এর পর to-infinitive বসে।",
        "banglaRule": "Promise + to-infinitive।"
    },
    {
        "id": "gi_m_7",
        "topic": "Gerunds & Infinitives",
        "difficulty": "medium",
        "sentence": "It's no use ___ about it.",
        "options": [
            "crying",
            "to cry",
            "cry",
            "cried"
        ],
        "answer": "crying",
        "explanation": "\"It's no use\" ফ্রেজটির পর gerund (V+ing) বসে।",
        "banglaRule": "It's no use / It's no good + Gerund (V-ing)।"
    },
    {
        "id": "gi_m_8",
        "topic": "Gerunds & Infinitives",
        "difficulty": "medium",
        "sentence": "He stopped ___ because he was tired.",
        "options": [
            "running",
            "to run",
            "run",
            "ran"
        ],
        "answer": "running",
        "explanation": "কাজটি পুরোপুরি বন্ধ করা অর্থে \"stop + gerund\" বসে।",
        "banglaRule": "Stop + Gerund = কোনো কাজ করা বন্ধ করা। Stop + Infinitive = থামার পর নতুন কাজ করা।"
    },
    {
        "id": "gi_m_9",
        "topic": "Gerunds & Infinitives",
        "difficulty": "medium",
        "sentence": "She stopped ___ some water.",
        "options": [
            "to drink",
            "drinking",
            "drink",
            "drank"
        ],
        "answer": "to drink",
        "explanation": "পানি পানের উদ্দেশ্যে সে থামল বোঝাতে \"stop + infinitive\" বসে।",
        "banglaRule": "উদ্দেশ্য প্রকাশ করতে Stop + to-infinitive।"
    },
    {
        "id": "gi_m_10",
        "topic": "Gerunds & Infinitives",
        "difficulty": "medium",
        "sentence": "I don't mind ___ you.",
        "options": [
            "helping",
            "to help",
            "help",
            "helped"
        ],
        "answer": "helping",
        "explanation": "\"mind\" (আপত্তি করা) এর পর gerund (V+ing) বসে।",
        "banglaRule": "Would you mind / don't mind + Gerund।"
    },
    {
        "id": "gi_m_11",
        "topic": "Gerunds & Infinitives",
        "difficulty": "medium",
        "sentence": "They agreed ___ us.",
        "options": [
            "to support",
            "supporting",
            "support",
            "supported"
        ],
        "answer": "to support",
        "explanation": "\"agree\" এর পর to-infinitive বসে।",
        "banglaRule": "Agree + to-infinitive।"
    },
    {
        "id": "gi_m_12",
        "topic": "Gerunds & Infinitives",
        "difficulty": "medium",
        "sentence": "She is interested in ___ biology.",
        "options": [
            "studying",
            "to study",
            "study",
            "studied"
        ],
        "answer": "studying",
        "explanation": "Preposition \"in\" এর পর gerund বসে।",
        "banglaRule": "Preposition + Gerund।"
    },
    {
        "id": "gi_m_13",
        "topic": "Gerunds & Infinitives",
        "difficulty": "medium",
        "sentence": "He refused ___ the bill.",
        "options": [
            "to pay",
            "paying",
            "pay",
            "paid"
        ],
        "answer": "to pay",
        "explanation": "\"refuse\" এর পর to-infinitive বসে।",
        "banglaRule": "Refuse + to-infinitive।"
    },
    {
        "id": "gi_m_14",
        "topic": "Gerunds & Infinitives",
        "difficulty": "medium",
        "sentence": "I miss ___ in Dhaka.",
        "options": [
            "living",
            "to live",
            "live",
            "lived"
        ],
        "answer": "living",
        "explanation": "\"miss\" (অনুভব করা/হাতছাড়া করা) এর পর gerund বসে।",
        "banglaRule": "Miss + Gerund।"
    },
    {
        "id": "gi_m_15",
        "topic": "Gerunds & Infinitives",
        "difficulty": "medium",
        "sentence": "It is easy ___ this book.",
        "options": [
            "to read",
            "reading",
            "read",
            "reads"
        ],
        "answer": "to read",
        "explanation": "Adjective (easy)-এর পর to-infinitive বসে।",
        "banglaRule": "It is + adjective + to-infinitive।"
    },
    {
        "id": "gi_m_16",
        "topic": "Gerunds & Infinitives",
        "difficulty": "medium",
        "sentence": "She enjoys ___ novels in her free time.",
        "options": [
            "reading",
            "to read",
            "read",
            "reads"
        ],
        "answer": "reading",
        "explanation": "\"enjoy\" verb-এর পর gerund (V+ing) বসে।",
        "banglaRule": "Enjoy, avoid, mind, finish, practice + Gerund (V-ing)।"
    },
    {
        "id": "gi_m_17",
        "topic": "Gerunds & Infinitives",
        "difficulty": "medium",
        "sentence": "I look forward to ___ from you soon.",
        "options": [
            "hearing",
            "hear",
            "to hear",
            "heard"
        ],
        "answer": "hearing",
        "explanation": "\"look forward to\" ফ্রেজটির পর gerund (V+ing) বসে।",
        "banglaRule": "Prepositional phrase (look forward to, object to) + Gerund (V-ing)।"
    },
    {
        "id": "gi_m_18",
        "topic": "Gerunds & Infinitives",
        "difficulty": "medium",
        "sentence": "He is good at ___ football.",
        "options": [
            "playing",
            "to play",
            "play",
            "played"
        ],
        "answer": "playing",
        "explanation": "Preposition (at)-এর পর verb আসলে gerund (V+ing) হয়।",
        "banglaRule": "Preposition + Gerund (V-ing)।"
    },
    {
        "id": "gi_m_19",
        "topic": "Gerunds & Infinitives",
        "difficulty": "medium",
        "sentence": "We managed ___ the task on time.",
        "options": [
            "to complete",
            "completing",
            "complete",
            "completed"
        ],
        "answer": "to complete",
        "explanation": "\"manage\" verb-এর পর infinitive (to + V1) বসে।",
        "banglaRule": "Manage, agree, refuse + to-infinitive।"
    },
    {
        "id": "gi_m_20",
        "topic": "Gerunds & Infinitives",
        "difficulty": "medium",
        "sentence": "You should avoid ___ junk food.",
        "options": [
            "eating",
            "to eat",
            "eat",
            "eaten"
        ],
        "answer": "eating",
        "explanation": "\"avoid\" এর পর gerund (V+ing) বসে।",
        "banglaRule": "Avoid + Gerund।"
    },
    {
        "id": "gi_m_21",
        "topic": "Gerunds & Infinitives",
        "difficulty": "medium",
        "sentence": "He promised ___ me tomorrow.",
        "options": [
            "to help",
            "helping",
            "help",
            "helped"
        ],
        "answer": "to help",
        "explanation": "\"promise\" এর পর to-infinitive বসে।",
        "banglaRule": "Promise + to-infinitive।"
    },
    {
        "id": "gi_m_22",
        "topic": "Gerunds & Infinitives",
        "difficulty": "medium",
        "sentence": "It's no use ___ about it.",
        "options": [
            "crying",
            "to cry",
            "cry",
            "cried"
        ],
        "answer": "crying",
        "explanation": "\"It's no use\" ফ্রেজটির পর gerund (V+ing) বসে।",
        "banglaRule": "It's no use / It's no good + Gerund (V-ing)।"
    },
    {
        "id": "gi_m_23",
        "topic": "Gerunds & Infinitives",
        "difficulty": "medium",
        "sentence": "He stopped ___ because he was tired.",
        "options": [
            "running",
            "to run",
            "run",
            "ran"
        ],
        "answer": "running",
        "explanation": "কাজটি পুরোপুরি বন্ধ করা অর্থে \"stop + gerund\" বসে।",
        "banglaRule": "Stop + Gerund = কোনো কাজ করা বন্ধ করা। Stop + Infinitive = থামার পর নতুন কাজ করা।"
    },
    {
        "id": "gi_m_24",
        "topic": "Gerunds & Infinitives",
        "difficulty": "medium",
        "sentence": "She stopped ___ some water.",
        "options": [
            "to drink",
            "drinking",
            "drink",
            "drank"
        ],
        "answer": "to drink",
        "explanation": "পানি পানের উদ্দেশ্যে সে থামল বোঝাতে \"stop + infinitive\" বসে।",
        "banglaRule": "উদ্দেশ্য প্রকাশ করতে Stop + to-infinitive।"
    },
    {
        "id": "gi_m_25",
        "topic": "Gerunds & Infinitives",
        "difficulty": "medium",
        "sentence": "I don't mind ___ you.",
        "options": [
            "helping",
            "to help",
            "help",
            "helped"
        ],
        "answer": "helping",
        "explanation": "\"mind\" (আপত্তি করা) এর পর gerund (V+ing) বসে।",
        "banglaRule": "Would you mind / don't mind + Gerund।"
    },
    {
        "id": "gi_m_26",
        "topic": "Gerunds & Infinitives",
        "difficulty": "medium",
        "sentence": "They agreed ___ us.",
        "options": [
            "to support",
            "supporting",
            "support",
            "supported"
        ],
        "answer": "to support",
        "explanation": "\"agree\" এর পর to-infinitive বসে।",
        "banglaRule": "Agree + to-infinitive।"
    },
    {
        "id": "gi_m_27",
        "topic": "Gerunds & Infinitives",
        "difficulty": "medium",
        "sentence": "She is interested in ___ biology.",
        "options": [
            "studying",
            "to study",
            "study",
            "studied"
        ],
        "answer": "studying",
        "explanation": "Preposition \"in\" এর পর gerund বসে।",
        "banglaRule": "Preposition + Gerund।"
    },
    {
        "id": "gi_m_28",
        "topic": "Gerunds & Infinitives",
        "difficulty": "medium",
        "sentence": "He refused ___ the bill.",
        "options": [
            "to pay",
            "paying",
            "pay",
            "paid"
        ],
        "answer": "to pay",
        "explanation": "\"refuse\" এর পর to-infinitive বসে।",
        "banglaRule": "Refuse + to-infinitive।"
    },
    {
        "id": "gi_m_29",
        "topic": "Gerunds & Infinitives",
        "difficulty": "medium",
        "sentence": "I miss ___ in Dhaka.",
        "options": [
            "living",
            "to live",
            "live",
            "lived"
        ],
        "answer": "living",
        "explanation": "\"miss\" (অনুভব করা/হাতছাড়া করা) এর পর gerund বসে।",
        "banglaRule": "Miss + Gerund।"
    },
    {
        "id": "gi_m_30",
        "topic": "Gerunds & Infinitives",
        "difficulty": "medium",
        "sentence": "It is easy ___ this book.",
        "options": [
            "to read",
            "reading",
            "read",
            "reads"
        ],
        "answer": "to read",
        "explanation": "Adjective (easy)-এর পর to-infinitive বসে।",
        "banglaRule": "It is + adjective + to-infinitive।"
    },
    {
        "id": "gi_h_1",
        "topic": "Gerunds & Infinitives",
        "difficulty": "hard",
        "sentence": "I remember ___ him last year.",
        "options": [
            "meeting",
            "to meet",
            "meet",
            "met"
        ],
        "answer": "meeting",
        "explanation": "অতীতের স্মৃতি মনে করা অর্থে remember + gerund বসে।",
        "banglaRule": "Remember + Gerund = অতীতের স্মৃতির কথা মনে রাখা। Remember + Infinitive = কাজটির কথা মনে রাখা।"
    },
    {
        "id": "gi_h_2",
        "topic": "Gerunds & Infinitives",
        "difficulty": "hard",
        "sentence": "I remember ___ him last year.",
        "options": [
            "meeting",
            "to meet",
            "meet",
            "met"
        ],
        "answer": "meeting",
        "explanation": "অতীতের স্মৃতি মনে করা অর্থে remember + gerund বসে।",
        "banglaRule": "Remember + Gerund = অতীতের স্মৃতির কথা মনে রাখা। Remember + Infinitive = কাজটির কথা মনে রাখা।"
    },
    {
        "id": "gi_h_3",
        "topic": "Gerunds & Infinitives",
        "difficulty": "hard",
        "sentence": "Please remember ___ the door.",
        "options": [
            "to lock",
            "locking",
            "lock",
            "locked"
        ],
        "answer": "to lock",
        "explanation": "দরজা লক করার কথা মনে রেখো বোঝাতে remember + infinitive বসে।",
        "banglaRule": "ভবিষ্যতের করণীয় কাজ মনে রাখা = Remember + to-infinitive।"
    },
    {
        "id": "gi_h_4",
        "topic": "Gerunds & Infinitives",
        "difficulty": "hard",
        "sentence": "Please remember ___ the gate.",
        "options": [
            "to lock",
            "locking",
            "lock",
            "locked"
        ],
        "answer": "to lock",
        "explanation": "দরজা লক করার কথা মনে রেখো বোঝাতে remember + infinitive বসে।",
        "banglaRule": "ভবিষ্যতের করণীয় কাজ মনে রাখা = Remember + to-infinitive।"
    },
    {
        "id": "gi_h_5",
        "topic": "Gerunds & Infinitives",
        "difficulty": "hard",
        "sentence": "I regret ___ you that the flight is cancelled.",
        "options": [
            "to inform",
            "informing",
            "inform",
            "regretted"
        ],
        "answer": "to inform",
        "explanation": "দুঃখের সাথে কোনো সংবাদ দেওয়া বোঝাতে regret + infinitive বসে।",
        "banglaRule": "Regret + to-infinitive = দুঃখের সাথে জানানো। Regret + Gerund = অতীতের ভুলের অনুশোচনা।"
    },
    {
        "id": "gi_h_6",
        "topic": "Gerunds & Infinitives",
        "difficulty": "hard",
        "sentence": "I regret ___ you that the seminar is cancelled.",
        "options": [
            "to inform",
            "informing",
            "inform",
            "regretted"
        ],
        "answer": "to inform",
        "explanation": "দুঃখের সাথে কোনো সংবাদ দেওয়া বোঝাতে regret + infinitive বসে।",
        "banglaRule": "Regret + to-infinitive = দুঃখের সাথে জানানো। Regret + Gerund = অতীতের ভুলের অনুশোচনা।"
    },
    {
        "id": "gi_h_7",
        "topic": "Gerunds & Infinitives",
        "difficulty": "hard",
        "sentence": "I regret ___ my school days.",
        "options": [
            "wasting",
            "to waste",
            "waste",
            "wasted"
        ],
        "answer": "wasting",
        "explanation": "অতীতের সময়ের অপচয়ের জন্য অনুশোচনা বোঝাতে regret + gerund বসে।",
        "banglaRule": "অতীতের অনুশোচনা = Regret + Gerund (V-ing)।"
    },
    {
        "id": "gi_h_8",
        "topic": "Gerunds & Infinitives",
        "difficulty": "hard",
        "sentence": "I regret ___ my money.",
        "options": [
            "wasting",
            "to waste",
            "waste",
            "wasted"
        ],
        "answer": "wasting",
        "explanation": "অতীতের সময়ের অপচয়ের জন্য অনুশোচনা বোঝাতে regret + gerund বসে।",
        "banglaRule": "অতীতের অনুশোচনা = Regret + Gerund (V-ing)।"
    },
    {
        "id": "gi_h_9",
        "topic": "Gerunds & Infinitives",
        "difficulty": "hard",
        "sentence": "He had his car ___.",
        "options": [
            "washed",
            "wash",
            "washing",
            "to wash"
        ],
        "answer": "washed",
        "explanation": "Causative \"have + object + V3\" (প্যাসিভ অর্থে) বসে।",
        "banglaRule": "Causative Passive: Have + Object + V3 (Past Participle)।"
    },
    {
        "id": "gi_h_10",
        "topic": "Gerunds & Infinitives",
        "difficulty": "hard",
        "sentence": "He had his house ___.",
        "options": [
            "washed",
            "wash",
            "washing",
            "to wash"
        ],
        "answer": "washed",
        "explanation": "Causative \"have + object + V3\" (প্যাসিভ অর্থে) বসে।",
        "banglaRule": "Causative Passive: Have + Object + V3 (Past Participle)।"
    },
    {
        "id": "conj_e_1",
        "topic": "Conjunctions & Connectors",
        "difficulty": "easy",
        "sentence": "She was late ___ it was raining.",
        "options": [
            "and",
            "but",
            "because",
            "although"
        ],
        "answer": "because",
        "explanation": "কারণ দর্শাতে conjunction \"because\" বসে।",
        "banglaRule": "Cause (কারণ) = because / as / since।"
    },
    {
        "id": "conj_e_2",
        "topic": "Conjunctions & Connectors",
        "difficulty": "easy",
        "sentence": "Sarah is small ___ he is very strong.",
        "options": [
            "and",
            "but",
            "or",
            "because"
        ],
        "answer": "but",
        "explanation": "বিপরীতমুখী বৈসাদৃশ্য বোঝাতে conjunction \"but\" বসে।",
        "banglaRule": "Contrast (বৈসাদৃশ্য) = but।"
    },
    {
        "id": "conj_e_3",
        "topic": "Conjunctions & Connectors",
        "difficulty": "easy",
        "sentence": "She was late ___ it was raining.",
        "options": [
            "and",
            "but",
            "because",
            "although"
        ],
        "answer": "because",
        "explanation": "কারণ দর্শাতে conjunction \"because\" বসে।",
        "banglaRule": "Cause (কারণ) = because / as / since।"
    },
    {
        "id": "conj_e_4",
        "topic": "Conjunctions & Connectors",
        "difficulty": "easy",
        "sentence": "David is small ___ he is very strong.",
        "options": [
            "and",
            "but",
            "or",
            "because"
        ],
        "answer": "but",
        "explanation": "বিপরীতমুখী বৈসাদৃশ্য বোঝাতে conjunction \"but\" বসে।",
        "banglaRule": "Contrast (বৈসাদৃশ্য) = but।"
    },
    {
        "id": "conj_e_5",
        "topic": "Conjunctions & Connectors",
        "difficulty": "easy",
        "sentence": "She was late ___ it was raining.",
        "options": [
            "and",
            "but",
            "because",
            "although"
        ],
        "answer": "because",
        "explanation": "কারণ দর্শাতে conjunction \"because\" বসে।",
        "banglaRule": "Cause (কারণ) = because / as / since।"
    },
    {
        "id": "conj_e_6",
        "topic": "Conjunctions & Connectors",
        "difficulty": "easy",
        "sentence": "Lisa is small ___ he is very strong.",
        "options": [
            "and",
            "but",
            "or",
            "because"
        ],
        "answer": "but",
        "explanation": "বিপরীতমুখী বৈসাদৃশ্য বোঝাতে conjunction \"but\" বসে।",
        "banglaRule": "Contrast (বৈসাদৃশ্য) = but।"
    },
    {
        "id": "conj_e_7",
        "topic": "Conjunctions & Connectors",
        "difficulty": "easy",
        "sentence": "She was late ___ it was raining.",
        "options": [
            "and",
            "but",
            "because",
            "although"
        ],
        "answer": "because",
        "explanation": "কারণ দর্শাতে conjunction \"because\" বসে।",
        "banglaRule": "Cause (কারণ) = because / as / since।"
    },
    {
        "id": "conj_e_8",
        "topic": "Conjunctions & Connectors",
        "difficulty": "easy",
        "sentence": "Fahim is small ___ he is very strong.",
        "options": [
            "and",
            "but",
            "or",
            "because"
        ],
        "answer": "but",
        "explanation": "বিপরীতমুখী বৈসাদৃশ্য বোঝাতে conjunction \"but\" বসে।",
        "banglaRule": "Contrast (বৈসাদৃশ্য) = but।"
    },
    {
        "id": "conj_e_9",
        "topic": "Conjunctions & Connectors",
        "difficulty": "easy",
        "sentence": "She was late ___ it was raining.",
        "options": [
            "and",
            "but",
            "because",
            "although"
        ],
        "answer": "because",
        "explanation": "কারণ দর্শাতে conjunction \"because\" বসে।",
        "banglaRule": "Cause (কারণ) = because / as / since।"
    },
    {
        "id": "conj_e_10",
        "topic": "Conjunctions & Connectors",
        "difficulty": "easy",
        "sentence": "John is small ___ he is very strong.",
        "options": [
            "and",
            "but",
            "or",
            "because"
        ],
        "answer": "but",
        "explanation": "বিপরীতমুখী বৈসাদৃশ্য বোঝাতে conjunction \"but\" বসে।",
        "banglaRule": "Contrast (বৈসাদৃশ্য) = but।"
    },
    {
        "id": "conj_e_11",
        "topic": "Conjunctions & Connectors",
        "difficulty": "easy",
        "sentence": "She was late ___ it was raining.",
        "options": [
            "and",
            "but",
            "because",
            "although"
        ],
        "answer": "because",
        "explanation": "কারণ দর্শাতে conjunction \"because\" বসে।",
        "banglaRule": "Cause (কারণ) = because / as / since।"
    },
    {
        "id": "conj_e_12",
        "topic": "Conjunctions & Connectors",
        "difficulty": "easy",
        "sentence": "Jessica is small ___ he is very strong.",
        "options": [
            "and",
            "but",
            "or",
            "because"
        ],
        "answer": "but",
        "explanation": "বিপরীতমুখী বৈসাদৃশ্য বোঝাতে conjunction \"but\" বসে।",
        "banglaRule": "Contrast (বৈসাদৃশ্য) = but।"
    },
    {
        "id": "conj_e_13",
        "topic": "Conjunctions & Connectors",
        "difficulty": "easy",
        "sentence": "She was late ___ it was raining.",
        "options": [
            "and",
            "but",
            "because",
            "although"
        ],
        "answer": "because",
        "explanation": "কারণ দর্শাতে conjunction \"because\" বসে।",
        "banglaRule": "Cause (কারণ) = because / as / since।"
    },
    {
        "id": "conj_e_14",
        "topic": "Conjunctions & Connectors",
        "difficulty": "easy",
        "sentence": "Ryan is small ___ he is very strong.",
        "options": [
            "and",
            "but",
            "or",
            "because"
        ],
        "answer": "but",
        "explanation": "বিপরীতমুখী বৈসাদৃশ্য বোঝাতে conjunction \"but\" বসে।",
        "banglaRule": "Contrast (বৈসাদৃশ্য) = but।"
    },
    {
        "id": "conj_e_15",
        "topic": "Conjunctions & Connectors",
        "difficulty": "easy",
        "sentence": "She was late ___ it was raining.",
        "options": [
            "and",
            "but",
            "because",
            "although"
        ],
        "answer": "because",
        "explanation": "কারণ দর্শাতে conjunction \"because\" বসে।",
        "banglaRule": "Cause (কারণ) = because / as / since।"
    },
    {
        "id": "conj_e_16",
        "topic": "Conjunctions & Connectors",
        "difficulty": "easy",
        "sentence": "Rahim is small ___ he is very strong.",
        "options": [
            "and",
            "but",
            "or",
            "because"
        ],
        "answer": "but",
        "explanation": "বিপরীতমুখী বৈসাদৃশ্য বোঝাতে conjunction \"but\" বসে।",
        "banglaRule": "Contrast (বৈসাদৃশ্য) = but।"
    },
    {
        "id": "conj_e_17",
        "topic": "Conjunctions & Connectors",
        "difficulty": "easy",
        "sentence": "She was late ___ it was raining.",
        "options": [
            "and",
            "but",
            "because",
            "although"
        ],
        "answer": "because",
        "explanation": "কারণ দর্শাতে conjunction \"because\" বসে।",
        "banglaRule": "Cause (কারণ) = because / as / since।"
    },
    {
        "id": "conj_e_18",
        "topic": "Conjunctions & Connectors",
        "difficulty": "easy",
        "sentence": "Sarah is small ___ he is very strong.",
        "options": [
            "and",
            "but",
            "or",
            "because"
        ],
        "answer": "but",
        "explanation": "বিপরীতমুখী বৈসাদৃশ্য বোঝাতে conjunction \"but\" বসে।",
        "banglaRule": "Contrast (বৈসাদৃশ্য) = but।"
    },
    {
        "id": "conj_e_19",
        "topic": "Conjunctions & Connectors",
        "difficulty": "easy",
        "sentence": "She was late ___ it was raining.",
        "options": [
            "and",
            "but",
            "because",
            "although"
        ],
        "answer": "because",
        "explanation": "কারণ দর্শাতে conjunction \"because\" বসে।",
        "banglaRule": "Cause (কারণ) = because / as / since।"
    },
    {
        "id": "conj_e_20",
        "topic": "Conjunctions & Connectors",
        "difficulty": "easy",
        "sentence": "David is small ___ he is very strong.",
        "options": [
            "and",
            "but",
            "or",
            "because"
        ],
        "answer": "but",
        "explanation": "বিপরীতমুখী বৈসাদৃশ্য বোঝাতে conjunction \"but\" বসে।",
        "banglaRule": "Contrast (বৈসাদৃশ্য) = but।"
    },
    {
        "id": "conj_e_21",
        "topic": "Conjunctions & Connectors",
        "difficulty": "easy",
        "sentence": "She was late ___ it was raining.",
        "options": [
            "and",
            "but",
            "because",
            "although"
        ],
        "answer": "because",
        "explanation": "কারণ দর্শাতে conjunction \"because\" বসে।",
        "banglaRule": "Cause (কারণ) = because / as / since।"
    },
    {
        "id": "conj_e_22",
        "topic": "Conjunctions & Connectors",
        "difficulty": "easy",
        "sentence": "Lisa is small ___ he is very strong.",
        "options": [
            "and",
            "but",
            "or",
            "because"
        ],
        "answer": "but",
        "explanation": "বিপরীতমুখী বৈসাদৃশ্য বোঝাতে conjunction \"but\" বসে।",
        "banglaRule": "Contrast (বৈসাদৃশ্য) = but।"
    },
    {
        "id": "conj_e_23",
        "topic": "Conjunctions & Connectors",
        "difficulty": "easy",
        "sentence": "She was late ___ it was raining.",
        "options": [
            "and",
            "but",
            "because",
            "although"
        ],
        "answer": "because",
        "explanation": "কারণ দর্শাতে conjunction \"because\" বসে।",
        "banglaRule": "Cause (কারণ) = because / as / since।"
    },
    {
        "id": "conj_e_24",
        "topic": "Conjunctions & Connectors",
        "difficulty": "easy",
        "sentence": "Fahim is small ___ he is very strong.",
        "options": [
            "and",
            "but",
            "or",
            "because"
        ],
        "answer": "but",
        "explanation": "বিপরীতমুখী বৈসাদৃশ্য বোঝাতে conjunction \"but\" বসে।",
        "banglaRule": "Contrast (বৈসাদৃশ্য) = but।"
    },
    {
        "id": "conj_e_25",
        "topic": "Conjunctions & Connectors",
        "difficulty": "easy",
        "sentence": "She was late ___ it was raining.",
        "options": [
            "and",
            "but",
            "because",
            "although"
        ],
        "answer": "because",
        "explanation": "কারণ দর্শাতে conjunction \"because\" বসে।",
        "banglaRule": "Cause (কারণ) = because / as / since।"
    },
    {
        "id": "conj_e_26",
        "topic": "Conjunctions & Connectors",
        "difficulty": "easy",
        "sentence": "John is small ___ he is very strong.",
        "options": [
            "and",
            "but",
            "or",
            "because"
        ],
        "answer": "but",
        "explanation": "বিপরীতমুখী বৈসাদৃশ্য বোঝাতে conjunction \"but\" বসে।",
        "banglaRule": "Contrast (বৈসাদৃশ্য) = but।"
    },
    {
        "id": "conj_e_27",
        "topic": "Conjunctions & Connectors",
        "difficulty": "easy",
        "sentence": "She was late ___ it was raining.",
        "options": [
            "and",
            "but",
            "because",
            "although"
        ],
        "answer": "because",
        "explanation": "কারণ দর্শাতে conjunction \"because\" বসে।",
        "banglaRule": "Cause (কারণ) = because / as / since।"
    },
    {
        "id": "conj_e_28",
        "topic": "Conjunctions & Connectors",
        "difficulty": "easy",
        "sentence": "Jessica is small ___ he is very strong.",
        "options": [
            "and",
            "but",
            "or",
            "because"
        ],
        "answer": "but",
        "explanation": "বিপরীতমুখী বৈসাদৃশ্য বোঝাতে conjunction \"but\" বসে।",
        "banglaRule": "Contrast (বৈসাদৃশ্য) = but।"
    },
    {
        "id": "conj_e_29",
        "topic": "Conjunctions & Connectors",
        "difficulty": "easy",
        "sentence": "She was late ___ it was raining.",
        "options": [
            "and",
            "but",
            "because",
            "although"
        ],
        "answer": "because",
        "explanation": "কারণ দর্শাতে conjunction \"because\" বসে।",
        "banglaRule": "Cause (কারণ) = because / as / since।"
    },
    {
        "id": "conj_e_30",
        "topic": "Conjunctions & Connectors",
        "difficulty": "easy",
        "sentence": "Ryan is small ___ he is very strong.",
        "options": [
            "and",
            "but",
            "or",
            "because"
        ],
        "answer": "but",
        "explanation": "বিপরীতমুখী বৈসাদৃশ্য বোঝাতে conjunction \"but\" বসে।",
        "banglaRule": "Contrast (বৈসাদৃশ্য) = but।"
    },
    {
        "id": "conj_e_31",
        "topic": "Conjunctions & Connectors",
        "difficulty": "easy",
        "sentence": "She was late ___ it was raining.",
        "options": [
            "and",
            "but",
            "because",
            "although"
        ],
        "answer": "because",
        "explanation": "কারণ দর্শাতে conjunction \"because\" বসে।",
        "banglaRule": "Cause (কারণ) = because / as / since।"
    },
    {
        "id": "conj_e_32",
        "topic": "Conjunctions & Connectors",
        "difficulty": "easy",
        "sentence": "Rahim is small ___ he is very strong.",
        "options": [
            "and",
            "but",
            "or",
            "because"
        ],
        "answer": "but",
        "explanation": "বিপরীতমুখী বৈসাদৃশ্য বোঝাতে conjunction \"but\" বসে।",
        "banglaRule": "Contrast (বৈসাদৃশ্য) = but।"
    },
    {
        "id": "conj_e_33",
        "topic": "Conjunctions & Connectors",
        "difficulty": "easy",
        "sentence": "She was late ___ it was raining.",
        "options": [
            "and",
            "but",
            "because",
            "although"
        ],
        "answer": "because",
        "explanation": "কারণ দর্শাতে conjunction \"because\" বসে।",
        "banglaRule": "Cause (কারণ) = because / as / since।"
    },
    {
        "id": "conj_e_34",
        "topic": "Conjunctions & Connectors",
        "difficulty": "easy",
        "sentence": "Sarah is small ___ he is very strong.",
        "options": [
            "and",
            "but",
            "or",
            "because"
        ],
        "answer": "but",
        "explanation": "বিপরীতমুখী বৈসাদৃশ্য বোঝাতে conjunction \"but\" বসে।",
        "banglaRule": "Contrast (বৈসাদৃশ্য) = but।"
    },
    {
        "id": "conj_e_35",
        "topic": "Conjunctions & Connectors",
        "difficulty": "easy",
        "sentence": "She was late ___ it was raining.",
        "options": [
            "and",
            "but",
            "because",
            "although"
        ],
        "answer": "because",
        "explanation": "কারণ দর্শাতে conjunction \"because\" বসে।",
        "banglaRule": "Cause (কারণ) = because / as / since।"
    },
    {
        "id": "conj_m_1",
        "topic": "Conjunctions & Connectors",
        "difficulty": "medium",
        "sentence": "___ it rained heavily, they went out.",
        "options": [
            "Although",
            "Because",
            "Despite",
            "In spite of"
        ],
        "answer": "Although",
        "explanation": "\"Although\" এর পর subject + verb (clause) বসে।",
        "banglaRule": "Although / Even though + Clause (Subject + Verb)।"
    },
    {
        "id": "conj_m_2",
        "topic": "Conjunctions & Connectors",
        "difficulty": "medium",
        "sentence": "___ the heavy rain, they went out.",
        "options": [
            "Although",
            "Because",
            "Despite",
            "Unless"
        ],
        "answer": "Despite",
        "explanation": "\"Despite\" বা \"In spite of\"-এর পর noun phrase বসে।",
        "banglaRule": "Despite / In spite of + Noun Phrase (no verb)।"
    },
    {
        "id": "conj_m_3",
        "topic": "Conjunctions & Connectors",
        "difficulty": "medium",
        "sentence": "He studied hard; ___ , he failed.",
        "options": [
            "therefore",
            "however",
            "furthermore",
            "consequently"
        ],
        "answer": "however",
        "explanation": "বিপরীত ফলাফল যুক্ত করতে সেমিকোলন ও কমার মাঝে \"however\" বসে।",
        "banglaRule": "Sentence connectors showing contrast = however।"
    },
    {
        "id": "conj_m_4",
        "topic": "Conjunctions & Connectors",
        "difficulty": "medium",
        "sentence": "She was ill; ___ , she could not attend.",
        "options": [
            "however",
            "therefore",
            "although",
            "but"
        ],
        "answer": "therefore",
        "explanation": "ফলাফল বা আদেশ/সিদ্ধান্ত বোঝাতে connector \"therefore\" বসে।",
        "banglaRule": "Sentence connectors showing result = therefore / consequently / thus।"
    },
    {
        "id": "conj_m_5",
        "topic": "Conjunctions & Connectors",
        "difficulty": "medium",
        "sentence": "You must study, ___ you will fail.",
        "options": [
            "or",
            "and",
            "but",
            "so"
        ],
        "answer": "or",
        "explanation": "বিকল্প বা হুমকি প্রকাশে coordinating conjunction \"or\" বা \"otherwise\" বসে।",
        "banglaRule": "Or / Otherwise = অন্যথায়।"
    },
    {
        "id": "conj_m_6",
        "topic": "Conjunctions & Connectors",
        "difficulty": "medium",
        "sentence": "He is not only a writer ___ a singer.",
        "options": [
            "but also",
            "and",
            "but",
            "as well"
        ],
        "answer": "but also",
        "explanation": "\"not only\"-এর সাথে জোড় মিলিয়ে \"but also\" বসে।",
        "banglaRule": "Correlative conjunctions: Not only ... but also।"
    },
    {
        "id": "conj_m_7",
        "topic": "Conjunctions & Connectors",
        "difficulty": "medium",
        "sentence": "No sooner had we left ___ it started raining.",
        "options": [
            "than",
            "then",
            "when",
            "before"
        ],
        "answer": "than",
        "explanation": "\"No sooner had\"-এর জোড় সংযোগকারী হলো \"than\"।",
        "banglaRule": "No sooner had ... than। Scarcely/Hardly had ... when/before।"
    },
    {
        "id": "conj_m_8",
        "topic": "Conjunctions & Connectors",
        "difficulty": "medium",
        "sentence": "___ you work hard, you will succeed.",
        "options": [
            "If",
            "Unless",
            "Although",
            "In case"
        ],
        "answer": "If",
        "explanation": "ইতিবাচক শর্ত প্রকাশে \"If\" বসে।",
        "banglaRule": "If + Subject + Verb (শর্তমূলক বাক্য)।"
    },
    {
        "id": "conj_m_9",
        "topic": "Conjunctions & Connectors",
        "difficulty": "medium",
        "sentence": "___ you work hard, you will fail.",
        "options": [
            "If",
            "Unless",
            "Although",
            "Because"
        ],
        "answer": "Unless",
        "explanation": "নেতিবাচক শর্ত প্রকাশে \"Unless\" (যদি না) বসে।",
        "banglaRule": "Unless = If you do not... (নেতিবাচক শর্ত)।"
    },
    {
        "id": "conj_m_10",
        "topic": "Conjunctions & Connectors",
        "difficulty": "medium",
        "sentence": "He was both a teacher ___ a guide.",
        "options": [
            "and",
            "but",
            "or",
            "as well as"
        ],
        "answer": "and",
        "explanation": "\"both\"-এর সাথে জোড় মিলিয়ে \"and\" বসে।",
        "banglaRule": "Both ... and।"
    },
    {
        "id": "conj_m_11",
        "topic": "Conjunctions & Connectors",
        "difficulty": "medium",
        "sentence": "He speaks ___ he knows everything.",
        "options": [
            "as if",
            "although",
            "because",
            "so that"
        ],
        "answer": "as if",
        "explanation": "কাল্পনিক ভাব বা মনোভাব বোঝাতে \"as if\" বসে।",
        "banglaRule": "As if / As though = যেন।"
    },
    {
        "id": "conj_m_12",
        "topic": "Conjunctions & Connectors",
        "difficulty": "medium",
        "sentence": "He studied hard ___ he could pass the exam.",
        "options": [
            "so that",
            "because",
            "although",
            "unless"
        ],
        "answer": "so that",
        "explanation": "উদ্দেশ্য প্রকাশ করতে \"so that\" বা \"in order that\" বসে।",
        "banglaRule": "So that + subject + can/could + V1 (উদ্দেশ্য)।"
    },
    {
        "id": "conj_m_13",
        "topic": "Conjunctions & Connectors",
        "difficulty": "medium",
        "sentence": "I will go ___ you go.",
        "options": [
            "where",
            "which",
            "whom",
            "whose"
        ],
        "answer": "where",
        "explanation": "স্থান নির্দেশক সংযোজক \"where\" বসে।",
        "banglaRule": "Adverbial clause of place = where।"
    },
    {
        "id": "conj_m_14",
        "topic": "Conjunctions & Connectors",
        "difficulty": "medium",
        "sentence": "She works hard ___ her family.",
        "options": [
            "for",
            "because",
            "so",
            "but"
        ],
        "answer": "for",
        "explanation": "উদ্দেশ্য বা সুবিধা বোঝাতে preposition \"for\" বসে।",
        "banglaRule": "For + Noun (উদ্দেশ্য)।"
    },
    {
        "id": "conj_m_15",
        "topic": "Conjunctions & Connectors",
        "difficulty": "medium",
        "sentence": "Wait here ___ I return.",
        "options": [
            "until",
            "unless",
            "while",
            "as"
        ],
        "answer": "until",
        "explanation": "নির্দিষ্ট সময় পর্যন্ত বোঝাতে \"until\" বসে।",
        "banglaRule": "Until = যে পর্যন্ত না (Negative duration)।"
    },
    {
        "id": "conj_m_16",
        "topic": "Conjunctions & Connectors",
        "difficulty": "medium",
        "sentence": "___ it rained heavily, they went out.",
        "options": [
            "Although",
            "Because",
            "Despite",
            "In spite of"
        ],
        "answer": "Although",
        "explanation": "\"Although\" এর পর subject + verb (clause) বসে।",
        "banglaRule": "Although / Even though + Clause (Subject + Verb)।"
    },
    {
        "id": "conj_m_17",
        "topic": "Conjunctions & Connectors",
        "difficulty": "medium",
        "sentence": "___ the heavy rain, they went out.",
        "options": [
            "Although",
            "Because",
            "Despite",
            "Unless"
        ],
        "answer": "Despite",
        "explanation": "\"Despite\" বা \"In spite of\"-এর পর noun phrase বসে।",
        "banglaRule": "Despite / In spite of + Noun Phrase (no verb)।"
    },
    {
        "id": "conj_m_18",
        "topic": "Conjunctions & Connectors",
        "difficulty": "medium",
        "sentence": "He studied hard; ___ , he failed.",
        "options": [
            "therefore",
            "however",
            "furthermore",
            "consequently"
        ],
        "answer": "however",
        "explanation": "বিপরীত ফলাফল যুক্ত করতে সেমিকোলন ও কমার মাঝে \"however\" বসে।",
        "banglaRule": "Sentence connectors showing contrast = however।"
    },
    {
        "id": "conj_m_19",
        "topic": "Conjunctions & Connectors",
        "difficulty": "medium",
        "sentence": "She was ill; ___ , she could not attend.",
        "options": [
            "however",
            "therefore",
            "although",
            "but"
        ],
        "answer": "therefore",
        "explanation": "ফলাফল বা আদেশ/সিদ্ধান্ত বোঝাতে connector \"therefore\" বসে।",
        "banglaRule": "Sentence connectors showing result = therefore / consequently / thus।"
    },
    {
        "id": "conj_m_20",
        "topic": "Conjunctions & Connectors",
        "difficulty": "medium",
        "sentence": "You must study, ___ you will fail.",
        "options": [
            "or",
            "and",
            "but",
            "so"
        ],
        "answer": "or",
        "explanation": "বিকল্প বা হুমকি প্রকাশে coordinating conjunction \"or\" বা \"otherwise\" বসে।",
        "banglaRule": "Or / Otherwise = অন্যথায়।"
    },
    {
        "id": "conj_m_21",
        "topic": "Conjunctions & Connectors",
        "difficulty": "medium",
        "sentence": "He is not only a writer ___ a singer.",
        "options": [
            "but also",
            "and",
            "but",
            "as well"
        ],
        "answer": "but also",
        "explanation": "\"not only\"-এর সাথে জোড় মিলিয়ে \"but also\" বসে।",
        "banglaRule": "Correlative conjunctions: Not only ... but also।"
    },
    {
        "id": "conj_m_22",
        "topic": "Conjunctions & Connectors",
        "difficulty": "medium",
        "sentence": "No sooner had we left ___ it started raining.",
        "options": [
            "than",
            "then",
            "when",
            "before"
        ],
        "answer": "than",
        "explanation": "\"No sooner had\"-এর জোড় সংযোগকারী হলো \"than\"।",
        "banglaRule": "No sooner had ... than। Scarcely/Hardly had ... when/before।"
    },
    {
        "id": "conj_m_23",
        "topic": "Conjunctions & Connectors",
        "difficulty": "medium",
        "sentence": "___ you work hard, you will succeed.",
        "options": [
            "If",
            "Unless",
            "Although",
            "In case"
        ],
        "answer": "If",
        "explanation": "ইতিবাচক শর্ত প্রকাশে \"If\" বসে।",
        "banglaRule": "If + Subject + Verb (শর্তমূলক বাক্য)।"
    },
    {
        "id": "conj_m_24",
        "topic": "Conjunctions & Connectors",
        "difficulty": "medium",
        "sentence": "___ you work hard, you will fail.",
        "options": [
            "If",
            "Unless",
            "Although",
            "Because"
        ],
        "answer": "Unless",
        "explanation": "নেতিবাচক শর্ত প্রকাশে \"Unless\" (যদি না) বসে।",
        "banglaRule": "Unless = If you do not... (নেতিবাচক শর্ত)।"
    },
    {
        "id": "conj_m_25",
        "topic": "Conjunctions & Connectors",
        "difficulty": "medium",
        "sentence": "He was both a teacher ___ a guide.",
        "options": [
            "and",
            "but",
            "or",
            "as well as"
        ],
        "answer": "and",
        "explanation": "\"both\"-এর সাথে জোড় মিলিয়ে \"and\" বসে।",
        "banglaRule": "Both ... and।"
    },
    {
        "id": "conj_m_26",
        "topic": "Conjunctions & Connectors",
        "difficulty": "medium",
        "sentence": "He speaks ___ he knows everything.",
        "options": [
            "as if",
            "although",
            "because",
            "so that"
        ],
        "answer": "as if",
        "explanation": "কাল্পনিক ভাব বা মনোভাব বোঝাতে \"as if\" বসে।",
        "banglaRule": "As if / As though = যেন।"
    },
    {
        "id": "conj_m_27",
        "topic": "Conjunctions & Connectors",
        "difficulty": "medium",
        "sentence": "He studied hard ___ he could pass the exam.",
        "options": [
            "so that",
            "because",
            "although",
            "unless"
        ],
        "answer": "so that",
        "explanation": "উদ্দেশ্য প্রকাশ করতে \"so that\" বা \"in order that\" বসে।",
        "banglaRule": "So that + subject + can/could + V1 (উদ্দেশ্য)।"
    },
    {
        "id": "conj_m_28",
        "topic": "Conjunctions & Connectors",
        "difficulty": "medium",
        "sentence": "I will go ___ you go.",
        "options": [
            "where",
            "which",
            "whom",
            "whose"
        ],
        "answer": "where",
        "explanation": "স্থান নির্দেশক সংযোজক \"where\" বসে।",
        "banglaRule": "Adverbial clause of place = where।"
    },
    {
        "id": "conj_m_29",
        "topic": "Conjunctions & Connectors",
        "difficulty": "medium",
        "sentence": "She works hard ___ her family.",
        "options": [
            "for",
            "because",
            "so",
            "but"
        ],
        "answer": "for",
        "explanation": "উদ্দেশ্য বা সুবিধা বোঝাতে preposition \"for\" বসে।",
        "banglaRule": "For + Noun (উদ্দেশ্য)।"
    },
    {
        "id": "conj_m_30",
        "topic": "Conjunctions & Connectors",
        "difficulty": "medium",
        "sentence": "Wait here ___ I return.",
        "options": [
            "until",
            "unless",
            "while",
            "as"
        ],
        "answer": "until",
        "explanation": "নির্দিষ্ট সময় পর্যন্ত বোঝাতে \"until\" বসে।",
        "banglaRule": "Until = যে পর্যন্ত না (Negative duration)।"
    },
    {
        "id": "conj_m_31",
        "topic": "Conjunctions & Connectors",
        "difficulty": "medium",
        "sentence": "___ it rained heavily, they went out.",
        "options": [
            "Although",
            "Because",
            "Despite",
            "In spite of"
        ],
        "answer": "Although",
        "explanation": "\"Although\" এর পর subject + verb (clause) বসে।",
        "banglaRule": "Although / Even though + Clause (Subject + Verb)।"
    },
    {
        "id": "conj_m_32",
        "topic": "Conjunctions & Connectors",
        "difficulty": "medium",
        "sentence": "___ the heavy rain, they went out.",
        "options": [
            "Although",
            "Because",
            "Despite",
            "Unless"
        ],
        "answer": "Despite",
        "explanation": "\"Despite\" বা \"In spite of\"-এর পর noun phrase বসে।",
        "banglaRule": "Despite / In spite of + Noun Phrase (no verb)।"
    },
    {
        "id": "conj_m_33",
        "topic": "Conjunctions & Connectors",
        "difficulty": "medium",
        "sentence": "He studied hard; ___ , he failed.",
        "options": [
            "therefore",
            "however",
            "furthermore",
            "consequently"
        ],
        "answer": "however",
        "explanation": "বিপরীত ফলাফল যুক্ত করতে সেমিকোলন ও কমার মাঝে \"however\" বসে।",
        "banglaRule": "Sentence connectors showing contrast = however।"
    },
    {
        "id": "conj_m_34",
        "topic": "Conjunctions & Connectors",
        "difficulty": "medium",
        "sentence": "She was ill; ___ , she could not attend.",
        "options": [
            "however",
            "therefore",
            "although",
            "but"
        ],
        "answer": "therefore",
        "explanation": "ফলাফল বা আদেশ/সিদ্ধান্ত বোঝাতে connector \"therefore\" বসে।",
        "banglaRule": "Sentence connectors showing result = therefore / consequently / thus।"
    },
    {
        "id": "conj_m_35",
        "topic": "Conjunctions & Connectors",
        "difficulty": "medium",
        "sentence": "You must study, ___ you will fail.",
        "options": [
            "or",
            "and",
            "but",
            "so"
        ],
        "answer": "or",
        "explanation": "বিকল্প বা হুমকি প্রকাশে coordinating conjunction \"or\" বা \"otherwise\" বসে।",
        "banglaRule": "Or / Otherwise = অন্যথায়।"
    },
    {
        "id": "conj_h_1",
        "topic": "Conjunctions & Connectors",
        "difficulty": "hard",
        "sentence": "___ of the weather, the match went ahead.",
        "options": [
            "Regardless",
            "Despite",
            "Although",
            "Because"
        ],
        "answer": "Regardless",
        "explanation": "\"Regardless of\" মানে তোয়াক্কা না করে বা শর্তহীনভাবে।",
        "banglaRule": "Regardless of + Noun Phrase = সত্যেও বা উপেক্ষা করে।"
    },
    {
        "id": "conj_h_2",
        "topic": "Conjunctions & Connectors",
        "difficulty": "hard",
        "sentence": "___ of the risk, the match went ahead.",
        "options": [
            "Regardless",
            "Despite",
            "Although",
            "Because"
        ],
        "answer": "Regardless",
        "explanation": "\"Regardless of\" মানে তোয়াক্কা না করে বা শর্তহীনভাবে।",
        "banglaRule": "Regardless of + Noun Phrase = সত্যেও বা উপেক্ষা করে।"
    },
    {
        "id": "conj_h_3",
        "topic": "Conjunctions & Connectors",
        "difficulty": "hard",
        "sentence": "___ had I closed my eyes when the phone rang.",
        "options": [
            "Hardly",
            "No sooner",
            "Scarcely",
            "Almost"
        ],
        "answer": "Hardly",
        "explanation": "\"when\" এর জোড় সংযোগকারী হলো \"Hardly\" বা \"Scarcely\"।",
        "banglaRule": "Hardly / Scarcely had ... when ...।"
    },
    {
        "id": "conj_h_4",
        "topic": "Conjunctions & Connectors",
        "difficulty": "hard",
        "sentence": "___ had I closed my eyes when the alarm went off.",
        "options": [
            "Hardly",
            "No sooner",
            "Scarcely",
            "Almost"
        ],
        "answer": "Hardly",
        "explanation": "\"when\" এর জোড় সংযোগকারী হলো \"Hardly\" বা \"Scarcely\"।",
        "banglaRule": "Hardly / Scarcely had ... when ...।"
    },
    {
        "id": "conj_h_5",
        "topic": "Conjunctions & Connectors",
        "difficulty": "hard",
        "sentence": "He ran fast ___ he should miss the train.",
        "options": [
            "lest",
            "so that",
            "because",
            "unless"
        ],
        "answer": "lest",
        "explanation": "পাছে ভয় হয় বা নেতিবাচক ফলাফল এড়াতে \"lest\" বসে, যার পর \"should\" আসে।",
        "banglaRule": "Lest ... should + V1।"
    },
    {
        "id": "conj_h_6",
        "topic": "Conjunctions & Connectors",
        "difficulty": "hard",
        "sentence": "He ran fast ___ he should miss the bus.",
        "options": [
            "lest",
            "so that",
            "because",
            "unless"
        ],
        "answer": "lest",
        "explanation": "পাছে ভয় হয় বা নেতিবাচক ফলাফল এড়াতে \"lest\" বসে, যার পর \"should\" আসে।",
        "banglaRule": "Lest ... should + V1।"
    },
    {
        "id": "conj_h_7",
        "topic": "Conjunctions & Connectors",
        "difficulty": "hard",
        "sentence": "We will go, ___ it rains or not.",
        "options": [
            "whether",
            "if",
            "unless",
            "although"
        ],
        "answer": "whether",
        "explanation": "\"whether... or not\" একটি ফ্রেজ যা বিকল্প শর্তহীনতা বোঝায়।",
        "banglaRule": "Whether ... or not = হোক বা না হোক।"
    },
    {
        "id": "conj_h_8",
        "topic": "Conjunctions & Connectors",
        "difficulty": "hard",
        "sentence": "We will go, ___ it snows or not.",
        "options": [
            "whether",
            "if",
            "unless",
            "although"
        ],
        "answer": "whether",
        "explanation": "\"whether... or not\" একটি ফ্রেজ যা বিকল্প শর্তহীনতা বোঝায়।",
        "banglaRule": "Whether ... or not = হোক বা না হোক।"
    },
    {
        "id": "conj_h_9",
        "topic": "Conjunctions & Connectors",
        "difficulty": "hard",
        "sentence": "Active: Although he was rich, he was unhappy. → Simple: ___ of his being rich, he was unhappy.",
        "options": [
            "In spite",
            "Despite",
            "Although",
            "Because"
        ],
        "answer": "In spite",
        "explanation": "\"In spite\"-এর পর সবসময় \"of\" বসে, \"Despite\"-এর সাথে বসে না।",
        "banglaRule": "In spite of = Despite (সত্ত্বেও)।"
    },
    {
        "id": "conj_h_10",
        "topic": "Conjunctions & Connectors",
        "difficulty": "hard",
        "sentence": "Active: Although he was famous, he was lonely. → Simple: ___ of his being famous, he was lonely.",
        "options": [
            "In spite",
            "Despite",
            "Although",
            "Because"
        ],
        "answer": "In spite",
        "explanation": "\"In spite\"-এর পর সবসময় \"of\" বসে, \"Despite\"-এর সাথে বসে না।",
        "banglaRule": "In spite of = Despite (সত্ত্বেও)।"
    }
];
