import { Link } from 'react-router-dom';

function MovieCard({ title, id }) {
  return (
    <li>
      <h2>{title}</h2>
      <button className="movie-button">
        <Link to={`/movie/${id}`}>View Info</Link>
      </button>
    </li>
  );
}

export default MovieCard;
