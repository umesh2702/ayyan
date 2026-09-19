'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X, Sparkles, Send, CheckCircle2, Building2, Heart, Calendar } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [eventType, setEventType] = useState<'wedding' | 'corporate' | 'conference'>('wedding');
  const [eventName, setEventName] = useState('');
  const [contactName, setContactName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 3500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg rounded-3xl bg-[#091426] border border-amber-500/40 p-6 sm:p-8 shadow-2xl text-white space-y-6">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Branding Header */}
        <div className="flex items-center gap-3">
          <Image
            src="/assets/ucreates_logo.png"
            alt="UCreates"
            width={32}
            height={32}
            className="object-contain"
          />
          <div>
            <h3 className="text-xl font-extrabold text-white flex items-center gap-2">
              Build a Prototype with UCreates
            </h3>
            <p className="text-xs text-amber-300">ULink × Ayyan Events & Holidays Concept</p>
          </div>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <p className="text-xs text-slate-300">
              Select an upcoming Ayyan event and we will design a live interactive hardware & software prototype tailored specifically for your team.
            </p>

            {/* Event Type Selection */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-400">Target Event Category:</label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setEventType('wedding')}
                  className={`p-2.5 rounded-xl border text-xs font-bold transition-all flex flex-col items-center gap-1 ${
                    eventType === 'wedding'
                      ? 'bg-amber-500/20 border-amber-400 text-amber-300'
                      : 'bg-slate-900 border-slate-800 text-slate-400'
                  }`}
                >
                  <Heart className="w-4 h-4" />
                  Wedding
                </button>
                <button
                  type="button"
                  onClick={() => setEventType('corporate')}
                  className={`p-2.5 rounded-xl border text-xs font-bold transition-all flex flex-col items-center gap-1 ${
                    eventType === 'corporate'
                      ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300'
                      : 'bg-slate-900 border-slate-800 text-slate-400'
                  }`}
                >
                  <Building2 className="w-4 h-4" />
                  Corporate Gala
                </button>
                <button
                  type="button"
                  onClick={() => setEventType('conference')}
                  className={`p-2.5 rounded-xl border text-xs font-bold transition-all flex flex-col items-center gap-1 ${
                    eventType === 'conference'
                      ? 'bg-indigo-500/20 border-indigo-400 text-indigo-300'
                      : 'bg-slate-900 border-slate-800 text-slate-400'
                  }`}
                >
                  <Calendar className="w-4 h-4" />
                  Summit / Expo
                </button>
              </div>
            </div>

            {/* Event Name */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-400">Event / Client Name (Optional):</label>
              <input
                type="text"
                placeholder="e.g. Royal Udaipur Wedding / Annual Tech Summit"
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-amber-400"
              />
            </div>

            {/* Ayyan Team Member Name */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-400">Your Name & Role at Ayyan:</label>
              <input
                type="text"
                required
                placeholder="e.g. Ayyan Founder / Event Producer"
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-amber-400"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-600 text-slate-950 font-extrabold text-sm shadow-xl shadow-amber-500/20 hover:shadow-amber-500/40 transition-all flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              Request Customized Ayyan Prototype
            </button>
          </form>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-lg font-bold text-white">Prototype Request Received!</h4>
            <p className="text-xs text-slate-300 max-w-xs mx-auto">
              The UCreates technology team will align with Ayyan Events & Holidays to prepare the custom prototype display.
            </p>
          </div>
        )}

      </div>
    </div>
  );
}
