const fs = require('fs');
const path = require('path');

const grammarQuestions = [
    { q: "I ___ to the market yesterday.", o: ["go", "went", "gone", "going"], a: "went" },
    { q: "She ___ playing tennis right now.", o: ["is", "are", "am", "be"], a: "is" },
    { q: "They have ___ in this city for 10 years.", o: ["live", "lives", "lived", "living"], a: "lived" },
    { q: "If it rains, we ___ at home.", o: ["stay", "will stay", "stayed", "would stay"], a: "will stay" },
    { q: "He is the boy ___ won the first prize.", o: ["who", "whom", "whose", "which"], a: "who" },
    { q: "I haven't seen him ___ last month.", o: ["for", "since", "from", "in"], a: "since" },
    { q: "She can speak English fluently, ___ she?", o: ["can", "can't", "does", "doesn't"], a: "can't" },
    { q: "___ you ever been to London?", o: ["Have", "Has", "Did", "Are"], a: "Have" },
    { q: "The book is ___ the table.", o: ["in", "on", "at", "over"], a: "on" },
    { q: "I look forward to ___ you soon.", o: ["see", "seeing", "saw", "seen"], a: "seeing" },
    { q: "He doesn't have ___ money left.", o: ["some", "any", "many", "few"], a: "any" },
    { q: "She usually ___ up at 6 AM.", o: ["wake", "wakes", "woke", "waking"], a: "wakes" },
    { q: "Neither John ___ Mary came to the party.", o: ["or", "nor", "and", "but"], a: "nor" },
    { q: "By this time next year, I ___ my degree.", o: ["will finish", "will have finished", "finished", "finish"], a: "will have finished" },
    { q: "It's time you ___ to bed.", o: ["go", "went", "gone", "going"], a: "went" },
    { q: "I prefer tea ___ coffee.", o: ["than", "to", "over", "from"], a: "to" },
    { q: "He is ___ honest man.", o: ["a", "an", "the", "no article"], a: "an" },
    { q: "They made him ___ the room.", o: ["clean", "to clean", "cleaned", "cleaning"], a: "clean" },
    { q: "You had better ___ a doctor.", o: ["consult", "to consult", "consulted", "consulting"], a: "consult" },
    { q: "No sooner had he left ___ it started raining.", o: ["when", "then", "than", "and"], a: "than" },
    { q: "I wish I ___ a bird.", o: ["was", "were", "am", "be"], a: "were" },
    { q: "He works hard lest he ___ fail.", o: ["should", "would", "may", "can"], a: "should" },
    { q: "Despite ___ sick, he went to work.", o: ["he was", "being", "of being", "was"], a: "being" },
    { q: "Let's go for a walk, ___?", o: ["shall we", "will you", "don't we", "aren't we"], a: "shall we" },
    { q: "Do you know where ___?", o: ["does he live", "he lives", "did he live", "he live"], a: "he lives" },
    { q: "He is so weak that he ___ walk.", o: ["can", "cannot", "could", "could not"], a: "cannot" },
    { q: "I am used to ___ early.", o: ["wake up", "waking up", "woke up", "waken up"], a: "waking up" },
    { q: "If I had known, I ___ helped you.", o: ["will have", "would have", "had", "have"], a: "would have" },
    { q: "The scenery of Kashmir ___ very beautiful.", o: ["is", "are", "were", "have been"], a: "is" },
    { q: "Fifty miles ___ a long distance.", o: ["is", "are", "were", "have"], a: "is" },
    { q: "One of the boys ___ absent yesterday.", o: ["was", "were", "is", "are"], a: "was" },
    { q: "Each of the girls ___ given a prize.", o: ["was", "were", "have", "are"], a: "was" },
    { q: "A number of students ___ present.", o: ["is", "are", "was", "has"], a: "are" },
    { q: "The number of students ___ fifty.", o: ["is", "are", "were", "have"], a: "is" },
    { q: "Bread and butter ___ my favorite breakfast.", o: ["is", "are", "were", "have"], a: "is" },
    { q: "Slow and steady ___ the race.", o: ["win", "wins", "won", "winning"], a: "wins" },
    { q: "Time and tide ___ for none.", o: ["wait", "waits", "waited", "waiting"], a: "wait" },
    { q: "It is I who ___ to blame.", o: ["is", "am", "are", "was"], a: "am" },
    { q: "He as well as his friends ___ guilty.", o: ["is", "are", "were", "have"], a: "is" },
    { q: "Not only he but also his brothers ___ present.", o: ["was", "were", "is", "has"], a: "were" },
    { q: "Either you or he ___ to go.", o: ["has", "have", "are", "were"], a: "has" },
    { q: "Neither of them ___ qualified.", o: ["is", "are", "were", "have"], a: "is" },
    { q: "Many a man ___ died in the war.", o: ["has", "have", "are", "were"], a: "has" },
    { q: "More than one person ___ involved.", o: ["was", "were", "are", "have"], a: "was" },
    { q: "Half of the mangoes ___ rotten.", o: ["is", "are", "was", "has"], a: "are" },
    { q: "Two-thirds of the work ___ been done.", o: ["has", "have", "are", "were"], a: "has" },
    { q: "The jury ___ divided in their opinion.", o: ["was", "were", "is", "has"], a: "were" },
    { q: "The committee ___ formed last year.", o: ["was", "were", "are", "have"], a: "was" },
    { q: "Information ___ power.", o: ["is", "are", "were", "have"], a: "is" },
    { q: "The police ___ searching for the thief.", o: ["is", "are", "was", "has"], a: "are" }
].map((item, i) => ({
    id: `g${i + 1}`,
    question: item.q,
    options: item.o,
    answer: item.a
}));

