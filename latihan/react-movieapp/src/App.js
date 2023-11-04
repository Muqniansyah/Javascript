import { useEffect, useState } from "react";
import "./App.css";
import { getMovieList, searchMovie } from "./api";

const App = () => {
  // variabel penampung data.results
  const [popularMovies, setPopularMovies] = useState([]);

  // supaya running diawal pertama
  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  // buat functional component
  const PopularMovieList = () => {
    return popularMovies.map((movie, i) => {
      return (
        <div className="movie-wrapper" key={i}>
          <div className="movie-title">{movie.title}</div>
          <img
            className="movie-image"
            src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}
          />
          <div className="movie-date">release : {movie.release_date}</div>
          <div className="movie-rating">{movie.vote_average}</div>
        </div>
      );
    });
  };

  // untuk menampung value dari inputannya dijadikan query untuk hiting ke api
  const search = async (q) => {
    if (q.length > 3) {
      const query = await searchMovie(q);
      setPopularMovies(query.results);
      console.log({ query: query });
    }
  };

  console.log({ popularMovies: popularMovies });

  return (
    <div className="App">
      <header className="App-header">
        <h1>Muni Movie</h1>
        <input
          placeholder="cari film..."
          className="movie-search"
          // binding search
          onChange={({ target }) => search(target.value)}
        />
        <div className="movie-container">
          <PopularMovieList />
        </div>
      </header>
    </div>
  );
};

export default App;
