"use client"

import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img
                    src="/uvac.jpg"
                    alt="Uvac Kanjon"
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/80 via-transparent to-[#020617]" />
            </div>

            <div className="relative z-10 text-center px-4 max-w-4xl mt-20">
                <h1 className="text-4xl md:text-7xl font-light text-white mb-4 md:mb-6 tracking-tighter leading-tight flex flex-col md:flex-row items-center justify-center gap-3">
                <span className="flex items-center gap-2">
                   Plovidba<span className="font-black italic text-[#1C7049]">Uvac</span>
                </span>
                </h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light"
                >
                    Doživite magiju meandara iz prve ruke. Privatne ture, netaknuta priroda i pogled koji oduzima dah.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="flex flex-col md:flex-row gap-4 justify-center"
                >
                    <a href="#kontakt" className="bg-[#1C7049] hover:bg-[#155d3c] text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:scale-105">
                        Rezervišite Odmah
                    </a>
                    <a href="#kanjon" className="border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-full font-bold transition-all">
                        Saznajte Više
                    </a>
                </motion.div>
            </div>
        </section>
    );
}