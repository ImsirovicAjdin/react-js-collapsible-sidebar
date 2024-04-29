To add three links with emojis to the sidebar in your React application, you can update the JSX in the `src/App.js` file to include the links, and modify the CSS for styling these links.

### Step 1: Update JSX in `src/App.js`

Add three links with emojis inside the sidebar component. Here's how you can do it:

```jsx
import React, { useState } from 'react';
import './App.css';

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
```

### Step 2: Update CSS in `src/App.css`

Add some styling for the sidebar links to make them look nice and to ensure they are visible and clickable:

```css
.app {
  display: flex;
  height: 100vh;
}

.sidebar {
  background-color: #333;
  color: white;
  width: 200px;
  transition: width 0.3s;
  position: relative;
  padding: 20px; /* Add padding for aesthetic spacing */
}

.collapsed {
  width: 0;
  transition: width 0.3s;
}

.toggle-btn {
  position: absolute;
  right: 0;
  transform: translateX(100%);
  top: 10px;
  cursor: pointer;
  width: 40px;
  height: 40px;
  background-color: #666;
  color: white;
  border-radius: 5px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sidebar-links {
  list-style: none;
  padding: 0;
  margin-top: 20px; /* Spacing from the toggle button */
}

.sidebar-links li a {
  color: white;
  text-decoration: none;
  font-size: 16px;
  display: block;
  padding: 10px 0;
}

.main {
  flex-grow: 1;
  background-color: #ccc;
  padding: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

table, th, td {
  border: 1px solid black;
}

th, td {
  padding: 8px;
  text-align: left;
}
```

### Key Styling Changes

- **Sidebar Padding**: Added padding to the sidebar for better spacing.
- **Sidebar Links Styling**: Made the links white, non-underlined, and added padding for better visibility and clickability.

With these changes, your sidebar should now include three links, each prefixed with an emoji, making the sidebar more interactive and visually appealing. When you run your app, these changes should be visible and functional.