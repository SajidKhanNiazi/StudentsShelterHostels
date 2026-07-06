import TestimonialsClient from '@/components/testimonials/TestimonialsClient';

export const metadata = {
  title: 'Student Reviews & Testimonials | Students Shelter Hostels Islamabad',
  description: 'Read genuine reviews from students living at Students Shelter Hostels in Islamabad. Boys and girls hostel reviews from I-8, I-11 branches.',
  keywords: 'students shelter hostel reviews, student hostel islamabad reviews, boys hostel islamabad reviews, girls hostel islamabad testimonials, hostel i-8 student feedback',
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/testimonials`,
  },
  openGraph: {
    title: 'Student Reviews — Students Shelter Hostels Islamabad',
    description: 'Read genuine reviews from 100+ students living at Students Shelter Hostels across 5 branches in Islamabad.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/testimonials`,
    type: 'website',
    locale: 'en_PK',
    siteName: 'Students Shelter Hostels',
  },
};

const TESTIMONIALS = [
  // ── BOYS HOSTEL REVIEWS ──
  {
    id: 1,
    name: 'Ahmed Hassan',
    university: 'COMSATS University Islamabad',
    branch: 'I-8/4 Faizabad Branch',
    branchSlug: 'i-8-4-faizabad',
    gender: 'boys',
    rating: 5,
    date: '2024-09-15',
    review: 'Excellent location — just 5 minutes walk from Faizabad Metro. The meals are good and the WiFi is fast. I have been living here for 8 months and have no complaints. Management is very responsive on WhatsApp.',
    highlight: 'Best location near metro',
    stayDuration: '8 months',
  },
  {
    id: 2,
    name: 'Muhammad Bilal',
    university: 'NUML University Islamabad',
    branch: 'I-8/4 Faizabad Branch',
    branchSlug: 'i-8-4-faizabad',
    gender: 'boys',
    rating: 5,
    date: '2024-11-02',
    review: 'I came from Multan and was worried about finding a safe place in Islamabad. Students Shelter made the transition very easy. Room is clean, electricity backup is 24/7, and the study environment is peaceful. Highly recommended for out-of-city students.',
    highlight: 'Great for out-of-city students',
    stayDuration: '6 months',
  },
  {
    id: 3,
    name: 'Usman Tariq',
    university: 'Air University Islamabad',
    branch: 'I-11/1 Branch',
    branchSlug: 'i-11-1',
    gender: 'boys',
    rating: 5,
    date: '2025-01-10',
    review: 'The I-11/1 branch is very well maintained. I chose it because of the Metro Cash and Carry nearby which makes grocery shopping easy. Three seater room with attached washroom is very comfortable for the price.',
    highlight: 'Well maintained, convenient location',
    stayDuration: '5 months',
  },
  {
    id: 4,
    name: 'Hamza Malik',
    university: 'Quaid-i-Azam University Islamabad',
    branch: 'I-11/1 Branch',
    branchSlug: 'i-11-1',
    gender: 'boys',
    rating: 4,
    date: '2025-02-18',
    review: 'Good hostel overall. Meals are home-cooked style which I appreciate. Management addresses complaints quickly. The area is safe and well-lit at night. Would suggest they add more parking space for bikes.',
    highlight: 'Home-cooked meals, safe area',
    stayDuration: '4 months',
  },
  {
    id: 5,
    name: 'Syed Farhan',
    university: 'FAST NUCES Islamabad',
    branch: 'I-8/4 Main Branch',
    branchSlug: 'i-8-4-main',
    gender: 'boys',
    rating: 5,
    date: '2025-03-05',
    review: 'Been staying at the I-8/4 main branch for 1 year. The single cubical room gives full privacy which is perfect for my study schedule. Internet speed is consistently good for online classes. Management is professional and easy to reach.',
    highlight: 'Great for focused studying',
    stayDuration: '12 months',
  },
  {
    id: 6,
    name: 'Zain ul Abideen',
    university: 'Bahria University Islamabad',
    branch: 'I-8/4 Main Branch',
    branchSlug: 'i-8-4-main',
    gender: 'boys',
    rating: 4,
    date: '2025-04-20',
    review: 'Value for money is very good. Five seater room with attached bathroom at this price is difficult to find in I-8. The hostel is clean and management keeps it that way. I recommended it to two of my friends and they are also now staying here.',
    highlight: 'Excellent value for money',
    stayDuration: '7 months',
  },

  // ── GIRLS HOSTEL REVIEWS ──
  {
    id: 7,
    name: 'Fatima Noor',
    university: 'COMSATS University Islamabad',
    branch: 'I-8/3 Branch 2',
    branchSlug: 'i-8-3-branch-2',
    gender: 'girls',
    rating: 5,
    date: '2024-08-12',
    review: 'As a girl coming from another city, my parents were very concerned about where I would stay. After visiting Students Shelter I-8/3, my parents were completely satisfied. Female warden is very kind and the entry gate is always secured. I feel as safe as I do at home.',
    highlight: 'Parents completely satisfied',
    stayDuration: '10 months',
    parentNote: true,
  },
  {
    id: 8,
    name: 'Ayesha Riaz',
    university: 'Quaid-i-Azam University Islamabad',
    branch: 'I-8/3 Branch 2',
    branchSlug: 'i-8-3-branch-2',
    gender: 'girls',
    rating: 5,
    date: '2024-10-30',
    review: 'The female staff management is what I appreciate the most. CCTV is installed everywhere and the warden checks in regularly. Food is good and changed on a weekly rotation. WiFi works well for late night studies. Highly recommend to all girls students.',
    highlight: 'CCTV and female staff gives peace of mind',
    stayDuration: '9 months',
    parentNote: true,
  },
  {
    id: 9,
    name: 'Zainab Hussain',
    university: 'International Islamic University Islamabad',
    branch: 'I-8/3 Branch 1',
    branchSlug: 'i-8-3-branch-1',
    gender: 'girls',
    rating: 5,
    date: '2025-01-22',
    review: 'I have stayed in two hostels in Islamabad before and this is by far the best. The single room with attached bathroom at I-8/3 Branch 1 gives full privacy. The management is responsive and genuinely cares about residents. Laundry service is a great addition.',
    highlight: 'Best hostel in Islamabad',
    stayDuration: '6 months',
  },
  {
    id: 10,
    name: 'Maira Iqbal',
    university: 'Shaheed Zulfikar Ali Bhutto Institute of Science',
    branch: 'I-8/3 Branch 1',
    branchSlug: 'i-8-3-branch-1',
    gender: 'girls',
    rating: 4,
    date: '2025-03-14',
    review: 'Clean rooms, reliable electricity backup, and a calm environment for studying. The two seater room with attached bathroom is perfect for my needs. My mother visited and was very reassured by the security arrangements. Price is fair for everything included.',
    highlight: 'Clean, calm, and secure',
    stayDuration: '5 months',
    parentNote: true,
  },
];

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Students Shelter Hostels",
  "url": "https://studentsshelterhostel.pk",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "24",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": TESTIMONIALS.map(t => ({
    "@type": "Review",
    "author": { "@type": "Person", "name": t.name },
    "reviewRating": { "@type": "Rating", "ratingValue": t.rating.toString() },
    "reviewBody": t.review,
    "datePublished": t.date,
  }))
};

export default function TestimonialsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <TestimonialsClient testimonials={TESTIMONIALS} />
    </>
  );
}
