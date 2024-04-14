import styled from "styled-components";
import Feature_Search from "assets/icons/feature_search.svg?react";

const InitialResultContainer = styled.div`
  width: 100%;
  height: 28.125rem;
  display: flex;
background-color: white;
  justify-content: center;
  align-items: center;
`;
const InitialResultChild = styled.div`
  flex-direction : column;
  display: flex;
  justify-content: center;
  align-items: center;

`;

const StyledFeature_Search = styled(Feature_Search)``;

const InitialResultDescription = styled.p`
margin-bottom: 0px;
  text-align: center;
  color: var(--Gray700);
  font-size: var(--font-size-primary);
  font-weight: bold;
`;

export default function InitialResult() {
  return (
    <>
      <InitialResultContainer>
        <InitialResultChild>
          <StyledFeature_Search width="10rem" height="10rem" />
          <InitialResultDescription>
            상품을 검색해주세요.
          </InitialResultDescription>
          <InitialResultDescription>
            카테고리 또는 검색어를 직접 입력하실 수 있습니다.
          </InitialResultDescription>
        </InitialResultChild>
      </InitialResultContainer>
    </>
  );
}
