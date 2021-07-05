import React from "react"
import { AiOutlineDoubleRight } from "@react-icons/all-files/ai/AiOutlineDoubleRight"

import * as styles from "./UpAnim.module.css"

const UpAnim = () => {
  return (
    <div className={styles.container}>
      <AiOutlineDoubleRight className={styles.arrow} size="60" />
    </div>
  )
}

export default UpAnim
