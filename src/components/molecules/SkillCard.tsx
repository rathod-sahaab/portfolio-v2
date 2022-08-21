import React from "react"
import { IoMdCheckmarkCircleOutline } from "@react-icons/all-files/io/IoMdCheckmarkCircleOutline"
import { FiAward } from "@react-icons/all-files/fi/FiAward"

import { SkillAspect, SkillCert } from "../../utils/types"

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
    <div className="rounded-[6px] p-4 bg-bg-200">
      <h3 className="font-bold text-[20px] mb-2">{name}</h3>
      <p>{description}</p>
      <ul className="mt-4">
        {aspects.map(aspect => {
          return (
            <li
              key={aspect.name}
              className="flex items-center m-2"
              title={aspect.description}
            >
              <IoMdCheckmarkCircleOutline size="1.5em" className="mr-2" />
              <span>{aspect.name}</span>
            </li>
          )
        })}
      </ul>
      {certifications ? (
        <ul className="mt-4">
          <div className="mb-2 font-bold">Certifications</div>
          {certifications.map(certification => (
            <li
              key={certification.certification}
              className="flex items-center m-2"
            >
              <FiAward size="1.5em" className="mr-2" />
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
