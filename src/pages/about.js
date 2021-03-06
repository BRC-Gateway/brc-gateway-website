import React from "react";
import { Link } from "gatsby";

import SEO from "../components/seo";
import LayoutFullwidth from "../components/LayoutFullwidth";

const AboutPage = () => (
  <LayoutFullwidth>
    <SEO title="About" />

    <div class="row mb-4 px-3 pt-4 pb-2 tw-border-b-4 tw-border-gray-600">
      <div class="col-12">
        <h4>About NIAID Bioinformatics Resource Centers</h4>
        <p>
          The Bioinformatics Resource Centers (BRCs) for Infectious Diseases
          program was initiated in 2004 with the main objective of providing
          public access to computational platforms and analysis tools that
          enable collecting, archiving, updating, and integrating a variety of
          genomics and related research data relevant to infectious diseases,
          and pathogens and their interaction with hosts.{" "}
        </p>

        <hr />

        <h5>Contact</h5>
        <p>
          For information on flu and other viral taxa, contact{" "}
          <a
            href="https://www.fludb.org/brc/problemReport.spg?decorator=influenza&category=science"
            target="_blank"
          >
            IRD
          </a>
          ,{" "}
          <a
            href="https://www.viprbrc.org/brc/problemReport.spg?decorator=vipr&category=science"
            target="_blank"
          >
            ViPR
          </a>{" "}
          (respectively)
        </p>
        <p>
          For information on bacterial taxa, contact{" "}
          <a href="mailto:help@patricbrc.org">help@patricbrc.org</a>
        </p>
        <p>
          For information on protozoan &amp; fungal taxa, or arthropod &amp;
          mammalian hosts, contact{" "}
          <a href="mailto:help@veupathdb.org">help@veupathdb.org</a>
        </p>

        <hr />

        <h5>Main Areas of Focus</h5>
        <p>
          The overarching goal of the BRC program is to ensure that high
          quality, large-scale datasets are readily Findable, Accessible,
          Interoperable, and Reusable (FAIR), expediting both discovery and
          translational research. We aim to:
        </p>
        <div className="col-12">
          <ul
            style={{
              listStyle: "disc",
            }}
          >
            <li>
              store, update, integrate, display, and facilitate interrogation of
              diverse data and associated metadata, including (but not limited
              to) information on: genome sequence and annotation, functional
              genomics information (transcriptomics, proteomics, etc.),
              population variation, genotype/phenotype association,
              metagenomics, epidemiology, surveillance, antimicrobial
              resistance, host responses &amp; host-pathogen interactions, etc.
            </li>
            <li>
              make available analytical resources, bioinformatics tools,
              workspaces and services for data analysis, and provide
              bioinformatics training to ensure effective use of these resources
            </li>
            <li>respond rapidly to new and emerging pandemic threats</li>
          </ul>
        </div>

        <hr />

        <h5>Targeted Pathogens</h5>
        <p>
          Each BRC specializes in a different group of pathogens. Pathogens
          examined by the BRCs include, but are not limited to, those in the
          NIAID list of emerging and re-emerging infectious diseases. The BRCs
          specialize in the following groups of pathogens:
        </p>
        <div className="row">
          <div className="col-md-12">
            <table className="table">
              <tbody>
                <tr>
                  <td>
                    <a href="https://bv-brc.org/" target="_blank">
                      <strong>
                        Bacterial and Viral Bioinformatics Resource Center
                        (BV-BRC)
                      </strong>
                    </a>
                  </td>
                  <td>
                    <strong>Principal Investigators</strong>
                    <ul>
                      <li>Rick Stevens, Univsity of Chicago</li>
                      <li>Richard Scheuermann, J. Craig Venter Institute</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td style={{ paddingLeft: "40px" }}>
                    <a
                      href="https://www.fludb.org/brc/home.spg?decorator=influenza"
                      target="_blank"
                    >
                      IRD
                    </a>
                    <br></br>
                    <a
                      href="https://www.viprbrc.org/brc/home.spg?decorator=vipr"
                      target="_blank"
                    >
                      ViPR
                    </a>
                  </td>
                  <td>Human viral families including influenza virus</td>
                </tr>
                <tr>
                  <td style={{ paddingLeft: "40px" }}>
                    <a href="https://patricbrc.org" target="_blank">
                      PATRIC
                    </a>
                  </td>
                  <td>Pathogenic bacteria and related species</td>
                </tr>
                <tr>
                  <td>
                    <a
                      href="https://veupathdb.org/veupathdb/app/"
                      target="_blank"
                    >
                      <strong>
                        Eukaryotic Pathogen, Vector and Host Informatics
                        Resource (VEuPathDB
                      </strong>
                      )
                    </a>
                  </td>
                  <td>
                    <strong>Principal Investigators</strong>
                    <ul>
                      <li>David S. Roos, University of Pennsylvania</li>
                      <li>Jessica C. Kissinger, University of Georgia</li>
                      <li>Mary Ann McDowell, University of Notre Dame</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td style={{ paddingLeft: "40px" }}>
                    <div style={{ display: "inline-block" }}>
                      <a href="https://amoebadb.org/" target="_blank">
                        AmoebaDB
                      </a>
                      <br />
                      <a href="https://cryptodb.org/" target="_blank">
                        CryptoDB
                      </a>
                      <br />
                      <a href="https://fungidb.org/" target="_blank">
                        FungiDB
                      </a>
                      <br />
                      <a href="https://giardiadb.org/" target="_blank">
                        GiardiaDB
                      </a>
                      <br />
                      <a href="https://microsporidiadb.org/" target="_blank">
                        MicrosporidaDB
                      </a>
                      <br />
                    </div>
                    <div
                      style={{ display: "inline-block", marginLeft: "30px" }}
                    >
                      <a href="https://piroplasmadb.org/" target="_blank">
                        PiroplasmaDB
                      </a>
                      <br />
                      <a href="https://plasmodb.org/" target="_blank">
                        PlasmoDB
                      </a>
                      <br />
                      <a href="https://toxodb.org/" target="_blank">
                        ToxoDB
                      </a>
                      <br />
                      <a href="https://trichdb.org/" target="_blank">
                        TrichDB
                      </a>
                      <br />
                      <a href="https://tritrypdb.org/" target="_blank">
                        TriTrypDB
                      </a>
                      <br />
                    </div>
                  </td>
                  <td>
                    Eukaryotic human pathogen species including fungi and
                    protists
                  </td>
                </tr>
                <tr>
                  <td style={{ paddingLeft: "40px" }}>
                    <a href="https://vectorbase.org/" target="_blank">
                      VectorBase
                    </a>
                  </td>
                  <td>
                    Invertebrate vectors of human pathogens including insects,
                    arachnids, and gastropods
                  </td>
                </tr>
                <tr>
                  <td style={{ paddingLeft: "40px" }}>
                    <a href="https://hostdb.org/" target="_blank">
                      HostDB
                    </a>
                  </td>
                  <td>Vertebrate hosts</td>
                </tr>
                <tr>
                  <td style={{ paddingLeft: "40px" }}>
                    <a href="https://orthomcl.org/" target="_blank">
                      OrthoMCL
                    </a>
                  </td>
                  <td>Ortholog groups of protein sequences</td>
                </tr>
              </tbody>
            </table>

            <hr />

            <h5>Website Usage</h5>
            <a
              href="https://status.patricbrc.org/webstats/cgi-bin/awstats.pl?config=All_BVBRC_Combined"
              target="_blank"
            >
              BV-BRC Stats
            </a>
            <br />
            <a
              href="https://veupathdb.org/awstats/awstats.pl?config=All_EBRC_Combined"
              target="_blank"
            >
              VEuPathDB Stats
            </a>
          </div>
        </div>
      </div>
    </div>
  </LayoutFullwidth>
);

export default AboutPage;
