'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function EventLifecycle() {
  const stages = [
    {
      title: 'BEFORE',
      subtitle: 'Anticipation & Details',
      items: [
        'Event Theme & Information',
        'Digital Pass & Registration',
        'Schedule & Keynote Timeline',
        'Venue Navigation & Map',
      ],
    },
    {
      title: 'DURING',
      subtitle: 'Real-Time Engagement',
      items: [
        'Live Broadcast Updates',
        'Audience Q&A & Speaker Slides',
        'Table-Specific Networking Pods',
        'Organizer Announcements',
      ],
    },
    {
      title: 'AFTER',
      subtitle: 'Extended Connections',
      items: [
        'Shared Photo Gallery Downloads',
        'Digital Wishes & Memory Vault',
        'Event Feedback & Rating',
        'Future Event Booking Enquiries',
      ],
    },
  ];

  return (
    <section className="py-28 bg-[#0B1118] text-white relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20 space-y-4">
          <span className="text-xs font-semibold tracking-widest text-[#C9A227] uppercase">
            Lifecycle Interaction
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
            The experience doesn't end <br />
            <span className="text-[#C9A227]">when the event does.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed pt-1">
            ULink creates continuous digital connection across every phase of an event — from build-up to live execution and post-event memories.
          </p>
        </div>

        {/* 3 Clean Editorial Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stages.map((stg, idx) => (
            <motion.div
              key={stg.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="rounded-3xl bg-[#131B26] border border-white/10 p-8 sm:p-10 shadow-editorial-dark flex flex-col justify-between space-y-8"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-xs font-mono font-bold tracking-widest text-[#C9A227]">
                    {stg.title}
                  </span>
                  <span className="text-xs text-slate-400">Phase 0{idx + 1}</span>
                </div>

                <h3 className="text-2xl font-extrabold text-white">
                  {stg.subtitle}
                </h3>

                <ul className="space-y-3 pt-2">
                  {stg.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-xs text-slate-300 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
