import styled from "styled-components";

export const TwentyTwo = styled.button`
  font-size: 32px;
  padding: 1em 2em;
  background: none;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &:before {
    content: "Hover Me";
    position: absolute;
    background: black;
    color: white;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.4s;

    opacity: 0;
    transform: scale(10);
  }

  &:hover:before {
    transform: scale(1);
    opacity: 1;
  }
`;
