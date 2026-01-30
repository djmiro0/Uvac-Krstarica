"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Bird, Mountain } from 'lucide-react';

export default function About() {
    return (
        <section id="kanjon" className="py-24 px-6 relative bg-[#020617] overflow-hidden">
            {/* Suptilna pozadinska senka za dubinu */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(28,112,73,0.05),transparent)] pointer-events-none" />

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-[#1C7049] tracking-widest uppercase text-sm font-bold mb-2 block">
                        Specijalni Rezervat Prirode
                    </span>
                    <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
                        Uvac: Gde Priroda Piše <br />
                        <span className="font-bold text-[#1C7049]">Legende</span>
                    </h2>

                    <p className="text-gray-400 leading-relaxed mb-8 text-lg">
                        Kanjon reke Uvac nije samo prirodni fenomen; to je poslednje utočište retkih vrsta i dom najimpresivnijih meandara na Balkanu.
                        Ovde se krečnjačke stene pod uticajem sile vode savijaju pod uglom od skoro 270 stepeni, kreirajući prizor koji oduzima dah.
                    </p>

                    {/* Detaljnije informacije o atrakcijama */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                        <div className="flex gap-4 items-start">
                            <div className="bg-[#1C7049]/20 p-2 rounded-lg text-[#1C7049]">
                                <Bird size={24} />
                            </div>
                            <div>
                                <h4 className="text-white font-medium">Nebeski Kralj</h4>
                                <p className="text-sm text-gray-500">Stanište Beloglavog supa, čuvara neba sa rasponom krila do 3 metra.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start">
                            <div className="bg-[#1C7049]/20 p-2 rounded-lg text-[#1C7049]">
                                <Mountain size={24} />
                            </div>
                            <div>
                                <h4 className="text-white font-medium">Ušački Pećinski Sistem</h4>
                                <p className="text-sm text-gray-500">Preko 6km istraženih kanala, bogatih pećinskim nakitom i dvoranama.</p>
                            </div>
                        </div>
                    </div>

                    {/* Statistika */}
                    <div className="flex gap-4">
                        <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 flex-1">
                            <p className="text-2xl font-bold text-[#1C7049]">119km</p>
                            <p className="text-[10px] text-gray-500 uppercase tracking-wider">Tok Reke</p>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 flex-1">
                            <p className="text-2xl font-bold text-[#1C7049]">~500</p>
                            <p className="text-[10px] text-gray-500 uppercase tracking-wider">Jedinki Supova</p>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 flex-1">
                            <p className="text-2xl font-bold text-[#1C7049]">3</p>
                            <p className="text-[10px] text-gray-500 uppercase tracking-wider">Veštačka Jezera</p>
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
                        <img
                            src="/img_1.png"
                            alt="Vidikovac Molitva - Meandri Uvca"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[3s] ease-out"
                        />

                        {/* Overlay info na slici */}
                        <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                            <p className="text-white text-sm font-medium italic">"Vidikovac Molitva - mesto gde se dodiruju nebo i meandri."</p>
                            <p className="text-gray-400 text-xs mt-1">@jelena.realtor</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}