import React from 'react'
import Logo from '../assets/only_SIT_logo.png'
import '../App.css'
import { Link } from 'react-router'
function Nav() {
  return (
    
    <div className='bg-white h-[80px] flex items-center justify-between shadow-xl w-screen'>
        <div className='flex items-center py-2.5 px-5'>
        <img src={Logo} alt="Logo" width={166} height={66} className='object-contain' />
        <h3 className='font-semibold'>Booking System</h3>
      </div>
      <div className='flex px-10'>
        <Link to="/" className='px-10'>Home</Link>
        <Link to="/report" className='px-10'>Report</Link>
      </div>
    </div>
  )
}

export default Nav
