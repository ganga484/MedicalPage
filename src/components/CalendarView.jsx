
// File: src/components/CalendarView.jsx
import React from 'react';
import { calendarAppointments } from '../data/calendarData';
// import '../styles/CalendarView.css';

export default function CalendarView() {
  return (
    <div className="calendar-view">
      <h3>October 2021</h3>
      <div className="calendar-grid">
        {calendarAppointments.map((item, index) => (
          <div key={index} className="calendar-day">
            <span>{item.day}</span>
            <div className="appointments">
              {item.times.map((time, i) => (
                <div key={i} className="time-slot">{time}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}