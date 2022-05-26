import styled from "styled-components";
import { Row } from "../../styles/common.styled";

export const Card = styled.div`
  height: auto;
  min-width: 300px !important;
  padding: 10px;
 `;

export const Row0 = styled(Row)`
  height: 100px;
`;

export const Row1 = styled(Row)`
  p {
    display: inline-block;
    width: 80%;
    white-space: nowrap;
    overflow: hidden !important;
    text-overflow: ellipsis;
  }

  span {
  }
`;

export const Row2 = styled(Row)`
  > span {
    border: 2px solid ${({ theme }) => theme.primaryText};
    padding: 5px;
    font-size: 10px;
    font-weight: bold;
  }
`;

export const Row3 = styled(Row)`
  width: 115px;
`;

export const PosterImg = styled.img`
  width: 100%;
  height: 400px;
  border-radius: 5px;
`;
