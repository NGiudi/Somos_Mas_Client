import styled from "styled-components";

export const Title = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  margin: .3rem 0;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const Content = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;  
  overflow: hidden;
`;
