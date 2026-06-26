import { Home, ShieldCheck, MapPin, GraduationCap } from 'lucide-react';

const features = [
  {
    icon: Home,
    title: 'Affordable Rates',
    description: 'Quality accommodation at student-friendly prices. No hidden charges.',
    iconColor: '#1B9E99',
  },
  {
    icon: ShieldCheck,
    title: 'Safe & Secure',
    description: 'CCTV surveillance, secure entry, and 24/7 management for peace of mind.',
    iconColor: '#16a34a',
  },
  {
    icon: MapPin,
    title: 'Prime Locations',
    description: 'Near metro stations, markets, and universities. Easy access to everything.',
    iconColor: '#9C69AA',
  },
  {
    icon: GraduationCap,
    title: 'Student-Focused',
    description: 'Designed for students with study rooms, Wi-Fi, and a focused environment.',
    iconColor: '#075A6D',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3" style={{ color: '#054255' }}>
            Why Choose Students Shelter?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We understand what students need — a safe, comfortable, and affordable place to call home.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-white rounded-2xl p-5 md:p-6 border border-gray-100 card-hover group"
                style={{ '--hover-border': idx % 2 === 0 ? '#a1e4e2' : '#dfc0eb' }}
              >
                <div
                  className="w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                  style={{ background: 'linear-gradient(135deg, #d0f2f1, #f0e2f7)' }}
                >
                  <Icon className="w-6 h-6 md:w-7 md:h-7" style={{ color: feature.iconColor }} />
                </div>
                <h3 className="text-base md:text-lg font-bold mb-2" style={{ color: '#054255' }}>
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
