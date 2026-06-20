import "./globals.css";
import { Inter, Playfair_Display } from 'next/font/google';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFAB from "@/components/layout/WhatsAppFAB";
import ChatBot from "@/components/chatbot/ChatBot";

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata = {
  title: {
    default: "Students Shelter Hostels Islamabad | Boys & Girls Hostels",
    template: "%s | Students Shelter Hostels",
  },
  description:
    "Affordable student hostels in Islamabad with separate boys and girls accommodation. 5 locations in I-8, I-11. Near Faizabad Metro Station.",
  keywords:
    "student hostel islamabad, boys hostel islamabad, girls hostel islamabad, hostel i-8, hostel i-11, faizabad metro hostel",
  openGraph: {
    title: "Students Shelter Hostels Islamabad",
    description: "Safe, affordable student hostels in Islamabad.",
    url: "https://www.studentsshelter.com",
    siteName: "Students Shelter Hostels",
    type: "website",
    locale: "en_PK",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://www.studentsshelter.com"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        {/* TODO: Add Google Analytics GA4 tracking ID here */}
        {/* Example:
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
        */}
      </head>
      <body suppressHydrationWarning className="min-h-screen flex flex-col bg-[var(--color-bg)] text-[var(--color-text-body)] antialiased font-body">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        {/* <WhatsAppFAB /> */}
        <ChatBot />
      </body>
    </html>
  );
}
