import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { Faq } from './components/Faq';
import { Footer } from './components/Footer';
import { MessageCircle } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <Features />
        <Pricing />
        <Testimonials />
        <Faq />
        
        {/* Pre-Footer CTA */}
        <section className="py-20 bg-brand-600 text-center px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Pronto para emitir seu certificado?
            </h2>
            <p className="text-brand-100 text-lg mb-10">
              Garanta a segurança jurídica da sua empresa hoje mesmo. Processo validado e seguro.
            </p>
            <button className="bg-white text-brand-600 hover:bg-brand-50 font-bold py-4 px-10 rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-200 text-lg">
              Começar Agora
            </button>
          </div>
        </section>
      </main>

      <Footer />

      {/* Floating WhatsApp/Support Button */}
      <button 
        className="fixed bottom-6 right-6 bg-accent-500 hover:bg-accent-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all z-40 flex items-center justify-center"
        aria-label="Fale Conosco"
      >
        <MessageCircle size={28} />
      </button>
    </div>
  );
}

export default App;
