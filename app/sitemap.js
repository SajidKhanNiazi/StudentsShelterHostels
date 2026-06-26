export default function sitemap() {
  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://studentsshelterhostels.vercel.app'

  return [
    {
      url: SITE_URL,
      changeFrequency: 'weekly',
      priority: 1.0,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}/boys-hostels`,
      changeFrequency: 'weekly',
      priority: 0.9,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}/girls-hostels`,
      changeFrequency: 'weekly',
      priority: 0.9,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}/boys-hostels/i-8-4-faizabad`,
      changeFrequency: 'monthly',
      priority: 0.85,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}/boys-hostels/i-11-1`,
      changeFrequency: 'monthly',
      priority: 0.85,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}/boys-hostels/i-8-4-main`,
      changeFrequency: 'monthly',
      priority: 0.85,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}/girls-hostels/i-8-3-branch-2`,
      changeFrequency: 'monthly',
      priority: 0.85,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}/girls-hostels/i-8-3-branch-1`,
      changeFrequency: 'monthly',
      priority: 0.85,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}/rooms`,
      changeFrequency: 'monthly',
      priority: 0.7,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}/about`,
      changeFrequency: 'monthly',
      priority: 0.6,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}/contact`,
      changeFrequency: 'monthly',
      priority: 0.7,
      lastModified: new Date(),
    },
  ]
}
