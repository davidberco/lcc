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
        <h1 className='taCenter'>
          Somos una productora cultural para Ecuador y el mundo
        </h1>
          <h4 className='taCenter'
          style={{ marginLeft:'4em', marginRight:'4em' }}>
          El objetivo es crear y producir, acompañar y difundir  proyectos que promuevan las artes desde un país pequeño pero lleno de diversidad artística y cultural.
          </h4>
      </div>
    </div>
    <ProjectGallery />
    <section className="section">
      <div className="container">
        <Content source={body} />
      </div>
    </section>
    {/* <section className="section taCenter">
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
      }
    }
  }
`
