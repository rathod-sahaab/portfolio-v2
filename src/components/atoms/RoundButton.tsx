import React from "react"

import * as styles from "./RoundButton.module.css"

const RoundButton = ({
  onClick,
  children,
  active,
}: React.PropsWithChildren<{
  onClick: React.MouseEventHandler<HTMLButtonElement>
  active: boolean
}>) => {
  return (
    <button
      className={`${styles.button} ${active ? styles.active : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default RoundButton
