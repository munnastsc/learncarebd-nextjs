# -*- coding: utf-8 -*-
"""
Fixes spokenLessonsData.ts by cleanly formatting lessons 16 to 28 with json.dumps
so that apostrophes (haven't, won't) and Bengali quotes are 100% valid TypeScript.
"""
import os
import json

ROOT = r"E:\antigravity\ILTES"
LIB = os.path.join(ROOT, "src", "lib")
lessons_file_path = os.path.join(LIB, "spokenLessonsData.ts")

with open(lessons_file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Cut off anything after lesson-15
cutoff_marker = "id: 'lesson-15-it-takes-time'"
cutoff_idx = content.find(cutoff_marker)
if cutoff_idx == -1:
    print("Could not find lesson-15 marker")
    exit(1)

# Find the closing brace of lesson-15
l15_close = content.find("        }\n    }", cutoff_idx)
if l15_close == -1:
    l15_close = content.find("        }\r\n    }", cutoff_idx)

content_trimmed = content[:l15_close + len("        }\n    }")]

# Import the NEW_LESSONS_INFO from append_curriculum_lessons
import sys
sys.path.append(os.path.join(ROOT, "scripts"))
from append_curriculum_lessons import NEW_LESSONS_INFO

entries_ts = []
for l in NEW_LESSONS_INFO:
    entry = f"""    {{
        id: {json.dumps(l["id"], ensure_ascii=False)},
        lessonNumber: {l["num"]},
        title: {json.dumps(l["title"], ensure_ascii=False)},
        subtitle: {json.dumps(l["sub"], ensure_ascii=False)},
        phase: {json.dumps(l["phase"], ensure_ascii=False)},
        phaseLabel: {json.dumps(l["label"], ensure_ascii=False)},
        level: {json.dumps(l["level"], ensure_ascii=False)},
        concept: {{
            explanation: {json.dumps(l["concept"]["explanation"], ensure_ascii=False)},
            whenToUse: {json.dumps(l["concept"]["whenToUse"], ensure_ascii=False)},
            commonMistake: {json.dumps(l["concept"]["commonMistake"], ensure_ascii=False)},
            formulaSummary: {json.dumps(l["concept"]["formulaSummary"], ensure_ascii=False)}
        }},
        transformation6Way: {{
            baseConcept: {json.dumps(l["title"], ensure_ascii=False)},
            positive: {{
                formula: {json.dumps(l["concept"]["formulaSummary"], ensure_ascii=False)},
                en: {json.dumps(l["pos"][0], ensure_ascii=False)},
                bn: {json.dumps(l["pos"][1], ensure_ascii=False)},
                ipa: {json.dumps(l["pos"][2], ensure_ascii=False)}
            }},
            negative: {{
                formula: "Subject + Auxiliary Negative + Verb + Extension",
                en: {json.dumps(l["neg"][0], ensure_ascii=False)},
                bn: {json.dumps(l["neg"][1], ensure_ascii=False)},
                ipa: {json.dumps(l["neg"][2], ensure_ascii=False)}
            }},
            interrogative: {{
                formula: "Auxiliary + Subject + Verb + Extension?",
                en: {json.dumps(l["int"][0], ensure_ascii=False)},
                bn: {json.dumps(l["int"][1], ensure_ascii=False)},
                ipa: {json.dumps(l["int"][2], ensure_ascii=False)}
            }},
            interroNegative: {{
                formula: "Auxiliary Negative + Subject + Verb + Extension?",
                en: {json.dumps(l["intNeg"][0], ensure_ascii=False)},
                bn: {json.dumps(l["intNeg"][1], ensure_ascii=False)},
                ipa: {json.dumps(l["intNeg"][2], ensure_ascii=False)}
            }},
            whPositive: {{
                formula: "WH-Word + Auxiliary + Subject + Verb + Extension?",
                en: {json.dumps(l["whPos"][0], ensure_ascii=False)},
                bn: {json.dumps(l["whPos"][1], ensure_ascii=False)},
                ipa: {json.dumps(l["whPos"][2], ensure_ascii=False)}
            }},
            whNegative: {{
                formula: "WH-Word + Auxiliary Negative + Subject + Verb + Extension?",
                en: {json.dumps(l["whNeg"][0], ensure_ascii=False)},
                bn: {json.dumps(l["whNeg"][1], ensure_ascii=False)},
                ipa: {json.dumps(l["whNeg"][2], ensure_ascii=False)}
            }}
        }},
        realLifeSentences: [
            {{ en: {json.dumps(l["pos"][0], ensure_ascii=False)}, bn: {json.dumps(l["pos"][1], ensure_ascii=False)}, ipa: {json.dumps(l["pos"][2], ensure_ascii=False)}, context: "দৈনন্দিন বাস্তব প্রয়োগ", type: "positive" }},
            {{ en: {json.dumps(l["neg"][0], ensure_ascii=False)}, bn: {json.dumps(l["neg"][1], ensure_ascii=False)}, ipa: {json.dumps(l["neg"][2], ensure_ascii=False)}, context: "না-বাচক স্পষ্ট বিবৃতি", type: "negative" }},
            {{ en: {json.dumps(l["int"][0], ensure_ascii=False)}, bn: {json.dumps(l["int"][1], ensure_ascii=False)}, ipa: {json.dumps(l["int"][2], ensure_ascii=False)}, context: "ভদ্র ও স্বাভাবিক প্রশ্ন", type: "question" }},
            {{ en: {json.dumps(l["whPos"][0], ensure_ascii=False)}, bn: {json.dumps(l["whPos"][1], ensure_ascii=False)}, ipa: {json.dumps(l["whPos"][2], ensure_ascii=False)}, context: "তথ্যবহুল অনুসন্ধানী প্রশ্ন", type: "wh" }}
        ],
        nativeVariations: {{
            situation: {json.dumps(f'বলতে চাওয়া: "{l["pos"][1]}"', ensure_ascii=False)},
            standard: {json.dumps(l["pos"][0], ensure_ascii=False)},
            nativeStyle: {json.dumps(l["pos"][0], ensure_ascii=False)},
            waysToSay: [
                {{ phrasing: {json.dumps(l["pos"][0], ensure_ascii=False)}, tone: "পেশাদার ও স্পষ্ট", bn: {json.dumps(l["pos"][1], ensure_ascii=False)} }},
                {{ phrasing: {json.dumps(l["int"][0], ensure_ascii=False)}, tone: "ভদ্র ও চমৎকার", bn: {json.dumps(l["int"][1], ensure_ascii=False)} }},
                {{ phrasing: {json.dumps(l["whPos"][0], ensure_ascii=False)}, tone: "বিশ্লেষণধর্মী", bn: {json.dumps(l["whPos"][1], ensure_ascii=False)} }}
            ],
            tip: "💡 এই কাঠামোর নিয়মিত চর্চা আপনার স্পিকিংকে আরও সাবলীল ও আন্তর্জাতিক মানের করে তুলবে।"
        }},
        qaDrill: {{
            targetQuestion: {{
                en: {json.dumps(l["targetQ"][0], ensure_ascii=False)},
                bn: {json.dumps(l["targetQ"][1], ensure_ascii=False)},
                ipa: "/hæv juː biːn/"
            }},
            possibleAnswers: [
                {{ style: "সংক্ষিপ্ত সম্মতি (Short Affirmative)", en: "Yes, absolutely! I find it very rewarding.", bn: "হ্যাঁ, অবশ্যই! এটি আমার কাছে দারুণ ফলপ্রসূ মনে হয়।", ipa: "/jes ˌæbsəˈluːtli/" }},
                {{ style: "বিস্তারিত উত্তর (Elaborated)", en: {json.dumps(l["pos"][0], ensure_ascii=False)}, bn: {json.dumps(l["pos"][1], ensure_ascii=False)}, ipa: {json.dumps(l["pos"][2], ensure_ascii=False)} }},
                {{ style: "না-বাচক উত্তর (Polite Negative)", en: "Not quite, but I am planning to start soon.", bn: "পুরোপুরি নয়, তবে খুব শীঘ্রই শুরু করার পরিকল্পনা করছি।", ipa: "/nɒt kwaɪt/" }},
                {{ style: "বিকল্প বা দ্বিধা (Alternative / Uncertainty)", en: "It varies depending on my daily schedule.", bn: "আমার দৈনন্দিন রুটিনের ওপর ভিত্তি করে এটি পরিবর্তিত হয়।", ipa: "/ɪt ˈveəriz/" }}
            ]
        }},
        sentenceBuilder: {{
            subjects: {json.dumps(l["builderSub"], ensure_ascii=False)},
            auxOrVerbs: {json.dumps(l["builderAux"], ensure_ascii=False)},
            complements: {json.dumps(l["builderComp"], ensure_ascii=False)}
        }}
    }}"""
    entries_ts.append(entry)

final_content = content_trimmed + ",\n" + ",\n".join(entries_ts) + "\n];\n"

with open(lessons_file_path, "w", encoding="utf-8") as f:
    f.write(final_content)

print(f"spokenLessonsData.ts successfully rebuilt with {len(NEW_LESSONS_INFO)} new lessons cleanly escaped!")
