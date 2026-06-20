import { GIRLS_HOSTELS } from '@/lib/hostels';
import Breadcrumb from '@/components/seo/Breadcrumb';
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema';
import BranchHero from '@/components/branch/BranchHero';
import BranchMap from '@/components/branch/BranchMap';
import BranchAmenities from '@/components/branch/BranchAmenities';
import BranchDirections from '@/components/branch/BranchDirections';
import BranchEnquiryForm from '@/components/branch/BranchEnquiryForm';
import BranchOtherLocations from '@/components/branch/BranchOtherLocations';
import StickyMobileBar from '@/components/branch/StickyMobileBar';
import GirlsSecurityBanner from '@/components/branch/GirlsSecurityBanner';
import Link from 'next/link';
import { ArrowRight, User, Users, Users2, ShieldCheck, Check, Heart, Phone } from 'lucide-react';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return GIRLS_HOSTELS.map((hostel) => ({
    slug: hostel.slug,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const hostel = GIRLS_HOSTELS.find((h) => h.slug === resolvedParams.slug);
  if (!hostel) return {};

  return {
    title: hostel.seo.title,
    description: hostel.seo.description,
    alternates: {
      canonical: `https://studentsshelter.com/girls-hostels/${hostel.slug}/`,
    },
  };
}

const roomIcons = {
  'single': User,
  'double': Users,
  'triple': Users2,
};

const roomInclusions = [
  'Unlimited High-Speed WiFi',
  'Daily Quality Meals (Three meals provided)',
  '24/7 Electricity Backup (UPS/Generator)',
  'Regular Room Cleaning & Professional Laundry',
  'Fully Furnished with Cupboard, Desk, & Mattresses',
];

export default async function GirlsBranchPage({ params }) {
  const resolvedParams = await params;
  const hostel = GIRLS_HOSTELS.find((h) => h.slug === resolvedParams.slug);

  if (!hostel) {
    notFound();
  }

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Girls Hostels', href: '/girls-hostels' },
    { label: hostel.branchLabel || hostel.area, href: null },
  ];

  return (
    <div className="min-h-screen bg-[var(--color-bg)] py-8 pb-20 md:pb-8">
      {/* Schema Injection */}
      <LocalBusinessSchema hostel={hostel} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={breadcrumbItems} />

        {/* Girls Security Header Banner */}
        <GirlsSecurityBanner securityFeatures={hostel.securityFeatures} />

        {/* Hero details card */}
        <BranchHero hostel={hostel} />

        {/* Map Embed */}
        <BranchMap hostel={hostel} />

        {/* Amenities grid */}
        <BranchAmenities amenities={hostel.amenities} type="girls" />

        {/* Written Directions & landmarks */}
        <BranchDirections
          directions={hostel.directions}
          nearbyLandmarks={hostel.nearbyLandmarks}
          type="girls"
        />

        {/* For Parents Section */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-100 rounded-2xl p-6 shadow-sm mb-8">
          <h3 className="text-lg md:text-xl font-bold text-[var(--color-text-primary)] mb-3 flex items-center gap-2">
            <Heart className="w-5 h-5 text-purple-600 shrink-0" />
            A Note for Parents
          </h3>
          <p className="text-sm text-[var(--color-text-body)] leading-relaxed mb-4">
            We understand that choosing student accommodation for your daughter is a serious decision that requires utmost trust. Our girls hostels are managed under strict guidelines, employing dedicated female wardens on-premises. The safety, hygiene, and comfortable studying environment of our residents is our top concern.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-semibold text-[var(--color-text-muted)]">Want to arrange a visit or discuss details?</span>
            <a
              href="tel:03314343676"
              className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-xs font-extrabold shadow transition-all min-h-[40px]"
            >
              <Phone className="w-3.5 h-3.5 shrink-0" />
              Call Parents Hotline: 0331-4343676
            </a>
          </div>
        </div>

        {/* Room Types Available */}
        <div className="bg-white border border-[var(--color-border)] rounded-2xl p-5 md:p-6 shadow-sm mb-8">
          <h3 className="text-lg md:text-xl font-bold text-[var(--color-text-primary)] mb-4 flex items-center gap-2">
            <Users className="w-5 h-5 text-purple-600 shrink-0" />
            Room Types Available
          </h3>
          <div className="grid sm:grid-cols-3 gap-4 mb-6">
            {[
              { id: 'single', name: 'Single Room', occupancy: '1 Person', priceNote: 'Contact for pricing' },
              { id: 'double', name: 'Double Sharing', occupancy: '2 Persons', priceNote: 'Contact for pricing' },
              { id: 'triple', name: 'Triple Sharing', occupancy: '3 Persons', priceNote: 'Contact for pricing' },
            ].map((room) => {
              const Icon = roomIcons[room.id];
              return (
                <div key={room.id} className="border border-[var(--color-border)] rounded-xl p-4 bg-gray-50/50 flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-purple-700 mb-3">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-bold text-[var(--color-text-primary)] mb-0.5">{room.name}</h4>
                    <span className="inline-block text-[10px] bg-purple-50 text-purple-700 border border-purple-100 font-semibold px-2 py-0.5 rounded-full mb-3">
                      {room.occupancy}
                    </span>
                  </div>
                  <p className="text-xs text-[var(--color-text-muted)] font-medium pt-2 border-t border-gray-100">{room.priceNote}</p>
                </div>
              );
            })}
          </div>

          <div className="bg-purple-50 border border-[var(--color-girls-border)] rounded-xl p-4">
            <h4 className="text-xs font-bold text-[var(--color-girls-primary)] uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-purple-600" />
              Standard Room Inclusions
            </h4>
            <ul className="grid sm:grid-cols-2 gap-2 text-xs text-[var(--color-text-body)]">
              {roomInclusions.map((inc) => (
                <li key={inc} className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-green-600 shrink-0" />
                  <span>{inc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Enquiry form */}
        <BranchEnquiryForm branchName={hostel.branchLabel || hostel.area} hostelType="girls" />

        {/* Other sibling branches */}
        <BranchOtherLocations currentHostel={hostel} allHostels={GIRLS_HOSTELS} />

        {/* Cross link to boys */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-bold text-[var(--color-text-primary)] text-sm mb-0.5">Looking for Boys Hostels in Islamabad?</h4>
            <p className="text-xs text-[var(--color-text-muted)]">We offer 3 separate boys branches near major transit corridors.</p>
          </div>
          <Link
            href="/boys-hostels"
            className="inline-flex items-center gap-1.5 px-4 py-2 border border-blue-200 bg-white hover:bg-blue-50 text-blue-700 text-xs font-bold rounded-xl transition-all min-h-[40px] shrink-0"
          >
            See Boys Branches
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Sticky Bottom Bar on Mobile */}
      <StickyMobileBar hostel={hostel} />
    </div>
  );
}
