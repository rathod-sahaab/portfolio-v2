import * as React from "react"

import Layout from "../components/Layout"
import SkillCard from "../components/molecules/SkillCard"
import Seo from "../components/seo"

import skills from "../utils/data/skills"

const SkillsPage = () => (
  <Layout>
    <Seo title="Skills" />
    <h1 className="heading">Skills</h1>
    {skills.map(skill => (
      <SkillCard
        name={skill.name}
        description={skill.description}
        aspects={skill.aspects}
      />
    ))}
  </Layout>
)

export default SkillsPage
