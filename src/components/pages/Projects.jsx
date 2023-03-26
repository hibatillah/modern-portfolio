import React, { useEffect } from 'react'
import { Heading } from '../utilities'

const Projects = () => {
  useEffect(() => { document.title = 'Hibatillah - Projects' }, [])
  
  return (
    <div className='min-h-screen'>
      <div className="container py-20">
        <Heading 
            page="projects"
            title="Make some"
            highlight="Design"
            paragraph="Discover my projects! Browse through my projects adventures and see the innovative solutions I've developed. Have a look at my projects and get inspired!" 
          />
      </div>
    </div>
  )
}

export default Projects