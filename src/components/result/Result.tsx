import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { Link, useSearchParams } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import { useSelector } from "react-redux";
import { CSVLink } from "react-csv";
import axios from "axios";

export default function Result({ minPrice, maxPrice, searchSize }) {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  const [keywordObj, setKeywordObj] = useSearchParams();

  const pathName = useSelector((state) => state.queryString.pathName);

  const date = useSelector((state) => state.queryString.date);
  const startDate = date.startDate.split("T")[0];
  const los = date.los.split("T")[0];

  useEffect(() => {
    setKeywordObj({
      q: pathName,
      minPrice: minPrice,
      maxPrice: maxPrice,
      searchSize: searchSize,
      startDate: startDate,
      los: los,
    });

    const fetchKeywordData = async (
      pathName: string | number,
      minPrice: number,
      maxPrice: number,
      searchSize: number,
      startDate: number,
      los: number
    ) => {
      console.log("fetchKeywordData");
      console.log(pathName, minPrice, maxPrice, searchSize, startDate, los);

      await axios
        .get(
          `http://localhost:3000/api/v1/keyword?q=${pathName}${
            startDate ? `&startDate=${startDate}` : ""
          }&${los ? `&los=${los}` : ""}${
            minPrice ? `&minPrice=${minPrice}` : ""
          }${maxPrice ? `&maxPrice=${maxPrice}` : ""}${
            searchSize ? `&searchSize=${searchSize}` : ""
          }`
        )
        .then((response) => {
          setList(response.data.body);
          setLoading(false);
        })

        .catch((error) => {
          console.error("Fail:", error);
          throw new Error("Fail");
        });
    };

    const fetchCategoryData = async (
      pathName: string | number,
      minPrice: number,
      maxPrice: number,
      searchSize: number,
      startDate: number,
      los: number
    ) => {
      console.log("fetchCategoryData");
      console.log(pathName, minPrice, maxPrice, searchSize, startDate, los);

      await axios
        .get(
          `http://localhost:3000/api/v1/categories/${pathName}?${
            startDate ? `&startDate=${startDate}` : ""
          }&${los ? `&los=${los}` : ""}${
            minPrice ? `&minPrice=${minPrice}` : ""
          }${maxPrice ? `&maxPrice=${maxPrice}` : ""}${
            searchSize ? `&searchSize=${searchSize}` : ""
          }`
        )
        .then((response) => {
          setList(response.data.body);
          setLoading(false);
        })

        .catch((error) => {
          console.error("Fail:", error);
          throw new Error("Fail");
        });
    };

    const resultRender = () => {
      if (typeof pathName == "string") {
        fetchKeywordData(
          pathName,
          minPrice,
          maxPrice,
          searchSize,
          startDate,
          los
        );
      } else if (typeof pathName == "number") {
        fetchCategoryData(
          pathName,
          minPrice,
          maxPrice,
          searchSize,
          startDate,
          los
        );
      }
    };

    resultRender();
  }, []);

  const sortByCompetitiveness = () => {
    const sorted = [...list].sort(
      (a, b) => b.ratingTotalCount - a.ratingTotalCount
    );
    setList(sorted);
  };

  // 가격순 정렬
  const sortByPrice = () => {
    const sorted = [...list].sort((a, b) => b.priceValue - a.priceValue);
    setList(sorted);
  };

  return (
    <>
      {loading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (

        <div>
            <CSVLink data={list}>Download me</CSVLink>;
          <Table responsive>
            <thead>
              <tr>
                <th>순위</th>
                <th>키워드</th>
                <th onClick={sortByPrice}>판매량</th>
                <th onClick={sortByCompetitiveness}>상품경쟁력</th>
                <th>배송방식</th>
              </tr>
            </thead>
            <tbody>
              {list?.map((item, idx) => {
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
                    <td>
                      <img src={item.rocketImg} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      )}
    </>
  );
}
