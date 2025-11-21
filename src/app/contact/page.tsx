'use client';

import Silk from '@/components/Silk';
import { SiGithub, SiLinkedin } from 'react-icons/si';

const DATA = [
  { Icon: SiLinkedin, href: 'https://www.linkedin.com/in/ifannnn/' },
  { Icon: SiGithub, href: 'https://github.com/Opanpan' },
];

export default function Contact() {
  return (
    <div className='relative flex flex-col justify-between bg-[#1C1C1C] w-full min-h-screen px-8 py-14'>
      <div className='absolute inset-0 overflow-y-hidden'>
        <Silk
          speed={5}
          scale={1}
          color='#9FFFA9'
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>

      <div className=''>
        <div className='relative z-10 w-full max-w-7xl mx-auto p-6 md:p-16 lg:p-24 bg-black/80 backdrop-blur-sm shadow-2xl rounded-lg'>
          <div className='flex flex-col lg:flex-row gap-4'>
            <div className='lg:w-2/5 text-white'>
              <h2 className='text-2xl md:text-5xl text-center md:text-left font-extrabold mb-8'>
                Find Me Here
              </h2>

              <p className='text-sm md:text-3xl font-medium mb-6'>
                <a
                  href='mailto:fanalriansyah@gmail.com'
                  className='text-[#9FFFA9] hover:text-white transition duration-300'
                >
                  fanalriansyah@gmail.com
                </a>
              </p>

              <p className='text-sm md:text-xl text-gray-400 mb-10'>
                Based in: Jakarta, Indonesia
              </p>

              <div className='flex flex-wrap justify-center md:justify-start gap-10'>
                {DATA.map(({ Icon, href }, iconIndex) => (
                  <div key={iconIndex} className='w-[50px] md:w-[100px] group'>
                    <a
                      href={href}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex flex-col  transition-transform hover:scale-110'
                    >
                      <Icon
                        size={50}
                        className={`text-white transition-colors duration-300 ${
                          iconIndex % 2 === 0
                            ? 'group-hover:text-[#0057FF]'
                            : 'group-hover:text-[#9FFFA9]'
                        }`}
                      />
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className='lg:w-3/5'>
              <h2 className='text-2xl md:text-5xl text-center md:text-left font-extrabold text-white mb-8'>
                Send Me a Message
              </h2>

              <form className='space-y-6'>
                <input
                  type='text'
                  placeholder='Your Full Name'
                  className='w-full p-4 bg-[#1C1C1C] text-white border-2 border-gray-600 focus:border-[#9FFFA9] outline-none rounded-lg transition duration-300'
                  required
                />

                <input
                  type='email'
                  placeholder='Your Email Address'
                  className='w-full p-4 bg-[#1C1C1C] text-white border-2 border-gray-600 focus:border-[#9FFFA9] outline-none rounded-lg transition duration-300'
                  required
                />

                <input
                  type='text'
                  placeholder='How can I help you?'
                  className='w-full p-4 bg-[#1C1C1C] text-white border-2 border-gray-600 focus:border-[#9FFFA9] outline-none rounded-lg transition duration-300'
                />

                <textarea
                  placeholder='Your Message'
                  rows={5}
                  className='w-full p-4 bg-[#1C1C1C] text-white border-2 border-gray-600 focus:border-[#9FFFA9] outline-none rounded-lg transition duration-300 resize-none'
                  required
                />

                <button
                  type='submit'
                  className='cursor-pointer w-full md:w-auto px-5 py-4 text-md md:text-xl font-bold bg-[#9FFFA9] text-black rounded-lg hover:bg-white transition duration-300 transform hover:scale-[1.01] shadow-lg'
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
