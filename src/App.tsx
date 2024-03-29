import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import KeywordInput from "components/feature/filter/KeywordInput";
import NotFound from "components/page/NotFound.tsx";
import SearchPage from "components/page/SearchPage";
import CategoryFilter from "components/feature/filter/CategoryFilter";
import Layout from "Layout";




function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<SearchPage />}>
            <Route path="keyword" element={<KeywordInput />}></Route>
            <Route path="/category/*" element={<CategoryFilter />}></Route>
          </Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Layout>
    </>
  );
}

export default App;
