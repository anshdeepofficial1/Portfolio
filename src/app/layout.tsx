import type { Metadata, Viewport } from 'next';
import { Archivo } from 'next/font/google';
import '@/styles/base.css';
import '@/styles/home.css';
import '@/styles/pages.css';

import { INTRO_NOSCRIPT_CSS, INTRO_SEEN_SCRIPT } from '@/lib/intro';
import { SiteShell } from '@/components/SiteShell';
import { SITE_URL } from '@/lib/site';
import { JSON_LD } from '@/lib/structuredData';

const archivo = Archivo({ subsets: ['latin'], axes: ['wdth'], variable: '--font-archivo', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: 'Anshdeep Singh · Developer & interface designer', template: '%s · Anshdeep Singh' },
  description: 'BCA Data Science student at Chandigarh University. Apps, websites and practical tools.',
  openGraph: { type: 'website', siteName: 'Anshdeep Singh', locale: 'en_US' },
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON_LD }} />
      </head>
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}

