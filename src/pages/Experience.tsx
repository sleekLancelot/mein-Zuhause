import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";
import { styles, textVariant } from '../theme';
import { HOCWrapper } from '../hoc';
import { experiences } from '../utils';
import { ExperienceCard } from '../components';

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant(undefined, 10, 0.5)}>
        <p className={styles.sectionSubText}>Past work Experience</p>
        <h2 className={styles.sectionHeadText}>What i have done so far.</h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default HOCWrapper(Experience, Experience.name?.toLowerCase())