'use client';

import { useState } from 'react';
import { BOYS_HOSTELS } from '@/lib/hostels';
import BranchCard from '@/components/ui/BranchCard';
import Breadcrumb from '@/components/seo/Breadcrumb';
import Link from 'next/link';
import { Filter, ArrowRight } from 'lucide-react';

export default function BoysHostelsClient() {
  const [areaFilter, setAreaFilter] = useState('All');

  const filteredHostels = areaFilter === 'All'
    ? BOYS_HOSTELS
    : BOYS_HOSTELS.filter(h => h.area.startsWith(areaFilter));

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Boys Hostels', href: null },
  ];

  return (
    <div className="min-h-screen bg-[var(--color-bg)] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={breadcrumbItems} />

        {/* Title Section */}
        <div className="bg-gradient-to-br from-[var(--color-boys-primary)] to-[var(--color-boys-accent)] rounded-3xl p-8 md:p-12 text-white shadow-lg mb-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 text-white leading-tight">
              Boys Hostels in Islamabad
            </h1>
            <p className="text-blue-100 text-base md:text-lg leading-relaxed">
              Safe, affordable, and centrally located student accommodation for boys in Islamabad. Direct access to Faizabad Metro Station, main universities, and commercial areas.
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white border border-[var(--color-border)] rounded-2xl p-4 md:p-5 shadow-sm mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-[var(--color-boys-accent)] shrink-0" />
            <span className="font-bold text-sm text-[var(--color-text-primary)]">Filter by Area:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {['All', 'I-8', 'I-11'].map((area) => (
              <button
                key={area}
                onClick={() => setAreaFilter(area)}
                className={`px-4 py-2 text-xs font-bold rounded-xl border transition-all ${
                  areaFilter === area
                    ? 'bg-[var(--color-boys-primary)] text-white border-[var(--color-boys-primary)] shadow-sm'
                    : 'bg-gray-50 text-[var(--color-text-body)] border-[var(--color-border)] hover:bg-gray-100'
                }`}
              >
                {area === 'All' ? 'All Areas' : `${area} Sector`}
              </button>
            ))}
          </div>
        </div>

        {/* Hostel Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {filteredHostels.map((hostel) => (
            <BranchCard key={hostel.id} hostel={hostel} />
          ))}
        </div>

        {/* SEO Text Block */}
        <div className="bg-white border border-[var(--color-border)] rounded-3xl p-6 md:p-10 shadow-sm mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-[var(--color-text-primary)] mb-4">
            Premium Boys Student Hostels in Islamabad
          </h2>
          <div className="prose prose-slate max-w-none text-sm md:text-base text-[var(--color-text-body)] space-y-4 leading-relaxed">
            <p>
              Finding the right boys hostel in Islamabad can be challenging, especially for students coming from other cities. At Students Shelter Hostels, we make this transition seamless by providing modern, secure, and highly comfortable living spaces tailored specifically for male university students and young professionals.
            </p>
            <p>
              Our boys branches are located in key sectors of Islamabad, including <strong>I-8/4 (Faizabad)</strong> and <strong>I-11/1</strong>. Each branch is carefully selected for its strategic location, providing easy access to major academic institutions like Quaid-e-Azam University, NUST, COMSATS, FAST, and others.
            </p>
            <p>
              All our branches offer single, double, and triple sharing rooms loaded with essential amenities: high-speed unlimited WiFi, 24/7 power backup, delicious daily meals, regular laundry services, dedicated study halls, and round-the-clock CCTV-monitored security. Parents can rest easy knowing their sons are staying in a safe, productive, and comfortable environment.
            </p>
          </div>

          <div className="border-t border-[var(--color-border)] mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-[var(--color-text-primary)]">Also Looking for Girls Hostels?</p>
              <p className="text-xs text-[var(--color-text-muted)]">We offer premium separate girls accommodation in I-8/3 Islamabad.</p>
            </div>
            <Link
              href="/girls-hostels"
              className="inline-flex items-center gap-1.5 px-5 py-3 border border-purple-200 text-purple-700 bg-purple-50 hover:bg-purple-100 rounded-xl text-xs font-bold transition-all min-h-[44px]"
            >
              Explore Girls Hostels
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
