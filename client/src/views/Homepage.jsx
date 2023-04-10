import React from 'react'
import NavBar from '../components/NavBar'
import Skill from '../components/Skill'
import Project from '../components/Project'
import viewOne16x9 from '../assets/viewOne16x9.PNG'

const Homepage = () => {

  const languages = ['JavaScript', 'Java', 'Python', 'HTML5', 'CSS', 'SQL']
  const frontEnd = ['React', 'JSX', 'Jinja2', 'Bootstrap', 'Tailwind']
  const backEnd = ['Flask', 'Spring Boot', 'Django', 'Express']
  const databases = ['Mongo', 'MySQL', 'Mongoose']
  const aws = ['AWS', 'EC2', 'S3 Bucket', 'Cloud Front', 'Route 53', 'SSL', 'Deployment']
  const tools = ['Git', 'GitHub']
  const gis = ['JOSM', 'Esri', 'QGIS', 'AutoCAD']

  return (
    <main className='bg-cover bg-center min-h-screen'>
      <NavBar />
      <body>
        <section className='max-w-screen-xl mx-auto'>
          {/* Hero */}
          <div className='flex justify-between'>
            <img className=' h-96 w-96 object-cover object-center' src="/meCutout.png" alt="Head shot" />
            <div className='flex flex-col justify-end p-8 bg-white rounded-lg self-end'>
              <h1 className='text-6xl font-bold mb-4'>Hi, I'm Ben and I'm a full stack Web Developer.</h1>
              <p className='text-xl'>I'm a Junior Developer based in Seattle, Washington. I am a recent graduate from Coding Dojo where I studied full stack web development. I am actively looking for work!</p>
              <div className='space-x-4'>
                <button className='rounded text-lg border-2 px-6 py-2 font-medium hover:bg-gray-100 active:bg-gray-200 focus:outline-none focus:ring focus:ring-gray-300'>Contact Me</button>
                <button className='rounded text-lg border-2 px-6 py-2 font-medium hover:bg-gray-100 active:bg-gray-200 focus:outline-none focus:ring focus:ring-gray-300'>Check my work</button>
              </div>
            </div>
          </div>
          {/* Work */}
          <div className='mt-16 bg-white p-6 rounded-lg'>
            <p className='text-5xl font-bold mb-4'>Projects and Skills</p>
            <p className='text-xl'>Checkout my personal projects!</p>
            <p className='text-xl'>If you have any questions feel free to ask me for more information.</p>
            {/* Skills */}
            <div>
              {
                languages.concat(frontEnd, backEnd, databases, aws, tools, gis).map((skill, i) => {
                  return <Skill skill={skill} />
                })
              }
            </div>
          </div>
        </section>
        {/* Projects */}
        <section className='mt-8 max-w-screen-xl mx-auto p-8'>
          <Project
            name={'Ecommerce App'}
            projectDescription={'An AWS deployed fullstack MERN Drumming Ecommerce App featuring admin login/reg, multer, and Stripe'}
            appLink={'https://www.percussionpro.store'}
            appImage={viewOne16x9} 
            appRepo={'https://github.com/ben-baldwin/DrumEcommerce'}
            skills={'JavaScript | React | AWS | Mongo | GitHub | Node | Stripe | Multer | JSX | Tailwind | Express'}
          />
          <Project />
        </section>
      </body>
    </main>
  )
}

export default Homepage