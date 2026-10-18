export interface DialogueTurn {
    id: string;
    speaker: string;
    role: 'A' | 'B';
    en: string;
    bn: string;
    ipa: string;
}

export interface SituationalConversation {
    id: string;
    number: number;
    title: string;
    titleBn: string;
    level: 'Easy' | 'Intermediate';
    category: 'Daily Life' | 'Social' | 'Professional' | 'Travel' | 'Services';
    sceneDescription: string;
    starters: { en: string; bn: string; tip: string }[];
    dialogue: DialogueTurn[];
    followUps: { en: string; bn: string }[];
    closers: { en: string; bn: string }[];
    nativePhrases: { phrase: string; meaning: string; context: string }[];
}

export const SITUATIONAL_CONVERSATIONS: SituationalConversation[] = [
    // ══════════════════════════════════════════════════════════════════
    // EASY LEVEL CONVERSATIONS (১ থেকে ১০)
    // ══════════════════════════════════════════════════════════════════
    {
        id: 'conv-01-first-meeting',
        number: 1,
        title: 'Meeting Someone for the First Time',
        titleBn: 'নতুন কারো সাথে প্রথম পরিচয় ও কুশল বিনিময়',
        level: 'Easy',
        category: 'Social',
        sceneDescription: 'একটি সামাজিক মিলনমেলা বা ক্লাসের প্রথম দিনে নতুন একজনের পাশে বসে পরিচয় হওয়া।',
        starters: [
            { en: 'Hi there! Is anyone sitting here, or is this seat free?', bn: 'হাই! এখানে কি কেউ বসেছেন, নাকি এই সিটটা খালি?', tip: 'সহজে কথা শুরু করার সবচেয়ে স্বাভাবিক উপায়।' },
            { en: 'Hello! I don\'t think we\'ve met yet. I\'m Faisal.', bn: 'হ্যালো! আমার মনে হয় আমাদের আগে দেখা হয়নি। আমি ফয়সাল।', tip: 'সরাসরি পরিচিত হওয়ার চমৎকার আত্মবিশ্বাসী বাক্য।' },
            { en: 'Lovely weather today, isn\'t it?', bn: 'আজকের আবহাওয়াটা বেশ মনোরম, তাই না?', tip: 'ব্রিটিশ স্মল টক শুরু করার ঐতিহ্যবাহী উপায়।' }
        ],
        dialogue: [
            { id: 'd1', speaker: 'Faisal', role: 'A', en: 'Hi there! Is this seat taken?', bn: 'হাই! এই সিটটিতে কি কেউ বসেছেন?', ipa: '/haɪ ðeər ɪz ðɪs siːt ˈteɪkən/' },
            { id: 'd2', speaker: 'Sarah', role: 'B', en: 'No, it\'s completely free. Please, have a seat!', bn: 'না, একদম খালি। দয়া করে বসুন!', ipa: '/nəʊ ɪts kəmˈpliːtli friː pliːz hæv ə siːt/' },
            { id: 'd3', speaker: 'Faisal', role: 'A', en: 'Thanks a lot. I\'m Faisal, by the way. Nice to meet you!', bn: 'অনেক ধন্যবাদ। আমি ফয়সাল। আপনার সাথে পরিচিত হয়ে ভালো লাগল!', ipa: '/θæŋks ə lɒt aɪm Faisal baɪ ðə weɪ naɪs tə miːt juː/' },
            { id: 'd4', speaker: 'Sarah', role: 'B', en: 'Nice to meet you too, Faisal! I\'m Sarah. Are you new to this class?', bn: 'আপনার সাথেও পরিচিত হয়ে ভালো লাগল, ফয়সাল! আমি সারা। আপনি কি এই ক্লাসে নতুন?', ipa: '/naɪs tə miːt juː tuː Sarah ɑː juː njuː tə ðɪs klɑːs/' },
            { id: 'd5', speaker: 'Faisal', role: 'A', en: 'Yes, today is actually my very first day. What about you?', bn: 'হ্যাঁ, আজকেই আসলে আমার একদম প্রথম দিন। আপনার খবর কী?', ipa: '/jes təˈdeɪ ɪz ˈæktʃuəli maɪ ˈveri fɜːst deɪ wɒt əˈbaʊt juː/' },
            { id: 'd6', speaker: 'Sarah', role: 'B', en: 'I joined last week. Everyone here is super friendly, so don\'t worry at all!', bn: 'আমি গত সপ্তাহে যুক্ত হয়েছি। এখানকার সবাই ভীষণ আন্তরিক, কাজেই একদম চিন্তা করবেন না!', ipa: '/aɪ dʒɔɪnd lɑːst wiːk ˈevriwʌn hɪər ɪz ˈsuːpə ˈfrendli səʊ dəʊnt ˈwʌri æt ɔːl/' },
            { id: 'd7', speaker: 'Faisal', role: 'A', en: 'That\'s such a relief to hear! What do you do, Sarah?', bn: 'শুনে বেশ স্বস্তি পেলাম! সারা, আপনি কী করেন?', ipa: '/ðæts sʌtʃ ə rɪˈliːf tə hɪə wɒt duː juː duː Sarah/' },
            { id: 'd8', speaker: 'Sarah', role: 'B', en: 'I work in graphic design. How about yourself?', bn: 'আমি গ্রাফিক ডিজাইনার হিসেবে কাজ করি। আর আপনি?', ipa: '/aɪ wɜːk ɪn ˈɡræfɪk dɪˈzaɪn haʊ əˈbaʊt jɔːˈself/' }
        ],
        followUps: [
            { en: 'How long have you been living in this city?', bn: 'আপনি কতদিন ধরে এই শহরে থাকছেন?' },
            { en: 'What do you enjoy doing during your free time?', bn: 'অবসর সময়ে আপনার কী করতে ভালো লাগে?' },
            { en: 'Have you taken any other courses here before?', bn: 'আপনি কি আগে এখানে অন্য কোনো কোর্স করেছেন?' }
        ],
        closers: [
            { en: 'It was truly a pleasure chatting with you, Sarah.', bn: 'আপনার সাথে কথা বলে সত্যিই দারুণ লাগল, সারা।' },
            { en: 'I think the lecture is about to start. Let\'s catch up after class!', bn: 'মনে হয় লেকচার শুরু হতে যাচ্ছে। ক্লাসের পর কথা হবে!' },
            { en: 'Here is my WhatsApp number, let\'s stay in touch!', bn: 'এই নিন আমার হোয়াটসঅ্যাপ নম্বর, যোগাযোগ রাখবেন!' }
        ],
        nativePhrases: [
            { phrase: 'By the way', meaning: 'যাই হোক / কথার ফাঁকে', context: 'প্রসঙ্গ পাল্টাতে বা নাম প্রকাশে ব্যবহৃত হয়।' },
            { phrase: 'That\'s a relief', meaning: 'শুনে স্বস্তি পেলাম', context: 'কারো ভালো কথায় স্বস্তি প্রকাশ করতে।' },
            { phrase: 'How about yourself?', meaning: 'আপনার নিজের কী খবর?', context: '"And you?" এর চেয়ে অনেক বেশি মার্জিত রূপ।' }
        ]
    },
    {
        id: 'conv-02-coffee-shop',
        number: 2,
        title: 'Ordering at a Coffee Shop / Café',
        titleBn: 'কফি শপে কফি ও নাশতা অর্ডার করার কথোপকথন',
        level: 'Easy',
        category: 'Daily Life',
        sceneDescription: 'একটি ক্যাফেতে কাউন্টারে বারিস্তার কাছে নিজের পছন্দের কফি অর্ডার করা।',
        starters: [
            { en: 'Good morning! How are you doing today?', bn: 'শুভ সকাল! আপনার দিন কেমন যাচ্ছে?', tip: 'বারিস্তাকে হাসিমুখে শুভেচ্ছা জানানো।' },
            { en: 'Hi there, could I get a quick coffee to go, please?', bn: 'হাই, আমাকে কি টেক-অ্যাওয়ে একটি কফি দেওয়া যাবে?', tip: 'তাড়াহুড়ার সময় সংক্ষিপ্ত অর্ডার।' }
        ],
        dialogue: [
            { id: 'd1', speaker: 'Barista', role: 'B', en: 'Good morning! What can I get started for you today?', bn: 'শুভ সকাল! আজকে আপনার জন্য কী কফি তৈরি করব?', ipa: '/ɡʊd ˈmɔːnɪŋ wɒt kæn aɪ ɡet ˈstɑːtɪd fɔː juː təˈdeɪ/' },
            { id: 'd2', speaker: 'Customer', role: 'A', en: 'Hi! Could I please get a medium cappuccino?', bn: 'হাই! আমাকে কি দয়া করে একটি মিডিয়াম ক্যাপুচিনো দেওয়া যাবে?', ipa: '/haɪ kʊd aɪ pliːz ɡet ə ˈmiːdiəm ˌkæpəˈtʃiːnəʊ/' },
            { id: 'd3', speaker: 'Barista', role: 'B', en: 'Sure thing! What kind of milk would you prefer?', bn: 'অবশ্যই! আপনি কোন ধরনের দুধ পছন্দ করবেন?', ipa: '/ʃɔː θɪŋ wɒt kaɪnd ɒv mɪlk wʊd juː prɪˈfɜː/' },
            { id: 'd4', speaker: 'Customer', role: 'A', en: 'Regular whole milk is fine, thanks. And please make it extra hot.', bn: 'নরমাল ফুল ক্রিম দুধ হলেই চলবে। আর দয়া করে একটু বেশি গরম করবেন।', ipa: '/ˈreɡjələ həʊl mɪlk ɪz faɪn θæŋks ænd pliːz meɪk ɪt ˈekstrə hɒt/' },
            { id: 'd5', speaker: 'Barista', role: 'B', en: 'Got it. Would you like any pastries or snacks with that?', bn: 'বুঝেছি। সাথে কি কোনো পেস্ট্রি বা নাশতা নিতে চান?', ipa: '/ɡɒt ɪt wʊd juː laɪk ˈeni ˈpeɪstriz ɔː snæks wɪð ðæt/' },
            { id: 'd6', speaker: 'Customer', role: 'A', en: 'I\'ll have one chocolate muffin as well, please.', bn: 'আমাকে সাথে একটি চকোলেট মাফিনও দেবেন, দয়া করে।', ipa: '/aɪl hæv wʌn ˈtʃɒklət ˈmʌfɪn æz wel pliːz/' },
            { id: 'd7', speaker: 'Barista', role: 'B', en: 'For here or to go?', bn: 'এখানে বসে খাবেন নাকি পার্সেল নিয়ে যাবেন?', ipa: '/fɔː hɪər ɔː tə ɡəʊ/' },
            { id: 'd8', speaker: 'Customer', role: 'A', en: 'To go, please. Can I pay with card?', bn: 'পার্সেল নিয়ে যাব। কার্ডে পেমেন্ট করতে পারব?', ipa: '/tə ɡəʊ pliːz kæn aɪ peɪ wɪð kɑːd/' }
        ],
        followUps: [
            { en: 'Could you add a pump of vanilla syrup as well?', bn: 'একটু ভ্যানিলা সিরাপও কি যোগ করে দেওয়া যাবে?' },
            { en: 'Does the muffin contain any nuts or peanuts?', bn: 'মাফিনটিতে কি কোনো বাদাম বা চীনাবাদাম রয়েছে?' }
        ],
        closers: [
            { en: 'Keep the change, thanks a lot!', bn: 'ভাঙতিটা রেখে দিন, অনেক ধন্যবাদ!' },
            { en: 'Thank you so much! Have a wonderful day!', bn: 'আপনাকে অনেক ধন্যবাদ! আপনার দিনটি শুভ হোক!' }
        ],
        nativePhrases: [
            { phrase: 'Could I get...', meaning: 'আমাকে কি ... দেওয়া যাবে?', context: '"I want" বলার বদলে মার্জিত আবেদন।' },
            { phrase: 'For here or to go?', meaning: 'এখানে খাবেন নাকি পার্সেল?', context: 'বিশ্বের যেকোনো ক্যাফেতে সবচেয়ে সাধারণ প্রশ্ন।' },
            { phrase: 'Sure thing!', meaning: 'অবশ্যই!', context: 'খুশি হয়ে সম্মতি জানাতে বারিস্তাদের প্রিয় বুলি।' }
        ]
    },
    {
        id: 'conv-03-street-directions',
        number: 3,
        title: 'Asking for Directions on the Street',
        titleBn: 'রাস্তায় অচেনা জায়গায় পথ চিনে নেওয়ার কথোপকথন',
        level: 'Easy',
        category: 'Travel',
        sceneDescription: 'রাস্তায় হেঁটে যাওয়ার সময় অচেনা কারো কাছ থেকে মেট্রো স্টেশন বা নির্দিষ্ট ঠিকানার পথ জানা।',
        starters: [
            { en: 'Excuse me, could you help me for a second?', bn: 'মাফ করবেন, আমাকে কি এক সেকেন্ড একটু সাহায্য করবেন?', tip: 'পথচারীর দৃষ্টি আকর্ষণ করতে সবচেয়ে বিনয়ী শুরু।' },
            { en: 'Sorry to bother you, but I seem to be a bit lost.', bn: 'বিরক্ত করার জন্য দুঃখিত, তবে মনে হয় আমি একটু পথ হারিয়ে ফেলেছি।', tip: 'অকপটে সাহায্য চাওয়ার জন্য চমৎকার।' }
        ],
        dialogue: [
            { id: 'd1', speaker: 'Traveler', role: 'A', en: 'Excuse me! Could you tell me how to get to the central metro station?', bn: 'মাফ করবেন! সেন্ট্রাল মেট্রো স্টেশনে কীভাবে যাব একটু বলতে পারবেন?', ipa: '/ɪkˈskjuːz miː kʊd juː tel miː haʊ tuː ɡet tə ðə ˈsentrəl ˈmetrəʊ ˈsteɪʃn/' },
            { id: 'd2', speaker: 'Local', role: 'B', en: 'Sure! You\'re actually quite close. Walk straight down this road for two blocks.', bn: 'অবশ্যই! আপনি আসলে বেশ কাছেই আছেন। এই রাস্তা দিয়ে সোজা দুই ব্লক হেঁটে যান।', ipa: '/ʃɔː jɔːr ˈæktʃuəli kwaɪt kləʊs wɔːk streɪt daʊn ðɪs rəʊd fɔː tuː blɒks/' },
            { id: 'd3', speaker: 'Traveler', role: 'A', en: 'Okay, straight ahead for two blocks. And then?', bn: 'আচ্ছা, সোজা দুই ব্লক। তারপর?', ipa: '/əʊˈkeɪ streɪt əˈhed fɔː tuː blɒks ænd ðen/' },
            { id: 'd4', speaker: 'Local', role: 'B', en: 'When you see a large glass shopping mall, turn left onto Park Street.', bn: 'যখন একটি বড় কাঁচের শপিং মল দেখতে পাবেন, পার্ক স্ট্রিটের দিকে বামে মোড় নেবেন।', ipa: '/wen juː siː ə lɑːdʒ ɡlɑːs ˈʃɒpɪŋ mɔːl tɜːn left ˈɒntuː pɑːk striːt/' },
            { id: 'd5', speaker: 'Traveler', role: 'A', en: 'Turn left at the mall, got it. Is the station on Park Street?', bn: 'মলের কাছে বামে মোড়, বুঝেছি। স্টেশনটি কি পার্ক স্ট্রিটেই?', ipa: '/tɜːn left æt ðə mɔːl ɡɒt ɪt ɪz ðə ˈsteɪʃn ɒn pɑːk striːt/' },
            { id: 'd6', speaker: 'Local', role: 'B', en: 'Yes, exactly! You\'ll see the glowing blue metro sign right across from the park.', bn: 'হ্যাঁ, ঠিক তাই! পার্কের ঠিক উল্টো দিকেই আপনি নীল রঙের জ্বলজ্বলে মেট্রো সাইনবোর্ড দেখতে পাবেন।', ipa: '/jes ɪɡˈzæktli juːl siː ðə ˈɡləʊɪŋ bluː ˈmetrəʊ saɪn raɪt əˈkrɒs frɒm ðə pɑːk/' },
            { id: 'd7', speaker: 'Traveler', role: 'A', en: 'Is it within walking distance or should I take a rickshaw?', bn: 'এটা কি হেঁটে যাওয়ার দূরত্বে নাকি আমার রিকশা নেওয়া উচিত?', ipa: '/ɪz ɪt wɪðˈɪn ˈwɔːkɪŋ ˈdɪstəns ɔː ʃʊd aɪ teɪk ə ˈrɪkʃɔː/' },
            { id: 'd8', speaker: 'Local', role: 'B', en: 'It\'s barely a five-minute walk. You won\'t need a ride.', bn: 'হেঁটে মাত্র পাঁচ মিনিট লাগবে। কোনো গাড়ির দরকার হবে না।', ipa: '/ɪts ˈbeəli ə faɪv ˈmɪnɪt wɔːk juː wəʊnt niːd ə raɪd/' }
        ],
        followUps: [
            { en: 'Do you know if trains run frequently at this hour?', bn: 'এই সময়ে ট্রেন কি ঘন ঘন চলে আপনার জানা আছে?' },
            { en: 'Can I purchase ticket cards at the station entrance?', bn: 'স্টেশনের প্রবেশদ্বারে কি টিকিট কার্ড কেনা যায়?' }
        ],
        closers: [
            { en: 'You\'ve been so helpful, thank you so much!', bn: 'আপনি ভীষণ সাহায্য করলেন, অনেক অনেক ধন্যবাদ!' },
            { en: 'Much appreciated! Have a wonderful day!', bn: 'অসংখ্য ধন্যবাদ! আপনার দিনটি খুব সুন্দর কাটুক!' }
        ],
        nativePhrases: [
            { phrase: 'Within walking distance', meaning: 'হেঁটে যাওয়ার দূরত্বে', context: 'দূরত্ব কতটুকু তা বোঝাতে সেরা ফ্রেজ।' },
            { phrase: 'Barely a five-minute walk', meaning: 'কষ্টে পাঁচ মিনিট লাগবে', context: 'খুব কাছাকাছি বোঝাতে।' },
            { phrase: 'Right across from...', meaning: 'ঠিক উল্টো দিকে', context: 'নির্দিষ্ট অবস্থান নির্দেশে।' }
        ]
    },
    {
        id: 'conv-04-shopping-clothes',
        number: 4,
        title: 'Shopping for Clothes & Asking for Sizes',
        titleBn: 'পোশাকের দোকানে সাইজ দেখা ও ট্রায়াল নেওয়ার কথোপকথন',
        level: 'Easy',
        category: 'Services',
        sceneDescription: 'একটি কাপড়ের দোকানে গিয়ে নিজের সাইজ খোঁজা, ট্রায়াল রুমের খোঁজ করা এবং দাম পরিশোধ করা।',
        starters: [
            { en: 'Excuse me, could you assist me for a moment?', bn: 'মাফ করবেন, আমাকে কি একটু সাহায্য করতে পারবেন?', tip: 'দোকানের সেলসম্যানকে ডাকার জন্য।' }
        ],
        dialogue: [
            { id: 'd1', speaker: 'Salesperson', role: 'B', en: 'Hello! Looking for anything in particular today?', bn: 'হ্যালো! আজকে কি বিশেষ কিছু খুঁজছেন?', ipa: '/həˈləʊ ˈlʊkɪŋ fɔːr ˈeniθɪŋ ɪn pəˈtɪkjələ təˈdeɪ/' },
            { id: 'd2', speaker: 'Customer', role: 'A', en: 'Yes, I really like this cotton shirt. Do you have it in a medium size?', bn: 'হ্যাঁ, আমার এই সুতি শার্টটি খুব পছন্দ হয়েছে। আপনাদের কাছে কি এর মিডিয়াম সাইজ আছে?', ipa: '/jes aɪ ˈrɪəli laɪk ðɪs ˈkɒtn ʃɜːt duː juː hæv ɪt ɪn ə ˈmiːdiəm saɪz/' },
            { id: 'd3', speaker: 'Salesperson', role: 'B', en: 'Let me check in the stock room. Yes, here you go, a size medium!', bn: 'আমি একটু স্টকরুমটা দেখে আসি। হ্যাঁ, এই যে আপনার মিডিয়াম সাইজ!', ipa: '/let miː tʃek ɪn ðə stɒk ruːm jes hɪə juː ɡəʊ ə saɪz ˈmiːdiəm/' },
            { id: 'd4', speaker: 'Customer', role: 'A', en: 'Great! Where are your fitting rooms located?', bn: 'দারুণ! আপনাদের ফিটিং রুমগুলো কোন দিকে?', ipa: '/ɡreɪt weər ɑː jɔː ˈfɪtɪŋ ruːmz ləʊˈkeɪtɪd/' },
            { id: 'd5', speaker: 'Salesperson', role: 'B', en: 'They are right in the back on the left-hand side.', bn: 'একদম পেছনের দিকে বাঁ-হাতের দিকে আছে।', ipa: '/ðeɪ ɑː raɪt ɪn ðə bæk ɒn ðə left hænd saɪd/' },
            { id: 'd6', speaker: 'Customer', role: 'A', en: 'The fit is perfect! Does it come with any discount?', bn: 'ফিটিং একদম নিখুঁত হয়েছে! এটার ওপর কি কোনো ছাড় আছে?', ipa: '/ðə fɪt ɪz ˈpɜːfɪkt dʌz ɪt kʌm wɪð ˈeni ˈdɪskaʊnt/' },
            { id: 'd7', speaker: 'Salesperson', role: 'B', en: 'Yes, we have a 15% discount for payments through mobile banking today.', bn: 'হ্যাঁ, আজকে মোবাইল ব্যাংকিংয়ে পেমেন্ট করলে ১৫% ছাড় চলছে।', ipa: '/jes wiː hæv ə ˈfɪftiːn pəˈsent ˈdɪskaʊnt fɔː ˈpeɪmənts θruː ˈməʊbaɪl ˈbæŋkɪŋ təˈdeɪ/' },
            { id: 'd8', speaker: 'Customer', role: 'A', en: 'Awesome, I\'ll take it then. Please pack it up!', bn: 'চমৎকার, তাহলে আমি এটা নিচ্ছি। দয়া করে প্যাক করে দিন!', ipa: '/ˈɔːsəm aɪl teɪk ɪt ðen pliːz pæk ɪt ʌp/' }
        ],
        followUps: [
            { en: 'Do you have this design in any other colors?', bn: 'এই ডিজাইনের শার্ট কি অন্য কোনো রঙে আছে?' },
            { en: 'What is your exchange policy if the size feels tight later?', bn: 'পরে সাইজ টাইট মনে হলে আপনাদের এক্সচেঞ্জ পলিসি কী?' }
        ],
        closers: [
            { en: 'Here is my payment, thank you for your help!', bn: 'এই নিন আমার পেমেন্ট, সহযোগিতার জন্য ধন্যবাদ!' },
            { en: 'Have a great day, I will definitely come back!', bn: 'ভালো থাকবেন, আমি অবশ্যই আবার আসব!' }
        ],
        nativePhrases: [
            { phrase: 'The fit is perfect', meaning: 'মাপ একদম ঠিক হয়েছে', context: 'পোশাকের সাইজ সুন্দর হলে বলতে।' },
            { phrase: 'Here you go', meaning: 'এই নিন', context: 'কারো হাতে কিছু তুলে দেওয়ার সময়।' },
            { phrase: 'I\'ll take it', meaning: 'আমি এটা নেব', context: 'কেনাকাটা চূড়ান্ত করার ইংরেজি।' }
        ]
    },
    {
        id: 'conv-05-doctor-appointment',
        number: 5,
        title: 'At the Doctor\'s: Describing Symptoms',
        titleBn: 'ডাক্তারের চেম্বারে শারীরিক সমস্যা ও উপসর্গ ব্যাখ্যা',
        level: 'Easy',
        category: 'Services',
        sceneDescription: 'অসুস্থ বোধ করায় ডাক্তারের চেম্বারে গিয়ে শারীরিক সমস্যা জানানো ও প্রেসক্রিপশন নেওয়া।',
        starters: [
            { en: 'Good afternoon, Doctor. Thank you for seeing me.', bn: 'শুভ দুপুর, ডাক্তার। আমাকে দেখার জন্য ধন্যবাদ।', tip: 'চেম্বারে প্রবেশের মার্জিত শুরু।' }
        ],
        dialogue: [
            { id: 'd1', speaker: 'Doctor', role: 'B', en: 'Good afternoon! Please have a seat. What seems to be the problem today?', bn: 'শুভ দুপুর! বসুন। আজকে আপনার কী সমস্যা হচ্ছে?', ipa: '/ɡʊd ˌɑːftəˈnuːn pliːz hæv ə siːt wɒt siːmz tə biː ðə ˈprɒbləm təˈdeɪ/' },
            { id: 'd2', speaker: 'Patient', role: 'A', en: 'Doctor, I\'ve been having a severe headache and fever since yesterday evening.', bn: 'ডাক্তার, গতকাল সন্ধ্যা থেকে আমার প্রচণ্ড মাথাব্যথা এবং জ্বর উঠেছে।', ipa: '/ˈdɒktər aɪv biːn ˈhævɪŋ ə sɪˈvɪə ˈhedeɪk ænd ˈfiːvə sɪns ˈjestədeɪ ˈiːvnɪŋ/' },
            { id: 'd3', speaker: 'Doctor', role: 'B', en: 'I see. Do you also have a sore throat or a runny nose?', bn: 'বুঝতে পেরেছি। আপনার কি গলাব্যথা বা সর্দিও আছে?', ipa: '/aɪ siː duː juː ˈɔːlsəʊ hæv ə sɔː θrəʊt ɔːr ə ˈrʌni nəʊz/' },
            { id: 'd4', speaker: 'Patient', role: 'A', en: 'Yes, it hurts when I swallow, and my whole body feels weak.', bn: 'হ্যাঁ, কোনো কিছু গিলতে গেলে ব্যথা লাগে, আর সারা শরীর দুর্বল লাগছে।', ipa: '/jes ɪt hɜːts wen aɪ ˈswɒləʊ ænd maɪ həʊl ˈbɒdi fiːlz wiːk/' },
            { id: 'd5', speaker: 'Doctor', role: 'B', en: 'Let me check your temperature and chest with the stethoscope.', bn: 'আমি থার্মোমিটার দিয়ে জ্বর এবং স্টেথো দিয়ে বুকটা একটু পরীক্ষা করে দেখি।', ipa: '/let miː tʃek jɔː ˈtemprətʃər ænd tʃest wɪð ðə ˈsteθəskəʊp/' },
            { id: 'd6', speaker: 'Patient', role: 'A', en: 'Is it something serious, Doctor?', bn: 'এটা কি মারাত্মক কিছু, ডাক্তার?', ipa: '/ɪz ɪt ˈsʌmθɪŋ ˈsɪəriəs ˈdɒktə/' },
            { id: 'd7', speaker: 'Doctor', role: 'B', en: 'Nothing to worry about. It\'s just a seasonal viral infection. Take plenty of rest.', bn: 'উদ্বিগ্ন হওয়ার কিছু নেই। এটা কেবল একটি মৌসুমী ভাইরাল ইনফেকশন। প্রচুর বিশ্রাম নিন।', ipa: '/ˈnʌθɪŋ tə ˈwʌri əˈbaʊt ɪts dʒʌst ə ˈsiːznl ˈvaɪrəl ɪnˈfekʃn teɪk ˈplenti ɒv rest/' },
            { id: 'd8', speaker: 'Patient', role: 'A', en: 'How many days will I need to take this medication?', bn: 'কতদিন আমাকে এই ওষুধগুলো খেতে হবে?', ipa: '/haʊ ˈmeni deɪz wɪl aɪ niːd tə teɪk ðɪs ˌmedɪˈkeɪʃn/' }
        ],
        followUps: [
            { en: 'Are there any dietary restrictions I should follow?', bn: 'খাবারের ক্ষেত্রে কি কোনো নিয়ম বা বিধিনিষেধ মেনে চলতে হবে?' },
            { en: 'Should I come back for a follow-up visit next week?', bn: 'আমার কি আগামী সপ্তাহে আবার এসে দেখা করা উচিত?' }
        ],
        closers: [
            { en: 'Thank you very much for your reassuring advice, Doctor.', bn: 'আপনার আশ্বস্তকারী পরামর্শের জন্য অনেক ধন্যবাদ, ডাক্তার।' },
            { en: 'I will follow your prescription carefully. Have a great day!', bn: 'আমি আপনার প্রেসক্রিপশন মেনে চলব। ভালো থাকবেন!' }
        ],
        nativePhrases: [
            { phrase: 'What seems to be the problem?', meaning: 'কী সমস্যা হচ্ছে বলুন?', context: 'ডাক্তারদের সবচেয়ে কমন উদ্বোধনী প্রশ্ন।' },
            { phrase: 'Under the weather', meaning: 'শারীরিক অসুস্থতাবোধ', context: 'অসুস্থতা প্রকাশের ইডিয়ম।' },
            { phrase: 'Nothing to worry about', meaning: 'চিন্তার কোনো কারণ নেই', context: 'রোগীকে আশ্বস্ত করার সুন্দর ভাষা।' }
        ]
    },
    {
        id: 'conv-06-restaurant-dining',
        number: 6,
        title: 'Restaurant Dining & Splitting the Bill',
        titleBn: 'রেস্তোরাঁয় খাবার অর্ডার ও বিল ভাগাভাগি করার কথোপকথন',
        level: 'Easy',
        category: 'Daily Life',
        sceneDescription: 'বন্ধুদের সাথে রেস্টুরেন্টে গিয়ে টেবিল চাওয়া, খাবার অর্ডার করা এবং খাওয়া শেষে বিল ভাগ করে দেওয়া।',
        starters: [
            { en: 'Good evening! Could we get a table for three by the window, please?', bn: 'শুভ সন্ধ্যা! জানালার পাশে কি আমাদের তিনজনের একটি টেবিল দেওয়া যাবে?', tip: 'রেস্টুরেন্টে গিয়ে টেবিল বুকিং।' }
        ],
        dialogue: [
            { id: 'd1', speaker: 'Waiter', role: 'B', en: 'Right this way! Here are your menus. Can I bring you some water to start?', bn: 'এদিকে আসুন! এই নিন আপনাদের মেনু। শুরুতেই কি একটু পানি নিয়ে আসব?', ipa: '/raɪt ðɪs weɪ hɪər ɑː jɔː ˈmenjuːz kæn aɪ brɪŋ juː sʌm ˈwɔːtə tə stɑːt/' },
            { id: 'd2', speaker: 'Guest', role: 'A', en: 'Yes, regular bottled water would be great. Thank you!', bn: 'হ্যাঁ, বোতলজাত সাধারণ পানি দিলে ভালো হয়। ধন্যবাদ!', ipa: '/jes ˈreɡjələ ˈbɒtld ˈwɔːtə wʊd biː ɡreɪt θæŋk juː/' },
            { id: 'd3', speaker: 'Waiter', role: 'B', en: 'Are you ready to order your main courses, or do you need a few more minutes?', bn: 'আপনারা কি মূল খাবার অর্ডার করতে প্রস্তুত, নাকি আরেকটু সময় লাগবে?', ipa: '/ɑː juː ˈredi tuː ˈɔːdə jɔː meɪn ˈkɔːsɪz ɔː duː juː niːd ə fjuː mɔː ˈmɪnɪts/' },
            { id: 'd4', speaker: 'Guest', role: 'A', en: 'We are ready! We\'d like the grilled chicken platter and a pasta Alfredo.', bn: 'আমরা তৈরি! আমরা একটি গ্রিলড চিকেন প্লাটার এবং একটি পাস্তা আলফ্রেডো নিতে চাই।', ipa: '/wiː ɑː ˈredi wiːd laɪk ðə ɡrɪld ˈtʃɪkɪn ˈplætər ænd ə ˈpæstə alfredo/' },
            { id: 'd5', speaker: 'Waiter', role: 'B', en: 'Excellent choices. How spicy would you like the grilled chicken?', bn: 'চমৎকার পছন্দ। গ্রিলড চিকেনটিতে ঝালের মাত্রা কেমন চান?', ipa: '/ˈeksələnt ˈtʃɔɪsɪz haʊ ˈspaɪsi wʊd juː laɪk ðə ɡrɪld ˈtʃɪkɪn/' },
            { id: 'd6', speaker: 'Guest', role: 'A', en: 'Medium spicy, please. Not too mild, but not fiery hot either.', bn: 'মাঝারি ঝাল রাখবেন। বেশি পানসেও না, আবার খুব কড়া ঝালও না।', ipa: '/ˈmiːdiəm ˈspaɪsi pliːz nɒt tuː maɪld bʌt nɒt ˈfaɪəri hɒt ˈaɪðə/' },
            { id: 'd7', speaker: 'Guest', role: 'A', en: 'Excuse me, could you bring us the bill whenever you\'re ready?', bn: 'মাফ করবেন, আপনাদের সময়মতো আমাদের বিলটা একটু নিয়ে আসবেন?', ipa: '/ɪkˈskjuːz miː kʊd juː brɪŋ ʌs ðə bɪl wenˈevə jɔː ˈredi/' },
            { id: 'd8', speaker: 'Waiter', role: 'B', en: 'Here is your bill, sir. Are you paying together or splitting?', bn: 'এই নিন আপনাদের বিল, স্যার। একসাথে দেবেন নাকি আলাদা আলাদা ভাগ করে দেবেন?', ipa: '/hɪər ɪz jɔː bɪl sɜːr ɑː juː ˈpeɪɪŋ təˈɡeðər ɔː ˈsplɪtɪŋ/' }
        ],
        followUps: [
            { en: 'Could we split the bill evenly three ways?', bn: 'বিলটা কি সমান তিনভাগে ভাগ করে দেওয়া যাবে?' },
            { en: 'Does the total amount include service charge and VAT?', bn: 'মোট মূল্যের ভেতরে কি সার্ভিস চার্জ এবং ভ্যাট অন্তর্ভুক্ত আছে?' }
        ],
        closers: [
            { en: 'The meal was absolutely scrumptious! Compliments to the chef.', bn: 'খাবারটি অসাধারণ সুস্বাদু ছিল! শেফকে আমাদের প্রশংসা জানাবেন।' },
            { en: 'Thank you for the top-notch service. Have a wonderful night!', bn: 'চমৎকার সেবার জন্য ধন্যবাদ। আপনার রাতটি শুভ হোক!' }
        ],
        nativePhrases: [
            { phrase: 'Split the bill / Go Dutch', meaning: 'বিল সমান ভাগে ভাগ করা', context: 'বন্ধুদের সাথে রেস্তোরাঁয়।' },
            { phrase: 'Compliments to the chef', meaning: 'বাবুর্চিকে আন্তরিক সাধুবাদ', context: 'খাবার খুব ভালো লাগলে।' },
            { phrase: 'Right this way', meaning: 'এদিকে আসুন', context: 'টেবিলে এগিয়ে দেওয়ার ভদ্র ভাষা।' }
        ]
    },
    {
        id: 'conv-07-hotel-checkin',
        number: 7,
        title: 'Checking into a Hotel Room',
        titleBn: 'হোটেলে রুম চেক-ইন ও সুযোগ-সুবিধা জানার কথোপকথন',
        level: 'Easy',
        category: 'Travel',
        sceneDescription: 'ভ্রমণে গিয়ে হোটেলের ফ্রন্ট ডেস্কে রিজার্ভেশন দেখিয়ে রুমের চাবি নেওয়া ও ওয়াইফাই/ব্রেকফাস্ট জানা।',
        starters: [
            { en: 'Hello! I have a reservation under the name Faisal Hossain.', bn: 'হ্যালো! ফয়সাল হোসেন নামে আমার একটি রুম বুকিং করা আছে।', tip: 'হোটেল ফ্রন্ট ডেস্কে শুরুর প্রমিত বাক্য।' }
        ],
        dialogue: [
            { id: 'd1', speaker: 'Receptionist', role: 'B', en: 'Good afternoon, sir! Welcome to the Grand Palace. Let me pull up your booking.', bn: 'শুভ দুপুর, স্যার! গ্র্যান্ড প্যালেসে আপনাকে স্বাগতম। আমি বুকিং রেকর্ডটি বের করছি।', ipa: '/ɡʊd ˌɑːftəˈnuːn sɜː ˈwelkəm tə ðə ɡrænd ˈpæləs let miː pʊl ʌp jɔː ˈbʊkɪŋ/' },
            { id: 'd2', speaker: 'Guest', role: 'A', en: 'Here is my confirmation email and my National ID card.', bn: 'এই নিন আমার কনফার্মেশন ইমেইল এবং জাতীয় পরিচয়পত্র।', ipa: '/hɪər ɪz maɪ ˌkɒnfəˈmeɪʃn ˈiːmeɪl ænd maɪ ˈnæʃnəl ˌaɪ ˈdiː kɑːd/' },
            { id: 'd3', speaker: 'Receptionist', role: 'B', en: 'Yes, Mr. Hossain! A Deluxe King Room for three nights. Is that correct?', bn: 'হ্যাঁ, জনাব হোসেন! তিন রাতের জন্য একটি ডিলাক্স কিং রুম। তথ্যটি কি ঠিক আছে?', ipa: '/jes Mr. Hossain ə dɪˈlʌks kɪŋ ruːm fɔː θriː naɪts ɪz ðæt kəˈrekt/' },
            { id: 'd4', speaker: 'Guest', role: 'A', en: 'Yes, precisely! Does the room reservation include complimentary breakfast?', bn: 'হ্যাঁ, একদম সঠিক! রুমের সাথে কি কমপ্লিমেন্টারি ব্রেকফাস্ট অন্তর্ভুক্ত আছে?', ipa: '/jes prɪˈsaɪsli dʌz ðə ruːm ˌrezəˈveɪʃn ɪnˈkluːd ˌkɒmplɪˈmentri ˈbrekfəst/' },
            { id: 'd5', speaker: 'Receptionist', role: 'B', en: 'It sure does! Breakfast buffet is served on the second floor from 7 to 10:30 AM.', bn: 'অবশ্যই আছে! দ্বিতীয় তলায় সকাল ৭টা থেকে সাড়ে ১০টা পর্যন্ত বুফে ব্রেকফাস্ট দেওয়া হয়।', ipa: '/ɪt ʃɔː dʌz ˈbrekfəst ˈbʊfeɪ ɪz sɜːvd ɒn ðə ˈsekənd flɔː frɒm ˈsevn tuː ten ˈθɜːti ˌeɪ ˈem/' },
            { id: 'd6', speaker: 'Guest', role: 'A', en: 'Wonderful! What is the password for the high-speed Wi-Fi?', bn: 'চমৎকার! হাই-স্পিড ওয়াইফাইয়ের পাসওয়ার্ড কী?', ipa: '/ˈwʌndəfl wɒt ɪz ðə ˈpɑːswɜːd fɔː ðə haɪ spiːd ˈwaɪfaɪ/' },
            { id: 'd7', speaker: 'Receptionist', role: 'B', en: 'It\'s written right here on your key card sleeve. Room 504 on the fifth floor.', bn: 'আপনার চাবির কার্ডের খামের ওপরেই লেখা আছে। পঞ্চম তলায় ৫০৪ নম্বর রুম।', ipa: '/ɪts ˈrɪtn raɪt hɪər ɒn jɔː kiː kɑːd sliːv ruːm faɪv əʊ fɔːr ɒn ðə fɪfθ flɔː/' },
            { id: 'd8', speaker: 'Guest', role: 'A', en: 'Thank you very much. What time is check-out on Thursday?', bn: 'আপনাকে অনেক ধন্যবাদ। বৃহস্পতিবার কয়টার মধ্যে চেক-আউট করতে হবে?', ipa: '/θæŋk juː ˈveri mʌtʃ wɒt taɪm ɪz ˈtʃekaʊt ɒn ˈθɜːzdeɪ/' }
        ],
        followUps: [
            { en: 'Could I request a late check-out at 1 PM?', bn: 'আমি কি দুপুর ১টা পর্যন্ত লেট চেক-আউটের অনুরোধ করতে পারি?' },
            { en: 'Is there an iron and ironing board inside the room?', bn: 'রুমের ভেতরে কি ইস্ত্রি এবং আয়রনিং বোর্ড আছে?' }
        ],
        closers: [
            { en: 'Thanks for your warm hospitality! Enjoy your evening.', bn: 'আন্তরিক আতিথেয়তার জন্য ধন্যবাদ! আপনার সন্ধ্যাটি সুন্দর কাটুক।' },
            { en: 'If I need anything, I will dial 0 for front desk. Thanks!', bn: 'কোনো কিছু প্রয়োজন হলে ফ্রন্ট ডেস্কে ০ ডায়াল করব। ধন্যবাদ!' }
        ],
        nativePhrases: [
            { phrase: 'Complimentary breakfast', meaning: 'রুমের সাথে ফ্রি সকালের নাশতা', context: 'হোটেল সার্ভিসে ব্যবহৃত শব্দ।' },
            { phrase: 'Pull up your booking', meaning: 'সিস্টেমে আপনার বুকিং তথ্য খোঁজা', context: 'ফ্রন্ট ডেস্কের অফিশিয়াল ভাষা।' },
            { phrase: 'Late check-out', meaning: 'দেরিতে রুম ছাড়া', context: 'হোটেল সময়ের সুবিধা নেওয়া।' }
        ]
    },
    {
        id: 'conv-08-phone-call-catching-up',
        number: 8,
        title: 'Catching Up with an Old Friend on the Phone',
        titleBn: 'ফোনে পুরনো বন্ধুর সাথে কুশল বিনিময় ও আড্ডা',
        level: 'Easy',
        category: 'Social',
        sceneDescription: 'অনেকদিন পর কোনো কাছের বন্ধুকে ফোন করে তার বর্তমান অবস্থা, চাকরি ও পরিবার সম্পর্কে জানা।',
        starters: [
            { en: 'Hey Faisal! Long time no talk, how have you been?', bn: 'আরে ফয়সাল! কতদিন কথা হয় না, কেমন আছিস রে?', tip: 'বন্ধুর সাথে ক্যাজুয়াল ও উষ্ণ অভিবাদন।' }
        ],
        dialogue: [
            { id: 'd1', speaker: 'Sujon', role: 'B', en: 'Hey Faisal! What a pleasant surprise! How\'s everything going with you?', bn: 'আরে ফয়সাল! কী দারুণ এক চমক! তোর দিনকাল কেমন চলছে?', ipa: '/heɪ Faisal wɒt ə ˈpleznt səˈpraɪz haʊz ˈevriθɪŋ ˈɡəʊɪŋ wɪð juː/' },
            { id: 'd2', speaker: 'Faisal', role: 'A', en: 'I know, right? It\'s been ages! Everything is going great on my end. How about you?', bn: 'সত্যিই, কত যুগ হয়ে গেল! আমার দিক দিয়ে সবকিছু ভালোই চলছে। তোর কী খবর বল?', ipa: '/aɪ nəʊ raɪt ɪts biːn ˈeɪdʒɪz ˈevriθɪŋ ɪz ˈɡəʊɪŋ ɡreɪt ɒn maɪ end haʊ əˈbaʊt juː/' },
            { id: 'd3', speaker: 'Sujon', role: 'B', en: 'Can\'t complain, man. Work has been crazy busy lately, but surviving!', bn: 'খারাপ না রে। আজকাল কাজের প্রচণ্ড চাপ যাচ্ছে, তবে সামলে নিচ্ছি!', ipa: '/kɑːnt kəmˈpleɪn mæn wɜːk hæz biːn ˈkreɪzi ˈbɪzi ˈleɪtli bʌt səˈvaɪvɪŋ/' },
            { id: 'd4', speaker: 'Faisal', role: 'A', en: 'I hear you. Are you still working at the same IT firm in Banani?', bn: 'বুঝতে পারছি। তুই কি এখনো বনানীর সেই আইটি ফার্মেই আছিস?', ipa: '/aɪ hɪə juː ɑː juː stɪl ˈwɜːkɪŋ æt ðə seɪm ˌaɪ ˈtiː fɜːm ɪn Banani/' },
            { id: 'd5', speaker: 'Sujon', role: 'B', en: 'Actually, I transitioned to a remote position for a software company based in Germany.', bn: 'আসলে আমি সম্প্রতি জার্মানির একটি সফটওয়্যার কোম্পানির রিমোট জবে চলে গেছি।', ipa: '/ˈæktʃuəli aɪ trænˈzɪʃnd tuː ə rɪˈməʊt pəˈzɪʃn fɔːr ə ˈsɒftweə ˈkʌmpəni beɪst ɪn ˈdʒɜːməni/' },
            { id: 'd6', speaker: 'Faisal', role: 'A', en: 'Whoa, that\'s massive news! Huge congratulations, buddy!', bn: 'আরে বাহ, এ তো বিরাট খবর! অনেক অনেক অভিনন্দন দোস্ত!', ipa: '/wəʊ ðæts ˈmæsɪv njuːz hjuːdʒ kənˌɡrætʃuˈleɪʃnz ˈbʌdi/' },
            { id: 'd7', speaker: 'Sujon', role: 'B', en: 'Thanks a lot! We seriously need to hang out in person. Are you free this Friday?', bn: 'অনেক ধন্যবাদ! আমাদের কিন্তু এবার সামনাসামনি বসা উচিত। এই শুক্রবারে তোর সময় হবে?', ipa: '/θæŋks ə lɒt wiː ˈsɪəriəsli niːd tə hæŋ aʊt ɪn ˈpɜːsn ɑː juː friː ðɪs ˈfraɪdeɪ/' },
            { id: 'd8', speaker: 'Faisal', role: 'A', en: 'Friday evening sounds perfect! Let\'s meet up at our favorite Dhanmondi café.', bn: 'শুক্রবার সন্ধ্যা তো একদম পারফেক্ট! ধানমন্ডির আমাদের প্রিয় ক্যাফেতেই দেখা হচ্ছে।', ipa: '/ˈfraɪdeɪ ˈiːvnɪŋ saʊndz ˈpɜːfɪkt lets miːt ʌp æt ˈaʊə ˈfeɪvərɪt Dhanmondi kæfeɪ/' }
        ],
        followUps: [
            { en: 'How are your parents doing? Please give them my warmest regards.', bn: 'তোর বাবা-মা কেমন আছেন? ওনাদের আমার সালাম দিস।' },
            { en: 'Should we invite Tanvir along as well?', bn: 'তানভীরকেও কি সাথে আসার জন্য বলব?' }
        ],
        closers: [
            { en: 'I have to run into a meeting now, but text me the exact time for Friday!', bn: 'আমাকে এখন একটা মিটিংয়ে ঢুকতে হবে, তবে শুক্রবারের সময়টা মেসেজ করে দিস!' },
            { en: 'Take care of yourself, buddy. Talk to you soon!', bn: 'নিজের যত্ন নিস দোস্ত। শিগগিরই কথা হচ্ছে!' }
        ],
        nativePhrases: [
            { phrase: 'It\'s been ages', meaning: 'কত যুগ হয়ে গেল', context: 'অনেকদিন পর দেখা হলে নেটিভদের সেরা ফ্রেজ।' },
            { phrase: 'Can\'t complain', meaning: 'খারাপ না / বেশ ভালোই আছি', context: 'কেমন আছিস প্রশ্নের স্বাভাবিক উত্তর।' },
            { phrase: 'I hear you', meaning: 'তোর অবস্থাটা আমি বুঝতে পারছি', context: 'সহমর্মিতা প্রকাশের কথ্য ভাষা।' }
        ]
    },
    {
        id: 'conv-09-asking-for-help',
        number: 9,
        title: 'Asking for Help & Returning a Lost Item',
        titleBn: 'কারো সাহায্য চাওয়া ও হারিয়ে যাওয়া জিনিস ফেরত পাওয়ার কথোপকথন',
        level: 'Easy',
        category: 'Services',
        sceneDescription: 'লাইব্রেরি বা ক্যাফেতে নিজের ওয়ালেট বা ফাইল ফেলে আসায় অন্যের সাহায্য নেওয়া।',
        starters: [
            { en: 'Excuse me! I think you dropped something on the floor.', bn: 'মাফ করবেন! মনে হয় মেঝের ওপর আপনার কিছু একটা পড়ে গেছে।', tip: 'কাউকে তার হারিয়ে যাওয়া জিনিস ধরিয়ে দিতে।' }
        ],
        dialogue: [
            { id: 'd1', speaker: 'Helper', role: 'B', en: 'Excuse me, sir! Did you leave your black leather wallet on that table?', bn: 'মাফ করবেন, স্যার! ওই টেবিলটিতে কি আপনার কালো চামড়ার মানিব্যাগটি ফেলে গেছেন?', ipa: '/ɪkˈskjuːz miː sɜː dɪd juː liːv jɔː blæk ˈleðə ˈwɒlɪt ɒn ðæt ˈteɪbl/' },
            { id: 'd2', speaker: 'Person', role: 'A', en: 'Oh my goodness, yes! I was just searching my pockets in sheer panic!', bn: 'ওহ খোদা, হ্যাঁ! আমি আতঙ্কে পকেটে হাতড়ে বেড়াচ্ছিলাম!', ipa: '/əʊ maɪ ˈɡʊdnəs jes aɪ wɒz dʒʌst ˈsɜːtʃɪŋ maɪ ˈpɒkɪts ɪn ʃɪə ˈpænɪk/' },
            { id: 'd3', speaker: 'Helper', role: 'B', en: 'Here it is. I noticed it sitting right next to the coffee cup after you stood up.', bn: 'এই যে নিন। আপনি উঠে যাওয়ার পর দেখলাম কফি কাপের পাশেই এটা পড়ে আছে।', ipa: '/hɪər ɪt ɪz aɪ ˈnəʊtɪst ɪt ˈsɪtɪŋ raɪt nekst tə ðə ˈkɒfi kʌp ˈɑːftə juː stʊd ʌp/' },
            { id: 'd4', speaker: 'Person', role: 'A', en: 'I can\'t thank you enough! All my bank cards and National ID are in here.', bn: 'আমি আপনাকে কীভাবে ধন্যবাদ জানাব ভাষা খুঁজে পাচ্ছি না! আমার সব ব্যাংক কার্ড আর আইডি কার্ড এটার ভেতরে ছিল।', ipa: '/aɪ kɑːnt θæŋk juː ɪˈnʌf ɔːl maɪ bæŋk kɑːdz ænd ˈnæʃnəl ˌaɪ ˈdiː ɑːr ɪn hɪə/' },
            { id: 'd5', speaker: 'Helper', role: 'B', en: 'Please check inside to make sure everything is completely intact.', bn: 'ভেতরে সবকিছু ঠিকঠাক অক্ষত আছে কি না একটু মিলিয়ে দেখে নিন।', ipa: '/pliːz tʃek ɪnˈsaɪd tə meɪk ʃɔːr ˈevriθɪŋ ɪz kəmˈpliːtli ɪnˈtækt/' },
            { id: 'd6', speaker: 'Person', role: 'A', en: 'Every single card and penny is here. You are an absolute lifesaver!', bn: 'প্রতিটি কার্ড আর পয়সা পর্যন্ত এখানে আছে। আপনি সত্যিই আমার জীবন বাঁচালেন!', ipa: '/ˈevri ˈsɪŋɡl kɑːd ænd ˈpeni ɪz hɪə juː ɑːr ən ˈæbsəluːt ˈlaɪfˌseɪvə/' },
            { id: 'd7', speaker: 'Helper', role: 'B', en: 'Don\'t mention it at all! Anyone would have done the exact same thing.', bn: 'আরে এতে ধন্যবাদের কিছু নেই! যে কেউ ঠিক এই কাজটিই করত।', ipa: '/dəʊnt ˈmenʃn ɪt æt ɔːl ˈeniwʌn wʊd hæv dʌn ði ɪɡˈzækt seɪm θɪŋ/' },
            { id: 'd8', speaker: 'Person', role: 'A', en: 'Your honesty is deeply inspiring. Can I at least buy you a fresh coffee?', bn: 'আপনার সততা সত্যিই অনুপ্রেরণাদায়ক। আপনাকে কি অন্তত এক কাপ গরম কফি খাওয়াতে পারি?', ipa: '/jɔːr ˈɒnɪsti ɪz ˈdiːpli ɪnˈspaɪərɪŋ kæn aɪ æt liːst baɪ juː ə freʃ ˈkɒfi/' }
        ],
        followUps: [
            { en: 'Could I get your name so I can remember who helped me today?', bn: 'আপনার নামটি কি জানতে পারি, যাতে মনে রাখতে পারি কে আজ আমাকে সাহায্য করল?' }
        ],
        closers: [
            { en: 'Thank you again from the bottom of my heart. Have a blessed day!', bn: 'হৃদয়ের অন্তস্তল থেকে আপনাকে আবারও ধন্যবাদ। ভালো থাকবেন!' },
            { en: 'Take care, and thank you for being such a wonderful human being!', bn: 'ভালো থাকবেন, এমন চমৎকার একজন মনের মানুষ হওয়ার জন্য ধন্যবাদ!' }
        ],
        nativePhrases: [
            { phrase: 'I can\'t thank you enough', meaning: 'ধন্যবাদ দিয়ে শেষ করা যাবে না', context: 'গভীর কৃতজ্ঞতা প্রকাশের সেরা বাক্য।' },
            { phrase: 'You are a lifesaver', meaning: 'আপনি জীবন বাঁচালেন', context: 'বড় কোনো বিপদ থেকে রক্ষা পেলে।' },
            { phrase: 'Don\'t mention it', meaning: 'এতে ধন্যবাদের কিছু নেই', context: 'ধন্যবাদের জবাবে বিনয়ী উত্তর।' }
        ]
    },
    {
        id: 'conv-10-talking-about-hobbies',
        number: 10,
        title: 'Talking About Hobbies, Free Time & Passions',
        titleBn: 'শখ, অবসর সময় কাটানো ও আগ্রহ নিয়ে প্রাণবন্ত আড্ডা',
        level: 'Easy',
        category: 'Social',
        sceneDescription: 'আইইএলটিএস স্পিকিং পার্ট ১ বা আড্ডায় নিজের প্রিয় শখ ও অবসর সময় নিয়ে বিস্তারিত কথা বলা।',
        starters: [
            { en: 'What do you usually get up to when you\'re not busy working?', bn: 'কাজের বাইরে থাকলে সাধারণত আপনার কী করতে ভালো লাগে?', tip: 'শখ নিয়ে কথা তোলার আধুনিক স্মার্ট ইংরেজি।' }
        ],
        dialogue: [
            { id: 'd1', speaker: 'Arefin', role: 'B', en: 'So Faisal, what do you usually do to unwind over the weekends?', bn: 'তা ফয়সাল, ছুটির দিনে নিজেকে চনমনে রাখতে তুমি কী করো?', ipa: '/səʊ Faisal wɒt duː juː ˈjuːʒuəli duː tuː ʌnˈwaɪnd ˈəʊvə ðə ˌwiːkˈendz/' },
            { id: 'd2', speaker: 'Faisal', role: 'A', en: 'I\'m a massive fan of outdoor photography and reading non-fiction books.', bn: 'আমি আউটডোর ফটোগ্রাফি এবং বাস্তবধর্মী বই পড়ার বিরাট ভক্ত।', ipa: '/aɪm ə ˈmæsɪv fæn ɒv ˈaʊtdɔː fəˈtɒɡrəfi ænd ˈriːdɪŋ nɒn ˈfɪkʃn bʊks/' },
            { id: 'd3', speaker: 'Arefin', role: 'B', en: 'Photography? That\'s fascinating! What kind of subjects do you like capturing?', bn: 'ফটোগ্রাফি? এ তো চমৎকার শখ! কোন ধরনের বিষয় ক্যামেরায় বন্দি করতে ভালোবাসো?', ipa: '/fəˈtɒɡrəfi ðæts ˈfæsɪneɪtɪŋ wɒt kaɪnd ɒv ˈsʌbdʒɪkts duː juː laɪk ˈkæptʃərɪŋ/' },
            { id: 'd4', speaker: 'Faisal', role: 'A', en: 'Mostly street life and architectural heritage in Old Dhaka. The light is magical.', bn: 'বেশিরভাগই পুরান ঢাকার পথঘাট আর প্রাচীন স্থাপত্য। আলোছায়ার খেলাটা দারুণ।', ipa: '/ˈməʊstli striːt laɪf ænd ˌɑːkɪˈtektʃərəl ˈherɪtɪdʒ ɪn Old Dhaka ðə laɪt ɪz ˈmædʒɪkl/' },
            { id: 'd5', speaker: 'Arefin', role: 'B', en: 'I can imagine! Do you post your photographs on Instagram or Flickr?', bn: 'আমি অনুভব করতে পারছি! তোমার ছবিগুলো কি ইনস্টাগ্রাম বা ফ্লিকারে আপলোড করো?', ipa: '/aɪ kæn ɪˈmædʒɪn duː juː pəʊst jɔː ˈfəʊtəɡrɑːfs ɒn Instagram ɔː Flickr/' },
            { id: 'd6', speaker: 'Faisal', role: 'A', en: 'Yes, I run a small Instagram portfolio page. How about you? Any hobbies?', bn: 'হ্যাঁ, ইনস্টাগ্রামে আমার ছোট একটা পোর্টফোলিও আছে। তোমার খবর কী? তোমার কোনো শখ?', ipa: '/jes aɪ rʌn ə smɔːl Instagram pɔːtˈfəʊliəʊ peɪdʒ haʊ əˈbaʊt juː ˈeni ˈhɒbiz/' },
            { id: 'd7', speaker: 'Arefin', role: 'B', en: 'I\'m completely into cooking! Experimenting with new spices totally relaxes my brain.', bn: 'আমি রান্নাবান্না করতে ভীষণ ভালোবাসি! নতুন মসলা নিয়ে পরীক্ষা-নিরীক্ষা করলে মনটা হালকা হয়।', ipa: '/aɪm kəmˈpliːtli ˈɪntə ˈkʊkɪŋ ɪkˈsperɪmentɪŋ wɪð njuː ˈspaɪsɪz ˈtəʊtəli rɪˈlæksɪz maɪ breɪn/' },
            { id: 'd8', speaker: 'Faisal', role: 'A', en: 'That\'s brilliant! You must cook your signature dish for us someday soon.', bn: 'চমৎকার ব্যাপার! একদিন তোমার হাতের সিগনেচার রান্না কিন্তু খাওয়াতেই হবে।', ipa: '/ðæts ˈbrɪliənt juː mʌst kʊk jɔː ˈsɪɡnətʃə dɪʃ fɔːr ʌs ˈsʌmdeɪ suːn/' }
        ],
        followUps: [
            { en: 'How long have you been pursuing this hobby?', bn: 'কতদিন ধরে আপনি এই শখটি লালন করছেন?' },
            { en: 'Does your hobby help you relieve workplace stress?', bn: 'আপনার এই শখটি কি কাজের মানসিক ক্লান্তি কমাতে সাহায্য করে?' }
        ],
        closers: [
            { en: 'It was so refreshing talking about something other than work!', bn: 'কাজের বাইরে ভিন্ন কিছু নিয়ে কথা বলে সত্যিই মনটা চাঙ্গা হয়ে গেল!' },
            { en: 'Send me your Instagram handle, I\'d love to follow your gallery!', bn: 'তোমার ইনস্টাগ্রাম হ্যান্ডেলটা পাঠিয়ে দিও, তোমার গ্যালারি দেখতে ভালো লাগবে!' }
        ],
        nativePhrases: [
            { phrase: 'I\'m completely into...', meaning: 'আমি ...র প্রতি দারুণ আসক্ত/পাগল', context: 'নিজের পছন্দের শখ বোঝাতে।' },
            { phrase: 'To unwind', meaning: 'মানসিক ক্লান্তি দূর করে আরাম করা', context: 'রিলাক্স করার সুন্দর প্রতিশব্দ।' },
            { phrase: 'Signature dish', meaning: 'নিজের হাতের সেরা রান্না', context: 'রান্না সম্পর্কিত প্রশংসায়।' }
        ]
    },

    // ══════════════════════════════════════════════════════════════════
    // INTERMEDIATE LEVEL CONVERSATIONS (১১ থেকে ২০)
    // ══════════════════════════════════════════════════════════════════
    {
        id: 'conv-11-job-interview',
        number: 11,
        title: 'Job Interview: Introducing Background & Strengths',
        titleBn: 'চাকরির ইন্টারভিউতে নিজের ব্যাকগ্রাউন্ড ও দক্ষতা তুলে ধরা',
        level: 'Intermediate',
        category: 'Professional',
        sceneDescription: 'একটি কর্পোরেট প্রতিষ্ঠানে ইন্টারভিউ বোর্ডে নিজের অভিজ্ঞতা, শক্তি ও লক্ষ্য সাবলীলভাবে উপস্থাপন।',
        starters: [
            { en: 'Good morning, members of the board. It\'s an absolute honor to be here today.', bn: 'শুভ সকাল, বোর্ড সদস্যবৃন্দ। আজ এখানে উপস্থিত হতে পেরে আমি অত্যন্ত সম্মানিত।', tip: 'ইন্টারভিউ রুমে প্রবেশের রাজকীয় উদ্বোধনী বাক্য।' }
        ],
        dialogue: [
            { id: 'd1', speaker: 'Interviewer', role: 'B', en: 'Welcome, Faisal. Could you walk us through your professional background briefly?', bn: 'স্বাগতম, ফয়সাল। সংক্ষেপে আপনার পেশাগত ব্যাকগ্রাউন্ড সম্পর্কে আমাদের একটু বলবেন কি?', ipa: '/ˈwelkəm Faisal kʊd juː wɔːk ʌs θruː jɔː prəˈfeʃənl ˈbækɡraʊnd ˈbriːfli/' },
            { id: 'd2', speaker: 'Candidate', role: 'A', en: 'Certainly! I have a background in Computer Science with over three years in web development.', bn: 'অবশ্যই! কম্পিউটার সায়েন্সে পড়াশোনার পর ওয়েব ডেভেলপমেন্টে আমার তিন বছরের বেশি অভিজ্ঞতা রয়েছে।', ipa: '/ˈsɜːtnli aɪ hæv ə ˈbækɡraʊnd ɪn kəmˈpjuːtə ˈsaɪəns wɪð ˈəʊvə θriː jɪəz ɪn web dɪˈveləpmənt/' },
            { id: 'd3', speaker: 'Interviewer', role: 'B', en: 'Impressive. What would you say is your greatest technical or personal strength?', bn: 'চমৎকার। আপনার সবচেয়ে বড় কারিগরি বা ব্যক্তিগত শক্তি আপনি কী মনে করেন?', ipa: '/ɪmˈpresɪv wɒt wʊd juː seɪ ɪz jɔː ˈɡreɪtɪst ˈteknɪkl ɔː ˈpɜːsənl streŋθ/' },
            { id: 'd4', speaker: 'Candidate', role: 'A', en: 'My greatest strength is adaptability. When faced with complex bugs, I stay methodical and patient.', bn: 'আমার সবচেয়ে বড় শক্তি হলো খাপ খাইয়ে নেওয়ার ক্ষমতা। জটিল সমস্যার মুখে আমি নিয়মমাফিক ও ধৈর্যশীল থাকি।', ipa: '/maɪ ˈɡreɪtɪst streŋθ ɪz əˌdæptəˈbɪləti wen feɪst wɪð ˈkɒmpleks bʌɡz aɪ steɪ mɪˈθɒdɪkl ænd ˈpeɪʃnt/' },
            { id: 'd5', speaker: 'Interviewer', role: 'B', en: 'How do you handle tight deadlines under pressure from challenging stakeholders?', bn: 'চ্যালেঞ্জিং ক্লায়েন্টদের পক্ষ থেকে চাপ আসলে আপনি কীভাবে টাইট ডেডলাইন সামলান?', ipa: '/haʊ duː juː ˈhændl taɪt ˈdedlaɪnz ˈʌndə ˈpreʃə frɒm ˈtʃælɪndʒɪŋ ˈsteɪkˌhəʊldəz/' },
            { id: 'd6', speaker: 'Candidate', role: 'A', en: 'I prioritize critical deliverables, communicate transparently, and never compromise on code quality.', bn: 'আমি সবচেয়ে জরুরি কাজগুলোকে অগ্রাধিকার দিই, খোলামেলা যোগাযোগ রাখি এবং কোডের মানের সাথে আপস করি না।', ipa: '/aɪ praɪˈɒrətaɪz ˈkrɪtɪkl dɪˈlɪvrəblz kəˈmjuːnɪkeɪt trænsˈpærəntli ænd ˈnevə ˈkɒmprəmaɪz ɒn kəʊd ˈkwɒləti/' },
            { id: 'd7', speaker: 'Interviewer', role: 'B', en: 'Why are you specifically interested in joining our company rather than others?', bn: 'অন্যান্য কোম্পানি ছেড়ে আপনি বিশেষভাবে আমাদের কোম্পানিতে যোগ দিতে আগ্রহী কেন?', ipa: '/waɪ ɑː juː spəˈsɪfɪkli ˈɪntrəstɪd ɪn ˈdʒɔɪnɪŋ ˈaʊə ˈkʌmpəni ˈrɑːðə ðæn ˈʌðəz/' },
            { id: 'd8', speaker: 'Candidate', role: 'A', en: 'Your focus on scalable AI infrastructure directly aligns with my passion for building impactful software.', bn: 'স্কেলেবল এআই প্রযুক্তির ওপর আপনাদের ফোকাস টেকসই সফটওয়্যার তৈরির আমার স্বপ্নের সাথে হুবহু মিলে যায়।', ipa: '/jɔː ˈfəʊkəs ɒn ˈskeɪləbl ˌeɪ ˈaɪ ˌɪnfrəˈstrʌktʃə daɪˈrektli əˈlaɪnz wɪð maɪ ˈpæʃn fɔː ˈbɪldɪŋ ɪmˈpæktfl ˈsɒftweə/' }
        ],
        followUps: [
            { en: 'Do you have any questions for us regarding the team structure or company culture?', bn: 'টিমের কাঠামো বা কোম্পানির কালচার নিয়ে আপনার কি আমাদের কিছু জানার আছে?' },
            { en: 'What are your salary expectations for this senior engineering role?', bn: 'এই সিনিয়র ইঞ্জিনিয়ারিং পদের জন্য আপনার প্রত্যাশিত বেতন কেমন?' }
        ],
        closers: [
            { en: 'Thank you for your valuable time and consideration. I look forward to hearing from you.', bn: 'আপনাদের মূল্যবান সময় ও বিবেচনার জন্য ধন্যবাদ। আপনাদের সিদ্ধান্তের অপেক্ষায় থাকলাম।' },
            { en: 'Have a productive afternoon, everyone. It was a pleasure meeting you all.', bn: 'আপনাদের সবার দিনটি ফলপ্রসূ হোক। আপনাদের সাথে কথা বলে অনেক ভালো লাগল।' }
        ],
        nativePhrases: [
            { phrase: 'Walk us through your background', meaning: 'আপনার ব্যাকগ্রাউন্ড বিস্তারিত বলুন', context: 'ইন্টারভিউয়ের বহুল পরিচিত প্রশ্ন।' },
            { phrase: 'Aligns directly with...', meaning: 'একদম সরাসরি মিলে যাওয়া', context: 'কোম্পানি কালচারের সাথে খাপ খাওয়ানো।' },
            { phrase: 'Never compromise on quality', meaning: 'মানের সাথে কখনো আপস না করা', context: 'পেশাদারিত্ব প্রকাশে শক্তিশালী অঙ্গীকার।' }
        ]
    },
    {
        id: 'conv-12-office-meeting-opinions',
        number: 12,
        title: 'Office Meeting: Expressing Opinions & Disagreeing Politely',
        titleBn: 'অফিস মিটিংয়ে মার্জিতভাবে মতামত দেওয়া ও দ্বিমত পোষণ',
        level: 'Intermediate',
        category: 'Professional',
        sceneDescription: 'টিম মিটিংয়ে একটি প্রজেক্টের পরিকল্পনা নিয়ে নিজের ভিন্নমত ভদ্রভাবে প্রকাশ করা।',
        starters: [
            { en: 'If I may jump in here, I\'d like to offer a slightly different perspective.', bn: 'আমি যদি এখানে একটু কথা বলতে পারি, আমি একটু ভিন্ন দৃষ্টিকোণ তুলে ধরতে চাই।', tip: 'মিটিংয়ে কারো কথায় ভদ্রভাবে ইন্টারাপ্ট করে মতামত দেওয়ার সেরা বাক্য।' }
        ],
        dialogue: [
            { id: 'd1', speaker: 'Team Lead', role: 'B', en: 'So our current plan is to launch the marketing campaign this Thursday. Any thoughts?', bn: 'তাহলে আমাদের বর্তমান পরিকল্পনা হলো এই বৃহস্পতিবার মার্কেটিং ক্যাম্পেইন শুরু করা। কারও কোনো মতামত আছে?', ipa: '/səʊ ˈaʊə ˈkʌrənt plæn ɪz tə lɔːntʃ ðə ˈmɑːkɪtɪŋ kæmˈpeɪn ðɪs ˈθɜːzdeɪ ˈeni θɔːts/' },
            { id: 'd2', speaker: 'Faisal', role: 'A', en: 'If I may weigh in, I see where you\'re coming from, but I have a minor reservation.', bn: 'আমি যদি কিছু বলি, আপনার ভাবনাটা আমি বুঝতে পারছি, তবে আমার একটা ছোট দ্বিধা রয়েছে।', ipa: '/ɪf aɪ meɪ weɪ ɪn aɪ siː weə jɔː ˈkʌmɪŋ frɒm bʌt aɪ hæv ə ˈmaɪnə ˌrezəˈveɪʃn/' },
            { id: 'd3', speaker: 'Team Lead', role: 'B', en: 'Go ahead, Faisal! We want all constructive feedback on the table.', bn: 'হ্যাঁ বলো, ফয়সাল! আমরা সব গঠনমূলক মতামতই টেবিলে খোলাখুলি রাখতে চাই।', ipa: '/ɡəʊ əˈhed Faisal wiː wɒnt ɔːl kənˈstrʌktɪv ˈfiːdbæk ɒn ðə ˈteɪbl/' },
            { id: 'd4', speaker: 'Faisal', role: 'A', en: 'Our mobile payment gateway is still under QA testing. Launching Thursday might trigger bug reports.', bn: 'আমাদের মোবাইল পেমেন্ট গেটওয়ে এখনো কিউএ টেস্টিংয়ে রয়েছে। বৃহস্পতিবার লঞ্চ করলে বাগ রিপোর্ট আসতে পারে।', ipa: '/ˈaʊə ˈməʊbaɪl ˈpeɪmənt ˈɡeɪtweɪ ɪz stɪl ˈʌndə ˌkjuː ˈeɪ ˈtestɪŋ ˈlɔːntʃɪŋ ˈθɜːzdeɪ maɪt ˈtrɪɡə bʌɡ rɪˈpɔːts/' },
            { id: 'd5', speaker: 'Team Lead', role: 'B', en: 'That\'s a valid concern. What would you propose as an alternative timeline?', bn: 'খুবই যৌক্তিক উদ্বেগ। এর বিকল্প সময়সূচি হিসেবে তুমি কী প্রস্তাব করবে?', ipa: '/ðæts ə ˈvælɪd kənˈsɜːn wɒt wʊd juː prəˈpəʊz æz ən ɔːlˈtɜːnətɪv ˈtaɪmlaɪn/' },
            { id: 'd6', speaker: 'Faisal', role: 'A', en: 'I suggest pushing the launch to next Monday. That gives our developers the weekend buffer.', bn: 'আমি ক্যাম্পেইনটি আগামী সোমবার পর্যন্ত পিছিয়ে দেওয়ার প্রস্তাব করছি। এতে আমাদের ডেভেলপাররা উইকেন্ডের বাফার সময় পাবে।', ipa: '/aɪ səˈdʒest ˈpʊʃɪŋ ðə lɔːntʃ tə nekst ˈmʌndeɪ ðæt ɡɪvz ˈaʊə dɪˈveləpəz ðə ˌwiːkˈend ˈbʌfə/' },
            { id: 'd7', speaker: 'Team Lead', role: 'B', en: 'I completely buy into that logic. Better safe than sorry. Let\'s make it Monday.', bn: 'আমি এই যুক্তির সাথে সম্পূর্ণ একমত। দেরিতে নিখুঁত হওয়াই ভালো। তাহলে সোমবারেই ফাইনাল করা যাক।', ipa: '/aɪ kəmˈpliːtli baɪ ˈɪntuː ðæt ˈlɒdʒɪk ˈbetə seɪf ðæn ˈsɒri lets meɪk ɪt ˈmʌndeɪ/' },
            { id: 'd8', speaker: 'Faisal', role: 'A', en: 'Thank you. I\'ll personally sync with the QA team today to make sure we\'re on track.', bn: 'ধন্যবাদ। সবকিছু ঠিক পথে এগোচ্ছে কি না নিশ্চিত করতে আজকেই আমি নিজে কিউএ টিমের সাথে কথা বলে নেব।', ipa: '/θæŋk juː aɪl ˈpɜːsənəli sɪŋk wɪð ðə ˌkjuː ˈeɪ tiːm təˈdeɪ tə meɪk ʃɔː wiːər ɒn træk/' }
        ],
        followUps: [
            { en: 'Should we draft an internal notification regarding this updated launch date?', bn: 'নতুন এই লঞ্চের তারিখ জানিয়ে কি অভ্যন্তরীণ নোটিফিকেশন ড্রাফট করা উচিত?' },
            { en: 'Does this change impact any deliverables for the graphics design team?', bn: 'এই পরিবর্তনের কারণে কি গ্রাফিক্স টিমের কোনো কাজের ওপর প্রভাব পড়বে?' }
        ],
        closers: [
            { en: 'Thanks for hearing me out, everyone. Let\'s regroup tomorrow for a quick standup.', bn: 'মনোযোগ দিয়ে শোনার জন্য সবাইকে ধন্যবাদ। কাল সকালে সংক্ষিপ্ত স্ট্যান্ডআপ মিটিংয়ে আবার দেখা হচ্ছে।' }
        ],
        nativePhrases: [
            { phrase: 'I see where you\'re coming from, but...', meaning: 'আপনার পয়েন্ট আমি বুঝতে পারছি, তবে...', context: 'ভদ্রভাবে দ্বিমত প্রকাশের সেরা আন্তর্জাতিক কৌশল।' },
            { phrase: 'Better safe than sorry', meaning: 'পরে পস্তানোর চেয়ে আগে সাবধান হওয়াই ভালো', context: 'ঝুঁকি এড়ানোর জনপ্রিয় প্রবাদ।' },
            { phrase: 'Buy into that logic', meaning: 'যুক্তির সাথে একমত হওয়া', context: 'মিটিংয়ে সম্মতি জানাতে।' }
        ]
    },
    {
        id: 'conv-13-airport-checkin',
        number: 13,
        title: 'Airport: Check-in, Baggage & Boarding Gate',
        titleBn: 'আন্তর্জাতিক বিমানবন্দরে লাগেজ চেক-ইন ও বোর্ডিংয়ের কথোপকথন',
        level: 'Intermediate',
        category: 'Travel',
        sceneDescription: 'বিদেশে যাওয়ার সময় আন্তর্জাতিক বিমানবন্দরে এয়ারলাইন্স কাউন্টারে পাসপোর্ট দেখানো, লাগেজ জমা দেওয়া ও বোর্ডিং পাস নেওয়া।',
        starters: [
            { en: 'Good morning! Flying to London Heathrow on flight BG-201.', bn: 'শুভ সকাল! ফ্লাইট নম্বর BG-201 যোগে লন্ডন হিথ্রোতে যাচ্ছি।', tip: 'এয়ারলাইন্স কাউন্টারে সরাসরি শুরু।' }
        ],
        dialogue: [
            { id: 'd1', speaker: 'Agent', role: 'B', en: 'Good morning! Passports and visa documents, please.', bn: 'শুভ সকাল! দয়া করে আপনার পাসপোর্ট এবং ভিসা কাগজপত্রগুলো দিন।', ipa: '/ɡʊd ˈmɔːnɪŋ ˈpɑːspɔːts ænd ˈviːzə ˈdɒkjumənts pliːz/' },
            { id: 'd2', speaker: 'Passenger', role: 'A', en: 'Here you go. My passport with the valid UK student visa stamped inside.', bn: 'এই নিন। আমার পাসপোর্ট এবং ভেতরে যুক্তরাজ্যের বৈধ স্টুডেন্ট ভিসা স্ট্যাম্প করা আছে।', ipa: '/hɪə juː ɡəʊ maɪ ˈpɑːspɔːt wɪð ðə ˈvælɪd ˌjuː ˈkeɪ ˈstjuːdnt ˈviːzə stæmpt ɪnˈsaɪd/' },
            { id: 'd3', speaker: 'Agent', role: 'B', en: 'Thank you. How many checked bags will you be dropping off today?', bn: 'ধন্যবাদ। আজকে আপনার চেক-ইন ব্যাগেজ কয়টি জমা দিচ্ছেন?', ipa: '/θæŋk juː haʊ ˈmeni tʃekt bæɡz wɪl juː biː ˈdrɒpɪŋ ɒf təˈdeɪ/' },
            { id: 'd4', speaker: 'Passenger', role: 'A', en: 'Just two large suitcases, plus my personal backpack as carry-on.', bn: 'শুধু দুটি বড় স্যুটকেস, আর সাথে কেবিনে নেওয়ার জন্য আমার ব্যক্তিগত ব্যাকপ্যাক।', ipa: '/dʒʌst tuː lɑːdʒ ˈsuːtkeɪsɪz plʌs maɪ ˈpɜːsənl ˈbækpæk æz ˈkæri ɒn/' },
            { id: 'd5', speaker: 'Agent', role: 'B', en: 'Please place your first suitcase onto the scale. Perfect, 22 kilos. Right under the limit.', bn: 'আপনার প্রথম স্যুটকেসটি স্কেলের ওপর রাখুন। একদম নিখুঁত, ২২ কেজি। ওজনের সীমার নিচেই আছে।', ipa: '/pliːz pleɪs jɔː fɜːst ˈsuːtkeɪs ˈɒntuː ðə skeɪl ˈpɜːfɪkt ˈtwenti tuː ˈkiːləʊz raɪt ˈʌndə ðə ˈlɪmɪt/' },
            { id: 'd6', speaker: 'Passenger', role: 'A', en: 'Could I kindly request an aisle seat, if one is still available?', bn: 'এখনো যদি খালি থাকে, আমাকে কি একটি আইল (রাস্তার পাশের) সিট দেওয়া যাবে?', ipa: '/kʊd aɪ ˈkaɪndli rɪˈkwest ən aɪl siːt ɪf wʌn ɪz stɪl əˈveɪləbl/' },
            { id: 'd7', speaker: 'Agent', role: 'B', en: 'You\'re in luck! Seat 18C is open. Here are your baggage tags and boarding pass.', bn: 'আপনার ভাগ্য ভালো! ১৮সি নম্বর সিটটি খালি আছে। এই নিন আপনার ব্যাগেজ ট্যাগ এবং বোর্ডিং পাস।', ipa: '/jɔːr ɪn lʌk siːt ˌeɪˈtiːn siː ɪz ˈəʊpən hɪər ɑː jɔː ˈbæɡɪdʒ tæɡz ænd ˈbɔːdɪŋ pɑːs/' },
            { id: 'd8', speaker: 'Passenger', role: 'A', en: 'Thank you! Which gate does this flight board from, and at what time?', bn: 'ধন্যবাদ! এই ফ্লাইটটি কোন গেট থেকে ছাড়বে এবং কয়টায় বোর্ডিং শুরু হবে?', ipa: '/θæŋk juː wɪtʃ ɡeɪt dʌz ðɪs flaɪt bɔːd frɒm ænd æt wɒt taɪm/' }
        ],
        followUps: [
            { en: 'Gate 7, boarding begins promptly at 9:15 AM. Head straight through security.', bn: '৭ নম্বর গেট, সোয়া ৯টায় বোর্ডিং শুরু হবে। সোজা সিকিউরিটি চেকিংয়ের দিকে এগিয়ে যান।' }
        ],
        closers: [
            { en: 'Have a safe and pleasant flight to London!', bn: 'লন্ডনে আপনার ভ্রমণ নিরাপদ ও আনন্দময় হোক!' },
            { en: 'Thank you so much for your efficient help. Good day!', bn: 'আপনার দ্রুত ও আন্তরিক সহযোগিতার জন্য অনেক ধন্যবাদ। ভালো থাকবেন!' }
        ],
        nativePhrases: [
            { phrase: 'Carry-on luggage', meaning: 'কেবিনে সাথে রাখা ছোট ব্যাগ', context: 'বিমান ভ্রমণের মৌলিক পরিভাষা।' },
            { phrase: 'Aisle seat vs Window seat', meaning: 'আইল সিট বনাম জানালার পাশের সিট', context: 'সিট পছন্দের অনুরোধে।' },
            { phrase: 'Boarding begins promptly at...', meaning: 'ঠিক সময়মতো বোর্ডিং শুরু হবে', context: 'সময় মেনে চলার বার্তা।' }
        ]
    },
    {
        id: 'conv-14-customer-complaint',
        number: 14,
        title: 'Customer Care: Reporting an Issue / Complaint Politely',
        titleBn: 'কাস্টমার কেয়ারে কোনো ত্রুটি নিয়ে অভিযোগ ও সমাধান খোঁজা',
        level: 'Intermediate',
        category: 'Services',
        sceneDescription: 'অনলাইনে কেনা একটি গ্যাজেট কাজ না করায় শান্ত কিন্তু দৃঢ় ভাষায় কাস্টমার সার্ভিসে ফোন করে সমাধান চাওয়া।',
        starters: [
            { en: 'Hello, I\'m calling regarding an order I received yesterday that seems defective.', bn: 'হ্যালো, আমি গতকাল পাওয়া একটি ত্রুটিপূর্ণ অর্ডার সংক্রান্ত বিষয়ে ফোন করেছি।', tip: 'শান্ত অথচ পেশাদার অভিযোগের সূচনা।' }
        ],
        dialogue: [
            { id: 'd1', speaker: 'Agent', role: 'B', en: 'Thank you for calling TechCare Support. My name is Alex. How may I assist you?', bn: 'টেক কেয়ার সাপোর্টে কল করার জন্য ধন্যবাদ। আমার নাম অ্যালেক্স। আমি কীভাবে সাহায্য করতে পারি?', ipa: '/θæŋk juː fɔː ˈkɔːlɪŋ TechCare səˈpɔːt maɪ neɪm ɪz ˈæleks haʊ meɪ aɪ əˈsɪst juː/' },
            { id: 'd2', speaker: 'Customer', role: 'A', en: 'Hi Alex. I ordered a wireless microphone kit, but the receiver refuses to charge.', bn: 'হাই অ্যালেক্স। আমি একটি ওয়্যারলেস মাইক্রোফোন কিট অর্ডার করেছিলাম, কিন্তু রিসিভারটি চার্জ নিচ্ছে না।', ipa: '/haɪ ˈæleks aɪ ˈɔːdəd ə ˈwaɪələs ˈmaɪkrəfəʊn kɪt bʌt ðə rɪˈsiːvə rɪˈfjuːzɪz tə tʃɑːdʒ/' },
            { id: 'd3', speaker: 'Agent', role: 'B', en: 'I\'m truly sorry to hear that you\'re experiencing this trouble. May I have your order ID?', bn: 'আপনি এমন সমস্যায় পড়েছেন শুনে আন্তরিকভাবে দুঃখ প্রকাশ করছি। আপনার অর্ডার আইডি নম্বরটি জানতে পারি?', ipa: '/aɪm ˈtruːli ˈsɒri tə hɪə ðæt jɔːr ɪkˈspɪəriənsɪŋ ðɪs ˈtrʌbl meɪ aɪ hæv jɔːr ˈɔːdər ˌaɪ ˈdiː/' },
            { id: 'd4', speaker: 'Customer', role: 'A', en: 'Yes, the order number is TC-98421. Placed three days ago.', bn: 'হ্যাঁ, অর্ডার নম্বরটি হলো TC-98421। তিন দিন আগে দেওয়া হয়েছিল।', ipa: '/jes ði ˈɔːdə ˈnʌmbər ɪz TC-98421 pleɪst θriː deɪz əˈɡəʊ/' },
            { id: 'd5', speaker: 'Agent', role: 'B', en: 'Got it. Have you tried testing it with an alternative USB-C cable or power adapter?', bn: 'পেয়েছি। আপনি কি অন্য কোনো ইউএসবি-সি ক্যাবল বা পাওয়ার এডাপ্টার দিয়ে পরীক্ষা করে দেখেছেন?', ipa: '/ɡɒt ɪt hæv juː traɪd ˈtestɪŋ ɪt wɪð ən ɔːlˈtɜːnətɪv ˌjuː es ˈbiː siː ˈkeɪbl ɔː ˈpaʊər əˈdæptə/' },
            { id: 'd6', speaker: 'Customer', role: 'A', en: 'Yes, I tried multiple chargers. The red indicator light doesn\'t blink at all.', bn: 'হ্যাঁ, একাধিক চার্জার দিয়ে দেখেছি। লাল নির্দেশক বাতিটি একটুও জ্বলছে না।', ipa: '/jes aɪ traɪd ˈmʌltɪpl ˈtʃɑːdʒəz ðə red ˈɪndɪkeɪtə laɪt ˈdʌznt blɪŋk æt ɔːl/' },
            { id: 'd7', speaker: 'Agent', role: 'B', en: 'Understood. Since it\'s within our 7-day replacement window, we\'ll arrange an immediate swap.', bn: 'বুঝতে পেরেছি। যেহেতু এটি আমাদের ৭ দিনের রিপ্লেসমেন্ট মেয়াদের মধ্যে আছে, আমরা এখনই নতুন পণ্যের ব্যবস্থা করছি।', ipa: '/ˌʌndəˈstʊd sɪns ɪts wɪðˈɪn ˈaʊə ˈsevn deɪ rɪˈpleɪsmənt ˈwɪndəʊ wiːl əˈreɪndʒ ən ɪˈmiːdiət swɒp/' },
            { id: 'd8', speaker: 'Customer', role: 'A', en: 'That would be wonderful. Will the courier pick up the defective unit at the same time?', bn: 'তাহলে তো দারুণ হয়। কুরিয়ার কি একই সময়ে এই ত্রুটিপূর্ণ জিনিসটি নিয়ে যাবে?', ipa: '/ðæt wʊd biː ˈwʌndəfl wɪl ðə ˈkʊriə pɪk ʌp ðə dɪˈfektɪv ˈjuːnɪt æt ðə seɪm taɪm/' }
        ],
        followUps: [
            { en: 'Yes, our delivery rider will bring the replacement and collect the faulty unit tomorrow morning.', bn: 'হ্যাঁ, আমাদের ডেলিভারি রাইডার কাল সকালে নতুন প্রোডাক্ট নিয়ে আসবে এবং নষ্টটি তুলে নেবে।' }
        ],
        closers: [
            { en: 'I truly appreciate how swiftly you resolved this concern, Alex. Thank you!', bn: 'আপনি এত দ্রুত সমস্যাটি সমাধান করায় আমি আন্তরিক কৃতজ্ঞতা জানাচ্ছি, অ্যালেক্স। ধন্যবাদ!' },
            { en: 'It\'s my pleasure. You will receive an SMS confirmation within five minutes. Have a great day!', bn: 'এটা আমার দায়িত্ব ছিল। পাঁচ মিনিটের মধ্যে কনফার্মেশন এসএমএস পেয়ে যাবেন। ভালো থাকবেন!' }
        ],
        nativePhrases: [
            { phrase: 'Within the replacement window', meaning: 'বদলানোর নির্দিষ্ট সময়সীমার মধ্যে', context: 'ওয়ারেন্টি বা গ্যারান্টি আলোচনায়।' },
            { phrase: 'Refuses to charge / turn on', meaning: 'চার্জ বা অন হতে চাইছে না', context: 'যন্ত্র কাজ না করলে সুন্দর বাক্য।' },
            { phrase: 'Arrange an immediate swap', meaning: 'তাৎক্ষণিক পণ্য বদলের ব্যবস্থা করা', context: 'কাস্টমার কেয়ারের সমাধান।' }
        ]
    },
    {
        id: 'conv-15-declining-invitation',
        number: 15,
        title: 'Declining an Invitation Politely Without Offending',
        titleBn: 'কাউকে আঘাত না দিয়ে মার্জিতভাবে কোনো আমন্ত্রণ প্রত্যাখ্যান করা',
        level: 'Intermediate',
        category: 'Social',
        sceneDescription: 'কোনো বন্ধু বা সহকর্মী নিমন্ত্রণ জানালে কীভাবে ভদ্রভাবে অপারগতা প্রকাশ করে সম্পর্ক সুন্দর রাখা যায়।',
        starters: [
            { en: 'Hey, I wanted to personally thank you for thinking of me and sending the invite.', bn: 'আরে, আমাকে মনে রেখে ইনভাইটেশন পাঠানোর জন্য তোকে মন থেকে ধন্যবাদ জানাতে চাই।', tip: 'প্রত্যাখ্যানের আগে আন্তরিক কৃতজ্ঞতা জানানো।' }
        ],
        dialogue: [
            { id: 'd1', speaker: 'Host', role: 'B', en: 'Hey Faisal! Are you coming to our rooftop barbecue get-together this Saturday?', bn: 'আরে ফয়সাল! এই শনিবারে আমাদের ছাদের ওপর বারবিকিউ আড্ডায় তুই আসছিস তো?', ipa: '/heɪ Faisal ɑː juː ˈkʌmɪŋ tə ˈaʊə ˈruːftɒp ˈbɑːbɪkjuː ɡet təˈɡeðə ðɪs ˈsætədeɪ/' },
            { id: 'd2', speaker: 'Friend', role: 'A', en: 'Oh man, that sounds like an absolute blast! Thank you so much for inviting me.', bn: 'আরে দারুণ ব্যাপার, শুনতেই ভীষণ মজার মনে হচ্ছে! আমাকে ডাকার জন্য অনেক ধন্যবাদ।', ipa: '/əʊ mæn ðæt saʊndz laɪk ən ˈæbsəluːt blɑːst θæŋk juː səʊ mʌtʃ fɔːr ɪnˈvaɪtɪŋ miː/' },
            { id: 'd3', speaker: 'Host', role: 'B', en: 'Everyone from our college circle is going to be there. You have to join!', bn: 'আমাদের কলেজের বন্ধুদের প্রায় সবাই থাকবে। তোকে কিন্তু আসতেই হবে!', ipa: '/ˈevriwʌn frɒm ˈaʊə ˈkɒlɪdʒ ˈsɜːkl ɪz ˈɡəʊɪŋ tə biː ðeə juː hæv tə dʒɔɪn/' },
            { id: 'd4', speaker: 'Friend', role: 'A', en: 'I truly wish I could, but I have a prior family commitment that I simply can\'t miss.', bn: 'আমার সত্যি আসার তীব্র ইচ্ছে ছিল, কিন্তু পারিবারিকভাবে আগে থেকেই এমন একটা কাজ ঠিক করা যা কোনোভাবেই এড়ানো সম্ভব নয়।', ipa: '/aɪ ˈtruːli wɪʃ aɪ kʊd bʌt aɪ hæv ə ˈpraɪər ˈfæməli kəˈmɪtmənt ðæt aɪ ˈsɪmpli kɑːnt mɪs/' },
            { id: 'd5', speaker: 'Host', role: 'B', en: 'Oh, what a bummer! We\'re really going to miss your presence and energy.', bn: 'আহারে, সত্যি মনটাই খারাপ হয়ে গেল! তোর উপস্থিতি আর আনন্দ আমরা খুব মিস করব।', ipa: '/əʊ wɒt ə ˈbʌmə wiːər ˈrɪəli ˈɡəʊɪŋ tə mɪs jɔː ˈprezns ænd ˈenədʒi/' },
            { id: 'd6', speaker: 'Friend', role: 'A', en: 'Trust me, I\'m super bummed out too. But can we take a rain check for next week?', bn: 'বিশ্বাস কর, আমারও ভীষণ মন খারাপ লাগছে। তবে আগামী সপ্তাহে আমরা কি আলাদা করে বসতে পারি?', ipa: '/trʌst miː aɪm ˈsuːpə bʌmd aʊt tuː bʌt kæn wiː teɪk ə reɪn tʃek fɔː nekst wiːk/' },
            { id: 'd7', speaker: 'Host', role: 'B', en: 'Deal! Coffee next Wednesday is definitely on me.', bn: 'পাক্কা কথা! আগামী বুধবারের কফি কিন্তু আমার তরফ থেকে।' , ipa: '/diːl ˈkɒfi nekst ˈwenzdeɪ ɪz ˈdefɪnətli ɒn miː/' },
            { id: 'd8', speaker: 'Friend', role: 'A', en: 'Sounds like a plan! Please snap lots of photos and give everyone my regards.', bn: 'দারুণ প্রস্তাব! অনেক ছবি তুলিস আর সবাইকে আমার সালাম ও শুভেচ্ছা দিস।' , ipa: '/saʊndz laɪk ə plæn pliːz snæp lɒts ɒv ˈfəʊtəʊz ænd ɡɪv ˈevriwʌn maɪ rɪˈɡɑːdz/' }
        ],
        followUps: [
            { en: 'I\'ll drop by for 10 minutes on Friday just to hand over my gift if possible.', bn: 'সম্ভব হলে শুক্রবার ১০ মিনিটের জন্য একটু ঢুঁ মেরে উপহারটা দিয়ে যাব।' }
        ],
        closers: [
            { en: 'Have an absolute blast on Saturday! Talk to you early next week.', bn: 'শনিবার দারুণ মজা করিস! আগামী সপ্তাহের শুরুতে কথা হবে।' }
        ],
        nativePhrases: [
            { phrase: 'Prior commitment', meaning: 'পূর্বনির্ধারিত জরুরি কাজ', context: 'সম্মানজনক অপারগতার কারণ।' },
            { phrase: 'Take a rain check', meaning: 'এই দফায় বাদ দিয়ে পরের বার করা', context: 'আমন্ত্রণ পিছিয়ে নেওয়ার বিশ্বখ্যাত ইডিয়ম।' },
            { phrase: 'Sounds like an absolute blast', meaning: 'শুনতেই ভীষণ চমৎকার ও উত্তেজনাকর মনে হচ্ছে', context: 'অনুষ্ঠানের প্রশংসা করতে।' }
        ]
    },
    {
        id: 'conv-16-negotiating-price',
        number: 16,
        title: 'Negotiating a Price or Freelance Contract Rate',
        titleBn: 'ফ্রিল্যান্সিং রেট বা সেবামূল্য নিয়ে দরকষাকষির কথোপকথন',
        level: 'Intermediate',
        category: 'Professional',
        sceneDescription: 'একজন ক্লায়েন্টের সাথে নিজের কাজের মান বজায় রেখে সম্মানজনক পারিশ্রমিক নির্ধারণ করা।',
        starters: [
            { en: 'Thank you for reviewing the initial project brief. Shall we discuss the compensation?', bn: 'প্রজেক্টের প্রাথমিক বিবরণ দেখার জন্য ধন্যবাদ। আমরা কি পারিশ্রমিকের বিষয়ে আলোচনা করব?', tip: 'টাকার কথায় পেশাদার রূপ।' }
        ],
        dialogue: [
            { id: 'd1', speaker: 'Client', role: 'B', en: 'Faisal, we love your portfolio, but your quote of $1,500 is a bit beyond our budget.', bn: 'ফয়সাল, তোমার পোর্টফোলিও আমাদের পছন্দ হয়েছে, তবে ১,৫০০ ডলারের বাজেটটা আমাদের সামর্থ্যের চেয়ে কিছুটা বেশি।', ipa: '/Faisal wiː lʌv jɔː pɔːtˈfəʊliəʊ bʌt jɔː kwəʊt ɒv ˈfɪftiːn ˈhʌndrəd ˈdɒləz ɪz ə bɪt bɪˈjɒnd ˈaʊə ˈbʌdʒɪt/' },
            { id: 'd2', speaker: 'Freelancer', role: 'A', en: 'I understand your budgetary constraints. What ballpark figure did your team have in mind?', bn: 'বাজেটের সীমাবদ্ধতা আমি বুঝতে পারছি। আপনাদের টিম ঠিক কত টাকার মধ্যে চিন্তা করছিল?', ipa: '/aɪ ˌʌndəˈstænd jɔː ˈbʌdʒɪtəri kənˈstreɪnts wɒt ˈbɔːlpɑːk ˈfɪɡə dɪd jɔː tiːm hæv ɪn maɪnd/' },
            { id: 'd3', speaker: 'Client', role: 'B', en: 'We were hoping to cap this project at around $1,000 all-inclusive.', bn: 'আমরা সব মিলিয়ে এই প্রজেক্টটি প্রায় ১,০০০ ডলারের ভেতরে শেষ করতে চেয়েছিলাম।', ipa: '/wiː wɜː ˈhəʊpɪŋ tə kæp ðɪs ˈprɒdʒekt æt əˈraʊnd wʌn ˈθaʊznd ˈɔːlɪnˈkluːsɪv/' },
            { id: 'd4', speaker: 'Freelancer', role: 'A', en: 'I see. If we reduce the scope slightly by removing the blog migration, I could meet you at $1,150.', bn: 'বুঝতে পেরেছি। আমরা যদি কাজের পরিধি একটু কমিয়ে ব্লগ মাইগ্রেশন বাদ দিই, তবে ১,১৫০ ডলারে রাজি হতে পারি।', ipa: '/aɪ siː ɪf wiː rɪˈdjuːs ðə skəʊp ˈslaɪtli baɪ rɪˈmuːvɪŋ ðə blɒɡ maɪˈɡreɪʃn aɪ kʊd miːt juː æt ˈɪlevn ˈfɪfti/' },
            { id: 'd5', speaker: 'Client', role: 'B', en: 'Does that $1,150 price include responsive mobile optimization and SEO setup?', bn: 'ওই ১,১৫০ ডলারের মধ্যে কি রেসপনসিভ মোবাইল অপটিমাইজেশন এবং এসইও সেটআপ অন্তর্ভুক্ত থাকবে?', ipa: '/dʌz ðæt ˈɪlevn ˈfɪfti praɪs ɪnˈkluːd rɪˈspɒnsɪv ˈməʊbaɪl ˌɒptɪmaɪˈzeɪʃn ænd ˌes ˈiː ˈəʊ ˈsetʌp/' },
            { id: 'd6', speaker: 'Freelancer', role: 'A', en: 'Yes, absolutely. Plus, I will provide two weeks of post-launch technical support at no extra charge.', bn: 'হ্যাঁ, অবশ্যই থাকবে। উপরন্তু, লঞ্চের পর কোনো অতিরিক্ত চার্জ ছাড়াই আমি দুই সপ্তাহের টেকনিক্যাল সাপোর্ট দেব।', ipa: '/jes ˌæbsəˈluːtli plʌs aɪ wɪl prəˈvaɪd tuː wiːks ɒv pəʊst lɔːntʃ ˈteknɪkl səˈpɔːt æt nəʊ ˈekstrə tʃɑːdʒ/' },
            { id: 'd7', speaker: 'Client', role: 'B', en: 'That sounds like a fair compromise. You\'ve got yourself a deal, Faisal!', bn: 'এটা বেশ ন্যায্য এক সমঝোতা মনে হচ্ছে। চুক্তি পাকা হলো, ফয়সাল!', ipa: '/ðæt saʊndz laɪk ə feə ˈkɒmprəmaɪz juːv ɡɒt jɔːˈself ə diːl Faisal/' },
            { id: 'd8', speaker: 'Freelancer', role: 'A', en: 'Fantastic! I will send over the revised scope document and contract right away.', bn: 'অসাধারণ! সংশোধিত কাজের রূপরেখা ও চুক্তির ড্রাফট আমি আজই পাঠিয়ে দিচ্ছি।', ipa: '/fænˈtæstɪk aɪ wɪl send ˈəʊvə ðə rɪˈvaɪzd skəʊp ˈdɒkjumənt ænd ˈkɒntrækt raɪt əˈweɪ/' }
        ],
        followUps: [
            { en: 'Once you sign the agreement, we can schedule our kickoff sprint call.', bn: 'চুক্তি স্বাক্ষর হয়ে গেলেই আমরা প্রজেক্ট শুরুর কিকঅফ মিটিংটি করে ফেলতে পারব।' }
        ],
        closers: [
            { en: 'Looking forward to building a great product together. Have a wonderful day!', bn: 'একসাথে চমৎকার একটি প্রোডাক্ট তৈরির অপেক্ষায় রইলাম। ভালো থাকবেন!' }
        ],
        nativePhrases: [
            { phrase: 'Ballpark figure', meaning: 'আনুমানিক বা ধারণাগত সংখ্যা', context: 'বাজেট আলোচনায়।' },
            { phrase: 'Fair compromise', meaning: 'উভয়পক্ষের জন্য ন্যায্য সমঝোতা', context: 'দরকষাকষি সফল হলে।' },
            { phrase: 'Post-launch support', meaning: 'কাজ চালুর পর কারিগরি সহায়তা', context: 'ভ্যালু অ্যাড করার উপায়।' }
        ]
    },
    {
        id: 'conv-17-discussing-weekend-plans',
        number: 17,
        title: 'Discussing Weekend Plans & Inviting Someone Out',
        titleBn: 'সাপ্তাহিক ছুটির পরিকল্পনা আলোচনা ও কাউকে আমন্ত্রণ জানানো',
        level: 'Intermediate',
        category: 'Social',
        sceneDescription: 'বৃহস্পতিবার বিকেলে সহকর্মী বা বন্ধুর সাথে ছুটির পরিকল্পনা আলোচনা করে ট্রিপে যাওয়ার আয়োজন।',
        starters: [
            { en: 'Got any exciting plans lined up for this upcoming weekend?', bn: 'আসন্ন সপ্তাহান্তের জন্য কি রোমাঞ্চকর কোনো পরিকল্পনা করেছ?', tip: 'ছুটির পরিকল্পনা জানার স্মার্ট বাক্য।' }
        ],
        dialogue: [
            { id: 'd1', speaker: 'Tanvir', role: 'B', en: 'TGIF! Got any exciting plans lined up for the long weekend, Faisal?', bn: 'অবশেষে শুক্রবার আসছে! লম্বা ছুটির জন্য কোনো বিশেষ পরিকল্পনা করেছিস নাকি, ফয়সাল?', ipa: '/ˌtiː ˌdʒiː ˌaɪ ˈef ɡɒt ˈeni ɪkˈsaɪtɪŋ plænz laɪnd ʌp fɔː ðə lɒŋ ˌwiːkˈend Faisal/' },
            { id: 'd2', speaker: 'Faisal', role: 'A', en: 'Nothing set in stone yet. I was actually thinking about driving up to Sreemangal for green tea gardens.', bn: 'পাকাপোক্ত কিছু এখনো ঠিক করিনি। ভাবছিলাম শ্রীমঙ্গলের সবুজ চা বাগানগুলো দেখতে একটা ড্রাইভ দেব।', ipa: '/ˈnʌθɪŋ set ɪn stəʊn jet aɪ wɒz ˈæktʃuəli ˈθɪŋkɪŋ əˈbaʊt ˈdraɪvɪŋ ʌp tə Sreemangal fɔː ɡriːn tiː ˈɡɑːdnz/' },
            { id: 'd3', speaker: 'Tanvir', role: 'B', en: 'Sreemangal? Man, the weather there must be breathtaking with early morning mist!', bn: 'শ্রীমঙ্গল? ভাইরে ভাই, ভোরের কুয়াশায় ওখানকার প্রকৃতি নিশ্চয়ই স্বর্গীয় হবে!', ipa: '/Sreemangal mæn ðə ˈweðə ðeə mʌst biː ˈbreθˌteɪkɪŋ wɪð ˈɜːli ˈmɔːnɪŋ mɪst/' },
            { id: 'd4', speaker: 'Faisal', role: 'A', en: 'Exactly! Why don\'t you and Rafiq tag along? It would be so much more fun with a group.', bn: 'ঠিক তাই! তুই আর রফিক কেন সাথে আসছিস না? দলবেঁধে গেলে আনন্দটা অনেক বেশি হবে।', ipa: '/ɪɡˈzæktli waɪ dəʊnt juː ænd Rafiq tæɡ əˈlɒŋ ɪt wʊd biː səʊ mʌtʃ mɔː fʌn wɪð ə ɡruːp/' },
            { id: 'd5', speaker: 'Tanvir', role: 'B', en: 'Are you serious? Count me in! I\'ve been staring at computer screens for weeks straight.', bn: 'সিরিয়াস বলছিস? আমাকে হিসেবে রাখিস! টানা কয়েক সপ্তাহ ধরে শুধু কম্পিউটারের স্ক্রিনই দেখে যাচ্ছি।', ipa: '/ɑː juː ˈsɪəriəs kaʊnt miː ɪn aɪv biːn ˈsteərɪŋ æt kəmˈpjuːtə skriːnz fɔː wiːks streɪt/' },
            { id: 'd6', speaker: 'Faisal', role: 'A', en: 'Awesome! We can leave early Saturday at 6 AM to beat the highway traffic.', bn: 'সাবাশ! হাইওয়ের জ্যাম এড়াতে শনিবার ভোর ৬টায় রওনা দিতে পারি।', ipa: '/ˈɔːsəm wiː kæn liːv ˈɜːli ˈsætədeɪ æt sɪks ˌeɪ ˈem tə biːt ðə ˈhaɪweɪ ˈtræfɪk/' },
            { id: 'd7', speaker: 'Tanvir', role: 'B', en: 'Sounds like a master plan. I\'ll bring my Bluetooth speaker and some homemade snacks.', bn: 'একদম মাস্টার প্ল্যান। আমি ব্লুটুথ স্পিকার আর বাসার কিছু নাশতা সাথে নিয়ে নেব।', ipa: '/saʊndz laɪk ə ˈmɑːstə plæn aɪl brɪŋ maɪ ˈbluːtuːθ ˈspiːkər ænd sʌm ˈhəʊmˈmeɪd snæks/' },
            { id: 'd8', speaker: 'Faisal', role: 'A', en: 'Perfect! I\'ll create a WhatsApp group right now so we can coordinate smoothly.', bn: 'দারুণ! আমি এখনই একটা হোয়াটসঅ্যাপ গ্রুপ খুলে নিচ্ছি যাতে সহজে সমন্বয় করা যায়।', ipa: '/ˈpɜːfɪkt aɪl kriˈeɪt ə WhatsApp ɡruːp raɪt naʊ səʊ wiː kæn kəʊˈɔːdɪneɪt ˈsmuːðli/' }
        ],
        followUps: [
            { en: 'Should we book the eco-resort cottages today before they get booked up?', bn: 'কটেজগুলো ফুরিয়ে যাওয়ার আগেই কি আজই ইকো-রিসোর্টে বুক করে ফেলব?' }
        ],
        closers: [
            { en: 'Can\'t wait for Saturday morning! Pack light and get plenty of sleep tomorrow.', bn: 'শনিবার সকালের অপেক্ষায় আর তর সইছে না! হালকা লাগেজ নিস আর কাল রাতে ভালো ঘুম দিস।' }
        ],
        nativePhrases: [
            { phrase: 'Nothing set in stone', meaning: 'চূড়ান্ত কিছু ঠিক করা হয়নি', context: 'খোলামেলা পরিকল্পনার ক্ষেত্রে।' },
            { phrase: 'Count me in!', meaning: 'আমাকে দলে রাখো / আমি আছি!', context: 'আনন্দে রাজি হতে।' },
            { phrase: 'To beat the traffic', meaning: 'যানজট পড়ার আগেই পার হওয়া', context: 'সকালে তাড়াতাড়ি বের হওয়ার কারণ।' }
        ]
    },
    {
        id: 'conv-18-congratulating-success',
        number: 18,
        title: 'Congratulating a Friend on Success & Celebrating',
        titleBn: 'বন্ধুর সাফল্যে আন্তরিক অভিনন্দন ও উদযাপন',
        level: 'Intermediate',
        category: 'Social',
        sceneDescription: 'আইইএলটিএস পরীক্ষায় অসাধারণ স্কোর (ব্যান্ড ৮.০) পাওয়ায় বন্ধুকে অভিনন্দন জানানো ও সাফল্যের রহস্য জানা।',
        starters: [
            { en: 'I just saw your test results! I am over the moon for you!', bn: 'আমি এইমাত্র তোর পরীক্ষার রেজাল্ট দেখলাম! তোর সাফল্যে আমি আনন্দে আত্মহারা!', tip: 'বন্ধুর সাফল্যে আনন্দ প্রকাশের উজ্জ্বল ভাষা।' }
        ],
        dialogue: [
            { id: 'd1', speaker: 'Faisal', role: 'A', en: 'Nabil! Tell me the rumors are true! Did you really score an overall Band 8.0 on IELTS?', bn: 'নাবিল! আমাকে বল খবরটা কি সত্যি? তুই কি আসলেই আইইএলটিএসে ওভারঅল ব্যান্ড ৮.০ পেয়েছিস?', ipa: '/Nabil tel miː ðə ˈruːməz ɑː truː dɪd juː ˈrɪəli skɔːr ən ˈəʊvərɔːl bænd eɪt ɒn ˈaɪelts/' },
            { id: 'd2', speaker: 'Nabil', role: 'B', en: 'Yes, buddy! The official scorecard just arrived! 8.5 in Listening and 8.0 in Speaking!', bn: 'হ্যাঁ দোস্ত! অফিসিয়াল স্কোরকার্ড এইমাত্র হাতে পেলাম! লিসেনিংয়ে ৮.৫ আর স্পিকিংয়ে ৮.০!', ipa: '/jes ˈbʌdi ði əˈfɪʃl ˈskɔːkɑːd dʒʌst əˈraɪvd eɪt pɔɪnt faɪv ɪn ˈlɪsnɪŋ ænd eɪt ɪn ˈspiːkɪŋ/' },
            { id: 'd3', speaker: 'Faisal', role: 'A', en: 'Man, that is extraordinary! You put in countless hours of practice, and it paid off!', bn: 'ভাইরে ভাই, এ তো অবিস্মরণীয় অর্জন! তুই দিনের পর দিন যে অক্লান্ত পরিশ্রম করেছিস, তার যথার্থ পুরস্কার পেলি!', ipa: '/mæn ðæt ɪz ɪkˈstrɔːdnri juː pʊt ɪn ˈkaʊntləs ˈaʊəz ɒv ˈpræktɪs ænd ɪt peɪd ɒf/' },
            { id: 'd4', speaker: 'Nabil', role: 'B', en: 'I honestly couldn\'t have done it without the continuous mock tests and pronunciation drills.', bn: 'সত্যি বলতে নিয়মিত মক টেস্ট আর প্রোনাউন্সিয়েশন ড্রিলগুলো না থাকলে আমি এটা অর্জন করতে পারতাম না।', ipa: '/aɪ ˈɒnɪstli ˈkʊdnt hæv dʌn ɪt wɪðˈaʊt ðə kənˈtɪnjuəs mɒk tests ænd prəˌnʌnsiˈeɪʃn drɪlz/' },
            { id: 'd5', speaker: 'Faisal', role: 'A', en: 'What was your secret to staying composed in front of the native speaking examiner?', bn: 'নেটিভ স্পিকার পরীক্ষকের সামনে ঘাবড়ে না গিয়ে এতটা শান্ত থাকার রহস্য কী ছিল রে?', ipa: '/wɒt wɒz jɔː ˈsiːkrət tə ˈsteɪɪŋ kəmˈpəʊzd ɪn frʌnt ɒv ðə ˈneɪtɪv ˈspiːkɪŋ ɪɡˈzæmɪnə/' },
            { id: 'd6', speaker: 'Nabil', role: 'B', en: 'Treating it like a friendly conversation rather than an interrogation made all the difference.', bn: 'পরীক্ষাকে জেরার বদলে দুজনের আন্তরিক আড্ডা হিসেবে ধরে নেওয়াই পুরো ম্যাজিক ঘটিয়েছে।', ipa: '/ˈtriːtɪŋ ɪt laɪk ə ˈfrendli ˌkɒnvəˈseɪʃn ˈrɑːðə ðæn ən ɪnˌterəˈɡeɪʃn meɪd ɔːl ðə ˈdɪfrəns/' },
            { id: 'd7', speaker: 'Faisal', role: 'A', en: 'That is gold advice! Now you definitely owe the whole gang a grand treat!', bn: 'এটা একদম খাঁটি সোনার মতো পরামর্শ! এখন কিন্তু আমাদের পুরো দলকে তোর জমকালো ট্রিট দিতেই হবে!', ipa: '/ðæt ɪz ɡəʊld ədˈvaɪs naʊ juː ˈdefɪnətli əʊ ðə həʊl ɡæŋ ə ɡrænd triːt/' },
            { id: 'd8', speaker: 'Nabil', role: 'B', en: 'Without question! Unlimited kacchi biryani on me this Saturday evening!', bn: 'কোনো কথা হবে না! এই শনিবার সন্ধ্যায় আমার পক্ষ থেকে আনলিমিটেড কাচ্চি বিরিয়ানি!', ipa: '/wɪðˈaʊt ˈkwestʃən ʌnˈlɪmɪtɪd kacchi biryani ɒn miː ðɪs ˈsætədeɪ ˈiːvnɪŋ/' }
        ],
        followUps: [
            { en: 'Which universities in Canada and the UK are you submitting your applications to?', bn: 'কানাডা আর ইংল্যান্ডের কোন কোন ভার্সিটিতে তোর ফাইল পাঠাচ্ছিস?' }
        ],
        closers: [
            { en: 'I am so proud of your dedication, brother. Sky is the limit for you now!', bn: 'তোর একনিষ্ঠতা দেখে আমার বুক গর্বে ভরে যাচ্ছে ভাই। এখন পুরো আকাশটাই তোর জন্য খোলা!' }
        ],
        nativePhrases: [
            { phrase: 'It paid off', meaning: 'কঠোর পরিশ্রমের সুফল পাওয়া গেল', context: 'সাফল্যের প্রশংসায়।' },
            { phrase: 'Staying composed', meaning: 'মাথা ঠান্ডা ও শান্ত থাকা', context: 'চাপের মুখে স্থির থাকা।' },
            { phrase: 'Made all the difference', meaning: 'সবচেয়ে বড় পরিবর্তন এনে দিয়েছে', context: 'সাফল্যের মূল চাবিকাঠি বোঝাতে।' }
        ]
    },
    {
        id: 'conv-19-expressing-sympathy',
        number: 19,
        title: 'Expressing Sympathy, Consoling & Offering Support',
        titleBn: 'বিপদের দিনে কাউকে সহমর্মিতা জানানো, সান্ত্বনা ও সহযোগিতার হাত বাড়ানো',
        level: 'Intermediate',
        category: 'Social',
        sceneDescription: 'কোনো বন্ধু বা সহকর্মী কঠিন পরিস্থিতির মুখে পড়লে আন্তরিক সান্ত্বনা ও শক্তি জোগানো।',
        starters: [
            { en: 'I just heard what happened, and my heart aches for you.', bn: 'আমি এইমাত্র শুনলাম কী হয়েছে, শুনে আমার বুকটা ভেঙে গেল।', tip: 'গভীর শোক ও সহমর্মিতার প্রারম্ভ।' }
        ],
        dialogue: [
            { id: 'd1', speaker: 'Friend A', role: 'A', en: 'Hey Karim, I was heartbroken to hear about your father\'s sudden hospitalization.', bn: 'করিম, তোর বাবার হঠাৎ হাসপাতালে ভর্তির খবর শুনে আমার মনটা ভীষণ খারাপ হয়ে গেল।', ipa: '/heɪ Karim aɪ wɒz ˈhɑːtˌbrəʊkən tə hɪər əˈbaʊt jɔː ˈfɑːðəz ˈsʌdn ˌhɒspɪtəlaɪˈzeɪʃn/' },
            { id: 'd2', speaker: 'Karim', role: 'B', en: 'Thanks for reaching out, Faisal. It\'s been an emotionally draining forty-eight hours.', bn: 'খোঁজ নেওয়ার জন্য ধন্যবাদ, ফয়সাল। গত ৪৮ ঘণ্টা আমাদের চরম মানসিক চাপের মধ্য দিয়ে গেছে।', ipa: '/θæŋks fɔː ˈriːtʃɪŋ aʊt Faisal ɪts biːn ɪˈməʊʃənəli ˈdreɪnɪŋ ˈfɔːti eɪt ˈaʊəz/' },
            { id: 'd3', speaker: 'Friend A', role: 'A', en: 'I can only imagine how tough this is on your family. How is he feeling right now?', bn: 'তোর পরিবারের ওপর দিয়ে কতটা কঠিন সময় যাচ্ছে আমি অনুমান করতে পারছি। আঙ্কেল এখন কেমন আছেন রে?', ipa: '/aɪ kæn ˈəʊnli ɪˈmædʒɪn haʊ tʌf ðɪs ɪz ɒn jɔː ˈfæməli haʊ ɪz hiː ˈfiːlɪŋ raɪt naʊ/' },
            { id: 'd4', speaker: 'Karim', role: 'B', en: 'The doctors managed to stabilize him this morning. He is resting in the post-op room.', bn: 'ডাক্তাররা আজ সকালে ওনাকে বিপদমুক্ত ও স্থিতিশীল করতে পেরেছেন। তিনি পোস্ট-অপারেটিভে বিশ্রাম নিচ্ছেন।', ipa: '/ðə ˈdɒktəz ˈmænɪdʒd tə ˈsteɪbəlaɪz hɪm ðɪs ˈmɔːnɪŋ hiː ɪz ˈrestɪŋ ɪn ðə pəʊst ɒp ruːm/' },
            { id: 'd5', speaker: 'Friend A', role: 'A', en: 'Alhamdulillah, that is such a relief. Please don\'t hesitate to let me know if you need anything.', bn: 'আলহামদুলিল্লাহ, শুনে অনেক স্বস্তি পেলাম। তোর যেকোনো প্রয়োজন হলে আমাকে জানাতে এক ফোঁটাও দ্বিধা করিস না।', ipa: '/ælˈhæmduːlɪlɑː ðæt ɪz sʌtʃ ə rɪˈliːf pliːz dəʊnt ˈhezɪteɪt tə let miː nəʊ ɪf juː niːd ˈeniθɪŋ/' },
            { id: 'd6', speaker: 'Karim', role: 'B', en: 'Your support means the world to me, brother. Just keep him in your prayers.', bn: 'তোর এই সহমর্মিতা আমার কাছে অনেক বড় এক পাওয়া, ভাই। শুধু আঙ্কেলের জন্য দোয়া করিস।', ipa: '/jɔː səˈpɔːt miːnz ðə wɜːld tə miː ˈbrʌðə dʒʌst kiːp hɪm ɪn jɔː preəz/' },
            { id: 'd7', speaker: 'Friend A', role: 'A', en: 'He is in my daily prayers. I can come over to the hospital tonight if you need a breather.', bn: 'আমার প্রতিটি মোনাজাতে তিনি আছেন। তোর যদি একটু বিশ্রামের দরকার হয় তবে আজ রাতে আমি হাসপাতালে আসতে পারি।', ipa: '/hiː ɪz ɪn maɪ ˈdeɪli preəz aɪ kæn kʌm ˈəʊvə tə ðə ˈhɒspɪtl təˈnaɪt ɪf juː niːd ə ˈbriːðə/' },
            { id: 'd8', speaker: 'Karim', role: 'B', en: 'Thank you, Faisal. You have no idea how much comfort that gives me. Stay blessed.', bn: 'ধন্যবাদ, ফয়সাল। তোর এই কথায় যে মনে কতটা সাহস পেলাম তোকে বলে বোঝাতে পারব না। ভালো থাকিস।', ipa: '/θæŋk juː Faisal juː hæv nəʊ aɪˈdɪə haʊ mʌtʃ ˈkʌmfət ðæt ɡɪvz miː steɪ blest/' }
        ],
        followUps: [
            { en: 'Does your family need any blood donors arranged or logistics handled?', bn: 'পরিবারের কি রক্তের ডোনার বা যাতায়াতের কোনো সহায়তা প্রয়োজন আছে?' }
        ],
        closers: [
            { en: 'Stay strong, my friend. We are all standing right behind you.', bn: 'ধৈর্য ধরিস আর শক্ত থাকিস বন্ধু। আমরা সবাই তোর পাশে আছি।' }
        ],
        nativePhrases: [
            { phrase: 'Emotionally draining', meaning: 'মানসিকভাবে চরম ক্লান্তিকর', context: 'কঠিন পরিস্থিতির অনুভূতি।' },
            { phrase: 'Your support means the world to me', meaning: 'আপনার এই সহযোগিতা আমার কাছে অমূল্য', context: 'কৃতজ্ঞতা জানাতে।' },
            { phrase: 'If you need a breather', meaning: 'যদি একটু দম ফেলার বা বিশ্রামের দরকার হয়', context: 'সহযোগিতার প্রস্তাব।' }
        ]
    },
    {
        id: 'conv-20-saying-goodbye-keeping-in-touch',
        number: 20,
        title: 'Saying Goodbye & Keeping in Touch',
        titleBn: 'বিদায় জানানো ও ভবিষ্যতে যোগাযোগ বজায় রাখার কথোপকথন',
        level: 'Intermediate',
        category: 'Social',
        sceneDescription: 'কোর্স বা কনফারেন্স শেষ হওয়ার পর বন্ধুদের কাছ থেকে উষ্ণভাবে বিদায় নেওয়া ও যোগাযোগের মাধ্যম আদান-প্রদান।',
        starters: [
            { en: 'I can\'t believe our three-month English fellowship is already coming to an end!', bn: 'বিশ্বাসই হচ্ছে না যে আমাদের তিন মাসের এই ইংরেজি জার্নিটা দেখতে দেখতে শেষ হয়ে গেল!', tip: 'বিদায়বেলার আবেগী সূচনা।' }
        ],
        dialogue: [
            { id: 'd1', speaker: 'Ayesha', role: 'B', en: 'Time flew by so fast! It feels like just yesterday we stumbled through our first introduction.', bn: 'সময় যে কত দ্রুত কেটে গেল! মনে হচ্ছে যেন এই তো গতকাল আমরা প্রথম ক্লাসে তোতলাতে তোতলাতে কথা বলছিলাম।', ipa: '/taɪm fluː baɪ səʊ fɑːst ɪt fiːlz laɪk dʒʌst ˈjestədeɪ wiː ˈstʌmbld θruː ˈaʊə fɜːst ˌɪntrəˈdʌkʃn/' },
            { id: 'd2', speaker: 'Faisal', role: 'A', en: 'Look at us now—speaking with genuine confidence and debating real-world issues effortlessly!', bn: 'আর এখন নিজেদের দেখ—কী দারুণ আত্মবিশ্বাসের সাথে অনায়াসেই বাস্তব বিষয়গুলো নিয়ে কথা বলছি!', ipa: '/lʊk æt ʌs naʊ ˈspiːkɪŋ wɪð ˈdʒenjuɪn ˈkɒnfɪdəns ænd dɪˈbeɪtɪŋ rɪəl wɜːld ˈɪʃuːz ˈefətləsli/' },
            { id: 'd3', speaker: 'Ayesha', role: 'B', en: 'I am going to miss our lively group mock sessions. You always pushed us to excel.', bn: 'আমাদের এই প্রাণবন্ত মক সেশনগুলো আমি খুব মিস করব। তুই সবসময় আমাদের ভালো করার সাহস যুগিয়েছিস।', ipa: '/aɪ æm ˈɡəʊɪŋ tə mɪs ˈaʊə ˈlaɪvli ɡruːp mɒk ˈseʃnz juː ˈɔːlweɪz pʊʃt ʌs tuː ɪkˈsel/' },
            { id: 'd4', speaker: 'Faisal', role: 'A', en: 'The feeling is entirely mutual. We created such an empowering and supportive environment together.', bn: 'আমার অনুভূতিও হুবহু এক। আমরা সবাই মিলে সত্যি একটা চমৎকার ও অনুপ্রেরণাদায়ক পরিবেশ গড়ে তুলেছিলাম।', ipa: '/ðə ˈfiːlɪŋ ɪz ɪnˈtaɪəli ˈmjuːtʃuəl wiː kriˈeɪtɪd sʌtʃ ən ɪmˈpaʊərɪŋ ænd səˈpɔːtɪv ɪnˈvaɪrənmənt təˈɡeðə/' },
            { id: 'd5', speaker: 'Ayesha', role: 'B', en: 'We must promise not to let this practice habit die down once the classes stop.', bn: 'ক্লাস শেষ হলেও এই অনুশীলনের অভ্যাসটি যাতে কোনোমতেই বন্ধ না হয় আমাদের সেই প্রতিজ্ঞা করতে হবে।', ipa: '/wiː mʌst ˈprɒmɪs nɒt tə let ðɪs ˈpræktɪs ˈhæbɪt daɪ daʊn wʌns ðə ˈklɑːsɪz stɒp/' },
            { id: 'd6', speaker: 'Faisal', role: 'A', en: 'Agreed! Let\'s keep our weekend WhatsApp speaking club active every Sunday evening.', bn: 'একদম একমত! প্রতি রবিবার সন্ধ্যায় আমাদের উইকেন্ড হোয়াটসঅ্যাপ স্পিকিং ক্লাব চালু রাখা যাক।', ipa: '/əˈɡriːd lets kiːp ˈaʊə ˌwiːkˈend WhatsApp ˈspiːkɪŋ klʌb ˈæktɪv ˈevri ˈsʌndeɪ ˈiːvnɪŋ/' },
            { id: 'd7', speaker: 'Ayesha', role: 'B', en: 'Count on it. Make sure to ping me when your visa interview date arrives!', bn: 'নিশ্চিন্ত থাকিস। তোর ভিসা ইন্টারভিউয়ের ডেট এলেই কিন্তু আমাকে নক দিবি!', ipa: '/kaʊnt ɒn ɪt meɪk ʃɔː tə pɪŋ miː wen jɔː ˈviːzə ˈɪntəvjuː deɪt əˈraɪvz/' },
            { id: 'd8', speaker: 'Faisal', role: 'A', en: 'Will do! Wishing you immense success in your higher studies, Ayesha. Take care!', bn: 'অবশ্যই দেব! তোর উচ্চশিক্ষায় বিরাট সাফল্য কামনা করছি, আয়েশা। নিজের যত্ন নিস!', ipa: '/wɪl duː ˈwɪʃɪŋ juː ɪˈmens səkˈses ɪn jɔː ˈhaɪə ˈstʌdiz Ayesha teɪk keə/' }
        ],
        followUps: [
            { en: 'Let\'s take a group selfie together before everyone leaves!', bn: 'সবাই চলে যাওয়ার আগে চল একটা গ্রুপের সবাই মিলে সেলফি তুলি!' }
        ],
        closers: [
            { en: 'Farewell for now! Keep shining and inspiring everyone around you.', bn: 'আপাতত বিদায়! এভাবেই আলো ছড়াতে থাকিস আর সবাইকে অনুপ্রাণিত করিস।' },
            { en: 'Until we meet again, stay blessed and keep speaking with passion!', bn: 'আবার দেখা না হওয়া পর্যন্ত ভালো থাকিস আর ভালোবাসার সাথে প্র্যাকটিস চালিয়ে যা!' }
        ],
        nativePhrases: [
            { phrase: 'Time flew by', meaning: 'সময় চোখের পলকে কেটে গেল', context: 'সময়ের দ্রুততা বোঝাতে।' },
            { phrase: 'The feeling is entirely mutual', meaning: 'আমার অনুভূতিও হুবহু আপনার মতোই', context: 'আন্তরিকতা প্রতিদান দেওয়ার ভাষা।' },
            { phrase: 'Don\'t let it die down', meaning: 'এটাকে নিভে যেতে দিও না / চর্চা থামিও না', context: 'ধারাবাহিকতা বজায় রাখতে।' }
        ]
    }
];
