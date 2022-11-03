import styled from "styled-components";

export const Button = styled.button`
  font-size: 1.3rem;
  padding: 1.5rem 3rem;
  background: transparent;
  border: none;
  text-transform: uppercase;
`;

const Centered = styled.div`
  text-align: center;
`;

export const TwentySix = () => (
  <Centered>
    <Button>Button</Button>
  </Centered>
);
