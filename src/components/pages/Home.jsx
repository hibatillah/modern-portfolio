import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Heading } from '../utilities'

const Home = () => {
  useEffect(() => { document.title = 'Hibatillah' }, [])
  
  return (
    <div className='screen'>
      <div className="container py-20 grid grid-cols-5">
        <div className="col-span-3">
          <Heading 
              page="portfolio"
              title="I'm a UI Designer & FrontEnd Developer,"
              highlight="M. Hibatillah"
              paragraph="Student majoring Information System, interested in design. I'm passionate about creating various design. Get to know me better." 
            />
            <Link to="projects">
              <button className="w-1/4 px-6 py-2 mt-8 flex  justify-center items-center gap-3 rounded-full bg-gradient-1 text-lg font-semibold text-white active:brightness-90 group">
                <span className='translate-x-[20%] transition-all duration-300 group-hover:translate-x-1'>Get Started</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="2" class="w-6 h-6 fill-none stroke-white invisible opacity-0 translate-x-full transition-all duration-300 group-hover:visible group-hover:opacity-100 group-hover:translate-x-1">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </button>
            </Link>
        </div>
        <div className="col-span-2">

        </div>
      </div>
    </div>
  )
}

export default Home