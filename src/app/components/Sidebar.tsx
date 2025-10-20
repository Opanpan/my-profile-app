'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight, Menu, X } from 'lucide-react';

const SIDEBAR_MENU = [
  { name: 'About', url: '/about' },
  { name: 'Skills', url: '/skills' },
  { name: 'Education', url: '/education' },
  { name: 'Experience', url: '/experience' },
  { name: 'Contact', url: '/contact' },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <motion.aside
      animate={{ width: isOpen ? 180 : 80 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className='h-screen bg-[#111111] flex flex-col justify-between overflow-hidden relative'
    >
      <Link href='/'>
        <div className='p-4 flex flex-col items-center bg-black rounded-[20px] mx-4 mt-4 relative'>
          <Image
            src='/logo-sidebar.svg'
            alt='logo-sidebar'
            width={32}
            height={32}
            priority
          />

          <AnimatePresence mode='wait'>
            {isOpen && (
              <motion.p
                key='label'
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className='text-xs mt-2'
              >
                Web Developer
              </motion.p>
            )}
          </AnimatePresence>

          {/* === Toggle Button === */}
          <motion.button
            onClick={() => setIsOpen((prev) => !prev)}
            whileTap={{ scale: 0.9 }}
            className='absolute right-[-10px] z-[200] top-1/2 -translate-y-1/2 bg-[#222] hover:bg-[#333] border border-[#333] p-2 rounded-[8px] text-white transition'
            aria-label='Toggle sidebar'
          >
            {isOpen ? <ChevronRight size={14} /> : <Menu size={14} />}
          </motion.button>
        </div>
      </Link>

      <nav className='flex flex-col text-sm mt-[100px] text-center'>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key='menu'
              initial='hidden'
              animate='visible'
              exit='hidden'
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { staggerChildren: 0.05 },
                },
              }}
            >
              {SIDEBAR_MENU.map((item, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.2 }}
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
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.aside>
  );
}
