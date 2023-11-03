import React from 'react'

const navbar = () => {
  return (
    <div className="w-fit h-fit fixed top-2 left-1/2 -translate-x-1/2 bg-black/70 rounded-full border border-white text-white font-extralight text-lg backdrop-blur-xl px-5">
      <ul className='flex flex-row gap-5 p-2'>
        <li>O mnie</li>
        <li>PRO300</li>
        <li>Aloes</li>
        <li>Sklep</li>
      </ul>
    </div>
  )
}

export default navbar