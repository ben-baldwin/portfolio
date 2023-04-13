import React from 'react'

const Project = ({ name, projectDescription, appLink, appImage, appRepo, skills }) => {
  return (
    <div className='bg-slate-100 p-6 rounded-xl'>
      <p className='text-2xl font-bold mb-4'>{name}</p>
      <p className='text-lg font-bold mb-2'>{projectDescription}</p>
        <img className='shadow-xl rounded-lg' src={appImage} alt={name} />
      <p className='bg-slate-300 text-lg rounded-lg text-center mt-4 p-1'>{skills}</p>
      <div className='flex space-x-2 mt-4'>
        <a href={appLink} target='_blank'>
          <button className='rounded text-lg border-2 px-6 py-2 font-medium hover:bg-gray-100 active:bg-gray-200 focus:outline-none focus:ring focus:ring-gray-300'>View</button>
        </a>
        <a href={appRepo} target='_blank'>
          <button className='rounded text-lg border-2 px-6 py-2 font-medium hover:bg-gray-100 active:bg-gray-200 focus:outline-none focus:ring focus:ring-gray-300'>GitHub Repo</button>
        </a>
      </div>
    </div>
  )
}

export default Project