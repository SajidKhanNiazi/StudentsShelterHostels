export default function sitemap() {
  return [
    { url: 'https://studentsshelter.com/', changeFrequency: 'weekly', priority: 1.0 },

    // Category hubs
    { url: 'https://studentsshelter.com/boys-hostels/', changeFrequency: 'weekly', priority: 0.9 },
    { url: 'https://studentsshelter.com/girls-hostels/', changeFrequency: 'weekly', priority: 0.9 },

    // Individual branch pages
    { url: 'https://studentsshelter.com/boys-hostels/i-8-4-faizabad/', changeFrequency: 'monthly', priority: 0.85 },
    { url: 'https://studentsshelter.com/boys-hostels/i-11-1/', changeFrequency: 'monthly', priority: 0.85 },
    { url: 'https://studentsshelter.com/boys-hostels/i-8-4-main/', changeFrequency: 'monthly', priority: 0.85 },
    { url: 'https://studentsshelter.com/girls-hostels/i-8-3-branch-2/', changeFrequency: 'monthly', priority: 0.85 },
    { url: 'https://studentsshelter.com/girls-hostels/i-8-3-branch-1/', changeFrequency: 'monthly', priority: 0.85 },

    // Supporting pages
    { url: 'https://studentsshelter.com/rooms/', changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://studentsshelter.com/about/', changeFrequency: 'monthly', priority: 0.6 },
    { url: 'https://studentsshelter.com/contact/', changeFrequency: 'monthly', priority: 0.7 },
  ];
}
