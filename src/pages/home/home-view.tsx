import React from "react";
import MovieList from "../../components/MovieList";
import { Paragraph } from "../../styles/common.styled";
const HomeView: React.FC = () => {
  return (
    <>
       <MovieList listType="man" header="Top Rated"/>
       <MovieList listType="disney"header="Kids Choice"/>
      </>
  );
};
export default HomeView;
