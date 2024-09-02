import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <div>
        <div className='h-px bg-gray-600'></div>
        <div className=''>
            <div className='flex justify-center gap-2 my-3'>
              <a href="https://www.linkedin.com/in/jquinteros-des/"><LinkedInIcon fontSize='large' className='text-gray-500 hover:text-gray-400 transition-all ' /></a>
              <a href="https://www.instagram.com/jere.quinteros1/"><InstagramIcon fontSize='large' className='text-gray-500 hover:text-gray-400 transition-all ' /></a>
              <a href="https://github.com/JereDev8"><GitHubIcon fontSize='large' className='text-gray-500 hover:text-gray-400 transition-all ' /></a>
                
                
            </div>
            <div className='text-gray-400 font-semibold flex justify-center mb-4'>
              <p>© 2024 All rights reserved.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer