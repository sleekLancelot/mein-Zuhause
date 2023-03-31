import React from 'react'
import { HOCWrapper } from '../hoc'
import { BallCanvas } from '../components'
import { technologies } from '../utils'

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology, index) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas 
            name={technology.name}
            icon={technology.icon}
          />
        </div>
      ))}
    </div>
  )
}

export default HOCWrapper(Tech, Tech.name?.toLocaleLowerCase())