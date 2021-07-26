import styled from "styled-components";

import { YELLOW } from '../../../constants/colors';

export const Title = styled.h2`
  font-family: 'Truculenta', sans-serif;
  font-size: calc(2rem + 1vw);
  font- weight: bold;
  margin-top: 3rem;
  text-align: center;
`;

export const Rectangular = styled.div`
  background-color: ${YELLOW};   
  height: 6px;
  margin: 0 auto 3rem auto;
  width: 50px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 4rem;
  margin: auto;
  max-width: 1200px;
  width: 80%;
  justify-content: center;
  
  @media only screen and (max-width: 1400px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 861px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;