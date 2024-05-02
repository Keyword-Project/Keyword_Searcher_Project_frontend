import SkeletonContainer from "components/feature/result/SkeletonContainer";
import ExcelDownloader from "./ExcelDownloader";
import ResultTable from "./ResultTable";
import { SearchData } from "type/searchData";

export default function Result({
  searchData,
  isFetching,
}: {
  searchData: SearchData;
  isFetching: boolean;
}) {
  if (isFetching) return <SkeletonContainer></SkeletonContainer>;
  return (
    <>
      <ExcelDownloader searchData={searchData} />
      <ResultTable searchData={searchData} />
    </>
  );
}
