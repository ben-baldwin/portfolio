import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const NavBar = () => {
  return (
    <div className='flex flex-col items-center md:flex-row justify-between p-8 bg-slate-400 shadow-2xl' id='navBackground'>
      <p className='text-3xl text-cyan-800 font-extrabold'>BB</p>
      <div className='text-2xl text-cyan-800 font-extrabold uppercase flex gap-12'>
        <a href="#">Work</a>
        <a href="#">Resume</a>
        <a href="#">contact</a>
      </div>
      <div className='space-x-4 text-cyan-800'>
        <a className='' target='_blank' href="https://www.linkedin.com/in/ben-baldwin55/">
          <FontAwesomeIcon size='2x' icon={faLinkedin} />
        </a>
        <a target='_blank' href="https://github.com/ben-baldwin">
          <FontAwesomeIcon size='2x' icon={faGithub} />
        </a>
      </div>
    </div>
  )
}

export default NavBar