'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ArrowRight, CheckCircle2, QrCode, FileText, Users, Mic2, Award, LogOut, Table, Send } from 'lucide-react';

interface CorporateSpot {
  id: string;
  number: number;
  title: string;
  locationName: string;
  subtitle: string;
  x: string;
  y: string;
  icon: React.ReactNode;
  tagline: string;
  tableHighlight?: boolean;
  details: {
    heroTitle: string;
    description: string;
    experiences: string[];
  };
}

export default function CorporateExperience() {
  const [selectedSpotId, setSelectedSpotId] = useState<string>('table07');
  const [questionInput, setQuestionInput] = useState('');
  const [questionSent, setQuestionSent] = useState(false);

  const spots: CorporateSpot[] = [
    {
      id: 'entry',
      number: 1,
      title: 'Conference Entrance',
      locationName: 'ENTRY',
      subtitle: 'Start the Experience',
      x: '20%',
      y: '72%',
      icon: <QrCode className="w-4 h-4 text-[#16B8D4]" />,
      tagline: 'Instant portal access, registration check-in, digital pass, keynote agenda, and venue wayfinding map.',
      details: {
        heroTitle: 'Start the Experience at Entrance',
        description: 'Placed at the conference foyer, attendees tap their phone to immediately launch their digital badge, view the keynote agenda, access Wi-Fi, and navigate to assigned sessions.',
        experiences: [
          'Instant Event Portal Access',
          'Digital Conference Pass & Badge',
          'Keynote Schedule & Timeline',
          'Venue Map & Wayfinding Navigation',
        ],
      },
    },
    {
      id: 'registration',
      number: 2,
      title: 'Registration Desk',
      locationName: 'REGISTRATION',
      subtitle: 'Everything Attendees Need',
      x: '45%',
      y: '72%',
      icon: <FileText className="w-4 h-4 text-[#16B8D4]" />,
      tagline: 'Express check-in, badge downloads, and real-time organizer broadcast announcements.',
      details: {
        heroTitle: 'Express Registration & Badge Access',
        description: 'Accelerate check-in lines with NFC pods at registration. Attendees tap to confirm arrival, download session slide decks, and receive live broadcast updates.',
        experiences: [
          'Express Digital Check-In',
          'Session Slide Deck Downloads',
          'Badge Information Sync',
          'Live Organizer Announcements',
        ],
      },
    },
    {
      id: 'table07',
      number: 3,
      title: 'Round Table 07 Pod',
      locationName: 'ROUND TABLE',
      subtitle: 'Every Table Connection',
      x: '50%',
      y: '48%',
      tableHighlight: true,
      icon: <Table className="w-4 h-4 text-[#C9A227]" />,
      tagline: 'Physical acrylic stands on conference round tables turn each table into a dedicated networking pod.',
      details: {
        heroTitle: 'TABLE 07: Meet the People at Your Table',
        description: 'Acrylic ULink stands on conference round tables allow seated delegates to view who is at Table 07, share digital business cards, participate in table polls, and ask questions to speakers.',
        experiences: [
          'Table 07 Participant List & Bios',
          'Table-Specific Live Q&A',
          'Interactive Table Polls',
          'Table Sponsor Offers & Materials',
        ],
      },
    },
    {
      id: 'stage',
      number: 4,
      title: 'Keynote Main Stage',
      locationName: 'STAGE',
      subtitle: 'Stay Connected to Session',
      x: '50%',
      y: '22%',
      icon: <Mic2 className="w-4 h-4 text-[#16B8D4]" />,
      tagline: 'Current speaker bio, slide downloads, live Q&A submission to stage monitors, and real-time audience poll voting.',
      details: {
        heroTitle: 'Stay Connected to Keynote Sessions',
        description: 'Interactive touchpoint at the main auditorium. Attendees submit questions to speakers, vote in live audience polls, and download presentation slides in real time.',
        experiences: [
          'Speaker Bios & Slide Deck Access',
          'Submit Live Q&A to Speaker',
          'Real-Time Audience Poll Voting',
          'Session Resource Downloads',
        ],
      },
    },
    {
      id: 'sponsor',
      number: 5,
      title: 'Sponsor Expo Zone',
      locationName: 'SPONSOR',
      tagline: 'Turn sponsor spaces into digital touchpoints with instant lead capture and digital pamphlets.',
      subtitle: 'Digital Sponsor Touchpoint',
      x: '80%',
      y: '30%',
      icon: <Award className="w-4 h-4 text-[#C9A227]" />,
      details: {
        heroTitle: 'Give Every Sponsor a Digital Touchpoint',
        description: 'Turn sponsor booths into digital lead interaction pods where attendees tap to download product brochures, watch demos, and submit lead contact forms.',
        experiences: [
          'Digital Product Pamphlets',
          'Instant Lead Capture Form',
          'Exclusive Partner Offers & Discounts',
          'Product Demo Videos',
        ],
      },
    },
    {
      id: 'exit',
      number: 6,
      title: 'Exit & Networking Lounge',
      locationName: 'EXIT',
      subtitle: "Don't End Engagement",
      x: '82%',
      y: '72%',
      icon: <LogOut className="w-4 h-4 text-[#16B8D4]" />,
      tagline: "Don't let engagement end at the exit. Instant event feedback, ratings, and future Ayyan corporate event previews.",
      details: {
        heroTitle: "Don't Let Engagement End at the Exit",
        description: 'As delegates leave the conference, a tap at the exit stand captures event feedback ratings, offers complete presentation bundle downloads, and introduces future Ayyan events.',
        experiences: [
          'Instant Event Rating & Feedback',
          'Complete Presentation Bundle Access',
          'Social Media Share & Certificate',
          'Ayyan Corporate Services Contact',
        ],
      },
    },
  ];

  const currentSpot = spots.find((s) => s.id === selectedSpotId) || spots[2];

  const handleSendQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!questionInput.trim()) return;
    setQuestionSent(true);
    setTimeout(() => {
      setQuestionSent(false);
      setQuestionInput('');
    }, 4000);
  };

  return (
    <section id="corporate" className="py-28 bg-gradient-to-b from-[#F7F5F0] via-[#EAE7DF] to-[#0A121D] text-[#0B1118] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20 space-y-4">
          <span className="text-xs font-semibold tracking-widest text-[#16B8D4] uppercase">
            Corporate Event Touchpoints
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0B1118] leading-[1.15]">
            The venue becomes <br />
            <span className="text-[#16B8D4]">an interface.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#4A5568] font-normal leading-relaxed pt-1">
            From entry to exit, ULink gives conference attendees instant access to the information and interactions that matter most.
          </p>
        </div>

        {/* 2-Column Layout: Interactive Conference Venue Map on Left, Floating Detail Panel on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Conference Venue Canvas Visual */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#F7F5F0] border border-slate-200 p-6 sm:p-8 shadow-editorial relative overflow-hidden">
              
              {/* Header Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 text-xs text-slate-500 mb-6">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#16B8D4]" />
                  <span className="font-bold text-[#0B1118]">Interactive Corporate Conference Venue Map</span>
                </div>
                <span className="text-xs font-mono text-[#16B8D4] font-semibold">Select Touchpoint</span>
              </div>

              {/* Conference Blueprint Map Canvas */}
              <div className="relative w-full h-[380px] sm:h-[450px] rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-inner">
                {/* Subtle Blueprint Grid Texture */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#CBD5E1_1px,transparent_1px),linear-gradient(to_bottom,#CBD5E1_1px,transparent_1px)] bg-[size:24px_24px] opacity-35" />

                {/* Main Keynote Stage */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-56 h-22 rounded-2xl border-2 border-[#16B8D4]/50 bg-[#F7F5F0] flex flex-col items-center justify-center text-center p-2 shadow-sm">
                  <span className="text-xs font-extrabold text-[#0B1118]">Main Keynote Auditorium</span>
                  <span className="text-[10px] text-[#16B8D4]">Live Q&A & Keynote Stream</span>
                </div>

                {/* Round Tables Pod Area */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-32 rounded-3xl border-2 border-dashed border-[#C9A227]/60 bg-[#FFFDF5] flex flex-col items-center justify-center text-center p-3 shadow-sm">
                  <span className="text-xs font-extrabold text-[#0B1118] flex items-center gap-1.5">
                    <Table className="w-3.5 h-3.5 text-[#C9A227]" />
                    Round Tables Networking Pods
                  </span>
                  <span className="text-[10px] text-[#C9A227] mt-0.5">Table 01 • Table 07 • Table 12</span>
                </div>

                {/* Sponsor Expo Zone */}
                <div className="absolute top-8 right-6 w-36 h-24 rounded-2xl border border-slate-300 bg-[#F7F5F0] flex flex-col items-center justify-center text-center p-2">
                  <span className="text-[11px] font-bold text-[#0B1118]">Sponsor Expo Zone</span>
                  <span className="text-[9px] text-slate-500">Digital Lead Pods</span>
                </div>

                {/* Entrance & Check-In */}
                <div className="absolute bottom-6 left-6 w-36 h-20 rounded-2xl border border-slate-300 bg-[#F7F5F0] flex flex-col items-center justify-center text-center p-2">
                  <span className="text-[11px] font-bold text-[#0B1118]">Conference Entrance</span>
                  <span className="text-[9px] text-slate-500">Instant Pass & Agenda</span>
                </div>

                {/* Registration Desk */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-36 h-20 rounded-2xl border border-slate-300 bg-[#F7F5F0] flex flex-col items-center justify-center text-center p-2">
                  <span className="text-[11px] font-bold text-[#0B1118]">Registration Desk</span>
                  <span className="text-[9px] text-slate-500">Express Check-In</span>
                </div>

                {/* Exit & Networking Lounge */}
                <div className="absolute bottom-6 right-6 w-36 h-20 rounded-2xl border border-slate-300 bg-[#F7F5F0] flex flex-col items-center justify-center text-center p-2">
                  <span className="text-[11px] font-bold text-[#0B1118]">Exit & Lounge</span>
                  <span className="text-[9px] text-slate-500">Feedback & Ratings</span>
                </div>

                {/* Subtle Pathway Connections */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30 stroke-[#16B8D4]">
                  <line x1="20%" y1="72%" x2="50%" y2="48%" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="50%" y1="48%" x2="50%" y2="22%" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="50%" y1="48%" x2="80%" y2="30%" strokeWidth="1" strokeDasharray="4 4" />
                </svg>

                {/* Interactive Map Location Markers */}
                {spots.map((spot) => {
                  const isSelected = spot.id === selectedSpotId;
                  return (
                    <div
                      key={spot.id}
                      style={{ left: spot.x, top: spot.y }}
                      className="absolute -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer"
                      onClick={() => setSelectedSpotId(spot.id)}
                    >
                      <div className="relative group flex flex-col items-center">
                        <button
                          className={`relative w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs shadow-md transition-all duration-300 ${
                            isSelected
                              ? spot.tableHighlight
                                ? 'bg-[#C9A227] text-[#05080C] scale-110 ring-4 ring-[#C9A227]/30'
                                : 'bg-[#16B8D4] text-[#05080C] scale-110 ring-4 ring-[#16B8D4]/30'
                              : 'bg-[#0B1118] text-white hover:bg-[#16B8D4] hover:text-[#0B1118]'
                          }`}
                        >
                          {spot.number}
                        </button>
                        <span className="mt-1 text-[10px] font-semibold text-[#0B1118] bg-white px-2 py-0.5 rounded shadow border border-slate-200 whitespace-nowrap">
                          {spot.locationName}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Quick Selector Pills */}
              <div className="mt-6 flex flex-wrap gap-2 justify-center">
                {spots.map((spot) => {
                  const isSelected = spot.id === selectedSpotId;
                  return (
                    <button
                      key={spot.id}
                      onClick={() => setSelectedSpotId(spot.id)}
                      className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                        isSelected
                          ? 'bg-[#0B1118] text-white shadow'
                          : 'bg-white text-slate-600 hover:text-[#0B1118] border border-slate-200'
                      }`}
                    >
                      {spot.number}. {spot.locationName}
                    </button>
                  );
                })}
              </div>

            </div>
          </div>

          {/* Right Column: Clean Floating Detail Drawer */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSpot.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className={`rounded-3xl p-8 sm:p-10 shadow-editorial border ${
                  currentSpot.tableHighlight
                    ? 'bg-[#FFFDF7] border-[#C9A227]/40'
                    : 'bg-[#F7F5F0] border-slate-200'
                } space-y-6`}
              >
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#16B8D4] font-bold block mb-2">
                    Touchpoint #{currentSpot.number} • {currentSpot.locationName}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1118]">
                    {currentSpot.details.heroTitle}
                  </h3>
                </div>

                {currentSpot.tableHighlight && (
                  <div className="inline-block px-3.5 py-1.5 rounded-full bg-[#C9A227]/15 text-[#9B7811] text-xs font-extrabold border border-[#C9A227]/30">
                    ⚡ TABLE 07 POD: Meet the people seated at your table.
                  </div>
                )}

                <p className="text-sm text-[#4A5568] leading-relaxed">
                  {currentSpot.details.description}
                </p>

                {/* Experiences List */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-bold text-[#0B1118] uppercase tracking-wider">
                    Possible Digital Interactions:
                  </h4>
                  <ul className="space-y-2">
                    {currentSpot.details.experiences.map((exp, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-xs text-[#0B1118] font-medium">
                        <CheckCircle2 className="w-4 h-4 text-[#16B8D4] shrink-0" />
                        <span>{exp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Widget */}
                <div className="pt-4 border-t border-slate-200/80">
                  {currentSpot.id === 'stage' ? (
                    <form onSubmit={handleSendQuestion} className="space-y-2">
                      <label className="text-xs font-bold text-[#0B1118]">Submit live Q&A question to speaker:</label>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={questionInput}
                          onChange={(e) => setQuestionInput(e.target.value)}
                          placeholder="Type question for Rahul Sharma..."
                          className="flex-1 px-4 py-2.5 rounded-full bg-white border border-slate-300 text-xs text-[#0B1118] focus:outline-none focus:border-[#16B8D4]"
                        />
                        <button
                          type="submit"
                          className="px-5 py-2.5 rounded-full bg-[#0B1118] text-white text-xs font-bold hover:bg-[#16B8D4] hover:text-[#0B1118] transition-colors shrink-0 flex items-center gap-1"
                        >
                          <Send className="w-3.5 h-3.5" />
                          Submit
                        </button>
                      </div>

                      {questionSent && (
                        <p className="text-xs text-emerald-600 font-semibold">
                          ✓ Question transmitted to speaker monitor!
                        </p>
                      )}
                    </form>
                  ) : (
                    <div className="p-3.5 rounded-2xl bg-white border border-slate-200 text-xs text-slate-600 flex items-center justify-between">
                      <span>Ready to deploy at conference venue</span>
                      <a
                        href="#live-demo"
                        className="font-bold text-[#16B8D4] hover:underline flex items-center gap-1"
                      >
                        Test Live Engine
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
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
