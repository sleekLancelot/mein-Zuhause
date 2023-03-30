import React from "react";
import { motion } from "framer-motion";
import { AboutCard } from "../components";
import { services } from "../utils";
import { fadeIn, styles, textVariant } from "../theme";
import { HOCWrapper } from "../hoc";

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>About Me.</h2>
    </motion.div>

    <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] font-montserrat'
    >
      I'm a skilled software developer with experience in TypeScript and
      JavaScript, and expertise in frameworks like React, Node.js, and
      Three.js. I'm a quick learner and collaborate closely with clients to
      create efficient, scalable, and user-friendly solutions that solve
      real-world problems. Let's work together to bring your ideas to life!
    </motion.p>

    <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service, index) => (
        <AboutCard key={service.title} index={index} {...service} />
      ))}
    </div>
  </>
  )
}

export default HOCWrapper(About, About.name?.toLowerCase());
