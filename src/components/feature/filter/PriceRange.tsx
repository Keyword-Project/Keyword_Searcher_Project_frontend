import styled from "styled-components";
import Tooltip from "components/common/Tooltip";

const PriceContainer = styled.div`
  width: 250px;
`;
export const NotEnterdDescription = styled.p`
  color: var(--Gray500);
  font-size: var(--font-size-small);
`;

const InputTitle = styled.p`
  font-size: var(--font-size-primary);
  font-weight: bold;
  margin-right: 0.375rem;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  border-radius: 10px;
  width: 6rem;
  outline: none;
  height: 2.5rem;
  border: 2px solid var(--Gray500);
  padding-left: 0.625rem;
  &:focus {
    border: 2px solid var(--Orange500);
    background-color: var(--Gray200);
  }
  &:hover {
    background-color: var(--Gray200);
  }
  font-weight: 500;
  font-size: var(--font-size-primary);

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
const InputTitleField = styled.div`
  display: flex;
`;

export default function PriceRange({
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  isFetching,
}: {
  minPrice: string;
  setMinPrice: React.Dispatch<React.SetStateAction<string>>;
  maxPrice: string;
  setMaxPrice: React.Dispatch<React.SetStateAction<string>>;
  isFetching: boolean;
}) {
  const maxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(e.target.value);
  };
  const minPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMinPrice(e.target.value);
  };

  return (
    <>
      <PriceContainer>
        <InputTitleField>
          <InputTitle>상품 가격</InputTitle>
          <Tooltip content="가격을 입력하면 해당 범위 내 키워드가 조회됩니다. 최소 가격을 설정하지 않으면 10000원부터 조회됩니다." />
        </InputTitleField>
        <Input
          type="text"
          name="minPrice"
          value={minPrice}
          onChange={minPriceChange}
          placeholder="최소 가격"
          disabled={isFetching}
          maxLength={12}
          onKeyUp={(e) =>
            (e.currentTarget.value = e.currentTarget.value.replace(
              /[^0-9]/g,
              ""
            ))
          }
        ></Input>
        <span> - </span>
        <Input
          type="text"
          onKeyUp={(e) =>
            (e.currentTarget.value = e.currentTarget.value.replace(
              /[^0-9]/g,
              ""
            ))
          }
          name="maxPrice"
          maxLength={12}
          value={maxPrice}
          onChange={maxPriceChange}
          placeholder="최대 가격"
          disabled={isFetching}
        ></Input>
      </PriceContainer>
    </>
  );
}
