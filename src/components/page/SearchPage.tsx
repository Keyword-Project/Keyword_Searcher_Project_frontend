import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchKeywordData } from "api/keywordSearchApi/route";

import { Outlet } from "react-router-dom";
import Button from "react-bootstrap/Button";
import CustomCalendar from "components/feature/filter/CustomCalendar";
import SearchTab from "components/feature/Tab/SearchTab";
import styled from "styled-components";
import Result from "components/result/Result";
import { useSelector } from "react-redux";

const Input = styled.input`
  margin: 4px;
`;

export default function SearchPage() {
  
  const pathName = useSelector((state) => state.queryString.pathName);


  const [maxPrice, setMaxPrice] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [searchSize, setSearchSize] = useState("");
  const [startDate, setStartDate] = useState("");
  const [los, setSLos] = useState("");

  const searchSizeChange = (e) => {
    setSearchSize(e.target.value);
  };

  const maxPriceChange = (e) => {
    setMaxPrice(e.target.value);
  };
  const minPriceChange = (e) => {
    setMinPrice(e.target.value);
  };

  const [isCalendar, setIsCalendar] = useState(false);

  const [keywordObj, setKeywordObj] = useSearchParams();

  const dataRender = () => {
    setKeywordObj({
      q: pathName,
      minPrice: minPrice,
      maxPrice: maxPrice,
      searchSize: searchSize,
      startDate: startDate,
      los: los,
    });

    const getKeywordResult = async () => {
      const res = await fetchKeywordData(
        pathName,
        minPrice,
        maxPrice,
        searchSize,
        startDate,
        los
      );

      console.log("res", res);

      setList(res.body);
    };

    getKeywordResult();
  };

  const [list, setList] = useState([]);
  const filterType = ["순위", "키워드", "판매량", "상품경쟁력", "배송방식"];

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
            dataRender();
          }}
        >
          상품조회
        </button>
     <Result  filterType={filterType}  list={list}  />
      </div>
    </>
  );
}
