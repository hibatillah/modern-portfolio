import React from 'react'
import { Heading } from '../utilities'
import logo from '../../assets/logo.webp'

const About = () => {
  const mine = [
    { 
      id: 1,
      title: 'Tech Stack', 
      list: [
        { name: 'Figma', link: 'https://www.figma.com/' },
        { name: 'HTML', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
        { name: 'CSS', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
        { name: 'JavaScript', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
        { name: 'Bootstrap', link: 'https://getbootstrap.com/' },
        { name: 'TailwindCSS', link: 'https://tailwindcss.com/' },
        { name: 'ReactJS', link: 'https://reactjs.org/' }
      ]
    },
    { 
      id: 2,
      title: 'Projects', 
      list: [
        { name: 'UI Design', link: '/projects#design' },
        { name: 'Web Development', link: '/projects#web' },
        { name: 'App Development', link: '/projects#app' },
      ]
    },
    {
      id: 3,
      title: 'Social Media', 
      list: [
        { name: 'Github', link: 'https://github.com/hibatillah'},
        { name: 'Linkedin', link: 'https://www.linkedin.com/in/m-hibatillah-hasanin-8562a2268'},
        { name: 'Behance', link: 'https://www.behance.net/mhibatil'},
        { name: 'Dribbble', link: 'https://dribbble.com/hibatillah'},
        { name: 'Twitter', link: 'https://twitter.com/hbtllh'},
        { name: 'Instagram', link: 'https://www.instagram.com/hibat.illah'},
        { name: 'Telegram', link: 'https://t.me/hibatillahhabib'},
      ]
    }
  ]
  
  return (
    <>
      <div className='container py-20 space-y-6'>
        <Heading 
          page="about"
          title="Let's"
          highlight="Collaborate!"
          paragraph="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus sapiente recusandae enim quos aliquid molestias alias suscipit, sint animi et." 
        />
        <form action="#" method="post">
          <div className="rounded-full overflow-hidden">
            <input type="email" name="collab" id="collab" placeholder='Enter your email' className='py-2 pl-6 pr-2 rounded-l-full focus:outline-none' />
            <button type="submit" className='py-2 pl-4 pr-6 rounded-r-full text-white font-medium bg-gradient-2 active:brightness-90'>Collab</button>
          </div>
        </form>
      </div>
      <div className="container py-10 flex items-start gap-24 border-t border-slate-400/30">
        <div className="flex-1 space-y-4 text-lg">
          <img src={logo} alt="hibatillah's logo" width={40} />
          <div className="text-slate-200 font-semibold">
            <h4>M. Hibatillah Hasanin</h4>
            <h4>Riau, Indonesia</h4>
          </div>
          <ul className="w-fit text-slate-400">
            <li>
              <a href="mailto:hibatillahhabib@gmail.com" target="_blank" rel="noopener noreferrer">
                <div className='w-fit'>hibatillahhabib@gmail.com</div>
              </a>
            </li>
            <li>
              <a href="https://wa.me/6281381800123" target="_blank" rel="noopener noreferrer">
                <div className='w-auto'>+62 81381800123</div>
              </a>
            </li>
          </ul>
        </div>
        {mine.map(item =>
          <div key={item.id} className="flex-none text-lg">
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
    </>
  )
}

export default About