import React from 'react';
import '../styles/YearCalanderView.css'
import { getYearData } from '../data/calendarUtils';

export default function YearCalendarView({ year = 2025 }) {
  const yearData = getYearData(year);

  return (
    <div className="year-calendar">
      <h2>{year}</h2>
      <div className="months-grid">
        {yearData.map((month, idx) => (
          <div key={idx} className="month">
            <h4>{month.name}</h4>
            <div className="month-grid">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                <div key={day} className="day-label">{day}</div>
              ))}
              {month.days.map((dayObj, index) => (
                <div key={index} className={`day-cell ${dayObj.isPadding ? 'padding' : ''}`}>
                  {dayObj.day && <span>{dayObj.day}</span>}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
