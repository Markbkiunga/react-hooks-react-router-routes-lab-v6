import { Link } from 'react-router-dom';

function MovieCard({ title, time, id }) {
  return (
    <article key={id}>
      <h1>{title}</h1>
      <p>{time}</p>
    </article>
  );
}

export default MovieCard;
