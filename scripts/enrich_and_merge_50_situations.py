# -*- coding: utf-8 -*-
"""
Enriches all 50 Situational Conversations with:
1. continuationTip: Explanation of how this turn keeps the conversation flowing (কথার পিঠে কথা বাড়ানো)
2. alternatives: 3 alternative styles to say the same thought (Formal, Casual, Native/Short) with en, bn, bn_pron
3. Merges and writes src/lib/spokenConversationsData.ts
"""

import sys
import json
import re

sys.path.append('E:/antigravity/ILTES/scripts')

from data_situations_1_10 import SITUATIONS_1_20 as s1
from data_situations_11_15 import SITUATIONS_11_20 as s2
from data_situations_16_20 import SITUATIONS_16_20 as s3
from data_situations_21_30 import SITUATIONS_21_30 as s4
from data_situations_31_40 import SITUATIONS_31_40 as s5
from data_situations_41_50 import SITUATIONS_41_50 as s6

all_situations = s1 + s2 + s3 + s4 + s5 + s6

def generate_continuation_tip(turn_idx, total_turns, en_text, role, speaker):
    en_lower = en_text.lower()
    is_question = '?' in en_text
    
    if turn_idx == 0:
        return "💡 শুরুর কৌশল: একবারে কাজের কথায় না গিয়ে বিনয়ের সাথে পরিস্থিতির প্রেক্ষাপট তুলে ধরে কথা শুরু করা হয়েছে।"
    elif turn_idx == total_turns - 1:
        return "💡 সমাপ্তির কৌশল (Warm Closer): আন্তরিক কৃতজ্ঞতা ও শুভকামনা জানিয়ে ভবিষ্যতে আবার কথা বলার সুযোগ রাখা হয়েছে।"
    elif is_question:
        if any(w in en_lower for w in ['how', 'why', 'what', 'which', 'where', 'when']):
            return "💡 ওপেন-এন্ডেড হুক: শুধু 'Yes/No' না চেয়ে প্রশ্ন করে অপর পক্ষকে বিস্তারিত তথ্য দেওয়ার সুযোগ করে দেওয়া হয়েছে।"
        else:
            return "💡 ফলো-আপ প্রশ্ন: আগের কথার সূত্র ধরে নতুন তথ্য জানার জন্য তাৎক্ষণিক প্রশ্ন জুড়ে দিয়ে আলোচনা সচল রাখা হয়েছে।"
    elif any(w in en_lower for w in ['sorry', 'apologize', 'understand', 'relieved', 'appreciate', 'thank']):
        return "💡 ইমোশনাল ভ্যালিডেশন: অপর পক্ষের বক্তব্য বা অনুভূতির প্রতি সহমর্মিতা ও শ্রদ্ধা জানিয়ে আস্থা তৈরি করা হয়েছে।"
    elif any(w in en_lower for w in ['because', 'since', 'actually', 'honestly', 'however', 'although']):
        return "💡 অ্যানসার + বিস্তার (Answer & Expand): শুধু সোজা উত্তর না দিয়ে সাথে ব্যক্তিগত কারণ বা ব্যাখ্যা যোগ করে কথা বাড়ানো হয়েছে।"
    elif any(w in en_lower for w in ['recommend', 'suggest', 'deal', 'sounds good', 'let us', "let's"]):
        return "💡 উইন-উইন প্রস্তাব: গঠনমূলক সমাধানের দিকে কথা এগিয়ে নিয়ে উভয়ের সম্মত হওয়া সহজ করা হয়েছে।"
    elif turn_idx % 2 == 1:
        return "💡 এক্টিভ লিসেনিং: মনোযোগ দিয়ে শুনে ইতিবাচক সাড়া দেওয়া হয়েছে যাতে বক্তা কথা বলতে স্বাচ্ছন্দ্যবোধ করেন।"
    else:
        return "💡 প্রেক্ষাপট সংযোগ: আগের বক্তব্যের ওপর দাঁড়িয়ে নতুন প্রয়োজনীয় তথ্য যোগ করে কথোপকথনের পরিধি বাড়ানো হয়েছে।"

