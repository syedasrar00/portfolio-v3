import React from 'react'
import childPic from './assets/childhood.jpg';
import { IoIosRibbon } from 'react-icons/io';
import { RiFoldersFill } from 'react-icons/ri';
import { TbCertificate } from 'react-icons/tb';
import { variable } from './variable';

export default function About() {
  return (
    <div className='my-8' id='about'>
        <p className='text-gray-800 font-sans text-center text-xs font-bold'>Get To Know</p>
        <h1 className='text-3xl font-bold text-cyan-700 text-center'>About Me</h1>
        <div className="my-5 justify-center contents gap-x-10 lg:flex">
            <div className='bg-gradient-to-tr lg:mx-1 from-slate-500 to-transparent rounded-xl w-64 h-64 mx-auto my-6'>
                <img src={childPic} className="h-64 w-64 rotate-12 rounded-xl hover:rotate-0 ease-in duration-300"/>
            </div>
            <div className="container mx-auto max-w-[285px] md:max-w-[413px] lg:mx-0">
                <div className="grid grid-cols-2 md:grid-cols-3 text-center content-between">
                    <div className='w-32 h-32 bg-gray-700 rounded-xl hover:bg-gray-500 ease-in duration-300'>
                        <p className='text-2xl mx-12 mt-5 text-cyan-600'><IoIosRibbon /></p>
                        <h1 className='text-gray-300 font-bold pt-3 pb-1'>Experience</h1>
                        <p className='text-gray-300 text-xs'>{variable.exp}</p>
                    </div>
                    <section className='w-32 h-32 bg-gray-700 rounded-xl hover:bg-gray-500 ease-in duration-300'>
                        <p className='text-2xl mx-12 mt-5 text-cyan-600'><RiFoldersFill /></p>
                        <h1 className='text-gray-300 font-bold pt-3 pb-1'>Projects</h1>
                        <p className='text-gray-300 text-xs'>{variable.project}</p>
                    </section>
                    <section className='w-32 mt-4 md:mt-0 h-32 bg-gray-700 rounded-xl hover:bg-gray-500 ease-in duration-300'>
                        <p className='text-2xl mx-12 mt-5 text-cyan-600'><TbCertificate /></p>
                        <h1 className='text-gray-300 font-bold pt-3 pb-1'>Education</h1>
                        <p className='text-gray-300 text-xs'>{variable.qualification}</p>
                    </section>
                    
                </div>
                <p className='my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit obcaecati ipsam nulla minima. Rem nihil voluptatibus iure deleniti eius amet ipsam asperiores quaerat, repellat accusantium dolorum odio a, necessitatibus harum.</p>
                <a href='#' className='border text-cyan-500 border-cyan-600 px-4 py-2 rounded-md hover:bg-cyan-500 hover:text-gray-700'>Let's Talk</a>
            </div>
        </div>
    </div>
  )
}
