import Link from 'next/link';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import { MapPin, Train, ShoppingBag, Navigation, ShieldCheck, ArrowRight, ExternalLink, Users } from 'lucide-react';

const iconMap = {
  metro: Train,
  store: ShoppingBag,
  directions: Navigation,
};

export default function BranchCard({ hostel }) {
  const isBoys = hostel.type === 'boys';
  const detailUrl = `/${hostel.type}-hostels/${hostel.slug}`;
  const LandmarkIcon = iconMap[hostel.landmarkIcon] || MapPin;

  return (
    <div className="relative bg-white rounded border border-[var(--color-border)] shadow-sm card-hover flex flex-col group">
      {/* Top Header */}
      <div className="px-6 pt-6 pb-4 flex items-center justify-between gap-4 border-b border-[var(--color-border)]/50">
        <div className="flex flex-col gap-1.5">
          <span className="text-[10px] font-bold tracking-widest uppercase text-[var(--color-accent)]">
            {hostel.type === 'boys' ? 'Boys Hostel' : 'Girls Hostel'}
          </span>
          {hostel.isGirlsOnly && (
            <span className="inline-flex items-center gap-1 text-[10px] text-[var(--color-text-muted)] italic">
              <ShieldCheck className="w-3.5 h-3.5 text-[var(--color-accent)]" />
              Secure Female Staff
            </span>
          )}
        </div>
        <div className="text-xl font-display font-light text-[var(--color-text-primary)] opacity-30">
          {hostel.area}
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-1 leading-snug font-display">
            {hostel.name}
          </h3>
          {hostel.branchLabel && (
            <p className="text-xs font-medium text-[var(--color-text-muted)] mb-5">
              {hostel.branchLabel}
            </p>
          )}

          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3 text-sm text-[var(--color-text-body)]">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-accent)]" />
              <span className="leading-relaxed text-xs">{hostel.fullAddress}</span>
            </div>
            {hostel.landmark && (
               <div className="flex items-start gap-3 text-sm text-[var(--color-text-body)]">
                <LandmarkIcon className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-accent)]" />
                <span className="font-medium text-xs text-[var(--color-text-body)]">{hostel.landmark}</span>
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 pt-2">
          <div className="grid grid-cols-2 gap-2">
            <a
              href={hostel.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-3 py-2 border border-[var(--color-border)] bg-[var(--color-light)] hover:bg-[var(--color-border)] rounded text-xs font-medium text-[var(--color-text-primary)] transition-colors min-h-[40px]"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Map
            </a>
            <WhatsAppButton
              whatsapp={hostel.whatsapp}
              message={`Hi, I'm interested in ${hostel.name} (${hostel.branchLabel || hostel.area}). Please share details.`}
              variant="small"
              className="!rounded !min-h-[40px] !bg-[var(--color-whatsapp)] hover:!bg-[#15803d]"
            />
          </div>
          <Link
            href={detailUrl}
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded text-xs font-medium transition-colors min-h-[40px] bg-[var(--color-primary)] text-white hover:bg-[var(--color-text-primary)]"
          >
            View Details
            <ArrowRight className="w-4 h-4 opacity-70 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
