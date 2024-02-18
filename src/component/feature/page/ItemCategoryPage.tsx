
import CategoryTable from "../../../CategoryTable";
import OutputTable from "../keywordOutput/OutputTable";
import FilterBox from "../filter/FilterBox";

export default function ItemCategoryPage() {
  return (
    <div>
      <div>
    
        <CategoryTable />
      </div>
      <div>
        <FilterBox />
      </div>
      <p>키워드 500개</p>
      <p>상품 타이틀</p>
      <OutputTable />
    </div>
  );
}
