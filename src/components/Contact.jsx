import {FiMail} from 'react-icons/fi'
import { variable } from './variable'
import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';


  
export default function Contact() {
  const form = useRef();
  const [sent , setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_olsqdok', 'template_c5o9xdq', form.current, 'FWR-5_56-8zhBV1Qs')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      setSent(true);
      setTimeout(() => {
        setSent(false)
      }, 2000);
  };
  return (
    <div className='mt-32 mx-auto max-w-[800px] py-10 pb-24' id='contact'>
        <p className='text-gray-800 font-sans text-center text-xs font-bold'>Get In Touch</p>
        <h1 className='text-3xl font-bold text-cyan-700 text-center'>Contact Me</h1>
      <div className='grid grid-cols-1 lg:grid-cols-2 justify-between mt-6'>
        <div className='text-center justify-center'>
          <article className='w-56 h-44 bg-gray-700 rounded-xl my-5 mx-auto lg:ml-32'>
              <p className='text-3xl mx-24 pt-8 text-cyan-600'><FiMail /></p>
              <h1 className='text-gray-300 font-bold pt-3 pb-1'>Email</h1>
              <p className='text-gray-300 text-xs pb-4'>{variable.email}</p>
              <a href={`mailto:${variable.email}`} target="_blank" rel="noreferrer" className='hover:text-base duration-300 text-cyan-600 text-xs'>Send a message</a>
            </article>
            <article className='w-56 h-44 bg-gray-700 rounded-xl my-5 mx-auto lg:ml-32'>
              <p className='text-3xl mx-24 pt-8 text-cyan-600'><FiMail /></p>
              <h1 className='text-gray-300 font-bold pt-3 pb-1'>WhatsApp</h1>
              <p className='text-gray-300 text-xs pb-4'>{variable.phNumber}</p>
              <a href={`https://wa.me/${variable.phNumber}`} rel="noreferrer" target="_blank" className='hover:text-base duration-300 text-cyan-600 text-xs'>Send a message</a>
            </article>
            <article className='w-56 h-44 bg-gray-700 rounded-xl my-5 lg:mt-5 mx-auto lg:ml-32'>
              <p className='text-3xl mx-24 pt-8 text-cyan-600'><FiMail /></p>
              <h1 className='text-gray-300 font-bold pt-3 pb-1'>Facebook</h1>
              <p className='text-gray-300 text-xs pb-4'>{variable.messageFb}</p>
              <a href={`mailto:${variable.email}`} target="_blank" rel="noreferrer" className='hover:text-base duration-300 text-cyan-600 text-xs'>Send a message</a>
            </article>
          </div>
        
        <form ref={form} onSubmit={sendEmail} className='mt-1 mx-auto'>
          <input className='rounded-lg mx-2 my-4 py-2 px-2 w-72 lg:w-96' type="text" name='user_name' placeholder='your name' required></input><br />
          <input className='rounded-lg mx-2 my-4 py-2 px-2 w-72 lg:w-96' type="email" name='user_email' placeholder='your email' required></input><br />
          <textarea className='rounded-lg mx-2 my-4 py-2 px-2 w-72 lg:w-96' name='message' rows='7' placeholder='Enter your message here!' /><br />
          <section className='flex'><input type='submit' className='rounded-lg mx-2 my-2 py-3 px-6 bg-slate-800 text-cyan-600 hover:bg-slate-400 hover:text-cyan-900' value='Send Message'/>
          <p className={`text-lg text-white mx-8 rounded-lg px-5 py-4 text-center ${!sent?'hidden':'bg-cyan-500'}`}>Message Sent!</p>
          </section>
        </form>
        </div>
    </div>
  )
}