def generate_alternatives_for_turn(en_text, bn_text, bn_pron, turn_idx):
    """
    Generates 3 contextual variations for any turn:
    1. Formal / মার্জিত ও অফিসিয়াল
    2. Casual / ঘরোয়া ও বন্ধুদের সাথে
    3. Native & Direct / আধুনিক সংক্ষেপ
    """
    clean_en = en_text.strip().rstrip('.?!')
    clean_bn = bn_text.strip().rstrip('।?!')
    
    # 1. Formal variation
    if clean_en.lower().startswith('hi') or clean_en.lower().startswith('hello') or clean_en.lower().startswith('hey'):
        formal_en = re.sub(r'^(hi|hey|hello)[,\s]*', 'Good day, ', clean_en, flags=re.I) + '.'
        formal_bn = "মার্জিত অভিবাদন: " + clean_bn + '।'
        formal_pron = "গুড ডে, " + bn_pron
    elif '?' in en_text:
        formal_en = f"Could you kindly clarify, {clean_en.lower()}?"
        formal_bn = "মার্জিত জানতে চাওয়া: অনুগ্রহ করে কি বলবেন, " + clean_bn + '?'
        formal_pron = "কুড ইউ কাইন্ডলি ক্ল্যারিফাই, " + bn_pron
    elif any(w in clean_en.lower() for w in ['thanks', 'thank you']):
        formal_en = "I am exceptionally grateful for your kind assistance."
        formal_bn = "আপনার আন্তরিক সহযোগিতার জন্য আমি অত্যন্ত কৃতজ্ঞ।"
        formal_pron = "আই অ্যাম এক্সেপশনালি গ্রেটফুল ফর ইউর অ্যাসিস্ট্যান্স।"
    elif clean_en.lower().startswith('i think') or clean_en.lower().startswith('i feel'):
        formal_en = f"From my perspective, {clean_en}."
        formal_bn = "আমার বিনীত দৃষ্টিভঙ্গি থেকে, " + clean_bn + '।'
        formal_pron = "ফ্রম মাই পারসপেক্টিভ, " + bn_pron
    else:
        formal_en = f"I would like to note that {clean_en.lower()}."
        formal_bn = "বিনয়ের সাথে উল্লেখ্য: " + clean_bn + '।'
        formal_pron = "আই উড লাইক টু নোট দ্যাট " + bn_pron

    # 2. Casual variation
    if clean_en.lower().startswith('excuse me') or clean_en.lower().startswith('good morning') or clean_en.lower().startswith('good afternoon'):
        casual_en = re.sub(r'^(excuse me|good morning|good afternoon|good evening)[,\s]*', 'Hey, ', clean_en, flags=re.I) + '!'
        casual_bn = "ঘরোয়া ভাব: আরে, " + clean_bn + '!'
        casual_pron = "হেই, " + bn_pron
    elif '?' in en_text:
        casual_en = f"By the way, {clean_en.lower()}?"
        casual_bn = "কথার ছলে: ভালো কথা, " + clean_bn + '?'
        casual_pron = "বাই দ্য ওয়ে, " + bn_pron
    elif any(w in clean_en.lower() for w in ['thanks', 'thank you']):
        casual_en = "Thanks a bunch, appreciate you buddy!"
        casual_bn = "অনেক ধন্যবাদ দোস্ত, কৃতজ্ঞতা রইল!"
        casual_pron = "থ্যাংকস আ বাঞ্চ, অ্যাপ্রিশিয়েট ইউ বাডি!"
    else:
        casual_en = f"Honestly, {clean_en.lower()}."
        casual_bn = "সত্যি বলতে: " + clean_bn + '।'
        casual_pron = "অনেস্টলি, " + bn_pron

    # 3. Native & Direct / Short variation
    words = clean_en.split()
    if len(words) > 10:
        short_en = ' '.join(words[:8]) + '...'
    else:
        short_en = clean_en + '!'
    
    if '?' in en_text:
        native_en = f"Quick question: {clean_en.lower()}?"
        native_bn = "সংক্ষেপে সরাসরি: চটজলদি এক প্রশ্ন—" + clean_bn + '?'
        native_pron = "কুইক কোয়েশ্চেন: " + bn_pron
    elif any(w in clean_en.lower() for w in ['yes', 'definitely', 'exactly', 'sounds good', 'deal']):
        native_en = "Totally agree, sounds like a solid plan!"
        native_bn = "একদম সহমত, চমৎকার পরিকল্পনা!"
        native_pron = "টোটালি এগ্রি, সাউন্ডস লাইক আ সলিড প্ল্যান!"
    elif any(w in clean_en.lower() for w in ['sorry', 'apologize']):
        native_en = "My bad on that, totally my oversight!"
        native_bn = "আমার ভুল হয়ে গেছে, একদম খেয়াল করিনি!"
        native_pron = "মাই ব্যাড অন দ্যাট, টোটালি মাই ওভারসাইট!"
    else:
        native_en = f"No doubt about it, {clean_en.lower()}."
        native_bn = "কোনো সন্দেহ নেই, " + clean_bn + '।'
        native_pron = "নো ডাউট অ্যাবাউট ইট, " + bn_pron

    return [
        {
            "style": "Formal (মার্জিত ও অফিসিয়াল)",
            "en": formal_en,
            "bn": formal_bn,
            "bn_pron": formal_pron
        },
        {
            "style": "Casual (ঘরোয়া ও বন্ধুদের সাথে)",
            "en": casual_en,
            "bn": casual_bn,
            "bn_pron": casual_pron
        },
        {
            "style": "Native / Short (সংক্ষেপ ও আধুনিক)",
            "en": native_en,
            "bn": native_bn,
            "bn_pron": native_pron
        }
    ]

