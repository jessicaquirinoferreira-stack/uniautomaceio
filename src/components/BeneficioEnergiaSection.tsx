import React, { useState } from 'react';
import { Zap, ArrowRight, CheckCircle2, ShieldCheck, Sparkles, DollarSign, Maximize2, X } from 'lucide-react';
import { UNIAUTO_INFO } from '../data/uniautoData';

export const BeneficioEnergiaSection: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const whatsappEnergyUrl = `https://wa.me/${UNIAUTO_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Olá! Vi no site o benefício exclusivo da Uniauto Brasil de economia a partir de 10% na conta de energia e gostaria de saber como ativar para minha residência/empresa.'
  )}`;

  return (
    <section id="beneficio-energia" className="py-24 relative overflow-hidden bg-gradient-to-b from-white via-emerald-50/40 to-slate-50 border-t border-slate-200">
      {/* Decorative ambient lighting */}
      <div className="absolute top-10 right-0 w-[500px] h-[500px] bg-emerald-300/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[450px] h-[450px] bg-blue-300/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-300 text-[#00A859] text-xs font-black uppercase tracking-wider mb-4 shadow-2xs">
            <Sparkles className="w-4 h-4 text-emerald-600 animate-pulse" />
            Novidade Exclusiva para Associados Uniauto Brasil
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Economia a Partir de <span className="text-[#00A859]">10% Direto</span> na Sua Fatura de Energia!
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4 font-medium leading-relaxed">
            Além de proteger seu carro ou moto com o melhor custo-benefício, agora você reduz a conta de luz da sua casa ou empresa sem gastar nada com obras.
          </p>
        </div>

        {/* Highlight Card with Prominent Image & Value Prop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Prominent Image Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl p-1 uniauto-gradient shadow-2xl shadow-emerald-900/10 group">
              <div className="relative rounded-[22px] overflow-hidden bg-white">
                <img
                  src={UNIAUTO_INFO.energyBenefitImageUrl}
                  alt="Benefício Exclusivo Uniauto Brasil - Economia na Conta de Energia"
                  className="w-full h-auto max-h-[540px] object-contain mx-auto transition-transform duration-300 group-hover:scale-[1.02] cursor-pointer"
                  onClick={() => setModalOpen(true)}
                  loading="eager"
                />

                {/* Floating Badge on Image */}
                <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-[#00A859] text-white text-xs font-black shadow-lg flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 fill-current" />
                  <span>Benefício 100% Real</span>
                </div>

                {/* Zoom prompt */}
                <button
                  type="button"
                  onClick={() => setModalOpen(true)}
                  className="absolute bottom-4 right-4 p-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-900 text-white backdrop-blur-xs transition shadow-md flex items-center gap-1.5 text-xs font-bold cursor-pointer"
                  aria-label="Ampliar imagem do benefício"
                >
                  <Maximize2 className="w-4 h-4" />
                  <span className="hidden sm:inline">Ampliar</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Persuasive Value Breakdown */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-50 border border-blue-200 text-[#003DA5] text-xs font-black uppercase tracking-wider">
              <DollarSign className="w-4 h-4 text-[#003DA5]" />
              Mais Dinheiro no Seu Bolso Todo Mês
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-snug">
              Como funciona o desconto na conta de energia para associados?
            </h3>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
              A Uniauto Brasil firmou uma parceria estratégica em energia limpa para beneficiar diretamente o bolso dos nossos associados. É simples, legalizado e sem nenhuma pegadinha.
            </p>

            {/* Benefit Checkpoints */}
            <div className="space-y-3.5 pt-1">
              {[
                {
                  title: "Desconto direto no boleto da concessionária",
                  desc: "A economia vem discriminada todo mês na sua fatura oficial de luz.",
                },
                {
                  title: "Zero obras e sem placas solares no telhado",
                  desc: "Você não precisa gastar um único centavo com instalação ou compra de equipamentos.",
                },
                {
                  title: "Válido para residências e empresas",
                  desc: "Seja para a sua casa ou para o seu comércio, o desconto é aplicado diretamente.",
                },
                {
                  title: "A economia pode pagar a sua proteção veicular!",
                  desc: "Dependendo do seu consumo, o valor economizado na luz cobre a mensalidade do seu veículo.",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:border-[#00A859]/50 transition">
                  <div className="w-8 h-8 rounded-xl bg-emerald-50 text-[#00A859] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-slate-900">{item.title}</h4>
                    <p className="text-xs text-slate-600 mt-0.5 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href={whatsappEnergyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-4 px-7 rounded-2xl bg-[#00A859] hover:bg-[#008f4c] text-white font-black text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-xl shadow-emerald-600/25 transition hover:scale-[1.02] active:scale-95 cursor-pointer text-center"
              >
                <span>QUERO MEU DESCONTO NA ENERGIA</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <div className="flex items-center gap-2 text-xs text-slate-500 font-semibold justify-center sm:justify-start">
                <ShieldCheck className="w-4 h-4 text-[#003DA5]" />
                <span>Exclusivo para associados Uniauto Brasil</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Image Preview Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] bg-white rounded-3xl p-3 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 p-2.5 rounded-full bg-slate-900 text-white hover:bg-slate-800 transition z-10 cursor-pointer shadow-lg"
              aria-label="Fechar visualização"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={UNIAUTO_INFO.energyBenefitImageUrl}
              alt="Benefício Exclusivo Uniauto Brasil"
              className="w-full h-auto max-h-[85vh] object-contain rounded-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
};
