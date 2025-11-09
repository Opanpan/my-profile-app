'use client';

import TextType from '@/components/TextType';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useIsMobile } from './hooks/useIsMobile';

const Ballpit = dynamic(() => import('../components/Ballpit'), {
  ssr: false,
  loading: () => <div className='absolute inset-0 -z-10 bg-[#1C1C1C]' />,
});

export default function Home() {
  const isMobile = useIsMobile();

  const RenderColorIndicator = () => (
    <div className='flex justify-end gap-4'>
      <div className='flex flex-col justify-center items-center gap-2'>
        <div className='bg-[#9FFFA9] w-[20px] h-[20px] md:w-[40px] md:h-[40px] rounded-[5px] md:rounded-[10px]'></div>
        <p className='text-[#9FFFA9]'>#9FFFA9</p>
      </div>
      <div className='flex flex-col justify-center items-center gap-2'>
        <div className='bg-[#0057FF] w-[20px] h-[20px] md:w-[40px] md:h-[40px] rounded-[5px] md:rounded-[10px]'></div>
        <p className='text-[#0057FF]'>#0057FF</p>
      </div>
    </div>
  );

  return (
    <div className='relative bg-[#1C1C1C] w-full h-full overflow-hidden p-8'>
      <div className='absolute inset-0 z-0'>
        {/* <Ballpit
          count={isMobile ? 30 : 100}
          gravity={0.01}
          friction={0.9975}
          wallBounce={0.95}
          followCursor={false}
          colors={['#9FFFA9', '#0057FF', '#1C1C1C']}
        /> */}
      </div>

      <RenderColorIndicator />

      <div className='relative w-full flex mt-8'>
        <div className='absolute z-0 left-[0] md:left-[10px] w-full h-full'>
          <Image src='/logo-sidebar.svg' alt='logo-sidebar' fill priority />
        </div>

        <TextType
          text={[`Hi,\nI’m Ifan,\nWeb Developer`, '']}
          typingSpeed={250}
          pauseDuration={1500}
          showCursor={true}
          deletingSpeed={250}
          cursorCharacter='_'
          className='text-white relative h-[432px] z-10 text-[40px] md:text-[96px] font-semibold'
        />
      </div>

      <p className='text-[#B1B1B1] font-extralight text-sm md:text-lg italic'>
        Web Developer
      </p>

      <button
        onClick={() => console.log('E')}
        className='relative z-[11] text-[#9FFFA9] text-sm md:text-lg border-[#9FFFA9] border px-4 py-2 rounded-[10px] mt-2 cursor-pointer'
      >
        Contact me !
      </button>
    </div>
  );
}
