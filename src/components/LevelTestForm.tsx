'use client';

import React, { useState } from 'react';
import { 
    grammarQuestions, 
    phonicsQuestions, 
    readingPassage, 
    readingQuestions, 
    listeningQuestions, 
    translationQuestions, 
    liveReadingPassages,
    Question 
} from '../data/level-test-questions';

type Answers = Record<string, string>;

export default function LevelTestForm() {
    const [step, setStep] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    
    const [details, setDetails] = useState({ name: '', phone: '', email: '', level: '' });
    const [grammarAnswers, setGrammarAnswers] = useState<Answers>({});
    const [phonicsAnswers, setPhonicsAnswers] = useState<Answers>({});
    const [readingAnswers, setReadingAnswers] = useState<Answers>({});
    const [listeningAnswers, setListeningAnswers] = useState<Answers>({});
    const [translationAnswers, setTranslationAnswers] = useState<Answers>({});
    
    // Web3Forms Access Key - You need to replace this with your actual key from web3forms.com
    const WEB3FORMS_ACCESS_KEY = "YOUR_WEB3FORMS_ACCESS_KEY_HERE"; 

    const handleNext = () => setStep(s => s + 1);
    const handlePrev = () => setStep(s => s - 1);

    const calculateScore = (questions: Question[], answers: Answers) => {
        let score = 0;
        questions.forEach(q => {
            if (answers[q.id] === q.answer) score++;
        });
        return score;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const grammarScore = calculateScore(grammarQuestions, grammarAnswers);
        const phonicsScore = calculateScore(phonicsQuestions, phonicsAnswers);
        const readingScore = calculateScore(readingQuestions, readingAnswers);
        const listeningScore = calculateScore(listeningQuestions, listeningAnswers);
        const totalObjectiveScore = grammarScore + phonicsScore + readingScore + listeningScore;
        const maxObjectiveScore = grammarQuestions.length + phonicsQuestions.length + readingQuestions.length + listeningQuestions.length;

        // Compile translation answers for email
        let translationText = '';
        translationQuestions.forEach(q => {
            translationText += `Q: ${q.question}\nA: ${translationAnswers[q.id] || 'Not answered'}\n\n`;
        });

        // Submit via Web3Forms
        const formData = new FormData();
        formData.append("access_key", WEB3FORMS_ACCESS_KEY);
        formData.append("subject", `New Level Test Submission from ${details.name}`);
        formData.append("from_name", "LearnCareBD Level Test");
        formData.append("Student Name", details.name);
        formData.append("Phone", details.phone);
        formData.append("Email", details.email);
        formData.append("Current Level", details.level);
        formData.append("--- SCORES ---", "---------");
        formData.append("Total Objective Score", `${totalObjectiveScore} out of ${maxObjectiveScore}`);
        formData.append("Grammar Score", `${grammarScore} out of ${grammarQuestions.length}`);
        formData.append("Phonics Score", `${phonicsScore} out of ${phonicsQuestions.length}`);
        formData.append("Reading Score", `${readingScore} out of ${readingQuestions.length}`);
        formData.append("Listening Score", `${listeningScore} out of ${listeningQuestions.length}`);
        formData.append("--- TRANSLATIONS ---", "---------");
        formData.append("Translation Answers", translationText);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });
            const data = await response.json();
            if (data.success) {
                setSubmitted(true);
            } else {
                alert("Something went wrong. Have you added your Web3Forms access key in the code?");
                setSubmitted(true); // Proceed anyway for testing UI
            }
        } catch (error) {
            console.error(error);
            alert("Network error.");
            setSubmitted(true); // Proceed anyway for testing UI
        }
        
        setIsSubmitting(false);
    };

    if (submitted) {
        return (
            <div className="max-w-3xl mx-auto p-10 bg-white rounded-2xl shadow-xl text-center">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">✓</div>
                <h2 className="text-3xl font-black text-slate-800 mb-4">Test Submitted Successfully!</h2>
                <p className="text-slate-600 mb-8 text-lg">Thank you, {details.name}. Your objective score has been calculated and your detailed answers have been sent to our instructors for review.</p>
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 inline-block text-left">
                    <p className="font-bold text-slate-800 mb-2 text-xl">Your Objective Score:</p>
                    <p className="text-slate-600">Grammar: {calculateScore(grammarQuestions, grammarAnswers)} / {grammarQuestions.length}</p>
                    <p className="text-slate-600">Phonics: {calculateScore(phonicsQuestions, phonicsAnswers)} / {phonicsQuestions.length}</p>
                    <p className="text-slate-600">Reading: {calculateScore(readingQuestions, readingAnswers)} / {readingQuestions.length}</p>
                    <p className="text-slate-600">Listening: {calculateScore(listeningQuestions, listeningAnswers)} / {listeningQuestions.length}</p>
                </div>
            </div>
        );
    }

    const renderQuestions = (questions: Question[], answers: Answers, setAnswers: React.Dispatch<React.SetStateAction<Answers>>) => {
        return (
            <div className="space-y-8">
                {questions.map((q, idx) => (
                    <div key={q.id} className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                        <p className="font-bold text-slate-800 mb-4 text-lg">
                            <span className="text-indigo-600 mr-2">{idx + 1}.</span> {q.question}
                        </p>
                        <div className="space-y-3">
                            {q.options.map((opt, i) => (
                                <label key={i} className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 bg-white hover:border-indigo-400 cursor-pointer transition">
                                    <input 
                                        type="radio" 
                                        name={q.id} 
                                        value={opt} 
                                        checked={answers[q.id] === opt}
                                        onChange={(e) => setAnswers({ ...answers, [q.id]: e.target.value })}
                                        className="w-5 h-5 text-indigo-600"
                                    />
                                    <span className="text-slate-700">{opt}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Progress Bar */}
            <div className="bg-slate-100 h-2 w-full">
                <div className="bg-indigo-600 h-full transition-all duration-300" style={{ width: `${(step / 6) * 100}%` }}></div>
            </div>

            <div className="p-8 md:p-12">
                {/* Step 0: Details */}
                {step === 0 && (
                    <div className="animate-fade-in">
                        <h2 className="text-3xl font-black text-slate-800 mb-2">Student Information</h2>
                        <p className="text-slate-500 mb-8">Please fill in your details to start the test.</p>
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                                <input type="text" value={details.name} onChange={e => setDetails({...details, name: e.target.value})} className="w-full p-4 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition" placeholder="John Doe" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                                <input type="tel" value={details.phone} onChange={e => setDetails({...details, phone: e.target.value})} className="w-full p-4 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition" placeholder="017xxxxxxxx" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                                <input type="email" value={details.email} onChange={e => setDetails({...details, email: e.target.value})} className="w-full p-4 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition" placeholder="student@example.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Current Education / English Level</label>
                                <input type="text" value={details.level} onChange={e => setDetails({...details, level: e.target.value})} className="w-full p-4 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition" placeholder="e.g. HSC Candidate, Beginner" />
                            </div>
                        </div>
                    </div>
                )}

                {/* Step 1: Grammar */}
                {step === 1 && (
                    <div className="animate-fade-in">
                        <h2 className="text-3xl font-black text-slate-800 mb-2">Part 1: Grammar & Vocabulary</h2>
                        <p className="text-slate-500 mb-8">Answer all {grammarQuestions.length} questions to the best of your ability.</p>
                        {renderQuestions(grammarQuestions, grammarAnswers, setGrammarAnswers)}
                    </div>
                )}

                {/* Step 2: Phonics */}
                {step === 2 && (
                    <div className="animate-fade-in">
                        <h2 className="text-3xl font-black text-slate-800 mb-2">Part 2: Phonics & Phonetics</h2>
                        <p className="text-slate-500 mb-8">Test your pronunciation and spelling knowledge. ({phonicsQuestions.length} Questions)</p>
                        {renderQuestions(phonicsQuestions, phonicsAnswers, setPhonicsAnswers)}
                    </div>
                )}

                {/* Step 3: Reading */}
                {step === 3 && (
                    <div className="animate-fade-in">
                        <h2 className="text-3xl font-black text-slate-800 mb-2">Part 3: Reading Comprehension</h2>
                        <p className="text-slate-500 mb-6">Read the passage carefully and answer the questions below.</p>
                        <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100 text-indigo-900 mb-8 text-lg leading-relaxed shadow-inner">
                            {readingPassage}
                        </div>
                        {renderQuestions(readingQuestions, readingAnswers, setReadingAnswers)}
                    </div>
                )}

                {/* Step 4: Listening */}
                {step === 4 && (
                    <div className="animate-fade-in">
                        <h2 className="text-3xl font-black text-slate-800 mb-2">Part 4: Listening</h2>
                        <p className="text-slate-500 mb-8">Listen to the audio (or read the prompt if audio is missing) and answer.</p>
                        <div className="space-y-8">
                            {listeningQuestions.map((q, idx) => (
                                <div key={q.id} className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                                    <p className="font-bold text-slate-800 mb-4 text-lg">
                                        <span className="text-indigo-600 mr-2">{idx + 1}.</span> {q.question}
                                    </p>
                                    
                                    {/* Audio Player Placeholder */}
                                    <div className="bg-white p-4 rounded-lg border border-slate-200 mb-4 flex items-center justify-center text-slate-500">
                                        {q.textPrompt} 
                                    </div>

                                    <div className="space-y-3">
                                        {q.options.map((opt, i) => (
                                            <label key={i} className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 bg-white hover:border-indigo-400 cursor-pointer transition">
                                                <input 
                                                    type="radio" 
                                                    name={q.id} 
                                                    value={opt} 
                                                    checked={listeningAnswers[q.id] === opt}
                                                    onChange={(e) => setListeningAnswers({ ...listeningAnswers, [q.id]: e.target.value })}
                                                    className="w-5 h-5 text-indigo-600"
                                                />
                                                <span className="text-slate-700">{opt}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Step 5: Translation */}
                {step === 5 && (
                    <div className="animate-fade-in">
                        <h2 className="text-3xl font-black text-slate-800 mb-2">Part 5: Translation</h2>
                        <p className="text-slate-500 mb-8">Translate the following sentences into English or Bengali.</p>
                        <div className="space-y-8">
                            {translationQuestions.map((q, idx) => (
                                <div key={q.id} className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                                    <div className="flex items-center justify-between mb-4">
                                        <p className="font-bold text-slate-800 text-lg">
                                            <span className="text-indigo-600 mr-2">{idx + 1}.</span> {q.question}
                                        </p>
                                        <span className="bg-indigo-100 text-indigo-700 text-xs font-bold px-2 py-1 rounded-md uppercase tracking-wider">
                                            {q.type === 'b2e' ? 'Bangla to English' : 'English to Bangla'}
                                        </span>
                                    </div>
                                    <textarea
                                        value={translationAnswers[q.id] || ''}
                                        onChange={(e) => setTranslationAnswers({ ...translationAnswers, [q.id]: e.target.value })}
                                        rows={2}
                                        className="w-full p-4 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition resize-none"
                                        placeholder="Type your translation here..."
                                    ></textarea>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Step 6: Live Reading */}
                {step === 6 && (
                    <div className="animate-fade-in">
                        <h2 className="text-3xl font-black text-slate-800 mb-2">Part 6: Live Reading Passages</h2>
                        <p className="text-slate-500 mb-8">These passages are for your live speaking assessment. During your live class or via Voice Note, your instructor will ask you to read one of these passages aloud.</p>
                        <div className="space-y-6 mb-10">
                            {liveReadingPassages.map((p, idx) => (
                                <div key={p.id} className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
                                    <h4 className="font-bold text-amber-900 mb-2">{p.title}</h4>
                                    <p className="text-amber-800 italic leading-relaxed text-lg">"{p.content}"</p>
                                </div>
                            ))}
                        </div>
                        
                        <div className="bg-slate-900 text-white p-8 rounded-2xl text-center shadow-xl">
                            <h3 className="text-2xl font-bold mb-4">You have reached the end of the test!</h3>
                            <p className="text-slate-400 mb-8">Click submit to calculate your score and send your results to the instructor. You will be redirected to the success page.</p>
                            <button 
                                onClick={handleSubmit} 
                                disabled={isSubmitting}
                                className="bg-brand hover:bg-brand-dark text-white px-10 py-4 rounded-xl font-black text-lg transition shadow-lg w-full md:w-auto disabled:opacity-50"
                            >
                                {isSubmitting ? 'Submitting...' : 'Submit Final Test'}
                            </button>
                        </div>
                    </div>
                )}

                {/* Navigation Buttons */}
                {!submitted && step < 6 && (
                    <div className="flex items-center justify-between mt-12 pt-8 border-t border-slate-100">
                        <button 
                            onClick={handlePrev} 
                            disabled={step === 0}
                            className="px-6 py-3 rounded-xl font-bold text-slate-600 hover:bg-slate-100 transition disabled:opacity-30"
                        >
                            Back
                        </button>
                        <button 
                            onClick={handleNext} 
                            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl font-bold transition shadow-lg shadow-indigo-200"
                        >
                            Continue to {['Grammar', 'Phonics', 'Reading', 'Listening', 'Translation', 'Submission'][step]}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
