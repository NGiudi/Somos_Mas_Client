import styled from "styled-components";

export const Content = styled.div`
  align-items: center;
  display: flex;
  min-height: calc(100vh - 287px);
  justify-content: space-around;

  @media only screen and (max-width: 861px) {
    display: block;
  }
`;

export const Image = styled.div`
  text-align: center;
  width: 30%;

  @media only screen and (max-width: 861px) {
    margin: auto;
    padding-top: 30px;
    width: 50%;
  }
`;

export const TextBox = styled.div`
  text-align: center;
  max-width: 600px;
  width: 40%;

  @media only screen and (max-width: 861px) {
    margin: auto;
    padding: 60px 0px;
    width: 80%;
  }
`;

export const Title = styled.h2`
  font-family: 'Truculenta', sans-serif;
  font-size: 50px;
  margin-bottom: 20px;
`;

export const Message = styled.p`
  font-size: 20px;
  margin-bottom: 50px;
  text-align: center;
`;