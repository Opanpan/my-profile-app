'use client';

import Stepper, { Step } from '@/components/Stepper';

const data = [
  {
    title: 'KerjaYuk!',
    subtitle: 'Human Resource Application',
    url: 'https://kerjayuk-hr.pcsindonesia.co.id/login',
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
    url: 'https://koprabymandiri.com',
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
      'Micro Frontend',
    ],
    img: ['/kopra.png', '/kopra-2.png'],
    description: `Kopra by Mandiri is a web-based digital platform that serves as an online portal, consolidating monitoring, and access services for the financial and transactional activities of Customers.`,
  },
  {
    title: 'CIMB Biztrip',
    subtitle: 'Booking Flight and Hotel Application',
    url: '',
    date: 'Jojonomic - (Jan 2021 - Sep 2022)',
    tech: [
      'Javascript',
      'Vue',
      'Jquery',
      'Bootstrap',
      'Jenkins',
      'Docker',
      'Micro Frontend',
    ],
    img: [],
    description: `Biztrip is an internal application from CIMB Bank that employees use to book airline tickets and hotels, eliminating the need for personal funds and reimbursements. The app is integrated with the Traveloka API.`,
  },
];

export default function Experience() {
  return (
    <div className='bg-[#1C1C1C] h-full p-4 md:p-10'>
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
              {item.url ? (
                <a
                  href={item.url}
                  className='text-sm text-white italic'
                  target='_blank'
                >
                  {item.url}
                </a>
              ) : (
                <p className='text-sm text-white italic'>Private App</p>
              )}
              <p className='text-[15px] md:text-[30px] font-light text-white mt-4'>
                {item.subtitle}
              </p>
              <p className='text-white italic'>{item.date}</p>
              <div className='flex flex-wrap justify-center md:justify-start gap-4 mt-4'>
                {item.tech.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className='cursor-pointer bg-[#9FFFA9] text-xs md:text-base flex items-center justify-center px-3 py-[2px] rounded-full transition-all duration-300 ease-out hover:bg-[#0057FF] hover:text-white hover:scale-110
                    '
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
