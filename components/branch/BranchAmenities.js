import { Wifi, Zap, UtensilsCrossed, WashingMachine, BookOpen, ShieldCheck, UserCheck, Shield } from 'lucide-react';

const amenityIcons = {
  'WiFi': Wifi,
  'Electricity Backup': Zap,
  'Meals': UtensilsCrossed,
  'Meals Available': UtensilsCrossed,
  'Laundry': WashingMachine,
  'Study Room': BookOpen,
  'Security': ShieldCheck,
  'Female Staff': UserCheck,
};

export default function BranchAmenities({ amenities, type = 'boys' }) {
  const isBoys = type === 'boys';

  return (
    <div className="bg-white border border-[var(--color-border)] rounded-2xl p-5 md:p-6 shadow-sm mb-8">
      <h3 className="text-lg md:text-xl font-bold text-[var(--color-text-primary)] mb-4 flex items-center gap-2">
        <Shield className="w-5 h-5 shrink-0" style={{ color: isBoys ? '#1B9E99' : '#9C69AA' }} />
        Amenities & Facilities
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
        {amenities.map((amenity) => {
          const IconComponent = amenityIcons[amenity] || ShieldCheck;
          return (
            <div
              key={amenity}
              className="flex items-center gap-2.5 p-3.5 rounded-xl"
              style={{
                background: isBoys ? '#f0fafa' : '#faf5fc',
                border: isBoys ? '1px solid #a1e4e2' : '1px solid #dfc0eb',
              }}
            >
              <IconComponent className="w-5 h-5 shrink-0" style={{ color: isBoys ? '#1B9E99' : '#9C69AA' }} />
              <span className="text-xs md:text-sm font-semibold text-[var(--color-text-body)]">
                {amenity}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
