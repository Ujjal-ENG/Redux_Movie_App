import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";
import { APIkey } from "../../common/apis/MovieApiKey";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    const movieText = "Harry";
    const response = await movieApi
      .get(`?apikey=${APIkey}&s=${movieText}&type=movie`)
      .catch((err) => {
        console.log("Error is: ", err);
      });
    return response.data;
  }
);

export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    const seriesText = "Triends";
    const response = await movieApi
      .get(`?apikey=${APIkey}&s=${seriesText}&type=series`)
      .catch((err) => {
        console.log("Error is: ", err);
      });
    return response.data;
  }
);

const initialState = {
  movies: {},
  shows: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, action) => {
      state.movies = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncMovies.pending, () => {
      console.log("request is pending");
    });
    builder.addCase(fetchAsyncMovies.fulfilled, (state, action) => {
      return {
        ...state,
        movies: action.payload,
      };
    });
    builder.addCase(fetchAsyncMovies.rejected, () => {
      console.log("request is rejected");
    });

  },
});

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.showa.shows;

export default movieSlice.reducer;
