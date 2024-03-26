import React from 'react';
import { graphql } from 'gatsby';

import Avatars from '../components/Avatars'
import "./AvatarsGallery.css"


function AvatarsGallery () {
  
const avatar1 = 'https://ucarecdn.com/3919ab4b-ecbd-4e51-8fac-b82682680dba/teammemberJuliaSilva.jpg';
const avatar2 = 'https://ucarecdn.com/63ea7d78-e038-4ba2-99c3-aae335cbd93e/teammemberEmmanuelBlanchard.jpg';
const avatar3 = 'https://ucarecdn.com/9e2b9740-722f-4ff9-9e0c-af6118ba82d0/teammemberAnahiSilva.jpg';
const avatar4 = 'https://ucarecdn.com/abc3699a-bc2b-4046-b078-2c0d3d54294d/teammemberMariaEugeniaSilva.jpg';
// const avatar5 = 'https://ucarecdn.com/b70bd6cf-acdc-403e-ac22-8caa5ac1a6f2/teammember2.jpg';
const name1 = 'Julia Silva'
const name2 = 'Emmanuel Blanchard'
const name3 = 'Anahí Silva'
const name4 = 'María Eugenia Paz y Miño'
// const name5 = 'David Bercovici'
const position1 = 'Directora, creativa y productora general'
const position2 = 'Productor y creativo'
const position3 = 'Socia y creativa'
const position4 = 'Antropóloga y escritora'
// const position5 = 'Webmaster & Swing Teacher'
const igLink1 = '@juliasilvapym'
const igLink2 = '@colorcorrectgradingpolish'
const igLink3 = '@anahi_spym'
const igLink4 = '@mariapazymino'
// const igLink5 = '@davidberco'
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
        {/* <div className="avatar-card">
          <Avatars icon={avatar5} name={name5} position={position5} igLink={igLink5}
          />
        </div> */}
        
           
            
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