import { Link } from "gatsby";
import React, { useEffect, useState } from "react";

const calID1 = "bvbrc1@gmail.com";
const calID2 = "c_qlogpapbubfhu3g7rh3ek289ac@group.calendar.google.com";

const getURL = id =>
  `https://www.googleapis.com/calendar/v3/calendars/${id}/events?key=AIzaSyCiCvVI748zL5OQANeAO-iGpAQemdXfhug&singleEvents=true&calendarID=primary`;
const maxResults = 3;
const orderBy = "startTime";

const maxDescriptLength = 100;

const dateConfig = {
  month: "short",
  year: "numeric",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
};

const formatCalDate = (start, end) => {
  const config = { ...dateConfig };

  let { dateTime, date } = start;

  // if only date, add a day and remove time from config
  if (!dateTime && date) {
    date = new Date(date);
    date.setDate(date.getDate() + 1);
    delete config.hour;
    delete config.minute;
  }

  const startStr = `${new Date(dateTime || date).toLocaleString(
    "en-US",
    config
  )}`;

  // display the end date if multi-day event
  const startDay = new Date(date).getDate();
  const endDay = new Date(end.date).getDate();
  const endStr =
    endDay > startDay
      ? `${new Date(end.dateTime || end.date).toLocaleString("en-US", config)}`
      : null;

  return `${startStr} ${endStr ? ` - ${endStr}` : ""}`;
};

const Calendar = () => {
  const [events, setEvents] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    Promise.all([fetchEvents(calID1), fetchEvents(calID2)])
      .then(([events1, events2]) => {
        // merge, sort, and limit events
        const events = [...events1, ...events2]
          .sort(
            (a, b) =>
              new Date(a.start.dateTime || a.start.date) -
              new Date(b.start.dateTime || b.start.date)
          )
          .slice(0, maxResults);

        setEvents(events);
      })
      .catch(err => setError(err));
  }, []);

  const fetchEvents = id => {
    const timeMin = new Date().toISOString();
    return fetch(
      `${getURL(
        id
      )}&timeMin=${timeMin}&maxResults=${maxResults}&orderBy=${orderBy}`
    )
      .then(res => res.json())
      .then(data => data.items);
  };

  return (
    <div className="p-2">
      <h5>Upcoming Events</h5>

      {events && (
        <ul>
          {events.map((event, i) => {
            const { description = "", summary, start, end, htmlLink } = event;

            return (
              <li key={i}>
                <h6 className="mb-1">
                  <a href={htmlLink} target="_blank">
                    {summary}
                    <i
                      class="fas fa-external-link-alt"
                      style={{ position: "absolute", marginLeft: "5px" }}
                    ></i>
                  </a>
                </h6>

                <b style={{ fontSize: "0.9em" }}>{formatCalDate(start, end)}</b>

                <p style={{ fontSize: "0.9em" }}>
                  {description.slice(0, maxDescriptLength) +
                    (description.length > maxDescriptLength ? "... " : " ")}
                  <a href={htmlLink} target="_blank">
                    read more
                    <i class="fas fa-external-link-alt"></i>
                  </a>
                </p>
              </li>
            );
          })}
        </ul>
      )}

      {error && "There was an issue fetching the calendar summary."}

      <Link
        to="/outreach#calendar"
        className="btn btn-outline-dark rounded-pill"
      >
        All Events »
      </Link>
    </div>
  );
};

export default Calendar;
