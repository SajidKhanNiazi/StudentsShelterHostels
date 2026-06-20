import Link from 'next/link';
import { Home, MapPin, Phone } from 'lucide-react';
import { ALL_HOSTELS } from '@/lib/hostels';

export default function Footer() {
  return (
    <footer className="bg-[#1c1917] text-[#f5f4f0] border-t border-[#292524]">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[var(--color-accent)] rounded flex items-center justify-center">
                <Home className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-xl font-display uppercase tracking-widest text-white">Students Shelter</span>
                <p className="text-[10px] text-[#a8a29e] tracking-[0.2em] font-medium uppercase mt-1">
                  Hostels Islamabad
                </p>
              </div>
            </Link>
            <p className="text-[#a8a29e] text-sm leading-relaxed mb-8 max-w-md">
              Providing highly secure, elegantly furnished, and exceptionally managed student accommodations across the premium sectors of Islamabad.
            </p>
            <div className="flex flex-col gap-3 text-sm">
              <a href="tel:03314343676" className="inline-flex items-center gap-3 text-[#d6d3cd] hover:text-[var(--color-accent)] transition-colors">
                <div className="w-8 h-8 rounded-full border border-[#44403c] flex items-center justify-center">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span className="font-medium tracking-wide">0331-4343676</span>
              </a>
            </div>
          </div>

          {/* Locations Column */}
          <div>
            <h3 className="text-xs font-bold text-[var(--color-accent)] uppercase tracking-[0.15em] mb-6 font-display">
              Our Locations
            </h3>
            <ul className="space-y-4">
              {ALL_HOSTELS.map((hostel) => (
                <li key={hostel.id}>
                  <Link
                    href={`/${hostel.type}-hostels/${hostel.slug}`}
                    className="text-[#a8a29e] hover:text-white text-xs transition-colors flex items-start gap-3 group"
                  >
                    <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0 opacity-50 group-hover:opacity-100 group-hover:text-[var(--color-accent)] transition-colors" />
                    <span className="leading-relaxed">
                      {hostel.name} <br/>
                      <span className="text-[10px] opacity-70">({hostel.branchLabel || hostel.area})</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-xs font-bold text-[var(--color-accent)] uppercase tracking-[0.15em] mb-6 font-display">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {[
                { href: '/rooms', label: 'Rooms & Pricing' },
                { href: '/about', label: 'About Us' },
                { href: '/contact', label: 'Contact & Inquiry' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#a8a29e] hover:text-white text-xs transition-colors uppercase tracking-wider"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Copyright Footer Bar */}
      <div className="border-t border-[#292524] bg-[#171513] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-[#78716c] text-[11px] tracking-wide uppercase">
            © {new Date().getFullYear()} Students Shelter Hostels. All rights reserved.
          </p>
          <p className="text-[#78716c] text-[11px] tracking-wide uppercase">
            Islamabad, Pakistan
          </p>
        </div>
      </div>
    </footer>
  );
}
