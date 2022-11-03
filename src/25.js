import styled from "styled-components";
import { pseudoFull } from "./constants";

const Button = styled.button`
  font-size: 24px;
  padding: 1rem 2rem;
  position: relative;
  border: 2px solid deeppink;
  background: transparent;
  text-transform: uppercase;
  color: transparent;

  &:before,
  &:after {
    ${pseudoFull}
    content: 'button';
    color: deeppink;
    background: lightgreen;
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

const Centered = styled.div`
  text-align: center;
`;

export const TwentyFive = () => (
  <Centered>
    <Button>Hover Me</Button>
  </Centered>
);
