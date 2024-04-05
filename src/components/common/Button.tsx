import styled from "styled-components";
import Hamburger from "assets/icons/hamburger.svg?react";

const ButtonContainer = styled.div`
  display: inline-flex;
  height: 2.5625rem;
  padding: 0.5rem 0.875rem 0.625rem 0.875rem;
  justify-content: center;
  align-items: center;
  gap: 0.375rem;
  flex-shrink: 0;
  background-color: ${(props) => props.BackGroundColor};
  border-radius: 0.625rem;
border: 1.5px solid ${(props) => props.borderColor};

/* ButtonShadow1 */
box-shadow: 0px 4px 10px 0px rgba(34, 39, 47, 0.10);
`;

const ButtonTitle = styled.span`
  font-weight: 500;
  font-size: var(--font-size-primary);
  color: ${(props) => props.color};
  margin-left: 6px;
`;

export default function Button({ ...props }) {
  return (
    <>
      <ButtonContainer BackGroundColor={props.BackGroundColor} borderColor={props.borderColor}>
        <Hamburger width="18" height="18" />
        <ButtonTitle color={props.color}>{props.title}</ButtonTitle>
      </ButtonContainer>
    </>
  );
}
