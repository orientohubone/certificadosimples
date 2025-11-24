import React from 'react';
import { Shield } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 text-white mb-4">
              <div className="bg-brand-600 p-1.5 rounded-lg">
                <Shield size={20} className="text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight">CertificadoSimples</span>
            </div>
            <p className="max-w-sm mb-6 text-sm leading-relaxed">
              Simplificamos a burocracia para que você possa focar no crescimento do seu negócio. Segurança criptográfica de ponta a ponta.
            </p>
            <div className="flex gap-4">
              {/* Social Placeholders */}
              <div className="w-8 h-8 bg-slate-800 rounded-full hover:bg-brand-600 transition-colors cursor-pointer"></div>
              <div className="w-8 h-8 bg-slate-800 rounded-full hover:bg-brand-600 transition-colors cursor-pointer"></div>
              <div className="w-8 h-8 bg-slate-800 rounded-full hover:bg-brand-600 transition-colors cursor-pointer"></div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Certificados</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-brand-500 transition-colors">e-CNPJ A1</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">e-CPF A1</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">Certificado em Nuvem</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">Renovação</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-brand-500 transition-colors">Sobre nós</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">Suporte Técnico</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">Termos de Uso</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>&copy; {new Date().getFullYear()} Certificado Simples Ltda. Todos os direitos reservados.</p>
          <p className="opacity-50">Design System inspirado em SimplesMetrics + Humansys</p>
        </div>
      </div>
    </footer>
  );
};
