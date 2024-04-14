import styled, { keyframes } from "styled-components";

const loadingAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  50%,
  100% {
    transform: translateX(460px);
  }
`;

const SkeletonItem = styled.li`
  display: flex;
  align-items: center;
  margin: 15px 0;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  position: relative;
`;

const SkeletonImg = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #f2f2f2;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 30px;
    height: 100%;
    background: linear-gradient(to right, #f2f2f2, #ddd, #f2f2f2);
    animation: ${loadingAnimation} 2s infinite linear;
  }
`;

const SkeletonInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 10px;
`;

const SkeletonName = styled.p`
  width: 70%;
  height: 18px;
  background: #f2f2f2;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 30px;
    height: 100%;
    background: linear-gradient(to right, #f2f2f2, #ddd, #f2f2f2);
    animation: ${loadingAnimation} 2s infinite linear;
  }
`;

const SkeletonEmail = styled.p`
  width: 85%;
  height: 18px;
  background: #f2f2f2;
  margin-top: 3px;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 30px;
    height: 100%;
    background: linear-gradient(to right, #f2f2f2, #ddd, #f2f2f2);
    animation: ${loadingAnimation} 2s infinite linear;
  }
`;
export default function SpinnerBox() {
  return (
    <SkeletonItem>
      <SkeletonImg />
      <SkeletonInfo>
        <SkeletonName />
        <SkeletonEmail />
      </SkeletonInfo>
    </SkeletonItem>
  );
}
