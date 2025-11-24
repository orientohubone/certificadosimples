import React from 'react';
import { Section } from './Section';
import { Button } from './Button';
import { PLANS, COPY } from '../constants';
import { Check, FileBadge, Usb, Cloud } from 'lucide-react';

const IconMap = {
  FileBadge: FileBadge,
  Usb: Usb,
  Cloud: Cloud,
};

export const Pricing: React.FC = () => {
  return (
    <Section id="pricing" background="gray">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{COPY.pricing.title}</h2>
        <p className="text-lg text-slate-600">{COPY.pricing.subtitle}</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {PLANS.map((plan) => {
          const Icon = IconMap[plan.iconName];
          
          return (
            <div 
              key={plan.id} 
              className={`relative flex flex-col p-8 rounded-3xl bg-white transition-all duration-300 ${
                plan.highlight 
                  ? 'ring-2 ring-brand-500 shadow-xl shadow-brand-500/10 scale-100 lg:scale-105 z-10' 
                  : 'border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1'
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-600 text-white text-xs font-bold uppercase tracking-wide py-1 px-4 rounded-full">
                  Mais Popular
                </div>
              )}

              <div className="mb-6">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${plan.highlight ? 'bg-brand-100 text-brand-600' : 'bg-slate-100 text-slate-600'}`}>
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <p className="text-slate-500 text-sm min-h-[40px]">{plan.description}</p>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                <span className="text-slate-500 text-sm font-medium ml-2">/ {plan.validity}</span>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check size={18} className="text-accent-600 mt-0.5 shrink-0" />
                    <span className="text-slate-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.highlight ? 'primary' : 'outline'} 
                fullWidth
              >
                Selecionar Plano
              </Button>
            </div>
          );
        })}
      </div>
    </Section>
  );
};
