import styled from "styled-components";
import { ImageURL } from "./constants";

const Image = styled.img`
  width: 300px;
  display: block;
  margin: auto;
  margin-top: 20px;
  transition: transform 1s;

  &:hover {
    transform: rotateZ(120deg);
  }
`;

const Perspective = styled.div``;

export function Thirteen() {
  return (
    <>
      <Perspective>
        <Image src={ImageURL} />
      </Perspective>
    </>
  );
}
