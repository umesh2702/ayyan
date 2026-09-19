'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function ConceptOverview() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="experiences" className="py-28 bg-[#F7F5F0] text-[#0B1118] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-20 space-y-4">
          <span className="text-xs font-semibold tracking-widest text-[#C9A227] uppercase">
            Event Technology Architecture
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0B1118] leading-[1.15]">
            One physical touchpoint. <br />
            <span className="text-slate-500 font-normal">Many possibilities.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#4A5568] font-normal leading-relaxed pt-2">
            ULink seamlessly adapts to the nature of your event and the exact physical touchpoint where digital engagement matters most.
          </p>
        </div>

        {/* Two Large Editorial Campaign Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* PANEL 1: WEDDINGS */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative rounded-3xl bg-white border border-slate-200/80 p-8 sm:p-12 shadow-editorial flex flex-col justify-between hover:shadow-2xl transition-all duration-500 overflow-hidden"
          >
            {/* Top Accent Line */}
            <div className="w-12 h-1 bg-[#C9A227] mb-8" />

            <div className="space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-[#C9A227] font-bold">
                Guest Engagement
              </span>

              <h3 className="text-3xl sm:text-4xl font-extrabold text-[#0B1118] tracking-tight">
                Weddings
              </h3>

              <p className="text-lg font-semibold text-[#0A192F] tracking-tight">
                Connect guests to the celebration.
              </p>

              <p className="text-sm text-[#4A5568] leading-relaxed">
                Turn key venue touchpoints into digital moments — allowing guests to share heartfelt wishes, view live ceremony timelines, upload photos, and connect with Ayyan event details.
              </p>

              {/* Minimal Tag Pill Grid */}
              <div className="pt-4 flex flex-wrap gap-2 text-xs font-medium">
                <span className="px-3.5 py-1.5 rounded-full bg-[#F7F5F0] text-[#0B1118] border border-slate-200">
                  Guestbook & Wishes
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-[#F7F5F0] text-[#0B1118] border border-slate-200">
                  Photo Sharing
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-[#F7F5F0] text-[#0B1118] border border-slate-200">
                  Social & Instagram
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-[#F7F5F0] text-[#0B1118] border border-slate-200">
                  Venue Information
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-10 mt-8 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-mono">5 Venue Touchpoints</span>
              <button
                onClick={() => scrollToSection('weddings')}
                className="px-6 py-3 rounded-full bg-[#0B1118] text-white hover:bg-[#C9A227] hover:text-[#0B1118] font-bold text-xs tracking-wider uppercase transition-all flex items-center gap-2"
              >
                <span>Explore Weddings</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* PANEL 2: CORPORATE EVENTS */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="group relative rounded-3xl bg-white border border-slate-200/80 p-8 sm:p-12 shadow-editorial flex flex-col justify-between hover:shadow-2xl transition-all duration-500 overflow-hidden"
          >
            {/* Top Accent Line */}
            <div className="w-12 h-1 bg-[#16B8D4] mb-8" />

            <div className="space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-[#16B8D4] font-bold">
                Live Event Experience
              </span>

              <h3 className="text-3xl sm:text-4xl font-extrabold text-[#0B1118] tracking-tight">
                Corporate Events
              </h3>

              <p className="text-lg font-semibold text-[#0A192F] tracking-tight">
                Connect attendees to what's happening — live.
              </p>

              <p className="text-sm text-[#4A5568] leading-relaxed">
                Empower conferences, summits, and corporate galas with real-time session updates, live speaker profiles, instant audience polls, table networking, and broadcast announcements.
              </p>

              {/* Minimal Tag Pill Grid */}
              <div className="pt-4 flex flex-wrap gap-2 text-xs font-medium">
                <span className="px-3.5 py-1.5 rounded-full bg-[#F7F5F0] text-[#0B1118] border border-slate-200">
                  Real-Time Schedule
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-[#F7F5F0] text-[#0B1118] border border-slate-200">
                  Speakers & Q&A
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-[#F7F5F0] text-[#0B1118] border border-slate-200">
                  Networking Pods
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-[#F7F5F0] text-[#0B1118] border border-slate-200">
                  Live Updates
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-10 mt-8 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-mono">6 Touchpoints + Live Sync</span>
              <button
                onClick={() => scrollToSection('corporate')}
                className="px-6 py-3 rounded-full bg-[#0B1118] text-white hover:bg-[#16B8D4] hover:text-[#0B1118] font-bold text-xs tracking-wider uppercase transition-all flex items-center gap-2"
              >
                <span>Explore Corporate</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
