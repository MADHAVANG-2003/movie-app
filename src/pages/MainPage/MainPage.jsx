import React from 'react'
import '../MainPage/mainPage.css'
import CardSection from '../../components/CardSection/CardSection';
import SearchBar from '../../components/SearchBar/SearchBar';

const MainPage = () => {
  return (
    <div className="section-wrapper">
      <div className="container">
        <div className="section-header">
          <h1>🎥 Welcome to MovieHub</h1>
          <p>Discover trending movies, top-rated picks, and upcoming releases all in one place!</p>
        </div>
      </div>

      <SearchBar/>

      <CardSection title="now_playing"/>
    </div>
  );
};

export default MainPage;