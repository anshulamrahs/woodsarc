import React from 'react'
import CABIN from './assets/cabin.jpeg';

const Body = () => {
  return (
    <div className="w-full h-auto relative text-center justify-center">
        <img className='w-full h-auto object-contain absolute' src={CABIN} />
        <div className='absolute  flex flex-col'>
            <span className='text-9xl mt-24 text-[#d0dee9] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] '>WELCOME TO WOODSARC</span>
            <span className='text-2xl mt-8 text-[#d0dee9] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>RESERVE TODAY AND ENJOY YOUR STAY</span>
        </div>
    </div>
  )
}

export default Body