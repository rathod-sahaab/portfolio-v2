import * as React from "react"

import Layout from "../components/Layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1 className="heading">About</h1>
    <p>I am Abhay, I am a developer</p>
  </Layout>
)

export default IndexPage
