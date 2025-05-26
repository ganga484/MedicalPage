
import React from 'react';
import { navLinks_generals } from '../data/navLinks';
import { navLinks_tools } from '../data/navLinks';
import { Settings } from 'lucide-react'
import '../styles/Sidebar.css';
// File: src/components/Sidebar.jsx


export default function Sidebar() {
  const SettingIcon = { label: 'Settings', icon: Settings };
  console.log(SettingIcon.label)
  return (
    <>
      <div className='sidebar_div'>
        <div className='healtcare-text_div'><span className='healt-text'>Health</span><span className='care-text'>care.</span></div>
        <div>
          <aside className="sidebar">
            <h2 className="sidebar-title">Generals</h2>
            <ul className="nav-links">
              {navLinks_generals.map((link, index) => (
                <li key={index} className="nav-item">
                  <span className="icon">{<link.icon />}</span>
                  <span>{link.label}</span>
                </li>
              ))}
            </ul>

          </aside>
        </div>
        <div>

          <aside className="sidebar">
            <h2 className="sidebar-title">Tools</h2>
            <ul className="nav-links">
              {navLinks_tools.map((link, index) => (
                <li key={index} className="nav-item">
                  <span className="icon">{<link.icon />}</span>
                  <span>{link.label}</span>
                </li>
              ))}
            </ul>
          </aside>

        </div>
        <div>
          <aside className="sidebar-settings">
            <ul className="nav-links">
                <li  className="nav-item-settings">
                  <span className="icon-settings">
                    {<SettingIcon.icon />}
                    </span>
                  <span>{SettingIcon.label}</span>
                </li>
            </ul>
          </aside>
        </div>
      </div>
    </>


  );
}
