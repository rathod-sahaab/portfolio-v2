import * as React from "react"

import Layout from "../components/Layout"
import Seo from "../components/seo"
import { useMediaQuery } from "react-responsive"

import UpAnim from "../components/UpAnim"

const IndexPage = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: "950px" })
  return (
    <Layout>
      <Seo title="Home" />
      <section className="flex items-center justify-center h-screen">
        <div className="relative outline-hidden">
          <h5 className="text-transparent font-heading text-title font-bold">
            {!isSmallScreen ? "DEVELOPER" : "DEV"}
          </h5>
          <h2 className="text-[24px] font-bold text-heading absolute top-1/2 -translate-y-1/2 w-full text-fg-100 bg-bg-100 p-[0.15em] text-center uppercase tracking-[3px]">
            Abhay <span className="font-light">Raj Singh</span>
          </h2>
        </div>
        <UpAnim />
      </section>
      <section className="mx-auto">
        <div className="flex auto flex-col items-center overflow-hidden">
          <div className="font-heading text-title uppercase font-bold text-transparent text-center mb-[-0.81em] p-0">
            About
          </div>
          <h3 className="font-heading font-light text-[45px] mb-4">
            Hi! I am Abhay
          </h3>
          <div className="min-h-[300px] max-w-[90%] w-[500px] leading-6">
            <p className="mb-6">
              I am a full-stack developer, with love for backend, systems design
              and intuitive user experiences. I love making softwares that solve
              problems and challenge me to learn and grow. Mostly, I go by the
              alias <b>rathod-sahaab</b> which is a reference to the brilliant
              &quot;hacking&quot; movie{" "}
              <a href="https://www.imdb.com/title/tt1280558/">A Wednesday</a>.
            </p>
            <p className="mb-6">
              I am two times <b>Google Summer of Code</b> scholar and have
              worked on awesome projects during my internships with far more
              awesome people at <a href="https://libvirt.org">libvirt</a> and{" "}
              <a href="https://inkscape.org">Inkscape</a> as my mentors.
            </p>
            <p className="mb-6">
              I am a final year student at{" "}
              <a href="http://nith.ac.in">NIT Hamirpur</a>, graduating in June
              2022.
            </p>
          </div>
        </div>
      </section>
      <div className="h-[25vh]"></div>
    </Layout>
  )
}

export default IndexPage
