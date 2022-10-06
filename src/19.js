import styled from "styled-components";

export const Nineteen = styled.button`
  border: 5px solid red;
  font-size: 32px;
  padding: 1em 2em;
  position: relative;
  overflow: hidden;
  isolation: isolate;
  text-transform: uppercase;

  &::after {
    content: "YEAH";
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    position: absolute;
    background: black;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(-100%);
    transition: transform 0.4s;
  }

  &:hover {
    &::after {
      transform: translateY(0%);
    }
  }
  cursor: pointer;
`;
