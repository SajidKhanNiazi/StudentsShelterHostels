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

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Locations', href: '/#locations' },
    { label: hostel.branchLabel || hostel.name, href: '' },
  ];

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={breadcrumbItems} />

        <div className="bg-white rounded-3xl border border-[var(--color-border)] shadow-sm overflow-hidden animate-slide-up">
          {/* Header */}
          <div className="p-6 md:p-10 border-b border-[var(--color-border)]">
            <div className="flex flex-wrap items-start justify-between gap-6">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-[var(--color-light)] text-[var(--color-primary)] text-xs font-bold rounded-full border border-[var(--color-border)] uppercase tracking-wider">
                    {hostel.type === 'boys' ? 'Boys Hostel' : 'Girls Hostel'}
                  </span>
                  {hostel.isGirlsOnly && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-purple-50 text-purple-700 text-xs font-bold rounded-full border border-purple-100 uppercase tracking-wider">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Girls Only Secure
                    </span>
                  )}
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-3 leading-tight">
                  {hostel.name}
                  <span className="block text-xl md:text-2xl text-[var(--color-accent)] mt-2">
                    {hostel.branchLabel}
                  </span>
                </h1>
                <div className="flex items-start gap-2.5 text-[var(--color-text-body)] mt-4">
                  <MapPin className="w-5 h-5 shrink-0 text-[var(--color-accent)]" />
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
                    className="inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-white border-2 border-[var(--color-border)] text-[var(--color-text-primary)] font-semibold rounded-xl hover:border-[var(--color-primary)] transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    Call {hostel.phone}
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-[var(--color-border)]">
            {/* Left Column - Details */}
            <div className="lg:col-span-2 p-6 md:p-10 bg-[var(--color-bg)]">
              
              {/* Amenities */}
              <div className="mb-10">
                <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-5 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[var(--color-accent)]" />
                  Amenities & Facilities
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {hostel.amenities.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-white p-3 rounded-xl border border-[var(--color-border)]">
                      <div className="w-2 h-2 rounded-full bg-[var(--color-accent)]" />
                      <span className="text-sm font-medium text-[var(--color-text-body)]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Security Features */}
              {hostel.securityFeatures && hostel.securityFeatures.length > 0 && (
                <div className="mb-10">
                  <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-5 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-[var(--color-accent)]" />
                    Security Features
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {hostel.securityFeatures.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3 bg-white p-3 rounded-xl border border-[var(--color-border)]">
                        <ShieldCheck className="w-4 h-4 text-purple-600" />
                        <span className="text-sm font-medium text-[var(--color-text-body)]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Directions & Landmarks */}
              <div>
                <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-5 flex items-center gap-2">
                  <Navigation className="w-5 h-5 text-[var(--color-accent)]" />
                  Location & Directions
                </h2>
                <div className="prose prose-sm max-w-none text-[var(--color-text-body)] mb-6">
                  <p>{hostel.directions}</p>
                </div>
                
                {hostel.nearbyLandmarks && hostel.nearbyLandmarks.length > 0 && (
                  <div className="space-y-3">
                    <h3 className="text-sm font-bold text-[var(--color-text-primary)] uppercase tracking-wider">Nearby Landmarks</h3>
                    <ul className="space-y-2">
                      {hostel.nearbyLandmarks.map((landmark, idx) => (
                        <li key={idx} className="flex items-start justify-between p-3 bg-white border border-[var(--color-border)] rounded-lg">
                          <span className="text-sm font-medium">{landmark.name}</span>
                          <span className="text-xs font-semibold text-[var(--color-accent)] bg-[var(--color-light)] px-2 py-1 rounded">
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
                <Map className="w-5 h-5 text-[var(--color-accent)]" />
                Map View
              </h2>
              {hostel.mapEmbedSrc ? (
                <div className="rounded-xl overflow-hidden border border-[var(--color-border)] h-[400px] lg:h-[calc(100%-3rem)] map-container">
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
                <div className="h-[400px] flex items-center justify-center bg-[var(--color-light)] rounded-xl border border-[var(--color-border)]">
                  <p className="text-[var(--color-text-muted)] text-sm font-medium">Map currently unavailable</p>
                </div>
              )}
              
              <div className="mt-4">
                <a
                  href={hostel.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-4 py-3 bg-[var(--color-light)] text-[var(--color-primary)] text-sm font-bold rounded-xl border border-[var(--color-border)] hover:bg-white transition-colors"
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
