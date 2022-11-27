import React from 'react'
import { variable } from './variable'

export default function Portfolio() {
  return (
    <div className='my-12 ' id='portfolio'>
        <p className='text-gray-800 font-sans text-center text-xs font-bold'>My Recent Work</p>
        <h1 className='text-3xl font-bold text-cyan-700 text-center pb-8'>Portfolio</h1>
        <div className="grid grid-cols-1 mx-auto max-w-[1800px] xl:grid-cols-3 md:grid-cols-2 gap-10 justify-center">
            {variable.portfolio.map(obj => {
                return <div key={obj.title} className='mx-auto p-8 rounded-xl bg-[rgb(100,116,139,25%)]'>
                    <img src={obj.image} alt="Website ScreenShot" className="w-[310px] h-[170px] overflow-clip object-fill rounded-lg mb-5" />
                    <h3 className='text-gray-100 text-lg font-mono font-bold mb-3'>{obj.title}</h3>
                    <a href={obj.githubLink} className='border text-cyan-600 border-cyan-600 px-3 py-1.5 rounded-md hover:bg-cyan-500 hover:text-gray-700'>Github Link</a>
                </div>
            })}
        </div>
    </div>
  )
}
