// ─── Word bank ───
const WORD_BANK = [
    'the', 'be', 'to', 'of', 'and', 'a', 'in', 'that', 'have', 'it',
    'for', 'not', 'on', 'with', 'he', 'as', 'you', 'do', 'at', 'this',
    'but', 'his', 'by', 'from', 'they', 'we', 'say', 'her', 'she', 'or',
    'an', 'will', 'my', 'one', 'all', 'would', 'there', 'their', 'what',
    'so', 'up', 'out', 'if', 'about', 'who', 'get', 'which', 'go', 'me',
    'when', 'make', 'can', 'like', 'time', 'no', 'just', 'him', 'know',
    'take', 'people', 'into', 'year', 'your', 'good', 'some', 'could',
    'them', 'see', 'other', 'than', 'then', 'now', 'look', 'only',
    'come', 'its', 'over', 'think', 'also', 'back', 'after', 'use',
    'two', 'how', 'our', 'work', 'first', 'well', 'way', 'even', 'new',
    'want', 'because', 'any', 'these', 'give', 'day', 'most', 'us',
    'great', 'between', 'need', 'large', 'must', 'home', 'big', 'high',
    'end', 'point', 'move', 'try', 'kind', 'hand', 'ask', 'world',
    'build', 'does', 'set', 'three', 'own', 'while', 'long', 'small',
    'read', 'right', 'still', 'might', 'name', 'always', 'line', 'turn',
    'help', 'show', 'city', 'lead', 'every', 'near', 'keep', 'food',
    'never', 'start', 'life', 'run', 'real', 'left', 'number', 'night',
    'close', 'live', 'change', 'write', 'play', 'feel', 'business',
    'present', 'program', 'public', 'develop', 'report', 'during',
    'system', 'company', 'group', 'social', 'place', 'young', 'provide',
    'important', 'student', 'market', 'family', 'school', 'country',
    'problem', 'story', 'power', 'should', 'water', 'state', 'child',
    'service', 'music', 'early', 'different', 'information', 'question',
    'believe', 'practice', 'possible', 'morning', 'event', 'return',
    'continue', 'follow', 'position', 'history', 'anything', 'consider',
    'accept', 'create', 'design', 'project', 'experience', 'industry',
    'remember', 'suggest', 'support', 'control', 'result', 'produce',
    'current', 'modern', 'understand', 'computer', 'explain', 'special',
    'picture', 'attention', 'product', 'office', 'teacher', 'second',
    'simple', 'certain', 'personal', 'across', 'example', 'minute',
    'quality', 'growth', 'level', 'board', 'strong', 'effect',
    'include', 'action', 'reason', 'record', 'health', 'force',
];

const PUNCTUATION = ['.', '.', ',', ',', '!', '?', ';', ':', '-', '--', '...', "'s", "'ve", "'t", "'re", "'ll", '(', ')', '"'];

export const DURATIONS = [15, 30, 60, 120];

