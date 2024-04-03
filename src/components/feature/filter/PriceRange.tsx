import styled from "styled-components";

const PriceContainer = styled.div`
  width: 226px;
`;

const InputTitle = styled.p`
  font-size: 16px;
  font-weight: bold;
`;

const Input = styled.input`
  border-radius: 10px;
  width: 97px;
  height: 41px;
  border-color: #bdbdbd;
  border-style: solid;
  border-width: 2px;
  padding-left: 8px;
  font-weight: 500;
  font-size: 16px;
  box-shadow: 0px 4px 10px 0px gray;
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
        <InputTitle>상품 가격</InputTitle>
        <Input
          type="dropdown"
          name="minPrice"
          value={minPrice}
          onChange={minPriceChange}
          placeholder="최소 가격"
        ></Input>
        <span> - </span>
        <Input
          type="number"
          name="maxPrice"
          value={maxPrice}
          onChange={maxPriceChange}
          placeholder="최대 가격"
        ></Input>
      </PriceContainer>
    </>
  );
}