# Enrich every situation
for s in all_situations:
    turns = s.get('dialogue', [])
    total_turns = len(turns)
    for t_idx, turn in enumerate(turns):
        turn['continuationTip'] = generate_continuation_tip(
            t_idx, total_turns, turn.get('en', ''), turn.get('role', 'A'), turn.get('speaker', '')
        )
        turn['alternatives'] = generate_alternatives_for_turn(
            turn.get('en', ''), turn.get('bn', ''), turn.get('bn_pron', ''), t_idx
        )

print(f"Enriched all {len(all_situations)} situations with continuationTips and alternatives!")

# Write spokenConversationsData.ts
ts_header = """export interface SituationRole {
    name: string;
    titleBn: string;
    descBn: string;
}

export interface KeyVocabItem {
    word: string;
    meaning: string;
    pron: string;
}

export interface SituationBriefing {
    setting: string;
    roleA: SituationRole;
    roleB: SituationRole;
    overviewBn: string;
    politenessTips: string[];
    keyVocabulary: KeyVocabItem[];
}

export interface DialogueAlternative {
    style: string;
    en: string;
    bn: string;
    bn_pron: string;
}

export interface DialogueTurn {
    id: string;
    speaker: string;
    role: 'A' | 'B';
    roleTitle?: string;
    en: string;
    bn: string;
    ipa: string;
    bn_pron: string;
    continuationTip?: string;
    alternatives?: DialogueAlternative[];
}

export interface SituationalConversation {
    id: string;
    number: number;
    title: string;
    titleBn: string;
    level: 'Easy' | 'Intermediate';
    category: 'Daily Life' | 'Social' | 'Professional' | 'Travel' | 'Services' | 'Shopping';
    imageUrl?: string;
    sceneDescription: string;
    briefing?: SituationBriefing;
    starters: { en: string; bn: string; tip?: string }[];
    dialogue: DialogueTurn[];
    followUps: { en: string; bn: string; tip?: string }[];
    closers: { en: string; bn: string; tip?: string }[];
    nativePhrases: { phrase: string; meaning: string; context: string }[];
}

export const SITUATIONAL_CONVERSATIONS: SituationalConversation[] = """

output_path = 'E:/antigravity/ILTES/src/lib/spokenConversationsData.ts'
with open(output_path, 'w', encoding='utf-8') as f:
    f.write(ts_header)
    json.dump(all_situations, f, ensure_ascii=False, indent=4)
    f.write(";\n")

print(f"Successfully generated {output_path} with all 50 situations and interactive alternatives!")
