import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import KeywordInput from "components/feature/filter/KeywordInput";
import NotFound from "components/page/NotFound.tsx";
import SearchPage from "components/page/SearchPage";
import CategoryFilter from "components/feature/filter/CategoryFilter";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SearchPage />}>
            <Route path="keyword" element={<KeywordInput />}></Route>
            <Route path="/category/*" element={<CategoryFilter />}></Route>
          </Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
