import React from 'react'

import './SecondaryButton.css'

const SecondaryButton = (props) => {
  return (
   <>
   <button className='secondary-btn'>{props.text}</button>
    
    </>
  )
}

export default SecondaryButton