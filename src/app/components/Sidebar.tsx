'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '../hooks/useIsMobile';

const SIDEBAR_MENU = [
  { name: 'About', url: '/about' },
  { name: 'Skills', url: '/skills' },
  { name: 'Education', url: '/education' },
  { name: 'Experience', url: '/experience' },
  { name: 'Contact', url: '/contact' },
];

export default function Sidebar() {
  const isMobile = useIsMobile();

  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(true)}
        whileTap={{ scale: 0.9 }}
        className='flex items-center left-[10px] top-[10px] justify-center absolute h-[40px] w-[40px] bg-[#222] hover:bg-[#333] border border-[#333] p-2 rounded-[8px] text-white transition'
        aria-label='Toggle sidebar'
      >
        <Menu size={14} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.aside
            key='sidebar'
            initial={{ x: -200, opacity: 0, width: 0 }}
            animate={{ x: 0, opacity: 1, width: isMobile ? '100%' : '180px' }}
            exit={{ x: -200, opacity: 0, width: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className=' left-0 top-0 h-screen bg-[#111111] overflow-hidden z-50 shadow-lg'
          >
            {/* Close button */}
            <div className='flex justify-end p-2'>
              <button
                onClick={() => setIsOpen(false)}
                className='flex items-center justify-center h-[40px] w-[40px] bg-[#222] hover:bg-[#333] border border-[#333] p-2 rounded-[8px] text-white transition'
              >
                <X size={14} />
              </button>
            </div>

            <Link href='/'>
              <div className='p-4 flex flex-col items-center bg-black rounded-[20px] mx-4 relative'>
                <Image
                  src='/logo-sidebar.svg'
                  alt='logo-sidebar'
                  width={32}
                  height={32}
                  priority
                />

                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className='text-xs mt-2'
                >
                  Web Developer
                </motion.p>
              </div>
            </Link>

            <nav className='flex flex-col text-sm mt-[100px] text-center'>
              {SIDEBAR_MENU.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Link
                    href={item.url}
                    scroll={false}
                    className={`${
                      index === 0 ? 'border-y' : 'border-b'
                    } block hover:text-[#9FFFA9] py-3 border-[#1C1C1C]`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
