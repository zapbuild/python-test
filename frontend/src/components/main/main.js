import React, { useState, useEffect } from "react";
import "./main.css";
import moment from 'moment';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import API from "../../utilities/api.service";
import logo from '../../logo.png';

function Event({ event }) {
  return (
    <>
      <span className={event.type ? "f1" : "f2"}>
        <strong>{event.title}</strong>
        {event.description && ':  ' + event.description}
      </span>
    </>
  )
}

const Main = () => {
  const [myEventsList, setMyEventsList] = useState([]);

  const localizer = momentLocalizer(moment)

  useEffect(() => {
    Promise.all([API.api("get", `maintenance`), API.api("get", `inspections`)]).then(result => {
      result[0].data.forEach(maintance => {
        maintance.type = 0;
      });

      result[1].data.forEach(inspection => {
        inspection.type = 1;
      });

      setMyEventsList([...result[0].data, ...result[1].data]);
    })
      .catch((error) => {
        console.log(error.message);
      });
  }, [])

  return (
    <>
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Python React Portal</h1>
      </header>
      <div>
        <h2>Calendar</h2>
        <Calendar
          localizer={localizer}
          events={myEventsList}
          startAccessor="start_date"
          endAccessor="end_date"
          style={{ height: 500 }}
          components={{
            event: Event
          }}
        />
      </div>
    </>
  );
}

export default Main;
