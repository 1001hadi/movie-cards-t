import React from "react";
import { MovieCard } from "../components/MovieCard";

const Home = () => {
  const movies = [
    { id: 1, title: "OMD's favorite", release_date: "2019" },
    { id: 2, title: "BEN's favorite", release_date: "2015" },
    { id: 3, title: "Ida's favorite", release_date: "2016" },
    { id: 4, title: "Elia's favorite", release_date: "2018" },
  ];
  return (
    <div className="home">
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
