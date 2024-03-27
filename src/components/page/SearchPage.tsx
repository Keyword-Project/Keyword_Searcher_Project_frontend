import { useState, Suspense } from "react";

import CustomCalendar from "components/feature/filter/CustomCalendar";
import styled from "styled-components";
import { useSelector } from "react-redux";

import Result from "components/result/Result";
import { useLocation } from "react-router-dom";
import SpinnerBox from "components/feature/SpinnerBox";
import SearchTab from "components/feature/Tab/SearchTab";
import { RootState } from "main";
import Layout from "Layout";

const PriceBox = styled.div`
  width: 200px;
  margin-right: 30px;
`;

const FilterBox = styled.div`
  display: flex;
  background-color: #f5f8fb;
  padding-top: 40px;
`;

const Input = styled.input`
  border-radius: 3px;
  width: 90px;
  height: 30px;
  padding-left: 5px;
  font-size: 12px;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const InquiryButton = styled.button`
  border-radius: 10px;
  color: black;
  font-size: 15px;

  margin: 20px 30px 0px 30px;

  padding: 0px 10px;
  width: 100px;
  font-weight: bold;
  height: 50px;
  border: none;
  background-color: #c8c8ff;
`;

const Item = styled.p`
  font-size: 13px;
  font-weight: bold;
`;

const InputBox = styled.div`
  width: 130px;
  color: black;
`;

const ResultDiv = styled.div`
  width: 100%;
  height: 400px;
`;

export default function SearchPage() {
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

  console.log("date", date);

  const startDate = date.startDate.split("T")[0];
  const startDateByLos = new Date(date.startDate.split("T")[0]);

  const endDate = new Date(date.endDate.split("T")[0]);
  // console.log("stateDate", startDate);
  console.log("startDateByLos", startDateByLos);
  console.log("endDate", endDate);

  const differenceMs = Math.abs(endDate.valueOf() - startDateByLos.valueOf());
  // console.log("differenceMs", differenceMs);

  const los = Math.ceil(differenceMs / (1000 * 60 * 60 * 24));
  // console.log("los", los);

  const fetchQueryData = () => {
    setQueryData({ pathName, minPrice, maxPrice, searchSize, startDate, los });
  };

  const searchSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchSize(e.target.value);
  };

  const maxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(e.target.value);
  };
  const minPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMinPrice(e.target.value);
  };

  const [resultVisible, setResultVisible] = useState(false);

  // const handleSort = (field) => {
  //   if (sortBy === field) {
  //     setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  //   } else {
  //     setSortBy(field);
  //     setSortOrder("asc");
  //   }
  // };

  // const sortedData = test.slice().sort((a, b) => {
  //   const aValue = sortBy ? a[sortBy] : null;
  //   const bValue = sortBy ? b[sortBy] : null;

  //   if (sortBy === "상품경쟁력") {
  //     const aCompetitiveness = (a.ratingVipCount / a.ratingTotalCount) * 100;
  //     const bCompetitiveness = (b.ratingVipCount / b.ratingTotalCount) * 100;

  //     return sortOrder === "asc"
  //       ? aCompetitiveness - bCompetitiveness
  //       : bCompetitiveness - aCompetitiveness;
  //   }

  //   if (aValue === bValue) {
  //     return 0;
  //   }

  //   if (sortOrder === "asc") {
  //     return aValue < bValue ? -1 : 1;
  //   } else {
  //     return aValue > bValue ? -1 : 1;
  //   }
  // });

  return (
    <>
      <SearchTab />

      <FilterBox>
        <CustomCalendar />

        <InputBox>
          <Item>상품 개수</Item>
          <Input
            type="number"
            name="itemSize"
            value={searchSize}
            onChange={searchSizeChange}
            placeholder="상품 개수"
          ></Input>
        </InputBox>

        <PriceBox>
          <Item>상품 가격</Item>
          <Input
            type="number"
            name="minPrice"
            value={minPrice}
            onChange={minPriceChange}
            placeholder="최소 가격"
          ></Input>
          <span> - </span>
          <Input
            type="number"
            name="maxPrice"
            value={maxPrice}
            onChange={maxPriceChange}
            placeholder="최대 가격"
          ></Input>
        </PriceBox>

        <InquiryButton
          onClick={() => {
            setResultVisible(true);
            fetchQueryData();
          }}
        >
          상품조회
        </InquiryButton>
      </FilterBox>

      <ResultDiv>
        {resultVisible && (
          <Suspense fallback={<SpinnerBox />}>
            <Result queryData={queryData} />
          </Suspense>
        )}
      </ResultDiv>
      {/* <Table responsive>
        <thead>
          <tr>
            <TitleTh width="10%">순위</TitleTh>
            <TitleTh width="30%">키워드</TitleTh>
            <TitleTh width="10%">가격</TitleTh>
            <TitleTh width="10%">총 리뷰</TitleTh>
            <TitleTh width="20%">상품경쟁력</TitleTh>
            <TitleTh width="20%">배송방식</TitleTh>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((item, idx) => {
            const ItemPower = (
              (item.ratingVipCount / item.ratingTotalCount) *
              100
            ).toFixed(1);

            return (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>
                  <Link to={`https://www.coupang.com/`}>{item.name}</Link>
                </td>
                <td>{item.priceValue}</td>
                <td>{item.ratingTotalCount}</td>
                <td>{ItemPower}</td>
                <td>
                  <img src={item.rocketImg} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table> */}
    </>
  );
}
