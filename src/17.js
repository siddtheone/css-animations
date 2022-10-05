import styled, { css } from "styled-components";

const pseudo = css`
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: deeppink;
  transition: 1s;
  z-index: -1;
`;

export const Seventeen = styled.button`
  padding: 2rem 4rem;
  font-size: 1.2rem;
  cursor: pointer;
  color: deeppink;
  border: 5px solid deeppink;
  position: relative;
  isolation: isolate;
  transition: 1s;

  &::before {
    transform: rotateX(90deg);
    ${pseudo}
  }

  &::after {
    transform: rotateY(90deg);
    ${pseudo}
  }

  &:hover {
    color: white;
    &::before {
      transform: rotateX(0deg);
    }
    &::after {
      transform: rotateY(0deg);
    }
  }
`;
