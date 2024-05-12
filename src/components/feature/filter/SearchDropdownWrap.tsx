import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { DropdownWrapProps } from "type/dropdown";

// 애니메이션 정의
const slideFadeInAnimation = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
`;

const slideFadeOutAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100%);
  }
`;

export const DropdownContainer = styled.article<{ visibility: boolean }>`
  overflow: hidden;
  & > ul {
    animation: ${(props) =>
        props.visibility ? slideFadeInAnimation : slideFadeOutAnimation}
      0.4s ease;
    animation-fill-mode: forwards;
  }
`;

export const DropdownList = styled.ul`
  position: relative;
  top: 0.1px;
  margin-top: 0;
  margin-bottom: 5px;
  padding-left: 0;
  list-style-type: none;
`;

const SearchDropdownWrap = ({ visibility, children }: DropdownWrapProps) => {
  const [repeat, setRepeat] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (visibility) {
      if (repeat !== undefined) {
        clearTimeout(repeat);
      }
      setRepeat(undefined);
    } else {
      setRepeat(setTimeout(() => {}, 400) as unknown as number);
    }
  }, [visibility]);

  return (
    <div>
      <DropdownContainer visibility={visibility}>
        <DropdownList>{children}</DropdownList>
      </DropdownContainer>
    </div>
  );
};

export default SearchDropdownWrap;
