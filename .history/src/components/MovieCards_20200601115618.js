import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

export default function MovieCards(props) {
  const onClickHandle = (id) => {
    alert(id);
  };
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${props.movie.poster_path}`}
          onClick={() => onClickHandle(props.movie.id)}
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
