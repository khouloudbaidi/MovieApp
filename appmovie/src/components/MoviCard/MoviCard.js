import React from "react";
import { Card } from "react-bootstrap";
import MovieRating from "../Rating/Rating";
// import Modal from "../AddMovie/AddMovie";

const MoviCard = ({ movie, AddMovie }) => {
  return (
    <>
      {/* <Modal AddMovie={AddMovie} /> */}

      <div>
        <Card style={{ width: "15rem" }}>
          <Card.Img variant="top" src={movie.img} style={{ width: "97%" }} />
          <Card.Body>
            <Card.Title className="movieTitle">{movie.title}</Card.Title>
            <MovieRating filterRate={false} movieRating={movie.rating} />
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default MoviCard;
