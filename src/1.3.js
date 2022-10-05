import styled from "styled-components";

export const Move = styled.div`
  margin: 2em;
  width: 150px;
  height: 50px;
  padding: 10px 15px;
  background-color: red;
  color: #fff;
  line-height: 50px;
  text-align: center;
  border-radius: 0.5em;
  font-size: 20px;
  transition-property: translate();
  transition-duration: 3s;

  &:hover {
    transform: translateX(600px);
  }
`;

export const Ease = styled(Move)`
  transition-timing-function: ease;
`;
export const Linear = styled(Move)`
  transition-timing-function: linear;
`;
export const EaseIn = styled(Move)`
  transition-timing-function: ease-in;
`;
export const EaseOut = styled(Move)`
  transition-timing-function: ease-out;
`;
export const EaseInOut = styled(Move)`
  transition-timing-function: ease-in-out;
`;

const OneTwo = styled.button`
  height: 90px;
  width: 290px;
  font-size: 28px;
  color: white;
  border: none;
  background-color: blue;
  transition-property: background-color;
  transition-duration: 1s;
  transition-delay: 2s;

  &:hover {
    background-color: green;
  }
`;

export function OneThree() {
  return (
    <>
      <OneTwo>Transition with dealy</OneTwo>
      <Ease>Ease (default)</Ease>
      <Linear>Linear</Linear>
      <EaseIn>Ease-In</EaseIn>
      <EaseOut>Ease-Out</EaseOut>
      <EaseInOut>Ease-In-Out</EaseInOut>
    </>
  );
}
