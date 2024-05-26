import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Navigate } from "react-router-dom";
import KeywordInput from "components/feature/filter/KeywordInput";
import NotFound from "components/pages/NotFound";
import SearchPage from "components/pages/SearchPage";
import Layout from "Layout";
import CategoryList from "components/feature/filter/CategoryList";

function App() {
  return (
    <>
      <Layout>
      <Routes>
          <Route path="/" element={<Navigate replace to="/categories" />} />
          <Route path="/" element={<SearchPage />}>
            <Route path="keyword" element={<KeywordInput />} />
            <Route path="categories" element={<CategoryList />}>
            <Route path=":categoryId" element={<></>} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
