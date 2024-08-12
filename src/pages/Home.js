import { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import MovieCard from '../components/MovieCard';
function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch('http://localhost:4000/movies')
      .then((response) => response.json())
      .then((moviesData) => setMovies(moviesData));
  }, []);
  const displayMovies = movies.map((movie) => {
    return <MovieCard title={movie.title} time={movie.time} id={movie.id} />;
  });

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Home Page</h1>
        {displayMovies}
      </main>
    </>
  );
}

export default Home;
