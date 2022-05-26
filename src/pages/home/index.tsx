import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import movieApi from "../../apis/movie-api";
import { addMovies } from "../../features/movies/moviesSlice";
import HomeView from "./home-view";
const Home: React.FC = () => {
  // const dispatch = useDispatch();
  // useEffect(() => { 
  //   console.log("Home");
    
  //   const searchMovieText = "money h"
  //   const fetchMoview = async () => {
  //     // const response = await movieApi.get(`?i=tt3896198&apikey=a70fcbe`);
  //     const response:  any = await movieApi.get(`?apikey=a70fcbe&s=${searchMovieText}&type=movie`).catch((error) => {console.log(error)});
  //      console.log(response.data);
  //     dispatch(addMovies(response.data))
  //   };
  //   fetchMoview();
  // }, []);

  return <HomeView />;
};
export default Home;