// ─── Sound profiles (Web Audio API synthesized) ───
export const SOUND_PROFILES = {
    off: { label: 'Off', icon: 'off' },
    mechanical: {
        label: 'Mechanical',
        play: (ctx) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'square';
            osc.frequency.setValueAtTime(1800 + Math.random() * 400, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(600, ctx.currentTime + 0.04);
            gain.gain.setValueAtTime(0.08, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
            osc.connect(gain).connect(ctx.destination);
            osc.start(ctx.currentTime);
            osc.stop(ctx.currentTime + 0.08);
        },
    },
    thock: {
        label: 'Thock',
        play: (ctx) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(150 + Math.random() * 50, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(60, ctx.currentTime + 0.1);
            gain.gain.setValueAtTime(0.15, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);
            osc.connect(gain).connect(ctx.destination);
            osc.start(ctx.currentTime);
            osc.stop(ctx.currentTime + 0.12);
            const click = ctx.createOscillator();
            const cGain = ctx.createGain();
            click.type = 'triangle';
            click.frequency.setValueAtTime(800, ctx.currentTime);
            click.frequency.exponentialRampToValueAtTime(200, ctx.currentTime + 0.03);
            cGain.gain.setValueAtTime(0.06, ctx.currentTime);
            cGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);
            click.connect(cGain).connect(ctx.destination);
            click.start(ctx.currentTime);
            click.stop(ctx.currentTime + 0.05);
        },
    },
    typewriter: {
        label: 'Typewriter',
        play: (ctx) => {
            const bufferSize = ctx.sampleRate * 0.03;
            const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
            const data = buffer.getChannelData(0);
            for (let i = 0; i < bufferSize; i++) data[i] = (Math.random() * 2 - 1) * 0.3;
            const noise = ctx.createBufferSource();
            noise.buffer = buffer;
            const gain = ctx.createGain();
            gain.gain.setValueAtTime(0.12, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.06);
            const filter = ctx.createBiquadFilter();
            filter.type = 'bandpass';
            filter.frequency.value = 3000 + Math.random() * 1000;
            filter.Q.value = 2;
            noise.connect(filter).connect(gain).connect(ctx.destination);
            noise.start(ctx.currentTime);
            noise.stop(ctx.currentTime + 0.06);
            const bell = ctx.createOscillator();
            const bGain = ctx.createGain();
            bell.type = 'sine';
            bell.frequency.value = 4000 + Math.random() * 500;
            bGain.gain.setValueAtTime(0.03, ctx.currentTime);
            bGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);
            bell.connect(bGain).connect(ctx.destination);
            bell.start(ctx.currentTime);
            bell.stop(ctx.currentTime + 0.04);
        },
    },
    bubble: {
        label: 'Bubble',
        play: (ctx) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sine';
            const base = 400 + Math.random() * 200;
            osc.frequency.setValueAtTime(base, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(base * 1.5, ctx.currentTime + 0.05);
            osc.frequency.exponentialRampToValueAtTime(base * 0.8, ctx.currentTime + 0.1);
            gain.gain.setValueAtTime(0.06, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
            osc.connect(gain).connect(ctx.destination);
            osc.start(ctx.currentTime);
            osc.stop(ctx.currentTime + 0.1);
        },
    },
    tap: {
        label: 'Tap',
        play: (ctx) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(500 + Math.random() * 100, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(200, ctx.currentTime + 0.03);
            gain.gain.setValueAtTime(0.04, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);
            osc.connect(gain).connect(ctx.destination);
            osc.start(ctx.currentTime);
            osc.stop(ctx.currentTime + 0.05);
        },
    },
    clack: {
        label: 'Clack',
        play: (ctx) => {
            const bufferSize = ctx.sampleRate * 0.02;
            const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
            const data = buffer.getChannelData(0);
            for (let i = 0; i < bufferSize; i++) data[i] = (Math.random() * 2 - 1);
            const noise = ctx.createBufferSource();
            noise.buffer = buffer;
            const gain = ctx.createGain();
            gain.gain.setValueAtTime(0.1, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);
            const hp = ctx.createBiquadFilter();
            hp.type = 'highpass';
            hp.frequency.value = 2000;
            noise.connect(hp).connect(gain).connect(ctx.destination);
            noise.start(ctx.currentTime);
            noise.stop(ctx.currentTime + 0.04);
            const thud = ctx.createOscillator();
            const tGain = ctx.createGain();
            thud.type = 'sine';
            thud.frequency.setValueAtTime(250, ctx.currentTime);
            thud.frequency.exponentialRampToValueAtTime(80, ctx.currentTime + 0.06);
            tGain.gain.setValueAtTime(0.08, ctx.currentTime);
            tGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.06);
            thud.connect(tGain).connect(ctx.destination);
            thud.start(ctx.currentTime);
            thud.stop(ctx.currentTime + 0.06);
        },
    },
    nock: {
        label: 'Nock',
        play: (ctx) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(1200 + Math.random() * 300, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.05);
            gain.gain.setValueAtTime(0.07, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.07);
            osc.connect(gain).connect(ctx.destination);
            osc.start(ctx.currentTime);
            osc.stop(ctx.currentTime + 0.07);
        },
    },
    pop: {
        label: 'Pop',
        play: (ctx) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sine';
            const base = 600 + Math.random() * 200;
            osc.frequency.setValueAtTime(base, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(base * 2, ctx.currentTime + 0.02);
            osc.frequency.exponentialRampToValueAtTime(base * 0.5, ctx.currentTime + 0.06);
            gain.gain.setValueAtTime(0.1, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
            osc.connect(gain).connect(ctx.destination);
            osc.start(ctx.currentTime);
            osc.stop(ctx.currentTime + 0.08);
        },
    },
    raindrop: {
        label: 'Raindrop',
        play: (ctx) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sine';
            const base = 1200 + Math.random() * 600;
            osc.frequency.setValueAtTime(base, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(base * 0.4, ctx.currentTime + 0.15);
            gain.gain.setValueAtTime(0.05, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.18);
            osc.connect(gain).connect(ctx.destination);
            osc.start(ctx.currentTime);
            osc.stop(ctx.currentTime + 0.18);
        },
    },
    laser: {
        label: 'Laser',
        play: (ctx) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(3000 + Math.random() * 500, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.08);
            gain.gain.setValueAtTime(0.04, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
            osc.connect(gain).connect(ctx.destination);
            osc.start(ctx.currentTime);
            osc.stop(ctx.currentTime + 0.1);
        },
    },
    chime: {
        label: 'Chime',
        play: (ctx) => {
            const notes = [523.25, 659.25, 783.99, 1046.5];
            const freq = notes[Math.floor(Math.random() * notes.length)];
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, ctx.currentTime);
            gain.gain.setValueAtTime(0.06, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);
            osc.connect(gain).connect(ctx.destination);
            osc.start(ctx.currentTime);
            osc.stop(ctx.currentTime + 0.2);
            const osc2 = ctx.createOscillator();
            const g2 = ctx.createGain();
            osc2.type = 'sine';
            osc2.frequency.setValueAtTime(freq * 2, ctx.currentTime);
            g2.gain.setValueAtTime(0.02, ctx.currentTime);
            g2.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);
            osc2.connect(g2).connect(ctx.destination);
            osc2.start(ctx.currentTime);
            osc2.stop(ctx.currentTime + 0.15);
        },
    },
    bomb: {
        label: 'Bomb',
        play: (ctx) => {
            const noise = ctx.createBufferSource();
            const buf = ctx.createBuffer(1, ctx.sampleRate * 0.15, ctx.sampleRate);
            const data = buf.getChannelData(0);
            for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / data.length, 2);
            noise.buffer = buf;
            const g = ctx.createGain();
            g.gain.setValueAtTime(0.12, ctx.currentTime);
            g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);
            const filter = ctx.createBiquadFilter();
            filter.type = 'lowpass';
            filter.frequency.setValueAtTime(400, ctx.currentTime);
            filter.frequency.exponentialRampToValueAtTime(80, ctx.currentTime + 0.12);
            noise.connect(filter).connect(g).connect(ctx.destination);
            noise.start(ctx.currentTime);
            noise.stop(ctx.currentTime + 0.15);
            const osc = ctx.createOscillator();
            const g2 = ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(80, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(30, ctx.currentTime + 0.1);
            g2.gain.setValueAtTime(0.15, ctx.currentTime);
            g2.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);
            osc.connect(g2).connect(ctx.destination);
            osc.start(ctx.currentTime);
            osc.stop(ctx.currentTime + 0.12);
        },
    },
};

