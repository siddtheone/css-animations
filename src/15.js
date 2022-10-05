import styled from "styled-components";

const RotatingButton = styled.button`
  color: purple;
  font-size: 24px;
  border: 5px solid purple;
  padding: 40px 80px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  isolation: isolate;

  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: deeppink;
    transform-origin: bottom right;
    transform: rotate(90deg);
    transition: transform 1s;
  }

  &:hover {
    &::before {
      transform: rotate(0deg);
    }
  }
`;

const RotatingButtonChallange = styled(RotatingButton)`
  &::before {
    transform-origin: top;
    transform: rotateX(90deg);
  }

  &:hover {
    &::before {
      transform: rotateX(0deg);
    }
  }
`;

export function Fifteen() {
  return (
    <>
      <RotatingButton>Hover Me</RotatingButton>
      <br />
      <RotatingButtonChallange>
        Rotating button challenge
      </RotatingButtonChallange>
    </>
  );
}
