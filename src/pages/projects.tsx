import * as React from "react"
import FilterPanel from "../components/molecules/FilterPanel"

import Layout from "../components/Layout"
import Seo from "../components/seo"
import ProjectCard from "../components/molecules/ProjectCard"

import projects from "../utils/data/projects"
import { TECHNOLOGY_MAP } from "../utils/constants"

const ProjectsPage = () => {
  const [tagIds, setTags] = React.useState([])
  const [activeIndex, setActiveIndex] = React.useState(0)

  React.useEffect(() => {
    let tagIdsBuffer = []
    for (const tagId in TECHNOLOGY_MAP) {
      tagIdsBuffer.push(tagId)
    }
    setTags(tagIdsBuffer)
  }, [])

  return (
    <Layout>
      <Seo title="Projects" />
      <h1 className="heading">Projects</h1>
      <FilterPanel
        tagIds={tagIds}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
	  tagIdToName={TECHNOLOGY_MAP}
      />
      <section>
        {projects.map(project => {
          if (
            tagIds[activeIndex] === "all" ||
            project.tagIds.indexOf(tagIds[activeIndex]) > -1
          ) {
            return (
              <ProjectCard
                title={project.title}
                description={project.description}
                link={project.link}
                tagIds={project.tagIds}
              >
                {project.imgComponent}
              </ProjectCard>
            )
          }
        })}
      </section>
    </Layout>
  )
}

export default ProjectsPage
