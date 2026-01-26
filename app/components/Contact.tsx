"use client"

import { Phone, Instagram, MapPin } from 'lucide-react';

export default function Contact() {
    return (
        <section id="kontakt" className="py-24 px-6 relative overflow-hidden bg-[#020617]">
            <div className="absolute inset-0 bg-[#1C7049] opacity-5 z-0" />

            <div className="max-w-4xl mx-auto bg-[#020617] border border-white/10 rounded-[2.5rem] p-8 md:p-16 relative z-10 text-center shadow-2xl">
                <h2 className="text-3xl md:text-5xl font-light text-white mb-8">Spremni za avanturu?</h2>
                <p className="text-gray-400 mb-12 text-lg">
                    Termini se brzo popunjavaju, posebno vikendom. <br/>Kontaktirajte nas da rezervišete svoj čamac na vreme.
                </p>

                <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
                    <a href="tel:+381600000000" className="flex items-center justify-center gap-3 bg-[#1C7049] hover:bg-[#155d3c] text-white px-8 py-4 rounded-xl font-bold transition-all w-full md:w-auto">
                        <Phone size={20} />
                        +381 6X XXX XXXX
                    </a>
                    <a href="https://instagram.com/uvackrstarica" className="flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-xl font-bold transition-all w-full md:w-auto">
                        <Instagram size={20} />
                        Instagram DM
                    </a>
                </div>

                <div className="flex items-center justify-center gap-2 text-gray-500 text-sm">
                    <MapPin size={16} />
                    <span>Polazna tačka: Kamp Markova Ravan, Uvac</span>
                </div>
            </div>

            <footer className="mt-20 text-center border-t border-white/5 pt-8 text-gray-600 text-sm">
                <p>&copy; {new Date().getFullYear()} Plovidba Uvac. Sva prava zadržana.</p>
            </footer>
        </section>
    );
}