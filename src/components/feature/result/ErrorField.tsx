import styled from "styled-components";
import Error_triangle from "assets/icons/error_triangle.svg?react";
const ErrorContainer = styled.div`
  width: 100%;
  height: 28.125rem;
  display: flex;
  flex-direction: column;
  border-radius: 2rem;
  background-color: white;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  padding: 0px 10px;
  border-radius: 9px;
  font-size: 1rem;
  color: #eaeaea;
  font-weight: bold;
  background-color: var(--Orange500);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.5);
  border: none;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  --a: initial;
  width: 15%;
  height: 41px;
`;
const ErrorTitle = styled.h1`
  margin-bottom: 1rem;
  font-weight: bold;
  margin-top: 4rem;
`;

const ErrorMessage = styled.p`
  margin-bottom: 2rem;
`;

const ErrorField = ({
  resetErrorBoundary,
  setResultVisible,
}: {
  resetErrorBoundary: () => void;
  setResultVisible: (visible: boolean) => void;
}) => {
  const handleClose = () => {
    resetErrorBoundary();
    setResultVisible(false);
  };

  return (
    <ErrorContainer>
      <Error_triangle width="5rem" height="5rem" />
      <ErrorTitle>서비스 에러가 발생했습니다.</ErrorTitle>
      <ErrorMessage>잠시 후 다시 시도해보세요.</ErrorMessage>
      <Button onClick={handleClose}>돌아가기</Button>
    </ErrorContainer>
  );
};

export default ErrorField;
