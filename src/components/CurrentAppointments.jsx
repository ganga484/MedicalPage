// File: src/components/CurrentAppointments.jsx
import React from 'react';
import SimpleAppointmentCard from './SimpleAppointmentCard';
import '../styles/CurrentAppointments.css'; // Make sure this CSS file exists
import CurrentAppointmentCard from './CurrentAppointmentCard';
const todayAppointments = [
  {
    title: 'Dentist ',
    time: '09:00-10:00 AM',
    icon: '🦷',
    name:"Dr.Kiram"
  },
  {
    title: 'Physiotherapy Appointment',
    time: '11:00-01:00 PM',
     icon:"💪",
     name:"Dr.bahubali"
  },
 
];

export default function CurrentAppointments() {
  return (
    <div className="upcoming-schedule">
      <h3>Today's Appointments</h3>
      <div className="day-group-list">
        {todayAppointments.map((app, index) => (
          <CurrentAppointmentCard key={index} {...app} />
        ))}
      </div>
    </div>
  );
}
