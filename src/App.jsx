import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import './App.css'; // <-- Import this file

const App = () => {
  return (
    <div className="app-layout">
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default App;
