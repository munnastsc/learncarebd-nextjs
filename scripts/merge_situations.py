import json
import os
import data_situations_1_10
import data_situations_11_15
import data_situations_16_20
import data_situations_21_30
import data_situations_31_40

all_situations = (
    data_situations_1_10.SITUATIONS_1_20 +
    data_situations_11_15.SITUATIONS_11_20 +
    data_situations_16_20.SITUATIONS_16_20 +
    data_situations_21_30.SITUATIONS_21_30 +
    data_situations_31_40.SITUATIONS_31_40
)

print(f"Total situations merged: {len(all_situations)}")
for i, s in enumerate(all_situations):
    s['number'] = i + 1

ts_header = """export interface DialogueTurn {
    id: string;
    speaker: string;
    role: 'A' | 'B';
    roleTitle?: string;
    en: string;
    bn: string;
    ipa: string;
    bn_pron: string;
}

export interface SituationRole {
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

json_content = json.dumps(all_situations, indent=4, ensure_ascii=False)

target_path = os.path.join(os.path.dirname(__file__), "..", "src", "lib", "spokenConversationsData.ts")
with open(target_path, "w", encoding="utf-8") as f:
    f.write(ts_header + json_content + ";\n")

print(f"Successfully generated {target_path} with {len(all_situations)} situations.")
