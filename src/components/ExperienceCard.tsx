import React from 'react'
import { VerticalTimelineElement, } from "react-vertical-timeline-component";

interface ExperienceProp {
  experience: {
    title: string;
    company_name: string;
    icon: string;
    iconBg: string;
    date: string;
    points: string[];
  }
}

const ExperienceCard = ({ experience } : ExperienceProp ) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          {
            experience.icon ?
            <img
              src={experience.icon}
              alt={experience.company_name}
              className='w-[60%] h-[60%] object-contain'
            /> :
            <div className='w-[60%] h-[60%]'></div>
          }
        </div>
      }
    >
      <div className='tracking-widest'>
        <h3 className='text-white text-[24px] font-poppins font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-clashDisplay font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2 font-montserrat'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  )
}

export {ExperienceCard}