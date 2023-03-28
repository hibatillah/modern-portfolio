import React from 'react'
import { useParams } from "react-router-dom";
import { bookmarks } from '../../db';

const ProjectDesc = ({data}) => {
  let params = useParams();
  
  return (
    <div className="min-h-[calc(100vh-127px)] container">
      {bookmarks.map(item =>
        item.id === params.id ?
        <div className='text-white'>{item.title}</div>
      : null
      )}
    </div>
  )
}

export default ProjectDesc