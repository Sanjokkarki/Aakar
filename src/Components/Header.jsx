import React from 'react'

import './Header.css'

import Navbar from './Navbar'
import Herosection from './Herosection'



const Header = () => {
  return (
   <>
   <div className='header'>
   <div><Navbar /></div>
   <div><Herosection /></div>
   </div>
   </>
  )
}

export default Header