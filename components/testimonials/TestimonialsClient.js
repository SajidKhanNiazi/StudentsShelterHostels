'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Home, Shield, Phone, MessageCircle, ChevronRight, Check } from 'lucide-react';
import Breadcrumb from '@/components/seo/Breadcrumb';

export default function TestimonialsClient({ testimonials }) {
  const [genderFilter, setGenderFilter] = useState('all'); // 'all' | 'boys' | 'girls'
  const [branchFilter, setBranchFilter] = useState('all'); // 'all' | slug

  // Unique list of branches for the dropdown
  const branches = [
    { name: 'All Branches', slug: 'all' },
    { name: 'I-8/4 Faizabad Branch', slug: 'i-8-4-faizabad' },
    { name: 'I-11/1 Boys Branch', slug: 'i-11-1' },
    { name: 'I-8/4 Main Branch', slug: 'i-8-4-main' },
    { name: 'I-8/3 Branch 1', slug: 'i-8-3-branch-1' },
    { name: 'I-8/3 Branch 2', slug: 'i-8-3-branch-2' },
    { name: 'I-11/1 Girls Branch', slug: 'i-11-1-girls' },
  ];

  const filtered = testimonials.filter((t) => {
    const genderMatch = genderFilter === 'all' || t.gender === genderFilter;
    const branchMatch = branchFilter === 'all' || t.branchSlug === branchFilter;
    return genderMatch && branchMatch;
  });

  return (
    <div className="min-h-screen bg-[#f8fafc] py-8">
      {/* Breadcrumb section */}
      <div className="max-w-6xl mx-auto px-4">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Testimonials' },
          ]}
        />
      </div>

      {/* Page Hero */}
      <div 
        className="w-full text-white py-16 md:py-24 mb-12 relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #022e3a 0%, #054255 35%, #3d1a4d 75%, #5A2870 100%)',
        }}
      >
        {/* Abstract background light circles */}
        <div className="absolute top-[-50px] right-[-50px] w-96 h-96 rounded-full bg-[#1B9E99]/10 blur-3xl" />
        <div className="absolute bottom-[-50px] left-[-50px] w-96 h-96 rounded-full bg-[#9C69AA]/10 blur-3xl" />

        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[#3DBAB5] text-xs font-bold mb-6">
            <Star className="w-3.5 h-3.5 fill-[#3DBAB5]" />
            Verified Student Reviews
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold font-display mb-6 tracking-tight">
            Student Reviews & Testimonials
          </h1>
          <p className="text-gray-200 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Hear from 100+ students and parents who call Students Shelter home across our 5 branches in Islamabad.
          </p>

          {/* Aggregate Rating Bar */}
          <div className="max-w-md mx-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-xl">
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-2xl font-bold text-white">4.8 / 5</span>
            </div>
            <p className="text-xs text-gray-300 font-medium mb-4">
              Based on 24 verified student reviews
            </p>
            <div className="space-y-1.5 text-xs text-left max-w-[240px] mx-auto">
              <div className="flex items-center gap-2">
                <span className="w-14 text-gray-300 font-semibold">5 Stars</span>
                <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-400 rounded-full" style={{ width: '75%' }} />
                </div>
                <span className="w-4 text-right text-gray-300 font-medium">18</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-14 text-gray-300 font-semibold">4 Stars</span>
                <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-400 rounded-full" style={{ width: '20%' }} />
                </div>
                <span className="w-4 text-right text-gray-300 font-medium">5</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-14 text-gray-300 font-semibold">3 Stars</span>
                <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-400 rounded-full" style={{ width: '5%' }} />
                </div>
                <span className="w-4 text-right text-gray-300 font-medium">1</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Row Section */}
      <div className="sticky top-[80px] md:top-[96px] z-30 bg-white border-b border-gray-200 shadow-sm transition-all duration-300 mb-10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Gender Filter Buttons */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0">
            <button
              onClick={() => setGenderFilter('all')}
              className={`px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-200 ${
                genderFilter === 'all'
                  ? 'bg-[#075A6D] text-white shadow-md'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
            >
              All Reviews
            </button>
            <button
              onClick={() => setGenderFilter('boys')}
              className={`px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-200 flex items-center gap-1.5 ${
                genderFilter === 'boys'
                  ? 'bg-[#1B9E99] text-white shadow-md'
                  : 'bg-gray-100 hover:bg-gray-200 text-[#075A6D]'
              }`}
            >
              🔵 Boys Hostels
            </button>
            <button
              onClick={() => setGenderFilter('girls')}
              className={`px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-200 flex items-center gap-1.5 ${
                genderFilter === 'girls'
                  ? 'bg-[#9C69AA] text-white shadow-md'
                  : 'bg-gray-100 hover:bg-gray-200 text-[#783893]'
              }`}
            >
              🟣 Girls Hostels
            </button>
          </div>

          {/* Branch Select Filter */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Select Branch:</span>
            <select
              value={branchFilter}
              onChange={(e) => setBranchFilter(e.target.value)}
              className="bg-white border border-gray-300 rounded-xl px-4 py-2.5 text-xs font-bold text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#1B9E99]"
            >
              {branches.map((b) => (
                <option key={b.slug} value={b.slug}>
                  {b.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Review Count Info */}
      <div className="max-w-6xl mx-auto px-4 mb-6">
        <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">
          Showing {filtered.length} verified review{filtered.length !== 1 && 's'}
        </p>
      </div>

      {/* Review Cards Grid */}
      <div className="max-w-6xl mx-auto px-4 mb-16">
        {filtered.length === 0 ? (
          <div className="bg-white border border-gray-200 rounded-2xl py-16 px-4 text-center">
            <p className="text-gray-500 font-medium mb-2">No reviews match your filter selection.</p>
            <button
              onClick={() => {
                setGenderFilter('all');
                setBranchFilter('all');
              }}
              className="text-xs font-bold text-[#1B9E99] hover:underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((t, idx) => {
                const isBoys = t.gender === 'boys';
                const ratingArray = [...Array(5)].map((_, i) => i < t.rating);
                return (
                  <motion.div
                    key={t.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm flex flex-col justify-between card-hover relative"
                    style={{
                      borderTop: isBoys ? '3px solid #1B9E99' : '3px solid #9C69AA',
                    }}
                  >
                    <div>
                      {/* Top Badges */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span
                          className={`text-[9px] font-extrabold uppercase px-2.5 py-1 rounded-full ${
                            isBoys ? 'bg-[#d0f2f1] text-[#075A6D]' : 'bg-[#f0e2f7] text-[#783893]'
                          }`}
                        >
                          {isBoys ? '🔵 Boys Hostel' : '🟣 Girls Hostel'}
                        </span>
                        <span className="text-[9px] font-extrabold uppercase bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">
                          📍 {t.branch.split(' Branch')[0]}
                        </span>
                        {t.parentNote && (
                          <span className="text-[9px] font-extrabold uppercase bg-amber-50 border border-amber-100 text-amber-700 px-2.5 py-1 rounded-full flex items-center gap-0.5">
                            👨‍👩‍👧 Parent Approved
                          </span>
                        )}
                      </div>

                      {/* Stars */}
                      <div className="flex gap-0.5 mb-4">
                        {ratingArray.map((isFilled, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              isFilled ? 'fill-amber-400 text-amber-400' : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>

                      {/* Review Text */}
                      <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed mb-6">
                        &ldquo;{t.review}&rdquo;
                      </p>

                      {/* Highlight quote pill */}
                      <div
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border mb-6 text-xs italic font-medium ${
                          isBoys
                            ? 'bg-[#f0fafa] border-[#a1e4e2] text-[#075A6D]'
                            : 'bg-[#faf5fc] border-[#dfc0eb] text-[#783893]'
                        }`}
                      >
                        <span>💬</span> &ldquo;{t.highlight}&rdquo;
                      </div>
                    </div>

                    {/* Author block */}
                    <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between gap-4">
                      <div>
                        <h3 className="font-extrabold text-sm text-[var(--color-text-primary)]">
                          {t.name}
                        </h3>
                        <p className="text-[11px] text-[var(--color-text-muted)] font-medium mt-0.5">
                          {t.university} &middot; {t.stayDuration} stay
                        </p>
                      </div>
                      <Link
                        href={`/${t.gender}-hostels/${t.branchSlug}`}
                        className="text-[11px] font-bold text-[#1B9E99] hover:underline flex items-center gap-0.5 whitespace-nowrap"
                      >
                        View Branch <ChevronRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        )}
      </div>

      {/* For Parents Section */}
      <div className="max-w-6xl mx-auto px-4 mb-16">
        <div
          className="rounded-2xl border p-8 shadow-sm"
          style={{
            background: 'linear-gradient(135deg, #faf5fc 0%, #f0e2f7 100%)',
            borderColor: '#dfc0eb',
          }}
        >
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Left Info Column */}
            <div className="lg:col-span-7">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-[#dfc0eb] mb-6">
                <Shield className="w-7 h-7 text-[#783893]" />
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#3d1a4d] mb-4 font-display">
                A Word for Parents
              </h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                We understand that choosing hostel accommodation for your son or daughter is a serious decision. You are welcome to visit any of our branches before making a decision. Our management team will personally show you the facilities, introduce you to the warden, and answer every question you have. No appointment needed — just call.
              </p>
            </div>

            {/* Right Call-to-action Column */}
            <div className="lg:col-span-5 space-y-6">
              {/* Call card */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#dfc0eb] flex flex-col items-center text-center">
                <p className="text-xs font-bold text-[#783893] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Phone className="w-4 h-4" /> Call to arrange a visit
                </p>
                <a
                  href="tel:03314343676"
                  className="text-2xl font-extrabold text-[#3d1a4d] hover:text-[#783893] transition-colors mb-4 block"
                >
                  0331-4343676
                </a>
                <div className="flex gap-2 w-full justify-center">
                  <a
                    href="tel:03314343676"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-[#783893] to-[#9C69AA] text-white text-xs font-bold rounded-xl hover:shadow-md transition-all min-h-[44px]"
                  >
                    Call Now
                  </a>
                  <a
                    href="https://wa.me/923314343676?text=Hi%2C%20I%20am%20a%20parent%20and%20want%20to%20arrange%20a%20visit%20to%20your%20hostel."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#16a34a] text-white text-xs font-bold rounded-xl hover:bg-[#15803d] transition-all min-h-[44px]"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" /> WhatsApp
                  </a>
                </div>
              </div>

              {/* Checklist */}
              <div className="space-y-2.5">
                {[
                  'Female staff at all girls branches',
                  'CCTV cameras throughout the premises',
                  'Secure entry gate with warden verification',
                  'Parent visits welcome anytime',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs font-bold text-[#5A2870]">
                    <div className="w-4 h-4 rounded-full bg-[#f0e2f7] border border-[#dfc0eb] flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-[#783893]" />
                    </div>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Leave a Review CTA */}
      <div className="max-w-6xl mx-auto px-4 mb-16">
        <div
          className="rounded-2xl py-12 px-6 md:px-12 text-center text-white relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #075A6D 0%, #1B9E99 100%)',
          }}
        >
          <div className="absolute top-[-50px] left-[-50px] w-84 h-84 rounded-full bg-white/5 blur-2xl" />
          <div className="max-w-2xl mx-auto relative z-10">
            <h2 className="text-xl md:text-3xl font-extrabold font-display mb-4">
              Are you a current or past student at Students Shelter?
            </h2>
            <p className="text-teal-100 text-xs md:text-sm mb-8">
              Share your experience and help other students make the right decision.
            </p>
            <a
              href="https://wa.me/923314343676?text=Hi%2C%20I%27d%20like%20to%20share%20my%20review%20of%20Students%20Shelter%20Hostel..."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#16a34a] hover:bg-[#15803d] text-white font-bold text-xs md:text-sm rounded-xl transition-all shadow-md hover:shadow-lg active:scale-95 min-h-[48px]"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              Share your review on WhatsApp
            </a>
            <p className="text-[10px] text-teal-200 mt-4 font-medium uppercase tracking-wider">
              We publish reviews with your permission only.
            </p>
          </div>
        </div>
      </div>

      {/* Review summary stats bar */}
      <div className="border-t border-gray-200 bg-white py-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100">
            <div className="pt-4 md:pt-0">
              <p className="text-2xl md:text-3xl font-extrabold text-[#075A6D]">4.8★</p>
              <p className="text-[10px] font-bold text-[var(--color-text-muted)] uppercase tracking-widest mt-1">
                Average Rating
              </p>
            </div>
            <div className="pt-4 md:pt-0">
              <p className="text-2xl md:text-3xl font-extrabold text-[#075A6D]">24</p>
              <p className="text-[10px] font-bold text-[var(--color-text-muted)] uppercase tracking-widest mt-1">
                Verified Reviews
              </p>
            </div>
            <div className="pt-4 md:pt-0">
              <p className="text-2xl md:text-3xl font-extrabold text-[#075A6D]">5</p>
              <p className="text-[10px] font-bold text-[var(--color-text-muted)] uppercase tracking-widest mt-1">
                Branches
              </p>
            </div>
            <div className="pt-4 md:pt-0">
              <p className="text-2xl md:text-3xl font-extrabold text-[#075A6D]">100+</p>
              <p className="text-[10px] font-bold text-[var(--color-text-muted)] uppercase tracking-widest mt-1">
                Students Housed
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
