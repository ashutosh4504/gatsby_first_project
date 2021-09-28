import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { container, heading, navLinks, navLinkItem, navLinkText, siteTitle  } from '../components/layout.module.css'

// const Layout = ({ pageTitle, children }) => {
//   return (
//     <div className={container}>
//       <title>{pageTitle}</title>
//       <nav>
//         <ul className={navLinks}>
//           <li className={navLinkItem}><Link className={navLinkText} to="/">Home</Link></li>
//           <li><Link to="/about">About</Link></li>
//         </ul>
//       </nav>
//       <main>
//         <h1 className={heading}>{pageTitle}</h1>
//         {children}
//       </main>
//     </div>
//   )
// }


const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
    return (
    <div className={container}>
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      <header className={siteTitle}>{data.site.siteMetadata.title}</header>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}><Link className={navLinkText} to="/">Home</Link></li>
          <li className={navLinkItem}><Link to="/about">About</Link></li>
          <li className={navLinkItem}><Link to="/blog" className={navLinkText}>Blog</Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout