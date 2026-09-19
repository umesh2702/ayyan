'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function TapToDigitalFlow() {
  const steps = [
    {
      num: '01',
      phase: 'PHYSICAL',
      title: 'ULink Stand',
      desc: 'Sleek NFC & QR hardware stand placed at entrance arches, banquet tables, or speaker podiums.',
    },
    {
      num: '02',
      phase: 'TAP / SCAN',
      title: 'No App Required',
      desc: 'Guests tap their smartphone or scan the QR code to connect instantly without downloads.',
    },
    {
      num: '03',
      phase: 'EXPERIENCE',
      title: 'Mobile Web Experience',
      desc: 'The browser launches in 0.5s with the customized event portal, schedule, and touchpoint features.',
    },
    {
      num: '04',
      phase: 'ENGAGE',
      title: 'Interact in the Moment',
      desc: 'Guests submit wishes, view live session streams, vote in polls, and connect with event organizers.',
    },
  ];

  return (
    <section className="py-28 bg-[#F7F5F0] text-[#0B1118] relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20 space-y-4">
          <span className="text-xs font-semibold tracking-widest text-[#C9A227] uppercase">
            Interaction Sequence
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0B1118] leading-[1.15]">
            From a physical touchpoint <br />
            <span className="text-[#C9A227]">to a digital experience.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#4A5568] font-normal leading-relaxed pt-1">
            Zero friction. Zero app downloads. Just an instant physical tap to digital magic.
          </p>
        </div>

        {/* 4 Elegant Editorial Sequence Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {steps.map((st, idx) => (
            <motion.div
              key={st.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="rounded-3xl bg-white border border-slate-200 p-8 shadow-editorial flex flex-col justify-between relative group hover:shadow-xl transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <span className="text-2xl font-extrabold font-mono text-[#0B1118]">
                    {st.num}
                  </span>
                  <span className="text-[10px] font-mono tracking-widest font-bold uppercase text-[#C9A227]">
                    {st.phase}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-[#0B1118]">
                  {st.title}
                </h3>
                <p className="text-xs text-[#4A5568] leading-relaxed">
                  {st.desc}
                </p>
              </div>

              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-10 p-1.5 rounded-full bg-white border border-slate-200 text-slate-400 shadow-sm">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
