import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Weather from "../components/weather"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Weather />
  </Layout>
)

export default IndexPage
