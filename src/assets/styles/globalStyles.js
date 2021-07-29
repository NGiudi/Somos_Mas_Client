import styled from 'styled-components';

import { YELLOW } from '../../constants/colors';

export const Title = styled.h2`
  font-family: 'Truculenta', sans-serif;
  font-size: calc(2rem + 1vw);
  font- weight: bold;
  padding-top: 3rem;
  text-align: center;
`;

export const Rectangular = styled.div`
  background-color: ${YELLOW};   
  height: 6px;
  margin: 0 auto 3rem auto;
  width: 50px;
`;

export const SectionText = styled.div`
  font-size: 1.2rem;
  margin: 0 auto 6rem auto;
  max-width: 1000px;
  width: 80%;
`;