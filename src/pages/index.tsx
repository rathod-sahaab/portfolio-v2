import * as React from "react"

import Layout from "../components/Layout"
import Seo from "../components/seo"
import { useMediaQuery } from "react-responsive"

import * as styles from "./index.module.css"
import UpAnim from "../components/UpAnim"

const IndexPage = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: "950px" })
  return (
    <Layout>
      <Seo title="Home" />
      <section className={styles.displaySection}>
        <div className={styles.nameTitleHolder}>
          <h5 className={styles.title}>
            {!isSmallScreen && "DEVELOPER"} {isSmallScreen && "DEV"}
          </h5>
          <h2 className={styles.name}>
            Abhay <span>Raj Singh</span>
          </h2>
        </div>
        <UpAnim />
      </section>
      <section className={styles.aboutSection}>
        <div className={styles.aboutContent}>
          <div className={styles.about}>About</div>
          <h3>Hi! I am Abhay</h3>
          <div className={styles.description}>
            <p>
              I am a full-stack developer, with love for backend, systems design
              and intuitive user experiences. I love making softwares that solve
              problems and challenge me to learn and grow. Mostly, I go by the
              alias <b>rathod-sahaab</b> which is a reference to the brilliant
              &quot;hacking&quot; movie{" "}
              <a href="https://www.imdb.com/title/tt1280558/">A Wednesday</a>.
            </p>
            <p>
              I am two times <b>Google Summer of Code</b> scholar and have
              worked on awesome projects during my internships with far more
              awesome people at <a href="https://libvirt.org">libvirt</a> and{" "}
              <a href="https://inkscape.org">Inkscape</a> as my mentors.
            </p>
            <p>
              I am a final year student at{" "}
              <a href="http://nith.ac.in">NIT Hamirpur</a>, graduating in June
              2022.
            </p>
          </div>
        </div>
      </section>
      <div className={styles.padblock}></div>
    </Layout>
  )
}

export default IndexPage
