import "./App.css";
import "react-calendar/dist/Calendar.css";
import CalendarDays from "./CalendarDays";
import { useState } from "react";

function App() {
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [currentDay, setCurrentDay] = useState(new Date());
  const changeCurrentDay = (day) => {
    setCurrentDay(new Date(day.year, day.month, day.number));
  };

  const nextDay = () => {
    setCurrentDay(new Date(currentDay.setDate(currentDay.getDate() + 1)));
  };
  const previousDay = () => {
    let date = new Date();
    var previous = new Date(date.setDate(date.getDate() - 1));

    if (previous.getMonth() === currentDay.getMonth()) {
      if (currentDay.getDate() > 1)
        setCurrentDay(new Date(currentDay.setDate(currentDay.getDate() - 1)));
    } else {
      if (new Date().getMonth() < currentDay.getMonth()) {
        console.log("a");
        setCurrentDay(new Date(currentDay.setDate(currentDay.getDate() - 1)));
      } else {
        if (new Date().getFullYear() < currentDay.getFullYear()) {
          setCurrentDay(new Date(currentDay.setDate(currentDay.getDate() - 1)));
        }
      }
    }
  };
  return (
    <div className="calendar">
      <div className="calendar-header">
        <div className="title">
          <h2>
            {months[currentDay.getMonth()]} {currentDay.getFullYear()}
          </h2>
        </div>
        <div className="tools">
          <div className="table-content">
            <button onClick={previousDay}>
              <span className="material-icons">{"<"}</span>
            </button>
            <p>
              {months[currentDay.getMonth()].substring(0, 3)}{" "}
              {currentDay.getDate()}
            </p>
            <button onClick={nextDay}>
              <span className="material-icons">{"> "}</span>
            </button>
          </div>
        </div>
      </div>
      <div className="calendar-body">
        <div className="table-header">
          {weekdays.map((weekday, index) => {
            return (
              <div key={index} className="weekday">
                <p>{weekday}</p>
              </div>
            );
          })}
        </div>
        <CalendarDays day={currentDay} changeCurrentDay={changeCurrentDay} />
      </div>
    </div>
  );
}

export default App;
