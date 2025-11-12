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

const listIcon = [
  {
    title: 'Frontend',
    data: [
      {
        Icon: SiJavascript,
        title: 'JavaScript',
        href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      },
      {
        Icon: SiTypescript,
        title: 'TypeScript',
        href: 'https://www.typescriptlang.org/',
      },
      {
        Icon: SiHtml5,
        title: 'HTML5',
        href: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
      },
      {
        Icon: SiCss3,
        title: 'CSS3',
        href: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
      },
      { Icon: SiReact, title: 'React', href: 'https://react.dev' },
      { Icon: SiNextdotjs, title: 'Next.js', href: 'https://nextjs.org' },
      { Icon: SiAngular, title: 'Angular', href: 'https://angular.dev' },
      { Icon: SiVuedotjs, title: 'Vue.js', href: 'https://vuejs.org' },
      { Icon: SiJquery, title: 'jQuery', href: 'https://jquery.com' },
      {
        Icon: SiTailwindcss,
        title: 'Tailwind CSS',
        href: 'https://tailwindcss.com/',
      },
      { Icon: SiShadcnui, title: 'Shadcn UI', href: 'https://ui.shadcn.com/' },
      { Icon: SiAntdesign, title: 'Ant Design', href: 'https://ant.design/' },
    ],
  },
  {
    title: 'Backend',
    data: [
      { Icon: SiNodedotjs, title: 'Node.js', href: 'https://nodejs.org' },
      { Icon: SiExpress, title: 'Express.js', href: 'https://expressjs.com/' },
      { Icon: SiGo, title: 'Go', href: 'https://go.dev/' },
      {
        Icon: SiC,
        title: 'C',
        href: 'https://en.wikipedia.org/wiki/C_(programming_language)',
      },
    ],
  },
];

export default function Skill() {
  return (
    <div className='relative flex flex-col bg-[#1C1C1C] w-full min-h-screen overflow-hidden'>
      <div className='relative z-10 w-full md:w-[50%] p-10 mt-20'>
        <p className='text-[#9FFFA9] text-[72px] font-semibold'>Skill</p>
      </div>

      {listIcon.map((section, sectionIndex) => (
        <div key={sectionIndex} className='relative z-[10] flex flex-col gap-2 p-10'>
          <p className='font-semibold text-white text-2xl mb-4'>
            {section.title}
          </p>

          <div className='flex flex-wrap justify-center md:justify-start gap-10'>
            {section.data.map(({ Icon, title, href }, iconIndex) => (
              <div key={iconIndex} className='w-[100px] group'>
                <a
                  href={href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex flex-col items-center transition-transform hover:scale-110'
                >
                  <Icon
                    size={50}
                    className={`text-white transition-colors duration-300 ${
                      iconIndex % 2 === 0
                        ? 'group-hover:text-[#0057FF]'
                        : 'group-hover:text-[#9FFFA9]'
                    }`}
                  />
                  <p className='text-center text-white mt-2'>{title}</p>
                </a>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* BACKGROUND LABEL */}
      <div className='absolute bottom-[10px] flex justify-end w-full p-10'>
        <p className='text-[#252525] w-[50%] text-[100px] xl:text-[200px] leading-[80%] font-semibold'>
          Skill
        </p>
      </div>
    </div>
  );
}
