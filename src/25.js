import styled from "styled-components";
import { pseudoFull } from "./constants";

export const TwentyFive = styled.button`
  font-size: 24px;
  padding: 1rem 2rem;
  position: relative;
  border: 2px solid yellow;
  background: transparent;
  text-transform: uppercase;
  color: transparent;

  &:before,
  &:after {
    ${pseudoFull}
    content: 'button';
    color: yellow;
    background: gray;
    transition: all 0.5s;
  }

  &:before {
    opacity: 0;
    transform: translateX(-100%) rotateY(360deg) scale(0);
  }

  &:hover {
    &:before {
      opacity: 1;
      transform: translateX(0%) rotateY(0deg) scale(1);
    }
    &:after {
      opacity: 0;
      transform: translateX(100%) rotateY(360deg) scale(0);
    }
  }
`;
