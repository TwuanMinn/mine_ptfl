import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Hash, AtSign, Clock, Type, RotateCcw, Volume2, VolumeX, ChevronDown, Palette, Zap, Crown, Target, Flame, AlertTriangle, Music } from 'lucide-react';
import {
    DURATIONS, SOUND_PROFILES, SOUND_KEYS, MUSIC_TRACKS, MUSIC_KEYS,
    THEMES, THEME_KEYS, generateWords,
} from './typingTestData';
import VirtualKeyboard from './VirtualKeyboard';

// ─── Main Component ───
export default function TypingTest({ darkMode = true }) {
    const navigate = useNavigate();
    const inputRef = useRef(null);
    const wordsContainerRef = useRef(null);

    // Settings
    const [punctuation, setPunctuation] = useState(false);
    const [numbers, setNumbers] = useState(false);
    const [duration, setDuration] = useState(15);
    const [soundProfile, setSoundProfile] = useState('mechanical');
    const [showSoundMenu, setShowSoundMenu] = useState(false);
    const [colorTheme, setColorTheme] = useState('none');
    const [showThemeMenu, setShowThemeMenu] = useState(false);
    const themeMenuRef = useRef(null);
    const audioCtxRef = useRef(null);
    const soundMenuRef = useRef(null);
    const [musicTrack, setMusicTrack] = useState('off');
    const [showMusicMenu, setShowMusicMenu] = useState(false);
    const musicMenuRef = useRef(null);
    const musicPlayerRef = useRef(null);

    // Close menus when clicking outside
    useEffect(() => {
        if (!showSoundMenu && !showThemeMenu && !showMusicMenu) return;
        const handleClick = (e) => {
            if (showSoundMenu && soundMenuRef.current && !soundMenuRef.current.contains(e.target)) {
                setShowSoundMenu(false);
            }
            if (showThemeMenu && themeMenuRef.current && !themeMenuRef.current.contains(e.target)) {
                setShowThemeMenu(false);
            }
            if (showMusicMenu && musicMenuRef.current && !musicMenuRef.current.contains(e.target)) {
                setShowMusicMenu(false);
            }
        };
        document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    }, [showSoundMenu, showThemeMenu, showMusicMenu]);

    // Music player
    const startMusic = useCallback((track) => {
        // Stop current
        if (musicPlayerRef.current) {
            try { musicPlayerRef.current.stop(); } catch { }
            musicPlayerRef.current = null;
        }
        if (track === 'off' || !MUSIC_TRACKS[track]?.create) return;
        try {
            const ctx = new (window.AudioContext || window.webkitAudioContext)();
            musicPlayerRef.current = MUSIC_TRACKS[track].create(ctx);
        } catch { }
    }, []);

    const stopMusic = useCallback(() => {
        if (musicPlayerRef.current) {
            try { musicPlayerRef.current.stop(); } catch { }
            musicPlayerRef.current = null;
        }
    }, []);

    // Stop music on unmount
    useEffect(() => {
        return () => stopMusic();
    }, [stopMusic]);

    const handleMusicChange = (track) => {
        setMusicTrack(track);
        setShowMusicMenu(false);
        if (isRunning) {
            startMusic(track);
        }
    };

    // Initialize audio context on first interaction
    const getAudioCtx = useCallback(() => {
        if (!audioCtxRef.current) {
            audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
        }
        if (audioCtxRef.current.state === 'suspended') {
            audioCtxRef.current.resume();
        }
        return audioCtxRef.current;
    }, []);

    const playKeySound = useCallback(() => {
        if (soundProfile === 'off') return;
        const profile = SOUND_PROFILES[soundProfile];
        if (profile?.play) {
            try {
                const ctx = getAudioCtx();
                profile.play(ctx);
            } catch (e) { /* silently fail */ }
        }
    }, [soundProfile, getAudioCtx]);

    // Game state
    const [words, setWords] = useState(() => generateWords());
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentInput, setCurrentInput] = useState('');
    const [activeKey, setActiveKey] = useState(null);
    const [timeLeft, setTimeLeft] = useState(15);
    const [isRunning, setIsRunning] = useState(false);
    const [isFinished, setIsFinished] = useState(false);
    const [correctWords, setCorrectWords] = useState(0);
    const [incorrectWords, setIncorrectWords] = useState(0);
    const [totalChars, setTotalChars] = useState(0);
    const [correctChars, setCorrectChars] = useState(0);
    const [wordStatuses, setWordStatuses] = useState({});
    const [personalBest, setPersonalBest] = useState(() => {
        try { return JSON.parse(localStorage.getItem('typingTest_pb') || '{}'); } catch { return {}; }
    });
    const [streak, setStreak] = useState(0);
    const [maxStreak, setMaxStreak] = useState(0);
    const [capsLock, setCapsLock] = useState(false);
    const [wpmHistory, setWpmHistory] = useState([]);
    const [tabPressed, setTabPressed] = useState(false);

    // Timer
    useEffect(() => {
        if (!isRunning || timeLeft <= 0) return;
        const interval = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    setIsRunning(false);
                    setIsFinished(true);
                    clearInterval(interval);
                    stopMusic();
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
        return () => clearInterval(interval);
    }, [isRunning, timeLeft]); // eslint-disable-line react-hooks/exhaustive-deps

    // Auto-scroll words
    useEffect(() => {
        if (wordsContainerRef.current) {
            const el = wordsContainerRef.current.querySelector('.word-active');
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, [currentWordIndex]);

    // Clear active key
    useEffect(() => {
        if (activeKey === null) return;
        const t = setTimeout(() => setActiveKey(null), 150);
        return () => clearTimeout(t);
    }, [activeKey]);

    const handleReset = useCallback(() => {
        setWords(generateWords(80, punctuation, numbers));
        setCurrentWordIndex(0);
        setCurrentInput('');
        setTimeLeft(duration);
        setIsRunning(false);
        setIsFinished(false);
        setFlashWord(null);
        setCorrectWords(0);
        setIncorrectWords(0);
        setTotalChars(0);
        setCorrectChars(0);
        setWordStatuses({});
        setActiveKey(null);
        setStreak(0);
        setMaxStreak(0);
        setWpmHistory([]);
        setTabPressed(false);
        stopMusic();
        setTimeout(() => inputRef.current?.focus(), 50);
    }, [duration, punctuation, numbers, stopMusic]);

    const handleKeyDown = useCallback((e) => {
        // Detect caps lock
        if (e.getModifierState) setCapsLock(e.getModifierState('CapsLock'));

        // Tab+Enter restart shortcut
        if (e.key === 'Tab') {
            e.preventDefault();
            setTabPressed(true);
            setTimeout(() => setTabPressed(false), 500);
            return;
        }
        if (e.key === 'Enter' && tabPressed) {
            e.preventDefault();
            handleReset();
            return;
        }

        if (isFinished) return;
        if (!isRunning && !isFinished) {
            setIsRunning(true);
            startMusic(musicTrack);
        }
        setActiveKey(e.key);
        playKeySound();

        // Backspace: go back to previous word when current input is empty
        if (e.key === 'Backspace' && currentInput === '' && currentWordIndex > 0) {
            e.preventDefault();
            const prevIdx = currentWordIndex - 1;
            const prevStatus = wordStatuses[prevIdx];
            // Undo stats for the previous word
            if (prevStatus === 'correct') {
                setCorrectWords(prev => Math.max(0, prev - 1));
                setCorrectChars(prev => Math.max(0, prev - words[prevIdx].length));
            } else if (prevStatus === 'incorrect') {
                setIncorrectWords(prev => Math.max(0, prev - 1));
            }
            setTotalChars(prev => Math.max(0, prev - words[prevIdx].length));
            setWordStatuses(prev => { const s = { ...prev }; delete s[prevIdx]; return s; });
            setCurrentWordIndex(prevIdx);
            setCurrentInput(words[prevIdx]);
            return;
        }

        if (e.key === ' ') {
            e.preventDefault();
            if (currentInput.trim() === '') return;

            const trimmed = currentInput.trim();
            const correctWord = words[currentWordIndex];
            const isCorrect = trimmed === correctWord;

            setWordStatuses(prev => ({ ...prev, [currentWordIndex]: isCorrect ? 'correct' : 'incorrect' }));
            if (isCorrect) {
                setFlashWord(currentWordIndex);
                setStreak(prev => {
                    const next = prev + 1;
                    setMaxStreak(ms => Math.max(ms, next));
                    return next;
                });
            } else {
                setStreak(0);
            }
            setTotalChars(prev => prev + trimmed.length);
            if (isCorrect) {
                setCorrectWords(prev => prev + 1);
                setCorrectChars(prev => prev + trimmed.length);
            } else {
                setIncorrectWords(prev => prev + 1);
            }
            setCurrentWordIndex(prev => prev + 1);
            setCurrentInput('');
        }
    }, [isRunning, isFinished, currentInput, currentWordIndex, words, wordStatuses, playKeySound, tabPressed, handleReset, startMusic, musicTrack]);

    const handleDurationChange = (d) => {
        setDuration(d);
        handleReset();
        setTimeLeft(d); // Must come AFTER handleReset to override its stale duration
    };

    const togglePunctuation = () => {
        const next = !punctuation;
        setPunctuation(next);
        if (!isRunning) {
            setWords(generateWords(80, next, numbers));
            setCurrentWordIndex(0);
            setCurrentInput('');
            setWordStatuses({});
        }
    };

    const toggleNumbers = () => {
        const next = !numbers;
        setNumbers(next);
        if (!isRunning) {
            setWords(generateWords(80, punctuation, next));
            setCurrentWordIndex(0);
            setCurrentInput('');
            setWordStatuses({});
        }
    };

    const [flashWord, setFlashWord] = useState(null);

    const wpm = isFinished
        ? Math.round((correctWords / duration) * 60)
        : isRunning
            ? Math.round((correctWords / (duration - timeLeft || 1)) * 60)
            : 0;

    const accuracy = totalChars > 0
        ? Math.round((correctChars / totalChars) * 100)
        : 100;

    // Save personal best when finished
    useEffect(() => {
        if (isFinished && wpm > 0) {
            const key = `${duration}s`;
            const prev = personalBest[key] || 0;
            if (wpm > prev) {
                const updated = { ...personalBest, [key]: wpm };
                setPersonalBest(updated);
                try { localStorage.setItem('typingTest_pb', JSON.stringify(updated)); } catch { }
            }
        }
    }, [isFinished]); // eslint-disable-line react-hooks/exhaustive-deps

    const currentPB = personalBest[`${duration}s`] || 0;
    const isNewPB = isFinished && wpm > 0 && wpm >= currentPB;

    // Flash effect on correct word
    useEffect(() => {
        if (flashWord !== null) {
            const t = setTimeout(() => setFlashWord(null), 400);
            return () => clearTimeout(t);
        }
    }, [flashWord]);

    // Progress bar percentage
    const progressPct = isRunning ? (timeLeft / duration) * 100 : 100;

    // Record WPM history every 2 seconds for the sparkline
    useEffect(() => {
        if (!isRunning) return;
        const iv = setInterval(() => {
            setWpmHistory(prev => [...prev, wpm]);
        }, 2000);
        return () => clearInterval(iv);
    }, [isRunning, wpm]);

    // Raw WPM (includes incorrect words)
    const rawWpm = isFinished
        ? Math.round(((correctWords + incorrectWords) / duration) * 60)
        : 0;

    // Consistency (standard deviation of WPM history — lower = more consistent)
    const consistency = (() => {
        if (!isFinished || wpmHistory.length < 2) return 100;
        const avg = wpmHistory.reduce((a, b) => a + b, 0) / wpmHistory.length;
        const variance = wpmHistory.reduce((sum, v) => sum + (v - avg) ** 2, 0) / wpmHistory.length;
        const stdDev = Math.sqrt(variance);
        // Convert to 0-100 score (lower stdDev = higher consistency)
        return Math.max(0, Math.min(100, Math.round(100 - stdDev * 2)));
    })();

    const focusInput = () => inputRef.current?.focus();

    // Theme-driven accent colors
    const theme = THEMES[colorTheme];
    const accent = darkMode ? theme.accent : theme.accentLight;
    const muted = darkMode ? 'text-slate-600' : 'text-slate-400';

    return (
        <motion.div
            key="typing-test-page"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
        >
            <section className={`min-h-screen px-2 sm:px-4 pt-3 sm:pt-4 pb-6 sm:pb-10 flex flex-col items-center transition-colors duration-300 ${darkMode ? theme.bgDark : theme.bgLight}`}>
                <div className="w-full max-w-4xl mx-auto">

                    {/* ─── Back button (top-left, subtle) ─── */}
                    <button
                        onClick={() => navigate('/')}
                        className={`flex items-center gap-1.5 mb-4 sm:mb-6 font-mono text-xs sm:text-sm transition-all group ${darkMode
                            ? 'text-slate-500 hover:text-white' : 'text-slate-400 hover:text-blue-700'
                            }`}
                    >
                        <span className="transition-transform group-hover:-translate-x-0.5">←</span>
                        back
                    </button>

                    {/* ─── Mode selector bar (Monkeytype-style) ─── */}
                    <div className="flex items-center justify-center mb-4 sm:mb-6">
                        <div className={`inline-flex items-center flex-wrap justify-center gap-0.5 px-1.5 sm:px-2 py-1 sm:py-1.5 rounded-xl text-[10px] sm:text-xs font-mono ${darkMode
                            ? 'bg-white/[0.03] border border-white/[0.05]'
                            : 'bg-slate-100/80 border border-slate-200'
                            }`}>

                            {/* Toggles */}
                            <button
                                onClick={togglePunctuation}
                                disabled={isRunning}
                                className={`flex items-center gap-1 px-1.5 sm:px-2.5 py-1 rounded-lg transition-all ${punctuation ? accent : muted
                                    } ${isRunning ? 'opacity-40 cursor-not-allowed' : 'hover:opacity-80'}`}
                            >
                                <AtSign size={12} className="sm:w-3.5 sm:h-3.5" />
                                <span className="hidden sm:inline">punctuation</span>
                            </button>
                            <button
                                onClick={toggleNumbers}
                                disabled={isRunning}
                                className={`flex items-center gap-1 px-1.5 sm:px-2.5 py-1 rounded-lg transition-all ${numbers ? accent : muted
                                    } ${isRunning ? 'opacity-40 cursor-not-allowed' : 'hover:opacity-80'}`}
                            >
                                <Hash size={12} className="sm:w-3.5 sm:h-3.5" />
                                <span className="hidden sm:inline">numbers</span>
                            </button>

                            {/* Divider */}
                            <div className={`w-px h-5 mx-1 ${darkMode ? 'bg-white/10' : 'bg-slate-300'}`} />

                            {/* Mode */}
                            <div className={`hidden sm:flex items-center gap-1 px-2.5 py-1 ${accent}`}>
                                <Clock size={14} />
                                time
                            </div>

                            {/* Divider */}
                            <div className={`hidden sm:block w-px h-5 mx-1 ${darkMode ? 'bg-white/10' : 'bg-slate-300'}`} />

                            {/* Duration pills */}
                            {DURATIONS.map((d) => (
                                <button
                                    key={d}
                                    onClick={() => handleDurationChange(d)}
                                    disabled={isRunning}
                                    className={`px-2.5 py-1 rounded-lg transition-all font-semibold ${duration === d ? accent : muted
                                        } ${isRunning ? 'opacity-40 cursor-not-allowed' : 'hover:opacity-80'}`}
                                >
                                    {d}
                                </button>
                            ))}

                            {/* Divider */}
                            <div className={`w-px h-5 mx-1 ${darkMode ? 'bg-white/10' : 'bg-slate-300'}`} />

                            {/* Theme selector */}
                            <div className="relative" ref={themeMenuRef}>
                                <button
                                    onClick={() => setShowThemeMenu(prev => !prev)}
                                    className={`flex items-center gap-1 px-2.5 py-1 rounded-lg transition-all hover:opacity-80 ${accent}`}
                                >
                                    <div className="w-3 h-3 rounded-full border border-white/20" style={{ background: theme.dot }} />
                                    <Palette size={14} />
                                    <ChevronDown size={12} />
                                </button>
                                {showThemeMenu && (
                                    <div
                                        className={`absolute top-full mt-2 left-0 z-50 rounded-xl py-2 px-2 font-mono text-sm min-w-[160px] max-h-[320px] overflow-y-auto ${darkMode
                                            ? 'bg-slate-800 border border-slate-700 shadow-xl shadow-black/40'
                                            : 'bg-white border border-slate-200 shadow-xl shadow-slate-200/60'
                                            }`}
                                    >
                                        {THEME_KEYS.map((key) => (
                                            <button
                                                key={key}
                                                onClick={() => { setColorTheme(key); setShowThemeMenu(false); }}
                                                className={`w-full flex items-center gap-2.5 text-left px-3 py-2 rounded-lg transition-colors ${colorTheme === key
                                                    ? darkMode ? THEMES[key].selectedDark : THEMES[key].selectedLight
                                                    : darkMode ? 'text-slate-300 hover:bg-slate-700/50' : 'text-slate-700 hover:bg-slate-50'
                                                    }`}
                                            >
                                                <div className="w-3 h-3 rounded-full flex-shrink-0 border border-white/20" style={{ background: THEMES[key].dot }} />
                                                {THEMES[key].label}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Divider */}
                            <div className={`w-px h-5 mx-1 ${darkMode ? 'bg-white/10' : 'bg-slate-300'}`} />

                            {/* Sound selector */}
                            <div className="relative" ref={soundMenuRef}>
                                <button
                                    onClick={() => setShowSoundMenu(prev => !prev)}
                                    className={`flex items-center gap-1 px-2.5 py-1 rounded-lg transition-all hover:opacity-80 ${soundProfile !== 'off' ? accent : muted}`}
                                >
                                    {soundProfile === 'off' ? <VolumeX size={14} /> : <Volume2 size={14} />}
                                    {SOUND_PROFILES[soundProfile].label}
                                    <ChevronDown size={12} />
                                </button>
                                {showSoundMenu && (
                                    <div
                                        className={`absolute top-full mt-2 right-0 z-50 rounded-xl py-1 font-mono text-sm min-w-[140px] max-h-[320px] overflow-y-auto ${darkMode
                                            ? 'bg-slate-800 border border-slate-700 shadow-xl shadow-black/40'
                                            : 'bg-white border border-slate-200 shadow-xl shadow-slate-200/60'
                                            }`}
                                    >
                                        {SOUND_KEYS.map((key) => (
                                            <button
                                                key={key}
                                                onClick={() => { setSoundProfile(key); setShowSoundMenu(false); }}
                                                className={`w-full text-left px-4 py-2 transition-colors ${soundProfile === key
                                                    ? darkMode ? theme.selectedDark : theme.selectedLight
                                                    : darkMode ? 'text-slate-300 hover:bg-slate-700/50' : 'text-slate-700 hover:bg-slate-50'
                                                    }`}
                                            >
                                                {SOUND_PROFILES[key].label}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Divider */}
                            <div className={`w-px h-5 mx-1 ${darkMode ? 'bg-white/10' : 'bg-slate-300'}`} />

                            {/* Music selector */}
                            <div className="relative" ref={musicMenuRef}>
                                <button
                                    onClick={() => setShowMusicMenu(prev => !prev)}
                                    className={`flex items-center gap-1 px-2.5 py-1 rounded-lg transition-all hover:opacity-80 ${musicTrack !== 'off' ? accent : muted}`}
                                >
                                    <Music size={14} />
                                    <ChevronDown size={12} />
                                </button>
                                {showMusicMenu && (
                                    <div
                                        className={`absolute top-full mt-2 right-0 z-50 rounded-xl py-1 font-mono text-sm min-w-[150px] max-h-[320px] overflow-y-auto ${darkMode
                                            ? 'bg-slate-800 border border-slate-700 shadow-xl shadow-black/40'
                                            : 'bg-white border border-slate-200 shadow-xl shadow-slate-200/60'
                                            }`}
                                    >
                                        {MUSIC_KEYS.map((key) => (
                                            <button
                                                key={key}
                                                onClick={() => handleMusicChange(key)}
                                                className={`w-full text-left px-4 py-2 transition-colors ${musicTrack === key
                                                    ? darkMode ? theme.selectedDark : theme.selectedLight
                                                    : darkMode ? 'text-slate-300 hover:bg-slate-700/50' : 'text-slate-700 hover:bg-slate-50'
                                                    }`}
                                            >
                                                {MUSIC_TRACKS[key].label}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* ─── Caps Lock Warning ─── */}
                    <AnimatePresence>
                        {capsLock && (
                            <motion.div
                                className="flex items-center justify-center gap-2 mb-3"
                                initial={{ opacity: 0, y: -5 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -5 }}
                            >
                                <AlertTriangle size={14} className="text-yellow-400" />
                                <span className="text-xs font-mono text-yellow-400">Caps Lock is ON</span>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* ─── Timer + Live Stats (shows when running) ─── */}
                    <AnimatePresence>
                        {isRunning && (
                            <motion.div
                                className="mb-3"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                            >
                                {/* Live stats row */}
                                <div className="flex items-center justify-center gap-5 mb-2">
                                    <div className="flex items-center gap-1">
                                        <Zap size={12} className={accent} />
                                        <span className={`font-mono text-base font-bold ${accent}`}>{wpm}</span>
                                        <span className={`font-mono text-[10px] ${muted}`}>wpm</span>
                                    </div>
                                    <span className={`font-mono text-2xl font-bold ${timeLeft <= 5
                                        ? 'text-red-400 animate-pulse'
                                        : accent
                                        }`}>
                                        {timeLeft}
                                    </span>
                                    <div className="flex items-center gap-1">
                                        <Target size={12} className={accuracy >= 90 ? 'text-green-400' : accuracy >= 70 ? 'text-yellow-400' : 'text-red-400'} />
                                        <span className={`font-mono text-base font-bold ${accuracy >= 90 ? 'text-green-400' : accuracy >= 70 ? 'text-yellow-400' : 'text-red-400'}`}>{accuracy}%</span>
                                    </div>
                                    {/* Inline streak */}
                                    {streak >= 3 && (
                                        <motion.div
                                            className="flex items-center gap-0.5"
                                            key={streak}
                                            initial={{ scale: 1.2 }}
                                            animate={{ scale: 1 }}
                                            transition={{ type: 'spring', damping: 15 }}
                                        >
                                            <Flame size={streak >= 10 ? 16 : 13} className={streak >= 10 ? 'text-red-400' : streak >= 5 ? 'text-orange-400' : 'text-yellow-400'} />
                                            <span className={`font-mono text-xs font-bold ${streak >= 10 ? 'text-red-400' : streak >= 5 ? 'text-orange-400' : 'text-yellow-400'}`}>
                                                {streak}
                                            </span>
                                        </motion.div>
                                    )}
                                </div>
                                {/* Progress bar */}
                                <div className={`w-full max-w-sm mx-auto h-0.5 rounded-full overflow-hidden ${darkMode ? 'bg-white/[0.04]' : 'bg-slate-200'}`}>
                                    <motion.div
                                        className="h-full rounded-full"
                                        style={{ background: timeLeft <= 5 ? '#f87171' : theme.dot }}
                                        initial={{ width: '100%' }}
                                        animate={{ width: `${progressPct}%` }}
                                        transition={{ duration: 0.4, ease: 'linear' }}
                                    />
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* ─── Language badge ─── */}
                    {!isRunning && !isFinished && (
                        <div className="flex justify-center mb-2">
                            <span className={`flex items-center gap-1 text-[10px] font-mono ${muted}`}>
                                <Type size={10} />
                                english
                            </span>
                        </div>
                    )}

                    {/* ─── Words area ─── */}
                    <div
                        className="relative cursor-text mb-2"
                        onClick={focusInput}
                    >
                        <input
                            ref={inputRef}
                            type="text"
                            value={currentInput}
                            onChange={(e) => !isFinished && setCurrentInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            autoFocus
                            className="absolute opacity-0 w-0 h-0"
                            aria-label="Type here"
                        />

                        {/* Result overlay */}
                        <AnimatePresence>
                            {isFinished && (
                                <motion.div
                                    className="absolute inset-0 z-20 flex items-center justify-center rounded-2xl backdrop-blur-md"
                                    style={{ background: darkMode ? 'rgba(10,10,18,0.95)' : 'rgba(255,255,255,0.97)' }}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    <div className="text-center px-4">
                                        {isNewPB ? (
                                            <motion.div
                                                initial={{ scale: 0, rotate: -20 }}
                                                animate={{ scale: 1, rotate: 0 }}
                                                transition={{ type: 'spring', damping: 10, stiffness: 200 }}
                                            >
                                                <Crown size={40} className="mx-auto mb-1 text-yellow-400 drop-shadow-[0_0_12px_rgba(250,204,21,0.5)]" />
                                                <p className="text-xs font-mono text-yellow-400 mb-2">🎉 New Personal Best!</p>
                                            </motion.div>
                                        ) : (
                                            <Trophy size={40} className={`mx-auto mb-3 ${darkMode ? 'text-yellow-400' : 'text-yellow-500'}`} />
                                        )}
                                        <div className={`text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-1 ${darkMode
                                            ? 'text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.15)]'
                                            : 'text-blue-900'}`}>
                                            {wpm}
                                        </div>
                                        <div className={`text-sm font-mono mb-2 ${muted}`}>words per minute</div>
                                        {currentPB > 0 && !isNewPB && (
                                            <div className={`text-xs font-mono mb-4 flex items-center justify-center gap-1 ${muted}`}>
                                                <Crown size={12} className="text-yellow-500" />
                                                personal best: {currentPB} wpm
                                            </div>
                                        )}
                                        {isNewPB && <div className="mb-4" />}
                                        {/* WPM Sparkline */}
                                        {wpmHistory.length >= 2 && (
                                            <div className="flex justify-center mb-4">
                                                <svg width="200" height="40" viewBox={`0 0 200 40`} className="overflow-visible">
                                                    <defs>
                                                        <linearGradient id="sparkGrad" x1="0" x2="0" y1="0" y2="1">
                                                            <stop offset="0%" stopColor={theme.dot} stopOpacity="0.3" />
                                                            <stop offset="100%" stopColor={theme.dot} stopOpacity="0" />
                                                        </linearGradient>
                                                    </defs>
                                                    {(() => {
                                                        const max = Math.max(...wpmHistory, 1);
                                                        const pts = wpmHistory.map((v, i) => ({
                                                            x: (i / (wpmHistory.length - 1)) * 200,
                                                            y: 38 - (v / max) * 36
                                                        }));
                                                        const line = pts.map(p => `${p.x},${p.y}`).join(' ');
                                                        const area = `0,38 ${line} 200,38`;
                                                        return (
                                                            <>
                                                                <polygon points={area} fill="url(#sparkGrad)" />
                                                                <polyline points={line} fill="none" stroke={theme.dot} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                            </>
                                                        );
                                                    })()}
                                                </svg>
                                            </div>
                                        )}
                                        {/* Stats — single compact row */}
                                        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 mb-5">
                                            <div>
                                                <p className={`text-[10px] font-mono ${muted}`}>accuracy</p>
                                                <p className={`text-xl font-bold ${accuracy >= 90 ? 'text-green-400' : accuracy >= 70 ? 'text-yellow-400' : 'text-red-400'}`}>
                                                    {accuracy}%
                                                </p>
                                            </div>
                                            <div>
                                                <p className={`text-[10px] font-mono ${muted}`}>raw</p>
                                                <p className={`text-xl font-bold ${accent}`}>{rawWpm}</p>
                                            </div>
                                            <div>
                                                <p className={`text-[10px] font-mono ${muted}`}>consistency</p>
                                                <p className={`text-xl font-bold ${consistency >= 80 ? 'text-green-400' : consistency >= 50 ? 'text-yellow-400' : 'text-red-400'}`}>
                                                    {consistency}%
                                                </p>
                                            </div>
                                            <div>
                                                <p className={`text-[10px] font-mono ${muted}`}>correct</p>
                                                <p className="text-xl font-bold text-green-400">{correctWords}</p>
                                            </div>
                                            <div>
                                                <p className={`text-[10px] font-mono ${muted}`}>wrong</p>
                                                <p className="text-xl font-bold text-red-400">{incorrectWords}</p>
                                            </div>
                                            {maxStreak >= 3 && (
                                                <div>
                                                    <p className={`text-[10px] font-mono ${muted}`}>streak</p>
                                                    <p className="text-xl font-bold text-orange-400 flex items-center justify-center gap-0.5">
                                                        <Flame size={14} /> {maxStreak}
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                        <button
                                            onClick={handleReset}
                                            className={`px-6 py-3 rounded-xl font-semibold font-mono text-sm transition-all hover:scale-105 active:scale-95 ${darkMode
                                                ? `text-white ${theme.btnGradientDark}`
                                                : `text-white ${theme.btnGradientLight}`
                                                }`}
                                        >
                                            try again
                                        </button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Words */}
                        <div
                            ref={wordsContainerRef}
                            className="flex flex-wrap gap-x-1.5 sm:gap-x-2 gap-y-1 font-mono text-sm sm:text-lg md:text-xl leading-relaxed py-3"
                            style={{
                                maxHeight: '240px',
                                overflow: 'hidden',
                                maskImage: 'linear-gradient(to bottom, black 0%, black 75%, transparent 100%)',
                                WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 75%, transparent 100%)',
                            }}
                        >
                            {words.map((word, idx) => {
                                const isActive = idx === currentWordIndex;
                                const status = wordStatuses[idx];

                                return (
                                    <span
                                        key={idx}
                                        className={`
                                            transition-colors duration-100 relative tracking-wide
                                            ${isActive ? 'word-active' : ''}
                                            ${status === 'correct'
                                                ? darkMode ? theme.correctDark : 'text-green-600'
                                                : status === 'incorrect'
                                                    ? 'text-red-400 line-through decoration-red-500/80 decoration-2'
                                                    : darkMode ? theme.wordDefaultDark : theme.wordDefaultLight
                                            }
                                            ${isActive ? darkMode ? theme.wordActiveDark : theme.wordActiveLight : ''}
                                            ${flashWord === idx ? 'scale-110' : ''}
                                        `}
                                    >
                                        {word.split('').map((char, charIdx) => {
                                            if (!isActive) return <span key={charIdx}>{char}</span>;

                                            const inputChar = currentInput[charIdx];
                                            if (charIdx === currentInput.length) {
                                                // Cursor position
                                                return (
                                                    <span key={charIdx} className={`border-l-2 ${darkMode ? theme.cursorDark : theme.cursorLight}`}>
                                                        {char}
                                                    </span>
                                                );
                                            }
                                            if (inputChar !== undefined) {
                                                if (inputChar === char) {
                                                    return (
                                                        <span key={charIdx} className={darkMode ? theme.charCorrectDark : theme.charCorrectLight}>
                                                            {char}
                                                        </span>
                                                    );
                                                } else {
                                                    // Wrong: bright red char with thick bottom bar
                                                    return (
                                                        <span
                                                            key={charIdx}
                                                            className="text-red-500 font-bold"
                                                            style={{
                                                                borderBottom: '3px solid #ef4444',
                                                                textShadow: '0 0 8px rgba(239,68,68,0.6)',
                                                                paddingBottom: '1px',
                                                            }}
                                                        >
                                                            {char}
                                                        </span>
                                                    );
                                                }
                                            }
                                            return <span key={charIdx}>{char}</span>;
                                        })}
                                        {/* Cursor at end of word */}
                                        {isActive && currentInput.length >= word.length && (
                                            <span className={`border-r-2 ${darkMode ? theme.cursorDark : theme.cursorLight} animate-pulse`} />
                                        )}
                                    </span>
                                );
                            })}
                        </div>

                        {/* Click hint */}
                        {!isRunning && !isFinished && (
                            <p className={`text-center text-xs font-mono mt-2 ${muted}`}>
                                click here and start typing
                            </p>
                        )}
                    </div>

                    {/* ─── 3D Keyboard ─── */}
                    <motion.div
                        className="mt-10"
                        animate={{ y: [0, -6, 0] }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    >
                        <VirtualKeyboard activeKey={activeKey} darkMode={darkMode} theme={theme} />
                    </motion.div>

                    {/* ─── Bottom shortcuts (hidden on very small screens) ─── */}
                    <div className={`hidden sm:flex items-center justify-center gap-6 mt-6 text-xs font-mono ${muted}`}>
                        <div className="flex items-center gap-1.5">
                            <kbd className={`px-1.5 py-0.5 rounded text-[10px] ${darkMode
                                ? 'bg-slate-800 border border-slate-700 text-slate-400'
                                : 'bg-slate-200 border border-slate-300 text-slate-500'
                                }`}>tab</kbd>
                            <span>+</span>
                            <kbd className={`px-1.5 py-0.5 rounded text-[10px] ${darkMode
                                ? 'bg-slate-800 border border-slate-700 text-slate-400'
                                : 'bg-slate-200 border border-slate-300 text-slate-500'
                                }`}>enter</kbd>
                            <span className="ml-1">- restart test</span>
                        </div>
                        <button
                            onClick={handleReset}
                            className={`flex items-center gap-1.5 transition-colors ${darkMode
                                ? theme.hoverDark : theme.hoverLight}`}
                        >
                            <RotateCcw size={12} />
                            restart
                        </button>
                    </div>
                </div>
            </section>
        </motion.div>
    );
}
