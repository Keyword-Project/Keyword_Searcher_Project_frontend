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
import { QueryErrorResetBoundary } from "@tanstack/react-query";
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
  const [maxPrice, setMaxPrice] = useState(0);
  const [minPrice, setMinPrice] = useState(0);
  const [searchSize, setSearchSize] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const url = new URL(window.location.href);
  const queryString = url.search

  useEffect(()=>{
    if(queryString){
      setResultVisible(true)
    }
  },[queryString])

  const { startDate, los } = useSelector(
    (state: RootState) => state.queryString.date
  );

  const keywordInputValue = useSelector(
    (state: RootState) => state.queryString.pathName
  );

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const commonURL = `${startDate ? `startDate=${startDate}` : ""}${
    los ? `&los=${los}` : ""
  }${minPrice ? `&minPrice=${minPrice}` : ""}${
    maxPrice ? `&maxPrice=${maxPrice}` : ""
  }${searchSize ? `&searchSize=${searchSize}` : ""}`;

  const fetchHandler = () => {
    let queryURL = "";
    if (pathname == "/categories") {
      setShowModal(true);
      setErrorMessage("카테고리 목록을 선택해주세요.");
    } else if (/^\/categories\/\d+$/.test(pathname)) {
      if (Number(maxPrice) < Number(minPrice)) {
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
        queryURL = `${pathname}?${commonURL}`;
        navigate(queryURL);
        setResultVisible(true);
      }
    }

    if (pathname == "/keyword") {
      if (keywordInputValue === "") {
        setShowModal(true);
        setErrorMessage("키워드를 입력해주세요.");
      } else {
        if (Number(maxPrice) < Number(minPrice)) {
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
          queryURL = `keyword?q=${keywordInputValue}` + `${commonURL}`;
          navigate(queryURL);
          setResultVisible(true);
        }
      }
    }
  };

  return (
    <>
      <ButtonNSearchField>
        <Outlet />
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
      {resultVisible ? 
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
    <Result resultVisible={resultVisible} setResultVisible={setResultVisible} /> 
         </ErrorBoundary>
       )}
     </QueryErrorResetBoundary>
      : <EmptyResult /> }
     
    </>
  );
}
