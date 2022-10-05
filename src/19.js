import styled from "styled-components";

export const Nineteen = styled.button`
  border: 5px solid purple;
  background: orangered;
  color: white;
  font-size: 32px;
  padding: 1em 2em;
  position: relative;
  //   overflow: hidden;
  isolation: isolate;

  &::after {
    content: "YEAH";
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    position: absolute;
    background: yellow;
    color: brown;
    transform: translateY(-100%);
    transition: transform 0.4s;
  }

  &:hover {
    &::after {
      transform: translateY(0%);
    }
  }
`;
