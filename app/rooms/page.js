import Link from 'next/link';
import { ROOM_TYPES } from '@/lib/hostels';
import { User, Users, Users2, Check, Wifi, Zap, UtensilsCrossed, WashingMachine, ShieldCheck, BookOpen, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Room Types & Pricing | Students Shelter Hostels',
  description: 'Choose from Single, Double, or Triple sharing rooms at Students Shelter Hostels Islamabad. All rooms include WiFi, meals, and electricity backup.',
};

const roomIcons = {
  'single': User,
  'double': Users,
  'triple': Users2,
};

const roomColors = {
  'single': {
    gradient: 'from-blue-600 to-blue-800',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    text: 'text-blue-700',
    badge: 'bg-blue-100 text-blue-700',
  },
  'double': {
    gradient: 'from-purple-600 to-purple-800',
    bg: 'bg-purple-50',
    border: 'border-purple-200',
    text: 'text-purple-700',
    badge: 'bg-purple-100 text-purple-700',
  },
  'triple': {
    gradient: 'from-green-600 to-emerald-800',
    bg: 'bg-green-50',
    border: 'border-green-200',
    text: 'text-green-700',
    badge: 'bg-green-100 text-green-700',
  },
};

const inclusions = [
  { icon: Wifi, name: 'High-Speed WiFi' },
  { icon: Zap, name: 'Electricity Backup' },
  { icon: UtensilsCrossed, name: 'Meals Available' },
  { icon: WashingMachine, name: 'Laundry Service' },
  { icon: ShieldCheck, name: '24/7 Security' },
  { icon: BookOpen, name: 'Study Room Access' },
];

export default function RoomsPage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] py-8">
      {/* Hero */}
      <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 md:py-16 mb-8 border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[var(--color-text-primary)] mb-3">
            Room Types & Pricing
          </h1>
          <p className="text-[var(--color-text-body)] text-base md:text-lg max-w-2xl mx-auto">
            Choose the room type that fits your budget and lifestyle. All rooms come with essential amenities.
          </p>
        </div>
      </div>

      {/* Room Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {ROOM_TYPES.map((room) => {
            const Icon = roomIcons[room.id];
            const colors = roomColors[room.id];
            return (
              <div
                key={room.id}
                className={`bg-white rounded-2xl border-2 ${colors.border} overflow-hidden card-hover flex flex-col justify-between`}
              >
                {/* Header */}
                <div className={`bg-gradient-to-r ${colors.gradient} px-6 py-8 text-center text-white`}>
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold mb-1 font-display">{room.name}</h2>
                  <span className="inline-flex items-center px-3 py-1 bg-white/20 rounded-full text-xs font-semibold">
                    {room.occupancy}
                  </span>
                </div>

                {/* Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-[var(--color-text-body)] text-xs md:text-sm leading-relaxed mb-5">
                      {room.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2.5 mb-6">
                      {room.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <Check className={`w-4 h-4 ${colors.text} shrink-0`} />
                          <span className="text-xs md:text-sm font-semibold text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Ideal For */}
                    <div className={`${colors.bg} rounded-xl p-4`}>
                      <p className="text-[10px] font-bold text-gray-500 uppercase mb-1">Ideal For</p>
                      <p className={`text-xs md:text-sm font-bold ${colors.text}`}>{room.ideal}</p>
                    </div>
                  </div>

                  {/* Price note */}
                  <div className="mt-5 pt-4 border-t border-gray-100 text-center">
                    <p className="text-xs font-medium text-[var(--color-text-muted)] mb-3">Contact us for current pricing</p>
                    <Link
                      href="/contact"
                      className={`w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r ${colors.gradient} text-white rounded-xl text-xs font-bold transition-all min-h-[48px] hover:shadow-lg active:scale-[0.98]`}
                    >
                      Inquire Now
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* What's Included */}
        <div className="bg-white border border-[var(--color-border)] rounded-2xl p-6 md:p-10 mb-12 shadow-sm">
          <h2 className="text-xl md:text-2xl font-bold text-[var(--color-text-primary)] text-center mb-8">
            What&apos;s Included With Every Room
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {inclusions.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.name}
                  className="flex items-center gap-3 p-4 bg-[var(--color-bg)] rounded-xl border border-gray-100"
                >
                  <Icon className="w-6 h-6 text-blue-600 shrink-0" />
                  <span className="text-xs md:text-sm font-semibold text-[var(--color-text-body)]">{item.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 text-white shadow-lg">
          <h3 className="text-2xl font-bold mb-3">Ready to Move In?</h3>
          <p className="text-slate-300 text-sm md:text-base max-w-xl mx-auto mb-6">Apply now and secure your room at Students Shelter Hostels.</p>
          <Link
            href="/apply"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white text-base font-bold rounded-2xl shadow-xl transition-all min-h-[56px] active:scale-[0.98]"
          >
            Apply for a Room
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
