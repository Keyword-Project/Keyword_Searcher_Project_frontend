import styled from "styled-components";

const PortalDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: rgba(100, 100, 111, 0.3) 0px 7px 29px 0px;
  background-color: white;
  border: 2px solid rgb(240, 240, 240);
  border-radius: 12px;
  position: absolute;
  width: 250px;
  top: 70px;
  left: calc(50% - 125px);
  bottom: 70px;
`;

export default function ModalContent({
  onClose,
  errorMessage,
}: {
  onClose: () => void;
  errorMessage: string;
}) {
  return (
    <PortalDiv>
      <div>{errorMessage}</div>
      <button onClick={onClose}>닫기</button>
    </PortalDiv>
  );
}