export const SOUND_KEYS = Object.keys(SOUND_PROFILES);

// ─── Background Music (Web Audio API synthesized loops) ───
export const MUSIC_TRACKS = {
    off: { label: 'Off' },
    lofi: {
        label: 'Lo-Fi Chill',
        create: (ctx) => {
            const notes = [261.63, 329.63, 392, 349.23, 293.66, 261.63, 329.63, 392];
            let noteIdx = 0;
            const gain = ctx.createGain();
            gain.gain.value = 0.04;
            gain.connect(ctx.destination);
            const playNote = () => {
                const osc = ctx.createOscillator();
                const g = ctx.createGain();
                osc.type = 'sine';
                osc.frequency.value = notes[noteIdx % notes.length];
                g.gain.setValueAtTime(0.04, ctx.currentTime);
                g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.8);
                osc.connect(g).connect(gain);
                osc.start(ctx.currentTime);
                osc.stop(ctx.currentTime + 0.9);
                noteIdx++;
            };
            playNote();
            const iv = setInterval(playNote, 900);
            return { stop: () => { clearInterval(iv); gain.disconnect(); } };
        },
    },
    ambient: {
        label: 'Ambient Pad',
        create: (ctx) => {
            const gain = ctx.createGain();
            gain.gain.value = 0.03;
            gain.connect(ctx.destination);
            const oscs = [220, 277.18, 329.63].map(freq => {
                const osc = ctx.createOscillator();
                osc.type = 'sine';
                osc.frequency.value = freq;
                const g = ctx.createGain();
                g.gain.value = 0.02;
                osc.connect(g).connect(gain);
                osc.start();
                return { osc, g };
            });
            const lfo = ctx.createOscillator();
            const lfoGain = ctx.createGain();
            lfo.frequency.value = 0.15;
            lfoGain.gain.value = 0.01;
            lfo.connect(lfoGain).connect(gain.gain);
            lfo.start();
            return { stop: () => { oscs.forEach(o => o.osc.stop()); lfo.stop(); gain.disconnect(); } };
        },
    },
    rain: {
        label: 'Rain',
        create: (ctx) => {
            const gain = ctx.createGain();
            gain.gain.value = 0.06;
            gain.connect(ctx.destination);
            const filter = ctx.createBiquadFilter();
            filter.type = 'bandpass';
            filter.frequency.value = 2000;
            filter.Q.value = 0.5;
            filter.connect(gain);
            const bufSize = ctx.sampleRate * 2;
            const buf = ctx.createBuffer(1, bufSize, ctx.sampleRate);
            const d = buf.getChannelData(0);
            for (let i = 0; i < bufSize; i++) d[i] = Math.random() * 2 - 1;
            const src = ctx.createBufferSource();
            src.buffer = buf;
            src.loop = true;
            src.connect(filter);
            src.start();
            return { stop: () => { src.stop(); gain.disconnect(); } };
        },
    },
    piano: {
        label: 'Soft Piano',
        create: (ctx) => {
            const melody = [523.25, 587.33, 659.25, 587.33, 523.25, 493.88, 440, 493.88];
            let idx = 0;
            const master = ctx.createGain();
            master.gain.value = 0.03;
            master.connect(ctx.destination);
            const playNote = () => {
                const osc = ctx.createOscillator();
                const g = ctx.createGain();
                osc.type = 'triangle';
                osc.frequency.value = melody[idx % melody.length];
                g.gain.setValueAtTime(0.04, ctx.currentTime);
                g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.2);
                osc.connect(g).connect(master);
                osc.start(ctx.currentTime);
                osc.stop(ctx.currentTime + 1.3);
                idx++;
            };
            playNote();
            const iv = setInterval(playNote, 1400);
            return { stop: () => { clearInterval(iv); master.disconnect(); } };
        },
    },
    space: {
        label: 'Deep Space',
        create: (ctx) => {
            const gain = ctx.createGain();
            gain.gain.value = 0.025;
            gain.connect(ctx.destination);
            const oscs = [65.41, 98, 130.81].map(freq => {
                const osc = ctx.createOscillator();
                osc.type = 'sine';
                osc.frequency.value = freq;
                const g = ctx.createGain();
                g.gain.value = 0.015;
                osc.connect(g).connect(gain);
                osc.start();
                return { osc, g };
            });
            const lfo = ctx.createOscillator();
            const lfoG = ctx.createGain();
            lfo.frequency.value = 0.08;
            lfoG.gain.value = 0.008;
            lfo.connect(lfoG).connect(gain.gain);
            lfo.start();
            return { stop: () => { oscs.forEach(o => o.osc.stop()); lfo.stop(); gain.disconnect(); } };
        },
    },
    forest: {
        label: 'Forest',
        create: (ctx) => {
            const gain = ctx.createGain();
            gain.gain.value = 0.04;
            gain.connect(ctx.destination);
            const bufSize = ctx.sampleRate * 2;
            const buf = ctx.createBuffer(1, bufSize, ctx.sampleRate);
            const d = buf.getChannelData(0);
            for (let i = 0; i < bufSize; i++) d[i] = Math.random() * 2 - 1;
            const src = ctx.createBufferSource();
            src.buffer = buf;
            src.loop = true;
            const filter = ctx.createBiquadFilter();
            filter.type = 'lowpass';
            filter.frequency.value = 500;
            filter.Q.value = 1;
            src.connect(filter).connect(gain);
            src.start();
            const chirpIv = setInterval(() => {
                if (Math.random() > 0.4) return;
                const osc = ctx.createOscillator();
                const g = ctx.createGain();
                osc.type = 'sine';
                const base = 2000 + Math.random() * 2000;
                osc.frequency.setValueAtTime(base, ctx.currentTime);
                osc.frequency.setValueAtTime(base * 1.2, ctx.currentTime + 0.05);
                osc.frequency.setValueAtTime(base * 0.9, ctx.currentTime + 0.1);
                g.gain.setValueAtTime(0.015, ctx.currentTime);
                g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);
                osc.connect(g).connect(gain);
                osc.start(ctx.currentTime);
                osc.stop(ctx.currentTime + 0.15);
            }, 2000);
            return { stop: () => { src.stop(); clearInterval(chirpIv); gain.disconnect(); } };
        },
    },
};

