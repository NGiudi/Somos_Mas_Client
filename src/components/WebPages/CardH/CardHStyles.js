import styled from 'styled-components';

export const Section = styled.section`
  align-items: center; 
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: auto;
  max-width: 1400px;
  padding: 4rem 3rem;
  width: 80%;
`;

export const Image = styled.img`
  border-radius: 50%;
  height: 300px;
  width: 300px;
`;

export const SecTitle = styled.h2`
  color: #363636;
  font-size: calc(1rem + .2vw);
  font-weight: bold;
  margin-bottom: 1rem;
`;