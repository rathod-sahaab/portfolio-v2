import React, { useEffect, useState } from "react"
import RoundButton from "../atoms/RoundButton"

import * as styles from "./FilterPanel.module.css"

const INIT_TAGS = [
  {
    id: "all",
    name: "All",
  },
  {
    id: "js",
    name: "JavaScript",
  },
  {
    id: "frontend",
    name: "Frontend",
  },
  {
    id: "backend",
    name: "Backend",
  },
  {
    id: "cpp",
    name: "C/C++",
  },
]

const FilterPanel = () => {
  let [tags, setTags] = useState([])
  let [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    setTags(INIT_TAGS)
  }, [])
  return (
    <div className={styles.card}>
      {tags.map((tag, index) => {
        return (
          <RoundButton
            key={tag.id}
            active={index == activeIndex}
            onClick={() => {
              setActiveIndex(index)
            }}
          >
            {tag.name.toString()}
          </RoundButton>
        )
      })}
    </div>
  )
}

export default FilterPanel
