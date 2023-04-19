import React from 'react'
import NavBar from '../components/NavBar'
import Skill from '../components/Skill'
import Project from '../components/Project'
import Construction from '../components/Construction'
import Resume from '../components/Resume'
import viewOne16x9 from '../assets/viewOne16x9.PNG'
import pnwAirline16x9 from '../assets/pnwAirline16x9.png'
import reactMap16x9 from '../assets/reactMap16x9.png'
import Contact from '../components/Contact'
import ResumeButton from '../components/ResumeButton'
import Footer from '../components/Footer'

const Homepage = () => {

  const languages = ['JavaScript', 'Java', 'Python', 'HTML5', 'CSS', 'SQL']
  const frontEnd = ['React', 'JSX', 'Jinja2', 'Bootstrap', 'Tailwind']
  const backEnd = ['Flask', 'Spring Boot', 'Django', 'Express']
  const databases = ['Mongo', 'MySQL', 'Mongoose']
  const apis = ['Stripe', 'EmailJS']
  const aws = ['AWS', 'EC2', 'S3 Bucket', 'Cloud Front', 'Route 53', 'SSL', 'Deployment']
  const tools = ['Git', 'GitHub']
  const gis = ['JOSM', 'Esri', 'QGIS', 'AutoCAD']

  return (
    <body className='bg-cover bg-center min-h-screen'>
      <main>
        <NavBar />
        <section className='max-w-screen-xl mx-auto mt-8 px-2'>
          {/* Hero */}
          <div className='flex flex-col lg:flex-row justify-between gap-12'>
            <img className='max-w-full w-auto h-auto object-cover md:max-w-md md:max-h-md rounded-xl' src="/coloredSquare.png" alt="Head shot" />
            <div className='flex flex-col justify-end bg-zinc-700 shadow-lg rounded-xl self-end p-4'>
              <h1 className='text-6xl font-bold mb-4'>Hey, my name is Ben and I'm a full stack Software Developer.</h1>
              <p className='text-xl p-2'>Welcome to my portfolio! I'm Ben, a passionate Full Stack web developer based in Seattle, Washington.
                With a strong foundation in full stack web development, I'm always looking for new opportunities to grow my skillset.
                I'm a recent graduate from Coding Dojo, where I gained hands-on experience in building Full Stack web applications using languages such as JavaScript, Python, Java, and more.
                I believe that great software should be both functional and aesthetically pleasing, and I strive to create user-friendly interfaces with clean code.
                I am actively seeking employment opportunities.</p>
              <ResumeButton />
            </div>
          </div>
          {/* Work */}
          <div className='mt-16 bg-zinc-700 shadow-lg p-6 rounded-xl'>
            <p className='text-5xl font-bold mb-4'>Skills and Projects</p>
            <p className='text-xl mb-2'>Below is a list of skills I have acquired and am continuously improving upon.</p>
            {/* Skills */}
            <div>
              {
                languages.concat(frontEnd, backEnd, databases, apis, aws, tools, gis).map((skill, i) => {
                  return <Skill skill={skill} />
                })
              }
            </div>
          </div>
        </section>
        {/* Projects */}
        <section className='mt-16 max-w-screen-xl mx-auto space-y-14 px-2' id="work">
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
            appLink={'http://pnwairlines.flights'}
            appImage={pnwAirline16x9}
            appRepo={'https://github.com/jordanruhle/Airline-Reservation-System'}
            skills={'Java | Bootstrap | Spring Boot | Java | AWS | GitHub | Stripe'}
          />
          <Construction
            name={'COMING SOON: Map App'}
            projectDescription={'An interactive React Map App using the Mapbox library and Open Street Maps data with map filters'}
            appLink={'#'}
            appImage={reactMap16x9}
            appRepo={'#'}
            skills={'JavaScript | React | AWS | GitHub | Mapbox'}
          />
        </section>
        <section className='mt-16 max-w-screen-xl mx-auto space-y-16 p-2' id='resume'>
          <Resume />
          <Contact />
        </section>
          <Footer />
      </main>
    </body>
  )
}

export default Homepage