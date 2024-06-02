import styled from "styled-components";
import { useDispatch } from "react-redux";
import { pathNameFetch } from "lib/FetchSlice";
import { useEffect, useRef } from "react";
import Magnifier from "assets/icons/magnifier.svg?react";
import media from "styles/media";





const InputDiv = styled.div`
  position: relative;
  height: 41px;
  width: 85%;
  ${media.mobile`
  width: 100%;
  height: 31px;
  `}
`;

const StyledMagnifier = styled(Magnifier)`
  position: absolute;
  top: 10px;
  right: 10.5rem;
  ${media.mobile`
  right: 1rem;
  `}
  ${media.tablet`
  right:7.5rem;
  `}
`;

const Input = styled.input`
  border-radius: 1rem;
  width: 80%;
  height: 2.5rem;
  outline: none;
  border: 2px solid var(--Gray500);
  padding: 8px 16px 10px 15px;
  &:focus {
    border: 2px solid var(--Orange500);
    background-color: var(--Gray200);
  }
  &:hover {
    background-color: var(--Gray200);
  }
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ${media.mobile`
  width: 100%;
  &::placeholder {
   font-size: var(--font-size-small)
  }
  `}
`;

export default function KeywordInput() {
  const dispatch = useDispatch();
  const keywordRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    keywordRef.current?.focus();
  }, []);

  const keywordNameChange = () => {
    dispatch(pathNameFetch(keywordRef.current?.value || ""));
  };

  return (
    <>
     
      <InputDiv>
        <Input
          ref={keywordRef}
          placeholder="검색할 상품/키워드를 입력해주세요."
          onBlur={keywordNameChange}
        />
        <StyledMagnifier width="22" height="22" />
      </InputDiv>
    </>
  );
}
