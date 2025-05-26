
// File: src/components/AnatomySection.jsx
import React from 'react';
import anatomy from '../data/anotomy.png'
import { healthIndicators } from '../data/healthData';
import '../styles/AnatomySection.css';

export default function AnatomySection() {
  return (
    <div className="anatomy-section">
      <img  src={anatomy} alt="Anatomy" className="anatomy-image" />
     
    </div>
  );
}