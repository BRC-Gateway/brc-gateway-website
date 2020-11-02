import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import BRCLogoWhite from "../images/brc-logo-white.png"
import BRCLogoMin from "../images/brc-logo-min.png"

const Header = ({ siteTitle }) => (
  <header>
    <nav id="navbar" class="navbar navbar-expand-md navbar-dark bg-dark bg-brc align-items-end">
      <Link class="navbar-brand" to="/"><img id="logo" src={BRCLogoWhite} /></Link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <Link class="nav-link" to="#">Organisms</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="#">Tools</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="#">Calendar</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="#">About</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="#">Contact</Link>
          </li>
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i class="fas fa-user-circle"></i>
            </a>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Login</a>
              <a class="dropdown-item" href="#">Register</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Help</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>

    <nav id="navbar-small" class="navbar navbar-expand-md navbar-dark bg-dark fixed-top bg-brc">
      <Link class="navbar-brand" to="/"><img id="logo" src={BRCLogoMin} /></Link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <Link class="nav-link" to="/organisms">Organisms</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/tools">Tools</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/calendar">Calendar</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/about">About</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/contact">Contact</Link>
          </li>
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i class="fas fa-user-circle"></i>
            </a>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Login</a>
              <a class="dropdown-item" href="#">Register</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Help</a>
            </div>
          </li>
        </ul>
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
