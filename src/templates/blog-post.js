import React from 'react'
import { graphql } from 'gatsby'

export const pageQuery = graphql`
  query ($slug: String!) {
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

export default (props) => {
  const {
    title,
    description
  } = props.data.contentfulCourse

  return (
    <div>
      <h1>{ title }</h1>
      <div dangerouslySetInnerHTML={{ __html: description.childMarkdownRemark.html }} />
    </div>
  )
}