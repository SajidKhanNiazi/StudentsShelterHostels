'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Home, MapPin, BedDouble, Info, Mail, FileText, Camera } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/#locations', label: 'Locations', icon: MapPin },
  { href: '/rooms', label: 'Rooms', icon: BedDouble },
  { href: '/gallery', label: 'Gallery', icon: Camera },
  { href: '/about', label: 'About', icon: Info },
  { href: '/contact', label: 'Contact', icon: Mail },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#fcfbf9]/95 backdrop-blur-md shadow-sm border-b border-[var(--color-border)]'
          : 'bg-[#fcfbf9]'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" onClick={() => setIsOpen(false)}>
            <div className="w-10 h-10 bg-[var(--color-primary)] rounded flex items-center justify-center transition-all group-hover:bg-[var(--color-text-primary)]">
              <Home className="w-5 h-5 text-[var(--color-accent)]" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-semibold tracking-wide text-[var(--color-text-primary)] font-display uppercase">
                Students Shelter
              </span>
              <span className="text-[10px] text-[var(--color-text-muted)] tracking-[0.2em] uppercase leading-none mt-1 hidden sm:block font-medium">
                Hostels Islamabad
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[var(--color-text-body)] hover:text-[var(--color-accent)] transition-colors uppercase tracking-wider"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[var(--color-text-primary)] hover:bg-[var(--color-light)] rounded transition-colors"
            aria-label="Toggle menu"
            id="mobile-menu-button"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 top-20 z-40 transition-all duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
        <div
          className={`relative bg-[#fcfbf9] border-t border-[var(--color-border)] shadow-2xl transition-transform duration-300 max-h-[85vh] overflow-y-auto ${
            isOpen ? 'translate-y-0' : '-translate-y-4'
          }`}
        >
          <div className="px-6 py-8 space-y-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-4 px-4 py-4 text-sm font-medium uppercase tracking-wider text-[var(--color-text-body)] hover:text-[var(--color-accent)] hover:bg-[var(--color-light)] rounded transition-colors"
                >
                  <Icon className="w-5 h-5 opacity-50 shrink-0" />
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
}
