import React from 'react'

export const BookmarkCard = ({data}) => {
  const labelColor = (data) => {
    switch (data) {
      case 'inspiration':
        return 'bg-teal-500'
      case 'icon':
        return 'bg-blue-500'
      case 'illustration':
        return 'bg-indigo-500'
      case 'photo':
        return 'bg-skye-500'
      case 'mockup':
        return 'bg-yellow-500'
      case 'pattern':
        return 'bg-red-500'
      case 'typography':
        return 'bg-stone-500'
      case '3D':
        return 'bg-pink-500'
      case 'tools':
        return 'bg-orange-500'
      case 'plugin':
        return 'bg-lime-500'
      case 'quotes':
        return 'bg-purple-500'
      default:
        return 'bg-slate-500'
    }
  }
  console.log(labelColor)
  
  return (
    <div className='w-full h-full p-5 flex items-start gap-6 rounded-xl bg-slate-800/60 backdrop-blur-lg cursor-pointer hover:bg-slate-700/40 hover:ring-1 hover:ring-slate-200/20'>
      <div className="flex-none w-10 mb-2">
        <img src={data.img} alt="bookmark's icon" className='img-contain mt-1 bg-top' />
      </div>
      <div className="flex-auto space-y-3">
        <div className="w-full flex justify-between">
          <div className="">
            <h3 className='text-xl font-semibold text-white'>{data.title}</h3>
            <h4 className='text-slate-500'>{data.path}</h4>
          </div>
          <div className={`h-fit px-6 py-1 mt-1 rounded-full font-medium text-white ${labelColor(data.label)}`}>{data.label}</div>
        </div>
        <p className='leading-snug line-clamp-2'>{data.desc}</p>
      </div>
    </div>
  )
}

export const ProjectCard = () => {
  return (
    <div className="w-full aspect-square p-5 flex flex-col rounded-2xl bg-slate-800/60 cursor-pointer hover:bg-slate-700/40 group/card">
      <div className="flex-1 rounded-xl bg-slate-700/70 relative">
        <div className="absolute right-4 bottom-4 flex-none h-fit px-2 py-px rounded-full bg-blue-500 text-xs font-medium text-white uppercase">new</div>
      </div>
      <div className="flex-none flex justify-between px-2 pt-4">
        <div className="">
          <div className="flex gap-3 items-baseline">
            <h3 className='text-xl font-bold text-slate-200 group-hover/card:text-blue-500'>Educate X</h3>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" class="w-4 h-4 hidden group-hover/card:block group-hover/card:stroke-blue-500">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </div>
          <p className='text-sm font-medium'>Learn code website</p>
        </div>
      </div>
    </div>
  )
}