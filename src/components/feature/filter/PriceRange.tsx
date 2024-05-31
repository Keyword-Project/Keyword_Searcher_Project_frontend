import styled from "styled-components";
import Tooltip from "components/common/Tooltip";
import { useForm } from "react-hook-form";
import media from "styles/media";
interface FormValues {
  a: number;
  b: number;
}

const PriceContainer = styled.div`
  width: 250px;
  ${media.tablet`
margin-bottom : 2rem;
  `}
  ${media.mobile`
margin-bottom : 2rem;
  `}
`;
export const NotEnterdDescription = styled.p`
  color: var(--Gray500);
  font-size: var(--font-size-small);
`;

const ErrorMessage = styled.p`
  margin-top: 0.25rem;
  margin-left: 0.1rem;
  color: red;
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
  width: 7.25rem;
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
  box-shadow: 0px 4px 10px 0px rgba(34, 39, 47, 0.1);
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
  setMinPrice,
  setMaxPrice,
  isFetching,
}: {
  setMinPrice: React.Dispatch<React.SetStateAction<number>>;

  setMaxPrice: React.Dispatch<React.SetStateAction<number>>;
  isFetching: boolean;
}) {
  const { register, watch } = useForm<FormValues>();

  const a: number = watch("a");
  const b: number = watch("b");


  return (
    <>
      <PriceContainer>
        <InputTitleField>
          <InputTitle>상품 가격</InputTitle>
          <Tooltip content="가격을 입력하면 해당 범위 내 키워드가 조회됩니다.최소 가격을 설정하지 않으면 10000원부터 조회됩니다." />
        </InputTitleField>
        <Input
          id="a"
          type="text"
          {...register("a")}
          placeholder="최소 가격"
          disabled={isFetching}
          onKeyUp={(e) => {
            e.currentTarget.value = e.currentTarget.value.replace(
              /[^0-9]/g,
              ""
            );
            setMinPrice(a);
          }}
        ></Input>
        <span> - </span>
        <Input
          id="b"
          type="text"
          {...register('b')}
          placeholder="최대 가격"
          disabled={isFetching}
          onKeyUp={(e) => {
            e.currentTarget.value = e.currentTarget.value.replace(
              /[^0-9]/g,
              ""
            );
            setMaxPrice(b);
          }}

        ></Input>
        
        {!Number(a) && Number(b) && Number(b) < 10000 ? (
          <ErrorMessage>
            최소가격 미 입력시 <br />
            최대가격이 10000보다 커야 합니다.
          </ErrorMessage>
        ) : Number(a) && !Number(b) ? undefined : Number(a) &&
          Number(a) > Number(b) ? (
          <ErrorMessage>최소가격이 최대가격보다 커야 합니다.</ErrorMessage>
        ) : undefined}
      </PriceContainer>
    </>
  );
}
