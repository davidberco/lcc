import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'
import SVGIcon from '../components/SVGIcon'
import ButtonAnimation from '../components/ButtonAnimation'

import AvatarsGallery from '../components/AvatarsGallery'

// Export Template for use in CMS preview
export const QuienesSomosPageTemplate = ({
  title,
  subtitle,
  featuredImage,
  accordion,
  body
}) => (
  <main className="DefaultPage">
    <PageHeader
      white
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />

    <section className="section">
      <div className="container">
        <Content source={body} />
      </div>
      <div className="container">
     <ButtonAnimation>

     </ButtonAnimation>

      </div>

      <div className="container">
        <AvatarsGallery/>
      </div>
      
      
    </section>
  </main>
)

const QuienesSomosPage = ({ data: { page } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <QuienesSomosPageTemplate {...page.frontmatter} body={page.html} />
  </Layout>
)
export default QuienesSomosPage

export const pageQuery = graphql`
  query QuienesSomosPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        subtitle
        featuredImage
        accordion {
          title
          description
        }
      }
    }
  }
`
