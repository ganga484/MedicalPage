

// File: src/components/UpcomingSchedule.jsx
import React from 'react';
import { upcomingAppointments } from '../data/upcomingAppointments';
import SimpleAppointmentCard from './SimpleAppointmentCard';
import '../styles/UpcomingSchedule.css';

export default function UpcomingSchedule() {
  return (
    <div className="upcoming-schedule">
      <h3>The Upcoming Schedule</h3>
      {upcomingAppointments.map((dayGroup, index) => (
        <div key={index} className="day-group">
          <h4>{dayGroup.day}</h4>
          <div className='day-group-list'>
            {dayGroup.appointments.map((appt, i) => (
            <SimpleAppointmentCard key={i} {...appt} />
          ))}
          </div>
        </div>
      ))}
    </div>
  );
}
