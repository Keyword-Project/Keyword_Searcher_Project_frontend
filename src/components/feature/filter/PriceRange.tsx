import styled from "styled-components";

const PriceContainer = styled.div`
  width: 226px;
`;

const InputTitle = styled.p`
  font-size: var(--font-size-primary);
  font-weight: bold;
`;

const Input = styled.input`
  border-radius: 10px;
  width: 97px;
  height: 41px;
  border: 2px solid var(--Gray500);
  padding-left: 8px;
  font-weight: 500;
  font-size: var(--font-size-primary);
  box-shadow: 0px 4px 10px 0px rgba(34, 39, 47, 0.1);
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export default function PriceRange({
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  isFetching,
}) {
  const maxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;

    inputValue = inputValue.replace(/[^0-9]/g, "");

    setMaxPrice(inputValue);
  };
  const minPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;

    inputValue = inputValue.replace(/[^0-9]/g, "");

    setMinPrice(inputValue);
  };

  return (
    <>
      <PriceContainer>
        <InputTitle>상품 가격</InputTitle>
        <Input
          type="text"
          name="minPrice"
          value={minPrice}
          onChange={minPriceChange}
          placeholder="최소 가격"
          disabled={isFetching}
          maxLength={12}
          onKeyUp="this.value=this.value.replace(/[^0-9]/g,'')"
        ></Input>
        <span> - </span>
        <Input
          type="text"
          onKeyUp="this.value=this.value.replace(/[^0-9]/g,'')"
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
