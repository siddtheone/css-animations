import styled, { css } from "styled-components";

const pseudoEles = css`
  content: "Hover me";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: orangered;
  color: white;
  z-index: 1;
`;

export const TwentyOne = styled.button`
  font-size: 32px;
  padding: 1em 2em;
  background: none;
  position: relative;
  isolation: isolate;

  &::after {
    ${pseudoEles}
  }
  &::after {
    ${pseudoEles}
  }
`;
