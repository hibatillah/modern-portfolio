import React, { useEffect } from 'react'
import { Heading } from '../utilities'

const Bookmarks = () => {
  useEffect(() => { document.title = 'Hibatillah - Bookmarks' }, [])

  return (
    <div className='min-h-screen'>
      <div className="container py-20">
        <Heading 
            page="bookmarks"
            title="Get"
            highlight="Inspired"
            paragraph="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus sapiente recusandae enim quos aliquid molestias alias suscipit, sint animi et." 
          />
      </div>
    </div>
  )
}

export default Bookmarks