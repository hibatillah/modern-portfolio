import React from 'react'
import { Heading } from '../utilities'

const Notfound = () => {
  return (
    <div className='screen'>
      <div className="container py-20 h-full grid place-items-center">
        <div className='flex flex-col justify-center items-center '>
          <Heading 
              page="Not Found"
              title="Something"
              highlight="went wrong"
              paragraph="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus sapiente recusandae enim quos aliquid molestias alias suscipit." 
              util="items-center text-center"
            />
            <a href="/">
              <div className="px-6 py-2 mt-8 rounded bg-gradient-2 font-semibold text-white active:brightness-90">Back to home</div>
            </a>
        </div>
      </div>
    </div>
  )
}

export default Notfound