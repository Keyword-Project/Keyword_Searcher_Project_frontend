import { useEffect, useState } from "react";
import CustomCalendar from "components/feature/filter/CustomCalendar";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Result from "components/feature/result/Result";
import { useLocation, Outlet } from "react-router-dom";
import { RootState } from "main";
import ItemSearchCount from "components/feature/filter/ItemSearchCount";
import PriceRange from "components/feature/filter/PriceRange";
import EmptyResult from "components/feature/result/EmptyResult";
import { createPortal } from "react-dom";
import ModalContent from "components/feature/filter/ModalContent";
import SearchButton from "components/feature/filter/SearchButton";
import { useNavigate } from "react-router-dom";
import media from "styles/media";
import { useQueryErrorResetBoundary } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import ErrorField from "components/feature/result/ErrorField";

const ButtonNSearchField = styled.div`
  display: flex;
  justify-content: space-between;
  ${media.mobile`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  `}
`;

const SearchResultWord = styled.p`
  font-size: var(--font-size-medium);
  font-weight: bold;
  ${media.mobile`
margin-top: 1rem;
  `}
`;

const SelectedCategory = styled.span`
  font-size: var(--font-size-primary);
  font-weight: bold;
  padding-bottom: 1rem;
`;

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

export default function SearchPage() {
  const [resultVisible, setResultVisible] = useState(false);
  const [maxPrice, setMaxPrice] = useState<string | number>("");
  const [minPrice, setMinPrice] = useState<string | number>("");
  const [searchSize, setSearchSize] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [clickedFirstCategory, setClickedFirstCategory] = useState(null);
  const [clickedSecondCategory, setClickedSecondCategory] = useState(null);
  const [clickedThirdCategory, setClickedThirdCategory] = useState(null);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  const url = new URL(window.location.href);
  const queryString = url.search;
  console.log(queryString);

  const { pathname } = useLocation();
  useEffect(() => {
    if (queryString) {
      setResultVisible(true);
      console.log(resultVisible);
    }
  }, [queryString]);

  const { reset } = useQueryErrorResetBoundary();

  useEffect(() => {
    if (!queryString) {
      setResultVisible(false);
    }
  }, [pathname]);

  const { startDate, los } = useSelector(
    (state: RootState) => state.queryString.date
  );

  const keywordInputValue = useSelector(
    (state: RootState) => state.queryString.pathName
  );

  const navigate = useNavigate();

  const newSearchParams = new URLSearchParams();

  const setQuery = () => {
    if (startDate) newSearchParams.set("startdt", startDate);
    if (los) newSearchParams.set("los", los.toString());
    if (minPrice) newSearchParams.set("minPrice", minPrice.toString());
    if (maxPrice) newSearchParams.set("maxPrice", maxPrice.toString());
    if (searchSize) newSearchParams.set("searchSize", searchSize.toString());
    if (!minPrice) newSearchParams.delete("minPrice");
    if (!maxPrice) newSearchParams.delete("maxPrice");
    if (!searchSize) newSearchParams.delete("searchSize");
    if (!startDate) newSearchParams.delete("startdt");
    if (!los) newSearchParams.delete("los");
  };

  const fetchHandler = () => {
    if (pathname == "/categories") {
      setShowModal(true);
      setErrorMessage("카테고리 목록을 선택해주세요.");
    } else if (/^\/categories\/\d+$/.test(pathname)) {
      if (Number(maxPrice) != 0 && Number(maxPrice) < Number(minPrice)) {
        setShowModal(true);
        setErrorMessage("최대가격이 최소가격보다 커야합니다.");
      } else if (!Number(minPrice) && Number(maxPrice)) {
        if (Number(maxPrice) < 10000) {
          setShowModal(true);
          setErrorMessage(
            "최소가격 미 입력 시\n최대가격이 10000보다 커야합니다."
          );
        }
      } else {
        setQuery();
        const updatedPathname = `${pathname}?${newSearchParams.toString()}`;
        navigate(updatedPathname);
        setResultVisible(true);
      }
    }

    if (pathname == "/keyword") {
      if (keywordInputValue === "") {
        setShowModal(true);
        setErrorMessage("키워드를 입력해주세요.");
      } else {
        if (Number(maxPrice) != 0 && Number(maxPrice) < Number(minPrice)) {
          setShowModal(true);
          setErrorMessage("최대가격이 최소가격보다 커야합니다.");
        } else if (!Number(minPrice) && Number(maxPrice)) {
          if (Number(maxPrice) < 10000) {
            setShowModal(true);
            setErrorMessage(
              "최소가격 미 입력 시\n최대가격이 10000보다 커야합니다."
            );
          }
        } else {
          setQuery();

          const updatedPathname = `keyword?q=${keywordInputValue}&${newSearchParams.toString()}`;
          navigate(updatedPathname);
          setResultVisible(true);
        }
      }
    }
  };

  return (
    <>
      <ButtonNSearchField>
        <Outlet
          context={{
            setClickedFirstCategory,
            setClickedSecondCategory,
            setClickedThirdCategory,
            setSelectedCategoryId,
          }}
        />
        <SearchButton fetchHandler={fetchHandler} />
      </ButtonNSearchField>
      <FilterBox>
        <CustomCalendar />
        <ItemSearchCount setSearchSize={setSearchSize} />
        <PriceRange setMinPrice={setMinPrice} setMaxPrice={setMaxPrice} />
      </FilterBox>

      {showModal &&
        createPortal(
          <ModalContent
            onClose={() => setShowModal(false)}
            errorMessage={errorMessage}
          />,
          document.body
        )}
      <SearchResultWord>상품 검색 결과</SearchResultWord>
      {selectedCategoryId == pathname.split("/")[2] && (
        <div>
          {clickedFirstCategory && (
            <SelectedCategory>{clickedFirstCategory}</SelectedCategory>
          )}
          {clickedSecondCategory && (
            <SelectedCategory>
              {" "}
              {">"} {clickedSecondCategory}
            </SelectedCategory>
          )}
          {clickedThirdCategory && (
            <SelectedCategory>
              {" "}
              {">"} {clickedThirdCategory}
            </SelectedCategory>
          )}
        </div>
      )}
      {resultVisible ? (
        <ErrorBoundary
          onReset={() => {
            reset();
          }}
          FallbackComponent={({ resetErrorBoundary }) => (
            <div>
              <ErrorField
                resetErrorBoundary={resetErrorBoundary}
                setResultVisible={setResultVisible}
              />
            </div>
          )}
        >
          <Result
            setResultVisible={setResultVisible}
          />
        </ErrorBoundary>
      ) : (
        <EmptyResult />
      )}
    </>
  );
}
