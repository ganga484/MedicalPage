import React from 'react';
import '../styles/SimpleAppointmentCard.css';
export default function CurrentAppointmentCard({ title, time, icon,name }) {
  return (
    <div className="appointment-card" style={{padding:"15px"}}>
       <div>
        <h4 style={{
            padding:"3px 5px"
        }}>{title}</h4>
        <p style={{fontSize:"13px",textIndent:"3px"}}>{time}</p>
        <p  style={{fontSize:"13px",textIndent:"3px"}}>{name}</p>
      </div>
      <div className="icon-placeholder">{icon}</div>
     
    </div>
  );
}