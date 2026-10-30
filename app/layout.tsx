import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Clínica Vida - Human-Inspired Health Center',
  description: 'Comprehensive healthcare for your whole family. Specialized diagnostics, family medicine, and tailored health insurance plans in Lisbon.',
  openGraph: {
    title: 'Clínica Vida - Human-Inspired Health Center',
    description: 'Comprehensive healthcare for your whole family. Specialized diagnostics, family medicine, and tailored health insurance plans.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clínica Vida - Human-Inspired Health Center',
    description: 'Comprehensive healthcare for your whole family.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <body suppressHydrationWarning className="font-sans">{children}</body>
    </html>
  );
}
