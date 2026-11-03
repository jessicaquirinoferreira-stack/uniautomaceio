import React from 'react';
import { FileCheck, FileText, MapPin, Clock, ShieldCheck, Sparkles } from 'lucide-react';
import { DIFERENCIAIS } from '../data/uniautoData';

export const DiferenciaisBanner: React.FC = () => {
  return (
    <section id="diferenciais" className="py-16 relative overflow-hidden bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner with Logo Gradient Ring */}
        <div className="relative rounded-3xl p-1 uniauto-gradient shadow-xl shadow-blue-900/10">
          <div className="rounded-[22px] bg-white p-8 sm:p-12 relative overflow-hidden">
            {/* Banner Header */}
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-blue-50 text-[#003DA5] border border-blue-200 mb-3">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                Facilidade e Acesso Total
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                Diferenciais Que Quebram Qualquer Burocracia
              </h2>
              <p className="text-slate-600 text-sm mt-2">
                Na Uniauto Maceió, proteger o seu veículo é simples, rápido e sem travas burocráticas.
              </p>
            </div>

            {/* 4 Diferenciais Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {DIFERENCIAIS.map((item, idx) => {
                return (
                  <div
                    key={idx}
                    className="relative rounded-2xl p-6 bg-slate-50 border border-slate-200 hover:border-[#003DA5]/40 transition-all duration-200 hover:-translate-y-1 group shadow-xs hover:shadow-md"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#003DA5] to-[#00A859] flex items-center justify-center text-white mb-4 shadow-md shadow-blue-900/15 group-hover:scale-105 transition-transform">
                      {idx === 0 && <FileCheck className="w-6 h-6 text-white" />}
                      {idx === 1 && <FileText className="w-6 h-6 text-white" />}
                      {idx === 2 && <MapPin className="w-6 h-6 text-white" />}
                      {idx === 3 && <Clock className="w-6 h-6 text-white" />}
                    </div>

                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-5 h-5 rounded-full bg-[#00A859]/20 text-[#00A859] flex items-center justify-center text-xs font-black shrink-0">
                        ✓
                      </span>
                      <h3 className="text-base font-extrabold text-slate-900 leading-snug">
                        {item.title}
                      </h3>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Bottom reminder text */}
            <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-700">
              <div className="flex items-center gap-2 text-center sm:text-left">
                <ShieldCheck className="w-5 h-5 text-[#00A859] shrink-0" />
                <span>
                  Proteção patrimonial amparada pela <strong>Constituição Federal</strong> e regulamento associativo oficial.
                </span>
              </div>
              <span className="text-[#003DA5] font-extrabold whitespace-nowrap bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                Adesão 100% Digital • Aprovação no mesmo dia
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
