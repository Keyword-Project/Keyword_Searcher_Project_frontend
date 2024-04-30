import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import KeywordInput from "components/feature/filter/KeywordInput";
import NotFound from "components/pages/NotFound";
import MainPage from "components/pages/MainPage";
import Layout from "Layout";
import CategoryContainer from "components/feature/filter/CategoryContainer";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<MainPage />}>
            <Route path="keyword" element={<KeywordInput />}></Route>
            <Route path="/category/*" element={<CategoryContainer />}></Route>
          </Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Layout>
    </>
  );
}

export default App;
