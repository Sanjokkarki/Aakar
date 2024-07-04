import React from 'react'
import './AakarDefination.css'
import JoinButton from '../../../../Components/Button/JoinButton'

const AakarDefination = () => {
  return (
    <>
      <div className='main-container'>
        <div className='def'>
          <h3>What is Aakar Academy?</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.</p>
        </div>

       <div className='course'>
       <div className="course-1">
          <h3>Job Ready Courses</h3>
         <div><JoinButton text="Enroll now"/></div>
        </div>
        <div className="course-2">
          <h3>Free Career Counseling</h3>
        <div><JoinButton text="Book Today"/></div>
        </div>
       </div>

      </div>
    </>
  )
}

export default AakarDefination