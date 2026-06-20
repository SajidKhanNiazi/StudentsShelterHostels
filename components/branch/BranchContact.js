'use client';

import { Phone, MessageCircle, FileText } from 'lucide-react';
import Link from 'next/link';

export default function BranchContact({ hostel }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] px-4 py-3">
      <div className="flex items-center gap-2 max-w-lg mx-auto">
        {hostel.phone ? (
          <a
            href={`tel:${hostel.phone.replace(/[^0-9]/g, '')}`}
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-3 bg-gray-100 text-gray-800 rounded-xl text-sm font-semibold transition-all min-h-[48px]"
          >
            <Phone className="w-4 h-4" />
            Call
          </a>
        ) : (
          <a
            href={hostel.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-3 bg-gray-100 text-gray-800 rounded-xl text-sm font-semibold transition-all min-h-[48px]"
          >
            <Phone className="w-4 h-4" />
            Call
          </a>
        )}

        <a
          href={`https://wa.me/${hostel.whatsapp || '923314343676'}?text=${encodeURIComponent(`Hi, I'm interested in ${hostel.name} (${hostel.branch || hostel.area}).`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-3 bg-[#25D366] text-white rounded-xl text-sm font-semibold transition-all min-h-[48px]"
        >
          <MessageCircle className="w-4 h-4" />
          WhatsApp
        </a>

        <Link
          href="/apply"
          className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl text-sm font-semibold transition-all min-h-[48px]"
        >
          <FileText className="w-4 h-4" />
          Apply
        </Link>
      </div>
    </div>
  );
}
