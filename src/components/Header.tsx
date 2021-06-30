import React from "react"
import LogoName from "./LogoName"
import SiteNav from "./SiteNav"

import * as styles from "./Header.module.css"

const Header = () => {
  return (
    <header className={styles.header}>
      <LogoName />
      <SiteNav />
    </header>
  )
}

export default Header
