import styled from "styled-components";
import { ImageURL } from "./constants";

const ImageRotate = styled.img`
  width: 300px;
  display: block;
  margin: auto;
  margin-top: 20px;
  transition: transform 2s;

  &:hover {
    transform: rotate(30deg);
  }
`;

const TopLeft = styled(ImageRotate)`
  transform-origin: top right;
`;

export function TwoEleven() {
  return (
    <>
      <ImageRotate src={ImageURL} />
      <TopLeft src={ImageURL} />
    </>
  );
}
