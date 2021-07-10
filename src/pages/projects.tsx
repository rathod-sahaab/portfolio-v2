import * as React from "react"
import FilterPanel from "../components/molecules/FilterPanel"

import Layout from "../components/Layout"
import Seo from "../components/seo"
import ProjectCard from "../components/molecules/ProjectCard"

import projects from "../utils/data/projects"
import { TAG_ID_TO_NAME } from "../utils/constants"

const ProjectsPage = () => {
  const [tags, setTags] = React.useState([])
  const [activeIndex, setActiveIndex] = React.useState(0)

  React.useEffect(() => {
    let tagIdsBuffer = []
    for (const tagId in TAG_ID_TO_NAME) {
      tagIdsBuffer.push(tagId)
    }
    setTags(tagIdsBuffer)
  }, [])

  return (
    <Layout>
      <Seo title="Projects" />
      <h1 className="heading">Projects</h1>
      <FilterPanel
        tags={tags}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
      <section>
        {projects.map(project => {
          if (
            tags[activeIndex] === "all" ||
            project.tagIds.indexOf(tags[activeIndex]) > -1
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
