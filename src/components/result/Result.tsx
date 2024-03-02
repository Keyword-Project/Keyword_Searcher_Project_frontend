import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

export default function Result({ list, setList }) {
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
        </tbody>
      </Table>
    </>
  );
}
