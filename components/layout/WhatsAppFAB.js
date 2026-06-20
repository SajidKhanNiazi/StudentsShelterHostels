'use client';

import { MessageCircle } from 'lucide-react';

export default function WhatsAppFAB() {
  return (
    <a
      href="https://wa.me/923314343676?text=Hi%2C%20I%27m%20interested%20in%20Students%20Shelter%20Hostel.%20Please%20share%20details."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#128C7E] rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all animate-pulse-glow group"
      aria-label="Chat on WhatsApp"
      id="whatsapp-fab"
    >
      <MessageCircle className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
      {/* Tooltip */}
      <span className="absolute right-full mr-3 px-3 py-1.5 bg-gray-900 text-white text-xs font-medium rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Chat on WhatsApp
      </span>
    </a>
  );
}
