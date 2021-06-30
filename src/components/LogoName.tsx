import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import * as styles from "./LogoName.module.css"
const LogoName = () => {
  return (
    <div className={styles.holder}>
      <StaticImage
        src="../images/logo.png"
        alt="Abhay logo"
        placeholder="blurred"
        layout="fixed"
        width={30}
        className={styles.logo}
      />
      <h3 className={styles.text}>s | d | h</h3>
    </div>
  )
}

export default LogoName
