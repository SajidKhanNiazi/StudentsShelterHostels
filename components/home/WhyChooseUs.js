import { Home, ShieldCheck, MapPin, GraduationCap } from 'lucide-react';

const features = [
  {
    icon: Home,
    title: 'Affordable Rates',
    description: 'Quality accommodation at student-friendly prices. No hidden charges.',
    color: 'blue',
    gradient: 'from-blue-500 to-blue-600',
    bg: 'bg-blue-50',
    iconColor: 'text-blue-600',
  },
  {
    icon: ShieldCheck,
    title: 'Safe & Secure',
    description: 'CCTV surveillance, secure entry, and 24/7 management for peace of mind.',
    color: 'green',
    gradient: 'from-green-500 to-emerald-600',
    bg: 'bg-green-50',
    iconColor: 'text-green-600',
  },
  {
    icon: MapPin,
    title: 'Prime Locations',
    description: 'Near metro stations, markets, and universities. Easy access to everything.',
    color: 'purple',
    gradient: 'from-purple-500 to-purple-600',
    bg: 'bg-purple-50',
    iconColor: 'text-purple-600',
  },
  {
    icon: GraduationCap,
    title: 'Student-Focused',
    description: 'Designed for students with study rooms, Wi-Fi, and a focused environment.',
    color: 'amber',
    gradient: 'from-amber-500 to-orange-600',
    bg: 'bg-amber-50',
    iconColor: 'text-amber-600',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-3">
            Why Choose Students Shelter?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We understand what students need — a safe, comfortable, and affordable place to call home.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-white rounded-2xl p-5 md:p-6 border border-gray-100 card-hover group"
              >
                <div
                  className={`w-12 h-12 md:w-14 md:h-14 ${feature.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Icon className={`w-6 h-6 md:w-7 md:h-7 ${feature.iconColor}`} />
                </div>
                <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
