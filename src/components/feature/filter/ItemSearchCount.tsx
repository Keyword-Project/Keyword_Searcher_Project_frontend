import SearchDropdown from "components/feature/filter/SearchDropdown";
import styled from "styled-components";
import { ItemSearchCountProps } from "type/itemSearchCount";
import { useState } from "react";
import Tooltip from "components/common/Tooltip";

const InputBox = styled.div`
  width: 300px;
  color: black;
`;

const SearchCountField = styled.div`
  display: flex;
`;

const StyledInput = styled.input`
  border-radius: 10px;
  padding-left: 0.625rem;
  width: 8rem;
  margin-right: 0.125rem;
  outline: none;
  height: 2.5rem;
  border: 2px solid var(--Gray500);
  &:focus {
    border: 2px solid var(--Orange500);
    background-color: var(--Gray200);
  }
  &:hover {
    background-color: var(--Gray200);
  }
`;

const Item = styled.p`
  font-size: var(--font-size-primary);
  font-weight: bold;
  margin-right: 0.375rem;
  margin-bottom: 1rem;
`;

const CountItemTitleField = styled.div`
display : flex;
`

export default function ItemSearchCount({
  isFetching,
  setSearchSize,
}: ItemSearchCountProps) {
  const [domain, setDomain] = useState("");
  const [isInputDisable, setIsInputDisable] = useState(false);

  const searchSizeChangeByInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDomain(e.target.value);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setSearchSize((prev) => prev = domain);

    console.log("input 입력 시 domain", domain);
  };
  return (
    <>
      <InputBox>
        <CountItemTitleField>
          <Item>조회 개수</Item>
         <Tooltip content="개수를 선택하면 해당 개수만큼 키워드가 조회됩니다. 설정하지 않으면 30개의 키워드가 조회됩니다."/>
        </CountItemTitleField>
        <SearchCountField>
          <StyledInput
            disabled={isInputDisable}
            value={domain}
            placeholder="상품 조회 개수"
            onChange={searchSizeChangeByInput}
            onKeyUp={(e) =>
              (e.currentTarget.value = e.currentTarget.value.replace(
                /[^0-9]/g,
                ""
              ))
            }
          ></StyledInput>
          <SearchDropdown
            setSearchSize={setSearchSize}
            isFetching={isFetching}
            setIsInputDisable={setIsInputDisable}
            domain={domain}
            setDomain={setDomain}
          />
        </SearchCountField>

      
      </InputBox>
    </>
  );
}
