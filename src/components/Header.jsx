// File: src/components/Header.jsx
import React from 'react';
import { Search, Bell, Plus } from 'lucide-react';
import '../styles/Header.css';
// import avatar from '../assets/avatar.png';
import AnatomySection from './AnatomySection';
import HealthStatusCards from './HealthStatusCards';
import ActivityFeed from './ActivityFeed';
export default function Header() {
  return (
    <>
      <header className="header">
        <div className="search-bar">
          <Search size={18} />
          <input type="text" placeholder="Search..."  disabled />
        </div>
        <Bell className="icon" />
      </header>
      <div className="top-section">
         <h2 className='dashaboard'>Dashboard</h2>
        <div className='top-section_part-1'>
          <AnatomySection />
          <HealthStatusCards />
        </div>
        <div>

          <ActivityFeed />
        </div>
      </div>
    </>
  );
}
