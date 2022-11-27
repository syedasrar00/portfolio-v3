import React from 'react'
import {variable} from './variable'
import resume from './assets/resume.pdf'

export default function Header() {
  return (
    <div className='pt-20 pb-5' id='#'>
        <p className='text-gray-200 font-bold text-center'>Hello, I'm</p>
        <h1 className='text-3xl font-bold text-gray-200 my-3 text-center'>{variable.name}</h1>
        <p className='text-sm text-gray-300 text-center'>{variable.profession}</p>
        <div className='flex gap-4 justify-center my-10'>
            <a href={resume} download className='border text-cyan-500 border-cyan-600 px-4 py-2 rounded-md hover:bg-cyan-500 hover:text-gray-700'>Download CV</a> 
            <a href='#contact' className='border text-cyan-500 border-cyan-600 px-4 py-2 rounded-md hover:bg-cyan-500 hover:text-gray-700'>Let's Talk</a>             
        </div>
    </div>
  )
}
