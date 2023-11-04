// imort axios
import axios from "axios";

const apikey = process.env.REACT_APP_APIKEY;
const baseUrl = process.env.REACT_APP_BASEURL;

// variabel untuk get data movie
export const getMovieList = async () => {
  //movie ini untuk urlnya kita masukkan baseurl dan apikey dari .env
  // tambahin page supaya tidak kena rate limit.
  const movie = await axios.get(
    `${baseUrl}/movie/popular?page=1&api_key=${apikey}`
  );
  console.log({ movieList: movie });
  return movie.data.results;
};

// variabel untuk search movie
export const searchMovie = async (q) => {
  const search = await axios.get(
    `${baseUrl}/search/movie?query=${q}&page=1&api_key=${apikey}`
  );
  console.log(q);
  return search.data;
};
