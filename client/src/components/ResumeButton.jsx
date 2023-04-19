import React from 'react'

const ResumeButton = () => {

  const resume = `${process.env.PUBLIC_URL}/BaldwinResume.pdf`;

  return (
    <div className='mt-4 flex'>
      <a href={resume} className='rounded text-lg text-center flex-grow border-2 px-6 py-2 font-medium hover:bg-cyan-800 active:bg-gray-800' download="BaldwinBenResume">Download Resume</a>
    </div>
  )
}

export default ResumeButton