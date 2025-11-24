import React from 'react';
import { Button } from './Button';
import { COPY } from '../constants';
import { ShieldCheck, Star } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-slate-50 pt-32 pb-20 lg:pt-40 lg:pb-28">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 bg-white py-2 px-4 rounded-full shadow-sm border border-slate-200 mb-8">
              <span className="flex h-2 w-2 rounded-full bg-accent-500 animate-pulse"></span>
              <span className="text-sm font-medium text-slate-600 tracking-wide uppercase">Processo 100% Online</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
              {COPY.hero.headline.split(' ').slice(0, -2).join(' ')} 
              <span className="text-brand-600 block mt-2">
                {COPY.hero.headline.split(' ').slice(-2).join(' ')}
              </span>
            </h1>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
              {COPY.hero.subhead}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button size="lg" withIcon onClick={() => document.getElementById('pricing')?.scrollIntoView({behavior: 'smooth'})}>
                {COPY.hero.cta}
              </Button>
              <Button variant="outline" size="lg" onClick={() => document.getElementById('how-it-works')?.scrollIntoView({behavior: 'smooth'})}>
                Entenda o processo
              </Button>
            </div>

            <div className="flex items-center gap-4 text-sm font-medium text-slate-500">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <img key={i} className="w-8 h-8 rounded-full border-2 border-white" src={`https://picsum.photos/50/50?random=${i + 10}`} alt="User" />
                ))}
              </div>
              <div className="flex items-center gap-1">
                <div className="flex text-yellow-400">
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                </div>
                <span>{COPY.hero.trust}</span>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/50 bg-slate-900 aspect-square max-h-[600px]">
               {/* Simulating a Dashboard/Certificate Interface */}
               <img 
                src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=2938&auto=format&fit=crop" 
                alt="Business Professional" 
                className="object-cover w-full h-full opacity-80"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
               
               {/* Floating Card Element */}
               <div className="absolute bottom-10 left-10 right-10 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl text-white">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-brand-500 rounded-lg">
                      <ShieldCheck size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Certificado Validado</h3>
                      <p className="text-slate-300 text-sm">Acesso Gov.br autorizado</p>
                    </div>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-accent-500 w-[100%]"></div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
