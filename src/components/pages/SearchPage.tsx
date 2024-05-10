import { useState } from "react";
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
import FetchData from "api/route";
import { QueryErrorResetBoundary } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import ErrorField from "components/feature/result/ErrorField";
import SearchButton from "components/feature/filter/SearchButton";

const ButtonNSearchField = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SearchResultWord = styled.p`
  margin-top: 10px;
  font-size: var(--font-size-medium);
  font-weight: bold;
`;

const FilterBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 3rem;
  width: 100%;
`;

export default function SearchPage() {
  const [resultVisible, setResultVisible] = useState(false);
  const [maxPrice, setMaxPrice] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [searchSize, setSearchSize] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const { startDate, los } = useSelector(
    (state: RootState) => state.queryString.date
  );

  const keywordInputValue = useSelector(
    (state: RootState) => state.queryString.pathName
  );
  let pathName: string | number = "";
  const { pathname } = useLocation();
console.log('pathname', pathname)
  const slug = pathname.split("/")[2];

  if (slug == undefined) {
    pathName = keywordInputValue;
  } else if (typeof slug == "string") {
    pathName = Number(slug);
  }

  const commonURL = `${pathName}${startDate ? `&startDate=${startDate}` : ""}&${
    los ? `&los=${los}` : ""
  }${minPrice ? `&minPrice=${minPrice}` : ""}${
    maxPrice ? `&maxPrice=${maxPrice}` : ""
  }${searchSize ? `&searchSize=${searchSize}` : ""}`;

  let apiURL = "";
  let queryURL = "";

  if (typeof pathName == "string") {
    apiURL = "http://localhost:3000/api/v1/keyword?q=" + `${commonURL}`;
    queryURL = "keyword?q=" + `${commonURL}`;
  } else if (typeof pathName == "number") {
    apiURL = "http://localhost:3000/api/v1/categories/" + `${commonURL}`;
    queryURL = "categories/" + `${commonURL}`;
  }

  const { error, isError, data, refetch, isFetching } = FetchData(apiURL);

  const searchData = data;





  const seperate = () => {

    if (pathname == '/keyword') {
      pathName = keywordInputValue;
    } else if (pathname == '/categories') {
      pathName = Number(slug);
    }

    const content = pathname == '/keyword' ? "💡keyword를 입력하세요💡" : "💡💡최대가격이 최소가격보다 커야합니다."

    return {content,  apiURL}
  }

  const handleSearch = () => {
    if (pathName == "") {
      setShowModal(true);
      setErrorMessage("💡💡keyword를 입력하세요");
    } else if (Number(maxPrice) < Number(minPrice)) {
      setErrorMessage("💡💡최대가격이 최소가격보다 커야합니다.");
      setShowModal(true);
    } else if (maxPrice >= minPrice && pathName != "") {
      setResultVisible(true);
      refetch();
    }
  };

  return (
    <>
      <ButtonNSearchField>
        <Outlet context={{ isFetching }} />
        <SearchButton
          isFetching={isFetching}
          handleSearch={handleSearch}
          queryURL={queryURL}
        />
      </ButtonNSearchField>
      <FilterBox>
        <CustomCalendar />
        <ItemSearchCount
          setSearchSize={setSearchSize}
          isFetching={isFetching}
        />
        <PriceRange
          minPrice={minPrice}
          setMinPrice={setMinPrice}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
          isFetching={isFetching}
        />
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
      {resultVisible ? (
        <QueryErrorResetBoundary>
          {({ reset }) => (
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
                isError={isError}
                searchData={searchData}
                isFetching={isFetching}
                error={error}
              />
            </ErrorBoundary>
          )}
        </QueryErrorResetBoundary>
      ) : (
        <EmptyResult />
      )}
    </>
  );
}
