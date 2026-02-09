"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Anchor, Map, Ship } from 'lucide-react';

export default function NotFound() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#020617]">
            {/* BACKGROUND IMAGE (Uvac u magli ili slična priroda) */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/uvac.jpg"
                    alt="Uvac Kanjon 404"
                    className="w-full h-full object-cover opacity-30 grayscale"
                />
                {/* Mekši gradijent koji vuče na tamno plavu/zelenu */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-[#020617]/40 to-[#020617]" />
            </div>

            <div className="relative z-10 text-center px-4 max-w-4xl">
                <div
                    className="flex justify-center mb-8"
                >
                    <div className="p-5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                        <Anchor size={48} className="text-[#1C7049]" />
                    </div>
                </div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-6xl md:text-9xl font-light text-white mb-4 tracking-tighter leading-none"
                >
                    4<span className="font-black italic text-[#1C7049]">0</span>4
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-2xl md:text-4xl font-light text-white mb-6 tracking-tight"
                >
                    Skrenuli ste sa <span className="italic font-medium">meandra</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-gray-400 text-lg md:text-xl mb-12 max-w-xl mx-auto font-light"
                >
                    Stranica koju tražite je pod vodom ili nikada nije bila deo naše rute.
                    Vratimo se u mirne vode.
                </motion.p>

                {/* DUGMIĆI */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="flex flex-col md:flex-row gap-4 justify-center"
                >
                    <Link href="/"
                          className="bg-[#1C7049] hover:bg-[#155d3c] text-white px-10 py-4 rounded-full font-bold transition-all shadow-lg flex items-center justify-center gap-2 group">
                        <Ship size={18} className="group-hover:-translate-x-1 transition-transform" />
                        Povratak na obalu
                    </Link>

                    <Link href="/#kanjon"
                          className="border border-white/30 hover:bg-white/10 text-white px-10 py-4 rounded-full font-bold transition-all flex items-center justify-center gap-2">
                        <Map size={18} />
                        Istražite kanjon
                    </Link>
                </motion.div>
            </div>

            {/* DEKORATIVNI ELEMENT (Animirani talasi na dnu) */}
            <div className="absolute bottom-0 left-0 w-full opacity-20 pointer-events-none">
                <svg viewBox="0 0 1440 320" className="w-full h-auto">
                    <path
                        fill="#1C7049"
                        d="M0,192L48,197.3C96,203,192,213,288,192C384,171,480,117,576,112C672,107,768,149,864,165.3C960,181,1056,171,1152,149.3C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    ></path>
                </svg>
            </div>
        </section>
    );
}