/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
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
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. Important Diferenciais Banner */}
        <DiferenciaisBanner />

        {/* 3. Coberturas Section */}
        <CoberturasSection />

        {/* 4. Benefícios Section */}
        <BeneficiosSection />

        {/* 5. Como Funciona Passo a Passo */}
        <ComoFuncionaSection />

        {/* 6. Por Que Escolher a Uniauto */}
        <PorQueUniautoSection />

        {/* 7. Comparativo Uniauto vs Seguradora */}
        <ComparativoSection />

        {/* 8. Depoimentos & Prova Social / Instagram Showcase */}
        <DepoimentosSection />

        {/* 9. FAQ Accordion */}
        <FaqSection />

        {/* 10. CTA Final Forte */}
        <CtaSection />
      </main>

      {/* 11. Footer Completo com CNPJ 46.722.227/0001-41 */}
      <Footer />

      {/* Floating Elements */}
      {/* Fixed on the Right: WhatsApp and Instagram */}
      <FloatingButtons />

      {/* Fixed on the Left: Virtual Assistant Chatbot (Luma) */}
      <ChatAssistantModal />
    </div>
  );
}
