import React from 'react';
import './Upcoming.css'; // Import CSS styles
import CardSection from '../../components/CardSection/CardSection';

const Upcoming = () => {
  return (
    <div className="section-wrapper">
      <div className="container">
        <div className="section-header">
          <h1>🎬 Upcoming Movies</h1>
          <p>Stay tuned for the latest releases hitting the screens soon!</p>
        </div>
      </div>
      <CardSection title={"upcoming"}/>
    </div>
  );
};

export default Upcoming;
