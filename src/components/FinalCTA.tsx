'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface FinalCTAProps {
  onOpenContact: () => void;
}

export default function FinalCTA({ onOpenContact }: FinalCTAProps) {
  return (
    <section className="py-32 bg-[#05080C] text-white relative overflow-hidden border-t border-white/10">

      {/* Soft Gold Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#C9A227]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 sm:px-8 relative z-10 text-center space-y-10">

        {/* Dual Brand Emblem */}
        <div className="inline-flex items-center gap-4 px-4 py-2.5 rounded-full bg-white/5 border border-white/10 shadow-2xl backdrop-blur-md">
          <Image
            src="/assets/ucreates_logo.png"
            alt="ULink Logo"
            width={32}
            height={32}
            className="object-contain"
          />
          <span className="text-slate-500 font-light">×</span>
          <Image
            src="/assets/ayyan_logo.png"
            alt="Ayyan Events & Holidays"
            width={100}
            height={30}
            className="object-contain"
          />
        </div>

        {/* Main Headline */}
        <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
          Let's build the first one <br />
          <span className="text-[#C9A227]">together.</span>
        </h2>


        {/* Buttons */}
        {/* <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenContact}
            className="w-full sm:w-auto px-9 py-4 rounded-full bg-[#C9A227] hover:bg-[#D4B035] text-[#05080C] font-extrabold text-sm tracking-wider uppercase transition-all shadow-xl hover:scale-105 flex items-center justify-center gap-2 group"
          >
            <span>Build a Prototype</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onOpenContact}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white font-bold text-sm tracking-wider uppercase border border-white/15 transition-all"
          >
            Meet UCreates
          </button>
        </div> */}

        {/* Footer Tag */}
        <div className="pt-10 text-xs text-slate-500 font-medium">
          Concept Presentation by <strong className="text-slate-300 font-semibold">UCreates Technology</strong> for Ayyan Events & Holidays
        </div>

      </div>
    </section>
  );
}
