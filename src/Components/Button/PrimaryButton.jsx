import React from 'react'
import './PrimaryButton.css'
const PrimaryButton = (props) => {
  return (
   <>
   <button className='primary-btn'>{props.text}</button>
   </>
  )
}

export default PrimaryButton