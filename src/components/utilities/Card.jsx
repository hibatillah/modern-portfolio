import React from 'react'

export const BookmarkCard = ({data}) => {
  return (
    <div className='flex-1 p-5 flex flex-col items-start gap-6 rounded-xl bg-glass hover:ring-1 hover:ring-slate-200/50'>
      <div className="w-full flex justify-between items-start">
        <div className="w-fit px-6 py-1 mt-1 rounded-full text-white bg-blue-600">{data.label}</div>
        <div className="flex-none flex justify-between items-start w-12 mb-2">
          <img src={data.img} alt="bookmark's icon" className='img-contain mt-1' />
        </div>
      </div>
      <div className="flex-auto space-y-2">
        <div className="">
          <h3 className='text-xl font-semibold text-white'>{data.title}</h3>
          <h4 className='text-slate-400'>{data.url}</h4>
        </div>
        {/* <p className='text-slate-300 leading-snug'>{data.desc}</p> */}
      </div>
    </div>
  )
}
// export const BookmarkCard = ({data}) => {
//   return (
//     <div className='w-full p-5 flex items-start gap-6 rounded-xl bg-glass hover:ring-1 hover:ring-slate-200/50'>
//       <div className="flex-none w-12 mb-2">
//         <img src={data.img} alt="bookmark's icon" className='img-contain mt-1' />
//       </div>
//       <div className="flex-auto space-y-2">
//         <div className="">
//           <h3 className='text-xl font-semibold text-white'>{data.title}</h3>
//           <h4 className='text-slate-400'>{data.url}</h4>
//         </div>
//         <p className='text-slate-300 leading-snug'>{data.desc}</p>
//       </div>
//       <div className="flex-none">
//         <div className="px-6 py-1 mt-1 rounded-full text-white bg-blue-600">{data.label}</div>
//       </div>
//     </div>
//   )
// }

export const ProjectCard = () => {
  return (
    <div>Project Card</div>
  )
}