import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const NavBar = () => {
  return (
    <div className='flex flex-col items-center md:flex-row justify-between p-8 bg-slate-400'>
      <p className='text-2xl font-bold'>BB</p>
      <div className='text-xl uppercase flex gap-12'>
        <a href="#">Work</a>
        <a href="#">Resume</a>
        <a href="#">contact</a>
      </div>
      <div>
        <a className='px-2' href="https://www.linkedin.com/in/ben-baldwin55/">
          <FontAwesomeIcon size='2x' icon={faLinkedin} />
        </a>
        <a href="https://github.com/ben-baldwin">
          <FontAwesomeIcon size='2x' icon={faGithub} />
        </a>
      </div>
    </div>
  )
}

export default NavBar