import styled from "styled-components";

interface RowProps {
  justifyContent: string;
  alignItems: string;
  flexDirectionColumn?: boolean;
}

export const Row = styled.div<RowProps>`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  flex-direction: ${({ flexDirectionColumn }) => (flexDirectionColumn ? "column" : "row")};
`;

export const Paragraph = styled.p`
  font-family: "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
`;

export const Image = styled.img``;

export const Bold = styled.span`
  font-weight: bolder;
`;

export const Header1 = styled.h1`
  font-size: 65px;
`;

export const Header2 = styled.h1`
  font-family: "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 25px;
`;

export const Icon = styled.i`
  
`;  

export const Button = styled.button`
  border : 2px solid ${({ theme }) => theme.themeColor};
  padding: 10px;
  color: ${({ theme }) => theme.primaryText};
  border-radius: 20px;
  padding: 10px 25px;
  cursor: pointer;

  :hover{
    background-color: ${({ theme }) => theme.themeColor};
    color: ${({ theme }) => theme.primaryBackground};

  }
`; 