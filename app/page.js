import Link from 'next/link';
import Image from 'next/image';
import { ALL_HOSTELS } from '@/lib/hostels';
import BranchCard from '@/components/ui/BranchCard';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import InteractiveOverviewTable from '@/components/home/InteractiveOverviewTable';
import InteractiveHostelTypes from '@/components/home/InteractiveHostelTypes';
import {
  ArrowRight,
  ShieldCheck,
  MapPin,
  HelpCircle,
  CheckCircle,
  Info
} from 'lucide-react';

export default function HomePage() {
  return (
    <>
      {/* Elegant Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-20 lg:pt-36 lg:pb-28 text-white min-h-[90vh] flex flex-col justify-center border-b-8 border-[var(--color-accent)] group">
        {/* Background Image with Interactive UI */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-black">
          <Image 
            src="/images/gallery/room-2.jpg"
            alt="Students Shelter Premium Hostel Room"
            fill
            className="object-cover object-bottom transition-transform duration-[2s] ease-out group-hover:scale-105 opacity-80"
            priority
          />
        </div>
        
        {/* Overlays for Readability */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80 transition-opacity duration-[1.5s] ease-out group-hover:opacity-90"></div>
        <div className="absolute inset-0 z-0 bg-[var(--color-primary)]/30 mix-blend-multiply"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center w-full mt-10">
          <span className="inline-block px-4 py-1.5 bg-black/40 backdrop-blur-md text-[var(--color-accent)] text-xs font-bold tracking-widest uppercase mb-8 rounded-full border border-white/10 shadow-lg">
            Premium Student Living
          </span>
          <h1 className="!text-white text-4xl md:text-5xl lg:text-7xl font-light tracking-tight mb-8 font-display leading-[1.1] drop-shadow-2xl">
            Hostels in Islamabad – <br className="hidden md:inline" /> Find Verified <br className="md:hidden" />
            <span className="font-semibold text-[var(--color-accent)]">
              Girls & Boys Hostels
            </span>
          </h1>
          <p className="!text-[#e5e5e5] text-base md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed font-light drop-shadow-md">
            Looking for the best hostels in Islamabad for students, job holders, or working professionals? Explore verified accommodation including girls and boys hostels with full facilities and safe living options.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 max-w-md mx-auto">
            <a
              href="#listings"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 bg-[var(--color-accent)] hover:bg-white hover:text-[var(--color-primary)] !text-white hover:!text-[var(--color-primary)] font-semibold rounded-lg shadow-xl hover:shadow-[0_0_25px_rgba(184,156,114,0.5)] transition-all min-h-[56px] tracking-wide hover:-translate-y-1"
            >
              Explore Hostels
            </a>
          </div>
        </div>
      </section>



      {/* Unified Locations Section (IMPORTANT: Kept as requested) */}
      <section id="listings" className="py-12 bg-[var(--color-bg)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[var(--color-text-primary)] mb-4 font-display">
              Popular Areas for Hostels in Islamabad
            </h2>
            <div className="w-16 h-1 bg-[var(--color-accent)] mx-auto mb-6 rounded-full"></div>
            <p className="text-[var(--color-text-muted)] text-base max-w-2xl mx-auto">
              We cover prime locations including I-8, I-9, I-10, I-11, H-8, H-9, and H-13 (near universities).
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {ALL_HOSTELS.map((hostel) => (
              <BranchCard key={hostel.id} hostel={hostel} />
            ))}
          </div>
        </div>
      </section>

      {/* ARTICLE CONTENT STRUCTURE EXCACTLY AS REQUESTED */}
      <section className="py-20 bg-white border-y border-[var(--color-border)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* OVERVIEW */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-display font-bold text-[var(--color-text-primary)] mb-4">
                Quick Overview of Hostels in Islamabad
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-primary)] mx-auto rounded-full"></div>
            </div>
            <InteractiveOverviewTable />
          </div>

          {/* WHAT ARE HOSTELS */}
          <div className="mb-20 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-[var(--color-text-primary)] mb-6">
              What Are Hostels in Islamabad?
            </h2>
            <p className="text-xl leading-relaxed text-gray-700 font-light">
              Hostels in Islamabad are shared or private accommodation spaces designed for students, job holders, interns, working professionals, and international visitors. These hostels offer monthly or daily stays with Wi-Fi, meals, laundry, and security.
            </p>
          </div>

          {/* INTERACTIVE HOSTEL TYPES UI */}
          <InteractiveHostelTypes />

          {/* PRICE */}
          <div className="mb-16 bg-[var(--color-primary)] text-white p-8 rounded-2xl shadow-md">
            <h2 className="text-2xl font-display font-bold text-[var(--color-accent)] mb-6">
              Monthly Hostel Rent in Islamabad
            </h2>
            <ul className="space-y-4 text-lg">
              <li className="flex items-center gap-3">
                <span className="w-3 h-3 bg-[var(--color-accent)] rounded-full"></span>
                <strong>Budget Hostels</strong> – Shared rooms
              </li>
              <li className="flex items-center gap-3">
                <span className="w-3 h-3 bg-[var(--color-accent)] rounded-full"></span>
                <strong>Mid-range Hostels</strong> – Furnished + meals
              </li>
              <li className="flex items-center gap-3">
                <span className="w-3 h-3 bg-[var(--color-accent)] rounded-full"></span>
                <strong>Premium Hostels</strong> – Private rooms
              </li>
            </ul>
          </div>

          {/* FAQ */}
          <div className="mb-16">
            <h2 className="text-3xl font-display font-bold text-[var(--color-text-primary)] mb-8 text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-xl border border-[var(--color-border)] shadow-sm">
                <h3 className="font-bold text-lg text-[var(--color-text-primary)] mb-2 flex items-start gap-3">
                  <HelpCircle className="w-6 h-6 text-[var(--color-accent)] shrink-0 mt-0.5" />
                  What are the best hostels in Islamabad?
                </h3>
                <p className="text-[var(--color-text-body)] pl-9">Best hostels depend on location, budget, and facilities near universities and offices.</p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-[var(--color-border)] shadow-sm">
                <h3 className="font-bold text-lg text-[var(--color-text-primary)] mb-2 flex items-start gap-3">
                  <HelpCircle className="w-6 h-6 text-[var(--color-accent)] shrink-0 mt-0.5" />
                  Are girls hostels in Islamabad safe?
                </h3>
                <p className="text-[var(--color-text-body)] pl-9">Yes, most include CCTV, security guards, and controlled access systems.</p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-[var(--color-border)] shadow-sm">
                <h3 className="font-bold text-lg text-[var(--color-text-primary)] mb-2 flex items-start gap-3">
                  <HelpCircle className="w-6 h-6 text-[var(--color-accent)] shrink-0 mt-0.5" />
                  What is the cost of boys hostel in Islamabad?
                </h3>
                <p className="text-[var(--color-text-body)] pl-9">It varies depending on room type and location but is generally affordable.</p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-[var(--color-border)] shadow-sm">
                <h3 className="font-bold text-lg text-[var(--color-text-primary)] mb-2 flex items-start gap-3">
                  <HelpCircle className="w-6 h-6 text-[var(--color-accent)] shrink-0 mt-0.5" />
                  Are hostels available near universities?
                </h3>
                <p className="text-[var(--color-text-body)] pl-9">Yes, especially near NUML, COMSATS, FAST, and other major universities.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Elegant CTA */}
      <section className="py-20 bg-[var(--color-primary)] text-center text-white border-t-4 border-[var(--color-accent)]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 font-display !text-white">
            Find the Best Hostels in Islamabad Today
          </h2>
          <p className="text-[#d6d3cd] text-lg mb-10 max-w-2xl leading-relaxed">
            Compare verified listings of hostels in Islamabad, girls hostel in Islamabad, and boys hostel in Islamabad.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#listings"
              className="inline-flex items-center justify-center px-8 py-4 bg-[var(--color-accent)] hover:bg-[#a38a65] text-white font-bold rounded shadow transition-all"
            >
              Browse Hostels
            </a>
            <WhatsAppButton
              whatsapp="923314343676"
              message="Hi, I would like to know more about Students Shelter Hostels."
              variant="default"
              className="!bg-transparent !border-2 !border-[var(--color-accent)] !text-white hover:!bg-white/10 !px-8 !py-4 !font-bold !rounded"
            >
              Contact on WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      </section>
    </>
  );
}
