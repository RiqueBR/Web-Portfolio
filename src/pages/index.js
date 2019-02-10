import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const HomePage = ({data}) => {

  return(
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Home Page</h1>

    <h2>Index</h2>
    {data.allMarkdownRemark.edges.map(post => (
      <Link 
        key={post.node.id} 
        to={post.node.frontmatter.path}>
        {post.node.frontmatter.title}
      </Link>
    ))}

  </Layout>
  )

}



export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(limit: 10) {
      edges {
        node {
          id
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`

export default HomePage
