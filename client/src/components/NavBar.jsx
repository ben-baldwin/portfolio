import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const NavBar = () => {
  return (
    <div className='pt-4 lg:pt-0 h-24 flex flex-col items-center md:flex-row justify-between bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-800' id='navBackground'>
      <p className='hidden md:block text-3xl w-32 text-center text-cyan-100 font-extrabold'>BB</p>
      <div className=' text-cyan-100 font-extrabold uppercase flex gap-12'>
        <a className='text-lg md:text-2xl hover:text-3xl transition-all duration-200 transform hover:scale-110' href='#work'>Work</a>
        <a className='text-lg md:text-2xl hover:text-3xl transition-all duration-200 transform hover:scale-110' href="#resume">Resume</a>
        <a className='text-lg md:text-2xl hover:text-3xl transition-all duration-200 transform hover:scale-110' href="#contact">contact</a>
      </div>
      <div className='w-32 space-x-4 text-center'>
        <a className='text-blue-600 hover:text-xl transition-all duration-200' target='_blank' href="https://www.linkedin.com/in/ben-baldwin55/">
          <FontAwesomeIcon size='2x' icon={faLinkedin} />
        </a>
        <a className='text-lime-600 hover:text-xl transition-all duration-200' target='_blank' href="https://github.com/ben-baldwin">
          <FontAwesomeIcon size='2x' icon={faGithub} />
        </a>
      </div>
    </div>
  )
}

export default NavBar