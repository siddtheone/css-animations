import styled from "styled-components";

export const TwentyFour = styled.button`
  font-size: 32px;
  color: white;
  padding: 1em 2em;
  background: orange;
  cursor: pointer;
  position: relative;
  border: none;

  &:before,
  &:after {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transform-origin: top;
    transition: all 0.5s;
    transform: rotateX(270deg);
  }

  &:before {
    background: purple;
    content: "Hover Me 2";
    transition-delay: 0.2s;
  }

  &:after {
    content: "Hover Me 3";
    background: red;
  }

  &:hover {
    &:before,
    &:after {
      transform: rotateX(0deg);
    }

    &:before {
      transition-delay: 0s;
    }

    &:after {
      transition-delay: 0.2s;
    }
  }
`;
