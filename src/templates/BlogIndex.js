import React from 'react'
import { graphql } from 'gatsby'
import qs from 'qs'

import PageHeader from '../components/PageHeader'
import PostSection from '../components/PostSection'
import PostCategoriesNav from '../components/PostCategoriesNav'
import Layout from '../components/Layout'

export const byDate = posts => {
  const now = Date.now()
  return posts.filter(post => Date.parse(post.date) <= now)
}

export const byCategory = (posts, title, contentType) => {
  const isCategory = contentType === 'postCategories'
  const byCat = post =>
    post.categories &&
    post.categories.filter(cat => cat.category === title).length
  return isCategory ? posts.filter(byCat) : posts
}

// Export Template for use in CMS preview
export const BlogIndexTemplate = ({
  title,
  subtitle,
  featuredImage,
  posts = [],
  postCategories = [],
  enableSearch = true,
  contentType,
  location
}) => {
  let filteredPosts =
    posts && !!posts.length
      ? byCategory(byDate(posts), title, contentType)
      : []

  if (location) {
    let queryObj = location.search.replace('?', '')
    queryObj = qs.parse(queryObj)
    if (enableSearch && queryObj.s) {
      const searchTerm = queryObj.s.toLowerCase()
      filteredPosts = filteredPosts.filter(post =>
        post.frontmatter.title.toLowerCase().includes(searchTerm)
      )
    }
  }

  return (
    <main className="Blog">
      <PageHeader
        white
        title={title}
        subtitle={subtitle}
        backgroundImage={featuredImage}
      />

      {!!postCategories.length && (
        <section className="section thin">
          <div className="container">
            <PostCategoriesNav enableSearch categories={postCategories} />
          </div>
        </section>
      )}

      {!!posts.length && (
        <section className="section">
          <div className="container">
            <PostSection posts={filteredPosts} />
          </div>
        </section>
      )}
    </main>
  )
}

// Export Default BlogIndex for front-end
const BlogIndex = ({ data: { page, posts, postCategories }, location }) => (
  <Layout>
    <BlogIndexTemplate
      {...page}
      {...page.fields}
      {...page.frontmatter}
      posts={posts.edges.map(post => ({
        ...post.node,
        ...post.node.frontmatter,
        ...post.node.fields
      }))}
      postCategories={postCategories.edges.map(post => ({
        ...post.node,
        ...post.node.frontmatter,
        ...post.node.fields
      }))}
      location={location}
    />
  </Layout>
)

export default BlogIndex

export const pageQuery = graphql`
  query BlogIndex($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      fields {
        contentType
      }
      frontmatter {
        title
        excerpt
        template
        subtitle
        featuredImage
      }
    }

    posts: allMarkdownRemark(
      filter: { fields: { contentType: { eq: "posts" } } }
      sort: { frontmatter: { date: DESC } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            date
            categories {
              category
            }
            featuredImage
          }
        }
      }
    }
    postCategories: allMarkdownRemark(
      filter: { fields: { contentType: { eq: "postCategories" } } }
      sort: { frontmatter: { title: DESC } }
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
`
