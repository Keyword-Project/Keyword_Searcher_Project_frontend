import ItemSearchSizeWrap from "components/feature/filter/subFilter/ItemSearchSizeWrap";
import PriceRange from "components/feature/filter/subFilter/PriceRange";
import CustomCalendarWrap from "components/feature/filter/subFilter/CustomCalendarWrap";
import media from "styles/media";
import { styled } from "styled-components";
import { SubFilterProps } from "type/subFilter";

const FilterBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 3rem;
  width: 100%;
  ${media.mobile`  
    display: flex;
    flex-direction: column;
    gap: 2rem;
  `}
  flex-wrap: wrap;
  gap: 2rem;
`;

export default function SubFilterField({
  setMinPrice,
  setMaxPrice,
  setSearchSize,
}: SubFilterProps ) {
  return (
    <FilterBox>
      <CustomCalendarWrap />
      <ItemSearchSizeWrap setSearchSize={setSearchSize} />
      <PriceRange setMinPrice={setMinPrice} setMaxPrice={setMaxPrice} />
    </FilterBox>
  );
}
