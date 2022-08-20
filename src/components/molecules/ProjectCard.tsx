import React from "react"

import { TECHNOLOGY_MAP } from "../../utils/constants"

const ProjectCard = ({
  title,
  description,
  link,
  children,
  tagIds,
}: React.PropsWithChildren<{
  title: string
  description: string
  link: string
  tagIds: string[]
}>) => {
  return (
    <div className="m-auto mt-12 text-fg-100 max-w-[700px]">
      <div className="max-h-[370px] overflow-hidden h-[45vw] flex items-center justify-center bg-transparent rounded-[6px]">
        {children}
      </div>
      <div>
        <a href={link} target="_blank">
          <h2 className="text-[24px] font-bold pt-2 text-fg-100">{title}</h2>
        </a>
        <p className="text-fg-200">{description}</p>
        <div className="mt-4">
          {tagIds.map(tagId => {
            return (
              <span className="bg-transparent mr-2 py-2 px-4 rounded-[6px]">
                {TECHNOLOGY_MAP[tagId]}
              </span>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
