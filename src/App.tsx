import CategoryTable from "./CategoryTable.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import FilterTable from "./component/filter/FilterTable.tsx";
import TabTable from "./component/Tab/TabTable.tsx";

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
        <FilterTable />
      </div>
    </>
  );
}

export default App;
