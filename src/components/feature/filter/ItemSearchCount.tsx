
import Dropdown from "components/common/Dropdown";
import styled from "styled-components";
import { NotEnterdDescription } from "./PriceRange";
const InputBox = styled.div`
  width: 144px;
  color: black;
`;


const Item = styled.p`
  font-size: var(--font-size-primary);
  font-weight: bold;
`;

// const ItemCountDropdown = styled.select`
//   border-radius: 10px;
//   width: 100%;
//   height: 41px;
//   border-color: #bdbdbd;
//   border-style: solid;
//   border-width: 2px;
//   padding-left: 8px;
//   box-shadow: 0px 4px 10px 0px gray;
// `;


export default function ItemSearchCount({ isFetching }) {
  const dropdownList = ['30개씩 보기', '50개씩 보기','100개씩 보기',]
  return (
    <>
       <InputBox>
          <Item>상품 조회 개수</Item>
          <Dropdown List={dropdownList} isFetching={isFetching} />
        <NotEnterdDescription>미입력 시 30개의 상품이 조회됩니다.</NotEnterdDescription>
        </InputBox>
    </>
  )
}
