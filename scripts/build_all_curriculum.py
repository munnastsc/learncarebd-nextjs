# -*- coding: utf-8 -*-
import os
import sys
import json

ROOT_DIR = r"E:\antigravity\ILTES"
LIB_DIR = os.path.join(ROOT_DIR, "src", "lib")

# Definition of all 28 lessons metadata
ALL_LESSONS_METADATA = [
    {"id": "lesson-01-present-to-be", "num": 1, "name": "Present To-Be (am/is/are)", "phase": "to-be", "phaseLabel": "ভিত্তিপ্রস্তর (To-Be)", "verb": "am/is/are", "theme": "Introduction & State"},
    {"id": "lesson-02-past-to-be", "num": 2, "name": "Past To-Be (was/were)", "phase": "to-be", "phaseLabel": "ভিত্তিপ্রস্তর (To-Be)", "verb": "was/were", "theme": "Past Identity & Situation"},
    {"id": "lesson-03-have-has", "num": 3, "name": "Possession: have / has", "phase": "have-has", "phaseLabel": "অধিকার ও সমস্যা (Have/Has)", "verb": "have/has", "theme": "Belongings & Symptoms"},
    {"id": "lesson-04-there-is-are", "num": 4, "name": "Existence: There is / There are", "phase": "power-structures", "phaseLabel": "উপস্থিতি নির্দেশক (There is/are)", "verb": "there is/are", "theme": "Places & Objects"},
    {"id": "lesson-05-present-simple", "num": 5, "name": "Present Simple: Routine & Habits", "phase": "tenses", "phaseLabel": "বর্তমান কাল (Present Simple)", "verb": "do/does", "theme": "Daily Routine & Truths"},
    {"id": "lesson-06-present-continuous", "num": 6, "name": "Present Continuous: Right Now", "phase": "tenses", "phaseLabel": "বর্তমান কাল (Continuous)", "verb": "am/is/are + V-ing", "theme": "Current Ongoing Actions"},
    {"id": "lesson-07-past-simple", "num": 7, "name": "Past Simple: Finished Events", "phase": "tenses", "phaseLabel": "অতীত কাল (Past Simple)", "verb": "did + V1 / V2", "theme": "Completed Past Stories"},
    {"id": "lesson-08-present-perfect", "num": 8, "name": "Present Perfect: have / has + V3", "phase": "tenses", "phaseLabel": "বর্তমান কাল (Present Perfect)", "verb": "have/has + V3", "theme": "Recent Finished & Life Experience"},
    {"id": "lesson-09-future-simple", "num": 9, "name": "Future: will vs be going to", "phase": "tenses", "phaseLabel": "ভবিষ্যত কাল (Future)", "verb": "will / going to", "theme": "Instant Decisions & Plans"},
    {"id": "lesson-10-can-could", "num": 10, "name": "Ability & Politeness: can vs could", "phase": "modals", "phaseLabel": "মডেল ভার্বস (Modals)", "verb": "can/could", "theme": "Skills & Polite Requests"},
    {"id": "lesson-11-should-must", "num": 11, "name": "Advice & Obligation: should vs must", "phase": "modals", "phaseLabel": "মডেল ভার্বস (Modals)", "verb": "should/must/have to", "theme": "Advice & Mandatory Rules"},
    {"id": "lesson-12-would-like", "num": 12, "name": "Polite Offers: would like / mind", "phase": "modals", "phaseLabel": "মডেল ভার্বস (Modals)", "verb": "would like / would you mind", "theme": "Polite Offers & Invitations"},
    {"id": "lesson-13-used-to", "num": 13, "name": "Habits: used to vs be used to", "phase": "power-structures", "phaseLabel": "অভ্যাস ও পরিচিতি", "verb": "used to / be used to", "theme": "Past Habits & Adaptations"},
    {"id": "lesson-14-want-to", "num": 14, "name": "Desires: want to vs feel like", "phase": "power-structures", "phaseLabel": "ইচ্ছা ও ভালোলাগা", "verb": "want to / feel like", "theme": "Desires & Moods"},
    {"id": "lesson-15-it-takes", "num": 15, "name": "Time & Duration: It takes to do", "phase": "power-structures", "phaseLabel": "সময় ও শ্রম পরিমাপ", "verb": "it takes / it took", "theme": "Duration & Journeys"},
    
    # NEW COMPREHENSIVE LESSONS
    {"id": "lesson-16-present-perfect-continuous", "num": 16, "name": "Present Perfect Continuous: have/has been + V-ing", "phase": "tenses", "phaseLabel": "কাল ও স্থায়িত্ব (Perfect Continuous)", "verb": "have/has been + V-ing", "theme": "Duration with Since & For"},
    {"id": "lesson-17-tense-compare-continuous-perfect", "num": 17, "name": "Tense Comparison: Continuous vs Perfect Continuous", "phase": "comparisons", "phaseLabel": "টেন্স তুলনা (Comparison)", "verb": "am doing vs have been doing", "theme": "Right now vs For 2 hours"},
    {"id": "lesson-18-tense-compare-present-perfect-past-simple", "num": 18, "name": "Tense Comparison: Present Perfect vs Past Simple", "phase": "comparisons", "phaseLabel": "টেন্স তুলনা (Comparison)", "verb": "have done vs did", "theme": "Finished time vs Present connection"},
    {"id": "lesson-19-past-continuous", "num": 19, "name": "Past Continuous: was / were + V-ing", "phase": "tenses", "phaseLabel": "অতীত কাল (Past Continuous)", "verb": "was/were + V-ing", "theme": "Ongoing past with When & While"},
    {"id": "lesson-20-past-perfect-and-comparison", "num": 20, "name": "Past Perfect & Comparison: Past Simple vs Past Perfect", "phase": "comparisons", "phaseLabel": "টেন্স তুলনা (Comparison)", "verb": "had + V3 vs did", "theme": "Two past actions: Before & After"},
    {"id": "lesson-21-past-perfect-continuous", "num": 21, "name": "Past Perfect Continuous: had been + V-ing", "phase": "tenses", "phaseLabel": "অতীত স্থায়িত্ব (Past Perfect Continuous)", "verb": "had been + V-ing", "theme": "How long action continued before past event"},
    {"id": "lesson-22-future-continuous", "num": 22, "name": "Future Continuous: will be + V-ing", "phase": "tenses", "phaseLabel": "ভবিষ্যত চলমান (Future Continuous)", "verb": "will be + V-ing", "theme": "Action happening at a future time"},
    {"id": "lesson-23-future-perfect-and-continuous", "num": 23, "name": "Future Perfect: will have + V3 / will have been", "phase": "tenses", "phaseLabel": "ভবিষ্যত সমাপ্তি (Future Perfect)", "verb": "will have + V3", "theme": "Completion by a future deadline"},
    {"id": "lesson-24-complete-modals", "num": 24, "name": "All Modals Mastery: May, Might, Must, Ought to", "phase": "modals", "phaseLabel": "সকল মডেল ভার্বস (All Modals)", "verb": "may/might/must/ought to", "theme": "Possibility, Probability & Moral duty"},
    {"id": "lesson-25-be-being-been", "num": 25, "name": "The Master Guide: Be, Being, Been", "phase": "advanced", "phaseLabel": "উচ্চতর স্পোকেন (Master Guide)", "verb": "be / being / been", "theme": "State of being, continuous passive, perfect experience"},
    {"id": "lesson-26-conditionals", "num": 26, "name": "Real-Life Conditionals: 0, 1st, 2nd & 3rd Conditionals", "phase": "advanced", "phaseLabel": "শর্তমূলক বাক্য (Conditionals)", "verb": "If + tense combinations", "theme": "Real conditions to imaginary dreams"},
    {"id": "lesson-27-causative-verbs", "num": 27, "name": "Causative Verbs: Make, Let, Have, Get & Help", "phase": "power-structures", "phaseLabel": "প্রযোজক ক্রিয়া (Causative Verbs)", "verb": "make/let/have/get someone do", "theme": "Causing others to perform actions"},
    {"id": "lesson-28-passive-speaking", "num": 28, "name": "Passive Voice in Speaking: am/is/are + V3", "phase": "power-structures", "phaseLabel": "প্যাসিভ স্পোকেন (Passive Speaking)", "verb": "be + V3 in daily life", "theme": "Action focus when doer is obvious or secondary"}
]

print(f"Total lessons configured: {len(ALL_LESSONS_METADATA)}")
