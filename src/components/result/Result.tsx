import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

export default function Result({ list }) {
 
  return (
    <>
      <Table responsive>
        
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
