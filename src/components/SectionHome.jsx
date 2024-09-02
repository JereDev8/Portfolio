import React from 'react'
import miniatura from '../assets/miniatura.png'

// sm:  >640px
// md:  >768px
// lg:  >1024px
// xl:  >1280px
// 2xl: >1536px

const SectionHome = () => {
  return (
        <section style={{height:"70vh"}} className='w-full flex justify-center mt-32 lg:mt-36'>
            <div style={{backgroundPosition:'center', backgroundSize:'contain', backgroundRepeat:'no-repeat', width:"85%"}} 
            className="flex items-center justify-center flex-col sm:bg-[url('./assets/Rectangle3.png')] bg-[url('./assets/Rectangle4.png')]">
              <img src={miniatura} className='size-32 md:size-44' alt="" /> 
              <h2 className='name font-normal text-blue-200 xl:text-5xl md:text-3xl sm:text-2xl text-xl'>Jeremias Quinteros</h2>
              <h3 className='ftd sm:text-lg md:texl-xl lg:text-2xl mb-4'>Fullstack Developer</h3>
              <p className='description mx-9 text-sm text-blue-100 text-center sm:text-sm md:mx-28 lg:mx-56 xl:mx-72 2xl:mx-96 '>As a Fullstack Developer, I can build responsive, user-friendly interfaces and craft robust backend systems. I’m experienced in setting up APIs, integrating third-party services, and ensuring that applications are secure and scalable.</p>
              
            </div>
        </section> 
  ) 
}

export default SectionHome