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
  Info,
  MessageCircle
} from 'lucide-react';

export default function HomePage() {
  return (
    <>
      {/* Elegant Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-20 lg:pt-36 lg:pb-28 text-white min-h-[90vh] flex flex-col justify-center group"
        style={{ borderBottom: '8px solid #1B9E99' }}
      >
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
        <div className="absolute inset-0 z-0 transition-opacity duration-[1.5s] ease-out group-hover:opacity-90"
          style={{ background: 'linear-gradient(135deg, rgba(2,46,58,0.85) 0%, rgba(5,66,85,0.7) 35%, rgba(61,26,77,0.7) 75%, rgba(90,40,112,0.85) 100%)' }}
        ></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center w-full mt-10">
          <span className="inline-block px-4 py-1.5 bg-black/40 backdrop-blur-md text-white text-xs font-bold tracking-widest uppercase mb-8 rounded-full shadow-lg"
            style={{ border: '1px solid rgba(61,186,181,0.4)' }}
          >
            Premium Student Living
          </span>
          <h1 className="!text-white text-4xl md:text-5xl lg:text-7xl font-light tracking-tight mb-8 font-display leading-[1.1] drop-shadow-2xl">
            Hostels in Islamabad – <br className="hidden md:inline" /> Find Verified <br className="md:hidden" />
            <span className="font-semibold text-[#3DBAB5]">
              Girls & Boys Hostels
            </span>
          </h1>
          <p className="!text-[#e5e5e5] text-base md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed font-light drop-shadow-md">
            Looking for the best hostels in Islamabad for students, job holders, or working professionals? Explore verified accommodation including girls and boys hostels with full facilities and safe living options.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 max-w-lg mx-auto">
            <a
              href="/boys-hostels"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 !text-white font-semibold rounded-lg transition-all min-h-[56px] tracking-wide hover:-translate-y-1"
              style={{
                background: 'linear-gradient(135deg, #075A6D, #1B9E99)',
                boxShadow: '0 4px 20px rgba(27,158,153,0.45)',
              }}
            >
              🔵 Boys Hostels
            </a>
            <a
              href="/girls-hostels"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 !text-white font-semibold rounded-lg transition-all min-h-[56px] tracking-wide hover:-translate-y-1"
              style={{
                background: 'linear-gradient(135deg, #783893, #9C69AA)',
                boxShadow: '0 4px 20px rgba(156,105,170,0.45)',
              }}
            >
              🟣 Girls Hostels
            </a>
          </div>
        </div>
      </section>



      {/* Unified Locations Section (IMPORTANT: Kept as requested) */}
      <section id="listings" className="py-12 bg-[var(--color-bg)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[var(--teal-800)] mb-4 font-display">
              Popular Areas for Hostels in Islamabad
            </h2>
            <div className="w-16 h-1 mx-auto mb-6 rounded-full" style={{ background: 'linear-gradient(135deg, #1B9E99, #9C69AA)' }}></div>
            <p className="text-[var(--color-text-muted)] text-base max-w-2xl mx-auto">
              We cover prime locations including I-8, I-9, I-10, I-11, H-8, H-9, H-10, H-11, Faizabad, and H-13 (near universities).
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {ALL_HOSTELS.map((hostel) => (
              <BranchCard key={hostel.id} hostel={hostel} />
            ))}
          </div>

          {/* WhatsApp Catalogue Callout */}
          <div className="mt-16 bg-gradient-to-r from-emerald-50 to-green-50/30 border border-emerald-500/20 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm max-w-6xl mx-auto">
            <div className="flex items-center gap-4 text-center md:text-left flex-col md:flex-row">
              <div className="w-12 h-12 rounded-xl bg-emerald-500 flex items-center justify-center text-white shadow-md shadow-emerald-500/20 shrink-0">
                <MessageCircle className="w-6 h-6 fill-current" />
              </div>
              <div>
                <h4 className="text-lg font-extrabold text-slate-900">Want to see more options?</h4>
                <p className="text-sm text-slate-500 mt-0.5 font-medium">View our complete, detailed room catalog on WhatsApp for complete details and live availability.</p>
              </div>
            </div>
            <a
              href="https://wa.me/c/923314343676"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto px-6 py-3.5 rounded-xl text-sm font-extrabold text-white bg-emerald-500 hover:bg-emerald-600 transition-all hover:shadow-lg hover:shadow-emerald-500/20 active:scale-95 text-center shrink-0 flex items-center justify-center gap-2"
            >
              <span>View WhatsApp Catalogue</span>
              <span className="text-emerald-100 font-normal">→</span>
            </a>
          </div>

        </div>
      </section>

      {/* ARTICLE CONTENT STRUCTURE EXCACTLY AS REQUESTED */}
      <section className="py-20 bg-white border-y border-[var(--color-border)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* OVERVIEW */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-display font-bold text-[var(--teal-800)] mb-4">
                Quick Overview of Hostels in Islamabad
              </h2>
              <div className="w-24 h-1.5 mx-auto rounded-full" style={{ background: 'linear-gradient(135deg, #1B9E99, #9C69AA)' }}></div>
            </div>
            <InteractiveOverviewTable />
          </div>

          {/* WHAT ARE HOSTELS */}
          <div className="mb-20 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-[var(--teal-800)] mb-6">
              What Are Hostels in Islamabad?
            </h2>
            <p className="text-xl leading-relaxed text-gray-700 font-light">
              Hostels in Islamabad are shared or private accommodation spaces designed for students, job holders, interns, working professionals, and international visitors. These hostels offer monthly or daily stays with Wi-Fi, meals, laundry, and security.
            </p>
          </div>

          {/* INTERACTIVE HOSTEL TYPES UI */}
          <InteractiveHostelTypes />

          {/* PRICE / RENT TIERS */}
          <div className="mb-24 mt-12 text-center max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-[var(--teal-800)] mb-4">
                Monthly Hostel Rent in Islamabad
              </h2>
              <div className="w-24 h-1.5 mx-auto rounded-full" style={{ background: 'linear-gradient(135deg, #1B9E99, #9C69AA)' }}></div>
              <p className="mt-4 text-lg text-gray-600 font-medium">Choose the accommodation tier that best fits your lifestyle and budget.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-center">
              {/* Budget */}
              <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gray-200 group-hover:bg-[var(--teal-500)] transition-colors"></div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 font-display">Budget Hostels</h3>
                <div className="text-[var(--color-text-muted)] text-sm mb-6 font-medium">Affordable living for students</div>
                <div className="text-[var(--teal-700)] font-extrabold text-2xl mb-8 flex items-center justify-center bg-[var(--teal-50)] py-3 rounded-lg border border-[var(--teal-200)]">
                   Shared Rooms
                </div>
                <ul className="space-y-4 text-sm text-gray-700 text-left font-semibold">
                  <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-gray-400 shrink-0"></div> Double / Triple sharing</li>
                  <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-gray-400 shrink-0"></div> Essential basic amenities</li>
                  <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-gray-400 shrink-0"></div> Highly affordable monthly rent</li>
                </ul>
              </div>
              
              {/* Mid Range */}
              <div className="rounded-2xl p-8 shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden ring-4 ring-[var(--teal-400)]/30 ring-offset-4 scale-100 md:scale-105 z-10"
                style={{ background: 'linear-gradient(135deg, #075A6D, #054255)' }}
              >
                <div className="absolute top-0 right-0 text-white text-[10px] uppercase font-black tracking-widest px-4 py-1.5 rounded-bl-xl shadow-sm" style={{ background: '#1B9E99' }}>POPULAR</div>
                <h3 className="text-2xl font-bold !text-white mb-2 font-display">Mid-range Hostels</h3>
                <div className="text-gray-300 text-sm mb-6 font-medium">Best value for comfort</div>
                <div className="!text-[#3DBAB5] font-extrabold text-2xl mb-8 flex items-center justify-center bg-white/5 py-3 rounded-lg border border-white/10">
                   Furnished + Meals
                </div>
                <ul className="space-y-4 text-sm text-gray-100 text-left font-semibold">
                  <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[#3DBAB5] shrink-0"></div> 3 quality meals included</li>
                  <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[#3DBAB5] shrink-0"></div> Laundry & High-speed WiFi</li>
                  <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[#3DBAB5] shrink-0"></div> Excellent value for money</li>
                </ul>
              </div>
              
              {/* Premium */}
              <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gray-200 group-hover:bg-[var(--purple-500)] transition-colors"></div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 font-display">Premium Hostels</h3>
                <div className="text-[var(--color-text-muted)] text-sm mb-6 font-medium">Maximum privacy & comfort</div>
                <div className="text-[var(--purple-700)] font-extrabold text-2xl mb-8 flex items-center justify-center bg-[var(--purple-50)] py-3 rounded-lg border border-[var(--purple-200)]">
                   Private Rooms
                </div>
                <ul className="space-y-4 text-sm text-gray-700 text-left font-semibold">
                  <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-gray-400 shrink-0"></div> Single / Private occupancy</li>
                  <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-gray-400 shrink-0"></div> AC / Heating on demand</li>
                  <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-gray-400 shrink-0"></div> Exclusive premium services</li>
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-16">
            <h2 className="text-3xl font-display font-bold text-[var(--teal-800)] mb-8 text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-xl border border-[var(--color-border)] shadow-sm">
                <h3 className="font-bold text-lg text-[var(--color-text-primary)] mb-2 flex items-start gap-3">
                  <HelpCircle className="w-6 h-6 text-[var(--teal-500)] shrink-0 mt-0.5" />
                  What are the best hostels in Islamabad?
                </h3>
                <p className="text-[var(--color-text-body)] pl-9">Best hostels depend on location, budget, and facilities near universities and offices.</p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-[var(--color-border)] shadow-sm">
                <h3 className="font-bold text-lg text-[var(--color-text-primary)] mb-2 flex items-start gap-3">
                  <HelpCircle className="w-6 h-6 text-[var(--purple-500)] shrink-0 mt-0.5" />
                  Are girls hostels in Islamabad safe?
                </h3>
                <p className="text-[var(--color-text-body)] pl-9">Yes, most include CCTV, security guards, and controlled access systems.</p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-[var(--color-border)] shadow-sm">
                <h3 className="font-bold text-lg text-[var(--color-text-primary)] mb-2 flex items-start gap-3">
                  <HelpCircle className="w-6 h-6 text-[var(--teal-500)] shrink-0 mt-0.5" />
                  What is the cost of boys hostel in Islamabad?
                </h3>
                <p className="text-[var(--color-text-body)] pl-9">It varies depending on room type and location but is generally affordable.</p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-[var(--color-border)] shadow-sm">
                <h3 className="font-bold text-lg text-[var(--color-text-primary)] mb-2 flex items-start gap-3">
                  <HelpCircle className="w-6 h-6 text-[var(--purple-500)] shrink-0 mt-0.5" />
                  Are hostels available near universities?
                </h3>
                <p className="text-[var(--color-text-body)] pl-9">Yes, especially near NUML, COMSATS, FAST, and other major universities.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Elegant CTA */}
      <section className="py-20 text-center text-white"
        style={{
          background: 'linear-gradient(135deg, #022e3a 0%, #054255 40%, #3d1a4d 100%)',
          borderTop: '4px solid #1B9E99',
        }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 font-display !text-white">
            Find the Best Hostels in Islamabad Today
          </h2>
          <p className="text-[rgba(255,255,255,0.7)] text-lg mb-10 max-w-2xl leading-relaxed">
            Compare verified listings of hostels in Islamabad, girls hostel in Islamabad, and boys hostel in Islamabad.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#listings"
              className="inline-flex items-center justify-center px-8 py-4 text-white font-bold rounded shadow transition-all"
              style={{ background: 'linear-gradient(135deg, #1B9E99, #075A6D)' }}
            >
              Browse Hostels
            </a>
            <WhatsAppButton
              whatsapp="923314343676"
              message="Hi, I would like to know more about Students Shelter Hostels."
              variant="default"
              className="!bg-transparent !border-2 !border-[#3DBAB5] !text-white hover:!bg-white/10 !px-8 !py-4 !font-bold !rounded"
            >
              Contact on WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      </section>
    </>
  );
}
