import React from 'react'
import { MapPin, Smartphone, Mail, Facebook, Instagram, PhoneCall, Phone } from 'react-feather'


import "./AvatarsGallery.css"

function Card({icon, name, position, igLink}) {
  return ( 
    <div className="avatar">
      <img 
        className='icon'
        src={icon}
        alt='Avatar'
      />
      <h3 className='nameMember'>{name}</h3>
      <h5>{position}</h5>
      <h4>
        <a className='instagramMember' href={igLink} target="_blank">
        <Instagram />{igLink}
        </a>
      </h4>
    </div>
   );
}

export default Card;