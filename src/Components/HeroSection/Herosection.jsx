import React from 'react'
import './Herosection.css'
import PrimaryButton from '../Button/PrimaryButton'
import SecondaryButton from '../Button/SecondaryButton'

const Herosection = () => {
  return (
    <>
      <section>

        <div className='text'>
          <h1>Nequepor<br/>quisquam est</h1>
          <h2> Nequeporroquisquam est</h2>
          <p>Neque porro quisquam est qui dolorem ipsum quia dolor<br/>sit amet, consectetur, adipisci velit...</p><br/>
          <div><SecondaryButton text="VIEW COURSE"/></div>
           </div>
        
        <div className="image">
         <img src="src\assets\cbb1efe9beaf57db6ce27fa2d740765d.png" alt="" />
        </div>
        <div className="circle1"></div>
        <div className="circle2"></div>
        <div className='circle3'></div>
        <div className='circle4'></div>
        <div className='circle5'></div>
        <div className='circle6'></div>
        <div className='circle7'></div>
        <div className='circle8'></div>
        <div className='circle9'></div>
        <div className='circle10'></div>
      </section>

    
  
    
    </>
  )
}

export default Herosection