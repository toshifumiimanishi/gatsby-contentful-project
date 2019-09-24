import React, { Component } from 'react'
import { graphql } from 'gatsby'

class BlogPostTemplate extends Component {
  render() {
    const {
      title,
      description
    } = this.props.data.contentfulCourse
    
    return (
      <div>
        <h1>{ title }</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: description.childMarkdownRemark.html,
          }}
        >
        </div>
      </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulCourse(slug: { eq: $slug }) {
      title
      description {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`