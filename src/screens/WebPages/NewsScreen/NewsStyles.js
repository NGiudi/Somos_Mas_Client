import styled from "styled-components";

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