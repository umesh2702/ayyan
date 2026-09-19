'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, Users, Send, Smartphone, Monitor, CheckCircle2, Vote } from 'lucide-react';

interface Session {
  id: string;
  title: string;
  speaker: string;
  time: string;
  room: string;
}

export default function LiveEventDemo() {
  const [sessions] = useState<Session[]>([
    { id: '1', title: 'The Future of AI', speaker: 'Rahul Sharma', time: 'LIVE NOW (2:30 PM)', room: 'Main Auditorium' },
    { id: '2', title: 'Panel Discussion: Quantum Computing', speaker: 'Dr. Vikram Seth & Panel', time: '3:30 PM', room: 'Stage B' },
    { id: '3', title: 'Cybersecurity in 2027', speaker: 'Priya Nair', time: '4:45 PM', room: 'Main Auditorium' },
  ]);

  const [activeSessionId, setActiveSessionId] = useState<string>('1');
  const [announcement, setAnnouncement] = useState<string>('Tea break starts in 10 minutes at the main foyer.');
  const [announcementInput, setAnnouncementInput] = useState<string>('Tea break starts in 10 minutes at the main foyer.');
  const [announcementUpdated, setAnnouncementUpdated] = useState<boolean>(false);

  const [attendeeCount, setAttendeeCount] = useState<number>(428);

  const [pollVotes, setPollVotes] = useState({
    AI: 215,
    Robotics: 120,
    Cybersecurity: 93,
  });
  const [userVoted, setUserVoted] = useState<string | null>(null);

  const [attendeeTab, setAttendeeTab] = useState<'live' | 'schedule' | 'poll' | 'qa'>('live');

  const currentLiveSession = sessions.find((s) => s.id === activeSessionId) || sessions[0];
  const nextSession = sessions.find((s) => s.id !== activeSessionId) || sessions[1];

  const handlePublishAnnouncement = (e: React.FormEvent) => {
    e.preventDefault();
    setAnnouncement(announcementInput);
    setAnnouncementUpdated(true);
    setTimeout(() => setAnnouncementUpdated(false), 3000);
  };

  const handleVote = (option: 'AI' | 'Robotics' | 'Cybersecurity') => {
    if (userVoted) return;
    setUserVoted(option);
    setPollVotes((prev) => ({
      ...prev,
      [option]: prev[option] + 1,
    }));
  };

  const totalVotes = pollVotes.AI + pollVotes.Robotics + pollVotes.Cybersecurity;

  return (
    <section id="live-demo" className="py-32 bg-[#050910] text-white relative overflow-hidden border-t border-white/10">
      
      {/* Subtle Soft Glow */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[400px] bg-[#16B8D4]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#16B8D4]/10 border border-[#16B8D4]/20 text-xs font-semibold text-[#16B8D4]">
            <span className="w-2 h-2 rounded-full bg-[#16B8D4] animate-pulse" />
            <span>ULink Live • Real-Time Event Engine</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
            One event. <br />
            <span className="text-[#16B8D4]">One live digital experience.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed pt-2">
            A live digital layer that keeps attendees connected throughout the event. Test the real-time synchronization below by switching sessions or broadcasting announcements on the left!
          </p>
        </div>

        {/* Split-Screen Synchronized Demo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT: ORGANIZER CONTROL CONSOLE */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#0D1623] border border-white/10 p-6 sm:p-10 shadow-2xl space-y-8">
              
              {/* Console Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-2xl bg-[#16B8D4]/15 border border-[#16B8D4]/30 text-[#16B8D4]">
                    <Monitor className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-white flex items-center gap-2">
                      TECH SUMMIT 2026
                      <span className="text-[10px] font-mono uppercase bg-red-500/20 text-red-400 border border-red-500/30 px-2 py-0.5 rounded font-bold">
                        LIVE NOW
                      </span>
                    </h3>
                    <p className="text-xs text-slate-400">Organizer Console</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300">
                  <Users className="w-4 h-4 text-[#16B8D4]" />
                  <span>Checked-in:</span>
                  <span className="font-mono font-bold text-white">{attendeeCount}</span>
                  <button
                    onClick={() => setAttendeeCount((prev) => prev + 1)}
                    className="ml-1 px-1.5 py-0.5 rounded bg-[#16B8D4]/20 text-[#16B8D4] text-[10px] font-bold"
                  >
                    +1
                  </button>
                </div>
              </div>

              {/* 1. Active Session Switcher */}
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-widest text-[#16B8D4] font-bold block">
                  Select Active Session ("LIVE NOW")
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {sessions.map((sess) => {
                    const isActive = sess.id === activeSessionId;
                    return (
                      <button
                        key={sess.id}
                        onClick={() => setActiveSessionId(sess.id)}
                        className={`p-4 rounded-2xl text-left transition-all border ${
                          isActive
                            ? 'bg-[#16B8D4]/15 border-[#16B8D4] text-white shadow-lg'
                            : 'bg-white/5 border-white/10 text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        <span className="text-[10px] font-mono text-[#16B8D4] block mb-1">{sess.room}</span>
                        <p className="text-xs font-bold truncate">{sess.title}</p>
                        <p className="text-[10px] text-slate-400">{sess.speaker}</p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2. Announcement Publisher */}
              <div className="space-y-3 pt-4 border-t border-white/10">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#C9A227] font-bold">
                    Broadcast Live Announcement
                  </span>
                  {announcementUpdated && (
                    <span className="text-xs text-emerald-400 font-bold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Published!
                    </span>
                  )}
                </div>

                <form onSubmit={handlePublishAnnouncement} className="flex gap-2">
                  <input
                    type="text"
                    value={announcementInput}
                    onChange={(e) => setAnnouncementInput(e.target.value)}
                    placeholder="Type announcement..."
                    className="flex-1 px-4 py-3 rounded-xl bg-slate-950 border border-white/15 text-xs text-white focus:outline-none focus:border-[#C9A227]"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-xl bg-[#C9A227] text-[#05080C] font-bold text-xs hover:bg-[#D4B035] transition-colors flex items-center gap-1.5 shrink-0"
                  >
                    <Send className="w-3.5 h-3.5" />
                    Publish
                  </button>
                </form>
              </div>

              {/* 3. Audience Poll Dashboard View */}
              <div className="space-y-3 pt-4 border-t border-white/10">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#16B8D4] font-bold flex items-center gap-1.5">
                    <Vote className="w-3.5 h-3.5" />
                    Live Poll Results ({totalVotes} votes)
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-3 text-xs">
                  <p className="font-bold text-white">"What will impact your business most in 2027?"</p>
                  
                  {/* AI Option */}
                  <div>
                    <div className="flex justify-between text-[11px] mb-1">
                      <span className="text-slate-300">Artificial Intelligence</span>
                      <span className="text-[#16B8D4] font-mono font-bold">
                        {Math.round((pollVotes.AI / totalVotes) * 100)}% ({pollVotes.AI})
                      </span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                      <div
                        className="h-full bg-[#16B8D4] transition-all duration-500"
                        style={{ width: `${(pollVotes.AI / totalVotes) * 100}%` }}
                      />
                    </div>
                  </div>

                  {/* Robotics Option */}
                  <div>
                    <div className="flex justify-between text-[11px] mb-1">
                      <span className="text-slate-300">Robotics & Automation</span>
                      <span className="text-[#C9A227] font-mono font-bold">
                        {Math.round((pollVotes.Robotics / totalVotes) * 100)}% ({pollVotes.Robotics})
                      </span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                      <div
                        className="h-full bg-[#C9A227] transition-all duration-500"
                        style={{ width: `${(pollVotes.Robotics / totalVotes) * 100}%` }}
                      />
                    </div>
                  </div>

                  {/* Cybersecurity Option */}
                  <div>
                    <div className="flex justify-between text-[11px] mb-1">
                      <span className="text-slate-300">Cybersecurity</span>
                      <span className="text-slate-300 font-mono font-bold">
                        {Math.round((pollVotes.Cybersecurity / totalVotes) * 100)}% ({pollVotes.Cybersecurity})
                      </span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                      <div
                        className="h-full bg-slate-400 transition-all duration-500"
                        style={{ width: `${(pollVotes.Cybersecurity / totalVotes) * 100}%` }}
                      />
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>

          {/* RIGHT: ATTENDEE MOBILE PHONE SCREEN */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-sm rounded-[36px] bg-[#0A1017] border-4 border-slate-800 p-4 shadow-2xl space-y-3 relative overflow-hidden">
              
              {/* Phone Notch */}
              <div className="w-24 h-3 bg-slate-900 rounded-b-lg mx-auto mb-2" />

              {/* Mobile Header Bar */}
              <div className="flex items-center justify-between pb-2 border-b border-white/10 text-xs">
                <div className="flex items-center gap-1.5 font-bold text-white">
                  <Smartphone className="w-3.5 h-3.5 text-[#16B8D4]" />
                  <span>TECH SUMMIT 2026</span>
                </div>
                <span className="text-[10px] text-emerald-400 font-mono font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  LIVE
                </span>
              </div>

              {/* Broadcast Announcement Banner */}
              <AnimatePresence mode="wait">
                {announcement && (
                  <motion.div
                    key={announcement}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-3 rounded-2xl bg-[#C9A227]/10 border border-[#C9A227]/30 text-xs text-[#C9A227] space-y-1"
                  >
                    <div className="flex items-center gap-1.5 font-bold">
                      <Bell className="w-3.5 h-3.5 text-[#C9A227]" />
                      <span>Announcement:</span>
                    </div>
                    <p className="text-[11px] text-slate-200">{announcement}</p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Mobile Tab Switcher */}
              <div className="grid grid-cols-4 gap-1 bg-white/5 p-1 rounded-xl text-[10px] font-semibold text-center">
                <button
                  onClick={() => setAttendeeTab('live')}
                  className={`py-1.5 rounded-lg transition-colors ${
                    attendeeTab === 'live' ? 'bg-[#16B8D4] text-[#05080C] font-bold' : 'text-slate-400'
                  }`}
                >
                  Live
                </button>
                <button
                  onClick={() => setAttendeeTab('schedule')}
                  className={`py-1.5 rounded-lg transition-colors ${
                    attendeeTab === 'schedule' ? 'bg-[#16B8D4] text-[#05080C] font-bold' : 'text-slate-400'
                  }`}
                >
                  Schedule
                </button>
                <button
                  onClick={() => setAttendeeTab('poll')}
                  className={`py-1.5 rounded-lg transition-colors ${
                    attendeeTab === 'poll' ? 'bg-[#16B8D4] text-[#05080C] font-bold' : 'text-slate-400'
                  }`}
                >
                  Poll
                </button>
                <button
                  onClick={() => setAttendeeTab('qa')}
                  className={`py-1.5 rounded-lg transition-colors ${
                    attendeeTab === 'qa' ? 'bg-[#16B8D4] text-[#05080C] font-bold' : 'text-slate-400'
                  }`}
                >
                  Q&A
                </button>
              </div>

              {/* Mobile Content Display */}
              <div className="min-h-[260px] bg-white/5 rounded-2xl p-4 border border-white/10 space-y-3">
                {attendeeTab === 'live' && (
                  <div className="space-y-3">
                    <div className="p-3 rounded-xl bg-[#16B8D4]/10 border border-[#16B8D4]/30">
                      <span className="text-[10px] text-[#16B8D4] font-bold uppercase block mb-1">
                        🔴 HAPPENING NOW
                      </span>
                      <h4 className="text-xs font-bold text-white">{currentLiveSession.title}</h4>
                      <p className="text-[11px] text-slate-300 mt-0.5">Speaker: {currentLiveSession.speaker}</p>
                    </div>

                    <div className="p-3 rounded-xl bg-black/40 border border-white/10">
                      <span className="text-[10px] text-slate-400 font-semibold block mb-1">
                        ⏳ UP NEXT (3:30 PM)
                      </span>
                      <h5 className="text-xs font-bold text-slate-200">{nextSession.title}</h5>
                    </div>
                  </div>
                )}

                {attendeeTab === 'schedule' && (
                  <div className="space-y-2 text-xs">
                    {sessions.map((s) => (
                      <div key={s.id} className="p-2 rounded-xl bg-black/40 border border-white/10 flex justify-between">
                        <div>
                          <p className="font-bold text-white text-[11px]">{s.title}</p>
                          <p className="text-[10px] text-slate-400">{s.speaker}</p>
                        </div>
                        <span className="text-[10px] text-[#16B8D4] font-mono">{s.time}</span>
                      </div>
                    ))}
                  </div>
                )}

                {attendeeTab === 'poll' && (
                  <div className="space-y-2 text-xs">
                    <p className="font-bold text-white text-[11px]">"What will impact your business most?"</p>
                    {(['AI', 'Robotics', 'Cybersecurity'] as const).map((opt) => (
                      <button
                        key={opt}
                        onClick={() => handleVote(opt)}
                        className={`w-full p-2.5 rounded-xl text-left text-xs font-bold transition-all flex justify-between border ${
                          userVoted === opt
                            ? 'bg-[#16B8D4]/20 text-[#16B8D4] border-[#16B8D4]'
                            : 'bg-black/40 text-slate-300 border-white/10'
                        }`}
                      >
                        <span>{opt === 'AI' ? 'Artificial Intelligence' : opt === 'Robotics' ? 'Robotics & Automation' : 'Cybersecurity'}</span>
                        {userVoted === opt ? (
                          <span className="text-[10px] bg-[#16B8D4] text-[#05080C] px-2 py-0.5 rounded font-bold">Voted</span>
                        ) : (
                          <span className="text-[10px] text-slate-400">Vote</span>
                        )}
                      </button>
                    ))}
                  </div>
                )}

                {attendeeTab === 'qa' && (
                  <div className="space-y-2 text-xs">
                    <p className="font-bold text-white text-[11px]">Ask Speaker a Question:</p>
                    <textarea
                      placeholder="Type your question..."
                      className="w-full p-2 rounded-xl bg-black/40 border border-white/10 text-xs text-white focus:outline-none focus:border-[#16B8D4] h-16 resize-none"
                    />
                    <button className="w-full py-2 rounded-xl bg-[#16B8D4] text-[#05080C] font-bold text-xs">
                      Submit Question
                    </button>
                  </div>
                )}
              </div>

              <div className="w-28 h-1 bg-slate-800 rounded-full mx-auto" />

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
