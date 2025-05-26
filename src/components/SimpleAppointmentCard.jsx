
// File: src/components/SimpleAppointmentCard.jsx
import React from 'react';
import '../styles/SimpleAppointmentCard.css';

export default function SimpleAppointmentCard({ title, time, icon }) {
  return (
    <div className="appointment-card">
       <div>
        <h4>{title}</h4>
        <p>{time}</p>
      </div>
      <div className="icon-placeholder">{icon}</div>
     
    </div>
  );
}
