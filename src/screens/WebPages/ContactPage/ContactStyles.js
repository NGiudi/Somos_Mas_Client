import styled from "styled-components";
import { RED } from "../../../constants/colors";

export const Header = styled.div`
  padding-bottom: 6rem;
  position: relative;
  width: 100%;
`;

export const BackImage = styled.img`
  height: 100%;
  left: 0;
  opacity: 0.2;
  position: absolute;
  top: 0;
  z-index: -10;
  width: 100%;
`;

export const HeaderText = styled.p`
  font-style: italic;
  margin: auto;
  max-width: 1000px;
  text-align: center;
  width: 80%;
`;

export const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3rem;
  margin: 5rem auto 6rem auto;
  max-width: 1400px;
  width: 90%;

  @media only screen and (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);  
  }
`;

export const FormBox = styled.div`
  grid-column: 1 / 3;
  grid-row: 1;
  margin: auto;
  width: 80%;
`;

export const Bold = styled.h4`
  color: ${RED};
  font-weight: bold;
  padding: 7px 0;
`;

export const ContactItem = styled.p`
  padding: 0 0 5px 10px;
`;
