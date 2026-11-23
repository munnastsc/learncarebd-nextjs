# scripts/generate_exam_html.py
import json
import os

with open("E:/antigravity/ILTES/src/lib/examQuestionsData.ts", "r", encoding="utf-8") as f:
    content = f.read()

# Extract JSON array
start_idx = content.find("[")
end_idx = content.rfind("]") + 1
questions_json = content[start_idx:end_idx]

html_template = f"""<!DOCTYPE html>
<html lang="bn">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LearnCare Academy • 100 Tenses & Modal Verbs Master Diagnostic Exam</title>
    <link rel="stylesheet" href="https://fonts.maateen.me/kalpurush/font.css">
    <style>
        :root {{
            --primary: #4f46e5;
            --primary-dark: #3730a3;
            --emerald: #059669;
            --rose: #e11d48;
            --amber: #d97706;
            --slate-900: #0f172a;
            --slate-800: #1e293b;
            --slate-100: #f1f5f9;
            --text-dark: #0f172a;
            --text-muted: #64748b;
            --border: #e2e8f0;
        }}
        * {{
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: 'Kalpurush', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }}
        body {{
            background: #f8fafc;
            color: var(--text-dark);
            line-height: 1.6;
            padding-bottom: 60px;
        }}
        .header {{
            background: var(--slate-900);
            color: white;
            padding: 16px 24px;
            position: sticky;
            top: 0;
            z-index: 100;
            box-shadow: 0 4px 20px rgba(0,0,0,0.15);
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 12px;
        }}
        .header h1 {{
            font-size: 1.1rem;
            font-weight: 800;
            display: flex;
            align-items: center;
            gap: 8px;
        }}
        .badge {{
            background: rgba(245, 158, 11, 0.2);
            color: #fcd34d;
            border: 1px solid rgba(245, 158, 11, 0.4);
            font-size: 0.7rem;
            padding: 2px 8px;
            border-radius: 9999px;
            font-weight: 700;
            text-transform: uppercase;
        }}
        .timer-box {{
            background: rgba(255,255,255,0.1);
            border: 1px solid rgba(255,255,255,0.2);
            padding: 6px 14px;
            border-radius: 12px;
            font-size: 1rem;
            font-weight: 900;
            color: #5eead4;
            font-family: monospace;
            display: flex;
            align-items: center;
            gap: 6px;
        }}
        .timer-box.warning {{
            background: rgba(239, 68, 68, 0.2);
            color: #fca5a5;
            border-color: #ef4444;
            animation: pulse 1s infinite;
        }}
        @keyframes pulse {{
            0%, 100% {{ opacity: 1; }}
            50% {{ opacity: 0.6; }}
        }}
        .container {{
            max-width: 960px;
            margin: 24px auto;
            padding: 0 16px;
        }}
        .card {{
            background: white;
            border-radius: 24px;
            border: 1px solid var(--border);
            padding: 24px 32px;
            box-shadow: 0 4px 25px rgba(0,0,0,0.03);
            margin-bottom: 20px;
        }}
        .intro-hero {{
            background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%);
            color: white;
            padding: 40px;
            border-radius: 28px;
            border: 2px solid rgba(99, 102, 241, 0.3);
            box-shadow: 0 20px 40px rgba(15, 23, 42, 0.3);
            text-align: center;
        }}
        .intro-hero h2 {{
            font-size: 2rem;
            font-weight: 900;
            margin: 12px 0;
        }}
        .btn-start {{
            background: linear-gradient(135deg, #10b981 0%, #059669 100%);
            color: white;
            border: none;
            padding: 16px 36px;
            font-size: 1.1rem;
            font-weight: 900;
            border-radius: 16px;
            cursor: pointer;
            box-shadow: 0 8px 20px rgba(16, 185, 129, 0.35);
            transition: all 0.2s;
            margin-top: 20px;
        }}
        .btn-start:hover {{
            transform: translateY(-2px);
            box-shadow: 0 12px 25px rgba(16, 185, 129, 0.45);
        }}
        .progress-bar-container {{
            background: white;
            padding: 16px 24px;
            border-radius: 18px;
            border: 1px solid var(--border);
            margin-bottom: 16px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 16px;
            flex-wrap: wrap;
        }}
        .bar-wrap {{
            flex: 1;
            min-width: 200px;
        }}
        .bar-bg {{
            height: 10px;
            background: #e2e8f0;
            border-radius: 9999px;
            overflow: hidden;
            margin-top: 6px;
        }}
        .bar-fill {{
            height: 100%;
            background: linear-gradient(90deg, #6366f1, #10b981);
            width: 0%;
            transition: width 0.3s;
        }}
        .filter-pills {{
            display: flex;
            gap: 6px;
        }}
        .filter-btn {{
            padding: 6px 12px;
            border-radius: 8px;
            border: 1px solid var(--border);
            background: #f8fafc;
            font-size: 0.8rem;
            font-weight: 700;
            cursor: pointer;
        }}
        .filter-btn.active {{
            background: var(--slate-900);
            color: white;
            border-color: var(--slate-900);
        }}
        .q-meta {{
            display: flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 12px;
        }}
        .q-number {{
            background: var(--slate-900);
            color: white;
            padding: 2px 10px;
            border-radius: 8px;
            font-weight: 800;
            font-size: 0.85rem;
        }}
        .q-cat {{
            background: #e0e7ff;
            color: #3730a3;
            padding: 2px 10px;
            border-radius: 9999px;
            font-size: 0.8rem;
            font-weight: 700;
        }}
        .q-prompt {{
            font-size: 0.9rem;
            color: var(--text-muted);
            margin-bottom: 6px;
            font-weight: 600;
        }}
        .q-sentence {{
            font-size: 1.25rem;
            font-weight: 800;
            color: var(--slate-900);
            margin-bottom: 20px;
            line-height: 1.4;
        }}
        .options-grid {{
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
        }}
        @media (max-width: 640px) {{
            .options-grid {{
                grid-template-columns: 1fr;
            }}
        }}
        .option-card {{
            padding: 14px 18px;
            border-radius: 14px;
            border: 2px solid var(--border);
            background: white;
            cursor: pointer;
            transition: all 0.2s;
            font-size: 0.95rem;
            font-weight: 600;
            display: flex;
            align-items: center;
            gap: 12px;
        }}
        .option-card:hover {{
            border-color: #cbd5e1;
            background: #f8fafc;
        }}
        .option-card.selected {{
            border-color: var(--primary);
            background: #eef2ff;
            color: var(--primary-dark);
            font-weight: 800;
        }}
        .opt-letter {{
            width: 28px;
            height: 28px;
            border-radius: 8px;
            background: #f1f5f9;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 800;
            font-size: 0.8rem;
            color: var(--slate-800);
        }}
        .option-card.selected .opt-letter {{
            background: var(--primary);
            color: white;
        }}
        .nav-buttons {{
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 24px;
            padding-top: 18px;
            border-top: 1px solid var(--border);
        }}
        .btn-nav {{
            padding: 10px 20px;
            border-radius: 10px;
            border: 1px solid var(--border);
            background: white;
            font-weight: 700;
            font-size: 0.85rem;
            cursor: pointer;
        }}
        .btn-nav.primary {{
            background: var(--slate-900);
            color: white;
            border-color: var(--slate-900);
        }}
        .btn-submit {{
            background: #10b981;
            color: white;
            border: none;
            padding: 10px 24px;
            border-radius: 12px;
            font-weight: 800;
            font-size: 0.9rem;
            cursor: pointer;
        }}
        .matrix-palette {{
            display: grid;
            grid-template-columns: repeat(20, 1fr);
            gap: 4px;
            margin-top: 10px;
        }}
        @media (max-width: 768px) {{
            .matrix-palette {{
                grid-template-columns: repeat(10, 1fr);
            }}
        }}
        .matrix-btn {{
            height: 30px;
            border-radius: 6px;
            border: 1px solid var(--border);
            background: #f1f5f9;
            font-size: 0.75rem;
            font-weight: 700;
            cursor: pointer;
        }}
        .matrix-btn.answered {{
            background: #d1fae5;
            color: #065f46;
            border-color: #a7f3d0;
        }}
        .matrix-btn.current {{
            background: var(--primary);
            color: white;
            border-color: var(--primary);
        }}
        .score-hero {{
            background: linear-gradient(135deg, #0f172a 0%, #312e81 100%);
            color: white;
            padding: 40px;
            border-radius: 28px;
            border: 2px solid rgba(129, 140, 248, 0.4);
            margin-bottom: 24px;
        }}
        .score-num {{
            font-size: 3.5rem;
            font-weight: 900;
            color: #fcd34d;
        }}
        .compliment-box {{
            background: rgba(255,255,255,0.1);
            border: 1px solid rgba(255,255,255,0.2);
            padding: 18px 22px;
            border-radius: 18px;
            margin-top: 16px;
            font-size: 0.95rem;
            line-height: 1.6;
        }}
        .weakness-badge {{
            display: inline-block;
            background: #ffe4e6;
            color: #9f1239;
            border: 1px solid #fecdd3;
            padding: 4px 12px;
            border-radius: 8px;
            font-size: 0.8rem;
            font-weight: 700;
            margin: 4px;
        }}
        .mistake-card {{
            background: white;
            border: 2px solid #fecdd3;
            border-radius: 18px;
            padding: 18px 22px;
            margin-bottom: 14px;
        }}
    </style>
</head>
<body>

    <header class="header">
        <h1>
            <span>🏆 LearnCare Academy</span>
            <span class="badge">100 Marks Spoken Exam</span>
        </h1>
        <div id="examTimer" class="timer-box" style="display: none;">
            ⏱️ <span id="timerText">30:00</span>
        </div>
    </header>

    <div class="container">
        <!-- SCREEN 1: INTRO -->
        <div id="introScreen" class="intro-hero">
            <span class="badge" style="background: rgba(255,255,255,0.15); color: white;">Online Diagnostic Test</span>
            <h2>১০০ মার্কসের আল্টিমেট স্পোকেন ইংলিশ টেস্ট</h2>
            <p style="color: #cbd5e1; max-width: 650px; margin: 0 auto; font-size: 1rem;">
                ৯টি টেন্স (Present, Past, Future: Simple, Continuous, Perfect) এবং 
                Had better ও Would rather বাদে বাকি সকল গুরুত্বপূর্ণ মোডাল ভার্বস-এর ওপর ৩০ মিনিটের রিয়েল-লাইফ ডায়াগনস্টিক পরীক্ষা।
            </p>

            <div style="margin: 25px auto 10px; max-width: 320px; text-align: left;">
                <label style="font-size: 0.85rem; font-weight: 700; color: #cbd5e1;">আপনার নাম লিখুন:</label>
                <input type="text" id="studentNameInput" placeholder="যেমন: তানভীর আহমেদ" 
                    style="width: 100%; padding: 12px 16px; border-radius: 12px; border: 1px solid #475569; background: #1e293b; color: white; margin-top: 5px; font-size: 0.95rem;">
            </div>

            <button class="btn-start" onclick="startExam()">পরীক্ষা শুরু করুন (Start 30-Min Test) →</button>
        </div>

        <!-- SCREEN 2: ACTIVE EXAM -->
        <div id="examScreen" style="display: none;">
            <div class="progress-bar-container">
                <div class="bar-wrap">
                    <div style="display: flex; justify-content: space-between; font-size: 0.85rem; font-weight: 700;">
                        <span>উত্তর সম্পন্ন: <span id="answeredCount">0</span> / 100</span>
                        <span id="currentQNum">প্রশ্ন #1</span>
                    </div>
                    <div class="bar-bg">
                        <div id="progressBar" class="bar-fill"></div>
                    </div>
                </div>
                <button class="btn-submit" onclick="submitExam()">পরীক্ষা জমা দিন (Submit)</button>
            </div>

            <!-- Question Card -->
            <div class="card" id="qCard">
                <div class="q-meta">
                    <span class="q-number" id="qBadge">Q1 / 100</span>
                    <span class="q-cat" id="qSubCategory">Present Simple</span>
                    <span class="q-prompt" id="qPattern" style="margin-bottom: 0;">শূন্যস্থান পূরণ</span>
                </div>
                <div class="q-prompt" id="qPromptBn">বাংলা প্রসঙ্গ...</div>
                <div class="q-sentence" id="qSentence">Question Sentence Here...</div>

                <div class="options-grid" id="optionsContainer">
                    <!-- Dynamic Options -->
                </div>

                <div class="nav-buttons">
                    <button class="btn-nav" onclick="prevQuestion()" id="btnPrev">← পূর্ববর্তী</button>
                    <span id="statusIndicator" style="font-size: 0.85rem; font-weight: 700; color: #d97706;">বাকি আছে</span>
                    <button class="btn-nav primary" onclick="nextQuestion()" id="btnNext">পরবর্তী →</button>
                </div>
            </div>

            <!-- Question Matrix Palette -->
            <div class="card" style="padding: 16px 20px;">
                <div style="display: flex; justify-content: space-between; font-size: 0.8rem; font-weight: 700; margin-bottom: 6px;">
                    <span>প্রশ্ন প্যানেল (১ - ১০০) — সরাসরি যেতে ক্লিক করুন:</span>
                    <span id="matrixStatus">0 উত্তর সম্পন্ন</span>
                </div>
                <div class="matrix-palette" id="matrixContainer"></div>
            </div>
        </div>

        <!-- SCREEN 3: RESULT -->
        <div id="resultScreen" style="display: none;">
            <div class="score-hero">
                <span class="badge" style="background: rgba(255,255,255,0.2); color: white;">Final Diagnostic Result</span>
                <h2 id="resStudentName" style="font-size: 1.8rem; margin: 10px 0 5px;">ফলাফল শিট</h2>
                <div style="display: flex; align-items: baseline; gap: 8px;">
                    <div class="score-num" id="resScore">0</div>
                    <div style="font-size: 1.5rem; color: #cbd5e1;">/ 100</div>
                    <div id="resGrade" style="margin-left: 20px; font-size: 1.2rem; font-weight: 800; color: #5eead4;">Grade A+</div>
                </div>
                <p id="resTimeTaken" style="font-size: 0.85rem; color: #cbd5e1; margin-top: 5px;"></p>

                <div class="compliment-box" id="resCompliment"></div>

                <div style="margin-top: 20px;" id="resWeaknessesContainer"></div>
            </div>

            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
                <h3 style="font-size: 1.2rem; font-weight: 800;">📝 প্রতিটি ভুলের কারণ ও সঠিক ব্যাখ্যা</h3>
                <button onclick="window.print()" class="btn-nav" style="background: #1e293b; color: white;">🖨️ প্রিন্ট / সেভ করুন</button>
            </div>

            <div id="mistakesContainer"></div>
        </div>
    </div>

    <script>
        const QUESTIONS = {questions_json};

        let currentIndex = 0;
        let userAnswers = {{}};
        let timeLeft = 30 * 60;
        let timerInterval = null;

        function startExam() {{
            const name = document.getElementById('studentNameInput').value.trim() || 'Learner';
            document.getElementById('introScreen').style.display = 'none';
            document.getElementById('examScreen').style.display = 'block';
            document.getElementById('examTimer').style.display = 'flex';

            renderMatrix();
            showQuestion(0);

            timerInterval = setInterval(() => {{
                timeLeft--;
                const mins = Math.floor(timeLeft / 60).toString().padStart(2, '0');
                const secs = (timeLeft % 60).toString().padStart(2, '0');
                const tEl = document.getElementById('timerText');
                tEl.innerText = mins + ':' + secs;

                if (timeLeft < 300) {{
                    document.getElementById('examTimer').classList.add('warning');
                }}

                if (timeLeft <= 0) {{
                    clearInterval(timerInterval);
                    submitExam();
                }}
            }}, 1000);
        }}

        function renderMatrix() {{
            const m = document.getElementById('matrixContainer');
            m.innerHTML = '';
            QUESTIONS.forEach((q, idx) => {{
                const btn = document.createElement('button');
                btn.className = 'matrix-btn' + (idx === currentIndex ? ' current' : '') + (userAnswers[q.id] !== undefined ? ' answered' : '');
                btn.innerText = q.id;
                btn.onclick = () => showQuestion(idx);
                m.appendChild(btn);
            }});
        }}

        function showQuestion(idx) {{
            currentIndex = idx;
            const q = QUESTIONS[idx];

            document.getElementById('qBadge').innerText = 'Q' + q.id + ' / 100';
            document.getElementById('qSubCategory').innerText = q.subCategory;
            document.getElementById('qPattern').innerText = q.patternBn;
            document.getElementById('qPromptBn').innerText = q.promptBn ? '💡 ' + q.promptBn : '';
            document.getElementById('qSentence').innerText = q.sentence;
            document.getElementById('currentQNum').innerText = 'প্রশ্ন #' + q.id;

            const optContainer = document.getElementById('optionsContainer');
            optContainer.innerHTML = '';

            q.options.forEach((opt, optIdx) => {{
                const isSel = userAnswers[q.id] === optIdx;
                const d = document.createElement('div');
                d.className = 'option-card' + (isSel ? ' selected' : '');
                d.innerHTML = '<span class="opt-letter">' + String.fromCharCode(65 + optIdx) + '</span><span>' + opt + '</span>';
                d.onclick = () => {{
                    userAnswers[q.id] = optIdx;
                    showQuestion(currentIndex);
                    updateProgress();
                }};
                optContainer.appendChild(d);
            }});

            const status = document.getElementById('statusIndicator');
            if (userAnswers[q.id] !== undefined) {{
                status.innerText = '✓ উত্তর দেওয়া হয়েছে';
                status.style.color = '#059669';
            }} else {{
                status.innerText = 'বাকি আছে';
                status.style.color = '#d97706';
            }}

            document.getElementById('btnPrev').disabled = (currentIndex === 0);
            document.getElementById('btnNext').disabled = (currentIndex === QUESTIONS.length - 1);

            renderMatrix();
        }}

        function nextQuestion() {{
            if (currentIndex < QUESTIONS.length - 1) showQuestion(currentIndex + 1);
        }}

        function prevQuestion() {{
            if (currentIndex > 0) showQuestion(currentIndex - 1);
        }}

        function updateProgress() {{
            const ansCount = Object.keys(userAnswers).length;
            document.getElementById('answeredCount').innerText = ansCount;
            document.getElementById('matrixStatus').innerText = ansCount + ' উত্তর সম্পন্ন';
            const pct = Math.round((ansCount / QUESTIONS.length) * 100);
            document.getElementById('progressBar').style.width = pct + '%';
        }}

        function submitExam() {{
            if (timerInterval) clearInterval(timerInterval);

            const duration = (30 * 60) - timeLeft;
            let score = 0;
            let tensesScore = 0;
            let modalsScore = 0;
            const mistakes = [];
            const weaknessCount = {{}};

            QUESTIONS.forEach((q) => {{
                const picked = userAnswers[q.id];
                if (picked === q.correctAnswer) {{
                    score++;
                    if (q.category === 'tenses') tensesScore++;
                    if (q.category === 'modals') modalsScore++;
                }} else {{
                    mistakes.push({{
                        qId: q.id,
                        subCategory: q.subCategory,
                        sentence: q.sentence,
                        userChoice: picked !== undefined ? q.options[picked] : 'উত্তর দেওয়া হয়নি',
                        correctChoice: q.options[q.correctAnswer],
                        explanation: q.explanationBn
                    }});
                    weaknessCount[q.subCategory] = (weaknessCount[q.subCategory] || 0) + 1;
                }});

            let grade = 'Needs Practice';
            if (score >= 90) grade = 'Grade A+ (Elite Mastery)';
            else if (score >= 80) grade = 'Grade A (Fluent)';
            else if (score >= 70) grade = 'Grade B+ (Competent)';
            else if (score >= 60) grade = 'Grade B (Developing)';

            let compliment = '';
            if (score >= 85) {{
                compliment = 'অসাধারণ ফলাফল! আপনি ১০০ নম্বরের পরীক্ষায় ' + score + '% মার্কস অর্জন করেছেন। টেন্স ও মোডালের বাক্য গঠনে আপনার দক্ষতা প্রশংসনীয়!';
            }} else if (score >= 70) {{
                compliment = 'বেশ ভালো চেষ্টা! আপনার ব্যাকরণের ভিত্তি মজবুত। যে কয়েকটি ভুল হয়েছে তার সঠিক রূপ নিচে দেখে নিন।';
            }} else {{
                compliment = 'পরীক্ষাটি সম্পন্ন করায় সাধুবাদ! নিচে দেওয়া ভুলগুলোর বাংলা ব্যাখ্যা পড়ে রিভিশন দিলে খুব দ্রুত উন্নতি হবে।';
            }}

            // Show Screen
            document.getElementById('examScreen').style.display = 'none';
            document.getElementById('examTimer').style.display = 'none';
            document.getElementById('resultScreen').style.display = 'block';

            const name = document.getElementById('studentNameInput').value.trim() || 'Learner';
            document.getElementById('resStudentName').innerText = name + '-এর পরীক্ষার ফলাফল';
            document.getElementById('resScore').innerText = score;
            document.getElementById('resGrade').innerText = grade;
            document.getElementById('resTimeTaken').innerText = 'সময় লেগেছে: ' + Math.floor(duration / 60) + ' মিনিট ' + (duration % 60) + ' সেকেন্ড';
            document.getElementById('resCompliment').innerHTML = '<strong>💡 এআই মূল্যায়ন ও প্রশংসা:</strong> ' + compliment;

            // Weaknesses
            const weakEl = document.getElementById('resWeaknessesContainer');
            const weakKeys = Object.keys(weaknessCount);
            if (weakKeys.length > 0) {{
                let html = '<div style="font-size: 0.85rem; font-weight: 700; margin-bottom: 6px;">দুর্বলতার ক্ষেত্রসমূহ:</div>';
                weakKeys.forEach(k => {{
                    html += '<span class="weakness-badge">⚠️ ' + k + ' (' + weaknessCount[k] + 'টি ভুল)</span>';
                }});
                weakEl.innerHTML = html;
            }}

            // Mistakes List
            const mEl = document.getElementById('mistakesContainer');
            mEl.innerHTML = '';
            if (mistakes.length === 0) {{
                mEl.innerHTML = '<div class="card" style="text-align: center; color: #059669; font-weight: 800;">🎉 একটি ভুলও হয়নি! আপনি পূর্ণ ১০০ নম্বর পেয়েছেন!</div>';
            }} else {{
                mistakes.forEach(m => {{
                    const d = document.createElement('div');
                    d.className = 'mistake-card';
                    d.innerHTML = `
                        <div style="display:flex; justify-content:space-between; font-size:0.8rem; font-weight:700; margin-bottom:6px;">
                            <span>প্রশ্ন #${{m.qId}} (${{m.subCategory}})</span>
                            <span style="color:#e11d48;">❌ ভুল উত্তর</span>
                        </div>
                        <div style="font-size:1.05rem; font-weight:800; margin-bottom:10px;">${{m.sentence}}</div>
                        <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; font-size:0.85rem; margin-bottom:10px;">
                            <div style="background:#fff1f2; padding:8px 12px; border-radius:8px; border:1px solid #fecdd3;">
                                <strong>আপনার উত্তর:</strong> ${{m.userChoice}}
                            </div>
                            <div style="background:#ecfdf5; padding:8px 12px; border-radius:8px; border:1px solid #a7f3d0;">
                                <strong>সঠিক উত্তর:</strong> ${{m.correctChoice}}
                            </div>
                        </div>
                        <div style="font-size:0.85rem; background:#f8fafc; padding:8px 12px; border-radius:8px; color:#475569;">
                            <strong>ব্যাখ্যা:</strong> ${{m.explanation}}
                        </div>
                    `;
                    mEl.appendChild(d);
                }});
            }}

            // Sync to API in background if online
            try {{
                fetch('/api/exam-submissions', {{
                    method: 'POST',
                    headers: {{ 'Content-Type': 'application/json' }},
                    body: JSON.stringify({{
                        studentName: name,
                        score: score,
                        total: 100,
                        percentage: score,
                        grade: grade,
                        timeTakenSeconds: duration,
                        tensesScore: tensesScore,
                        modalsScore: modalsScore,
                        compliment: compliment,
                        weaknesses: weakKeys.map(k => k + ' (' + weaknessCount[k] + ')'),
                        mistakes: mistakes
                    }})
                }}).catch(() => {{}});
            }} catch(e) {{}}
        }}
    </script>
</body>
</html>
"""

# Write to public/academy-labs
out1 = "E:/antigravity/ILTES/public/academy-labs/Tenses_and_Modals_100_Master_Exam_Lab.html"
with open(out1, "w", encoding="utf-8") as f:
    f.write(html_template)
print(f"Generated {out1}")

# Write to F:/LearnCare Academy/html code
out2 = "F:/LearnCare Academy/html code/Tenses_and_Modals_100_Master_Exam_Lab.html"
with open(out2, "w", encoding="utf-8") as f:
    f.write(html_template)
print(f"Generated {out2}")
