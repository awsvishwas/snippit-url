import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar flex items-center justify-between'>
        <h1 className='text-[24px] lg:text-[48px] font-semibold text-[#a1b7d6]'>Snipp.
            <span className='text-[#4280d8]'>it</span></h1>
        <div className='flex gap-2 text-[10px] lg:text-[16px] text-[#e4e7ea]'>
            <button className='px-2 lg:px-6 py-1 rounded-sm bg-[#294e83]'>Sign Up</button>
            <button className='px-2 lg:px-6 py-1 text-gray-900 rounded-sm bg-[#a1b7d6]'>Login</button>
        </div>
    </div>
  )
}

export default Navbar
