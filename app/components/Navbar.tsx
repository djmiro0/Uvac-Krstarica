"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface NavLink {
    title: string;
    href: string;
}

export default function Navbar() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [scrolled, setScrolled] = useState<boolean>(false);

    // Prati skrol za promenu izgleda navigacije
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Sprečava skrolovanje pozadine kada je meni otvoren
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    const navLinks: NavLink[] = [
        { title: 'Početna', href: '#home' },
        { title: 'O Kanjonu', href: '#kanjon' },
        { title: 'Vožnja', href: '#voznja' },
        { title: 'Kontakt', href: '#kontakt' },
    ];

    return (
        <>
            {/* Glavna Navigacija */}
            <nav
                className={`fixed top-0 left-0 w-full z-[60] transition-all duration-500 ${
                    scrolled ? 'bg-[#020617]/95 backdrop-blur-lg py-3 shadow-2xl' : 'bg-transparent py-6'
                }`}
            >
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    <a href="#home" className="text-xl md:text-2xl font-light text-white flex items-center gap-2">
                        Plovidba<span className="font-black italic text-[#1C7049]">Uvac</span>
                        <div
                            style={{
                                backgroundColor: '#1C7049',
                                WebkitMaskImage: `url('/favicon.ico')`,
                                maskImage: `url('/favicon.ico')`,
                                WebkitMaskRepeat: 'no-repeat',
                                maskRepeat: 'no-repeat',
                                maskSize: 'contain',
                                WebkitMaskPosition: 'center',
                                width: '0.8em',
                                height: '0.8em',
                                minWidth: '20px',
                                minHeight: '20px'
                            }}
                            aria-hidden="true"
                        />
                    </a>

                    {/* Desktop Meni */}
                    <div className="hidden md:flex gap-10">
                        {navLinks.map((link) => (
                            <a
                                key={link.title}
                                href={link.href}
                                className="text-white/70 hover:text-white text-[11px] uppercase tracking-[0.2em] transition-all hover:letter-spacing-[0.3em]"
                            >
                                {link.title}
                            </a>
                        ))}
                    </div>

                    {/* Burger Dugme (Uvek vidljivo na vrhu) */}
                    <button
                        onClick={() => setIsOpen(true)}
                        className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
                    >
                        <Menu size={28} />
                    </button>
                </div>
            </nav>

            {/* MOBILE SIDEBAR SISTEM */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Tamni Overlay (Pozadina koja zatvara meni na klik) */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] md:hidden"
                        />

                        {/* Sidebar Panel */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed right-0 top-0 h-full w-[280px] bg-[#020617] border-l border-white/10 z-[110] shadow-[-20px_0_50px_rgba(0,0,0,0.5)] flex flex-col md:hidden"
                        >
                            {/* Dugme za zatvaranje unutar sidebara */}
                            <div className="p-6 flex justify-end">
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="text-white p-2 hover:bg-white/5 rounded-full"
                                >
                                    <X size={32} />
                                </button>
                            </div>

                            {/* Linkovi u Sidebar-u */}
                            <div className="flex flex-col px-8 mt-10 gap-8">
                                {navLinks.map((link, index) => (
                                    <motion.a
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 + index * 0.1 }}
                                        key={link.title}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-2xl font-light text-white/90 hover:text-[#1C7049] transition-colors flex items-center gap-4 group"
                                    >
                                        <span className="w-0 h-[1px] bg-[#1C7049] group-hover:w-8 transition-all" />
                                        {link.title}
                                    </motion.a>
                                ))}
                            </div>

                            {/* Dno sidebara sa kontaktom */}
                            <div className="mt-auto p-8 border-t border-white/5 bg-white/[0.02]">
                                <p className="text-[#1C7049] text-xs font-bold uppercase tracking-widest mb-4">Rezervacije</p>
                                <a href="tel:+381653030319" className="text-white font-bold">+381 65 3030 319
                                </a>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}