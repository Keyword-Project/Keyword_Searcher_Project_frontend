import { useState } from "react";
import CustomCalendar from "components/feature/filter/CustomCalendar";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Result from "components/feature/result/Result";
import { useLocation, Outlet, useNavigate } from "react-router-dom";
import { RootState } from "main";
import ItemSearchCount from "components/feature/filter/ItemSearchCount";
import PriceRange from "components/feature/filter/PriceRange";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import EmptyResult from "components/feature/result/EmptyResult";

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

export default function MainPage() {
  const [resultVisible, setResultVisible] = useState(false);
  const { error, data, refetch, isFetching } = useQuery({
    queryKey: ["repoData"],
    queryFn: async () => {
      const res = await axios.get(url);
      console.log(res.data);
      return res.data;
    },
    refetchOnWindowFocus: false,
    enabled: false,
  });

  const navigate = useNavigate();

  const handleButtonClick = () => {
    // 쿼리 문자열 업데이트
    history.push("/watch?v=46YNAP5Gg3k");
  };

  const problemData = data;

  let pathName: string | number = "";

  const keywordInputValue = useSelector(
    (state: RootState) => state.queryString.pathName
  );

  const { pathname } = useLocation();
  // console.log(pathname);
  const slug = pathname.split("/")[2];
  // console.log(slug);

  if (slug == undefined) {
    pathName = keywordInputValue;
  } else if (typeof slug == "string") {
    pathName = Number(slug);
  }

  const [maxPrice, setMaxPrice] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [searchSize, setSearchSize] = useState("");

  const date = useSelector((state: RootState) => state.queryString.date);

  const startDate = date.startDate.split("T")[0];
  const startDateByLos = new Date(date.startDate.split("T")[0]);

  const endDate = new Date(date.endDate.split("T")[0]);

  const differenceMs = Math.abs(endDate.valueOf() - startDateByLos.valueOf());

  const los = Math.ceil(differenceMs / (1000 * 60 * 60 * 24));

  const searchSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchSize(e.target.value);
  };

  let url = "";
  if (typeof pathName == "string") {
    url = `http://localhost:3000/api/v1/keyword?q=${pathName}${
      startDate ? `&startDate=${startDate}` : ""
    }&${los ? `&los=${los}` : ""}${minPrice ? `&minPrice=${minPrice}` : ""}${
      maxPrice ? `&maxPrice=${maxPrice}` : ""
    }${searchSize ? `&searchSize=${searchSize}` : ""}`;
  } else if (typeof pathName == "number") {
    url = `http://localhost:3000/api/v1/categories/${pathName}?${
      startDate ? `&startDate=${startDate}` : ""
    }&${los ? `&los=${los}` : ""}${minPrice ? `&minPrice=${minPrice}` : ""}${
      maxPrice ? `&maxPrice=${maxPrice}` : ""
    }${searchSize ? `&searchSize=${searchSize}` : ""}`;
  }

  const handleSearch = () => {
    if (pathName == "") {
      console.log("keyword를 입력하세요");
    } else {
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
          }}
        >
          {isFetching ? "로딩중.." : "상품조회"}
        </InquiryButton>
      </FilterBox>

      <Input
        placeholder="상품 검색 개수"
        type="number"
        name="itemSize"
        value={searchSize}
        onChange={searchSizeChange}
        disabled={isFetching}
      />
    <button onClick={() => { navigate('/category?v=46YNAP5Gg3k') }}>
  어바웃 페이지로 이동하기
</button>
      <SearchResultWord>상품 검색 결과</SearchResultWord>

      {resultVisible ? (
        <Result
          problemData={problemData}
          error={error}
          isFetching={isFetching}
        />
      ) : (
        <EmptyResult />
      )}
    </>
  );
}
