import { useState } from "react";
import CustomCalendar from "components/feature/filter/CustomCalendar";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Result from "components/feature/result/Result";
import { useLocation, Outlet } from "react-router-dom";
import { RootState } from "main";
import ItemSearchCount from "components/feature/filter/ItemSearchCount";
import PriceRange from "components/feature/filter/PriceRange";
import Test from "components/feature/filter/Test";

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

const ResultDiv = styled.div`
  width: 100%;
  height: 400px;
`;

export default function MainPage() {
  let pathName: string | number = "";

  const keywordInputValue = useSelector(
    (state: RootState) => state.queryString.pathName
  );

  const { pathname } = useLocation();
  console.log(pathname);
  const slug = pathname.split("/")[2];
  console.log(slug);

  if (slug == undefined) {
    pathName = keywordInputValue;
  } else if (typeof slug == "string") {
    pathName = Number(slug);
  }

  //result로 전달할 객체
  const [queryData, setQueryData] = useState({
    pathName: "",
    minPrice: "",
    maxPrice: "",
    searchSize: "",
    startDate: "",
    los: 0,
  });

  const [maxPrice, setMaxPrice] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [searchSize, setSearchSize] = useState("");

  const date = useSelector((state: RootState) => state.queryString.date);

  const startDate = date.startDate.split("T")[0];
  const startDateByLos = new Date(date.startDate.split("T")[0]);

  const endDate = new Date(date.endDate.split("T")[0]);

  const differenceMs = Math.abs(endDate.valueOf() - startDateByLos.valueOf());

  const los = Math.ceil(differenceMs / (1000 * 60 * 60 * 24));

  const fetchQueryData = () => {
    setQueryData({ pathName, minPrice, maxPrice, searchSize, startDate, los });
  };

  const searchSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchSize(e.target.value);
  };

  const [resultVisible, setResultVisible] = useState(false);

  return (
    <>
      <Outlet />
      <FilterBox>
        <CustomCalendar />

        <ItemSearchCount />
        <PriceRange
          minPrice={minPrice}
          setMinPrice={setMinPrice}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
        />

        <InquiryButton
          onClick={() => {
            setResultVisible(true);
            fetchQueryData();
          }}
        >
          상품조회
        </InquiryButton>
      </FilterBox>

      <Input
        placeholder="상품 검색 개수"
        type="number"
        name="itemSize"
        value={searchSize}
        onChange={searchSizeChange}
      />

      <SearchResultWord>상품 검색 결과</SearchResultWord>

      <ResultDiv>{resultVisible && <Result queryData={queryData} />}</ResultDiv>
    </>
  );
}
