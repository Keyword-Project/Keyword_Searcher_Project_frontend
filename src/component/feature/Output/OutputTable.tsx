import Table from "react-bootstrap/Table";
import { Counter } from "../Counter";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchKeywordData } from "../../../api/keywordSearchApi/route";

export default function OutputTable({
  maxPrice,
  searchSize,
  minPrice,
  keywordName,
}) {
  //  const [obj, setObj] = useSearchParams();
  //  const q = obj.get("q");
  const [list, setList] = useState();

  useEffect(() => {
    async function getKeywordResult() {
      const res = await fetchKeywordData(
        keywordName,
        minPrice,
        maxPrice,
        searchSize
      );
      console.log("두 번째 응답", res);

      setList(res.data);
    }
    getKeywordResult();
    console.log("세 번째 응답", list);
  }, []);



  const filterType = ["순위", "키워드", "판매량", "상품경쟁력", "배송방식"];

  return (
    <>
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
            list.body?.map((item, idx) => {
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
      <Counter />
    </>
  );
}
