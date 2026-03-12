// src/app/layout.jsx
import { Syne, DM_Sans } from 'next/font/google';
import Header from '@/components/layout/Header/Header';
import Footer from '@/components/layout/Footer/Footer';
import '@/styles/globals.scss';

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  weight: ['400', '500', '600', '700', '800'],
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['400', '500', '700'],
});

export const metadata = {
  title: 'Sania Bahar | Graphic Designer Portfolio',
  description: 'Graphic Designer specializing in branding, motion graphics, and editorial design.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
