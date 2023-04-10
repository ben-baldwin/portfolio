import React from 'react'

const Project = ({ name, projectDescription, appLink, appImage, appRepo }) => {
  return (
    <div className='bg-white p-2 rounded-lg'>
      <img className='w-32 h-32' src={appImage} alt={name} />
      <p>{name}</p>
      <p>skill 1 | skill 2 | skill 3</p>
      <p>{projectDescription}</p>
      <div className='flex'>
        <a href={appLink} target='_blank'>
          <button>View</button>
        </a>
        <a href={appRepo} target='_blank'>
          <button>Github repo</button>
        </a>
      </div>
    </div>
  )
}

export default Project