"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Wind, Clock } from 'lucide-react';

// TypeScript Interface za podatke o servisu
interface ServiceItem {
    icon: React.ReactNode;
    title: string;
    text: string;
}

export default function Services() {
    const services: ServiceItem[] = [
        { icon: <Users size={24} />, title: "Privatne Ture", text: "Idealno za parove i porodice. Uživajte u privatnosti bez gužve." },
        { icon: <Wind size={24} />, title: "Atmosfera", text: "Lagana vožnja uz prijatni povetarac. Samo zvuci prirode." },
        { icon: <Clock size={24} />, title: "Trajanje Ture", text: "Oko 4 sata. Uključuje posetu Ledenoj pećini i vidikovac." }
    ];

    return (
        <section id="voznja" className="py-24 px-6 bg-[#030b1c]">
            <div className="max-w-6xl mx-auto">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-light text-white mb-4">Vaša Plovidba</h2>
                    <div className="w-20 h-1 bg-[#1C7049] mx-auto rounded-full"/>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -10 }}
                            className="bg-[#020617] p-8 rounded-3xl border border-white/5 hover:border-[#1C7049]/50 transition-colors"
                        >
                            <div className="w-12 h-12 bg-[#1C7049]/20 rounded-full flex items-center justify-center mb-6 text-[#1C7049]">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                            <p className="text-gray-400">{service.text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}