import { BOYS_HOSTELS } from '@/lib/hostels';
import Breadcrumb from '@/components/seo/Breadcrumb';
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema';
import BranchHero from '@/components/branch/BranchHero';
import BranchMap from '@/components/branch/BranchMap';
import RoomsSection from '@/components/branch/RoomsSection';
import BranchAmenities from '@/components/branch/BranchAmenities';
import BranchDirections from '@/components/branch/BranchDirections';
import BranchEnquiryForm from '@/components/branch/BranchEnquiryForm';
import BranchOtherLocations from '@/components/branch/BranchOtherLocations';
import BranchFAQ from '@/components/branch/BranchFAQ';
import StickyMobileBar from '@/components/branch/StickyMobileBar';
import Link from 'next/link';
import { ArrowRight, User, Users, Users2, ShieldCheck, Check } from 'lucide-react';
import { notFound } from 'next/navigation';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://studentsshelterhostels.vercel.app';

export async function generateStaticParams() {
  return BOYS_HOSTELS.map((hostel) => ({
    slug: hostel.slug,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const hostel = BOYS_HOSTELS.find((h) => h.slug === resolvedParams.slug);
  if (!hostel) return {};

  return {
    title: hostel.seo.title,
    description: hostel.seo.description,
    keywords: hostel.seo.keywords,
    alternates: {
      canonical: `${SITE_URL}/boys-hostels/${hostel.slug}`,
    },
    openGraph: {
      title: hostel.seo.ogTitle || hostel.seo.title,
      description: hostel.seo.ogDescription || hostel.seo.description,
      url: `${SITE_URL}/boys-hostels/${hostel.slug}`,
      type: 'website',
      locale: 'en_PK',
      siteName: 'Students Shelter Hostels',
    },
    twitter: {
      card: 'summary',
      title: hostel.seo.title,
      description: hostel.seo.description,
    },
  };
}

const roomIcons = {
  'single': User,
  'double': Users,
  'triple': Users2,
};

const roomColors = {
  'single': 'border-blue-200 bg-[#f0fafa]/50 text-[#075A6D] font-bold',
  'double': 'border-[#dfc0eb] bg-purple-50/50 text-[#783893] font-bold',
  'triple': 'border-green-200 bg-green-50/50 text-green-700 font-bold',
};

const roomInclusions = [
  'Unlimited High-Speed WiFi',
  'Daily Delicious Meals (Breakfast + Dinner)',
  '24/7 Electricity Backup (UPS/Generator)',
  'Regular Room Cleaning & Laundry',
  'Fully Furnished with Cupboard & Desk',
];

export default async function BoysBranchPage({ params }) {
  const resolvedParams = await params;
  const hostel = BOYS_HOSTELS.find((h) => h.slug === resolvedParams.slug);

  if (!hostel) {
    notFound();
  }

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Boys Hostels', href: '/boys-hostels' },
    { label: hostel.branchLabel || hostel.area, href: null },
  ];

  return (
    <div className="min-h-screen bg-[var(--color-bg)] py-8 pb-20 md:pb-8">
      {/* Schema Injection */}
      <LocalBusinessSchema hostel={hostel} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={breadcrumbItems} />

        {/* Hero details card */}
        <BranchHero hostel={hostel} />

        {/* Map Embed */}
        <BranchMap hostel={hostel} />

        {/* Rooms & Pricing section */}
        <RoomsSection branchSlug={hostel.slug} />

        {/* Amenities grid */}
        <BranchAmenities amenities={hostel.amenities} type="boys" />

        {/* Written Directions & landmarks */}
        <BranchDirections
          directions={hostel.directions}
          nearbyLandmarks={hostel.nearbyLandmarks}
          type="boys"
        />



        {/* Enquiry form */}
        <BranchEnquiryForm branchName={hostel.branchLabel || hostel.area} hostelType="boys" />

        {/* FAQ Section */}
        <BranchFAQ faqs={hostel.faqs} type="boys" />

        {/* Other sibling branches */}
        <BranchOtherLocations currentHostel={hostel} allHostels={BOYS_HOSTELS} />

        {/* Cross link to girls */}
        <div className="bg-gradient-to-r from-[#faf5fc] to-[#f0e2f7] border border-[#dfc0eb] rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-bold text-[var(--color-text-primary)] text-sm mb-0.5">Looking for Girls Hostels in Islamabad?</h4>
            <p className="text-xs text-[var(--color-text-muted)]">We offer premium separate girls branches with active female staff management.</p>
          </div>
          <Link
            href="/girls-hostels"
            className="inline-flex items-center gap-1.5 px-4 py-2 border border-[#dfc0eb] bg-white hover:bg-[#faf5fc] text-[#783893] text-xs font-bold rounded-xl transition-all min-h-[40px] shrink-0"
          >
            See Girls Branches
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Sticky Bottom Bar on Mobile */}
      <StickyMobileBar hostel={hostel} />
    </div>
  );
}

