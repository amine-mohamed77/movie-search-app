
import "./MovieList.css";
import MovieCard from "./MovieCard";

function MovieList({ movies = [] }) {
  if (movies.length === 0) {
    return (
      <p className="no-movies">
        No movies found. Try searching for a movie!
      </p>
    );
  }

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;
