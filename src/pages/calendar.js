import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const CalendarPage = () => (
  <Layout>
    <SEO title="Event Calendar" />
    <div class="row mb-4 px-3 pt-4 pb-2 bg-wash tw-border-b-4 tw-border-gray-600">
      <div class="col-12">
        <h4>Event Calendar</h4>

        <iframe src="https://calendar.google.com/calendar/u/0/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America/Chicago&src=YnJjZ2F0ZXdheUBnbWFpbC5jb20&src=Y19xbG9ncGFwYnViZmh1M2c3cmgzZWsyODlhY0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=YnZicmMxQGdtYWlsLmNvbQ&color=%23039BE5&color=%23F09300&color=%23E4C441&showNav=1&showDate=1&showCalendars=1" width="800" height="600" frameborder="0" scrolling="no"></iframe>
      </div>
    </div>
  </Layout>
)

export default CalendarPage
