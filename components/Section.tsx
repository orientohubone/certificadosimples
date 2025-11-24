import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  background?: 'white' | 'gray' | 'dark';
}

export const Section: React.FC<SectionProps> = ({ 
  id, 
  className = '', 
  children,
  background = 'white'
}) => {
  const bgClasses = {
    white: 'bg-white',
    gray: 'bg-slate-50',
    dark: 'bg-slate-900 text-white'
  };

  return (
    <section id={id} className={`py-20 lg:py-28 ${bgClasses[background]} ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {children}
      </div>
    </section>
  );
};
