import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Sidebar from './components/Sidebar';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'My Profile',
  description:
    'This is my personal profile website showcasing my projects and experience.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className='bg-[#1e1e1e] text-white flex min-h-screen'>
        <Sidebar />

        <main className='flex-1 h-screen overflow-y-auto bg-white text-black p-16'>
          {children}
        </main>
      </body>
    </html>
  );
}
