import { useLocation } from "react-router-dom";
import styled from "styled-components";
import media from "styles/media";
import { CategoryBadgeProps } from "type/CategoryBadge";

const SelectedCategoryBadge = styled.span`
  font-size: var(--font-size-primary);
  font-weight: bold;
  padding-bottom: 1rem;
`;
const SearchResultWord = styled.p`
  font-size: var(--font-size-medium);
  font-weight: bold;
  ${media.mobile`
margin-top: 1rem;
  `}
`;



export default function CategoryBadge({selectedCategoryId, clickedFirstCategory, clickedSecondCategory, clickedThirdCategory}: CategoryBadgeProps) {

    const { pathname } = useLocation();
  return (
    <div>
       <SearchResultWord>상품 검색 결과</SearchResultWord>
       {selectedCategoryId == pathname.split("/")[2] && (
        <div>
          {clickedFirstCategory && (
            <SelectedCategoryBadge>{clickedFirstCategory}</SelectedCategoryBadge>
          )}
          {clickedSecondCategory && (
            <SelectedCategoryBadge>
              {" "}
              {">"} {clickedSecondCategory}
            </SelectedCategoryBadge>
          )}
          {clickedThirdCategory && (
            <SelectedCategoryBadge>
              {" "}
              {">"} {clickedThirdCategory}
            </SelectedCategoryBadge>
          )}
        </div>
      )}
    </div>
  )
}
