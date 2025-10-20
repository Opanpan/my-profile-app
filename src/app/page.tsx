'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Home() {
  const fullText: string = 'Hi,\nI’m Ifan,\nWeb Developer';
  const [displayed, setDisplayed] = useState<string>('');
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const typingSpeed: number = 100;
  const pauseTime: number = 1000;

  useEffect(() => {
    let i: number = isDeleting ? fullText.length : 0;
    let interval: NodeJS.Timeout;

    const startTyping = () => {
      interval = setInterval(() => {
        if (!isDeleting) {
          setDisplayed(fullText.slice(0, i + 1));
          i++;
          if (i === fullText.length) {
            clearInterval(interval);
            setTimeout(() => setIsDeleting(true), pauseTime);
          }
        } else {
          setDisplayed(fullText.slice(0, i - 1));
          i--;
          if (i === 0) {
            clearInterval(interval);
            setTimeout(() => setIsDeleting(false), pauseTime);
          }
        }
      }, typingSpeed);
    };

    startTyping();
    return () => clearInterval(interval);
  }, [isDeleting]);

  const RenderColorIndicator = () => {
    return (
      <div className='flex justify-end gap-4'>
        <div className='flex flex-col justify-center items-center gap-2'>
          <div className='bg-[#9FFFA9] w-[40px] h-[40px] rounded-[10px]'></div>
          <p className='text-[#9FFFA9]'>#9FFFA9</p>
        </div>
        <div className='flex flex-col justify-center items-center gap-2'>
          <div className='bg-[#0057FF] w-[40px] h-[40px] rounded-[10px]'></div>
          <p className='text-[#0057FF]'>#0057FF</p>
        </div>
      </div>
    );
  };

  return (
    <div className='bg-[#1C1C1C] w-full h-screen p-8'>
      <RenderColorIndicator />

      <div className='relative w-full flex'>
        {/* 👇 Image behind the text */}
        <Image
          src='/logo-sidebar.svg'
          alt='logo-sidebar'
          width={600}
          height={400}
          priority
          className='absolute top-20 left-1/5  z-0'
        />

        {/* 👇 Text above */}
        <motion.p
          className='relative h-[432px] z-10 text-white text-[40px] md:text-[96px] font-semibold border-white pr-2 whitespace-pre-line'
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          {displayed}
          <motion.span
            className='inline-block w-[4px] bg-white ml-[2px]'
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          >
            &nbsp;
          </motion.span>
        </motion.p>
      </div>

      <p className='text-[#B1B1B1] font-extralight text-[24px] italic'>
        Web Developer
      </p>
      <button className='text-[#9FFFA9] border-[#9FFFA9] border px-4 py-2 rounded-[10px] mt-2 cursor-pointer'>
        Contact me !
      </button>
    </div>
  );
}
