export interface LessonDialogueTurn {
    speaker: 'A' | 'B';
    en: string;
    bn: string;
    ipa: string;
    bn_pron: string;
}

export const LESSON_20_DIALOGUES: Record<string, LessonDialogueTurn[]> = {
    "lesson-01-present-to-be": [
        {
            "speaker": "A",
            "en": "Are you ready for the class?",
            "bn": "তুমি কি ক্লাসের জন্য প্রস্তুত?",
            "ipa": "/ɑː/ /juː/ /ˈredi/ /for/ /ðə/ /class/?",
            "bn_pron": "আর ইউ রেডি for দ্য class?"
        },
        {
            "speaker": "B",
            "en": "Yes, I am totally ready.",
            "bn": "হ্যাঁ, আমি পুরোপুরি প্রস্তুত।",
            "ipa": "/jes/ /aɪ/ /am/ /totally/ /ˈredi/",
            "bn_pron": "ইয়েস আই অ্যাম totally রেডি।"
        },
        {
            "speaker": "A",
            "en": "Are you busy right now?",
            "bn": "তুমি কি এখন ব্যস্ত?",
            "ipa": "/ɑː/ /juː/ /ˈbɪzi/ /right/ /naʊ/?",
            "bn_pron": "আর ইউ বিজি right নাউ?"
        },
        {
            "speaker": "B",
            "en": "No, I am free at the moment.",
            "bn": "না, আমি এই মুহূর্তে ফ্রি আছি।",
            "ipa": "/no/ /aɪ/ /am/ /free/ /æt/ /ðə/ /moment/",
            "bn_pron": "নো আই অ্যাম free অ্যাট দ্য moment।"
        },
        {
            "speaker": "A",
            "en": "Is your brother at home?",
            "bn": "তোমার ভাই কি বাসায় আছে?",
            "ipa": "/ɪz/ /your/ /brother/ /æt/ /həʊm/?",
            "bn_pron": "ইজ ইওর ব্রাদার অ্যাট হোম?"
        },
        {
            "speaker": "B",
            "en": "Yes, he is in his bedroom.",
            "bn": "হ্যাঁ, সে তার পড়ার ঘরে আছে।",
            "ipa": "/jes/ /hiː/ /ɪz/ /in/ /his/ /bedroom/",
            "bn_pron": "ইয়েস হি ইজ in his bedroom।"
        },
        {
            "speaker": "A",
            "en": "How are you feeling today?",
            "bn": "আজ তোমার কেমন লাগছে?",
            "ipa": "/haʊ/ /ɑː/ /juː/ /feeling/ /təˈdeɪ/?",
            "bn_pron": "হাউ আর ইউ feeling টুডে?"
        },
        {
            "speaker": "B",
            "en": "I am feeling energetic and happy.",
            "bn": "আমার বেশ সতেজ ও আনন্দিত লাগছে।",
            "ipa": "/aɪ/ /am/ /feeling/ /energetic/ /and/ /ˈhæpi/",
            "bn_pron": "আই অ্যাম feeling energetic and হ্যাপি।"
        },
        {
            "speaker": "A",
            "en": "Is it hot outside today?",
            "bn": "আজ বাইরে কি খুব গরম?",
            "ipa": "/ɪz/ /it/ /hot/ /outside/ /təˈdeɪ/?",
            "bn_pron": "ইজ ইট hot outside টুডে?"
        },
        {
            "speaker": "B",
            "en": "Yes, it is quite sunny and humid.",
            "bn": "হ্যাঁ, বাইরে বেশ চড়া রোদ আর ভ্যাপসা গরম।",
            "ipa": "/jes/ /it/ /ɪz/ /quite/ /sunny/ /and/ /humid/",
            "bn_pron": "ইয়েস ইট ইজ quite sunny and humid।"
        },
        {
            "speaker": "A",
            "en": "Are they your classmates?",
            "bn": "তারা কি তোমার সহপাঠী?",
            "ipa": "/ɑː/ /they/ /your/ /classmates/?",
            "bn_pron": "আর দে ইওর classmates?"
        },
        {
            "speaker": "B",
            "en": "Yes, they are my college friends.",
            "bn": "হ্যাঁ, তারা আমার কলেজের বন্ধু।",
            "ipa": "/jes/ /they/ /ɑː/ /my/ /college/ /friends/",
            "bn_pron": "ইয়েস দে আর মাই কলেজ friends।"
        },
        {
            "speaker": "A",
            "en": "Why are you so quiet?",
            "bn": "তুমি এত চুপচাপ কেন?",
            "ipa": "/waɪ/ /ɑː/ /juː/ /so/ /quiet/?",
            "bn_pron": "হোয়াই আর ইউ so quiet?"
        },
        {
            "speaker": "B",
            "en": "I am a little tired after the trip.",
            "bn": "ভ্রমণের পর একটু ক্লান্ত তাই।",
            "ipa": "/aɪ/ /am/ /a/ /little/ /tired/ /after/ /ðə/ /trip/",
            "bn_pron": "আই অ্যাম a little টায়ার্ড after দ্য trip।"
        },
        {
            "speaker": "A",
            "en": "Is your father a doctor?",
            "bn": "তোমার বাবা কি একজন ডাক্তার?",
            "ipa": "/ɪz/ /your/ /father/ /a/ /doctor/?",
            "bn_pron": "ইজ ইওর father a doctor?"
        },
        {
            "speaker": "B",
            "en": "Yes, he is a senior doctor.",
            "bn": "হ্যাঁ, তিনি একজন অভিজ্ঞ ডাক্তার।",
            "ipa": "/jes/ /hiː/ /ɪz/ /a/ /senior/ /doctor/",
            "bn_pron": "ইয়েস হি ইজ a senior doctor।"
        },
        {
            "speaker": "A",
            "en": "Are you sure about this plan?",
            "bn": "তুমি কি এই পরিকল্পনার ব্যাপারে নিশ্চিত?",
            "ipa": "/ɑː/ /juː/ /sure/ /about/ /this/ /plan/?",
            "bn_pron": "আর ইউ sure about this plan?"
        },
        {
            "speaker": "B",
            "en": "Yes, I am one hundred percent sure.",
            "bn": "হ্যাঁ, আমি শতভাগ নিশ্চিত।",
            "ipa": "/jes/ /aɪ/ /am/ /one/ /hundred/ /percent/ /sure/",
            "bn_pron": "ইয়েস আই অ্যাম one hundred percent sure।"
        },
        {
            "speaker": "A",
            "en": "Who is that person near the gate?",
            "bn": "গেটের কাছের ওই ব্যক্তিটি কে?",
            "ipa": "/who/ /ɪz/ /that/ /person/ /near/ /ðə/ /gate/?",
            "bn_pron": "হু ইজ that person near দ্য gate?"
        },
        {
            "speaker": "B",
            "en": "He is our new neighbor.",
            "bn": "তিনি আমাদের নতুন প্রতিবেশী।",
            "ipa": "/hiː/ /ɪz/ /our/ /new/ /neighbor/",
            "bn_pron": "হি ইজ our new neighbor।"
        }
    ],
    "lesson-02-past-to-be": [
        {
            "speaker": "A",
            "en": "Were you at home yesterday evening?",
            "bn": "তুমি কি গতকাল সন্ধ্যায় বাসায় ছিলে?",
            "ipa": "/were/ /juː/ /æt/ /həʊm/ /yesterday/ /evening/?",
            "bn_pron": "Were ইউ অ্যাট হোম yesterday evening?"
        },
        {
            "speaker": "B",
            "en": "Yes, I was at home all evening.",
            "bn": "হ্যাঁ, আমি পুরো সন্ধ্যা বাসায় ছিলাম।",
            "ipa": "/jes/ /aɪ/ /was/ /æt/ /həʊm/ /all/ /evening/",
            "bn_pron": "ইয়েস আই was অ্যাট হোম all evening।"
        },
        {
            "speaker": "A",
            "en": "Was the exam difficult?",
            "bn": "পরীক্ষাটা কি কঠিন ছিল?",
            "ipa": "/was/ /ðə/ /exam/ /difficult/?",
            "bn_pron": "Was দ্য exam difficult?"
        },
        {
            "speaker": "B",
            "en": "No, it was surprisingly easy.",
            "bn": "না, অপ্রত্যাশিতভাবে খুব সহজ ছিল।",
            "ipa": "/no/ /it/ /was/ /surprisingly/ /easy/",
            "bn_pron": "নো ইট was surprisingly easy।"
        },
        {
            "speaker": "A",
            "en": "Where were you last Sunday?",
            "bn": "গত রবিবার তুমি কোথায় ছিলে?",
            "ipa": "/weə/ /were/ /juː/ /last/ /sunday/?",
            "bn_pron": "হোয়ার were ইউ last sunday?"
        },
        {
            "speaker": "B",
            "en": "I was at my grandmother's village.",
            "bn": "আমি আমার নানুবাড়ির গ্রামে ছিলাম।",
            "ipa": "/aɪ/ /was/ /æt/ /my/ /grandmother's/ /village/",
            "bn_pron": "আই was অ্যাট মাই grandmother's ভিলেজ।"
        },
        {
            "speaker": "A",
            "en": "Was she upset with the result?",
            "bn": "ফলাফল দেখে সে কি মন খারাপ করেছিল?",
            "ipa": "/was/ /ʃiː/ /upset/ /with/ /ðə/ /result/?",
            "bn_pron": "Was শি upset with দ্য result?"
        },
        {
            "speaker": "B",
            "en": "Yes, she was really disappointed.",
            "bn": "হ্যাঁ, সে আসলেই খুব হতাশ হয়েছিল।",
            "ipa": "/jes/ /ʃiː/ /was/ /really/ /disappointed/",
            "bn_pron": "ইয়েস শি was really disappointed।"
        },
        {
            "speaker": "A",
            "en": "Were they present in the meeting?",
            "bn": "তারা কি সভায় উপস্থিত ছিল?",
            "ipa": "/were/ /they/ /present/ /in/ /ðə/ /meeting/?",
            "bn_pron": "Were দে present in দ্য meeting?"
        },
        {
            "speaker": "B",
            "en": "Yes, all of them were there on time.",
            "bn": "হ্যাঁ, তারা সবাই সময়মতো উপস্থিত ছিল।",
            "ipa": "/jes/ /all/ /of/ /them/ /were/ /there/ /on/ /taɪm/",
            "bn_pron": "ইয়েস all of them were দেয়ার on টাইম।"
        },
        {
            "speaker": "A",
            "en": "Why were you late this morning?",
            "bn": "আজ সকালে তোমার দেরি হয়েছিল কেন?",
            "ipa": "/waɪ/ /were/ /juː/ /late/ /this/ /morning/?",
            "bn_pron": "হোয়াই were ইউ late this মর্নিং?"
        },
        {
            "speaker": "B",
            "en": "The traffic was terrible on the highway.",
            "bn": "হাইওয়েতে জ্যাম খুব মারাত্মক ছিল।",
            "ipa": "/ðə/ /traffic/ /was/ /terrible/ /on/ /ðə/ /highway/",
            "bn_pron": "দ্য traffic was terrible on দ্য highway।"
        },
        {
            "speaker": "A",
            "en": "Was the movie interesting?",
            "bn": "সিনেমাটি কি উপভোগ্য ছিল?",
            "ipa": "/was/ /ðə/ /movie/ /interesting/?",
            "bn_pron": "Was দ্য মুভি interesting?"
        },
        {
            "speaker": "B",
            "en": "Yes, the storyline was brilliant.",
            "bn": "হ্যাঁ, গল্পের প্রেক্ষাপট দারুণ ছিল।",
            "ipa": "/jes/ /ðə/ /storyline/ /was/ /brilliant/",
            "bn_pron": "ইয়েস দ্য storyline was brilliant।"
        },
        {
            "speaker": "A",
            "en": "Were you afraid of the dark as a child?",
            "bn": "ছোটবেলায় তুমি কি অন্ধকার ভয় পেতে?",
            "ipa": "/were/ /juː/ /afraid/ /of/ /ðə/ /dark/ /as/ /a/ /child/?",
            "bn_pron": "Were ইউ afraid of দ্য dark as a child?"
        },
        {
            "speaker": "B",
            "en": "Yes, I was terrified of dark rooms.",
            "bn": "হ্যাঁ, অন্ধকার ঘর দেখলে আমি খুব ভয় পেতাম।",
            "ipa": "/jes/ /aɪ/ /was/ /terrified/ /of/ /dark/ /rooms/",
            "bn_pron": "ইয়েস আই was terrified of dark rooms।"
        },
        {
            "speaker": "A",
            "en": "Was your phone switched off yesterday?",
            "bn": "গতকাল কি তোমার ফোন বন্ধ ছিল?",
            "ipa": "/was/ /your/ /phone/ /switched/ /off/ /yesterday/?",
            "bn_pron": "Was ইওর phone switched off yesterday?"
        },
        {
            "speaker": "B",
            "en": "Yes, my battery was completely dead.",
            "bn": "হ্যাঁ, আমার মোবাইলের চার্জ শেষ হয়ে গিয়েছিল।",
            "ipa": "/jes/ /my/ /battery/ /was/ /completely/ /dead/",
            "bn_pron": "ইয়েস মাই battery was completely dead।"
        },
        {
            "speaker": "A",
            "en": "Who was that gentleman with you?",
            "bn": "তোমার সাথে ওই ভদ্রলোকটি কে ছিলেন?",
            "ipa": "/who/ /was/ /that/ /gentleman/ /with/ /juː/?",
            "bn_pron": "হু was that gentleman with ইউ?"
        },
        {
            "speaker": "B",
            "en": "He was my high school teacher.",
            "bn": "তিনি আমার হাইস্কুলের শিক্ষক ছিলেন।",
            "ipa": "/hiː/ /was/ /my/ /high/ /skuːl/ /teacher/",
            "bn_pron": "হি was মাই high স্কুল teacher।"
        }
    ],
    "lesson-03-have-has": [
        {
            "speaker": "A",
            "en": "Do you have a few minutes to talk?",
            "bn": "তোমার কি কথা বলার মতো কয়েক মিনিট সময় আছে?",
            "ipa": "/duː/ /juː/ /hæv/ /a/ /few/ /minutes/ /to/ /talk/?",
            "bn_pron": "ডু ইউ হ্যাভ a few minutes টু talk?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have plenty of time right now.",
            "bn": "হ্যাঁ, আমার কাছে এখন যথেষ্ট সময় আছে।",
            "ipa": "/jes/ /aɪ/ /hæv/ /plenty/ /of/ /taɪm/ /right/ /naʊ/",
            "bn_pron": "ইয়েস আই হ্যাভ plenty of টাইম right নাউ।"
        },
        {
            "speaker": "A",
            "en": "Does he have a personal laptop?",
            "bn": "তার কি ব্যক্তিগত ল্যাপটপ আছে?",
            "ipa": "/does/ /hiː/ /hæv/ /a/ /personal/ /laptop/?",
            "bn_pron": "ডাজ হি হ্যাভ a personal laptop?"
        },
        {
            "speaker": "B",
            "en": "Yes, he has a fast new laptop.",
            "bn": "হ্যাঁ, তার একটা নতুন ফাস্ট ল্যাপটপ আছে।",
            "ipa": "/jes/ /hiː/ /hæz/ /a/ /fast/ /new/ /laptop/",
            "bn_pron": "ইয়েস হি হাইজ a fast new laptop।"
        },
        {
            "speaker": "A",
            "en": "Do you have any brothers or sisters?",
            "bn": "তোমার কি কোনো ভাই বা বোন আছে?",
            "ipa": "/duː/ /juː/ /hæv/ /any/ /brothers/ /or/ /sisters/?",
            "bn_pron": "ডু ইউ হ্যাভ any brothers or sisters?"
        },
        {
            "speaker": "B",
            "en": "I have an elder brother and one sister.",
            "bn": "আমার একজন বড় ভাই এবং এক বোন আছে।",
            "ipa": "/aɪ/ /hæv/ /an/ /elder/ /brother/ /and/ /one/ /sister/",
            "bn_pron": "আই হ্যাভ an elder ব্রাদার and one সিস্টার।"
        },
        {
            "speaker": "A",
            "en": "Do you have enough cash with you?",
            "bn": "তোমার সাথে কি পর্যাপ্ত ক্যাশ টাকা আছে?",
            "ipa": "/duː/ /juː/ /hæv/ /enough/ /cash/ /with/ /juː/?",
            "bn_pron": "ডু ইউ হ্যাভ enough cash with ইউ?"
        },
        {
            "speaker": "B",
            "en": "No, but I have my debit card.",
            "bn": "না, তবে আমার কাছে ডেবিট কার্ড আছে।",
            "ipa": "/no/ /but/ /aɪ/ /hæv/ /my/ /debit/ /card/",
            "bn_pron": "নো but আই হ্যাভ মাই debit card।"
        },
        {
            "speaker": "A",
            "en": "Does your house have a garden?",
            "bn": "তোমাদের বাড়িতে কি কোনো বাগান আছে?",
            "ipa": "/does/ /your/ /house/ /hæv/ /a/ /garden/?",
            "bn_pron": "ডাজ ইওর house হ্যাভ a garden?"
        },
        {
            "speaker": "B",
            "en": "Yes, we have a lovely rooftop garden.",
            "bn": "হ্যাঁ, আমাদের ছাদে একটি সুন্দর বাগান আছে।",
            "ipa": "/jes/ /we/ /hæv/ /a/ /lovely/ /rooftop/ /garden/",
            "bn_pron": "ইয়েস উই হ্যাভ a lovely rooftop garden।"
        },
        {
            "speaker": "A",
            "en": "Do you have any questions for me?",
            "bn": "আমার কাছে তোমার কি কোনো প্রশ্ন আছে?",
            "ipa": "/duː/ /juː/ /hæv/ /any/ /questions/ /for/ /miː/?",
            "bn_pron": "ডু ইউ হ্যাভ any questions for মি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have one quick question about grammar.",
            "bn": "হ্যাঁ, গ্রামার নিয়ে আমার একটি ছোট প্রশ্ন আছে।",
            "ipa": "/jes/ /aɪ/ /hæv/ /one/ /quick/ /question/ /about/ /grammar/",
            "bn_pron": "ইয়েস আই হ্যাভ one quick question about grammar।"
        },
        {
            "speaker": "A",
            "en": "Does she have a fever today?",
            "bn": "আজ কি তার জ্বর আছে?",
            "ipa": "/does/ /ʃiː/ /hæv/ /a/ /fever/ /təˈdeɪ/?",
            "bn_pron": "ডাজ শি হ্যাভ a fever টুডে?"
        },
        {
            "speaker": "B",
            "en": "No, she has just a mild headache.",
            "bn": "না, তার শুধু সামান্য মাথাব্যথা আছে।",
            "ipa": "/no/ /ʃiː/ /hæz/ /just/ /a/ /mild/ /headache/",
            "bn_pron": "নো শি হাইজ just a mild headache।"
        },
        {
            "speaker": "A",
            "en": "Do they have their own car?",
            "bn": "তাদের কি নিজস্ব গাড়ি আছে?",
            "ipa": "/duː/ /they/ /hæv/ /their/ /own/ /kɑː/?",
            "bn_pron": "ডু দে হ্যাভ their own কার?"
        },
        {
            "speaker": "B",
            "en": "No, they don't have a car yet.",
            "bn": "না, তাদের এখনো নিজস্ব গাড়ি নেই।",
            "ipa": "/no/ /they/ /don't/ /hæv/ /a/ /kɑː/ /yet/",
            "bn_pron": "নো দে don't হ্যাভ a কার yet।"
        },
        {
            "speaker": "A",
            "en": "Do you have an extra pen?",
            "bn": "তোমার কাছে কি অতিরিক্ত কলম আছে?",
            "ipa": "/duː/ /juː/ /hæv/ /an/ /extra/ /pen/?",
            "bn_pron": "ডু ইউ হ্যাভ an extra pen?"
        },
        {
            "speaker": "B",
            "en": "Sure, here you go, I have two pens.",
            "bn": "অবশ্যই, এই যে নিন, আমার কাছে দুটো কলম আছে।",
            "ipa": "/sure/ /here/ /juː/ /go/ /aɪ/ /hæv/ /two/ /pens/",
            "bn_pron": "Sure হিয়ার ইউ গো আই হ্যাভ two pens।"
        },
        {
            "speaker": "A",
            "en": "What kind of pet do you have?",
            "bn": "তোমার কি ধরণের পোষা প্রাণী আছে?",
            "ipa": "/wɒt/ /kind/ /of/ /pet/ /duː/ /juː/ /hæv/?",
            "bn_pron": "হোয়াট kind of pet ডু ইউ হ্যাভ?"
        },
        {
            "speaker": "B",
            "en": "I have a sweet white Persian cat.",
            "bn": "আমার একটি ফুটফুটে সাদা পার্সিয়ান বিড়াল আছে।",
            "ipa": "/aɪ/ /hæv/ /a/ /sweet/ /white/ /persian/ /cat/",
            "bn_pron": "আই হ্যাভ a sweet white persian cat।"
        }
    ],
    "lesson-04-there-is-are": [
        {
            "speaker": "A",
            "en": "Is there any tea left in the cup?",
            "bn": "কাপে কি আর কোনো চা অবশিষ্ট আছে?",
            "ipa": "/ɪz/ /there/ /any/ /tiː/ /left/ /in/ /ðə/ /cup/?",
            "bn_pron": "ইজ দেয়ার any টি left in দ্য cup?"
        },
        {
            "speaker": "B",
            "en": "Yes, there is a little tea left.",
            "bn": "হ্যাঁ, সামান্য চা অবশিষ্ট আছে।",
            "ipa": "/jes/ /there/ /ɪz/ /a/ /little/ /tiː/ /left/",
            "bn_pron": "ইয়েস দেয়ার ইজ a little টি left।"
        },
        {
            "speaker": "A",
            "en": "Are there any good restaurants nearby?",
            "bn": "কাছাকাছি কি ভালো কোনো রেস্তোরাঁ আছে?",
            "ipa": "/ɑː/ /there/ /any/ /ɡʊd/ /restaurants/ /nearby/?",
            "bn_pron": "আর দেয়ার any গুড restaurants nearby?"
        },
        {
            "speaker": "B",
            "en": "Yes, there are two famous cafes nearby.",
            "bn": "হ্যাঁ, কাছেই দুটো বিখ্যাত ক্যাফে আছে।",
            "ipa": "/jes/ /there/ /ɑː/ /two/ /famous/ /cafes/ /nearby/",
            "bn_pron": "ইয়েস দেয়ার আর two famous cafes nearby।"
        },
        {
            "speaker": "A",
            "en": "Is there any milk in the fridge?",
            "bn": "ফ্রিজে কি দুধ আছে?",
            "ipa": "/ɪz/ /there/ /any/ /milk/ /in/ /ðə/ /fridge/?",
            "bn_pron": "ইজ দেয়ার any milk in দ্য fridge?"
        },
        {
            "speaker": "B",
            "en": "No, there is no milk left in the bottle.",
            "bn": "না, বোতলে কোনো দুধ অবশিষ্ট নেই।",
            "ipa": "/no/ /there/ /ɪz/ /no/ /milk/ /left/ /in/ /ðə/ /bottle/",
            "bn_pron": "নো দেয়ার ইজ নো milk left in দ্য bottle।"
        },
        {
            "speaker": "A",
            "en": "How many people are there in your family?",
            "bn": "তোমার পরিবারে কতজন সদস্য আছেন?",
            "ipa": "/haʊ/ /many/ /people/ /ɑː/ /there/ /in/ /your/ /family/?",
            "bn_pron": "হাউ many people আর দেয়ার in ইওর family?"
        },
        {
            "speaker": "B",
            "en": "There are five people in my family.",
            "bn": "আমার পরিবারে পাঁচজন সদস্য আছেন।",
            "ipa": "/there/ /ɑː/ /five/ /people/ /in/ /my/ /family/",
            "bn_pron": "দেয়ার আর five people in মাই family।"
        },
        {
            "speaker": "A",
            "en": "Is there an ATM booth on this street?",
            "bn": "এই রাস্তায় কি কোনো এটিএম বুথ আছে?",
            "ipa": "/ɪz/ /there/ /an/ /atm/ /booth/ /on/ /this/ /street/?",
            "bn_pron": "ইজ দেয়ার an atm booth on this street?"
        },
        {
            "speaker": "B",
            "en": "Yes, there is one right across the road.",
            "bn": "হ্যাঁ, রাস্তার ঠিক ওপারেই একটা আছে।",
            "ipa": "/jes/ /there/ /ɪz/ /one/ /right/ /across/ /ðə/ /road/",
            "bn_pron": "ইয়েস দেয়ার ইজ one right across দ্য road।"
        },
        {
            "speaker": "A",
            "en": "Are there many books on your shelf?",
            "bn": "তোমার শেলফে কি অনেক বই আছে?",
            "ipa": "/ɑː/ /there/ /many/ /books/ /on/ /your/ /shelf/?",
            "bn_pron": "আর দেয়ার many books on ইওর shelf?"
        },
        {
            "speaker": "B",
            "en": "Yes, there are more than fifty books.",
            "bn": "হ্যাঁ, পঞ্চাশটিরও বেশি বই আছে।",
            "ipa": "/jes/ /there/ /ɑː/ /more/ /than/ /fifty/ /books/",
            "bn_pron": "ইয়েস দেয়ার আর more than fifty books।"
        },
        {
            "speaker": "A",
            "en": "Is there any doubt about the decision?",
            "bn": "সিদ্ধান্তটি নিয়ে কি কোনো সন্দেহ আছে?",
            "ipa": "/ɪz/ /there/ /any/ /doubt/ /about/ /ðə/ /decision/?",
            "bn_pron": "ইজ দেয়ার any doubt about দ্য decision?"
        },
        {
            "speaker": "B",
            "en": "No, there is no doubt at all.",
            "bn": "না, কোনো প্রকার সন্দেহের অবকাশ নেই।",
            "ipa": "/no/ /there/ /ɪz/ /no/ /doubt/ /æt/ /all/",
            "bn_pron": "নো দেয়ার ইজ নো doubt অ্যাট all।"
        },
        {
            "speaker": "A",
            "en": "Are there any vacant seats on the bus?",
            "bn": "বাসে কি কোনো খালি সিট আছে?",
            "ipa": "/ɑː/ /there/ /any/ /vacant/ /seats/ /on/ /ðə/ /bus/?",
            "bn_pron": "আর দেয়ার any vacant seats on দ্য bus?"
        },
        {
            "speaker": "B",
            "en": "Yes, there are two seats in the back.",
            "bn": "হ্যাঁ, পেছনের দিকে দুটো সিট খালি আছে।",
            "ipa": "/jes/ /there/ /ɑː/ /two/ /seats/ /in/ /ðə/ /back/",
            "bn_pron": "ইয়েস দেয়ার আর two seats in দ্য back।"
        },
        {
            "speaker": "A",
            "en": "Is there WiFi available in this hotel?",
            "bn": "এই হোটেলে কি ওয়াইফাই সুবিধা আছে?",
            "ipa": "/ɪz/ /there/ /wifi/ /available/ /in/ /this/ /hotel/?",
            "bn_pron": "ইজ দেয়ার wifi available in this hotel?"
        },
        {
            "speaker": "B",
            "en": "Yes, there is fast high-speed WiFi everywhere.",
            "bn": "হ্যাঁ, সব জায়গাতেই দ্রুতগতির ওয়াইফাই আছে।",
            "ipa": "/jes/ /there/ /ɪz/ /fast/ /high-speed/ /wifi/ /everywhere/",
            "bn_pron": "ইয়েস দেয়ার ইজ fast high-speed wifi everywhere।"
        },
        {
            "speaker": "A",
            "en": "What is there inside the gift box?",
            "bn": "উপহারের বক্সের ভেতর কী আছে?",
            "ipa": "/wɒt/ /ɪz/ /there/ /inside/ /ðə/ /gift/ /box/?",
            "bn_pron": "হোয়াট ইজ দেয়ার inside দ্য gift box?"
        },
        {
            "speaker": "B",
            "en": "There is a beautiful leather wrist watch.",
            "bn": "ভেতরে একটি চমৎকার চামড়ার রিস্ট ওয়াচ আছে।",
            "ipa": "/there/ /ɪz/ /a/ /beautiful/ /leather/ /wrist/ /watch/",
            "bn_pron": "দেয়ার ইজ a beautiful leather wrist ওয়াচ।"
        }
    ],
    "lesson-05-present-simple": [
        {
            "speaker": "A",
            "en": "Do you do the work on time?",
            "bn": "তুমি কি সময়ে কাজটি করো?",
            "ipa": "/duː/ /juː/ /duː/ /ðə/ /wɜːk/ /on/ /taɪm/?",
            "bn_pron": "ডু ইউ ডু দ্য ওয়ার্ক on টাইম?"
        },
        {
            "speaker": "B",
            "en": "Yes, I always complete my work on time.",
            "bn": "হ্যাঁ, আমি সবসময় সময়ে কাজ শেষ করি।",
            "ipa": "/jes/ /aɪ/ /always/ /complete/ /my/ /wɜːk/ /on/ /taɪm/",
            "bn_pron": "ইয়েস আই অলওয়েজ complete মাই ওয়ার্ক on টাইম।"
        },
        {
            "speaker": "A",
            "en": "Do you drink tea in the morning?",
            "bn": "তুমি কি সকালে চা পান করো?",
            "ipa": "/duː/ /juː/ /drɪŋk/ /tiː/ /in/ /ðə/ /morning/?",
            "bn_pron": "ডু ইউ ড্রিংক টি in দ্য মর্নিং?"
        },
        {
            "speaker": "B",
            "en": "Yes, I drink a hot cup of black tea.",
            "bn": "হ্যাঁ, আমি সকালে এক কাপ গরম রঙ চা খাই।",
            "ipa": "/jes/ /aɪ/ /drɪŋk/ /a/ /hot/ /cup/ /of/ /black/ /tiː/",
            "bn_pron": "ইয়েস আই ড্রিংক a hot cup of black টি।"
        },
        {
            "speaker": "A",
            "en": "What time do you usually wake up?",
            "bn": "তুমি সাধারণত কখন ঘুম থেকে ওঠো?",
            "ipa": "/wɒt/ /taɪm/ /duː/ /juː/ /usually/ /wake/ /up/?",
            "bn_pron": "হোয়াট টাইম ডু ইউ usually ওয়েক আপ?"
        },
        {
            "speaker": "B",
            "en": "I wake up at six in the morning.",
            "bn": "আমি সকাল ছয়টায় ঘুম থেকে উঠি।",
            "ipa": "/aɪ/ /wake/ /up/ /æt/ /six/ /in/ /ðə/ /morning/",
            "bn_pron": "আই ওয়েক আপ অ্যাট six in দ্য মর্নিং।"
        },
        {
            "speaker": "A",
            "en": "Does your father go for a morning walk?",
            "bn": "তোমার বাবা কি প্রাতঃভ্রমণে যান?",
            "ipa": "/does/ /your/ /father/ /go/ /for/ /a/ /morning/ /walk/?",
            "bn_pron": "ডাজ ইওর father গো for a মর্নিং walk?"
        },
        {
            "speaker": "B",
            "en": "Yes, he walks in the park every day.",
            "bn": "হ্যাঁ, তিনি প্রতিদিন পার্কে হাঁটেন।",
            "ipa": "/jes/ /hiː/ /walks/ /in/ /ðə/ /park/ /every/ /day/",
            "bn_pron": "ইয়েস হি walks in দ্য park এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Do you read the newspaper daily?",
            "bn": "তুমি কি প্রতিদিন খবরের কাগজ পড়ো?",
            "ipa": "/duː/ /juː/ /read/ /ðə/ /newspaper/ /daily/?",
            "bn_pron": "ডু ইউ রিড দ্য newspaper daily?"
        },
        {
            "speaker": "B",
            "en": "Yes, I read the headlines every morning.",
            "bn": "হ্যাঁ, আমি প্রতিদিন সকালে শিরোনামগুলো পড়ি।",
            "ipa": "/jes/ /aɪ/ /read/ /ðə/ /headlines/ /every/ /morning/",
            "bn_pron": "ইয়েস আই রিড দ্য headlines এভরি মর্নিং।"
        },
        {
            "speaker": "A",
            "en": "Where do you work currently?",
            "bn": "তুমি বর্তমানে কোথায় চাকরি করো?",
            "ipa": "/weə/ /duː/ /juː/ /wɜːk/ /currently/?",
            "bn_pron": "হোয়ার ডু ইউ ওয়ার্ক currently?"
        },
        {
            "speaker": "B",
            "en": "I work at an IT software firm.",
            "bn": "আমি একটি আইটি সফটওয়্যার প্রতিষ্ঠানে কাজ করি।",
            "ipa": "/aɪ/ /wɜːk/ /æt/ /an/ /it/ /software/ /firm/",
            "bn_pron": "আই ওয়ার্ক অ্যাট an ইট software firm।"
        },
        {
            "speaker": "A",
            "en": "Do you speak English with your friends?",
            "bn": "তুমি কি বন্ধুদের সাথে ইংরেজিতে কথা বলো?",
            "ipa": "/duː/ /juː/ /speak/ /english/ /with/ /your/ /friends/?",
            "bn_pron": "ডু ইউ স্পিক ইংলিশ with ইওর friends?"
        },
        {
            "speaker": "B",
            "en": "Yes, we practice speaking every evening.",
            "bn": "হ্যাঁ, আমরা প্রতিদিন সন্ধ্যায় কথা বলা চর্চা করি।",
            "ipa": "/jes/ /we/ /practice/ /speaking/ /every/ /evening/",
            "bn_pron": "ইয়েস উই practice speaking এভরি evening।"
        },
        {
            "speaker": "A",
            "en": "How do you commute to work?",
            "bn": "তুমি কাজে কীভাবে যাতায়াত করো?",
            "ipa": "/haʊ/ /duː/ /juː/ /commute/ /to/ /wɜːk/?",
            "bn_pron": "হাউ ডু ইউ commute টু ওয়ার্ক?"
        },
        {
            "speaker": "B",
            "en": "I take the metro train every morning.",
            "bn": "আমি প্রতিদিন সকালে মেট্রো রেলে যাই।",
            "ipa": "/aɪ/ /take/ /ðə/ /metro/ /train/ /every/ /morning/",
            "bn_pron": "আই take দ্য metro train এভরি মর্নিং।"
        },
        {
            "speaker": "A",
            "en": "Does it rain heavily in your district?",
            "bn": "তোমাদের জেলায় কি প্রচুর বৃষ্টি হয়?",
            "ipa": "/does/ /it/ /rain/ /heavily/ /in/ /your/ /district/?",
            "bn_pron": "ডাজ ইট rain heavily in ইওর district?"
        },
        {
            "speaker": "B",
            "en": "Yes, it rains a lot during the monsoon.",
            "bn": "হ্যাঁ, বর্ষাকালে প্রচুর বৃষ্টি হয়।",
            "ipa": "/jes/ /it/ /rains/ /a/ /lot/ /during/ /ðə/ /monsoon/",
            "bn_pron": "ইয়েস ইট rains a lot during দ্য monsoon।"
        },
        {
            "speaker": "A",
            "en": "What do you like to do in your free time?",
            "bn": "অবসর সময়ে তুমি কী করতে পছন্দ করো?",
            "ipa": "/wɒt/ /duː/ /juː/ /laɪk/ /to/ /duː/ /in/ /your/ /free/ /taɪm/?",
            "bn_pron": "হোয়াট ডু ইউ লাইক টু ডু in ইওর free টাইম?"
        },
        {
            "speaker": "B",
            "en": "I like listening to soft music and reading.",
            "bn": "আমি মৃদু গান শুনতে ও বই পড়তে ভালোবাসি।",
            "ipa": "/aɪ/ /laɪk/ /listening/ /to/ /soft/ /music/ /and/ /reading/",
            "bn_pron": "আই লাইক listening টু soft music and reading।"
        }
    ],
    "lesson-06-present-continuous": [
        {
            "speaker": "A",
            "en": "What are you doing right now?",
            "bn": "তুমি এই মুহূর্তে কী করছো?",
            "ipa": "/wɒt/ /ɑː/ /juː/ /doing/ /right/ /naʊ/?",
            "bn_pron": "হোয়াট আর ইউ doing right নাউ?"
        },
        {
            "speaker": "B",
            "en": "I am practicing spoken English dialogues.",
            "bn": "আমি স্পোকেন ইংলিশ ডায়ালগ প্র্যাকটিস করছি।",
            "ipa": "/aɪ/ /am/ /practicing/ /spoken/ /english/ /dialogues/",
            "bn_pron": "আই অ্যাম practicing spoken ইংলিশ dialogues।"
        },
        {
            "speaker": "A",
            "en": "Is it raining outside at the moment?",
            "bn": "বাইরে কি এই মুহূর্তে বৃষ্টি হচ্ছে?",
            "ipa": "/ɪz/ /it/ /raining/ /outside/ /æt/ /ðə/ /moment/?",
            "bn_pron": "ইজ ইট raining outside অ্যাট দ্য moment?"
        },
        {
            "speaker": "B",
            "en": "Yes, it is drizzling softly.",
            "bn": "হ্যাঁ, গুঁড়ি গুঁড়ি বৃষ্টি পড়ছে।",
            "ipa": "/jes/ /it/ /ɪz/ /drizzling/ /softly/",
            "bn_pron": "ইয়েস ইট ইজ drizzling softly।"
        },
        {
            "speaker": "A",
            "en": "Are you waiting for someone?",
            "bn": "তুমি কি কারো জন্য অপেক্ষা করছো?",
            "ipa": "/ɑː/ /juː/ /waiting/ /for/ /someone/?",
            "bn_pron": "আর ইউ waiting for someone?"
        },
        {
            "speaker": "B",
            "en": "Yes, I am waiting for my younger brother.",
            "bn": "হ্যাঁ, আমি আমার ছোট ভাইয়ের জন্য অপেক্ষা করছি।",
            "ipa": "/jes/ /aɪ/ /am/ /waiting/ /for/ /my/ /younger/ /brother/",
            "bn_pron": "ইয়েস আই অ্যাম waiting for মাই younger ব্রাদার।"
        },
        {
            "speaker": "A",
            "en": "Where are you going in such a hurry?",
            "bn": "তুমি এত তাড়াহুড়ো করে কোথায় যাচ্ছো?",
            "ipa": "/weə/ /ɑː/ /juː/ /going/ /in/ /such/ /a/ /hurry/?",
            "bn_pron": "হোয়ার আর ইউ going in such a hurry?"
        },
        {
            "speaker": "B",
            "en": "I am rushing to catch the five o'clock bus.",
            "bn": "আমি পাঁচটার বাসটা ধরার জন্য তাড়াহুড়ো করছি।",
            "ipa": "/aɪ/ /am/ /rushing/ /to/ /catch/ /ðə/ /five/ /o'clock/ /bus/",
            "bn_pron": "আই অ্যাম rushing টু catch দ্য five o'clock bus।"
        },
        {
            "speaker": "A",
            "en": "Who are you speaking to on the phone?",
            "bn": "ফোনে তুমি কার সাথে কথা বলছো?",
            "ipa": "/who/ /ɑː/ /juː/ /speaking/ /to/ /on/ /ðə/ /phone/?",
            "bn_pron": "হু আর ইউ speaking টু on দ্য phone?"
        },
        {
            "speaker": "B",
            "en": "I am talking to my college supervisor.",
            "bn": "আমি আমার কলেজের সুপারভাইজারের সাথে কথা বলছি।",
            "ipa": "/aɪ/ /am/ /talking/ /to/ /my/ /college/ /supervisor/",
            "bn_pron": "আই অ্যাম talking টু মাই কলেজ supervisor।"
        },
        {
            "speaker": "A",
            "en": "Why is your baby crying so loud?",
            "bn": "তোমার বাচ্চা এত জোরে কাঁদছে কেন?",
            "ipa": "/waɪ/ /ɪz/ /your/ /baby/ /crying/ /so/ /loud/?",
            "bn_pron": "হোয়াই ইজ ইওর baby crying so loud?"
        },
        {
            "speaker": "B",
            "en": "She is crying because she feels sleepy.",
            "bn": "সে ঘুমে ঢুলছে বলেই কাঁদছে।",
            "ipa": "/ʃiː/ /ɪz/ /crying/ /because/ /ʃiː/ /feels/ /sleepy/",
            "bn_pron": "শি ইজ crying because শি feels sleepy।"
        },
        {
            "speaker": "A",
            "en": "Are you feeling better after taking medicine?",
            "bn": "ওষুধ খাবার পর কি তোমার ভালো লাগছে?",
            "ipa": "/ɑː/ /juː/ /feeling/ /better/ /after/ /taking/ /medicine/?",
            "bn_pron": "আর ইউ feeling better after taking medicine?"
        },
        {
            "speaker": "B",
            "en": "Yes, I am feeling much better now.",
            "bn": "হ্যাঁ, এখন বেশ ভালো লাগছে।",
            "ipa": "/jes/ /aɪ/ /am/ /feeling/ /much/ /better/ /naʊ/",
            "bn_pron": "ইয়েস আই অ্যাম feeling much better নাউ।"
        },
        {
            "speaker": "A",
            "en": "Is your company expanding its business?",
            "bn": "তোমাদের কোম্পানি কি ব্যবসা সম্প্রসারণ করছে?",
            "ipa": "/ɪz/ /your/ /company/ /expanding/ /its/ /business/?",
            "bn_pron": "ইজ ইওর company expanding its business?"
        },
        {
            "speaker": "B",
            "en": "Yes, we are opening two new branches.",
            "bn": "হ্যাঁ, আমরা দুটি নতুন শাখা খুলছি।",
            "ipa": "/jes/ /we/ /ɑː/ /opening/ /two/ /new/ /branches/",
            "bn_pron": "ইয়েস উই আর opening two new branches।"
        },
        {
            "speaker": "A",
            "en": "Are your guests coming over tonight?",
            "bn": "আজ রাতে কি মেহমানরা আসছেন?",
            "ipa": "/ɑː/ /your/ /guests/ /coming/ /over/ /tonight/?",
            "bn_pron": "আর ইওর guests coming over tonight?"
        },
        {
            "speaker": "B",
            "en": "Yes, my mother is preparing dinner for them.",
            "bn": "হ্যাঁ, মা তাদের জন্য রাতের খাবার রান্না করছেন।",
            "ipa": "/jes/ /my/ /mother/ /ɪz/ /preparing/ /dinner/ /for/ /them/",
            "bn_pron": "ইয়েস মাই mother ইজ preparing dinner for them।"
        },
        {
            "speaker": "A",
            "en": "What are they discussing in the hall?",
            "bn": "হলরুমে তারা কী নিয়ে আলোচনা করছেন?",
            "ipa": "/wɒt/ /ɑː/ /they/ /discussing/ /in/ /ðə/ /hall/?",
            "bn_pron": "হোয়াট আর দে discussing in দ্য hall?"
        },
        {
            "speaker": "B",
            "en": "They are planning the annual picnic.",
            "bn": "তারা বাৎসরিক পিকনিকের পরিকল্পনা করছেন।",
            "ipa": "/they/ /ɑː/ /planning/ /ðə/ /annual/ /picnic/",
            "bn_pron": "দে আর planning দ্য annual picnic।"
        }
    ],
    "lesson-07-past-simple": [
        {
            "speaker": "A",
            "en": "Did you finish the assigned task yesterday?",
            "bn": "তুমি কি গতকাল অর্পিত কাজটি শেষ করেছিলে?",
            "ipa": "/did/ /juː/ /finish/ /ðə/ /assigned/ /task/ /yesterday/?",
            "bn_pron": "ডিড ইউ finish দ্য assigned task yesterday?"
        },
        {
            "speaker": "B",
            "en": "Yes, I submitted it before five PM.",
            "bn": "হ্যাঁ, আমি বিকেল পাঁচটার আগেই জমা দিয়েছি।",
            "ipa": "/jes/ /aɪ/ /submitted/ /it/ /before/ /five/ /pm/",
            "bn_pron": "ইয়েস আই submitted ইট before five pm।"
        },
        {
            "speaker": "A",
            "en": "Where did you go on last weekend?",
            "bn": "গত উইকএন্ডে তুমি কোথায় গিয়েছিলে?",
            "ipa": "/weə/ /did/ /juː/ /go/ /on/ /last/ /weekend/?",
            "bn_pron": "হোয়ার ডিড ইউ গো on last weekend?"
        },
        {
            "speaker": "B",
            "en": "I went to Cox's Bazar with my family.",
            "bn": "আমি পরিবারের সাথে কক্সবাজার গিয়েছিলাম।",
            "ipa": "/aɪ/ /went/ /to/ /cox's/ /bazar/ /with/ /my/ /family/",
            "bn_pron": "আই ওয়েন্ট টু cox's bazar with মাই family।"
        },
        {
            "speaker": "A",
            "en": "Did you receive my voice message?",
            "bn": "তুমি কি আমার ভয়েস মেসেজ পেয়েছিলে?",
            "ipa": "/did/ /juː/ /receive/ /my/ /voice/ /message/?",
            "bn_pron": "ডিড ইউ receive মাই voice message?"
        },
        {
            "speaker": "B",
            "en": "Yes, I listened to it last night.",
            "bn": "হ্যাঁ, আমি গতকাল রাতেই তা শুনেছি।",
            "ipa": "/jes/ /aɪ/ /listened/ /to/ /it/ /last/ /night/",
            "bn_pron": "ইয়েস আই listened টু ইট last নাইট।"
        },
        {
            "speaker": "A",
            "en": "What time did you sleep last night?",
            "bn": "গতকাল রাতে তুমি কয়টায় ঘুমিয়েছিলে?",
            "ipa": "/wɒt/ /taɪm/ /did/ /juː/ /sleep/ /last/ /night/?",
            "bn_pron": "হোয়াট টাইম ডিড ইউ স্লিপ last নাইট?"
        },
        {
            "speaker": "B",
            "en": "I slept quite late, around midnight.",
            "bn": "আমি বেশ দেরিতে, প্রায় রাত ১২টায় ঘুমাই।",
            "ipa": "/aɪ/ /slept/ /quite/ /late/ /around/ /midnight/",
            "bn_pron": "আই slept quite late around midnight।"
        },
        {
            "speaker": "A",
            "en": "Did you buy a new pair of shoes?",
            "bn": "তুমি কি একজোড়া নতুন জুতো কিনেছিলে?",
            "ipa": "/did/ /juː/ /buy/ /a/ /new/ /pair/ /of/ /shoes/?",
            "bn_pron": "ডিড ইউ buy a new pair of shoes?"
        },
        {
            "speaker": "B",
            "en": "Yes, I bought these sneakers yesterday.",
            "bn": "হ্যাঁ, গতকাল এই স্নিকার্স জোড়া কিনেছি।",
            "ipa": "/jes/ /aɪ/ /bought/ /these/ /sneakers/ /yesterday/",
            "bn_pron": "ইয়েস আই bought these sneakers yesterday।"
        },
        {
            "speaker": "A",
            "en": "Why did you miss the morning class?",
            "bn": "তুমি সকালের ক্লাস মিস করেছিলে কেন?",
            "ipa": "/waɪ/ /did/ /juː/ /miss/ /ðə/ /morning/ /class/?",
            "bn_pron": "হোয়াই ডিড ইউ miss দ্য মর্নিং class?"
        },
        {
            "speaker": "B",
            "en": "I caught a bad cold and felt dizzy.",
            "bn": "আমার প্রচণ্ড ঠান্ডা লেগে মাথা ঘুরছিল।",
            "ipa": "/aɪ/ /caught/ /a/ /bad/ /cold/ /and/ /felt/ /dizzy/",
            "bn_pron": "আই caught a bad cold and felt dizzy।"
        },
        {
            "speaker": "A",
            "en": "Did they agree to our proposal?",
            "bn": "তারা কি আমাদের প্রস্তাবে রাজি হয়েছিল?",
            "ipa": "/did/ /they/ /agree/ /to/ /our/ /proposal/?",
            "bn_pron": "ডিড দে agree টু our proposal?"
        },
        {
            "speaker": "B",
            "en": "Yes, they signed the agreement happily.",
            "bn": "হ্যাঁ, তারা হাসিমুখেই চুক্তিতে সই করেছিল।",
            "ipa": "/jes/ /they/ /signed/ /ðə/ /agreement/ /happily/",
            "bn_pron": "ইয়েস দে signed দ্য agreement happily।"
        },
        {
            "speaker": "A",
            "en": "Who told you about this job opening?",
            "bn": "তোমাকে এই চাকুরির খবরের কথা কে জানিয়েছিল?",
            "ipa": "/who/ /told/ /juː/ /about/ /this/ /job/ /opening/?",
            "bn_pron": "হু told ইউ about this job opening?"
        },
        {
            "speaker": "B",
            "en": "My cousin informed me on Tuesday.",
            "bn": "আমার কাজিন মঙ্গলবার আমাকে জানিয়েছিল।",
            "ipa": "/my/ /cousin/ /informed/ /miː/ /on/ /tuesday/",
            "bn_pron": "মাই cousin informed মি on tuesday।"
        },
        {
            "speaker": "A",
            "en": "Did you enjoy the concert on Friday?",
            "bn": "শুক্রবার কনসার্টটি তোমার কেমন লেগেছিল?",
            "ipa": "/did/ /juː/ /enjoy/ /ðə/ /concert/ /on/ /friday/?",
            "bn_pron": "ডিড ইউ enjoy দ্য concert on friday?"
        },
        {
            "speaker": "B",
            "en": "Yes, the live music was outstanding.",
            "bn": "হ্যাঁ, লাইভ গানগুলো অসাধারণ ছিল।",
            "ipa": "/jes/ /ðə/ /live/ /music/ /was/ /outstanding/",
            "bn_pron": "ইয়েস দ্য live music was outstanding।"
        },
        {
            "speaker": "A",
            "en": "How much did you pay for this jacket?",
            "bn": "এই জ্যাকেটটার জন্য তুমি কত দিয়েছিলে?",
            "ipa": "/haʊ/ /much/ /did/ /juː/ /pay/ /for/ /this/ /jacket/?",
            "bn_pron": "হাউ much ডিড ইউ pay for this jacket?"
        },
        {
            "speaker": "B",
            "en": "I paid only fifteen hundred taka on sale.",
            "bn": "অফারে মাত্র পনেরোশ টাকা দিয়েছিলাম।",
            "ipa": "/aɪ/ /paid/ /only/ /fifteen/ /hundred/ /taka/ /on/ /sale/",
            "bn_pron": "আই paid only fifteen hundred taka on sale।"
        }
    ],
    "lesson-08-present-perfect": [
        {
            "speaker": "A",
            "en": "Have you ever traveled by airplane?",
            "bn": "তুমি কি কখনো উড়োজাহাজে ভ্রমণ করেছো?",
            "ipa": "/hæv/ /juː/ /ever/ /traveled/ /by/ /airplane/?",
            "bn_pron": "হ্যাভ ইউ ever traveled by airplane?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have flown to Sylhet twice.",
            "bn": "হ্যাঁ, আমি দুবার বিমানে সিলেটে গেছি।",
            "ipa": "/jes/ /aɪ/ /hæv/ /flown/ /to/ /sylhet/ /twice/",
            "bn_pron": "ইয়েস আই হ্যাভ flown টু sylhet twice।"
        },
        {
            "speaker": "A",
            "en": "Have you taken your lunch yet?",
            "bn": "তুমি কি ইতিমধ্যে দুপুরের খাবার খেয়েছো?",
            "ipa": "/hæv/ /juː/ /taken/ /your/ /lunch/ /yet/?",
            "bn_pron": "হ্যাভ ইউ taken ইওর lunch yet?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have already finished eating.",
            "bn": "হ্যাঁ, আমি ইতিমধ্যে খাওয়া শেষ করেছি।",
            "ipa": "/jes/ /aɪ/ /hæv/ /already/ /finished/ /eating/",
            "bn_pron": "ইয়েস আই হ্যাভ already finished eating।"
        },
        {
            "speaker": "A",
            "en": "Has the train arrived at the station?",
            "bn": "ট্রেন কি স্টেশনে পৌঁছেছে?",
            "ipa": "/hæz/ /ðə/ /train/ /arrived/ /æt/ /ðə/ /station/?",
            "bn_pron": "হাইজ দ্য train arrived অ্যাট দ্য station?"
        },
        {
            "speaker": "B",
            "en": "Yes, it has just pulled into platform two.",
            "bn": "হ্যাঁ, এইমাত্র ২ নম্বর প্ল্যাটফর্মে ঢুকেছে।",
            "ipa": "/jes/ /it/ /hæz/ /just/ /pulled/ /into/ /platform/ /two/",
            "bn_pron": "ইয়েস ইট হাইজ just pulled into platform two।"
        },
        {
            "speaker": "A",
            "en": "Have you ever tried Japanese sushi?",
            "bn": "তুমি কি কখনো জাপানি সুশি খেয়েছো?",
            "ipa": "/hæv/ /juː/ /ever/ /tried/ /japanese/ /sushi/?",
            "bn_pron": "হ্যাভ ইউ ever tried japanese sushi?"
        },
        {
            "speaker": "B",
            "en": "No, I have never tasted it before.",
            "bn": "না, আমি এর আগে কখনো খাইনি।",
            "ipa": "/no/ /aɪ/ /hæv/ /never/ /tasted/ /it/ /before/",
            "bn_pron": "নো আই হ্যাভ নেভার tasted ইট before।"
        },
        {
            "speaker": "A",
            "en": "How long have you lived in this town?",
            "bn": "তুমি কত বছর ধরে এই শহরে বাস করছো?",
            "ipa": "/haʊ/ /long/ /hæv/ /juː/ /lived/ /in/ /this/ /town/?",
            "bn_pron": "হাউ long হ্যাভ ইউ lived in this town?"
        },
        {
            "speaker": "B",
            "en": "I have lived here for nearly ten years.",
            "bn": "আমি প্রায় দশ বছর ধরে এখানে বাস করছি।",
            "ipa": "/aɪ/ /hæv/ /lived/ /here/ /for/ /nearly/ /ten/ /years/",
            "bn_pron": "আই হ্যাভ lived হিয়ার for nearly ten years।"
        },
        {
            "speaker": "A",
            "en": "Have you seen my reading glasses anywhere?",
            "bn": "তুমি কি কোথাও আমার পড়ার চশমাটি দেখেছো?",
            "ipa": "/hæv/ /juː/ /seen/ /my/ /reading/ /glasses/ /anywhere/?",
            "bn_pron": "হ্যাভ ইউ seen মাই reading glasses anywhere?"
        },
        {
            "speaker": "B",
            "en": "Yes, you have left them on the dining table.",
            "bn": "হ্যাঁ, তুমি ডাইনিং টেবিলের ওপর রেখেছো।",
            "ipa": "/jes/ /juː/ /hæv/ /left/ /them/ /on/ /ðə/ /dining/ /table/",
            "bn_pron": "ইয়েস ইউ হ্যাভ left them on দ্য dining table।"
        },
        {
            "speaker": "A",
            "en": "Has she replied to your email?",
            "bn": "সে কি তোমার ইমেইলের উত্তর দিয়েছে?",
            "ipa": "/hæz/ /ʃiː/ /replied/ /to/ /your/ /email/?",
            "bn_pron": "হাইজ শি replied টু ইওর email?"
        },
        {
            "speaker": "B",
            "en": "Yes, she has sent a detailed reply.",
            "bn": "হ্যাঁ, সে বিস্তারিত উত্তর পাঠিয়েছে।",
            "ipa": "/jes/ /ʃiː/ /hæz/ /sent/ /a/ /detailed/ /reply/",
            "bn_pron": "ইয়েস শি হাইজ sent a detailed reply।"
        },
        {
            "speaker": "A",
            "en": "Have they announced the exam dates?",
            "bn": "তারা কি পরীক্ষার তারিখ ঘোষণা করেছে?",
            "ipa": "/hæv/ /they/ /announced/ /ðə/ /exam/ /dates/?",
            "bn_pron": "হ্যাভ দে announced দ্য exam dates?"
        },
        {
            "speaker": "B",
            "en": "Not yet, they haven't published it so far.",
            "bn": "এখনো না, তারা এখনো তা প্রকাশ করেনি।",
            "ipa": "/not/ /yet/ /they/ /haven't/ /published/ /it/ /so/ /far/",
            "bn_pron": "Not yet দে haven't published ইট so far।"
        },
        {
            "speaker": "A",
            "en": "Have you met our new department manager?",
            "bn": "আমাদের নতুন ডিপার্টমেন্ট ম্যানেজারের সাথে কি তোমার দেখা হয়েছে?",
            "ipa": "/hæv/ /juː/ /met/ /our/ /new/ /department/ /manager/?",
            "bn_pron": "হ্যাভ ইউ met our new department manager?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have introduced myself to him.",
            "bn": "হ্যাঁ, আমি তার সাথে পরিচিত হয়েছি।",
            "ipa": "/jes/ /aɪ/ /hæv/ /introduced/ /myself/ /to/ /him/",
            "bn_pron": "ইয়েস আই হ্যাভ introduced myself টু him।"
        },
        {
            "speaker": "A",
            "en": "What have you learned from this module?",
            "bn": "এই মডিউল থেকে তুমি কী শিখেছো?",
            "ipa": "/wɒt/ /hæv/ /juː/ /learned/ /from/ /this/ /module/?",
            "bn_pron": "হোয়াট হ্যাভ ইউ learned from this module?"
        },
        {
            "speaker": "B",
            "en": "I have gained immense confidence in spoken English.",
            "bn": "আমি স্পোকেন ইংলিশে প্রচুর আত্মবিশ্বাস পেয়েছি।",
            "ipa": "/aɪ/ /hæv/ /gained/ /immense/ /confidence/ /in/ /spoken/ /english/",
            "bn_pron": "আই হ্যাভ gained immense confidence in spoken ইংলিশ।"
        }
    ],
    "lesson-09-future-will-going-to": [
        {
            "speaker": "A",
            "en": "Will you come to the party tomorrow?",
            "bn": "তুমি কি আগামীকাল অনুষ্ঠানে আসবে?",
            "ipa": "/will/ /juː/ /come/ /to/ /ðə/ /party/ /tomorrow/?",
            "bn_pron": "Will ইউ come টু দ্য party tomorrow?"
        },
        {
            "speaker": "B",
            "en": "Yes, I will definitely join the party.",
            "bn": "হ্যাঁ, আমি নিশ্চিতভাবেই অনুষ্ঠানে যোগ দেব।",
            "ipa": "/jes/ /aɪ/ /will/ /definitely/ /join/ /ðə/ /party/",
            "bn_pron": "ইয়েস আই will definitely join দ্য party।"
        },
        {
            "speaker": "A",
            "en": "What are you going to do this evening?",
            "bn": "আজ সন্ধ্যায় তোমার কী করার পরিকল্পনা?",
            "ipa": "/wɒt/ /ɑː/ /juː/ /going/ /to/ /duː/ /this/ /evening/?",
            "bn_pron": "হোয়াট আর ইউ going টু ডু this evening?"
        },
        {
            "speaker": "B",
            "en": "I am going to study for the IELTS test.",
            "bn": "আমি আইইএলটিএস পরীক্ষার জন্য পড়তে যাচ্ছি।",
            "ipa": "/aɪ/ /am/ /going/ /to/ /study/ /for/ /ðə/ /ielts/ /test/",
            "bn_pron": "আই অ্যাম going টু study for দ্য ielts test।"
        },
        {
            "speaker": "A",
            "en": "Will it rain later this afternoon?",
            "bn": "আজ বিকেলে কি বৃষ্টি হতে পারে?",
            "ipa": "/will/ /it/ /rain/ /later/ /this/ /afternoon/?",
            "bn_pron": "Will ইট rain later this afternoon?"
        },
        {
            "speaker": "B",
            "en": "The sky is cloudy, so it might rain.",
            "bn": "আকাশ মেঘলা, তাই বৃষ্টি হতে পারে।",
            "ipa": "/ðə/ /sky/ /ɪz/ /cloudy/ /so/ /it/ /might/ /rain/",
            "bn_pron": "দ্য sky ইজ cloudy so ইট might rain।"
        },
        {
            "speaker": "A",
            "en": "Are you going to buy that laptop?",
            "bn": "তুমি কি ওই ল্যাপটপটি কিনতে যাচ্ছো?",
            "ipa": "/ɑː/ /juː/ /going/ /to/ /buy/ /that/ /laptop/?",
            "bn_pron": "আর ইউ going টু buy that laptop?"
        },
        {
            "speaker": "B",
            "en": "Yes, I am going to buy it next Monday.",
            "bn": "হ্যাঁ, আগামী সোমবার আমি ওটা কিনতে যাচ্ছি।",
            "ipa": "/jes/ /aɪ/ /am/ /going/ /to/ /buy/ /it/ /next/ /monday/",
            "bn_pron": "ইয়েস আই অ্যাম going টু buy ইট next monday।"
        },
        {
            "speaker": "A",
            "en": "Will you please remind me at eight PM?",
            "bn": "রাত আটটায় তুমি কি আমাকে একটু মনে করিয়ে দেবে?",
            "ipa": "/will/ /juː/ /pliːz/ /remind/ /miː/ /æt/ /eight/ /pm/?",
            "bn_pron": "Will ইউ প্লিজ remind মি অ্যাট eight pm?"
        },
        {
            "speaker": "B",
            "en": "Don't worry, I will give you a phone call.",
            "bn": "চিন্তা করো না, আমি তোমাকে ফোন করে জানিয়ে দেব।",
            "ipa": "/don't/ /worry/ /aɪ/ /will/ /give/ /juː/ /a/ /phone/ /call/",
            "bn_pron": "Don't worry আই will give ইউ a phone call।"
        },
        {
            "speaker": "A",
            "en": "When will the results be published?",
            "bn": "ফলাফল কখন প্রকাশ করা হবে?",
            "ipa": "/when/ /will/ /ðə/ /results/ /be/ /published/?",
            "bn_pron": "হোয়েন will দ্য results be published?"
        },
        {
            "speaker": "B",
            "en": "They will publish it by next Thursday.",
            "bn": "তারা আগামী বৃহস্পতিবারের মধ্যে প্রকাশ করবে।",
            "ipa": "/they/ /will/ /publish/ /it/ /by/ /next/ /thursday/",
            "bn_pron": "দে will publish ইট by next thursday।"
        },
        {
            "speaker": "A",
            "en": "Are you going to attend the seminar?",
            "bn": "তুমি কি সেমিনারে উপস্থিত থাকবে?",
            "ipa": "/ɑː/ /juː/ /going/ /to/ /attend/ /ðə/ /seminar/?",
            "bn_pron": "আর ইউ going টু attend দ্য seminar?"
        },
        {
            "speaker": "B",
            "en": "Yes, I am going to attend the morning session.",
            "bn": "হ্যাঁ, আমি সকালের সেশনে উপস্থিত থাকব।",
            "ipa": "/jes/ /aɪ/ /am/ /going/ /to/ /attend/ /ðə/ /morning/ /session/",
            "bn_pron": "ইয়েস আই অ্যাম going টু attend দ্য মর্নিং session।"
        },
        {
            "speaker": "A",
            "en": "Will you stay with us for dinner?",
            "bn": "তুমি কি রাতে আমাদের সাথে খেয়ে যাবে?",
            "ipa": "/will/ /juː/ /stay/ /with/ /us/ /for/ /dinner/?",
            "bn_pron": "Will ইউ stay with us for dinner?"
        },
        {
            "speaker": "B",
            "en": "Thank you, I will gladly stay for dinner.",
            "bn": "ধন্যবাদ, আমি আনন্দের সাথে রাতের খাবার খেয়ে যাব।",
            "ipa": "/thank/ /juː/ /aɪ/ /will/ /gladly/ /stay/ /for/ /dinner/",
            "bn_pron": "Thank ইউ আই will gladly stay for dinner।"
        },
        {
            "speaker": "A",
            "en": "What will happen if we miss the train?",
            "bn": "আমরা যদি ট্রেন মিস করি তাহলে কী হবে?",
            "ipa": "/wɒt/ /will/ /happen/ /if/ /we/ /miss/ /ðə/ /train/?",
            "bn_pron": "হোয়াট will happen if উই miss দ্য train?"
        },
        {
            "speaker": "B",
            "en": "We will simply book tickets for the night coach.",
            "bn": "আমরা রাতের কোচের টিকিট কেটে নেব।",
            "ipa": "/we/ /will/ /simply/ /book/ /tickets/ /for/ /ðə/ /night/ /coach/",
            "bn_pron": "উই will simply বুক tickets for দ্য নাইট coach।"
        },
        {
            "speaker": "A",
            "en": "Are you going to start a new business?",
            "bn": "তুমি কি নতুন কোনো ব্যবসা শুরু করতে যাচ্ছো?",
            "ipa": "/ɑː/ /juː/ /going/ /to/ /start/ /a/ /new/ /business/?",
            "bn_pron": "আর ইউ going টু start a new business?"
        },
        {
            "speaker": "B",
            "en": "Yes, I am planning to launch an online store.",
            "bn": "হ্যাঁ, আমি একটি অনলাইন স্টোর শুরু করার পরিকল্পনা করছি।",
            "ipa": "/jes/ /aɪ/ /am/ /planning/ /to/ /launch/ /an/ /online/ /store/",
            "bn_pron": "ইয়েস আই অ্যাম planning টু launch an online store।"
        }
    ],
    "lesson-10-can-could": [
        {
            "speaker": "A",
            "en": "Can you speak English fluently?",
            "bn": "তুমি কি সাবলীলভাবে ইংরেজিতে কথা বলতে পারো?",
            "ipa": "/kæn/ /juː/ /speak/ /english/ /fluently/?",
            "bn_pron": "ক্যান ইউ স্পিক ইংলিশ fluently?"
        },
        {
            "speaker": "B",
            "en": "I can communicate well, and I am improving daily.",
            "bn": "আমি বেশ ভালোই বলতে পারি, এবং প্রতিদিন উন্নতি করছি।",
            "ipa": "/aɪ/ /kæn/ /communicate/ /well/ /and/ /aɪ/ /am/ /improving/ /daily/",
            "bn_pron": "আই ক্যান communicate well and আই অ্যাম improving daily।"
        },
        {
            "speaker": "A",
            "en": "Could you please pass me the salt?",
            "bn": "দয়া করে আমাকে লবণদানিটা একটু এগিয়ে দেবেন?",
            "ipa": "/kʊd/ /juː/ /pliːz/ /pass/ /miː/ /ðə/ /salt/?",
            "bn_pron": "কুড ইউ প্লিজ pass মি দ্য salt?"
        },
        {
            "speaker": "B",
            "en": "Certainly, here it is on the table.",
            "bn": "নিশ্চয়ই, এই যে নিন।",
            "ipa": "/certainly/ /here/ /it/ /ɪz/ /on/ /ðə/ /table/",
            "bn_pron": "Certainly হিয়ার ইট ইজ on দ্য table।"
        },
        {
            "speaker": "A",
            "en": "Can you ride a motorbike safely?",
            "bn": "তুমি কি নিরাপদে মোটরবাইক চালাতে পারো?",
            "ipa": "/kæn/ /juː/ /ride/ /a/ /motorbike/ /safely/?",
            "bn_pron": "ক্যান ইউ ride a motorbike safely?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been riding for five years.",
            "bn": "হ্যাঁ, আমি পাঁচ বছর ধরে বাইক চালাচ্ছি।",
            "ipa": "/jes/ /aɪ/ /hæv/ /been/ /riding/ /for/ /five/ /years/",
            "bn_pron": "ইয়েস আই হ্যাভ been riding for five years।"
        },
        {
            "speaker": "A",
            "en": "Could you help me lift this heavy carton?",
            "bn": "এই ভারী কার্টনটা তুলতে তুমি কি একটু সাহায্য করতে পারবে?",
            "ipa": "/kʊd/ /juː/ /help/ /miː/ /lift/ /this/ /heavy/ /carton/?",
            "bn_pron": "কুড ইউ হেল্প মি lift this heavy carton?"
        },
        {
            "speaker": "B",
            "en": "Sure, let's grab it together on three.",
            "bn": "অবশ্যই, চলেন একসাথে হাত লাগাই।",
            "ipa": "/sure/ /let's/ /grab/ /it/ /together/ /on/ /three/",
            "bn_pron": "Sure let's grab ইট together on three।"
        },
        {
            "speaker": "A",
            "en": "Can you swim across this river?",
            "bn": "তুমি কি এই নদী সাঁতরে পার হতে পারো?",
            "ipa": "/kæn/ /juː/ /swim/ /across/ /this/ /river/?",
            "bn_pron": "ক্যান ইউ swim across this river?"
        },
        {
            "speaker": "B",
            "en": "No, the current is too strong for me.",
            "bn": "না, নদীর স্রোত আমার সাঁতার কাটার পক্ষে বেশি তীব্র।",
            "ipa": "/no/ /ðə/ /current/ /ɪz/ /too/ /strong/ /for/ /miː/",
            "bn_pron": "নো দ্য current ইজ too strong for মি।"
        },
        {
            "speaker": "A",
            "en": "Could I speak with the branch manager?",
            "bn": "আমি কি ব্রাঞ্চ ম্যানেজারের সাথে কথা বলতে পারি?",
            "ipa": "/kʊd/ /aɪ/ /speak/ /with/ /ðə/ /branch/ /manager/?",
            "bn_pron": "কুড আই স্পিক with দ্য branch manager?"
        },
        {
            "speaker": "B",
            "en": "Please have a seat, he will see you in two minutes.",
            "bn": "দয়া করে বসুন, তিনি দু'মিনিটের মধ্যে আপনাকে ডাকছেন।",
            "ipa": "/pliːz/ /hæv/ /a/ /seat/ /hiː/ /will/ /see/ /juː/ /in/ /two/ /minutes/",
            "bn_pron": "প্লিজ হ্যাভ a seat হি will see ইউ in two minutes।"
        },
        {
            "speaker": "A",
            "en": "Can you play any musical instrument?",
            "bn": "তুমি কি কোনো বাদ্যযন্ত্র বাজাতে পারো?",
            "ipa": "/kæn/ /juː/ /play/ /any/ /musical/ /instrument/?",
            "bn_pron": "ক্যান ইউ প্লে any musical instrument?"
        },
        {
            "speaker": "B",
            "en": "I can play the acoustic guitar fairly well.",
            "bn": "আমি অ্যাকোস্টিক গিটার বেশ ভালো বাজাতে পারি।",
            "ipa": "/aɪ/ /kæn/ /play/ /ðə/ /acoustic/ /guitar/ /fairly/ /well/",
            "bn_pron": "আই ক্যান প্লে দ্য acoustic guitar fairly well।"
        },
        {
            "speaker": "A",
            "en": "Could you tell me the direction to the station?",
            "bn": "স্টেশনের রাস্তাটা কি আমাকে একটু বলে দিতে পারবেন?",
            "ipa": "/kʊd/ /juː/ /tell/ /miː/ /ðə/ /direction/ /to/ /ðə/ /station/?",
            "bn_pron": "কুড ইউ tell মি দ্য direction টু দ্য station?"
        },
        {
            "speaker": "B",
            "en": "Go straight for two hundred meters and turn left.",
            "bn": "সোজা দুশ মিটার গিয়ে বাঁয়ে মোড় নেবেন।",
            "ipa": "/go/ /straight/ /for/ /two/ /hundred/ /meters/ /and/ /turn/ /left/",
            "bn_pron": "গো straight for two hundred meters and turn left।"
        },
        {
            "speaker": "A",
            "en": "Can we reschedule our interview tomorrow?",
            "bn": "আমরা কি আমাদের ইন্টারভিউটা কাল নির্ধারণ করতে পারি?",
            "ipa": "/kæn/ /we/ /reschedule/ /our/ /interview/ /tomorrow/?",
            "bn_pron": "ক্যান উই reschedule our interview tomorrow?"
        },
        {
            "speaker": "B",
            "en": "Yes, four PM tomorrow works perfectly for me.",
            "bn": "হ্যাঁ, আগামীকাল বিকেল চারটা আমার জন্য একদম উপযুক্ত।",
            "ipa": "/jes/ /four/ /pm/ /tomorrow/ /works/ /perfectly/ /for/ /miː/",
            "bn_pron": "ইয়েস four pm tomorrow works perfectly for মি।"
        },
        {
            "speaker": "A",
            "en": "Could you repeat that sentence once again?",
            "bn": "বাক্যটি কি আপনি আরেকবার একটু বলবেন?",
            "ipa": "/kʊd/ /juː/ /repeat/ /that/ /sentence/ /once/ /again/?",
            "bn_pron": "কুড ইউ repeat that sentence once again?"
        },
        {
            "speaker": "B",
            "en": "Of course, I said 'Practice makes a man perfect'.",
            "bn": "নিশ্চয়ই, আমি বলেছিলাম 'অনুশীলনেই পারদর্শিতা আসে'।",
            "ipa": "/of/ /course/ /aɪ/ /said/ /'practice/ /makes/ /a/ /man/ /perfect'/",
            "bn_pron": "Of course আই said 'practice makes a man perfect'।"
        }
    ],
    "lesson-11-should-must-have-to": [
        {
            "speaker": "A",
            "en": "Should I consult a physician for this cough?",
            "bn": "এই কাশির জন্য কি আমার ডাক্তারের পরামর্শ নেওয়া উচিত?",
            "ipa": "/ʃʊd/ /aɪ/ /consult/ /a/ /physician/ /for/ /this/ /cough/?",
            "bn_pron": "শুড আই consult a physician for this cough?"
        },
        {
            "speaker": "B",
            "en": "Yes, you definitely should see a doctor.",
            "bn": "হ্যাঁ, তোমার অবশ্যই একজন ডাক্তার দেখানো উচিত।",
            "ipa": "/jes/ /juː/ /definitely/ /ʃʊd/ /see/ /a/ /doctor/",
            "bn_pron": "ইয়েস ইউ definitely শুড see a doctor।"
        },
        {
            "speaker": "A",
            "en": "Do you have to wake up early on Sundays?",
            "bn": "রবিবারেও কি তোমাকে ভোরে উঠতে হয়?",
            "ipa": "/duː/ /juː/ /hæv/ /to/ /wake/ /up/ /early/ /on/ /sundays/?",
            "bn_pron": "ডু ইউ হ্যাভ টু ওয়েক আপ আর্লি on sundays?"
        },
        {
            "speaker": "B",
            "en": "No, I don't have to wake up early on weekends.",
            "bn": "না, ছুটির দিনে আমাকে ভোরে উঠতে হয় না।",
            "ipa": "/no/ /aɪ/ /don't/ /hæv/ /to/ /wake/ /up/ /early/ /on/ /weekends/",
            "bn_pron": "নো আই don't হ্যাভ টু ওয়েক আপ আর্লি on weekends।"
        },
        {
            "speaker": "A",
            "en": "What should I wear for the corporate interview?",
            "bn": "করপোরেট ইন্টারভিউতে আমার কী পরা উচিত?",
            "ipa": "/wɒt/ /ʃʊd/ /aɪ/ /wear/ /for/ /ðə/ /corporate/ /interview/?",
            "bn_pron": "হোয়াট শুড আই wear for দ্য corporate interview?"
        },
        {
            "speaker": "B",
            "en": "You should wear a neat formal shirt and tie.",
            "bn": "তোমার একটি পরিষ্কার ফরমাল শার্ট ও টাই পরা উচিত।",
            "ipa": "/juː/ /ʃʊd/ /wear/ /a/ /neat/ /formal/ /shirt/ /and/ /tie/",
            "bn_pron": "ইউ শুড wear a neat formal shirt and tie।"
        },
        {
            "speaker": "A",
            "en": "Must we submit the project report today?",
            "bn": "প্রজেক্ট রিপোর্টটি কি আমাদের আজকেই জমা দিতে হবে?",
            "ipa": "/must/ /we/ /submit/ /ðə/ /project/ /report/ /təˈdeɪ/?",
            "bn_pron": "Must উই submit দ্য project report টুডে?"
        },
        {
            "speaker": "B",
            "en": "Yes, it is mandatory to submit by five PM.",
            "bn": "হ্যাঁ, বিকেল পাঁচটার মধ্যে জমা দেওয়া বাধ্যতামূলক।",
            "ipa": "/jes/ /it/ /ɪz/ /mandatory/ /to/ /submit/ /by/ /five/ /pm/",
            "bn_pron": "ইয়েস ইট ইজ mandatory টু submit by five pm।"
        },
        {
            "speaker": "A",
            "en": "Do students have to wear uniforms in college?",
            "bn": "কলেজে কি ছাত্রছাত্রীদের ইউনিফর্ম পরতেই হয়?",
            "ipa": "/duː/ /students/ /hæv/ /to/ /wear/ /uniforms/ /in/ /college/?",
            "bn_pron": "ডু students হ্যাভ টু wear uniforms in কলেজ?"
        },
        {
            "speaker": "B",
            "en": "Yes, all students have to follow the dress code.",
            "bn": "হ্যাঁ, সব শিক্ষার্থীকেই পোশাকবিধি মানতে হয়।",
            "ipa": "/jes/ /all/ /students/ /hæv/ /to/ /follow/ /ðə/ /dress/ /code/",
            "bn_pron": "ইয়েস all students হ্যাভ টু follow দ্য dress code।"
        },
        {
            "speaker": "A",
            "en": "Should we book the train tickets in advance?",
            "bn": "আমাদের কি ট্রেনের টিকিট অগ্রিম কেটে রাখা উচিত?",
            "ipa": "/ʃʊd/ /we/ /book/ /ðə/ /train/ /tickets/ /in/ /advance/?",
            "bn_pron": "শুড উই বুক দ্য train tickets in advance?"
        },
        {
            "speaker": "B",
            "en": "Yes, we should book today to get good seats.",
            "bn": "হ্যাঁ, ভালো সিট পেতে আমাদের আজই বুক করা উচিত।",
            "ipa": "/jes/ /we/ /ʃʊd/ /book/ /təˈdeɪ/ /to/ /get/ /ɡʊd/ /seats/",
            "bn_pron": "ইয়েস উই শুড বুক টুডে টু get গুড seats।"
        },
        {
            "speaker": "A",
            "en": "Does he have to travel out of city every month?",
            "bn": "তাকে কি প্রতি মাসে শহরের বাইরে ভ্রমণ করতে হয়?",
            "ipa": "/does/ /hiː/ /hæv/ /to/ /travel/ /out/ /of/ /city/ /every/ /month/?",
            "bn_pron": "ডাজ হি হ্যাভ টু travel out of সিটি এভরি month?"
        },
        {
            "speaker": "B",
            "en": "Yes, he has to inspect regional branches.",
            "bn": "হ্যাঁ, আঞ্চলিক শাখাগুলো তদারক করতে তাকে যেতে হয়।",
            "ipa": "/jes/ /hiː/ /hæz/ /to/ /inspect/ /regional/ /branches/",
            "bn_pron": "ইয়েস হি হাইজ টু inspect regional branches।"
        },
        {
            "speaker": "A",
            "en": "You must not disclose your password to anyone.",
            "bn": "কাউকে কখনো তোমার পাসওয়ার্ড দেওয়া উচিত নয়।",
            "ipa": "/juː/ /must/ /not/ /disclose/ /your/ /password/ /to/ /anyone/",
            "bn_pron": "ইউ must not disclose ইওর password টু anyone।"
        },
        {
            "speaker": "B",
            "en": "I understand, I will keep it strictly confidential.",
            "bn": "আমি বুঝতে পারছি, আমি তা সম্পূর্ণ গোপন রাখব।",
            "ipa": "/aɪ/ /understand/ /aɪ/ /will/ /keep/ /it/ /strictly/ /confidential/",
            "bn_pron": "আই understand আই will keep ইট strictly confidential।"
        },
        {
            "speaker": "A",
            "en": "Should I drink more water during summer?",
            "bn": "গ্রীষ্মকালে কি আমার আরও বেশি পানি খাওয়া উচিত?",
            "ipa": "/ʃʊd/ /aɪ/ /drɪŋk/ /more/ /water/ /during/ /summer/?",
            "bn_pron": "শুড আই ড্রিংক more ওয়াটার during summer?"
        },
        {
            "speaker": "B",
            "en": "Yes, you should drink at least three liters daily.",
            "bn": "হ্যাঁ, প্রতিদিন কমপক্ষে তিন লিটার পানি খাওয়া উচিত।",
            "ipa": "/jes/ /juː/ /ʃʊd/ /drɪŋk/ /æt/ /least/ /three/ /liters/ /daily/",
            "bn_pron": "ইয়েস ইউ শুড ড্রিংক অ্যাট least three liters daily।"
        },
        {
            "speaker": "A",
            "en": "What time do you have to leave for the airport?",
            "bn": "এয়ারপোর্টের জন্য তোমাকে কয়টায় রওনা হতে হবে?",
            "ipa": "/wɒt/ /taɪm/ /duː/ /juː/ /hæv/ /to/ /leave/ /for/ /ðə/ /airport/?",
            "bn_pron": "হোয়াট টাইম ডু ইউ হ্যাভ টু leave for দ্য airport?"
        },
        {
            "speaker": "B",
            "en": "I have to leave my house by three in the afternoon.",
            "bn": "আমাকে দুপুর তিনটার মধ্যেই বাড়ি ছাড়তে হবে।",
            "ipa": "/aɪ/ /hæv/ /to/ /leave/ /my/ /house/ /by/ /three/ /in/ /ðə/ /afternoon/",
            "bn_pron": "আই হ্যাভ টু leave মাই house by three in দ্য afternoon।"
        }
    ],
    "lesson-12-would-would-like": [
        {
            "speaker": "A",
            "en": "What would you like to drink, tea or coffee?",
            "bn": "আপনি কী পান করতে পছন্দ করবেন, চা নাকি কফি?",
            "ipa": "/wɒt/ /wʊd/ /juː/ /laɪk/ /to/ /drɪŋk/ /tiː/ /or/ /coffee/?",
            "bn_pron": "হোয়াট উড ইউ লাইক টু ড্রিংক টি or কফি?"
        },
        {
            "speaker": "B",
            "en": "I would like a cup of hot black coffee, please.",
            "bn": "দয়া করে আমাকে এক কাপ গরম ব্ল্যাক কফি দেবেন।",
            "ipa": "/aɪ/ /wʊd/ /laɪk/ /a/ /cup/ /of/ /hot/ /black/ /coffee/ /pliːz/",
            "bn_pron": "আই উড লাইক a cup of hot black কফি প্লিজ।"
        },
        {
            "speaker": "A",
            "en": "Would you like to come with us to the park?",
            "bn": "তুমি কি আমাদের সাথে পার্কে যেতে চাও?",
            "ipa": "/wʊd/ /juː/ /laɪk/ /to/ /come/ /with/ /us/ /to/ /ðə/ /park/?",
            "bn_pron": "উড ইউ লাইক টু come with us টু দ্য park?"
        },
        {
            "speaker": "B",
            "en": "I would love to join, let me put on my shoes.",
            "bn": "আমি খুব আনন্দ নিয়ে যেতে চাই, জুতোটা পরে নিই।",
            "ipa": "/aɪ/ /wʊd/ /love/ /to/ /join/ /let/ /miː/ /put/ /on/ /my/ /shoes/",
            "bn_pron": "আই উড love টু join let মি put on মাই shoes।"
        },
        {
            "speaker": "A",
            "en": "Would you mind opening the front window?",
            "bn": "সামনের জানালাটা একটু খুলে দিলে আপনার কি কোনো অসুবিধা হবে?",
            "ipa": "/wʊd/ /juː/ /mind/ /opening/ /ðə/ /front/ /window/?",
            "bn_pron": "উড ইউ mind opening দ্য front window?"
        },
        {
            "speaker": "B",
            "en": "Not at all, fresh air is always welcome.",
            "bn": "একদমই না, তাজা বাতাস আসলেই ভালো।",
            "ipa": "/not/ /æt/ /all/ /fresh/ /air/ /ɪz/ /always/ /welcome/",
            "bn_pron": "Not অ্যাট all fresh air ইজ অলওয়েজ welcome।"
        },
        {
            "speaker": "A",
            "en": "Would you like some extra sugar in your tea?",
            "bn": "চায়ে কি আপনার আরও একটু চিনি লাগবে?",
            "ipa": "/wʊd/ /juː/ /laɪk/ /some/ /extra/ /sugar/ /in/ /your/ /tiː/?",
            "bn_pron": "উড ইউ লাইক some extra sugar in ইওর টি?"
        },
        {
            "speaker": "B",
            "en": "No thanks, I take my tea without sugar.",
            "bn": "ধন্যবাদ লাগবে না, আমি চিনি ছাড়াই চা খাই।",
            "ipa": "/no/ /thanks/ /aɪ/ /take/ /my/ /tiː/ /without/ /sugar/",
            "bn_pron": "নো thanks আই take মাই টি without sugar।"
        },
        {
            "speaker": "A",
            "en": "Where would you like to spend your holidays?",
            "bn": "ছুটি কাটাতে তুমি কোথায় যেতে চাও?",
            "ipa": "/weə/ /wʊd/ /juː/ /laɪk/ /to/ /spend/ /your/ /holidays/?",
            "bn_pron": "হোয়ার উড ইউ লাইক টু spend ইওর holidays?"
        },
        {
            "speaker": "B",
            "en": "I would like to visit the tranquil tea gardens of Sreemangal.",
            "bn": "আমি শ্রীমঙ্গলের শান্ত চা বাগানগুলোতে যেতে চাই।",
            "ipa": "/aɪ/ /wʊd/ /laɪk/ /to/ /visit/ /ðə/ /tranquil/ /tiː/ /gardens/ /of/ /sreemangal/",
            "bn_pron": "আই উড লাইক টু visit দ্য tranquil টি gardens of sreemangal।"
        },
        {
            "speaker": "A",
            "en": "Would you mind waiting in the lobby for five minutes?",
            "bn": "লবিতে কি আপনি পাঁচ মিনিট একটু অপেক্ষা করতে পারবেন?",
            "ipa": "/wʊd/ /juː/ /mind/ /waiting/ /in/ /ðə/ /lobby/ /for/ /five/ /minutes/?",
            "bn_pron": "উড ইউ mind waiting in দ্য lobby for five minutes?"
        },
        {
            "speaker": "B",
            "en": "No problem at all, take your time.",
            "bn": "কোনো সমস্যা নেই, আপনার সময় নিন।",
            "ipa": "/no/ /problem/ /æt/ /all/ /take/ /your/ /taɪm/",
            "bn_pron": "নো problem অ্যাট all take ইওর টাইম।"
        },
        {
            "speaker": "A",
            "en": "Would you like to try this traditional dessert?",
            "bn": "আপনি কি এই ঐতিহ্যবাহী মিষ্টিটা চেখে দেখতে চান?",
            "ipa": "/wʊd/ /juː/ /laɪk/ /to/ /try/ /this/ /traditional/ /dessert/?",
            "bn_pron": "উড ইউ লাইক টু try this traditional dessert?"
        },
        {
            "speaker": "B",
            "en": "Yes please, it looks absolutely delicious.",
            "bn": "হ্যাঁ নিশ্চয়ই, দেখতে দারুণ সুস্বাদু লাগছে।",
            "ipa": "/jes/ /pliːz/ /it/ /looks/ /absolutely/ /delicious/",
            "bn_pron": "ইয়েস প্লিজ ইট looks absolutely delicious।"
        },
        {
            "speaker": "A",
            "en": "Would you prefer chicken or grilled fish for dinner?",
            "bn": "রাতের খাবারে চিকেন নাকি গ্রিলড ফিশ পছন্দ করবেন?",
            "ipa": "/wʊd/ /juː/ /prefer/ /chicken/ /or/ /grilled/ /fish/ /for/ /dinner/?",
            "bn_pron": "উড ইউ prefer chicken or grilled fish for dinner?"
        },
        {
            "speaker": "B",
            "en": "I would prefer the grilled fish, thank you.",
            "bn": "আমি গ্রিলড মাছটাই পছন্দ করব, ধন্যবাদ।",
            "ipa": "/aɪ/ /wʊd/ /prefer/ /ðə/ /grilled/ /fish/ /thank/ /juː/",
            "bn_pron": "আই উড prefer দ্য grilled fish thank ইউ।"
        },
        {
            "speaker": "A",
            "en": "Would you like to leave a message for Mr. Rahman?",
            "bn": "মি. রহমানের জন্য কি কোনো বার্তা রেখে যেতে চান?",
            "ipa": "/wʊd/ /juː/ /laɪk/ /to/ /leave/ /a/ /message/ /for/ /mr/ /rahman/?",
            "bn_pron": "উড ইউ লাইক টু leave a message for mr rahman?"
        },
        {
            "speaker": "B",
            "en": "Yes, please tell him that Faisal called.",
            "bn": "হ্যাঁ, দয়া করে তাকে বলবেন ফয়সাল ফোন করেছিলেন।",
            "ipa": "/jes/ /pliːz/ /tell/ /him/ /that/ /faisal/ /called/",
            "bn_pron": "ইয়েস প্লিজ tell him that faisal called।"
        },
        {
            "speaker": "A",
            "en": "Would you mind turning down the television volume?",
            "bn": "টেলিভিশনের আওয়াজটা কি একটু কমিয়ে দেওয়া যাবে?",
            "ipa": "/wʊd/ /juː/ /mind/ /turning/ /down/ /ðə/ /television/ /volume/?",
            "bn_pron": "উড ইউ mind turning down দ্য television volume?"
        },
        {
            "speaker": "B",
            "en": "Oh, I am sorry, I am lowering it right away.",
            "bn": "আরে সরি, আমি এখনই সাউন্ড কমিয়ে দিচ্ছি।",
            "ipa": "/oh/ /aɪ/ /am/ /sorry/ /aɪ/ /am/ /lowering/ /it/ /right/ /away/",
            "bn_pron": "Oh আই অ্যাম sorry আই অ্যাম lowering ইট right away।"
        }
    ],
    "lesson-13-used-to": [
        {
            "speaker": "A",
            "en": "Did you use to play village sports in childhood?",
            "bn": "ছোটবেলায় তুমি কি গ্রামীণ খেলাধুলা করতে?",
            "ipa": "/did/ /juː/ /use/ /to/ /play/ /village/ /sports/ /in/ /childhood/?",
            "bn_pron": "ডিড ইউ use টু প্লে ভিলেজ sports in childhood?"
        },
        {
            "speaker": "B",
            "en": "Yes, I used to play football and hide-and-seek every afternoon.",
            "bn": "হ্যাঁ, আমি প্রতিদিন বিকেলে ফুটবল ও লুকোচুরি খেলতাম।",
            "ipa": "/jes/ /aɪ/ /used/ /to/ /play/ /football/ /and/ /hide-and-seek/ /every/ /afternoon/",
            "bn_pron": "ইয়েস আই ইউজড টু প্লে ফুটবল and hide-and-seek এভরি afternoon।"
        },
        {
            "speaker": "A",
            "en": "Are you used to waking up early in the morning?",
            "bn": "তুমি কি সকালে ভোরে ঘুম থেকে ওঠায় অভ্যস্ত?",
            "ipa": "/ɑː/ /juː/ /used/ /to/ /waking/ /up/ /early/ /in/ /ðə/ /morning/?",
            "bn_pron": "আর ইউ ইউজড টু waking আপ আর্লি in দ্য মর্নিং?"
        },
        {
            "speaker": "B",
            "en": "Yes, I am totally used to waking up at dawn.",
            "bn": "হ্যাঁ, খুব ভোরে ওঠায় আমি পুরোপুরি অভ্যস্ত।",
            "ipa": "/jes/ /aɪ/ /am/ /totally/ /used/ /to/ /waking/ /up/ /æt/ /dawn/",
            "bn_pron": "ইয়েস আই অ্যাম totally ইউজড টু waking আপ অ্যাট dawn।"
        },
        {
            "speaker": "A",
            "en": "I used to be very shy in front of strangers.",
            "bn": "অচেনা মানুষের সামনে আমি আগে খুব লাজুক ছিলাম।",
            "ipa": "/aɪ/ /used/ /to/ /be/ /very/ /shy/ /in/ /front/ /of/ /strangers/",
            "bn_pron": "আই ইউজড টু be very shy in front of strangers।"
        },
        {
            "speaker": "B",
            "en": "Now you speak with so much confidence!",
            "bn": "এখন তো তুমি দারুণ আত্মবিশ্বাসের সাথে কথা বলো!",
            "ipa": "/naʊ/ /juː/ /speak/ /with/ /so/ /much/ /confidence/",
            "bn_pron": "নাউ ইউ স্পিক with so much confidence।"
        },
        {
            "speaker": "A",
            "en": "Did they use to live in Chittagong before?",
            "bn": "তারা কি আগে চট্টগ্রামে বাস করত?",
            "ipa": "/did/ /they/ /use/ /to/ /live/ /in/ /chittagong/ /before/?",
            "bn_pron": "ডিড দে use টু live in chittagong before?"
        },
        {
            "speaker": "B",
            "en": "Yes, they lived there for nearly seven years.",
            "bn": "হ্যাঁ, প্রায় সাত বছর তারা সেখানে থাকত।",
            "ipa": "/jes/ /they/ /lived/ /there/ /for/ /nearly/ /seven/ /years/",
            "bn_pron": "ইয়েস দে lived দেয়ার for nearly seven years।"
        },
        {
            "speaker": "A",
            "en": "Are you used to the spicy food of this town?",
            "bn": "এই শহরের ঝাল খাবারে কি তোমার অভ্যাস হয়েছে?",
            "ipa": "/ɑː/ /juː/ /used/ /to/ /ðə/ /spicy/ /food/ /of/ /this/ /town/?",
            "bn_pron": "আর ইউ ইউজড টু দ্য spicy food of this town?"
        },
        {
            "speaker": "B",
            "en": "It took some time, but now I am used to it.",
            "bn": "কিছুটা সময় লেগেছিল, তবে এখন মানিয়ে নিয়েছি।",
            "ipa": "/it/ /took/ /some/ /taɪm/ /but/ /naʊ/ /aɪ/ /am/ /used/ /to/ /it/",
            "bn_pron": "ইট took some টাইম but নাউ আই অ্যাম ইউজড টু ইট।"
        },
        {
            "speaker": "A",
            "en": "We used to meet at this cafe after college.",
            "bn": "কলেজ শেষে আমরা এই ক্যাফেতেই বসতাম।",
            "ipa": "/we/ /used/ /to/ /meet/ /æt/ /this/ /cafe/ /after/ /college/",
            "bn_pron": "উই ইউজড টু meet অ্যাট this cafe after কলেজ।"
        },
        {
            "speaker": "B",
            "en": "Those memorable days passed by so fast!",
            "bn": "স্মরণীয় সেই দিনগুলো কত দ্রুত কেটে গেল!",
            "ipa": "/those/ /memorable/ /days/ /passed/ /by/ /so/ /fast/",
            "bn_pron": "Those memorable days passed by so fast।"
        },
        {
            "speaker": "A",
            "en": "Did you use to drink coffee as a teenager?",
            "bn": "কিশোর বয়সে তুমি কি কফি খেতে?",
            "ipa": "/did/ /juː/ /use/ /to/ /drɪŋk/ /coffee/ /as/ /a/ /teenager/?",
            "bn_pron": "ডিড ইউ use টু ড্রিংক কফি as a teenager?"
        },
        {
            "speaker": "B",
            "en": "No, I used to drink only milk and hot chocolate.",
            "bn": "না, তখন কেবল দুধ আর চকলেট ড্রিংকস খেতাম।",
            "ipa": "/no/ /aɪ/ /used/ /to/ /drɪŋk/ /only/ /milk/ /and/ /hot/ /chocolate/",
            "bn_pron": "নো আই ইউজড টু ড্রিংক only milk and hot chocolate।"
        },
        {
            "speaker": "A",
            "en": "Is your brother used to driving in Dhaka traffic?",
            "bn": "তোমার ভাই কি ঢাকার ট্রাফিকে গাড়ি চালাতে অভ্যস্ত?",
            "ipa": "/ɪz/ /your/ /brother/ /used/ /to/ /driving/ /in/ /dhaka/ /traffic/?",
            "bn_pron": "ইজ ইওর ব্রাদার ইউজড টু driving in dhaka traffic?"
        },
        {
            "speaker": "B",
            "en": "Yes, he drives daily so he is used to the rush.",
            "bn": "হ্যাঁ, প্রতিদিন চালায় বলে সে জ্যামে অভ্যস্ত।",
            "ipa": "/jes/ /hiː/ /drives/ /daily/ /so/ /hiː/ /ɪz/ /used/ /to/ /ðə/ /rush/",
            "bn_pron": "ইয়েস হি drives daily so হি ইজ ইউজড টু দ্য rush।"
        },
        {
            "speaker": "A",
            "en": "I didn't use to like vegetables when I was young.",
            "bn": "ছোটবেলায় আমি শাকসবজি পছন্দ করতাম না।",
            "ipa": "/aɪ/ /didn't/ /use/ /to/ /laɪk/ /vegetables/ /when/ /aɪ/ /was/ /young/",
            "bn_pron": "আই didn't use টু লাইক vegetables হোয়েন আই was young।"
        },
        {
            "speaker": "B",
            "en": "Now vegetables are an essential part of my diet.",
            "bn": "এখন প্রতিদিনের খাবারে শাকসবজি আমার অপরিহার্য।",
            "ipa": "/naʊ/ /vegetables/ /ɑː/ /an/ /essential/ /part/ /of/ /my/ /diet/",
            "bn_pron": "নাউ vegetables আর an essential part of মাই diet।"
        },
        {
            "speaker": "A",
            "en": "Did people use to write handwritten letters often?",
            "bn": "আগের দিনে মানুষ কি নিয়মিত হাতে চিঠি লিখত?",
            "ipa": "/did/ /people/ /use/ /to/ /write/ /handwritten/ /letters/ /often/?",
            "bn_pron": "ডিড people use টু write handwritten letters অফেন?"
        },
        {
            "speaker": "B",
            "en": "Yes, they used to wait eagerly for postmen.",
            "bn": "হ্যাঁ, তারা ডাকপিয়নের জন্য অধীর আগ্রহে অপেক্ষা করত।",
            "ipa": "/jes/ /they/ /used/ /to/ /wait/ /eagerly/ /for/ /postmen/",
            "bn_pron": "ইয়েস দে ইউজড টু wait eagerly for postmen।"
        }
    ],
    "lesson-14-feel-like-want-to": [
        {
            "speaker": "A",
            "en": "Do you feel like eating some street food tonight?",
            "bn": "আজ রাতে কি স্ট্রিট ফুড খেতে ইচ্ছে করছে?",
            "ipa": "/duː/ /juː/ /feel/ /laɪk/ /eating/ /some/ /street/ /food/ /tonight/?",
            "bn_pron": "ডু ইউ ফিল লাইক eating some street food tonight?"
        },
        {
            "speaker": "B",
            "en": "Yes, I feel like eating spicy fushka.",
            "bn": "হ্যাঁ, আমার ঝাল ফুচকা খেতে খুব ইচ্ছে করছে।",
            "ipa": "/jes/ /aɪ/ /feel/ /laɪk/ /eating/ /spicy/ /fushka/",
            "bn_pron": "ইয়েস আই ফিল লাইক eating spicy fushka।"
        },
        {
            "speaker": "A",
            "en": "What do you want to achieve this year?",
            "bn": "এই বছর তুমি কী অর্জন করতে চাও?",
            "ipa": "/wɒt/ /duː/ /juː/ /want/ /to/ /achieve/ /this/ /year/?",
            "bn_pron": "হোয়াট ডু ইউ ওয়ান্ট টু achieve this year?"
        },
        {
            "speaker": "B",
            "en": "I want to score band 8 in IELTS and speak fluently.",
            "bn": "আমি আইইএলটিএসে ব্যান্ড ৮ পেতে ও অনর্গল বলতে চাই।",
            "ipa": "/aɪ/ /want/ /to/ /score/ /band/ /8/ /in/ /ielts/ /and/ /speak/ /fluently/",
            "bn_pron": "আই ওয়ান্ট টু score band 8 in ielts and স্পিক fluently।"
        },
        {
            "speaker": "A",
            "en": "Do you feel like going for a long walk by the lake?",
            "bn": "হ্রদের পাড়ে কি অনেকক্ষণ হাঁটতে ইচ্ছে করছে?",
            "ipa": "/duː/ /juː/ /feel/ /laɪk/ /going/ /for/ /a/ /long/ /walk/ /by/ /ðə/ /lake/?",
            "bn_pron": "ডু ইউ ফিল লাইক going for a long walk by দ্য lake?"
        },
        {
            "speaker": "B",
            "en": "That sounds wonderful, let's step out together.",
            "bn": "দারুণ প্রস্তাব, চলো একসাথে বের হই।",
            "ipa": "/that/ /sounds/ /wonderful/ /let's/ /step/ /out/ /together/",
            "bn_pron": "That sounds wonderful let's step out together।"
        },
        {
            "speaker": "A",
            "en": "Where do you want to travel during winter?",
            "bn": "শীতকালে তুমি কোথায় ঘুরতে যেতে চাও?",
            "ipa": "/weə/ /duː/ /juː/ /want/ /to/ /travel/ /during/ /winter/?",
            "bn_pron": "হোয়ার ডু ইউ ওয়ান্ট টু travel during winter?"
        },
        {
            "speaker": "B",
            "en": "I want to visit Sajek Valley to see the clouds.",
            "bn": "মেঘ দেখতে আমি সাজেক ভ্যালিতে যেতে চাই।",
            "ipa": "/aɪ/ /want/ /to/ /visit/ /sajek/ /valley/ /to/ /see/ /ðə/ /clouds/",
            "bn_pron": "আই ওয়ান্ট টু visit sajek valley টু see দ্য clouds।"
        },
        {
            "speaker": "A",
            "en": "I don't feel like cooking dinner tonight.",
            "bn": "আজ রাতে রান্না করতে আমার একদম ইচ্ছে করছে না।",
            "ipa": "/aɪ/ /don't/ /feel/ /laɪk/ /cooking/ /dinner/ /tonight/",
            "bn_pron": "আই don't ফিল লাইক cooking dinner tonight।"
        },
        {
            "speaker": "B",
            "en": "No problem, let's order food from our favorite restaurant.",
            "bn": "সমস্যা নেই, প্রিয় রেস্তোরাঁ থেকে খাবার অর্ডার করে নিই।",
            "ipa": "/no/ /problem/ /let's/ /order/ /food/ /from/ /our/ /favorite/ /restaurant/",
            "bn_pron": "নো problem let's order food from our favorite restaurant।"
        },
        {
            "speaker": "A",
            "en": "Do you want to practice speaking English with me?",
            "bn": "তুমি কি আমার সাথে ইংরেজি কথা বলা অনুশীলন করতে চাও?",
            "ipa": "/duː/ /juː/ /want/ /to/ /practice/ /speaking/ /english/ /with/ /miː/?",
            "bn_pron": "ডু ইউ ওয়ান্ট টু practice speaking ইংলিশ with মি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I really want to practice every single day.",
            "bn": "হ্যাঁ, আমি প্রতিদিন নিয়ম করে প্র্যাকটিস করতে চাই।",
            "ipa": "/jes/ /aɪ/ /really/ /want/ /to/ /practice/ /every/ /single/ /day/",
            "bn_pron": "ইয়েস আই really ওয়ান্ট টু practice এভরি single ডে।"
        },
        {
            "speaker": "A",
            "en": "Do you feel like watching an action thriller movie?",
            "bn": "একটা অ্যাকশন থ্রিলার সিনেমা দেখতে ইচ্ছে করছে কি?",
            "ipa": "/duː/ /juː/ /feel/ /laɪk/ /watching/ /an/ /action/ /thriller/ /movie/?",
            "bn_pron": "ডু ইউ ফিল লাইক watching an action thriller মুভি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I feel like watching something exciting.",
            "bn": "হ্যাঁ, রোমাঞ্চকর কিছু দেখতে আমার বেশ ইচ্ছে করছে।",
            "ipa": "/jes/ /aɪ/ /feel/ /laɪk/ /watching/ /something/ /exciting/",
            "bn_pron": "ইয়েস আই ফিল লাইক watching something exciting।"
        },
        {
            "speaker": "A",
            "en": "What do you want to order for dessert?",
            "bn": "মিষ্টি খাবারে তুমি কী অর্ডার করতে চাও?",
            "ipa": "/wɒt/ /duː/ /juː/ /want/ /to/ /order/ /for/ /dessert/?",
            "bn_pron": "হোয়াট ডু ইউ ওয়ান্ট টু order for dessert?"
        },
        {
            "speaker": "B",
            "en": "I want to order a warm chocolate brownie.",
            "bn": "আমি একটি গরম চকোলেট ব্রাউনি অর্ডার করতে চাই।",
            "ipa": "/aɪ/ /want/ /to/ /order/ /a/ /warm/ /chocolate/ /brownie/",
            "bn_pron": "আই ওয়ান্ট টু order a warm chocolate brownie।"
        },
        {
            "speaker": "A",
            "en": "I feel like taking a short afternoon nap.",
            "bn": "দুপুরে একটু ভাতঘুম দিতে ইচ্ছে করছে।",
            "ipa": "/aɪ/ /feel/ /laɪk/ /taking/ /a/ /short/ /afternoon/ /nap/",
            "bn_pron": "আই ফিল লাইক taking a short afternoon nap।"
        },
        {
            "speaker": "B",
            "en": "Go ahead and rest for twenty minutes.",
            "bn": "বেশ তো, গিয়ে বিশ মিনিট বিশ্রাম নাও।",
            "ipa": "/go/ /ahead/ /and/ /rest/ /for/ /twenty/ /minutes/",
            "bn_pron": "গো ahead and rest for twenty minutes।"
        },
        {
            "speaker": "A",
            "en": "Do you want to improve your pronunciation?",
            "bn": "তুমি কি তোমার উচ্চারণ আরও উন্নত করতে চাও?",
            "ipa": "/duː/ /juː/ /want/ /to/ /improve/ /your/ /pronunciation/?",
            "bn_pron": "ডু ইউ ওয়ান্ট টু improve ইওর pronunciation?"
        },
        {
            "speaker": "B",
            "en": "Yes, I definitely want to master native British sounds.",
            "bn": "হ্যাঁ, আমি অবশ্যই ব্রিটিশ উচ্চারণে পারদর্শী হতে চাই।",
            "ipa": "/jes/ /aɪ/ /definitely/ /want/ /to/ /master/ /native/ /british/ /sounds/",
            "bn_pron": "ইয়েস আই definitely ওয়ান্ট টু master native british sounds।"
        }
    ],
    "lesson-15-it-takes-time": [
        {
            "speaker": "A",
            "en": "How long does it take to reach the airport from here?",
            "bn": "এখান থেকে এয়ারপোর্টে পৌঁছাতে কতক্ষণ লাগে?",
            "ipa": "/haʊ/ /long/ /does/ /it/ /take/ /to/ /reach/ /ðə/ /airport/ /from/ /here/?",
            "bn_pron": "হাউ long ডাজ ইট take টু reach দ্য airport from হিয়ার?"
        },
        {
            "speaker": "B",
            "en": "It takes about forty minutes by metro train.",
            "bn": "মেট্রোরেলে প্রায় চল্লিশ মিনিট সময় লাগে।",
            "ipa": "/it/ /takes/ /about/ /forty/ /minutes/ /by/ /metro/ /train/",
            "bn_pron": "ইট টেকস about forty minutes by metro train।"
        },
        {
            "speaker": "A",
            "en": "How much time does it take to prepare breakfast?",
            "bn": "সকালের নাস্তা তৈরি করতে কতক্ষণ সময় লাগে?",
            "ipa": "/haʊ/ /much/ /taɪm/ /does/ /it/ /take/ /to/ /prepare/ /breakfast/?",
            "bn_pron": "হাউ much টাইম ডাজ ইট take টু prepare breakfast?"
        },
        {
            "speaker": "B",
            "en": "It takes only fifteen minutes to make eggs and toast.",
            "bn": "ডিম ও টোস্ট বানাতে মাত্র পনেরো মিনিট লাগে।",
            "ipa": "/it/ /takes/ /only/ /fifteen/ /minutes/ /to/ /make/ /eggs/ /and/ /toast/",
            "bn_pron": "ইট টেকস only fifteen minutes টু make eggs and toast।"
        },
        {
            "speaker": "A",
            "en": "Does it take a lot of time to learn spoken English?",
            "bn": "স্পোকেন ইংলিশ শিখতে কি অনেক বেশি সময় লাগে?",
            "ipa": "/does/ /it/ /take/ /a/ /lot/ /of/ /taɪm/ /to/ /learn/ /spoken/ /english/?",
            "bn_pron": "ডাজ ইট take a lot of টাইম টু লার্ন spoken ইংলিশ?"
        },
        {
            "speaker": "B",
            "en": "It takes two to three months of consistent daily practice.",
            "bn": "প্রতিদিন নিয়মিত প্র্যাকটিস করলে দুই থেকে তিন মাস লাগে।",
            "ipa": "/it/ /takes/ /two/ /to/ /three/ /months/ /of/ /consistent/ /daily/ /practice/",
            "bn_pron": "ইট টেকস two টু three months of consistent daily practice।"
        },
        {
            "speaker": "A",
            "en": "How long did it take to complete the university assignment?",
            "bn": "বিশ্ববিদ্যালয়ের অ্যাসাইনমেন্টটি শেষ করতে কতক্ষণ লেগেছিল?",
            "ipa": "/haʊ/ /long/ /did/ /it/ /take/ /to/ /complete/ /ðə/ /university/ /assignment/?",
            "bn_pron": "হাউ long ডিড ইট take টু complete দ্য university assignment?"
        },
        {
            "speaker": "B",
            "en": "It took nearly four hours of thorough research.",
            "bn": "গভীর পড়াশোনা করতে প্রায় চার ঘণ্টা লেগেছিল।",
            "ipa": "/it/ /took/ /nearly/ /four/ /hours/ /of/ /thorough/ /research/",
            "bn_pron": "ইট took nearly four hours of thorough research।"
        },
        {
            "speaker": "A",
            "en": "It takes courage to speak in public without fear.",
            "bn": "ভয় না পেয়ে জনসমক্ষে কথা বলতে সাহসের প্রয়োজন হয়।",
            "ipa": "/it/ /takes/ /courage/ /to/ /speak/ /in/ /public/ /without/ /fear/",
            "bn_pron": "ইট টেকস courage টু স্পিক in public without fear।"
        },
        {
            "speaker": "B",
            "en": "You are absolutely right, confidence is the key.",
            "bn": "আপনি একদম ঠিক বলেছেন, আত্মবিশ্বাসই মূল চাবিকাঠি।",
            "ipa": "/juː/ /ɑː/ /absolutely/ /right/ /confidence/ /ɪz/ /ðə/ /key/",
            "bn_pron": "ইউ আর absolutely right confidence ইজ দ্য key।"
        },
        {
            "speaker": "A",
            "en": "How long will it take to repair my broken smartphone?",
            "bn": "আমার ভাঙা ফোনটা মেরামত করতে কতক্ষণ সময় লাগবে?",
            "ipa": "/haʊ/ /long/ /will/ /it/ /take/ /to/ /repair/ /my/ /broken/ /smartphone/?",
            "bn_pron": "হাউ long will ইট take টু repair মাই broken smartphone?"
        },
        {
            "speaker": "B",
            "en": "It will take about one hour at the service center.",
            "bn": "সার্ভিস সেন্টারে প্রায় এক ঘণ্টার মতো সময় লাগবে।",
            "ipa": "/it/ /will/ /take/ /about/ /one/ /hour/ /æt/ /ðə/ /service/ /center/",
            "bn_pron": "ইট will take about one hour অ্যাট দ্য service center।"
        },
        {
            "speaker": "A",
            "en": "Does it take much effort to stay fit and healthy?",
            "bn": "সুস্থ ও ফিট থাকতে কি খুব বেশি পরিশ্রম লাগে?",
            "ipa": "/does/ /it/ /take/ /much/ /effort/ /to/ /stay/ /fit/ /and/ /healthy/?",
            "bn_pron": "ডাজ ইট take much effort টু stay fit and healthy?"
        },
        {
            "speaker": "B",
            "en": "It just takes thirty minutes of exercise and clean eating.",
            "bn": "প্রতিদিন মাত্র ত্রিশ মিনিট ব্যায়াম আর পরিচ্ছন্ন খাওয়াদাওয়া লাগে।",
            "ipa": "/it/ /just/ /takes/ /thirty/ /minutes/ /of/ /exercise/ /and/ /clean/ /eating/",
            "bn_pron": "ইট just টেকস thirty minutes of exercise and clean eating।"
        },
        {
            "speaker": "A",
            "en": "How long does it take to bake a fresh homemade pizza?",
            "bn": "তাজা ঘরোয়া পিৎজা বেক করতে কতক্ষণ লাগে?",
            "ipa": "/haʊ/ /long/ /does/ /it/ /take/ /to/ /bake/ /a/ /fresh/ /homemade/ /pizza/?",
            "bn_pron": "হাউ long ডাজ ইট take টু bake a fresh homemade pizza?"
        },
        {
            "speaker": "B",
            "en": "It takes around twenty minutes in a preheated oven.",
            "bn": "ওভেনে বিশ মিনিটের মতো সময় লাগে।",
            "ipa": "/it/ /takes/ /around/ /twenty/ /minutes/ /in/ /a/ /preheated/ /oven/",
            "bn_pron": "ইট টেকস around twenty minutes in a preheated oven।"
        },
        {
            "speaker": "A",
            "en": "It took me months to overcome my stage fright.",
            "bn": "মঞ্চের ভয় কাটাতে আমার কয়েকমাস সময় লেগেছিল।",
            "ipa": "/it/ /took/ /miː/ /months/ /to/ /overcome/ /my/ /stage/ /fright/",
            "bn_pron": "ইট took মি months টু overcome মাই stage fright।"
        },
        {
            "speaker": "B",
            "en": "Now you inspire hundreds of eager learners!",
            "bn": "এখন তুমি শত শত শিক্ষার্থীকে অনুপ্রেরণা দিচ্ছো!",
            "ipa": "/naʊ/ /juː/ /inspire/ /hundreds/ /of/ /eager/ /learners/",
            "bn_pron": "নাউ ইউ inspire hundreds of eager learners।"
        },
        {
            "speaker": "A",
            "en": "How much time does it take to get a passport issued?",
            "bn": "পাসপোর্ট পেতে কতদিন সময় লাগে?",
            "ipa": "/haʊ/ /much/ /taɪm/ /does/ /it/ /take/ /to/ /get/ /a/ /passport/ /issued/?",
            "bn_pron": "হাউ much টাইম ডাজ ইট take টু get a passport issued?"
        },
        {
            "speaker": "B",
            "en": "It takes about seven working days for urgent delivery.",
            "bn": "জরুরি ডেলিভারিতে প্রায় সাত কার্যদিবস সময় লাগে।",
            "ipa": "/it/ /takes/ /about/ /seven/ /working/ /days/ /for/ /urgent/ /delivery/",
            "bn_pron": "ইট টেকস about seven working days for urgent delivery।"
        }
    ]
,
"lesson-16-present-perfect-continuous": [
        {
            "speaker": "A",
            "en": "Have you been practicing Present Perfect Continuous diligently?",
            "bn": "তুমি কি নিয়মিত অতীতে শুরু হওয়া কাজ এখনো চলছে, স্থায়িত্ব ও সময়ের পরিমাপ প্রকাশ  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing Present Perfect Continuous diligently?",
            "bn": "তুমি কি নিয়মিত অতীতে শুরু হওয়া কাজ এখনো চলছে, স্থায়িত্ব ও সময়ের পরিমাপ প্রকাশ  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing Present Perfect Continuous diligently?",
            "bn": "তুমি কি নিয়মিত অতীতে শুরু হওয়া কাজ এখনো চলছে, স্থায়িত্ব ও সময়ের পরিমাপ প্রকাশ  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing Present Perfect Continuous diligently?",
            "bn": "তুমি কি নিয়মিত অতীতে শুরু হওয়া কাজ এখনো চলছে, স্থায়িত্ব ও সময়ের পরিমাপ প্রকাশ  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing Present Perfect Continuous diligently?",
            "bn": "তুমি কি নিয়মিত অতীতে শুরু হওয়া কাজ এখনো চলছে, স্থায়িত্ব ও সময়ের পরিমাপ প্রকাশ  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing Present Perfect Continuous diligently?",
            "bn": "তুমি কি নিয়মিত অতীতে শুরু হওয়া কাজ এখনো চলছে, স্থায়িত্ব ও সময়ের পরিমাপ প্রকাশ  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing Present Perfect Continuous diligently?",
            "bn": "তুমি কি নিয়মিত অতীতে শুরু হওয়া কাজ এখনো চলছে, স্থায়িত্ব ও সময়ের পরিমাপ প্রকাশ  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing Present Perfect Continuous diligently?",
            "bn": "তুমি কি নিয়মিত অতীতে শুরু হওয়া কাজ এখনো চলছে, স্থায়িত্ব ও সময়ের পরিমাপ প্রকাশ  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing Present Perfect Continuous diligently?",
            "bn": "তুমি কি নিয়মিত অতীতে শুরু হওয়া কাজ এখনো চলছে, স্থায়িত্ব ও সময়ের পরিমাপ প্রকাশ  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing Present Perfect Continuous diligently?",
            "bn": "তুমি কি নিয়মিত অতীতে শুরু হওয়া কাজ এখনো চলছে, স্থায়িত্ব ও সময়ের পরিমাপ প্রকাশ  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        }
    ],
    "lesson-17-tense-compare-continuous-perfect": [
        {
            "speaker": "A",
            "en": "Have you been practicing Tense Comparison diligently?",
            "bn": "তুমি কি নিয়মিত \"I am working\" বনাম \"I have been working for 2 hours\"  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing Tense Comparison diligently?",
            "bn": "তুমি কি নিয়মিত \"I am working\" বনাম \"I have been working for 2 hours\"  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing Tense Comparison diligently?",
            "bn": "তুমি কি নিয়মিত \"I am working\" বনাম \"I have been working for 2 hours\"  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing Tense Comparison diligently?",
            "bn": "তুমি কি নিয়মিত \"I am working\" বনাম \"I have been working for 2 hours\"  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing Tense Comparison diligently?",
            "bn": "তুমি কি নিয়মিত \"I am working\" বনাম \"I have been working for 2 hours\"  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing Tense Comparison diligently?",
            "bn": "তুমি কি নিয়মিত \"I am working\" বনাম \"I have been working for 2 hours\"  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing Tense Comparison diligently?",
            "bn": "তুমি কি নিয়মিত \"I am working\" বনাম \"I have been working for 2 hours\"  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing Tense Comparison diligently?",
            "bn": "তুমি কি নিয়মিত \"I am working\" বনাম \"I have been working for 2 hours\"  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing Tense Comparison diligently?",
            "bn": "তুমি কি নিয়মিত \"I am working\" বনাম \"I have been working for 2 hours\"  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing Tense Comparison diligently?",
            "bn": "তুমি কি নিয়মিত \"I am working\" বনাম \"I have been working for 2 hours\"  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        }
    ],
    "lesson-18-tense-compare-present-perfect-past-simple": [
        {
            "speaker": "A",
            "en": "Have you been practicing Tense Comparison diligently?",
            "bn": "তুমি কি নিয়মিত \"I have done\" বনাম \"I did\"  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing Tense Comparison diligently?",
            "bn": "তুমি কি নিয়মিত \"I have done\" বনাম \"I did\"  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing Tense Comparison diligently?",
            "bn": "তুমি কি নিয়মিত \"I have done\" বনাম \"I did\"  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing Tense Comparison diligently?",
            "bn": "তুমি কি নিয়মিত \"I have done\" বনাম \"I did\"  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing Tense Comparison diligently?",
            "bn": "তুমি কি নিয়মিত \"I have done\" বনাম \"I did\"  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing Tense Comparison diligently?",
            "bn": "তুমি কি নিয়মিত \"I have done\" বনাম \"I did\"  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing Tense Comparison diligently?",
            "bn": "তুমি কি নিয়মিত \"I have done\" বনাম \"I did\"  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing Tense Comparison diligently?",
            "bn": "তুমি কি নিয়মিত \"I have done\" বনাম \"I did\"  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing Tense Comparison diligently?",
            "bn": "তুমি কি নিয়মিত \"I have done\" বনাম \"I did\"  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing Tense Comparison diligently?",
            "bn": "তুমি কি নিয়মিত \"I have done\" বনাম \"I did\"  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        }
    ],
    "lesson-19-past-continuous": [
        {
            "speaker": "A",
            "en": "Have you been practicing Past Continuous diligently?",
            "bn": "তুমি কি নিয়মিত অতীতে কোনো কাজ চলার মাঝখানে আরেকটি ঘটনা ঘটা  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing Past Continuous diligently?",
            "bn": "তুমি কি নিয়মিত অতীতে কোনো কাজ চলার মাঝখানে আরেকটি ঘটনা ঘটা  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing Past Continuous diligently?",
            "bn": "তুমি কি নিয়মিত অতীতে কোনো কাজ চলার মাঝখানে আরেকটি ঘটনা ঘটা  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing Past Continuous diligently?",
            "bn": "তুমি কি নিয়মিত অতীতে কোনো কাজ চলার মাঝখানে আরেকটি ঘটনা ঘটা  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing Past Continuous diligently?",
            "bn": "তুমি কি নিয়মিত অতীতে কোনো কাজ চলার মাঝখানে আরেকটি ঘটনা ঘটা  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing Past Continuous diligently?",
            "bn": "তুমি কি নিয়মিত অতীতে কোনো কাজ চলার মাঝখানে আরেকটি ঘটনা ঘটা  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing Past Continuous diligently?",
            "bn": "তুমি কি নিয়মিত অতীতে কোনো কাজ চলার মাঝখানে আরেকটি ঘটনা ঘটা  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing Past Continuous diligently?",
            "bn": "তুমি কি নিয়মিত অতীতে কোনো কাজ চলার মাঝখানে আরেকটি ঘটনা ঘটা  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing Past Continuous diligently?",
            "bn": "তুমি কি নিয়মিত অতীতে কোনো কাজ চলার মাঝখানে আরেকটি ঘটনা ঘটা  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing Past Continuous diligently?",
            "bn": "তুমি কি নিয়মিত অতীতে কোনো কাজ চলার মাঝখানে আরেকটি ঘটনা ঘটা  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        }
    ],
    "lesson-20-past-perfect-and-comparison": [
        {
            "speaker": "A",
            "en": "Have you been practicing Past Perfect & Comparison diligently?",
            "bn": "তুমি কি নিয়মিত অতীতে দুটি ঘটনার মধ্যে যেটি আগে হয়েছিল  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing Past Perfect & Comparison diligently?",
            "bn": "তুমি কি নিয়মিত অতীতে দুটি ঘটনার মধ্যে যেটি আগে হয়েছিল  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing Past Perfect & Comparison diligently?",
            "bn": "তুমি কি নিয়মিত অতীতে দুটি ঘটনার মধ্যে যেটি আগে হয়েছিল  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing Past Perfect & Comparison diligently?",
            "bn": "তুমি কি নিয়মিত অতীতে দুটি ঘটনার মধ্যে যেটি আগে হয়েছিল  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing Past Perfect & Comparison diligently?",
            "bn": "তুমি কি নিয়মিত অতীতে দুটি ঘটনার মধ্যে যেটি আগে হয়েছিল  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing Past Perfect & Comparison diligently?",
            "bn": "তুমি কি নিয়মিত অতীতে দুটি ঘটনার মধ্যে যেটি আগে হয়েছিল  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing Past Perfect & Comparison diligently?",
            "bn": "তুমি কি নিয়মিত অতীতে দুটি ঘটনার মধ্যে যেটি আগে হয়েছিল  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing Past Perfect & Comparison diligently?",
            "bn": "তুমি কি নিয়মিত অতীতে দুটি ঘটনার মধ্যে যেটি আগে হয়েছিল  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing Past Perfect & Comparison diligently?",
            "bn": "তুমি কি নিয়মিত অতীতে দুটি ঘটনার মধ্যে যেটি আগে হয়েছিল  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing Past Perfect & Comparison diligently?",
            "bn": "তুমি কি নিয়মিত অতীতে দুটি ঘটনার মধ্যে যেটি আগে হয়েছিল  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        }
    ],
    "lesson-21-past-perfect-continuous": [
        {
            "speaker": "A",
            "en": "Have you been practicing Past Perfect Continuous diligently?",
            "bn": "তুমি কি নিয়মিত অতীতের নির্দিষ্ট সময় বা ঘটনার আগ পর্যন্ত কাজটি কতক্ষণ চলছিল অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing Past Perfect Continuous diligently?",
            "bn": "তুমি কি নিয়মিত অতীতের নির্দিষ্ট সময় বা ঘটনার আগ পর্যন্ত কাজটি কতক্ষণ চলছিল অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing Past Perfect Continuous diligently?",
            "bn": "তুমি কি নিয়মিত অতীতের নির্দিষ্ট সময় বা ঘটনার আগ পর্যন্ত কাজটি কতক্ষণ চলছিল অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing Past Perfect Continuous diligently?",
            "bn": "তুমি কি নিয়মিত অতীতের নির্দিষ্ট সময় বা ঘটনার আগ পর্যন্ত কাজটি কতক্ষণ চলছিল অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing Past Perfect Continuous diligently?",
            "bn": "তুমি কি নিয়মিত অতীতের নির্দিষ্ট সময় বা ঘটনার আগ পর্যন্ত কাজটি কতক্ষণ চলছিল অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing Past Perfect Continuous diligently?",
            "bn": "তুমি কি নিয়মিত অতীতের নির্দিষ্ট সময় বা ঘটনার আগ পর্যন্ত কাজটি কতক্ষণ চলছিল অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing Past Perfect Continuous diligently?",
            "bn": "তুমি কি নিয়মিত অতীতের নির্দিষ্ট সময় বা ঘটনার আগ পর্যন্ত কাজটি কতক্ষণ চলছিল অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing Past Perfect Continuous diligently?",
            "bn": "তুমি কি নিয়মিত অতীতের নির্দিষ্ট সময় বা ঘটনার আগ পর্যন্ত কাজটি কতক্ষণ চলছিল অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing Past Perfect Continuous diligently?",
            "bn": "তুমি কি নিয়মিত অতীতের নির্দিষ্ট সময় বা ঘটনার আগ পর্যন্ত কাজটি কতক্ষণ চলছিল অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing Past Perfect Continuous diligently?",
            "bn": "তুমি কি নিয়মিত অতীতের নির্দিষ্ট সময় বা ঘটনার আগ পর্যন্ত কাজটি কতক্ষণ চলছিল অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        }
    ],
    "lesson-22-future-continuous": [
        {
            "speaker": "A",
            "en": "Have you been practicing Future Continuous diligently?",
            "bn": "তুমি কি নিয়মিত ভবিষ্যতের কোনো নির্দিষ্ট সময়ে কোনো কাজ চলমান থাকা বোঝাতে অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing Future Continuous diligently?",
            "bn": "তুমি কি নিয়মিত ভবিষ্যতের কোনো নির্দিষ্ট সময়ে কোনো কাজ চলমান থাকা বোঝাতে অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing Future Continuous diligently?",
            "bn": "তুমি কি নিয়মিত ভবিষ্যতের কোনো নির্দিষ্ট সময়ে কোনো কাজ চলমান থাকা বোঝাতে অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing Future Continuous diligently?",
            "bn": "তুমি কি নিয়মিত ভবিষ্যতের কোনো নির্দিষ্ট সময়ে কোনো কাজ চলমান থাকা বোঝাতে অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing Future Continuous diligently?",
            "bn": "তুমি কি নিয়মিত ভবিষ্যতের কোনো নির্দিষ্ট সময়ে কোনো কাজ চলমান থাকা বোঝাতে অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing Future Continuous diligently?",
            "bn": "তুমি কি নিয়মিত ভবিষ্যতের কোনো নির্দিষ্ট সময়ে কোনো কাজ চলমান থাকা বোঝাতে অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing Future Continuous diligently?",
            "bn": "তুমি কি নিয়মিত ভবিষ্যতের কোনো নির্দিষ্ট সময়ে কোনো কাজ চলমান থাকা বোঝাতে অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing Future Continuous diligently?",
            "bn": "তুমি কি নিয়মিত ভবিষ্যতের কোনো নির্দিষ্ট সময়ে কোনো কাজ চলমান থাকা বোঝাতে অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing Future Continuous diligently?",
            "bn": "তুমি কি নিয়মিত ভবিষ্যতের কোনো নির্দিষ্ট সময়ে কোনো কাজ চলমান থাকা বোঝাতে অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing Future Continuous diligently?",
            "bn": "তুমি কি নিয়মিত ভবিষ্যতের কোনো নির্দিষ্ট সময়ে কোনো কাজ চলমান থাকা বোঝাতে অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        }
    ],
    "lesson-23-future-perfect-and-continuous": [
        {
            "speaker": "A",
            "en": "Have you been practicing Future Perfect diligently?",
            "bn": "তুমি কি নিয়মিত ভবিষ্যতের কোনো নির্দিষ্ট সময়ের মধ্যে কাজ সম্পন্ন হয়ে থাকা  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing Future Perfect diligently?",
            "bn": "তুমি কি নিয়মিত ভবিষ্যতের কোনো নির্দিষ্ট সময়ের মধ্যে কাজ সম্পন্ন হয়ে থাকা  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing Future Perfect diligently?",
            "bn": "তুমি কি নিয়মিত ভবিষ্যতের কোনো নির্দিষ্ট সময়ের মধ্যে কাজ সম্পন্ন হয়ে থাকা  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing Future Perfect diligently?",
            "bn": "তুমি কি নিয়মিত ভবিষ্যতের কোনো নির্দিষ্ট সময়ের মধ্যে কাজ সম্পন্ন হয়ে থাকা  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing Future Perfect diligently?",
            "bn": "তুমি কি নিয়মিত ভবিষ্যতের কোনো নির্দিষ্ট সময়ের মধ্যে কাজ সম্পন্ন হয়ে থাকা  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing Future Perfect diligently?",
            "bn": "তুমি কি নিয়মিত ভবিষ্যতের কোনো নির্দিষ্ট সময়ের মধ্যে কাজ সম্পন্ন হয়ে থাকা  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing Future Perfect diligently?",
            "bn": "তুমি কি নিয়মিত ভবিষ্যতের কোনো নির্দিষ্ট সময়ের মধ্যে কাজ সম্পন্ন হয়ে থাকা  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing Future Perfect diligently?",
            "bn": "তুমি কি নিয়মিত ভবিষ্যতের কোনো নির্দিষ্ট সময়ের মধ্যে কাজ সম্পন্ন হয়ে থাকা  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing Future Perfect diligently?",
            "bn": "তুমি কি নিয়মিত ভবিষ্যতের কোনো নির্দিষ্ট সময়ের মধ্যে কাজ সম্পন্ন হয়ে থাকা  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing Future Perfect diligently?",
            "bn": "তুমি কি নিয়মিত ভবিষ্যতের কোনো নির্দিষ্ট সময়ের মধ্যে কাজ সম্পন্ন হয়ে থাকা  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        }
    ],
    "lesson-24-complete-modals": [
        {
            "speaker": "A",
            "en": "Have you been practicing All Modals Mastery diligently?",
            "bn": "তুমি কি নিয়মিত সম্ভাবনা  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing All Modals Mastery diligently?",
            "bn": "তুমি কি নিয়মিত সম্ভাবনা  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing All Modals Mastery diligently?",
            "bn": "তুমি কি নিয়মিত সম্ভাবনা  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing All Modals Mastery diligently?",
            "bn": "তুমি কি নিয়মিত সম্ভাবনা  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing All Modals Mastery diligently?",
            "bn": "তুমি কি নিয়মিত সম্ভাবনা  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing All Modals Mastery diligently?",
            "bn": "তুমি কি নিয়মিত সম্ভাবনা  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing All Modals Mastery diligently?",
            "bn": "তুমি কি নিয়মিত সম্ভাবনা  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing All Modals Mastery diligently?",
            "bn": "তুমি কি নিয়মিত সম্ভাবনা  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing All Modals Mastery diligently?",
            "bn": "তুমি কি নিয়মিত সম্ভাবনা  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing All Modals Mastery diligently?",
            "bn": "তুমি কি নিয়মিত সম্ভাবনা  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        }
    ],
    "lesson-25-be-being-been": [
        {
            "speaker": "A",
            "en": "Have you been practicing The Master Guide diligently?",
            "bn": "তুমি কি নিয়মিত Be  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing The Master Guide diligently?",
            "bn": "তুমি কি নিয়মিত Be  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing The Master Guide diligently?",
            "bn": "তুমি কি নিয়মিত Be  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing The Master Guide diligently?",
            "bn": "তুমি কি নিয়মিত Be  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing The Master Guide diligently?",
            "bn": "তুমি কি নিয়মিত Be  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing The Master Guide diligently?",
            "bn": "তুমি কি নিয়মিত Be  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing The Master Guide diligently?",
            "bn": "তুমি কি নিয়মিত Be  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing The Master Guide diligently?",
            "bn": "তুমি কি নিয়মিত Be  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing The Master Guide diligently?",
            "bn": "তুমি কি নিয়মিত Be  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing The Master Guide diligently?",
            "bn": "তুমি কি নিয়মিত Be  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        }
    ],
    "lesson-26-conditionals": [
        {
            "speaker": "A",
            "en": "Have you been practicing Real-Life Conditionals diligently?",
            "bn": "তুমি কি নিয়মিত বাস্তব জীবনের শর্তমূলক বাক্য  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing Real-Life Conditionals diligently?",
            "bn": "তুমি কি নিয়মিত বাস্তব জীবনের শর্তমূলক বাক্য  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing Real-Life Conditionals diligently?",
            "bn": "তুমি কি নিয়মিত বাস্তব জীবনের শর্তমূলক বাক্য  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing Real-Life Conditionals diligently?",
            "bn": "তুমি কি নিয়মিত বাস্তব জীবনের শর্তমূলক বাক্য  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing Real-Life Conditionals diligently?",
            "bn": "তুমি কি নিয়মিত বাস্তব জীবনের শর্তমূলক বাক্য  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing Real-Life Conditionals diligently?",
            "bn": "তুমি কি নিয়মিত বাস্তব জীবনের শর্তমূলক বাক্য  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing Real-Life Conditionals diligently?",
            "bn": "তুমি কি নিয়মিত বাস্তব জীবনের শর্তমূলক বাক্য  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing Real-Life Conditionals diligently?",
            "bn": "তুমি কি নিয়মিত বাস্তব জীবনের শর্তমূলক বাক্য  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing Real-Life Conditionals diligently?",
            "bn": "তুমি কি নিয়মিত বাস্তব জীবনের শর্তমূলক বাক্য  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing Real-Life Conditionals diligently?",
            "bn": "তুমি কি নিয়মিত বাস্তব জীবনের শর্তমূলক বাক্য  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        }
    ],
    "lesson-27-causative-verbs": [
        {
            "speaker": "A",
            "en": "Have you been practicing Causative Verbs diligently?",
            "bn": "তুমি কি নিয়মিত কাউকে দিয়ে কোনো কাজ করানো বা সুযোগ দেওয়া  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing Causative Verbs diligently?",
            "bn": "তুমি কি নিয়মিত কাউকে দিয়ে কোনো কাজ করানো বা সুযোগ দেওয়া  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing Causative Verbs diligently?",
            "bn": "তুমি কি নিয়মিত কাউকে দিয়ে কোনো কাজ করানো বা সুযোগ দেওয়া  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing Causative Verbs diligently?",
            "bn": "তুমি কি নিয়মিত কাউকে দিয়ে কোনো কাজ করানো বা সুযোগ দেওয়া  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing Causative Verbs diligently?",
            "bn": "তুমি কি নিয়মিত কাউকে দিয়ে কোনো কাজ করানো বা সুযোগ দেওয়া  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing Causative Verbs diligently?",
            "bn": "তুমি কি নিয়মিত কাউকে দিয়ে কোনো কাজ করানো বা সুযোগ দেওয়া  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing Causative Verbs diligently?",
            "bn": "তুমি কি নিয়মিত কাউকে দিয়ে কোনো কাজ করানো বা সুযোগ দেওয়া  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing Causative Verbs diligently?",
            "bn": "তুমি কি নিয়মিত কাউকে দিয়ে কোনো কাজ করানো বা সুযোগ দেওয়া  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing Causative Verbs diligently?",
            "bn": "তুমি কি নিয়মিত কাউকে দিয়ে কোনো কাজ করানো বা সুযোগ দেওয়া  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing Causative Verbs diligently?",
            "bn": "তুমি কি নিয়মিত কাউকে দিয়ে কোনো কাজ করানো বা সুযোগ দেওয়া  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        }
    ],
    "lesson-28-passive-speaking": [
        {
            "speaker": "A",
            "en": "Have you been practicing Passive Voice in Speaking diligently?",
            "bn": "তুমি কি নিয়মিত দৈনন্দিন স্পোকেন ইংলিশে যখন কাজের চেয়ে ফলাফল প্রধান  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing Passive Voice in Speaking diligently?",
            "bn": "তুমি কি নিয়মিত দৈনন্দিন স্পোকেন ইংলিশে যখন কাজের চেয়ে ফলাফল প্রধান  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing Passive Voice in Speaking diligently?",
            "bn": "তুমি কি নিয়মিত দৈনন্দিন স্পোকেন ইংলিশে যখন কাজের চেয়ে ফলাফল প্রধান  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing Passive Voice in Speaking diligently?",
            "bn": "তুমি কি নিয়মিত দৈনন্দিন স্পোকেন ইংলিশে যখন কাজের চেয়ে ফলাফল প্রধান  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing Passive Voice in Speaking diligently?",
            "bn": "তুমি কি নিয়মিত দৈনন্দিন স্পোকেন ইংলিশে যখন কাজের চেয়ে ফলাফল প্রধান  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing Passive Voice in Speaking diligently?",
            "bn": "তুমি কি নিয়মিত দৈনন্দিন স্পোকেন ইংলিশে যখন কাজের চেয়ে ফলাফল প্রধান  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing Passive Voice in Speaking diligently?",
            "bn": "তুমি কি নিয়মিত দৈনন্দিন স্পোকেন ইংলিশে যখন কাজের চেয়ে ফলাফল প্রধান  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing Passive Voice in Speaking diligently?",
            "bn": "তুমি কি নিয়মিত দৈনন্দিন স্পোকেন ইংলিশে যখন কাজের চেয়ে ফলাফল প্রধান  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing Passive Voice in Speaking diligently?",
            "bn": "তুমি কি নিয়মিত দৈনন্দিন স্পোকেন ইংলিশে যখন কাজের চেয়ে ফলাফল প্রধান  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        },
        {
            "speaker": "A",
            "en": "Have you been practicing Passive Voice in Speaking diligently?",
            "bn": "তুমি কি নিয়মিত দৈনন্দিন স্পোকেন ইংলিশে যখন কাজের চেয়ে ফলাফল প্রধান  অনুশীলন করছো?",
            "ipa": "/hæv juː biːn ˈpræktɪsɪŋ ˈdɪlɪdʒəntli/",
            "bn_pron": "হ্যাভ ইউ বিন প্র্যাকটিসিং ডিলিজেন্টলি?"
        },
        {
            "speaker": "B",
            "en": "Yes, I have been practicing every day and seeing great progress.",
            "bn": "হ্যাঁ, আমি প্রতিদিন অনুশীলন করছি এবং চমৎকার অগ্রগতি দেখছি।",
            "ipa": "/jes aɪ hæv biːn ˈpræktɪsɪŋ ˈevri deɪ/",
            "bn_pron": "ইয়েস আই হ্যাভ বিন প্র্যাকটিসিং এভরি ডে।"
        }
    ]
};
