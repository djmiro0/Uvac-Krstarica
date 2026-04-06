"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Bike, Compass, Trees } from 'lucide-react';
import Image from "next/image";

export default function QuadAdventure() {
    return (
        <section id="kvad-tura" className="py-24 px-6 relative bg-[#020617] overflow-hidden">
            {/* Suptilna pozadinska senka */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(28,112,73,0.05),transparent)] pointer-events-none" />

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-[#1C7049] tracking-widest uppercase text-sm font-bold mb-2 block">
                        Avantura na četiri točka
                    </span>
                    <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
                        Kvad Tura: Uvac iz <br />
                        <span className="font-bold text-[#1C7049]">Nove Perspektive</span>
                    </h2>

                    <p className="text-gray-400 leading-relaxed mb-8 text-lg">
                        Pored plovidbe meandrima, nudimo vam priliku da osetite adrenalin na kopnu. Naše kvad rute vode vas kroz skrivene staze rezervata,
                        otvarajući vidike koji su nedostupni pešacima i običnim vozilima.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                        <div className="flex gap-4 items-start">
                            <div className="bg-[#1C7049]/20 p-2 rounded-lg text-[#1C7049]">
                                <Bike size={24} />
                            </div>
                            <div>
                                <h4 className="text-white font-medium">Off-road Staze</h4>
                                <p className="text-sm text-gray-500">Vožnja kroz netaknutu prirodu i autentične planinske predele.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start">
                            <div className="bg-[#1C7049]/20 p-2 rounded-lg text-[#1C7049]">
                                <Compass size={24} />
                            </div>
                            <div>
                                <h4 className="text-white font-medium">Skriveni Vidikovci</h4>
                                <p className="text-sm text-gray-500">Zastajemo na tačkama sa kojih se pruža najlepši pogled na kanjon.</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 flex-1">
                            <p className="text-2xl font-bold text-[#1C7049]">Dogovor</p>
                            <p className="text-[10px] text-gray-500 uppercase tracking-wider">Trajanje</p>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 flex-1">
                            <p className="text-2xl font-bold text-[#1C7049]">Top</p>
                            <p className="text-[10px] text-gray-500 uppercase tracking-wider">Oprema</p>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 flex-1">
                            <p className="text-2xl font-bold text-[#1C7049]">0-24</p>
                            <p className="text-[10px] text-gray-500 uppercase tracking-wider">Dostupno</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative group"
                >
                    <div className="absolute -inset-4 bg-[#1C7049]/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                    <div className="relative h-[550px] rounded-3xl overflow-hidden shadow-2xl border border-white/5">
                        <Image
                            src="/img_6.png"
                            fill
                            sizes="(max-width: 1024px) 100vw, 42vw"
                            alt="Kvad avantura na Uvcu"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[3s] ease-out"
                        />
                        <Image
                            src="/img_5.png"
                            fill
                            sizes="(max-width: 1024px) 100vw, 42vw"
                            alt="Kvad avantura na Uvcu"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[3s] ease-out"
                        />

                        <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                            <p className="text-white text-sm font-medium italic">
                                Vožnja grebenima iznad oblaka.
                            </p>
                            <div className="flex items-center gap-2 mt-2">
                                <Trees size={14} className="text-[#1C7049]" />
                                <p className="text-gray-400 text-xs uppercase tracking-widest">Glavna ruta</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
