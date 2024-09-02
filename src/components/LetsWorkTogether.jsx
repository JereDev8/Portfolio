import React from 'react'
import gmailLogo from '../assets/gmail-logo.png'

// sm:  >640px
// md:  >768px
// lg:  >1024px
// xl:  >1280px
// 2xl: >1536px

const LetsWorkTogether = () => {
  return (
    <div className='px-6 sm:px-16 '>
    <div className='inter text-white border-purple-700  flex mt-60 mb-6'>
    
        <div className='border-blue-600  w-1/2 flex flex-col justify-center'>
            <label className='text-lg sm:text-2xl md:text-4xl md:pl-20 lg:pl-28 xl:pl-40 xl:text-6xl 2xl:pl-56 ' htmlFor="">Let's</label> 
            <label className='text-lg sm:text-2xl md:text-4xl md:pl-20 lg:pl-28 xl:pl-40 xl:text-6xl 2xl:pl-56 ' htmlFor="">Work Together </label>
        </div>
        <div className='border-green-500  w-1/2  flex items-center sm:justify-center'>
            <div className='w-full md:w-4/6 lg:w-3/6 2xl:w-2/6 gap-2 flex justify-center items-center border-2 border-slate-500 rounded-md py-2'>  
                <img className='w-1/6 h-full md:w-10' src={gmailLogo} alt="" />
                <label className='w-4/6 break-words md:w-4/6 lg:w-3/6 text-sm' htmlFor="">quinterosjeremias8@gmail.com</label>
            </div>
        </div>
    </div>
    
    </div>

  ) 
}

export default LetsWorkTogether