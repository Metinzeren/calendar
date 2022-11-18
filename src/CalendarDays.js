import React from "react";

const CalendarDays = ({ day, changeCurrentDay }) => {
  const firstDayOfMonth = new Date(day.getFullYear(), day.getMonth(), 1);
  const weekdayOfFirstDay = firstDayOfMonth.getDay();
  let currentDays = [];
  console.log(firstDayOfMonth, "first");
  for (let day = 0; day < 42; day++) {
    if (day === 0 && weekdayOfFirstDay === 0) {
      firstDayOfMonth.setDate(firstDayOfMonth.getDate() - 7);
    } else if (day === 0) {
      firstDayOfMonth.setDate(
        firstDayOfMonth.getDate() + (day - weekdayOfFirstDay)
      );
    } else {
      firstDayOfMonth.setDate(firstDayOfMonth.getDate() + 1);
    }

    let calendarDay = {
      currentMonth: firstDayOfMonth.getMonth() === day,
      date: new Date(firstDayOfMonth),
      month: firstDayOfMonth.getMonth(),
      number: firstDayOfMonth.getDate(),
      selected: firstDayOfMonth.toDateString() === day,
      year: firstDayOfMonth.getFullYear(),
    };
    currentDays.push(calendarDay);
  }
  console.log(currentDays, "dc");
  return (
    <div>
      <div className="table-content">
        {currentDays.map((day, index) => {
          return (
            <div
              key={index}
              onClick={() => changeCurrentDay(day)}
              className={
                "calendar-day" +
                (day.currentMonth ? " current" : "") +
                (day.selected ? " selected" : "")
              }
            >
              <p>{day.number}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CalendarDays;
