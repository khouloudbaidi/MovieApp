import React from "react";
import MoviCard from "../MoviCard/MoviCard";
import "./MoviList.css";

const MoviList = ({ movies, input, rating, AddMovie }) => {
  return (
    <div className="movieList">
      {/* <MoviCard AddMovie={AddMovie} /> */}
      {movies
        .filter(
          (movie) =>
            movie.title.toUpperCase().includes(input.toUpperCase()) &&
            movie.rating >= rating
        )
        .map((movie) => (
          <MoviCard movie={movie} key={movie.id} />
        ))}
    </div>
  );
};

export default MoviList;
