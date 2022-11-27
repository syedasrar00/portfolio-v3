import React from 'react'
import {FiMail} from 'react-icons/fi'
import { variable } from './variable'

export default function Contact() {
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
        
        <form action='' className='mt-1 mx-auto'>
          <input className='rounded-lg mx-2 my-4 py-2 px-2 w-72 lg:w-96' type="text" name='name' placeholder='your name' required></input><br />
          <input className='rounded-lg mx-2 my-4 py-2 px-2 w-72 lg:w-96' type="email" name='email' placeholder='your email' required></input><br />
          <textarea className='rounded-lg mx-2 my-4 py-2 px-2 w-72 lg:w-96' name='message' rows='7' placeholder='Enter your message here!' /><br />
          <button className='rounded-lg mx-2 my-2 py-3 px-6 bg-slate-800 text-cyan-600 hover:bg-slate-400 hover:text-cyan-900' type='submit'>Send Message</button>
        </form>
        </div>
    </div>
  )
}
