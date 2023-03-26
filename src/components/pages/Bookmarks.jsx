import React, { useEffect } from 'react'
import { Heading } from '../utilities'

const Bookmarks = () => {
  useEffect(() => { document.title = 'Hibatillah - Bookmarks' }, [])

  return (
    <div className='min-h-screen'>
      <div className="container py-20">
        <Heading 
            page="bookmarks"
            title="Make it"
            highlight="easier"
            paragraph="Get inspired from our collection of bookmarks. We have collected the best resources from around the web to help us make something amazing and improve your skills. Make the most of it, enjoy!" 
          />
      </div>
    </div>
  )
}

export default Bookmarks