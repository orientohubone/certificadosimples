import React from 'react';
import { Section } from './Section';
import { STEPS, COPY } from '../constants';
import { Clock, ShieldCheck, MousePointerClick } from 'lucide-react';
import { motion } from 'framer-motion';

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

      <div className="relative mt-24">
        {/* Background Line (Static Gray) */}
        <div className="hidden md:block absolute top-10 left-[16%] right-[16%] h-1 bg-slate-200/30 z-0 rounded-full"></div>
        
        {/* Animated Blue Line */}
        <div className="hidden md:block absolute top-10 left-[16%] right-[16%] h-1 z-0 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-gradient-to-r from-brand-500 via-brand-400 to-brand-500"
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ 
              duration: 2.5, 
              ease: "linear",
              delay: 0.5
            }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
          {STEPS.map((step, index) => {
            const delay = index * 1.25;
            const Icon = IconMap[step.iconName];

            return (
              <div key={index} className="relative text-center p-4 md:p-0 group">
                {/* Animated Circle Wrapper */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0, borderColor: "rgba(2,132,199,0.1)" }}
                  whileInView={{ 
                    scale: 1, 
                    opacity: 1,
                    borderColor: "rgb(2,132,199)",
                    boxShadow: "0 0 40px rgba(2, 132, 199, 0.3)"
                  }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5, 
                    delay: delay,
                    type: "spring",
                    stiffness: 200
                  }}
                  className="w-20 h-20 mx-auto bg-white rounded-full border-4 flex items-center justify-center mb-8 relative z-10"
                >
                  {/* Pulsing Inner Glow */}
                  <motion.div 
                    animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: delay }}
                    className="absolute inset-0 bg-brand-500/20 rounded-full blur-md"
                  />

                  <div className="relative z-20 flex items-center justify-center">
                    <Icon size={24} className="text-brand-600" />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: delay + 0.2, duration: 0.5 }}
                >
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 max-w-xs mx-auto text-sm leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};
