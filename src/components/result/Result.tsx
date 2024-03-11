import { useState } from "react";
import Table from "react-bootstrap/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import styled from "styled-components";
import useGetData from "useGetData";
import { Link } from "react-router-dom";
import { CSVLink } from "react-csv";
import { faArrowsAltV } from '@fortawesome/free-solid-svg-icons'; 
import { faArrowsAltV as farArrowsAltV } from '@fortawesome/free-regular-svg-icons';


const TitleTh = styled.th`
width : ${ props => props.width };
`


const TitleSpan =styled.span`
 &:hover {
 cursor : pointer;
    }
`

const ExcelButton = styled.button`
width : 140px;
height : 30px;
font-size: 12px;
font-weight : bold;
`

const DeliveryImg = styled.img`
width : 50px;
height : 30px;
`

const StyledCSVLink = styled(CSVLink)`
color : black;
margin-left : 5px;
text-decoration-line : none;

`

export default function Result({ queryData }) {
  const [list, setList] = useState([]);

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
  const [sortOrder, setSortOrder] = useState('asc');

  const handleSort = (field) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortOrder('asc');
    }
  };

  const sortedData = problemData?.body?.slice().sort((a, b) => {
    const aValue = sortBy ? a[sortBy] : null;
    const bValue = sortBy ? b[sortBy] : null;

    if (sortBy === '상품경쟁력') {
      const aCompetitiveness = (a.ratingVipCount / a.ratingTotalCount) * 100;
      const bCompetitiveness = (b.ratingVipCount / b.ratingTotalCount) * 100;

      return sortOrder === 'asc' ? aCompetitiveness - bCompetitiveness : bCompetitiveness - aCompetitiveness;
    }

    if (aValue === bValue) {
      return 0;
    }

    if (sortOrder === 'asc') {
      return aValue < bValue ? -1 : 1;
    } else {
      return aValue > bValue ? -1 : 1;
    }
  });

  console.log('sortedData', sortedData)



  return (
    <>
      <div>

      {sortedData != undefined && (
        <ExcelButton>
        <FontAwesomeIcon icon={faDownload} />
         
          <StyledCSVLink data={sortedData}>엑셀 다운로드</StyledCSVLink>
        </ExcelButton>
      )}
      
        <Table responsive>
          <thead>
            <tr>
            <TitleTh width="10%">순위</TitleTh>
          <TitleTh width="30%" >키워드</TitleTh>
          <TitleTh  width="10%" cursor="pointer"  onClick={() => handleSort('priceValue')}> <FontAwesomeIcon icon={faArrowsUpDown} />  <TitleSpan>가격</TitleSpan>  </TitleTh>
          <TitleTh  width="10%"  cursor="pointer" onClick={() => handleSort('ratingTotalCount')}> <FontAwesomeIcon icon={faArrowsUpDown} /> <TitleSpan>총 리뷰</TitleSpan> </TitleTh>
          <TitleTh width="20%" cursor="pointer" onClick={() => handleSort('상품경쟁력')}> <FontAwesomeIcon icon={faArrowsUpDown} /> <TitleSpan>상품경쟁력</TitleSpan>   </TitleTh>
              <TitleTh width="20%" >배송방식</TitleTh>
            </tr>
          </thead>
          <tbody>
            {sortedData?.map((item, idx) => {
              const ItemPower = (
                (item.ratingVipCount / item.ratingTotalCount) *
                100
              ).toFixed(1);
              return (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td>
                    <Link to={`https://www.coupang.com/${item.uri}`}>
                      {item.name}
                    </Link>
                  </td>
                  <td>{item.priceValue}</td>
                  <td>{item.ratingTotalCount}</td>
                  <td>{ItemPower}%</td>
                  <td>
                    <DeliveryImg src={item.rocketImg} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
}
