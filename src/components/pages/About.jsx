import React, { useEffect } from 'react'
import { Heading } from '../utilities'
import data from '../../db/footer.json'
import profile from '../../assets/profile.png'
import CV from '../../assets/docs/Hibatillah\'s CV.pdf'

const About = () => {
  useEffect(() => { document.title = 'Hibatillah - About' }, [])

  return (
    <>
      <div className='container py-20 space-y-6 grid grid-cols-3 relative'>
        <div className="col-span-2">
          <Heading 
            page="about"
            title="Let's"
            highlight="Collaborate!"
            paragraph="Let's team up and make something amazing! I'm always looking for collaborations. Let's get started!" 
          />
          <form action="#" method="post">
            <div className="w-fit mt-10 rounded-full overflow-hidden">
              <input type="email" name="collab" id="collab" placeholder='Enter your email' className='w-60 py-2 pl-6 pr-2 rounded-l-full focus:outline-none placeholder:text-slate-500' />
              <button type="submit" className='py-2 pl-4 pr-6 rounded-r-full text-white font-medium bg-gradient-1 active:brightness-90'>Send</button>
            </div>
          </form>
        </div>
        <div className="col-span-1 flex justify-start items-end">
          
        </div>
        <span className='absolute right-0 bottom-0 z-0 w-60 aspect-square rounded-full bg-blue-600/50 blur-[100px]' />
      </div>
      <div className="container py-10 flex items-start gap-10 border-t border-slate-400/30">
        <div className="flex-1 flex gap-8 items-start text-lg">
          <div className="w-10 rounded-lg overflow-hidden">
            <img src={profile} alt="hibatillah's logo" className='img-cover' />
          </div>
          <div className="space-y-4">
            <div className="text-slate-200 font-semibold">
              <h4>M. Hibatillah Hasanin</h4>
              <h4>Riau, Indonesia</h4>
            </div>
            <ul className="w-fit text-slate-500">
              <li>
                <a href="mailto:hibatillah21si@mahasiswa.pcr.ac.id" target="_blank" rel="noopener noreferrer">
                  <div className='w-fit transition-all duration-300 cursor-pointer hover:text-blue-500 hover:translate-x-2'>hibatillah21si@mahasiswa.pcr.ac.id</div>
                </a>
              </li>
              <li>
                <a href="mailto:hibatillahhabib@gmail.com" target="_blank" rel="noopener noreferrer">
                  <div className='w-auto transition-all duration-300 cursor-pointer hover:text-blue-500 hover:translate-x-2'>hibatillahhabib@gmail.com</div>
                </a>
              </li>
              <li>
                <a href="https://wa.me/6281381800123" target="_blank" rel="noopener noreferrer">
                  <div className='w-auto transition-all duration-300 cursor-pointer hover:text-blue-500 hover:translate-x-2'>+62 81381800123</div>
                </a>
              </li>
            </ul>
            <a href={CV} download="CV Hibatillah">
              <button className='w-52 px-8 py-2 mt-5 flex flex-nowrap justify-center items-center gap-3 rounded-lg bg-gradient-2 text-lg font-semibold text-white active:brightness-90 overflow-hidden group'>
                <div className='flex-none flex gap-2 items-center translate-x-[52%] visible opacity-100 transition-all duration-500 ease-out group-hover:-translate-x-full group-hover:invisible group-hover:opacity-0'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-text-fill" viewBox="0 0 16 16">
                    <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM4.5 9a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1h-4z"/>
                  </svg>
                  <span>CV Hibatillah</span>
                </div>
                <div className='flex-none flex gap-3 items-center translate-x-full invisible opacity-0 transition-all duration-500 ease-out group-hover:-translate-x-[55%] group-hover:visible group-hover:opacity-100'>
                  Download
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="2" class="w-6 h-6 fill-none stroke-white">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </div>
              </button>
            </a>
          </div>
        </div>
        <div className="flex-1 flex justify-evenly items-start text-lg">
          {data.map(item =>
            <div key={item.id} className="flex-none">
              <h4 className='text-white font-semibold'>{item.title}</h4>
              <ul className='text-slate-500 mt-5 space-y-1.5'>
                {item.list.map(li =>
                  <li>
                    <a href={li.link} target="_blank" rel="noopener noreferrer">
                      <div className='transition-all duration-300 cursor-pointer hover:text-blue-500 hover:translate-x-2'>{li.name}</div>
                    </a>
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default About