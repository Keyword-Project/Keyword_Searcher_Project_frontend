import styled from "styled-components";
import Tooltip from "components/common/Tooltip";
import SearchDropdown from "./SearchDropdown";
import { ItemSearchSizeProps } from "type/itemSearchSize";

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

export default function ItemSearchSize({isInputDisable, domain, setDomain, setSearchSize, searchSizeChangeByInput, setIsInputDisable}: ItemSearchSizeProps) {
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
            setIsInputDisable={setIsInputDisable}
            domain={domain}
            setDomain={setDomain}
          />
        </SearchCountField>
      </InputBox>
    </>
  )
}
