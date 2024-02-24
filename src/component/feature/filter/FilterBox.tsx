import { useState } from "react";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import CustomCalendar from "./CustomCalendar";
import OutputTable from "../Output/OutputTable";

import styled from "styled-components";

const Input = styled.input`
  margin: 4px;
`;

export default function FilterBox({ keywordName }) {
  const [maxPrice, setMaxPrice] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [searchSize, setSearchSize] = useState("");

  const searchSizeChange = (e) => {
    setSearchSize(e.target.value);
  };

  const maxPriceChange = (e) => {
    setMinPrice(e.target.value);
  };
  const minPriceChange = (e) => {
    setMaxPrice(e.target.value);
  };

  const [isCalendar, setIsCalendar] = useState(false);
  return (
    <>
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
          <Link
            to={`/keyword/?q=${keywordName}${
              minPrice ? `&minPrice=${minPrice}` : ""
            }${maxPrice ? `&maxPrice=${maxPrice}` : ""}${
              searchSize ? `&searchSize=${searchSize}` : ""
            }`}
          >
            조회
          </Link>
        </div>
        <p>상품 조회 결과</p>
        <OutputTable
          keywordName={keywordName}
          searchSize={searchSize}
          minPrice={minPrice}
          maxPrice={maxPrice}
        />
      </div>
    </>
  );
}
