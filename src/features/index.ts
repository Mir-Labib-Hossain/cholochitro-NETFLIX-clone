import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./movies/moviesSlice";
import { TopRatedMoviesSlice } from "./movies/topRatedMoviesSlice";

 
export const store = configureStore({
  reducer:{
    movies: moviesReducer,
    [TopRatedMoviesSlice.reducerPath]: TopRatedMoviesSlice.reducer,
  },
    middleware: (getDefaultMiddleware:any) => {
      return getDefaultMiddleware().concat(TopRatedMoviesSlice.middleware);
    },
  
});
// The store now has redux-thunk added and the Redux DevTools Extension is turned on
