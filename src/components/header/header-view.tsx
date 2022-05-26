import React from "react";
import HeaderIcon from "../../../assets/images/movie-icon.svg";
import { Button, Header2, Icon, Image, Paragraph, Row } from "../../styles/common.styled";
import { HeaderWrapper } from "./styled";
const HeaderView: React.FC = () => {
  return (
    <HeaderWrapper>
      <Row justifyContent="space-between" alignItems="center" wrap>
        <Row justifyContent="space-between" alignItems="center">
          <Image src={HeaderIcon} />
          <Header2>CholoChitrow</Header2>
        </Row>

        <Row justifyContent="space-evenly" alignItems="center">
          <Paragraph>HOME</Paragraph>
          <Paragraph>MOVIE</Paragraph>
          <Paragraph>TV SHOWS</Paragraph>
          <Paragraph>PRICING</Paragraph>
          <Paragraph>CONTACTS</Paragraph>
        </Row>

        <Row justifyContent="space-between" alignItems="center">
          <Icon className="fa-solid fa-magnifying-glass"></Icon>
          <Paragraph>CocoBar</Paragraph>

          <Button active>SIGN IN</Button>
        </Row>
      </Row>
    </HeaderWrapper>
  );
};
export default HeaderView;
