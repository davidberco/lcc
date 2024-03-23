import React from 'react';
import { graphql, useStaticQuery } from 'gatsby'
import MemberCard from '../components/MemberCard'
import "./ProjectsGallery.css"

function ProjectsGallery () {

  const data = useStaticQuery(graphql`
  query MyQuery {
    allMarkdownRemark {
      nodes {
        frontmatter {
          iconsImages {
            icon1
            icon2
            icon3
          }
        }
      }
    }
  }
`)

console.log(data.allMarkdownRemark.nodes.frontmatter)

// Old Set of icons
const icon1 = './images/people.png';
const icon2 = './images/video-camera.png';
const icon3 = './images/teather.png';

// New Set of Icons
// const icon1 = './images/idea.svg';
// const icon2 = './images/movie-camera.svg';
// const icon3 = './images/stage.svg';

  return (
    <div className="section">
      <div className="container">
        <h3 className="taCenter smallCaps">
        Te invitamos a conocer las tres áreas que manejamos: 
        </h3>
      </div>
      <div className='member-container'>
        <div className="member-card">
          <MemberCard icon={icon2}
          />
              <a className='linksToProjects' href='/post-categories/cine-audiovisual/'>
              <div
              className="Button"
              tabIndex={0}
              aria-label="clickTo"
              role="button"
            >Cine y Audiovisual</div>
              </a>
            
        </div>
        <div className="member-card">
          <MemberCard icon={icon3}
          />
              <a className='linksToProjects' href='/post-categories/artes-escenicas/'>
              <div
              className="Button"
              tabIndex={0}
              aria-label="clickTo"
              role="button"
            >
              Artes Escénicas
            </div>
              </a>
        </div>    
        <div className="member-card">
          <MemberCard icon={icon1}
          />
              <a className='linksToProjects' href='/post-categories/cultura-educacion/'>
              <div
              className="Button"
              tabIndex={0}
              aria-label="clickTo"
              role="button"
            >
              Cultura y Educación
            </div>
              </a>
        </div> 
      </div>
    </div>
  )
  
};

export default ProjectsGallery;