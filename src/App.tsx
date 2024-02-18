import CategoryTable from "./CategoryTable.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import FilterBox from "./component/filter/FilterBox.tsx";
import TabTable from "./component/Tab/TabTable.tsx";
import OutputTable from "./component/keywordOutput/OutputTable.tsx";

function App() {
  return (
    <>
      <div>
        <p>탭</p>
        <TabTable />
      </div>
      <div>
        <p>카테고리</p>
        <CategoryTable />
      </div>
      <div>
        <FilterBox />
      </div>
      <p>키워드 500개</p>
      <p>상품 타이틀</p>
      <OutputTable />
    </>
  );
}

export default App;
