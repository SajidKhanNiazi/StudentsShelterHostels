import Link from 'next/link';
import { MapPin, Users, Train, ShieldCheck, ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100/40 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          {/* Trust indicator */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 shadow-sm mb-6">
            <ShieldCheck className="w-4 h-4 text-green-600" />
            <span className="text-sm font-medium text-gray-700">Trusted by 100+ Students & Parents</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6">
            Safe & Affordable{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Student Hostels
            </span>{' '}
            in Islamabad
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Separate Boys & Girls accommodation across 5 locations in I-8 and I-11.
            Near metro stations for easy commute.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              href="/locations?type=boys"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-lg font-semibold rounded-2xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all transform hover:scale-[1.02] min-h-[56px]"
            >
              🔵 Boys Hostels
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/locations?type=girls"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white text-lg font-semibold rounded-2xl shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/30 transition-all transform hover:scale-[1.02] min-h-[56px]"
            >
              🟣 Girls Hostels
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {[
              { icon: MapPin, label: '5 Locations', color: 'text-blue-600' },
              { icon: Users, label: '100+ Students', color: 'text-purple-600' },
              { icon: Train, label: 'Near Metro Stations', color: 'text-green-600' },
            ].map((badge) => (
              <div key={badge.label} className="flex items-center gap-2">
                <badge.icon className={`w-5 h-5 ${badge.color}`} />
                <span className="text-sm font-semibold text-gray-700">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60L1440 60L1440 30C1440 30 1200 0 720 0C240 0 0 30 0 30L0 60Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
