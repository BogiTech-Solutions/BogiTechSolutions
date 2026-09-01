import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // Base URL used to resolve relative canonical and Open Graph image URLs
  metadataBase: new URL('https://bogi-tech-solutions.vercel.app'),

  title: {
    default: 'BogiTech Solutions | Full-Stack Web & Software Engineering',
    template: '%s | BogiTech Solutions',
  },
  description:
    'BogiTech Solutions delivers custom web applications, mobile app development (React Native), and modern software solutions for growing businesses.',
  
  keywords: [
    'Web Development',
    'Next.js Development',
    'React Native',
    'Software Engineering',
    'BogiTech Solutions',
  ],

  // Open Graph metadata for LinkedIn, Facebook, and WhatsApp
  openGraph: {
    title: 'BogiTech Solutions | Full-Stack Web & Software Engineering',
    description:
      'Empowering business growth with modern web applications, mobile app development, and scalable technical infrastructure.',
    url: 'https://bogi-tech-solutions.vercel.app',
    siteName: 'BogiTech Solutions',
    images: [
      {
        url: '/og-image.png', // Resolves to https://bogi-tech-solutions.vercel.app/og-image.png
        width: 1200,
        height: 630,
        alt: 'BogiTech Solutions - Digital Web & Software Engineering Agency',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  // Twitter Card metadata (LinkedIn also reads these fallback tags)
  twitter: {
    card: 'summary_large_image',
    title: 'BogiTech Solutions | Custom Web & Mobile Solutions',
    description:
      'Custom web applications, mobile apps, and full-stack software solutions.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '';
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}

        {/* Loads GA4 asynchronously after hydration */}
        {gaId && <GoogleAnalytics gaId={gaId} />}
      </body>
    </html>
  );
}
