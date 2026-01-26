"use client"

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

// Definišemo tip za linkove radi sigurnosti
interface NavLink {
    title: string;
    href: string;
}

export default function Navbar() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [scrolled, setScrolled] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks: NavLink[] = [
        { title: 'Početna', href: '#home' },
        { title: 'O Kanjonu', href: '#kanjon' },
        { title: 'Vožnja', href: '#voznja' },
        { title: 'Kontakt', href: '#kontakt' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#020617]/90 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <a href="#home" className="text-2xl font-light text-white flex items-center gap-2">
                    Plovidba<span className="font-black italic text-[#1C7049]">Uvac</span>
                </a>

                {/* Desktop Meni */}
                <div className="hidden md:flex gap-8">
                    {navLinks.map((link) => (
                        <a key={link.title} href={link.href} className="text-white/80 hover:text-white text-sm uppercase tracking-widest transition-colors">
                            {link.title}
                        </a>
                    ))}
                </div>

                {/* Burger Dugme */}
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Meni */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        className="fixed inset-0 bg-[#020617] z-40 flex flex-col items-center justify-center gap-8 md:hidden"
                    >
                        {navLinks.map((link) => (
                            <a key={link.title} href={link.href} onClick={() => setIsOpen(false)} className="text-3xl font-light text-white hover:text-[#1C7049]">
                                {link.title}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}