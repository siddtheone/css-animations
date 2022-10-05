import styled from "styled-components";
import { ImageURL } from "./constants";

const Image = styled.img`
  width: 300px;
  display: block;
  margin: auto;
  margin-top: 20px;
  transition: transform 1s;

  &:hover {
    transform: translateZ(280px);
  }
`;

const Perspective = styled.div`
  perspective: 300px;
`;

export function Twelve() {
  return (
    <>
      <Perspective>
        <Image src={ImageURL} />
      </Perspective>
    </>
  );
}
