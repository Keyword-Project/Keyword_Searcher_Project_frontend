import CategoryBox from "../feature/filter/CategoryBox";
import OutputTable from "../feature/Output/OutputTable";
import FilterBox from "../feature/filter/FilterBox";
import { useParams } from "react-router-dom";

export default function ItemCategoryPage() {
  return (
    <div>
      <div>
        <CategoryBox />
      </div>
      <div>
        <FilterBox />
      </div>
      <p>상품 조회 결과</p>
      <OutputTable />
    </div>
  );
}
