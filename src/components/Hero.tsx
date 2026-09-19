'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Smartphone, Wifi, QrCode, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  const [isTapped, setIsTapped] = useState(false);
  const [activeTab, setActiveTab] = useState<'welcome' | 'schedule' | 'wishes'>('welcome');

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
    <section className="relative pt-36 pb-24 lg:pt-44 lg:pb-32 bg-[#060B12] text-white overflow-hidden">
      
      {/* Subtle Background Glow - Soft & Refined */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#C9A227]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column - Large Editorial Presentation */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Small Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-wider text-slate-300 uppercase"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227]" />
              <span>ULink × Ayyan Events & Holidays</span>
              <span className="text-slate-500 font-light">|</span>
              <span className="text-slate-400 font-normal capitalize">by UCreates</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] text-white"
            >
              What if your event <br className="hidden sm:inline" />
              was <span className="text-gold">connected?</span>
            </motion.h1>

            {/* Subheadline & Supporting Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-3 max-w-2xl mx-auto lg:mx-0"
            >
              <p className="text-xl sm:text-2xl font-semibold text-slate-200 tracking-tight">
                Physical touchpoints. Digital engagement. Live experiences.
              </p>
              <p className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed">
                ULink bridges physical event venues and instant digital experiences through simple Tap or Scan interactions — creating guest delight and real-time organizer control.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <button
                onClick={() => scrollToSection('experiences')}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#C9A227] hover:bg-[#D4B035] text-[#05080C] font-bold text-sm tracking-wide transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] flex items-center justify-center gap-2 group"
              >
                <span>Explore the Experience</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection('live-demo')}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white font-semibold text-sm tracking-wide border border-white/15 transition-all flex items-center justify-center gap-2"
              >
                <span>See ULink Live</span>
              </button>
            </motion.div>

            {/* Key Micro Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-400 font-medium"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C9A227]" />
                <span>NFC & QR Hardware Pods</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C9A227]" />
                <span>Zero App Installs</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#16B8D4]" />
                <span>Live Event Stream</span>
              </div>
            </motion.div>

          </div>

          {/* Right Physical Hardware Pod Reveal */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-md"
            >
              {/* Product Frame Container */}
              <div className="rounded-3xl bg-[#0D1520] border border-white/10 p-6 shadow-2xl space-y-5">
                
                {/* Product Header */}
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-[#C9A227]/10 border border-[#C9A227]/30 text-[#C9A227]">
                      <Wifi className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white tracking-wide">ULink Physical Stand</h4>
                      <p className="text-[11px] text-slate-400">Acrylic Pod • Entrance & Table Stand</p>
                    </div>
                  </div>

                  <button
                    onClick={() => setIsTapped(!isTapped)}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                      isTapped
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                        : 'bg-[#C9A227] text-[#05080C] hover:bg-[#D4B035]'
                    }`}
                  >
                    {isTapped ? '✓ Tap Connected' : 'Simulate Tap'}
                  </button>
                </div>

                {/* Hero Hardware Physical Emblem */}
                <div className="relative py-4 flex flex-col items-center justify-center">
                  <div
                    onClick={() => setIsTapped(!isTapped)}
                    className="relative cursor-pointer group flex flex-col items-center"
                  >
                    <div className="w-24 h-24 rounded-full bg-gradient-to-b from-[#172333] to-[#0A111A] border border-[#C9A227]/40 shadow-xl flex flex-col items-center justify-center text-[#C9A227] hover:border-[#C9A227] transition-all">
                      <Image
                        src="/assets/ucreates_logo.png"
                        alt="ULink Logo"
                        width={32}
                        height={32}
                        className="object-contain"
                      />
                      <span className="text-[9px] font-bold text-[#C9A227] tracking-widest uppercase mt-1">
                        {isTapped ? 'CONNECTED' : 'TOUCH HERE'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Smartphone Live Web Portal Preview */}
                <div className="rounded-2xl bg-[#060B12] border border-white/10 p-4 min-h-[290px]">
                  <div className="flex items-center justify-between text-[11px] text-slate-400 pb-2 border-b border-white/10">
                    <span className="font-mono">ULink Instant Portal</span>
                    <span className="text-[#C9A227] font-medium flex items-center gap-1">
                      <Smartphone className="w-3 h-3 text-[#16B8D4]" />
                      NFC Active
                    </span>
                  </div>

                  <AnimatePresence mode="wait">
                    {!isTapped ? (
                      <motion.div
                        key="untapped"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="py-10 text-center space-y-3 flex flex-col items-center justify-center"
                      >
                        <QrCode className="w-10 h-10 text-slate-500" />
                        <p className="text-xs text-slate-300 font-medium max-w-xs">
                          Tap your phone against the ULink stand or scan the QR code to experience the instant web portal.
                        </p>
                        <button
                          onClick={() => setIsTapped(true)}
                          className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-[#C9A227] text-xs font-semibold transition-all"
                        >
                          Simulate Tap / Scan Now →
                        </button>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="tapped"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="space-y-3 pt-2"
                      >
                        {/* Event Header */}
                        <div className="p-3 rounded-xl bg-white/5 border border-[#C9A227]/30 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Image
                              src="/assets/ayyan_logo.png"
                              alt="Ayyan Events"
                              width={44}
                              height={16}
                              className="object-contain"
                            />
                            <div>
                              <h5 className="text-xs font-bold text-white">Rohan & Ananya Wedding</h5>
                              <p className="text-[10px] text-slate-400">Ayyan Managed Celebration</p>
                            </div>
                          </div>
                          <span className="text-[10px] bg-[#C9A227]/20 text-[#C9A227] px-2 py-0.5 rounded font-semibold">
                            Connected
                          </span>
                        </div>

                        {/* Interactive Tabs */}
                        <div className="grid grid-cols-3 gap-1 bg-white/5 p-1 rounded-lg text-[11px] text-center font-medium">
                          <button
                            onClick={() => setActiveTab('welcome')}
                            className={`py-1 rounded transition-colors ${
                              activeTab === 'welcome' ? 'bg-[#C9A227] text-[#05080C] font-bold' : 'text-slate-400'
                            }`}
                          >
                            Welcome
                          </button>
                          <button
                            onClick={() => setActiveTab('schedule')}
                            className={`py-1 rounded transition-colors ${
                              activeTab === 'schedule' ? 'bg-[#C9A227] text-[#05080C] font-bold' : 'text-slate-400'
                            }`}
                          >
                            Schedule
                          </button>
                          <button
                            onClick={() => setActiveTab('wishes')}
                            className={`py-1 rounded transition-colors ${
                              activeTab === 'wishes' ? 'bg-[#C9A227] text-[#05080C] font-bold' : 'text-slate-400'
                            }`}
                          >
                            Wishes
                          </button>
                        </div>

                        {/* Tab Content */}
                        <div className="p-3 rounded-xl bg-slate-900/60 text-xs text-slate-300">
                          {activeTab === 'welcome' && (
                            <p className="leading-relaxed text-[11px]">
                              Welcome to our celebration! Explore the ceremony schedule, view food menu options, and share your wishes for the couple.
                            </p>
                          )}
                          {activeTab === 'schedule' && (
                            <div className="space-y-1.5 text-[11px]">
                              <div className="flex justify-between">
                                <span className="font-semibold text-white">7:00 PM</span>
                                <span className="text-[#C9A227]">Grand Reception</span>
                              </div>
                              <div className="flex justify-between text-slate-400">
                                <span>8:30 PM</span>
                                <span>Dinner Banquet</span>
                              </div>
                            </div>
                          )}
                          {activeTab === 'wishes' && (
                            <div className="space-y-2 text-[11px]">
                              <p className="text-white font-medium">Post a wish for the couple:</p>
                              <div className="flex gap-2">
                                <input
                                  type="text"
                                  placeholder="Type your wish..."
                                  className="flex-1 px-2 py-1 rounded bg-black/40 border border-white/10 text-white text-[11px]"
                                  readOnly
                                  value="Wishing you endless happiness! ✨"
                                />
                                <button className="px-3 py-1 bg-[#C9A227] text-[#05080C] font-bold rounded">
                                  Send
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <p className="text-[10px] text-slate-500 text-center">
                  Powered by UCreates Technology • Tap to test interaction
                </p>

              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
