import styled from "styled-components";

const PortalDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(100, 100, 111, 0.3) 0px 7px 29px 0px;
  background-color: white;
  border: 2px solid rgb(240, 240, 240);
  border-radius: 12px;
  position: absolute;
  width: 300px;
  height: 200px;
  top: 35%;
  z-index: 10;
  left: calc(50% - 125px);
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: black;
  opacity: 0.4;
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
      <Overlay onClick={onClose}> </Overlay>
      <PortalDiv>
        <div>{errorMessage}</div>
        <button onClick={onClose}>닫기</button>
      </PortalDiv>
    </>
  );
}
