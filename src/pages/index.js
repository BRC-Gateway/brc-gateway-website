import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import BRCLogoBlack from "../images/brc-logo-black.png"
import IconBacteria from "../images/icon-bacteria.png"
import Tweet1 from "../images/tweet.png"
import Tweet2 from "../images/tweet-2.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <main role="main">
      <div class="container-fluid max-1600">
        <div class="row">
          <div class="col-md-8 col-lg-9 px-5 pt-3">

            <div class="row mb-4 px-3 pt-4 pb-2 bg-wash tw-border-b-4 tw-border-gray-600">
              <div class="col-12">
                <h4>NIAID Bioinformatics Resource Centers for Infectious Diseases</h4>
              </div>
              <div class="col-12 col-xl-8">
                <p class="emphasis">The NIH/NIAID-funded <a href="https://www.niaid.nih.gov/research/bioinformatics-resource-centers" target="_blank">Bioinformatics Resource Centers (BRCs) for Infectious Diseases program</a> provides public access to computational platforms and analysis tools that enable  collecting, archiving, updating, and integrating a variety of genomics and related research data relevant to infectious diseases, and pathogens and their interaction with hosts.</p>
                <a href="">Read more</a>
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
                    <a href="javascript:showhide('#do_hosts')" id="hosts">
                      <img class="img-fluid" src={IconBacteria} />
                    </a>
                    <div class="info info-left">
                      <span>Host Mammals</span>
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
                    <a href="javascript:showhide('#do_viruses')" id="viruses">
                      <img class="img-fluid" src={IconBacteria} />
                    </a>
                    <div class="info info-right">
                      <span>Viruses</span>
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
                    <a href="javascript:showhide('#do_vectors')" id="vectors">
                      <img class="img-fluid" src={IconBacteria} />
                    </a>
                    <div class="info info-left">
                      <span>Arthropod Vectors</span>
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
                    <a href="javascript:showhide('#do_bacteria')" id="bacteria">
                      <img class="img-fluid" src={IconBacteria} />
                    </a>
                    <div class="info info-right">
                      <span>Bacteria</span>
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
                    <a href="javascript:showhide('#do_fungi')" id="fungi">
                      <img class="img-fluid" src={IconBacteria} />
                    </a>
                    <div class="info info-left">
                      <span>Fungi</span>
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
                    <a href="javascript:showhide('#do_protozoa')" id="protozoa">
                      <img class="img-fluid" src={IconBacteria} />
                    </a>
                    <div class="info info-right bkgrnd">
                      <span>Protozoa</span>
                      <div id="do_protozoa" class="tw-mt-1" style={{ display: 'none' }}>
                        <ul>
                          <li><a href="" target="_blank">AmoebaDB</a></li>
                          <li><a href="" target="_blank">CryptoDB</a></li>
                          <li><a href="" target="_blank">GiardiaDB</a></li>
                          <li><a href="" target="_blank">MicrosporidiaDB</a></li>
                          <li><a href="" target="_blank">PiroplasmaDB</a></li>
                          <li><a href="" target="_blank">PlasmoDB</a></li>
                          <li><a href="" target="_blank">ToxoDB</a></li>
                          <li><a href="" target="_blank">TrichDB</a></li>
                          <li><a href="" target="_blank">TriTryphDB</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div class="row mt-5">
              <div class="col-md-12">
                <p style={{
                  position: 'relative',
                  zIndex: '100',
                }}>These projects have been funded in whole or in part with Federal funds from the National Institute of Allergy and Infectious Diseases, National Institutes of Health, Department of Health and Human Services:</p>
              </div>
            </div>
            <div class="row mt-2 mb-5">
              <div class="col-md-6 mb-4 mb-md-0">
                <div class="bg-wash p-3 pb-0 mb-4 tw-border-b-4 tw-border-gray-600 h-100">
                  <h5 class="tw-mb-1"><a href="https://www.bv-brc.org" target="_blank">BV-BRC</a></h5>
                  <p>Contract No. 75N93019C00076, awarded to the University of Chicago</p>
                  <div class="social-buttons">
                    <ul class="list-group list-group-horizontal">
                      <li class="list-group-item">
                        <a href="#"><i class="fab fa-twitter"></i></a>
                      </li>
                      <li class="list-group-item">
                        <a href="#"><i class="fab fa-facebook"></i></a>
                      </li>
                      <li class="list-group-item">
                        <a href="#"><i class="fab fa-youtube"></i></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="bg-wash p-3 mb-4 tw-border-b-4 tw-border-gray-600 h-100">
                  <h5 class="tw-mb-1"><a href="https://veupathdb.org/veupathdb/app/" target="_blank">VEuPathDB</a></h5>
                  <p>Contract No. HHSN75N93019C00077, with additional support from the Wellcome Trust (Resource Grants 212929 & 218288)</p>
                  <div class="social-buttons">
                    <ul class="list-group list-group-horizontal">
                      <li class="list-group-item">
                        <a href="#"><i class="fab fa-twitter"></i></a>
                      </li>
                      <li class="list-group-item">
                        <a href="#"><i class="fab fa-facebook"></i></a>
                      </li>
                      <li class="list-group-item">
                        <a href="#"><i class="fab fa-youtube"></i></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4 col-lg-3 news-col mt-4">
              <h5>Event Calendar</h5>
              <div class="scrl-box">
                <div class="home-block">
                  <h6 class="mb-1"><a>Upcoming Event</a></h6>
                  <p>Join us on September 11, 2019 at 10:00 am (EST) for our Release 45 Highlights webinar where we will discuss... <a href="">read more</a></p>
                </div>
                <div class="home-block">
                  <h6 class="mb-1"><a>Another Upcoming Event</a></h6>
                  <p>Join us on July 12th at 10:00 am (EST) for our Release 44 Highlights webinar where we will discuss... <a href="">read more</a></p>
                </div>
                <div class="home-block">
                  <h6 class="mb-1"><a>One More Upcoming Event</a></h6>
                  <p>Join us on May 15th at 10:00 am (EST) for our Release 43 Highlights webinar where we will discuss... <a href="">read more</a></p>
                </div>
              </div>

              <div class="home-block mt-4">
                <a href="data.html" class="btn btn-outline-dark rounded-pill">All Upcoming Events &raquo;</a>
              </div>
              <hr />
              <h5>Tweets <span>by <a href="#">@BV-BRC</a> <a href="#">@VEuPathDB</a></span></h5>
              <div class="scrl-box">
                <img src={Tweet1} class="img-fluid" />
                <img src={Tweet2} class="img-fluid" />
              </div>
              <div class="home-block mt-4">
                <a href="data.html" class="btn btn-outline-dark rounded-pill">View on Twitter &raquo;</a>
              </div>
            </div>


          </div>
        </div>
      </div>
    </main>


  </Layout >
)

export default IndexPage
