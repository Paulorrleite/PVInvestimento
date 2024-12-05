import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import './Sidebar.css';

const Sidebar: React.FC = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(prevState => !prevState); 
  };

  return (
    <div>
      <button onClick={toggleSidebar} className="sidebar-toggle">
        {isSidebarVisible ? 'X' : '☰'} 
      </button>

      <div className={`sidebar ${isSidebarVisible ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h2>PV Investimentos</h2>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Início</Link>
            </li>
            <li>
              <Link to="/fav">Favoritos</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
