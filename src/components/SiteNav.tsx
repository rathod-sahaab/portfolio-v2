import * as React from "react"
import { Link } from "gatsby"
import { AiOutlineMenu } from "@react-icons/all-files/ai/AiOutlineMenu"
import { AiOutlineClose } from "@react-icons/all-files/ai/AiOutlineClose"

import * as styles from "./SiteNav.module.css"
const SiteNav = () => {
  return (
    <div className={styles.navHolder}>
      <input type="checkbox" className={styles.navToggler} />
      <AiOutlineMenu size="30" className={styles.navTogglerOpenIcon} />
      <AiOutlineClose size="30" className={styles.navTogglerCloseIcon} />
      <nav className={styles.nav}>
        <div className={styles.linksContainer}>
          <Link className={styles.link} to="/" title="Home">
            Home
          </Link>
          <Link className={styles.link} to="/projects" title="Projects">
            Projects
          </Link>
          <Link className={styles.link} to="/skills" title="Skills">
            Skills
          </Link>
          <a
            className={styles.link}
            href="https://rathod-sahaab.github.io/blog/"
            target="_blank"
            title="Blog"
          >
            Blog
          </a>
          <Link className={styles.link} to="/contact" title="Contact">
            Contact
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default SiteNav
