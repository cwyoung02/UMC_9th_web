import { useEffect, useState } from 'react'
import type { Movie, MovieResponse } from '../types/movie'
import axios from 'axios';
import MovieList from '../components/MovieList';

const Main = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const {data} = await axios.get<MovieResponse>(
        'https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1',
        {
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZDhkNjZjZjgzMzI1ODBhY2RlYmM5MWQ3OGZkZDg4YSIsIm5iZiI6MTc1OTE0MzkzMi45MjEsInN1YiI6IjY4ZGE2N2ZjNDJmNDI2YTU5YWJiMGU5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EopVC_w3XsL0iEJhhFwvjshZE_5eg1h9p4IobztCNtA'
          },
        }
      );
      setMovies(data.results);
    }

    fetchMovies();
  }, []);

  console.log(movies);

  return (
    <>
      <ul className='w-2/3 grid grid-cols-6 gap-x-1 gap-y-2'>
        {movies.map((movie) => (
          <MovieList key={movie.id} movie={movie}/>
        ))}
      </ul>
    </>
  )
}

export default Main
