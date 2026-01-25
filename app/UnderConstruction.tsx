import React from 'react';

export default function UnderConstruction() {
    return (
        <div className="min-h-screen bg-[#020617] flex items-center justify-center relative overflow-hidden selection:bg-emerald-500/30 font-sans">
            {/* Pozadinska slika iz public foldera */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url('/img.png')`, // Putanja ka slici u public folderu
                }}
            />

            {/* Rafinirani gradijent overlay za maksimalnu čitljivost */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#020617]/95 via-[#020617]/70 to-[#020617]/90 z-10" />

            <main className="relative z-20 w-full max-w-4xl px-6 py-12">
                <div className="bg-white/[0.02] backdrop-blur-2xl border border-white/10 p-10 md:p-20 rounded-[2.5rem] shadow-2xl overflow-hidden relative">

                    {/* Suptilni odsjaj u uglu kartice */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-3xl -z-10" />

                    {/* Header sekcija */}
                    <header className="mb-12 text-center">
                        <span className="inline-block text-emerald-400 font-medium tracking-[0.4em] uppercase text-[10px] mb-6 border-b border-emerald-500/40 pb-2">
                            Premium Nature Experience
                        </span>
                        <h1 className="text-5xl md:text-7xl font-light text-white mb-6 tracking-tighter">
                            Uvac<span className="font-black italic text-emerald-500">Krstarica</span>
                        </h1>
                        <p className="text-gray-400 text-lg max-w-lg mx-auto leading-relaxed font-light">
                            Vaša sledeća avantura kroz meandre je u pripremi. Lansiramo napredni sistem za online rezervacije.
                        </p>
                    </header>

                    {/* Info sekcija - Čisto i pregledno */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-16">
                        <div className="group flex flex-col items-center justify-center bg-white/[0.03] border border-white/5 py-8 rounded-2xl transition-all hover:bg-white/[0.06]">
                            <span className="text-gray-500 uppercase text-[9px] tracking-[0.2em] mb-3 font-bold">Kapetan tura</span>
                            <span className="text-white text-xl font-medium tracking-tight">Petar Petrović</span>
                        </div>
                        <div className="group flex flex-col items-center justify-center bg-white/[0.03] border border-white/5 py-8 rounded-2xl transition-all hover:bg-white/[0.06]">
                            <span className="text-gray-500 uppercase text-[9px] tracking-[0.2em] mb-3 font-bold">Direktni kontakt</span>
                            <a href="tel:+3816X1234567" className="text-white text-xl font-medium hover:text-emerald-400 transition-colors underline decoration-emerald-500/30 underline-offset-8">
                                +381 6X XXX XXXX
                            </a>
                        </div>
                    </div>

                    {/* Poziv na akciju */}
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <button className="w-full md:w-auto bg-emerald-600 hover:bg-emerald-500 text-white px-12 py-4 rounded-xl font-bold transition-all shadow-lg shadow-emerald-900/20 active:scale-95">
                            USKORO ZAKAZIVANJE
                        </button>
                        <a
                            href="https://instagram.com/uvackrstarica"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full md:w-auto flex items-center justify-center gap-2 text-white/80 hover:text-white px-10 py-4 rounded-xl font-bold transition-all border border-white/10 hover:bg-white/5"
                        >
                            PRATITE NAS NA INSTAGRAMU
                        </a>
                    </div>
                </div>

                {/* Donji tekst */}
                <footer className="mt-12 text-center">
                    <p className="text-white/20 text-[9px] uppercase tracking-[0.5em] font-medium">
                        &copy; 2026 Uvac Krstarica &bull; Professional Booking Platform
                    </p>
                </footer>
            </main>

            {/* Ambijentalno svetlo u pozadini */}
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none" />
        </div>
    );
}