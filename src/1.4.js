import styled from "styled-components";

export const TransitionMultiplePropertiesTogether = styled.button`
  height: 90px;
  width: 290px;
  font-size: 28px;
  color: white;
  border: none;
  background-color: blue;
  transition-property: background-color color width; /* alternatively we can use all */
  transition-duration: 1s;

  &:hover {
    background-color: green;
    color: black;
    width: 600px;
  }
`;

export const TransitionMultiplePropertiesInSequence = styled.button`
  height: 90px;
  width: 290px;
  font-size: 28px;
  color: white;
  border: none;
  background-color: blue;
  transition: background-color 3s ease-in-out 1s, color 2s ease 4s,
    border-radius 4s ease-out 6s;

  &:hover {
    background-color: green;
    color: black;
    border-radius: 50%;
  }
`;

export function OneFour() {
  return (
    <>
      <TransitionMultiplePropertiesInSequence>
        Transitions in sequence
      </TransitionMultiplePropertiesInSequence>

      <br />

      <TransitionMultiplePropertiesTogether>
        Transition over multiple properties
      </TransitionMultiplePropertiesTogether>
    </>
  );
}
