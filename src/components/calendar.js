import React, { useEffect, useState } from "react"


const CAL_ID = 'chicagosummercalendar@gmail.com'
const URL = `https://www.googleapis.com/calendar/v3/calendars/${CAL_ID}/events?key=AIzaSyCiCvVI748zL5OQANeAO-iGpAQemdXfhug`

const DESCRIPTION_LENGTH = 100


const Calendar = () => {

  const [events, setEvents] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const timeMin = (new Date()).toISOString()
    const maxResults = 3
    const orderBy = 'startTime'

    fetch(
      `${URL}&timeMin=${timeMin}&maxResults=${maxResults}&orderBy=${orderBy}` +
      `&singleEvents=true&calendarID=primary`
    ).then(res => res.json())
      .then(data => {
        setEvents(data.items)
      }).catch(err => setError(err))
  }, [])


  return (
    <div>
      <h5>Event Calendar</h5>

      {events &&
        <ul>
          {events.map((event, i) => {
            const { description, summary, start, htmlLink } = event

            return (
              <li key={i}>
                <h6>{summary}</h6>
                <i style={{ fontSize: '1em' }}>
                  {new Date(start.dateTime).toLocaleDateString()}{' '}
                  {new Date(start.dateTime).toLocaleTimeString()}
                </i>
                <p style={{ fontSize: '0.9em' }}>
                  {description.slice(0, DESCRIPTION_LENGTH) +
                    (description.length > DESCRIPTION_LENGTH ? '... ' : ' ')
                  }
                  <a href={htmlLink} target="_blank">read more</a>
                </p>
              </li>
            )
          })}
        </ul>
      }

      {error &&
        'There was an issue fetching the calendar'
      }
    </div>
  )
}



export default Calendar