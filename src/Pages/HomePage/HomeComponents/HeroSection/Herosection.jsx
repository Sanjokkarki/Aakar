import React from 'react'
import './Herosection.css'
import PrimaryButton from '../../../../Components/Button/PrimaryButton'
import SecondaryButton from '../../../../Components/Button/SecondaryButton'
import Banner from '../../../../Components/Banner'

const Herosection = () => {
  return (
    <>
      <section className='MainHero'>

        <div className='text-section'>
          <div className='text'>
            <div><h1>Nequepor<br />quisquam est</h1>
              <h2> Nequeporroquisquam est</h2></div>
            <p>Neque porro quisquam est qui dolorem ipsum quia dolorsit amet, consectetur, adipisci velit...</p>
          </div>
          <div><SecondaryButton text="VIEW COURSE" /></div>
        </div>

        <div className="image">
          <img src="src\assets\HeroImage.png" alt="HeroImage" />
        </div>
        <div className="circle1"></div>
        <div className="circle2"></div>



      </section>




    </>
  )
}

export default Herosection