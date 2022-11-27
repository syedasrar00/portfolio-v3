import React from 'react';
import { variable } from './variable';
import {AiFillTwitterCircle , AiFillLinkedin , AiFillGithub, AiFillFacebook} from "react-icons/ai";


export default function () {
  return (
    <div className='my-8 flex justify-center text-3xl gap-10 md:gap-16 lg:gap-20'>
            <a href={variable.github} target="_blank" className='hover:scale-[1.4] ease-in duration-300'><AiFillGithub /></a>
            <a href={variable.facebook} target="_blank" className='hover:scale-[1.4] ease-in duration-300'><AiFillFacebook /></a>
            <a href={variable.linkedin} target="_blank" className='hover:scale-[1.4] ease-in duration-300'><AiFillLinkedin /></a>
            <a href={variable.twitter} target="_blank" className='hover:scale-[1.4] ease-in duration-300'><AiFillTwitterCircle /></a>
    </div>
  )
}
