'use client';

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiAngular,
  SiVuedotjs,
  SiJquery,
  SiShadcnui,
  SiAntdesign,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiGo,
  SiC,
} from 'react-icons/si';

const frontEndTech = [
  {
    node: <SiJavascript color='white' size={50} />,
    title: 'JavaScript',
    href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    node: <SiTypescript color='white' size={50} />,
    title: 'TypeScript',
    href: 'https://www.typescriptlang.org/',
  },
  {
    node: <SiHtml5 color='white' size={50} />,
    title: 'HTML5',
    href: 'https://www.typescriptlang.org/',
  },
  {
    node: <SiCss3 color='white' size={50} />,
    title: 'CSS3',
    href: 'https://www.typescriptlang.org/',
  },
  {
    node: <SiReact color='white' size={50} />,
    title: 'React',
    href: 'https://react.dev',
  },
  {
    node: <SiNextdotjs color='white' size={50} />,
    title: 'Next',
    href: 'https://nextjs.org',
  },
  {
    node: <SiAngular color='white' size={50} />,
    title: 'Angular',
    href: 'https://nextjs.org',
  },
  {
    node: <SiVuedotjs color='white' size={50} />,
    title: 'Vue',
    href: 'https://nextjs.org',
  },
  {
    node: <SiJquery color='white' size={50} />,
    title: 'Jquery',
    href: 'https://nextjs.org',
  },
  {
    node: <SiTailwindcss color='white' size={50} />,
    title: 'Tailwind CSS',
    href: 'https://tailwindcss.com/',
  },
  {
    node: <SiShadcnui color='white' size={50} />,
    title: 'Shadcn',
    href: 'https://tailwindcss.com/',
  },
  {
    node: <SiAntdesign color='white' size={50} />,
    title: 'Antd',
    href: 'https://tailwindcss.com/',
  },
];

const backEndTech = [
  {
    node: <SiNodedotjs color='white' size={50} />,
    title: 'NodeJs',
    href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    node: <SiExpress color='white' size={50} />,
    title: 'ExpressJs',
    href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    node: <SiGo color='white' size={50} />,
    title: 'Go',
    href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    node: <SiC color='white' size={50} />,
    title: 'C',
    href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
];

export default function Skill() {
  return (
    <div className='relative flex flex-col bg-[#1C1C1C] w-full min-h-screen overflow-hidden'>
      <div className='relative z-10 w-full md:w-[50%] p-10 mt-20'>
        <p className='text-[#9FFFA9] text-[72px] font-semibold'>Skill</p>
      </div>

      <div className='flex flex-col gap-2 p-10'>
        <p className='font-semibold text-white text-2xl mb-4'>Frontend</p>

        <div className='flex flex-wrap justify-center md:justify-start gap-10'>
          {frontEndTech.map((item, index) => (
            <div key={index} className='w-[100px]'>
              <a
                href={item.href}
                target='_blank'
                rel='noopener noreferrer'
                className='flex flex-col items-center hover:scale-110 transition-transform'
              >
                {item.node}
                <p className='text-center text-white mt-2'>{item.title}</p>
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className='flex flex-col gap-2 p-10'>
        <p className='font-semibold text-white text-2xl mb-4'>Backend</p>

        <div className='flex flex-wrap justify-center md:justify-start gap-10'>
          {backEndTech.map((item, index) => (
            <div key={index} className='w-[100px]'>
              <a
                href={item.href}
                target='_blank'
                rel='noopener noreferrer'
                className='flex flex-col items-center hover:scale-110 transition-transform'
              >
                {item.node}
                <p className='text-center text-white mt-2'>{item.title}</p>
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className='relative flex justify-end z-10 w-full p-10'>
        <p className='text-[#252525] w-[50%] text-[100px] xl:text-[200px] leading-[80%] font-semibold'>
          Skill
        </p>
      </div>
    </div>
  );
}
