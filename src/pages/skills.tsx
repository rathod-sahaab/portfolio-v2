import * as React from "react"

import Layout from "../components/Layout"
import FilterPanel from "../components/molecules/FilterPanel"
import SkillCard from "../components/molecules/SkillCard"
import Seo from "../components/seo"
import { SKILL_MAP } from "../utils/constants"

import skills from "../utils/data/skills"

import * as styles from "./skills.module.css"

const SkillsPage = () => {
  const [tagIds, setTags] = React.useState([])
  const [activeIndex, setActiveIndex] = React.useState(0)

  React.useEffect(() => {
    let tagIdsBuffer = []
    for (const tagId in SKILL_MAP) {
      tagIdsBuffer.push(tagId)
    }
    setTags(tagIdsBuffer)
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
      <section className={styles.skillsHolder}>
        {skills.map(skill => {
          if (
            tagIds[activeIndex] === "all" ||
            skill.tag == tagIds[activeIndex]
          ) {
            return (
              <SkillCard
                key={skill.name}
                name={skill.name}
                description={skill.description}
                aspects={skill.aspects}
                certifications={skill.certifications}
              />
            )
          }
        })}
      </section>
    </Layout>
  )
}

export default SkillsPage
