import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import BRCLogoBlack from "../images/brc-logo-black.png"
import UCLogo from "../images/uc-logo.gif"
import JCVILogo from "../images/jcvi-logo.png"
import UPennLogo from "../images/upenn-logo.png"
import UGALogo from "../images/uga-logo.png"
import NDLogo from "../images/nd-logo.png"
import FIGLogo from "../images/fig-logo.png"
import UVALogo from "../images/uva-logo.png"

const Footer = ({ siteTitle }) => (
  <footer class="footer mt-auto py-4">
    <div class="container-fluid">
      <div class="row align-items-center">
        <div class="col-md-3 col-xl-2 mb-3 mb-md-0">
          <img class="img-fluid brand" src={BRCLogoBlack} />
        </div>
        <div class="col-md-6 col-xl-8 mb-2 mb-md-0">
          <div class="partner-line">
            <img class="align-middle mb-2 mt-4 mt-md-2" src={UCLogo} />
            <img class="align-middle mb-2 mt-4 mt-md-2" src={JCVILogo} />
            <img class="align-middle mb-2 mt-4 mt-md-2" src={UPennLogo} />
            <img class="align-middle mb-2 mt-4 mt-md-2" src={UGALogo} />
            <img class="align-middle mb-2 mt-4 mt-md-2" src={NDLogo} />
            <img class="align-middle mb-2 mt-4 mt-md-2" src={FIGLogo} />
            <img class="align-middle mb-2 mt-4 mt-md-2" src={UVALogo} />
          </div>
        </div>
        <div class="col-md-3 col-xl-2">
          <div class="tw-text-right pr-3">&copy; 2020 The BRC Project Team</div>
        </div>
      </div>
    </div>
  </footer>
)


export default Footer