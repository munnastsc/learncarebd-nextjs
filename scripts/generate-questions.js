const fs = require('fs');
const path = require('path');

const grammarQuestions = Array.from({ length: 50 }, (_, i) => ({
    id: `g${i + 1}`,
    question: `Grammar Question ${i + 1}: Select the correct word to complete the sentence.`,
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    answer: 'Option A'
}));

// Override the first few with real examples
grammarQuestions[0] = { id: 'g1', question: 'I ___ to the store yesterday.', options: ['go', 'went', 'gone', 'going'], answer: 'went' };
grammarQuestions[1] = { id: 'g2', question: 'She is interested ___ learning English.', options: ['in', 'on', 'at', 'with'], answer: 'in' };
grammarQuestions[2] = { id: 'g3', question: 'If it rains, we ___ at home.', options: ['stay', 'will stay', 'stayed', 'would stay'], answer: 'will stay' };
grammarQuestions[3] = { id: 'g4', question: 'They ___ here for three years.', options: ['are living', 'lived', 'have lived', 'live'], answer: 'have lived' };
grammarQuestions[4] = { id: 'g5', question: 'He is the man ___ car was stolen.', options: ['who', 'whom', 'whose', 'which'], answer: 'whose' };

const phonicsQuestions = Array.from({ length: 20 }, (_, i) => ({
    id: `p${i + 1}`,
    question: `Phonics Question ${i + 1}: Which word has a different vowel sound?`,
    options: ['Word 1', 'Word 2', 'Word 3'],
    answer: 'Word 3'
}));

phonicsQuestions[0] = { id: 'p1', question: 'Which word has a different vowel sound?', options: ['Cat', 'Bat', 'Car'], answer: 'Car' };
phonicsQuestions[1] = { id: 'p2', question: 'Identify the silent letter in the word "KNIFE"', options: ['K', 'N', 'I', 'E'], answer: 'K' };

const readingPassage = `Once upon a time in a small village, there lived an old man who loved to read. Every day, he would sit under the large oak tree and read books aloud to the children. The children loved listening to his stories because he had a very expressive voice.`;
const readingQuestions = Array.from({ length: 5 }, (_, i) => ({
    id: `r${i + 1}`,
    question: `Reading Q${i + 1}: Based on the passage, what is the answer?`,
    options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
    answer: 'Option 1'
}));
readingQuestions[0] = { id: 'r1', question: 'Where did the old man sit to read?', options: ['Under an apple tree', 'In his house', 'Under a large oak tree', 'In the library'], answer: 'Under a large oak tree' };

const listeningQuestions = Array.from({ length: 10 }, (_, i) => ({
    id: `l${i + 1}`,
    question: `Listening Q${i + 1}: Listen to the audio and select the correct answer.`,
    audioUrl: '', // Placeholder for now, you can add audio URLs
    textPrompt: `[Imagine an audio saying: "The train leaves at 5 PM"]`, // Just text for now if audio is missing
    options: ['4 PM', '5 PM', '6 PM', '7 PM'],
    answer: '5 PM'
}));

const translationQuestions = [
    { id: 't1', type: 'b2e', question: 'আমি ভাত খাই।' },
    { id: 't2', type: 'b2e', question: 'সে গতকাল স্কুলে যায় নি।' },
    { id: 't3', type: 'b2e', question: 'তুমি কি কখনো কক্সবাজার গিয়েছ?' },
    { id: 't4', type: 'b2e', question: 'বৃষ্টি হচ্ছে।' },
    { id: 't5', type: 'b2e', question: 'আমি এই বইটি খুঁজছিলাম।' },
    { id: 't6', type: 'e2b', question: 'He has been reading since morning.' },
    { id: 't7', type: 'e2b', question: 'I would rather die than beg.' },
    { id: 't8', type: 'e2b', question: 'It is time we changed our bad habits.' },
    { id: 't9', type: 'e2b', question: 'As soon as he saw the police, he ran away.' },
    { id: 't10', type: 'e2b', question: 'Knowledge is power.' },
];

const liveReadingPassages = [
    { id: 'lr1', title: 'Passage 1', content: 'English is considered an international language. It is spoken all over the world. To get a good job and communicate globally, learning English is essential.' },
    { id: 'lr2', title: 'Passage 2', content: 'Technology has changed the way we live. Today, we can connect with people instantly. However, it also has some negative impacts on our social lives.' },
    { id: 'lr3', title: 'Passage 3', content: 'Health is wealth. Without good health, money has no value. We should eat nutritious food and exercise daily to maintain our health.' },
    { id: 'lr4', title: 'Passage 4', content: 'Reading books is a wonderful habit. It expands our knowledge, improves our vocabulary, and helps us relax after a long day.' },
    { id: 'lr5', title: 'Passage 5', content: 'Global warming is a serious issue. The temperature of the earth is rising due to greenhouse gases. We must plant more trees to save our planet.' },
];

const fileContent = `
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

export const grammarQuestions: Question[] = ${JSON.stringify(grammarQuestions, null, 4)};

export const phonicsQuestions: Question[] = ${JSON.stringify(phonicsQuestions, null, 4)};

export const readingPassage = \`${readingPassage}\`;
export const readingQuestions: Question[] = ${JSON.stringify(readingQuestions, null, 4)};

export const listeningQuestions: ListeningQuestion[] = ${JSON.stringify(listeningQuestions, null, 4)};

export const translationQuestions: TranslationQuestion[] = ${JSON.stringify(translationQuestions, null, 4)};

export const liveReadingPassages: LiveReadingPassage[] = ${JSON.stringify(liveReadingPassages, null, 4)};
`;

const dir = 'src/data';
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}
fs.writeFileSync(path.join(dir, 'level-test-questions.ts'), fileContent);
console.log('Successfully created level-test-questions.ts');
