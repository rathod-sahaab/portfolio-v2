import * as React from "react"

import Layout from "../components/Layout"
import SkillCard from "../components/molecules/SkillCard"
import Seo from "../components/seo"

const skills = [
  {
    name: "C++",
    description:
      "Mother tounge, the first programming language I learned and still love.",
    aspects: [
      {
        name: "Standard Template Library",
        level: 2,
        description: "Standard Template Library",
      },
      {
        name: "C++17",
        level: 2,
        description: "ISO standard of C++17 and previous",
      },
      {
        name: "Object Oriented Programming",
        level: 2,
        description: "Object Oriented Programming",
      },
    ],
  },
  {
    name: "JavaScript",
    description: "Fast(enough), omnipresent, and fun; some gripes though...",
    aspects: [
      {
        name: "Event loop",
        level: 1,
        description: "The event loop JS engines use to be non-blocking",
      },
      {
        name: "Asynchronus programming",
        level: 1,
        description: "asycn/await and promises",
      },
      {
        name: "ES6+",
        level: 1,
        description: "The recent additions to ECMA Script 2015",
      },
    ],
  },
  {
    name: "TypeScript",
    description: "The reason I write so many web apps, great language",
    aspects: [
      { name: "Classes", level: 1, description: "Object Oriented Programming" },
      {
        name: "Interfaces",
        level: 1,
        description: "Object Oriented Programming",
      },
    ],
  },
]

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
