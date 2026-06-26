import Link from 'next/link';
import Image from 'next/image';
import { Home, MapPin, Phone } from 'lucide-react';
import { ALL_HOSTELS } from '@/lib/hostels';

export default function Footer() {
  return (
    <footer className="text-[rgba(255,255,255,0.75)]" style={{ background: '#022e3a' }}>
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="relative w-12 h-12 flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                <Image 
                  src="/logo.jpg" 
                  alt="Students Shelter Logo" 
                  fill
                  className="object-contain drop-shadow-[0_0_8px_rgba(61,186,181,0.3)] group-hover:drop-shadow-[0_0_12px_rgba(61,186,181,0.8)] transition-all duration-300"
                />
              </div>
              <div>
                <span className="text-xl font-display uppercase tracking-widest text-white group-hover:text-[#3DBAB5] transition-colors duration-300">Students Shelter</span>
                <p className="text-[10px] text-[rgba(255,255,255,0.5)] tracking-[0.2em] font-medium uppercase mt-1">
                  Hostels Islamabad
                </p>
              </div>
            </Link>
            <p className="text-[rgba(255,255,255,0.6)] text-sm leading-relaxed mb-8 max-w-md">
              Providing highly secure, elegantly furnished, and exceptionally managed student accommodations across the premium sectors of Islamabad.
            </p>
            <div className="flex flex-col gap-3 text-sm">
              <a href="tel:03314343676" className="inline-flex items-center gap-3 text-[#3DBAB5] hover:text-white transition-colors">
                <div className="w-8 h-8 rounded-full border border-[rgba(255,255,255,0.2)] flex items-center justify-center">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span className="font-medium tracking-wide">0331-4343676</span>
              </a>
            </div>
          </div>

          {/* Locations Column */}
          <div>
            <h3 className="text-xs font-bold text-[#3DBAB5] uppercase tracking-[0.15em] mb-6 font-display">
              Our Locations
            </h3>
            <ul className="space-y-4">
              {ALL_HOSTELS.map((hostel) => (
                <li key={hostel.id}>
                  <Link
                    href={`/${hostel.type}-hostels/${hostel.slug}`}
                    className="text-[rgba(255,255,255,0.6)] hover:text-white text-xs transition-colors flex items-start gap-3 group"
                  >
                    <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0 opacity-50 group-hover:opacity-100 group-hover:text-[#3DBAB5] transition-colors" />
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
            <h3 className="text-xs font-bold text-[#3DBAB5] uppercase tracking-[0.15em] mb-6 font-display">
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
                    className="text-[rgba(255,255,255,0.6)] hover:text-[#3DBAB5] text-xs transition-colors uppercase tracking-wider"
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
      <div className="border-t border-[rgba(255,255,255,0.1)] py-6" style={{ background: '#011f27' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-[rgba(255,255,255,0.5)] text-[11px] tracking-wide uppercase">
            © {new Date().getFullYear()} Students Shelter Hostels. All rights reserved.
          </p>
          <p className="text-[rgba(255,255,255,0.5)] text-[11px] tracking-wide uppercase">
            Islamabad, Pakistan
          </p>
        </div>
      </div>
    </footer>
  );
}
