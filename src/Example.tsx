import { useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export default function Example() {
  const [count, setCount] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [itemName, setItemName] = useState("");
  const [startDate, setStartDate] = useState();
  const [los, setLos] = useState();

  const url = `http://localhost:3000/api/v1/keyword?q=${itemName}${
    startDate ? `&startDate=${startDate}` : ""
  }&${los ? `&los=${los}` : ""}${minPrice ? `&minPrice=${minPrice}` : ""}${
    maxPrice ? `&maxPrice=${maxPrice}` : ""
  }${count ? `&searchSize=${count}` : ""}`;

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["repoFetch"],
    queryFn: async () => {
      const res = await axios.get(url);
      console.log(res.data);
      return res.data;
    },

    refetchOnWindowFocus: false,
    enabled: false,
  });

  const handleSearch = () => {
    refetch(); // Trigger API call with new query parameters
  };

  return (
    <>
      <div>
        <input
          placeholder="상품개수"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        ></input>
        <input
          placeholder="상품 최소 가격"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        ></input>
        <input
          placeholder="상품 최대가격"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        ></input>
        <input
          placeholder="상품 이름 "
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        ></input>

        <button onClick={handleSearch} disabled={isLoading}>
          {isLoading ? "Loading..." : "Search"}
        </button>
      </div>
    </>
  );
}
