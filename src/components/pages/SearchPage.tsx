import { useState } from "react";
import CustomCalendar from "components/feature/filter/CustomCalendar";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Result from "components/feature/result/Result";
import { useLocation, Outlet, useNavigate } from "react-router-dom";
import { RootState } from "main";
import ItemSearchCount from "components/feature/filter/ItemSearchCount";
import PriceRange from "components/feature/filter/PriceRange";
import EmptyResult from "components/feature/result/EmptyResult";
import { createPortal } from "react-dom";
import ModalContent from "components/feature/filter/ModalContent";
import FetchData from "api/route";

const SearchResultWord = styled.p`
  margin-top: 10px;
  font-size: var(--font-size-medium);
  font-weight: bold;
`;

const FilterBox = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #f5f8fb;
  padding-top: 40px;
  width: 100%;
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
  font-size: var(--font-size-primary);
  box-shadow: 0px 4px 10px 0px gray;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const InquiryButton = styled.button`
  border-radius: 10px;
  color: white;
  font-size: 15px;
  margin-top: 40px;
  padding: 0px 10px;
  width: 100px;
  font-weight: bold;
  height: 41px;
  border: none;
  background-color: var(--Gray700);
`;

export default function SearchPage() {
  const [resultVisible, setResultVisible] = useState(false);
  const [maxPrice, setMaxPrice] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [searchSize, setSearchSize] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const searchSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchSize(e.target.value);
  };

  const navigate = useNavigate();

  const { startDate, los } = useSelector(
    (state: RootState) => state.queryString.date
  );

  const keywordInputValue = useSelector(
    (state: RootState) => state.queryString.pathName
  );
  let pathName: string | number = "";
  const { pathname } = useLocation();

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

  const { isError, data, refetch, isFetching } = FetchData(apiURL);

  const searchData = data;

  const handleSearch = () => {
    if (pathName == "") {
      setShowModal(true);
      setErrorMessage("keyword를 입력하세요");
    } else if (Number(maxPrice) < Number(minPrice)) {
      setErrorMessage("최대가격이 최소가격보다 커야합니다.");
      setShowModal(true);
    } else if (maxPrice >= minPrice && pathName != "") {
      setResultVisible(true);
      refetch();
    }
  };

  return (
    <>
      <Outlet context={{ isFetching }} />
      <FilterBox>
        <CustomCalendar />
        <ItemSearchCount isFetching={isFetching} />
        <PriceRange
          minPrice={minPrice}
          setMinPrice={setMinPrice}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
          isFetching={isFetching}
        />

        <InquiryButton
          disabled={isFetching}
          onClick={() => {
            handleSearch();
            navigate(queryURL);
          }}
        >
          {isFetching ? "검색 중.." : "상품조회"}
        </InquiryButton>
      </FilterBox>

      {showModal &&
        createPortal(
          <ModalContent
            onClose={() => setShowModal(false)}
            errorMessage={errorMessage}
          />,
          document.body
        )}

      <Input
        placeholder="상품 검색 개수"
        type="number"
        name="itemSize"
        value={searchSize}
        onChange={searchSizeChange}
        disabled={isFetching}
      />

      <SearchResultWord>상품 검색 결과</SearchResultWord>
      {resultVisible ? (
        <Result
          isError={isError}
          searchData={searchData}
          isFetching={isFetching}
        />
      ) : (
        <EmptyResult />
      )}
    </>
  );
}
