import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import { MDXRenderer } from 'gatsby-plugin-mdx'
// import { navLinkText  } from '../components/layout.module.css'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
        <ul>
        {
            // data.allFile.nodes.map(node => (
            // <li className={navLinkText} key={node.name}>
            //     {node.name}
            // </li>
            // ))
            data.allMdx.nodes.map((node) => (
                <article key={node.id}>
                  {/* <h2>{node.frontmatter.title}</h2> */}
                  <Link to={`/blog/${node.slug}`}>
                    {node.frontmatter.title}
                  </Link>
                  <p>Posted: {node.frontmatter.date}</p>
                  {/* <MDXRenderer>
                    {node.body}
                  </MDXRenderer> */}
                </article>
              ))
        }
        </ul>
    </Layout>
  )
}

// export const query = graphql`
//   query {
//     allFile {
//       nodes {
//         name
//       }
//     }
//   }
// `

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        body
        slug
      }
    }
  }
`

export default BlogPage