import * as React from "react"
import FilterPanel from "../components/molecules/FilterPanel"

import Layout from "../components/Layout"
import Seo from "../components/seo"
import ProjectCard from "../components/molecules/ProjectCard"
import { ProjectGifs } from "../components/molecules/ProjectGifs"
import { StaticImage } from "gatsby-plugin-image"

const projects = [
  {
    title: "elide.me: A webapp to make your URLs catchy and easy.",
    description:
      "The app helps you simplify your urls by letting you decide what they are so you can use relatable urls instead of some gibberish.",
    link: "https://console.elide.me",
    tagIds: ["rust", "react", "frontend", "js"],
    imgsrc: ProjectGifs.elide,
    isgif: true,
    alt: "elide project's GIF",
  },
  {
    title: "QRCoder: A simple app to generate QR codes",
    description:
      "Just enter the text, email, hyperlink etc. select error correction level, choose the color and boom you have a QR.",
    link: "https://rathod-sahaab.github.io",
    tagIds: ["react", "js"],
    imgsrc: ProjectGifs.qrcoder,
    isgif: true,
    alt: "QRCoder project's GIF",
  },
  {
    title: "Command Palette: feature that made using Inkscape super fast",
    description:
      "Typing to do things is way faster than using a mouse, command palette is a feature that provides you just that -- A very smart box to type commands into -- and execute them before you could've even touched your mouse.",
    link: "https://rathod-sahaab.github.io",
    tagIds: ["cpp"],
    imgsrc: (
      <StaticImage
        src="../images/projects/command-palette.png"
        alt="Command Palete png"
      />
    ),
    isgif: false,
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
