import styled from "styled-components";
import { Link } from "react-router-dom";

// import constants.
import { BG_BLACK, BLACK, BLUE, RED, WHITE } from "../../../constants/colors";

export const Container = styled.footer`
  background-color: ${BG_BLACK};
  color: ${WHITE};
  padding: 1.5em 0 2em 0;
`;

export const Nav = styled.div`
  align-items: center;
  border-bottom: solid 1px #454545;  
  display: flex;
  justify-content: center;
  margin: auto;
  max-width: 1200px;
  padding-bottom: 10px;
  width: 90%;
`;

export const Flex = styled.div`
  display: flex;

  @media only screen and (max-width: 800px) {
    display: none;
  }
`;

export const LinkDom = styled(Link)`
  display: block;
  font-family: "Truculenta", sans-serif;
  font-size: calc(1em + .2vw);
  margin: 0px 20px;

  &:hover{ color: ${BLUE}; }
`;

export const Icon = styled.i`
  color: ${BLACK};

  &:hover{ color: ${RED}; }
`;
