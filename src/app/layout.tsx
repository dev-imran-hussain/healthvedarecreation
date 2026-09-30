import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { AnnouncementBar } from '@/components/AnnouncementBar';
import { Header } from '@/components/Header';
import { CartDrawer } from '@/components/CartDrawer';
import { QuickLookModal } from '@/components/QuickLookModal';
import { Footer } from '@/components/Footer';

export const viewport = {
  themeColor: '#0d2a22',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://healthvedaorganics.com'),
  title: 'Health Veda Organics | 100% Plant-Based & Vegan Wellness',
  description:
    'Premium daily wellness supplements made with 100% plant-based, organic, and clinically backed ingredients. Certified vegan formulations from Indore, India.',
  keywords: [
    'health veda organics',
    'plant based vitamins',
    'vegan supplements india',
    'shilajit resin',
    'calcium magnesium zinc',
    'herbal wellness',
    'organic nutrition',
  ],
  authors: [{ name: 'Health Veda Organics' }],
  manifest: '/site.webmanifest',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    title: 'Health Veda Organics | 100% Plant-Based & Vegan Wellness',
    description:
      'Premium daily wellness supplements made with 100% plant-based, organic, and clinically backed ingredients.',
    images: ['/health-veda-organics-vegan-products-be-vegan.assets/Front_1c373568-bbdb-43e5-a7ff-c152b921b98b.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Health Veda Organics | 100% Plant-Based & Vegan Wellness',
    description:
      'Premium daily wellness supplements made with 100% plant-based, organic, and clinically backed ingredients.',
    images: ['/health-veda-organics-vegan-products-be-vegan.assets/Front_1c373568-bbdb-43e5-a7ff-c152b921b98b.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <AnnouncementBar />
        <Header />
        <main>{children}</main>
        <Footer />
        <CartDrawer />
        <QuickLookModal />
        <Script type="module" src="/script.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
