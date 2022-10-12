import styled from "styled-components";

export const Twenty = styled.button`
  font-size: 32px;
  background: black;
  color: white;
  padding: 1em 2em;
  border: 1px solid orange;
  transition: background 0.4s;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    width: 100%;
    height: 50px;
    position: absolute;
    top: 0;
    left: 0;
    background: white;
    transform: translateX(-100%) rotate(45deg);
    transition: all 0.4s;
  }

  &:hover {
    background: red;
    &::after {
      transform: translateX(100%) rotate(45deg);
    }
  }
`;
