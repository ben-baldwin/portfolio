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
        <section className='max-w-screen-xl mx-auto mt-8'>
          {/* Hero */}
          <div className='flex justify-between gap-12'>
            <img className=' h-5/12 w-5/12 object-cover shadow-lg rounded-xl' src="/coloredSquare.png" alt="Head shot" />
            <div className='flex flex-col justify-end bg-slate-100 rounded-xl self-end p-4'>
              <h1 className='text-6xl font-bold mb-4'>Hi, I'm Ben and I'm a full stack Web Developer.</h1>
              <p className='text-xl p-2'>Welcome to my portfolio! I'm Ben, a passionate full stack web developer based in Seattle, Washington. With a strong foundation in full stack web development, I'm always looking for new opportunities to grow my skillset. I'm a recent graduate from Coding Dojo, where I gained hands-on experience in building dynamic web applications using languages such as JavaScript, Python, Java, and more. I believe that great software should be both functional and aesthetically pleasing, and I strive to create user-friendly interfaces with clean and maintainable code. I'm excited to continue my journey as a developer and am actively seeking opportunities to collaborate with other like-minded professionals in the industry.</p>
              <div className='space-x-4 mt-4'>
                <button className='rounded text-lg border-2 px-6 py-2 font-medium hover:bg-gray-100 active:bg-gray-200 focus:outline-none focus:ring focus:ring-gray-300'>Contact Me</button>
                <button className='rounded text-lg border-2 px-6 py-2 font-medium hover:bg-gray-100 active:bg-gray-200 focus:outline-none focus:ring focus:ring-gray-300'>View my work</button>
              </div>
            </div>
          </div>
          {/* Work */}
          <div className='mt-16 bg-slate-100 p-6 rounded-xl'>
            <p className='text-5xl font-bold mb-4'>Skills and Projects</p>
            <p className='text-xl mb-2'>Below is a list of skills I have acquired and am continuously improving upon and adding to.</p>
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
        <section className='mt-16 max-w-screen-xl mx-auto space-y-14'>
          <Project
            name={'Ecommerce App'}
            projectDescription={'An AWS deployed fullstack MERN Drumming Ecommerce App featuring admin login/reg, multer, and Stripe.'}
            appLink={'https://www.percussionpro.store'}
            appImage={viewOne16x9}
            appRepo={'https://github.com/ben-baldwin/DrumEcommerce'}
            skills={'JavaScript | React | AWS | Mongo | GitHub | Node | Stripe | Multer | JSX | Tailwind | Express'}
          />
          <Project
            name={'Airline Reservation App'}
            projectDescription={'An AWS deployed fullstack Java Airline Reservation System App featuring admin and user login/reg and Stripe.'}
            appLink={'#'}
            appImage={viewOne16x9}
            appRepo={'https://github.com/jordanruhle/Airline-Reservation-System'}
            skills={'Java | Bootstrap | Spring Boot | Java | AWS | GitHub | Stripe'}
          />

        </section>
      </body>
    </main>
  )
}

export default Homepage