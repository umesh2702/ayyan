'use client';

import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#040810] border-t border-slate-900 py-10 text-xs text-slate-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left branding */}
        <div className="flex items-center gap-3">
          <Image
            src="/assets/ucreates_logo.png"
            alt="ULink Logo"
            width={26}
            height={26}
            className="object-contain"
          />
          <span className="font-bold text-slate-300">ULink × Ayyan Events & Holidays</span>
        </div>

        {/* Center Disclaimer */}
        <div className="text-center md:text-left max-w-xl text-[11px] text-slate-400">
          <p>
            This website is an interactive product concept presentation prepared by <strong>UCreates</strong> for the leadership team of <strong>Ayyan Events & Holidays</strong>.
          </p>
        </div>

        {/* Right copyright */}
        <div className="font-mono text-[10px] text-slate-400">
          Powered by UCreates © {new Date().getFullYear()}
        </div>

      </div>
    </footer>
  );
}
