import React, {useState, useEffect} from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import MovieCard from './components/MovieCards.js';
import ChangePageBtn from './components/ChangePageBtn.js';
import Navbar from './components/Navbar.js';

const API_KEY = "e32f02b7a91bd590c9e7305b54bba6de";

export default function App() {

  const [movieList, setMovieList] = useState(null);
  const [currentPage, setCurrentPage] = useState(1)
  const [prePageBtn, setPrePageBtn] = useState(true);
  const [nextPageBtn, setNextPageBtn] = useState(false);
  const getMovieList = async() => {
    console.log("current page",currentPage)
    let url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=${currentPage}`

    let data = await fetch(url);
    let result = await data.json();
    console.log("My list", result);
    setMovieList(result.results)
  }

  useEffect(() => {
    getMovieList();
  }
  ,[])

  const setThisPage = async(x) => {
    if (x === 'back') {
      setCurrentPage(currentPage-1)
      
    }
    if (x === 'forward') {
      setCurrentPage(currentPage + 1)
    }
    if(currentPage <= 1) {
      setPrePageBtn(true)
    } else setPrePageBtn(false)
    if (currentPage >= 500){
      setNextPageBtn(true)
    }
    getMovieList();
  }

  if (movieList === null) {
    return(<div>Loading</div>)
  }

  return (
    <div className="d-flex flex-column">
      <div className="d-flex justify-content-around movie-list">
        {movieList.map(item => {
          return <MovieCard movie = {item}/>
        })}
      </div>
      <ChangePageBtn prePageBtn={prePageBtn} nextPageBtn={nextPageBtn} pageNumber = {currentPage} setPage={setThisPage} />
    </div>
  );
}
