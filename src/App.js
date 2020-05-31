import React, {useState, useEffect} from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import MovieCard from './components/MovieCards.js';
import ChangePageBtn from './components/ChangePageBtn.js';
import NavBar from './components/Navbar.js';

const API_KEY = "e32f02b7a91bd590c9e7305b54bba6de";
let page = 1;

export default function App() {

  const [movieList, setMovieList] = useState(null);
  const [prePageBtn, setPrePageBtn] = useState(true);
  const [nextPageBtn, setNextPageBtn] = useState(false);
  const getMovieList = async() => {
    let url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=${page}`

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
      page--;
      
    }
    if (x === 'forward') {
      page++;
    }
    if(page <= 1) {
      setPrePageBtn(true)
    } else setPrePageBtn(false)
    if (page >= 500){
      setNextPageBtn(true)
    }
    getMovieList();
    let demoList = movieList.map(item => {
      return item.id
    })
    console.log(demoList)
  }

  if (movieList === null) {
    return(<div>Loading</div>)
  }

  return (
    <div className="d-flex flex-column">
      <NavBar/>
      <div className="d-flex justify-content-around movie-list">
        {movieList.map(item => {
          return <MovieCard movie = {item}/>
        })}
      </div>
      <ChangePageBtn prePageBtn={prePageBtn} nextPageBtn={nextPageBtn} pageNumber = {page} setPage={setThisPage} />
    </div>
  );
}
