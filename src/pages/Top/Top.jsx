import React from 'react';
import './Top.css'; // New CSS file for styling
import CardSection from '../../components/CardSection/CardSection';

const Top = () => {
  return (
    <div className="section-wrapper">
      <div className="container">
        <div className="section-header">
          <h1>⭐ Top Rated Movies</h1>
          <p>These critically acclaimed films have earned their spot at the top!</p>
        </div>
      </div>
      <CardSection title="top_rated"/>
    </div>
  );
};

export default Top;
