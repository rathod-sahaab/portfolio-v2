import * as React from "react"
import FilterPanel from "../components/molecules/FilterPanel"

import Layout from "../components/Layout"
import Seo from "../components/seo"
import ProjectCard from "../components/molecules/ProjectCard"
import { ProjectGifs } from "../components/molecules/ProjectGifs"

const projects = [
  {
    title: "elide.me: A webapp to make your URLs catchy and easy.",
    description:
      "The app helps you simplify your urls by letting you decide what they are so you can use relatable urls instead of some gibberish.",
    link: "https://console.elide.me",
    tagIds: ["rust", "react", "frontend", "js"],
    imgsrc: ProjectGifs.elide,
    alt: "elide project's GIF",
  },
  {
    title: "QRCoder: A simple app to generate QR codes",
    description:
      "Just enter the text, email, hyperlink etc. select error correction level, choose the color and boom you have a QR.",
    link: "https://rathod-sahaab.github.io",
    tagIds: ["react", "js"],
    imgsrc: ProjectGifs.qrcoder,
    alt: "QRCoder project's GIF",
  },
]

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
            <img src={project.imgsrc} alt={project.alt} />
          </ProjectCard>
        )
      })}
    </section>
  </Layout>
)

export default ProjectsPage
