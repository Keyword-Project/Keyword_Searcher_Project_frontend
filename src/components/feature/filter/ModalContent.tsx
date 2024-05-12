import styled, { keyframes } from "styled-components";
import ErrorIcon from "assets/icons/error.svg?react";

const OverlayFadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 0.4;
  }
`;
const PortalDivFadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const ModalTitle = styled.p`
  font-size: 1.5rem;
  margin-top: 1rem;
  font-weight: bold;
`;
const ModalContext = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: var(--Gray800);
`;
const ModalButton = styled.button`
  width: 100%;
  border-radius: 0.625rem;
  background-color: var(--Orange500);
  color: white;
  padding: 1rem;
  border: none;
  font-weight: bold;
  cursor: pointer;
`;

const PortalDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  box-shadow: rgba(100, 100, 111, 0.3) 0px 7px 29px 0px;
  background-color: white;
  border: 2px solid rgb(240, 240, 240);
  border-radius: 1rem;
  position: fixed;
  width: 25rem;
  height: 15rem;
  top: 35%;
  opacity: 1;
  animation: ${PortalDivFadeIn} 0.5s ease-out forwards;
  z-index: 10;
  left: calc(50% - 12.5rem);
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: black;
  opacity: 0.4;
  animation: ${OverlayFadeIn} 0.5s ease-out forwards;
  z-index: 3;
`;

export default function ModalContent({
  onClose,
  errorMessage,
}: {
  onClose: () => void;
  errorMessage: string;
}) {
  return (
    <>
      <Overlay onClick={onClose}></Overlay>
      <PortalDiv>
        <ErrorIcon width="3rem" height="3rem" />
        <ModalTitle>알림</ModalTitle>
        <ModalContext>{errorMessage}</ModalContext>
        <ModalButton onClick={onClose}>닫기</ModalButton>
      </PortalDiv>
    </>
  );
}
