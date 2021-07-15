import * as React from "react"
import Header from "./Header"

import "./Layout.css"
import Footer from "./molecules/Footer"
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
