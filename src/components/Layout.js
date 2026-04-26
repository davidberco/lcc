import React, { Fragment } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Nav from './Nav'
import Footer from './Footer'

import 'modern-normalize/modern-normalize.css'
import './globalStyles.css'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query IndexLayoutQuery {
      settingsYaml {
        siteTitle
        siteDescription
        googleTrackingId
        socialMediaCard {
          image
        }
      }
      allPosts: allMarkdownRemark(
        filter: { fields: { contentType: { eq: "postCategories" } } }
        sort: { frontmatter: { date: DESC } }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)

  const subNav = {
    posts: data.allPosts.edges
      ? data.allPosts.edges.map(post => ({
          ...post.node.fields,
          ...post.node.frontmatter
        }))
      : false
  }

  return (
    <Fragment>
      <Nav subNav={subNav} />
      <Fragment>{children}</Fragment>
      <Footer />
    </Fragment>
  )
}

export default Layout
