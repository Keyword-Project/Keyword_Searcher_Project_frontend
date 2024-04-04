import { useState } from "react";
import Table from "react-bootstrap/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styled from "styled-components";
import { useSearchParams } from "react-router-dom";
import { faArrowsUpDown } from "@fortawesome/free-solid-svg-icons";
import SpinnerBox from "components/feature/result/SpinnerBox";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ExcelDownloader from "./ExcelDownloader";
import ResultTable from "./ResultTable";

interface sortedData {
  dataIsRocket: boolean;
  dataProductId: string;
  name: string;

  priceValue: number;
  ratingTotalCount: number;
  ratingVipCount: number;
  rocketImg: string;
  uri: string;
}

const TitleTh = styled.th<{ width: string }>`
  width: ${(props) => props.width};
`;

const TitleSpan = styled.span`
  &:hover {
    cursor: pointer;
  }
`;

const KeywordAtag = styled.a`
  color: black;
  text-decoration-line: none;
  &:hover {
    text-decoration-line: underline;
  }
`;

const StyledTitleTr = styled.tr`
  border-top-width: thick;
  border-top-color: black;
`;

const DeliveryImg = styled.img.attrs({ alt: "로켓배송 이미지" })`
  width: 100px;
  height: 30px;
`;

const StyledResultTr = styled.tr`
  background-color: white;
  transition: background-color 0.3s;

  &:hover {
    background-color: lightgray;
  }
`;

// Define a styled table data cell component
const StyleResultdTd = styled.td`
  padding: 8px;
  border: 1px solid #dddddd;
  text-align: left;

  /* Apply background color change to cells within hovered row */
  ${StyledResultTr}:hover & {
    background-color: lightgray;
  }
`;

export interface QueryData {
  pathName: string;
  minPrice: string;
  maxPrice: string;
  searchSize: string;
  startDate: string;
  los: string;
}

export default function Result({ queryData }: { queryData: QueryData }) {
  const [keywordObj, setKeywordObj] = useSearchParams();
  console.log(keywordObj, "result 컴포넌트 리 렌더링 확인용");
  // console.log(queryData, 'queryData -> 도대체 뭐 떄문에 리렌더링이 나는거야 열받게')

  setKeywordObj({
    q: queryData.pathName,
    minPrice: queryData.minPrice,
    maxPrice: queryData.maxPrice,
    searchSize: queryData.searchSize,
    startDate: queryData.startDate,
    los: queryData.los,
  });

  let url = "";
  if (typeof queryData.pathName == "string") {
    url = `http://localhost:3000/api/v1/keyword?q=${queryData.pathName}${
      queryData.startDate ? `&startDate=${queryData.startDate}` : ""
    }&${queryData.los ? `&los=${queryData.los}` : ""}${
      queryData.minPrice ? `&minPrice=${queryData.minPrice}` : ""
    }${queryData.maxPrice ? `&maxPrice=${queryData.maxPrice}` : ""}${
      queryData.searchSize ? `&searchSize=${queryData.searchSize}` : ""
    }`;
  } else if (typeof queryData.pathName == "number") {
    url = `http://localhost:3000/api/v1/categories/${queryData.pathName}?${
      queryData.startDate ? `&startDate=${queryData.startDate}` : ""
    }&${queryData.los ? `&los=${queryData.los}` : ""}${
      queryData.minPrice ? `&minPrice=${queryData.minPrice}` : ""
    }${queryData.maxPrice ? `&maxPrice=${queryData.maxPrice}` : ""}${
      queryData.searchSize ? `&searchSize=${queryData.searchSize}` : ""
    }`;
  }

  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: async () => {
      const res = await axios.get(url);
      return res.data;
    },
    refetchOnWindowFocus: false,
  });

  const problemData = data;

  let transformedData;
  if ( problemData?.body  != undefined) {
    transformedData = problemData?.body.map((item: sortedData) => ({
      키워드: item.name,
      가격: item.priceValue,
      "총 리뷰 수": item.ratingTotalCount,
      상품경쟁력: `${(
        (item.ratingVipCount / item.ratingTotalCount) *
        100
      ).toFixed(1)}%`,
      로켓배송: item.dataIsRocket ? "가능" : "불가능",
    }));
  }

  if (isPending) return <SpinnerBox></SpinnerBox>;

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <div>
        <ExcelDownloader transformedData={transformedData} problemData={problemData}/>
        <ResultTable problemData={problemData} />
      </div>
    </>
  );
}
