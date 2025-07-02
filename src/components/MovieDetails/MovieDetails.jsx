import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './MovieDetails.css';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [imdbId, setImdbId] = useState(null);
  const [video, setVideo] = useState([]);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MzVkNGQ5OWE2N2E4MjVlODA4NDVlNDI1MmZhMjcyNiIsIm5iZiI6MTc1MDU3ODM2MS42NjcsInN1YiI6IjY4NTdiNGI5M2JhOTIxYjQ3YWE0NjNmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gEI24DHLkEF9-HW-bXpnGK1m24AM937cxnyZ71_VXOA'
    }
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
      .then(res => res.json())
      .then(res => setMovie(res))
      .catch(err => console.error(err));

  }, []);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
      .then(res => res.json())
      .then(res => {
        setMovie(res);

        // Fetch IMDb ID
        fetch(`https://api.themoviedb.org/3/movie/${id}/external_ids`, options)
          .then(res => res.json())
          .then(data => {
            setImdbId(data.imdb_id);
          });
      })
      .catch(err => console.error(err));
  }, [id]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(res => res.json())
      .then(res => setVideo(res))
      .catch(err => console.error(err));
  }, [])

  if (!movie) {
    return (
      <div className="loader-wrapper">
        <div className="spinner"></div>
        <p>Loading movie details...</p>
      </div>
    );
  }


  return (
    <div className="movie-details-wrapper">
      <div className="container movie-details-content">

        <div className="poster-section">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="movie-poster2"
          />
        </div>

        <h1 className="movie-title">{movie.title}</h1>
        {movie.tagline && <p className="tagline">{movie.tagline}</p>}

        <div className="movie-details-table">
          <table>
            <tbody>
              <tr>
                <th>Name</th>
                <td>{movie.title || 'N/A'}</td>
              </tr>
              <tr>
                <th>Rating</th>
                <td>{movie.vote_average || 'N/A'}</td>
              </tr>
              <tr>
                <th>Release Date</th>
                <td>{movie.release_date || 'N/A'}</td>
              </tr>
              <tr>
                <th>Genres</th>
                <td>{movie.genres?.map((g) => g.name).join(', ') || 'N/A'}</td>
              </tr>
              <tr>
                <th>Runtime</th>
                <td>{movie.runtime ? `${movie.runtime} minutes` : 'N/A'}</td>
              </tr>
              <tr>
                <th>Budget</th>
                <td>{movie.budget ? `$${movie.budget.toLocaleString()}` : 'N/A'}</td>
              </tr>
              <tr>
                <th>Revenue</th>
                <td>{movie.revenue ? `$${movie.revenue.toLocaleString()}` : 'N/A'}</td>
              </tr>
              <tr>
                <th>Overview</th>
                <td>{movie.overview || 'N/A'}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="movie-buttons">
          <button className="btn back-btn" onClick={() => window.history.back()}>
            Back
          </button>

          {movie.homepage && (
            <a
              href={movie.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="btn trailer-btn"
            >
              Visit Official Site
            </a>
          )}

          {imdbId && (
            <a
              href={`https://www.imdb.com/title/${imdbId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn imdb-btn"
            >
              View on IMDb
            </a>
          )}
          {video?.results?.length > 0 && (
            <a
              href={`https://www.youtube.com/watch?v=${video.results[0].key}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn video-btn"
            >
              Watch Trailer
            </a>
          )}

        </div>


      </div>
    </div>
  );
};

export default MovieDetails;
