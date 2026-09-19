'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AyyanOpportunity() {
  const categories = [
    {
      title: 'Weddings & Celebrations',
      desc: 'Guest engagement, digital wishes, venue navigation, shared memories, and organizer discovery.',
      tag: 'Guest Engagement',
    },
    {
      title: 'Corporate Galas & Summits',
      desc: 'ULink Live real-time schedule, speaker bios, audience polls, and executive announcements.',
      tag: 'Live Event Experience',
    },
    {
      title: 'Conferences & Forums',
      desc: 'Interactive session Q&A, round table networking pods, badge check-ins, and resource downloads.',
      tag: 'Sessions + Networking',
    },
    {
      title: 'Exhibitions & Trade Expos',
      desc: 'Booth digital touchpoints, instant lead capture forms, digital brochure distribution, and sponsor analytics.',
      tag: 'Booth Engagement',
    },
    {
      title: 'Product Launches',
      desc: 'Interactive brand experiences, direct product links, feedback collection, and VIP lounge passes.',
      tag: 'Interactive Brand Tech',
    },
    {
      title: 'College Fest & Youth Events',
      desc: 'Live schedule updates, competition announcements, voting polls, and instant social media integration.',
      tag: 'Live Updates + Interaction',
    },
  ];

  return (
    <section className="py-28 bg-[#FAFAF7] text-[#0B1118] relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Ayyan Partnership Header */}
        <div className="max-w-3xl mb-20 space-y-4">
          <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-xs shadow-sm">
            <Image
              src="/assets/ayyan_logo.png"
              alt="Ayyan Events"
              width={65}
              height={22}
              className="object-contain"
            />
            <span className="text-slate-400 font-light">×</span>
            <span className="font-semibold text-[#C9A227]">ULink Integration</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0B1118] leading-[1.15]">
            Imagine this across <br />
            <span className="text-[#C9A227]">Ayyan events.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#4A5568] font-normal leading-relaxed pt-1">
            ULink can become a signature digital experience layer that Ayyan Events & Holidays offers across diverse event portfolios.
          </p>
        </div>

        {/* Premium Visual Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-3xl bg-white border border-slate-200 p-8 shadow-editorial hover:border-[#C9A227]/40 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <span className="text-[10px] font-mono tracking-widest uppercase font-bold text-[#C9A227]">
                  {cat.tag}
                </span>
                <h3 className="text-xl font-extrabold text-[#0B1118] group-hover:text-[#C9A227] transition-colors">
                  {cat.title}
                </h3>
                <p className="text-xs text-[#4A5568] leading-relaxed">
                  {cat.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                Concept Application
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
