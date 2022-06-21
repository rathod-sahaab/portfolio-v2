import * as React from "react"

import Layout from "../components/Layout"
import FilterPanel from "../components/molecules/FilterPanel"
import SkillCard from "../components/molecules/SkillCard"
import Seo from "../components/seo"
import { SKILL_MAP } from "../utils/constants"

import skills from "../utils/data/skills"

const SkillsPage = () => {
  const [tagIds, setTags] = React.useState<string[]>([])
  const [activeIndex, setActiveIndex] = React.useState(0)

  React.useEffect(() => {
    setTags(Object.keys(SKILL_MAP))
  }, [])

  return (
    <Layout>
      <Seo title="Skills" />
      <h1 className="heading">Skills</h1>
      <FilterPanel
        tagIds={tagIds}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        tagIdToName={SKILL_MAP}
        centered={true}
      />
      <section className="grid grid-cols-1 w-[90%] md:max-w-[700px] md:grid-cols-2 md:gap-[1em] m-auto mt-[2em]">
        {skills
          .filter(skill => {
            return (
              tagIds[activeIndex] === "all" || skill.tag == tagIds[activeIndex]
            )
          })
          .map(skill => {
            return (
              <SkillCard
                key={skill.name}
                name={skill.name}
                description={skill.description}
                aspects={skill.aspects}
                certifications={skill.certifications}
              />
            )
          })}
      </section>
    </Layout>
  )
}

export default SkillsPage
