import styled, { keyframes } from "styled-components";

const loadingAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  50%,
  100% {
    transform: translateX(800px);
  }
`;

const SkeletonItem = styled.li`
  display: flex;
  border-radius: 2rem;
  height: 28.125rem;
  align-items: center;
   background-color: white;
  margin-top: 15px;
  margin-bottom: 40px;
  padding: 20px;
  border: 1px solid #ccc;
  position: relative;
`;

const SkeletonInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0px 70px;
`;

const SkeletonRow = styled.p`
  width: 100%;
  height: 50px;
  background: #f2f2f2;
  margin-top: 10px;
  border-radius: 2rem;
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
    animation: ${loadingAnimation} 2.5s infinite linear;
  }
`;
export default function SkeletonContainer() {
  return (
    <SkeletonItem>
      <SkeletonInfo>
        <SkeletonRow />
        <SkeletonRow />
        <SkeletonRow />
        <SkeletonRow />
      </SkeletonInfo>
    </SkeletonItem>
  );
}
