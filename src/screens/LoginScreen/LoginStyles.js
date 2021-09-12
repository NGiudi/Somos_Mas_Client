import styled from "styled-components";

import { BG_WHITE } from "../../constants/colors";

export const CenterForm = styled.div`
  display: flex;
  flex-direction: colum;
  justify-content: center;
  min-height: 100vh;
`;

export const BgWhite = styled.div`
  background-color: ${BG_WHITE};
  margin: auto;
  max-width: 400px;
  padding: 20px 0px;
  width: 95%;
`;

export const LogoContainer = styled.div`
  background-color: rgba(36,36,36, 0.1);
  border-bottom-right-radius: 50px;
  border-top-right-radius: 50px;
  padding: 10px 0px;
  width: 150px; 
`;

export const Title = styled.h3`
  font-family: 'Truculenta', sans-serif;
  font-size: calc(1.4em + .5vw);
  margin: 30px 0px;
  text-align: center;
`;