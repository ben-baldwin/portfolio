import React from 'react'
import NavBar from '../components/NavBar'
import Skill from '../components/Skill'
import Project from '../components/Project'

const Homepage = () => {

  const languages = ['JavaScript', 'Java', 'Python', 'HTML5', 'CSS', 'SQL']
  const frontEnd = ['React', 'JSX', 'Jinja2', 'Bootstrap', 'Tailwind']
  const backEnd = ['Flask', 'Spring Boot', 'Django', 'Express']
  const databases = ['Mongo', 'MySQL', 'Mongoose']
  const aws = ['AWS', 'EC2', 'S3 Bucket', 'Cloud Front', 'Route 53', 'SSL', 'Deployment']
  const tools = ['Git', 'GitHub']
  const gis = ['JOSM', 'Esri', 'QGIS', 'AutoCAD']

  return (
    <main className='bg-cover bg-center min-h-screen' id='background'>
      <NavBar />
      <section className='max-w-screen-2xl mx-auto flex flex-col'>
        {/* Hero */}
        <div className='flex max-w-screen-lg mx-auto'>
          <img className=' h-96 w-96 object-cover object-center' src="/meCutout.png" alt="Head shot" />
          <div className='flex flex-col justify-end p-8 bg-white rounded-lg self-end'>
            <h1 className='text-4xl font-bold mb-4'>Hi, I'm Ben and I'm a Junior Web Developer.</h1>
            <p className='text-l'>I'm a Junior Developer based in Seattle, Washington. I am a recent graduate from Coding Dojo where I studied full stack web development. I am actively looking for work!</p>
            <div className='space-x-4'>
              <button className='rounded border-2 px-6 py-2 font-medium hover:bg-gray-100 active:bg-gray-200 focus:outline-none focus:ring focus:ring-gray-300'>Contact Me</button>
              <button className='rounded border-2 px-6 py-2 font-medium hover:bg-gray-100 active:bg-gray-200 focus:outline-none focus:ring focus:ring-gray-300'>Check my work</button>
            </div>
          </div>
        </div>
        {/* Experience */}
        <div className='mt-16 bg-white p-6 rounded-lg max-w-max self-center'>
          <p className='text-3xl font-bold mb-4'>Work</p>
          <p>Checkout my personal projects!</p>
          <p>If you have any questions feel free to ask me for more information.</p>
        </div>
        <div className='flex justify-center gap-4 grid-flow-col p-2'>
          {
            languages.concat(frontEnd, backEnd, databases, aws, tools, gis).map((skill, i) => {
              return <Skill skill={skill} />
            })
          }
        </div>
      </section>
      <section className='flex justify-center mt-8 gap-8'>
        <Project />
        <Project />
      </section>
    </main>
  )
}

export default Homepage