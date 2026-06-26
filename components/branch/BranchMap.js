import { MapPin, Navigation } from 'lucide-react';

export default function BranchMap({ hostel }) {
  if (!hostel.mapEmbedSrc) return null;

  return (
    <div className="bg-white border border-[var(--color-border)] rounded-2xl p-5 md:p-6 shadow-sm mb-8">
      <h3 className="text-lg md:text-xl font-bold text-[var(--color-text-primary)] mb-4 flex items-center gap-2">
        <MapPin className="w-5 h-5 text-[#1B9E99] shrink-0" />
        Location on Map
      </h3>
      <div className="map-container relative overflow-hidden h-[280px] md:h-[380px] bg-gray-50 rounded-xl mb-4 border border-gray-100">
        <iframe
          src={hostel.mapEmbedSrc}
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 w-full h-full border-0"
        />
      </div>
      <a
        href={hostel.googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2.5 bg-gray-50 hover:bg-gray-100 border border-[var(--color-border)] text-sm font-semibold text-[var(--color-text-primary)] rounded-xl transition-all min-h-[44px]"
      >
        <Navigation className="w-4 h-4 text-[#1B9E99] shrink-0" />
        Get Directions on Google Maps
      </a>
    </div>
  );
}

