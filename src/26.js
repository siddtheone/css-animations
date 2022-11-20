import styled from "styled-components";

export const Button = styled.button`
  font-size: 1.5rem;
  padding: 1.5rem 3rem;
  background: transparent;
  color: orange;
  border: none;
  text-transform: uppercase;
  position: relative;
  transition: all 0.4s;

  &:before,
  &:after {
    content: "";
    width: 1em;
    height: 1em;
    border-radius: 50%;
    background: orange;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: all 0.5s;
    z-index: -1;
    opacity: 0;
  }

  &:before {
    left: 0;
    box-shadow: -3em 0 0 orange;
  }
  &:after {
    right: 0;
    box-shadow: 3em 0 0 orange;
  }

  &:hover {
    &:before,
    &:after {
      opacity: 1;
    }
    &:before {
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      box-shadow: 1.3em 0 0 orange;
    }
    &:after {
      right: 50%;
      transform: translateX(50%) translateY(-50%);
      box-shadow: -1.3em 0 0 orange;
    }
  }

  span {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: orange;
    border-radius: 10px;
    scale: 0;
    z-index: -1;
    transition: all 0.3s;
  }

  &:hover {
    color: gray;
    transition-delay: 0.4s;

    span {
      scale: 1;
      transition-delay: 0.4s;
    }
  }
`;

const Centered = styled.div`
  text-align: center;
`;

export const TwentySix = () => (
  <Centered>
    <Button>
      <span />
      Button
    </Button>
  </Centered>
);
