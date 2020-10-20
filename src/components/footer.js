import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import BRCLogo from "../images/brc-logo.png"

const Footer = ({ siteTitle }) => (
  <footer style={{ marginTop: '200px'}}>
    <h2 style={{ textAlign: 'center' }}>BRC Gateway Footer</h2>
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
    }}>
      <p>NIAID Contract Info</p>
      <img src={BRCLogo} alt="BRC Logo" style={{ height: '100px' }}/>
      <p>Social Media Links</p>
    </div>
  </footer>
)


export default Footer