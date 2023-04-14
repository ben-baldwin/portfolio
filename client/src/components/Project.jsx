import React from 'react'

const Project = ({ name, projectDescription, appLink, appImage, appRepo, skills }) => {
  return (
    <div className='bg-zinc-700 shadow-lg p-6 rounded-xl'>
      <p className='text-2xl font-bold mb-4'>{name}</p>
      <p className='text-lg mb-2'>{projectDescription}</p>
        <img className='shadow-xl rounded-lg' src={appImage} alt={name} />
      <p className='bg-gray-950 text-lg rounded-lg text-center mt-4 p-1'>{skills}</p>
      <div className='flex space-x-4 mt-4'>
        <a className='flex-grow' href={appLink} target='_blank'>
          <button className='rounded text-lg border-2 w-full px-6 py-2 font-medium hover:bg-cyan-800 active:bg-gray-800'>View</button>
        </a>
        <a className='flex-grow' href={appRepo} target='_blank'>
          <button className='rounded text-lg border-2 w-full px-6 py-2 font-medium hover:bg-cyan-800 active:bg-gray-800'>GitHub Repo</button>
        </a>
      </div>
    </div>
  )
}

export default Project