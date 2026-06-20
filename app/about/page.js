import Link from 'next/link';
import { MapPin, Users, Calendar, Heart, ShieldCheck, Wallet, Home, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'About Us | Students Shelter Hostels Islamabad',
  description: 'Learn about Students Shelter Hostels — providing safe, affordable student accommodation across 5 locations in Islamabad since 2019.',
};

const stats = [
  { value: '5', label: 'Locations', icon: MapPin },
  { value: '100+', label: 'Students Housed', icon: Users },
  { value: '5+', label: 'Years Experience', icon: Calendar },
];

const values = [
  {
    icon: ShieldCheck,
    title: 'Safety First',
    description: 'We prioritize the safety of every student with CCTV surveillance, secure entry systems, and dedicated management at each branch.',
    color: 'blue',
  },
  {
    icon: Wallet,
    title: 'Affordability',
    description: 'Quality student accommodation at rates that students and parents can afford. No hidden charges, transparent pricing.',
    color: 'green',
  },
  {
    icon: Heart,
    title: 'Community',
    description: 'We foster a supportive community where students can study, grow, and make lasting friendships in a home-like environment.',
    color: 'purple',
  },
];

const colorMap = {
  blue: { bg: 'bg-blue-50', iconColor: 'text-blue-600', border: 'border-blue-100' },
  green: { bg: 'bg-green-50', iconColor: 'text-green-600', border: 'border-green-100' },
  purple: { bg: 'bg-purple-50', iconColor: 'text-purple-600', border: 'border-purple-100' },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] py-8">
      {/* Hero */}
      <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 md:py-16 mb-8 border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-xs font-semibold mb-6">
              <Home className="w-3.5 h-3.5" />
              About Students Shelter
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[var(--color-text-primary)] mb-6 font-display">
              A Home Away From Home
            </h1>
            <p className="text-[var(--color-text-body)] text-base md:text-lg leading-relaxed">
              Since 2019, Students Shelter Hostels has been providing safe, affordable, and comfortable accommodation for students in Islamabad.
            </p>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-8 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="bg-white border border-[var(--color-border)] rounded-2xl p-6 md:p-8 shadow-sm">
          <h2 className="text-xl md:text-2xl font-bold text-[var(--color-text-primary)] mb-6">Our Story</h2>
          <div className="text-xs md:text-sm text-[var(--color-text-body)] space-y-4 leading-relaxed">
            <p>
              Students Shelter Hostels was founded with a simple mission: to provide students from across Pakistan with safe, affordable, and comfortable accommodation in Islamabad — the heart of the country&apos;s educational landscape.
            </p>
            <p>
              What started as a single hostel in I-8/4 has grown into a network of 5 branches across Islamabad, serving both boys and girls with separate, dedicated facilities. Each location is carefully chosen for proximity to universities, metro stations, and essential services.
            </p>
            <p>
              We understand the concerns of parents sending their children to a new city. That&apos;s why we&apos;ve built our reputation on three pillars: safety, affordability, and a supportive community that feels like home.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-blue-700 to-purple-700 text-white mb-12 shadow-md">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4 font-display">Our Mission</h2>
          <p className="text-blue-50 text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-medium">
            &ldquo;Providing safe, affordable, and comfortable housing for students from across Pakistan, enabling them to focus on their education without worrying about accommodation.&rdquo;
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="text-center p-4 md:p-6 bg-white border border-[var(--color-border)] rounded-2xl shadow-sm">
                <Icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <p className="text-2xl md:text-3xl font-extrabold text-[var(--color-text-primary)]">{stat.value}</p>
                <p className="text-xs font-bold text-[var(--color-text-muted)] uppercase tracking-wider mt-1">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Values */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-[var(--color-text-primary)] tracking-tight mb-2">
            Our Values
          </h2>
          <p className="text-[var(--color-text-muted)] text-xs md:text-sm font-medium">
            What we stand for and what drives us every day.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {values.map((value) => {
            const Icon = value.icon;
            const colors = colorMap[value.color];
            return (
              <div
                key={value.title}
                className={`bg-white rounded-2xl p-6 border ${colors.border} card-hover shadow-sm`}
              >
                <div className={`w-14 h-14 ${colors.bg} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className={`w-7 h-7 ${colors.iconColor}`} />
                </div>
                <h3 className="text-base md:text-lg font-bold text-[var(--color-text-primary)] mb-2">{value.title}</h3>
                <p className="text-xs md:text-sm text-[var(--color-text-body)] leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-8 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-[var(--color-border)] rounded-2xl p-6 md:p-8 shadow-sm text-center">
          <h2 className="text-xl md:text-2xl font-bold text-[var(--color-text-primary)] mb-3">
            Ready to Join Students Shelter?
          </h2>
          <p className="text-[var(--color-text-muted)] text-xs md:text-sm mb-6 max-w-md mx-auto">
            Apply today and become part of our growing student community.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">

            <Link
              href="/boys-hostels"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-[var(--color-border)] text-[var(--color-text-primary)] text-xs font-bold rounded-xl hover:bg-gray-50 transition-all min-h-[48px]"
            >
              View Hostels
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
