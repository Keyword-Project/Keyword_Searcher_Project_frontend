import SkeletonContainer from "components/feature/result/SkeletonContainer";
import ExcelDownloader from "./ExcelDownloader";
import ResultTable from "./ResultTable";
import FetchData from "api/route";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Result({
  setResultVisible,
}: {
  setResultVisible: (value: boolean) => void;
}) {
  const { pathname } = useLocation();
  const url = new URL(window.location.href);
  const queryString = url.search;



  const apiURL = `https://ec2-43-203-122-113.ap-northeast-2.compute.amazonaws.com/api/v1${pathname}${queryString}`;

  const { error, isError, data, refetch, isFetching } = FetchData(apiURL);
  useEffect(() => {
    if(queryString) {
      refetch();
      setResultVisible(true);
    }
  }, [queryString]);


  const searchData = data;

  if (isFetching) return <SkeletonContainer />;

  if (isError) {
    throw error;
  }
  return (
    <>
    
        <>
          <ExcelDownloader searchData={searchData} />
          <ResultTable searchData={searchData} />
        </>
   
    </>
  );
}
