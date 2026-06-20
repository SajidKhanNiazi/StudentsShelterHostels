import Link from 'next/link';
import GenderBadge from '@/components/ui/GenderBadge';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import { MapPin, Train, ArrowRight, ShieldCheck, ExternalLink } from 'lucide-react';

export default function LocationCard({ hostel }) {
  const isBoys = hostel.type === 'boys';
  const detailUrl = `/locations/${hostel.type}/${hostel.slug}`;

  return (
    <div
      className={`bg-white rounded-2xl border-2 overflow-hidden card-hover ${
        isBoys ? 'border-blue-100 hover:border-blue-300' : 'border-purple-100 hover:border-purple-300'
      }`}
    >
      {/* Color bar */}
      <div className={`h-1.5 ${isBoys ? 'bg-gradient-to-r from-blue-500 to-blue-600' : 'bg-gradient-to-r from-purple-500 to-purple-600'}`} />

      <div className="p-5 md:p-6">
        <div className="flex items-start justify-between gap-3 mb-3">
          <GenderBadge type={hostel.type} size="xs" />
          {hostel.isGirlsOnly && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-purple-100 text-purple-700 text-[10px] font-semibold rounded-full">
              <ShieldCheck className="w-3 h-3" />
              Girls Only
            </span>
          )}
        </div>

        <h3 className="text-lg font-bold text-gray-900 mb-0.5">{hostel.name}</h3>
        {hostel.branch && (
          <p className={`text-sm font-semibold mb-3 ${isBoys ? 'text-blue-600' : 'text-purple-600'}`}>
            {hostel.branch}
          </p>
        )}

        <div className="space-y-2 mb-4">
          <div className="flex items-start gap-2 text-sm text-gray-600">
            <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-gray-400" />
            <span>{hostel.address}</span>
          </div>
          {hostel.landmark && (
            <div className="flex items-start gap-2 text-sm text-gray-600">
              <Train className="w-4 h-4 mt-0.5 shrink-0 text-gray-400" />
              <span>{hostel.landmark}</span>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <a
              href={hostel.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 transition-all min-h-[44px]"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              View on Map
            </a>
            <WhatsAppButton
              whatsapp={hostel.whatsapp}
              message={`Hi, I'm interested in ${hostel.name} (${hostel.branch || hostel.area}). Please share details.`}
              variant="small"
              className="flex-1 !rounded-xl !min-h-[44px]"
            />
          </div>
          <Link
            href={detailUrl}
            className={`w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all min-h-[44px] ${
              isBoys
                ? 'bg-blue-50 text-blue-700 hover:bg-blue-100'
                : 'bg-purple-50 text-purple-700 hover:bg-purple-100'
            }`}
          >
            View Details
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
