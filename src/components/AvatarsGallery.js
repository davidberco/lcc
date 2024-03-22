import React from 'react';
import { graphql } from 'gatsby';

import Avatars from '../components/Avatars'
import "./AvatarsGallery.css"


function AvatarsGallery () {
  
const avatar1 = 'https://ucarecdn.com/e83d47d3-53df-4b66-afba-fce66f69015e/teammember5.jpg';
const avatar2 = 'https://ucarecdn.com/5966ebaf-7d18-45a8-a57e-0bd8fcc8a73a/teammember4.jpg';
const avatar3 = 'https://ucarecdn.com/846fc1f5-bc99-4516-a62c-06510a9e79ac/teammember3.jpg';
const avatar4 = 'https://ucarecdn.com/b5b9a9fe-8527-4a43-8c99-cb6631ccd46d/teammember6.jpg';
const avatar5 = 'https://ucarecdn.com/b70bd6cf-acdc-403e-ac22-8caa5ac1a6f2/teammember2.jpg';
const name1 = 'Julia Silva'
const name2 = 'Emmanuel Blanchard'
const name3 = 'Anahí Silva'
const name4 = 'María Eugenia Paz y Miño'
const name5 = 'David Bercovici'
const position1 = 'Directora, creativa y productora general'
const position2 = 'Productor y creativo'
const position3 = 'Socia y creativa'
const position4 = 'Antropóloga y escritora'
const position5 = 'Webmaster & Swing Teacher'
const igLink1 = '@juliasilvapym'
const igLink2 = '@colorcorrectgradingpolish'
const igLink3 = '@anahi_spym'
const igLink4 = '@mariapazymino'
const igLink5 = '@davidberco'
return (
    <div className="section">
      <div className="taCenter">
        <h2 className=''>
        El equipo está conformado por:       
        </h2>
      </div>
      <div className='avatar-container'>
      
        <div className="avatar-card">
          <Avatars icon={avatar1} name={name1} position={position1} igLink={igLink1}
          />
        </div>
        <div className="avatar-card">
          <Avatars icon={avatar2} name={name2} position={position2} igLink={igLink2}
          />
        </div>
        <div className="avatar-card">
          <Avatars icon={avatar3} name={name3} position={position3} igLink={igLink3}
          />
        </div>
        <div className="avatar-card">
          <Avatars icon={avatar4} name={name4} position={position4} igLink={igLink4}
          />
        </div>
        <div className="avatar-card">
          <Avatars icon={avatar5} name={name5} position={position5} igLink={igLink5}
          />
        </div>
        
           
            
      </div>
    </div>
  )
  
};

export default AvatarsGallery;

export const avatarQuery = graphql`
query AvatarQuery {
  allMarkdownRemark {
    nodes {
      frontmatter {
        title
      }
    }
  }
}
`