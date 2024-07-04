import React from 'react'
import NavMenu from './HeaderComponents/NavMenu'
import PrimaryButton from '../Button/PrimaryButton'
import './Header.css'

const Header = () => {
  return (
    <div className='Header'>
        <div className='logo'>
            <a href="/"><img src="src\assets\ef1a1dc0-6eea-40b1-b524-424554835a4d 1.jpg" alt="" /></a>
        </div>
        <NavMenu/>
        <div className='button'> <PrimaryButton text="Enroll Now"/></div>
    </div>
  )
}

export default Header