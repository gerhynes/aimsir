import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import WeatherTile from "../components/weatherTile"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <WeatherTile />
  </Layout>
)

export default IndexPage
