/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PlanosSection } from './components/PlanosSection';
import { BeneficioEnergiaSection } from './components/BeneficioEnergiaSection';
import { IndiqueEGanheSection } from './components/IndiqueEGanheSection';
import { DiferenciaisBanner } from './components/DiferenciaisBanner';
import { CoberturasSection } from './components/CoberturasSection';
import { BeneficiosSection } from './components/BeneficiosSection';
import { ComoFuncionaSection } from './components/ComoFuncionaSection';
import { PorQueUniautoSection } from './components/PorQueUniautoSection';
import { ComparativoSection } from './components/ComparativoSection';
import { DepoimentosSection } from './components/DepoimentosSection';
import { FaqSection } from './components/FaqSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { FloatingButtons } from './components/FloatingButtons';
import { ChatAssistantModal } from './components/ChatAssistantModal';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col relative selection:bg-blue-600 selection:text-white font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Sticky Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section com destaque para Apps, Elétricos, Valores e Simulador */}
        <HeroSection />

        {/* 2. Seção de Planos & Valores (Moto R$ 50 | Carro R$ 100) */}
        <PlanosSection />

        {/* 3. Benefício Exclusivo: Economia a partir de 10% na Fatura de Energia */}
        <BeneficioEnergiaSection />

        {/* 4. Programa Indique e Ganhe: R$ 100 Carro, R$ 50 Moto e SUPER PIX R$ 1.000 (Meta 5 pessoas) */}
        <IndiqueEGanheSection />

        {/* 5. Nossos Diferenciais (App Uber/99, Elétricos, Sem CNH, FAN, Sem SPC) */}
        <DiferenciaisBanner />

        {/* 5. Coberturas Completas 100% FIPE */}
        <CoberturasSection />

        {/* 6. Benefícios & Assistência 24 Horas em todo o Brasil */}
        <BeneficiosSection />

        {/* 7. Como Funciona Passo a Passo */}
        <ComoFuncionaSection />

        {/* 8. Por Que Escolher a Uniauto Brasil • Filiada à FAN */}
        <PorQueUniautoSection />

        {/* 9. Comparativo Uniauto vs Seguradoras Tradicionais */}
        <ComparativoSection />

        {/* 10. Depoimentos Reais de Associados */}
        <DepoimentosSection />

        {/* 11. FAQ Accordion com Dúvidas de App, Elétricos e Energia */}
        <FaqSection />

        {/* 12. CTA Final Forte */}
        <CtaSection />
      </main>

      {/* 13. Footer Completo com CNPJ e Filiação à FAN */}
      <Footer />

      {/* Floating Triggers */}
      <FloatingButtons />
      <ChatAssistantModal />
    </div>
  );
}
