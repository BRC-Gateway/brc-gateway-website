import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const CalendarPage = () => (
  <Layout>
    <SEO title="Outreach" />
    <div class="row mb-4 px-3 pt-4 pb-2 bg-wash tw-border-b-4 tw-border-gray-600">
      <div class="col-md-12">
        <h4>Outreach</h4>
        <p>The BRCs maintain an active outreach program to engage and support the research communities. Efforts include development and publishing of extensive documentation and training materials to guide researchers in how to most effectively use the BRC resources. The BRCs also host webinars, workshops, and conference booths to provide live, hands-on demonstration of BRC websites and functionality.</p>
        <hr />
        <h4>Tutorials and Training Materials</h4>
        <div className="row">
          <div className="col-6">
            <a href="https://www.fludb.org/brc/influenzaTutorials.spg?decorator=influenza" target="_blank">IRD</a><br />
            <a href="https://www.viprbrc.org/brc/viprTutorials.spg?decorator=vipr" target="_blank">ViPR</a><br />
          </div>
          <div className="col-6">
            <a href="https://docs.patricbrc.org/tutorial/" target="_blank">PATRIC</a><br />
            <a href="https://veupathdb.org/veupathdb/app/static-content/landing.html" target="_blank">VEuPathDB</a><br />
          </div>
        </div>
        <br />
        <hr />
        <h4 id="calendar">Calendar</h4>

        <iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FChicago&amp;src=YnJjZ2F0ZXdheUBnbWFpbC5jb20&amp;src=Y19xbG9ncGFwYnViZmh1M2c3cmgzZWsyODlhY0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&amp;src=YnZicmMxQGdtYWlsLmNvbQ&amp;color=%23039BE5&amp;color=%23F09300&amp;color=%23E4C441&amp;showTz=1&amp;showCalendars=0&amp;showTabs=1&amp;showPrint=0&amp;showDate=1&amp;showNav=1&amp;showTitle=0" style={{ borderWidth: '0' }} width="800" height="600" frameborder="0" scrolling="no"></iframe>
      </div>
    </div>
  </Layout>
)

export default CalendarPage