export const MUSIC_KEYS = Object.keys(MUSIC_TRACKS);

export const KEYBOARD_ROWS = [
    [
        { k: '`', w: 1 }, { k: '1', w: 1 }, { k: '2', w: 1 }, { k: '3', w: 1 },
        { k: '4', w: 1 }, { k: '5', w: 1 }, { k: '6', w: 1 }, { k: '7', w: 1 },
        { k: '8', w: 1 }, { k: '9', w: 1 }, { k: '0', w: 1 }, { k: '-', w: 1 },
        { k: '=', w: 1 }, { k: '⌫', v: 'Backspace', w: 1.6 },
    ],
    [
        { k: 'Q', v: 'q', w: 1 }, { k: 'W', v: 'w', w: 1 }, { k: 'E', v: 'e', w: 1 },
        { k: 'R', v: 'r', w: 1 }, { k: 'T', v: 't', w: 1 }, { k: 'Y', v: 'y', w: 1 },
        { k: 'U', v: 'u', w: 1 }, { k: 'I', v: 'i', w: 1 }, { k: 'O', v: 'o', w: 1 },
        { k: 'P', v: 'p', w: 1 }, { k: '[', w: 1 }, { k: ']', w: 1 },
        { k: '\\', w: 1 },
    ],
    [
        { k: 'A', v: 'a', w: 1 }, { k: 'S', v: 's', w: 1 }, { k: 'D', v: 'd', w: 1 },
        { k: 'F', v: 'f', w: 1 }, { k: 'G', v: 'g', w: 1 }, { k: 'H', v: 'h', w: 1 },
        { k: 'J', v: 'j', w: 1 }, { k: 'K', v: 'k', w: 1 }, { k: 'L', v: 'l', w: 1 },
        { k: ';', w: 1 }, { k: "'", w: 1 }, { k: '↵', v: 'Enter', w: 1.6 },
    ],
    [
        { k: '⇧', v: 'Shift', w: 1.8, id: 'lshift' },
        { k: 'Z', v: 'z', w: 1 }, { k: 'X', v: 'x', w: 1 }, { k: 'C', v: 'c', w: 1 },
        { k: 'V', v: 'v', w: 1 }, { k: 'B', v: 'b', w: 1 }, { k: 'N', v: 'n', w: 1 },
        { k: 'M', v: 'm', w: 1 }, { k: ',', w: 1 }, { k: '.', w: 1 },
        { k: '/', w: 1 }, { k: '⇧', v: 'Shift', w: 1.8, id: 'rshift' },
    ],
];

