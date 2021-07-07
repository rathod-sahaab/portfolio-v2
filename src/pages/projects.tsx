import * as React from "react"
import FilterPanel from "../components/molecules/FilterPanel"

import Layout from "../components/Layout"
import Seo from "../components/seo"
import ProjectCard from "../components/molecules/ProjectCard"

import projects from "../utils/data/projects"

const ProjectsPage = () => (
  <Layout>
    <Seo title="Projects" />
    <h1 className="heading">Projects</h1>
    <FilterPanel />
    <section>
      {projects.map(project => {
        return (
          <ProjectCard
            title={project.title}
            description={project.description}
            link={project.link}
            tagIds={project.tagIds}
          >
            {project.isgif ? (
              <img src={project.imgsrc} alt={project.alt} />
            ) : (
              project.imgsrc
            )}
          </ProjectCard>
        )
      })}
    </section>
  </Layout>
)

export default ProjectsPage
