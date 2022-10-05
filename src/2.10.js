import styled from "styled-components";

export const TwoTen = styled.img`
  width: 300px;
  display: block;
  margin: auto;
  margin-top: 20px;
  transition: transform 2s;

  &:hover {
    transform: skew(10deg, -10deg);
  }
`;
