import styled from "styled-components";
import { useDispatch } from "react-redux";
import { pathNameFetch } from "components/feature/FetchSlice";
import React from "react";

const InputDivBox = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 40px;
  width: 50%;
  height: 100%;
`;

const Input = styled.input`
  border-radius: 10px;
  width: 300px;
  height: 40px;
  padding-left: 15px;
  margin: 10px 0px 40px 0px;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export default function KeywordInput() {
  const keywordNameChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    dispatch(pathNameFetch(e.target.value));
  };
  const dispatch = useDispatch();

  return (
    <InputDivBox>
      <Input
        placeholder="키워드"
        onChange={keywordNameChange}
      />
    </InputDivBox>
  );
}
