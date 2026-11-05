import React, { useState } from 'react';
import { Car, Bike, Truck, ArrowRight, ShieldCheck, CheckCircle2, Sparkles, Zap } from 'lucide-react';
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
  const [isElectric, setIsElectric] = useState<boolean>(false);
  const [isAppDriver, setIsAppDriver] = useState<boolean>(false);
  const [fipeRange, setFipeRange] = useState<number>(45000);
  const [modelName, setModelName] = useState('');
  const [year, setYear] = useState('2022');
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [city, setCity] = useState('Maceió - AL');

  // Estimate monthly plan based on FIPE - Starts from R$ 50 for moto and R$ 100 for car!
  const getEstimatedPrice = () => {
    let base = 100;
    if (vehicleType === 'moto') {
      base = 50 + (fipeRange / 1000) * 0.8;
    } else if (vehicleType === 'carro') {
      base = 100 + (fipeRange / 1000) * 1.1;
    } else if (vehicleType === 'utilitario') {
      base = 150 + (fipeRange / 1000) * 1.5;
    } else {
      base = 220 + (fipeRange / 1000) * 1.8;
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

    const message = `Olá! Vi o simulador no site da *Uniauto Brasil* e gostaria de receber uma cotação oficial sem compromisso!

📋 *Dados para Cotação:*
👤 *Nome:* ${userName ? userName : 'Não informado'}
📱 *WhatsApp:* ${userPhone ? userPhone : 'Mesmo deste número'}
📍 *Cidade:* ${city}
🚗 *Tipo de Veículo:* ${vehicleTypeLabels[vehicleType]}
⚡ *Veículo Elétrico/Híbrido:* ${isElectric ? 'SIM' : 'Não'}
🚕 *Motorista de Aplicativo (Uber/99):* ${isAppDriver ? 'SIM' : 'Não'}
🚘 *Modelo/Versão:* ${modelName ? modelName : 'A consultar'}
📅 *Ano:* ${year}
💰 *FIPE Estimada:* ${formattedFipe}
⭐ *Plano Estimado:* a partir de R$ ${getEstimatedPrice()},00/mês
💡 *Interesse no benefício de -10% na conta de luz:* SIM!

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
      <div className="flex items-center justify-between gap-2 mb-4">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#00A859] animate-ping" />
          <span className="text-xs font-bold tracking-wider text-[#00A859] uppercase">
            Simulador Rápido Oficial
          </span>
        </div>
        <span className="px-2.5 py-1 rounded-full text-[11px] font-black bg-blue-50 text-[#003DA5] border border-blue-200 flex items-center gap-1">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Cotação em 2 min
        </span>
      </div>

      <div className="mb-5">
        <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
          Simule a Proteção do Seu Veículo
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-1 font-medium">
          Moto a partir de <strong>R$ 50</strong> e Carro a partir de <strong>R$ 100</strong>. 100% da FIPE e sem SPC/Serasa!
        </p>
      </div>

      <form onSubmit={handleSendQuote} className="space-y-4">
        {/* Step 1: Vehicle Type Selector */}
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
            1. Selecione o Tipo de Veículo
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { id: 'moto', label: 'Moto (R$ 50)', icon: Bike },
              { id: 'carro', label: 'Carro (R$ 100)', icon: Car },
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
                      ? 'bg-[#003DA5] border-[#003DA5] text-white shadow-md shadow-blue-900/20 ring-2 ring-blue-300'
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

        {/* Quick Toggles: App Driver (Uber/99) & Electric Vehicle */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
          <label className={`flex items-center gap-2 p-2.5 rounded-xl border text-xs font-bold cursor-pointer transition ${
            isAppDriver ? 'bg-blue-50 border-[#003DA5] text-[#003DA5]' : 'bg-slate-50 border-slate-200 text-slate-600'
          }`}>
            <input
              type="checkbox"
              checked={isAppDriver}
              onChange={(e) => setIsAppDriver(e.target.checked)}
              className="rounded text-[#003DA5] focus:ring-blue-500 w-4 h-4"
            />
            <span>🚗 Trabalho com App (Uber / 99)</span>
          </label>

          <label className={`flex items-center gap-2 p-2.5 rounded-xl border text-xs font-bold cursor-pointer transition ${
            isElectric ? 'bg-emerald-50 border-[#00A859] text-[#00A859]' : 'bg-slate-50 border-slate-200 text-slate-600'
          }`}>
            <input
              type="checkbox"
              checked={isElectric}
              onChange={(e) => setIsElectric(e.target.checked)}
              className="rounded text-[#00A859] focus:ring-emerald-500 w-4 h-4"
            />
            <span>⚡ Carro ou Moto Elétrica / Híbrida</span>
          </label>
        </div>

        {/* Step 2: FIPE Range Slider */}
        <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200">
          <div className="flex justify-between items-center mb-1.5">
            <span className="text-xs font-bold text-slate-700">Valor FIPE aproximado:</span>
            <span className="text-base font-black text-[#003DA5]">
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                maximumFractionDigits: 0,
              }).format(fipeRange)}
            </span>
          </div>
          <input
            type="range"
            min={10000}
            max={250000}
            step={5000}
            value={fipeRange}
            onChange={(e) => setFipeRange(Number(e.target.value))}
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#003DA5]"
          />
          <div className="flex justify-between text-[10px] text-slate-500 font-semibold mt-1">
            <span>R$ 10 mil</span>
            <span>R$ 100 mil</span>
            <span>R$ 250 mil+</span>
          </div>
        </div>

        {/* Step 3: Vehicle details inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Modelo / Versão</label>
            <input
              type="text"
              required
              placeholder="Ex: Onix, BYD Dolphin, CG 160"
              value={modelName}
              onChange={(e) => setModelName(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:border-[#003DA5] focus:bg-white"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Ano de Fabricação</label>
            <select
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-[#003DA5] focus:bg-white font-medium"
            >
              {[2026, 2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2012, 2010, 2008].map(
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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Seu Nome</label>
            <input
              type="text"
              required
              placeholder="Seu nome"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:border-[#003DA5] focus:bg-white"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">WhatsApp</label>
            <input
              type="tel"
              required
              placeholder="(82) 99644-5705"
              value={userPhone}
              onChange={(e) => setUserPhone(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:border-[#003DA5] focus:bg-white"
            />
          </div>
        </div>

        {/* Value estimation callout */}
        <div className="p-3.5 rounded-2xl bg-gradient-to-r from-blue-50 via-white to-emerald-50 border border-emerald-200 flex items-center justify-between">
          <div>
            <span className="text-[10px] text-slate-500 font-bold block">Mensalidade Estimada:</span>
            <div className="flex items-baseline gap-1">
              <span className="text-xs font-bold text-[#00A859]">R$</span>
              <span className="text-2xl sm:text-3xl font-black text-slate-900">
                {getEstimatedPrice()}
              </span>
              <span className="text-xs text-slate-600 font-medium">,00/mês</span>
            </div>
          </div>
          <div className="text-right text-[11px] text-slate-700 space-y-0.5 font-bold">
            <span className="flex items-center gap-1 justify-end text-[#00A859]">
              <CheckCircle2 className="w-3.5 h-3.5" /> 100% FIPE
            </span>
            <span className="text-sky-700 block text-[10px]">+10% off conta de luz</span>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3.5 px-6 rounded-2xl bg-[#00A859] hover:bg-[#008f4c] text-white font-black text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/25 transition-all duration-200 hover:scale-[1.01] cursor-pointer"
        >
          <span>QUERO RECEBER COTAÇÃO NO WHATSAPP</span>
          <ArrowRight className="w-4 h-4" />
        </button>

        <p className="text-center text-[10px] text-slate-500 font-medium flex items-center justify-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5 text-[#003DA5]" />
          Filiada à FAN • Sem burocracia • Sem consulta ao SPC
        </p>
      </form>
    </div>
  );
};
