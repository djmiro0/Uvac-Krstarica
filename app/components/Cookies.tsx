"use client"

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem('cookieConsent', 'true');
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    className="fixed bottom-4 left-4 right-4 md:left-auto md:right-8 md:max-w-md bg-[#030b1c] border border-white/10 p-6 rounded-2xl shadow-2xl z-50 flex flex-col gap-4"
                >
                    <p className="text-sm text-gray-300 leading-relaxed">
                        Koristimo kolačiće kako bismo vam pružili najbolje iskustvo na našem sajtu i analizirali posete. Nastavkom korišćenja prihvatate našu{' '}
                        <Link href="/privacy" className="text-[#1C7049] hover:text-white transition-colors font-medium underline-offset-2 underline">
                            Politiku privatnosti
                        </Link>.
                    </p>
                    <div className="flex gap-3">
                        <button
                            onClick={acceptCookies}
                            className="flex-1 bg-[#1C7049] hover:bg-[#155638] text-white py-2.5 px-4 rounded-xl text-sm font-medium transition-colors"
                        >
                            Razumem i prihvatam
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}