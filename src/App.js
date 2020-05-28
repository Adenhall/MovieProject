import React, {useState, useEffect} from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import MovieCard from './components/MovieCards.js'

const API_KEY = "e32f02b7a91bd590c9e7305b54bba6de";

export default function App() {

  const [movieList, setMovieList] = useState(null);
  const getMovieList = async() => {
    let url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=1`

    let data = await fetch(url);
    let result = await data.json();
    console.log("My list", result);
    setMovieList(result.results)
  }

  useEffect(() => {
    getMovieList();
  }
  ,[])

  if (movieList == null) {
    return(<div>Loading</div>)
  }

  return (
    <div className="d-flex justify-content-around movie-list">
      {movieList.map(item => {
        return <MovieCard movie = {item}/>
      })}
    </div>
  );
}
