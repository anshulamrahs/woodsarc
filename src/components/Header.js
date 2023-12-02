import React from 'react'
import Wood from './assets/bgremove.png'

const Header = () => {
  return (
    <div className='flex justify-between bg-[#8aa8c2]'>
        <div className=''>
        <img  className="w-[280px] h-[100px] mx-6 my-3" src={Wood} alt='logo' />
        </div>
        <div className='bg-[#8aa8c2]  h-[120px]'>
            <ul className=' flex justify-center p-4 m-8 text-black'>
                <li className='mx-2 text-xl'>Home</li>
                <li className='mx-2 text-xl'>About Us</li>
                <li className='mx-2 text-xl'>Services</li>
                <li className='mx-2 text-xl'>Rooms</li>
                <li className='mx-2 text-xl'>Bookings</li>
                <button className=" border mx-6 mb-4 rounded-sm px-4 py-2 bg-inherit">Book Now</button>
            </ul>
        </div>
    </div>
  )
}

export default Header