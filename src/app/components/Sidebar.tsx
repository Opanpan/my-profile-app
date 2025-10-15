'use client';

import Image from 'next/image';
import { useState } from 'react';

const SIDEBAR_MENU = ['About', 'Skills', 'Education', 'Experience', 'Contact'];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <aside
      className={`${
        isOpen ? 'sm:w-[150px]' : 'sm:w-[100px]'
      } w-full h-screen  bg-[#111111]`}
    >
      <div className='flex flex-col justify-between'>
        <div className='p-4'>
          <div className='flex flex-col items-center bg-black p-4 rounded-[20px]'>
            <Image
              src='/logo-sidebar.svg'
              alt='logo-sidebar'
              width={32}
              height={32}
              className='rounded-lg'
              priority
              onClick={() => setIsOpen(!isOpen)}
            />
            {isOpen && <p className='text-xs mt-2'>Web Developer</p>}
          </div>
        </div>

        <nav className='flex flex-col space-y-4 text-sm mt-[100px]'>
          {isOpen ? (
            <>
              {SIDEBAR_MENU?.map((item, index) => {
                return (
                  <a
                    key={index}
                    href='#education'
                    className='hover:text-[#9FFFA9] py-4 border-b-2 border-[#1C1C1C] text-center mb-0'
                  >
                    {item}
                  </a>
                );
              })}
            </>
          ) : null}
        </nav>
      </div>
    </aside>
  );
}
