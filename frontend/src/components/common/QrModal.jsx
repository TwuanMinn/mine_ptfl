import React from 'react';
import { Share2, Download } from 'lucide-react';

export const QrModal = ({
    qrOpen,
    setQrOpen,
    portfolioUrl,
    qrCodeUrl,
    handleDownloadQr
}) => {
    if (!qrOpen) return null;

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
            <div
                className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
                onClick={() => setQrOpen(false)}
            ></div>
            <div className="relative w-full max-w-sm rounded-[32px] p-[3px] bg-gradient-to-br from-white/30 via-white/10 to-transparent shadow-[0_30px_60px_rgba(0,0,0,0.5)] animate-popup">
                <button
                    onClick={() => setQrOpen(false)}
                    className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/80 hover:bg-white text-black/70 flex items-center justify-center transition shadow-[0_6px_16px_rgba(0,0,0,0.18)]"
                    aria-label="close-qr"
                >
                    ✕
                </button>
                <div className="relative p-6 pt-10 bg-white/70 rounded-[22px] backdrop-blur">
                    <div className="rounded-2xl bg-white p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
                        <img
                            src={qrCodeUrl}
                            alt="Website QR code"
                            className="w-full h-auto"
                        />
                    </div>
                    <p className="mt-4 text-center font-semibold text-purple-600 tracking-wide">
                        {portfolioUrl}
                    </p>
                    <div className="mt-4 grid grid-cols-2 gap-3">
                        <button
                            onClick={() => navigator.share?.({ title: 'My Portfolio', url: portfolioUrl })}
                            className="rounded-2xl border border-blue-200/60 bg-gradient-to-r from-blue-500 via-cyan-500 to-sky-500 py-3 text-[0.95rem] font-semibold text-white shadow-[0_10px_24px_rgba(14,116,144,0.35)] transition-all duration-200 hover:from-indigo-500 hover:via-blue-500 hover:to-cyan-400 hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow-[0_16px_32px_rgba(14,116,144,0.5)] hover:ring-1 hover:ring-white/60 hover:brightness-110 flex items-center justify-center gap-2"
                        >
                            <Share2 size={16} strokeWidth={1.75} />
                            Share
                        </button>
                        <button
                            onClick={handleDownloadQr}
                            className="rounded-2xl border border-blue-200/60 bg-gradient-to-r from-blue-500 via-cyan-500 to-sky-500 py-3 text-[0.95rem] font-semibold text-white shadow-[0_10px_24px_rgba(14,116,144,0.35)] transition-all duration-200 hover:from-indigo-500 hover:via-blue-500 hover:to-cyan-400 hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow-[0_16px_32px_rgba(14,116,144,0.5)] hover:ring-1 hover:ring-white/60 hover:brightness-110 flex items-center justify-center gap-2"
                        >
                            <Download size={16} strokeWidth={1.75} />
                            Download QR
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
