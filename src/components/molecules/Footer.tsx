import React from "react"

import { AiOutlineCopyrightCircle } from "@react-icons/all-files/ai/AiOutlineCopyrightCircle"
import * as styles from "./Footer.module.css"
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <AiOutlineCopyrightCircle /> <span>Abhay Raj Singh, 2021</span>
    </footer>
  )
}

export default Footer
