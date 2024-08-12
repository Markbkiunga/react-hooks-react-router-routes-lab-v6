import { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import { useParams } from 'react-router-dom';
import MovieCard from '../components/MovieCard';

function Movie() {
  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
      </header>
      <main>
      </main>
    </>
  );
}

export default Movie;
