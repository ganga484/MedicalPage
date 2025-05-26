import React, { useState } from 'react';
import '../styles/calendarView.css';
import { getWeeksOfYear } from '../data/calendarUtils';

function generateTimeSlots(startHour = 9, endHour = 17, intervalMinutes = 60) {
  const slots = [];
  for (let hour = startHour; hour < endHour; hour++) {
    slots.push(`${hour}:00`);
    if (intervalMinutes < 60 && intervalMinutes > 0) {
      slots.push(`${hour}:${intervalMinutes.toString().padStart(2, '0')}`);
    }
  }
  slots.push(`${endHour}:00`);
  return slots;
}

export default function WeekCalendarView({ year = 2025 }) {
  const weeks = getWeeksOfYear(year);
  const [weekIndex, setWeekIndex] = useState(0);
  const currentWeek = weeks[weekIndex];

  // Track selected slots as { 'dayIndex-time': true }
  const [selectedSlots, setSelectedSlots] = useState({});

  const timeSlots = generateTimeSlots(9, 17);

  const handlePrev = () => setWeekIndex(i => Math.max(0, i - 1));
  const handleNext = () => setWeekIndex(i => Math.min(weeks.length - 1, i + 1));

  const toggleSelect = (dayIdx, time) => {
    const key = `${dayIdx}-${time}`;
    setSelectedSlots(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="calendar-view">
      <h3>
        Week of {currentWeek[0].month} {currentWeek[0].day}, {currentWeek[0].year}
      </h3>

      <div className="calendar-grid" style={{ gridTemplateColumns: 'repeat(7, 1fr)' }}>
        {currentWeek.map((dayObj, dayIdx) => (
          <div key={dayIdx} className="calendar-day">
            <span>{dayObj.day} {dayObj.month}</span>
            <div className="appointments scroll-y">
              {timeSlots.map((time) => {
                const key = `${dayIdx}-${time}`;
                const isSelected = selectedSlots[key];
                return (
                  <div
                    key={time}
                    className={`time-slot ${isSelected ? 'selected' : ''}`}
                    onClick={() => toggleSelect(dayIdx, time)}
                  >
                    {time}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="pagination-controls">
        <button onClick={handlePrev} disabled={weekIndex === 0}>Previous</button>
        <span>Week {weekIndex + 1} of {weeks.length}</span>
        <button onClick={handleNext} disabled={weekIndex === weeks.length - 1}>Next</button>
      </div>
    </div>
  );
}
