import styled from "styled-components";
import CustomCalendar from "./CustomCalendar";
import PriceRange from "./PriceRange";
import ItemSearchCount from "./ItemSearchCount";


const FilterBox = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #f5f8fb;
  padding-top: 40px;
  width: 100%;
`;


const InquiryButton = styled.button`
  border-radius: 10px;
  color: white;
  font-size: 15px;
  margin-top: 40px;
  padding: 0px 10px;
  width: 100px;
  font-weight: bold;
  height: 41px;
  border: none;
  background-color: var(--Gray700);
`;



export default function FiterBox() {
  return (
    <FilterBox>
          <CustomCalendar />
        <ItemSearchCount isFetching={isFetching} />
        <PriceRange
          minPrice={minPrice}
          setMinPrice={setMinPrice}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
          isFetching={isFetching}
        />

        <InquiryButton
          disabled={isFetching}
          onClick={() => {
            handleSearch();
            navigate(queryURL);
          }}
        >
          {isFetching ? "검색 중.." : "상품조회"}
        </InquiryButton>
    </FilterBox>
  )
}
