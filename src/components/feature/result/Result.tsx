import { useSearchParams } from "react-router-dom";
import SpinnerBox from "components/feature/result/SpinnerBox";
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

export interface QueryData {
  pathName: string;
  minPrice: string;
  maxPrice: string;
  searchSize: string;
  startDate: string;
  los: string;
}

export default function Result( {problemData, isFetching, error }) {
  const [keywordObj, setKeywordObj] = useSearchParams();
  // console.log(keywordObj, "result 컴포넌트 리 렌더링 확인용");
  // console.log(queryData, 'queryData -> 도대체 뭐 떄문에 리렌더링이 나는거야 열받게')

  // setKeywordObj({
  //   q: queryData.pathName,
  //   minPrice: queryData.minPrice,
  //   maxPrice: queryData.maxPrice,
  //   searchSize: queryData.searchSize,
  //   startDate: queryData.startDate,
  //   los: queryData.los,
  // });


  if (isFetching) return <SpinnerBox></SpinnerBox>;

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <>
        <ExcelDownloader problemData={problemData} />
        <ResultTable problemData={problemData} />
      </>
    </>
  );
}
