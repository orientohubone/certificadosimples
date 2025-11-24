import React, { useState } from 'react';
import { Section } from './Section';
import { FAQS } from '../constants';
import { Plus, Minus, MessageCircle, Clock, Shield } from 'lucide-react';

export const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="faq">
      <div className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Dúvidas Frequentes</h2>
          <p className="text-slate-600 text-lg mb-8">
            Não encontrou sua resposta? Nosso time de suporte está pronto para ajudar no chat.
          </p>
          
          <div className="p-6 bg-gradient-to-br from-brand-50 to-brand-100 rounded-2xl border border-brand-200 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-brand-500 rounded-xl flex items-center justify-center">
                <MessageCircle className="text-white" size={24} />
              </div>
              <h4 className="font-bold text-brand-900 text-lg">Precisa de ajuda urgente?</h4>
            </div>
            
            <p className="text-brand-700 text-sm mb-6 leading-relaxed">
              Atendimento especializado via WhatsApp em menos de 2 minutos. Respostas rápidas para suas dúvidas.
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-brand-600">
                <Clock size={16} className="text-brand-500" />
                <span className="text-sm font-medium">Resposta em até 2 minutos</span>
              </div>
              <div className="flex items-center gap-2 text-brand-600">
                <Shield size={16} className="text-brand-500" />
                <span className="text-sm font-medium">Suporte especializado 24/7</span>
              </div>
            </div>
            
            <button className="w-full bg-brand-500 text-white font-semibold py-3 px-6 rounded-xl hover:bg-brand-600 transition-colors flex items-center justify-center gap-2 shadow-md">
              <MessageCircle size={20} />
              Falar com atendente
            </button>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden bg-white">
                <button 
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors focus:outline-none"
                >
                  <span className={`font-semibold text-lg ${isOpen ? 'text-brand-600' : 'text-slate-800'}`}>
                    {faq.question}
                  </span>
                  {isOpen ? <Minus className="text-brand-600 shrink-0" /> : <Plus className="text-slate-400 shrink-0" />}
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100 mt-2">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};
