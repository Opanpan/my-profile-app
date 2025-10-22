'use client';

import { useEffect, useRef } from 'react';

export default function Contact() {
  const textRef = useRef<HTMLSpanElement | null>(null);
  const fullText = 'Under Construction';

  useEffect(() => {
    if (!textRef.current) return;

    let index = 0;
    let deleting = false;
    let timeoutId: number;
    const typingSpeed = 80;
    const pause = 900;

    const tick = () => {
      if (!textRef.current) return;

      if (!deleting) {
        textRef.current.textContent = fullText.slice(0, index + 1);
        index++;
        if (index >= fullText.length) {
          timeoutId = window.setTimeout(() => {
            deleting = true;
            tick();
          }, pause);
          return;
        }
      } else {
        textRef.current.textContent = fullText.slice(0, index - 1);
        index--;
        if (index <= 0) {
          timeoutId = window.setTimeout(() => {
            deleting = false;
            tick();
          }, pause);
          return;
        }
      }

      timeoutId = window.setTimeout(tick, typingSpeed);
    };

    tick();
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className='min-h-screen flex flex-col items-center justify-center p-8 bg-[--color-main2] text-[--color-text] transition-colors duration-300'>
      <header className='w-full max-w-5xl flex items-center justify-center mb-8'>
        <div className='flex items-center gap-3'>
          <div className='w-10 h-10 rounded-lg bg-[--color-main3] flex items-center justify-center shadow-sm'>
            🚧
          </div>
          <h1 className='text-lg font-semibold'>Ifan&apos;s Site</h1>
        </div>
      </header>

      <main className='w-full max-w-3xl bg-[--color-main1] rounded-2xl p-8 md:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.4)] text-center'>
        <h2 className='text-xl sm:text-3xl md:text-6xl font-extrabold mb-4 leading-tight'>
          <span ref={textRef} className='whitespace-pre' />
          <span className='inline-block w-[6px] h-[1.1em] bg-[--color-text] align-middle ml-2 animate-pulse' />
        </h2>

        <p className='text-[--color-foreground] text-sm md:text-base opacity-90 mb-6'>
          I’m doing some upgrades and polishing — come back soon.
          <br />
          In the meantime, you can reach me at{' '}
          <a
            className='underline hover:opacity-80 transition-opacity'
            href='mailto:fanalriansyah@gmail.com'
          >
            fanalriansyah@gmail.com
          </a>
        </p>
      </main>
    </div>
  );
}
