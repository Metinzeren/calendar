const randevular = [
  {
    date: new Date("2022-11-11"),
  },
  {
    date: new Date("2022-11-25"),
  },
  {
    date: new Date("2022-11-10"),
  },
  {
    date: new Date("2022-11-20"),
  },
];
function CalendarDays(props) {
  const firstDayOfMonth = new Date(
    props.day.getFullYear(),
    props.day.getMonth(),
    1
  );
  const weekdayOfFirstDay = firstDayOfMonth.getDay();
  let currentDays = [];

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
      currentMonth: firstDayOfMonth.getMonth() === props.day.getMonth(),
      date: new Date(firstDayOfMonth),
      month: firstDayOfMonth.getMonth(),
      number: firstDayOfMonth.getDate(),
      selected: firstDayOfMonth.toDateString() === props.day.toDateString(),
      year: firstDayOfMonth.getFullYear(),
    };

    currentDays.push(calendarDay);
  }
  const checkMeet = ({ month, year, day }) => {
    var check = randevular.find((x) => {
      if (
        x.date.getDate() === day &&
        x.date.getMonth() === month &&
        x.date.getFullYear() === year
      ) {
        return true;
      } else {
        return false;
      }
    });
    return check ? "red" : "white";
  };
  return (
    <div className="table-content">
      {currentDays.map((day, index) => {
        const check = checkMeet({
          month: day.month,
          year: day.year,
          day: day.number,
        });
        return (
          <div
            style={{
              background: check,
            }}
            key={index}
            className={
              "calendar-day" +
              (day.currentMonth ? " current" : "") +
              (day.selected ? " selected" : "")
            }
            onClick={() => {
              if (check === "white" && day.currentMonth) {
                props.changeCurrentDay(day);
              } else {
                alert("date müsait değil");
              }
            }}
          >
            <p>{day.number}</p>
          </div>
        );
      })}
    </div>
  );
}

export default CalendarDays;
