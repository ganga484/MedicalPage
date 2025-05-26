



import React from 'react';
import { Smile, HeartPulse, ShieldCheck } from 'lucide-react';
import '../styles/HealthStatusCards.css';
import HealthStatusBar from './HealthyStatusBar';


const healthData = [
  {
    title: 'Lungs',
    status: 'Normal',
    date: '2025-05-10',
    color: '#22c55e',
    icon: '🫁',
  },
  {
    title: 'Teeth',
    status: 'Requires Attention',
    date: '2025-04-25',
    color: '#facc15',
    icon: '🦷',
  },
  {
    title: 'Bone',
    status: 'Healthy',
    date: '2025-03-30',
    color: '#3b82f6',
    icon:'🦴' ,
  },
];


export default function HealthStatusCards() {
  return (
    <div className="health-status-cards">
      {healthData.map((item, index) => (
        <div key={index} className="card">
          <div className="card-header">
           
             <div style={{fontSize:"30px"}}>
               {item.icon}
             </div>
          
            <h4>{item.title}</h4>
            <p className="date">Last Checked: {item.date}</p>
          </div>
          <div className="card-body">
            <HealthStatusBar status={item.status} />
          </div>
        </div>
      ))}
    </div>
  );
}
