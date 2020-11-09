import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import BRCLogoWhite from "../images/brc-logo-white.png"
import BRCLogoMin from "../images/brc-logo-min.png"

const Header = ({ siteTitle }) => (
  <header>
    <nav id="navbar" className="navbar navbar-expand-md navbar-dark bg-dark bg-brc align-items-end">
      <Link className="navbar-brand" to="/"><img id="logo" src={BRCLogoWhite} /></Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/taxa">Taxa</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/tools">Tools</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/calendar">Calendar</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/publications">Publications</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/metrics">Usage Metrics</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact</Link>
          </li>
        </ul>
        {/* <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="fas fa-user-circle"></i>
            </a>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">Login</a>
              <a className="dropdown-item" href="#">Register</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">Help</a>
            </div>
          </li>
        </ul> */}
      </div>
    </nav>

    <nav id="navbar-small" class="navbar navbar-expand-md navbar-dark bg-dark fixed-top bg-brc">
      <Link className="navbar-brand" to="/"><img id="logo" src={BRCLogoMin} /></Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/taxa">taxa</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/tools">Tools</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/calendar">Calendar</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/publications">Publications</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/metrics">Usage Metrics</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact</Link>
          </li>
        </ul>
        {/* <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="fas fa-user-circle"></i>
            </a>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">Login</a>
              <a className="dropdown-item" href="#">Register</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">Help</a>
            </div>
          </li>
        </ul> */}
      </div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
