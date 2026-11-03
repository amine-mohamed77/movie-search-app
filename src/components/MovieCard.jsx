
import "./MovieCard.css";

function MovieCard({ movie }) {
  const poster =
    movie.Poster !== "N/A"
      ? movie.Poster
      : "https://placehold.co/300x450?text=No+Poster";

  return (
    <article className="movie-card">
      <img
        className="movie-poster"
        src={poster}
        alt={movie.Title}
      />

      <div className="movie-info">
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
      </div>
    </article>
  );
}

export default MovieCard;
