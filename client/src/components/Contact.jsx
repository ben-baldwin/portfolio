import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {

  const form = useRef();

  const sendEmail = () => {

    emailjs.sendForm(
      // should be env variable?
      'service_notp38m',
      'template_bslayqs',
      form.current,
      'RG6Nbf-ehp23ud1HM'
    )
      .then((result) => {
        console.log(result.text);
        console.log("message sent");
        window.location.reload(); // Refresh the page after successful email send
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className=' bg-zinc-700 shadow-lg p-6 rounded-xl flex-grow' id='contact'>
      <div className='flex justify-between'>
        <p className='text-2xl font-bold mb-4'>Send me a message</p>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <div className='space-y-4'>
          <div>
            <label className='text-lg'>Name</label>
            <input className='bg-gray-950 rounded-lg w-full p-3' type="text" name="user_name" required />
          </div>
          <div>
            <label className='text-lg'>Email</label>
            <input className='bg-gray-950 rounded-lg w-full p-3' type="email" name="user_email" required />
          </div>
          <div>
            <label className='text-lg'>Message</label>
            <textarea className='bg-gray-950 rounded-lg w-full p-3' name="message" required />
          </div>
          <button className='rounded text-lg border-2 px-6 py-2 font-medium hover:bg-cyan-800 active:bg-gray-800 w-full' value="Send">Send</button>
        </div >
      </form>
    </div>
  )
}

export default Contact