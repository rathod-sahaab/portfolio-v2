import * as React from "react"

import Layout from "../components/Layout"
import Seo from "../components/seo"
import { useMediaQuery } from "react-responsive"

import * as styles from "./index.module.css"

const IndexPage = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: "950px" })
  console.log(isSmallScreen)
  return (
    <Layout>
      <Seo title="Home" />
      <section className={styles.section}>
        <div className={styles.nameTitleHolder}>
          <h5 className={styles.title}>
            {!isSmallScreen && "DEVELOPER"} {isSmallScreen && "DEV"}
          </h5>
          <h2 className={styles.name}>Abhay Raj Singh</h2>
        </div>
      </section>
      <h2 className="heading">About</h2>
      <p>I am Abhay, I am a developer</p>
    </Layout>
  )
}

export default IndexPage
