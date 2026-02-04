"use client"

import React from 'react';
import { motion } from 'framer-motion';

export default function FloatingBoat() {
    return (
        <motion.div
            className="fixed bottom-10 left-[-20px] md:left-10 z-10 pointer-events-none opacity-20 mix-blend-overlay"
            animate={{ y: [0, -15, 0], rotate: [0, 2, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
            <div
                style={{
                    backgroundColor: '#F8FAFC',
                    WebkitMaskImage: `url('/favicon.ico')`,
                    maskImage: `url('/favicon.ico')`,
                    WebkitMaskRepeat: 'no-repeat',
                    maskRepeat: 'no-repeat',
                    maskSize: 'contain',
                    width: '150px',
                    height: '150px',
                }}
            />
        </motion.div>
    );
}