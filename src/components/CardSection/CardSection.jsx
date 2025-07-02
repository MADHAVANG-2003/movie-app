import React, { useEffect, useState } from 'react';
import './CardSection.css';
import { Link } from 'react-router-dom'; // import Link
import { FaStar, FaCalendarAlt } from "react-icons/fa";


const CardSection = ({ title }) => {
  const [apiData, setApiData] = useState([]);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MzVkNGQ5OWE2N2E4MjVlODA4NDVlNDI1MmZhMjcyNiIsIm5iZiI6MTc1MDU3ODM2MS42NjcsInN1YiI6IjY4NTdiNGI5M2JhOTIxYjQ3YWE0NjNmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gEI24DHLkEF9-HW-bXpnGK1m24AM937cxnyZ71_VXOA'
    }
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${title ? title : "now_playing"}?language=en-US&page=1`, options)
      .then(res => res.json())
      .then(res => setApiData(res.results || [])).then(res => console.log(setApiData))
      .catch(err => console.error(err));
  }, [title]);

  return (
    <div className="card-wrapper">
      <div className="container">
        <div className="card-grid">
          {apiData &&
            apiData.map(movie => (
              <Link
                to={`/movie/${movie.id}`} // navigate to MovieDetails
                key={movie.id}
                className="movie-card"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="movie-poster"
                />
                <div className="movie-info">
                  <h3>{movie.title.length > 22 ? movie.title.slice(0, 20) + '...' : movie.title}</h3>
                  <div>
                    <p>
                      <FaStar style={{ marginBottom: '5px', color: '#FFD700' }} /> {movie.vote_average}
                    </p>

                    <p><FaCalendarAlt style={{ marginBottom: '5px', color: '#FFD700' }}/> {movie.release_date}</p>
                  </div>

                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CardSection;
