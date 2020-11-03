import React from "react"

const Calendar = () => (
  <>
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
  </>
)


export default Calendar