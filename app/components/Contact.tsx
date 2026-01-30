"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Instagram, MapPin, Clock, MessageCircle, Navigation } from 'lucide-react';

export default function Contact() {
    const currentYear = new Date().getFullYear();

    return (
        <section id="kontakt" className="py-24 px-4 md:px-6 relative overflow-hidden bg-[#020617]">
            {/* Dekorativni pozadinski elementi */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#1C7049]/10 blur-[100px] rounded-full" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#1C7049]/5 blur-[100px] rounded-full" />

            <div className="max-w-5xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-[#020617] border border-white/10 rounded-[2.5rem] md:rounded-[3rem] p-6 md:p-16 shadow-2xl">

                    {/* Leva strana: Tekst i informacije */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-5xl font-light text-white mb-6">
                                Rezervišite <br />
                                <span className="font-bold text-[#1C7049]">Svoj Termin</span>
                            </h2>
                            <p className="text-gray-400 mb-8 text-base md:text-lg leading-relaxed">
                                Ne propustite priliku da doživite meandre iz najbolje perspektive.
                                Naši termini se brzo popunjavaju.
                            </p>

                            <div className="space-y-6 mb-10">
                                <div className="flex items-center gap-4 text-gray-300">
                                    <div className="w-10 h-10 shrink-0 rounded-full bg-white/5 flex items-center justify-center text-[#1C7049]">
                                        <Clock size={20} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-gray-500 uppercase font-bold">Radno Vreme</p>
                                        <p className="text-sm md:text-base">Svaki dan: 09:00 - 18:00h</p>
                                        <p className="text-sm md:text-base">Od Aprila do Oktobra</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 text-gray-300">
                                    <div className="w-10 h-10 shrink-0 rounded-full bg-white/5 flex items-center justify-center text-[#1C7049]">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-gray-500 uppercase font-bold">Lokacija Polaska</p>
                                        <p className="text-sm md:text-base italic">Kamp Markova Ravan, Uvac</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Desna strana: Dugmići - REŠEN RESPONSIVE PROBLEM */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="flex flex-col gap-3 w-full"
                    >
                        {/* Telefon */}
                        <a
                            href="tel:+381653030319"
                            className="group flex items-center justify-between bg-[#1C7049] hover:bg-[#155d3c] text-white p-5 md:p-6 rounded-2xl font-bold transition-all shadow-lg shadow-[#1C7049]/20 overflow-hidden"
                        >
                            <div className="flex items-center gap-3 md:gap-4 overflow-hidden">
                                <Phone size={22} className="shrink-0" />
                                <div className="text-left overflow-hidden">
                                    <span className="block text-[9px] uppercase opacity-70 tracking-wider text-nowrap">Pozovite odmah</span>
                                    {/* Smanjen font na mobilnom (text-base), veći na desktopu (text-xl) */}
                                    <span className="text-base sm:text-lg md:text-xl block text-nowrap">+381 65 3030 319</span>
                                </div>
                            </div>
                            <Navigation size={18} className="shrink-0 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all hidden sm:block" />
                        </a>

                        {/* WhatsApp */}
                        <a
                            href="https://wa.me/381653030319"
                            className="flex items-center gap-3 md:gap-4 bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/20 text-white p-5 md:p-6 rounded-2xl font-bold transition-all overflow-hidden"
                        >
                            <MessageCircle size={22} className="text-[#25D366] shrink-0" />
                            <div className="text-left overflow-hidden">
                                <span className="block text-[9px] uppercase text-gray-500 tracking-wider text-nowrap">WhatsApp Rezervacija</span>
                                <span className="text-base sm:text-lg md:text-xl block text-nowrap">Pošaljite poruku</span>
                            </div>
                        </a>

                        {/* Instagram */}
                        <a
                            href="https://www.instagram.com/rezervat_uvac_krstarenje"
                            target="_blank"
                            className="flex items-center gap-3 md:gap-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white p-5 md:p-6 rounded-2xl font-bold transition-all overflow-hidden"
                        >
                            <Instagram size={22} className="text-pink-500 shrink-0" />
                            <div className="text-left overflow-hidden">
                                <span className="block text-[9px] uppercase text-gray-500 tracking-wider text-nowrap">Zaprati nas</span>
                                {/* Ključno: text-xs na najužim ekranima, smanjuje se da ne bi virilo */}
                                <span className="text-sm sm:text-base md:text-lg block truncate max-w-full">@rezervat_uvac_krstarenje</span>
                            </div>
                        </a>
                    </motion.div>
                </div>

                {/* Footer deo */}
                <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 text-[12px] md:text-sm text-center md:text-left">
                    <div>
                        <p className="font-bold text-gray-400 mb-1">Specijalni Rezervat Prirode Uvac</p>
                        <p>&copy; {currentYear} Plovidba Uvac. Sva prava zadržana.</p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                        <a href="#kanjon" className="hover:text-[#1C7049] transition-colors">O Rezervatu</a>
                        <a href="#voznja" className="hover:text-[#1C7049] transition-colors">Ture</a>
                        <a href="#" className="hover:text-[#1C7049] transition-colors">Privatnost</a>
                    </div>
                </div>
            </div>
        </section>
    );
}