import { useState } from "react";
import Table from "react-bootstrap/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import useGetData from "useGetData";
import { CSVLink } from "react-csv";
import { faArrowsUpDown } from "@fortawesome/free-solid-svg-icons";

const ExcelDownloadBtnDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin: 20px 0px;
`;

const TitleTh = styled.th`
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

const ExcelButton = styled.button`
  width: 140px;
  height: 30px;
  font-size: 12px;
  font-weight: bold;
`;

const StyledTitleTr =  styled.tr`
 border-top-width: thick;
 border-top-color: black;
`


const DeliveryImg = styled.img.attrs({ alt: "로켓배송 이미지" })`
  width: 100px;
  height: 30px;
`;

const StyledCSVLink = styled(CSVLink)`
  color: black;
  margin-left: 5px;
  text-decoration-line: none;
`;

// const StyledTable = styled(Table)`
// ${StyledTr} {
//   :hover {
//     background-color: lightgray;
//   }
//   ${StyledTr} td {
//   :hover {
//     background-color: lightgray;
//   }
//     }
// `

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

export default function Result({ queryData }) {
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

  const problemData = useGetData(url);

  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");

  const handleSort = (field) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(field);
      setSortOrder("asc");
    }
  };

  const sortedData = problemData?.body?.slice().sort((a, b) => {
    const aValue = sortBy ? a[sortBy] : null;
    const bValue = sortBy ? b[sortBy] : null;

    if (sortBy === "상품경쟁력") {
      const aCompetitiveness = (a.ratingVipCount / a.ratingTotalCount) * 100;
      const bCompetitiveness = (b.ratingVipCount / b.ratingTotalCount) * 100;

      return sortOrder === "asc"
        ? aCompetitiveness - bCompetitiveness
        : bCompetitiveness - aCompetitiveness;
    }

    if (aValue === bValue) {
      return 0;
    }

    if (sortOrder === "asc") {
      return aValue < bValue ? -1 : 1;
    } else {
      return aValue > bValue ? -1 : 1;
    }
  });



  console.log("sortedData", sortedData);
let transformedData ;
  if (sortedData != undefined) {
   transformedData = sortedData.map(item => ({
      '키워드': item.name,
      '가격': item.priceValue,
      "총 리뷰 수": item.ratingTotalCount,
      "상품경쟁력": `${((item.ratingVipCount / item.ratingTotalCount) * 100).toFixed(1)}%`,
      "로켓배송": item.dataIsRocket ? '가능' : '불가능'
    }));
    
    console.log('transformedData',transformedData);
  }

  return (
    <>
      <div>
        <ExcelDownloadBtnDiv>
          {transformedData != undefined && (
            <ExcelButton>
              <FontAwesomeIcon icon={faDownload} />

              <StyledCSVLink data={transformedData}>엑셀 다운로드</StyledCSVLink>
            </ExcelButton>
          )}
        </ExcelDownloadBtnDiv>

        <Table responsive>
          <thead>
            <StyledTitleTr>
              <TitleTh width="10%">순위</TitleTh>
              <TitleTh width="30%">키워드</TitleTh>
              <TitleTh
                width="10%"
                cursor="pointer"
                onClick={() => handleSort("priceValue")}
              >
                <TitleSpan>
                  {" "}
                  <FontAwesomeIcon icon={faArrowsUpDown} /> 가격
                </TitleSpan>{" "}
              </TitleTh>
              <TitleTh
                width="10%"
                cursor="pointer"
                onClick={() => handleSort("ratingTotalCount")}
              >
                <TitleSpan>
                  {" "}
                  <FontAwesomeIcon icon={faArrowsUpDown} /> 총 리뷰
                </TitleSpan>{" "}
              </TitleTh>
              <TitleTh
                width="20%"
                cursor="pointer"
                onClick={() => handleSort("상품경쟁력")}
              >
                <TitleSpan>
                  {" "}
                  <FontAwesomeIcon icon={faArrowsUpDown} /> 상품경쟁력
                </TitleSpan>{" "}
              </TitleTh>
              <TitleTh width="20%">배송방식</TitleTh>
            </StyledTitleTr>
          </thead>
          <tbody>
            {sortedData?.map((item, idx) => {
              const ItemPower = (
                (item.ratingVipCount / item.ratingTotalCount) *
                100
              ).toFixed(1);
              return (
                <StyledResultTr key={idx}>
                  <StyleResultdTd>{idx + 1}</StyleResultdTd>
                  <StyleResultdTd>
                    <KeywordAtag 
                    href={`https://www.coupang.com/${item.uri}`}
                    target="_blank"
                    >
                      {item.name}
                    </KeywordAtag>
                  </StyleResultdTd>
                  <StyleResultdTd>{item.priceValue}</StyleResultdTd>
                  <StyleResultdTd>{item.ratingTotalCount}</StyleResultdTd>
                  <StyleResultdTd>{ItemPower}%</StyleResultdTd>
                  <StyleResultdTd>
                    {item.rocketImg && <DeliveryImg src={item.rocketImg} />}
                  </StyleResultdTd>
                </StyledResultTr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
}
