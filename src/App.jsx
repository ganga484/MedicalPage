
// File: src/App.jsx
import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import DashboardMainContent from './components/DashboardMainContent';
import './styles/App.css';

export default function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-section">
       <div>
         <Header />
       </div>
       <div>
         <DashboardMainContent />
       </div>
      </div>
    </div>
  );
}













