import styled from "styled-components";

import { BG_BLACK, BLUE, RED, WHITE } from '../../../constants/colors';

export const NavbarWrapper = styled.nav`
  background: #333;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: fixed;
  top: 5vh;
  bottom:0;
  left: ${(props) => (props.open ? "0" : "-100%")};
  width: 60%;
  height: 100%;
  transition: left 0.5s ease-in;
  
  @media only screen and (min-width: 861px) {
    flex-direction: row;
    position: initial;
    height: auto;
    justify-content: center;
  }
`;

export const HeaderBox = styled.div`
  align-items: center;
  background: ${BG_BLACK};
  border-bottom: solid 2px ${RED};
  display: flex !important;
  justify-content: space-around;
  padding: 5px 50px;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 100;
`;

export const Li = styled.li`
  color: ${WHITE};
  display: inline-block;
  font-family: 'Truculenta', sans-serif;
  font-size: calc(1em + .2vw);
  list-style: none;
  padding: 0px 1em;
  
  &:hover {
    color: ${BLUE};
  }
`;

export const Button = styled.li`
  border: solid 1px ${BLUE};  
  border-radius: 5px;
  color: ${BLUE};
  display: inline-block;
  font-family: 'Truculenta', sans-serif;
  font-size: calc(.9em + .2vw);
  list-style: none;
  padding: .2em .5em;

  &:hover {
    transform: scale(0.95);
    opacity: 0.8;
  }
`;

export const ArrowDonw = styled.i`
  color: ${WHITE};
  margin-left: 10px;
`;

export const MenuButtonWrapper = styled.button`
  border: none;
  margin-top: .3rem;
  padding: 3px;
  height: 5vh;
  
  @media only screen and (min-width: 861px) {
    display: none;
  }
`;
