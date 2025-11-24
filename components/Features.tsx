import React from 'react';
import { Section } from './Section';
import { STEPS, COPY } from '../constants';
import { Clock, ShieldCheck, MousePointerClick, ArrowRight } from 'lucide-react';

const IconMap = {
  Clock: Clock,
  ShieldCheck: ShieldCheck,
  MousePointerClick: MousePointerClick
};

export const Features: React.FC = () => {
  return (
    <Section id="how-it-works">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{COPY.features.title}</h2>
        <p className="text-lg text-slate-600">{COPY.features.subtitle}</p>
      </div>

      <div className="grid md:grid-cols-3 gap-12 relative">
        {/* Connecting Line (Desktop) */}
        <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-slate-200 via-brand-200 to-slate-200 z-0"></div>

        {STEPS.map((step, idx) => {
          const Icon = IconMap[step.iconName];
          return (
            <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-24 h-24 rounded-3xl bg-white border border-slate-100 shadow-lg flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                 <div className="w-16 h-16 rounded-2xl bg-brand-50 flex items-center justify-center text-brand-600">
                   <Icon size={32} strokeWidth={1.5} />
                 </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed max-w-xs">{step.description}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
};
