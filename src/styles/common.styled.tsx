import styled from "styled-components";

interface RowProps {
  justifyContent: string;
  alignItems: string;
  flexDirectionColumn?: boolean;
  wrap?: boolean;
}

export const Row = styled.div<RowProps>`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  flex-direction: ${({ flexDirectionColumn }) => (flexDirectionColumn ? "column" : "row")};
  flex-wrap: ${({ wrap }) => wrap && "wrap"};
`;

export const Paragraph = styled.p<{ color?: string }>`
  color: ${({ color, theme }) => (color ? color : theme.primaryText)};
`;

export const Spanner = styled.span<{ align?: string; width?: string }>`
  color: ${({ theme }) => theme.themeColor};
  text-align: ${({ align }) => align};
  width: ${({ width }) => width}; ;
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.secondaryText};
  font-size: 13px;
`;

export const Image = styled.img``;

export const Bold = styled.span`
  font-weight: bolder;
`;

export const Header1 = styled.h1`
  font-size: 45px;
  color: ${({ theme }) => theme.primaryText};
`;

export const Header2 = styled.h1`
  font-family: "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 25px;
`;

export const Icon = styled.i`
  color: ${({ theme }) => theme.themeColor};
`;

export const Button = styled.button<{ active?: boolean }>`
  border: 2px solid ${({ active, theme }) => (active ? theme.themeColor : "grey")};
  padding: 10px;
  color: ${({ theme }) => theme.primaryText};
  border-radius: 20px;
  padding: 10px 25px;
  margin: 0 10px;
  cursor: pointer;

  :hover {
    background-color: ${({ theme }) => theme.themeColor};
    border: 2px solid ${({ theme }) => theme.themeColor};
    color: ${({ theme }) => theme.primaryBackground};
  }
`;
