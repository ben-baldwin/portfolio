import React from 'react'
import ResumeButton from './ResumeButton'

const Resume = () => {
  return (
    <div className='bg-zinc-700 shadow-lg p-6 rounded-xl flex-grow'>
      <p className='text-2xl font-bold mb-4' id='construction-img'>Resume</p>
      <img className=' w-full h-full shadow-lg rounded-xl py-2' src="/resume.png" alt="Resume" />
      <ResumeButton />
    </div>
  )
}

export default Resume