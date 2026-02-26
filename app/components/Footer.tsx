import React from 'react';
import Link from "next/link";

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className=" py-4 px-4 md:px-6 relative overflow-hidden bg-[#020617]mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 text-[12px] md:text-sm text-center md:text-left">
                <p className="font-bold text-gray-400 mb-1">Specijalni Rezervat Prirode Uvac</p>
                <p>© {currentYear} Plovidba Uvac. Sva prava zadržana.</p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                <Link href="#kanjon" className="hover:text-[#1C7049] transition-colors">O Rezervatu</Link>
                <Link href="#voznja" className="hover:text-[#1C7049] transition-colors">Ture</Link>
                <Link href="/privacy" className="hover:text-[#1C7049] transition-colors">Privatnost</Link>
            </div>
        </footer>
    );
}

export default Footer;