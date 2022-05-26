import styled from "styled-components";

export const HeaderWrapper = styled.div`
  background-color: ${({ theme }) => theme.secondaryBackground};
  padding: 10px 10vw;

  h1 {
    color: ${({ theme }) => theme.primaryText};
  }

  p {
    font-size: 14px;
    color: ${({ theme }) => theme.primaryText};
    font-weight: bold;
    margin: 0 20px;

    :hover {
      color: ${({ theme }) => theme.themeColor};
    }
  }

  img {
    width: auto;
    height: 60px;
  }
`;
