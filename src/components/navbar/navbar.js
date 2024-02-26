import React, { useState } from 'react';
import { motion } from "framer-motion"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = `h-[2px] w-8 my-1 rounded-full bg-gray-50 transition ease transform duration-300`;

  return (
    <div className="w-screen h-11 fixed top-0 bg-gray-900/80 text-gray-50 font-light text-lg z-50 overflow-hidden backdrop-blur-xl">
      <ul className='hidden sm:flex flex-row justify-center gap-10 p-2 px-10'>
        <motion.li className='nav-animation'>O mnie</motion.li>
        <motion.li className='nav-animation'>Zdrowie</motion.li>
        <motion.li className='nav-animation'><a href='#aktywność'>Aktywność</a></motion.li>
        <motion.li className='nav-animation'>Sklep</motion.li>
      </ul>


      <button onClick={() => setIsOpen(!isOpen)} className="flex sm:hidden flex-col h-fit w-fit justify-center group absolute right-10 top-2 z-50 cursor-pointer">
        <div className={`${genericHamburgerLine} ${ isOpen ? "rotate-45 translate-y-[10px] opacity-100 group-hover:opacity-70" : "opacity-100 group-hover:opacity-70"}`} />
        <div className={`${genericHamburgerLine} ${ isOpen ? "opacity-0" : "opacity-100 group-hover:opacity-70"}`}/>
        <div className={`${genericHamburgerLine} ${ isOpen ? "-rotate-45 -translate-y-[10px] opacity-100 group-hover:opacity-70" : "opacity-100 group-hover:opacity-70"}`}/>
      </button>

      <div className={`block sm:hidden fixed bg-black/80 text-gray-50 font-light text-lg inset-0 transition ease transform duration-300 z-10 pointer-events-none ${isOpen ? "translate-y-0" : "-translate-y-[105%] blur-3xl "} `}>
        <ul className='fixed text-5xl top-1/2 right-1/2 -translate-y-1/2 translate-x-1/2 flex flex-col gap-10 items-center'>
            <motion.li  whileHover={{ scale: 1.2 }} 
                        whileTap={{ scale: 0.8 }}
                        style={{ x: 0 }}
                        onClick={() => setIsOpen(false)} className='cursor-pointer'>O mnie</motion.li>
            <motion.li whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                        style={{ x: 0 }} 
                        onClick={() => setIsOpen(false)} className='cursor-pointer'>Zdrowie</motion.li>
            <motion.li whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                        style={{ x: 0 }} 
                        onClick={() => setIsOpen(false)} className='cursor-pointer'>Aktywność</motion.li>
            <motion.li whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                        style={{ x: 0 }} 
                        onClick={() => setIsOpen(false)} className='cursor-pointer'>Sklep</motion.li>
          </ul>
      </div>
      
    </div>
  );
}

export default Navbar;
