import React from 'react'
import Logo from './Logo'
import NavMenu from './NavMenu'
import PrimaryButton from './PrimaryButton'
import './Navbar.css'
const Navbar = () => {
  return (
<>
<div className='navbar'>
<div className='logo'><Logo /></div>
   <div className='nav'> <NavMenu /></div>
   <div className='button'> <PrimaryButton text="Enroll Now"/></div>
   </div>
</>
  )
}

export default Navbar