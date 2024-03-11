import Spinner from "react-bootstrap/Spinner";

import styled from "styled-components";

const SpinnerDiv = styled(Spinner)`
  width: 100px;
  height: 100px;
`;

const DivBox = styled.div`
  position: absolute;
left: 0;
right: 0;
margin: auto;
margin-top : 100px;
width: 150px;
`;

const ParentDivBox = styled.div`
position : relative;
`;

export default function SpinnerBox() {
  return (
    <ParentDivBox>
      <DivBox>
        <SpinnerDiv animation="border" />
      </DivBox>
    </ParentDivBox>
  );
}
