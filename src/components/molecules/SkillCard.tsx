import React from "react"
import { IoMdCheckmarkCircleOutline } from "@react-icons/all-files/io/IoMdCheckmarkCircleOutline"
import { FiAward } from "@react-icons/all-files/fi/FiAward"

import { SkillAspect, SkillCert } from "../../utils/types"

import * as styles from "./SkillCard.module.css"

const SkillCard = ({
  name,
  description,
  aspects,
  certifications,
}: {
  name: string
  description: string
  aspects: SkillAspect[]
  certifications?: SkillCert[]
}) => {
  return (
    <div className={styles.card}>
      <h3>{name}</h3>
      <p>{description}</p>
      <ul className={styles.ul}>
        {aspects.map(aspect => {
          return (
            <li
              key={aspect.name}
              className={styles.li}
              title={aspect.description}
            >
              <IoMdCheckmarkCircleOutline size="1.5em" />
              <span>{aspect.name}</span>
            </li>
          )
        })}
      </ul>
      {certifications ? (
        <ul className={styles.ul}>
          <div className={styles.certHeading}>Certifications</div>
          {certifications.map(certification => (
            <li key={certification.certification} className={styles.li}>
              <FiAward size="1.5em" />
              <span>
                {certification.issuer}:{" "}
                <a href={certification.link} target="_blank">
                  {certification.certification}
                </a>
              </span>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}

export default SkillCard
