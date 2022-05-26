import React from "react";
import useRandomDuration from "../../hooks/useRandomDuration";
import useRandomRating from "../../hooks/useRandomRating";
import useRandomResolution from "../../hooks/useRandomResolution";
import { Icon, Paragraph, Row, Span, Spanner } from "../../styles/common.styled";
import { Card, PosterImg, Row0, Row1, Row2, Row3 } from "./styled";
const MovieCard: React.FC<IMovie> = ({ Title, Poster, Type, Year }) => {
  return (
    <Card>
      <PosterImg src={Poster} />
      <Row0 justifyContent="space-evenly" alignItems="space-between" flexDirectionColumn>
        <Row1 justifyContent="space-between" alignItems="center">
          <Paragraph>{Title}</Paragraph>
          <Spanner>{Year}</Spanner>
        </Row1>
        <Row2 justifyContent="space-between" alignItems="center">
          <Spanner>{useRandomResolution()}</Spanner>
          <Row3 justifyContent="space-between" alignItems="center">
            <Span>
              <Icon className="fa-solid fa-hourglass"></Icon> {useRandomDuration()}
            </Span>
            <Span>
              <Icon className="fa-regular fa-star"></Icon> {useRandomRating()}
            </Span>
          </Row3>
        </Row2>
      </Row0>
    </Card>
  );
};
export default MovieCard;
