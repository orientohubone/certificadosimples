import React from 'react';
import { Section } from './Section';
import { Button } from './Button';
import { PLANS, COPY } from '../constants';
import { Check, FileBadge } from 'lucide-react';
import { motion } from 'framer-motion';

export const Pricing: React.FC = () => {
  const a1Plan = PLANS.find(p => p.type === 'A1');

  if (!a1Plan) return null;

  const benefits = [
    'Instalação em múltiplos dispositivos',
    'Emissão ilimitada de notas fiscais',
    'Backup automático do arquivo digital',
    'Entrega imediata após validação',
    'Suporte especializado',
    'Processo 100% online e seguro'
  ];

  return (
    <Section id="pricing" background="gray">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4" dangerouslySetInnerHTML={{ __html: COPY.pricing.title }} />
        <p className="text-lg text-slate-600">{COPY.pricing.subtitle}</p>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left side - Benefits list */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-slate-900 mb-8">Por que escolher o e-CNPJ A1?</h3>
          {benefits.map((benefit, idx) => (
            <motion.div 
              key={idx} 
              className="flex items-start gap-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <motion.div 
                className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-500 flex items-center justify-center mt-0.5"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Check size={16} className="text-white" />
              </motion.div>
              <p className="text-slate-700 text-lg leading-relaxed">{benefit}</p>
            </motion.div>
          ))}
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Button 
              size="lg" 
              withIcon 
              className="mt-8"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Falar com especialista
            </Button>
          </motion.div>
        </div>

        {/* Right side - Pricing card */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex flex-col p-8 rounded-3xl bg-white ring-2 ring-brand-500 shadow-xl shadow-brand-500/10"
          >
            <div className="mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-brand-100 text-brand-600">
                <FileBadge size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{a1Plan.name}</h3>
              <p className="text-slate-500 text-sm min-h-[40px]">{a1Plan.description}</p>
            </div>

            <div className="mb-6">
              <span className="text-4xl font-bold text-slate-900">{a1Plan.price}</span>
              <span className="text-slate-500 text-sm font-medium ml-2">/ {a1Plan.validity}</span>
            </div>
          </motion.div>

          {/* Floating trust indicators */}
          <div className="absolute -bottom-6 -left-6 hidden lg:block">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-lg p-4">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <img key={i} className="w-8 h-8 rounded-full border-2 border-white" src={`https://picsum.photos/40/40?random=${i + 30}`} alt="Cliente" />
                  ))}
                </div>
                <div className="text-sm">
                  <p className="font-semibold text-slate-900">+15.000 empresas</p>
                  <p className="text-slate-500">já confiam</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
