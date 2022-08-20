import React from "react"
import LogoName from "./LogoName"
import SiteNav from "./SiteNav"

const Header = () => {
  return (
    <header className="fixed flex items-center p-4 bg-bg-100 justify-between left-[50vw] -translate-x-1/2 top-0 w-screen max-w-[1140px] z-10">
      <LogoName />
      <SiteNav />
    </header>
  )
}

export default Header
