import styled from "styled-components";
import { defaultButton, pseudoFull } from "./constants";

export const TwentySeven = styled.button`
  ${defaultButton}
  border: none;
  background: none;
  color: white;
  transition: all 0.4s;

  &::before,
  &::after {
    ${pseudoFull}
    content: '';
    z-index: -1;
    transition: all 0.4s;
  }

  &::before {
    background: #20caff;
    transform: translate(-0.15em, -0.15em) rotateX(0deg);
  }

  &::after {
    background: #ff7675;
    mix-blend-mode: multiply;
    transform: translate(0.15em, 0.15em);
  }

  &:hover {
    color: inherit;

    &::before {
      transform: perspective(1200px) translate(-0.15em, -1.5em) rotateX(80deg);
    }
    &::after {
      transform: perspective(1200px) translate(0.15em, 1.5em) rotateX(-80deg);
    }
  }
`;
