import styled from "styled-components";

export const Eighteen = styled.button`
  background: none;
  padding: 1em 2em;
  border: 4px solid orange;
  color: orange;
  font-size: 28px;
  letter-spacing: -2px;
  transition: all 0.5s;

  &:hover {
    border-width: 4px 8px;
    letter-spacing: 8px;
    font-weight: bold;
  }
`;
