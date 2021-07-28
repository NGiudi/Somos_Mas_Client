import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 3rem;
  margin: 2rem auto 0 auto;
  width: 100%;
  justify-content: center;
  
  @media only screen and (max-width: 1400px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media only screen and (max-width: 861px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const TopLayer = styled.div`
  background-color: rgba(12, 12, 12, 0.5);  
  color: white;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  padding-bottom: 1.5rem;
  position: absolute;
  text-align: center;
  top: 100%;
  width: 100%;
  z-index: 100;
`;

export const ImageBox = styled.a`
  height:200px;
  overflow: hidden;
  position: relative;
  width:200px;
  
  &:hover ${TopLayer} {
    top:0;
    transition: linear 0.4s; 
  } 
`;

export const MemberName = styled.h4`
  font-family: 'Truculenta', sans-serif;
  font-size: 1.6rem;
`;

export const MemberJob = styled.span`
  font-size: 0.8rem;
  font-style: italic;
`;