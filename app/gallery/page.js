import Image from 'next/image';
import Breadcrumb from '@/components/seo/Breadcrumb';
import { Camera } from 'lucide-react';
import GalleryImage from '@/components/ui/GalleryImage';

export const metadata = {
  title: 'Gallery | Students Shelter Hostels',
  description: 'Take a look at the rooms, facilities, and environment at Students Shelter Hostels in Islamabad. Safe, clean, and comfortable student living.',
};

const galleryImages = [
  {
    src: '/images/gallery/single-room.jpg',
    alt: 'Cozy single room / cubicle setup with personal space',
    category: 'Rooms',
    title: 'Single Room / Cubicle',
  },
  {
    src: '/images/gallery/bathroom.jpg',
    alt: 'Clean, modern bathroom with glass shower cabin',
    category: 'Facilities',
    title: 'Modern Bathrooms',
  },
  {
    src: '/images/gallery/flyer-2.jpg',
    alt: 'Students Shelter Hostel premium housing details',
    category: 'Overview',
    title: 'Premium Student Housing',
  },
  {
    src: '/images/gallery/room-1.jpg',
    alt: 'Single room setup with deep red curtains',
    category: 'Rooms',
    title: 'Single Room Setup',
  },
  {
    src: '/images/gallery/room-2.jpg',
    alt: 'Triple room with tiled walls and modern ceiling',
    category: 'Rooms',
    title: 'Triple Room Detail',
  },
  {
    src: '/images/gallery/room-3.jpg',
    alt: 'Twin room with large wooden wardrobe',
    category: 'Rooms',
    title: 'Twin Sharing Room',
  },
  {
    src: '/images/gallery/room-4.jpg',
    alt: 'Spacious triple room with elegant wallpaper',
    category: 'Rooms',
    title: 'Elegant Triple Room',
  },
  {
    src: '/images/gallery/room-5.jpg',
    alt: 'Triple room with beautiful wooden arches',
    category: 'Rooms',
    title: 'Triple Room with Arches',
  },
];

export default function GalleryPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Gallery', href: '/gallery' },
  ];

  return (
    <main className="min-h-screen pt-24 pb-16 bg-[var(--color-bg)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={breadcrumbItems} />

        <div className="text-center max-w-3xl mx-auto mb-12 animate-slide-up">
          <div className="inline-flex items-center justify-center p-3 bg-[var(--color-accent)]/10 rounded-2xl mb-4 text-[var(--color-accent)]">
            <Camera className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] mb-4">
            Photo Gallery
          </h1>
          <p className="text-lg text-[var(--color-text-body)]">
            Take a virtual tour of our premium student accommodation. Experience the comfort, cleanliness, and security we provide to make you feel at home.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 animate-fade-in">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-gray-100">
                <GalleryImage 
                  src={image.src} 
                  alt={image.alt} 
                  fallbackText="Image Coming Soon - Please Upload" 
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Content over image */}
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="inline-block px-2.5 py-1 bg-[var(--color-accent)] text-white text-[10px] font-bold uppercase tracking-wider rounded mb-2">
                    {image.category}
                  </span>
                  <h3 className="text-white font-bold text-lg leading-tight">
                    {image.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <div className="inline-block p-8 bg-white border border-[var(--color-border)] rounded-3xl shadow-sm">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-3">
              Like what you see?
            </h2>
            <p className="text-[var(--color-text-body)] mb-6">
              Contact us today to book your room or schedule an in-person visit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/923314343676" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-[var(--color-whatsapp)] text-white font-bold rounded-xl hover:bg-green-700 transition-colors"
              >
                Chat on WhatsApp
              </a>
              <a 
                href="/#locations" 
                className="inline-flex items-center justify-center px-6 py-3 bg-[var(--color-light)] text-[var(--color-primary)] font-bold rounded-xl border border-[var(--color-border)] hover:bg-white transition-colors"
              >
                View Locations
              </a>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
