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
      <section className="w-full p-4 m-auto mt-8 grid grid-cols-1 md:max-w-screen-md md:grid-cols-2 gap-4">
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
