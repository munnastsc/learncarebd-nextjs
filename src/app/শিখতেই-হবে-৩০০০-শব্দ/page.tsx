"use client";

import React, { useState, useEffect, useRef } from 'react';
import Papa from 'papaparse';

const LCBD_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzHMI1Ix_DpDj90ZxnTXlsYlzTq7H2-b9CX4a6fDa1s7ZxAjiG_pVvHcDIjvmaCd_qr/exec';
const CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSV6cs8uPi3qHVNcOVWMK8VtFB6DkWMD8vduvrXzv9MndBTw60ekitqFn_yvBE9VRnnWyLihUWOKxG9/pub?output=csv';

interface WordData {
    sno: string;
    word: string;
    extra: string;
    ipa: string;
    pron: string;
    mean: string;
    exen: string;
    exbn: string;
    audio: string;
}

export default function ThreeThousandWordsApp() {
    // Auth State
    const [isActivated, setIsActivated] = useState<boolean>(false);
    const [codeInput, setCodeInput] = useState('');
    const [gateMsg, setGateMsg] = useState({ text: '', type: '' });
    const [isUnlocking, setIsUnlocking] = useState(false);
    const [hasMicPerm, setHasMicPerm] = useState(true);

    // App State
    const [words, setWords] = useState<WordData[]>([]);
    const [filteredWords, setFilteredWords] = useState<WordData[]>([]);
    const [loading, setLoading] = useState(true);
    const [activeLetter, setActiveLetter] = useState('A');
    const [searchQuery, setSearchQuery] = useState('');
    const [openWordSno, setOpenWordSno] = useState<string | null>(null);

    // Recording State
    const [recordingSno, setRecordingSno] = useState<string | null>(null);
    const [recordingResult, setRecordingResult] = useState<{ [key: string]: { html: string } }>({});
    
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const recognitionRef = useRef<any>(null);

    useEffect(() => {
        // Check activation
        if (typeof window !== 'undefined') {
            if (localStorage.getItem('lcbd_activated') === '1') {
                setIsActivated(true);
            }
            checkMicPerm();
        }
    }, []);

    useEffect(() => {
        if (isActivated) {
            loadData();
        }
    }, [isActivated]);

    const getDeviceId = () => {
        let id = localStorage.getItem('lcbd_did');
        if (!id) {
            id = 'D' + Date.now().toString(36) + Math.random().toString(36).substring(2, 8);
            localStorage.setItem('lcbd_did', id);
        }
        return id;
    };

    const checkMicPerm = () => {
        if (localStorage.getItem('lcbd_mic_ok') === '1') {
            setHasMicPerm(true);
            return;
        }
        if (navigator.permissions) {
            navigator.permissions.query({ name: 'microphone' as PermissionName }).then((r) => {
                if (r.state === 'granted') {
                    localStorage.setItem('lcbd_mic_ok', '1');
                    setHasMicPerm(true);
                } else {
                    setHasMicPerm(false);
                }
            }).catch(() => {
                setHasMicPerm(false);
            });
        } else {
            setHasMicPerm(false);
        }
    };

    const requestMic = () => {
        navigator.mediaDevices.getUserMedia({ audio: true })
            .then((stream) => {
                stream.getTracks().forEach((t) => t.stop());
                localStorage.setItem('lcbd_mic_ok', '1');
                setHasMicPerm(true);
            })
            .catch(() => {
                alert("Permission denied — Settings → Apps → Learncarebd → Microphone → Allow");
            });
    };

    const handleCodeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        let v = e.target.value.replace(/[^A-Z0-9]/gi, '').toUpperCase();
        let parts = [];
        if (v.length > 0) parts.push(v.substring(0, 4));
        if (v.length > 4) parts.push(v.substring(4, 8));
        if (v.length > 8) parts.push(v.substring(8, 12));
        setCodeInput(parts.join('-'));
    };

    const activateApp = () => {
        if (!codeInput) {
            setGateMsg({ text: 'Code লিখুন', type: 'error' });
            return;
        }
        setIsUnlocking(true);
        setGateMsg({ text: 'ভ্যালিডেশন হচ্ছে...', type: 'loading' });

        const deviceId = getDeviceId();
        const cbName = 'lcbdCb' + Date.now();

        (window as any)[cbName] = function (res: any) {
            delete (window as any)[cbName];
            setIsUnlocking(false);
            if (res.success) {
                localStorage.setItem('lcbd_activated', '1');
                localStorage.setItem('lcbd_code', codeInput);
                setIsActivated(true);
            } else {
                const msgs: any = {
                    'used': '❌ এই Code আজ ওকটি Device এ ব্যবহার হয়েছে',
                    'invalid': '❌ Code সঠিক নয় — মিলিয়ে দেখুন',
                    'missing': '❌ Code লিখুন',
                    'server': '❌ সার্ভার Error — পুনরায় চেষ্টা করুন'
                };
                setGateMsg({ text: msgs[res.error] || '❌ ভুল হয়েছে', type: 'error' });
            }
        };

        const s = document.createElement('script');
        s.src = `${LCBD_SCRIPT_URL}?code=${encodeURIComponent(codeInput)}&device=${encodeURIComponent(deviceId)}&callback=${cbName}`;
        s.onerror = () => {
            delete (window as any)[cbName];
            setIsUnlocking(false);
            setGateMsg({ text: '❌ সার্ভার সংযোগ নেই — শিঘ্রই চেষ্টা করুন', type: 'error' });
        };
        document.head.appendChild(s);
    };

    const loadData = () => {
        Papa.parse(CSV_URL, {
            download: true,
            header: false,
            skipEmptyLines: true,
            complete: (r) => {
                const parsedWords: WordData[] = r.data.slice(1).map((v: any) => {
                    let word = (v[1] || '').toString().trim();
                    let extra = '';
                    if (word.includes('(')) {
                        const p = word.split('(');
                        word = p[0].trim();
                        extra = '(' + p[1];
                    }
                    return {
                        sno: v[0] || '',
                        word,
                        extra,
                        ipa: v[2] || '',
                        pron: v[3] || '',
                        mean: v[4] || '',
                        exen: v[5] || '',
                        exbn: v[6] || '',
                        audio: (v[8] || '').toString().trim()
                    };
                });
                setWords(parsedWords);
                
                // Initial filter
                const initial = parsedWords.filter(w => w.word.toUpperCase().startsWith('A'));
                setFilteredWords(initial);
                setLoading(false);
            },
            error: () => {
                setLoading(false);
            }
        });
    };

    const filterLetter = (letter: string) => {
        setActiveLetter(letter);
        setSearchQuery('');
        setFilteredWords(words.filter(w => w.word.toUpperCase().startsWith(letter)));
    };

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const q = e.target.value.toLowerCase().trim();
        setSearchQuery(q);
        if (!q) {
            filterLetter(activeLetter);
            return;
        }
        setFilteredWords(words.filter(w => w.word.toLowerCase().includes(q)).slice(0, 60));
    };

    const toggleDetails = (sno: string) => {
        setOpenWordSno(prev => prev === sno ? null : sno);
    };

    const playAudio = (url: string) => {
        if (!url) return;
        if (audioRef.current) {
            audioRef.current.src = url;
            audioRef.current.load();
            audioRef.current.play().catch(() => {});
        }
    };

    // Speech Recognition Logic
    const lcbdLev = (a: string, b: string) => {
        const dp = Array.from({ length: b.length + 1 }, (_, i) => [i]);
        for (let j = 0; j <= a.length; j++) dp[0][j] = j;
        for (let i = 1; i <= b.length; i++)
            for (let j = 1; j <= a.length; j++)
                dp[i][j] = b[i - 1] === a[j - 1] ? dp[i - 1][j - 1] : 1 + Math.min(dp[i - 1][j - 1], dp[i][j - 1], dp[i - 1][j]);
        return dp[b.length][a.length];
    };

    const lcbdScore = (h: string, e: string) => {
        if (!h) return 0;
        if (h === e) return 100;
        if (h.includes(e)) return 95;
        const d = lcbdLev(h, e);
        return Math.max(0, Math.round((1 - d / Math.max(h.length, e.length)) * 100));
    };

    const playSound = (score: number) => {
        const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
        const p = (f: number, t: number, d: number) => {
            const o = ctx.createOscillator(), g = ctx.createGain();
            o.connect(g); g.connect(ctx.destination);
            o.type = 'sine'; o.frequency.value = f;
            g.gain.setValueAtTime(0.3, ctx.currentTime + t);
            g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + t + d);
            o.start(ctx.currentTime + t); o.stop(ctx.currentTime + t + d);
        };
        if (score >= 90) [[523, 0], [659, 0.15], [784, 0.3], [1047, 0.5]].forEach(([f, t]) => p(f, t, 0.35));
        else if (score >= 70) [[440, 0], [523, 0.22]].forEach(([f, t]) => p(f, t, 0.32));
        else if (score >= 50) p(330, 0, 0.45);
        else [[280, 0], [200, 0.22]].forEach(([f, t]) => p(f, t, 0.35));
    };

    const generateResultHTML = (score: number, heard: string) => {
        playSound(score);
        const c = score >= 90 ? '#059669' : score >= 70 ? '#2563eb' : score >= 50 ? '#d97706' : '#dc2626';
        const e = score >= 90 ? '🎉' : score >= 70 ? '👍' : score >= 50 ? '💪' : '🔄';
        const l = score >= 90 ? 'অসাধারণ! নিখুঁত উচ্চারণ!' : score >= 70 ? 'বেশ ভালো!' : score >= 50 ? 'আরেকটু চেষ্টা করুন' : 'আবার বলুন';
        return `<div style="background:${c}10;border:1.5px solid ${c}35;border-radius:12px;padding:14px 15px;margin-bottom:12px;">
            <div style="display:flex;align-items:center;gap:12px;margin-bottom:10px;">
                <span style="font-size:36px;font-weight:900;color:${c};line-height:1;font-family:'Inter',sans-serif;">${score}%</span>
                <span style="font-size:26px;line-height:1">${e}</span>
                <div style="flex:1;min-width:0;">
                    <div style="font-size:15px;font-weight:700;color:${c}">${l}</div>
                    <div style="font-size:11px;color:#94a3b8;margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">আপনি বলেছেন: "<strong style="color:#475569">${heard || 'বোঝা যায়নি'}</strong>"</div>
                </div>
            </div>
            <div style="background:#e5e7eb;border-radius:6px;height:8px;overflow:hidden;">
                <div style="width:${score}%;height:100%;background:linear-gradient(90deg,${c},${c}aa);border-radius:6px;transition:width 1s ease"></div>
            </div>
        </div>`;
    };

    const startMic = (sno: string, word: string) => {
        const SR = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
        if (!SR) { alert('Chrome বা Edge ব্রাউজার ব্যবহার করুন'); return; }
        
        if (recognitionRef.current) {
            recognitionRef.current.stop();
        }

        setOpenWordSno(sno); // Ensure details panel is open
        setRecordingSno(sno);
        
        setRecordingResult(prev => ({
            ...prev,
            [sno]: { html: `<div style="display:flex;align-items:center;gap:10px;padding:11px 14px;background:#eff6ff;border-radius:10px;margin-bottom:12px;"><span style="font-size:20px">⏳</span><span style="color:#4f46e5;font-weight:600;font-size:14px;">মাইক্রোফোন চালু হচ্ছে...</span></div>` }
        }));

        navigator.mediaDevices.getUserMedia({ audio: true })
            .then(stream => {
                stream.getTracks().forEach(t => t.stop());
                
                setRecordingResult(prev => ({
                    ...prev,
                    [sno]: { html: `<div style="display:flex;align-items:center;gap:10px;padding:11px 14px;background:#eff6ff;border-radius:10px;margin-bottom:12px;"><span style="font-size:20px;animation:lcbd-pulse 1s infinite;display:inline-block">🎤</span><span style="color:#4f46e5;font-weight:600;font-size:14px;">বলুন... "${word}"</span></div>` }
                }));

                const r = new SR();
                r.lang = 'en-US'; r.continuous = false; r.interimResults = false; r.maxAlternatives = 5;
                
                r.onresult = (e: any) => {
                    let best = 0, heard = '';
                    const exp = word.toLowerCase();
                    for (let i = 0; i < e.results[0].length; i++) {
                        const t = e.results[0][i].transcript.trim().toLowerCase();
                        const s = lcbdScore(t, exp);
                        if (s > best) { best = s; heard = t; }
                    }
                    setRecordingResult(prev => ({ ...prev, [sno]: { html: generateResultHTML(best, heard) } }));
                    setRecordingSno(null);
                };
                
                r.onerror = (e: any) => {
                    const msgs: any = { 'not-allowed': '❌ অনুমতি নেই', 'no-speech': '🔇 কথা শোনা যায়নি — আবার বলুন', 'audio-capture': '🎤 মাইক্রোফোন পাওয়া যাচ্ছে না', 'network': '🌐 Internet সংযোগ প্রয়োজন', 'aborted': '⏹ বাতিল' };
                    setRecordingResult(prev => ({
                        ...prev,
                        [sno]: { html: `<div style="background:#fff1f1;border:1.5px solid #fca5a5;border-radius:10px;padding:12px;margin-bottom:12px;text-align:center;"><div style="font-weight:700;color:#dc2626;font-size:14px;margin-bottom:3px">${msgs[e.error] || '❌ ' + e.error}</div></div>` }
                    }));
                    setRecordingSno(null);
                };
                
                r.onend = () => { setRecordingSno(null); };
                
                try { r.start(); recognitionRef.current = r; } catch (e) { setRecordingSno(null); }
            })
            .catch(() => {
                setRecordingResult(prev => ({
                    ...prev,
                    [sno]: { html: `<div style="background:#fff1f1;border:1.5px solid #fca5a5;border-radius:12px;padding:16px;margin-bottom:12px;text-align:center;"><div style="font-size:32px;margin-bottom:6px">🎤</div><div style="font-weight:700;color:#dc2626;font-size:15px;margin-bottom:10px">মাইক্রোফোন অনুমতি দিন</div><div style="font-size:11px;color:#9ca3af;line-height:1.6">🔒 Address bar → Microphone → Allow → Reload</div></div>` }
                }));
                setRecordingSno(null);
            });
    };

    return (
        <div className="min-h-screen bg-slate-50 py-10">
            <style dangerouslySetInnerHTML={{__html: `
                .lcbd-wrap * { box-sizing: border-box; margin: 0; padding: 0; }
                .lcbd-header { background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%); padding: 30px 20px 24px; text-align: center; border-radius: 16px 16px 0 0; position: relative; overflow: hidden; }
                .lcbd-header::before { content: ''; position: absolute; top: -40px; right: -40px; width: 160px; height: 160px; background: rgba(255,255,255,0.06); border-radius: 50%; }
                .lcbd-header::after { content: ''; position: absolute; bottom: -30px; left: -20px; width: 120px; height: 120px; background: rgba(255,255,255,0.04); border-radius: 50%; }
                .lcbd-header h2 { color: white; font-size: 22px; font-weight: 800; font-family: 'Hind Siliguri', sans-serif; letter-spacing: -0.3px; position: relative; }
                .lcbd-header p { color: rgba(255,255,255,0.7); font-size: 12px; margin-top: 6px; font-family: 'Hind Siliguri', sans-serif; position: relative; }
                .lcbd-wrap { font-family: 'Inter', sans-serif; max-width: 820px; margin: 0 auto; }
                .lcbd-body { padding: 18px 14px 40px; background: #f1f5f9; border-radius: 0 0 16px 16px; min-h: 500px; }
                .lcbd-sw { position: relative; margin-bottom: 14px; }
                .lcbd-sw-icon { position: absolute; left: 15px; top: 50%; transform: translateY(-50%); font-size: 15px; pointer-events: none; z-index: 1; line-height: 1; }
                .lcbd-search { width: 100%; padding: 13px 16px 13px 44px; border: 2px solid #e2e8f0; border-radius: 12px; font-size: 14px; font-family: 'Inter', sans-serif; outline: none; background: white; box-shadow: 0 1px 6px rgba(0,0,0,0.06); transition: border-color 0.2s, box-shadow 0.2s; color: #1e293b; }
                .lcbd-search:focus { border-color: #4f46e5; box-shadow: 0 0 0 3px rgba(79,70,229,0.12); }
                .lcbd-alpha { display: flex; flex-wrap: wrap; gap: 4px; justify-content: center; margin-bottom: 16px; background: white; padding: 12px; border-radius: 12px; border: 1px solid #e8ecf0; box-shadow: 0 1px 4px rgba(0,0,0,0.05); }
                .lcbd-lbtn { padding: 5px 9px; border: 1.5px solid #e2e8f0; background: #f8fafc; color: #64748b; cursor: pointer; border-radius: 7px; font-weight: 700; font-size: 12px; transition: all 0.15s; font-family: 'Inter', sans-serif; line-height: 1; }
                .lcbd-lbtn:hover { border-color: #4f46e5; color: #4f46e5; background: #eef2ff; }
                .lcbd-lbtn.active { background: linear-gradient(135deg, #4f46e5, #7c3aed); color: white; border-color: transparent; box-shadow: 0 2px 8px rgba(79,70,229,0.35); }
                .lcbd-item { background: white; border: 1px solid #e8ecf4; margin-bottom: 8px; border-radius: 12px; overflow: hidden; box-shadow: 0 1px 6px rgba(0,0,0,0.05); transition: box-shadow 0.2s, transform 0.15s; }
                .lcbd-item:hover { box-shadow: 0 4px 16px rgba(79,70,229,0.12); transform: translateY(-1px); }
                .lcbd-head { padding: 12px 14px; display: flex; align-items: center; cursor: pointer; gap: 0; border-left: 3px solid #4f46e5; transition: background 0.15s; }
                .lcbd-head:hover { background: #fafbff; }
                .lcbd-sno { font-size: 10px; color: #94a3b8; font-weight: 700; min-width: 28px; width: 28px; font-family: 'Inter', sans-serif; flex-shrink: 0; line-height: 1; }
                .lcbd-wstack { flex: 1; min-width: 0; padding-right: 10px; }
                .lcbd-wrow { display: flex; align-items: baseline; gap: 5px; flex-wrap: wrap; }
                .lcbd-wmain { font-weight: 700; color: #0f172a; font-size: 19px; line-height: 1.2; word-break: break-word; }
                .lcbd-wextra { font-size: 11px; color: #94a3b8; font-style: italic; flex-shrink: 0; }
                .lcbd-ipa { display: block; color: #6d28d9; font-style: italic; font-size: 12.5px; margin-top: 3px; opacity: 0.9; word-break: break-all; line-height: 1.3; }
                .lcbd-btns { display: flex; gap: 7px; flex-shrink: 0; }
                .lcbd-sbtn { font-size: 15px; color: white; background: linear-gradient(135deg, #4f46e5, #7c3aed); border: none; border-radius: 50%; width: 36px; height: 36px; cursor: pointer; display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 8px rgba(79,70,229,0.3); transition: transform 0.15s, box-shadow 0.15s; flex-shrink: 0; }
                .lcbd-sbtn:hover { transform: scale(1.1); box-shadow: 0 4px 12px rgba(79,70,229,0.45); }
                .lcbd-mbtn { font-size: 15px; color: white; background: linear-gradient(135deg, #059669, #047857); border: none; border-radius: 50%; width: 36px; height: 36px; cursor: pointer; display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 8px rgba(5,150,105,0.3); transition: transform 0.15s, box-shadow 0.15s; flex-shrink: 0; }
                .lcbd-mbtn:hover { transform: scale(1.1); box-shadow: 0 4px 12px rgba(5,150,105,0.45); }
                .lcbd-mbtn.recording { background: linear-gradient(135deg, #ef4444, #dc2626); box-shadow: 0 2px 8px rgba(239,68,68,0.4); animation: lcbd-pulse 1s infinite; }
                @keyframes lcbd-pulse { 0%,100%{transform:scale(1)} 50%{transform:scale(1.15)} }
                .lcbd-details { padding: 16px 16px 18px 42px; background: #fafbff; border-top: 1px solid #eef2f7; }
                .lcbd-dgrid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 12px; }
                @media(max-width:540px){ .lcbd-dgrid { grid-template-columns: 1fr; } }
                .lcbd-dcard { background: white; border: 1px solid #eef2f7; border-radius: 10px; padding: 11px 13px; box-shadow: 0 1px 3px rgba(0,0,0,0.04); }
                .lcbd-dlabel { font-size: 9px; color: #94a3b8; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 5px; }
                .lcbd-pron { color: #dc2626; font-weight: 700; font-size: 19px; font-family: 'Hind Siliguri', sans-serif; }
                .lcbd-mean { color: #0f172a; font-weight: 600; font-size: 18px; font-family: 'Hind Siliguri', sans-serif; }
                .lcbd-exbox { background: linear-gradient(135deg, #eff6ff, #f5f3ff); padding: 13px 15px; border-radius: 10px; border-left: 3px solid #4f46e5; }
                .lcbd-exlabel { font-size: 9px; color: #4f46e5; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 6px; }
                .lcbd-exen { font-size: 16px; font-weight: 600; color: #0f172a; display: block; margin-bottom: 4px; line-height: 1.4; }
                .lcbd-exbn { font-size: 14px; color: #4b5563; display: block; font-family: 'Hind Siliguri', sans-serif; line-height: 1.4; }
                .lcbd-loading { text-align: center; padding: 50px 20px; color: #94a3b8; font-size: 15px; font-family: 'Hind Siliguri', sans-serif; }
                .lcbd-spinner { width: 36px; height: 36px; border: 3px solid #e2e8f0; border-top-color: #4f46e5; border-radius: 50%; animation: lcbd-spin 0.8s linear infinite; margin: 0 auto 14px; }
                @keyframes lcbd-spin { to { transform: rotate(360deg); } }
                .lcbd-gate { max-width: 420px; margin: 30px auto; background: white; border-radius: 20px; box-shadow: 0 8px 40px rgba(79,70,229,0.15); overflow: hidden; }
                .lcbd-gate-top { background: linear-gradient(135deg, #4f46e5, #7c3aed); padding: 32px 24px 28px; text-align: center; }
                .lcbd-gate-icon { font-size: 48px; margin-bottom: 10px; }
                .lcbd-gate-top h3 { color: white; font-size: 20px; font-weight: 800; font-family: 'Hind Siliguri', sans-serif; }
                .lcbd-gate-top p { color: rgba(255,255,255,0.75); font-size: 13px; margin-top: 5px; font-family: 'Hind Siliguri', sans-serif; }
                .lcbd-gate-body { padding: 24px; }
                .lcbd-gate-body label { display: block; font-size: 11px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px; }
                .lcbd-code-input { width: 100%; padding: 14px 16px; border: 2px solid #e2e8f0; border-radius: 12px; font-size: 18px; font-weight: 700; font-family: 'Inter', sans-serif; text-align: center; letter-spacing: 3px; text-transform: uppercase; outline: none; color: #1e293b; transition: border-color 0.2s, box-shadow 0.2s; }
                .lcbd-code-input:focus { border-color: #4f46e5; box-shadow: 0 0 0 3px rgba(79,70,229,0.12); }
                .lcbd-code-input::placeholder { letter-spacing: 1px; font-size: 14px; font-weight: 400; color: #cbd5e1; }
                .lcbd-unlock-btn { width: 100%; margin-top: 14px; padding: 14px; background: linear-gradient(135deg, #4f46e5, #7c3aed); color: white; border: none; border-radius: 12px; font-size: 16px; font-weight: 700; cursor: pointer; font-family: 'Hind Siliguri', sans-serif; box-shadow: 0 4px 14px rgba(79,70,229,0.35); transition: transform 0.15s, box-shadow 0.15s; }
                .lcbd-unlock-btn:hover { transform: translateY(-1px); box-shadow: 0 6px 20px rgba(79,70,229,0.45); }
                .lcbd-unlock-btn:disabled { opacity: 0.6; cursor: not-allowed; transform: none; }
                .lcbd-gate-msg { margin-top: 12px; padding: 10px 14px; border-radius: 10px; font-size: 13px; text-align: center; font-family: 'Hind Siliguri', sans-serif; }
                .lcbd-gate-msg.error { background: #fff1f1; color: #dc2626; border: 1px solid #fca5a5; }
                .lcbd-gate-msg.loading { background: #eff6ff; color: #4f46e5; border: 1px solid #bfdbfe; }
                .lcbd-gate-note { margin-top: 16px; font-size: 12px; color: #94a3b8; text-align: center; line-height: 1.6; font-family: 'Hind Siliguri', sans-serif; }
            `}} />

            {/* Google Fonts used in the design */}
            <link href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;600;700&family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />

            {!isActivated ? (
                <div className="lcbd-gate">
                    <div className="lcbd-gate-top">
                        <div className="lcbd-gate-icon">📖</div>
                        <h3>শিখতেই হবে ৩০০০ শব্দ</h3>
                        <p>বইয়ের ভেতরে দেওয়া Activation Code টাইপ করুন</p>
                    </div>
                    <div className="lcbd-gate-body">
                        <label>বইয়ের Activation Code</label>
                        <input
                            type="text"
                            className="lcbd-code-input"
                            value={codeInput}
                            onChange={handleCodeInput}
                            placeholder="LCBD-XXXX-XXXX"
                            maxLength={14}
                            onKeyDown={(e) => { if (e.key === 'Enter') activateApp() }}
                        />
                        <button
                            className="lcbd-unlock-btn"
                            onClick={activateApp}
                            disabled={isUnlocking}
                        >
                            🔒 Unlock করুন
                        </button>
                        {gateMsg.text && (
                            <div className={`lcbd-gate-msg ${gateMsg.type}`}>
                                {gateMsg.text}
                            </div>
                        )}
                        <div className="lcbd-gate-note">
                            বইয়ের ভেতরে থাকা Code টাইপ করুন • প্রতিটি Code শুধুমাত্র একজন ব্যবহার করতে পারবেন
                        </div>
                    </div>
                </div>
            ) : (
                <div className="lcbd-wrap">
                    <div className="lcbd-header">
                        <h2>📖 শিখতেই হবে ৩০০০ শব্দ</h2>
                        <p>Oxford Dictionary — উচ্চারণ শুনুন ও নিজে পরীক্ষা করুন</p>
                    </div>

                    {!hasMicPerm && (
                        <div style={{ background: 'linear-gradient(135deg,#fef3c7,#fde68a)', border: '1.5px solid #f59e0b', borderRadius: '14px', padding: '14px 16px', margin: '0 0 16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <span style={{ fontSize: '26px' }}>🎤</span>
                            <div style={{ flex: 1 }}>
                                <div style={{ fontWeight: 700, color: '#92400e', fontSize: '14px', marginBottom: '2px' }}>Microphone চালু করুন</div>
                                <div style={{ fontSize: '12px', color: '#78350f' }}>উচ্চারণ test করতে mic permission দিন</div>
                            </div>
                            <button onClick={requestMic} style={{ background: '#f59e0b', color: 'white', border: 'none', borderRadius: '10px', padding: '10px 18px', fontSize: '13px', fontWeight: 700, cursor: 'pointer', whiteSpace: 'nowrap', fontFamily: 'inherit' }}>
                                ✅ Allow করুন
                            </button>
                        </div>
                    )}

                    <div className="lcbd-body">
                        <div className="lcbd-sw">
                            <span className="lcbd-sw-icon">🔍</span>
                            <input
                                type="text"
                                className="lcbd-search"
                                value={searchQuery}
                                onChange={handleSearch}
                                placeholder="Search any word..."
                            />
                        </div>

                        <div className="lcbd-alpha">
                            {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(c => (
                                <button
                                    key={c}
                                    className={`lcbd-lbtn ${activeLetter === c && !searchQuery ? 'active' : ''}`}
                                    onClick={() => filterLetter(c)}
                                >
                                    {c}
                                </button>
                            ))}
                        </div>

                        <div id="lcbdList">
                            {loading ? (
                                <div className="lcbd-loading">
                                    <div className="lcbd-spinner"></div>
                                    শব্দ লোড হচ্ছে...
                                </div>
                            ) : filteredWords.length === 0 ? (
                                <div className="lcbd-loading" style={{ padding: '30px 20px' }}>
                                    এই অক্ষরে কোনো শব্দ নেই।
                                </div>
                            ) : (
                                filteredWords.map((w, i) => (
                                    <div key={w.sno + i} className="lcbd-item">
                                        <div className="lcbd-head" onClick={() => toggleDetails(w.sno)}>
                                            <div className="lcbd-sno">{w.sno}</div>
                                            <div className="lcbd-wstack">
                                                <div className="lcbd-wrow">
                                                    <span className="lcbd-wmain">{w.word}</span>
                                                    <span className="lcbd-wextra">{w.extra}</span>
                                                </div>
                                                <span className="lcbd-ipa">{w.ipa}</span>
                                            </div>
                                            <div className="lcbd-btns">
                                                <button className="lcbd-sbtn" title="উচ্চারণ শুনুন" onClick={(e) => { e.stopPropagation(); playAudio(w.audio) }}>
                                                    🔊
                                                </button>
                                                <button className={`lcbd-mbtn ${recordingSno === w.sno ? 'recording' : ''}`} title="নিজে বলুন" onClick={(e) => { e.stopPropagation(); startMic(w.sno, w.word) }}>
                                                    {recordingSno === w.sno ? '⏹' : '🎤'}
                                                </button>
                                            </div>
                                        </div>

                                        {openWordSno === w.sno && (
                                            <div className="lcbd-details" style={{ display: 'block' }}>
                                                {recordingResult[w.sno] && (
                                                    <div dangerouslySetInnerHTML={{ __html: recordingResult[w.sno].html }} />
                                                )}
                                                
                                                <div className="lcbd-dgrid">
                                                    <div className="lcbd-dcard">
                                                        <span className="lcbd-dlabel">ব্রিটিশ উচ্চারণ</span>
                                                        <span className="lcbd-pron">{w.pron}</span>
                                                    </div>
                                                    <div className="lcbd-dcard">
                                                        <span className="lcbd-dlabel">বাংলা অর্থ</span>
                                                        <span className="lcbd-mean">{w.mean}</span>
                                                    </div>
                                                </div>
                                                
                                                <div className="lcbd-exbox">
                                                    <span className="lcbd-exlabel">Example</span>
                                                    <span className="lcbd-exen">{w.exen}</span>
                                                    <span className="lcbd-exbn">অনুবাদ: {w.exbn}</span>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))
                            )}
                        </div>
                        <audio ref={audioRef} preload="none"></audio>
                    </div>
                </div>
            )}
        </div>
    );
}
