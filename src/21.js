import styled, { css } from "styled-components";

const pseudoEles = css`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: purple;
  color: white;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.4s;
`;

export const TwentyOne = styled.button`
  font-size: 32px;
  padding: 2em 4em;
  background: none;
  position: relative;
  isolation: isolate;
  cursor: pointer;
  overflow: hidden;

  &::before {
    content: "You hovered";
    ${pseudoEles}
    transform: translate(-100%, 100%);
  }
  &::after {
    content: "Hover me";
    ${pseudoEles}
  }

  &:hover {
    &::before {
      transform: translate(0%, 0%);
    }
    &::after {
      transform: translate(100%, -100%);
    }
  }
`;
