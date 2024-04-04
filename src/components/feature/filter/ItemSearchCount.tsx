
import styled from "styled-components";

const InputBox = styled.div`
  width: 144px;
  color: black;
`;


const Item = styled.p`
  font-size: var(--font-size-primary);
  font-weight: bold;
`;

const ItemCountDropdown = styled.select`
  border-radius: 10px;
  width: 100%;
  height: 41px;
  border-color: #bdbdbd;
  border-style: solid;
  border-width: 2px;
  padding-left: 8px;
  box-shadow: 0px 4px 10px 0px gray;
`;


export default function ItemSearchCount() {
  return (
    <>
       <InputBox>
          <Item>상품 조회 개수</Item>
          <ItemCountDropdown>
            <option value="30">30개씩 보기</option>
            <option value="50">50개씩 보기</option>
            <option value="100">100개씩 보기</option>
          </ItemCountDropdown>
        </InputBox>
    </>
  )
}
