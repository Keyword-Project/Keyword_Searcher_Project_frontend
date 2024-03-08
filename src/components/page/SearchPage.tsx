import React, { useState, Suspense } from "react";

import Button from "react-bootstrap/Button";
import CustomCalendar from "components/feature/filter/CustomCalendar";
import SearchTab from "components/feature/Tab/SearchTab";
import styled from "styled-components";
const Result = React.lazy(() => import("components/result/Result"));
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const Input = styled.input`
  margin: 4px;
`;

export default function SearchPage() {
  const [isCalendar, setIsCalendar] = useState(false);

  //result로 전달할 객체
  const [queryData, setQueryData] = useState({
    pathName: "",
    minPrice: "",
    maxPrice: "",
    searchSize: "",
    startDate: "",
    los: "",
  });


  
  const [maxPrice, setMaxPrice] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [searchSize, setSearchSize] = useState("");

  const pathName = useSelector((state) => state.queryString.pathName);

  const date = useSelector((state) => state.queryString.date);
  const startDate = date.startDate.split("T")[0];
  const los = date.los.split("T")[0];

  const fetchQueryData = () => {
    setQueryData({ pathName, minPrice, maxPrice, searchSize, startDate, los });
    console.log("Updated Info:", setQueryData);
  };

  const searchSizeChange = (e) => {
    setSearchSize(e.target.value);
  };

  const maxPriceChange = (e) => {
    setMaxPrice(e.target.value);
  };
  const minPriceChange = (e) => {
    setMinPrice(e.target.value);
  };

  const [resultVisible, setResultVisible] = useState(false);

  return (
    <>
      <SearchTab />
      <Outlet />

      <div>
        <p>날짜 설정</p>
        <div>
          <Button>최근 14일</Button>
          <Button
            variant="secondary"
            onClick={() => {
              setIsCalendar(!isCalendar);
            }}
          >
            기간 설정
          </Button>
        </div>
        <div>{isCalendar && <CustomCalendar />}</div>
        <div>
          <div>
            <p>상품 개수 입력</p>
            <Input
              type="number"
              name="itemSize"
              value={searchSize}
              onChange={searchSizeChange}
            ></Input>
          </div>

          <div>
            <p>상품 가격 입력</p>
            <Input
              type="number"
              name="minPrice"
              value={minPrice}
              onChange={minPriceChange}
            ></Input>
            <Input
              type="number"
              name="maxPrice"
              value={maxPrice}
              onChange={maxPriceChange}
            ></Input>
          </div>
        </div>
        <p>상품 조회 결과</p>
        <button
          onClick={() => {
            fetchQueryData();
            setResultVisible(true);
            console.log("상품조회 클릭");
          }}
        >
          상품조회
        </button>

        <Suspense fallback={<div></div>}>
          {resultVisible && (
            <Result
           
              queryData={queryData}
            />
          )}
        </Suspense>
      </div>
    </>
  );
}
