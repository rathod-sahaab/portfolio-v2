import * as React from "react"
import { Link } from "gatsby"
import { AiOutlineMenu } from "@react-icons/all-files/ai/AiOutlineMenu"
import { AiOutlineClose } from "@react-icons/all-files/ai/AiOutlineClose"
import { HiOutlineExternalLink } from "@react-icons/all-files/hi/HiOutlineExternalLink"
import { FiDownload } from "@react-icons/all-files/fi/FiDownload"

const LOCAL_LINKS = [
  {
    name: "Home",
    to: "/",
  },
  {
    name: "Projects",
    to: "/projects",
  },
  {
    name: "Skills",
    to: "/skills",
  },
  {
    name: "Contact",
    to: "/contact",
  },
]

import * as styles from "./SiteNav.module.css"

function getSlugFromUrl(url: string): string {
  let suffix: string = new URL(url).pathname

  if (suffix.lastIndexOf("/") != 0) {
    suffix = suffix.substr(0, suffix.length - 1)
  }
  return suffix
}

const SiteNav = () => {
  const [activePage, _] = React.useState(getSlugFromUrl(window.location.href))

  return (
    <div className={styles.navHolder}>
      <input type="checkbox" className={styles.navToggler} />
      <AiOutlineMenu size="30" className={styles.navTogglerOpenIcon} />
      <AiOutlineClose size="30" className={styles.navTogglerCloseIcon} />
      <nav className={styles.nav}>
        <div className={styles.linksContainer}>
          {LOCAL_LINKS.map(localLink => {
            return (
              <Link
                className={`${styles.link} ${
                  localLink.to == activePage ? styles.active : ""
                }`}
                to={localLink.to}
                title={localLink.name}
              >
                {localLink.name}
              </Link>
            )
          })}
          <a
            className={styles.link}
            href="https://rathod-sahaab.github.io/blog/"
            target="_blank"
            title="Open Blog"
          >
            Blog <HiOutlineExternalLink size="1em" />
          </a>
          <a
            className={styles.link}
            href="https://docs.google.com/document/d/1-gbj0lrWHx3foaCjtzu456TVz-x-HVl3W9SlbZRPhkw/export?format=pdf"
            title="Download Resume"
            download
          >
            Resume <FiDownload size="1em" />
          </a>
        </div>
      </nav>
    </div>
  )
}

export default SiteNav
