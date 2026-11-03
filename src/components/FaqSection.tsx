import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { FAQ_LIST, UNIAUTO_INFO } from '../data/uniautoData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 relative bg-white border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#003DA5] text-xs font-black uppercase tracking-wider mb-4">
            <HelpCircle className="w-4 h-4 text-[#003DA5]" />
            Tire Suas Dúvidas
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Perguntas Frequentes sobre a{' '}
            <span className="uniauto-text">Uniauto</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4 font-medium">
            Esclareça suas dúvidas sobre a proteção veicular, assistência 24h e processo de adesão.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {FAQ_LIST.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 ${
                  isOpen
                    ? 'border-[#003DA5]/40 bg-white shadow-md shadow-blue-900/5'
                    : 'border-slate-200 bg-slate-50 hover:bg-slate-100/70'
                }`}
              >
                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full py-5 px-6 flex items-center justify-between text-left gap-4 transition cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className={`text-base sm:text-lg font-bold flex-1 ${isOpen ? 'text-[#003DA5]' : 'text-slate-900'}`}>
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#003DA5] text-white' : 'bg-slate-200 text-slate-600'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-slate-700 leading-relaxed border-t border-slate-100 bg-white font-medium animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support callout if question not listed */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-base font-bold text-slate-900">Ficou com alguma dúvida específica?</h4>
            <p className="text-xs text-slate-500 font-medium">Nossa equipe de consultores em Maceió responde em poucos minutos.</p>
          </div>
          <a
            href={`https://wa.me/${UNIAUTO_INFO.whatsappNumber}?text=${encodeURIComponent(
              'Olá! Estava lendo o FAQ do site da Uniauto Maceió e tenho uma dúvida.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2.5 px-5 rounded-xl bg-[#003DA5] hover:bg-[#002f80] text-white font-bold text-xs flex items-center gap-2 whitespace-nowrap transition shadow-sm"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Tirar Dúvida no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
