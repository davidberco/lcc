import React from 'react'
import { MapPin, Smartphone, Mail, Facebook, Instagram, PhoneCall, Phone } from 'react-feather'


import "./MemberCard.css"

function Card({icon, name, position, igLink}) {
  return ( 
    <div className="member">
      <img 
        className='icon'
        src={icon}
        alt='icon'
      />
      
    </div>
   );
}

export default Card;