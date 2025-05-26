// File: src/components/AppointmentBarChart.jsx
import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell
} from 'recharts';
// File: src/data/weeklyAppointments.js
 const weeklyAppointments = [
  { day: 'Mon', appointments: 2 },
  { day: 'Tue', appointments: 6 },
  { day: 'Wed', appointments: 4 },
  { day: 'Thu', appointments: 7 },
  { day: 'Fri', appointments: 3 },
  { day: 'Sat', appointments: 5 },
  { day: 'Sun', appointments: 1 }
];


const barColors = ['#4A90E2', '#7ED957', '#FFB200', '#FF6263', '#8B5CF6', '#00C49F', '#FF69B4'];

export default function AppointmentBarChart() {
  return (
    <div style={{ width: '100%', height: 300 }}>
      <h3>Weekly Appointments Overview</h3>
      <ResponsiveContainer>
        <BarChart
          data={weeklyAppointments}
          margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
          barCategoryGap={40} // adds spacing
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Bar dataKey="appointments" barSize={8}>
            {weeklyAppointments.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={barColors[index % barColors.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
