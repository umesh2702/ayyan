'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Send, Check, ExternalLink, MessageCircle } from 'lucide-react';

interface Hotspot {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  x: string;
  y: string;
  tag: string;
  ayyanBranding?: boolean;
  details: {
    heroTitle: string;
    description: string;
    experiences: string[];
  };
}

export default function WeddingExperience() {
  const [selectedHotspotId, setSelectedHotspotId] = useState<string>('entrance');
  const [wishInput, setWishInput] = useState('');
  const [wishSent, setWishSent] = useState(false);

  const hotspots: Hotspot[] = [
    {
      id: 'entrance',
      number: 1,
      title: 'Entrance Stand',
      subtitle: 'Welcome to the Celebration',
      x: '20%',
      y: '72%',
      tag: 'Welcome Touchpoint',
      details: {
        heroTitle: 'Welcome to the Celebration',
        description: 'Placed at the entrance archway, guests tap their phone to instantly open the couple story, ceremony schedule, venue navigation, and seating details without installing any app.',
        experiences: [
          'Couple Story & Timeline',
          'Ceremony Schedule & Timings',
          'Venue Map & Seating Details',
          'Instagram Hashtags & Photo Filter',
        ],
      },
    },
    {
      id: 'stage',
      number: 2,
      title: 'Stage & Photo Backstage',
      subtitle: 'Leave a Wish',
      x: '50%',
      y: '30%',
      tag: 'Digital Guestbook',
      details: {
        heroTitle: 'Leave a Digital Wish',
        description: 'Placed near the royal stage and photobooth backdrop. Guests tap to leave heartfelt digital messages and upload instant photos into the wedding memory vault.',
        experiences: [
          'Digital Guestbook Messages',
          'Direct Photo Upload to Couple',
          'Instagram Tagging & Reels',
          'Live Display Screen Sync',
        ],
      },
    },
    {
      id: 'dining',
      number: 3,
      title: 'Dining & Banquet Tables',
      subtitle: 'Tap for Menu',
      x: '78%',
      y: '65%',
      tag: 'Culinary Touchpoint',
      details: {
        heroTitle: 'Culinary Menu & Service',
        description: 'Elegantly styled acrylic stands on banquet tables allow guests to view curated food menus, dietary information, chef notes, or leave instant feedback.',
        experiences: [
          'Curated Course & Bar Menu',
          'Dietary & Special Instructions',
          'Guest Feedback & Rating',
          'Special Dietary Requests',
        ],
      },
    },
    {
      id: 'guest_lounge',
      number: 4,
      title: 'Guest Lounge',
      subtitle: 'Shared Memories',
      x: '28%',
      y: '35%',
      tag: 'Memory Lounge',
      details: {
        heroTitle: 'Make Memories Digital',
        description: 'Interactive touchpoints in the lounge area let family and friends view uploaded photos from the wedding, share moments, and download high-res memories.',
        experiences: [
          'Shared Event Photo Gallery',
          'Instant Social Media Share',
          'Voice Notes & Video Wishes',
          'Family Album Access',
        ],
      },
    },
    {
      id: 'ayyan_brand',
      number: 5,
      title: 'Ayyan Signature Touchpoint',
      subtitle: 'Loved the Event?',
      x: '82%',
      y: '28%',
      tag: 'Ayyan Showcase',
      ayyanBranding: true,
      details: {
        heroTitle: 'Loved the Event? Discover Ayyan Events & Holidays.',
        description: 'A dedicated branded touchpoint by Ayyan Events & Holidays. When guests are amazed by the wedding setup, a single tap lets them explore Ayyan portfolio and inquire for future celebrations.',
        experiences: [
          'Ayyan Luxury Weddings Portfolio',
          'Direct WhatsApp Planning Contact',
          'Instagram & Past Highlights',
          'Instant Booking Enquiry Form',
        ],
      },
    },
  ];

  const currentHotspot = hotspots.find((h) => h.id === selectedHotspotId) || hotspots[0];

  const handleSendWish = (e: React.FormEvent) => {
    e.preventDefault();
    if (!wishInput.trim()) return;
    setWishSent(true);
    setTimeout(() => {
      setWishSent(false);
      setWishInput('');
    }, 4000);
  };

  return (
    <section id="weddings" className="py-28 bg-[#FFFFFF] text-[#0B1118] relative border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-20 space-y-4">
          <span className="text-xs font-semibold tracking-widest text-[#C9A227] uppercase">
            Wedding Experience Architecture
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0B1118] leading-[1.15]">
            Designed around the celebration.
          </h2>
          <p className="text-base sm:text-lg text-[#4A5568] font-normal leading-relaxed pt-1">
            ULink turns carefully chosen moments around a wedding venue into simple digital touchpoints.
          </p>
        </div>

        {/* 2-Column Luxury Layout: Left Venue Visual, Right Clean Floating Drawer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Venue Canvas Visual */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#F7F5F0] border border-slate-200/80 p-6 sm:p-8 shadow-editorial relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 text-xs text-slate-500 mb-6">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#C9A227]" />
                  <span className="font-bold text-[#0B1118]">Interactive Wedding Venue Environment</span>
                </div>
                <span className="text-xs font-mono text-[#C9A227] font-semibold">Select Location</span>
              </div>

              {/* Luxury Venue Plan Graphics */}
              <div className="relative w-full h-[380px] sm:h-[450px] rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-inner">
                {/* Subtle Grid Texture */}
                <div className="absolute inset-0 bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] [background-size:20px_20px] opacity-40" />

                {/* Elegant Spatial Zones */}
                {/* Entrance */}
                <div className="absolute bottom-6 left-6 w-36 h-20 rounded-2xl border border-slate-300 bg-[#F7F5F0] flex flex-col items-center justify-center text-center p-2">
                  <span className="text-[11px] font-bold text-[#0B1118]">Entrance Arch</span>
                  <span className="text-[9px] text-slate-500">Welcome Touchpoint</span>
                </div>

                {/* Stage */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-52 h-24 rounded-2xl border-2 border-[#C9A227]/40 bg-[#F7F5F0] flex flex-col items-center justify-center text-center shadow-sm">
                  <span className="text-xs font-extrabold text-[#0B1118]">Main Royal Stage</span>
                  <span className="text-[10px] text-[#C9A227]">Couple & Photo Zone</span>
                </div>

                {/* Dining */}
                <div className="absolute bottom-6 right-6 w-44 h-24 rounded-2xl border border-slate-300 bg-[#F7F5F0] flex flex-col items-center justify-center text-center p-2">
                  <span className="text-[11px] font-bold text-[#0B1118]">Dining Banquet</span>
                  <span className="text-[9px] text-slate-500">ULink Table Stands</span>
                </div>

                {/* Guest Lounge */}
                <div className="absolute top-8 left-6 w-36 h-24 rounded-2xl border border-slate-300 bg-[#F7F5F0] flex flex-col items-center justify-center text-center p-2">
                  <span className="text-[11px] font-bold text-[#0B1118]">Guest Lounge</span>
                  <span className="text-[9px] text-slate-500">Memory Sharing</span>
                </div>

                {/* Ayyan Signature Point */}
                <div className="absolute top-8 right-6 w-36 h-24 rounded-2xl border border-[#C9A227]/40 bg-[#FFFDF5] flex flex-col items-center justify-center text-center p-2 shadow-sm">
                  <span className="text-[11px] font-extrabold text-[#0B1118]">Ayyan Point</span>
                  <span className="text-[9px] text-[#C9A227]">Brand Concierge</span>
                </div>

                {/* Subtle Connection Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30 stroke-[#C9A227]">
                  <line x1="28%" y1="72%" x2="50%" y2="35%" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="50%" y1="35%" x2="78%" y2="65%" strokeWidth="1" strokeDasharray="4 4" />
                </svg>

                {/* Location Markers */}
                {hotspots.map((spot) => {
                  const isSelected = spot.id === selectedHotspotId;
                  return (
                    <div
                      key={spot.id}
                      style={{ left: spot.x, top: spot.y }}
                      className="absolute -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer"
                      onClick={() => setSelectedHotspotId(spot.id)}
                    >
                      <div className="relative group flex flex-col items-center">
                        <button
                          className={`relative w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs shadow-md transition-all duration-300 ${
                            isSelected
                              ? 'bg-[#C9A227] text-[#05080C] scale-110 ring-4 ring-[#C9A227]/20'
                              : 'bg-[#0B1118] text-white hover:bg-[#C9A227] hover:text-[#0B1118]'
                          }`}
                        >
                          {spot.number}
                        </button>
                        <span className="mt-1 text-[10px] font-semibold text-[#0B1118] bg-white px-2 py-0.5 rounded shadow border border-slate-200 whitespace-nowrap">
                          {spot.subtitle}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Selector Pills */}
              <div className="mt-6 flex flex-wrap gap-2 justify-center">
                {hotspots.map((spot) => {
                  const isSelected = spot.id === selectedHotspotId;
                  return (
                    <button
                      key={spot.id}
                      onClick={() => setSelectedHotspotId(spot.id)}
                      className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                        isSelected
                          ? 'bg-[#0B1118] text-white shadow'
                          : 'bg-white text-slate-600 hover:text-[#0B1118] border border-slate-200'
                      }`}
                    >
                      {spot.number}. {spot.title}
                    </button>
                  );
                })}
              </div>

            </div>
          </div>

          {/* Right Column: Clean Floating Information Drawer */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentHotspot.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className={`rounded-3xl p-8 sm:p-10 shadow-editorial border ${
                  currentHotspot.ayyanBranding
                    ? 'bg-[#FFFDF7] border-[#C9A227]/40'
                    : 'bg-[#F7F5F0] border-slate-200'
                } space-y-6`}
              >
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#C9A227] font-bold block mb-2">
                    Location #{currentHotspot.number} • {currentHotspot.tag}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1118]">
                    {currentHotspot.details.heroTitle}
                  </h3>
                </div>

                <p className="text-sm text-[#4A5568] leading-relaxed">
                  {currentHotspot.details.description}
                </p>

                {/* Experiences List */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-bold text-[#0B1118] uppercase tracking-wider">
                    Possible Digital Experiences:
                  </h4>
                  <ul className="space-y-2">
                    {currentHotspot.details.experiences.map((exp, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-xs text-[#0B1118] font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227]" />
                        <span>{exp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Widget */}
                <div className="pt-4 border-t border-slate-200/80">
                  {currentHotspot.id === 'stage' ? (
                    <form onSubmit={handleSendWish} className="space-y-2">
                      <label className="text-xs font-bold text-[#0B1118]">Try simulated wish submission:</label>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={wishInput}
                          onChange={(e) => setWishInput(e.target.value)}
                          placeholder="Type a wish for the couple..."
                          className="flex-1 px-4 py-2.5 rounded-full bg-white border border-slate-300 text-xs text-[#0B1118] focus:outline-none focus:border-[#C9A227]"
                        />
                        <button
                          type="submit"
                          className="px-5 py-2.5 rounded-full bg-[#0B1118] text-white text-xs font-bold hover:bg-[#C9A227] hover:text-[#0B1118] transition-colors shrink-0 flex items-center gap-1"
                        >
                          <Send className="w-3.5 h-3.5" />
                          Send
                        </button>
                      </div>

                      {wishSent && (
                        <p className="text-xs text-emerald-600 font-semibold flex items-center gap-1">
                          <Check className="w-3.5 h-3.5" /> Published to wedding live wall!
                        </p>
                      )}
                    </form>
                  ) : currentHotspot.id === 'ayyan_brand' ? (
                    <div className="p-4 rounded-2xl bg-white border border-[#C9A227]/30 space-y-3">
                      <div className="flex items-center gap-3">
                        <Image
                          src="/assets/ayyan_logo.png"
                          alt="Ayyan Events"
                          width={75}
                          height={26}
                          className="object-contain"
                        />
                        <div>
                          <p className="text-xs font-bold text-[#0B1118]">Ayyan Events & Holidays</p>
                          <p className="text-[10px] text-slate-500">Event Producer & Luxury Planner</p>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <a
                          href="https://wa.me/?text=Hi%20Ayyan%20Events,%20I%20loved%20the%20wedding%20setup!"
                          target="_blank"
                          rel="noreferrer"
                          className="flex-1 py-2.5 px-4 rounded-full bg-[#0B1118] text-white text-xs font-bold text-center hover:bg-[#C9A227] hover:text-[#0B1118] transition-colors flex items-center justify-center gap-1.5"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                          WhatsApp Ayyan
                        </a>
                      </div>
                    </div>
                  ) : (
                    <div className="p-3.5 rounded-2xl bg-white border border-slate-200 text-xs text-slate-600 flex items-center justify-between">
                      <span>Ready to deploy at your wedding venue</span>
                      <span className="font-bold text-[#C9A227]">ULink Ready</span>
                    </div>
                  )}
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