const phonicsQuestions = [
    { q: "Which word has a different vowel sound?", o: ["Cat", "Bat", "Car"], a: "Car" },
    { q: "Identify the silent letter in the word 'KNOWLEDGE'", o: ["K", "N", "W", "L"], a: "K" },
    { q: "Which word rhymes with 'Light'?", o: ["Bite", "Late", "Lit"], a: "Bite" },
    { q: "What is the vowel sound in the word 'Tree'?", o: ["Short E", "Long E", "Short I"], a: "Long E" },
    { q: "Which word contains a short 'a' sound?", o: ["Cake", "Apple", "Car"], a: "Apple" },
    { q: "Identify the silent letter in 'HONEST'", o: ["H", "O", "E", "T"], a: "H" },
    { q: "Which word has the same vowel sound as 'Boat'?", o: ["Coat", "Boot", "Bout"], a: "Coat" },
    { q: "What sound does 'ch' make in 'School'?", o: ["/ch/", "/sh/", "/k/"], a: "/k/" },
    { q: "Which word ends with a /z/ sound?", o: ["Cats", "Dogs", "Books"], a: "Dogs" },
    { q: "Identify the silent letter in 'ISLAND'", o: ["I", "S", "L", "A"], a: "S" },
    { q: "Which word has a different vowel sound?", o: ["Meet", "Seat", "Great"], a: "Great" },
    { q: "What is the vowel sound in 'Moon'?", o: ["Long U", "Short U", "Long O"], a: "Long U" },
    { q: "Which word contains the /θ/ (voiceless th) sound?", o: ["This", "That", "Think"], a: "Think" },
    { q: "Identify the silent letter in 'WRIST'", o: ["W", "R", "I", "S"], a: "W" },
    { q: "Which word has the same vowel sound as 'Bird'?", o: ["Word", "Board", "Beard"], a: "Word" },
    { q: "What sound does 'ed' make in 'Played'?", o: ["/t/", "/d/", "/id/"], a: "/d/" },
    { q: "Which word has a different vowel sound?", o: ["Put", "Cut", "Hut"], a: "Put" },
    { q: "Identify the silent letter in 'COMB'", o: ["C", "O", "M", "B"], a: "B" },
    { q: "Which word contains the /ʃ/ (sh) sound?", o: ["Machine", "Match", "Much"], a: "Machine" },
    { q: "What is the vowel sound in 'Boy'?", o: ["/ɔɪ/", "/aɪ/", "/eɪ/"], a: "/ɔɪ/" }
].map((item, i) => ({
    id: `p${i + 1}`,
    question: item.q,
    options: item.o,
    answer: item.a
}));

const readingPassage = `Marie Curie was a pioneering physicist and chemist. Born in Poland in 1867, she moved to Paris to study. She is famous for her work on radioactivity and was the first woman to win a Nobel Prize. She actually won it twice, in two different sciences: Physics and Chemistry. Despite her brilliant mind, she faced many challenges because she was a woman in a male-dominated field. However, her dedication to science never wavered. Her discoveries have had a profound impact on medicine, especially in the treatment of cancer.`;
const readingQuestions = [
    { q: "Where was Marie Curie born?", o: ["Paris", "Poland", "London", "Berlin"], a: "Poland" },
    { q: "What is Marie Curie famous for?", o: ["Discovering electricity", "Work on radioactivity", "Inventing the telephone", "Studying biology"], a: "Work on radioactivity" },
    { q: "How many Nobel Prizes did she win?", o: ["One", "Two", "Three", "None"], a: "Two" },
    { q: "What fields of science did she win her Nobel Prizes in?", o: ["Physics and Biology", "Chemistry and Medicine", "Physics and Chemistry", "Mathematics and Physics"], a: "Physics and Chemistry" },
    { q: "What major impact did her discoveries have?", o: ["They helped invent the computer", "They changed how we travel", "They improved cancer treatment", "They advanced space exploration"], a: "They improved cancer treatment" }
].map((item, i) => ({
    id: `r${i + 1}`,
    question: item.q,
    options: item.o,
    answer: item.a
}));

