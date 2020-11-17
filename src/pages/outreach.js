import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const CalendarPage = () => (
  <Layout>
    <SEO title="Outreach" />
    <div class="row mb-4 px-3 pt-4 pb-2 bg-wash tw-border-b-4 tw-border-gray-600">
      <div class="col-md-12">
        <h4>Outreach Materials</h4>
        <a href="https://docs.patricbrc.org/tutorial/" target="_blank">PATRIC Tutorials and Documentation</a><br />
        <a href="https://www.fludb.org/brc/influenzaTutorials.spg?decorator=influenza" target="_blank">IRD Tutorials and Training Materials</a><br />
        <a href="https://www.viprbrc.org/brc/viprTutorials.spg?decorator=vipr" target="_blank">ViPR Tutorials and Training Materials</a><br />
        <a href="https://veupathdb.org/veupathdb/app/static-content/landing.html" target="_blank">VEuPathDB Learning Materials</a><br />
        <br />
        <hr />
        <h4>Event Calendar</h4>

        <iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23fffcfc&amp;ctz=America%2FChicago&amp;src=YnJjZ2F0ZXdheUBnbWFpbC5jb20&amp;src=Y19xbG9ncGFwYnViZmh1M2c3cmgzZWsyODlhY0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&amp;src=YnZicmMxQGdtYWlsLmNvbQ&amp;color=%23039BE5&amp;color=%23F09300&amp;color=%23E4C441&amp;showTitle=0&amp;showCalendars=0&amp;showTabs=1&amp;showPrint=0&amp;showDate=0&amp;showNav=0&amp;showTz=0" style={{ borderWidth: '0', }} width="800" height="600" frameborder="0" scrolling="no"></iframe>
      </div>
    </div>
  </Layout>
)

export default CalendarPage
