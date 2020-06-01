import React, { useState } from "react";
import { Card, ListGroup, ListGroupItem, Modal, Button } from "react-bootstrap";
import YouTube from "@u-wave/react-youtube";

{
  /* <YouTube
  video="x2to0hs"
  autoplay
/> */
}
const API_KEY = "e32f02b7a91bd590c9e7305b54bba6de";

export default function MovieCards(props) {
  const [movieID, setmovieID] = useState(0);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const onClickHandle = async (id) => {
    let url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`;
    let data = await fetch(url);
    let result = await data.json();
    if (result.results.length != 0) {
      setmovieID(result.results[0].key);
      setShow(true);
    }
  };
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.movie.title} 's Trailer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <YouTube width={400} height={400} video={movieID} autoplay />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          style={{ pointer: "cursor" }}
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
