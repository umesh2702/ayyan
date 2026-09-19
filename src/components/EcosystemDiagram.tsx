'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function EcosystemDiagram() {
  return (
    <section className="py-24 bg-[#0B1118] text-white relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Title */}
        <div className="max-w-3xl mb-16 space-y-3">
          <span className="text-xs font-mono font-bold text-[#C9A227] uppercase tracking-widest">
            Ecosystem Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            The ULink Architecture Sequence
          </h2>
          <p className="text-slate-300 text-sm">
            How physical hardware touchpoints communicate with attendees & organizers.
          </p>
        </div>

        {/* Clean Editorial Flow */}
        <div className="rounded-3xl bg-[#131B26] border border-white/10 p-8 sm:p-12 shadow-editorial-dark space-y-8">
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center text-center">
            
            <div className="p-6 rounded-2xl bg-black/40 border border-white/10 space-y-2">
              <span className="text-xs font-mono text-slate-500 font-bold block">01</span>
              <h4 className="text-sm font-bold text-white uppercase">Physical Event</h4>
              <p className="text-[11px] text-slate-400">Wedding / Corporate Venue</p>
            </div>

            <div className="hidden md:flex justify-center text-[#C9A227]">
              <ArrowRight className="w-5 h-5" />
            </div>

            <div className="p-6 rounded-2xl bg-black/40 border border-[#C9A227]/40 space-y-2">
              <span className="text-xs font-mono text-[#C9A227] font-bold block">02</span>
              <h4 className="text-sm font-bold text-[#C9A227] uppercase">ULink Touchpoints</h4>
              <p className="text-[11px] text-slate-400">NFC Acrylic Stands & Pods</p>
            </div>

            <div className="hidden md:flex justify-center text-[#16B8D4]">
              <ArrowRight className="w-5 h-5" />
            </div>

            <div className="p-6 rounded-2xl bg-black/40 border border-[#16B8D4]/40 space-y-2">
              <span className="text-xs font-mono text-[#16B8D4] font-bold block">03</span>
              <h4 className="text-sm font-bold text-[#16B8D4] uppercase">Digital Experience</h4>
              <p className="text-[11px] text-slate-400">Instant Mobile Web Portal</p>
            </div>

          </div>

          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
            <span className="font-mono text-slate-300">Live Bi-Directional Synchronization</span>
            <div className="flex items-center gap-4 font-mono text-xs">
              <span className="text-[#16B8D4]">Attendees</span>
              <span className="text-[#C9A227] font-bold">↔</span>
              <span className="text-white">Organizer Console</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
