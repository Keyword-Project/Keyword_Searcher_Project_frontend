import SkeletonContainer from "components/feature/result/SkeletonContainer";
import ExcelDownloader from "./ExcelDownloader";
import ResultTable from "./ResultTable";
import { ResultProps } from "type/result";



export default function Result({
  searchData,
  isFetching,
  isError,
  error,
}: ResultProps) {
  if (isFetching) return <SkeletonContainer />;

  if (isError) {
    throw error;
  }
  return (
    <>
      <ExcelDownloader searchData={searchData} />
      <ResultTable searchData={searchData} />
    </>
  );
}
