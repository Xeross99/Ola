import React from 'react'

const navbar = () => {
  return (
    <div className="w-fit h-fit fixed top-2 left-1/2 -translate-x-1/2 bg-white/70 rounded-full border-2 border-gray-50 text-gray-800 font-medium text-lg backdrop-blur-xl px-5 shadow-md shadow-gray-100/50 z-50">
      <ul className='flex flex-row gap-16 p-2'>
        <li className='nav-animation'>O mnie</li>
        <li className='nav-animation'>PRO300</li>
        <li className='nav-animation'>Aloes</li>
        <li className='nav-animation'>Sklep</li>
      </ul>
    </div>
  )
}

export default navbar