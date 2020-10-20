import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Footer = ({ siteTitle }) => (
  <footer style={{ marginTop: '200px'}}>
    <h2 style={{ textAlign: 'center' }}>BRC Gateway Footer</h2>
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
    }}>
      <p>NIAID Contract Info</p>
      <p>LOGO</p>
      <p>Social Media Links</p>
    </div>
  </footer>
)


export default Footer