import React from 'react'
import logo from '../../assets/logo.webp'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  const menu = [
    { id: 1, name: 'Home', path: '/' },
    { id: 2, name: 'Projects', path: 'projects' },
    { id: 3, name: 'Bookmarks', path: 'bookmarks' },
    { id: 4, name: 'About', path: 'about' },
  ]
  
  return (
    <nav className='w-full'>
      <div className="container py-4 flex justify-between items-center select-none">
        <a href="/">
          <div className="flex gap-4">
            <img src={logo} alt="hibatillah's logo" width={28} />
            <h4 className='text-xl text-slate-200 font-bold tracking-wide'>Hibatillah</h4>
          </div>
        </a>
        <ul className="flex items-center">
          {menu.map(item =>
            <li key={item.id}>
              <NavLink
                to={item.path}
                className={({ isActive }) => isActive ? 'text-slate-50' : 'text-slate-500'}
              >
                <div className="px-5 py-1.5 rounded-lg font-semibold hover:bg-slate-400/20 hover:text-slate-300 active:text-slate-100">{item.name}</div>
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    </nav>
  )
}

export default Navigation