import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn, styles } from '../theme';
import { ProjectProp } from '../utils';

interface ProjectCardProp extends ProjectProp {
	index: number
}

const ProjectCard = ({
  index,
  ...project
} : ProjectCardProp) => {
	const isEven = (indexNum: number) => (indexNum + 1) % 2 === 0

  return (
		<motion.div variants={fadeIn(`${isEven(index) ? 'right' : 'left'}`, "spring", index * 0.5, 0.75)}>
			<div 
				className={`flex flex-col lg:h-[380px] lg:justify-center lg:items-center lg:gap-14 lg:mb-24 ${isEven(index) ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
			>
				<div
					className="sm:self-end sm:w-[80%] lg:h-full lg:basis-1/2 cursor-pointer"
				>
					<img
						className='w-full h-full rounded-2xl hover:scale-105 transition-all duration-1000'
						src={project.image}
						alt={project.name}
					/>
				</div>

				<div
					className="sm:self-start sm:w-[80%] lg:h-full lg:basis-1/2 p-5 bg-transparent_black lg:bg-transparent rounded-2xl z-10 relative -top-10 sm:-top-20 lg:top-0"
				>
					<h3 className={`${styles.sectionHeadText} font-poppins`}>{project.name}</h3>
					<p className={`${styles.sectionContent} mt-12`}>{project.description}</p>

					<div className='mt-4 flex flex-wrap gap-2'>
						{project?.tags.map((tag, index) => (
							<p
							key={index}
							className={`flex justify-center items-center text-[14px] ${tag.color}`}
							>
								{
									!!tag?.img ?
									<img
										className={`w-[20px] h-[20px] mr-1`}
										src={tag?.img}
										alt={tag?.name}
									/> :
									<span>#</span>
								}
								{tag.name}
							</p>
						))}
					</div>

					<div className='flex flex-wrap justify-between items-center'>
						{
							project?.source_code_link &&
							<a href={project?.source_code_link}>
								<button className='rounded-xl mt-8 bg-white-100 text-black p-4 w-fit h-[40px] cursor-pointer flex justify-center items-center whitespace-nowrap'>Source code</button>
							</a>
						}

						{
							!!project?.live_links?.length &&
							project?.live_links?.map((live_link, index) => (
								<a key={index} href={live_link?.link}>
									<button className='rounded-xl mt-8 bg-white-100 text-black p-6 w-[105px] h-[40px] cursor-pointer flex justify-center items-center whitespace-nowrap'>{`Visit ${live_link?.platform}`}</button>
								</a>
							))
							
						}
					</div>
				</div>
			</div>
		</motion.div>
  )
}

export {ProjectCard}