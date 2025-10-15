import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Image from 'next/image';

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <aside className='h-screen w-[150px] bg-[#111111] p-2'>
          <div className='flex flex-col justify-between'>
            {/* Logo */}
            <div className='flex flex-col items-center bg-black p-4 rounded-[20px]'>
              <Image
                src='/logo-sidebar.svg'
                alt='logo-sidebar'
                width={32}
                height={32}
                className='rounded-lg'
                priority
              />
              <p className='text-xs mt-2'>Web Developer</p>
            </div>

            {/* Nav Links */}
            <nav className='flex flex-col space-y-4 px-4 text-sm mt-8'>
              <a href='#about' className='hover:text-[#00FFA9]'>
                About
              </a>
              <a href='#skills' className='hover:text-[#00FFA9]'>
                Skills
              </a>
              <a href='#education' className='hover:text-[#00FFA9]'>
                Education
              </a>
              <a href='#experience' className='hover:text-[#00FFA9]'>
                Experience
              </a>
              <a href='#contact' className='hover:text-[#00FFA9]'>
                Contact
              </a>
            </nav>
          </div>
        </aside>

        {/* <main className="flex-1 p-16">{children}</main> */}
      </body>
    </html>
  );
}
