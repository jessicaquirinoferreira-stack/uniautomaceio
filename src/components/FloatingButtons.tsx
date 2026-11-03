import React from 'react';
import { UNIAUTO_INFO } from '../data/uniautoData';

export const FloatingButtons: React.FC = () => {
  const whatsappUrl = `https://wa.me/${UNIAUTO_INFO.whatsappNumber}?text=${encodeURIComponent(
    UNIAUTO_INFO.defaultWhatsAppMessage
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3.5 select-none">
      {/* Official Instagram Floating Button */}
      <div className="relative group flex items-center">
        {/* Tooltip on left */}
        <span className="hidden md:block absolute right-full mr-3 px-3 py-1.5 rounded-xl bg-slate-900/90 text-white text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none border border-slate-700 shadow-xl">
          Siga no Instagram <strong className="text-pink-400">@uniautomaceio</strong>
        </span>

        <a
          href={UNIAUTO_INFO.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-13 h-13 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer relative overflow-hidden"
          style={{
            background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
          }}
          aria-label="Instagram oficial da Uniauto Maceió"
        >
          {/* Official Instagram Camera SVG */}
          <svg
            className="w-7 h-7 sm:w-8 sm:h-8 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </a>
      </div>

      {/* Official WhatsApp Floating Button */}
      <div className="relative group flex items-center">
        {/* Tooltip on left */}
        <span className="hidden md:block absolute right-full mr-3 px-3 py-1.5 rounded-xl bg-slate-900/90 text-white text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none border border-slate-700 shadow-xl">
          Fazer Cotação no <strong className="text-emerald-400">WhatsApp</strong>
        </span>

        {/* Pulse ring animation */}
        <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-40 pointer-events-none" />

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#20ba5a] flex items-center justify-center shadow-2xl shadow-green-600/50 transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer text-white"
          aria-label="Fazer cotação no WhatsApp"
        >
          {/* Official WhatsApp SVG */}
          <svg
            className="w-8 h-8 sm:w-9 sm:h-9 fill-current drop-shadow-[0_2px_4px_rgba(0,0,0,0.25)]"
            viewBox="0 0 24 24"
          >
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm0 18.09c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.106 8.106 0 0 1-1.24-4.32c0-4.51 3.67-8.18 8.18-8.18 2.18 0 4.24.85 5.78 2.39 1.55 1.55 2.4 3.6 2.4 5.79 0 4.51-3.67 8.17-8.13 8.17zm4.47-6.13c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.53.06-.25-.13-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.12-.22-.19-.46-.31z" />
          </svg>
        </a>
      </div>
    </div>
  );
};
