import React from 'react'
import { useState, useEffect } from 'react'


const Nav = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <header id='nav' className={`fixed w-full bg-slate-700 flex justify-between items-center text-gray-300 py-6 px-8 md:px-32 drop-shadow-md mx-0 2xl:px-60 xl:px-60`}   >
        <ul className='hidden xl:flex items-center font-semibold text-base '>
            <li className='  mx-3 cursor-pointer' ><a className='px-5 py-3 hover:bg-blue-500 hover:text-white rounded-md transition-all' href="#">Home</a> </li>
            <li className='  mx-3 cursor-pointer' ><a className='px-5 py-3 hover:bg-blue-500 hover:text-white rounded-md transition-all' href="#about-me">About</a> </li>
            <li className='  mx-3 cursor-pointer' ><a className='px-5 py-3 hover:bg-blue-500 hover:text-white rounded-md transition-all' href="#my-skills">Skills</a> </li>
            <li className='  mx-3 cursor-pointer' ><a className='px-5 py-3 hover:bg-blue-500 hover:text-white rounded-md transition-all' href="#projects">Projects</a> </li>
        </ul>

        <a className='border-multicolor rounded-md text-base font-semibold  hover:bg-blue-500 hover:text-white transition-all' href="#contact-me">Contact me</a>
        <i className='bx bx-menu xl:hidden block text-5xl cursor-pointer' onClick={()=> setIsMenuOpen(!isMenuOpen)}></i>
        <div className={`absolute xl:hidden top-24 left-0 w-full bg-slate-700 flex flex-col items-center gap-6 font-semibold text-lg transform 
        transition-transform ${isMenuOpen ? "opacity-100" : "opacity-0"}`} style={{transition:"transform 0.3s ease, opacity 0.3s ease, height 0.3s ease"}}>
          <li className={`list-none w-full text-center p-4 hover:bg-blue-500 hover:text-white transition-all cursor-pointer ${isMenuOpen ? '' : 'hidden' }`}> <a  className='py-4 px-12' href="#">Home</a> </li>
          <li className={`list-none w-full text-center p-4 hover:bg-blue-500 hover:text-white transition-all cursor-pointer ${isMenuOpen ? '' : 'hidden' }`}> <a  className='py-4 px-12' href="#about-me">About</a> </li>
          <li className={`list-none w-full text-center p-4 hover:bg-blue-500 hover:text-white transition-all cursor-pointer ${isMenuOpen ? '' : 'hidden' }`}> <a  className='py-4 px-12' href="#my-skills">Skills</a> </li>
          <li className={`list-none w-full text-center p-4 hover:bg-blue-500 hover:text-white transition-all cursor-pointer ${isMenuOpen ? '' : 'hidden' }`}> <a  className='py-4 px-12' href="#projects">Projects</a> </li>
        </div>
    </header>
  )
}

export default Nav