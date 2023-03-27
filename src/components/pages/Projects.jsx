import React, { useEffect } from 'react'
import { Heading } from '../utilities'
import { bookmarks } from '../../db'
import { ProjectCard } from '../utilities'

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
      <div className="container py-10 border-t border-slate-400/30 relative">
        <ul className="grid grid-cols-3 gap-5">
          {bookmarks.map(item =>
            <li className='col-span-1 p-5'>
              <ProjectCard data={item} />
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default Projects