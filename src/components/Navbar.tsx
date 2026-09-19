'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
}

export default function Navbar({ onOpenContact }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0B1118]/90 backdrop-blur-xl border-b border-white/10 py-4 shadow-xl'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        
        {/* Left Branding */}
        <div
          className="flex items-center space-x-3 cursor-pointer group"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="flex items-center gap-3">
            <Image
              src="/assets/ucreates_logo.png"
              alt="ULink Logo"
              width={26}
              height={26}
              className="object-contain filter drop-shadow brightness-110"
            />
            <span className="font-bold text-base tracking-tight text-white flex items-center gap-1.5">
              ULink
              <span className="text-[10px] font-mono tracking-widest text-[#C9A227] font-semibold uppercase px-1.5 py-0.5 rounded bg-[#C9A227]/10 border border-[#C9A227]/20">
                PROTOTYPE
              </span>
            </span>
            <span className="text-slate-500 font-light text-xs">×</span>
            <Image
              src="/assets/ayyan_logo.png"
              alt="Ayyan Events & Holidays"
              width={76}
              height={24}
              className="object-contain brightness-110"
            />
          </div>
        </div>

        {/* Center Links (Desktop - Minimal Editorial Style) */}
        <nav className="hidden md:flex items-center space-x-8 text-xs font-medium tracking-wide">
          <button
            onClick={() => scrollToSection('experiences')}
            className="text-slate-300 hover:text-white transition-colors py-1"
          >
            Experiences
          </button>
          <button
            onClick={() => scrollToSection('weddings')}
            className="text-slate-300 hover:text-[#C9A227] transition-colors py-1"
          >
            Weddings
          </button>
          <button
            onClick={() => scrollToSection('corporate')}
            className="text-slate-300 hover:text-[#16B8D4] transition-colors py-1"
          >
            Corporate
          </button>
          <button
            onClick={() => scrollToSection('live-demo')}
            className="text-slate-300 hover:text-[#16B8D4] transition-colors py-1 flex items-center gap-1.5"
          >
            ULink Live
          </button>
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center">
          <button
            onClick={onOpenContact}
            className="px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 text-white text-xs font-semibold tracking-wide border border-white/15 hover:border-[#C9A227]/40 transition-all flex items-center gap-1.5 shadow-sm group"
          >
            <span>Talk to UCreates</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#C9A227] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#C9A227]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0B1118] border-b border-white/10 px-6 py-6 space-y-4 shadow-2xl animate-fadeIn">
          <button
            onClick={() => scrollToSection('experiences')}
            className="block w-full text-left py-2 text-sm font-medium text-slate-200"
          >
            Experiences Overview
          </button>
          <button
            onClick={() => scrollToSection('weddings')}
            className="block w-full text-left py-2 text-sm font-medium text-[#C9A227]"
          >
            Weddings
          </button>
          <button
            onClick={() => scrollToSection('corporate')}
            className="block w-full text-left py-2 text-sm font-medium text-[#16B8D4]"
          >
            Corporate Events
          </button>
          <button
            onClick={() => scrollToSection('live-demo')}
            className="block w-full text-left py-2 text-sm font-medium text-[#16B8D4]"
          >
            ULink Live Demo
          </button>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-3 rounded-full bg-[#C9A227] text-[#0B1118] font-bold text-xs tracking-wider uppercase"
            >
              Talk to UCreates
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
