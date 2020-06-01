import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
const API_KEY = "e32f02b7a91bd590c9e7305b54bba6de";
export default function MovieCards(props) {
  let fetchVideoId = async () => {
    let url = `https://api.themoviedb.org/3/movie/${MOVIE_ID}/videos?api_key=${API_KEY}&language=en-US`;

    let data = await fetch(url);
    let result = await data.json();
  };
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${props.movie.poster_path}`}
        />
        <Card.Body>
          <Card.Title>{props.movie.title}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>{props.movie.popularity} are watching!</ListGroupItem>
          <ListGroupItem>
            {props.movie.adult
              ? "Wooow hang on kids! 18+ Only"
              : "Safe for below 18 years old"}
          </ListGroupItem>
          <ListGroupItem>
            Release date: {props.movie.release_date}
          </ListGroupItem>
        </ListGroup>
        <Card.Body>
          <div className="learn-more-btn">
            <a
              href="#"
              onClick={() => {
                props.getMovieDetails(props.movie.id);
              }}
            >
              <p>
                <span className="bg"></span>
                <span className="base"></span>
                <span className="text">LEARN MORE</span>
              </p>
            </a>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
