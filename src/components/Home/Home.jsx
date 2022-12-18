import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import movieApi from "../../common/apis/movieApi";
import { APIkey } from "../../common/apis/MovieApiKey";

const Home = () => {
  useEffect(() => {
    const movieText = "Harry";

    const fetchMovie = async () => {
      const response = await movieApi
        .get(`?apikey=${APIkey}&s=${movieText}&type=movie`)
        .catch((err) => {
          console.log("Error is: ", err);
        });
      console.log("This is Response Form API: ", response);
    };
    fetchMovie();
  }, []);


  return (
    <div>
      <div className="banner-img">
        <MovieListing />
      </div>
    </div>
  );
};

export default Home;
