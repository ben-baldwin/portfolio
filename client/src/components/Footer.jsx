import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className='pt-4 lg:pt-0 h-24 flex items-center md:flex-row justify-center bg-gradient-to-b from-zinc-800 via-zinc-900 to-zinc-950 ' id='navBackground'>
      <div className='w-32 space-x-4 text-center'>
        <a className='text-blue-600 hover:text-xl transition-all duration-200' target='_blank' href="https://www.linkedin.com/in/ben-baldwin55/">
          <FontAwesomeIcon size='3x' icon={faLinkedin} />
        </a>
        <a className='text-lime-600 hover:text-xl transition-all duration-200' target='_blank' href="https://github.com/ben-baldwin">
          <FontAwesomeIcon size='3x' icon={faGithub} />
        </a>
      </div>
    </div>
  )
}

export default Footer