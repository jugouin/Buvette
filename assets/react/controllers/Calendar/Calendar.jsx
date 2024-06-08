import React, { useState, useEffect, useRef } from "react";
import ModalReservation from './Modal/Modal';
import "./calendar.css";

export default function Calendar({ evening, onDateChange }) {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [selectedDate, setSelectedDate] = useState(null);
  const currentDateRef = useRef(null);

  const months = [
    "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
    "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
  ];

  // Créez une liste de dates des soirées disponibles
  const eveningDates = evening.map(event => new Date(event.date).toDateString());

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    onDateChange(date);
  };

  const renderDays = () => {
    const date = new Date();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 0).getDay();
    const lastDateOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const lastDayOfMonth = new Date(currentYear, currentMonth, lastDateOfMonth - 1).getDay();
    const lastDateOfLastMonth = new Date(currentYear, currentMonth, 0).getDate();

    const days = [];

    for (let i = firstDayOfMonth; i > 0; i--) {
      days.push(
        <li key={`prev-${i}`} className="inactive">
          {lastDateOfLastMonth - i + 1}
        </li>
      );
    }

    for (let i = 1; i <= lastDateOfMonth; i++) {
      const currentDate = new Date(currentYear, currentMonth, i).toDateString();
      const isSelectable = eveningDates.includes(currentDate);

      const isToday = i === date.getDate() && currentMonth === date.getMonth() && currentYear === date.getFullYear();
      const isSelected = selectedDate && selectedDate.getFullYear() === currentYear && selectedDate.getMonth() === currentMonth && selectedDate.getDate() === i;
      const dayClass = `${isToday ? "active" : ""} ${isSelected ? "selected" : ""} ${isSelectable ? "selectable" : ""}`;

      days.push(
        <li key={i} className={dayClass} onClick={() => isSelectable && handleDateSelect(new Date(currentYear, currentMonth, i))}>
          {isSelectable ? <ModalReservation evening={evening.find(event => new Date(event.date).getDate() === i)} onDateSelect={handleDateSelect}/> : i}
        </li>
      );
    }

    for (let i = lastDayOfMonth; i < 6; i++) {
      days.push(
        <li key={`next-${i}`} className="inactive">
          {i - lastDayOfMonth + 1}
        </li>
      );
    }

    return days;
  };

  useEffect(() => {
    if (currentDateRef.current) {
      currentDateRef.current.innerHTML = `${months[currentMonth]} ${currentYear}`;
    }
  }, [currentYear, currentMonth]);

  const prevMonth = () => {
    setCurrentMonth(prev => {
      const newMonth = prev === 0 ? 11 : prev - 1;
      setCurrentYear(prevYear => (prev === 0 ? prevYear - 1 : prevYear));
      return newMonth;
    });
  };

  const nextMonth = () => {
    setCurrentMonth(prev => {
      const newMonth = prev === 11 ? 0 : prev + 1;
      setCurrentYear(prevYear => (prev === 11 ? prevYear + 1 : prevYear));
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
        <ul className="days">
          {renderDays()}
        </ul>
      </div>
    </div>
  );
}
