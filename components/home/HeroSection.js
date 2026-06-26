import Link from 'next/link';
import { MapPin, Users, Train, ShieldCheck, ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #f0fafa, #ffffff, #faf5fc)' }} />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" style={{ background: 'rgba(208,242,241,0.4)' }} />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" style={{ background: 'rgba(240,226,247,0.4)' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          {/* Trust indicator */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 shadow-sm mb-6">
            <ShieldCheck className="w-4 h-4 text-green-600" />
            <span className="text-sm font-medium text-gray-700">Trusted by 100+ Students & Parents</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6">
            Safe & Affordable{' '}
            <span style={{ background: 'linear-gradient(135deg, #1B9E99, #783893)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Student Hostels
            </span>{' '}
            in Islamabad
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-10 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Looking for the best hostels in Islamabad for students, job holders, or working professionals? Explore verified accommodation including girls and boys hostels with full facilities and safe living options.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              href="/locations?type=boys"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-white text-lg font-semibold rounded-2xl transition-all transform hover:scale-[1.02] min-h-[56px]"
              style={{
                background: 'linear-gradient(135deg, #075A6D, #1B9E99)',
                boxShadow: '0 4px 20px rgba(27,158,153,0.35)',
              }}
            >
              🔵 Boys Hostels
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/locations?type=girls"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-white text-lg font-semibold rounded-2xl transition-all transform hover:scale-[1.02] min-h-[56px]"
              style={{
                background: 'linear-gradient(135deg, #783893, #9C69AA)',
                boxShadow: '0 4px 20px rgba(156,105,170,0.35)',
              }}
            >
              🟣 Girls Hostels
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {[
              { icon: MapPin, label: '5 Locations', color: '#1B9E99' },
              { icon: Users, label: '100+ Students', color: '#9C69AA' },
              { icon: Train, label: 'Near Metro Stations', color: '#16a34a' },
            ].map((badge) => (
              <div key={badge.label} className="flex items-center gap-2">
                <badge.icon className="w-5 h-5" style={{ color: badge.color }} />
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
