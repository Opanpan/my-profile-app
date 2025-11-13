'use client';

import Stepper, { Step } from '@/components/Stepper';

const data = [
  {
    title: 'KerjaYuk!',
    subtitle: 'Human Resource Application',
    date: 'PCS Payment - (Mar 2025 - Present)',
    tech: [
      'Javascript',
      'React',
      'Tailwind',
      'Shadcn',
      'Jenkins',
      'Docker',
      'Unit Test',
    ],
    img: ['/kerjayuk-admin.png', '/kerjayuk-pwa.png'],
    description: `This project builds an application for human resources. It features an admin view, where the admin represents HR, and a user view, where the user represents the employee. Features within the application include requests for permission, leave, and sick leave, as well as attendance tracking with location.`,
  },
  {
    title: 'Kopra by Mandiri',
    subtitle: 'Portal Application',
    date: 'Lawencon International - (Sep 2022 - Feb 2025)',
    tech: [
      'Javascript',
      'Typescript',
      'React',
      'Angular',
      'Tailwind',
      'Shadcn',
      'Antd',
      'Jenkins',
      'Docker',
      'Unit Test',
    ],
    img: ['/kopra.png', '/kopra-2.png'],
    description: `Kopra by Mandiri is a web-based digital platform that serves as an online portal, consolidating monitoring, and access services for the financial and transactional activities of Customers.`,
  },
];

export default function Experience() {
  return (
    <div className='bg-[#1C1C1C] h-[100vh] p-4 md:p-10'>
      <Stepper
        initialStep={1}
        onStepChange={(step) => {
          console.log(step);
        }}
        onFinalStepCompleted={() => console.log('All steps completed!')}
        backButtonText='Previous'
        nextButtonText='Next'
      >
        {data.map((item, index) => {
          return (
            <Step key={index}>
              <h1 className='text-[40px] md:text-[80px] font-semibold text-white'>
                {item.title}
              </h1>
              <p className='text-[15px] md:text-[30px] font-light text-white'>
                {item.subtitle}
              </p>
              <p className='text-white italic'>{item.date}</p>
              <div className='flex flex-wrap justify-center md:justify-start gap-2 mt-4'>
                {item.tech.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className='text-xs md:text-base flex items-center justify-center bg-[#9FFFA9] px-3 py-[2px] rounded-full'
                    >
                      {item}
                    </div>
                  );
                })}
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {item.img.map((path, index) => {
                  return (
                    <img
                      style={{
                        width: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center -70px',
                        marginTop: '1em',
                      }}
                      src={path}
                      key={index}
                    />
                  );
                })}
              </div>

              <p className='text-[20px] md:text-[40px] font-light text-white mt-4'>
                Overview
              </p>
              <p className='text-md text-white font-extralight'>
                {item.description}
              </p>
            </Step>
          );
        })}
      </Stepper>
    </div>
  );
}
