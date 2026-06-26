import { notFound } from 'next/navigation';
import { ALL_HOSTELS, getHostelBySlug } from '@/lib/hostels';
import Breadcrumb from '@/components/seo/Breadcrumb';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import { MapPin, CheckCircle, Navigation, ShieldCheck, Map, Phone } from 'lucide-react';

export function generateStaticParams() {
  return ALL_HOSTELS.map((hostel) => ({
    type: hostel.type,
    slug: hostel.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { type, slug } = await params;
  const hostel = getHostelBySlug(type, slug);

  if (!hostel) {
    return {
      title: 'Location Not Found | Students Shelter',
    };
  }

  return {
    title: hostel.seo.title,
    description: hostel.seo.description,
  };
}

export default async function LocationPage({ params }) {
  const { type, slug } = await params;
  const hostel = getHostelBySlug(type, slug);

  if (!hostel) {
    notFound();
  }

  const isBoys = hostel.type === 'boys';
  const theme = {
    primary: isBoys ? '#075A6D' : '#783893',
    accent: isBoys ? '#1B9E99' : '#9C69AA',
    light: isBoys ? '#f0fafa' : '#faf5fc',
    border: isBoys ? '#a1e4e2' : '#dfc0eb',
    hoverBg: isBoys ? '#d0f2f1' : '#f0e2f7',
    gradient: isBoys ? 'linear-gradient(135deg, #075A6D, #1B9E99)' : 'linear-gradient(135deg, #783893, #9C69AA)',
    textPrimary: isBoys ? '#054255' : '#3d1a4d',
    textMuted: isBoys ? '#2A707F' : '#8B62A1'
  };

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Locations', href: '/#locations' },
    { label: hostel.branchLabel || hostel.name, href: '' },
  ];

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={breadcrumbItems} />

        <div className="bg-white rounded-3xl overflow-hidden animate-slide-up"
          style={{ border: `1px solid ${theme.border}` }}
        >
          {/* Header */}
          <div className="p-6 md:p-10 border-b" style={{ borderBottomColor: theme.border }}>
            <div className="flex flex-wrap items-start justify-between gap-6">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 text-xs font-bold rounded-full border uppercase tracking-wider"
                    style={{ background: theme.light, color: theme.primary, borderColor: theme.border }}
                  >
                    {hostel.type === 'boys' ? 'Boys Hostel' : 'Girls Hostel'}
                  </span>
                  {hostel.isGirlsOnly && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold rounded-full border uppercase tracking-wider"
                      style={{ background: '#f0e2f7', color: '#783893', borderColor: '#dfc0eb' }}
                    >
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Girls Only Secure
                    </span>
                  )}
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-3 leading-tight" style={{ color: '#054255' }}>
                  {hostel.name}
                  <span className="block text-xl md:text-2xl mt-2 font-semibold" style={{ color: theme.accent }}>
                    {hostel.branchLabel}
                  </span>
                </h1>
                <div className="flex items-start gap-2.5 text-[var(--color-text-body)] mt-4">
                  <MapPin className="w-5 h-5 shrink-0" style={{ color: theme.accent }} />
                  <p className="text-base md:text-lg">{hostel.fullAddress}</p>
                </div>
              </div>
              
              <div className="flex flex-col gap-3 min-w-[200px]">
                {hostel.whatsapp && (
                  <WhatsAppButton
                    whatsapp={hostel.whatsapp}
                    message={`Hi, I'm interested in ${hostel.name} (${hostel.branchLabel}). Please share room details and pricing.`}
                    className="w-full justify-center py-3.5 text-[15px]"
                  />
                )}
                {hostel.phone && (
                  <a
                    href={`tel:${hostel.phone.replace(/[^0-9]/g, '')}`}
                    className="inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-white border-2 font-semibold rounded-xl transition-all"
                    style={{ borderColor: theme.border, color: '#054255' }}
                  >
                    <Phone className="w-4 h-4" />
                    Call {hostel.phone}
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x"
            style={{ divideColor: theme.border }}
          >
            {/* Left Column - Details */}
            <div className="lg:col-span-2 p-6 md:p-10" style={{ background: 'var(--color-bg)' }}>
              
              {/* Amenities */}
              <div className="mb-10">
                <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-5 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" style={{ color: theme.accent }} />
                  Amenities & Facilities
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {hostel.amenities.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-white p-3 rounded-xl border" style={{ borderColor: theme.border }}>
                      <div className="w-2 h-2 rounded-full" style={{ background: theme.accent }} />
                      <span className="text-sm font-semibold text-[var(--color-text-body)]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Security Features */}
              {hostel.securityFeatures && hostel.securityFeatures.length > 0 && (
                <div className="mb-10">
                  <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-5 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5" style={{ color: theme.accent }} />
                    Security Features
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {hostel.securityFeatures.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3 bg-white p-3 rounded-xl border" style={{ borderColor: theme.border }}>
                        <ShieldCheck className="w-4 h-4 text-purple-600" />
                        <span className="text-sm font-semibold text-[var(--color-text-body)]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Directions & Landmarks */}
              <div>
                <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-5 flex items-center gap-2">
                  <Navigation className="w-5 h-5" style={{ color: theme.accent }} />
                  Location & Directions
                </h2>
                <div className="prose prose-sm max-w-none text-[var(--color-text-body)] mb-6">
                  <p className="font-medium">{hostel.directions}</p>
                </div>
                
                {hostel.nearbyLandmarks && hostel.nearbyLandmarks.length > 0 && (
                  <div className="space-y-3">
                    <h3 className="text-sm font-bold text-[var(--color-text-primary)] uppercase tracking-wider">Nearby Landmarks</h3>
                    <ul className="space-y-2">
                      {hostel.nearbyLandmarks.map((landmark, idx) => (
                        <li key={idx} className="flex items-start justify-between p-3 bg-white border rounded-lg" style={{ borderColor: theme.border }}>
                          <span className="text-sm font-semibold">{landmark.name}</span>
                          <span className="text-xs font-semibold px-2 py-1 rounded"
                            style={{ color: theme.primary, background: theme.light }}
                          >
                            {landmark.distance}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column - Map */}
            <div className="p-6 md:p-10 bg-white">
              <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-5 flex items-center gap-2">
                <Map className="w-5 h-5" style={{ color: theme.accent }} />
                Map View
              </h2>
              {hostel.mapEmbedSrc ? (
                <div className="rounded-xl overflow-hidden border h-[400px] lg:h-[calc(100%-3rem)] map-container" style={{ borderColor: theme.border }}>
                  <iframe
                    src={hostel.mapEmbedSrc}
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: '400px' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              ) : (
                <div className="h-[400px] flex items-center justify-center rounded-xl border" style={{ background: theme.light, borderColor: theme.border }}>
                  <p className="text-[var(--color-text-muted)] text-sm font-medium">Map currently unavailable</p>
                </div>
              )}
              
              <div className="mt-4">
                <a
                  href={hostel.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-4 py-3 text-sm font-semibold rounded-xl border transition-all"
                  style={{ background: theme.light, color: theme.primary, borderColor: theme.border }}
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
