import GenderBadge from '@/components/ui/GenderBadge';
import AreaStamp from '@/components/ui/AreaStamp';
import PhoneLink from '@/components/ui/PhoneLink';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import Link from 'next/link';
import { MapPin, ShieldCheck, FileText } from 'lucide-react';

export default function BranchHero({ hostel }) {
  const isBoys = hostel.type === 'boys';

  return (
    <div className="bg-white border border-[var(--color-border)] rounded-2xl p-6 md:p-8 shadow-sm mb-8 relative overflow-hidden">
      {/* Badges/Stamps */}
      <div className="flex items-center justify-between gap-4 mb-4">
        <div className="flex flex-col gap-2">
          <GenderBadge type={hostel.type} size="md" />
          {hostel.isGirlsOnly && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-purple-100 text-purple-800 text-xs font-semibold rounded-full border border-purple-200">
              <ShieldCheck className="w-4 h-4 shrink-0 text-[var(--color-girls-accent)]" />
              🔒 Girls Only — Maximum Security
            </span>
          )}
        </div>
        <AreaStamp area={hostel.area} type={hostel.type} className="opacity-30" />
      </div>

      {/* Main Info */}
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[var(--color-text-primary)] leading-tight mb-2">
        {hostel.name}
      </h1>
      <h2 className={`text-base md:text-lg font-bold mb-4 ${isBoys ? 'text-[var(--color-boys-accent)]' : 'text-[var(--color-girls-accent)]'}`}>
        {hostel.branchLabel || hostel.area}
      </h2>

      {/* Location */}
      <div className="flex items-start gap-2.5 text-sm md:text-base text-[var(--color-text-body)] mb-6">
        <MapPin className="w-5 h-5 mt-0.5 shrink-0 text-[var(--color-text-muted)]" />
        <span className="leading-relaxed">{hostel.fullAddress}</span>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap items-center gap-3 border-t border-[var(--color-border)] pt-5">
        <PhoneLink
          phone={hostel.phone || "0331-4343676"}
          className="flex-1 sm:flex-none shadow-sm min-h-[48px]"
        />
        <WhatsAppButton
          whatsapp={hostel.whatsapp}
          message={`Hi, I'm interested in applying for a room at ${hostel.name} (${hostel.branchLabel || hostel.area}). Please share availability.`}
          className="flex-1 sm:flex-none shadow-sm min-h-[48px]"
        >
          WhatsApp Us
        </WhatsAppButton>

      </div>
    </div>
  );
}
