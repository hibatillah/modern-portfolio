import React, { useEffect } from 'react'
import { Heading } from '../utilities'

const Home = () => {
  useEffect(() => { document.title = 'Hibatillah' }, [])
  
  return (
    <div className='screen'>
      <div className="container py-20">
        <Heading 
            page="portfolio"
            title="I'm a UI Designer & FrontEnd Developer,"
            highlight="M. Hibatillah"
            paragraph="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus sapiente recusandae enim quos aliquid molestias alias suscipit, sint animi et." 
            util="w-2/3"
          />
      </div>
    </div>
  )
}

export default Home