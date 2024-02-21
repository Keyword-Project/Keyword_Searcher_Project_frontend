import styled from 'styled-components';

const Input = styled.input`
    margin : 4px;
`



export default function PriceInputBox() {
  return (
    <>
      <div>가격 입력</div>
      <div>
        <Input type="number"></Input>
        <Input type="number"></Input>
      </div>
    </>
  );
}
