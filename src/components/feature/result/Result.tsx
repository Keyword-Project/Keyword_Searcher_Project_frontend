import { useSearchParams } from "react-router-dom";
import SpinnerBox from "components/feature/result/SpinnerBox";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ExcelDownloader from "./ExcelDownloader";
import ResultTable from "./ResultTable";
import { useEffect } from "react";

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

  if (isPending) return <SpinnerBox></SpinnerBox>;

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <div>
        <ExcelDownloader problemData={problemData} />
        <ResultTable problemData={problemData} />
      </div>
    </>
  );
}
