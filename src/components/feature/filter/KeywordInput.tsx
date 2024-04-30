import styled from "styled-components";
import { useDispatch } from "react-redux";
import { pathNameFetch } from "lib/FetchSlice";
import React, { useCallback } from "react";
import Magnifier from "assets/icons/magnifier.svg?react";
import { debounce } from "lodash";

const InputDiv = styled.div`
  position: relative;
  height: 41px;
  width: 690px;
`;

const StyledMagnifier = styled(Magnifier)`
  position: absolute;
  top: 10px;
  right: 12px;
  & :hover {
    cursor: pointer;
  }
`;

const Input = styled.input`
  border-radius: 10px;
  width: 100%;
  height: 41px;
  border-width: 2px;
  padding: 8px 16px 10px 14px;
  padding-left: 15px;
  border-color: var(--Orange500);

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export default function KeywordInput() {
  const dispatch = useDispatch();

  const debouncedKeywordNameChange = useCallback(
    debounce((value: string) => {
      dispatch(pathNameFetch(value));
      console.log("디바운스 적용");
    }, 300), // Debounce delay set to 300 milliseconds
    []
  );

  const keywordNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    debouncedKeywordNameChange(value);
  };

  return (
    <>
      <InputDiv>
        <Input
          placeholder="검색할 상품/키워드를 입력해주세요."
          onChange={keywordNameChange}
        />
        <StyledMagnifier width="22" height="22" />
      </InputDiv>
    </>
  );
}
