import { GIRLS_HOSTELS } from '@/lib/hostels';
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
import GirlsSecurityBanner from '@/components/branch/GirlsSecurityBanner';
import Link from 'next/link';
import { ArrowRight, User, Users, Users2, ShieldCheck, Check, Heart, Phone } from 'lucide-react';
import { notFound } from 'next/navigation';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://studentsshelterhostels.vercel.app';

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
    keywords: hostel.seo.keywords,
    alternates: {
      canonical: `${SITE_URL}/girls-hostels/${hostel.slug}`,
    },
    openGraph: {
      title: hostel.seo.ogTitle || hostel.seo.title,
      description: hostel.seo.ogDescription || hostel.seo.description,
      url: `${SITE_URL}/girls-hostels/${hostel.slug}`,
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

        {/* Rooms & Pricing section */}
        <RoomsSection branchSlug={hostel.slug} />

        {/* Amenities grid */}
        <BranchAmenities amenities={hostel.amenities} type="girls" />

        {/* Written Directions & landmarks */}
        <BranchDirections
          directions={hostel.directions}
          nearbyLandmarks={hostel.nearbyLandmarks}
          type="girls"
        />

        {/* For Parents Section */}
        <div className="bg-gradient-to-r from-[#faf5fc] to-[#f0e2f7] border-2 border-[#dfc0eb] rounded-2xl p-6 shadow-sm mb-8">
          <h3 className="text-lg md:text-xl font-bold text-[var(--color-text-primary)] mb-3 flex items-center gap-2">
            <Heart className="w-5 h-5 text-[#9C69AA] shrink-0" />
            A Note for Parents
          </h3>
          <p className="text-sm text-[var(--color-text-body)] leading-relaxed mb-4">
            We understand that choosing student accommodation for your daughter is a serious decision that requires utmost trust. Our girls hostels are managed under strict guidelines, employing dedicated female wardens on-premises. The safety, hygiene, and comfortable studying environment of our residents is our top concern.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-semibold text-[var(--color-text-muted)]">Want to arrange a visit or discuss details?</span>
            <a
              href="tel:03314343676"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#783893] hover:bg-[#5A2870] text-white rounded-xl text-xs font-extrabold shadow transition-all min-h-[40px]"
            >
              <Phone className="w-3.5 h-3.5 shrink-0" />
              Call Parents Hotline: 0331-4343676
            </a>
          </div>
        </div>



        {/* Enquiry form */}
        <BranchEnquiryForm branchName={hostel.branchLabel || hostel.area} hostelType="girls" />

        {/* FAQ Section */}
        <BranchFAQ faqs={hostel.faqs} type="girls" />

        {/* Other sibling branches */}
        <BranchOtherLocations currentHostel={hostel} allHostels={GIRLS_HOSTELS} />

        {/* Cross link to boys */}
        <div className="bg-gradient-to-r from-[#f0fafa] to-[#d0f2f1] border border-[#a1e4e2] rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-bold text-[var(--color-text-primary)] text-sm mb-0.5">Looking for Boys Hostels in Islamabad?</h4>
            <p className="text-xs text-[var(--color-text-muted)]">We offer 3 separate boys branches near major transit corridors.</p>
          </div>
          <Link
            href="/boys-hostels"
            className="inline-flex items-center gap-1.5 px-4 py-2 border border-[#a1e4e2] bg-white hover:bg-[#f0fafa] text-[#075A6D] text-xs font-bold rounded-xl transition-all min-h-[40px] shrink-0"
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

