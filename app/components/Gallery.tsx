"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Maximize2, X } from 'lucide-react';

export default function Gallery() {
    // Stanje za praćenje selektovane slike
    const [selectedImg, setSelectedImg] = useState<null | { src: string, alt: string }>(null);

    const images = [
        { src: '/sup.png', alt: 'Beloglavi sup u letu', size: 'md:col-span-2 md:row-span-2' },
        { src: '/meandri.png', alt: 'Pogled sa meandara', size: 'md:col-span-1 md:row-span-1' },
        { src: '/gosti.png', alt: 'Zadovoljni gosti', size: 'md:col-span-1 md:row-span-2' },
        { src: '/pecina.png', alt: 'Ulaz u Ledenu pećinu @Bravo Tours', size: 'md:col-span-1 md:row-span-1' },
        { src: '/camac.png', alt: 'Naš voljeni čamac', size: 'md:col-span-2 md:row-span-1' },
        { src: '/dzip.png', alt: 'Vožnja džipom - dostupna tokom cele godine', size: 'md:col-span-2 md:row-span-1' }
    ];

    return (
        <section id="galerija" className="py-24 px-6 bg-[#020617]">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="flex flex-col justify-between mb-12 gap-6">
                    <div>
                        <span className="text-[#1C7049] tracking-widest uppercase text-sm font-bold mb-2 block">Kroz objektiv</span>
                        <h2 className="text-4xl md:text-5xl font-light text-white">Doživljaj sa <span className="font-bold">tura</span></h2>
                    </div>
                    <p className="text-gray-400 leading-relaxed mb-8 text-lg">
                        Svaka slika je zabeležena tokom naših tura. Od bliskih susreta sa supovima na reci do off-road avantura koje organizujemo tokom cele godine.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
                    {images.map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            onClick={() => setSelectedImg(img)} // Otvaranje Lightbox-a
                            className={`relative group overflow-hidden rounded-[2rem] border border-white/5 cursor-pointer ${img.size}`}
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Overlay na hover */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-6">
                                <div className="flex justify-between items-center w-full">
                                    <div className="flex items-center gap-2">
                                        <Camera size={16} className="text-[#1C7049]" />
                                        <span className="text-white text-sm font-medium">{img.alt}</span>
                                    </div>
                                    <div className="bg-white/10 p-2 rounded-full backdrop-blur-md">
                                        <Maximize2 size={16} className="text-white" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Lightbox Modal */}
                <AnimatePresence>
                    {selectedImg && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-10"
                            onClick={() => setSelectedImg(null)}
                        >
                            <motion.button
                                className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
                                onClick={() => setSelectedImg(null)}
                            >
                                <X size={40} strokeWidth={1} />
                            </motion.button>

                            <motion.div
                                initial={{ scale: 0.8, y: 20 }}
                                animate={{ scale: 1, y: 0 }}
                                exit={{ scale: 0.8, y: 20 }}
                                className="relative max-w-5xl w-full max-h-[80vh] flex flex-col items-center"
                                onClick={(e) => e.stopPropagation()} // Sprečava zatvaranje kad se klikne na samu sliku
                            >
                                <img
                                    src={selectedImg.src}
                                    alt={selectedImg.alt}
                                    className="w-full h-full object-contain rounded-xl shadow-2xl"
                                />
                                <p className="text-white mt-6 text-xl font-light tracking-wide italic">
                                    {selectedImg.alt}
                                </p>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Social Proof */}
                <div className="mt-12 flex justify-center">
                    <div className="bg-white/5 border border-white/10 rounded-full px-6 py-3 flex items-center gap-3">
                        <div className="flex -space-x-2">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="w-8 h-8 rounded-full border-2 border-[#020617] bg-[#1C7049] flex items-center justify-center text-[10px] text-white font-bold">✓</div>
                            ))}
                        </div>
                        <p className="text-sm text-gray-400">
                            Preko <span className="text-white font-bold">2,000+</span> gostiju ove sezone uslikalo je svoje uspomene sa nama.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}