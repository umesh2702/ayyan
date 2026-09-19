'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function WhyItMatters() {
  const statements = [
    {
      title: 'Everything they need. One tap away.',
      desc: "Guests don't have to search for schedules, food menus, or venue details. A single tap brings everything up.",
    },
    {
      title: 'Give the venue a digital layer.',
      desc: 'Turn static physical spaces like dining tables, arches, and lounges into vibrant digital touchpoints.',
    },
    {
      title: 'Keep everyone in the moment.',
      desc: 'Bring live session schedules, speaker updates, and real-time announcements into one unified mobile screen.',
    },
    {
      title: 'Let the experience continue.',
      desc: 'Continue guest engagement, photo downloads, wishes, and feedback long after the physical event ends.',
    },
    {
      title: 'Give organizers a new digital layer.',
      desc: 'Ayyan Events & Holidays can potentially integrate this branded technology layer across all managed events.',
    },
  ];

  return (
    <section className="py-28 bg-[#F7F5F0] text-[#0B1118] relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20 space-y-4">
          <span className="text-xs font-semibold tracking-widest text-[#C9A227] uppercase">
            Value Proposition
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0B1118] leading-[1.15]">
            Why connect the physical event <br />
            <span className="text-[#C9A227]">to digital?</span>
          </h2>
        </div>

        {/* 5 Large Editorial Statements */}
        <div className="space-y-10 max-w-5xl">
          {statements.map((st, i) => (
            <motion.div
              key={st.title}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border-b border-slate-200 pb-8 flex flex-col md:flex-row md:items-baseline justify-between gap-4 group"
            >
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1118] group-hover:text-[#C9A227] transition-colors md:w-1/2">
                {st.title}
              </h3>
              <p className="text-sm sm:text-base text-[#4A5568] font-normal leading-relaxed md:w-1/2">
                {st.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
