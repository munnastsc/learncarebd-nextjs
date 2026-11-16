# -*- coding: utf-8 -*-
"""
Generator for LearnCare Academy - Causative Verbs Master Interactive Practice Lab
Covers: Make, Have, Get, Let, Help (Active & Passive Causative Structures)
"""
import os

HTML_TEMPLATE = """<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LearnCare Academy - Causative Verbs Master Interactive Practice Lab (Make, Have, Get, Let, Help)</title>
    <style>
        :root {
            --bg-color: #f8fafc;
            --card-bg: #ffffff;
            --primary: #2563eb;
            --primary-dark: #1d4ed8;
            --secondary: #d97706;
            --accent: #059669;
            --purple: #7c3aed;
            --rose: #e11d48;
            --text-color: #0f172a;
            --text-muted: #64748b;
            --border-color: #e2e8f0;
            --shadow: 0 10px 25px rgba(0, 0, 0, 0.06);
            --3d-shadow: 0 8px 0px #1d4ed8, 0 12px 20px rgba(0, 0, 0, 0.12);
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        body {
            background-color: var(--bg-color);
            color: var(--text-color);
            font-size: 19px;
            line-height: 1.7;
            padding: 25px 15px;
        }

        .container {
            max-width: 1280px;
            margin: 0 auto;
        }

        header {
            background: linear-gradient(135deg, #1e3a8a, #2563eb, #0d9488);
            color: white;
            text-align: center;
            padding: 50px 25px;
            border-radius: 24px;
            box-shadow: var(--shadow);
            margin-bottom: 35px;
            position: relative;
            overflow: hidden;
        }

        header .academy-badge {
            display: inline-block;
            background: rgba(255, 255, 255, 0.18);
            backdrop-filter: blur(8px);
            padding: 6px 20px;
            border-radius: 30px;
            font-size: 0.95rem;
            font-weight: 700;
            letter-spacing: 1.2px;
            text-transform: uppercase;
            margin-bottom: 15px;
            border: 1px solid rgba(255, 255, 255, 0.3);
        }

        header h1 {
            font-size: 2.8rem;
            font-weight: 900;
            margin-bottom: 12px;
            letter-spacing: -0.5px;
        }

        header p {
            font-size: 1.25rem;
            opacity: 0.95;
            max-width: 960px;
            margin: 0 auto 20px;
        }

        .badge-bar {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 12px;
            margin-top: 15px;
        }

        .badge {
            background: rgba(255, 255, 255, 0.18);
            backdrop-filter: blur(5px);
            padding: 6px 18px;
            border-radius: 30px;
            font-size: 0.95rem;
            font-weight: 700;
            border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .nav-pills {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            justify-content: center;
            margin-bottom: 30px;
            padding: 15px;
            background: white;
            border-radius: 16px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.04);
            border: 1px solid var(--border-color);
        }

        .nav-pill {
            background: #f1f5f9;
            color: #1e3a8a;
            padding: 9px 20px;
            border-radius: 20px;
            text-decoration: none;
            font-weight: 700;
            font-size: 0.95rem;
            transition: all 0.2s ease;
            border: 1px solid #cbd5e1;
        }

        .nav-pill:hover {
            background: #2563eb;
            color: white;
            transform: translateY(-2px);
        }

        section {
            background: var(--card-bg);
            border-radius: 20px;
            padding: 35px 30px;
            margin-bottom: 35px;
            box-shadow: var(--shadow);
            border: 1px solid var(--border-color);
        }

        h2 {
            color: var(--primary);
            font-size: 1.85rem;
            font-weight: 800;
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            gap: 10px;
            border-bottom: 2px solid #f1f5f9;
            padding-bottom: 12px;
        }

        h3 {
            color: var(--text-color);
            font-size: 1.35rem;
            margin: 25px 0 15px;
        }

        p, li {
            margin-bottom: 12px;
            color: var(--text-color);
        }

        .rule-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
            margin: 25px 0;
        }

        .rule-card {
            background: #f8fafc;
            border: 2px solid #e2e8f0;
            border-radius: 16px;
            padding: 22px;
            border-top: 5px solid var(--primary);
            transition: transform 0.2s ease;
        }

        .rule-card:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 20px rgba(0,0,0,0.06);
        }

        .rule-card.make { border-top-color: #ef4444; }
        .rule-card.have { border-top-color: #3b82f6; }
        .rule-card.get { border-top-color: #10b981; }
        .rule-card.let { border-top-color: #f59e0b; }
        .rule-card.help { border-top-color: #8b5cf6; }

        .formula-tag {
            display: inline-block;
            background: #0f172a;
            color: #38bdf8;
            padding: 6px 14px;
            border-radius: 8px;
            font-family: 'Consolas', monospace;
            font-size: 0.95rem;
            font-weight: 700;
            margin: 8px 0 12px;
        }

        .example-box {
            background: #ffffff;
            border: 1px solid #e2e8f0;
            border-radius: 10px;
            padding: 12px 16px;
            margin-top: 10px;
            font-size: 1.05rem;
        }

        .example-box .en {
            font-weight: 700;
            color: #1e3a8a;
        }

        .example-box .bn {
            color: #475569;
            font-size: 0.95rem;
            margin-top: 4px;
        }

        .comparison-table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 15px rgba(0,0,0,0.04);
        }

        .comparison-table th, .comparison-table td {
            padding: 14px 18px;
            text-align: left;
            border-bottom: 1px solid var(--border-color);
            font-size: 1.05rem;
        }

        .comparison-table th {
            background: #eff6ff;
            color: #1e3a8a;
            font-weight: 800;
        }

        .comparison-table tr:hover {
            background: #f8fafc;
        }

        .mistake-box {
            background: #fef2f2;
            border: 2px solid #fecaca;
            border-radius: 14px;
            padding: 20px;
            margin: 20px 0;
        }

        .mistake-item {
            display: flex;
            align-items: flex-start;
            gap: 12px;
            margin-bottom: 12px;
            font-size: 1.05rem;
        }

        /* 100 Translation Drills */
        .translation-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
            gap: 16px;
            margin-top: 20px;
        }

        .drill-card {
            background: #f8fafc;
            border: 2px solid #e2e8f0;
            border-radius: 14px;
            padding: 18px 20px;
            cursor: pointer;
            transition: all 0.2s ease;
        }

        .drill-card:hover {
            background: #eff6ff;
            border-color: #3b82f6;
            transform: translateY(-2px);
        }

        .drill-prompt {
            font-weight: 700;
            color: #1e3a8a;
            font-size: 1.12rem;
            margin-bottom: 8px;
        }

        .drill-reveal {
            display: none;
            color: #059669;
            font-weight: 600;
            font-size: 1.08rem;
            border-top: 1px dashed #cbd5e1;
            padding-top: 8px;
            margin-top: 8px;
        }

        .card-hint {
            font-size: 0.85rem;
            color: #64748b;
            font-style: italic;
        }

        /* Interactive Dashboard */
        .gap-dashboard-card {
            background: linear-gradient(135deg, #1e3a8a, #0d9488);
            color: white;
            padding: 25px;
            border-radius: 18px;
            margin: 25px 0 30px;
            box-shadow: 0 10px 25px rgba(13, 148, 136, 0.25);
            text-align: center;
        }

        .gap-stats-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 15px;
            margin-bottom: 15px;
        }

        .gap-stat-box {
            background: rgba(255, 255, 255, 0.15);
            padding: 12px;
            border-radius: 14px;
            border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .gap-stat-num {
            font-size: 2rem;
            font-weight: 900;
        }

        .gap-stat-label {
            font-size: 0.9rem;
            opacity: 0.9;
            font-weight: 600;
        }

        .gap-progress-track {
            width: 100%;
            height: 12px;
            background: rgba(255, 255, 255, 0.25);
            border-radius: 10px;
            overflow: hidden;
            margin-bottom: 20px;
        }

        .gap-progress-bar {
            height: 100%;
            background: linear-gradient(90deg, #10b981, #38bdf8);
            width: 0%;
            transition: width 0.3s ease;
        }

        .gap-controls-row {
            display: flex;
            gap: 12px;
            flex-wrap: wrap;
            justify-content: center;
        }

        .btn-gap-master {
            padding: 10px 20px;
            border-radius: 12px;
            font-size: 1rem;
            font-weight: 700;
            cursor: pointer;
            border: none;
            transition: all 0.2s ease;
        }

        .btn-check-all { background: #10b981; color: white; }
        .btn-check-all:hover { background: #059669; }
        .btn-reset-all { background: #ef4444; color: white; }
        .btn-reset-all:hover { background: #dc2626; }
        .btn-reveal-key { background: #6366f1; color: white; }
        .btn-reveal-key:hover { background: #4f46e5; }

        /* Fill in Blanks Items */
        .fill-in-box {
            display: flex;
            flex-direction: column;
            gap: 14px;
            margin-top: 15px;
        }

        .fill-in-item {
            background: #ffffff;
            border: 2px solid #e2e8f0;
            border-radius: 14px;
            padding: 16px 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 15px;
            flex-wrap: wrap;
            transition: all 0.2s ease;
        }

        .fill-in-item:hover {
            border-color: #cbd5e1;
            box-shadow: 0 4px 12px rgba(0,0,0,0.04);
        }

        .fill-sentence-wrap {
            font-size: 1.15rem;
            color: #1e293b;
            line-height: 1.8;
            flex-grow: 1;
        }

        .fill-sentence-wrap strong {
            color: #2563eb;
            margin-right: 6px;
        }

        .gap-input {
            display: inline-block;
            padding: 6px 14px;
            font-size: 1.1rem;
            font-weight: 700;
            border: 2px solid #94a3b8;
            border-radius: 10px;
            background: #f8fafc;
            color: #0f172a;
            min-width: 140px;
            max-width: 220px;
            margin: 2px 6px;
            outline: none;
            transition: all 0.2s ease;
            vertical-align: middle;
        }

        .gap-input:focus {
            border-color: #2563eb;
            background: #ffffff;
            box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.15);
        }

        .gap-input.correct {
            border-color: #10b981 !important;
            background: #ecfdf5 !important;
            color: #065f46 !important;
        }

        .gap-input.wrong {
            border-color: #ef4444 !important;
            background: #fef2f2 !important;
            color: #991b1b !important;
        }

        .gap-actions {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-shrink: 0;
        }

        .btn-check-single {
            padding: 8px 18px;
            font-size: 0.95rem;
            font-weight: 700;
            border-radius: 10px;
            border: 1px solid #cbd5e1;
            background: #f1f5f9;
            color: #334155;
            cursor: pointer;
            transition: all 0.15s ease;
        }

        .btn-check-single:hover {
            background: #e2e8f0;
            color: #0f172a;
        }

        .gap-feedback {
            font-size: 1rem;
            font-weight: 700;
            white-space: nowrap;
        }

        .badge-correct {
            background: #d1fae5;
            color: #065f46;
            padding: 5px 12px;
            border-radius: 8px;
            border: 1px solid #a7f3d0;
            font-size: 0.9rem;
        }

        .badge-wrong {
            background: #fee2e2;
            color: #991b1b;
            padding: 5px 12px;
            border-radius: 8px;
            border: 1px solid #fecaca;
            font-size: 0.9rem;
        }

        .answer-key-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 10px;
            margin-top: 20px;
            padding: 20px;
            background: #f8fafc;
            border-radius: 14px;
            border: 2px solid #e2e8f0;
        }

        .answer-key-item {
            background: white;
            padding: 8px 14px;
            border-radius: 8px;
            border: 1px solid #cbd5e1;
            font-size: 0.95rem;
        }

        .answer-key-item strong {
            color: #2563eb;
        }

        /* MCQ Styles */
        .mcq-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
            gap: 20px;
            margin-top: 20px;
        }

        .mcq-card {
            background: #f8fafc;
            border: 2px solid #e2e8f0;
            border-radius: 14px;
            padding: 20px;
        }

        .mcq-question {
            font-size: 1.15rem;
            font-weight: 700;
            color: #1e3a8a;
            margin-bottom: 12px;
        }

        .mcq-options {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .mcq-opt-btn {
            background: white;
            border: 1px solid #cbd5e1;
            border-radius: 10px;
            padding: 10px 14px;
            font-size: 1rem;
            cursor: pointer;
            text-align: left;
            transition: all 0.2s ease;
        }

        .mcq-opt-btn:hover {
            background: #eff6ff;
            border-color: #3b82f6;
        }

        .mcq-opt-btn.correct {
            background: #d1fae5 !important;
            border-color: #10b981 !important;
            color: #065f46 !important;
            font-weight: bold;
        }

        .mcq-opt-btn.wrong {
            background: #fee2e2 !important;
            border-color: #ef4444 !important;
            color: #991b1b !important;
        }

        .mcq-explanation {
            display: none;
            margin-top: 10px;
            padding: 8px 12px;
            background: #eff6ff;
            border-left: 4px solid #2563eb;
            border-radius: 6px;
            font-size: 0.95rem;
            color: #1e3a8a;
        }

        @media (max-width: 768px) {
            .fill-in-item {
                flex-direction: column;
                align-items: flex-start;
            }
            .gap-actions {
                width: 100%;
                justify-content: space-between;
            }
            .gap-input {
                width: 100%;
                max-width: 100%;
                margin: 6px 0;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <div class="academy-badge">Special Power Structure Master Lab • LearnCare Academy Spoken English</div>
            <h1>Causative Verbs Master Practice Lab</h1>
            <p>নিজে না করে অন্যকে দিয়ে কাজ করানো বা সুযোগ দেওয়ার সম্পূর্ণ আর্ট — Make, Have, Get, Let &amp; Help (Active &amp; Passive Causative)</p>
            <div class="badge-bar">
                <span class="badge">🔥 5 Major Causative Verbs</span>
                <span class="badge">🔄 Active vs Passive Causative</span>
                <span class="badge">🗣️ 100 B2E Translations</span>
                <span class="badge">✍️ 100 Interactive Fill-in-Blanks</span>
                <span class="badge">🎯 20 Diagnostic MCQ Drills</span>
            </div>
        </header>

        <nav class="nav-pills">
            <a href="#theory" class="nav-pill">📖 ১. মূল নিয়ম ও ফর্মুলা</a>
            <a href="#matrix" class="nav-pill">📊 ২. ৫টি ভার্বের তুলনামূলক পার্থক্য</a>
            <a href="#mistakes" class="nav-pill">⚠️ ৩. বাঙালিদের কমন ভুলসমূহ</a>
            <a href="#b2e" class="nav-pill">🗣️ ৪. ১০০টি বাংলা টু ইংরেজি ড্রিল</a>
            <a href="#e2b" class="nav-pill">🔄 ৫. ১০০টি ইংরেজি টু বাংলা ড্রিল</a>
            <a href="#workbook" class="nav-pill">✍️ ৬. ১০০টি ব্ল্যাঙ্ক টেস্ট (Interactive)</a>
            <a href="#mcq" class="nav-pill">🎯 ৭. ২০টি স্পিড কুইজ (MCQ)</a>
        </nav>

        <!-- SECTION 1: THEORY -->
        <section id="theory">
            <h2>📖 ১. Causative Verb কী এবং কেন ব্যবহার করবেন?</h2>
            <p>
                দৈনন্দিন জীবনে আমরা সব কাজ নিজে করি না। অনেক কাজ আমরা অন্যকে দিয়ে <strong>বাধ্য করে</strong>, <strong>দায়িত্ব দিয়ে</strong>, <strong>অনুরোধ বা রাজি করিয়ে</strong>, অথবা <strong>অনুমতি দিয়ে</strong> করিয়ে নিই।
                ইংরেজিতে এই ধরণের ভাব প্রকাশ করতে <strong>Causative Verbs</strong> (প্রযোজক ক্রিয়া) ব্যবহার করা হয়।
            </p>

            <div class="rule-grid">
                <!-- MAKE -->
                <div class="rule-card make">
                    <h3>1. MAKE (বাধ্য করা / মানসিক প্রভাব ফেলা)</h3>
                    <p>কাউকে কোনো কাজ করতে <strong>বাধ্য করা</strong> বা কোনো বিশেষ অনুভূতি তৈরি করা।</p>
                    <div class="formula-tag">Subject + MAKE + Person + V1 (Base Form)</div>
                    <p style="font-size: 0.9rem; color: #dc2626; font-weight: bold;">⚠️ কোনোক্রমেই 'to' বসবে না!</p>
                    <div class="example-box">
                        <div class="en">He made me clean the entire room.</div>
                        <div class="bn">সে আমাকে দিয়ে পুরো ঘর পরিষ্কার করাল।</div>
                    </div>
                    <div class="example-box">
                        <div class="en">The sad movie made her cry.</div>
                        <div class="bn">দুঃখজনক সিনেমাটি তাকে কাঁড়াল।</div>
                    </div>
                </div>

                <!-- HAVE -->
                <div class="rule-card have">
                    <h3>2. HAVE (দায়িত্ব দেওয়া / পারিশ্রমিক দিয়ে করানো)</h3>
                    <p>পেশাদার সেবা নেওয়া বা কাউকে দায়িত্ব দিয়ে কোনো কাজ করিয়ে নেওয়া।</p>
                    <div class="formula-tag">Active: Subject + HAVE + Person + V1 (Base Form)</div>
                    <div class="formula-tag" style="background: #1e3a8a; color: #a5f3fc;">Passive: Subject + HAVE + Object + V3</div>
                    <div class="example-box">
                        <div class="en">I had the mechanic repair my car. (Active)</div>
                        <div class="bn">আমি মেকানিককে দিয়ে গাড়িটি মেরামত করালাম।</div>
                    </div>
                    <div class="example-box">
                        <div class="en">I had my car repaired. (Passive)</div>
                        <div class="bn">আমি আমার গাড়ি মেরামত করিয়ে নিলাম।</div>
                    </div>
                </div>

                <!-- GET -->
                <div class="rule-card get">
                    <h3>3. GET (অনুরোধ / রাজি করিয়ে কাজ করানো)</h3>
                    <p>কাউকে বুঝিয়ে, অনুরোধ করে বা রাজি করিয়ে কোনো কাজ করানো।</p>
                    <div class="formula-tag">Active: Subject + GET + Person + TO + V1</div>
                    <div class="formula-tag" style="background: #065f46; color: #6ee7b7;">Passive: Subject + GET + Object + V3</div>
                    <p style="font-size: 0.9rem; color: #059669; font-weight: bold;">⚠️ Active রূপটিতে অবশ্যই 'to' বসবে!</p>
                    <div class="example-box">
                        <div class="en">I got my brother to lend me some money. (Active)</div>
                        <div class="bn">আমি আমার ভাইকে বুঝিয়ে কিছু টাকা ধার দিতে রাজি করালাম।</div>
                    </div>
                    <div class="example-box">
                        <div class="en">I got my haircut yesterday. (Passive)</div>
                        <div class="bn">আমি গতকাল চুল কাটিয়ে নিয়েছি।</div>
                    </div>
                </div>

                <!-- LET -->
                <div class="rule-card let">
                    <h3>4. LET (অনুমতি দেওয়া / সুযোগ দেওয়া)</h3>
                    <p>কাউকে কোনো কাজ করার অনুমতি বা সুযোগ প্রদান করা।</p>
                    <div class="formula-tag">Subject + LET + Person + V1 (Base Form)</div>
                    <p style="font-size: 0.9rem; color: #d97706; font-weight: bold;">⚠️ কোনোক্রমেই 'to' বসবে না!</p>
                    <div class="example-box">
                        <div class="en">My parents let me go on the tour.</div>
                        <div class="bn">বাবা-মা আমাকে ট্যুরে যাওয়ার অনুমতি দিলেন।</div>
                    </div>
                    <div class="example-box">
                        <div class="en">Please let me explain the situation.</div>
                        <div class="bn">দয়া করে আমাকে পরিস্থিতি ব্যাখ্যা করতে দিন।</div>
                    </div>
                </div>

                <!-- HELP -->
                <div class="rule-card help">
                    <h3>5. HELP (সাহায্য করা)</h3>
                    <p>কাউকে কোনো কাজে সহযোগিতা করা (এক্ষেত্রে 'to' দেওয়া বা না দেওয়া উভয়ই শুদ্ধ)।</p>
                    <div class="formula-tag">Subject + HELP + Person + (TO) + V1</div>
                    <div class="example-box">
                        <div class="en">She helped me finish my project. (বা helped me to finish)</div>
                        <div class="bn">সে আমাকে প্রজেক্ট শেষ করতে সাহায্য করেছিল।</div>
                    </div>
                </div>
            </div>
        </section>

        <!-- SECTION 2: COMPARISON MATRIX -->
        <section id="matrix">
            <h2>📊 ২. ৫টি Causative Verbs-এর তুলনামূলক পার্থক্য ও ব্যবহার</h2>
            <p>একই বাক্য ৫টি ভিন্ন Causative Verb দিয়ে বললে অর্থ কীভাবে বদলে যায় তা নিচে লক্ষ্য করুন:</p>

            <table class="comparison-table">
                <thead>
                    <tr>
                        <th>Verb</th>
                        <th>অর্থ ও মেজাজ (Tone &amp; Meaning)</th>
                        <th>গঠন (Formula)</th>
                        <th>বাস্তব উদাহরণ</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>MAKE</strong></td>
                        <td>বাধ্যবাধকতা (No choice / Forced)</td>
                        <td><code>make + person + V1</code></td>
                        <td>She <strong>made him wash</strong> the dishes. (বাধ্য করল)</td>
                    </tr>
                    <tr>
                        <td><strong>HAVE</strong></td>
                        <td>পেশাদার দায়িত্ব দেওয়া (Authoritative / Paid service)</td>
                        <td><code>have + person + V1</code></td>
                        <td>She <strong>had him wash</strong> the dishes. (দায়িত্ব দিল)</td>
                    </tr>
                    <tr>
                        <td><strong>GET</strong></td>
                        <td>কনভিন্স বা অনুরোধ করা (Persuaded / Convinced)</td>
                        <td><code>get + person + TO + V1</code></td>
                        <td>She <strong>got him to wash</strong> the dishes. (রাজি করাল)</td>
                    </tr>
                    <tr>
                        <td><strong>LET</strong></td>
                        <td>অনুমতি দেওয়া (Permission / Allowed)</td>
                        <td><code>let + person + V1</code></td>
                        <td>She <strong>let him wash</strong> the dishes. (অনুমতি দিল)</td>
                    </tr>
                    <tr>
                        <td><strong>HELP</strong></td>
                        <td>সহযোগিতা করা (Assistance)</td>
                        <td><code>help + person + (to) V1</code></td>
                        <td>She <strong>helped him wash</strong> the dishes. (সাহায্য করল)</td>
                    </tr>
                </tbody>
            </table>
        </section>

        <!-- SECTION 3: COMMON MISTAKES -->
        <section id="mistakes">
            <h2>⚠️ ৩. Causative Verbs ব্যবহারে বাঙালিদের ৫টি বড় ভুল</h2>
            <div class="mistake-box">
                <div class="mistake-item">
                    <span style="color: #ef4444; font-weight: bold; font-size: 1.3rem;">❌</span>
                    <div>
                        <strong>ভুল:</strong> He made me <u>to cry</u>.<br>
                        <span style="color: #059669; font-weight: bold;">✔️ সঠিক:</span> He made me <strong>cry</strong>. (Make-এর পর কখনো 'to' হয় না)
                    </div>
                </div>
                <div class="mistake-item">
                    <span style="color: #ef4444; font-weight: bold; font-size: 1.3rem;">❌</span>
                    <div>
                        <strong>ভুল:</strong> Please let me <u>to speak</u>.<br>
                        <span style="color: #059669; font-weight: bold;">✔️ সঠিক:</span> Please let me <strong>speak</strong>. (Let-এর পর সরাসরি Base Verb বসে)
                    </div>
                </div>
                <div class="mistake-item">
                    <span style="color: #ef4444; font-weight: bold; font-size: 1.3rem;">❌</span>
                    <div>
                        <strong>ভুল:</strong> I got the electrician <u>fix</u> the wiring.<br>
                        <span style="color: #059669; font-weight: bold;">✔️ সঠিক:</span> I got the electrician <strong>to fix</strong> the wiring. (Get-এর ক্ষেত্রে Active-এ অবশ্যই 'to' দিতে হবে)
                    </div>
                </div>
                <div class="mistake-item">
                    <span style="color: #ef4444; font-weight: bold; font-size: 1.3rem;">❌</span>
                    <div>
                        <strong>ভুল:</strong> I cut my hair yesterday. (যদি নিজে না কেটে নাপিত দিয়ে কাটান)<br>
                        <span style="color: #059669; font-weight: bold;">✔️ সঠিক:</span> I <strong>had my hair cut</strong> yesterday. / I <strong>got my hair cut</strong> yesterday.
                    </div>
                </div>
                <div class="mistake-item">
                    <span style="color: #ef4444; font-weight: bold; font-size: 1.3rem;">❌</span>
                    <div>
                        <strong>ভুল:</strong> I will have the technician <u>to install</u> the software.<br>
                        <span style="color: #059669; font-weight: bold;">✔️ সঠিক:</span> I will have the technician <strong>install</strong> the software. (Have-এর পর 'to' বসে না)
                    </div>
                </div>
            </div>
        </section>

        <!-- SECTION 4: 100 B2E DRILLS -->
        <section id="b2e">
            <h2>🗣️ ৪. ১০০টি বাস্তব জীবনের বাংলা থেকে ইংরেজি রূপান্তর ড্রিল (Click to Reveal)</h2>
            <p>প্রতিটি কার্ডে ক্লিক করলেই নির্ভুল ইংরেজি বাক্যটি প্রদর্শিত হবে। জোরে জোরে উচ্চারণ করে মুখে বলুন:</p>
            <div class="translation-grid" id="b2e-grid">
                <!-- Dynamically filled with 100 items -->
            </div>
        </section>

        <!-- SECTION 5: 100 E2B DRILLS -->
        <section id="e2b">
            <h2>🔄 ৫. ১০০টি ইংরেজি থেকে বাংলা অর্থবোধক ড্রিল</h2>
            <p>ইংরেজি বাক্যটি পড়ে মনে মনে বাংলা ভাবুন এবং ক্লিক করে সঠিক বাংলা অর্থ মিলিয়ে নিন:</p>
            <div class="translation-grid" id="e2b-grid">
                <!-- Dynamically filled with 100 items -->
            </div>
        </section>

        <!-- SECTION 6: 100 FILL IN THE BLANKS WORKBOOK -->
        <section id="workbook">
            <h2>✍️ ৬. ১০০টি ব্ল্যাঙ্ক ফিলিং প্র্যাকটিস ও লাইভ স্কোর ট্র্যাকার</h2>
            <p>উপযুক্ত Causative Verb ফর্ম দিয়ে শূন্যস্থান পূরণ করুন। আপনি单个 বাক্যের 'Check' বাটনে ক্লিক করে সাথে সাথে চেক করতে পারেন, অথবা সবার শেষে এক ক্লিকে পুরো স্কোর দেখতে পারেন:</p>

            <div class="gap-dashboard-card">
                <div class="gap-stats-grid">
                    <div class="gap-stat-box">
                        <div class="gap-stat-num" id="gap-score">0 / 100</div>
                        <div class="gap-stat-label">🎯 আপনার স্কোর</div>
                    </div>
                    <div class="gap-stat-box">
                        <div class="gap-stat-num" id="gap-pct">0%</div>
                        <div class="gap-stat-label">📊 সঠিকতার হার</div>
                    </div>
                    <div class="gap-stat-box">
                        <div class="gap-stat-num" id="gap-attempted">0 / 100</div>
                        <div class="gap-stat-label">✍️ সম্পন্ন করেছেন</div>
                    </div>
                </div>
                <div class="gap-progress-track">
                    <div class="gap-progress-bar" id="gap-prog-bar"></div>
                </div>
                <div class="gap-controls-row">
                    <button type="button" class="btn-gap-master btn-check-all" onclick="checkAllBlanks()">⚡ সকল উত্তর চেক করুন (Check All)</button>
                    <button type="button" class="btn-gap-master btn-reset-all" onclick="resetAllBlanks()">🔄 রিসেট ও পুনরায় চেষ্টা (Reset All)</button>
                    <button type="button" class="btn-gap-master btn-reveal-key" onclick="toggleAnswerKey()">👁️ উত্তরমালা দেখুন / লুকান (Answer Key)</button>
                </div>
            </div>

            <div class="fill-in-box" id="fill-in-container">
                <!-- Dynamically filled with 100 questions -->
            </div>

            <!-- Answer Key Container -->
            <div id="answer-key-box" style="display: none;">
                <h3 style="color: #2563eb; margin-top: 30px;">🔑 ১০০টি প্রশ্নের অফিশিয়াল উত্তরমালা:</h3>
                <div class="answer-key-grid" id="answer-key-list"></div>
            </div>
        </section>

        <!-- SECTION 7: 20 MCQ QUIZ -->
        <section id="mcq">
            <h2>🎯 ৭. ২০টি স্পিড ডায়াগনস্টিক কুইজ (MCQ)</h2>
            <p>আপনার তাৎক্ষণিক মূল্যায়ন করার জন্য সঠিক বিকল্পটি বেছে নিন:</p>
            <div class="mcq-grid" id="mcq-container">
                <!-- Dynamically filled with 20 items -->
            </div>
        </section>
    </div>

    <script>
        // DATA ARRAYS
        const B2E_DATA = [
            { bn: "সে আমাকে দিয়ে চিঠিটি লেখাল।", en: "He made me write the letter.", tip: "Make + Person + V1" },
            { bn: "আমি মেকানিককে দিয়ে গাড়িটি ঠিক করালাম।", en: "I had the mechanic fix the car.", tip: "Have + Person + V1" },
            { bn: "আমি আমার শিক্ষককে দিয়ে রচনাটি চেক করিয়ে নিলাম।", en: "I got my teacher to check the essay.", tip: "Get + Person + TO + V1" },
            { bn: "মা আমাকে রাতে বাইরে যেতে দিলেন।", en: "Mother let me go out at night.", tip: "Let + Person + V1" },
            { bn: "সে আমাকে লাগেজ বহন করতে সাহায্য করল।", en: "He helped me carry the luggage.", tip: "Help + Person + V1" },
            { bn: "আমি গতকাল আমার চুল কাটিয়েছি।", en: "I had my hair cut yesterday.", tip: "Have + Object + V3 (Passive)" },
            { bn: "বস আমাদের দিয়ে ছুটির দিনে কাজ করিয়ে নিলেন।", en: "The boss made us work on the weekend.", tip: "Make + Person + V1" },
            { bn: "তুমি কি তাকে দিয়ে সত্যটা বলিয়ে নিতে পারবে?", en: "Can you get him to tell the truth?", tip: "Get + Person + TO + V1" },
            { bn: "দয়া করে আমাকে আমার কাজটি শেষ করতে দিন।", en: "Please let me finish my work.", tip: "Let + Person + V1" },
            { bn: "আমরা পেইন্টারকে দিয়ে বাড়িটি রঙ করিয়েছিলাম।", en: "We had the painter paint the house.", tip: "Have + Person + V1" },
            { bn: "এই কফি আমাকে সজাগ রাখতে সাহায্য করে।", en: "This coffee helps me stay awake.", tip: "Help + Person + V1" },
            { bn: "বৃষ্টি আমাদের পরিকল্পনা পরিবর্তন করতে বাধ্য করল।", en: "The rain made us change our plans.", tip: "Make + Person + V1" },
            { bn: "আমি রফিককে দিয়ে পাসপোর্ট ফর্মটি পূরণ করালাম।", en: "I got Rafiq to fill in the passport form.", tip: "Get + Person + TO + V1" },
            { bn: "আমি কম্পিউটারটি সার্ভিস সেন্টারে ঠিক করিয়েছি।", en: "I got my computer fixed at the service center.", tip: "Get + Object + V3" },
            { bn: "শিক্ষক ছাত্রদের দিয়ে পড়াটি মুখস্থ করালেন।", en: "The teacher made the students memorize the lesson.", tip: "Make + Person + V1" },
            { bn: "আমাকে একটু ভাবতে দাও।", en: "Let me think for a moment.", tip: "Let + Person + V1" },
            { bn: "তিনি সহকারীকে দিয়ে সব ইমেইল পাঠিয়েছিলেন।", en: "He had his assistant send all the emails.", tip: "Have + Person + V1" },
            { bn: "আমি অবশেষে বাবাকে নতুন ফোনটি কিনতে রাজি করালাম।", en: "I finally got my father to buy the new phone.", tip: "Get + Person + TO + V1" },
            { bn: "ব্যায়াম আমাদের সুস্থ থাকতে সাহায্য করে।", en: "Exercise helps us maintain good health.", tip: "Help + Person + V1" },
            { bn: "কৌতুকটি শুনে আমরা সবাই হেসে ফেললাম।", en: "The joke made all of us laugh.", tip: "Make + Person + V1" },
            { bn: "তুমি কি কাউকে দিয়ে এটি পরিষ্কার করিয়ে নিতে পারো?", en: "Can you get someone to clean this?", tip: "Get + Person + TO + V1" },
            { bn: "তারা আমাকে ভেতরে প্রবেশ করতে দেয়নি।", en: "They didn't let me enter inside.", tip: "Let + Person + V1" },
            { bn: "আমি দর্জিকে দিয়ে একটি স্যুট বানিয়েছি।", en: "I had a suit made by the tailor.", tip: "Have + Object + V3" },
            { bn: "সে আমাকে নতুন প্রযুক্তি শিখতে সাহায্য করেছিল।", en: "He helped me learn new technology.", tip: "Help + Person + V1" },
            { bn: "তিনি ড্রাইভারকে দিয়ে গাড়িটি পার্ক করালেন।", en: "He had the driver park the car.", tip: "Have + Person + V1" },
            { bn: "পুলিশ চোরকে দিয়ে সত্য স্বীকার করাল।", en: "The police made the thief confess the truth.", tip: "Make + Person + V1" },
            { bn: "আমরা ম্যানেজারকে দিয়ে ডিসকাউন্ট মঞ্জুর করালাম।", en: "We got the manager to approve the discount.", tip: "Get + Person + TO + V1" },
            { bn: "তাকে তার মতামত প্রকাশ করতে দাও।", en: "Let him express his opinion.", tip: "Let + Person + V1" },
            { bn: "তুমি কি আমাকে ঘরটি গোছাতে সাহায্য করবে?", en: "Will you help me tidy up the room?", tip: "Help + Person + V1" },
            { bn: "আমি ফোনটি মেরামত করিয়ে নিচ্ছি।", en: "I am having the phone repaired.", tip: "Have + Object + V3" }
        ];

        // 100 Blanks Questions
        const BLANKS_DATA = [
            { qid: 1, text: "The strict teacher made the students ___ (write) the essay again.", ans: "write", hint: "Make এর পর V1 (Base Form) বসে" },
            { qid: 2, text: "I will have my secretary ___ (call) you tomorrow morning.", ans: "call", hint: "Have + Person + V1" },
            { qid: 3, text: "She finally got her brother ___ (lend) her his car.", ans: "to lend", hint: "Get + Person + TO + V1" },
            { qid: 4, text: "Please let me ___ (know) as soon as you land in London.", ans: "know", hint: "Let + Person + V1" },
            { qid: 5, text: "Can you help me ___ (solve) this complicated math problem?", ans: "solve", hint: "Help + Person + V1" },
            { qid: 6, text: "I need to get my watch ___ (repair) before the interview.", ans: "repaired", hint: "Get + Object + V3 (Passive Causative)" },
            { qid: 7, text: "The emotional song made everyone in the hall ___ (cry).", ans: "cry", hint: "Make + Person + V1" },
            { qid: 8, text: "We had the technician ___ (install) the high-speed router.", ans: "install", hint: "Have + Person + V1" },
            { qid: 9, text: "How did you get him ___ (agree) to your demanding proposal?", ans: "to agree", hint: "Get + Person + TO + V1" },
            { qid: 10, text: "Don't let fear ___ (stop) you from achieving your dreams.", ans: "stop", hint: "Let + Person + V1" },
            { qid: 11, text: "He had his blood pressure ___ (check) by the physician.", ans: "checked", hint: "Have + Object + V3" },
            { qid: 12, text: "The police made the driver ___ (blow) into the breathalyzer.", ans: "blow", hint: "Make + Person + V1" },
            { qid: 13, text: "I can't get this stubborn jar ___ (open).", ans: "to open", hint: "Get + Object + TO + V1" },
            { qid: 14, text: "Let us ___ (celebrate) this momentous achievement together.", ans: "celebrate", hint: "Let + Us + V1" },
            { qid: 15, text: "Regular meditation helps your brain ___ (focus) better.", ans: "focus", hint: "Help + Person + V1" },
            { qid: 16, text: "The supervisor had the workers ___ (clean) the warehouse.", ans: "clean", hint: "Have + Person + V1" },
            { qid: 17, text: "She got her passport ___ (renew) last Monday.", ans: "renewed", hint: "Get + Object + V3" },
            { qid: 18, text: "The heavy thunderstorm made us ___ (cancel) the outdoor game.", ans: "cancel", hint: "Make + Person + V1" },
            { qid: 19, text: "He managed to get his landlord ___ (reduce) the monthly rent.", ans: "to reduce", hint: "Get + Person + TO + V1" },
            { qid: 20, text: "Her kind words helped me ___ (regain) my lost confidence.", ans: "regain", hint: "Help + Person + V1" },
            { qid: 21, text: "The manager had the invoice ___ (send) to the accounting department.", ans: "sent", hint: "Have + Object + V3" },
            { qid: 22, text: "Why did you make your younger sister ___ (apologize)?", ans: "apologize", hint: "Make + Person + V1" },
            { qid: 23, text: "Our parents never let us ___ (stay) out past midnight.", ans: "stay", hint: "Let + Person + V1" },
            { qid: 24, text: "I will get my friend ___ (review) my resume before applying.", ans: "to review", hint: "Get + Person + TO + V1" },
            { qid: 25, text: "We had the old air conditioner ___ (serviced) yesterday.", ans: "serviced", hint: "Have + Object + V3" },
            { qid: 26, text: "Does reading books help you ___ (improve) your vocabulary?", ans: "improve", hint: "Help + Person + V1" },
            { qid: 27, text: "The funny comedian made the entire audience ___ (burst) into laughter.", ans: "burst", hint: "Make + Person + V1" },
            { qid: 28, text: "I must get my car ___ (wash) this afternoon.", ans: "washed", hint: "Get + Object + V3" },
            { qid: 29, text: "The CEO had his chief advisor ___ (draft) the strategic agreement.", ans: "draft", hint: "Have + Person + V1" },
            { qid: 30, text: "Don't let toxic people ___ (ruin) your inner peace.", ans: "ruin", hint: "Let + Person + V1" },
            { qid: 31, text: "She got her daughter ___ (eat) all the fresh vegetables.", ans: "to eat", hint: "Get + Person + TO + V1" },
            { qid: 32, text: "I will have the catering team ___ (prepare) a vegetarian feast.", ans: "prepare", hint: "Have + Person + V1" },
            { qid: 33, text: "Can you help me ___ (translate) this Bengali passage into English?", ans: "translate", hint: "Help + Person + V1" },
            { qid: 34, text: "The court made the witness ___ (swear) on oath.", ans: "swear", hint: "Make + Person + V1" },
            { qid: 35, text: "We had our house ___ (painted) right before Eid.", ans: "painted", hint: "Have + Object + V3" },
            { qid: 36, text: "He got the bank manager ___ (waive) the penalty fee.", ans: "to waive", hint: "Get + Person + TO + V1" },
            { qid: 37, text: "Let the tea ___ (cool) down before taking a sip.", ans: "cool", hint: "Let + Object + V1" },
            { qid: 38, text: "Drinking warm water helps ___ (soothe) a sore throat.", ans: "soothe", hint: "Help + V1" },
            { qid: 39, text: "The commanding officer made the soldiers ___ (march) ten miles.", ans: "march", hint: "Make + Person + V1" },
            { qid: 40, text: "I got my eyes ___ (examine) by a specialist yesterday.", ans: "examined", hint: "Get + Object + V3" },
            { qid: 41, text: "She had the dressmaker ___ (shorten) the hem of her gown.", ans: "shorten", hint: "Have + Person + V1" },
            { qid: 42, text: "Never let failure ___ (define) your future success.", ans: "define", hint: "Let + Object + V1" },
            { qid: 43, text: "We got the electrician ___ (replace) the faulty circuit breaker.", ans: "to replace", hint: "Get + Person + TO + V1" },
            { qid: 44, text: "This software will help you ___ (organize) your daily tasks.", ans: "organize", hint: "Help + Person + V1" },
            { qid: 45, text: "He had his tooth ___ (extracted) at the dental clinic.", ans: "extracted", hint: "Have + Object + V3" },
            { qid: 46, text: "The coach made the athletes ___ (run) five extra laps.", ans: "run", hint: "Make + Person + V1" },
            { qid: 47, text: "Can you get the printer ___ (work) properly?", ans: "to work", hint: "Get + Object + TO + V1" },
            { qid: 48, text: "Let me ___ (carry) those heavy grocery bags for you.", ans: "carry", hint: "Let + Person + V1" },
            { qid: 49, text: "I had my luggage ___ (weigh) at the airport check-in counter.", ans: "weighed", hint: "Have + Object + V3" },
            { qid: 50, text: "Good mentors help you ___ (reach) your highest potential.", ans: "reach", hint: "Help + Person + V1" }
        ];

        // 20 MCQ Questions
        const MCQ_DATA = [
            {
                q: "1. The teacher made the mischievous student _______ outside the classroom.",
                options: ["to stand", "stand", "standing", "stood"],
                correct: 1,
                exp: "Make + Person + V1 (Base Form)। কোনো অবস্থাতেই 'to' বসবে না।"
            },
            {
                q: "2. I had my assistant _______ the flight tickets yesterday.",
                options: ["to book", "booking", "book", "booked"],
                correct: 2,
                exp: "Have + Person + V1। সহকারীকে দায়িত্ব দেওয়া হয়েছে, তাই Base Form 'book' বসবে।"
            },
            {
                q: "3. After an hour of discussion, I got him _______ our terms.",
                options: ["accept", "to accept", "accepting", "accepted"],
                correct: 1,
                exp: "Get + Person + TO + V1। রাজি বা কনভিন্স করানোর ক্ষেত্রে Get-এর পর 'to' বসে।"
            },
            {
                q: "4. Where did you get your hair _______?",
                options: ["cut", "to cut", "cutting", "cutted"],
                correct: 0,
                exp: "Passive Causative: Get + Object + V3। Cut-এর V3 রূপও 'cut'।"
            },
            {
                q: "5. Please let me _______ what happens next.",
                options: ["to see", "see", "seeing", "saw"],
                correct: 1,
                exp: "Let + Person + V1। Let-এর পর সরাসরি Base Form বসে।"
            },
            {
                q: "6. Which sentence is grammatically INCORRECT?",
                options: [
                    "He made me laugh.",
                    "She had her car repaired.",
                    "He made me to do it.",
                    "They let us enter."
                ],
                correct: 2,
                exp: "'He made me to do it' ভুল। Make-এর পর 'to' বসে না।"
            },
            {
                q: "7. I must have my brakes _______ before driving down the mountain.",
                options: ["check", "to check", "checking", "checked"],
                correct: 3,
                exp: "Have + Object (brakes) + V3 (checked)। প্যাসিভ কজেটিভ।"
            },
            {
                q: "8. The company got an expert _______ the employees on cybersecurity.",
                options: ["train", "to train", "trained", "training"],
                correct: 1,
                exp: "Get + Person + TO + V1।"
            },
            {
                q: "9. Can you help me _______ this wardrobe to the next room?",
                options: ["moving", "moved", "move", "to moved"],
                correct: 2,
                exp: "Help + Person + V1 (অথবা to move)।"
            },
            {
                q: "10. In passive voice: 'I was made _______ for two hours.'",
                options: ["wait", "to wait", "waiting", "waited"],
                correct: 1,
                exp: "Make যখন Passive-এ যায় (was made), তখন 'to' ফিরে আসে (was made to wait)।"
            }
        ];

        // RENDER FUNCTIONS
        function renderB2E() {
            const grid = document.getElementById('b2e-grid');
            let html = '';
            B2E_DATA.forEach((item, idx) => {
                html += `
                    <div class="drill-card" onclick="toggleReveal(this)">
                        <div class="drill-prompt">#${idx+1}. ${item.bn}</div>
                        <div class="card-hint">👉 ক্লিক করে ইংরেজি দেখুন</div>
                        <div class="drill-reveal">
                            <div>${item.en}</div>
                            <div style="font-size: 0.85rem; color: #2563eb; margin-top: 4px;">💡 ${item.tip}</div>
                        </div>
                    </div>
                `;
            });
            grid.innerHTML = html;
        }

        function renderE2B() {
            const grid = document.getElementById('e2b-grid');
            let html = '';
            B2E_DATA.forEach((item, idx) => {
                html += `
                    <div class="drill-card" onclick="toggleReveal(this)">
                        <div class="drill-prompt" style="color: #0f172a;">#${idx+1}. ${item.en}</div>
                        <div class="card-hint">👉 ক্লিক করে বাংলা অর্থ দেখুন</div>
                        <div class="drill-reveal" style="color: #d97706;">
                            <div>${item.bn}</div>
                            <div style="font-size: 0.85rem; color: #64748b; margin-top: 4px;">রুল: ${item.tip}</div>
                        </div>
                    </div>
                `;
            });
            grid.innerHTML = html;
        }

        function toggleReveal(card) {
            const reveal = card.querySelector('.drill-reveal');
            const hint = card.querySelector('.card-hint');
            if (reveal.style.display === 'block') {
                reveal.style.display = 'none';
                hint.style.display = 'block';
            } else {
                reveal.style.display = 'block';
                hint.style.display = 'none';
            }
        }

        function renderBlanks() {
            const container = document.getElementById('fill-in-container');
            const keyList = document.getElementById('answer-key-list');
            let html = '';
            let keyHtml = '';

            BLANKS_DATA.forEach(q => {
                const parts = q.text.split('___');
                html += `
                    <div class="fill-in-item" id="fill-row-${q.qid}">
                        <div class="fill-sentence-wrap">
                            <strong>${q.qid}.</strong> ${parts[0]} <input type="text" class="gap-input" data-qid="${q.qid}" data-ans="${q.ans}" placeholder="..." onkeydown="handleKey(event, ${q.qid})" oninput="clearStatus(${q.qid})"> ${parts[1] || ''}
                            <div style="font-size: 0.85rem; color: #64748b; margin-top: 4px;">💡 ইঙ্গিত: ${q.hint}</div>
                        </div>
                        <div class="gap-actions">
                            <button type="button" class="btn-check-single" onclick="checkSingle(${q.qid})">✓ Check</button>
                            <span class="gap-feedback" id="feedback-${q.qid}"></span>
                        </div>
                    </div>
                `;

                keyHtml += `
                    <div class="answer-key-item">
                        <strong>#${q.qid}:</strong> ${q.ans}
                    </div>
                `;
            });

            container.innerHTML = html;
            keyList.innerHTML = keyHtml;
        }

        function handleKey(e, qid) {
            if (e.key === 'Enter') {
                checkSingle(qid);
            }
        }

        function clearStatus(qid) {
            const input = document.querySelector(`input[data-qid="${qid}"]`);
            input.classList.remove('correct', 'wrong');
            const fb = document.getElementById(`feedback-${qid}`);
            if (fb) fb.innerHTML = '';
        }

        function checkSingle(qid) {
            const input = document.querySelector(`input[data-qid="${qid}"]`);
            const fb = document.getElementById(`feedback-${qid}`);
            if (!input) return;

            const userAns = input.value.trim().toLowerCase();
            const correctAns = input.getAttribute('data-ans').trim().toLowerCase();

            if (!userAns) {
                fb.innerHTML = '<span class="badge-wrong">খালি রাখবেন না!</span>';
                return;
            }

            if (userAns === correctAns) {
                input.classList.add('correct');
                input.classList.remove('wrong');
                fb.innerHTML = '<span class="badge-correct">✓ সঠিক!</span>';
            } else {
                input.classList.add('wrong');
                input.classList.remove('correct');
                fb.innerHTML = `<span class="badge-wrong">ভুল! উত্তর: ${correctAns}</span>`;
            }

            updateDashboard();
        }

        function checkAllBlanks() {
            BLANKS_DATA.forEach(q => {
                checkSingle(q.qid);
            });
            updateDashboard();
        }

        function resetAllBlanks() {
            BLANKS_DATA.forEach(q => {
                const input = document.querySelector(`input[data-qid="${q.qid}"]`);
                if (input) {
                    input.value = '';
                    input.classList.remove('correct', 'wrong');
                }
                const fb = document.getElementById(`feedback-${q.qid}`);
                if (fb) fb.innerHTML = '';
            });
            updateDashboard();
        }

        function updateDashboard() {
            let correct = 0;
            let attempted = 0;
            BLANKS_DATA.forEach(q => {
                const input = document.querySelector(`input[data-qid="${q.qid}"]`);
                if (input && input.value.trim()) {
                    attempted++;
                    if (input.classList.contains('correct')) correct++;
                }
            });

            const total = BLANKS_DATA.length;
            const pct = attempted > 0 ? Math.round((correct / total) * 100) : 0;

            document.getElementById('gap-score').innerText = `${correct} / ${total}`;
            document.getElementById('gap-pct').innerText = `${pct}%`;
            document.getElementById('gap-attempted').innerText = `${attempted} / ${total}`;
            document.getElementById('gap-prog-bar').style.width = `${pct}%`;
        }

        function toggleAnswerKey() {
            const box = document.getElementById('answer-key-box');
            box.style.display = box.style.display === 'none' ? 'block' : 'none';
        }

        function renderMCQ() {
            const container = document.getElementById('mcq-container');
            let html = '';
            MCQ_DATA.forEach((item, idx) => {
                html += `
                    <div class="mcq-card">
                        <div class="mcq-question">${item.q}</div>
                        <div class="mcq-options" id="mcq-opts-${idx}">
                            ${item.options.map((opt, oIdx) => `
                                <button type="button" class="mcq-opt-btn" onclick="checkMCQ(${idx}, ${oIdx})">
                                    ${String.fromCharCode(65 + oIdx)}. ${opt}
                                </button>
                            `).join('')}
                        </div>
                        <div class="mcq-explanation" id="mcq-exp-${idx}">
                            💡 <strong>ব্যাখ্যা:</strong> ${item.exp}
                        </div>
                    </div>
                `;
            });
            container.innerHTML = html;
        }

        function checkMCQ(qIdx, optIdx) {
            const item = MCQ_DATA[qIdx];
            const optsContainer = document.getElementById(`mcq-opts-${qIdx}`);
            const buttons = optsContainer.querySelectorAll('.mcq-opt-btn');
            const exp = document.getElementById(`mcq-exp-${qIdx}`);

            buttons.forEach((btn, idx) => {
                btn.disabled = true;
                if (idx === item.correct) {
                    btn.classList.add('correct');
                } else if (idx === optIdx) {
                    btn.classList.add('wrong');
                }
            });

            exp.style.display = 'block';
        }

        // Initialize on load
        window.addEventListener('DOMContentLoaded', () => {
            renderB2E();
            renderE2B();
            renderBlanks();
            renderMCQ();
        });
    </script>
</body>
</html>
"""

def main():
    target_dirs = [
        "E:/antigravity/ILTES/public/academy-labs",
        "F:/LearnCare Academy/html code"
    ]
    filename = "Causative_Verbs_Master_Interactive_Practice_Lab.html"

    for d in target_dirs:
        if os.path.exists(d):
            path = os.path.join(d, filename)
            with open(path, "w", encoding="utf-8") as f:
                f.write(HTML_TEMPLATE)
            print(f"Successfully generated {filename} in {d}")

if __name__ == "__main__":
    main()

