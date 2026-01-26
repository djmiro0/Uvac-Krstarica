"use client"

import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
    return (
        <section id="kanjon" className="py-24 px-6 relative bg-[#020617]">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-[#1C7049] tracking-widest uppercase text-sm font-bold mb-2 block">Specijalni Rezervat Prirode</span>
                    <h2 className="text-4xl md:text-5xl font-light text-white mb-6">Dragulj Srbije</h2>
                    <p className="text-gray-400 leading-relaxed mb-6 text-lg">
                        Kanjon reke Uvac smatra se jednim od najlepših prirodnih bogatstava Evrope. Poznat po svojim uklještenim meandrima koji se probijaju kroz krečnjačke stene.
                    </p>
                    <div className="flex gap-4">
                        <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                            <p className="text-2xl font-bold text-[#1C7049]">119km</p>
                            <p className="text-xs text-gray-500 uppercase">Dužina Reke</p>
                        </div>
                        <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                            <p className="text-2xl font-bold text-[#1C7049]">500+</p>
                            <p className="text-xs text-gray-500 uppercase">Parova Supova</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl"
                >
                    <img
                        src="/img_1.png"
                        alt="Vidikovac Uvac @jelena.realtor"
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-[2s]"
                    />
                </motion.div>
            </div>
        </section>
    );
}