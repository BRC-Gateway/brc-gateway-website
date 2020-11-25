/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import "../styles/tailwind.min.css"
import "../styles/bootstrap-4.3.1.css"
import "../styles/brc-mockup.css"
import "../styles/global.css"

import "../scripts/fa5.min.js"

import Header from "./Header"
import Calendar from "./Calendar"
import Twitter from "./Twitter"
import Footer from "./Footer"

const LayoutFullwidth = ({ children }) => {

  return (
    <>
      <Header siteTitle={`Title`} />

      <div>
        <main role="main">
          <div class="container-fluid max-1600">
            <div class="row">

              <div class="col-md-12 px-5 pt-3">
                {children}
              </div>

            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  )
}

LayoutFullwidth.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutFullwidth
