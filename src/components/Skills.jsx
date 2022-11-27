import React from 'react'

export default function Skills() {
  return (
    <div className='py-10 max-w-[900px] mx-auto p-10' id='skills'>
        <p className='text-gray-900 font-sans text-center text-xs font-bold'>What Skills i Have</p>
        <h1 className='text-3xl font-bold text-cyan-500 text-center pb-8'>Skills</h1>
        <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 text-center gap-5">
            <div className='bg-[rgb(100,116,139,35%)] p-6 rounded-xl max-w-[400px] shadow-xl my-5'>
                <p className='text-cyan-500 font-bold text-2xl pt-3 pb-1'>Frontend Development</p>
                <div className="flex">
                    <ul className='grid grid-cols-2 mx-auto gap-5 p-4'>
                        <li><h1 className='text-cyan-500 font-bold pt-3 pb-1 text-lg'>HTMl</h1>
                            <span className='text-gray-800 font-sans text-center text-xs font-bold'>Experienced
                            </span>
                        </li>
                        <li><h1 className='text-cyan-500 font-bold pt-3 pb-1 text-lg'>CSS</h1>
                            <span className='text-gray-800 font-sans text-center text-xs font-bold'>Experienced
                            </span>
                        </li>
                        <li><h1 className='text-cyan-500 font-bold pt-3 pb-1 text-lg'>JavaScript</h1>
                            <span className='text-gray-800 font-sans text-center text-xs font-bold'>Experienced
                            </span>
                        </li>
                        <li><h1 className='text-cyan-500 font-bold pt-3 pb-1 text-lg'>BootStrap</h1>
                            <span className='text-gray-800 font-sans text-center text-xs font-bold'>Experienced
                            </span>
                        </li>
                        <li><h1 className='text-cyan-500 font-bold pt-3 pb-1 text-lg'>Tailwind</h1>
                            <span className='text-gray-800 font-sans text-center text-xs font-bold'>Experienced
                            </span>
                        </li>
                        <li><h1 className='text-cyan-500 font-bold pt-3 pb-1 text-lg'>React</h1>
                            <span className='text-gray-800 font-sans text-center text-xs font-bold'>Experienced
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='bg-[rgb(100,116,139,35%)] p-6 rounded-xl max-w-[400px] shadow-xl my-5'>
                <p className='text-cyan-500 font-bold text-2xl pt-3 pb-1'>Backend Development</p>
            <div className="flex">
                    <ul className='grid grid-cols-2 mx-auto gap-5 p-4'>
                        <li><h1 className='text-cyan-500 font-bold pt-3 pb-1 text-lg'>Java</h1>
                            <span className='text-gray-800 font-sans text-center text-xs font-bold'>Experienced
                            </span>
                        </li>
                        <li><h1 className='text-cyan-500 font-bold pt-3 pb-1 text-lg'>Spring Boot</h1>
                            <span className='text-gray-800 font-sans text-center text-xs font-bold'>Experienced
                            </span>
                        </li>
                        <li><h1 className='text-cyan-500 font-bold pt-3 pb-1 text-lg'>MySql</h1>
                            <span className='text-gray-800 font-sans text-center text-xs font-bold'>Experienced
                            </span>
                        </li>
                        <li><h1 className='text-cyan-500 font-bold pt-3 pb-1 text-lg'>MongoDB</h1>
                            <span className='text-gray-800 font-sans text-center text-xs font-bold'>Experienced
                            </span>
                        </li>                       
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}
