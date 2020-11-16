import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <div class="row mb-4 px-3 pt-4 pb-2 bg-wash tw-border-b-4 tw-border-gray-600">
      <div class="col-12">
        <h4>Contact</h4>
        <p>You can contact VEuPathDB at <a href="mailto:help@veupathdb.org">help@veupathdb.org</a></p>
        <p>You can contact PATRIC at <a href="mailto:help@patricbrc.org">help@patricbrc.org</a></p>
      </div>
    </div>
  </Layout>
)

export default ContactPage
