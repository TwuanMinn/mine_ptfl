import React, { memo } from 'react';
import { KEYBOARD_ROWS } from './typingTestData';

const VirtualKeyboard = memo(({ activeKey, darkMode, theme }) => {

    const isKeyActive = (keyObj) => {
        if (!activeKey) return false;
        const matchVal = (keyObj.v || keyObj.k).toLowerCase();
        const pressed = activeKey.toLowerCase();
        return pressed === matchVal;
    };

    return (
        <div className="mt-48 select-none px-1 sm:px-4" style={{ perspective: '900px' }}>
            <div
                className={`rounded-xl sm:rounded-2xl p-2 sm:p-3 md:p-5 ${darkMode
                    ? 'bg-gradient-to-b from-slate-800/50 to-slate-900/80 border border-slate-700/30'
                    : 'bg-gradient-to-b from-slate-100 to-slate-200/80 border border-slate-200'
                    }`}
                style={{
                    transform: 'rotateX(6deg)',
                    transformOrigin: 'center bottom',
                    boxShadow: darkMode
                        ? '0 -2px 20px rgba(0,0,0,0.3), 0 10px 40px rgba(0,0,0,0.5)'
                        : '0 -2px 15px rgba(0,0,0,0.05), 0 10px 30px rgba(0,0,0,0.1)',
                }}
            >
                {/* We use CSS clamp for responsive key unit size:
                    ~24px on 320px screen, ~36px on 480px, ~48px on 768px+ */}
                <div className="keyboard-responsive-grid">
                    {KEYBOARD_ROWS.map((row, rowIdx) => (
                        <div key={rowIdx} className="flex justify-center gap-[2px] sm:gap-[4px] md:gap-[5px] mb-[2px] sm:mb-[4px] md:mb-[5px]">
                            {row.map((keyObj, keyIdx) => {
                                const active = isKeyActive(keyObj);
                                const isWide = keyObj.w > 1;
                                return (
                                    <div
                                        key={keyObj.id || `${rowIdx}-${keyIdx}`}
                                        className="keyboard-key flex items-center justify-center font-mono font-semibold cursor-default"
                                        data-active={active || undefined}
                                        data-w={keyObj.w}
                                        style={{
                                            background: active
                                                ? darkMode ? theme.keyActiveBgDark : theme.keyActiveBgLight
                                                : darkMode
                                                    ? 'linear-gradient(180deg, #2a2f3e 0%, #1e2230 60%, #181c28 100%)'
                                                    : 'linear-gradient(180deg, #ffffff 0%, #f1f5f9 60%, #e2e8f0 100%)',
                                            boxShadow: active
                                                ? darkMode ? theme.keyActiveShadowDark : theme.keyActiveShadowLight
                                                : darkMode
                                                    ? '0 3px 0 0 #0f1219, 0 4px 8px rgba(0,0,0,0.4), inset 0 1px 1px rgba(255,255,255,0.05)'
                                                    : '0 3px 0 0 #cbd5e1, 0 4px 8px rgba(0,0,0,0.08), inset 0 1px 1px rgba(255,255,255,0.8)',
                                            border: active
                                                ? darkMode ? theme.keyActiveBorderDark : theme.keyActiveBorderLight
                                                : darkMode ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(0,0,0,0.08)',
                                            transform: active ? 'translateY(2px)' : 'translateY(0)',
                                            transition: 'all 0.08s ease',
                                        }}
                                    >
                                        <span
                                            className={
                                                active
                                                    ? darkMode ? `${theme.activeTextDark} ${theme.dropShadow}` : theme.accentLight
                                                    : darkMode ? 'text-slate-300' : 'text-slate-700'
                                            }
                                            style={{ fontSize: isWide ? 'clamp(8px, 2vw, 12px)' : 'clamp(9px, 2.5vw, 15px)' }}
                                        >
                                            {keyObj.k}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                    {/* Space bar */}
                    <div className="flex justify-center mt-[2px] sm:mt-[4px] md:mt-[5px]">
                        <div
                            className="keyboard-key keyboard-space flex items-center justify-center font-mono font-semibold cursor-default"
                            data-active={activeKey === ' ' || undefined}
                            style={{
                                background: activeKey === ' '
                                    ? darkMode ? theme.keyActiveBgDark : theme.keyActiveBgLight
                                    : darkMode
                                        ? 'linear-gradient(180deg, #2a2f3e 0%, #1e2230 60%, #181c28 100%)'
                                        : 'linear-gradient(180deg, #ffffff 0%, #f1f5f9 60%, #e2e8f0 100%)',
                                boxShadow: activeKey === ' '
                                    ? darkMode ? theme.keyActiveShadowDark : theme.keyActiveShadowLight
                                    : darkMode
                                        ? '0 3px 0 0 #0f1219, 0 4px 8px rgba(0,0,0,0.4), inset 0 1px 1px rgba(255,255,255,0.05)'
                                        : '0 3px 0 0 #cbd5e1, 0 4px 8px rgba(0,0,0,0.08), inset 0 1px 1px rgba(255,255,255,0.8)',
                                border: activeKey === ' '
                                    ? darkMode ? theme.keyActiveBorderDark : theme.keyActiveBorderLight
                                    : darkMode ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(0,0,0,0.08)',
                                transform: activeKey === ' ' ? 'translateY(2px)' : 'translateY(0)',
                                transition: 'all 0.08s ease',
                            }}
                        >
                            <span
                                className={
                                    activeKey === ' '
                                        ? darkMode ? `${theme.activeTextDark} ${theme.dropShadow}` : theme.accentLight
                                        : darkMode ? 'text-slate-400' : 'text-slate-500'
                                }
                                style={{ fontSize: 'clamp(8px, 2vw, 12px)' }}
                            >
                                SPACE
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});
VirtualKeyboard.displayName = 'VirtualKeyboard';

export default VirtualKeyboard;
