'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SIDEBAR_MENU = ['About', 'Skills', 'Education', 'Experience', 'Contact'];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <motion.aside
      animate={{
        width: isOpen ? 180 : 80,
      }}
      transition={{
        duration: 0.3,
        ease: 'easeInOut',
      }}
      className='h-screen bg-[#111111] flex flex-col justify-between overflow-hidden'
    >
      {/* Top Section (Logo) */}
      <div className='p-4'>
        <div
          className='flex flex-col items-center bg-black p-4 rounded-[20px] cursor-pointer'
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <Image
            src='/logo-sidebar.svg'
            alt='logo-sidebar'
            width={32}
            height={32}
            priority
          />

          {/* Animated label */}
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
        </div>
      </div>

      {/* Navigation */}
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
                  transition: {
                    staggerChildren: 0.05,
                  },
                },
              }}
            >
              {SIDEBAR_MENU.map((item, index) => (
                <motion.a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.2 }}
                  className={`${
                    index === 0 ? 'border-y' : 'border-b'
                  } block hover:text-[#9FFFA9] py-3 border-[#1C1C1C]`}
                >
                  {item}
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.aside>
  );
}
