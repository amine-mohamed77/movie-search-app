
import "./SearchBar.css";
import { useState } from "react";
import movieApi from "../services/movieApi";
import MovieList from "./MovieList";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!searchTerm.trim()) return;

    try {
      const data = await movieApi(searchTerm);

      if (data.Response === "True") {
        setMovies(data.Search);
      } else {
        setMovies([]);
        console.log(data.Error);
      }
    } catch (error) {
      console.error("Error searching movies:", error);
    }
  };

 return (
  <>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search for a movie..."
      />

      <button type="submit">Search</button>
    </form>

    <MovieList movies={movies} />
  </>
);
}

export default SearchBar;
