import React, { useEffect, useState } from "react"
import { TAG_ID_TO_NAME } from "../../utils/constants"
import RoundButton from "../atoms/RoundButton"

import * as styles from "./FilterPanel.module.css"

const FilterPanel = ({
  tagIds,
  activeIndex,
  setActiveIndex,
}: {
  tagIds: string[]
  activeIndex: number
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>
}) => {
  return (
    <div className={styles.card}>
      {tagIds.map((tag: string, index: number) => {
        return (
          <RoundButton
            key={tag}
            active={index == activeIndex}
            onClick={() => {
              setActiveIndex(index)
            }}
          >
            {TAG_ID_TO_NAME[tag]}
          </RoundButton>
        )
      })}
    </div>
  )
}

export default FilterPanel
