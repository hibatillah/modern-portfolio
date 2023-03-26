import React from 'react'

const Label = ({title}) => {
  return (
    <div className='w-fit px-8 py-1 rounded-full text-sm text-white uppercase border-label tracking-wide'>{title}</div>
  )
}

export default Label