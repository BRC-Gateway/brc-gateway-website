import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Image from "../components/Image"
import SEO from "../components/Seo"

import BRCLogoBlack from "../images/brc-logo-black.png"
import IconHosts from "../images/icon-hosts.png"
import IconViruses from "../images/icon-viruses.png"
import IconVectors from "../images/icon-vectors.png"
import IconBacteria from "../images/icon-bacteria.png"
import IconFungi from "../images/icon-fungi.png"
import IconProtozoa from "../images/icon-protozoa.png"

const hostToggle = () => {
  const hostList = document.getElementById("do_hosts");
  if (hostList.style.display === "none") {
    hostList.style.display = "block";
  } else {
    hostList.style.display = "none";
  }
}
const virusToggle = () => {
  const virusList = document.getElementById("do_viruses");
  if (virusList.style.display === "none") {
    virusList.style.display = "block";
  } else {
    virusList.style.display = "none";
  }
}

const vectorToggle = () => {
  const vectorList = document.getElementById("do_vectors");
  if (vectorList.style.display === "none") {
    vectorList.style.display = "block";
  } else {
    vectorList.style.display = "none";
  }
}

const bacteriaToggle = () => {
  const bacteriaList = document.getElementById("do_bacteria");
  if (bacteriaList.style.display === "none") {
    bacteriaList.style.display = "block";
  } else {
    bacteriaList.style.display = "none";
  }
}

const fungiToggle = () => {
  const fungiList = document.getElementById("do_fungi");
  if (fungiList.style.display === "none") {
    fungiList.style.display = "block";
  } else {
    fungiList.style.display = "none";
  }
}

const protozoaToggle = () => {
  const protozoaList = document.getElementById("do_protozoa");
  if (protozoaList.style.display === "none") {
    protozoaList.style.display = "block";
  } else {
    protozoaList.style.display = "none";
  }
}

