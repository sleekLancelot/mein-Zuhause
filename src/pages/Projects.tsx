import React from 'react'
import { motion } from "framer-motion";

import { HOCWrapper } from '../hoc';
import { ProjectCard } from '../components';
import { projects } from '../utils';
import { fadeIn, styles, textVariant } from '../theme';

const Projects = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className={`${styles.sectionContent} mt-3`}
        >
          The following projects showcase my skills and experience working with different technologies, managing projects, and collaborating with cross-functional teams consisting designers, product managers, and other developers to create scalable, high-availability, and high-quality products using real-world examples.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  )
}

export default HOCWrapper(Projects, Projects.name?.toLowerCase())
