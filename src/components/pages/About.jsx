import React, { useEffect } from 'react'
import { Heading } from '../utilities'
import data from '../../db/footer.json'
import logo from '../../assets/logo.webp'

const About = () => {
  useEffect(() => { document.title = 'Hibatillah - About' }, [])

  return (
    <>
      <div className='container py-20 space-y-6'>
        <Heading 
          page="about"
          title="Let's"
          highlight="Collaborate!"
          paragraph="Let's team up and make something amazing! I'm always looking for collaborations and partnerships. Let's get started!" 
        />
        <form action="#" method="post">
          <div className="w-fit rounded-full overflow-hidden">
            <input type="email" name="collab" id="collab" placeholder='Enter your email' className='w-60 py-2 pl-6 pr-2 rounded-l-full focus:outline-none placeholder:text-slate-500' />
            <button type="submit" className='py-2 pl-4 pr-6 rounded-r-full text-white font-medium bg-gradient-2 active:brightness-90'>Send</button>
          </div>
        </form>
      </div>
      <div className="container py-10 flex items-start gap-10 border-t border-slate-400/30">
        <div className="flex-1 flex gap-8 items-start text-lg">
          <img src={logo} alt="hibatillah's logo" width={40} />
          <div className="space-y-4">
            <div className="text-slate-200 font-semibold space-y-0.5">
              <h4>M. Hibatillah Hasanin</h4>
              <h4>Riau, Indonesia</h4>
            </div>
            <ul className="w-fit text-slate-400 space-y-0.5">
              <li>
                <a href="mailto:hibatillah21si@mahasiswa.pcr.ac.id" target="_blank" rel="noopener noreferrer">
                  <div className='w-fit transition-all duration-300 cursor-pointer hover:text-blue-500 hover:translate-x-2'>hibatillah21si@mahasiswa.pcr.ac.id</div>
                </a>
              </li>
              <li>
                <a href="mailto:hibatillahhabib@gmail.com" target="_blank" rel="noopener noreferrer">
                  <div className='w-fit transition-all duration-300 cursor-pointer hover:text-blue-500 hover:translate-x-2'>hibatillahhabib@gmail.com</div>
                </a>
              </li>
              <li>
                <a href="https://wa.me/6281381800123" target="_blank" rel="noopener noreferrer">
                  <div className='w-auto transition-all duration-300 cursor-pointer hover:text-blue-500 hover:translate-x-2'>+62 81381800123</div>
                </a>
              </li>
            </ul>
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