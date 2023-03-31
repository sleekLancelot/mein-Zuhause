import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn, styles } from '../theme';

interface ProjectCardProp {
	index: number
	project: {
		name: string;
		description: string;
		tags: {
			name: string;
			color: string;
		}[];
		image: string;
		source_code_link: string;
	}
}

const ProjectCard = ({
  index,
  project
} : ProjectCardProp) => {
	const isEven = (indexNum: number) => (indexNum + 1) % 2 === 0

  return (
		<motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
			<div 
				className={`flex flex-col lg:h-[400px] lg:justify-center lg:items-center lg:gap-14 lg:mb-20 cursor-pointer ${isEven(index) ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
			>
				<div
					className="sm:self-end sm:w-[80%] lg:h-full lg:basis-1/2"
				>
					<img
						className='w-full h-full rounded-2xl hover:scale-105 transition-all duration-1000'
						src={project.image}
						alt={project.name}
					/>
				</div>

				<div
					className="sm:self-start sm:w-[80%] lg:h-full lg:basis-1/2 p-5 bg-transparent_black rounded-2xl z-10 relative -top-10 sm:-top-20 lg:top-0"
				>
					<h3 className={`${styles.sectionHeadText} font-poppins`}>{project.name}</h3>
					<p className={`${styles.sectionContent} mt-12`}>{project.description}</p>

					<button className=''>Visit</button>
				</div>
			</div>
		</motion.div>
  )
}

export {ProjectCard}