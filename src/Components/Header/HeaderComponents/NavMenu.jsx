import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './NavMenu.css'

const NavMenu = () => {


const Navlist = [
  {
    id: 1,
    title: 'Home',
    link: '/'
  },
  {
    id: 2,
    title: 'About',
    link: '/about'
  },
  {
    id: 3,
    title: 'Courses',
    link: '/courses'
  },
  {
    id: 4,
    title: 'Blog',
    link: '/blog'}
  ]

  return (
   <>

     <div className='navMenu'>
      {Navlist.map((item) => (
        <Link to={item.link} key={item.id} className='inactive-navmenu'>{item.title}</Link>
      ))}
    </div> 
     
   </>
  )
}

export default NavMenu