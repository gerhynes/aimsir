import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import WeatherTile from "../components/weatherTile"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi everyone</h1>
    <p>A weather app will go here.</p>
    <p>Soon.</p>
    <WeatherTile />
  </Layout>
)

export default IndexPage