const IndexPage = () => (
  <Layout>
    <SEO title="NIAID Bioinformatics Resource Centers" />

    <div class="row mb-4 px-3 pt-4 pb-2 bg-wash tw-border-b-4 tw-border-gray-600">
      <div class="col-12">
        <h4>NIAID Bioinformatics Resource Centers for Infectious Diseases</h4>
      </div>
      <div class="col-12 col-xl-8">
        <p class="emphasis">The NIH/NIAID-funded <a href="https://www.niaid.nih.gov/research/bioinformatics-resource-centers" target="_blank">Bioinformatics Resource Centers (BRCs) for Infectious Diseases program</a> provides public access to computational platforms and analysis tools that enable  collecting, archiving, updating, and integrating a variety of genomics and related research data relevant to infectious diseases, and pathogens and their interaction with hosts.</p>
        <Link to="/about">Read more</Link>
      </div>
      <div class="col-xl-4">
        <img src={BRCLogoBlack} alt="BRC Logo" class="img-fluid d-none d-xl-block" />
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <p>The current BRCs are the Bacterial and Viral Bioinformatics Resource Center (<a href="https://www.bv-brc.org" target="_blank">BV-BRC</a>) for bacterial and viral pathogens, and the Eukaryotic Pathogen, Host & Vector Genomics Resource (<a href="https://veupathdb.org/veupathdb/app/" target="_blank">VEuPathDB</a>) for eukaryotic pathogens and invertebrate vectors of infectious diseases. Access to tools and data from both resources is available from the links below.</p>
      </div>
    </div>

    <div class="row mt-3">
      <ul id="grid" class="clear">
        <li class="circle-grid">
          <div class="org-circle dummy"></div>
        </li>

        <li>
          <div class="org-circle">
            <a href="#" id="hosts" onClick={hostToggle}>
              <img class="img-fluid" src={IconHosts} />
            </a>
            <div class="info info-left">
              <span onClick={hostToggle}>Host Mammals</span>
              <div id="do_hosts" style={{
                display: 'none',
              }}>
                <ul>
                  <li><a href="https://hostdb.org/hostdb/app" target="_blank">HostDB</a></li>
                </ul>
              </div>
            </div>

          </div>
        </li>

        <li class="circle-grid">
          <div class="org-circle">
            <a href="#" id="viruses" onClick={virusToggle}>
              <img class="img-fluid" src={IconViruses} />
            </a>
            <div class="info info-right">
              <span onClick={virusToggle}>Viruses</span>
              <div id="do_viruses" style={{ display: 'none' }}>
                <ul>
                  <li><a href="https://www.fludb.org/brc/home.spg?decorator=influenza" target="_blank">IRD</a></li>
                  <li><a href="https://www.viprbrc.org/brc/home.spg?decorator=vipr" target="_blank">ViPR</a></li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        <li class="circle-grid">
          <div class="org-circle">
            <a href="#" id="vectors" onClick={vectorToggle}>
              <img class="img-fluid" src={IconVectors} />
            </a>
            <div class="info info-left">
              <span onClick={vectorToggle}>Vectors</span>
              <div id="do_vectors" style={{ display: 'none' }}>
                <ul>
                  <li><a href="https://vectorbase.org/vectorbase/app" target="_blank">VectorBase</a></li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        <li class="circle-grid">
          <div class="org-circle dummy"></div>
        </li>
        <li class="circle-grid">
          <div class="org-circle">
            <a href="#'" id="bacteria" onClick={bacteriaToggle}>
              <img class="img-fluid" src={IconBacteria} />
            </a>
            <div class="info info-right">
              <span onClick={bacteriaToggle}>Bacteria</span>
              <div id="do_bacteria" style={{ display: 'none' }}>
                <ul>
                  <li><a href="https://www.patricbrc.org/" target="_blank">PATRIC</a></li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        <li class="circle-grid">
          <div class="org-circle dummy"></div>
        </li>
        <li class="circle-grid">
          <div class="org-circle">
            <a href="#" id="fungi" onClick={fungiToggle}>
              <img class="img-fluid" src={IconFungi} />
            </a>
            <div class="info info-left">
              <span onClick={fungiToggle}>Fungi</span>
              <div id="do_fungi" style={{ display: 'none' }}>
                <ul>
                  <li><a href="https://fungidb.org/fungidb/app" target="_blank">FungiDB</a></li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        <li class="circle-grid">
          <div class="org-circle">
            <a href="#" id="protozoa" onClick={protozoaToggle}>
              <img class="img-fluid" src={IconProtozoa} />
            </a>
            <div class="info info-right bkgrnd">
              <span onClick={protozoaToggle}>Protozoa</span>
              <div id="do_protozoa" class="tw-mt-1" style={{ display: 'none' }}>
                <ul>
                  <li><a href="https://amoebadb.org/" target="_blank">AmoebaDB</a></li>
                  <li><a href="https://cryptodb.org/" target="_blank">CryptoDB</a></li>
                  <li><a href="https://giardiadb.org/" target="_blank">GiardiaDB</a></li>
                  <li><a href="https://microsporidiadb.org/" target="_blank">MicrosporidiaDB</a></li>
                  <li><a href="https://piroplasmadb.org/" target="_blank">PiroplasmaDB</a></li>
                  <li><a href="https://plasmodb.org/" target="_blank">PlasmoDB</a></li>
                  <li><a href="https://toxodb.org/" target="_blank">ToxoDB</a></li>
                  <li><a href="https://trichdb.org/" target="_blank">TrichDB</a></li>
                  <li><a href="https://tritrypdb.org/" target="_blank">TriTryphDB</a></li>
                </ul>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>

<div className="bg-wash tw-border-b-4 tw-border-gray-600">
              <div class="row mt-1">
      <div class="col-md-12">
        <p style={{
          position: 'relative',
          zIndex: '100',
          padding: '20px',
          paddingBottom: '0px',
        }}>These projects have been funded in whole or in part with Federal funds from the National Institute of Allergy and Infectious Diseases, National Institutes of Health, Department of Health and Human Services:</p>
      </div>
    </div>

    <div class="row mb-3">

      <div class="col-md-6 mb-4 mb-md-0">
        <div class="bg-wash p-3 pb-0 h-100">
          <h5 class="tw-mb-1"><a href="https://www.bv-brc.org" target="_blank">BV-BRC</a></h5>
          <p>Contract No. 75N93019C00076, awarded to the University of Chicago</p>
          <div class="social-buttons">
            <ul class="list-group list-group-horizontal">
              <li class="list-group-item">
                <a href="https://twitter.com/BVBRC_DB" target="_blank"><i class="fab fa-twitter"></i></a>
              </li>
              <li class="list-group-item">
                <a href="https://www.facebook.com/BVBRC19" target="_blank"><i class="fab fa-facebook"></i></a>
              </li>
              <li class="list-group-item">
                <a href="https://www.youtube.com/channel/UCDkT2ZCWhK3GBtm5R-o1J4A" target="_blank"><i class="fab fa-youtube"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="bg-wash p-3 h-100">
          <h5 class="tw-mb-1"><a href="https://veupathdb.org/veupathdb/app/" target="_blank">VEuPathDB</a></h5>
          <p>Contract No. HHSN75N93019C00077, with additional support from the Wellcome Trust (Resource Grants 212929 & 218288)</p>
          <div class="social-buttons">
            <ul class="list-group list-group-horizontal">
              <li class="list-group-item">
                <a href="https://twitter.com/VEuPathDB" target="_blank"><i class="fab fa-twitter"></i></a>
              </li>
              <li class="list-group-item">
                <a href="https://facebook.com/pages/EuPathDB/133123003429972" target="_blank"><i class="fab fa-facebook"></i></a>
              </li>
              <li class="list-group-item">
                <a href="https://youtube.com/user/EuPathDB/playlists" target="_blank"><i class="fab fa-youtube"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

</div>


  </Layout >
)

export default IndexPage
