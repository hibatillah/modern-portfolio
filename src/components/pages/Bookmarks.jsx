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
            paragraph="Do it easier with our collection of bookmarks. We have collected many resources from around the internet to help us make something amazing and improve skills. Make the most of it, enjoy!" 
          />
      </div>
    </div>
  )
}

export default Bookmarks