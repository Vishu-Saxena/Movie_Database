import React from 'react';
import './MovieCard.css';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <Link to={movie.imdb_url} target='_blank' style={{"textDecoration" : "none" , "color" : "black"}}>
    <div className="movie-card">
        
      <img src={"/images/img1.jpg"} alt={`${movie.title} poster`} />
      <div style={{display : "flex" , "flexDirection" : "column", "justifyContent" : "space-between"}}>
        <div style={{"height" : "3rem"}}>
        <p><strong>movie:</strong> {movie.movie}</p>
        </div>
        <div>
        <p><strong>Rating:</strong> {movie.rating}</p>
        </div>
      </div>
    </div>
    </Link>
  );
}

export default MovieCard;
