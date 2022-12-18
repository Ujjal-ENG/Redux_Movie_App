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

const initialState = {
  movies: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, action) => {
      state.movies = action.payload;
    },

    extraReducers: {
      [fetchAsyncMovies.pending]: () => {
        console.log("Pending");
      },
      [fetchAsyncMovies.fulfilled]: (state, action) => {
        console.log("Data is Fetched Successfully");
        return { ...state, movies: action.payload };
      },
      [fetchAsyncMovies.rejected]: () => {
        console.log("Rejected");
      },
    },
    
  },
});

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export default movieSlice.reducer;
