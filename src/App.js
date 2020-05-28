import React, {useState, useEffect} from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

const API_KEY = process.env.REACT_APP_APIKEY;

export default function App() {

  const getMovieList = async() => {
    let url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=1`

    let data = await fetch(url);
    let result = await data.json();
    console.log("My list", result);

  }

  useEffect( {
    getMovieList();
  }
)

  return (
    <div>
      
    </div>
  )
}
