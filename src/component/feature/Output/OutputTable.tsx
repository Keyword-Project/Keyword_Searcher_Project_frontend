import Table from "react-bootstrap/Table";

import data from "../../../../public/dummyData/example.json";
import { useEffect, useState } from "react";

export default function OutputTable() {
  const [list, setList] = useState([]);
  useEffect(() => {
    setList(data.itemList);
  });

  const filterType = ["순위", "키워드", "판매량", "상품경쟁력", "배송방식"];

  return (
    <Table responsive>
      <thead>
        <tr>
          {filterType.map((item, index) => (
            <th key={index}>{item}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {list.map((item, idx) => {
          return (
            <tr key={idx}>
              <td>{idx + 1}</td>
              <td>
                <a href={item.dataLink}>{item.name}</a>
              </td>
              <td>{item.ratingSales}</td>
              <td>{item.totalReview}</td>
              <td>
                {item.deliveryType}
                <img src={item.rocketImg} />
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