// ─── Color Themes ───
export const THEMES = {
    cyan: {
        label: 'Cyan', dot: '#22d3ee', accent: 'text-cyan-400', accentLight: 'text-blue-600',
        activeTextDark: 'text-cyan-300', correctDark: 'text-cyan-400/80',
        cursorDark: 'border-cyan-400', cursorLight: 'border-blue-500',
        charCorrectDark: 'text-cyan-300', charCorrectLight: 'text-blue-600',
        dropShadow: 'drop-shadow-[0_0_6px_rgba(34,211,238,0.6)]',
        hoverDark: 'hover:text-cyan-400', hoverLight: 'hover:text-blue-600',
        selectedDark: 'text-cyan-400 bg-cyan-400/10', selectedLight: 'text-blue-600 bg-blue-50',
        btnGradientDark: 'bg-gradient-to-r from-cyan-600 to-blue-600 shadow-lg shadow-cyan-500/20',
        btnGradientLight: 'bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg shadow-blue-500/30',
        keyActiveBgDark: 'linear-gradient(180deg, rgba(34,211,238,0.25) 0%, rgba(34,211,238,0.10) 100%)',
        keyActiveBgLight: 'linear-gradient(180deg, rgba(59,130,246,0.15) 0%, rgba(59,130,246,0.05) 100%)',
        keyActiveShadowDark: '0 1px 0 0 #0f1219, 0 0 20px rgba(34,211,238,0.35), inset 0 1px 1px rgba(34,211,238,0.15)',
        keyActiveShadowLight: '0 1px 0 0 #cbd5e1, 0 0 15px rgba(59,130,246,0.25), inset 0 1px 1px rgba(59,130,246,0.1)',
        keyActiveBorderDark: '1px solid rgba(34,211,238,0.5)', keyActiveBorderLight: '1px solid rgba(59,130,246,0.4)',
    },
    purple: {
        label: 'Purple', dot: '#a78bfa', accent: 'text-violet-400', accentLight: 'text-violet-600',
        activeTextDark: 'text-violet-300', correctDark: 'text-violet-400/80',
        cursorDark: 'border-violet-400', cursorLight: 'border-violet-500',
        charCorrectDark: 'text-violet-300', charCorrectLight: 'text-violet-600',
        dropShadow: 'drop-shadow-[0_0_6px_rgba(167,139,250,0.6)]',
        hoverDark: 'hover:text-violet-400', hoverLight: 'hover:text-violet-600',
        selectedDark: 'text-violet-400 bg-violet-400/10', selectedLight: 'text-violet-600 bg-violet-50',
        btnGradientDark: 'bg-gradient-to-r from-violet-600 to-purple-600 shadow-lg shadow-violet-500/20',
        btnGradientLight: 'bg-gradient-to-r from-violet-500 to-purple-600 shadow-lg shadow-violet-500/30',
        keyActiveBgDark: 'linear-gradient(180deg, rgba(167,139,250,0.25) 0%, rgba(167,139,250,0.10) 100%)',
        keyActiveBgLight: 'linear-gradient(180deg, rgba(139,92,246,0.15) 0%, rgba(139,92,246,0.05) 100%)',
        keyActiveShadowDark: '0 1px 0 0 #0f1219, 0 0 20px rgba(167,139,250,0.35), inset 0 1px 1px rgba(167,139,250,0.15)',
        keyActiveShadowLight: '0 1px 0 0 #cbd5e1, 0 0 15px rgba(139,92,246,0.25), inset 0 1px 1px rgba(139,92,246,0.1)',
        keyActiveBorderDark: '1px solid rgba(167,139,250,0.5)', keyActiveBorderLight: '1px solid rgba(139,92,246,0.4)',
    },
    rose: {
        label: 'Rose', dot: '#fb7185', accent: 'text-rose-400', accentLight: 'text-rose-600',
        activeTextDark: 'text-rose-300', correctDark: 'text-rose-400/80',
        cursorDark: 'border-rose-400', cursorLight: 'border-rose-500',
        charCorrectDark: 'text-rose-300', charCorrectLight: 'text-rose-600',
        dropShadow: 'drop-shadow-[0_0_6px_rgba(251,113,133,0.6)]',
        hoverDark: 'hover:text-rose-400', hoverLight: 'hover:text-rose-600',
        selectedDark: 'text-rose-400 bg-rose-400/10', selectedLight: 'text-rose-600 bg-rose-50',
        btnGradientDark: 'bg-gradient-to-r from-rose-600 to-pink-600 shadow-lg shadow-rose-500/20',
        btnGradientLight: 'bg-gradient-to-r from-rose-500 to-pink-600 shadow-lg shadow-rose-500/30',
        keyActiveBgDark: 'linear-gradient(180deg, rgba(251,113,133,0.25) 0%, rgba(251,113,133,0.10) 100%)',
        keyActiveBgLight: 'linear-gradient(180deg, rgba(225,29,72,0.15) 0%, rgba(225,29,72,0.05) 100%)',
        keyActiveShadowDark: '0 1px 0 0 #0f1219, 0 0 20px rgba(251,113,133,0.35), inset 0 1px 1px rgba(251,113,133,0.15)',
        keyActiveShadowLight: '0 1px 0 0 #cbd5e1, 0 0 15px rgba(225,29,72,0.25), inset 0 1px 1px rgba(225,29,72,0.1)',
        keyActiveBorderDark: '1px solid rgba(251,113,133,0.5)', keyActiveBorderLight: '1px solid rgba(225,29,72,0.4)',
    },
    amber: {
        label: 'Amber', dot: '#fbbf24', accent: 'text-amber-400', accentLight: 'text-amber-600',
        activeTextDark: 'text-amber-300', correctDark: 'text-amber-400/80',
        cursorDark: 'border-amber-400', cursorLight: 'border-amber-500',
        charCorrectDark: 'text-amber-300', charCorrectLight: 'text-amber-600',
        dropShadow: 'drop-shadow-[0_0_6px_rgba(251,191,36,0.6)]',
        hoverDark: 'hover:text-amber-400', hoverLight: 'hover:text-amber-600',
        selectedDark: 'text-amber-400 bg-amber-400/10', selectedLight: 'text-amber-600 bg-amber-50',
        btnGradientDark: 'bg-gradient-to-r from-amber-600 to-orange-600 shadow-lg shadow-amber-500/20',
        btnGradientLight: 'bg-gradient-to-r from-amber-500 to-orange-600 shadow-lg shadow-amber-500/30',
        keyActiveBgDark: 'linear-gradient(180deg, rgba(251,191,36,0.25) 0%, rgba(251,191,36,0.10) 100%)',
        keyActiveBgLight: 'linear-gradient(180deg, rgba(217,119,6,0.15) 0%, rgba(217,119,6,0.05) 100%)',
        keyActiveShadowDark: '0 1px 0 0 #0f1219, 0 0 20px rgba(251,191,36,0.35), inset 0 1px 1px rgba(251,191,36,0.15)',
        keyActiveShadowLight: '0 1px 0 0 #cbd5e1, 0 0 15px rgba(217,119,6,0.25), inset 0 1px 1px rgba(217,119,6,0.1)',
        keyActiveBorderDark: '1px solid rgba(251,191,36,0.5)', keyActiveBorderLight: '1px solid rgba(217,119,6,0.4)',
    },
    emerald: {
        label: 'Emerald', dot: '#34d399', accent: 'text-emerald-400', accentLight: 'text-emerald-600',
        activeTextDark: 'text-emerald-300', correctDark: 'text-emerald-400/80',
        cursorDark: 'border-emerald-400', cursorLight: 'border-emerald-500',
        charCorrectDark: 'text-emerald-300', charCorrectLight: 'text-emerald-600',
        dropShadow: 'drop-shadow-[0_0_6px_rgba(52,211,153,0.6)]',
        hoverDark: 'hover:text-emerald-400', hoverLight: 'hover:text-emerald-600',
        selectedDark: 'text-emerald-400 bg-emerald-400/10', selectedLight: 'text-emerald-600 bg-emerald-50',
        btnGradientDark: 'bg-gradient-to-r from-emerald-600 to-teal-600 shadow-lg shadow-emerald-500/20',
        btnGradientLight: 'bg-gradient-to-r from-emerald-500 to-teal-600 shadow-lg shadow-emerald-500/30',
        keyActiveBgDark: 'linear-gradient(180deg, rgba(52,211,153,0.25) 0%, rgba(52,211,153,0.10) 100%)',
        keyActiveBgLight: 'linear-gradient(180deg, rgba(16,185,129,0.15) 0%, rgba(16,185,129,0.05) 100%)',
        keyActiveShadowDark: '0 1px 0 0 #0f1219, 0 0 20px rgba(52,211,153,0.35), inset 0 1px 1px rgba(52,211,153,0.15)',
        keyActiveShadowLight: '0 1px 0 0 #cbd5e1, 0 0 15px rgba(16,185,129,0.25), inset 0 1px 1px rgba(16,185,129,0.1)',
        keyActiveBorderDark: '1px solid rgba(52,211,153,0.5)', keyActiveBorderLight: '1px solid rgba(16,185,129,0.4)',
    },
    sakura: {
        label: 'Sakura', dot: '#f9a8d4', accent: 'text-pink-300', accentLight: 'text-pink-600',
        activeTextDark: 'text-pink-200', correctDark: 'text-pink-300/80',
        cursorDark: 'border-pink-300', cursorLight: 'border-pink-500',
        charCorrectDark: 'text-pink-200', charCorrectLight: 'text-pink-600',
        dropShadow: 'drop-shadow-[0_0_6px_rgba(249,168,212,0.6)]',
        hoverDark: 'hover:text-pink-300', hoverLight: 'hover:text-pink-600',
        selectedDark: 'text-pink-300 bg-pink-300/10', selectedLight: 'text-pink-600 bg-pink-50',
        btnGradientDark: 'bg-gradient-to-r from-pink-500 to-rose-500 shadow-lg shadow-pink-500/20',
        btnGradientLight: 'bg-gradient-to-r from-pink-500 to-rose-500 shadow-lg shadow-pink-500/30',
        keyActiveBgDark: 'linear-gradient(180deg, rgba(249,168,212,0.25) 0%, rgba(249,168,212,0.10) 100%)',
        keyActiveBgLight: 'linear-gradient(180deg, rgba(236,72,153,0.15) 0%, rgba(236,72,153,0.05) 100%)',
        keyActiveShadowDark: '0 1px 0 0 #0f1219, 0 0 20px rgba(249,168,212,0.35), inset 0 1px 1px rgba(249,168,212,0.15)',
        keyActiveShadowLight: '0 1px 0 0 #cbd5e1, 0 0 15px rgba(236,72,153,0.25), inset 0 1px 1px rgba(236,72,153,0.1)',
        keyActiveBorderDark: '1px solid rgba(249,168,212,0.5)', keyActiveBorderLight: '1px solid rgba(236,72,153,0.4)',
    },
};

