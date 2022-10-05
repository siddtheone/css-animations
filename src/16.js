import styled from "styled-components";

export const SwipeButton = styled.button`
  color: purple;
  font-size: 24px;
  border: 5px solid purple;
  padding: 40px 80px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  isolation: isolate;
  transition: all 1s;

  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: deeppink;
    transform: translateX(-100%);
    transition: transform 0.4s;
  }

  &:hover {
    color: white;
    &::before {
      transform: translateX(0%);
    }
  }
`;
