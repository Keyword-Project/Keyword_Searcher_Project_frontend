import styled from "styled-components";
import Hamburger from "assets/icons/hamburger.svg?react";

const ButtonDiv = styled.div`
  width: 101px;
  height: 41px;
  border-radius: 10px;
  padding: 8px 8px 10px 11px;
  background-color: #ff782b;

  span {
    font-weight: 500;
    font-size: 14px;
    color: white;
    margin-left: 6px;
  }
`;

export default function Button(props) {
  return (
    <>
      <ButtonDiv>
        <Hamburger width="18" height="18" />
        <span>{props.title}</span>
      </ButtonDiv>
    </>
  );
}
