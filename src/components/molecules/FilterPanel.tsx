import React, { useEffect, useState } from "react"
import RoundButton from "../atoms/RoundButton"

import * as styles from "./FilterPanel.module.css"

const FilterPanel = ({
  tagIds,
  activeIndex,
  setActiveIndex,
  tagIdToName,
}: {
  tagIds: string[]
  activeIndex: number
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>
  tagIdToName: any
}) => {
  console.log(tagIdToName)
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
            {tagIdToName[tag]}
          </RoundButton>
        )
      })}
    </div>
  )
}

export default FilterPanel
