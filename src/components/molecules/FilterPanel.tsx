import React, { useEffect, useState } from "react"
import RoundButton from "../atoms/RoundButton"

const FilterPanel = ({
  tagIds,
  activeIndex,
  setActiveIndex,
  tagIdToName,
  centered = false,
}: {
  tagIds: string[]
  activeIndex: number
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>
  tagIdToName: any
  centered?: boolean
}) => {
  return (
    <div
      className={
        "bg-bg-200 rounded-[5px] p-4 max-w-[700px] w-[90%] m-auto mt-8 relative z-[6] " +
        (centered ? "flex justify-center flex-wrap" : "")
      }
    >
      {tagIds.map((tagId: string, index: number) => {
        return (
          <RoundButton
            key={tagId}
            active={index == activeIndex}
            onClick={() => {
              setActiveIndex(index)
            }}
          >
            {tagIdToName[tagId]}
          </RoundButton>
        )
      })}
    </div>
  )
}

export default FilterPanel
