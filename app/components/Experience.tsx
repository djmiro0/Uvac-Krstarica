"use client"

import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Waves, Camera, Bird } from 'lucide-react';

const moments = [
    {
        title: 'Mirni Polazak',
        text: 'Lagano isplovljavanje kroz najmirniji deo jezera uz uvod u tok ture.',
        icon: <Waves size={24} />
    },
    {
        title: 'Skriveni Uglovi',
        text: 'Zastajemo tamo gde priroda izgleda najmoćnije za najbolje fotografije.',
        icon: <Camera size={24} />
    }
];

export default function Experience() {
    const sectionRef = useRef<HTMLElement | null>(null);
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const isInView = useInView(sectionRef, { amount: 0.4 });

    useEffect(() => {
        if (videoRef.current) {
            if (isInView) {
                videoRef.current.play().catch(() => {});
            } else {
                videoRef.current.pause();
            }
        }
    }, [isInView]);

    return (
        <section ref={sectionRef} id="iskustvo" className="py-24 px-6 relative bg-[#020617] overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(28,112,73,0.05),transparent)] pointer-events-none" />

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-[#1C7049] tracking-widest uppercase text-sm font-bold mb-2 block">
                        Kako izgleda plovidba
                    </span>
                    <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
                        Plovidba koja se <br />
                        <span className="font-bold text-[#1C7049]">Gleda i Pamti</span>
                    </h2>

                    <p className="text-gray-400 leading-relaxed mb-8 text-lg">
                        Svaki minut na vodi je osmišljen da vas poveže sa prirodom. Bez žurbe, uz autentične priče naših vodiča i najlepše kadrove kanjona koji oduzimaju dah.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                        {moments.map((item, idx) => (
                            <div key={idx} className="flex gap-4 items-start">
                                <div className="bg-[#1C7049]/20 p-2 rounded-lg text-[#1C7049] shrink-0">
                                    {item.icon}
                                </div>
                                <div>
                                    <h4 className="text-white font-medium">{item.title}</h4>
                                    <p className="text-sm text-gray-500">{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex gap-4">
                        <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 flex-1">
                            <p className="text-2xl font-bold text-[#1C7049]">~4h</p>
                            <p className="text-[10px] text-gray-500 uppercase tracking-wider">Trajanje</p>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 flex-1">
                            <p className="text-2xl font-bold text-[#1C7049]">Ledena</p>
                            <p className="text-[10px] text-gray-500 uppercase tracking-wider">Pećina</p>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 flex-1">
                            <p className="text-2xl font-bold text-[#1C7049]">100%</p>
                            <p className="text-[10px] text-gray-500 uppercase tracking-wider">Priroda</p>
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

                    <div className="relative h-[550px] rounded-3xl overflow-hidden shadow-2xl border border-white/5 bg-black">
                        <video
                            ref={videoRef}
                            className="w-full h-full object-cover opacity-90"
                            controls
                            loop
                            muted
                            playsInline
                            preload="metadata"
                            poster="/uvac.jpg"
                            disablePictureInPicture
                            controlsList="nopictureinpicture"
                        >
                            <source src="/video-web-small.mp4" type="video/mp4" />
                        </video>

                        <div className="pointer-events-none absolute inset-x-0 bottom-0 right-0 left-0 p-8">
                            <div>
                                <p className="text-white text-sm font-medium italic">Tišina i mir koji se mogu osetiti samo na vodi.</p>
                                <div className="mt-2 flex items-center gap-2">
                                    <Bird size={14} className="text-[#1C7049]" />
                                    <p className="text-gray-400 text-[10px] uppercase tracking-wider font-bold">SRP Uvac - Autentičan video</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
