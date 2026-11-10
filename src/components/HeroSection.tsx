import React from 'react';
import { CheckCircle2, ArrowRight, Sparkles, Zap, ShieldCheck } from 'lucide-react';
import { UNIAUTO_INFO } from '../data/uniautoData';
import { QuickQuoteCard } from './QuickQuoteCard';
import { Particles } from './ui/Particles';
import { FlipWords } from './ui/FlipWords';
import { ShimmerButton } from './ui/ShimmerButton';
import { TiltCard } from './ui/TiltCard';

export const HeroSection: React.FC = () => {
  const whatsappQuoteUrl = `https://wa.me/${UNIAUTO_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Olá! Vi o site da Uniauto Brasil e gostaria de me proteger com os planos a partir de R$ 50 (moto) ou R$ 100 (carro).'
  )}`;

  const heroWords = [
    'Roda todo dia',
    'Trabalha na Uber & 99',
    'Tem Carro Elétrico & Híbrido',
    'Tem Moto de Entrega',
    'Exige Guincho 24h Ilimitado',
  ];

  return (
    <section id="inicio" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-6 pb-16 bg-gradient-to-b from-white via-slate-50 to-blue-50/40">
      {/* Magic UI / React Bits Canvas Particle Field */}
      <Particles
        className="absolute inset-0 z-0 pointer-events-none"
        quantity={40}
        color="#003DA5"
        staticity={40}
        ease={55}
      />
      {/* Light automotive subtle background */}
      <div className="absolute inset-0 z-0 select-none opacity-15 pointer-events-none">
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headlines & Persuasive Value Prop */}
          <div className="lg:col-span-7 space-y-5 text-left">
            {/* National Association & FAN Pill */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00A859] animate-pulse" />
                <span className="text-xs font-bold text-slate-800">
                  Uniauto Brasil • Maceió AL
                </span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#003DA5] text-xs font-black shadow-2xs">
                <ShieldCheck className="w-3.5 h-3.5 text-[#003DA5]" />
                <span>Filiada à AAAPV & FAN</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-[#00A859] text-xs font-black shadow-2xs">
                <Zap className="w-3.5 h-3.5 text-[#00A859]" />
                <span>Agora para Elétricos & Apps</span>
              </div>
            </div>

            {/* Price Callout Banner in Hero */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-blue-100/80 via-white to-emerald-100/80 border-2 border-[#003DA5]/20 shadow-xs flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-xl bg-[#003DA5] text-white text-[11px] font-black uppercase tracking-wider">
                  Planos Oficiais
                </span>
                <span className="text-xs sm:text-sm font-extrabold text-slate-800">
                  Moto a partir de <strong className="text-[#00A859] text-base font-black">R$ 50,00</strong> | Carro a partir de <strong className="text-[#003DA5] text-base font-black">R$ 100,00</strong>
                </span>
              </div>
              <a
                href="#planos"
                className="text-xs font-black text-[#003DA5] hover:text-[#002f80] inline-flex items-center gap-1 underline underline-offset-2"
              >
                Ver Planos <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Main Big Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-black text-slate-900 tracking-tight leading-[1.14]">
              Proteção Veicular Completa para quem{' '}
              <br className="hidden sm:inline" />
              <FlipWords words={heroWords} className="text-[#003DA5]" />
            </h1>

            {/* Subtitle with new differentiators */}
            <p className="text-base sm:text-lg text-slate-700 font-semibold leading-relaxed max-w-2xl">
              Especial para motoristas de <strong>Uber, 99 e táxi</strong> + Cobertura inédita para <strong>carros e motos elétricas</strong>. 100% da Tabela FIPE, assistência 24h e sem consulta ao SPC/Serasa!
            </p>

            {/* Energy bill saving hook */}
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs sm:text-sm text-slate-800 font-bold">
              <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                <strong>Bônus Exclusivo:</strong> Associados economizam a partir de <strong>10% direto na conta de energia</strong> todo mês!
              </span>
            </div>

            {/* Indique e Ganhe Highlight Hook */}
            <a
              href="#indique-e-ganhe"
              className="flex items-center justify-between gap-2.5 p-3 rounded-xl bg-amber-50/90 border border-amber-300 text-xs sm:text-sm text-amber-950 font-bold hover:bg-amber-100 transition shadow-2xs group"
            >
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded-md bg-amber-400 text-slate-950 text-[10px] font-black uppercase">
                  Indique & Ganhe
                </span>
                <span>
                  Ganhe <strong>R$ 100 por Carro</strong>, <strong>R$ 50 por Moto</strong> ou <strong>SUPER PIX de R$ 1.000</strong> (5 indicados)!
                </span>
              </div>
              <ArrowRight className="w-4 h-4 text-amber-800 group-hover:translate-x-1 transition-transform shrink-0" />
            </a>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              {/* Button 1: WhatsApp Quero Me Proteger with ShimmerButton */}
              <a
                href={whatsappQuoteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <ShimmerButton
                  shimmerColor="#6EE7B7"
                  background="linear-gradient(135deg, #00A859 0%, #008f4c 100%)"
                  className="w-full sm:w-auto text-white font-black text-base sm:text-lg px-8 py-4 shadow-xl shadow-emerald-600/25 flex items-center justify-center gap-3"
                >
                  <span>Quero Me Proteger Agora</span>
                  <ArrowRight className="w-5 h-5 text-white" />
                </ShimmerButton>
              </a>

              {/* Button 2: Ver Planos e Benefícios */}
              <a
                href="#planos"
                className="py-4 px-6 rounded-2xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-xs hover:shadow transition-all duration-200 cursor-pointer"
              >
                <span>Simular Planos</span>
              </a>
            </div>

            {/* Quick Trust Highlights */}
            <div className="pt-3 grid grid-cols-2 sm:grid-cols-4 gap-2.5 border-t border-slate-200 text-xs text-slate-700 font-bold">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#00A859] shrink-0" />
                <span>100% FIPE</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#00A859] shrink-0" />
                <span>Motoristas de App</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#00A859] shrink-0" />
                <span>Carros Elétricos</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#00A859] shrink-0" />
                <span>Filiada AAAPV & FAN</span>
              </div>
            </div>
          </div>

          {/* Right Column: Quick Quote Card Simulator with 3D Tilt */}
          <div className="lg:col-span-5 relative">
            <TiltCard maxTilt={5}>
              <QuickQuoteCard />
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  );
};
