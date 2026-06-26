'use client';

import { useState } from 'react';
import { GIRLS_HOSTELS } from '@/lib/hostels';
import BranchCard from '@/components/ui/BranchCard';
import Breadcrumb from '@/components/seo/Breadcrumb';
import Link from 'next/link';
import { Filter, ArrowRight, ShieldCheck } from 'lucide-react';

export default function GirlsHostelsClient() {
  const [areaFilter, setAreaFilter] = useState('All');

  const filteredHostels = areaFilter === 'All'
    ? GIRLS_HOSTELS
    : GIRLS_HOSTELS.filter(h => h.area.startsWith(areaFilter));

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Girls Hostels', href: null },
  ];

  return (
    <div className="min-h-screen bg-[var(--color-bg)] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={breadcrumbItems} />

        {/* Title Section */}
        <div className="bg-gradient-to-br from-[var(--color-girls-primary)] to-[var(--color-girls-accent)] rounded-3xl p-8 md:p-12 text-white shadow-lg mb-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 !text-white leading-tight">
              Girls Hostels in Islamabad
            </h1>
            <p className="text-purple-100 text-base md:text-lg leading-relaxed">
              Premium, highly secure separate student hostels for girls in Islamabad. Situated in sector I-8/3, offering female staff and robust security options for complete peace of mind.
            </p>
          </div>
        </div>

        {/* Girls Security Note Banner */}
        <div className="bg-purple-100 border-2 border-[var(--color-girls-border)] rounded-2xl p-5 mb-8 flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-purple-200 flex items-center justify-center text-[var(--color-girls-primary)] shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-extrabold text-[var(--color-text-primary)] text-sm mb-0.5">
              Why Parents Trust Us: Complete Girls Security
            </h3>
            <p className="text-xs text-[var(--color-text-body)] leading-relaxed">
              We employ female managers and wardens at our girls branches. The facilities are guarded 24/7, covered by CCTV security, and visitors are strictly monitored.
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white border border-[var(--color-border)] rounded-2xl p-4 md:p-5 shadow-sm mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-[var(--color-girls-accent)] shrink-0" />
            <span className="font-bold text-sm text-[var(--color-text-primary)]">Filter by Area:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {['All', 'I-8'].map((area) => (
              <button
                key={area}
                onClick={() => setAreaFilter(area)}
                className={`px-4 py-2 text-xs font-bold rounded-xl border transition-all ${
                  areaFilter === area
                    ? 'bg-[var(--color-girls-primary)] text-white border-[var(--color-girls-primary)] shadow-sm'
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
            Safe & Comfortable Girls Student Hostels in Islamabad
          </h2>
          <div className="prose prose-slate max-w-none text-sm md:text-base text-[var(--color-text-body)] space-y-4 leading-relaxed">
            <p>
              Students Shelter Hostels provides fully furnished, separate girls hostels in Islamabad. Recognizing that safety, cleanliness, and proximity are top concerns for female students and their parents, our branches are managed to satisfy the highest standards.
            </p>
            <p>
              Our girls hostels are situated in <strong>I-8/3, Islamabad</strong>, a highly respectable, green, and peaceful sector. Being in I-8 offers quick access to the Faizabad Metro Station, placing universities like Quaid-e-Azam University, COMSATS, FAST, and Iqra University within easy commuting distance.
            </p>
            <p>
              We pride ourselves on offering a comprehensive service. This includes clean lodging rooms (single, double, or triple sharing), three high-quality daily meals, laundry, professional housecleaning, backup generators, and female wardens who monitor residents and guarantee order and security.
            </p>
          </div>

          <div className="border-t border-[var(--color-border)] mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-[var(--color-text-primary)]">Looking for Boys Hostels instead?</p>
              <p className="text-xs text-[var(--color-text-muted)]">We have 3 branches in I-8 and I-11 sectors for male students.</p>
            </div>
            <Link
              href="/boys-hostels"
              className="inline-flex items-center gap-1.5 px-5 py-3 border border-blue-200 text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-xl text-xs font-bold transition-all min-h-[44px]"
            >
              Explore Boys Hostels
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
