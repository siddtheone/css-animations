import styled from "styled-components";

export const TwentyThree = styled.button`
  font-size: 32px;
  color: orange;
  padding: 1em 2em;
  background: none;
  cursor: pointer;
  position: relative;
  border: 2px solid orange;
  overflow: hidden;

  &:before {
    content: "";
    background: orange;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -1;
    transform-origin: top center;
    transition: all 0.4s;
    border-radius: 0 0 50% 50%;
    height: 0%;
  }

  &:hover {
    color: white;
    &:before {
      border-radius: 0%;
      height: 100%;
    }
  }
`;
