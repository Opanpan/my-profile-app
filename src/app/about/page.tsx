'use client';

import Lanyard from '@/components/Lanyard';
import { useIsMobile } from '../hooks/useIsMobile';

export default function About() {
  const isMobile = useIsMobile();

  return (
    <div className='relative flex flex-col justify-between bg-[#1C1C1C] w-full h-screen overflow-hidden'>
      <div className='absolute inset-0 '>
        {!isMobile && <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />}
      </div>

      <div className='relative z-10 w-full md:w-[50%] p-10 mt-20'>
        <p className='text-[#9FFFA9] text-[72px] font-semibold'>
          Me, Myself and I
        </p>
        <p className='text-white mt-[40px] font-light '>
          I am a{' '}
          <span className='p-[1px] font-semibold text-black bg-[#9FFFA9]'>
            frontend
          </span>{' '}
          developer with{' '}
          <span className='p-[1px] font-semibold text-black bg-[#0057FF]'>
            4+ years
          </span>
          of experience for fintech and enterprise systems. Skilled in building
          scalable, and maintainable web applications. Proven track record in
          delivering{' '}
          <span className='p-[1px] font-semibold text-black bg-[#9FFFA9]'>
            high-quality products
          </span>{' '}
          for major clients such as Bank Mandiri and CIMB Niaga. Passionate
          about clean architecture,{' '}
          <span className='p-[1px] font-semibold text-black bg-[#0057FF]'>
            UI excellence
          </span>
          , and team collaboration.
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
