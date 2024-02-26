import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchKeywordData } from "../../../api/keywordSearchApi/route";
import Table from "react-bootstrap/Table";

import Button from "react-bootstrap/Button";
import CustomCalendar from "./CustomCalendar";

import styled from "styled-components";

const Input = styled.input`
  margin: 4px;
`;

export default function FilterResultBox({ pathName }) {
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
        <Table responsive>
          <thead>
            <tr>
              {filterType.map((item, index) => (
                <th key={index}>{item}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {list &&
              list?.map((item, idx) => {
                return (
                  <tr key={idx}>
                    <td>{idx + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.priceValue}</td>
                    <td>{item.ratingTotalCount}</td>
                    <td>
                      <img src={item.rocketImg} />
                    </td>
                  </tr>
                );
              })}
            {}
          </tbody>
        </Table>
      </div>
    </>
  );
}
