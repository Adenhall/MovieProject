import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieCard from "./components/MovieCards.js";
import ChangePageBtn from "./components/ChangePageBtn.js";
import NavBar from "./components/Navbar.js";

const API_KEY = "e32f02b7a91bd590c9e7305b54bba6de";
let page = 1;

export default function App() {
  const [movieList, setMovieList] = useState(null);
  const [originalList, setOriginalList] = useState(null);
  const [prePageBtn, setPrePageBtn] = useState(true);
  const [nextPageBtn, setNextPageBtn] = useState(false);

  const getMovieList = async () => {
    let url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=${page}`;

    let data = await fetch(url);
    let result = await data.json();
    console.log("My list", result);
    setMovieList(result.results);
    setOriginalList(result.results);
  };

  useEffect(() => {
    getMovieList();
  }, []);

  const searchTheKeyword = (keyword) => {
    if (keyword === "") {
      setMovieList(originalList);
      return;
    }

    let filteredList = movieList.filter((movie) =>
      movie.title.toLowerCase().includes(keyword.toLowerCase())
    );
    setMovieList(filteredList);
  };

  const getMovieDetails = async (selectedId) => {
    let demoList = movieList.map((item) => {
      return item.id;
    });
    console.log(demoList);
    let movieId = demoList.filter((x) => x === selectedId);
    let url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`;
    let data = await fetch(url);
    let result = await data.json();
    document.getElementById(
      "main-body"
    ).innerHTML = `<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href=${`https://movieeeee.netlify.app/`}>MOVIE 'N CHILL</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href=${`https://movieeeee.netlify.app/`}>Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="${result.homepage}">See more</a>
        </li>
      </ul>
    </div>
    </nav>
    <section>
        <div class="container">
          <div class="row">
            <div class="col" style="color: white;">
              <h2>${result.original_title}</h2>
              <h3> Available on Blu-ray</h3>
            </div>
            <div class="col"></div>
            <div class="w-100"></div>
            <div class="col"><img src=${`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${result.poster_path}`} style="width: 400px;"/></div>
            <div style="color: white;">
              <h3>${result.overview}</h3>
              <h3><i class="fas fa-angle-double-right"></i> Genres </br>
              <h5>${result.genres
                .map((f) => {
                  return f.name;
                })
                .join(", ")}</h5>
              </h3>
              <h3><i class="fas fa-angle-double-right"></i> Runtime</br>
              <h5>${result.runtime} mins</h5>
              </h3>
              <h3><i class="fas fa-angle-double-right"></i> Produced by</br>
              <h5>${result.production_companies
                .map((x) => {
                  return x.name;
                })
                .join(", ")}</h5>
              </h3>
              <h3><i class="fas fa-angle-double-right"></i> More details <a href=${
                result.homepage
              }>here!</a>
              </h3>
            </div>
          </div>
          </div>
      </section>`;
    console.log(result);
  };

  const setThisPage = async (x) => {
    if (x === "back") {
      page--;
    }
    if (x === "forward") {
      page++;
    }
    if (page <= 1) {
      setPrePageBtn(true);
    } else setPrePageBtn(false);
    if (page >= 500) {
      setNextPageBtn(true);
    }
    getMovieList();
  };

  if (movieList === null) {
    return <div>Loading</div>;
  }

  return (
    <div id="main-body" className="d-flex flex-column">
      <NavBar searchTheKeywordProps={searchTheKeyword} />
      <div id="movies" className="d-flex justify-content-around movie-list">
        {movieList.map((item) => {
          return <MovieCard movie={item} getMovieDetails={getMovieDetails} />;
        })}
      </div>
      <ChangePageBtn
        prePageBtn={prePageBtn}
        nextPageBtn={nextPageBtn}
        pageNumber={page}
        setPage={setThisPage}
      />
    </div>
  );
}
