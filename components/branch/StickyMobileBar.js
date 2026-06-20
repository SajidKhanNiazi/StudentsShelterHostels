'use client';

import { Phone, MessageCircle, FileText } from 'lucide-react';
import Link from 'next/link';

export default function StickyMobileBar({ hostel }) {
  const cleanPhone = (hostel.phone || "0331-4343676").replace(/[^0-9]/g, '');
  const isBoys = hostel.type === 'boys';

  const message = `Hi, I'm interested in ${hostel.name} (${hostel.branchLabel || hostel.area}). Please share availability.`;
  const whatsappUrl = hostel.whatsapp
    ? `https://wa.me/${hostel.whatsapp}?text=${encodeURIComponent(message)}`
    : `https://wa.me/923314343676?text=${encodeURIComponent(message)}`;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 px-4 py-3 shadow-[0_-8px_24px_rgba(0,0,0,0.06)] flex items-center gap-2">
      {/* Call Button */}
      <a
        href={`tel:${cleanPhone}`}
        className="flex-1 flex flex-col items-center justify-center gap-0.5 border border-gray-200 bg-gray-50 rounded-xl py-2 text-[var(--color-text-primary)] font-bold transition-all min-h-[48px]"
        aria-label="Call Branch Manager"
      >
        <Phone className="w-4 h-4 text-blue-600 shrink-0" />
        <span className="text-[10px]">Call</span>
      </a>

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex flex-col items-center justify-center gap-0.5 border border-green-200 bg-green-50 rounded-xl py-2 text-green-700 font-bold transition-all min-h-[48px]"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-4 h-4 text-green-600 shrink-0" />
        <span className="text-[10px]">WhatsApp</span>
      </a>

    </div>
  );
}
