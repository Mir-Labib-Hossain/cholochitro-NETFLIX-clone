import React, { useState } from "react";
import { useFetchTopRatedMoviesQuery } from "../../features/movies/topRatedMoviesSlice";
import Loading from "../Loading/loading";
import MovieListView from "./movie-list-view";

export interface MovieListProps {
  movieList: IMovies;
  type: string;
  header: string;
  setType: React.Dispatch<React.SetStateAction<string>>;
}

const MovieList: React.FC<{ listType: string; header: string }> = ({ listType, header }) => {
  // const movies = useSelector(getAllMovies)
  // console.log(movies);
  const [type, setType] = useState("movie");
  const { data = [], isFetching } = useFetchTopRatedMoviesQuery({ type, listType });

  return data.Search ? <MovieListView movieList={data.Search} header={header} type={type} setType={setType} /> : <Loading />;
};
export default MovieList;
