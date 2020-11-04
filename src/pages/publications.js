import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PublicationsPage = () => (
  <Layout>
    <SEO title="Publications" />
    <div class="row mb-4 px-3 pt-4 pb-2 bg-wash tw-border-b-4 tw-border-gray-600">
      <div class="col-12">
        <h4>Publications</h4>
        <a href="https://scholar.google.com/citations?user=kXLGwkYAAAAJ&hl=en&authuser=2">Google Scholar</a>


      </div>
    </div>
  </Layout>
)

export default PublicationsPage