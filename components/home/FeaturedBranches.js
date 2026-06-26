import { HOSTELS } from '@/lib/hostels';
import GenderBadge from '@/components/ui/GenderBadge';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import PhoneLink from '@/components/ui/PhoneLink';
import { MapPin, Navigation, Phone, ShieldCheck } from 'lucide-react';

function BranchCard({ hostel, colorScheme }) {
  const isBoys = colorScheme === 'boys';

  return (
    <div
      className="rounded-2xl overflow-hidden card-hover bg-white"
      style={{
        border: isBoys ? '2px solid #a1e4e2' : '2px solid #dfc0eb',
      }}
    >
      {/* Gradient Header */}
      <div
        className="px-6 py-4"
        style={{
          background: isBoys
            ? 'linear-gradient(135deg, #f0fafa, #d0f2f1)'
            : 'linear-gradient(135deg, #faf5fc, #f0e2f7)',
        }}
      >
        <GenderBadge type={colorScheme} size="sm" />
        {hostel.isGirlsOnly && (
          <div className="mt-2 inline-flex items-center gap-1 px-2.5 py-1 text-white text-xs font-semibold rounded-full"
            style={{ background: 'linear-gradient(135deg, #783893, #9C69AA)' }}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            Girls Only — Secure Entry
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-1">{hostel.name}</h3>
        {hostel.branch && (
          <p className="text-sm font-semibold mb-3" style={{ color: isBoys ? '#2A707F' : '#783893' }}>
            {hostel.branch}
          </p>
        )}

        <div className="space-y-2 mb-4">
          <div className="flex items-start gap-2 text-sm text-gray-600">
            <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-gray-400" />
            <span>{hostel.address}</span>
          </div>
          {hostel.landmark && (
            <div
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold"
              style={{
                background: isBoys ? '#d0f2f1' : '#f0e2f7',
                color: isBoys ? '#054255' : '#3d1a4d',
                border: isBoys ? '1px solid #a1e4e2' : '1px solid #dfc0eb',
              }}
            >
              📍 {hostel.landmark}
            </div>
          )}
        </div>

        {hostel.phone && (
          <div className="mb-4">
            <PhoneLink phone={hostel.phone} type={colorScheme} />
          </div>
        )}

        {/* Map */}
        <div className="mb-5 rounded-xl overflow-hidden border border-gray-200">
          <iframe
            src={hostel.mapEmbedSrc}
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`Map of ${hostel.name}`}
            className="w-full"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-2">
          {hostel.phone ? (
            <a
              href={`tel:${hostel.phone.replace(/[^0-9]/g, '')}`}
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold text-sm transition-all min-h-[48px] text-white"
              style={{
                background: isBoys
                  ? 'linear-gradient(135deg, #075A6D, #1B9E99)'
                  : 'linear-gradient(135deg, #783893, #9C69AA)',
              }}
            >
              <Phone className="w-4 h-4" />
              {hostel.phone}
            </a>
          ) : (
            <a
              href={hostel.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold text-sm transition-all min-h-[48px] text-white"
              style={{
                background: isBoys
                  ? 'linear-gradient(135deg, #075A6D, #1B9E99)'
                  : 'linear-gradient(135deg, #783893, #9C69AA)',
              }}
            >
              <Navigation className="w-4 h-4" />
              Get Directions
            </a>
          )}
          <WhatsAppButton
            whatsapp={hostel.whatsapp}
            message={`Hi, I'm interested in ${hostel.name} (${hostel.branch || hostel.area}). Please share details.`}
            className="flex-1"
          />
        </div>
      </div>
    </div>
  );
}

export default function FeaturedBranches() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3" style={{ color: '#054255' }}>
            Our Main Branches
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Visit our featured locations with the best amenities and prime locations in Islamabad.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          <BranchCard hostel={HOSTELS.boys.featured} colorScheme="boys" />
          <BranchCard hostel={HOSTELS.girls.featured} colorScheme="girls" />
        </div>
      </div>
    </section>
  );
}
