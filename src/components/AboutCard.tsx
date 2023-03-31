import React from 'react'
import Tilt from 'react-parallax-tilt'
import { motion } from "framer-motion";

import { fadeIn } from '../theme'

interface AboutCardProp {
    index: number
    title: string
    icon: string
}
const AboutCard = ({ index, title, icon }: AboutCardProp) => {
  return (
    <Tilt
			tiltReverse={true}
			// glareEnable={true}
			// glareMaxOpacity={0.58}
			// glareColor="#ffffff"
			// glarePosition={'all'}
			// glareBorderRadius="10px"
			className='xs:w-[250px] w-full font-montserrat'
		>
			<motion.div
			variants={fadeIn("right", "spring", index * 0.5, 0.75)}
			className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
			>
			<div
				// options={{
				// 	max: 45,
				// 	scale: 1,
				// 	speed: 450,
				// }}
				className='bg-transparent_black rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
			>
					<img
					src={icon}
					alt='web-development'
					className='w-16 h-16 object-contain'
					/>

					<h3 className='text-white text-[20px] font-bold text-center'>
					{title}
					</h3>
			</div>
			</motion.div>
		</Tilt>
  )
}

export {AboutCard}