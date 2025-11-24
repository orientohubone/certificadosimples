import { ReactNode } from 'react';

export enum CertificateType {
  A1 = 'A1',
  A3 = 'A3',
  CLOUD = 'Nuvem'
}

export enum ClientType {
  PF = 'Pessoa Física',
  PJ = 'Pessoa Jurídica'
}

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: string;
  type: CertificateType;
  validity: string;
  features: string[];
  highlight?: boolean;
  iconName: 'FileBadge' | 'Usb' | 'Cloud';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatarUrl: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FeatureStep {
  title: string;
  description: string;
  iconName: 'Clock' | 'ShieldCheck' | 'MousePointerClick';
}
