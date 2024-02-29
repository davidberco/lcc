import React from 'react';
import { graphql } from 'gatsby';

import MemberCard from './MemberCard'
import "./ProjectsGallery.css"


function AvatarsGallery () {
  
const avatar1 = './images/logo.svg';
const avatar2 = './images/avatar.jpg';
const avatar3 = './images/avatar.jpg';

return (
    <div className="section">
      <div className="taCenter">
        <h3 className=''>
        El equipo está conformado por:       
        </h3>
      </div>
      <div className='member-container'>
        <div className="member-card">
          <MemberCard icon={avatar1}
          />
          <div
              className=""
              tabIndex={0}
              aria-label="clickTo"
              role="button"
            >
              Julia Silva
            </div>
        </div>
        <div className="member-card">
          <MemberCard icon={avatar1}
          />
          <div
              className="Button"
              tabIndex={0}
              aria-label="clickTo"
              role="button"
            >
              Cine y Audiovisual
            </div>
        </div>
        <div className="member-card">
          <MemberCard avatar={avatar1}
          />
          <div
              className="Button"
              tabIndex={0}
              aria-label="clickTo"
              role="button"
            >
              Artes Escénicas
            </div>
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