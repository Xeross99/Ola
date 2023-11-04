import React, { useState } from 'react';
import { motion } from "framer-motion"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = `h-[2px] w-8 my-1 rounded-full bg-gray-50 transition ease transform duration-300`;

  return (
    <div className="w-screen h-11 fixed top-0 bg-black/80 text-gray-50 font-light text-lg backdrop-blur-xl px-10 z-50">
      <ul className='hidden sm:flex flex-row justify-end gap-10 p-2'>
        <motion.li className='nav-animation'>O mnie</motion.li>
        <motion.li className='nav-animation'>Zdrowie</motion.li>
        <motion.li className='nav-animation'>Aktywność</motion.li>
        <motion.li className='nav-animation'>Sklep</motion.li>
      </ul>

      <button onClick={() => setIsOpen(!isOpen)} className="flex sm:hidden flex-col h-fit w-fit justify-center group absolute right-10 top-2">
        <div className={`${genericHamburgerLine} ${ isOpen ? "rotate-45 translate-y-[10px] opacity-100 group-hover:opacity-70" : "opacity-100 group-hover:opacity-70"}`} />
        <div className={`${genericHamburgerLine} ${ isOpen ? "opacity-0" : "opacity-100 group-hover:opacity-70"}`}/>
        <div className={`${genericHamburgerLine} ${isOpen ? "-rotate-45 -translate-y-[10px] opacity-100 group-hover:opacity-70" : "opacity-100 group-hover:opacity-70"}`}/>
      </button>
    </div>
  );
}

export default Navbar;
