import React from "react"
import { IoMdCheckmarkCircleOutline } from "@react-icons/all-files/io/IoMdCheckmarkCircleOutline"

import { SkillAspect } from "../../utils/types"

import * as styles from "./SkillCard.module.css"

const SkillCard = ({
  name,
  description,
  aspects,
}: {
  name: string
  description: string
  aspects: SkillAspect[]
}) => {
  return (
    <div className={styles.card}>
      <h3>{name}</h3>
      <p>{description}</p>
      <ul className={styles.ul}>
        {aspects.map(aspect => {
          return (
            <li className={styles.li} title={aspect.description}>
              <IoMdCheckmarkCircleOutline size="1.5em" />
              {aspect.name}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default SkillCard
