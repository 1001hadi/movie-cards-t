import React, { useState } from "react";
import { MovieCard } from "../components/MovieCard";

const Home = () => {
  const [searchQ, setSearchQ] = useState("");

  const movies = [
    { id: 1, title: "OMD's favorite", release_date: "2019" },
    { id: 2, title: "BEN's favorite", release_date: "2015" },
    { id: 3, title: "Ida's favorite", release_date: "2016" },
    { id: 4, title: "Elia's favorite", release_date: "2018" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    alert(searchQ);
    setSearchQ("");
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search here"
          className="search-input"
          value={searchQ}
          onChange={(e) => setSearchQ(e.target.value)}
        />
        <button type="submit" className="search-btn">
          Search
        </button>
      </form>
      <div className="movies-grid">
        {movies.map(
          (movie) =>
            // to search the specific name/movie
            movie.title.toLowerCase().startsWith(searchQ) && (
              <MovieCard movie={movie} key={movie.id} />
            )
        )}
      </div>
    </div>
  );
};

export default Home;
