import React from 'react'

const Project = () => {
  return (
    <div className='bg-white p-2 rounded-lg'>
      <img src="#" alt="project" />
      <p>App Name</p>
      <p>skill 1 | skill 2 | skill 3</p>
      <p>Very top level project description. Not too much detail.</p>
      <div className='flex'>
        <button>View</button>
        <button>Github repo</button>
      </div>
    </div>
  )
}

export default Project