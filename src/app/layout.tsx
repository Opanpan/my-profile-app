import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Sidebar from './components/Sidebar';

// Load Poppins
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'], // optional weights
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Ifan Alriansyah',
  description:
    'This is my personal profile website showcasing my projects and experience.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={poppins.variable}>
      <body className={`${poppins.className} text-white flex min-h-screen`}>
        <Sidebar />
        <main className='flex-1 h-screen overflow-y-auto bg-[#1C1C1C] text-black custom-scrollbar'>
          {children}
        </main>
      </body>
    </html>
  );
}
