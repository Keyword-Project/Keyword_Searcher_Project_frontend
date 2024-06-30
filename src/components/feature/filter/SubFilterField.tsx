import ItemSearchCount from "components/feature/filter/ItemSearchCount";
import PriceRange from "components/feature/filter/PriceRange";
import CustomCalendar from "components/feature/filter/CustomCalendar";
import media from "styles/media";
import { styled } from "styled-components";

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
}: {
  setMinPrice: React.Dispatch<React.SetStateAction<string | number>>;
  setMaxPrice: React.Dispatch<React.SetStateAction<string | number>>;
  setSearchSize: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <FilterBox>
      <CustomCalendar />
      <ItemSearchCount setSearchSize={setSearchSize} />
      <PriceRange setMinPrice={setMinPrice} setMaxPrice={setMaxPrice} />
    </FilterBox>
  );
}
