// File: src/components/DashboardMainContent.jsx
import React from 'react';
import AnatomySection from './AnatomySection';
import HealthStatusCards from './HealthStatusCards';
import CalendarView from './CalendarView';
import UpcomingSchedule from './UpcomingSchedule';
import ActivityFeed from './ActivityFeed';
import '../styles/DashboardMainContent.css';
import YearCalendarView from './YearCalendarView';
import WeekCalendarView from './WeekCalendarView';
import { Search, Bell, Plus } from 'lucide-react';
import doctor from '../data/doctor.jpeg';
import CurrentAppointments from './CurrentAppointments';
export default function DashboardMainContent() {
  return (
    <div className="dashboard-content">
     
      <div className="header-actions">
        <img alt="User Avatar" src={doctor} className="avatar" />
        <button className="add-button">
          <Plus size={16} />
        </button>
      </div>
      <div className="middle-section">
       
          <WeekCalendarView />
         <CurrentAppointments/>
          <UpcomingSchedule />
      
      </div>
    </div>
  );
}
