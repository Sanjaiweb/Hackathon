import React, { useState, useEffect } from 'react';
import { Movies } from './MoviesMock';

const MoviesList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Simulate fetching data from an API by using mock data
    setTimeout(() => {
      setMovies(Movies);
    }, 300);  // simulate network delay
  }, []);

  return (
    <div>
      <h1>Movie List</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            {movie.title} ({movie.releaseYear}) - Rating: {movie.rating}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;
