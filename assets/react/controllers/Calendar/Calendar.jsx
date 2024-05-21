import React, { useState, useEffect, useRef } from "react";
import "./calendar.css";

export default function Calendar() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const currentDateRef = useRef(null);
  const daysTagRef = useRef(null);

  const months = [
    "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
    "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
  ];

  const renderCalendar = () => {
    const date = new Date();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    const lastDateOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const lastDayOfMonth = new Date(currentYear, currentMonth, lastDateOfMonth).getDay();
    const lastDateOfLastMonth = new Date(currentYear, currentMonth, 0).getDate();

    let liTag = "";

    for (let i = firstDayOfMonth; i > 0; i--) {
      liTag += `<li class="inactive">${lastDateOfLastMonth - i + 1}</li>`;
    }

    for (let i = 1; i <= lastDateOfMonth; i++) {
      let isToday = i === date.getDate() && currentMonth === new Date().getMonth() && currentYear === new Date().getFullYear() ? "active" : "";
      liTag += `<li class="${isToday}">${i}</li>`;
    }

    for (let i = lastDayOfMonth; i < 6; i++) {
      liTag += `<li class="inactive">${i - lastDayOfMonth + 1}</li>`;
    }

    if (currentDateRef.current) {
      currentDateRef.current.innerHTML = `${months[currentMonth]} ${currentYear}`;
    }
    if (daysTagRef.current) {
      daysTagRef.current.innerHTML = liTag;
    }
  };

  useEffect(() => {
    renderCalendar();
  }, [currentYear, currentMonth]);

  const prevMonth = () => {
    setCurrentMonth((prev) => {
      const newMonth = prev === 0 ? 11 : prev - 1;
      setCurrentYear((prevYear) => (prev === 0 ? prevYear - 1 : prevYear));
      return newMonth;
    });
  };

  const nextMonth = () => {
    setCurrentMonth((prev) => {
      const newMonth = prev === 11 ? 0 : prev + 1;
      setCurrentYear((prevYear) => (prev === 11 ? prevYear + 1 : prevYear));
      return newMonth;
    });
  };

  return (
    <div className="calendar-wrapper">
      <div className="calendar-header">
        <h4 ref={currentDateRef} className="current-date"></h4>
        <div className="icons">
          <div className="material-symbols-outlined" onClick={prevMonth}><span>chevron_left</span></div>
          <div className="material-symbols-outlined" onClick={nextMonth}><span>chevron_right</span></div>
        </div>
      </div>
      <div className="calendar">
        <ul className="weeks">
          <li>Lun</li>
          <li>Mar</li>
          <li>Mer</li>
          <li>Jeu</li>
          <li>Ven</li>
          <li>Sam</li>
          <li>Dim</li>
        </ul>
        <ul ref={daysTagRef} className="days"></ul>
      </div>
    </div>
  );
}
