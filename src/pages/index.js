import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Home Page</h1>

    <div style={{
      marginTop: '100px',
      display: 'grid',
      gridTemplateColumns: '3fr 1fr',
      gridTemplateRows: '3fr 1fr',
    }}>

      <div>
        <h3>BRC Program Information</h3>
      </div>
      <div>
        <h3>Event Calendar</h3>
      </div>
      <div>
        <h3>Gateway Navigation Panel</h3>
      </div>
      <div>
        <h3>Twitter Feed</h3>
      </div>

    </div>
  </Layout>
)

export default IndexPage
