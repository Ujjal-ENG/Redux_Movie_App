import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import movieApi from "../../common/apis/movieApi";
import { APIkey } from "../../common/apis/MovieApiKey";
import { useDispatch } from "react-redux";
import { addMovies } from "../../features/movies/movieSlice";

const Home = () => {
  const movieText = "Harry";
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await movieApi
        .get(`?apikey=${APIkey}&s=${movieText}&type=movie`)
        .catch((err) => {
          console.log("Error is: ", err);
        });
      dispatch(addMovies(response.data));
    };
    fetchMovie();
  }, [dispatch]);

  return (
    <div>
      <div className="banner-img">
        <MovieListing />
      </div>
    </div>
  );
};

export default Home;
