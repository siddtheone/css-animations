import { css } from "styled-components";

export const ImageURL = "https://unsplash.it/g/640/425";

export const defaultButton = css`
  font-size: 1.5rem;
  padding: 1em 2em;
  position: relative;
  cursor: pointer;
`;

export const pseudoFull = css`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
