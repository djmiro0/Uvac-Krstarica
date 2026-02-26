"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Wind, Clock, MapPin, Anchor, Camera, Car } from 'lucide-react';

interface ServiceItem {
    icon: React.ReactNode;
    title: string;
    text: string;
    detail?: string;
}

export default function Services() {
    const services: ServiceItem[] = [
        {
            icon: <Anchor size={24} />,
            title: "Privatne Ture",
            text: "Ekskluzivno krstarenje prilagođeno vama. Bez nepoznatih ljudi, samo vi i mir kanjona.",
            detail: "Do 12 osoba po čamcu"
        },
        {
            icon: <MapPin size={24} />,
            title: "Ledena Pećina",
            text: "Pristup skrivenim dvoranama pećinskog sistema koji je dostupan isključivo sa reke.",
            detail: "Uključene ulaznice"
        },
        {
            icon: <Camera size={24} />,
            title: "Foto-Pauze",
            text: "Stajemo na najlepšim tačkama za fotografisanje meandara i gnezda beloglavih supova.",
            detail: "Savršeno za Instagram"
        },
        {
            icon: <Clock size={24} />,
            title: "Kompletno Iskustvo",
            text: "Tura od 4 sata obuhvata plovidbu, obilazak pećine i pešačenje do vidikovca Molitva.",
            detail: "Fleksibilni polasci"
        },
        {
            icon: <Users size={24} />,
            title: "Lokalni Vodiči",
            text: "Upoznajte istoriju i legende Uvca kroz priče iskusnih meštana koji poznaju svaki kamen.",
            detail: "Priče iz prve ruke"
        },
        {
            icon: <Car size={24} />,
            title: "Vožnja Džipom",
            text: "Uzbudljiva off-road avantura do skrivenih vidikovaca. Istražite netaknutu prirodu i lepote rezervata sa kopna.",
            detail: "Tokom cele godine"
        }
    ];

    return (
        /* Pozadina sekcije je sada najtamnija nijansa */
        <section id="voznja" className="py-24 px-6 bg-[#020617] relative">

            {/* Sjaj u pozadini za dubinu */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#1C7049]/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-[#1C7049] tracking-widest uppercase text-sm font-bold mb-2 block">Vaš doživljaj</span>
                    <h2 className="text-4xl md:text-5xl font-light text-white mb-4 italic">Umetnost <span className="font-bold not-italic">Plovidbe</span></h2>
                    <div className="w-20 h-1 bg-[#1C7049] mx-auto rounded-full"/>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            /* Kartica ima svetliju nijansu (bg-[#030b1c]) koja odskače od pozadine */
                            whileHover={{ y: -8, backgroundColor: "rgba(11, 18, 36, 1)" }}
                            className="group bg-[#030b1c] p-8 rounded-[2rem] border border-white/5 hover:border-[#1C7049]/40 transition-all duration-300 shadow-xl"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className="w-14 h-14 bg-[#1C7049]/10 rounded-2xl flex items-center justify-center text-[#1C7049] group-hover:bg-[#1C7049] group-hover:text-white transition-colors duration-300">
                                    {service.icon}
                                </div>
                                <span className="text-[10px] uppercase tracking-tighter text-gray-500 font-bold group-hover:text-[#1C7049] transition-colors">
                                    {service.detail}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#1C7049] transition-colors tracking-tight">
                                {service.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {service.text}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-16 p-6 rounded-2xl bg-[#030b1c] border border-white/5 text-center"
                >
                    <p className="text-gray-400 text-sm">
                        * Sve ture se realizuju uz poštovanje pravila Specijalnog rezervata prirode Uvac.
                        <span className="text-white font-medium ml-2">Preporučujemo rezervaciju 2-3 dana unapred.</span>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}