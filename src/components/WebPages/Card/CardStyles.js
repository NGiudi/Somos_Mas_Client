import styled from "styled-components";

export const Title = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  margin: .4rem 0;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const Content = styled.div`
  display: -webkit-box;
  margin: .5rem 0;
  overflow: hidden;
  -webkit-box-orient: vertical;  
  -webkit-line-clamp: 3;
`;

export const Footer =  styled.span`
  color: rgba(12,12,12, 0.5);
  font-size: .8rem;
  margin-left: .5rem;
`;
