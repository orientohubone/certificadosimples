import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button';
import { COPY } from '../constants';
import { ShieldCheck, Star, Play, CheckCircle2 } from 'lucide-react';

export const Hero: React.FC = () => {
  const titles = COPY.hero.dynamicTitles;
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    if (!titles?.length) return;
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [titles?.length]);

  const heroBadges = useMemo(
    () => [
      'Validação guiada por especialistas',
      'Processo chancelado pelo ITI',
      'Segurança com dupla verificação'
    ],
    []
  );

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-slate-50 pt-32 pb-24 lg:pt-40 lg:pb-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-500/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-12 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-700 shadow-sm"
            >
              <span className="flex h-2 w-2 rounded-full bg-accent-500 animate-pulse" />
              Certificado digital imediato
            </motion.div>

            <motion.h1
              className="text-4xl font-bold leading-tight text-slate-900 md:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Emissão profissional
              <br />
              <span className="text-brand-600">de Certificados</span>
              <span className="relative mt-4 block min-h-[7rem] w-full overflow-hidden rounded-2xl px-2 py-4 md:min-h-[9rem] lg:min-h-[10rem]">
                {titles.map((title, index) => (
                  <motion.span
                    key={title}
                    className={`absolute inset-0 flex items-center text-brand-600 ${index === titleIndex ? 'font-semibold' : 'font-medium'}`}
                    initial={{ opacity: 0, y: 110 }}
                    animate={
                      titleIndex === index
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: titleIndex > index ? -110 : 110 }
                    }
                    transition={{ type: 'spring', stiffness: 80, damping: 20 }}
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </motion.h1>

            <motion.p
              className="mt-6 text-lg text-slate-600 md:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              {COPY.hero.subhead}
            </motion.p>

            <motion.div
              className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              <Button
                size="lg"
                withIcon
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                className="shadow-brand-500/30 shadow-lg"
              >
                {COPY.hero.cta}
              </Button>
              <button
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center text-base font-semibold text-slate-600 transition-colors hover:text-brand-600"
              >
                <Play className="mr-2 h-5 w-5" /> Ver demonstração
              </button>
            </motion.div>

            <motion.div
              className="mt-10 flex flex-wrap items-center gap-6 text-sm font-medium text-slate-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.6 }}
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    className="h-10 w-10 rounded-full border-2 border-white object-cover shadow"
                    src={`https://picsum.photos/56/56?random=${i + 20}`}
                    alt="Cliente satisfeito"
                  />
                ))}
              </div>
              <div className="flex items-center gap-1 text-slate-600">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} size={16} fill="currentColor" />
                  ))}
                </div>
                {COPY.hero.trust}
              </div>
            </motion.div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {heroBadges.map((badge) => (
                <div key={badge} className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white/70 p-4 shadow-sm">
                  <CheckCircle2 className="h-5 w-5 text-accent-500" />
                  <p className="text-sm font-semibold text-slate-600">{badge}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex flex-col items-center">
            <div className="relative flex items-center justify-center">
              <motion.div
                className="relative flex h-80 w-80 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-[0_35px_120px_rgba(2,132,199,0.45)]"
                initial={{ opacity: 0, scale: 0.75 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <motion.span
                  className="absolute inset-0 rounded-full bg-brand-500/30"
                  animate={{ scale: [1, 1.25, 1.35], opacity: [0.35, 0.05, 0.35] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.span
                  className="absolute inset-8 rounded-full border border-white/40"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                />
                <ShieldCheck size={128} className="relative z-10" />
              </motion.div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 text-center text-slate-500">
          <span className="text-sm uppercase tracking-[0.3em]">Confiado por milhares</span>
          <hr className="mx-auto h-px w-32 border-none bg-slate-200" />
        </div>
      </div>
    </section>
  );
};
