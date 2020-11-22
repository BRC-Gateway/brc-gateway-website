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
        <p>Citations to the BRC resource as measured Google Scholar searches using predetermined set of keywords based on name and/or acronym of each of the BRC resources, and additional keywords to filter out any false positive or negative results to the extent possible. This is complementary to the citations to the BRC publications described above and necessary because, often, users cite BRC resources by mentioning the resource name or URL in the manuscript text, instead of citing relevant publications.</p>
        <h4><a href="https://scholar.google.com/citations?user=kXLGwkYAAAAJ&hl=en&authuser=2" target="blank">Google Scholar Citations</a></h4>
      </div>
    </div>
  </Layout>
)

export default PublicationsPage