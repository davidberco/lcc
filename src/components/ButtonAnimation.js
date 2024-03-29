import React from 'react'
// import PropTypes from 'prop-types'
import ButtonAnimation from './ButtonAnimation.css'

// function buttonAnimation(labelButton) {
//   return (
//     <div>
//       <button id="btn_px" className='btn-px' aria-pressed="false" value="px" aria-label="Order table by significant pixel sizes">
//       {{labelButton}}
//       </button>
//     </div>
//   )
// }

// buttonAnimation.propTypes = {}

// export default buttonAnimation

//// adfafd


const ButtonAnimation1 = (props) => {
  
    const labelText = props.label

  return ( 
    <div className='button' role='button'>
      <button  className='btn-px' aria-pressed="false" value="px" aria-label="title of the button display on screen">
      {labelText}
      </button>
    </div>
   );
}
 
export default ButtonAnimation1;