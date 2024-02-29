import React from 'react'
import "./MemberCard.css"

function Card({icon}) {
  return ( 
    <div>
      <div className="member">
        <img 
          className='icon'
          src={icon}
          alt='Image relative to section below'
        />
      </div>
    </div>
   );
}

export default Card;