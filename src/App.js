import React, { useState } from 'react';
import './style.css';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="app">
      <div className={`sidebar ${isSidebarOpen ? '' : 'collapsed'}`}>
        <button onClick={toggleSidebar} className="toggle-btn">Toggle</button>
        <ul className="sidebar-links">
          <li><a href="#home">🏠 Home</a></li>
          <li><a href="#about">ℹ️ About</a></li>
          <li><a href="#contact">📞 Contact</a></li>
        </ul>
      </div>
      <div className="main">
        <h1>Table Heading</h1>
        <table>
          <tr>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Column 3</th>
          </tr>
          <tr>
            <td>Data 1</td>
            <td>Data 2</td>
            <td>Data 3</td>
          </tr>
          <tr>
            <td>Data 4</td>
            <td>Data 5</td>
            <td>Data 6</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default App;
