import React from 'react'
import { graphql } from 'gatsby'
import ProjectGallery from '../components/ProjectsGallery'
import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'
import BackgroundVideo from '../components/BackgroundVideo'
import PubFooter from '../components/PubFooter'

// Export Template for use in CMS preview
export const HomePageTemplate = ({ title, subtitle, featuredImage, body, video, videoPoster, videoTitle,banner2 }) => (
  <main className="Home">
    {/* <PageHeader
      large      
      // title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    /> */}
    <section className='BackgroundVideo-section section'>
      <BackgroundVideo poster={videoPoster} videoTitle={videoTitle}>
      {video && <source src={video} type="video/mp4" />}
      </BackgroundVideo>
    </section>

    <div className="section">
      <div className="container">
        <h1 className='taCenter upperCaseText bigTitle'>
        {title}
        </h1>
      </div>
      <div className="container">
        <h3 className="taCenter ">
          {subtitle}
        </h3>
      </div>
      
      <ProjectGallery />
    </div>
 {/* Banner by BercoStudio */}
    {/* <div className="banner">
      <div className="container PubHomePageTitle">
        <h3 className=" taCenter upperCaseText">
        Creamos y gestionamos PROYECTOS CULTURALES, ARTÍSTICOS, EDUCATIVOS, EN CINE Y ARTES ESCÉNICAS.
        </h3>
      </div>
      <img className="Image" src={banner2} alt='banner2'></img>
    </div> */}

    <div className="PubHomePageStyle">

    <PubFooter background resolutions="large"
          src={banner2}
          alt={videoTitle}
          size="cover"
          className=""
     />
      <h3 className="PubHomePageTitle taCenter upperCaseText">
        Creamos y gestionamos PROYECTOS CULTURALES, ARTÍSTICOS, EDUCATIVOS, EN CINE Y ARTES ESCÉNICAS.
        </h3>
    </div>



    {/* <div className="BackgroundImage" style={{ backgroundImage: `url(${banner2})` }} >
      <h3 className="taCenter upperCaseText">
        Creamos y gestionamos PROYECTOS CULTURALES, ARTÍSTICOS, EDUCATIVOS, EN CINE Y ARTES ESCÉNICAS.
        </h3>
      </div> */}

    {/* <div className="container">
      <div className="BackgroundImage" style={{ backgroundImage: `url(${banner2})` }} >
      </div>
    </div> */}
    
    {/* <section className="section">
      <div className="container">
        <Content source={body} />
      </div>
    </section> */}
    
    {/* <section className="section taCenter">
      <h2>Noticias</h2>
      <p>Section to develop...</p>
      <div
        className="Button"
        onClick={``}
        tabIndex={0}
        aria-label="Toggle Popup"
        role="button"
      >
        ver proyectos
      </div>
    </section> */}
    
  </main>
)

// Export Default HomePage for front-end
const HomePage = ({ data: { page } }) => (
  <Layout meta={page.frontmatter.meta || false}>
    <HomePageTemplate {...page} {...page.frontmatter} body={page.html} />
    
  </Layout>
)

export default HomePage

export const pageQuery = graphql`
  ## Query for HomePage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query HomePage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        subtitle
        featuredImage
        video
        videoPoster
        videoTitle
        banner2
      }
    }
  }
`
