import styled from "styled-components";

export const OneTwo = styled.button`
  height: 90px;
  width: 290px;
  font-size: 28px;
  color: white;
  border: none;
  background-color: blue;
  transition-property: background-color;
  transition-duration: 1s;

  &:hover {
    background-color: green;
  }
`;
