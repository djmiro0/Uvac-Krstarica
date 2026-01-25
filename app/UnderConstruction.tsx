import React from 'react';

export default function UnderConstruction() {
    return (
        <div className="min-h-screen bg-[#020617] flex items-center justify-center relative overflow-hidden selection:bg-[#16593A]/30 font-sans">
            {/* Pozadinska slika */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url('/img.png')`,
                }}
            />

            {/* Overlay - Tamni gradijent za luksuzan izgled */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#020617]/95 via-[#020617]/85 to-[#020617]/90 z-10" />

            <main className="relative z-20 w-full max-w-4xl px-4 sm:px-6 py-8 md:py-12">
                <div className="bg-white/[0.02] backdrop-blur-2xl border border-white/10 p-6 md:p-20 rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl overflow-hidden relative">

                    {/* Ambijentalni sjaj u novoj zelenoj boji */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#16593A]/20 blur-3xl -z-10" />

                    {/* Header sekcija */}
                    <header className="mb-8 md:mb-12 text-center">
                        <span className="inline-block text-[#16593A] font-bold tracking-[0.2em] md:tracking-[0.4em] uppercase text-[9px] md:text-[10px] mb-4 md:mb-6 border-b border-[#16593A]/40 pb-2">
                            Premium Nature Experience
                        </span>
                        <h1 className="text-4xl md:text-7xl font-light text-white mb-4 md:mb-6 tracking-tighter leading-tight flex items-center justify-center gap-3">
    <span>
        Uvac<span className="font-black italic text-[#134D37]">Krstarica</span>
    </span>
                            <div
                                style={{
                                    backgroundColor: '#134D37',
                                    WebkitMaskImage: `url('/favicon.ico')`,
                                    maskImage: `url('/favicon.ico')`,
                                    WebkitMaskRepeat: 'no-repeat',
                                    maskRepeat: 'no-repeat',
                                    maskSize: 'contain',
                                    WebkitMaskPosition: 'center',
                                    width: '0.8em',
                                    height: '0.8em',
                                    minWidth: '35px',
                                    minHeight: '35px'
                                }}
                                aria-hidden="true"
                            />
                        </h1>
                        <p className="text-gray-400 text-sm md:text-lg max-w-lg mx-auto leading-relaxed font-light">
                            Vaša sledeća avantura kroz meandre je u pripremi. Lansiramo napredni sistem za online rezervacije.
                        </p>
                    </header>

                    {/* Info sekcija */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-2xl mx-auto mb-10 md:mb-16">
                        <div className="flex flex-col items-center justify-center bg-white/[0.03] border border-white/5 py-6 md:py-8 rounded-xl md:rounded-2xl transition-colors hover:bg-white/[0.05]">
                            <span className="text-gray-500 uppercase text-[8px] md:text-[9px] tracking-[0.2em] mb-2 md:mb-3 font-bold">Kapetan tura</span>
                            <span className="text-white text-lg md:text-xl font-medium tracking-tight">Petar Petrović</span>
                        </div>
                        <div className="flex flex-col items-center justify-center bg-white/[0.03] border border-white/5 py-6 md:py-8 rounded-xl md:rounded-2xl transition-colors hover:bg-white/[0.05]">
                            <span className="text-gray-500 uppercase text-[8px] md:text-[9px] tracking-[0.2em] mb-2 md:mb-3 font-bold">Direktni kontakt</span>
                            <a href="tel:+3816X1234567" className="text-white text-lg md:text-xl font-medium hover:text-[#16593A] transition-colors underline decoration-[#16593A]/50 underline-offset-4 md:underline-offset-8">
                                +381 6X XXX XXXX
                            </a>
                        </div>
                    </div>

                    {/* Poziv na akciju - Dugme u novoj zelenoj boji */}
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
                        <button className="w-full md:w-auto bg-[#16593A] hover:bg-[#1a6348] text-white px-8 md:px-12 py-4 rounded-xl font-bold transition-all shadow-lg shadow-black/20 active:scale-95 text-sm md:text-base">
                            USKORO ZAKAZIVANJE
                        </button>
                        <a
                            href="https://www.instagram.com/rezervat_uvac_krstarenje?igsh=MXFhbmZiMTJoOWk3ag%3D%3D"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full md:w-auto flex items-center justify-center gap-2 text-white/80 hover:text-white px-8 md:px-10 py-4 rounded-xl font-bold transition-all border border-white/10 hover:bg-white/5 text-sm md:text-base"
                        >
                            PRATITE NAS NA INSTAGRAMU
                        </a>
                    </div>
                </div>

                {/* Footer */}
                <footer className="mt-8 md:mt-12 text-center">
                    <p className="text-white/40 text-[8px] md:text-[11px] uppercase tracking-[0.2em] md:tracking-[0.5em] font-medium leading-loose">
                        &copy; 2026 Uvac Krstarica <br className="md:hidden" />
                        <span className="hidden md:inline"> &bull; </span>
                        Professional Booking Platform
                    </p>
                </footer>
            </main>

            {/* Suptilno pozadinsko svetlo u novoj boji */}
            <div className="absolute -bottom-24 -left-24 w-64 md:w-96 h-64 md:h-96 bg-[#16593A]/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />
        </div>
    );
}