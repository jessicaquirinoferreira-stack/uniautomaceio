import React from 'react';
import { CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { UNIAUTO_INFO } from '../data/uniautoData';
import { QuickQuoteCard } from './QuickQuoteCard';

export const HeroSection: React.FC = () => {
  const whatsappQuoteUrl = `https://wa.me/${UNIAUTO_INFO.whatsappNumber}?text=${encodeURIComponent(
    UNIAUTO_INFO.defaultWhatsAppMessage
  )}`;

  return (
    <section id="inicio" className="relative min-h-[88vh] flex items-center justify-center overflow-hidden pt-8 pb-16 bg-gradient-to-b from-white via-slate-50 to-blue-50/40">
      {/* Light automotive subtle background & geometric grid */}
      <div className="absolute inset-0 z-0 select-none opacity-20 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=2000&q=80"
          alt="Carro Premium Protegido Uniauto"
          className="w-full h-full object-cover object-center filter grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent" />
      </div>
      <div className="absolute inset-0 bg-grid-pattern-light opacity-60 pointer-events-none" />

      {/* Radiant Glowing Ambient Lights in brand colors */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-400/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-400/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headlines & Persuasive Value Prop */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* National Association Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00A859] animate-pulse" />
              <span className="text-xs sm:text-sm font-bold text-slate-800">
                Uniauto Maceió Alagoas <span className="text-slate-400">•</span>{' '}
                <span className="text-[#003DA5] font-extrabold">Uniauto Brasil</span>
              </span>
            </div>

            {/* Impact Phrase Badge */}
            <div className="block">
              <span className="inline-block px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-blue-50 to-emerald-50 border border-blue-200 text-[#003DA5] font-black text-xs sm:text-sm tracking-wide uppercase shadow-xs">
                “Não conte com a sorte, conte com a Uniauto”
              </span>
            </div>

            {/* Main Big Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
              Proteção Veicular Completa em{' '}
              <span className="uniauto-text">Maceió</span> e todo o Brasil
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-700 font-bold leading-relaxed max-w-2xl">
              <span className="text-[#003DA5]">100% da Tabela FIPE</span> |{' '}
              <span className="text-[#00A859]">Assistência 24h Nacional</span> |{' '}
              <span className="text-slate-800">Sem Burocracia</span>
            </p>

            <p className="text-sm sm:text-base text-slate-600 max-w-xl leading-relaxed">
              Proteja seu carro, moto, van ou caminhão contra roubo, furto, colisão e fenômenos naturais sem consulta ao SPC/Serasa e sem análise de perfil.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              {/* Button 1: WhatsApp Quero Cotar Agora */}
              <a
                href={whatsappQuoteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-4 px-8 rounded-2xl bg-[#00A859] hover:bg-[#008f4c] text-white font-black text-base sm:text-lg flex items-center justify-center gap-3 shadow-xl shadow-emerald-600/25 hover:scale-[1.02] active:scale-95 transition-all duration-200 cursor-pointer"
              >
                <span>Quero Cotar Agora</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              {/* Button 2: Instagram */}
              <a
                href={UNIAUTO_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-4 px-7 rounded-2xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-sm hover:shadow transition-all duration-200 cursor-pointer group"
              >
                <span className="w-5 h-5 rounded-full flex items-center justify-center bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 group-hover:scale-110 transition">
                  <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  </svg>
                </span>
                <span>Falar no Instagram</span>
              </a>
            </div>

            {/* Quick Trust Highlights */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 border-t border-slate-200 max-w-xl">
              <div className="flex items-center gap-2 text-xs text-slate-700 font-bold">
                <CheckCircle2 className="w-4 h-4 text-[#00A859] shrink-0" />
                <span>100% Tabela FIPE</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-700 font-bold">
                <CheckCircle2 className="w-4 h-4 text-[#00A859] shrink-0" />
                <span>Guincho Ilimitado</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-700 font-bold">
                <CheckCircle2 className="w-4 h-4 text-[#00A859] shrink-0" />
                <span>Sem consulta SPC/Serasa</span>
              </div>
            </div>
          </div>

          {/* Right Column: Quick Quote Card Simulator */}
          <div className="lg:col-span-5 relative">
            <QuickQuoteCard />
          </div>
        </div>
      </div>
    </section>
  );
};
