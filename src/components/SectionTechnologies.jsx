import React from 'react'
import html from '../assets/technologies/Group 7.png'
import css from '../assets/technologies/Group 6.png'
import react from '../assets/technologies/Group1.png'
import tailwind from "../assets/technologies/Group 5.png"
import nodejs from "../assets/technologies/Group 2.png"
import express from "../assets/technologies/Group9.png"
import mongodb from "../assets/technologies/Group 8.png"
import mysql from "../assets/technologies/Group 3.png"
import net from "../assets/technologies/Group 4.png"

// sm:  >640px
// md:  >768px
// lg:  >1024px
// xl:  >1280px
// 2xl: >1536px


const SectionTechnologies = () => {
  return (
    <section id='my-skills' className='2xl:mx-36 pt-16 pb-2'>
        <h3 className='skills text-center text-blue-200 font-semibold text-3xl mt-10 lg:mt-24'>Skills</h3>
        <p className="gtkm text-center font-bold text-sm mb-6">My technologies</p>
        <div className='skills mx-4 flex flex-wrap justify-center lg:mx-32 xl:mx-52 2xl:mx-72'>
            <div className='cont-tech flex flex-col bg-zinc-800 h-2/4 justify-center p-4 m-4 items-center w-28 rounded-md'> <img src={html} alt=""  className='w-3/4'/> <p className='text-center text-white'>HTML</p> <p className='porcentaje text-center bg-zinc-900 text-zinc-700 font-semibold rounded-lg px-6'>90%</p> </div>
            <div className='cont-tech flex flex-col bg-zinc-800 h-2/4 justify-center p-4 m-4 items-center w-28 rounded-md'> <img src={css} alt=""  className='w-3/4'/> <p className='text-center text-white'>CSS</p> <p className='porcentaje text-center bg-zinc-900 text-zinc-700 font-semibold rounded-lg px-6'>90%</p> </div>
            <div className='cont-tech flex flex-col bg-zinc-800 h-2/4 justify-center p-4 m-4 items-center w-28 rounded-md'> <img src={react} alt=""  className='w-3/4'/> <p className='text-center text-white'>React</p> <p className='porcentaje text-center bg-zinc-900 text-zinc-700 font-semibold rounded-lg px-6'>80%</p> </div>
            <div className='cont-tech flex flex-col bg-zinc-800 h-2/4 justify-center p-4 m-4 items-center w-28 rounded-md'> <img src={tailwind} alt=""  className='w-3/4'/> <p className='text-center text-white'>Tailwind</p> <p className='porcentaje text-center bg-zinc-900 text-zinc-700 font-semibold rounded-lg px-6'>60%</p> </div>
            <div className='cont-tech flex flex-col bg-zinc-800 h-2/4 justify-center p-4 m-4 items-center w-28 rounded-md'> <img src={nodejs} alt=""  className='w-3/4'/> <p className='text-center text-white'>Node</p> <p className='porcentaje text-center bg-zinc-900 text-zinc-700 font-semibold rounded-lg px-6'>80%</p> </div>
            <div className='cont-tech flex flex-col bg-zinc-800 h-2/4 justify-center p-4 m-4 items-center w-28 rounded-md'> <img src={express} alt=""  className='w-3/4'/> <p className='text-center text-white'>Express</p> <p className='porcentaje text-center bg-zinc-900 text-zinc-700 font-semibold rounded-lg px-6'>80%</p> </div>
            <div className='cont-tech flex flex-col bg-zinc-800 h-2/4 justify-center p-4 m-4 items-center w-28 rounded-md'> <img src={mongodb} alt=""  className='w-3/4'/> <p className='text-center text-white'>MongoDB</p> <p className='porcentaje text-center bg-zinc-900 text-zinc-700 font-semibold rounded-lg px-6'>80%</p> </div>
            <div className='cont-tech flex flex-col bg-zinc-800 h-2/4 justify-center p-4 m-4 items-center w-28 rounded-md'> <img src={mysql} alt=""  className='w-3/4'/> <p className='text-center text-white'>MySQL</p> <p className='porcentaje text-center bg-zinc-900 text-zinc-700 font-semibold rounded-lg px-6'>70%</p> </div>
            <div className='cont-tech flex flex-col bg-zinc-800 h-2/4 justify-center p-4 m-4 items-center w-28 rounded-md'> <img src={net} alt="" className='w-3/4'/> <p className='text-center text-white'>.NET</p> <p className='porcentaje text-center bg-zinc-900 text-zinc-700 font-semibold rounded-lg px-6'>50%</p> </div>
        </div>
    </section>
  )
}

export default SectionTechnologies