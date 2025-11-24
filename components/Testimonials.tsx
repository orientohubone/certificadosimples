import React from 'react';
import { Section } from './Section';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <Section background="dark">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Quem usa, aprova</h2>
        <p className="text-slate-400 text-lg">Junte-se a milhares de profissionais satisfeitos.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((t) => (
          <div key={t.id} className="bg-slate-800/50 p-8 rounded-2xl border border-brand-500/50 hover:bg-slate-800 transition-colors">
            <Quote className="text-brand-500 mb-6 h-8 w-8 opacity-50" />
            <p className="text-slate-300 mb-8 italic leading-relaxed">"{t.content}"</p>
            <div className="flex items-center gap-4">
              <img src={t.avatarUrl} alt={t.name} className="w-12 h-12 rounded-full border border-slate-600" />
              <div>
                <h4 className="text-white font-semibold">{t.name}</h4>
                <p className="text-sm text-slate-400">{t.role}, {t.company}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
