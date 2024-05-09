import SkeletonContainer from "components/feature/result/SkeletonContainer";
import ExcelDownloader from "./ExcelDownloader";
import ResultTable from "./ResultTable";
import { SearchData } from "type/searchData";
import ErrorField from "./ErrorField";

export default function Result({
  searchData,
  isFetching,
  isError,
}: {
  searchData: SearchData;
  isFetching: boolean;
  isError: boolean;
}) {
  if (isFetching) return <SkeletonContainer></SkeletonContainer>;

  if (isError) {
    return (
      <div>
        <ErrorField />
      </div>
    );
  }
  return (
    <>
      <ExcelDownloader searchData={searchData} />
      <ResultTable searchData={searchData} />
    </>
  );
}
