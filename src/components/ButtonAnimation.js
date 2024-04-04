import React from 'react'
// This import is opaque but it is used in the component
import ButtonAnimation from './ButtonAnimation.css'

const buttonRealisticFunction = (props) => {
  
    const labelText = props.label

  return ( 
    <div className='button' role='button'>
      <button  className='btn-px' aria-pressed="false" value="px" aria-label="title of the button display on screen">
      {labelText}
      </button>
    </div>
   );
}
 
export default buttonRealisticFunction;