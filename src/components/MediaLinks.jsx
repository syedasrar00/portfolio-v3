import React from 'react';
import { variable } from './variable';
import {AiFillTwitterCircle , AiFillLinkedin , AiFillGithub, AiFillFacebook} from "react-icons/ai";


export default function () {
  return (
    <div className='my-8 flex justify-center text-3xl gap-10 md:gap-16 lg:gap-20'>
            <a href={variable.github} target="_blank"><AiFillGithub /></a>
            <a href={variable.facebook} target="_blank"><AiFillFacebook /></a>
            <a href={variable.linkedin} target="_blank"><AiFillLinkedin /></a>
            <a href={variable.twitter} target="_blank"><AiFillTwitterCircle /></a>
    </div>
  )
}
