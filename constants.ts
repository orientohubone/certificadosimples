import { PricingPlan, Testimonial, FaqItem, CertificateType, FeatureStep } from './types';

// --- COPYWRITING: HERO & GENERAL ---
export const COPY = {
  hero: {
    headline: "Conquiste seu Certificado Digital em minutos",
    subhead: "A solução mais segura e desburocratizada para emitir seu e-CPF ou e-CNPJ. Validação simplificada e suporte especializado.",
    cta: "Emitir Agora",
    trust: "Mais de 15.000 empresas certificadas",
    dynamicTitles: [
      "para empresas em expansão",
      "com validação guiada",
      "com segurança máxima",
      "sem filas ou papelada"
    ],
    stats: [
      { label: "Empresas atendidas", value: "15.000+" },
      { label: "Tempo médio de emissão", value: "5 min" },
      { label: "Especialistas disponíveis", value: "24/7" }
    ]
  },
  features: {
    title: "Como funciona a emissão",
    subtitle: "Processo 100% otimizado para você não perder tempo."
  },
  pricing: {
    title: "Certificado digital de forma <span class='text-brand-600'>simples</span>",
    subtitle: "Transparência total. Sem taxas escondidas."
  }
};

// --- DATA: PRICING ---
export const PLANS: PricingPlan[] = [
  {
    id: 'a1-pj',
    name: 'e-CNPJ A1',
    description: 'Arquivo digital. Ideal para emissão de notas fiscais e rotinas administrativas.',
    price: 'R$ 149,90',
    type: CertificateType.A1,
    validity: '1 Ano',
    features: ['Instalação em múltiplos PCs', 'Emissão de NF-e ilimitada', 'Backup do arquivo', 'Entrega imediata após validação'],
    highlight: true,
    iconName: 'FileBadge'
  },
  {
    id: 'a3-token',
    name: 'e-CNPJ A3 + Token',
    description: 'Mídia física (Token USB). Maior segurança e portabilidade para sua assinatura.',
    price: 'R$ 289,90',
    type: CertificateType.A3,
    validity: '3 Anos',
    features: ['Dispositivo físico incluso', 'Validade estendida', 'Alta segurança criptográfica', 'Envio rápido do dispositivo'],
    highlight: false,
    iconName: 'Usb'
  },
  {
    id: 'a1-pf',
    name: 'e-CPF A1',
    description: 'Sua identidade digital para Receita Federal, e-Social e assinaturas de contratos.',
    price: 'R$ 119,90',
    type: CertificateType.A1,
    validity: '1 Ano',
    features: ['Assinatura de PDFs', 'Acesso ao Gov.br', 'Declaração de IR', 'Totalmente online'],
    highlight: false,
    iconName: 'FileBadge'
  }
];

// --- DATA: STEPS ---
export const STEPS: FeatureStep[] = [
  {
    title: "1. Escolha e Compre",
    description: "Selecione o modelo (A1 ou A3) ideal para sua necessidade e finalize o pagamento seguro.",
    iconName: 'MousePointerClick'
  },
  {
    title: "2. Agende a Validação",
    description: "Escolha o melhor horário para a videoconferência. Processo rápido de 5 minutos.",
    iconName: 'Clock'
  },
  {
    title: "3. Emissão Imediata",
    description: "Seu certificado é liberado logo após a validação para uso imediato.",
    iconName: 'ShieldCheck'
  }
];

// --- DATA: TESTIMONIALS ---
export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Ricardo Alves',
    role: 'Diretor Financeiro',
    company: 'TechSolutions',
    content: 'A velocidade da Certificado Simples é impressionante. Fizemos a renovação de toda a diretoria em uma tarde.',
    avatarUrl: 'https://picsum.photos/100/100?random=1'
  },
  {
    id: '2',
    name: 'Mariana Costa',
    role: 'Contadora',
    company: 'Costa Contabilidade',
    content: 'Indico para todos os meus clientes. A interface é limpa e o suporte resolve qualquer dúvida técnica.',
    avatarUrl: 'https://picsum.photos/100/100?random=2'
  },
  {
    id: '3',
    name: 'Carlos Eduardo',
    role: 'Advogado',
    company: 'Autônomo',
    content: 'Precisava assinar um contrato urgente. Em menos de 30 minutos resolvi a compra e agendei a validação.',
    avatarUrl: 'https://picsum.photos/100/100?random=3'
  }
];

// --- DATA: FAQ ---
export const FAQS: FaqItem[] = [
  {
    question: "O que é a validação por videoconferência?",
    answer: "É um processo regulamentado onde confirmamos sua identidade remotamente. Você só precisa de um celular ou computador com câmera e seus documentos (CNH ou RG)."
  },
  {
    question: "Qual a diferença entre A1 e A3?",
    answer: "O A1 é um arquivo digital instalado no computador, com validade de 1 ano. O A3 é armazenado em mídia física (Token/Card) ou nuvem, com validade de até 3 anos."
  },
  {
    question: "Posso usar o certificado em mais de um computador?",
    answer: "O modelo A1 permite cópias e instalação em várias máquinas simultaneamente. O A3 precisa estar conectado (Token) na máquina que será usada no momento."
  },
  {
    question: "Quanto tempo demora a emissão?",
    answer: "Após a videoconferência, a liberação costuma ser imediata para certificados A1. Para A3, depende do envio do dispositivo, caso não possua um."
  }
];
