import Link from 'next/link';
import { ALL_HOSTELS } from '@/lib/hostels';
import BranchCard from '@/components/ui/BranchCard';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import {
  ArrowRight,
  ShieldCheck,
  Star,
  Quote,
  MessageCircle,
  MapPin,
  Wifi,
  Zap,
  UtensilsCrossed
} from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: 'Guaranteed Security',
    desc: 'CCTV surveillance, secure entry gates, and dedicated supervisors at each location to ensure peace of mind.'
  },
  {
    icon: Wifi,
    title: 'High-Speed WiFi',
    desc: 'Uninterrupted internet connection with multiple routers in every branch for seamless studying.'
  },
  {
    icon: UtensilsCrossed,
    title: 'Nutritious Meals',
    desc: 'Hygiene-focused kitchen serving wholesome, home-cooked meals daily for our residents.'
  },
  {
    icon: Zap,
    title: 'Electricity Backup',
    desc: 'Dedicated UPS or generator backup in all branches to ensure constant power availability.'
  }
];

const testimonials = [
  {
    name: 'Ahmed Khan',
    university: 'NUST Student',
    text: 'A very peaceful and well-managed hostel. The location is excellent, and the staff is cooperative. Highly recommended for students who value a quiet study environment.',
    rating: 5,
  },
  {
    name: 'Fatima Zahra',
    university: 'QAU Student',
    text: 'A safe and secure environment. The female staff makes you feel comfortable, and my parents are completely satisfied with the security arrangements.',
    rating: 5,
  },
  {
    name: 'Hassan Ali',
    university: 'Air University',
    text: 'Clean rooms, stable WiFi, and great food. It feels like a second home. The management is very responsive to any maintenance requests.',
    rating: 5,
  },
];

export default function HomePage() {
  return (
    <>
      {/* Elegant Hero Section */}
      <section className="relative overflow-hidden bg-[var(--color-primary)] py-20 lg:py-32 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block px-3 py-1 bg-white/10 text-[var(--color-accent)] text-xs font-semibold tracking-widest uppercase mb-6 rounded-sm border border-white/20">
            Premium Student Living
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-6 font-display leading-[1.2]">
            A Safe & Comfortable <br className="hidden md:inline" />
            <span className="font-semibold text-[var(--color-accent)]">
              Home Away From Home
            </span>
          </h1>
          <p className="text-[#d6d3cd] text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Providing meticulously managed, secure, and fully equipped student accommodations across the prime sectors of Islamabad.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <a
              href="#locations"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[var(--color-accent)] hover:bg-[#a38a65] text-white font-medium rounded shadow transition-all min-h-[52px]"
            >
              View All Locations
              <MapPin className="w-4 h-4" />
            </a>
            <Link
              href="/apply"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-transparent border border-white/30 hover:border-white/60 hover:bg-white/5 text-white font-medium rounded transition-all min-h-[52px]"
            >
              Apply Online
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Unified Locations Section */}
      <section id="locations" className="py-20 md:py-28 bg-[var(--color-bg)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[var(--color-text-primary)] mb-4 font-display">
              Our Branches in Islamabad
            </h2>
            <div className="w-16 h-1 bg-[var(--color-accent)] mx-auto mb-6 rounded-full"></div>
            <p className="text-[var(--color-text-muted)] text-base max-w-2xl mx-auto">
              We offer premium accommodations located near major universities and transit hubs. Choose the perfect location for your academic journey.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {ALL_HOSTELS.map((hostel) => (
              <BranchCard key={hostel.id} hostel={hostel} />
            ))}
          </div>
        </div>
      </section>

      {/* Elegant Features Section */}
      <section className="py-20 md:py-28 bg-white border-y border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[var(--color-text-primary)] mb-4 font-display">
              Why Choose Students Shelter?
            </h2>
            <div className="w-16 h-1 bg-[var(--color-accent)] mx-auto mb-6 rounded-full"></div>
            <p className="text-[var(--color-text-muted)] text-base max-w-2xl mx-auto">
              We focus on the details so you can focus on your studies. Experience a standard of living designed for student success.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
            {features.map((feat, i) => {
              const Icon = feat.icon;
              return (
                <div key={i} className="flex flex-col items-center text-center group">
                  <div className="w-14 h-14 rounded-full bg-[var(--color-light)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-primary)] mb-6 transition-colors group-hover:bg-[var(--color-primary)] group-hover:text-white">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-[var(--color-text-primary)] text-lg mb-3">{feat.title}</h3>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{feat.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Minimalist Testimonials */}
      <section className="py-20 md:py-28 bg-[var(--color-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[var(--color-text-primary)] mb-4 font-display">
              Resident Experiences
            </h2>
            <div className="w-16 h-1 bg-[var(--color-accent)] mx-auto mb-6 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((review, index) => (
              <div
                key={index}
                className="bg-white p-8 border border-[var(--color-border)] rounded-sm flex flex-col justify-between"
              >
                <div>
                  <Quote className="w-8 h-8 text-[var(--color-border)] mb-4" />
                  <p className="text-[var(--color-text-body)] text-sm leading-loose mb-6 italic">
                    "{review.text}"
                  </p>
                </div>
                <div className="flex items-center gap-4 pt-6 border-t border-[var(--color-border)]">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-white font-medium text-sm">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[var(--color-text-primary)]">{review.name}</p>
                    <p className="text-xs text-[var(--color-text-muted)] mt-0.5">{review.university}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Elegant WhatsApp CTA */}
      <section className="py-16 bg-[var(--color-primary)] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-2 font-display">
              Need assistance or want to visit?
            </h2>
            <p className="text-[#d6d3cd] text-sm md:text-base">
              Our team is ready to answer your questions and guide you through the admission process.
            </p>
          </div>
          <div className="shrink-0">
            <WhatsAppButton
              whatsapp="923314343676"
              message="Hi, I would like to know more about Students Shelter Hostels."
              variant="default"
              className="!bg-[var(--color-accent)] !text-white hover:!bg-[#a38a65] !px-8 !py-3.5 !text-sm !font-medium !rounded"
            >
              Contact on WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      </section>
    </>
  );
}
