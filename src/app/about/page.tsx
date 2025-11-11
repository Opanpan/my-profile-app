'use client';

import BottleAndCap from '@/components/BottleAndCap';
import BottlePreview from '@/components/BottleAndCap';
import Lanyard from '@/components/Lanyard';

export default function About() {
  return (
    <div className='relative flex flex-col justify-between bg-[#1C1C1C] w-full h-screen overflow-hidden'>
      <div className='absolute inset-0 '>
        <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />

        {/* <BottleAndCap /> */}
      </div>

      <div className='relative z-10 w-full md:w-[50%] p-10 mt-20'>
        <p className='text-[#9FFFA9] text-[72px] font-semibold'>
          Me, Myself and I
        </p>
        <p className='text-white mt-[40px] font-light'>
          To be honest, becoming a front-end developer{' '}
          <span className='text-xl font-semibold text-black bg-[#9FFFA9]'>
            wasn't my goal
          </span>{' '}
          from the start. My major was information technology, but I couldn't
          code until I graduated. Long story short, I'm a{' '}
          <span className='text-xl font-semibold text-black bg-[#0057FF]'>
            front-end developer
          </span>
          with over{' '}
          <span className='text-xl font-semibold text-black bg-[#9FFFA9]'>
            four years of experience.
          </span>{' '}
          If you'd like to know more about me, contact me.
        </p>
      </div>

      <div className='relative flex jsutify-start md:justify-end z-10 w-full p-10'>
        <p className='text-[#252525] w-[50%] text-[100px] xl:text-[200px] leading-[80%] lin font-semibold'>
          About me
        </p>
      </div>
    </div>
  );
}
