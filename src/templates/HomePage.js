import React from 'react'
import { graphql } from 'gatsby'
import ProjectGallery from '../components/ProjectsGallery'
import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'

// Export Template for use in CMS preview
export const HomePageTemplate = ({ title, subtitle, featuredImage, body }) => (
  <main className="Home">
    <PageHeader
      large
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />

    <div className="section">
      <div className="container">
        <h2 className='taCenter'
        style={{ marginLeft:'2em', marginRight:'2em' }}>
        Somos una productora y fundación. Gestionamos proyectos culturales, artísticos, educativos, en cine y artes escénicas.</h2>
        <h3 className="taCenter">Nuestra sede es Ecuador, un país pequeño en Latinoamérica, aunque megadiverso y multicultural. Desde aquí trabajamos en proyectos locales e internacionales.
        </h3>
      </div>
    </div>
    
    {/* Banner by BercoStudio */}
    {/* <div className="banner">
      <img className="Image" src={banner2} alt=''></img>
    </div> */}

    <ProjectGallery />
    
    <section className="section">
      <div className="container">
        <Content source={body} />
      </div>
    </section>
    
    <section className="section taCenter">
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
    </section>
    
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
      }
    }
  }
`
