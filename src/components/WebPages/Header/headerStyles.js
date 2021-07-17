import styled from "styled-components";
import { Link } from "react-router-dom";
import { BG_BLACK, BLUE, RED, WHITE } from '../../../constants/colors';

export const BgColor = styled.div`
  background: ${BG_BLACK};
  border-bottom: solid 2px ${RED};
  position: sticky;
  top:0;
  width: 100%;
  z-index: 100;
`;

export const HeaderBox = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: auto;
  max-width: 1200px;
  padding: 5px 0px;
  width: 95%;
`;

export const Flex = styled.div`
  align-items: center;
  display: flex;
`;

export const NavbarWrapper = styled.nav`
  background: ${BG_BLACK};
  left: ${(props) => (props.open ? "0px" : "-100%")};
  transition: left 0.5s ease-in;

  @media only screen and (max-width: 861px) {
    min-height: calc(100vh - 72px);
    justify-content: center;
    padding-top: 20px;
    position: absolute;
    top: 72px;
  }
`;

export const Li = styled(Link)`
  color: ${WHITE};
  display: inline-block;
  font-family: 'Truculenta', sans-serif;
  font-size: calc(1em + .2vw);
  list-style: none;
  padding: 0px 1em;
  
  &:hover { color: ${BLUE}; }

  @media only screen and (max-width: 861px) {
    box-sizing: border;
    display: block;
    padding: 20px 70px;
  }
`;

export const Button = styled(Link)`
  border: solid 1px ${BLUE};  
  border-radius: 5px;
  color: ${BLUE};
  display: inline-block;
  font-family: 'Truculenta', sans-serif;
  font-size: calc(.9em + .2vw);
  list-style: none;
  padding: .2em .5em;

  &:hover {
    opacity: 0.8;
    transform: scale(0.95);
  }
`;

export const ArrowDonw = styled.i`
  color: ${WHITE};
  margin-left: 10px;
`;

export const MenuButtonWrapper = styled.button`
  border: none;
  height: 5vh;
  margin-top: .3rem;
  padding: 3px;
  
  @media only screen and (min-width: 861px) {
    display: none;
  }
`;
