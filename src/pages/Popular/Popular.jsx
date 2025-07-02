import React from 'react';
import './Popular.css'; // Create this CSS file
import CardSection from '../../components/CardSection/CardSection';

const Popular = () => {
  return (
    <div className="section-wrapper">
      <div className="container">
        <div className="section-header">
          <h1>🔥 Popular Movies</h1>
          <p>Check out what everyone’s watching right now!</p>
        </div>
      </div>
      <CardSection title="popular"/>
    </div>
  );
};

export default Popular;
