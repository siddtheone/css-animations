import styled from "styled-components";

export const TwoEight = styled.div`
  width: 300px;
  height: 300px;
  background-color: deeppink;
  display: block;
  margin: auto;
  margin-top: 20px;
  transition: transform 2s;

  &:hover {
    transform: scale(0.8);
  }
`;
