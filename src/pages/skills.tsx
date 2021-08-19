import * as React from "react"

import Layout from "../components/Layout"
import SkillCard from "../components/molecules/SkillCard"
import Seo from "../components/seo"

import skills from "../utils/data/skills"

import * as styles from "./skills.module.css"

const SkillsPage = () => (
  <Layout>
    <Seo title="Skills" />
    <h1 className="heading">Skills</h1>
    <section className={styles.skillsHolder}>
      {skills.map(skill => (
        <SkillCard
          name={skill.name}
          description={skill.description}
          aspects={skill.aspects}
          certifications={skill.certifications}
        />
      ))}
    </section>
  </Layout>
)

export default SkillsPage
