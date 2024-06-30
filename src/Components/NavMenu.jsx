import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './NavMenu.css'

const NavMenu = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
   <>
   <div className={`navMenu  ${menuOpen ? 'open' : ''}`}>
            <Link to="/"><a href="/" className="active-navmenu">Home</a></Link>
            <Link to="/course"><a href="/course" className='inactive-navmenu'>Course</a></Link>
            <Link to="/blog"><a href="/blog" className='inactive-navmenu'>Blogs</a></Link>
            <Link  to="/about"><a href="/about" className='inactive-navmenu'>About Us</a></Link>
          </div>
   </>
  )
}

export default NavMenu