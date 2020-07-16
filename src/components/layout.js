import React from "react"
import { Link } from "gatsby"

import "../styles/main.scss";
import Blogfer from "../../content/assets/blogfer.svg"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <>
        <img 
          src={ Blogfer }
          className="Blogfer__img" 
          alt="" />
        <h1 className="Blogfer__title">
          {title}
        </h1>
      </>
    )
  } else {
    header = (
      <nav>
        <Link to={`/`}>
          {title}
        </Link>
      </nav>
    )
  }
  return (
    <>
      <header className="Blogfer__header">{header}</header>
      <main>
        {children}
      </main>
      <footer className="Blogfer__footer">
        <small>
          {new Date().getFullYear()}, Creative Commons <em>“Algunos derechos reservados”</em>
        </small>
      </footer>
    </>
  )
}

export default Layout
