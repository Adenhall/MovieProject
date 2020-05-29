import React from 'react'
import {Card, ListGroup, ListGroupItem} from 'react-bootstrap';

export default function MovieCards(props) {
    return (
        <div>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${props.movie.poster_path}`}/>
        <Card.Body>
          <Card.Title>{props.movie.title}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>{props.movie.popularity} are watching!</ListGroupItem>
          <ListGroupItem>{props.movie.adult ? 'Wooow hang on kids! 18+ Only' : 'Safe for below 18 years old'}</ListGroupItem>
          <ListGroupItem>Release date: {props.movie.release_date}</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
        </div>
    )
}