// Additional Themes
const addTheme = (name, cfg) => { THEMES[name] = cfg; };
addTheme('ocean', {
    label: 'Ocean', dot: '#38bdf8', accent: 'text-sky-400', accentLight: 'text-sky-600',
    activeTextDark: 'text-sky-300', correctDark: 'text-sky-400/80',
    cursorDark: 'border-sky-400', cursorLight: 'border-sky-500',
    charCorrectDark: 'text-sky-300', charCorrectLight: 'text-sky-600',
    dropShadow: 'drop-shadow-[0_0_6px_rgba(56,189,248,0.6)]',
    hoverDark: 'hover:text-sky-400', hoverLight: 'hover:text-sky-600',
    selectedDark: 'text-sky-400 bg-sky-400/10', selectedLight: 'text-sky-600 bg-sky-50',
    btnGradientDark: 'bg-gradient-to-r from-sky-600 to-blue-700 shadow-lg shadow-sky-500/20',
    btnGradientLight: 'bg-gradient-to-r from-sky-500 to-blue-600 shadow-lg shadow-sky-500/30',
    keyActiveBgDark: 'linear-gradient(180deg, rgba(56,189,248,0.25) 0%, rgba(56,189,248,0.10) 100%)',
    keyActiveBgLight: 'linear-gradient(180deg, rgba(2,132,199,0.15) 0%, rgba(2,132,199,0.05) 100%)',
    keyActiveShadowDark: '0 1px 0 0 #0f1219, 0 0 20px rgba(56,189,248,0.35), inset 0 1px 1px rgba(56,189,248,0.15)',
    keyActiveShadowLight: '0 1px 0 0 #cbd5e1, 0 0 15px rgba(2,132,199,0.25), inset 0 1px 1px rgba(2,132,199,0.1)',
    keyActiveBorderDark: '1px solid rgba(56,189,248,0.5)', keyActiveBorderLight: '1px solid rgba(2,132,199,0.4)',
});
addTheme('blood', {
    label: 'Blood', dot: '#ef4444', accent: 'text-red-400', accentLight: 'text-red-600',
    activeTextDark: 'text-red-300', correctDark: 'text-red-400/80',
    cursorDark: 'border-red-400', cursorLight: 'border-red-500',
    charCorrectDark: 'text-red-300', charCorrectLight: 'text-red-600',
    dropShadow: 'drop-shadow-[0_0_6px_rgba(239,68,68,0.6)]',
    hoverDark: 'hover:text-red-400', hoverLight: 'hover:text-red-600',
    selectedDark: 'text-red-400 bg-red-400/10', selectedLight: 'text-red-600 bg-red-50',
    btnGradientDark: 'bg-gradient-to-r from-red-600 to-red-800 shadow-lg shadow-red-500/20',
    btnGradientLight: 'bg-gradient-to-r from-red-500 to-red-700 shadow-lg shadow-red-500/30',
    keyActiveBgDark: 'linear-gradient(180deg, rgba(239,68,68,0.25) 0%, rgba(239,68,68,0.10) 100%)',
    keyActiveBgLight: 'linear-gradient(180deg, rgba(220,38,38,0.15) 0%, rgba(220,38,38,0.05) 100%)',
    keyActiveShadowDark: '0 1px 0 0 #0f1219, 0 0 20px rgba(239,68,68,0.35), inset 0 1px 1px rgba(239,68,68,0.15)',
    keyActiveShadowLight: '0 1px 0 0 #cbd5e1, 0 0 15px rgba(220,38,38,0.25), inset 0 1px 1px rgba(220,38,38,0.1)',
    keyActiveBorderDark: '1px solid rgba(239,68,68,0.5)', keyActiveBorderLight: '1px solid rgba(220,38,38,0.4)',
});
addTheme('arctic', {
    label: 'Arctic', dot: '#e2e8f0', accent: 'text-slate-300', accentLight: 'text-slate-600',
    activeTextDark: 'text-white', correctDark: 'text-slate-300/80',
    cursorDark: 'border-white', cursorLight: 'border-slate-600',
    charCorrectDark: 'text-white', charCorrectLight: 'text-slate-700',
    dropShadow: 'drop-shadow-[0_0_6px_rgba(226,232,240,0.6)]',
    hoverDark: 'hover:text-white', hoverLight: 'hover:text-slate-700',
    selectedDark: 'text-white bg-white/10', selectedLight: 'text-slate-700 bg-slate-100',
    btnGradientDark: 'bg-gradient-to-r from-slate-500 to-slate-700 shadow-lg shadow-slate-500/20',
    btnGradientLight: 'bg-gradient-to-r from-slate-500 to-slate-600 shadow-lg shadow-slate-500/30',
    keyActiveBgDark: 'linear-gradient(180deg, rgba(226,232,240,0.25) 0%, rgba(226,232,240,0.10) 100%)',
    keyActiveBgLight: 'linear-gradient(180deg, rgba(100,116,139,0.15) 0%, rgba(100,116,139,0.05) 100%)',
    keyActiveShadowDark: '0 1px 0 0 #0f1219, 0 0 20px rgba(226,232,240,0.35), inset 0 1px 1px rgba(226,232,240,0.15)',
    keyActiveShadowLight: '0 1px 0 0 #cbd5e1, 0 0 15px rgba(100,116,139,0.25), inset 0 1px 1px rgba(100,116,139,0.1)',
    keyActiveBorderDark: '1px solid rgba(226,232,240,0.5)', keyActiveBorderLight: '1px solid rgba(100,116,139,0.4)',
});
addTheme('sunset', {
    label: 'Sunset', dot: '#fb923c', accent: 'text-orange-400', accentLight: 'text-orange-600',
    activeTextDark: 'text-orange-300', correctDark: 'text-orange-400/80',
    cursorDark: 'border-orange-400', cursorLight: 'border-orange-500',
    charCorrectDark: 'text-orange-300', charCorrectLight: 'text-orange-600',
    dropShadow: 'drop-shadow-[0_0_6px_rgba(251,146,60,0.6)]',
    hoverDark: 'hover:text-orange-400', hoverLight: 'hover:text-orange-600',
    selectedDark: 'text-orange-400 bg-orange-400/10', selectedLight: 'text-orange-600 bg-orange-50',
    btnGradientDark: 'bg-gradient-to-r from-orange-500 to-red-500 shadow-lg shadow-orange-500/20',
    btnGradientLight: 'bg-gradient-to-r from-orange-500 to-red-500 shadow-lg shadow-orange-500/30',
    keyActiveBgDark: 'linear-gradient(180deg, rgba(251,146,60,0.25) 0%, rgba(251,146,60,0.10) 100%)',
    keyActiveBgLight: 'linear-gradient(180deg, rgba(234,88,12,0.15) 0%, rgba(234,88,12,0.05) 100%)',
    keyActiveShadowDark: '0 1px 0 0 #0f1219, 0 0 20px rgba(251,146,60,0.35), inset 0 1px 1px rgba(251,146,60,0.15)',
    keyActiveShadowLight: '0 1px 0 0 #cbd5e1, 0 0 15px rgba(234,88,12,0.25), inset 0 1px 1px rgba(234,88,12,0.1)',
    keyActiveBorderDark: '1px solid rgba(251,146,60,0.5)', keyActiveBorderLight: '1px solid rgba(234,88,12,0.4)',
});

