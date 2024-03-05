import React, { useState, Suspense } from "react";

import { Outlet } from "react-router-dom";
import Button from "react-bootstrap/Button";
import CustomCalendar from "components/feature/filter/CustomCalendar";
import SearchTab from "components/feature/Tab/SearchTab";
import styled from "styled-components";
const Result = React.lazy(() => import("components/result/Result"));

const Input = styled.input`
  margin: 4px;
`;

export default function SearchPage() {
  const [isCalendar, setIsCalendar] = useState(false);

  const [maxPrice, setMaxPrice] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [searchSize, setSearchSize] = useState("");

  const searchSizeChange = (e) => {
    setSearchSize(e.target.value);
  };

  const maxPriceChange = (e) => {
    setMaxPrice(e.target.value);
  };
  const minPriceChange = (e) => {
    setMinPrice(e.target.value);
  };

  const csvData = [
    ["firstname", "lastname", "email"],
    ["Ahmed", "Tomi", "ah@smthing.co.com"],
    ["Raed", "Labes", "rl@smthing.co.com"],
    ["Yezzi", "Min l3b", "ymin@cocococo.com"],
  ];

  const [resultVisible, setResultVisible] = useState(false);

  return (
    <>
      <SearchTab />
      <Outlet></Outlet>
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
              onChange={searchSizeChange}
            ></Input>
          </div>

          <div>
            <p>상품 가격 입력</p>
            <Input
              type="number"
              name="minPrice"
              onChange={minPriceChange}
            ></Input>
            <Input
              type="number"
              name="maxPrice"
              onChange={maxPriceChange}
            ></Input>
          </div>
        </div>
        <p>상품 조회 결과</p>
        <button
          onClick={() => {
            setResultVisible(true);
            console.log("상품조회 클릭");
          }}
        >
          상품조회
        </button>

        <Suspense fallback={<div></div>}>
          {resultVisible && (
            <Result
              searchSize={searchSize}
              minPrice={minPrice}
              maxPrice={maxPrice}
            />
          )}
        </Suspense>
      </div>
    </>
  );
}
