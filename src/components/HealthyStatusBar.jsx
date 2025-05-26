import React from 'react';

const statusColors = {
  Healthy: '#22c55e',            // Green
  'Requires Attention': '#ef4444', // Red (Tailwind red-500)
  Normal: '#f97316',             // Orange (Tailwind orange-500)
};

export default function HealthStatusBar({ status }) {
  const color = statusColors[status] || '#9ca3af'; // fallback gray

  return (
    <div style={{ marginBottom: 12, maxWidth: 300 }}>
     
      <div
        style={{
          backgroundColor: '#e5e7eb', // light gray background bar
          borderRadius: 8,
          height: 12,
          overflow: 'hidden',
          margin:2        }}
      >
        <div
          style={{
            width:
              status === 'Healthy'
                ? '100%'
                : status === 'Normal'
                ? '70%'
                : status === 'Requires Attention'
                ? '40%'
                : '50%',
            backgroundColor: color,
            height: '100%',
            transition: 'width 0.3s ease',
            borderRadius: 8,
          }}
        />
      </div>
    </div>
  );
}
