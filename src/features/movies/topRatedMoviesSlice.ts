import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const TopRatedMoviesSlice = createApi({
  reducerPath: "topRated",
  baseQuery: fetchBaseQuery({ baseUrl: "http://www.omdbapi.com" }),
  endpoints: (builder) => ({
    fetchTopRatedMovies: builder.query({
      query({ type = "movie", listType = "man" }) {
        return `/?apikey=a70fcbe&s=${listType}&type=${type}`;
      },
    }),
  }),
});
export const { useFetchTopRatedMoviesQuery } = TopRatedMoviesSlice;
