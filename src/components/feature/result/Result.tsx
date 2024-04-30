import SkeletonContainer from "components/feature/result/SkeletonContainer";
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

export default function Result({ problemData, isFetching, error }) {
  if (isFetching) return <SkeletonContainer></SkeletonContainer>;

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <ExcelDownloader problemData={problemData} />
      <ResultTable problemData={problemData} />
    </>
  );
}
