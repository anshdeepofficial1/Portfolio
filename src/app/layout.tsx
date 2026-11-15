import type { Metadata, Viewport } from 'next';
import { Archivo } from 'next/font/google';
import '@/styles/base.css';
import '@/styles/home.css';
import '@/styles/pages.css';

import { INTRO_NOSCRIPT_CSS, INTRO_SEEN_SCRIPT } from '@/lib/intro';
import { SiteShell } from '@/components/SiteShell';
import { SITE_URL } from '@/lib/site';
import { BIO, JSON_LD, safeJsonLd } from '@/lib/structuredData';

const archivo = Archivo({ subsets: ['latin'], axes: ['wdth'], variable: '--font-archivo', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  verification: { google: 'zUIv4rZus97oBoL6cnrCNeKngCIuHRzdncwD9e0eDRw' },
  title: { default: 'Anshdeep Singh — Software Developer & Video Editor', template: '%s · Anshdeep Singh' },
  description: BIO,
  authors: [{ name: 'Anshdeep Singh', url: SITE_URL + '/about' }],
  creator: 'Anshdeep Singh',
  publisher: 'Anshdeep Singh',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 } },
  openGraph: { type: 'website', siteName: 'Anshdeep Singh', locale: 'en_IN', title: 'Anshdeep Singh — Software Developer & Video Editor', description: BIO },
  twitter: { card: 'summary_large_image' },
};

// who this site is about, for search engines and AI answers; keep it to what the pages themselves say


export const viewport: Viewport = { themeColor: '#05070e', colorScheme: 'dark' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={archivo.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: INTRO_SEEN_SCRIPT }} />
        <noscript><style dangerouslySetInnerHTML={{ __html: INTRO_NOSCRIPT_CSS }} /></noscript>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(JSON_LD) }} />
      </head>
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}

