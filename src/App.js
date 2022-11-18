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
  console.log(currentDay, "currentdayyy");
  const changeCurrentDay = (day) => {
    setCurrentDay({ currentDay: new Date(day.year, day.month, day.number) });
    console.log(currentDay, "chabsdfbsdfnfe");
  };
  const nextDay = () => {
    console.log(new Date(currentDay.setMonth(currentDay.getMonth() + 1)));
  };

  return (
    <div className="App calendar">
      <button onClick={nextDay}>ilerisfas</button>

      <h2>
        {currentDay.getDate()} {months[currentDay.getMonth()]}
        {""} {currentDay.getFullYear()}
      </h2>
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
        <div className="table">
          <CalendarDays day={currentDay} changeCurrentDay={changeCurrentDay} />
        </div>
      </div>
    </div>
  );
}

export default App;