export const THEME_KEYS = Object.keys(THEMES);

export const generateWords = (count = 80, usePunctuation = false, useNumbers = false) => {
    const words = [];
    for (let i = 0; i < count; i++) {
        let word = WORD_BANK[Math.floor(Math.random() * WORD_BANK.length)];
        if (usePunctuation && Math.random() < 0.2) {
            word = word.charAt(0).toUpperCase() + word.slice(1);
        }
        if (usePunctuation && Math.random() < 0.25) {
            const p = PUNCTUATION[Math.floor(Math.random() * PUNCTUATION.length)];
            if (p === '"') word = '"' + word + '"';
            else if (p === '(') word = '(' + word + ')';
            else word += p;
        }
        if (useNumbers && Math.random() < 0.2) {
            const style = Math.random();
            if (style < 0.3) word = String(Math.floor(Math.random() * 9999));
            else if (style < 0.5) word = String((Math.random() * 100).toFixed(1));
            else if (style < 0.65) word = String(1900 + Math.floor(Math.random() * 126));
            else if (style < 0.8) word = String(Math.floor(Math.random() * 100)) + '%';
            else if (style < 0.9) word = '-' + String(Math.floor(Math.random() * 999));
            else word = String(Math.floor(Math.random() * 999)) + '-' + String(Math.floor(Math.random() * 9999));
        }
        words.push(word);
    }
    return words;
};
