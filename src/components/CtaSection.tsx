import React from 'react';
import { ArrowRight, ShieldCheck, Sparkles, Instagram } from 'lucide-react';
import { UNIAUTO_INFO } from '../data/uniautoData';
import { UniautoLogo } from './UniautoLogo';
import { ShimmerButton } from './ui/ShimmerButton';
import { BorderBeam } from './ui/BorderBeam';

export const CtaSection: React.FC = () => {
  const whatsappQuoteUrl = `https://wa.me/${UNIAUTO_INFO.whatsappNumber}?text=${encodeURIComponent(
    UNIAUTO_INFO.defaultWhatsAppMessage
  )}`;

  return (
    <section className="py-24 relative overflow-hidden bg-slate-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-[36px] p-1 uniauto-gradient shadow-2xl shadow-blue-900/15 overflow-hidden">
          <BorderBeam colorFrom="#00A859" colorTo="#003DA5" size={320} duration={8} />
          <div className="rounded-[32px] bg-white p-8 sm:p-14 lg:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern-light opacity-50 pointer-events-none" />

            {/* Emblem on top */}
            <div className="flex justify-center mb-6">
              <UniautoLogo size="xl" variant="vertical" showText={false} />
            </div>

            {/* Slogan Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#003DA5] text-xs sm:text-sm font-black uppercase tracking-wider mb-6">
              <Sparkles className="w-4 h-4 text-amber-500" />
              “Não conte com a sorte, conte com a Uniauto”
            </div>

            {/* Big Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight max-w-3xl mx-auto leading-tight">
              Proteja seu Veículo Agora e{' '}
              <span className="uniauto-text">Dirija com Tranquilidade</span>
            </h2>

            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto mt-5 leading-relaxed font-medium">
              Junte-se a milhares de associados que rodam seguros por Maceió, Alagoas e todo o Brasil. Sem consulta ao SPC/Serasa e com 100% da FIPE na mão.
            </p>

            {/* Two Big CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
              {/* WhatsApp Big Button with ShimmerButton */}
              <a
                href={whatsappQuoteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-block"
              >
                <ShimmerButton
                  shimmerColor="#6EE7B7"
                  background="linear-gradient(135deg, #00A859 0%, #008f4c 100%)"
                  className="w-full sm:w-auto text-white font-black text-base sm:text-lg px-8 py-4 shadow-xl shadow-emerald-600/30 flex items-center justify-center gap-3"
                >
                  <span>Fazer Cotação no WhatsApp ({UNIAUTO_INFO.whatsappFormatted})</span>
                  <ArrowRight className="w-5 h-5 text-white" />
                </ShimmerButton>
              </a>

              {/* Instagram Big Button */}
              <a
                href={UNIAUTO_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto py-4 px-8 rounded-2xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-bold text-base flex items-center justify-center gap-2.5 transition hover:scale-105 active:scale-95 cursor-pointer shadow-sm"
              >
                <span className="w-5 h-5 rounded-full flex items-center justify-center bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600">
                  <Instagram className="w-3.5 h-3.5 text-white" />
                </span>
                <span>Instagram {UNIAUTO_INFO.instagramHandle}</span>
              </a>
            </div>

            {/* Trust highlights footer */}
            <div className="mt-10 pt-8 border-t border-slate-100 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-600 font-bold">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#00A859]" /> Vistoria 100% Online
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#00A859]" /> Sem carência para roubo e furto
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#00A859]" /> Atendimento 24h em todo o Brasil
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
