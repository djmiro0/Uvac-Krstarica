"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Instagram, MapPin, Clock, MessageCircle, Navigation, Ship, CarFront } from 'lucide-react';

export default function Contact() {
    return (
        <section id="kontakt" className="py-24 px-4 md:px-6 relative overflow-hidden bg-[#020617]">
            {/* Dekorativni pozadinski elementi */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#1C7049]/10 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#1C7049]/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Glavni kontejner - 1 kolona na mobilnom, 2 kolone na desktopu */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 bg-[#020617] border border-white/10 rounded-[2.5rem] md:rounded-[3rem] p-6 md:p-12 shadow-2xl">

                    {/* LEVA STRANA: Tekst, Informacije i Dugmići */}
                    <div className="flex flex-col justify-between gap-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-5xl font-light text-white mb-4">
                                Rezervišite <br />
                                <span className="font-bold text-[#1C7049]">Svoj Termin</span>
                            </h2>
                            <p className="text-gray-400 mb-8 text-base md:text-lg leading-relaxed">
                                Ne propustite priliku da doživite meandre iz najbolje perspektive.
                                Naši termini se brzo popunjavaju.
                            </p>

                            {/* Informacije (Vreme i Lokacija) */}
                            <div className="space-y-6">
                                <div className="flex items-start gap-4 text-gray-300">
                                    <div className="w-10 h-10 shrink-0 rounded-full bg-white/5 flex items-center justify-center text-[#1C7049] mt-1">
                                        <Clock size={20} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-gray-500 uppercase font-bold mb-1">Radno Vreme (09:00 - 18:00h)</p>
                                        <div className="space-y-2 mt-2">
                                            <div className="flex items-center gap-2">
                                                <Ship size={16} className="text-[#1C7049]" />
                                                <p className="text-sm md:text-base"><span className="font-semibold text-white">Brodić:</span> Od aprila do oktobra</p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <CarFront size={16} className="text-[#1C7049]" />
                                                <p className="text-sm md:text-base"><span className="font-semibold text-white">Džip ture:</span> Tokom cele godine</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 text-gray-300">
                                    <div className="w-10 h-10 shrink-0 rounded-full bg-white/5 flex items-center justify-center text-[#1C7049]">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-gray-500 uppercase font-bold">Lokacija Polaska</p>
                                        <p className="text-sm md:text-base italic">Komarani BB, 31320, Srbija</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Dugmići (Sada su ispod teksta na levoj strani) */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="flex flex-col gap-3 w-full"
                        >
                            <a
                                href="tel:+381653030319"
                                className="group flex items-center justify-between bg-[#1C7049] hover:bg-[#155d3c] text-white p-4 md:p-5 rounded-2xl font-bold transition-all shadow-lg shadow-[#1C7049]/20 overflow-hidden"
                            >
                                <div className="flex items-center gap-3 md:gap-4 overflow-hidden">
                                    <Phone size={22} className="shrink-0" />
                                    <div className="text-left overflow-hidden">
                                        <span className="block text-[9px] uppercase opacity-70 tracking-wider text-nowrap">Pozovite odmah</span>
                                        <span className="text-base sm:text-lg block text-nowrap">+381 60 3228 819</span>
                                    </div>
                                </div>
                                <Navigation size={18} className="shrink-0 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all hidden sm:block" />
                            </a>

                            <a
                                href="https://wa.me/+381603228819"
                                className="flex items-center gap-3 md:gap-4 bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/20 text-white p-4 md:p-5 rounded-2xl font-bold transition-all overflow-hidden"
                            >
                                <MessageCircle size={22} className="text-[#25D366] shrink-0" />
                                <div className="text-left overflow-hidden">
                                    <span className="block text-[9px] uppercase text-gray-500 tracking-wider text-nowrap">WhatsApp Rezervacija</span>
                                    <span className="text-base sm:text-lg block text-nowrap">Pošaljite poruku</span>
                                </div>
                            </a>

                            <a
                                href="https://www.instagram.com/rezervat_uvac_krstarenje"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-3 md:gap-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white p-4 md:p-5 rounded-2xl font-bold transition-all overflow-hidden"
                            >
                                <Instagram size={22} className="text-pink-500 shrink-0" />
                                <div className="text-left overflow-hidden">
                                    <span className="block text-[9px] uppercase text-gray-500 tracking-wider text-nowrap">Zaprati nas</span>
                                    <span className="text-sm sm:text-base block truncate max-w-full">@rezervat_uvac_krstarenje</span>
                                </div>
                            </a>
                        </motion.div>
                    </div>

                    {/* DESNA STRANA: Mapa */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="w-full h-[450px] lg:h-full min-h-[400px] rounded-[2rem] overflow-hidden border border-[#1C7049]/50 shadow-[0_0_25px_rgba(28,112,73,0.3)] relative"
                    >
                        {/* Unutrašnji sjaj na ivicama */}
                        <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-[#1C7049]/30 rounded-[2rem] z-10" />

                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3233.8832328634353!2d19.9261475!3d43.417939399999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4757ef648d00e42d%3A0x5acfc8c3984e5e96!2sKrstarenje%20Uvcem%20-%20Uvac%20cruise!5e1!3m2!1sen!2sde!4v1773065648046!5m2!1sen!2sde"
                            width="100%"
                            height="100%"
                            style={{
                                border: 0,
                                filter: "contrast(1.05) brightness(0.9) saturate(1.1)",
                            }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Uvac Lokacija"
                            className="opacity-95 hover:opacity-100 transition-opacity duration-500 w-full h-full object-cover"
                        />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}