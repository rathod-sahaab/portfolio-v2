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
        "bg-bg-200 rounded-[6px] p-2 max-w-screen-md overflow-auto [&>*]:w-max md:[&>*]:w-auto w-fit m-4 md:m-auto mt-8 relative z-[6] " +
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