const listeningQuestions = [
    { q: "Listen to the prompt: 'The train departs at 3:15 PM.' When does the train leave?", prompt: "Audio Script: 'The train departs at 3:15 PM.'", o: ["3:00 PM", "3:15 PM", "3:30 PM", "3:45 PM"], a: "3:15 PM" },
    { q: "Listen to the prompt: 'I will meet you outside the library.' Where will they meet?", prompt: "Audio Script: 'I will meet you outside the library.'", o: ["Inside the library", "At the cafe", "Outside the library", "In the park"], a: "Outside the library" },
    { q: "Listen to the prompt: 'She bought two apples and three oranges.' How many fruits did she buy in total?", prompt: "Audio Script: 'She bought two apples and three oranges.'", o: ["Two", "Three", "Five", "Six"], a: "Five" },
    { q: "Listen to the prompt: 'The meeting has been postponed to Friday.' When is the new meeting date?", prompt: "Audio Script: 'The meeting has been postponed to Friday.'", o: ["Monday", "Wednesday", "Thursday", "Friday"], a: "Friday" },
    { q: "Listen to the prompt: 'He is wearing a blue shirt and black pants.' What color is his shirt?", prompt: "Audio Script: 'He is wearing a blue shirt and black pants.'", o: ["Blue", "Black", "White", "Red"], a: "Blue" },
    { q: "Listen to the prompt: 'The weather will be sunny tomorrow.' What will the weather be like?", prompt: "Audio Script: 'The weather will be sunny tomorrow.'", o: ["Rainy", "Cloudy", "Sunny", "Snowy"], a: "Sunny" },
    { q: "Listen to the prompt: 'Please turn off your mobile phones.' What is requested?", prompt: "Audio Script: 'Please turn off your mobile phones.'", o: ["Turn on phones", "Turn off phones", "Use phones quietly", "Leave phones at home"], a: "Turn off phones" },
    { q: "Listen to the prompt: 'The concert tickets cost $50 each.' How much is one ticket?", prompt: "Audio Script: 'The concert tickets cost $50 each.'", o: ["$15", "$50", "$500", "$5"], a: "$50" },
    { q: "Listen to the prompt: 'My favorite subject is history.' What is their favorite subject?", prompt: "Audio Script: 'My favorite subject is history.'", o: ["Math", "Science", "History", "English"], a: "History" },
    { q: "Listen to the prompt: 'Don't forget to lock the door.' What should you remember to do?", prompt: "Audio Script: 'Don't forget to lock the door.'", o: ["Open the door", "Lock the door", "Clean the door", "Paint the door"], a: "Lock the door" }
].map((item, i) => ({
    id: `l${i + 1}`,
    question: item.q,
    audioUrl: '',
    textPrompt: item.prompt,
    options: item.o,
    answer: item.a
}));

const translationQuestions = [
    { id: 't1', type: 'b2e', question: 'আমি প্রতিদিন সকালে খবরের কাগজ পড়ি।' },
    { id: 't2', type: 'b2e', question: 'সে কি গতকাল স্কুলে গিয়েছিল?' },
    { id: 't3', type: 'b2e', question: 'বৃষ্টি শুরু হওয়ার আগেই আমরা বাড়ি পৌঁছেছিলাম।' },
    { id: 't4', type: 'b2e', question: 'তুমি কি কখনো লন্ডন গিয়েছ?' },
    { id: 't5', type: 'b2e', question: 'আমি যদি পাখি হতাম, আকাশে উড়তাম।' },
    { id: 't6', type: 'e2b', question: 'He has been suffering from fever for three days.' },
    { id: 't7', type: 'e2b', question: 'It is high time we changed our bad habits.' },
    { id: 't8', type: 'e2b', question: 'No sooner had I reached the station than the train left.' },
    { id: 't9', type: 'e2b', question: 'Honesty is the best policy.' },
    { id: 't10', type: 'e2b', question: 'I am looking forward to hearing from you.' },
];

const liveReadingPassages = [
    { id: 'lr1', title: 'Passage 1: Global Language', content: 'English is widely spoken around the world. It serves as a global bridge, connecting people from different cultures and backgrounds. Mastering it can open doors to numerous opportunities.' },
    { id: 'lr2', title: 'Passage 2: Technology', content: 'In today’s digital age, technology is advancing at an unprecedented pace. It has revolutionized the way we work, communicate, and learn, making information instantly accessible.' },
    { id: 'lr3', title: 'Passage 3: Environment', content: 'Protecting the environment is crucial for future generations. Simple actions like recycling, reducing plastic use, and planting trees can make a significant difference in combating climate change.' },
    { id: 'lr4', title: 'Passage 4: Health', content: 'Maintaining a balanced diet and exercising regularly are key to a healthy life. Physical activity not only strengthens the body but also improves mental well-being.' },
    { id: 'lr5', title: 'Passage 5: Reading', content: 'Reading is a journey of the mind. It allows us to explore new worlds, understand different perspectives, and continuously expand our horizons and vocabulary.' },
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

fs.writeFileSync(path.join('src', 'data', 'level-test-questions.ts'), fileContent);
console.log('Successfully generated real questions in level-test-questions.ts');
