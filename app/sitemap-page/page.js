import Link from 'next/link';
import { ArrowRight, Phone, MessageCircle } from 'lucide-react';
import Breadcrumb from '@/components/seo/Breadcrumb';

export const metadata = {
  title: 'Site Map | Students Shelter Hostels Islamabad',
  description: 'Complete site map of Students Shelter Hostels website. Find all pages including boys hostel branches, girls hostel branches, rooms, gallery, and more.',
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/sitemap-page`,
  },
  openGraph: {
    title: 'Site Map — Students Shelter Hostels',
    description: 'Find all pages on the Students Shelter Hostels website.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/sitemap-page`,
    type: 'website',
    locale: 'en_PK',
    siteName: 'Students Shelter Hostels',
  },
};

const SITEMAP_DATA = [
  {
    category: 'Main Pages',
    icon: '🏠',
    color: 'neutral',
    pages: [
      { name: 'Homepage', url: '/', desc: 'Overview of all hostels and locations' },
      { name: 'Rooms & Pricing', url: '/rooms', desc: 'Room types and monthly pricing' },
      { name: 'Photo Gallery', url: '/gallery', desc: 'Photos of hostel rooms and facilities' },
    ]
  },
  {
    category: 'Boys Hostels',
    icon: '🔵',
    color: 'teal',
    pages: [
      { name: 'All Boys Hostels', url: '/boys-hostels', desc: '3 boys hostel branches in Islamabad' },
      { name: 'I-8/4 Faizabad Branch', url: '/boys-hostels/i-8-4-faizabad', desc: 'Near Faizabad Metro Station' },
      { name: 'I-11/1 Branch', url: '/boys-hostels/i-11-1', desc: 'Opposite Metro Cash & Carry' },
      { name: 'I-8/4 Main Branch', url: '/boys-hostels/i-8-4-main', desc: 'Street 104, near I-8 Markaz' },
    ]
  },
  {
    category: 'Girls Hostels',
    icon: '🟣',
    color: 'purple',
    pages: [
      { name: 'All Girls Hostels', url: '/girls-hostels', desc: '3 girls hostel branches in Islamabad' },
      { name: 'I-8/3 Branch 2 (Main)', url: '/girls-hostels/i-8-3-branch-2', desc: 'Main girls branch — 0331-4343676' },
      { name: 'I-8/3 Branch 1', url: '/girls-hostels/i-8-3-branch-1', desc: 'House 129, Street 60, I-8/3' },
      { name: 'I-11/1 Branch', url: '/girls-hostels/i-11-1', desc: 'House 369, Street 11, I-11/1' },
    ]
  },
  {
    category: 'Information',
    icon: 'ℹ️',
    color: 'neutral',
    pages: [
      { name: 'About Us', url: '/about', desc: 'Our story, mission and values' },
      { name: 'Contact & Inquiry', url: '/contact', desc: 'Reach us by call, WhatsApp or form' },
      { name: 'Student Reviews', url: '/testimonials', desc: 'Reviews from current students' },
      { name: 'Privacy Policy', url: '/privacy-policy', desc: 'How we use your information' },
    ]
  },
];

export default function SitemapPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] py-8">
      {/* Breadcrumb section */}
      <div className="max-w-6xl mx-auto px-4">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Site Map' },
          ]}
        />
      </div>

      {/* Page Hero */}
      <div 
        className="w-full text-white py-16 md:py-20 mb-12 relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #022e3a 0%, #054255 35%, #3d1a4d 75%, #5A2870 100%)',
        }}
      >
        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-3xl md:text-5xl font-extrabold font-display mb-4 tracking-tight">
            Site Map
          </h1>
          <p className="text-gray-200 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Find every page on the Students Shelter Hostels website.
          </p>
        </div>
      </div>

      {/* Sitemap Categories Grid */}
      <div className="max-w-6xl mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SITEMAP_DATA.map((cat) => {
            const isTeal = cat.color === 'teal';
            const isPurple = cat.color === 'purple';

            let headerBg = 'bg-gray-100 border-gray-200 text-[#075A6D]';
            let cardBorder = 'border-gray-200';
            let hoverRing = 'hover:border-gray-400';

            if (isTeal) {
              headerBg = 'bg-[#d0f2f1] border-[#a1e4e2] text-[#075A6D]';
              cardBorder = 'border-[#a1e4e2]';
              hoverRing = 'hover:border-[#1B9E99]';
            } else if (isPurple) {
              headerBg = 'bg-[#f0e2f7] border-[#dfc0eb] text-[#783893]';
              cardBorder = 'border-[#dfc0eb]';
              hoverRing = 'hover:border-[#9C69AA]';
            }

            return (
              <div 
                key={cat.category}
                className={`bg-white rounded-2xl border shadow-sm overflow-hidden flex flex-col ${cardBorder}`}
              >
                {/* Category Header */}
                <div className={`px-5 py-4 border-b font-extrabold text-sm uppercase tracking-wider flex items-center gap-2 ${headerBg}`}>
                  <span>{cat.icon}</span>
                  {cat.category}
                </div>

                {/* Pages List */}
                <div className="p-4 flex-1 flex flex-col gap-3">
                  {cat.pages.map((page) => (
                    <Link
                      key={page.url}
                      href={page.url}
                      className={`p-3 rounded-xl border border-gray-100 bg-gray-50/50 hover:bg-white transition-all duration-200 group flex flex-col gap-1.5 ${hoverRing}`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-bold text-[var(--color-text-primary)] group-hover:text-[#1B9E99] transition-colors">
                          {page.name}
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:translate-x-1 transition-transform" />
                      </div>
                      <span className="text-[11px] text-[var(--color-text-muted)] font-medium leading-normal">
                        {page.desc}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Quick Contact Bar */}
      <div className="max-w-6xl mx-auto px-4 mb-12">
        <div 
          className="rounded-2xl py-10 px-6 md:px-12 text-center text-white flex flex-col md:flex-row items-center justify-between gap-6"
          style={{
            background: 'linear-gradient(135deg, #075A6D 0%, #1B9E99 100%)',
          }}
        >
          <div className="text-center md:text-left">
            <h2 className="text-xl md:text-2xl font-extrabold font-display mb-2">
              Can&apos;t find what you need?
            </h2>
            <p className="text-teal-100 text-xs md:text-sm font-medium">
              Contact us directly. Our team is available to assist you.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto justify-center shrink-0">
            <a
              href="https://wa.me/923314343676?text=Hi%2C%20I%20have%20a%20question%20about%20your%20hostels."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#16a34a] hover:bg-[#15803d] text-white font-bold text-xs rounded-xl transition-all shadow-md min-h-[46px]"
            >
              <MessageCircle className="w-4.5 h-4.5 fill-white" /> WhatsApp
            </a>
            <a
              href="tel:03314343676"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-[var(--color-text-primary)] hover:bg-gray-50 font-bold text-xs rounded-xl transition-all shadow-md min-h-[46px]"
            >
              <Phone className="w-4 h-4 text-[#1B9E99]" /> 0331-4343676
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
