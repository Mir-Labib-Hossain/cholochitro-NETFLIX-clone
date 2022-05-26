import React from "react";
import { MovieListProps } from ".";
import { Button, Header1, Row, Spanner } from "../../styles/common.styled";
import MovieCard from "../MovieCard/MovieCard";
import { MovieListContainer } from "./styled";

const MovieListView: React.FC<MovieListProps> = ({ movieList, type, setType,header }) => {
  console.log(movieList);

  return (
    <>
      <Row justifyContent="space-between" alignItems="center" wrap>
        <Row justifyContent="space-between" alignItems="center" flexDirectionColumn>
          <Header1>{header}</Header1>
          {/* <Spanner align="left" width="100%">Most loved ones</Spanner> */}
        </Row>
        <Row justifyContent="space-between" alignItems="center">
          <Button active={type == "movie"} onClick={() => setType("movie")}>
            Movies
          </Button>
          <Button active={type == "series"} onClick={() => setType("series")}>
            Series
          </Button>
          {/* <Button active={type=="episode"} onClick={()=>setType("episode")} >Episodes</Button> */}
        </Row>
      </Row>
      <MovieListContainer>
        {movieList.map((Movie: IMovie, index) => {
          return <MovieCard key={index} imdbID={Movie.imdbID} Title={Movie.Title} Poster={Movie.Poster} Type={Movie.Type} Year={Movie.Year} />;
        })}
      </MovieListContainer>
    </>
  );
};
export default MovieListView;
