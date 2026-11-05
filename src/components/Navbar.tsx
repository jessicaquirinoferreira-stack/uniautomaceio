import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ShieldCheck, ChevronRight } from 'lucide-react';
import { UniautoLogo } from './UniautoLogo';
import { UNIAUTO_INFO } from '../data/uniautoData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Planos', href: '#planos' },
    { label: 'Conta de Luz -10%', href: '#beneficio-energia' },
    { label: 'Indique & Ganhe (PIX)', href: '#indique-e-ganhe', highlight: true },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Coberturas', href: '#coberturas' },
    { label: 'Benefícios', href: '#beneficios' },
    { label: 'Como Funciona', href: '#como-funciona' },
    { label: 'FAQ', href: '#faq' },
  ];

  const whatsappQuoteUrl = `https://wa.me/${UNIAUTO_INFO.whatsappNumber}?text=${encodeURIComponent(
    UNIAUTO_INFO.defaultWhatsAppMessage
  )}`;

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top emergency & branding ribbon in Deep Brand Blue */}
      <div className="bg-[#003DA5] text-white text-[11px] sm:text-xs py-1.5 px-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 font-bold text-white bg-[#00A859] px-2 py-0.5 rounded-full text-[10px]">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              Central 24h
            </span>
            <span className="hidden sm:inline text-blue-100 font-medium">
              Uniauto Brasil • Filiada à FAN • CNPJ {UNIAUTO_INFO.cnpj}
            </span>
          </div>
          <div className="flex items-center gap-4 text-blue-100 font-medium">
            <a
              href={`https://wa.me/${UNIAUTO_INFO.whatsappNumber}?text=${encodeURIComponent(UNIAUTO_INFO.defaultWhatsAppMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition flex items-center gap-1.5 font-bold"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-300" />
              <span>WhatsApp: {UNIAUTO_INFO.whatsappFormatted}</span>
            </a>
            <span className="hidden md:inline text-blue-200">| Maceió - AL</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar - Light Theme */}
      <nav
        className={`w-full transition-all duration-300 border-b ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-slate-200 shadow-md shadow-slate-200/60 py-3'
            : 'bg-white/90 backdrop-blur-sm border-slate-200/80 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#inicio" className="flex items-center group">
            <UniautoLogo size="md" darkText={true} />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-3 py-1.5 rounded-lg text-xs xl:text-sm font-bold transition-all duration-200 ${
                  link.highlight
                    ? 'text-emerald-700 bg-emerald-50 hover:bg-emerald-100 hover:text-emerald-800 font-black border border-emerald-300 shadow-xs'
                    : 'text-slate-700 hover:text-[#003DA5] hover:bg-blue-50/80'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button Desktop */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={whatsappQuoteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#003DA5] to-[#00A859] hover:from-[#002f80] hover:to-[#008f4c] text-white font-extrabold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-blue-900/15 transition-all duration-200 hover:scale-105 active:scale-95"
            >
              <ShieldCheck className="w-4 h-4 text-white" />
              <span>Faça sua Cotação Grátis</span>
            </a>
          </div>

          {/* Mobile hamburger menu toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={whatsappQuoteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 rounded-xl bg-[#00A859] text-white font-bold text-xs flex items-center gap-1 sm:hidden shadow-sm"
            >
              <span>Cotar</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:text-[#003DA5] focus:outline-none cursor-pointer"
              aria-label="Abrir menu de navegação"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 animate-in slide-in-from-top-4 duration-200 shadow-xl">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between py-2.5 px-3 rounded-xl text-sm font-bold transition ${
                    link.highlight
                      ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                      : 'text-slate-800 hover:bg-blue-50 hover:text-[#003DA5]'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {link.label}
                    {link.highlight && (
                      <span className="px-1.5 py-0.5 rounded bg-[#00A859] text-white text-[10px] font-black">
                        PIX
                      </span>
                    )}
                  </span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}
            </div>

            <div className="mt-5 pt-4 border-t border-slate-200 space-y-3">
              <a
                href={whatsappQuoteUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#003DA5] to-[#00A859] text-white font-black text-center text-sm flex items-center justify-center gap-2 shadow-md shadow-blue-900/20"
              >
                <ShieldCheck className="w-5 h-5" />
                <span>Faça sua Cotação Grátis (WhatsApp)</span>
              </a>

              <a
                href={UNIAUTO_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 px-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 font-bold text-center text-xs flex items-center justify-center gap-2"
              >
                <span className="text-pink-600 font-bold">{UNIAUTO_INFO.instagramHandle}</span> no Instagram
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
