import React, { useState } from 'react';
import { Car, Bike, Truck, ArrowRight, ShieldCheck, CheckCircle2, Sparkles } from 'lucide-react';
import { UNIAUTO_INFO } from '../data/uniautoData';

interface QuickQuoteCardProps {
  variant?: 'embedded' | 'standalone';
  className?: string;
  onSuccess?: () => void;
}

export const QuickQuoteCard: React.FC<QuickQuoteCardProps> = ({
  variant = 'embedded',
  className = '',
  onSuccess,
}) => {
  const [vehicleType, setVehicleType] = useState<'carro' | 'moto' | 'utilitario' | 'caminhao'>('carro');
  const [fipeRange, setFipeRange] = useState<number>(45000);
  const [modelName, setModelName] = useState('');
  const [year, setYear] = useState('2021');
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [city, setCity] = useState('Maceió - AL');

  // Estimate monthly plan based on FIPE
  const getEstimatedPrice = () => {
    let base = 79.9;
    if (vehicleType === 'moto') {
      base = 49.9 + (fipeRange / 1000) * 1.5;
    } else if (vehicleType === 'carro') {
      base = 79.9 + (fipeRange / 1000) * 1.8;
    } else if (vehicleType === 'utilitario') {
      base = 119.9 + (fipeRange / 1000) * 2.1;
    } else {
      base = 189.9 + (fipeRange / 1000) * 2.4;
    }
    return Math.round(base);
  };

  const handleSendQuote = (e: React.FormEvent) => {
    e.preventDefault();

    const vehicleTypeLabels = {
      carro: 'Carro de Passeio / SUV',
      moto: 'Motocicleta',
      utilitario: 'Caminhonete / Utilitário',
      caminhao: 'Caminhão / Pesado',
    };

    const formattedFipe = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 0,
    }).format(fipeRange);

    const message = `Olá! Vi o simulador no site da *Uniauto Maceió* e gostaria de receber uma cotação oficial sem compromisso!

📋 *Dados para Cotação:*
👤 *Nome:* ${userName ? userName : 'Não informado'}
📱 *WhatsApp:* ${userPhone ? userPhone : 'Mesmo deste número'}
📍 *Cidade:* ${city}
🚗 *Tipo de Veículo:* ${vehicleTypeLabels[vehicleType]}
🚘 *Modelo/Versão:* ${modelName ? modelName : 'A consultar'}
📅 *Ano:* ${year}
💰 *FIPE Estimada:* ${formattedFipe}
⭐ *Plano Simulado:* a partir de aprox. R$ ${getEstimatedPrice()},00/mês

Aguardo o retorno do consultor da Uniauto! Obrigado.`;

    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${UNIAUTO_INFO.whatsappNumber}?text=${encoded}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    if (onSuccess) onSuccess();
  };

  return (
    <div
      className={`relative rounded-3xl p-6 sm:p-8 bg-white border border-slate-200/90 shadow-xl shadow-blue-900/10 ${className}`}
    >
      {/* Decorative top pill */}
      <div className="flex items-center justify-between gap-2 mb-5">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#00A859] animate-ping" />
          <span className="text-xs font-bold tracking-wider text-[#00A859] uppercase">
            Simulador Online Rápido
          </span>
        </div>
        <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-blue-50 text-[#003DA5] border border-blue-200 flex items-center gap-1">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Cotação em 2 min
        </span>
      </div>

      <div className="mb-6">
        <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
          Simule a Proteção do Seu Veículo
        </h3>
        <p className="text-sm text-slate-600 mt-1">
          Sem consulta ao SPC/Serasa e 100% Tabela FIPE para Maceió e região.
        </p>
      </div>

      <form onSubmit={handleSendQuote} className="space-y-4">
        {/* Step 1: Vehicle Type Selector */}
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
            1. Selecione o Veículo
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { id: 'carro', label: 'Carro / SUV', icon: Car },
              { id: 'moto', label: 'Moto', icon: Bike },
              { id: 'utilitario', label: 'Pick-up / Van', icon: Truck },
              { id: 'caminhao', label: 'Caminhão', icon: Truck },
            ].map((item) => {
              const Icon = item.icon;
              const isSelected = vehicleType === item.id;
              return (
                <button
                  type="button"
                  key={item.id}
                  onClick={() => setVehicleType(item.id as any)}
                  className={`flex flex-col items-center justify-center p-3 rounded-xl border text-xs font-bold transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-[#003DA5] border-[#003DA5] text-white shadow-md shadow-blue-900/20'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  <Icon className={`w-5 h-5 mb-1.5 ${isSelected ? 'text-white' : 'text-slate-500'}`} />
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 2: FIPE Range Slider */}
        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-bold text-slate-700">Valor aproximado (FIPE):</span>
            <span className="text-base sm:text-lg font-black text-[#003DA5]">
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                maximumFractionDigits: 0,
              }).format(fipeRange)}
            </span>
          </div>
          <input
            type="range"
            min={15000}
            max={250000}
            step={5000}
            value={fipeRange}
            onChange={(e) => setFipeRange(Number(e.target.value))}
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#003DA5]"
          />
          <div className="flex justify-between text-[11px] text-slate-500 font-semibold mt-1">
            <span>R$ 15 mil</span>
            <span>R$ 100 mil</span>
            <span>R$ 250 mil+</span>
          </div>
        </div>

        {/* Step 3: Vehicle details inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Modelo / Fabricante</label>
            <input
              type="text"
              required
              placeholder="Ex: Onix, Corolla, CB 500, Hilux"
              value={modelName}
              onChange={(e) => setModelName(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#003DA5] focus:bg-white"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Ano de Fabricação</label>
            <select
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#003DA5] focus:bg-white"
            >
              {[2026, 2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2012, 2010, 2008, 2005].map(
                (yr) => (
                  <option key={yr} value={yr}>
                    Ano {yr}
                  </option>
                )
              )}
            </select>
          </div>
        </div>

        {/* Step 4: Lead info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Seu Nome</label>
            <input
              type="text"
              required
              placeholder="Seu nome completo"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#003DA5] focus:bg-white"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">WhatsApp (DDD + Número)</label>
            <input
              type="tel"
              required
              placeholder="(82) 99999-9999"
              value={userPhone}
              onChange={(e) => setUserPhone(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#003DA5] focus:bg-white"
            />
          </div>
        </div>

        {/* Value estimation callout */}
        <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-50 to-emerald-50 border border-blue-200 flex items-center justify-between">
          <div>
            <span className="text-[11px] text-slate-600 font-bold block">Mensalidade Estimada a partir de:</span>
            <div className="flex items-baseline gap-1">
              <span className="text-xs font-bold text-[#00A859]">R$</span>
              <span className="text-2xl sm:text-3xl font-black text-slate-900">
                {getEstimatedPrice()}
              </span>
              <span className="text-xs text-slate-600 font-medium">/mês</span>
            </div>
          </div>
          <div className="text-right text-[11px] text-slate-700 space-y-0.5">
            <span className="flex items-center gap-1 justify-end text-[#00A859] font-black">
              <CheckCircle2 className="w-3.5 h-3.5" /> 100% FIPE
            </span>
            <span className="text-slate-600 font-semibold">Guincho Ilimitado</span>
          </div>
        </div>

        {/* Submit Button in Vibrant Green #00A859 */}
        <button
          type="submit"
          className="w-full py-4 px-6 rounded-2xl bg-[#00A859] hover:bg-[#008f4c] text-white font-black text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-lg shadow-emerald-600/25 hover:shadow-emerald-600/35 transition-all duration-200 hover:scale-[1.02] cursor-pointer"
        >
          <span>QUERO RECEBER COTAÇÃO NO WHATSAPP</span>
          <ArrowRight className="w-5 h-5" />
        </button>

        <p className="text-center text-[11px] text-slate-500 font-medium flex items-center justify-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-[#003DA5]" />
          Seus dados estão protegidos. Cotação oficial rápida e sem compromisso.
        </p>
      </form>
    </div>
  );
};
