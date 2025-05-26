
// File: src/components/ActivityFeed.jsx
import React from 'react';
import graph from '../data/graphOfMedic.png'


export default function ActivityFeed() {
  return (
    <div className="activity-feed">
 
     <img style={{width:"500px",height:"150px"}} src={graph} alt="" />
    </div>
  );
}
