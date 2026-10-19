# -*- coding: utf-8 -*-
"""
Full Spoken English Curriculum Generator
Covers:
- 28 Master Lessons (All 12 Tenses, All Modals, Crucial Tense Comparisons, Be/Being/Been, Conditionals, Causatives, Passives)
- 10 Stories per Lesson:
    * Stories 1-5: Guided with Step-by-Step Bangla -> English translation, Sentence Expansion (4 levels + technique), Key Vocabulary Cards (Word, IPA, POS, Meaning, Example EN & BN).
    * Stories 6-10: Guided Practice Challenges with Starter, Bengali plot hints, 5 Keyword clues, Grammar clues, Connectors, Model Solution, and Sentence Expansion Tip.
- 20 Dialogues per lesson (16 to 28)
- 100 Q&As per lesson (16 to 28)
- 100 Variations per lesson (16 to 28)
- 100 Fill-in-the-gaps per lesson (16 to 28)
"""
import os
import sys
import json

ROOT_DIR = r"E:\antigravity\ILTES"
LIB_DIR = os.path.join(ROOT_DIR, "src", "lib")

LESSONS = [
    # 1 to 15 existing
    {"id": "lesson-01-present-to-be", "num": 1, "title": "Present To-Be: am / is / are", "sub": "বর্তমান পরিচয়, অবস্থান, গুণ ও শারীরিক/মানসিক অবস্থা প্রকাশ", "phase": "to-be", "label": "ভিত্তিপ্রস্তর (To-Be)", "verb": "am/is/are"},
    {"id": "lesson-02-past-to-be", "num": 2, "title": "Past To-Be: was / were", "sub": "অতীতের পরিচয়, গুণ, শারীরিক অবস্থা বা অবস্থান বর্ণনা", "phase": "to-be", "label": "ভিত্তিপ্রস্তর (To-Be)", "verb": "was/were"},
    {"id": "lesson-03-have-has", "num": 3, "title": "Possession: have / has (Have got)", "sub": "অধিকার, মালিকানা, শারীরিক সমস্যা বা সম্পর্ক প্রকাশ", "phase": "have-has", "label": "অধিকার ও সমস্যা (Have/Has)", "verb": "have/has"},
    {"id": "lesson-04-there-is-are", "num": 4, "title": "Existence: There is / There are", "sub": "কোথাও কোনো কিছু থাকা বা বিদ্যমান থাকা নির্দেশক স্ট্রাকচার", "phase": "power-structures", "label": "উপস্থিতি নির্দেশক (There is/are)", "verb": "there is/are"},
    {"id": "lesson-05-present-simple", "num": 5, "title": "Present Simple: Routine & Habits", "sub": "দৈনন্দিন রুটিন, চিরন্তন সত্য, অভ্যাস ও পেশা সম্পর্কিত কথা", "phase": "tenses", "label": "বর্তমান কাল (Present Simple)", "verb": "do/does"},
    {"id": "lesson-06-present-continuous", "num": 6, "title": "Present Continuous: Right Now", "sub": "চোখের সামনে এই মুহূর্তে চলমান কাজ বা সাময়িক ঘটনা", "phase": "tenses", "label": "বর্তমান কাল (Continuous)", "verb": "am/is/are + V-ing"},
    {"id": "lesson-07-past-simple", "num": 7, "title": "Past Simple: Finished Events", "sub": "অতীতে ঘটে যাওয়া সমাপ্ত কাজ (স্পোকেন ইংলিশের ৬০% কথোপকথন)", "phase": "tenses", "label": "অতীত কাল (Past Simple)", "verb": "did + V1 / V2"},
    {"id": "lesson-08-present-perfect", "num": 8, "title": "Present Perfect: have / has + V3", "sub": "কাজ শেষ কিন্তু তার প্রভাব বা ফলাফল বর্তমানের সাথে সম্পর্কযুক্ত", "phase": "tenses", "label": "বর্তমান কাল (Present Perfect)", "verb": "have/has + V3"},
    {"id": "lesson-09-future-simple", "num": 9, "title": "Future: will vs be going to", "sub": "তাৎক্ষণিক সিদ্ধান্ত (Will) বনাম পূর্ব-পরিকল্পনা (Going to)", "phase": "tenses", "label": "ভবিষ্যত কাল (Future)", "verb": "will / going to"},
    {"id": "lesson-10-can-could", "num": 10, "title": "Ability & Politeness: can vs could", "sub": "শারীরিক/মানসিক সক্ষমতা এবং অতি-ভদ্র অনুরোধ প্রকাশের কৌশল", "phase": "modals", "label": "মডেল ভার্বস (Modals)", "verb": "can/could"},
    {"id": "lesson-11-should-must", "num": 11, "title": "Advice & Obligation: should vs must / have to", "sub": "উপদেশ (Should) বনাম কঠোর বাধ্যবাধকতা (Must / Have to)", "phase": "modals", "label": "মডেল ভার্বস (Modals)", "verb": "should/must/have to"},
    {"id": "lesson-12-would-like", "num": 12, "title": "Polite Offers & Desires: would like / would you mind", "sub": "ভদ্র প্রস্তাব, পছন্দ প্রকাশ ও মার্জিত অনুরোধের রাজকীয় ভাষা", "phase": "modals", "label": "মডেল ভার্বস (Modals)", "verb": "would like/mind"},
    {"id": "lesson-13-used-to", "num": 13, "title": "Habits: used to vs be used to", "sub": "অতীতের নিয়মিত অভ্যাস বনাম বর্তমানের কোনো কাজে অভ্যস্ততা", "phase": "power-structures", "label": "অভ্যাস ও পরিচিতি", "verb": "used to / be used to"},
    {"id": "lesson-14-want-to", "num": 14, "title": "Desires: want to (wanna) vs feel like (ing)", "sub": "কোনো কিছু করতে মন চাওয়া, তাৎক্ষণিক মুড ও ইচ্ছা প্রকাশ", "phase": "power-structures", "label": "ইচ্ছা ও ভালোলাগা", "verb": "want to / feel like"},
    {"id": "lesson-15-it-takes", "num": 15, "title": "Time & Duration: It takes (time) to do", "sub": "কোনো কাজ সম্পন্ন করতে কত সময় লাগে তা প্রকাশের জাদুকরী ফর্মুলা", "phase": "power-structures", "label": "সময় ও শ্রম পরিমাপ", "verb": "it takes / it took"},
    
    # 16 to 28 NEW COMPREHENSIVE
    {"id": "lesson-16-present-perfect-continuous", "num": 16, "title": "Present Perfect Continuous: have/has been + V-ing", "sub": "কাজ শুরু হয়ে এখনো চলছে, স্থায়িত্ব ও সময়ের পরিমাপ প্রকাশ (Since vs For)", "phase": "tenses", "label": "কাল ও স্থায়িত্ব (Perfect Continuous)", "verb": "have/has been + V-ing"},
    {"id": "lesson-17-tense-compare-continuous-perfect", "num": 17, "title": "Tense Comparison: Continuous vs Perfect Continuous", "sub": "\"I am working\" বনাম \"I have been working for 2 hours\" (সময়ের পার্থক্য)", "phase": "comparisons", "label": "টেন্স তুলনা (Comparison)", "verb": "am doing vs have been doing"},
    {"id": "lesson-18-tense-compare-present-perfect-past-simple", "num": 18, "title": "Tense Comparison: Present Perfect vs Past Simple", "sub": "\"I have done\" বনাম \"I did\" (সমাপ্ত ঘটনা বনাম বর্তমান প্রভাব)", "phase": "comparisons", "label": "টেন্স তুলনা (Comparison)", "verb": "have done vs did"},
    {"id": "lesson-19-past-continuous", "num": 19, "title": "Past Continuous: was / were + V-ing", "sub": "অতীতে কোনো কাজ চলার মাঝখানে আরেকটি ঘটনা ঘটা (When & While)", "phase": "tenses", "label": "অতীত চলমান (Past Continuous)", "verb": "was/were + V-ing"},
    {"id": "lesson-20-past-perfect-and-comparison", "num": 20, "title": "Past Perfect & Comparison: Past Simple vs Past Perfect", "sub": "অতীতে দুটি ঘটনার মধ্যে যেটি আগে হয়েছিল (had + V3, Before / After)", "phase": "comparisons", "label": "টেন্স তুলনা (Comparison)", "verb": "had + V3 vs did"},
    {"id": "lesson-21-past-perfect-continuous", "num": 21, "title": "Past Perfect Continuous: had been + V-ing", "sub": "অতীতের নির্দিষ্ট সময় বা ঘটনার আগ পর্যন্ত কাজটি কতক্ষণ চলছিল", "phase": "tenses", "label": "অতীত স্থায়িত্ব (Past Perfect Continuous)", "verb": "had been + V-ing"},
    {"id": "lesson-22-future-continuous", "num": 22, "title": "Future Continuous: will be + V-ing", "sub": "ভবিষ্যতের কোনো নির্দিষ্ট সময়ে কোনো কাজ চলমান থাকা বোঝাতে", "phase": "tenses", "label": "ভবিষ্যত চলমান (Future Continuous)", "verb": "will be + V-ing"},
    {"id": "lesson-23-future-perfect-and-continuous", "num": 23, "title": "Future Perfect: will have + V3 / will have been", "sub": "ভবিষ্যতের কোনো নির্দিষ্ট সময়ের মধ্যে কাজ সম্পন্ন হয়ে থাকা (By next month)", "phase": "tenses", "label": "ভবিষ্যত সমাপ্তি (Future Perfect)", "verb": "will have + V3"},
    {"id": "lesson-24-complete-modals", "num": 24, "title": "All Modals Mastery: May, Might, Must, Ought to, Shall", "sub": "সম্ভাবনা (May/Might), বাধ্যবাধকতা (Must), উপদেশ (Ought to) ও অনুমতি", "phase": "modals", "label": "সকল মডেল ভার্বস (All Modals)", "verb": "may/might/must/ought to"},
    {"id": "lesson-25-be-being-been", "num": 25, "title": "The Master Guide: Be, Being, Been এর ব্যবহার", "sub": "Be (হওয়া/হও), Being (হওয়া অবস্থায়/প্যাসিভ), Been (হয়েছে/ঘুরে আসা)", "phase": "advanced", "label": "উচ্চতর স্পোকেন (Master Guide)", "verb": "be / being / been"},
    {"id": "lesson-26-conditionals", "num": 26, "title": "Real-Life Conditionals: 0, 1st, 2nd & 3rd Conditionals", "sub": "বাস্তব জীবনের শর্তমূলক বাক্য (\"যদি তুমি আসো...\", \"যদি আমি ধনী হতাম...\")", "phase": "advanced", "label": "শর্তমূলক বাক্য (Conditionals)", "verb": "If + conditional tenses"},
    {"id": "lesson-27-causative-verbs", "num": 27, "title": "Causative Verbs: Make, Let, Have, Get & Help", "sub": "কাউকে দিয়ে কোনো কাজ করানো বা সুযোগ দেওয়া (\"আমি তাকে দিয়ে করিয়েছি\")", "phase": "power-structures", "label": "প্রযোজক ক্রিয়া (Causative Verbs)", "verb": "make/let/have/get"},
    {"id": "lesson-28-passive-speaking", "num": 28, "title": "Passive Voice in Speaking: am/is/are + V3 & was/were + V3", "sub": "দৈনন্দিন স্পোকেন ইংলিশে যখন কাজের চেয়ে ফলাফল প্রধান (\"কাউকে জানানো হয়েছে\")", "phase": "power-structures", "label": "প্যাসিভ স্পোকেন (Passive Speaking)", "verb": "be + V3 in daily life"}
]

print(f"Loaded metadata for {len(LESSONS)} lessons.")
