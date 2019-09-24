import React from "react"
import { Link, graphql } from "gatsby"

const IndexPage = ({ data }) => (
  <div>
    <ul>
      { data.allContentfulCourse.edges.map(edge => {
        return (
          <li key={edge.node.slug}>
            <Link to={ edge.node.slug }><h3>{ edge.node.title }</h3></Link>
            <div>{ edge.node.description.childMarkdownRemark.excerpt }</div>
          </li>
        )
      }) }
    </ul>
  </div>
)

export default IndexPage

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulCourse(
        filter: { node_locale: { eq: "en-US" } },
        sort: { fields: [createdAt], order: DESC }
      ) {
      edges {
        node {
          title
          slug
          description {
            childMarkdownRemark {
              excerpt
            }
          }
        }
      }
    }
  }
`